export const __rspack_esm_id = 731863;
export const __rspack_esm_ids = [731863];
export const __webpack_modules__ = {
    owr: (function(e, t) {
        t.a = {
            container: "container-C1xTCG",
            surface: "surface-NbxhOL",
            content: "content-tH5Jdx",
            authUpsellSurface: "authUpsellSurface-quYEPh",
            authUpsellContent: "authUpsellContent-pCNqKz",
            authUpsellCtas: "authUpsellCtas-thHpmi",
            body: "body-F1ixEW",
            visual: "visual-mZAtoS",
            iconCircle: "iconCircle-KOGKLv",
            responsiveImage: "responsiveImage-uOZ0Ay",
            copy: "copy-nj2odw",
            title: "title-TGNnMU",
            description: "description-iF4DEu",
            ctas: "ctas-dOiCY0",
            actions: "actions-nhbYt6",
            dismiss: "dismiss-o5oOqY",
            action: "action-UM7Nw_",
            primary: "primary-FmM7e1",
            secondary: "secondary-sIS2DJ",
            dismissButton: "dismissButton-dLiayh",
            mobileDismiss: "mobileDismiss-Ebj2Ia",
            composer: "composer-LGf166",
            inlineActions: "inlineActions-kYdKTO",
            noVisual: "noVisual-pjyuD6",
            desktopDismiss: "desktopDismiss-zL0l1K"
        }
    }),
    fv: (function() {}),
    KIh: (function(e, t) {
        t.a = {
            palette: "palette-CKhGNn",
            fileHoverCard: "fileHoverCard-_SxMgK",
            filePill: "filePill-w54qyB",
            connectorIcon: "connectorIcon-XtxEBs",
            connectorFallback: "connectorFallback-pFpRwt",
            questionButton: "questionButton-LdbTc0"
        }
    }),
    iX6: (function() {}),
    rP4: (function(e, t) {
        t.a = {
            floatingSurface: "floatingSurface-hRSD13",
            singleLineSurface: "singleLineSurface-Qzu7HR",
            canvasSurface: "canvasSurface-y1sr7C",
            composerRadius: "composerRadius-rwjGM5",
            floatingComposerInset: "floatingComposerInset-KDct6F"
        }
    }),
    gH: (function(e, t) {
        t.a = {
            delayedIndicator: "delayedIndicator-cocUOa",
            reveal: "reveal-wo8Ti9",
            delayedBlossom: "delayedBlossom-KOfdpr",
            fadeIn: "fadeIn-sugbzF"
        }
    }),
    Ag: (function(e, t) {
        t.a = {
            itemBase: "itemBase-Uk8vyp",
            itemInteractive: "itemInteractive-A3p9wI",
            singleLineRows: "singleLineRows-wSbEE_",
            miniIcon: "miniIcon-rOR6tX",
            hintRow: "hintRow-z1BP1_",
            glassSurface: "glassSurface-mMx9cy",
            glassSuggestionSurface: "glassSuggestionSurface-DSACy9",
            comboboxRow: "comboboxRow-gtqbEZ",
            formRows: "formRows-HUaNME",
            comboboxList: "comboboxList-hVfuIl",
            comboboxRowContent: "comboboxRowContent-Xc68cz",
            suggestionMenu: "suggestionMenu-EeXWU_",
            compactSuggestionMenu: "compactSuggestionMenu-PCnzJo",
            sectionLabel: "sectionLabel-eYGBwe",
            compactRows: "compactRows-Ivn7on",
            largeRows: "largeRows-k4VOB1",
            selectRows: "selectRows-0LxAOZ",
            insetRows: "insetRows-QwJ8Uo",
            descriptiveRows: "descriptiveRows-S2wFSd",
            actionRows: "actionRows-gFxuYF"
        }
    }),
    ce: (function(e, t) {
        t.a = {
            CompactSource: "CompactSource-d7ZD01",
            compactSource: "CompactSource-d7ZD01",
            LeadingSource: "LeadingSource-d79mNZ",
            leadingSource: "LeadingSource-d79mNZ"
        }
    }),
    ym: (function(e, t) {
        t.a = {
            toast: "toast-ZAPbYM",
            contents: "contents-gw8cdQ",
            contentCentered: "contentCentered-YBFDSd",
            alert: "alert-ZnLiYv",
            chatgptSuccess: "chatgptSuccess-lN8pcY"
        }
    }),
    j3e: (function(e, t, a) {
        let n;
        a.d(t, {
            a: () => y
        });
        var r = a("eB"),
            o = a("Fk"),
            i = a("wW"),
            l = a.n(i),
            s = a("Au"),
            d = a("Wc4"),
            c = a("Us"),
            u = a("ccs"),
            m = a("Kwu"),
            f = a("aFo"),
            p = a("Mr"),
            h = a("hw"),
            g = a("hT"),
            x = a.n(g);

        function b(e) {
            let t, a = (0, s.a)(e),
                n = new Set(a),
                r = Object.values(e.mapping),
                o = [];
            for (let t of r) {
                if (t?.message == null || n.has(t.message)) continue;
                let a = new Set,
                    r = t;
                for (;;) {
                    var i;
                    if (null != r.message && ("system" === (i = r.message).author.role || "developer" === i.author.role || "tool" === i.author.role || "model_editable_context" === i.content.content_type || "user_editable_context" === i.content.content_type || (0, s.k)(i))) {
                        o.push(t.message);
                        break
                    }
                    let n = r.parent;
                    if (null == n || a.has(n)) break;
                    a.add(n);
                    let l = e.mapping[n];
                    if (null == l) break;
                    r = l
                }
            }
            let l = new Set([...a, ...o]),
                c = new Map(Object.keys(e.mapping).map((e, t) => [e, t])),
                u = Object.keys(e.mapping).sort((t, a) => {
                    let n = e.mapping[t]?.message?.create_time,
                        r = e.mapping[a]?.message?.create_time,
                        o = (c.get(t) ?? 0) - (c.get(a) ?? 0);
                    return null != n && null != r && n - r || o
                }),
                m = new Map,
                f = [],
                p = new Map;
            for (let t of u) {
                let a = e.mapping[t],
                    n = a?.message?.metadata,
                    r = (0, d.a)(n?.parent_id ?? n?.parentId);
                p.set(t, null != r && null != e.mapping[r] ? r : a?.parent ?? null)
            }
            do {
                t = !1;
                let a = new Set;
                for (let n of u) {
                    let r = new Map,
                        o = n;
                    for (; null != o && !a.has(o);) {
                        let a = r.get(o);
                        if (null != a) {
                            for (let [n, o] of r) {
                                let r = e.mapping[n]?.parent ?? null;
                                o >= a && p.get(n) !== r && (p.set(n, r), t = !0)
                            }
                            break
                        }
                        r.set(o, r.size), o = p.get(o) ?? null
                    }
                    for (let e of r.keys()) a.add(e)
                }
            } while (t) for (let [t, a] of u.entries()) {
                let n = p.get(a);
                if (null == n || null == e.mapping[n]) f.push(t);
                else {
                    let e = m.get(n) ?? [];
                    e.push(t), m.set(n, e)
                }
            }
            let h = [],
                g = new Set;
            for (let t = 0; t < u.length; t++)
                if (!g.has(t))
                    for (0 === f.length && f.push(t); f.length > 0;) {
                        let t = f.shift();
                        if (null == t || g.has(t)) continue;
                        g.add(t);
                        let a = u[t],
                            n = e.mapping[a]?.message;
                        null != n && l.has(n) && h.push(n);
                        let r = m.get(a);
                        if (null != r)
                            for (let e of r) f.splice(x()(f, e), 0, e)
                    }
            return h
        }
        class v extends o.c {
            #e = null;
            #t = null;
            setInstantAnswerDebug(e, t) {}
            #a = null;
            setAutocompleteSelection(e, t) {}
            #n = null;
            setSuggestedAutomationRetry(e) {}
            #r = null;
            #o = null;
            #i = new Set;
            #l;
            #s;
            #d = null;
            #c = null;
            #u = l()(() => this.#m(), 100, {
                leading: !1
            });
            async runAction(e) {
                let {
                    action: t,
                    conversationId: a
                } = e, n = this.#e;
                if (null == n || n.conversationId !== a) return !1;
                switch (t) {
                    case "retry-suggested-automation":
                    case "enable-ads-events":
                    case "disable-ads-events":
                    case "select-conversation-target":
                    case "set-model-age-policy":
                    case "set-flora-overrides":
                    case "queue-icebreaker-prompts":
                    case "remove-icebreaker-prompts":
                    case "refresh-entity-sidebar":
                        return !1;
                    case "clear-trace":
                        (0, u.b)();
                        break;
                    case "download-messages": {
                        if (null != e.entityConversationId && void 0 !== e.entityConversationId) return !1;
                        let t = null == e.entityConversationId ? n.conversation : void 0;
                        if (null == t) return !1;
                        let r = e.entityConversationId ?? a,
                            o = n.scope?.get(p.j, r) ?? r,
                            i = b(t),
                            l = null == e.entityConversationId && n.isSharedConversation ? i : await m.Request.safeGet("/conversation/{conversation_id}", {
                                parameters: {
                                    path: {
                                        conversation_id: o
                                    },
                                    query: {
                                        include_full_conversation: !0
                                    }
                                },
                                additionalHeaders: null == n.scope ? void 0 : (0, h.b)(n.scope, r)
                            }).then(e => {
                                let {
                                    mapping: t
                                } = e;
                                return Object.values(t).flatMap(e => {
                                    let {
                                        message: t
                                    } = e;
                                    return null == t ? [] : [t]
                                })
                            }).catch(() => i);
                        (0, c.a)({
                            conversation: {
                                conversation_id: o,
                                messages: l
                            },
                            includeModelEditableContext: void 0,
                            filename: `messages-${o}.json`
                        });
                        break
                    }
                    case "download-trace":
                        (0, c.a)({
                            conversation: (0, u.c)(),
                            filename: "chatgpt-conversation-stream-trace.json"
                        })
                }
                return this.#u.cancel(), this.#m(), !0
            }
            clearConversation(e) {
                this.#o === e && this.setConversation(e, null)
            }
            setEntitySidebar(e, t) {
                return () => {}
            }
            setEntitySidebarConversation(e, t) {
                this.#r?.snapshot.conversationId === e && (this.#r.conversation = t, this.#u())
            }
            setConversation(e, t) {
                let a = this.#e?.conversationId !== t?.conversationId;
                (a || this.#e?.scope !== t?.scope) && (this.#d?.(), this.#d = null, this.#l = void 0, this.#s = void 0);
                let n = this.#e?.conversation;
                this.#o !== e || a || null == n || t?.conversation == null ? this.#e = t : this.#e = {
                    ...t,
                    conversation: {
                        ...t.conversation,
                        mapping: {
                            ...n.mapping,
                            ...t.conversation.mapping
                        }
                    }
                }, this.#o = e, this.#f(), 0 !== this.#i.size && (a ? (this.#u.cancel(), this.#m()) : this.#u())
            }
            async subscribe(e) {
                let t = e.dup();
                return this.#i.add(t), t.onRpcBroken(() => this.#p(t)), this.#f(), this.#m(), new w(() => this.#p(t))
            }
            #m() {
                if (0 === this.#i.size) return;
                let e = this.#e,
                    t = new Set(e?.conversation == null ? [] : (0, s.a)(e.conversation)),
                    a = null == e ? null : {
                        conversationId: e.conversationId,
                        stableConversationId: e.scope?.get(f.a, e.conversationId) ?? e.conversationId,
                        conversationSelection: void 0,
                        modelAgePolicyOverride: void 0,
                        imageAssetConversationId: e.imageAssetConversationId,
                        floraDebug: void 0,
                        ...{},
                        icebreakerDebug: void 0,
                        entitySidebar: void 0,
                        entitySidebarMessages: void 0,
                        isSharedConversation: e.isSharedConversation,
                        isTemporaryChat: e.isTemporaryChat,
                        isTppConversation: e.isTppConversation,
                        messages: null == e.conversation ? null : b(e.conversation).map((e, a) => {
                            var n, r, o, i, l, c;
                            let u, m, f, p;
                            return n = e, r = a, o = t.has(e), i = void 0, l = void 0, c = void 0, u = (0, s.o)(n.content), m = (0, s.o)(n.metadata), f = (0, s.o)(m?.__internal), p = f?.raw_tokens, {
                                authorName: (0, d.a)(n.author.name),
                                compressionFactor: "number" == typeof f?.compression_factor ? f.compression_factor : null,
                                contentType: (0, d.a)(u?.content_type),
                                createdAt: "number" == typeof n.create_time ? n.create_time : null,
                                engine: function(e) {
                                    let t = (0, d.a)(e?.s2s_vm_id);
                                    if (null != t) return t;
                                    let a = (0, s.o)((0, s.o)(e?.agent)?.settings),
                                        n = (0, d.a)(e?.completion_api_used);
                                    if (null != n && null != a)
                                        for (let [e, t] of Object.entries(a)) {
                                            let a = (0, s.o)(t);
                                            if (e.endsWith("_api") && (0, d.a)(a?.name) === n) {
                                                let e = (0, d.a)(a?.engine);
                                                if (null != e) return e
                                            }
                                        }
                                    return (0, d.a)((0, s.o)((0, s.o)(a?.completion_api))?.engine)
                                }(f),
                                experimentName: (0, d.a)(f?.model_experiment_name),
                                experimentTreatment: (0, d.a)(f?.model_experiment_treatment),
                                hasCodeModeSession: "string" == typeof f?.code_mode_session_id,
                                id: n.id ?? `${n.author.role}-${r}`,
                                imageGenerationModelId: (0, d.a)(f?.image_gen_virtual_model),
                                isOnActiveBranch: o,
                                json: JSON.stringify(null == i && null == l && null == c ? n : {
                                    ...n,
                                    metadata: null == l ? n.metadata : {
                                        ...m,
                                        __internal: {
                                            ...f,
                                            instant_answer_debug_info: {
                                                ...(0, s.o)(f?.instant_answer_debug_info),
                                                ...l
                                            }
                                        }
                                    },
                                    clientMetadata: null == i && null == c ? void 0 : {
                                        restrictedCompletionDebug: {
                                            ...null == i ? {} : {
                                                autocomplete_suggestion: {
                                                    source: "ENTITY_AUTOCOMPLETE",
                                                    canonical_entity_id: i.canonical_entity_id
                                                },
                                                entity_artifact: (0, s.o)(i)?.entity_artifact
                                            },
                                            ...null == c ? {} : {
                                                suggestedAutomationRetry: {
                                                    suggestedAutomationType: c.suggestedAutomationType,
                                                    developerMessage: c.developerMessage
                                                }
                                            }
                                        }
                                    }
                                }, null, 2),
                                modelId: (0, d.a)(f?.model_id),
                                preview: (0, s.d)(n).replace(/\s+/g, " ").trim(),
                                rawTokenCount: Array.isArray(p) ? p.length : null,
                                recipient: (0, d.a)(n.recipient),
                                requestId: (0, d.a)(m?.request_id),
                                role: n.author.role
                            }
                        }),
                        ads: void 0,
                        adsEventCaptureEnabled: void 0,
                        traceEntryCount: (0, u.d)()
                    };
                for (let e of this.#i) e(a).catch(() => this.#p(e))
            }
            #p(e) {
                this.#i.delete(e) && (e[Symbol.dispose](), this.#f())
            }
            #f() {
                if (null != this.#e && this.#i.size > 0) {
                    this.#c = this.#c ?? (0, u.a)();
                    return
                }
                this.#d?.(), this.#d = null, this.#l = void 0, this.#s = void 0, this.#u.cancel(), this.#c?.(), this.#c = null
            }
        }
        let y = new v;
        n = (0, r._)(Symbol.dispose);
        class w extends o.c {
            cleanup;
            constructor(e) {
                super(), this.cleanup = e
            }
            unsubscribe() {
                this.cleanup()
            } [n]() {
                this.unsubscribe()
            }
        }
    }),
    DYU: (function(e, t, a) {
        a.d(t, {
            a: () => d,
            b: () => c
        });
        var n = a("X6V"),
            r = a("A"),
            o = a("Qo");
        let i = (0, a("zd").lazy)(async () => ({
            default: (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(574218), a.e(355794)]).then(a.bind(a, "lF"))).DebugModal
        }));

        function l(e) {
            let t, a = (0, o.c)(2),
                {
                    onClose: n
                } = e;
            return a[0] !== n ? (t = (0, r.jsx)(i, {
                onClose: n
            }), a[0] = n, a[1] = t) : t = a[1], t
        }
        var s = a("l6s");

        function d(e) {
            let {
                section: t,
                showChildProcesses: a = !1
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            (null != t || a) && e.set(s.f, t ?? "child-processes"), (0, n.f)(e, l)
        }

        function c(e) {
            (0, n.d)(e, l) ? (0, n.b)(e, l) : d(e)
        }
    }),
    fyP: (function(e, t, a) {
        a("A");
        var n = a("Qo"),
            r = a("Xnl"),
            o = a("aM"),
            i = a("zd"),
            l = a("EF"),
            s = a("TL"),
            d = a("OW"),
            c = a("tSE"),
            u = a("RH"),
            m = a("DYU"),
            f = a("mOm");

        function p() {
            let e, t, a, p, h, g, x, b, v = (0, n.c)(11),
                y = (0, r.z)(d.a),
                w = (0, r.z)(c.a);
            v[0] === Symbol.for("react.memo_cache_sentinel") ? (e = o.lb.allowDebugMenu((0, u.a)()), v[0] = e) : e = v[0];
            let j = e;
            return v[1] !== w ? (t = () => (0, f.a)(w), a = [w], v[1] = w, v[2] = t, v[3] = a) : (t = v[2], a = v[3]), (0, i.useEffect)(t, a), v[4] !== y ? (p = () => (0, m.b)(y), v[4] = y, v[5] = p) : p = v[5], v[6] === Symbol.for("react.memo_cache_sentinel") ? (h = {
                enabled: j
            }, v[6] = h) : h = v[6], (0, l.a)("toggleDebugModal", p, h), v[7] !== y ? (g = () => {
                j && (0, m.b)(y)
            }, x = [j, y], v[7] = y, v[8] = g, v[9] = x) : (g = v[8], x = v[9]), (0, s.d)("toggle-debug-modal", g, x), v[10] === Symbol.for("react.memo_cache_sentinel") ? (b = null, v[10] = b) : b = v[10], b
        }
        a.d(t, {
            a: () => p
        })
    }),
    l6s: (function(e, t, a) {
        var n = a("Nw");
        let r = (0, n.b)("debug-panel-width", 600),
            o = (0, n.b)("debug-panel-floating-rect", null, {
                publishDelayMs: 250
            }),
            i = (0, n.b)("debug-panel-position", "right"),
            l = (0, n.b)("debug-panel-selected-section", "conversation"),
            s = (0, n.b)("debug-panel-sidebar-expanded", !1),
            d = (0, n.b)("debug-panel-pinned-sections", []);
        a.d(t, {}, {
            a: i,
            b: r,
            c: s,
            d: o,
            e: d,
            f: l
        })
    }),
    mOm: (function(e, t, a) {
        a("Xnl"), a("aM"), a("tSE"), a("kl"), a("Ex"), a("kp");
        let n = null,
            r = new Set;

        function o(e) {
            for (let t of (n = e, r)) t();
            return () => {
                if (n === e)
                    for (let e of (n = null, r)) e()
            }
        }
        a.d(t, {
            a: () => o
        })
    }),
    mJ: (function(e, t, a) {
        a.d(t, {}, {
            a: "3329591935"
        })
    }),
    i7: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("zd"),
            i = a("v7");

        function l(e) {
            let t, a, l, c, u, m = (0, r.c)(14),
                {
                    children: f,
                    container: p
                } = e;
            m[0] !== p.ownerDocument ? (t = () => {
                let e = p.ownerDocument.createElement("div");
                return e.className = "contents", e
            }, m[0] = p.ownerDocument, m[1] = t) : t = m[1];
            let [h] = (0, o.useState)(t);
            return m[2] !== p || m[3] !== h ? (a = (0, n.jsx)(s, {
                container: p,
                element: h
            }), m[2] = p, m[3] = h, m[4] = a) : a = m[4], m[5] !== h ? (l = (0, n.jsx)(d, {
                element: h
            }), m[5] = h, m[6] = l) : l = m[6], m[7] !== f || m[8] !== a || m[9] !== l ? (c = (0, n.jsxs)(n.Fragment, {
                children: [a, f, l]
            }), m[7] = f, m[8] = a, m[9] = l, m[10] = c) : c = m[10], m[11] !== h || m[12] !== c ? (u = (0, i.createPortal)(c, h), m[11] = h, m[12] = c, m[13] = u) : u = m[13], u
        }

        function s(e) {
            let t, a, n = (0, r.c)(4),
                {
                    container: i,
                    element: l
                } = e;
            return n[0] !== i || n[1] !== l ? (t = () => {
                i.appendChild(l)
            }, a = [i, l], n[0] = i, n[1] = l, n[2] = t, n[3] = a) : (t = n[2], a = n[3]), (0, o.useLayoutEffect)(t, a), null
        }

        function d(e) {
            let t, a, n = (0, r.c)(3),
                {
                    element: i
                } = e;
            return n[0] !== i ? (t = () => () => i.remove(), a = [i], n[0] = i, n[1] = t, n[2] = a) : (t = n[1], a = n[2]), (0, o.useLayoutEffect)(t, a), null
        }
        a.d(t, {
            a: () => l
        })
    }),
    TR2: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("zd"),
            l = a("Wf"),
            s = a("oy"),
            d = a("ygO"),
            c = a("HOL"),
            u = a("VL"),
            m = a("RN"),
            f = a("G57"),
            p = a("ISM"),
            h = a("S7UD"),
            g = a("QoM"),
            x = a("w2D");

        function b(e) {
            var t;
            let a, f, p, b, j, k, C, N, S, A, M, E, L, T, z, I, P = (0, r.c)(52),
                {
                    className: _,
                    actions: O,
                    label: D,
                    onError: R,
                    onLoadedMetadata: B,
                    src: F,
                    status: H,
                    title: W
                } = e,
                Q = (0, l.a)(),
                K = (0, i.useRef)(null),
                [U, q] = (0, i.useState)(0),
                [G, $] = (0, i.useState)(0),
                [V, Z] = (0, i.useState)(!1),
                X = (0, h.b)(F) ? F : void 0;
            P[0] !== R ? (f = () => R?.(), P[0] = R, P[1] = f) : f = P[1];
            let Y = (0, i.useEffectEvent)(f);
            P[2] !== X || P[3] !== Y ? (p = () => {
                let e = K.current;
                if (null != e && null != X) return (0, h.c)(e, X, () => Y())
            }, P[2] = X, P[3] = Y, P[4] = p) : p = P[4], P[5] !== X || P[6] !== H ? (b = [X, H], P[5] = X, P[6] = H, P[7] = b) : b = P[7], (0, i.useEffect)(p, b);
            let J = W || D;
            P[8] !== J ? (t = J, j = null == (a = t.match(/\.([a-z0-9]+)$/i)?.[1]) ? null : a.toUpperCase(), P[8] = J, P[9] = j) : j = P[9];
            let ee = j;
            P[10] !== J || P[11] !== Q ? (k = Q.formatMessage({
                id: "markdown.audio.play",
                defaultMessage: "Play {filename}",
                description: "Accessible label for playing an inline audio file"
            }, {
                filename: J
            }), P[10] = J, P[11] = Q, P[12] = k) : k = P[12];
            let et = k;
            P[13] !== J || P[14] !== Q ? (C = Q.formatMessage({
                id: "markdown.audio.pause",
                defaultMessage: "Pause {filename}",
                description: "Accessible label for pausing an inline audio file"
            }, {
                filename: J
            }), P[13] = J, P[14] = Q, P[15] = C) : C = P[15];
            let ea = C;
            P[16] !== J || P[17] !== Q ? (N = Q.formatMessage({
                id: "markdown.audio.seek",
                defaultMessage: "Seek in {filename}",
                description: "Accessible label for the timeline of an inline audio file"
            }, {
                filename: J
            }), P[16] = J, P[17] = Q, P[18] = N) : N = P[18];
            let en = N;
            return P[19] !== _ ? (S = (0, o.b)("w-full", _), P[19] = _, P[20] = S) : S = P[20], P[21] === Symbol.for("react.memo_cache_sentinel") ? (A = (0, n.jsx)(v, {}), P[21] = A) : A = P[21], P[22] !== ee || P[23] !== H ? (M = "ready" === H ? null == ee ? (0, n.jsx)(s.a, {
                id: "markdown.audio.fileType",
                defaultMessage: "Audio",
                description: "File type shown for an inline audio attachment"
            }) : (0, n.jsx)(s.a, {
                id: "markdown.audio.formattedFileType",
                defaultMessage: "{format} audio",
                description: "File type shown for an inline audio attachment",
                values: {
                    format: ee
                }
            }) : "loading" === H ? (0, n.jsx)(s.a, {
                id: "markdown.audio.loading",
                defaultMessage: "Loading audio…",
                description: "Loading state for an inline audio attachment"
            }) : (0, n.jsx)(s.a, {
                id: "markdown.audio.unavailable",
                defaultMessage: "Audio unavailable",
                description: "Error state for an inline audio attachment"
            }), P[22] = ee, P[23] = H, P[24] = M) : M = P[24], P[25] !== V || P[26] !== ea || P[27] !== et || P[28] !== H ? (E = "loading" === H ? (0, n.jsx)(m.a, {
                className: "icon-sm shrink-0"
            }) : "ready" === H ? (0, n.jsx)(d.a, {
                color: "secondary",
                size: "iconCircle",
                uniform: !0,
                "aria-label": V ? ea : et,
                onClick: () => {
                    let e = K.current;
                    null != e && (e.paused ? e.play().catch(() => {
                        Z(!1)
                    }) : e.pause())
                },
                children: V ? (0, n.jsx)(c.a, {
                    asset: g.a
                }) : (0, n.jsx)(c.a, {
                    asset: x.a
                })
            }) : null, P[25] = V, P[26] = ea, P[27] = et, P[28] = H, P[29] = E) : E = P[29], P[30] !== O || P[31] !== E ? (L = (0, n.jsxs)("span", {
                className: "flex shrink-0 items-center gap-1",
                children: [E, O]
            }), P[30] = O, P[31] = E, P[32] = L) : L = P[32], P[33] !== J || P[34] !== M || P[35] !== L ? (T = (0, n.jsx)(u.h, {
                icon: A,
                padding: "compact",
                title: J,
                titleTooltip: J,
                subtitle: M,
                trailing: L
            }), P[33] = J, P[34] = M, P[35] = L, P[36] = T) : T = P[36], P[37] !== U || P[38] !== X || P[39] !== G || P[40] !== D || P[41] !== R || P[42] !== B || P[43] !== en || P[44] !== F || P[45] !== H || P[46] !== W ? (z = "ready" === H && null != F ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsxs)("span", {
                    className: "flex items-center gap-2 border-t border-default px-3 py-2",
                    children: [(0, n.jsx)("input", {
                        type: "range",
                        className: "h-5 min-w-0 flex-1 cursor-interaction disabled:cursor-default disabled:opacity-40",
                        "aria-label": en,
                        disabled: G <= 0,
                        max: G > 0 ? G : 1,
                        min: 0,
                        step: .1,
                        value: Math.min(U, G > 0 ? G : 1),
                        onChange: e => {
                            let t = e.currentTarget.valueAsNumber,
                                a = K.current;
                            null != a && (a.currentTime = t, q(t))
                        }
                    }), (0, n.jsx)("span", {
                        className: "shrink-0 text-size-chat-sm text-secondary tabular-nums",
                        children: (0, n.jsx)(s.a, {
                            id: "markdown.audio.progress",
                            defaultMessage: "{currentTime} / {duration}",
                            description: "Current time and total duration for an inline audio attachment",
                            values: {
                                currentTime: w(U),
                                duration: w(G)
                            }
                        })
                    })]
                }), (0, n.jsx)("audio", {
                    ref: K,
                    className: "hidden",
                    src: null == X ? F : void 0,
                    title: W,
                    "aria-label": D,
                    controls: !0,
                    preload: "metadata",
                    onLoadedMetadata: e => B?.(e.currentTarget),
                    onDurationChange: e => {
                        $(y(e.currentTarget.duration))
                    },
                    onEnded: () => {
                        Z(!1)
                    },
                    onError: R,
                    onPause: () => {
                        Z(!1)
                    },
                    onPlay: () => {
                        Z(!0)
                    },
                    onTimeUpdate: e => {
                        q(e.currentTarget.currentTime)
                    }
                })]
            }) : null, P[37] = U, P[38] = X, P[39] = G, P[40] = D, P[41] = R, P[42] = B, P[43] = en, P[44] = F, P[45] = H, P[46] = W, P[47] = z) : z = P[47], P[48] !== T || P[49] !== z || P[50] !== S ? (I = (0, n.jsxs)(u.a, {
                as: "span",
                className: S,
                children: [T, z]
            }), P[48] = T, P[49] = z, P[50] = S, P[51] = I) : I = P[51], I
        }

        function v() {
            let e, t = (0, r.c)(1);
            return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsxs)(u.f, {
                children: [(0, n.jsx)(p.a, {
                    "aria-hidden": !0,
                    className: "size-6 dark:hidden"
                }), (0, n.jsx)(f.a, {
                    "aria-hidden": !0,
                    className: "hidden size-6 dark:block"
                })]
            }), t[0] = e) : e = t[0], e
        }

        function y(e) {
            return Number.isFinite(e) && e > 0 ? e : 0
        }

        function w(e) {
            let t = Math.max(0, Math.floor(y(e))),
                a = Math.floor(t / 60);
            return `${a}:${(t%60).toString().padStart(2,"0")}`
        }
        a.d(t, {
            a: () => b
        })
    }),
    BD: (function(e, t, a) {
        let n = ["blue", "purple", "green", "yellow", "red"];

        function r(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                a = 0;
            for (let t of e.split("__")[0]) a = (31 * a + (t.codePointAt(0) ?? 0)) % n.length;
            return n[(a + t) % n.length]
        }
        a.d(t, {
            a: () => r
        })
    }),
    L6: (function(e, t, a) {
        a.d(t, {
            a: () => j
        });
        var n = a("A"),
            r = a("Qo"),
            o = a("Ed"),
            i = a("on"),
            l = a("zd"),
            s = a("jC"),
            d = a("T1"),
            c = a("gUx");
        let u = new Map;

        function m(e) {
            let t = u.get(e);
            if (t) return t;
            let a = c.a[e],
                n = document.createElementNS("http://www.w3.org/2000/svg", "path");
            n.setAttribute("d", a.path);
            let r = new DOMMatrix(a.transform.replaceAll(" ", ", ")),
                o = n.getTotalLength(),
                i = Array.from({
                    length: 1536
                }, (e, t) => {
                    let a = r.transformPoint(n.getPointAtLength(o * t / 1536));
                    return [a.x, a.y]
                }),
                l = Array.from({
                    length: 384
                }, (e, t) => {
                    let a = t / 384 * Math.PI * 2 - Math.PI / 2,
                        n = Math.cos(a),
                        r = Math.sin(a),
                        o = 0;
                    for (let e = 0; e < i.length; e++) {
                        let t = i[e],
                            a = i[(e + 1) % i.length],
                            l = a[0] - t[0],
                            s = a[1] - t[1],
                            d = n * s - r * l;
                        if (1e-12 > Math.abs(d)) continue;
                        let c = t[0] - .5,
                            u = t[1] - .5,
                            m = (c * s - u * l) / d,
                            f = (c * r - u * n) / d;
                        m >= 0 && f >= 0 && f <= 1 && (o = Math.max(o, m))
                    }
                    return [.5 + n * o, .5 + r * o]
                });
            return u.set(e, l), l
        }

        function f(e) {
            return e.map((e, t) => {
                let [a, n] = e;
                return `${0===t?"M":"L"}${a.toFixed(6)} ${n.toFixed(6)}`
            }).join("") + "Z"
        }

        function p(e) {
            let t, a, o, i, u, p, g, x, b, v, y, w = (0, r.c)(27),
                {
                    shape: j,
                    children: k,
                    animateShape: C,
                    hovered: N
                } = e,
                S = void 0 !== C && C,
                A = void 0 !== N && N,
                M = (0, l.useId)(),
                E = (0, d.a)(),
                L = (0, l.useRef)(null),
                T = (0, l.useRef)(j),
                z = (0, l.useRef)(null),
                I = (0, l.useRef)(null);
            w[0] !== S || w[1] !== E || w[2] !== j ? (t = () => {
                let e = L.current;
                if (null == e) return;
                let t = T.current;
                T.current = j, I.current?.stop(), I.current = null, L.current?.setAttribute("transform", c.a[j].transform);
                let a = () => {
                    e.setAttribute("d", c.a[j].path), e.setAttribute("transform", c.a[j].transform), z.current = null
                };
                if (!S || E || t === j && null == z.current) return void a();
                let n = z.current ?? m(t),
                    r = m(j);
                e.removeAttribute("transform"), e.setAttribute("d", f(n));
                let o = (0, s.a)(0, 1, {
                    duration: .32,
                    ease: h,
                    onUpdate: t => {
                        let a = n.map((e, a) => [e[0] + (r[a][0] - e[0]) * t, e[1] + (r[a][1] - e[1]) * t]);
                        z.current = a, e.setAttribute("d", f(a))
                    },
                    onComplete: a
                });
                return () => o.stop()
            }, a = [j, S, E], w[0] = S, w[1] = E, w[2] = j, w[3] = t, w[4] = a) : (t = w[3], a = w[4]), (0, l.useLayoutEffect)(t, a), w[5] !== S || w[6] !== A || w[7] !== E || w[8] !== j ? (o = () => {
                if (!A || !S || E || "blossom" !== j) return;
                let e = setTimeout(() => {
                    null == I.current && (I.current = (0, s.a)(0, 360, {
                        type: "spring",
                        stiffness: 70,
                        damping: 14,
                        mass: 1,
                        restDelta: .05,
                        restSpeed: 1,
                        onUpdate: e => L.current?.setAttribute("transform", `rotate(${e} .5 .5) ${c.a[j].transform}`),
                        onComplete: () => {
                            L.current?.setAttribute("transform", c.a[j].transform), I.current = null
                        }
                    }))
                }, 1e3);
                return () => clearTimeout(e)
            }, i = [A, S, E, j], w[5] = S, w[6] = A, w[7] = E, w[8] = j, w[9] = o, w[10] = i) : (o = w[9], i = w[10]), (0, l.useEffect)(o, i), w[11] === Symbol.for("react.memo_cache_sentinel") ? (u = () => () => I.current?.stop(), p = [], w[11] = u, w[12] = p) : (u = w[11], p = w[12]), (0, l.useEffect)(u, p);
            let P = c.a[j],
                _ = c.a[j];
            w[13] !== _.transform || w[14] !== P.path ? (g = (0, n.jsx)("path", {
                ref: L,
                d: P.path,
                transform: _.transform
            }), w[13] = _.transform, w[14] = P.path, w[15] = g) : g = w[15], w[16] !== M || w[17] !== g ? (x = (0, n.jsx)("svg", {
                "aria-hidden": !0,
                className: "absolute size-0",
                focusable: "false",
                children: (0, n.jsx)("defs", {
                    children: (0, n.jsx)("clipPath", {
                        id: M,
                        clipPathUnits: "objectBoundingBox",
                        children: g
                    })
                })
            }), w[16] = M, w[17] = g, w[18] = x) : x = w[18];
            let O = `url(#${M})`;
            return w[19] !== O ? (b = {
                clipPath: O
            }, w[19] = O, w[20] = b) : b = w[20], w[21] !== k || w[22] !== b ? (v = (0, n.jsx)("span", {
                className: "relative inline-flex",
                style: b,
                children: k
            }), w[21] = k, w[22] = b, w[23] = v) : v = w[23], w[24] !== x || w[25] !== v ? (y = (0, n.jsxs)("span", {
                className: "relative inline-flex shrink-0",
                children: [x, v]
            }), w[24] = x, w[25] = v, w[26] = y) : y = w[26], y
        }

        function h(e) {
            let t = e => 1 - Math.exp(-8 * e) * (Math.cos(10 * e) + .8 * Math.sin(10 * e));
            return t(e) / t(1)
        }
        var g = a("BD"),
            x = "muted-kfECxw",
            b = "presenceOpacity-DZPmzG";
        let v = {
                badge: "size-3",
                inline: "size-4",
                xs: "icon-sm",
                response: "size-5",
                sm: "size-6",
                group: "size-7",
                md: "size-8",
                action: "size-9",
                row: "size-10",
                picker: "size-12",
                lg: "size-20",
                profile: "size-28",
                xl: "size-32",
                preview: "size-48",
                fill: "size-full"
            },
            y = {
                badge: "text-[6px] leading-none",
                inline: "text-[6px] leading-none",
                xs: "text-[10px] leading-none",
                response: "text-[10px] leading-none",
                sm: "text-xs",
                group: "text-xs",
                md: "text-sm",
                action: "text-sm",
                row: "text-sm",
                picker: "text-lg",
                lg: "text-[28px]",
                profile: "text-[40px]",
                xl: "text-[40px]",
                preview: "text-5xl",
                fill: "text-5xl"
            },
            w = {
                blue: "bg-avatar-blue",
                purple: "bg-avatar-purple",
                green: "bg-avatar-green",
                yellow: "bg-avatar-yellow",
                red: "bg-avatar-red"
            };

        function j(e) {
            let t, a, o = (0, r.c)(12);
            o[0] !== e ? (t = null == e.src ? (0, n.jsx)(C, {
                ...e
            }) : (0, n.jsx)(k, {
                ...e,
                src: e.src
            }, e.src), o[0] = e, o[1] = t) : t = o[1];
            let l = t;
            if ("none" === e.shape) {
                let t;
                return o[2] !== l || o[3] !== e.overlay || o[4] !== e.size ? (t = null == e.overlay ? l : (0, n.jsxs)("span", {
                    className: (0, i.b)("relative inline-flex shrink-0", v[e.size ?? "sm"]),
                    children: [l, e.overlay]
                }), o[2] = l, o[3] = e.overlay, o[4] = e.size, o[5] = t) : t = o[5], t
            }
            if ((null == e.shape || "circle" === e.shape) && null == e.overlay && !e.animateShape) return l;
            let s = e.shape ?? "circle";
            return o[6] !== l || o[7] !== e.animateShape || o[8] !== e.hovered || o[9] !== e.overlay || o[10] !== s ? (a = (0, n.jsxs)(p, {
                shape: s,
                animateShape: e.animateShape,
                hovered: e.hovered,
                children: [l, e.overlay]
            }), o[6] = l, o[7] = e.animateShape, o[8] = e.hovered, o[9] = e.overlay, o[10] = s, o[11] = a) : a = o[11], a
        }

        function k(e) {
            let t, a = (0, r.c)(28),
                [o, s] = (0, l.useState)("loading");
            if ("error" !== o) {
                let t, r, l, d, c, u;
                a[0] !== e.fadeIn || a[1] !== e.loadingFallback ? (t = null != e.loadingFallback || e.fadeIn ? e => {
                    e?.complete && s(e.naturalWidth > 0 ? "loaded" : "error")
                } : void 0, a[0] = e.fadeIn, a[1] = e.loadingFallback, a[2] = t) : t = a[2];
                let m = e.alt,
                    f = null != e.muted && b,
                    p = e.muted && x,
                    h = e.fadeIn && ("loaded" === o ? "loaded-NHBsVY" : "opacity-0"),
                    g = !e.animateShape && (null == e.shape || "circle" === e.shape) && "rounded-full",
                    y = v[e.size ?? "sm"];
                a[3] !== f || a[4] !== p || a[5] !== h || a[6] !== g || a[7] !== y ? (r = (0, i.b)("shrink-0 object-cover", f, p, h, g, y), a[3] = f, a[4] = p, a[5] = h, a[6] = g, a[7] = y, a[8] = r) : r = a[8];
                let w = "loading" === o && null != e.loadingFallback;
                a[9] !== e.fadeIn || a[10] !== e.loadingFallback ? (l = null != e.loadingFallback || e.fadeIn ? () => s("loaded") : void 0, a[9] = e.fadeIn, a[10] = e.loadingFallback, a[11] = l) : l = a[11], a[12] !== e ? (d = () => {
                    s("error"), e.onImageError?.()
                }, a[12] = e, a[13] = d) : d = a[13], a[14] !== e.alt || a[15] !== e.referrerPolicy || a[16] !== e.src || a[17] !== t || a[18] !== d || a[19] !== r || a[20] !== w || a[21] !== l ? (c = (0, n.jsx)("img", {
                    ref: t,
                    alt: m,
                    className: r,
                    draggable: !1,
                    hidden: w,
                    referrerPolicy: e.referrerPolicy,
                    src: e.src,
                    onLoad: l,
                    onError: d
                }), a[14] = e.alt, a[15] = e.referrerPolicy, a[16] = e.src, a[17] = t, a[18] = d, a[19] = r, a[20] = w, a[21] = l, a[22] = c) : c = a[22];
                let j = "loading" === o ? e.loadingFallback : null;
                return a[23] !== c || a[24] !== j ? (u = (0, n.jsxs)(n.Fragment, {
                    children: [c, j]
                }), a[23] = c, a[24] = j, a[25] = u) : u = a[25], u
            }
            return a[26] !== e ? (t = (0, n.jsx)(C, {
                ...e
            }), a[26] = e, a[27] = t) : t = a[27], t
        }

        function C(e) {
            let t, a, l, s, d = (0, r.c)(20),
                {
                    alt: c,
                    colorKey: u,
                    fallback: m,
                    fallbackIcon: f,
                    name: p,
                    muted: h,
                    size: j,
                    shape: k,
                    animateShape: C
                } = e,
                N = void 0 === j ? "sm" : j;
            if (null != m) return m;
            if (d[0] !== p || d[1] !== N) {
                let e = (0, o.d)(p);
                t = "badge" === N || "inline" === N || "xs" === N ? Array.from(e)[0] : e, d[0] = p, d[1] = N, d[2] = t
            } else t = d[2];
            let S = t,
                A = u || p?.trim(),
                M = A ? w[(0, g.a)(A)] : "bg-avatar-gray",
                E = !c || void 0,
                L = c || void 0,
                T = null != h && b,
                z = h && x,
                I = !(void 0 !== C && C) && "circle" === (void 0 === k ? "circle" : k) && "rounded-full",
                P = v[N],
                _ = y[N];
            d[3] !== M || d[4] !== P || d[5] !== _ || d[6] !== T || d[7] !== z || d[8] !== I ? (a = (0, i.b)("flex shrink-0 items-center justify-center font-normal text-avatar-foreground select-none", T, z, I, M, P, _), d[3] = M, d[4] = P, d[5] = _, d[6] = T, d[7] = z, d[8] = I, d[9] = a) : a = d[9];
            let O = c ? "img" : void 0;
            return d[10] !== f || d[11] !== S || d[12] !== N ? (l = f ?? ("badge" === N || "inline" === N ? (0, n.jsx)("svg", {
                "aria-hidden": !0,
                className: "size-full",
                viewBox: "0 0 12 12",
                children: (0, n.jsx)("text", {
                    x: "6",
                    y: "6",
                    dominantBaseline: "central",
                    textAnchor: "middle",
                    fill: "currentColor",
                    children: S
                })
            }) : S), d[10] = f, d[11] = S, d[12] = N, d[13] = l) : l = d[13], d[14] !== a || d[15] !== O || d[16] !== l || d[17] !== E || d[18] !== L ? (s = (0, n.jsx)("span", {
                "aria-hidden": E,
                "aria-label": L,
                className: a,
                role: O,
                children: l
            }), d[14] = a, d[15] = O, d[16] = l, d[17] = E, d[18] = L, d[19] = s) : s = d[19], s
        }
    }),
    Tjg: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on");
        let i = {
            catalog: "gap-2 rounded-full border border-subtle bg-surface px-3 py-1.5 text-sm leading-5 font-normal text-default",
            catalogDisabled: "gap-2 rounded-full border border-subtle bg-surface-tertiary px-3 py-1.5 text-sm leading-5 font-normal text-tertiary opacity-70",
            unread: "h-3.75 min-w-3.75 shrink-0 justify-center rounded-unread-badge bg-info-solid px-0.5 text-unread-badge text-(--color-text-unread-badge) tabular-nums select-none",
            default: "bg-secondary-soft text-secondary-solid rounded-sm px-2 py-1 text-sm leading-none",
            info: "bg-text-info/10 text-info rounded-sm px-2 py-1 text-sm leading-none",
            outline: "rounded-sm border border-default bg-transparent px-2 py-1 text-xs leading-none font-medium text-secondary",
            outlinePill: "h-6 rounded-full border border-subtle px-2.5 text-xs leading-4 font-semibold text-secondary",
            identity: "max-w-full min-w-0 rounded-xl border border-default px-3 py-2 text-heading-lg leading-7 font-medium wrap-anywhere text-default select-text",
            neutral: "h-7 gap-1.5 rounded-full border border-default bg-surface-secondary px-2.5 text-sm leading-none font-medium whitespace-nowrap text-secondary",
            promotion: "min-h-6 rounded-full bg-chart-purple/10 px-2.5 text-sm leading-none font-medium whitespace-nowrap text-chart-purple",
            success: "min-h-5 rounded-full bg-chart-green/15 px-2 text-xs font-medium text-chart-green tabular-nums",
            warning: "min-h-5 rounded-full bg-warning-soft-alpha px-2 text-xs font-medium text-warning-surface",
            caution: "min-h-5 rounded-full bg-yellow/15 px-2 text-xs font-medium text-yellow light:text-default",
            danger: "min-h-5 rounded-full bg-danger-soft-alpha px-2 text-xs font-medium text-danger-surface",
            tip: "min-h-5 rounded-full bg-tip-soft px-2 text-xs leading-none font-medium text-tip",
            tipInset: "min-h-5 rounded-[calc(var(--radius-2xl)-var(--spacing)*2-1px)] bg-tip-soft px-2 text-xs leading-none font-medium text-tip",
            internal: "rounded-full bg-(--color-background-internal-badge) px-2.5 py-1 text-xs font-medium text-(--color-text-internal-badge)",
            reserve: "gap-1 rounded-full bg-chart-yellow/15 px-3 py-1 text-sm leading-5 font-semibold text-chart-yellow",
            recording: "h-5 rounded-sidebar-inset bg-text-info/10 px-1.5 text-info dark:bg-text-info-soft/15 dark:text-info-soft"
        };

        function l(e) {
            let t, a, l, s = (0, r.c)(10),
                {
                    ref: d,
                    children: c,
                    className: u,
                    variant: m
                } = e,
                f = void 0 === m ? "default" : m,
                p = i[f];
            return s[0] !== u || s[1] !== p ? (t = (0, o.b)("inline-flex items-center", p, u), s[0] = u, s[1] = p, s[2] = t) : t = s[2], s[3] !== c || s[4] !== f ? (a = "unread" === f ? (0, n.jsx)("span", {
                className: "text-cap-trim",
                children: c
            }) : c, s[3] = c, s[4] = f, s[5] = a) : a = s[5], s[6] !== d || s[7] !== t || s[8] !== a ? (l = (0, n.jsx)("span", {
                ref: d,
                className: t,
                children: a
            }), s[6] = d, s[7] = t, s[8] = a, s[9] = l) : l = s[9], l
        }
        a.d(t, {
            a: () => l
        })
    }),
    X7C: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on");

        function i(e) {
            let t, a, i, l = (0, r.c)(11),
                {
                    children: s,
                    color: d,
                    borderColor: c,
                    badgeEnabled: u,
                    position: m
                } = e,
                f = void 0 === d ? "bg-text-info" : d;
            if (!(void 0 === u || u)) {
                let e;
                return l[0] !== s ? (e = (0, n.jsx)(n.Fragment, {
                    children: s
                }), l[0] = s, l[1] = e) : e = l[1], e
            }
            let p = "bottom-right" === (void 0 === m ? "top-right" : m) ? "bottom-0 translate-y-[2px]" : "top-0 translate-y-[-2px]";
            return l[2] !== c || l[3] !== f || l[4] !== p ? (t = (0, o.b)("border-surface-secondary absolute right-0 size-[7px] translate-x-[2px] rounded-full border-[1px]", p, f, c), l[2] = c, l[3] = f, l[4] = p, l[5] = t) : t = l[5], l[6] !== t ? (a = (0, n.jsx)("div", {
                className: t
            }), l[6] = t, l[7] = a) : a = l[7], l[8] !== s || l[9] !== a ? (i = (0, n.jsxs)("div", {
                className: "relative",
                children: [s, a]
            }), l[8] = s, l[9] = a, l[10] = i) : i = l[10], i
        }
        a.d(t, {
            a: () => i
        })
    }),
    VKq: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("ygO"),
            l = a("owr");

        function s(e) {
            let t, a, s, d, c, u, m = (0, r.c)(15);
            m[0] !== e ? ({
                appearance: t,
                className: a,
                uniform: d,
                ...s
            } = e, m[0] = e, m[1] = t, m[2] = a, m[3] = s, m[4] = d) : (t = m[1], a = m[2], s = m[3], d = m[4]);
            let f = "accent" === t ? "upgrade" : s.color;
            m[5] !== t || m[6] !== a || m[7] !== d ? (c = (0, o.b)(null != t && ["gap-1 rounded-full", "dismiss" === t || d ? l.a.dismissButton : l.a.action, "primary" === t && l.a.primary, "secondary" === t && l.a.secondary], a), m[5] = t, m[6] = a, m[7] = d, m[8] = c) : c = m[8];
            let p = null != t && "accent" !== t;
            return m[9] !== s || m[10] !== f || m[11] !== c || m[12] !== p || m[13] !== d ? (u = (0, n.jsx)(i.a, {
                ...s,
                color: f,
                className: c,
                unstyled: p,
                uniform: d
            }), m[9] = s, m[10] = f, m[11] = c, m[12] = p, m[13] = d, m[14] = u) : u = m[14], u
        }
        a.d(t, {
            a: () => s
        })
    }),
    zKC: (function(e, t, a) {
        a.d(t, {
            a: () => m
        });
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("ygO"),
            l = a("uWm"),
            s = a("bf"),
            d = a("mT2"),
            c = a("owr");
        let u = {
            surface: c.a.authUpsellSurface,
            content: c.a.authUpsellContent,
            ctas: c.a.authUpsellCtas
        };

        function m(e) {
            let t, a, m, f, p, h, g, x, b, v, y, w, j, k, C, N, S, A, M, E = (0, r.c)(304),
                {
                    title: L,
                    content: T,
                    customCtas: z,
                    density: I,
                    onPrimaryCtaClick: P,
                    primaryCtaText: _,
                    primaryCtaColor: O,
                    secondaryCtaColor: D,
                    onSecondaryCtaClick: R,
                    onDangerCtaClick: B,
                    secondaryCtaText: F,
                    dangerCtaText: H,
                    icon: W,
                    Icon: Q,
                    iconClassName: K,
                    isPrimaryCtaDisabled: U,
                    isSecondaryCtaDisabled: q,
                    isDangerCtaDisabled: G,
                    type: $,
                    variant: V,
                    layout: Z,
                    stackOnNarrow: X,
                    showCtaSeparator: Y,
                    wrapCtas: J,
                    ariaLive: ee,
                    role: et,
                    trailingAction: ea,
                    attachedToComposer: en
                } = e,
                er = void 0 === I ? "default" : I,
                eo = void 0 !== U && U,
                ei = void 0 !== q && q,
                el = void 0 !== G && G,
                es = void 0 === $ ? "normal" : $,
                ed = void 0 === V ? "default" : V,
                ec = void 0 === Z ? "horizontal" : Z,
                eu = void 0 !== X && X,
                em = void 0 === Y || Y,
                ef = void 0 !== J && J,
                ep = void 0 !== en && en;
            if ("composerContext" === ed) {
                let e;
                return E[0] !== ee || E[1] !== T || E[2] !== et ? (e = (0, n.jsx)("aside", {
                    className: "composerContext-WXELWW",
                    "aria-live": ee,
                    role: et,
                    children: T
                }), E[0] = ee, E[1] = T, E[2] = et, E[3] = e) : e = E[3], e
            }
            if ("recovery" === ed) {
                let e;
                return E[4] !== T || E[5] !== z || E[6] !== L ? (e = (0, n.jsx)(l.a, {
                    title: L,
                    content: T,
                    actions: z
                }), E[4] = T, E[5] = z, E[6] = L, E[7] = e) : e = E[7], e
            }
            if ("browserNotice" === ed) {
                let e, t, a, r, o;
                E[8] !== L ? (e = L ? (0, n.jsx)("div", {
                    className: "text-sm leading-5 font-medium",
                    children: L
                }) : null, E[8] = L, E[9] = e) : e = E[9];
                let i = L ? "text-xs leading-4 text-codex-description" : "text-sm leading-5";
                return E[10] !== T || E[11] !== i ? (t = (0, n.jsx)("div", {
                    className: i,
                    children: T
                }), E[10] = T, E[11] = i, E[12] = t) : t = E[12], E[13] !== e || E[14] !== t ? (a = (0, n.jsxs)("div", {
                    className: "flex min-h-9 min-w-40 flex-1 flex-col justify-center",
                    children: [e, t]
                }), E[13] = e, E[14] = t, E[15] = a) : a = E[15], E[16] !== z || E[17] !== ea ? (r = (0, n.jsxs)("div", {
                    className: "ms-auto flex shrink-0 items-center gap-1.5",
                    "data-viewer-density": "compact",
                    children: [z, ea]
                }), E[16] = z, E[17] = ea, E[18] = r) : r = E[18], E[19] !== ee || E[20] !== W || E[21] !== et || E[22] !== a || E[23] !== r ? (o = (0, n.jsxs)("aside", {
                    "aria-live": ee,
                    className: "flex w-full flex-wrap items-center gap-3 border-b border-default bg-surface p-2 text-default select-none",
                    role: et,
                    children: [W, a, r]
                }), E[19] = ee, E[20] = W, E[21] = et, E[22] = a, E[23] = r, E[24] = o) : o = E[24], o
            }
            if ("status" === ed) {
                let e, t;
                return E[25] !== T ? (e = (0, n.jsx)("div", {
                    className: "min-w-0 flex-1 break-words",
                    children: T
                }), E[25] = T, E[26] = e) : e = E[26], E[27] !== ee || E[28] !== W || E[29] !== et || E[30] !== e ? (t = (0, n.jsxs)("aside", {
                    "aria-live": ee,
                    className: "flex items-center gap-2 rounded-lg bg-secondary-soft px-3 py-3 text-sm text-default select-none",
                    role: et,
                    children: [W, e]
                }), E[27] = ee, E[28] = W, E[29] = et, E[30] = e, E[31] = t) : t = E[31], t
            }
            if ("informationNotice" === ed) {
                let e, t, a, r, o;
                return E[32] !== Q || E[33] !== W || E[34] !== K ? (e = W ?? (Q ? (0, n.jsx)(Q, {
                    className: K
                }) : null), E[32] = Q, E[33] = W, E[34] = K, E[35] = e) : e = E[35], E[36] !== L ? (t = L ? (0, n.jsx)("h3", {
                    className: "font-semibold",
                    children: L
                }) : null, E[36] = L, E[37] = t) : t = E[37], E[38] !== T ? (a = (0, n.jsx)("div", {
                    className: "text-secondary",
                    children: T
                }), E[38] = T, E[39] = a) : a = E[39], E[40] !== t || E[41] !== a ? (r = (0, n.jsxs)("div", {
                    className: "flex min-w-0 flex-1 flex-col gap-1.5 pt-0.5 break-words",
                    children: [t, a]
                }), E[40] = t, E[41] = a, E[42] = r) : r = E[42], E[43] !== ee || E[44] !== et || E[45] !== e || E[46] !== r ? (o = (0, n.jsxs)("aside", {
                    "aria-live": ee,
                    className: "flex items-start gap-3 rounded-2xl bg-secondary-soft p-4 text-sm leading-5 text-default dark:bg-surface-tertiary",
                    role: et,
                    children: [e, r]
                }), E[43] = ee, E[44] = et, E[45] = e, E[46] = r, E[47] = o) : o = E[47], o
            }
            if ("promotion" === ed) {
                let e, t, a, r, i = ea ? "px-14" : "px-4";
                return E[48] !== i ? (e = (0, o.b)("relative flex min-h-12 w-full shrink-0 items-center justify-center gap-2 bg-(--blue-500) py-3 text-center text-sm font-medium text-white select-none md:min-h-13 md:text-base", i), E[48] = i, E[49] = e) : e = E[49], E[50] !== T ? (t = (0, n.jsx)("div", {
                    className: "min-w-0 break-words",
                    children: T
                }), E[50] = T, E[51] = t) : t = E[51], E[52] !== ea ? (a = ea ? (0, n.jsx)("div", {
                    className: "absolute end-3 top-1/2 -translate-y-1/2",
                    children: ea
                }) : null, E[52] = ea, E[53] = a) : a = E[53], E[54] !== ee || E[55] !== W || E[56] !== et || E[57] !== e || E[58] !== t || E[59] !== a ? (r = (0, n.jsxs)("aside", {
                    "aria-live": ee,
                    className: e,
                    role: et,
                    children: [W, t, a]
                }), E[54] = ee, E[55] = W, E[56] = et, E[57] = e, E[58] = t, E[59] = a, E[60] = r) : r = E[60], r
            }
            if ("strip" === ed) {
                let e, t, a, r, i = "error" === es ? "bg-background-danger-surface/20 text-danger" : "bg-info-surface text-default";
                return E[61] !== i ? (e = (0, o.b)("flex min-h-11 w-full shrink-0 items-center justify-center gap-2 px-4 py-2 text-sm select-none", i), E[61] = i, E[62] = e) : e = E[62], E[63] !== L ? (t = L ? (0, n.jsxs)("span", {
                    className: "font-semibold",
                    children: [L, " "]
                }) : null, E[63] = L, E[64] = t) : t = E[64], E[65] !== T || E[66] !== t ? (a = (0, n.jsxs)("div", {
                    className: "min-w-0 text-center break-words",
                    children: [t, T]
                }), E[65] = T, E[66] = t, E[67] = a) : a = E[67], E[68] !== ee || E[69] !== W || E[70] !== et || E[71] !== e || E[72] !== a ? (r = (0, n.jsxs)("aside", {
                    "aria-live": ee,
                    className: e,
                    role: et,
                    children: [W, a]
                }), E[68] = ee, E[69] = W, E[70] = et, E[71] = e, E[72] = a, E[73] = r) : r = E[73], r
            }
            let eh = "page" === ed,
                eg = "pageNotice" === ed,
                ex = "insetNotice" === ed,
                eb = "authUpsell" === ed,
                ev = eb ? u : c.a;
            eh || ex ? t = "dialogAction" : eg && (t = "dialog");
            let ey = "callout" === ed,
                ew = "embedded" === ed,
                ej = "beacon" === ed || eb,
                ek = "privacyNotice" === ed,
                eC = eh || "catalog" === ed || "announcement" === ed || "announcementInset" === ed || "settings" === ed,
                eN = "inline" === ec,
                eS = "vertical" === ec,
                eA = "verticalIcon" === ec,
                eM = "warningCallout" === ec,
                eE = "horizontal" === ec && eu,
                eL = eM && eu;
            if (ej) a = ev.ctas;
            else {
                let e, t = ef && "min-w-0 shrink flex-wrap justify-end",
                    n = !ef && (eS ? "w-full justify-end" : "shrink-0"),
                    r = "horizontal" === ec && !eg && !ex && !eC && (ep ? "mt-0 min-w-fit" : "mt-2 min-w-fit @min-[560px]:mt-0"),
                    i = eC && "max-w-full",
                    l = "success" === es && "successCta-DS7DTt",
                    s = eM && em && "border-default border-s ps-3",
                    d = eE && !eg && !eC && "[@container_(max-width:400px)]:w-full [@container_(max-width:400px)]:shrink [@container_(max-width:400px)]:flex-wrap [@container_(max-width:400px)]:justify-center",
                    c = eL && "[@container_(max-width:400px)]:w-full [@container_(max-width:400px)]:shrink [@container_(max-width:400px)]:flex-wrap [@container_(max-width:400px)]:justify-center",
                    u = eL && em && "[@container_(max-width:400px)]:border-t [@container_(max-width:400px)]:border-s-0 [@container_(max-width:400px)]:pt-2 [@container_(max-width:400px)]:ps-0";
                E[74] !== t || E[75] !== n || E[76] !== r || E[77] !== i || E[78] !== l || E[79] !== s || E[80] !== d || E[81] !== c || E[82] !== u ? (e = (0, o.b)("flex gap-2", t, n, r, i, l, s, d, c, u), E[74] = t, E[75] = n, E[76] = r, E[77] = i, E[78] = l, E[79] = s, E[80] = d, E[81] = c, E[82] = u, E[83] = e) : e = E[83], a = e
            }
            E[84] !== ep || E[85] !== a || E[86] !== z || E[87] !== H || E[88] !== ej || E[89] !== el || E[90] !== eg || E[91] !== eo || E[92] !== ei || E[93] !== B || E[94] !== P || E[95] !== R || E[96] !== O || E[97] !== t || E[98] !== _ || E[99] !== D || E[100] !== F ? (m = z ? (0, n.jsx)(d.a, {
                value: ej && ep ? "eyebrow" : "default",
                children: (0, n.jsx)("div", {
                    className: a,
                    children: z
                })
            }) : (_ || F || H) && (0, n.jsxs)("div", {
                className: a,
                children: [_ && (0, n.jsx)(i.a, {
                    onClick: P,
                    size: t,
                    color: O ?? "outline",
                    className: "shrink-0",
                    disabled: eo,
                    children: _
                }), F && (0, n.jsx)(i.a, {
                    onClick: R,
                    size: eg ? "dialog" : void 0,
                    color: D ?? "ghost",
                    className: "shrink-0",
                    disabled: ei,
                    children: F
                }), H && (0, n.jsx)(i.a, {
                    onClick: B,
                    color: "danger",
                    className: "shrink-0",
                    disabled: el,
                    children: H
                })]
            }), E[84] = ep, E[85] = a, E[86] = z, E[87] = H, E[88] = ej, E[89] = el, E[90] = eg, E[91] = eo, E[92] = ei, E[93] = B, E[94] = P, E[95] = R, E[96] = O, E[97] = t, E[98] = _, E[99] = D, E[100] = F, E[101] = m) : m = E[101];
            let eT = m;
            if (ex) {
                let e, t;
                return E[102] !== T ? (e = (0, n.jsx)("div", {
                    className: "min-w-0 flex-1 text-secondary",
                    children: T
                }), E[102] = T, E[103] = e) : e = E[103], E[104] !== ee || E[105] !== eT || E[106] !== et || E[107] !== e || E[108] !== ea ? (t = (0, n.jsxs)("aside", {
                    "aria-live": ee,
                    role: et,
                    className: "flex w-full flex-wrap items-center gap-4 rounded-xl bg-secondary-soft px-4 py-3 text-sm text-default select-none",
                    children: [e, eT, ea]
                }), E[104] = ee, E[105] = eT, E[106] = et, E[107] = e, E[108] = ea, E[109] = t) : t = E[109], t
            }
            if (eh) {
                let e, t, a, r, o, i, l, s;
                return E[110] !== Q || E[111] !== W || E[112] !== K ? (e = W ?? (Q ? (0, n.jsx)(Q, {
                    className: K
                }) : null), E[110] = Q, E[111] = W, E[112] = K, E[113] = e) : e = E[113], E[114] !== e ? (t = (0, n.jsx)("div", {
                    className: "hidden shrink-0 text-warning md:block",
                    children: e
                }), E[114] = e, E[115] = t) : t = E[115], E[116] !== L ? (a = (0, n.jsx)("div", {
                    className: "text-lg font-semibold",
                    children: L
                }), E[116] = L, E[117] = a) : a = E[117], E[118] !== t || E[119] !== a ? (r = (0, n.jsxs)("div", {
                    className: "flex items-center gap-4",
                    children: [t, a]
                }), E[118] = t, E[119] = a, E[120] = r) : r = E[120], E[121] !== T ? (o = (0, n.jsx)("div", {
                    className: "text-base md:ms-8",
                    children: T
                }), E[121] = T, E[122] = o) : o = E[122], E[123] !== r || E[124] !== o ? (i = (0, n.jsxs)("div", {
                    className: "mx-2 min-w-0 grow md:mx-4",
                    children: [r, o]
                }), E[123] = r, E[124] = o, E[125] = i) : i = E[125], E[126] !== eT || E[127] !== i || E[128] !== ea ? (l = (0, n.jsxs)("div", {
                    className: "mx-auto flex w-full max-w-4xl items-center justify-between gap-4 px-2 py-4 md:px-6 lg:py-6",
                    children: [i, eT, ea]
                }), E[126] = eT, E[127] = i, E[128] = ea, E[129] = l) : l = E[129], E[130] !== ee || E[131] !== et || E[132] !== l ? (s = (0, n.jsx)("aside", {
                    "aria-live": ee,
                    role: et,
                    className: "w-full shrink-0 bg-surface-tertiary text-default select-none",
                    children: l
                }), E[130] = ee, E[131] = et, E[132] = l, E[133] = s) : s = E[133], s
            }
            if (eg) {
                let e, t, a, r, i, l = "infoAccent" === es ? "border-text-info/40 bg-info-surface" : "border-default bg-surface";
                E[134] !== l ? (e = (0, o.b)("flex min-h-13 w-full flex-wrap items-center gap-2 border-b px-5 py-2 text-sm text-default select-none md:flex-nowrap", l), E[134] = l, E[135] = e) : e = E[135], E[136] !== Q || E[137] !== W ? (t = W ?? (Q ? (0, n.jsx)(Q, {}) : null), E[136] = Q, E[137] = W, E[138] = t) : t = E[138];
                let s = !eE && "md:truncate";
                return E[139] !== s ? (a = (0, o.b)("min-w-0 flex-1 leading-5", s), E[139] = s, E[140] = a) : a = E[140], E[141] !== T || E[142] !== a ? (r = (0, n.jsx)("div", {
                    className: a,
                    children: T
                }), E[141] = T, E[142] = a, E[143] = r) : r = E[143], E[144] !== ee || E[145] !== eT || E[146] !== et || E[147] !== e || E[148] !== t || E[149] !== r || E[150] !== ea ? (i = (0, n.jsxs)("aside", {
                    "aria-live": ee,
                    role: et,
                    className: e,
                    children: [t, r, eT, ea]
                }), E[144] = ee, E[145] = eT, E[146] = et, E[147] = e, E[148] = t, E[149] = r, E[150] = ea, E[151] = i) : i = E[151], i
            }
            if (ek) {
                let e, t, a, r, i;
                E[152] !== Q || E[153] !== W || E[154] !== K ? (e = W ?? (Q ? (0, n.jsx)(Q, {
                    className: (0, o.b)("text-secondary", K)
                }) : (0, n.jsx)(s.ee, {
                    className: (0, o.b)("text-secondary", K)
                })), E[152] = Q, E[153] = W, E[154] = K, E[155] = e) : e = E[155];
                let l = e;
                return E[156] !== L ? (t = L ? (0, n.jsx)("div", {
                    className: "text-xs font-medium text-default",
                    children: L
                }) : null, E[156] = L, E[157] = t) : t = E[157], E[158] !== T ? (a = (0, n.jsx)("div", {
                    className: "text-xs text-secondary",
                    children: T
                }), E[158] = T, E[159] = a) : a = E[159], E[160] !== eT || E[161] !== t || E[162] !== a ? (r = (0, n.jsxs)("div", {
                    className: "flex min-w-0 flex-1 flex-col",
                    children: [t, a, eT]
                }), E[160] = eT, E[161] = t, E[162] = a, E[163] = r) : r = E[163], E[164] !== ee || E[165] !== l || E[166] !== et || E[167] !== r || E[168] !== ea ? (i = (0, n.jsxs)("aside", {
                    "aria-live": ee,
                    className: "flex items-center gap-3 rounded-xl bg-background-secondary-soft-alpha p-3 select-none",
                    role: et,
                    children: [l, r, ea]
                }), E[164] = ee, E[165] = l, E[166] = et, E[167] = r, E[168] = ea, E[169] = i) : i = E[169], i
            }
            if (ej) {
                let e, t, a, r, i, l, s = ep && c.a.composer;
                return E[170] !== s ? (e = (0, o.b)(c.a.container, s), E[170] = s, E[171] = e) : e = E[171], E[172] !== T || E[173] !== L ? (t = null == L ? T : (0, n.jsx)("div", {
                    className: (0, o.b)(c.a.body, c.a.noVisual),
                    children: (0, n.jsxs)("div", {
                        className: c.a.copy,
                        children: [(0, n.jsx)("h3", {
                            className: c.a.title,
                            children: L
                        }), (0, n.jsx)("div", {
                            className: c.a.description,
                            children: T
                        })]
                    })
                }), E[172] = T, E[173] = L, E[174] = t) : t = E[174], E[175] !== ev.content || E[176] !== t ? (a = (0, n.jsx)("div", {
                    className: ev.content,
                    children: t
                }), E[175] = ev.content, E[176] = t, E[177] = a) : a = E[177], E[178] !== ea ? (r = ea ? (0, n.jsx)("div", {
                    className: c.a.dismiss,
                    children: ea
                }) : null, E[178] = ea, E[179] = r) : r = E[179], E[180] !== ee || E[181] !== ev.surface || E[182] !== eT || E[183] !== et || E[184] !== a || E[185] !== r ? (i = (0, n.jsxs)("aside", {
                    "aria-live": ee,
                    className: ev.surface,
                    role: et,
                    children: [a, eT, r]
                }), E[180] = ee, E[181] = ev.surface, E[182] = eT, E[183] = et, E[184] = a, E[185] = r, E[186] = i) : i = E[186], E[187] !== e || E[188] !== i ? (l = (0, n.jsx)("div", {
                    className: e,
                    children: i
                }), E[187] = e, E[188] = i, E[189] = l) : l = E[189], l
            }
            if (E[190] !== Q || E[191] !== ee || E[192] !== ep || E[193] !== T || E[194] !== eT || E[195] !== er || E[196] !== W || E[197] !== K || E[198] !== eC || E[199] !== ey || E[200] !== ew || E[201] !== eN || E[202] !== eS || E[203] !== eA || E[204] !== eM || E[205] !== et || E[206] !== eL || E[207] !== L || E[208] !== es || E[209] !== ed) {
                k = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, t, a, r, i, l, s = {
                            caution: "border-default text-default",
                            error: "border-text-danger/20 text-danger",
                            infoAccent: "border-text-info/40 text-default",
                            normal: (0, o.b)("text-default", ey && "border-strong", "settings" === ed && "border-default", !ey && "settings" !== ed && "border-primary-outline"),
                            success: "border-chart-green/30 text-chart-green",
                            warning: "border-text-warning/30 text-default"
                        } [es],
                        d = ep ? "bg-surface-tertiary" : "bg-transparent";
                    if (E[221] !== Q || E[222] !== W || E[223] !== K || E[224] !== eC || E[225] !== ey || E[226] !== eM || E[227] !== d || E[228] !== es || E[229] !== ed) {
                        let r, i, l = {
                                caution: "bg-background-caution-solid/15",
                                error: "bg-background-danger-surface/20",
                                infoAccent: "bg-primary-soft",
                                normal: {
                                    callout: "bg-callout-surface",
                                    announcement: "bg-surface-elevated",
                                    catalog: "bg-surface-elevated",
                                    announcementInset: "bg-surface-tertiary",
                                    settings: "bg-surface",
                                    embedded: "bg-transparent",
                                    default: d
                                } [ed],
                                success: "bg-chart-green/15",
                                warning: eM ? "bg-background-warning-surface/15" : "bg-background-warning-surface/30"
                            } [es],
                            s = !ey && !eC && "icon-sm shrink-0",
                            c = eC && "icon-md shrink-0 text-secondary",
                            u = "infoAccent" === es && "text-info",
                            m = "success" === es && "text-chart-green",
                            f = "warning" === es && "text-warning";
                        E[233] !== K || E[234] !== s || E[235] !== c || E[236] !== u || E[237] !== m || E[238] !== f ? (r = (0, o.b)(s, c, u, m, f, K), E[233] = K, E[234] = s, E[235] = c, E[236] = u, E[237] = m, E[238] = f, E[239] = r) : r = E[239];
                        let p = r;
                        E[240] !== Q || E[241] !== W || E[242] !== p ? (i = W ?? (Q ? (0, n.jsx)(Q, {
                            className: p
                        }) : null), E[240] = Q, E[241] = W, E[242] = p, E[243] = i) : i = E[243], e = i, t = !0, a = (0, o.b)("absolute inset-0 -z-10", l), E[221] = Q, E[222] = W, E[223] = K, E[224] = eC, E[225] = ey, E[226] = eM, E[227] = d, E[228] = es, E[229] = ed, E[230] = e, E[231] = t, E[232] = a
                    } else e = E[230],
                    t = E[231],
                    a = E[232];E[244] !== t || E[245] !== a ? (r = (0, n.jsx)("div", {
                        "aria-hidden": t,
                        className: a
                    }), E[244] = t, E[245] = a, E[246] = r) : r = E[246];
                    let c = r,
                        u = (0, o.b)("relative isolate flex w-full overflow-hidden", ew ? "bg-transparent" : "bg-surface", "catalog" !== ed && !ew && "border", !eC && "text-pretty", "catalog" === ed && "text-document leading-5", "catalog" !== ed && ("announcementInset" === ed ? "text-base" : "text-sm"), {
                            callout: "rounded-md px-4 py-3",
                            announcement: "rounded-3xl px-5 py-4 shadow-xs",
                            catalog: (0, o.b)("px-5 py-4", "catalog-Qac5fp"),
                            announcementInset: "rounded-3xl px-5 py-4 shadow-xs",
                            settings: "rounded-2xl py-4 ps-5 pe-3",
                            embedded: "py-4 ps-5 pe-3",
                            default: (0, o.b)("shadow-[0_0_2px_0_rgb(0_0_0/5%),0_4px_6px_0_rgb(0_0_0/2%)] lg:mx-auto", ep ? "-mb-9 rounded-t-[32px] rounded-b-none border-b-0 ps-4 pe-2.5 pt-2.5 pb-9 electron:border electron:border-b-0" : (0, o.b)("rounded-3xl electron:border-0 electron:ring-[0.5px] electron:ring-border-strong", "compact" === er ? "py-2 ps-3 pe-2" : "py-4 ps-5 pe-3"))
                        } [ed], s, eM && "warning" === es && "before:bg-text-warning/60 before:absolute before:inset-y-0 before:start-0 before:w-0.5");E[247] === Symbol.for("react.memo_cache_sentinel") ? (i = {
                        announcementInset: "text-base font-semibold",
                        announcement: "text-sm font-medium",
                        catalog: "text-document leading-5 font-medium",
                        settings: "text-sm font-medium",
                        callout: "text-sm font-medium",
                        embedded: "text-sm font-bold",
                        default: "text-sm font-bold"
                    }, E[247] = i) : i = E[247];
                    let m = i[ed],
                        C = ey ? "gap-1" : "gap-1.5",
                        N = ey || eC || eM || ep ? "text-secondary" : "text-codex-description";
                    "error" === es ? N = "text-danger" : "success" === es && (N = "text-chart-green"),
                    E[248] !== e || E[249] !== L || E[250] !== m ? (l = () => (0, n.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [e, L && (0, n.jsx)("h3", {
                            className: m,
                            children: L
                        })]
                    }), E[248] = e, E[249] = L, E[250] = m, E[251] = l) : l = E[251];
                    let S = l,
                        A = e => (0, n.jsx)("div", {
                            className: (0, o.b)("flex min-w-0 flex-1 flex-col", e),
                            children: (0, n.jsx)("div", {
                                className: (0, o.b)("min-w-0 flex-1", eN && "truncate", !ey && !eC && "electron:leading-relaxed", eC && "leading-5", ("announcement" === ed || "catalog" === ed || "settings" === ed) && "tracking-announcement-body", !ey && !eC && !eN && "text-pretty", (L || ep) && N),
                                children: T
                            })
                        });
                    if (eS) {
                        let t;
                        E[252] !== e || E[253] !== S || E[254] !== L ? (t = (e ?? L) && S(), E[252] = e, E[253] = S, E[254] = L, E[255] = t) : t = E[255], k = (0, n.jsxs)("aside", {
                            "aria-live": ee,
                            className: (0, o.b)(u, "flex-col", C),
                            role: et,
                            children: [c, t, A(C), eT]
                        });
                        break e
                    }
                    if (eA) {
                        let t, a, r, i = (0, o.b)(u, "gap-3", (ey || "settings" === ed) && "items-start");
                        E[256] !== ey || E[257] !== e || E[258] !== ed ? (t = null != e ? (0, n.jsx)("div", {
                            className: ey || "settings" === ed ? "flex h-lh items-center" : "flex items-center self-center",
                            children: e
                        }) : null, E[256] = ey, E[257] = e, E[258] = ed, E[259] = t) : t = E[259], E[260] !== C ? (a = (0, o.b)("flex min-w-0 flex-1 flex-col", C), E[260] = C, E[261] = a) : a = E[261], E[262] !== L || E[263] !== m ? (r = L ? (0, n.jsx)("h3", {
                            className: m,
                            children: L
                        }) : null, E[262] = L, E[263] = m, E[264] = r) : r = E[264], k = (0, n.jsxs)("aside", {
                            "aria-live": ee,
                            className: i,
                            role: et,
                            children: [c, t, (0, n.jsxs)("div", {
                                className: a,
                                children: [r, A(), eT]
                            })]
                        });
                        break e
                    }
                    if (eM) {
                        let t;
                        E[265] !== L ? (t = L && (0, n.jsx)("h3", {
                            className: "text-sm font-semibold text-pretty",
                            children: L
                        }), E[265] = L, E[266] = t) : t = E[266], k = (0, n.jsx)("div", {
                            className: "@container w-full",
                            children: (0, n.jsxs)("aside", {
                                "aria-live": ee,
                                className: (0, o.b)(u, "items-center gap-3", eL && "[@container_(max-width:400px)]:flex-wrap [@container_(max-width:400px)]:items-start [@container_(max-width:400px)]:gap-2"),
                                role: et,
                                children: [c, e, (0, n.jsxs)("div", {
                                    className: "flex min-w-0 flex-1 flex-col gap-0.5",
                                    children: [t, A()]
                                }), eT]
                            })
                        });
                        break e
                    }
                    v = ee,
                    y = (0, o.b)(u, "@container items-start gap-4"),
                    w = et,
                    j = c;
                    let M = eC ? "items-center" : "items-start @min-[560px]:items-center";E[267] !== M ? (x = (0, o.b)("flex h-full w-full gap-3", M), E[267] = M, E[268] = x) : x = E[268],
                    E[269] !== eC || E[270] !== e ? (b = null != e && (0, n.jsx)("div", {
                        className: (0, o.b)("flex items-start", !eC && "pt-0.5"),
                        children: e
                    }), E[269] = eC, E[270] = e, E[271] = b) : b = E[271];
                    let z = eN && "items-center justify-between gap-3",
                        I = !eN && eC && "flex-wrap items-center gap-x-8 gap-y-3",
                        P = !eN && !eC && "flex-col",
                        _ = !eN && !eC && ep && "@min-[400px]:flex-row @min-[400px]:items-start @min-[400px]:justify-between @min-[400px]:gap-3",
                        O = !eN && !eC && !ep && "@min-[560px]:flex-row @min-[560px]:items-center @min-[560px]:justify-between @min-[560px]:gap-8";E[272] !== z || E[273] !== I || E[274] !== P || E[275] !== _ || E[276] !== O ? (g = (0, o.b)("flex min-w-0 grow", z, I, P, _, O), E[272] = z, E[273] = I, E[274] = P, E[275] = _, E[276] = O, E[277] = g) : g = E[277];
                    let D = eC ? "grow basis-64 wrap-break-word" : "flex-1";E[278] !== D ? (f = (0, o.b)("flex min-w-0 flex-col", D), E[278] = D, E[279] = f) : f = E[279],
                    E[280] !== L || E[281] !== m ? (p = L && (0, n.jsx)("h3", {
                        className: m,
                        children: L
                    }), E[280] = L, E[281] = m, E[282] = p) : p = E[282],
                    h = A()
                }
                E[190] = Q, E[191] = ee, E[192] = ep, E[193] = T, E[194] = eT, E[195] = er, E[196] = W, E[197] = K, E[198] = eC, E[199] = ey, E[200] = ew, E[201] = eN, E[202] = eS, E[203] = eA, E[204] = eM, E[205] = et, E[206] = eL, E[207] = L, E[208] = es, E[209] = ed, E[210] = f, E[211] = p, E[212] = h, E[213] = g, E[214] = x, E[215] = b, E[216] = v, E[217] = y, E[218] = w, E[219] = j, E[220] = k
            } else f = E[210], p = E[211], h = E[212], g = E[213], x = E[214], b = E[215], v = E[216], y = E[217], w = E[218], j = E[219], k = E[220];
            return k !== Symbol.for("react.early_return_sentinel") ? k : (E[283] !== f || E[284] !== p || E[285] !== h ? (C = (0, n.jsxs)("div", {
                className: f,
                children: [p, h]
            }), E[283] = f, E[284] = p, E[285] = h, E[286] = C) : C = E[286], E[287] !== eT || E[288] !== g || E[289] !== C ? (N = (0, n.jsxs)("div", {
                className: g,
                children: [C, eT]
            }), E[287] = eT, E[288] = g, E[289] = C, E[290] = N) : N = E[290], E[291] !== x || E[292] !== b || E[293] !== N ? (S = (0, n.jsxs)("div", {
                className: x,
                children: [b, N]
            }), E[291] = x, E[292] = b, E[293] = N, E[294] = S) : S = E[294], E[295] !== ea ? (A = ea ? (0, n.jsx)("div", {
                className: "flex shrink-0 items-start @min-[560px]:self-center",
                children: ea
            }) : null, E[295] = ea, E[296] = A) : A = E[296], E[297] !== v || E[298] !== y || E[299] !== w || E[300] !== j || E[301] !== S || E[302] !== A ? (M = (0, n.jsxs)("aside", {
                "aria-live": v,
                className: y,
                role: w,
                children: [j, S, A]
            }), E[297] = v, E[298] = y, E[299] = w, E[300] = j, E[301] = S, E[302] = A, E[303] = M) : M = E[303], M)
        }
    }),
    WAw: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo");
        let o = (0, a("kb").a)();

        function i(e) {
            let t, a, i, l, s, d = (0, r.c)(11),
                {
                    children: c
                } = e;
            if ("string" != typeof c) {
                let e;
                return d[0] !== c ? (e = (0, n.jsx)(n.Fragment, {
                    children: c
                }), d[0] = c, d[1] = e) : e = d[1], e
            }
            if (d[2] !== c) {
                i = Symbol.for("react.early_return_sentinel");
                e: {
                    let e = function(e) {
                        let t = null,
                            a = null,
                            n = 0,
                            r = 0;
                        for (let i of e) {
                            let e = o.getBidiCharTypeName(i),
                                l = "R" === e || "AL" === e ? "rtl" : "L" === e || "EN" === e || "AN" === e ? "ltr" : null;
                            null == t && ("L" === e || "R" === e || "AL" === e) && (t = l), r += i.length, (l === t || a === t && ("WS" === e || "B" === e || "S" === e)) && (n = r), a = l ?? a
                        }
                        return null == t || a === t ? null : n
                    }(c);
                    if (null == e) {
                        i = (0, n.jsx)("span", {
                            children: c
                        });
                        break e
                    }
                    a = (0, n.jsx)("span", {
                        children: c.slice(0, e)
                    }),
                    t = c.slice(e)
                }
                d[2] = c, d[3] = t, d[4] = a, d[5] = i
            } else t = d[3], a = d[4], i = d[5];
            return i !== Symbol.for("react.early_return_sentinel") ? i : (d[6] !== t ? (l = (0, n.jsx)("bdi", {
                children: t
            }), d[6] = t, d[7] = l) : l = d[7], d[8] !== a || d[9] !== l ? (s = (0, n.jsxs)(n.Fragment, {
                children: [a, l]
            }), d[8] = a, d[9] = l, d[10] = s) : s = d[10], s)
        }
        a.d(t, {
            a: () => i
        })
    }),
    psL: (function(e, t, a) {
        a.d(t, {
            a: () => i
        });
        var n = a("A"),
            r = a("Qo"),
            o = a("on");

        function i(e) {
            let t, a, i, l, s, d, c = (0, r.c)(12);
            c[0] !== e ? ({
                className: t,
                joined: i,
                variant: l,
                ...a
            } = e, c[0] = e, c[1] = t, c[2] = a, c[3] = i, c[4] = l) : (t = c[1], a = c[2], i = c[3], l = c[4]);
            let u = (void 0 === i || i) && "joined-PsQ4vh",
                m = "composer" === (void 0 === l ? "default" : l) && "min-w-0 rounded-full has-[button[data-state=open]]:bg-primary-ghost-hover has-[button[aria-haspopup=menu]:hover]:bg-primary-ghost-hover [&>button:not(:first-child)]:ps-0 [&>:not(:first-child)_button]:ps-0";
            return c[5] !== t || c[6] !== u || c[7] !== m ? (s = (0, o.b)("flex items-center", u, m, t), c[5] = t, c[6] = u, c[7] = m, c[8] = s) : s = c[8], c[9] !== a || c[10] !== s ? (d = (0, n.jsx)("div", {
                className: s,
                ...a
            }), c[9] = a, c[10] = s, c[11] = d) : d = c[11], d
        }
    }),
    L4: (function(e, t, a) {
        a.d(t, {}, {
            a: {
                catalogAction: "rounded-full",
                catalogBack: "rounded-lg",
                onboardingAction: "rounded-full",
                activityOption: "rounded-full",
                auth: "rounded-full",
                authUpsell: "rounded-full",
                giftCard: "rounded-full",
                compact: "rounded-button-action",
                cardAction: "rounded-full",
                default: "rounded-full",
                secondaryAction: "rounded-full",
                actionSm: "rounded-full",
                sidebarOffer: "rounded-full",
                dialog: "rounded-full",
                dialogAction: "rounded-full",
                formAction: "rounded-full",
                entityAction: "rounded-full",
                responsiveDialogAction: "rounded-full",
                modalPrimary: "rounded-full",
                pageAction: "rounded-full",
                addAction: "rounded-full",
                formDisclosure: "rounded-xl",
                formValue: "rounded-md",
                recoveryAction: "rounded-full",
                panelAction: "rounded-full",
                detailAction: "rounded-full",
                setupAction: "rounded-full",
                beaconAction: "rounded-full",
                responsiveBeaconAction: "rounded-full",
                expressiveBeaconAction: "rounded-full",
                takeoverHeroAction: "rounded-full",
                promotionalAction: "rounded-full",
                promotionalLink: "rounded-full",
                workNux: "rounded-full",
                workPopover: "rounded-full",
                beaconCarousel: "rounded-full",
                conversationFollowup: "rounded-full",
                conversationPill: "rounded-full",
                conversationPillAction: "rounded-full",
                actionChip: "rounded-full",
                actionChipWithIcon: "rounded-full",
                paginationDot: "rounded-full",
                dialogGhost: "rounded-button-action",
                messageChip: "rounded-button-action",
                avatarGroup: "rounded-full",
                avatarGroupAction: "rounded-full",
                entityHeader: "rounded-xl",
                entityRowAction: "rounded-full",
                dragHandle: "rounded-lg",
                formatToolbar: "rounded-md",
                formatToolbarIcon: "rounded-md",
                field: "rounded-lg",
                fieldControl: "rounded-none",
                fieldSegment: "rounded-lg",
                icon: "rounded-full electron:rounded-md",
                iconCircle: "rounded-full",
                iconCircleLg: "rounded-full",
                iconTouch: "rounded-full",
                iconCircleSm: "rounded-full",
                iconLarge: "rounded-2xl",
                iconMd: "rounded-md",
                iconSm: "rounded-md",
                inputSegment: "rounded-none",
                inputSelect: "rounded-none",
                inputControl: "rounded-xl",
                formField: "rounded-lg",
                imageToolbar: "rounded-full",
                imageAction: "rounded-lg",
                imageActionIcon: "rounded-full",
                floatingAction: "rounded-full",
                inline: "rounded-none",
                inputIcon: "rounded-s-lg rounded-e-none",
                large: "rounded-full",
                medium: "rounded-button-action",
                menuRow: "rounded-lg",
                settingsSelect: "rounded-md",
                settingsOption: "rounded-lg",
                settingsAction: "rounded-button-action",
                composer: "rounded-full",
                composerDictation: "rounded-full",
                composerWithBadge: "rounded-full",
                composerPill: "rounded-full",
                composerAuxiliary: "rounded-full",
                composerPermissions: "rounded-full",
                composerSm: "rounded-full",
                composerSmLabel: "rounded-full",
                shareDestination: "rounded-full",
                surveyOption: "rounded-lg",
                surveyCard: "rounded-xl",
                selectionTile: "rounded-xl",
                imageTile: "rounded-xl",
                tabStripAction: "rounded-lg",
                toolbar: "rounded-button-toolbar",
                toolbarLabel: "rounded-lg",
                headerUpsell: "rounded-lg"
            }
        })
    }),
    ygO: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("zd"),
            l = a("HZ"),
            s = a("L4"),
            d = a("RN");
        a("fv");
        let c = {
                limited: "relative border-transparent text-tertiary not-disabled:not-aria-disabled:hover:bg-primary-ghost-hover data-[state=open]:bg-primary-ghost-hover",
                activity: "border-transparent bg-activity-control text-activity-control not-disabled:not-aria-disabled:hover:bg-activity-control-hover not-disabled:not-aria-disabled:hover:text-activity-control-active not-disabled:not-aria-disabled:data-[native-hovered=true]:bg-activity-control-hover not-disabled:not-aria-disabled:data-[native-hovered=true]:text-activity-control-active aria-pressed:bg-activity-control-hover aria-pressed:text-activity-control-active",
                activityStop: "border-transparent bg-activity-control text-activity-control not-disabled:not-aria-disabled:hover:bg-activity-stop-hover not-disabled:not-aria-disabled:hover:text-activity-control-active not-disabled:not-aria-disabled:data-[native-hovered=true]:bg-activity-stop-hover not-disabled:not-aria-disabled:data-[native-hovered=true]:text-activity-control-active",
                activitySuccess: "border-transparent bg-[light-dark(var(--green-50),var(--green-900))] text-[color:light-dark(var(--green-400),var(--green-300))] not-disabled:not-aria-disabled:hover:bg-[light-dark(var(--green-300),var(--green-500))] not-disabled:not-aria-disabled:hover:text-white not-disabled:not-aria-disabled:data-[native-hovered=true]:bg-[light-dark(var(--green-300),var(--green-500))] not-disabled:not-aria-disabled:data-[native-hovered=true]:text-white",
                accent: "bg-info-solid not-disabled:not-aria-disabled:hover:bg-info-solid/90 data-[state=open]:bg-info-solid/90 text-info-solid border-transparent",
                accentAction: "bg-accent-action not-disabled:not-aria-disabled:hover:bg-accent-action/90 data-[state=open]:bg-accent-action/90 text-accent-action border-transparent",
                accentInverse: "bg-info-solid not-disabled:not-aria-disabled:hover:bg-info-solid/90 data-[state=open]:bg-info-solid/90 text-inverse border-transparent",
                accentSubtle: "bg-text-info/10 not-disabled:not-aria-disabled:hover:bg-text-info/15 data-[state=open]:bg-text-info/15 text-info border-transparent",
                conversationAccentSubtle: "bg-[var(--conversation-accent,var(--color-text-info))]/10 not-disabled:not-aria-disabled:hover:bg-[var(--conversation-accent,var(--color-text-info))]/15 data-[state=open]:bg-[var(--conversation-accent,var(--color-text-info))]/15 text-[color:var(--conversation-accent-text,var(--color-text-info))] border-transparent",
                headerUpgrade: "border-transparent bg-transparent text-text-header-upgrade not-disabled:not-aria-disabled:hover:bg-background-header-upgrade-hover focus-visible:bg-background-header-upgrade-hover data-[state=open]:bg-background-header-upgrade-hover",
                upgrade: "border-transparent bg-[light-dark(var(--blue-a25),--alpha(var(--blue-100)/15%))] text-[color:light-dark(var(--blue-500),var(--blue-50))] not-disabled:not-aria-disabled:hover:bg-[light-dark(--alpha(var(--blue-400)/9%),--alpha(var(--blue-100)/20%))] data-[state=open]:bg-[light-dark(--alpha(var(--blue-400)/9%),--alpha(var(--blue-100)/20%))]",
                upgradeAccent: "border-transparent bg-[light-dark(--alpha(var(--blue-400)/9%),--alpha(var(--blue-100)/15%))] text-[color:light-dark(var(--chatgpt-blue-400),var(--chatgpt-blue-200))] not-disabled:not-aria-disabled:hover:bg-[light-dark(var(--blue-a50),--alpha(var(--blue-100)/20%))] data-[state=open]:bg-[light-dark(var(--blue-a50),--alpha(var(--blue-100)/20%))]",
                composerPrimary: "bg-composer-primary not-disabled:not-aria-disabled:hover:bg-composer-primary/90 data-[state=open]:bg-composer-primary/90 text-composer-primary border-transparent",
                composerSurface: "border-transparent bg-(--color-background-primary-soft)/90 text-default shadow-(--elevation-composer) dark:bg-surface-elevated dark:shadow-(--elevation-composer-dark) not-disabled:not-aria-disabled:hover:bg-primary-ghost-hover data-[state=open]:bg-primary-ghost-hover light:[:where(:root[data-codex-os=win32].electron-opaque)_&]:bg-(--color-background-primary-soft) forced-colors:shadow-none forced-colors:outline forced-colors:outline-[CanvasText]",
                cardAction: "border-subtle bg-surface-card text-default not-disabled:not-aria-disabled:active:opacity-80",
                successOutline: "border-text-success-solid/20 bg-transparent text-success-solid not-disabled:not-aria-disabled:hover:bg-text-success-solid/10",
                successSolid: "bg-success-solid not-disabled:not-aria-disabled:hover:bg-success-solid-hover data-[state=open]:bg-success-solid-hover text-success-solid border-transparent",
                danger: "bg-chart-red/10 not-disabled:not-aria-disabled:hover:bg-chart-red/20 text-chart-red border-transparent",
                dangerSolid: "bg-danger-solid not-disabled:not-aria-disabled:hover:bg-danger-solid/90 text-danger-solid border-transparent",
                dangerOutline: "border-danger bg-transparent text-danger not-disabled:not-aria-disabled:hover:bg-danger-solid/10",
                ghost: "text-tertiary not-disabled:not-aria-disabled:hover:bg-primary-ghost-hover data-[state=open]:bg-primary-ghost-hover border-transparent",
                disclosure: "border-transparent bg-transparent text-tertiary",
                blockAction: "text-tertiary not-disabled:not-aria-disabled:hover:bg-primary-ghost-hover not-disabled:not-aria-disabled:hover:text-default data-[state=open]:bg-primary-ghost-hover border-transparent",
                ghostAccent: "text-info not-disabled:not-aria-disabled:hover:bg-primary-ghost-hover data-[state=open]:bg-primary-ghost-hover border-transparent",
                ghostSubtle: "text-default not-disabled:not-aria-disabled:hover:bg-primary-soft-alpha data-[state=open]:bg-primary-soft-alpha border-0",
                ghostAccentSubtle: "text-info not-disabled:not-aria-disabled:hover:bg-primary-soft-alpha data-[state=open]:bg-primary-soft-alpha border-0",
                ghostOutline: "border-transparent text-tertiary not-disabled:not-aria-disabled:hover:border-default not-disabled:not-aria-disabled:hover:bg-surface not-disabled:not-aria-disabled:hover:text-default not-disabled:not-aria-disabled:hover:shadow-sm data-[state=open]:border-default data-[state=open]:bg-surface data-[state=open]:text-default data-[state=open]:shadow-sm",
                ghostSecondary: "text-secondary not-disabled:not-aria-disabled:hover:bg-primary-ghost-hover data-[state=open]:bg-primary-ghost-hover border-transparent",
                ghostDanger: "border-transparent text-default not-disabled:not-aria-disabled:hover:bg-primary-ghost-hover not-disabled:not-aria-disabled:hover:text-danger focus-visible:bg-primary-ghost-hover focus-visible:text-danger",
                outlineActive: "border-default bg-text/10 not-disabled:not-aria-disabled:hover:bg-text/15 data-[state=open]:bg-text/15 border",
                ghostActive: "text-default not-disabled:not-aria-disabled:hover:bg-primary-ghost-hover data-[state=open]:bg-primary-ghost-hover border-transparent",
                toolbar: "text-(--color-text-toolbar-action) not-disabled:not-aria-disabled:hover:bg-primary-ghost-hover data-[state=open]:bg-primary-ghost-hover border-transparent",
                ghostMuted: "not-disabled:not-aria-disabled:hover:bg-transparent data-[state=open]:bg-transparent hover:text-default border-transparent",
                ghostUserMessage: "text-user-message not-disabled:not-aria-disabled:hover:bg-transparent data-[state=open]:bg-transparent border-transparent",
                ghostTertiary: "text-tertiary not-disabled:not-aria-disabled:hover:bg-transparent data-[state=open]:bg-transparent not-disabled:not-aria-disabled:hover:text-default border-transparent",
                mediaSolid: "border-transparent bg-media-foreground text-media-background not-disabled:not-aria-disabled:hover:bg-media-foreground/90 data-[state=open]:bg-media-foreground/90",
                mediaSubtle: "border-media-foreground/20 bg-media-control-background text-media-foreground not-disabled:not-aria-disabled:hover:bg-media-control-hover data-[state=open]:bg-media-control-hover",
                mediaOverlay: "border-transparent bg-media-control-background text-media-foreground not-disabled:not-aria-disabled:hover:bg-media-control-hover focus:bg-media-control-hover data-[state=open]:bg-media-control-hover",
                mediaTranslucent: "border-transparent bg-media-background/20 text-media-foreground backdrop-blur-md backdrop-brightness-75 not-disabled:not-aria-disabled:hover:bg-media-background/30 focus-visible:bg-media-background/30 data-[state=open]:bg-media-background/30",
                imageSurface: "border-transparent bg-surface text-default not-disabled:not-aria-disabled:hover:bg-surface focus-visible:bg-surface data-[state=open]:bg-surface",
                outline: "border-default bg-primary-soft-alpha not-disabled:not-aria-disabled:hover:bg-primary-ghost-hover data-[state=open]:bg-primary-ghost-hover border",
                field: "border-default bg-primary-soft text-default not-disabled:not-aria-disabled:hover:bg-primary-ghost-hover data-[state=open]:bg-primary-ghost-hover",
                mapSurface: "relative isolate border-transparent bg-surface text-default ring-1 ring-border after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-[inherit] not-disabled:not-aria-disabled:hover:after:bg-primary-ghost-hover data-[state=open]:after:bg-primary-ghost-hover not-disabled:not-aria-disabled:aria-pressed:hover:after:bg-current/10 aria-pressed:bg-primary-solid aria-pressed:text-primary-solid",
                outlineSurface: "border-default bg-surface not-disabled:not-aria-disabled:hover:bg-primary-ghost-hover data-[state=open]:bg-primary-ghost-hover border",
                outlineSurfaceRaised: "button-surface-tint border-default bg-surface text-default shadow-sm border-hairline",
                outlineCard: "border-button-outline bg-surface-card text-button-outline not-disabled:not-aria-disabled:hover:bg-button-outline-hover data-[state=open]:bg-button-outline-hover not-disabled:not-aria-disabled:active:opacity-80",
                conversationFollowup: "border-default bg-surface text-default shadow-sm not-disabled:not-aria-disabled:hover:bg-primary-ghost-hover data-[state=open]:bg-primary-ghost-hover border",
                conversationPill: "border-default bg-surface-card text-default shadow-card not-disabled:not-aria-disabled:hover:border-transparent not-disabled:not-aria-disabled:hover:bg-primary-ghost-hover data-[state=open]:border-transparent data-[state=open]:bg-primary-ghost-hover dark:border-transparent dark:shadow-none",
                selectTrigger: "border-default bg-surface not-disabled:not-aria-disabled:hover:bg-primary-ghost-hover data-[state=open]:bg-surface-elevated-secondary data-[state=open]:rounded-t-2xl data-[state=open]:rounded-b-none data-[state=open]:border-b-transparent border",
                outlineGhost: "border-default bg-transparent text-default not-disabled:not-aria-disabled:hover:bg-primary-ghost-hover data-[state=open]:bg-primary-ghost-hover",
                outlineGhostInset: "border-transparent bg-transparent text-default inset-ring-1 inset-ring-(--color-border) not-disabled:not-aria-disabled:hover:bg-primary-ghost-hover data-[state=open]:bg-primary-ghost-hover",
                outlineGhostMuted: "border-default bg-transparent text-tertiary not-disabled:not-aria-disabled:hover:bg-primary-ghost-hover data-[state=open]:bg-primary-ghost-hover",
                outlineSubtle: "border-subtle bg-transparent text-secondary not-disabled:not-aria-disabled:hover:bg-secondary-soft data-[state=open]:bg-secondary-soft",
                surveyCard: "border-subtle bg-transparent text-default not-disabled:not-aria-disabled:not-aria-pressed:hover:bg-secondary-soft aria-pressed:bg-primary-ghost-hover",
                selectionTile: "relative border-default bg-surface text-default not-disabled:not-aria-disabled:hover:bg-primary-ghost-hover after:pointer-events-none after:absolute after:-inset-px after:rounded-[inherit] after:[corner-shape:inherit] aria-pressed:border-text aria-pressed:after:inset-ring-2 aria-pressed:after:inset-ring-text",
                primary: "border-default bg-primary-solid not-disabled:not-aria-disabled:hover:bg-text/80 data-[state=open]:bg-text/80 text-primary-solid",
                chatgptPrimary: "border-transparent bg-primary-solid bg-clip-padding text-primary-solid not-disabled:not-aria-disabled:hover:bg-primary-solid-hover focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-text",
                shareDestination: "border-transparent bg-transparent text-secondary not-disabled:not-aria-disabled:hover:bg-transparent [&>.share-destination-icon]:bg-text/5 [&>.share-destination-icon]:text-default not-disabled:not-aria-disabled:hover:[&>.share-destination-icon]:bg-text/10 not-disabled:not-aria-disabled:active:[&>.share-destination-icon]:bg-text/10",
                secondary: "text-default bg-text/5 not-disabled:not-aria-disabled:hover:bg-text/10 data-[state=open]:bg-text/10 border-transparent",
                secondarySurface: "button-surface-tint border-default bg-surface text-default",
                elevatedSurface: "button-surface-tint border-default bg-surface-elevated text-default",
                tinted: "bg-current/10 not-disabled:not-aria-disabled:hover:bg-current/15 data-[state=open]:bg-current/15 border-transparent",
                segmentedSelected: "text-default bg-segmented-selected not-disabled:not-aria-disabled:hover:bg-segmented-selected-hover data-[state=open]:bg-segmented-selected-hover border-transparent",
                segmentedInsetSelected: "border-transparent bg-surface text-default shadow-sm not-disabled:not-aria-disabled:hover:bg-surface not-disabled:not-aria-disabled:active:bg-surface data-[state=open]:bg-surface",
                segmentedFormSelected: "border-transparent bg-transparent text-default forced-colors:z-20 forced-colors:outline forced-colors:outline-[Highlight]",
                segmentedFormUnselected: "border-transparent bg-transparent text-secondary not-disabled:not-aria-disabled:hover:text-default data-[state=open]:text-default",
                segmentedFieldSelected: "border-transparent bg-surface text-default inset-ring-1 inset-ring-(--color-border) not-disabled:not-aria-disabled:hover:bg-surface not-disabled:not-aria-disabled:active:bg-surface data-[state=open]:bg-surface dark:border-default dark:bg-surface-elevated-secondary dark:bg-clip-padding dark:inset-ring-0 dark:not-disabled:not-aria-disabled:hover:bg-surface-elevated-secondary dark:not-disabled:not-aria-disabled:active:bg-surface-elevated-secondary dark:data-[state=open]:bg-surface-elevated-secondary"
            },
            u = {
                catalogAction: "h-9 shrink-0 px-3.75 py-0 text-sm leading-none font-medium",
                catalogBack: "h-7 shrink-0 gap-1.5 px-2.25 py-0 text-sm leading-none font-medium",
                onboardingAction: "h-11.5 justify-center px-4 py-2 text-onboarding-body leading-4 font-medium",
                activityOption: "px-4 py-2 text-[14px] leading-4 font-medium",
                auth: "min-h-13 justify-center gap-2 px-5 py-3 text-base leading-6 font-medium",
                authUpsell: "min-h-11 justify-center gap-1.5 px-4 py-2 text-form-body font-medium",
                giftCard: "h-12 justify-center px-6 text-base leading-[26px] font-medium",
                compact: "h-6 px-2 py-0 text-xs leading-4",
                cardAction: "h-7 min-h-7 shrink-0 justify-center px-3 py-0 text-sm leading-5 font-medium pointer-coarse:min-h-10",
                composer: "h-token-button-composer px-(--padding-button-composer-inline,calc(var(--spacing)*2)) py-0 text-(length:--text-button-composer,var(--text-sm)) leading-(--line-height-button-composer,18px)",
                composerDictation: "h-(--spacing-token-button-composer) shrink-0 gap-0 border-0 p-0",
                composerWithBadge: "h-token-button-composer ps-2 pe-[calc((var(--spacing-token-button-composer)-var(--spacing)*5)/2-1px)] py-0 text-sm leading-[18px]",
                composerPill: "h-(--spacing-token-button-composer) py-0 ps-3 pe-3.5 text-base leading-relaxed",
                composerAuxiliary: "h-token-button-composer px-2 py-0 text-sm leading-[18px]",
                composerPermissions: "h-token-button-composer min-w-token-button-composer justify-center px-1.5 py-0 text-sm leading-[18px]",
                composerSm: "h-token-button-composer-sm px-1.5 py-0 text-sm leading-[18px]",
                composerSmLabel: "h-token-button-composer-sm px-2.5 py-0 text-sm leading-[18px]",
                default: "px-2 py-0.5 text-sm leading-[18px]",
                secondaryAction: "min-h-8.5 shrink-0 justify-center px-3 py-0 text-control-label",
                actionSm: "min-h-7 shrink-0 justify-center px-2.5 py-0 text-xs leading-4 font-medium pointer-coarse:min-h-10",
                sidebarOffer: "min-h-9 shrink-0 justify-center px-4 py-0 text-xs leading-5 font-medium pointer-coarse:min-h-10",
                dialog: "min-h-9 px-3 text-sm font-medium",
                dialogAction: "min-h-9 shrink-0 px-4 text-sm font-medium",
                formAction: "min-h-10.5 shrink-0 justify-center px-4 py-2 text-sm leading-5 font-medium",
                entityAction: "min-h-9 shrink-0 justify-center px-5 text-sm font-medium",
                responsiveDialogAction: "min-h-12 w-full shrink-0 justify-center px-6 py-3 text-base leading-6 font-medium sm:min-h-9 sm:w-auto sm:px-4 sm:py-0 sm:text-sm sm:leading-normal",
                modalPrimary: "min-h-12 justify-center border-0 px-6 py-3 text-[17px] leading-6 font-medium tracking-[-0.44px]",
                pageAction: "h-8 shrink-0 px-4 py-0 text-sm font-medium browser:h-9",
                addAction: "h-9 shrink-0 justify-center gap-1.5 border-0 ps-2 pe-4 py-0 text-onboarding-body font-[510]",
                formDisclosure: "min-h-12 justify-start gap-1 border-0 px-3.5 py-0 text-form-body font-normal motion-safe:transition-[min-height] motion-safe:duration-relaxed motion-safe:ease-enter-snappy aria-expanded:min-h-10.5",
                formValue: "min-h-10 gap-2 border-0 px-0 py-0 text-form-body font-normal",
                entityRowAction: "min-h-9 shrink-0 justify-center gap-1.5 px-3 py-0 text-onboarding-body font-medium",
                recoveryAction: "min-h-9 shrink-0 justify-center px-3 text-sm leading-5 font-medium",
                panelAction: "min-h-12 shrink-0 justify-center px-8 text-sm leading-5 font-medium",
                detailAction: "min-h-10 justify-center px-4 text-base font-medium",
                setupAction: "min-h-11 justify-center px-5 text-sm font-medium",
                beaconAction: "min-h-11 justify-center px-4 text-sm font-medium",
                responsiveBeaconAction: "min-h-14 justify-center px-5 text-base font-semibold sm:min-h-11 sm:px-4 sm:text-sm sm:font-medium",
                takeoverHeroAction: "min-h-11 justify-center px-4 text-document leading-5 font-medium",
                expressiveBeaconAction: "min-h-9 justify-center px-5 text-document leading-5 font-medium",
                promotionalAction: "min-h-11.5 justify-center border-0 px-4 py-3.25 text-onboarding-body font-medium",
                promotionalLink: "min-h-9 justify-center border-0 px-0 py-2 text-onboarding-body font-semibold tracking-announcement-body underline decoration-from-font [text-underline-position:from-font]",
                workNux: "min-h-11 min-w-29 justify-center px-6 text-sm font-medium",
                workPopover: "min-h-8 justify-center px-3 text-sm font-normal",
                beaconCarousel: "h-9 min-w-30 justify-center px-4 text-sm font-medium",
                conversationFollowup: "h-10 shrink-0 px-4 py-0 text-sm leading-5",
                conversationPill: "min-h-12 gap-1.5 px-4 py-3 text-base leading-5.5 font-medium",
                conversationPillAction: "min-h-9 px-3 py-0 text-base leading-5.5 font-medium",
                actionChip: "min-h-9 gap-1.5 border-0 py-2 ps-4 pe-2.5 text-[14px] leading-5 font-normal tracking-[-0.14px]",
                actionChipWithIcon: "min-h-11 gap-2 border-0 py-2 ps-2 pe-7 text-[14px] leading-5 font-normal tracking-[-0.14px] has-[>svg:last-child]:pe-2",
                paginationDot: "h-6 w-3.5 shrink-0 justify-center border-0 p-0",
                dialogGhost: "min-h-9 gap-1.5 px-3 text-sm leading-5",
                messageChip: "min-h-(--height-token-message) gap-1.5 px-3 text-sm leading-5",
                avatarGroup: "h-full border-0 px-1 text-sm leading-5",
                avatarGroupAction: "h-full border-0 ps-0 pe-3 text-sm leading-5",
                entityHeader: "size-9 shrink-0 justify-center border-0 p-0 pointer-coarse:min-h-10 pointer-coarse:min-w-10",
                dragHandle: "h-7 w-6 shrink-0 justify-center p-0",
                formatToolbar: "h-7 border-0 px-1.5 py-0 text-sm leading-5",
                formatToolbarIcon: "size-7 shrink-0 justify-center border-0 p-0",
                field: "h-8 min-w-0 px-2 py-0 text-sm leading-4.5",
                fieldControl: "h-full w-8 shrink-0 justify-center border-0 p-0",
                fieldSegment: "h-8 min-w-0 justify-center border-0 px-2 py-0 text-sm leading-4.5 dark:border",
                icon: "electron:p-1 electron:[&>svg]:icon-sm flex items-center justify-center p-0.5",
                iconCircle: "flex size-8 items-center justify-center p-0",
                iconCircleLg: "flex size-9 items-center justify-center p-0",
                iconTouch: "flex size-11 shrink-0 items-center justify-center p-0",
                iconCircleSm: "flex size-5 items-center justify-center p-0",
                iconLarge: "flex size-16 items-center justify-center p-0",
                iconMd: "flex size-5 items-center justify-center p-0.5 [&>svg]:icon-2xs",
                iconSm: "flex h-4 w-4 items-center justify-center p-0.5 [&>svg]:icon-2xs",
                imageToolbar: "h-9 gap-1.5 border-0 px-2 py-0 text-sm leading-5",
                imageAction: "h-9 justify-center border-0 px-3 py-0 text-sm leading-4.5 font-medium",
                imageActionIcon: "size-7 justify-center border-0 p-1",
                floatingAction: "h-14 justify-center overflow-clip border-0 px-6 py-0 text-sm leading-5 font-medium shadow-widget-inline",
                inline: "border-0 p-0",
                inputIcon: "size-9 justify-center border-0 p-0",
                inputSegment: "h-full w-10 shrink-0 justify-center border-e-border p-0",
                inputSelect: "h-full min-w-28 shrink-0 gap-2 border-0 px-3 text-sm",
                inputControl: "h-10 shrink-0 px-4 py-0 text-sm leading-5",
                formField: "h-9.5 min-w-0 px-3 py-2 text-sm leading-5 font-normal aria-invalid:border-text-danger aria-invalid:ring-2 aria-invalid:ring-text-danger/20",
                large: "px-5 py-2 text-base leading-[18px]",
                medium: "px-4 py-1.5 text-base leading-[18px]",
                menuRow: "h-7 px-2 py-0 text-xs leading-4",
                settingsSelect: "h-9 px-2 py-1 text-sm leading-none",
                settingsOption: "min-h-9 gap-2 px-2 py-2 text-sm leading-5",
                settingsAction: "h-7 px-2 py-0 text-base leading-5",
                shareDestination: "min-w-20 flex-col gap-3 border-0 p-0 text-xs max-sm:min-w-0",
                surveyOption: "gap-3 border-0 p-4 text-base leading-6 font-normal",
                surveyCard: "gap-3 p-4 text-sm leading-5 font-normal",
                selectionTile: "h-16 min-w-0 flex-col justify-center px-2 py-2 text-xs leading-4 font-normal",
                imageTile: "relative h-16 min-w-0 w-full justify-center overflow-hidden p-0",
                tabStripAction: "h-[calc(var(--spacing-token-button-composer)+6px)] px-2 py-0 text-base leading-[18px]",
                toolbar: "button-toolbar py-0 text-sm leading-[18px]",
                toolbarLabel: "button-toolbar py-0 text-sm leading-[18px]",
                headerUpsell: "h-8.5 px-3 py-0 text-sm leading-5 font-medium pointer-coarse:h-10"
            },
            m = {
                full: "rounded-full",
                messageBubble: "rounded-[var(--message-bubble-radius,var(--radius-full))]",
                extraLarge: "rounded-2xl",
                large: "rounded-lg",
                small: "rounded-md"
            };

        function f(e) {
            let t, a = (0, r.c)(2);
            return a[0] !== e ? (t = (0, n.jsx)(h, {
                ...e
            }), a[0] = e, a[1] = t) : t = a[1], t
        }

        function p(e) {
            let t, a = (0, r.c)(26);
            if (null != e.to) {
                let t, r, o, i, s, d, c, u, m, f, p, g;
                return a[0] !== e ? ({
                    to: m,
                    state: u,
                    replace: c,
                    relative: s,
                    reloadDocument: d,
                    preventScrollReset: i,
                    viewTransition: f,
                    discover: r,
                    prefetch: o,
                    ...t
                } = e, a[0] = e, a[1] = t, a[2] = r, a[3] = o, a[4] = i, a[5] = s, a[6] = d, a[7] = c, a[8] = u, a[9] = m, a[10] = f) : (t = a[1], r = a[2], o = a[3], i = a[4], s = a[5], d = a[6], c = a[7], u = a[8], m = a[9], f = a[10]), a[11] !== r || a[12] !== o || a[13] !== i || a[14] !== s || a[15] !== d || a[16] !== c || a[17] !== u || a[18] !== m || a[19] !== f ? (p = e => (0, n.jsx)(l.g, {
                    ...e,
                    to: m,
                    state: u,
                    replace: c,
                    relative: s,
                    reloadDocument: d,
                    preventScrollReset: i,
                    viewTransition: f,
                    discover: r,
                    prefetch: o
                }), a[11] = r, a[12] = o, a[13] = i, a[14] = s, a[15] = d, a[16] = c, a[17] = u, a[18] = m, a[19] = f, a[20] = p) : p = a[20], a[21] !== t || a[22] !== p ? (g = (0, n.jsx)(h, {
                    ...t,
                    as: "a",
                    renderLink: p
                }), a[21] = t, a[22] = p, a[23] = g) : g = a[23], g
            }
            return a[24] !== e ? (t = (0, n.jsx)(h, {
                ...e,
                as: "a"
            }), a[24] = e, a[25] = t) : t = a[25], t
        }

        function h(e) {
            let t, a, l, f, p, h, g, x, b, v = (0, r.c)(29);
            if (v[0] !== e) {
                h = Symbol.for("react.early_return_sentinel");
                e: {
                    let r, g, x, b, {
                        uniform: y,
                        uniformAtMobile: w,
                        unstyled: j,
                        allowShrink: k,
                        color: C,
                        contentLayout: N,
                        radius: S,
                        size: A,
                        focusRing: M,
                        disabled: E,
                        disabledAppearance: L,
                        className: T,
                        children: z,
                        sizingLabels: I,
                        loading: P,
                        ..._
                    } = e;p = _;
                    let O = void 0 !== y && y,
                        D = void 0 !== j && j,
                        R = void 0 === C ? "primary" : C,
                        B = void 0 === N ? "default" : N,
                        F = void 0 === S ? "default" : S,
                        H = void 0 === A ? "default" : A;l = void 0 !== E && E,
                    f = void 0 !== P && P;
                    let W = O && ("toolbar" === H || "compact" === H || "medium" === H || "dialogGhost" === H) ? "rounded-lg" : s.a[H];t = (0, o.b)("no-drag cursor-interaction items-center select-none disabled:cursor-default aria-disabled:cursor-default", "surface" === M && "focus:outline-none focus-visible:bg-primary-ghost-hover forced-colors:focus-visible:bg-[Highlight] forced-colors:focus-visible:text-[HighlightText] forced-colors:focus-visible:forced-color-adjust-none", "native" === M && "focus-visible:outline-auto", "surface" !== M && "native" !== M && "chatgptPrimary" !== R && "focus:outline-hidden", "dimmed" === (void 0 === L ? "dimmed" : L) && ("cardAction" === R ? "disabled:opacity-50 aria-disabled:opacity-50" : "disabled:opacity-40 aria-disabled:opacity-40"), "none" !== M && "surface" !== M && "native" !== M && "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0", "auth" === H || "authUpsell" === H || "surveyOption" === H || "surveyCard" === H || "selectionTile" === H || "settingsOption" === H ? "whitespace-normal" : "whitespace-nowrap", "balanced" === B ? "grid grid-cols-[1fr_auto_1fr]" : "flex", !D && ["composerPill" === H ? (0, o.b)("gap-1.5", "limited" === R ? "border" : "border-0") : "addAction" !== H && "border", "composerPill" !== H && "authUpsell" !== H && "composerDictation" !== H && "headerUpsell" !== H && "entityRowAction" !== H && "addAction" !== H && "conversationPill" !== H && "actionChip" !== H && "actionChipWithIcon" !== H && "surveyCard" !== H && "settingsOption" !== H && "gap-1", "headerUpsell" === H && "gap-0.75", "default" === F ? W : m[F], c["segmentedInsetSelected" === R && "fieldSegment" === H ? "segmentedFieldSelected" : R], u[H], "entityHeader" === H && "ghostActive" === R && "group-data-[transparent=true]/entity-header:not-disabled:not-aria-disabled:hover:bg-surface group-data-[transparent=true]/entity-header:focus-visible:bg-surface group-data-[transparent=true]/entity-header:data-[state=open]:bg-surface", "dropdown" === B && "pe-1"], ("fieldSegment" === H || "inset" === M || null == M && ("inputSegment" === H || "fieldControl" === H)) && "focus-visible:ring-inset", void 0 !== k && k && "min-w-0", null != I && "min-w-0 max-w-full", O && "aspect-square shrink-0 items-center justify-center !px-0", void 0 !== w && w && "browser:max-md:aspect-square browser:max-md:shrink-0 browser:max-md:justify-center browser:max-md:!px-0", T);
                    let Q = "imageActionIcon" === H || "floatingAction" === H ? "icon" : "icon-xxs";v[7] !== Q ? (r = (0, n.jsx)(d.a, {
                        className: Q
                    }), v[7] = Q, v[8] = r) : r = v[8];
                    let K = r;v[9] !== R || v[10] !== D ? (g = D || "limited" !== R ? null : (0, n.jsx)("svg", {
                        className: "button-limited-outline",
                        "aria-hidden": !0,
                        focusable: "false",
                        children: (0, n.jsx)("rect", {
                            x: "0.5",
                            y: "0.5",
                            width: "calc(100% - 1px)",
                            height: "calc(100% - 1px)",
                            rx: "calc(var(--spacing-token-button-composer) / 2 - 0.5px)",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1",
                            strokeDasharray: "2 2"
                        })
                    }), v[9] = R, v[10] = D, v[11] = g) : g = v[11];
                    let U = f && K;v[12] !== z || v[13] !== g || v[14] !== U ? (x = (0, n.jsxs)(n.Fragment, {
                        children: [g, U, z]
                    }), v[12] = z, v[13] = g, v[14] = U, v[15] = x) : x = v[15];
                    let q = x;
                    if (v[16] !== I || v[17] !== K || v[18] !== q ? (b = null == I ? q : (0, n.jsxs)("span", {
                            className: "grid min-w-0 text-center whitespace-normal",
                            children: [i.Children.map(I, e => (0, n.jsxs)("span", {
                                className: "invisible col-start-1 row-start-1 flex min-w-0 items-center justify-center gap-1",
                                "aria-hidden": !0,
                                children: [K, (0, n.jsx)("span", {
                                    className: "min-w-0 break-words",
                                    children: e
                                })]
                            })), (0, n.jsx)("span", {
                                className: "col-start-1 row-start-1 flex min-w-0 items-center justify-center gap-1",
                                children: q
                            })]
                        }), v[16] = I, v[17] = K, v[18] = q, v[19] = b) : b = v[19], a = b, "a" === p.as) {
                        let {
                            as: e,
                            renderLink: r,
                            href: i,
                            onClick: s,
                            onAuxClick: d,
                            onKeyDown: c,
                            tabIndex: u,
                            ...m
                        } = p, g = l || f, x = {
                            ...m,
                            className: (0, o.b)(t, "button-link"),
                            href: g ? void 0 : i,
                            role: g ? "link" : m.role,
                            "aria-disabled": g || m["aria-disabled"],
                            tabIndex: g ? -1 : u,
                            children: a,
                            onClick: e => {
                                g ? e.preventDefault() : s?.(e)
                            },
                            onAuxClick: e => {
                                g ? e.preventDefault() : d?.(e)
                            },
                            onKeyDown: e => {
                                g ? ("Enter" === e.key || " " === e.key) && e.preventDefault() : c?.(e)
                            }
                        };
                        h = null == r || g ? (0, n.jsx)("a", {
                            ...x,
                            children: a
                        }) : r(x);
                        break e
                    }
                }
                v[0] = e, v[1] = t, v[2] = a, v[3] = l, v[4] = f, v[5] = p, v[6] = h
            } else t = v[1], a = v[2], l = v[3], f = v[4], p = v[5], h = v[6];
            if (h !== Symbol.for("react.early_return_sentinel")) return h;
            if (v[20] !== p) {
                let {
                    as: e,
                    type: t,
                    ...a
                } = p;
                x = t, g = a, v[20] = p, v[21] = g, v[22] = x
            } else g = v[21], x = v[22];
            let y = x ?? "button",
                w = l || f;
            return v[23] !== t || v[24] !== a || v[25] !== g || v[26] !== y || v[27] !== w ? (b = (0, n.jsx)("button", {
                type: y,
                className: t,
                disabled: w,
                ...g,
                children: a
            }), v[23] = t, v[24] = a, v[25] = g, v[26] = y, v[27] = w, v[28] = b) : b = v[28], b
        }
        a.d(t, {
            a: () => f,
            b: () => p
        })
    }),
    BUp: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("zd");

        function i(e) {
            let t, a, i, l, s, d, c = (0, r.c)(11),
                {
                    children: u,
                    enabled: m
                } = e,
                f = (0, o.useId)();
            if (!m) return u;
            c[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)("rect", {
                width: "16",
                height: "16",
                fill: "white"
            }), a = (0, n.jsx)("circle", {
                cx: "12.6",
                cy: "3.2",
                r: "4.08",
                fill: "black"
            }), c[0] = t, c[1] = a) : (t = c[0], a = c[1]), c[2] !== f ? (i = (0, n.jsx)("defs", {
                children: (0, n.jsxs)("mask", {
                    id: f,
                    maskUnits: "userSpaceOnUse",
                    x: "0",
                    y: "0",
                    width: "16",
                    height: "16",
                    children: [t, a]
                })
            }), c[2] = f, c[3] = i) : i = c[3];
            let p = `url(#${f})`;
            return c[4] !== u || c[5] !== p ? (l = (0, n.jsx)("g", {
                mask: p,
                children: u
            }), c[4] = u, c[5] = p, c[6] = l) : l = c[6], c[7] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, n.jsx)("circle", {
                className: "fill-text-info",
                cx: "12.6",
                cy: "3.2",
                r: "2.6"
            }), c[7] = s) : s = c[7], c[8] !== i || c[9] !== l ? (d = (0, n.jsxs)("svg", {
                className: "shrink-0",
                "aria-hidden": "true",
                focusable: "false",
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                children: [i, l, s]
            }), c[8] = i, c[9] = l, c[10] = d) : d = c[10], d
        }
        a.d(t, {
            a: () => i
        })
    }),
    nhm: (function(e, t, a) {
        a.d(t, {
            a: () => g
        });
        var n = a("A"),
            r = a("Qo"),
            o = a("yt6"),
            i = a("on"),
            l = a("HOL"),
            s = a("bf"),
            d = a("R9"),
            c = a("P0s"),
            u = "mark-asMPYr",
            m = a("sg"),
            f = a("pi"),
            p = a("BAO");
        let h = {
            default: "icon-2xs rounded-xs data-[state=checked]:bg-primary-soft data-[state=indeterminate]:bg-primary-soft",
            accent: "icon-2xs rounded-xs data-[state=checked]:bg-info-solid data-[state=indeterminate]:bg-info-solid data-[state=checked]:border-transparent data-[state=indeterminate]:border-transparent data-[state=checked]:text-control-thumb-on-accent data-[state=indeterminate]:text-control-thumb-on-accent disabled:opacity-50",
            secondary: "rounded-xs flex size-4 items-center justify-center text-tertiary data-[state=indeterminate]:text-default",
            overlay: "size-5 rounded-full bg-surface disabled:bg-surface-secondary",
            choice: "",
            card: "size-5 rounded-sm shadow-md-stronger",
            task: "grid size-6 place-items-center rounded-full data-[state=checked]:bg-primary-solid data-[state=checked]:text-primary-solid data-[state=indeterminate]:bg-primary-solid data-[state=indeterminate]:text-primary-solid disabled:opacity-50",
            checklist: "relative grid size-5 place-items-center rounded-xs text-tertiary"
        };

        function g(e) {
            let t, a, g, x, b, v, y, w, j, k, C, N, S, A, M, E, L, T, z, I, P, _, O, D, R, B, F, H = (0, r.c)(80);
            H[0] !== e ? ({
                className: a,
                checked: t,
                defaultChecked: g,
                onCheckedChange: x,
                disabled: v,
                variant: y,
                size: w,
                ...b
            } = e, H[0] = e, H[1] = t, H[2] = a, H[3] = g, H[4] = x, H[5] = b, H[6] = v, H[7] = y, H[8] = w) : (t = H[1], a = H[2], g = H[3], x = H[4], b = H[5], v = H[6], y = H[7], w = H[8]);
            let W = void 0 !== v && v,
                Q = void 0 === y ? "default" : y,
                K = void 0 === w ? "md" : w,
                U = "secondary" === Q || "checklist" === Q,
                q = "choice" === Q || "card" === Q;
            if (H[9] !== t || H[10] !== a || H[11] !== g || H[12] !== W || H[13] !== q || H[14] !== U || H[15] !== x || H[16] !== b || H[17] !== K || H[18] !== Q) {
                let e = (0, i.b)("opacity-75", !W && "group-hover:opacity-100 group-focus-visible:opacity-100");
                k = o.b;
                let r = "checklist" === Q ? "checklist-uO3cm4" : "transition-[background-color,border-color,box-shadow]",
                    d = h[Q],
                    c = "choice" === Q && ("sm" === K ? "size-4 rounded-sm" : "size-5 rounded-xs"),
                    m = q && "border-default bg-surface data-[state=checked]:border-transparent data-[state=checked]:bg-primary-solid data-[state=checked]:text-primary-solid data-[state=indeterminate]:border-transparent data-[state=indeterminate]:bg-primary-solid data-[state=indeterminate]:text-primary-solid",
                    v = !U && (q ? "border" : "border border-strong shadow-sm"),
                    y = !U && "accent" !== Q && !q && "task" !== Q && "data-[state=checked]:text-default data-[state=indeterminate]:text-default",
                    w = ("choice" !== Q || "sm" === K) && "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                    _ = !W && !U && "task" === Q && "data-[state=unchecked]:hover:bg-surface-tertiary",
                    O = !W && !U && "task" !== Q && !q && ("accent" === Q ? "data-[state=unchecked]:hover:bg-surface-tertiary data-[state=checked]:hover:bg-info-solid/90 data-[state=indeterminate]:hover:bg-info-solid/90" : "hover:bg-surface-tertiary");
                H[32] !== a || H[33] !== r || H[34] !== d || H[35] !== c || H[36] !== m || H[37] !== v || H[38] !== y || H[39] !== w || H[40] !== _ || H[41] !== O ? (z = (0, i.b)("group peer shrink-0 outline-none", r, d, c, m, v, y, w, "aria-invalid:ring-2 aria-invalid:ring-text-danger/20", "aria-invalid:border-text-danger", "disabled:cursor-not-allowed", _, O, a), H[32] = a, H[33] = r, H[34] = d, H[35] = c, H[36] = m, H[37] = v, H[38] = y, H[39] = w, H[40] = _, H[41] = O, H[42] = z) : z = H[42], I = t, P = g, H[43] !== x ? (C = e => {
                    x?.("indeterminate" === e || e)
                }, H[43] = x, H[44] = C) : C = H[44], N = W, S = b, A = "checklist" === Q && (0, n.jsx)(l.a, {
                    asset: p.a,
                    className: (0, i.b)(e, "group-data-[state=checked]:opacity-100 group-data-[state=indeterminate]:opacity-100", "outline-eD5IOC")
                }), M = "secondary" === Q && (0, n.jsx)(s.Dh, {
                    className: (0, i.b)("hidden group-data-[state=unchecked]:block", e)
                }), j = o.a, E = (0, i.b)("checklist" === Q ? (0, i.b)("absolute inset-0 grid place-items-center", "indicator-clgfcx") : "flex h-full w-full items-center justify-center text-current", "secondary" === Q && e), L = "checklist" === Q || void 0, T = "checklist" === Q && (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(l.a, {
                        asset: f.a,
                        className: (0, i.b)("col-start-1 row-start-1 forced-colors:opacity-100", e)
                    }), "indeterminate" === t ? (0, n.jsx)(s.Qe, {
                        className: (0, i.b)("col-start-1 row-start-1", u)
                    }) : (0, n.jsx)(s.Tb, {
                        className: (0, i.b)("col-start-1 row-start-1", u)
                    })]
                }), H[9] = t, H[10] = a, H[11] = g, H[12] = W, H[13] = q, H[14] = U, H[15] = x, H[16] = b, H[17] = K, H[18] = Q, H[19] = j, H[20] = k, H[21] = C, H[22] = N, H[23] = S, H[24] = A, H[25] = M, H[26] = E, H[27] = L, H[28] = T, H[29] = z, H[30] = I, H[31] = P
            } else j = H[19], k = H[20], C = H[21], N = H[22], S = H[23], A = H[24], M = H[25], E = H[26], L = H[27], T = H[28], z = H[29], I = H[30], P = H[31];
            return H[45] !== t || H[46] !== Q ? (_ = "secondary" === Q && ("indeterminate" === t ? (0, n.jsx)(s.Re, {}) : (0, n.jsx)(s.Hh, {})), H[45] = t, H[46] = Q, H[47] = _) : _ = H[47], H[48] !== t || H[49] !== q ? (O = q && "indeterminate" === t && (0, n.jsx)(s.Qe, {}), H[48] = t, H[49] = q, H[50] = O) : O = H[50], H[51] !== t || H[52] !== q || H[53] !== K || H[54] !== Q ? (D = q && "indeterminate" !== t && ("choice" === Q && "sm" === K ? (0, n.jsx)(s.Tb, {}) : (0, n.jsx)(l.a, {
                asset: m.a
            })), H[51] = t, H[52] = q, H[53] = K, H[54] = Q, H[55] = D) : D = H[55], H[56] !== t || H[57] !== q || H[58] !== U ? (R = !U && !q && ("indeterminate" === t ? (0, n.jsx)(c.a, {
                className: "icon-2xs flex-shrink-0"
            }) : (0, n.jsx)(d.a, {
                className: "icon-xxs flex-shrink-0"
            })), H[56] = t, H[57] = q, H[58] = U, H[59] = R) : R = H[59], H[60] !== j || H[61] !== _ || H[62] !== O || H[63] !== D || H[64] !== R || H[65] !== E || H[66] !== L || H[67] !== T ? (B = (0, n.jsxs)(j, {
                className: E,
                forceMount: L,
                children: [T, _, O, D, R]
            }), H[60] = j, H[61] = _, H[62] = O, H[63] = D, H[64] = R, H[65] = E, H[66] = L, H[67] = T, H[68] = B) : B = H[68], H[69] !== k || H[70] !== C || H[71] !== N || H[72] !== S || H[73] !== A || H[74] !== M || H[75] !== B || H[76] !== z || H[77] !== I || H[78] !== P ? (F = (0, n.jsxs)(k, {
                className: z,
                checked: I,
                defaultChecked: P,
                onCheckedChange: C,
                disabled: N,
                ...S,
                children: [A, M, B]
            }), H[69] = k, H[70] = C, H[71] = N, H[72] = S, H[73] = A, H[74] = M, H[75] = B, H[76] = z, H[77] = I, H[78] = P, H[79] = F) : F = H[79], F
        }
    }),
    GRH: (function(e, t, a) {
        a.d(t, {
            a: () => C
        });
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("zd"),
            l = a("Wf"),
            s = a("CRw"),
            d = a("bf"),
            c = a("oF"),
            u = a("TX4"),
            m = a("ae"),
            f = a("a6"),
            p = a("ygO"),
            h = a("uuN"),
            g = a("Cq"),
            x = a("Rv7"),
            b = a("oy"),
            v = a("zKC"),
            y = a("rV"),
            w = "CodeSurface-UAMd1A";

        function j(e) {
            let t, a, o, i, l, s = (0, r.c)(9),
                {
                    source: d
                } = e;
            s[0] !== d ? (t = (a = d.trim()).startsWith("\\[") || a.startsWith("\\(") ? (0, x.a)(a) : void 0, s[0] = d, s[1] = t, s[2] = a) : (t = s[1], a = s[2]);
            let c = t,
                u = c?.raw === a && "string" == typeof c.text ? c.text : d;
            return s[3] !== u || s[4] !== d ? (o = {
                type: "math",
                raw: d,
                text: u,
                display: !0
            }, s[3] = u, s[4] = d, s[5] = o) : o = s[5], s[6] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, n.jsx)("div", {
                className: "PreviewError-_CR6f8",
                children: (0, n.jsx)(v.a, {
                    density: "compact",
                    type: "error",
                    role: "alert",
                    content: (0, n.jsx)(b.a, {
                        id: "pageCodeBlock.latexPreviewFailed",
                        defaultMessage: "LaTeX is invalid",
                        description: "Message shown when a LaTeX code block cannot be rendered as an equation"
                    })
                })
            }), s[6] = i) : i = s[6], s[7] !== o ? (l = (0, n.jsx)(y.b, {
                token: o,
                errorFallback: i
            }), s[7] = o, s[8] = l) : l = s[8], l
        }
        var k = a("sxZ");

        function C(e) {
            let t, a, x, b, v, y, C, A, M, E, L = (0, r.c)(79),
                {
                    ref: T,
                    source: z,
                    sourceRef: I,
                    title: P,
                    content: _,
                    clipboardContent: O,
                    language: D,
                    allowPreview: R,
                    codeCopyText: B,
                    actionButtons: F,
                    trailingActionButtons: H,
                    alternateContent: W,
                    previewContent: Q,
                    isShowingPreview: K,
                    preview: U,
                    shouldWrapCode: q,
                    onToggleWrapCode: G,
                    wrapCodeDisabled: $,
                    showCopyButton: V,
                    copyButtonText: Z,
                    onCopyCode: X,
                    className: Y,
                    sourceClassName: J,
                    removeTopBorderRadius: ee,
                    showActionBar: et,
                    showStickyRightContent: ea,
                    stickyHeader: en,
                    variant: er
                } = e,
                eo = void 0 !== R && R,
                ei = void 0 !== K && K,
                el = void 0 !== q && q,
                es = void 0 !== $ && $,
                ed = void 0 === V || V,
                ec = void 0 === et || et,
                eu = void 0 === ea || ea,
                em = void 0 !== en && en,
                ef = void 0 === er ? "default" : er,
                ep = (0, f.a)(),
                eh = (0, l.a)(),
                [eg, ex] = (0, i.useState)(!1);
            L[0] !== eo || L[1] !== _ || L[2] !== D ? (t = eo && null != D && "latex" === (0, s.b)(D) && _.trim().length > 0 && !/\\(?:documentclass\b|begin\s*\{document\})/.test(_), L[0] = eo, L[1] = _, L[2] = D, L[3] = t) : t = L[3];
            let eb = t,
                ev = U?.sourceVisible ?? eg,
                ey = U?.setSourceVisible ?? ex,
                ew = O ?? _;
            L[4] !== eh || L[5] !== el ? (a = el ? eh.formatMessage({
                id: "codeSnippet.wrap.disable",
                defaultMessage: "Disable word wrap",
                description: "Button to disable word wrap for a code snippet"
            }) : eh.formatMessage({
                id: "codeSnippet.wrap.enable",
                defaultMessage: "Enable word wrap",
                description: "Button to enable word wrap for a code snippet"
            }), L[4] = eh, L[5] = el, L[6] = a) : a = L[6];
            let ej = a,
                ek = el ? u.a : c.a,
                eC = "icon",
                eN = "default";
            L[7] !== ek ? (x = (0, n.jsx)(ek, {
                className: "icon-2xs"
            }), L[7] = ek, L[8] = x) : x = L[8];
            let eS = x;
            if (eb) {
                let e;
                eC = "composerSm", eN = "codeBlock", L[9] !== el ? (e = el ? (0, n.jsx)(d.Ci, {}) : (0, n.jsx)(d.xi, {}), L[9] = el, L[10] = e) : e = L[10], eS = e
            } else if ("default" === ef) {
                let e;
                eC = "imageToolbar", eN = "toolbar", L[11] !== el ? (e = (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(n.Fragment, {
                        children: el ? (0, n.jsx)(d.Di, {}) : (0, n.jsx)(d.yi, {})
                    }), null]
                }), L[11] = el, L[12] = e) : e = L[12], eS = e
            }
            L[13] !== Z || L[14] !== eh ? (b = Z ?? eh.formatMessage({
                id: "copyButton.copyCode",
                defaultMessage: "Copy code",
                description: "Button to copy the contents of the code snippet to the clipboard"
            }), L[13] = Z, L[14] = eh, L[15] = b) : b = L[15];
            let eA = b;
            L[16] !== ew || L[17] !== X ? (v = e => {
                let t = (0, m.a)(ew, e);
                return X?.(), t
            }, L[16] = ew, L[17] = X, L[18] = v) : v = L[18];
            let eM = v,
                eE = eb ? ev : void 0,
                eL = B ?? (eb ? _ : void 0),
                eT = ep ? "dark" : "light",
                ez = "hover" === ef ? "w-auto overflow-visible bg-transparent" : "w-full min-w-0 contain-inline-size",
                eI = !eb && "hover" !== ef && "overflow-clip",
                eP = !eb && "preview" === ef && "group/code-snippet rounded-lg border border-default bg-surface text-default",
                e_ = !eb && "default" === ef && "rounded-(--radius-3xl-base) border border-subtle text-default",
                eO = !eb && "default" === ef && (ei ? "bg-transparent" : w),
                eD = !eb && "default" === ef && "Surface-BCuIs1",
                eR = eb && "WithPreview-LsgDtz",
                eB = ep ? "dark" : "light";
            return L[19] !== Y || L[20] !== ez || L[21] !== eI || L[22] !== eP || L[23] !== e_ || L[24] !== eO || L[25] !== eD || L[26] !== eR || L[27] !== eB ? (y = (0, o.b)("relative", "Root-iW7ipz", ez, eI, eP, e_, eO, eD, eR, eB, Y), L[19] = Y, L[20] = ez, L[21] = eI, L[22] = eP, L[23] = e_, L[24] = eO, L[25] = eD, L[26] = eR, L[27] = eB, L[28] = y) : y = L[28], L[29] !== F || L[30] !== eA || L[31] !== eN || L[32] !== eb || L[33] !== eM || L[34] !== ei || L[35] !== G || L[36] !== ee || L[37] !== ey || L[38] !== el || L[39] !== ec || L[40] !== ed || L[41] !== eu || L[42] !== ev || L[43] !== em || L[44] !== P || L[45] !== H || L[46] !== ef || L[47] !== eC || L[48] !== ej || L[49] !== es || L[50] !== eS ? (C = ec && (0, n.jsxs)(S, {
                floating: eb,
                removeTopBorderRadius: ee,
                sticky: em && !ei && !eb,
                variant: ef,
                children: [eb || "default" !== ef || null == P ? null : (0, n.jsx)(d.uc, {}), (0, n.jsx)("div", {
                    className: (0, o.b)("min-w-0 flex-1 truncate", (eb || "preview" === ef) && "flex h-token-button-composer-sm items-center"),
                    children: P
                }), (0, n.jsx)("div", {
                    className: (0, o.b)("ms-auto flex items-center", "default" === ef ? "min-w-0 max-w-full" : "shrink-0"),
                    children: eu && (0, n.jsxs)("div", {
                        "data-code-block-controls": !0,
                        role: "presentation",
                        className: (0, o.b)("flex items-center gap-px print:hidden", eb && "FloatingControls-z00cNh", !eb && "default" === ef && "flex-wrap justify-end", !eb && "preview" === ef && "opacity-0 group-hover/code-snippet:opacity-100 group-focus-within/code-snippet:opacity-100"),
                        onMouseDown: eb ? N : void 0,
                        children: [eb && (0, n.jsx)(k.a, {
                            sourceVisible: ev,
                            onToggle: () => ey(!ev)
                        }), "default" !== ef ? F : null, null != G && (0, n.jsx)(g.a, {
                            tooltipContent: ej,
                            children: (0, n.jsx)(p.a, {
                                "aria-label": ej,
                                "aria-pressed": el,
                                disabled: es,
                                color: eb || "default" !== ef ? "ghost" : "ghostActive",
                                size: eC,
                                uniform: eb || "default" === ef,
                                className: !eb && el ? "hover:text-default" : void 0,
                                onClick: G,
                                children: eS
                            })
                        }), "default" === ef ? F : null, ed && (0, n.jsx)(h.a, {
                            variant: eN,
                            ariaLabel: eA,
                            iconClassName: "icon-xs",
                            iconOnly: !0,
                            buttonText: eA,
                            onCopy: eM
                        }), H]
                    })
                })]
            }), L[29] = F, L[30] = eA, L[31] = eN, L[32] = eb, L[33] = eM, L[34] = ei, L[35] = G, L[36] = ee, L[37] = ey, L[38] = el, L[39] = ec, L[40] = ed, L[41] = eu, L[42] = ev, L[43] = em, L[44] = P, L[45] = H, L[46] = ef, L[47] = eC, L[48] = ej, L[49] = es, L[50] = eS, L[51] = C) : C = L[51], L[52] !== W || L[53] !== eb || L[54] !== ei || L[55] !== Q || L[56] !== el || L[57] !== ec || L[58] !== z || L[59] !== J || L[60] !== I || L[61] !== ev || L[62] !== ef ? (A = ei && null != Q ? null : W ?? (0, n.jsx)("div", {
                ref: I,
                "data-code-block-source": !0,
                hidden: eb && !ev,
                inert: eb && !ev,
                className: (0, o.b)("text-size-chat overflow-auto outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset", "Source-kILllF", el ? "wrap-anywhere whitespace-pre-wrap" : "whitespace-pre", eb && "FloatingSource-LdBIiI", eb && w, !eb && "hover" === ef && "p-0", !eb && "default" === ef && (ec ? "px-4 pt-0 pb-3 md:px-5" : "p-4 md:px-5"), !eb && "preview" === ef && "max-h-[calc(15lh+var(--spacing)*4)] p-2", J),
                tabIndex: "preview" === ef ? 0 : void 0,
                dir: "ltr",
                children: z
            }), L[52] = W, L[53] = eb, L[54] = ei, L[55] = Q, L[56] = el, L[57] = ec, L[58] = z, L[59] = J, L[60] = I, L[61] = ev, L[62] = ef, L[63] = A) : A = L[63], L[64] !== _ || L[65] !== eb || L[66] !== U?.source || L[67] !== ev ? (M = eb && (0, n.jsx)("div", {
                "data-code-block-preview": !0,
                "data-markdown-copy": ev ? "exclude" : "contents",
                contentEditable: !1,
                className: (0, o.b)("Preview-NSYmns", ev && "PreviewHidden-rvND7_"),
                inert: ev,
                children: (0, n.jsx)(j, {
                    source: U?.source ?? _
                })
            }), L[64] = _, L[65] = eb, L[66] = U?.source, L[67] = ev, L[68] = M) : M = L[68], L[69] !== Q || L[70] !== T || L[71] !== eE || L[72] !== eL || L[73] !== eT || L[74] !== y || L[75] !== C || L[76] !== A || L[77] !== M ? (E = (0, n.jsxs)("div", {
                ref: T,
                "data-code-block": !0,
                "data-source-visible": eE,
                "data-markdown-copy": "code-block",
                "data-markdown-copy-text": eL,
                "data-theme": eT,
                className: y,
                children: [C, A, M, Q]
            }), L[69] = Q, L[70] = T, L[71] = eE, L[72] = eL, L[73] = eT, L[74] = y, L[75] = C, L[76] = A, L[77] = M, L[78] = E) : E = L[78], E
        }

        function N(e) {
            e.target instanceof Node && e.currentTarget.contains(e.target) && e.preventDefault()
        }

        function S(e) {
            let t, a, i, l, s, d, c, u = (0, r.c)(15);
            u[0] !== e ? ({
                floating: t,
                removeTopBorderRadius: i,
                sticky: l,
                variant: s,
                ...a
            } = e, u[0] = e, u[1] = t, u[2] = a, u[3] = i, u[4] = l, u[5] = s) : (t = u[1], a = u[2], i = u[3], l = u[4], s = u[5]);
            let m = void 0 !== i && i,
                f = void 0 !== l && l,
                p = "px-2 py-1 text-codex-description";
            t ? p = "FloatingActionBar-N62vMF" : "default" === s && (p = "min-h-12 gap-2 py-1.5 ps-4 pe-1.5 font-medium text-default md:ps-5");
            let h = f && "sticky z-10",
                g = f && "default" !== s && "border-b border-default",
                x = f && "StickyActionBar-RZfVQh",
                b = !t && !m && "default" !== s && "rounded-t-lg";
            return u[6] !== p || u[7] !== h || u[8] !== g || u[9] !== x || u[10] !== b ? (d = (0, o.b)("flex items-center font-sans text-sm select-none", "ActionBar-KWWAct", p, h, g, x, b), u[6] = p, u[7] = h, u[8] = g, u[9] = x, u[10] = b, u[11] = d) : d = u[11], u[12] !== a || u[13] !== d ? (c = (0, n.jsx)("div", {
                "data-markdown-copy": "exclude",
                contentEditable: !1,
                className: d,
                ...a
            }), u[12] = a, u[13] = d, u[14] = c) : c = u[14], c
        }
    }),
    sxZ: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("oy"),
            i = a("ygO"),
            l = a("Cq");

        function s(e) {
            let t, a, s, c, u = (0, r.c)(11),
                {
                    sourceVisible: m,
                    onToggle: f,
                    previewLabel: p
                } = e;
            u[0] !== p || u[1] !== m ? (t = m ? p ?? (0, n.jsx)(o.a, {
                id: "pageCodeBlock.showPreview",
                defaultMessage: "Show preview",
                description: "Button to preview a LaTeX code block as a typeset equation"
            }) : (0, n.jsx)(o.a, {
                id: "pageCodeBlock.showSource",
                defaultMessage: "Show source",
                description: "Button to show the source of a code block instead of its rendered preview"
            }), u[0] = p, u[1] = m, u[2] = t) : t = u[2];
            let h = t;
            return u[3] !== h ? (a = (0, n.jsx)("span", {
                className: "truncate",
                "data-tooltip-overflow-target": !0,
                children: h
            }), u[3] = h, u[4] = a) : a = u[4], u[5] !== f || u[6] !== a ? (s = (0, n.jsx)(i.a, {
                allowShrink: !0,
                color: "ghost",
                size: "composerSm",
                onMouseDown: d,
                onClick: f,
                children: a
            }), u[5] = f, u[6] = a, u[7] = s) : s = u[7], u[8] !== h || u[9] !== s ? (c = (0, n.jsx)(l.a, {
                cloneCustomTrigger: !0,
                openWhen: "trigger-overflows",
                tooltipContent: h,
                children: s
            }), u[8] = h, u[9] = s, u[10] = c) : c = u[10], c
        }

        function d(e) {
            return e.preventDefault()
        }
        a.d(t, {
            a: () => s
        })
    }),
    KV8: (function(e, t, a) {
        function n(e, t) {
            return "svg" === t || ("xml" === t || "html" === t) && /^\s*<svg/.test(e)
        }
        a.d(t, {
            a: () => n
        })
    }),
    la: (function(e, t, a) {
        a.d(t, {
            CodeSnippet: () => N
        });
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("zd"),
            l = a("Wf"),
            s = a("Nyc"),
            d = a("ae"),
            c = a("GRH"),
            u = a("KV8"),
            m = a("Cu"),
            f = a("rB");
        let p = new Set,
            h = null,
            g = !1,
            x = null,
            b = null,
            v = (0, m.a)(() => Promise.all([a.e(226913), a.e(64918), a.e(983645)]).then(a.bind(a, "cVa")).catch(e => ((0, f.b)(e instanceof Error ? e : Error("Failed to load code highlighting", {
                cause: e
            }), {
                tags: {
                    operation: "code-snippet-highlighter-load"
                }
            }), null)));

        function y() {
            if (null != x) return;
            let e = p.values().next().value;
            if (null == e) {
                null != h && (b = setTimeout(() => {
                    h?.terminate(), h = null, b = null
                }, 3e4));
                return
            }
            if (p.delete(e), x = e, !g && null == h) try {
                (h = new Worker(new URL(a.p + a.u(451282), a.b), Object.assign({}, {
                    type: "module"
                }, {
                    type: "module"
                }))).onmessage = e => k(e.data), h.onerror = e => {
                    e.preventDefault(), w(), null != x && j(x)
                }
            } catch {
                w()
            }
            null == h ? j(e) : h.postMessage(e.args)
        }

        function w() {
            null != h && (h.onmessage = null, h.onerror = null, h.terminate(), h = null), g = !0
        }

        function j(e) {
            v().then(t => {
                k(null != e.onResult && null != t ? t.highlightCode(...e.args) : null)
            }).catch(() => {
                (0, f.b)(Error("Code highlighting failed"), {
                    tags: {
                        operation: "code-snippet-highlighter"
                    }
                }), k(null)
            })
        }

        function k(e) {
            let t = x;
            x = null, null != e && t?.onResult?.(e), y()
        }
        let C = i.memo(function(e) {
            let t, a = (0, r.c)(2),
                {
                    html: o
                } = e;
            return a[0] !== o ? (t = (0, n.jsx)("span", {
                dangerouslySetInnerHTML: {
                    __html: o
                }
            }), a[0] = o, a[1] = t) : t = a[1], t
        });

        function N(e) {
            var t;
            let a, d, m, f, h, g, x, v, w, j, k, N, M, E, L, T, z, I, P, _, O, D, R, B, F, H, W, Q, K, U, q, G = (0, r.c)(74);
            G[0] !== e ? ({
                ref: O,
                wrapperClassName: _,
                alternateContent: f,
                previewContent: N,
                isShowingPreview: M,
                isStreaming: E,
                codeClassName: x,
                clipboardContent: h,
                codeCopyText: w,
                language: k,
                renderSvgAsImage: L,
                content: j,
                shouldWrapCode: T,
                codeContainerClassName: v,
                title: P,
                deferEnhancementsUntilVisible: z,
                variant: I,
                ...g
            } = e, G[0] = e, G[1] = f, G[2] = h, G[3] = g, G[4] = x, G[5] = v, G[6] = w, G[7] = j, G[8] = k, G[9] = N, G[10] = M, G[11] = E, G[12] = L, G[13] = T, G[14] = z, G[15] = I, G[16] = P, G[17] = _, G[18] = O) : (f = G[1], h = G[2], g = G[3], x = G[4], v = G[5], w = G[6], j = G[7], k = G[8], N = G[9], M = G[10], E = G[11], L = G[12], T = G[13], z = G[14], I = G[15], P = G[16], _ = G[17], O = G[18]);
            let $ = void 0 !== M && M,
                V = void 0 !== E && E,
                Z = void 0 === L || L,
                X = void 0 !== T && T,
                Y = void 0 !== z && z,
                J = void 0 === I ? "default" : I,
                ee = (0, i.useRef)(null),
                et = function(e, t) {
                    let a, n, o = (0, r.c)(4),
                        [l, s] = (0, i.useState)(!1),
                        d = !t || l;
                    return o[0] !== d || o[1] !== e ? (a = () => {
                        if (d) return;
                        let t = e.current;
                        if (null == t) return;
                        if ("u" < typeof IntersectionObserver) {
                            let e = setTimeout(() => {
                                s(!0)
                            }, 0);
                            return () => {
                                clearTimeout(e)
                            }
                        }
                        let a = new IntersectionObserver(e => {
                            e.some(S) && (s(!0), a.disconnect())
                        }, {
                            rootMargin: "600px 0px"
                        });
                        return a.observe(t), () => {
                            a.disconnect()
                        }
                    }, n = [d, e], o[0] = d, o[1] = e, o[2] = a, o[3] = n) : (a = o[2], n = o[3]), (0, i.useEffect)(a, n), d
                }(ee, Y),
                ea = (0, l.a)(),
                [en, er] = (0, i.useState)(null);
            G[19] !== j || G[20] !== V || G[21] !== k ? (D = {
                disposed: !1,
                latestContent: j,
                latestLanguage: k,
                latestIsStreaming: V,
                lastStartedAtMs: null,
                timeoutHandle: null,
                cancelHighlight: null
            }, G[19] = j, G[20] = V, G[21] = k, G[22] = D) : D = G[22];
            let eo = (0, i.useRef)(D);
            G[23] !== k ? (R = k?.trim().toLowerCase(), G[23] = k, G[24] = R) : R = G[24];
            let ei = "plaintext" === R;
            G[25] !== j || G[26] !== k || G[27] !== Z ? (B = Z && (0, u.a)(j, k), G[25] = j, G[26] = k, G[27] = Z, G[28] = B) : B = G[28];
            let el = B,
                es = et && null == f && !($ && null != N) && !el && !ei;
            G[29] !== j || G[30] !== V || G[31] !== k || G[32] !== es ? (F = () => {
                let e = eo.current;
                if (e.latestContent = j, e.latestLanguage = k, e.latestIsStreaming = V, !es) {
                    e.cancelHighlight?.(), e.cancelHighlight = null, null != e.timeoutHandle && (clearTimeout(e.timeoutHandle), e.timeoutHandle = null);
                    return
                }
                if (null != e.timeoutHandle) return;
                let t = performance.now(),
                    a = Math.max(0, 120 - (null == e.lastStartedAtMs ? 120 : t - e.lastStartedAtMs)),
                    n = () => {
                        let t;
                        if (e.timeoutHandle = null, e.disposed) return;
                        let a = e.latestContent,
                            n = e.latestLanguage,
                            r = e.latestIsStreaming;
                        e.lastStartedAtMs = performance.now(), e.cancelHighlight?.(), null != b && (clearTimeout(b), b = null), t = {
                            args: [a, n, {
                                cache: !r
                            }],
                            onResult: er
                        }, p.add(t), y(), e.cancelHighlight = () => {
                            p.delete(t), t.onResult = null
                        }
                    };
                0 === a ? n() : e.timeoutHandle = setTimeout(n, a)
            }, H = [j, k, V, es], G[29] = j, G[30] = V, G[31] = k, G[32] = es, G[33] = F, G[34] = H) : (F = G[33], H = G[34]), (0, i.useEffect)(F, H), t = eo, (m = (0, r.c)(3))[0] !== t ? (a = () => {
                let e = t.current;
                return e.disposed = !1, () => {
                    e.disposed = !0, e.cancelHighlight?.(), e.cancelHighlight = null, null != e.timeoutHandle && (clearTimeout(e.timeoutHandle), e.timeoutHandle = null)
                }
            }, d = [t], m[0] = t, m[1] = a, m[2] = d) : (a = m[1], d = m[2]), (0, i.useEffect)(a, d), G[35] !== j || G[36] !== en || G[37] !== ei ? (W = !ei && null != en && j.startsWith(en.code) ? en : null, G[35] = j, G[36] = en, G[37] = ei, G[38] = W) : W = G[38];
            let ed = W;
            if (G[39] !== j || G[40] !== ea || G[41] !== et || G[42] !== ei || G[43] !== ed || G[44] !== el) {
                let e, t = ei && et ? j.split("\n") : ed?.html.split("\n");
                G[46] !== j || G[47] !== ed ? (e = null != ed ? j.slice(ed.code.length) : j, G[46] = j, G[47] = ed, G[48] = e) : e = G[48];
                let a = e;
                Q = el ? (0, n.jsx)(s.a, {
                    className: "max-h-96 w-full",
                    alt: ea.formatMessage({
                        id: "codex.codeSnippet.svgImageAlt",
                        defaultMessage: "Image generated by the assistant",
                        description: "Accessible description for an SVG preview inside a code snippet"
                    }),
                    svgString: j
                }) : null != t ? (0, n.jsxs)("span", {
                    children: [t.map((e, a) => (0, n.jsxs)(i.Fragment, {
                        children: [ei ? (0, n.jsx)("span", {
                            children: e
                        }) : (0, n.jsx)(C, {
                            html: e
                        }), a < t.length - 1 ? "\n" : null]
                    }, a)), !ei && a ? (0, n.jsx)("span", {
                        children: a
                    }) : null]
                }) : (0, n.jsx)("span", {
                    children: j
                }), G[39] = j, G[40] = ea, G[41] = et, G[42] = ei, G[43] = ed, G[44] = el, G[45] = Q
            } else Q = G[45];
            let ec = Q,
                eu = P ?? k,
                em = w ?? (el ? j : void 0),
                ef = X ? "whitespace-pre-wrap!" : "whitespace-pre!",
                ep = "default" === J && "block text-size-code",
                eh = "default" === J && "CodeContent-ybJ8Tl",
                eg = "hover" === J && "text-xs";
            return G[49] !== x || G[50] !== ef || G[51] !== ep || G[52] !== eh || G[53] !== eg ? (K = (0, o.b)(ef, ep, eh, eg, x), G[49] = x, G[50] = ef, G[51] = ep, G[52] = eh, G[53] = eg, G[54] = K) : K = G[54], G[55] !== ec || G[56] !== K ? (U = (0, n.jsx)("code", {
                className: K,
                onCopy: A,
                children: ec
            }), G[55] = ec, G[56] = K, G[57] = U) : U = G[57], G[58] !== f || G[59] !== h || G[60] !== g || G[61] !== v || G[62] !== j || G[63] !== $ || G[64] !== k || G[65] !== N || G[66] !== X || G[67] !== eu || G[68] !== em || G[69] !== U || G[70] !== J || G[71] !== _ || G[72] !== O ? (q = (0, n.jsx)(c.a, {
                ref: O,
                className: _,
                ...g,
                sourceRef: ee,
                title: eu,
                content: j,
                clipboardContent: h,
                language: k,
                codeCopyText: em,
                shouldWrapCode: X,
                alternateContent: f,
                previewContent: N,
                isShowingPreview: $,
                sourceClassName: v,
                variant: J,
                source: U
            }), G[58] = f, G[59] = h, G[60] = g, G[61] = v, G[62] = j, G[63] = $, G[64] = k, G[65] = N, G[66] = X, G[67] = eu, G[68] = em, G[69] = U, G[70] = J, G[71] = _, G[72] = O, G[73] = q) : q = G[73], q
        }

        function S(e) {
            return e.isIntersecting
        }

        function A(e) {
            if (e.defaultPrevented) return;
            e.preventDefault(), e.stopPropagation();
            let t = window.getSelection()?.toString();
            t && (0, d.a)(t, e)
        }
    }),
    ZZg: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("qhi"),
            l = a("zd"),
            s = a("wD9"),
            d = a("Gk"),
            c = a("Lh"),
            u = a("HOL"),
            m = a("bf"),
            f = a("OE"),
            p = a("nzx"),
            h = a("Cq"),
            g = a("Ag");
        let x = {
            content: "flex w-full items-center gap-1.5",
            icon: "shrink-0 opacity-75 group-focus:opacity-100 group-hover:opacity-100 group-aria-[selected=true]:opacity-100",
            itemBase: (0, o.b)("text-default outline-hidden rounded-xl p-[var(--app-menu-item-padding,var(--padding-row-y)_var(--padding-row-x))] text-sm", g.a.comboboxRow),
            itemInteractive: "group hover:bg-primary-ghost-hover focus:bg-primary-ghost-hover aria-[selected=true]:bg-primary-ghost-hover cursor-interaction"
        };

        function b(e) {
            let t, a, i, d, u = (0, r.c)(32),
                {
                    triggerButton: m,
                    disabled: f,
                    children: h,
                    open: x,
                    onOpenChange: b,
                    modal: v,
                    side: y,
                    align: w,
                    sideOffset: j,
                    alignOffset: k,
                    contentRef: C,
                    contentId: N,
                    onCloseAutoFocus: S,
                    onEscapeKeyDown: A,
                    contentClassName: M,
                    contentStyle: E,
                    surface: L,
                    presentation: T,
                    contentWidth: z,
                    contentMaxHeight: I,
                    portalContainer: P
                } = e,
                _ = void 0 !== v && v,
                O = void 0 === L ? "menu" : L,
                D = void 0 === T ? "menu" : T,
                R = (0, s.c)(),
                [B, F] = (0, l.useState)(),
                {
                    handleOpenChange: H,
                    open: W
                } = (0, c.g)(x, b);
            return u[0] !== W ? (t = e => {
                null != e && W && F((0, c.b)(e))
            }, u[0] = W, u[1] = t) : t = u[1], u[2] !== f || u[3] !== t || u[4] !== m ? (a = (0, n.jsx)(p.e, {
                ref: t,
                asChild: !0,
                disabled: f,
                children: m
            }), u[2] = f, u[3] = t, u[4] = m, u[5] = a) : a = u[5], u[6] !== w || u[7] !== k || u[8] !== h || u[9] !== M || u[10] !== N || u[11] !== I || u[12] !== C || u[13] !== E || u[14] !== z || u[15] !== f || u[16] !== S || u[17] !== A || u[18] !== P || u[19] !== D || u[20] !== y || u[21] !== j || u[22] !== B || u[23] !== O || u[24] !== R ? (i = f ? null : (0, n.jsx)(p.c, {
                ...null == N ? {} : {
                    id: N
                },
                ref: C,
                align: w,
                alignOffset: k,
                className: (0, o.b)("no-drag z-50 flex select-none flex-col overflow-hidden", "form" === D ? ["rounded-xl bg-surface-elevated-secondary text-default shadow-lg ring-(--color-border-overlay) ring-(length:--dropdown-overlay-ring-width)", g.a.formRows] : ["panel" === O && "px-1 py-1", (0, c.c)(O)], (0, c.d)("anchor" === z ? void 0 : z), M),
                onCloseAutoFocus: S,
                onEscapeKeyDown: A,
                portalContainer: P,
                side: B ?? y,
                sideOffset: j,
                style: {
                    width: "anchor" === z ? `calc(var(--radix-popover-trigger-width) / ${R})` : void 0,
                    ...E,
                    maxHeight: (0, c.a)(I, "var(--radix-popover-content-available-height)") ?? "min(var(--radix-popover-content-available-height), calc(100vh - 16px))",
                    zoom: null == P && 1 !== R ? R : void 0
                },
                unstyled: !0,
                children: (0, n.jsx)("div", {
                    className: "min-h-0 overflow-y-auto",
                    children: h
                })
            }), u[6] = w, u[7] = k, u[8] = h, u[9] = M, u[10] = N, u[11] = I, u[12] = C, u[13] = E, u[14] = z, u[15] = f, u[16] = S, u[17] = A, u[18] = P, u[19] = D, u[20] = y, u[21] = j, u[22] = B, u[23] = O, u[24] = R, u[25] = i) : i = u[25], u[26] !== H || u[27] !== _ || u[28] !== W || u[29] !== a || u[30] !== i ? (d = (0, n.jsxs)(p.a, {
                modal: _,
                open: W,
                onOpenChange: H,
                children: [a, i]
            }), u[26] = H, u[27] = _, u[28] = W, u[29] = a, u[30] = i, u[31] = d) : d = u[31], d
        }

        function v(e) {
            "Enter" === e.key && e.stopPropagation()
        }
        a.d(t, {
            a: () => b
        }, {
            b: {
                Action: function(e) {
                    let t, a, l, s, d, c, m, p, h = (0, r.c)(22),
                        {
                            children: g,
                            className: b,
                            LeftIcon: y,
                            leftIconAsset: w,
                            RightIcon: j,
                            onClick: k
                        } = e;
                    return h[0] !== b ? (t = (0, o.b)("no-drag w-full", x.itemBase, x.itemInteractive, b), h[0] = b, h[1] = t) : t = h[1], h[2] !== w ? (a = w ? (0, n.jsx)(f.a, {
                        layout: "menu",
                        children: (0, n.jsx)(u.a, {
                            className: x.icon,
                            "aria-hidden": !1,
                            asset: w
                        })
                    }) : null, h[2] = w, h[3] = a) : a = h[3], h[4] !== y || h[5] !== w ? (l = null == w && y ? (0, n.jsx)(f.a, {
                        layout: "menu",
                        children: (0, n.jsx)(y, {
                            className: (0, o.b)("icon-xs", x.icon)
                        })
                    }) : null, h[4] = y, h[5] = w, h[6] = l) : l = h[6], h[7] !== g ? (s = (0, n.jsx)("span", {
                        className: "min-w-0 flex-1 truncate text-start",
                        children: g
                    }), h[7] = g, h[8] = s) : s = h[8], h[9] !== j ? (d = j ? (0, n.jsx)(j, {
                        className: (0, o.b)("icon-xs", x.icon)
                    }) : null, h[9] = j, h[10] = d) : d = h[10], h[11] !== a || h[12] !== l || h[13] !== s || h[14] !== d ? (c = (0, n.jsxs)("span", {
                        className: x.content,
                        children: [a, l, s, d]
                    }), h[11] = a, h[12] = l, h[13] = s, h[14] = d, h[15] = c) : c = h[15], h[16] !== t || h[17] !== c ? (m = (0, n.jsx)("button", {
                        type: "button",
                        className: t,
                        onKeyDown: v,
                        children: c
                    }), h[16] = t, h[17] = c, h[18] = m) : m = h[18], h[19] !== k || h[20] !== m ? (p = (0, n.jsx)(i.a.Item, {
                        asChild: !0,
                        onSelect: k,
                        children: m
                    }), h[19] = k, h[20] = m, h[21] = p) : p = h[21], p
                },
                Input: function(e) {
                    let t, a, l, s, c, u, f, p, h, g, b, v = (0, r.c)(23);
                    v[0] !== e ? ({
                        className: t,
                        inputClassName: a,
                        trailingContent: c,
                        presentation: s,
                        ...l
                    } = e, v[0] = e, v[1] = t, v[2] = a, v[3] = l, v[4] = s, v[5] = c) : (t = v[1], a = v[2], l = v[3], s = v[4], c = v[5]);
                    let y = void 0 === s ? "menu" : s;
                    return v[6] !== t || v[7] !== y ? (u = (0, o.b)("form" === y ? "mx-1.5 mt-1.5 flex h-8 items-center gap-2 rounded-md ps-2.5 pe-0 focus-within:inset-ring focus-within:inset-ring-text/50" : [x.content, "px-row-x py-row-y"], t), v[6] = t, v[7] = y, v[8] = u) : u = v[8], v[9] !== y ? (f = "form" === y ? (0, n.jsx)(m.Ke, {
                        className: "text-secondary"
                    }) : (0, n.jsx)(d.a, {
                        className: "icon-2xs shrink-0 text-tertiary"
                    }), v[9] = y, v[10] = f) : f = v[10], v[11] !== a ? (p = (0, o.b)("w-auto min-w-0 flex-1 appearance-none bg-transparent p-0! text-sm text-default outline-none placeholder:text-tertiary", a), v[11] = a, v[12] = p) : p = v[12], v[13] !== l || v[14] !== p ? (h = (0, n.jsx)(i.a.Input, {
                        autoFocus: !0,
                        className: p,
                        ...l
                    }), v[13] = l, v[14] = p, v[15] = h) : h = v[15], v[16] !== c ? (g = c ? (0, n.jsx)("div", {
                        className: "shrink-0",
                        children: c
                    }) : null, v[16] = c, v[17] = g) : g = v[17], v[18] !== u || v[19] !== f || v[20] !== h || v[21] !== g ? (b = (0, n.jsxs)("div", {
                        className: u,
                        children: [f, h, g]
                    }), v[18] = u, v[19] = f, v[20] = h, v[21] = g, v[22] = b) : b = v[22], b
                },
                Item: function(e) {
                    let t, a, l, s, d, c, u, p, b, v, y, w, j, k, C, N, S, A, M, E, L, T, z, I, P = (0, r.c)(54);
                    P[0] !== e ? ({
                        children: s,
                        className: d,
                        disabled: c,
                        checked: l,
                        icon: u,
                        LeftIcon: t,
                        RightIcon: a,
                        rightIcon: b,
                        rightIconClassName: v,
                        tooltipText: k,
                        tooltipAlign: w,
                        tooltipOpenWhen: j,
                        tooltipSide: y,
                        ...p
                    } = e, P[0] = e, P[1] = t, P[2] = a, P[3] = l, P[4] = s, P[5] = d, P[6] = c, P[7] = u, P[8] = p, P[9] = b, P[10] = v, P[11] = y, P[12] = w, P[13] = j, P[14] = k) : (t = P[1], a = P[2], l = P[3], s = P[4], d = P[5], c = P[6], u = P[7], p = P[8], b = P[9], v = P[10], y = P[11], w = P[12], j = P[13], k = P[14]);
                    let _ = void 0 === y ? "right" : y,
                        O = c ? "cursor-default opacity-50!" : "opacity-100!",
                        D = !c && x.itemInteractive;
                    P[15] !== d || P[16] !== O || P[17] !== D ? (C = (0, o.b)("no-drag min-h-[var(--app-menu-item-height,0px)]!", x.itemBase, O, D, d), P[15] = d, P[16] = O, P[17] = D, P[18] = C) : C = P[18], P[19] === Symbol.for("react.memo_cache_sentinel") ? (N = (0, o.b)(x.content, g.a.comboboxRowContent), P[19] = N) : N = P[19], P[20] !== l ? (S = null != l ? (0, n.jsx)("span", {
                        "aria-hidden": "true",
                        className: (0, o.b)("flex size-4 shrink-0 items-center justify-center rounded-sm border", l ? "border-transparent bg-primary-solid text-primary-solid" : "border-default bg-surface"),
                        children: l ? (0, n.jsx)(m.Tb, {}) : null
                    }) : null, P[20] = l, P[21] = S) : S = P[21], P[22] !== l || P[23] !== u ? (A = null == l && null != u ? (0, n.jsx)(f.a, {
                        layout: "menu",
                        children: (0, n.jsx)("span", {
                            className: (0, o.b)("icon-xs inline-flex items-center justify-center leading-none", x.icon),
                            children: u
                        })
                    }) : null, P[22] = l, P[23] = u, P[24] = A) : A = P[24], P[25] !== t || P[26] !== l || P[27] !== u ? (M = null == l && null == u && t ? (0, n.jsx)(f.a, {
                        layout: "menu",
                        children: (0, n.jsx)(t, {
                            className: (0, o.b)("icon-xs", x.icon)
                        })
                    }) : null, P[25] = t, P[26] = l, P[27] = u, P[28] = M) : M = P[28];
                    let R = null == k ? void 0 : "";
                    P[29] !== s || P[30] !== R ? (E = (0, n.jsx)("div", {
                        className: "min-w-0 flex-1 truncate",
                        "data-tooltip-overflow-target": R,
                        children: s
                    }), P[29] = s, P[30] = R, P[31] = E) : E = P[31], P[32] !== a || P[33] !== b || P[34] !== v ? (L = b ?? (a ? (0, n.jsx)(a, {
                        className: (0, o.b)(v ?? "icon-xs", x.icon)
                    }) : null), P[32] = a, P[33] = b, P[34] = v, P[35] = L) : L = P[35], P[36] !== E || P[37] !== L || P[38] !== S || P[39] !== A || P[40] !== M ? (T = (0, n.jsxs)("div", {
                        className: N,
                        children: [S, A, M, E, L]
                    }), P[36] = E, P[37] = L, P[38] = S, P[39] = A, P[40] = M, P[41] = T) : T = P[41], P[42] !== l || P[43] !== c || P[44] !== p || P[45] !== T || P[46] !== C ? (z = (0, n.jsx)(i.a.Item, {
                        "aria-checked": l,
                        disabled: c,
                        className: C,
                        ...p,
                        children: T
                    }), P[42] = l, P[43] = c, P[44] = p, P[45] = T, P[46] = C, P[47] = z) : z = P[47];
                    let B = z;
                    return P[48] !== B || P[49] !== w || P[50] !== j || P[51] !== _ || P[52] !== k ? (I = k ? (0, n.jsx)(h.a, {
                        cloneCustomTrigger: !0,
                        align: w,
                        openWhen: j,
                        side: _,
                        tooltipContent: (0, n.jsx)("div", {
                            className: "max-w-64 text-pretty",
                            children: k
                        }),
                        children: B
                    }) : B, P[48] = B, P[49] = w, P[50] = j, P[51] = _, P[52] = k, P[53] = I) : I = P[53], I
                },
                List: function(e) {
                    let t, a, l, s, d = (0, r.c)(8);
                    return d[0] !== e ? ({
                        className: t,
                        ...a
                    } = e, d[0] = e, d[1] = t, d[2] = a) : (t = d[1], a = d[2]), d[3] !== t ? (l = (0, o.b)("max-h-none! gap-0! overflow-y-visible!", g.a.comboboxList, t), d[3] = t, d[4] = l) : l = d[4], d[5] !== a || d[6] !== l ? (s = (0, n.jsx)(i.a.List, {
                        className: l,
                        ...a
                    }), d[5] = a, d[6] = l, d[7] = s) : s = d[7], s
                },
                Root: function(e) {
                    let t, a = (0, r.c)(4),
                        {
                            children: o,
                            label: l,
                            defaultValue: s
                        } = e;
                    return a[0] !== o || a[1] !== s || a[2] !== l ? (t = (0, n.jsx)(i.a, {
                        className: "min-w-0! transform-none! gap-0! rounded-none! border-0! bg-transparent! p-0! text-[length:inherit]! text-inherit! backdrop-blur-none!",
                        label: l,
                        defaultValue: s,
                        shouldFilter: !1,
                        children: o
                    }), a[0] = o, a[1] = s, a[2] = l, a[3] = t) : t = a[3], t
                }
            }
        })
    }),
    PD3: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on");

        function i(e) {
            let t, a, i, l, s, d, c, u, m = (0, r.c)(17);
            m[0] !== e ? ({
                children: t,
                className: a,
                tone: l,
                ...i
            } = e, m[0] = e, m[1] = t, m[2] = a, m[3] = i, m[4] = l) : (t = m[1], a = m[2], i = m[3], l = m[4]);
            let f = void 0 === l ? "accent" : l,
                p = "neutral" === f ? "bg-surface/80" : "bg-codex-drop-overlay/60";
            m[5] !== a || m[6] !== p ? (s = (0, o.b)("pointer-events-none absolute inset-0 z-40 flex items-center justify-center select-none", p, a), m[5] = a, m[6] = p, m[7] = s) : s = m[7];
            let h = "neutral" === f ? "bg-surface-elevated" : "bg-codex-drop-prompt";
            return m[8] !== h ? (d = (0, o.b)("inline-flex items-center gap-1 rounded-md border border-border/50 px-3 py-1 text-sm text-default shadow", h), m[8] = h, m[9] = d) : d = m[9], m[10] !== t || m[11] !== d ? (c = (0, n.jsx)("div", {
                className: d,
                children: t
            }), m[10] = t, m[11] = d, m[12] = c) : c = m[12], m[13] !== i || m[14] !== s || m[15] !== c ? (u = (0, n.jsx)("div", {
                className: s,
                ...i,
                children: c
            }), m[13] = i, m[14] = s, m[15] = c, m[16] = u) : u = m[16], u
        }
        a.d(t, {
            a: () => i
        })
    }),
    FkT: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on");

        function i(e) {
            let t, a, i, l, s, d, c, u, m, f = (0, r.c)(24),
                {
                    className: p,
                    contentClassName: h,
                    actions: g,
                    description: x,
                    icon: b,
                    title: v,
                    width: y
                } = e;
            f[0] !== p ? (t = (0, o.b)("flex w-full flex-col items-center justify-center px-4 py-8 text-center", p), f[0] = p, f[1] = t) : t = f[1];
            let w = "wide" === (void 0 === y ? "compact" : y) ? "max-w-xl" : "max-w-72";
            return f[2] !== h || f[3] !== w ? (a = (0, o.b)("flex w-full min-w-0 flex-col items-center gap-3", w, h), f[2] = h, f[3] = w, f[4] = a) : a = f[4], f[5] !== b ? (i = (0, n.jsx)("div", {
                className: "flex items-center justify-center [&>svg]:size-8 [&>svg]:text-secondary",
                children: b
            }), f[5] = b, f[6] = i) : i = f[6], f[7] !== v ? (l = (0, n.jsx)("div", {
                className: "text-lg leading-6 font-medium text-default",
                children: v
            }), f[7] = v, f[8] = l) : l = f[8], f[9] !== x ? (s = null == x ? null : (0, n.jsx)("div", {
                className: "w-full min-w-0 text-sm text-secondary",
                children: x
            }), f[9] = x, f[10] = s) : s = f[10], f[11] !== l || f[12] !== s ? (d = (0, n.jsxs)("div", {
                className: "flex w-full min-w-0 flex-col items-center gap-2",
                children: [l, s]
            }), f[11] = l, f[12] = s, f[13] = d) : d = f[13], f[14] !== g ? (c = null == g ? null : (0, n.jsx)("div", {
                className: "flex flex-wrap items-center justify-center gap-2",
                children: g
            }), f[14] = g, f[15] = c) : c = f[15], f[16] !== a || f[17] !== i || f[18] !== d || f[19] !== c ? (u = (0, n.jsxs)("div", {
                className: a,
                children: [i, d, c]
            }), f[16] = a, f[17] = i, f[18] = d, f[19] = c, f[20] = u) : u = f[20], f[21] !== u || f[22] !== t ? (m = (0, n.jsx)("div", {
                className: t,
                children: u
            }), f[21] = u, f[22] = t, f[23] = m) : m = f[23], m
        }
        a.d(t, {
            a: () => i
        })
    }),
    uWm: (function(e, t, a) {
        a.d(t, {
            a: () => d
        });
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("IP"),
            l = a("Jz"),
            s = a("mT2");

        function d(e) {
            let t, a, d, c, u, m, f, p, h, g = (0, r.c)(16),
                {
                    title: x,
                    content: b,
                    actions: v
                } = e;
            return g[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.b)("banner-cPVvz7", "@container"), g[0] = t) : t = g[0], g[1] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                opacity: 0,
                y: 8
            }, d = {
                opacity: 1,
                y: 0
            }, c = {
                type: "tween",
                ease: "easeInOut",
                duration: .25
            }, g[1] = a, g[2] = d, g[3] = c) : (a = g[1], d = g[2], c = g[3]), g[4] !== x ? (u = x && (0, n.jsx)("h3", {
                className: "font-semibold",
                children: x
            }), g[4] = x, g[5] = u) : u = g[5], g[6] !== b ? (m = (0, n.jsx)("div", {
                className: "description-izhOpC",
                children: b
            }), g[6] = b, g[7] = m) : m = g[7], g[8] !== u || g[9] !== m ? (f = (0, n.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-1",
                children: [u, m]
            }), g[8] = u, g[9] = m, g[10] = f) : f = g[10], g[11] !== v ? (p = null != v && (0, n.jsx)("div", {
                className: "mt-2 flex min-w-0 shrink-0 flex-wrap gap-2 pb-1 @min-[560px]:mt-0 @min-[560px]:pb-0",
                children: (0, n.jsx)(s.a, {
                    value: "recovery",
                    children: v
                })
            }), g[11] = v, g[12] = p) : p = g[12], g[13] !== f || g[14] !== p ? (h = (0, n.jsx)(l.a, {
                children: (0, n.jsx)(i.a.aside, {
                    "aria-live": "polite",
                    className: t,
                    role: "status",
                    initial: a,
                    animate: d,
                    transition: c,
                    children: (0, n.jsxs)("div", {
                        className: "flex min-w-0 grow flex-col @min-[560px]:flex-row @min-[560px]:items-center @min-[560px]:justify-between @min-[560px]:gap-6",
                        children: [f, p]
                    })
                })
            }), g[13] = f, g[14] = p, g[15] = h) : h = g[15], h
        }
    }),
    Ax: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("zd"),
            l = a("Wf"),
            s = a("bq"),
            d = a("Pjl"),
            c = a("ygO"),
            u = a("L4"),
            m = a("bf"),
            f = a("UxN"),
            p = a("Cq");

        function h(e) {
            let t, a, h, x, b, v, y, w, j, k, C, N, S, A, M, E, L, T, z, I, P, _, O, D, R, B, F, H, W, Q, K, U, q, G, $, V, Z, X, Y, J, ee, et, ea, en, er, eo, ei, el, es, ed, ec, eu, em, ef, ep, eh = (0, r.c)(132);
            eh[0] !== e ? ({
                children: a,
                onClick: S,
                autoFocus: t,
                color: D,
                size: F,
                radius: H,
                separated: W,
                disabled: Q,
                primaryDisabled: L,
                dropdownDisabled: C,
                loading: K,
                className: h,
                primaryClassName: E,
                dropdownButtonClassName: x,
                secondaryAriaLabel: P,
                secondaryIcon: U,
                type: J,
                dropdownContent: v,
                renderDropdown: z,
                dropdownButtonRef: b,
                dropdownAlign: q,
                dropdownDir: k,
                dropdownSide: G,
                dropdownSurface: R,
                dropdownContentMaxHeight: w,
                dropdownContentWidth: j,
                dropdownContentLayout: B,
                dropdownContentClassName: y,
                primaryAriaLabel: M,
                dropdownOpen: N,
                onDropdownOpenChange: A,
                tooltipContent: V,
                tooltipSide: X,
                tooltipAlign: $,
                tooltipSideOffset: Y,
                tooltipDelayOpen: Z,
                secondaryTooltipContent: _,
                secondaryTooltipDisabled: O,
                ref: T,
                ...I
            } = e, eh[0] = e, eh[1] = t, eh[2] = a, eh[3] = h, eh[4] = x, eh[5] = b, eh[6] = v, eh[7] = y, eh[8] = w, eh[9] = j, eh[10] = k, eh[11] = C, eh[12] = N, eh[13] = S, eh[14] = A, eh[15] = M, eh[16] = E, eh[17] = L, eh[18] = T, eh[19] = z, eh[20] = I, eh[21] = P, eh[22] = _, eh[23] = O, eh[24] = D, eh[25] = R, eh[26] = B, eh[27] = F, eh[28] = H, eh[29] = W, eh[30] = Q, eh[31] = K, eh[32] = U, eh[33] = q, eh[34] = G, eh[35] = $, eh[36] = V, eh[37] = Z, eh[38] = X, eh[39] = Y, eh[40] = J) : (t = eh[1], a = eh[2], h = eh[3], x = eh[4], b = eh[5], v = eh[6], y = eh[7], w = eh[8], j = eh[9], k = eh[10], C = eh[11], N = eh[12], S = eh[13], A = eh[14], M = eh[15], E = eh[16], L = eh[17], T = eh[18], z = eh[19], I = eh[20], P = eh[21], _ = eh[22], O = eh[23], D = eh[24], R = eh[25], B = eh[26], F = eh[27], H = eh[28], W = eh[29], Q = eh[30], K = eh[31], U = eh[32], q = eh[33], G = eh[34], $ = eh[35], V = eh[36], Z = eh[37], X = eh[38], Y = eh[39], J = eh[40]);
            let eg = void 0 === D ? "primary" : D,
                ex = void 0 === F ? "default" : F,
                eb = void 0 === H ? "default" : H,
                ev = void 0 !== W && W,
                ey = void 0 !== Q && Q,
                ew = void 0 !== K && K,
                ej = void 0 === U ? d.a : U,
                ek = void 0 === q ? "start" : q,
                eC = void 0 === G ? "bottom" : G,
                eN = void 0 === R ? "menu" : R,
                eS = void 0 === B ? "menu" : B,
                eA = (0, l.a)(),
                [eM, eE] = (0, i.useState)(!1),
                eL = ey || ew,
                eT = eL || !0 === L,
                ez = C ?? eL,
                eI = eT && ez,
                eP = void 0 !== N,
                e_ = eP ? N : eM,
                eO = "outline" === eg && eT && !ez;
            eh[41] !== eA || eh[42] !== P ? (ee = P ?? eA.formatMessage({
                id: "compoundButton.secondaryAction",
                defaultMessage: "Secondary action",
                description: "Aria label for the secondary target on the compound button"
            }), eh[41] = eA, eh[42] = P, eh[43] = ee) : ee = eh[43];
            let eD = ee;
            if ("string" == typeof M) et = M;
            else if (null != M) {
                let e;
                eh[44] !== eA || eh[45] !== M ? (e = eA.formatMessage(M), eh[44] = eA, eh[45] = M, eh[46] = e) : e = eh[46], et = e
            }
            eh[47] !== eP || eh[48] !== A ? (ea = e => {
                eP || eE(e), A?.(e)
            }, eh[47] = eP, eh[48] = A, eh[49] = ea) : ea = eh[49];
            let eR = ea,
                eB = ev ? "pe-3" : "pe-1",
                eF = ev && "full" === eb && "ps-4",
                eH = "outline" === eg && eT && "disabled:opacity-100",
                eW = eO && "disabled:[&>*]:opacity-40";
            eh[50] !== E || eh[51] !== eB || eh[52] !== eF || eh[53] !== eH || eh[54] !== eW ? (en = (0, o.b)("rounded-e-none border-e-0", eB, eF, eH, eW, E), eh[50] = E, eh[51] = eB, eh[52] = eF, eh[53] = eH, eh[54] = eW, eh[55] = en) : en = eh[55], eh[56] !== e_ || eh[57] !== eT || eh[58] !== S || eh[59] !== eR ? (er = e => {
                if (!eT) {
                    if (S) return void S(e);
                    eR(!e_)
                }
            }, eh[56] = e_, eh[57] = eT, eh[58] = S, eh[59] = eR, eh[60] = er) : er = eh[60], eh[61] !== a || eh[62] !== eO ? (eo = eO && ("string" == typeof a || "number" == typeof a) ? (0, n.jsx)("span", {
                children: a
            }) : a, eh[61] = a, eh[62] = eO, eh[63] = eo) : eo = eh[63], eh[64] !== t || eh[65] !== eg || eh[66] !== eT || eh[67] !== ew || eh[68] !== et || eh[69] !== eb || eh[70] !== ex || eh[71] !== en || eh[72] !== er || eh[73] !== eo || eh[74] !== J ? (ei = (0, n.jsx)(c.a, {
                autoFocus: t,
                color: eg,
                size: ex,
                radius: eb,
                disabled: eT,
                focusRing: "inset",
                loading: ew,
                className: en,
                "aria-label": et,
                onClick: er,
                type: J,
                children: eo
            }), eh[64] = t, eh[65] = eg, eh[66] = eT, eh[67] = ew, eh[68] = et, eh[69] = eb, eh[70] = ex, eh[71] = en, eh[72] = er, eh[73] = eo, eh[74] = J, eh[75] = ei) : ei = eh[75];
            let eQ = ei,
                eK = ev ? "relative ps-2 pe-2 before:pointer-events-none before:absolute before:inset-y-2 before:start-0 before:w-px before:bg-current/25" : "ps-0.5 pe-1.5",
                eU = "outline" === eg && ez && "disabled:opacity-100";
            eh[76] !== x || eh[77] !== eK || eh[78] !== eU ? (el = (0, o.b)("gap-0 rounded-s-none border-s-0", eK, eU, x), eh[76] = x, eh[77] = eK, eh[78] = eU, eh[79] = el) : el = eh[79], eh[80] !== ej || eh[81] !== eg || eh[82] !== ez || eh[83] !== eT || eh[84] !== ex ? (es = ("toolbar" === ex || "pageAction" === ex) && ej === d.a ? (0, n.jsx)(f.b, {
                icon: {
                    16: m.Zb,
                    20: m._b
                },
                className: "outline" === eg && ez && !eT ? "opacity-20" : "opacity-50"
            }) : (0, n.jsx)(ej, {
                className: (0, o.b)("icon-2xs", "outline" === eg && ez && !eT ? "opacity-20" : "opacity-50")
            }), eh[80] = ej, eh[81] = eg, eh[82] = ez, eh[83] = eT, eh[84] = ex, eh[85] = es) : es = eh[85], eh[86] !== eD || eh[87] !== eg || eh[88] !== b || eh[89] !== ez || eh[90] !== eb || eh[91] !== ex || eh[92] !== el || eh[93] !== es ? (ed = (0, n.jsx)(c.a, {
                ref: b,
                "aria-label": eD,
                color: eg,
                size: ex,
                radius: eb,
                disabled: ez,
                focusRing: "inset",
                className: el,
                onMouseDown: g,
                type: "button",
                children: es
            }), eh[86] = eD, eh[87] = eg, eh[88] = b, eh[89] = ez, eh[90] = eb, eh[91] = ex, eh[92] = el, eh[93] = es, eh[94] = ed) : ed = eh[94];
            let eq = ed;
            eh[95] !== eq || eh[96] !== _ || eh[97] !== O || eh[98] !== Z ? (ec = null == _ || !0 === O ? eq : (0, n.jsx)(p.a, {
                tooltipContent: _,
                delayOpen: Z,
                children: (0, n.jsx)("span", {
                    className: "inline-flex",
                    children: eq
                })
            }), eh[95] = eq, eh[96] = _, eh[97] = O, eh[98] = Z, eh[99] = ec) : ec = eh[99];
            let eG = ec,
                e$ = "full" === eb ? "rounded-full" : u.a[ex],
                eV = "outline" === eg && eI && "opacity-40";
            return eh[100] !== h || eh[101] !== e$ || eh[102] !== eV ? (eu = (0, o.b)("inline-flex self-start items-stretch overflow-hidden", e$, eV, h), eh[100] = h, eh[101] = e$, eh[102] = eV, eh[103] = eu) : eu = eh[103], eh[104] !== eQ || eh[105] !== $ || eh[106] !== V || eh[107] !== Z || eh[108] !== X || eh[109] !== Y ? (em = null == V ? eQ : (0, n.jsx)(p.a, {
                tooltipContent: V,
                side: X,
                align: $,
                sideOffset: Y,
                delayOpen: Z,
                children: (0, n.jsx)("span", {
                    className: "inline-flex min-w-0",
                    children: eQ
                })
            }), eh[104] = eQ, eh[105] = $, eh[106] = V, eh[107] = Z, eh[108] = X, eh[109] = Y, eh[110] = em) : em = eh[110], eh[111] !== ek || eh[112] !== v || eh[113] !== y || eh[114] !== eS || eh[115] !== w || eh[116] !== j || eh[117] !== k || eh[118] !== eC || eh[119] !== eN || eh[120] !== eG || eh[121] !== e_ || eh[122] !== ez || eh[123] !== z || eh[124] !== eR ? (ef = null != z ? z(eG) : (0, n.jsx)(s.a, {
                open: !ez && e_,
                onOpenChange: e => {
                    ez || eR(e)
                },
                dir: k,
                side: eC,
                align: ek,
                surface: eN,
                contentMaxHeight: w,
                contentWidth: j,
                contentClassName: y,
                triggerButton: eG,
                children: "menu" === eS ? (0, n.jsx)("div", {
                    className: "flex min-w-[160px] flex-col gap-0.5",
                    children: v
                }) : v
            }), eh[111] = ek, eh[112] = v, eh[113] = y, eh[114] = eS, eh[115] = w, eh[116] = j, eh[117] = k, eh[118] = eC, eh[119] = eN, eh[120] = eG, eh[121] = e_, eh[122] = ez, eh[123] = z, eh[124] = eR, eh[125] = ef) : ef = eh[125], eh[126] !== T || eh[127] !== I || eh[128] !== eu || eh[129] !== em || eh[130] !== ef ? (ep = (0, n.jsxs)("div", {
                ref: T,
                className: eu,
                ...I,
                children: [em, ef]
            }), eh[126] = T, eh[127] = I, eh[128] = eu, eh[129] = em, eh[130] = ef, eh[131] = ep) : ep = eh[131], ep
        }

        function g(e) {
            return e.preventDefault()
        }
        a.d(t, {
            a: () => h
        })
    }),
    rm: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("Gy"),
            i = a("on"),
            l = a("zd"),
            s = a("Wf"),
            d = a("oy"),
            c = a("wD9"),
            u = a("R9"),
            m = a("wd"),
            f = a("jD"),
            p = (a("IS"), a("WF")),
            h = a("bI"),
            g = a("bq");
        a("Lh");
        var x = a("OE"),
            b = a("gi"),
            v = a("Cq");

        function y(e, t) {
            return e.map(e => {
                if ("separator" === e.type) return {
                    ...e,
                    nativeLabel: "",
                    submenu: void 0
                };
                let a = e.submenu ? y(e.submenu, t) : void 0,
                    n = e.message ? t(e.message, e.messageValues) : e.id,
                    r = e.tooltipMessage ? t(e.tooltipMessage, e.tooltipMessageValues) : void 0;
                return {
                    ...e,
                    nativeLabel: n,
                    nativeTooltip: r,
                    submenu: a
                }
            })
        }

        function w(e) {
            let t, a, m, f, x, w, T, z, I, P, _, O, D, R, B, F, H, W, Q, K, U = (0, r.c)(98),
                {
                    items: q,
                    getItems: G,
                    children: $,
                    trigger: V,
                    disableNative: Z,
                    preserveBrowserContextMenu: X,
                    align: Y,
                    contentWidth: J,
                    loadingMessage: ee,
                    onOpenChange: et,
                    open: ea,
                    onCloseAutoFocus: en,
                    onAfterClose: er,
                    renderItem: eo,
                    renderDropdown: ei,
                    shortcuts: el,
                    awaitBeforeOpen: es,
                    onBeforeOpen: ed
                } = e,
                ec = void 0 === V ? "contextmenu" : V,
                eu = void 0 === es || es,
                em = (0, s.a)(),
                ef = l.useContext(b.a),
                ep = (0, c.c)(),
                eh = X && !0,
                [eg, ex] = l.useState(),
                eb = G && null != eg ? eg : y(q ?? [], em.formatMessage),
                [ev, ey] = l.useState(null),
                ew = ef?.registerOpen,
                ej = "native" === ev || "contextmenu" === ec && (ea ?? "dropdown" === ev);
            U[0] !== ej || U[1] !== ew ? (t = () => {
                if (ej) return ew?.()
            }, a = [ej, ew], U[0] = ej, U[1] = ew, U[2] = t, U[3] = a) : (t = U[2], a = U[3]), l.useLayoutEffect(t, a);
            let ek = l.useRef(null),
                eC = l.useRef(void 0);
            U[4] !== er ? (m = e => {
                null != e && ek.current === e && (ek.current = null, er?.())
            }, U[4] = er, U[5] = m) : m = U[5];
            let eN = (0, h.a)(m);
            U[6] !== eN ? (f = () => () => {
                let e = ek.current;
                e?.abort(), eC.current = void 0, eN(e)
            }, x = [eN], U[6] = eN, U[7] = f, U[8] = x) : (f = U[7], x = U[8]), l.useEffect(f, x), U[9] === Symbol.for("react.memo_cache_sentinel") ? (w = () => {
                ek.current?.abort(), eC.current = void 0;
                let e = new AbortController;
                return ek.current = e, e
            }, U[9] = w) : w = U[9];
            let eS = w;
            U[10] !== ee || U[11] !== et || U[12] !== ec || !1 !== U[13] ? (T = (e, t) => {
                e.signal.aborted || (p.a.error("Context menu preparation failed", {
                    safe: {},
                    sensitive: {
                        error: t
                    }
                }), e.abort(), ("contextmenu" === ec || "click" === ec && null != ee) && (ex([]), ey(null), et?.(!1)))
            }, U[10] = ee, U[11] = et, U[12] = ec, U[13] = !1, U[14] = T) : T = U[14];
            let eA = T;
            U[15] !== G || U[16] !== em || U[17] !== ee || U[18] !== et || U[19] !== ec || !1 !== U[20] ? (z = (e, t) => {
                if (t.signal.aborted) return [];
                let a = y(e, em.formatMessage);
                return G && ex(a), ("contextmenu" === ec || "click" === ec && null != ee && 0 === e.length) && (ey(e.length > 0 ? "dropdown" : null), 0 === e.length && et?.(!1)), a
            }, U[15] = G, U[16] = em, U[17] = ee, U[18] = et, U[19] = ec, U[20] = !1, U[21] = z) : z = U[21];
            let eM = z;
            U[22] !== G || U[23] !== eA || U[24] !== em || U[25] !== q || U[26] !== ee || U[27] !== et || U[28] !== eM || U[29] !== ec || !1 !== U[30] ? (I = (e, t) => {
                if (e.signal.aborted) return [];
                let a = G ? G() : q ?? [];
                if ("then" in a && "function" == typeof a.then) {
                    if (void 0 !== t && t) return Promise.resolve(a).then(t => eM(t, e));
                    let n = null != q && q.length > 0 ? q : void 0;
                    ex(y(n ?? (null == ee ? [] : [{
                        id: "context-menu-loading",
                        message: ee,
                        enabled: !1
                    }]), em.formatMessage)), null != n && ey("dropdown");
                    let r = new AbortController,
                        o = () => r.abort();
                    if (e.signal.addEventListener("abort", o, {
                            once: !0
                        }), "contextmenu" === ec && null == ee && null == n) {
                        let t = () => {
                                e.abort(), ey(null), et?.(!1)
                            },
                            a = {
                                capture: !0,
                                signal: r.signal
                            };
                        document.addEventListener("pointerdown", t, a), document.addEventListener("contextmenu", t, a), document.addEventListener("keydown", e => {
                            "Escape" === e.key && t()
                        }, a), window.addEventListener("blur", t, {
                            signal: r.signal
                        })
                    }
                    return Promise.resolve(a).then(t => eM(t, e)).catch(t => eA(e, t)).finally(() => {
                        e.signal.removeEventListener("abort", o), r.abort()
                    }), []
                }
                return eM(a, e)
            }, U[22] = G, U[23] = eA, U[24] = em, U[25] = q, U[26] = ee, U[27] = et, U[28] = eM, U[29] = ec, U[30] = !1, U[31] = I) : I = U[31];
            let eE = I;
            U[32] !== eu || U[33] !== eA || U[34] !== ed || U[35] !== eE ? (P = (e, t) => {
                let a = void 0 !== t && t;
                if (!eu) {
                    let t = eE(e, a),
                        n = ed?.();
                    return null != n && Promise.resolve(n).then(() => eE(e, a)).catch(t => eA(e, t)), t
                }
                let n = ed?.();
                return null != n && Promise.resolve(n).then(() => eE(e, a)).catch(t => eA(e, t)), eE(e, a)
            }, U[32] = eu, U[33] = eA, U[34] = ed, U[35] = eE, U[36] = P) : P = U[36];
            let eL = P;
            U[37] !== G || U[38] !== q || U[39] !== ed || U[40] !== eM ? (_ = async e => (await ed?.(), e.signal.aborted) ? [] : eM(await (G ? G() : q ?? []), e), U[37] = G, U[38] = q, U[39] = ed, U[40] = eM, U[41] = _) : _ = U[41];
            let eT = _;
            U[42] === Symbol.for("react.memo_cache_sentinel") ? (O = (e, t) => {
                !1 === e.enabled ? t.preventDefault() : e.selectAfterClose ? eC.current = e.onSelect : e.onSelect?.()
            }, U[42] = O) : O = U[42];
            let ez = (0, h.a)(O);
            U[43] !== eN || U[44] !== en || U[45] !== ea || U[46] !== ev ? (D = e => {
                if ("native" === ev) return void e.preventDefault();
                let t = eC.current;
                eC.current = void 0, null != t && (e.preventDefault(), t()), en?.(e), (ea ?? "dropdown" === ev) || eN(ek.current)
            }, U[43] = eN, U[44] = en, U[45] = ea, U[46] = ev, U[47] = D) : D = U[47];
            let eI = (0, h.a)(D);
            U[48] !== eA || U[49] !== et || U[50] !== eL ? (R = e => {
                if (e) {
                    let e = eS();
                    ey("dropdown"), et?.(!0);
                    try {
                        eL(e)
                    } catch (t) {
                        eA(e, t)
                    }
                } else ey(null), et?.(!1), ek.current?.abort()
            }, U[48] = eA, U[49] = et, U[50] = eL, U[51] = R) : R = U[51];
            let eP = (0, h.a)(R),
                e_ = A;
            U[52] !== eu || U[53] !== eN || U[54] !== eA || U[55] !== en || U[56] !== et || U[57] !== eL || U[58] !== eT || !1 !== U[59] ? (B = async e => {}, U[52] = eu, U[53] = eN, U[54] = eA, U[55] = en, U[56] = et, U[57] = eL, U[58] = eT, U[59] = !1, U[60] = B) : B = U[60];
            let eO = (0, h.a)(B),
                eD = $.props.onContextMenu;
            U[61] !== $.props || U[62] !== eO || U[63] !== eP || U[64] !== eh || U[65] !== ec || !1 !== U[66] ? (F = e => {
                if ($.props.onKeyDown?.(e), !eh && !e.defaultPrevented && e.target === e.currentTarget && ("ContextMenu" === e.key || "F10" === e.key && e.shiftKey) && !e.altKey && !e.ctrlKey && !e.metaKey)
                    if (e.preventDefault(), e.stopPropagation(), 1)
                        if ("click" === ec) eP(!0);
                        else {
                            let t = e.currentTarget.getBoundingClientRect();
                            e.currentTarget.dispatchEvent(new MouseEvent("contextmenu", {
                                bubbles: !0,
                                cancelable: !0,
                                clientX: t.left,
                                clientY: t.bottom
                            }))
                        }
                else eO(e)
            }, U[61] = $.props, U[62] = eO, U[63] = eP, U[64] = eh, U[65] = ec, U[66] = !1, U[67] = F) : F = U[67];
            let eR = (0, h.a)(F);
            U[68] !== eD || U[69] !== eO || U[70] !== eP || U[71] !== ev || U[72] !== eh || U[73] !== ec || !1 !== U[74] ? (H = e => {
                eD?.(e), e.stopPropagation(), eh || e.defaultPrevented || ("click" === ec && (e.preventDefault(), eP(!0)), "contextmenu" === ec && "dropdown" === ev && eP(!0))
            }, U[68] = eD, U[69] = eO, U[70] = eP, U[71] = ev, U[72] = eh, U[73] = ec, U[74] = !1, U[75] = H) : H = U[75];
            let eB = (0, h.a)(H);
            if (U[79] !== $ || U[80] !== eB || U[81] !== eR || U[82] !== ea || U[83] !== ev) {
                let e, t = "native" === ev || (ea ?? "dropdown" === ev);
                U[85] !== eB || U[86] !== eR || U[87] !== t ? (e = {
                    "aria-expanded": t,
                    onContextMenu: eB,
                    onKeyDown: eR
                }, U[85] = eB, U[86] = eR, U[87] = t, U[88] = e) : e = U[88], W = l.cloneElement($, e), U[79] = $, U[80] = eB, U[81] = eR, U[82] = ea, U[83] = ev, U[84] = W
            } else W = U[84];
            let eF = W,
                eH = e => e.map(t => "label" === t.type ? (0, n.jsx)(g.c.Title, {
                    children: e_(t)
                }, t.id) : "separator" === t.type ? (0, n.jsx)(o.Separator, {
                    className: "mx-1 my-[var(--app-menu-separator-gutter,var(--spacing))] border-t border-border/60"
                }, t.id) : "checkbox" === t.type ? (0, n.jsx)(v.a, {
                    tooltipContent: t.tooltipMessage ? (0, n.jsx)(d.a, {
                        ...t.tooltipMessage,
                        values: t.tooltipMessageValues
                    }) : null,
                    children: (0, n.jsx)(o.CheckboxItem, {
                        checked: t.checked ?? !1,
                        className: (0, i.b)("text-default outline-hidden flex min-h-[var(--app-menu-item-height,0px)] items-center justify-center rounded-xl p-[var(--app-menu-item-padding,calc(var(--spacing)*1.5))] text-sm cursor-interaction hover:bg-primary-ghost-hover focus:bg-primary-ghost-hover", !1 === t.enabled && "cursor-default opacity-50"),
                        disabled: !1 === t.enabled,
                        "aria-keyshortcuts": L(t.accelerator),
                        onSelect: e => ez(t, e),
                        children: (0, n.jsx)(M, {
                            checked: !0 === t.checked,
                            label: e_(t),
                            reserveIcon: e.some(S),
                            shortcutLabel: E(t.accelerator),
                            showCheckbox: !0
                        })
                    })
                }, t.id) : t.submenu ? (0, n.jsxs)(o.Sub, {
                    children: [(0, n.jsx)(o.SubTrigger, {
                        className: "flex min-h-[var(--app-menu-item-height,0px)] cursor-interaction items-center justify-between gap-1.5 rounded-xl p-[var(--app-menu-item-padding,calc(var(--spacing)*1.5))] text-sm text-default outline-hidden hover:bg-primary-ghost-hover focus:bg-primary-ghost-hover data-[state=open]:bg-primary-ghost-hover",
                        disabled: !1 === t.enabled,
                        children: (0, n.jsx)(M, {
                            icon: t.icon,
                            label: e_(t),
                            reserveIcon: e.some(N),
                            showChevron: !0
                        })
                    }), (0, n.jsx)(o.Portal, {
                        children: (0, n.jsx)(o.SubContent, {
                            "data-overlay-owner": ef?.id,
                            className: "z-50 m-px flex min-w-[200px] flex-col rounded-2xl bg-surface-elevated-secondary p-[var(--app-menu-gutter,var(--spacing))] text-default shadow-lg ring-[0.5px] ring-border select-none",
                            alignOffset: -11,
                            collisionPadding: 6,
                            style: {
                                zoom: 1 !== ep ? ep : void 0
                            },
                            children: eH(t.submenu)
                        })
                    })]
                }, t.id) : (0, n.jsx)(v.a, {
                    tooltipContent: t.tooltipMessage ? (0, n.jsx)(d.a, {
                        ...t.tooltipMessage,
                        values: t.tooltipMessageValues
                    }) : null,
                    children: (0, n.jsx)(o.Item, {
                        className: (0, i.b)("outline-hidden flex min-h-[var(--app-menu-item-height,0px)] items-center justify-center rounded-xl p-[var(--app-menu-item-padding,calc(var(--spacing)*1.5))] text-sm cursor-interaction hover:bg-primary-ghost-hover focus:bg-primary-ghost-hover", "danger" === t.tone ? "text-danger" : "text-default", !1 === t.enabled && "cursor-default opacity-50"),
                        onSelect: e => ez(t, e),
                        "aria-disabled": !1 === t.enabled,
                        role: "radio" === t.type ? "menuitemradio" : "menuitem",
                        "aria-checked": "radio" === t.type ? !0 === t.checked : void 0,
                        "aria-keyshortcuts": L(t.accelerator),
                        children: (0, n.jsx)(M, {
                            checked: !0 === t.checked,
                            showCheckbox: "radio" === t.type,
                            icon: t.icon,
                            label: e_(t),
                            reserveIcon: e.some(C),
                            shortcutLabel: E(t.accelerator)
                        })
                    })
                }, t.id));
            if ("click" === ec) {
                let e = (t, a) => {
                        let r = void 0 === a ? ez : a;
                        return t.map(a => {
                            let o = eo?.(a, r);
                            if (null != o) return (0, n.jsx)(l.Fragment, {
                                children: o
                            }, a.id);
                            if ("separator" === a.type) return (0, n.jsx)(g.c.Separator, {}, a.id);
                            if ("label" === a.type) return (0, n.jsx)(g.c.Title, {
                                children: e_(a)
                            }, a.id);
                            let i = e_(a),
                                s = a.tooltipMessage ? (0, n.jsx)(d.a, {
                                    ...a.tooltipMessage,
                                    values: a.tooltipMessageValues
                                }) : void 0;
                            if (a.submenu) return (0, n.jsx)(g.c.FlyoutSubmenuItem, {
                                label: (0, n.jsx)(M, {
                                    icon: a.icon,
                                    label: i,
                                    reserveIcon: t.some(k)
                                }),
                                disabled: !1 === a.enabled,
                                tooltipText: s,
                                children: e(a.submenu, r)
                            }, a.id);
                            if ("checkbox" === a.type) return (0, n.jsx)(v.a, {
                                tooltipContent: s,
                                children: (0, n.jsx)(g.c.CheckboxItem, {
                                    checked: a.checked,
                                    closeOnSelect: a.closeOnSelect,
                                    disabled: !1 === a.enabled,
                                    "aria-keyshortcuts": L(a.accelerator),
                                    onSelect: e => r(a, e),
                                    children: null == a.accelerator ? i : (0, n.jsx)(M, {
                                        label: i,
                                        shortcutLabel: E(a.accelerator)
                                    })
                                })
                            }, a.id);
                            let c = null != el && Object.hasOwn(el, a.id) ? el[a.id] : E(a.accelerator);
                            return (0, n.jsx)(g.c.Item, {
                                disabled: !1 === a.enabled,
                                href: a.href,
                                role: "radio" === a.type ? "menuitemradio" : "menuitem",
                                "aria-checked": "radio" === a.type ? !0 === a.checked : void 0,
                                RightIcon: !0 === a.checked ? u.a : void 0,
                                "aria-keyshortcuts": null == c ? void 0 : L(a.accelerator),
                                onClick: a.onClick,
                                onSelect: null == a.onClick ? e => r(a, e) : void 0,
                                tone: a.tone,
                                tooltipText: s,
                                children: (0, n.jsx)(M, {
                                    icon: a.icon,
                                    label: i,
                                    reserveIcon: t.some(j),
                                    shortcutLabel: c
                                })
                            }, a.id)
                        })
                    },
                    t = {
                        open: "native" !== ev && (ea ?? "dropdown" === ev),
                        onCloseAutoFocus: eI,
                        triggerButton: eF,
                        align: Y,
                        contentWidth: J ?? "menu",
                        onOpenChange: eP,
                        children: e(!0 === ea && null != q ? y(q, em.formatMessage) : eb)
                    };
                return null != ei ? ei({
                    ...t,
                    items: !0 === ea && null != q ? q : eb,
                    onSelect: ez,
                    renderItemContent: e => (0, n.jsx)(M, {
                        icon: e.icon,
                        label: e.message ? (0, n.jsx)(d.a, {
                            ...e.message,
                            values: e.messageValues
                        }) : e.id,
                        showCheckbox: "checkbox" === e.type,
                        checked: e.checked,
                        shortcutLabel: null != el && Object.hasOwn(el, e.id) ? el[e.id] : E(e.accelerator)
                    }),
                    renderSubmenu: (t, a) => null == t.submenu ? null : e(y(t.submenu, em.formatMessage), a)
                }) : (0, n.jsx)(g.a, {
                    ...t
                })
            }
            let eW = ea ?? "dropdown" === ev;
            U[89] !== eh || U[90] !== eF ? (Q = (0, n.jsx)(o.Trigger, {
                asChild: !0,
                disabled: eh,
                children: eF
            }), U[89] = eh, U[90] = eF, U[91] = Q) : Q = U[91];
            let eQ = eb.length > 0 && (0, n.jsx)(o.Portal, {
                children: (0, n.jsx)(o.Content, {
                    "data-overlay-owner": ef?.id,
                    className: "z-50 m-px flex min-w-[180px] flex-col rounded-2xl bg-surface-elevated-secondary p-[var(--app-menu-gutter,var(--spacing))] text-default shadow-lg ring-[0.5px] ring-border select-none",
                    collisionPadding: 6,
                    onCloseAutoFocus: eI,
                    style: {
                        zoom: 1 !== ep ? ep : void 0
                    },
                    children: eH(eb)
                })
            });
            return U[92] !== eP || U[93] !== o.Root || U[94] !== eW || U[95] !== Q || U[96] !== eQ ? (K = (0, n.jsxs)(o.Root, {
                open: eW,
                onOpenChange: eP,
                children: [Q, eQ]
            }), U[92] = eP, U[93] = o.Root, U[94] = eW, U[95] = Q, U[96] = eQ, U[97] = K) : K = U[97], K
        }

        function j(e) {
            return null != e.icon
        }

        function k(e) {
            return null != e.icon
        }

        function C(e) {
            return null != e.icon
        }

        function N(e) {
            return null != e.icon
        }

        function S(e) {
            return null != e.icon
        }

        function A(e) {
            return e.message ? (0, n.jsx)(d.a, {
                ...e.message,
                values: e.messageValues
            }) : e.id
        }

        function M(e) {
            let t, a, o, s, d, c, f, p = (0, r.c)(24),
                {
                    checked: h,
                    icon: g,
                    label: b,
                    reserveIcon: v,
                    shortcutLabel: y,
                    showCheckbox: w,
                    showChevron: j
                } = e;
            p[0] !== g ? (t = "function" == typeof g ? l.createElement(g) : g, p[0] = g, p[1] = t) : t = p[1];
            let k = t;
            if ("string" == typeof k && k && !k.startsWith("data:image/svg+xml")) {
                let e;
                p[2] !== k ? (e = (0, n.jsx)("img", {
                    className: "icon-sm shrink-0 object-contain",
                    alt: "",
                    src: k
                }), p[2] = k, p[3] = e) : e = p[3], k = e
            }
            return p[4] !== h || p[5] !== w ? (a = w ? (0, n.jsx)(x.a, {
                layout: "menu",
                children: h ? (0, n.jsx)(u.a, {
                    "aria-hidden": !0,
                    className: "icon-xs"
                }) : null
            }) : null, p[4] = h, p[5] = w, p[6] = a) : a = p[6], p[7] !== g || p[8] !== k || p[9] !== v || p[10] !== w ? (o = g || v && !w ? (0, n.jsx)(x.a, {
                layout: "menu",
                children: null != k && "string" != typeof k ? k : (0, n.jsx)("span", {
                    "aria-hidden": !0,
                    className: (0, i.b)("icon-sm shrink-0", k && "bg-current"),
                    style: k ? {
                        maskImage: `url("${k}")`,
                        maskPosition: "center",
                        maskRepeat: "no-repeat",
                        maskSize: "contain"
                    } : void 0
                })
            }) : null, p[7] = g, p[8] = k, p[9] = v, p[10] = w, p[11] = o) : o = p[11], p[12] !== b ? (s = (0, n.jsx)("span", {
                className: "truncate",
                children: b
            }), p[12] = b, p[13] = s) : s = p[13], p[14] !== y ? (d = null == y ? null : (0, n.jsx)("span", {
                "aria-hidden": !0,
                className: "ms-auto shrink-0 text-xs text-codex-description",
                children: y
            }), p[14] = y, p[15] = d) : d = p[15], p[16] !== j ? (c = j ? (0, n.jsx)(m.a, {
                className: "icon-xs ms-auto opacity-50",
                "data-rtl-flip": ""
            }) : null, p[16] = j, p[17] = c) : c = p[17], p[18] !== a || p[19] !== o || p[20] !== s || p[21] !== d || p[22] !== c ? (f = (0, n.jsxs)("span", {
                className: "flex w-full items-center gap-1.5",
                children: [a, o, s, d, c]
            }), p[18] = a, p[19] = o, p[20] = s, p[21] = d, p[22] = c, p[23] = f) : f = p[23], f
        }

        function E(e) {
            return null == e ? void 0 : (0, f.b)(e)
        }

        function L(e) {
            return e?.split("+").map(e => "CmdOrCtrl" === e || "CommandOrControl" === e ? (0, f.a)() ? "Meta" : "Control" : "Command" === e || "Cmd" === e ? "Meta" : "Ctrl" === e ? "Control" : "Option" === e ? "Alt" : e).join("+")
        }
        a("aA"), new WeakMap, a.d(t, {
            a: () => w
        })
    }),
    uuN: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("CU"),
            i = a("on"),
            l = a("zd"),
            s = a("Wf"),
            d = a("oy"),
            c = a("bf"),
            u = a("R9"),
            m = a("B1y"),
            f = a("ygO"),
            p = a("UxN");
        let h = {
            default: {
                color: "ghost",
                size: "icon"
            },
            toolbar: {
                color: "ghostActive",
                size: "imageToolbar",
                uniform: !0
            },
            codeBlock: {
                color: "ghost",
                size: "composerSm",
                uniform: !0
            },
            blockAction: {
                color: "blockAction",
                radius: "full",
                size: "inputIcon"
            },
            primaryAction: {
                color: "composerPrimary",
                size: "dialog"
            },
            secondaryAction: {
                color: "outlineCard",
                size: "actionSm"
            },
            inline: {
                color: "ghostMuted",
                size: "inline"
            }
        };

        function g(e) {
            let t, a, g, b, v, y, w, j, k, C, N, S, A, M, E, L, T = (0, r.c)(74),
                {
                    buttonText: z,
                    iconClassName: I,
                    showIcon: P,
                    icons: _,
                    onCopy: O,
                    onKeyDown: D,
                    ariaLabel: R,
                    className: B,
                    isDisabled: F,
                    iconOnly: H,
                    showTooltip: W,
                    tooltipSide: Q,
                    tooltipSideOffset: K,
                    variant: U,
                    renderButton: q
                } = e,
                G = void 0 === I ? "icon-sm" : I,
                $ = void 0 === P || P,
                V = void 0 !== H && H,
                Z = void 0 === W || W,
                X = void 0 === U ? "default" : U,
                Y = (0, s.a)(),
                [J, ee] = (0, l.useState)(!1),
                [et, ea] = (0, l.useState)(!1),
                en = (0, l.useRef)(!1),
                er = (0, l.useRef)(!1),
                eo = (0, l.useRef)(void 0);
            T[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => (er.current = !0, () => {
                er.current = !1, window.clearTimeout(eo.current)
            }), a = [], T[0] = t, T[1] = a) : (t = T[0], a = T[1]), (0, l.useInsertionEffect)(t, a), T[2] !== X ? (g = e => {
                er.current && (en.current = !1, ea(!1), !1 !== e && (ee(!0), window.clearTimeout(eo.current), eo.current = window.setTimeout(() => {
                    eo.current = void 0, ee(!1)
                }, "inline" === X ? 1e3 : 2e3)))
            }, T[2] = X, T[3] = g) : g = T[3];
            let ei = g;
            T[4] !== ei || T[5] !== O ? (b = e => {
                if (e.stopPropagation(), en.current) return;
                let t = O(e);
                null != t && "boolean" != typeof t ? (en.current = !0, ea(!0), t.then(e => ei(!1 !== e), () => ei(!1))) : ei(!1 !== t)
            }, T[4] = ei, T[5] = O, T[6] = b) : b = T[6];
            let el = b;
            T[7] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, n.jsx)(d.a, {
                id: "copyButton.copied",
                tagName: "span",
                defaultMessage: "Copied",
                description: "Text displayed when the content has been copied"
            }), T[7] = v) : v = T[7];
            let es = v,
                ed = J && "inline" !== X ? es : z;
            if (!0 === ed) {
                let e;
                T[8] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(d.a, {
                    id: "copyButton.copy",
                    tagName: "span",
                    defaultMessage: "Copy",
                    description: "Text displayed when the content can be copied"
                }), T[8] = e) : e = T[8], ed = e
            } else if ("string" == typeof ed) {
                let e;
                T[9] !== ed ? (e = (0, n.jsx)("span", {
                    children: ed
                }), T[9] = ed, T[10] = e) : e = T[10], ed = e
            }
            T[11] !== R || T[12] !== J || T[13] !== Y ? (y = J ? Y.formatMessage({
                id: "copyButton.copiedAriaLabel",
                defaultMessage: "Copied",
                description: "Aria label for a button state when text has been copied"
            }) : R ?? Y.formatMessage({
                id: "copyButton.copyAriaLabel",
                defaultMessage: "Copy",
                description: "Aria label for a button for content that can be copied"
            }), T[11] = R, T[12] = J, T[13] = Y, T[14] = y) : y = T[14];
            let ec = et || void 0,
                eu = et || void 0,
                em = J ? void 0 : el;
            T[15] !== J || T[16] !== V || T[17] !== ed || T[18] !== X ? (w = "inline" === X && !V && (0, n.jsxs)("span", {
                className: "grid min-w-0 text-start",
                children: [(0, n.jsx)("span", {
                    className: (0, i.b)("col-start-1 row-start-1 truncate transition-opacity duration-basic group-hover/copy:underline motion-reduce:transition-none", J ? "opacity-0" : "opacity-100"),
                    "aria-hidden": J,
                    children: ed
                }), (0, n.jsx)("span", {
                    className: (0, i.b)("col-start-1 row-start-1 truncate text-success transition-opacity duration-basic motion-reduce:transition-none", J ? "opacity-100" : "opacity-0"),
                    "aria-hidden": !J,
                    children: es
                })]
            }), T[15] = J, T[16] = V, T[17] = ed, T[18] = X, T[19] = w) : w = T[19];
            let ef = $ && null != _ && (J ? _.copied : _.copy);
            T[20] !== J || T[21] !== _ || T[22] !== $ || T[23] !== X ? (j = $ && null == _ && "blockAction" === X && (J ? (0, n.jsx)(p.b, {
                icon: {
                    16: c.Tb,
                    20: c.Ub
                }
            }) : (0, n.jsx)(p.b, {
                icon: {
                    16: c.Lh,
                    20: c.Mh
                }
            })), T[20] = J, T[21] = _, T[22] = $, T[23] = X, T[24] = j) : j = T[24], T[25] !== J || T[26] !== _ || T[27] !== $ || T[28] !== X ? (k = $ && null == _ && ("toolbar" === X || "primaryAction" === X) && (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(n.Fragment, {
                    children: J ? (0, n.jsx)(c.Ub, {}) : (0, n.jsx)(c.Mh, {})
                }), null]
            }), T[25] = J, T[26] = _, T[27] = $, T[28] = X, T[29] = k) : k = T[29], T[30] !== J || T[31] !== _ || T[32] !== $ || T[33] !== X ? (C = $ && null == _ && ("codeBlock" === X || "secondaryAction" === X) && (J ? (0, n.jsx)(c.Tb, {}) : (0, n.jsx)(c.Lh, {})), T[30] = J, T[31] = _, T[32] = $, T[33] = X, T[34] = C) : C = T[34], T[35] !== J || T[36] !== G || T[37] !== _ || T[38] !== $ || T[39] !== X ? (N = $ && null == _ && "default" === X && (J ? (0, n.jsx)(u.a, {
                className: G
            }) : (0, n.jsx)(m.a, {
                className: G
            })), T[35] = J, T[36] = G, T[37] = _, T[38] = $, T[39] = X, T[40] = N) : N = T[40];
            let ep = "inline" !== X && !V && ed;
            T[41] !== w || T[42] !== ef || T[43] !== j || T[44] !== k || T[45] !== C || T[46] !== N || T[47] !== ep ? (S = (0, n.jsxs)(n.Fragment, {
                children: [w, ef, j, k, C, N, ep]
            }), T[41] = w, T[42] = ef, T[43] = j, T[44] = k, T[45] = C, T[46] = N, T[47] = ep, T[48] = S) : S = T[48], T[49] !== B || T[50] !== F || T[51] !== D || T[52] !== y || T[53] !== ec || T[54] !== eu || T[55] !== em || T[56] !== S ? (A = {
                className: B,
                "aria-label": y,
                "aria-busy": ec,
                "aria-disabled": eu,
                disabled: F,
                onClick: em,
                onKeyDown: D,
                children: S
            }, T[49] = B, T[50] = F, T[51] = D, T[52] = y, T[53] = ec, T[54] = eu, T[55] = em, T[56] = S, T[57] = A) : A = T[57];
            let eh = A;
            T[58] !== eh || T[59] !== B || T[60] !== J || T[61] !== q || T[62] !== X ? (M = null == q ? (0, n.jsx)(f.a, {
                ...h[X],
                ...eh,
                className: (0, i.b)(J && "primaryAction" !== X && "text-default", "inline" === X && "group/copy max-w-full", B)
            }) : (0, n.jsx)(x, {
                ...eh,
                renderButton: q
            }), T[58] = eh, T[59] = B, T[60] = J, T[61] = q, T[62] = X, T[63] = M) : M = T[63];
            let eg = M;
            T[64] !== z ? (E = "string" == typeof z ? (0, n.jsx)("span", {
                children: z
            }) : z, T[64] = z, T[65] = E) : E = T[65];
            let ex = E;
            return T[66] !== eg || T[67] !== J || T[68] !== V || T[69] !== Z || T[70] !== Q || T[71] !== K || T[72] !== ex ? (L = V && Z ? (0, n.jsx)(o.a, {
                side: Q,
                sideOffset: K,
                content: J ? es : ex ?? (0, n.jsx)(d.a, {
                    id: "CopyButton.copyTooltip",
                    tagName: "span",
                    defaultMessage: "Copy",
                    description: "Tooltip on copy message icon button"
                }),
                children: eg
            }) : eg, T[66] = eg, T[67] = J, T[68] = V, T[69] = Z, T[70] = Q, T[71] = K, T[72] = ex, T[73] = L) : L = T[73], L
        }

        function x(e) {
            let {
                renderButton: t,
                ...a
            } = e;
            return t(a)
        }
        a.d(t, {
            a: () => g
        })
    }),
    WJL: (function(e, t, a) {
        var n = a("Qo"),
            r = a("zd");

        function o() {
            let e, t = (0, n.c)(1);
            return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = [], t[0] = e) : e = t[0], (0, r.useLayoutEffect)(i, e), null
        }

        function i() {
            let e = document.documentElement,
                t = () => {
                    document.hidden ? e.style.setProperty("--decorative-animation-play-state", "paused") : e.style.removeProperty("--decorative-animation-play-state")
                };
            return t(), document.addEventListener("visibilitychange", t), () => {
                document.removeEventListener("visibilitychange", t), e.style.removeProperty("--decorative-animation-play-state")
            }
        }
        a.d(t, {
            a: () => o
        })
    }),
    aq: (function(e, t, a) {
        let n = new WeakMap,
            r = "--decorative-animation-play-state";

        function o(e, t) {
            let a;
            if (null == e) return;
            if ("u" < typeof IntersectionObserver) return void t?.(!0);
            let o = e.ownerDocument,
                i = n.get(o);
            null == i && (a = new Map, i = {
                observer: new IntersectionObserver(e => {
                    for (let t of e) a.get(t.target)?.(t.isIntersecting)
                }),
                targets: a
            }, n.set(o, i));
            let l = a => {
                a ? e.style.removeProperty(r) : e.style.setProperty(r, "paused"), t?.(a)
            };
            return l(!1), i.targets.set(e, l), i.observer.observe(e), () => {
                i.targets.delete(e), i.observer.unobserve(e), e.style.removeProperty(r), 0 === i.targets.size && (i.observer.disconnect(), n.delete(o))
            }
        }
        a.d(t, {
            a: () => o
        })
    }),
    OXR: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("Pjl"),
            l = a("aBX");

        function s(e) {
            let t, a, s, d, c, u, m, f, p = (0, r.c)(29),
                {
                    actions: h,
                    children: g,
                    collapsible: x,
                    defaultOpen: b,
                    disableContentInlineInset: v,
                    count: y,
                    id: w,
                    onOpenChange: j,
                    showDivider: k,
                    title: C
                } = e,
                N = void 0 === b || b,
                S = void 0 === k || k;
            p[0] !== h || p[1] !== x ? (t = null == h ? null : (0, n.jsx)("span", {
                className: "flex items-center gap-2",
                role: "presentation",
                onClick: e => {
                    x && (e.preventDefault(), e.stopPropagation())
                },
                onKeyDown: e => {
                    x && e.stopPropagation()
                },
                children: h
            }), p[0] = h, p[1] = x, p[2] = t) : t = p[2];
            let A = t;
            p[3] !== x ? (a = x ? (0, n.jsx)(i.a, {
                className: "icon-2xs -rotate-90 transition-transform group-open/section:rotate-0 motion-reduce:transition-none"
            }) : null, p[3] = x, p[4] = a) : a = p[4], p[5] !== a || p[6] !== C ? (s = (0, n.jsxs)(n.Fragment, {
                children: [C, a]
            }), p[5] = a, p[6] = C, p[7] = s) : s = p[7];
            let M = s,
                E = x ? "details" : "section";
            p[8] !== x || p[9] !== N || p[10] !== j ? (d = x ? {
                open: N,
                onToggle: e => {
                    j?.(e.currentTarget.open)
                }
            } : {}, p[8] = x, p[9] = N, p[10] = j, p[11] = d) : d = p[11];
            let L = d,
                T = x ? "summary" : "div";
            p[12] !== A || p[13] !== y || p[14] !== M || p[15] !== S || p[16] !== T ? (c = (0, n.jsx)(l.a, {
                action: A,
                as: T,
                count: y,
                showDivider: S,
                title: M
            }), p[12] = A, p[13] = y, p[14] = M, p[15] = S, p[16] = T, p[17] = c) : c = p[17];
            let z = !(void 0 !== v && v) && "px-[var(--detail-page-inline-inset,0px)]";
            return p[18] !== z ? (u = (0, o.b)("flex flex-col gap-1", z), p[18] = z, p[19] = u) : u = p[19], p[20] !== g || p[21] !== u ? (m = (0, n.jsx)("div", {
                className: u,
                children: g
            }), p[20] = g, p[21] = u, p[22] = m) : m = p[22], p[23] !== E || p[24] !== w || p[25] !== L || p[26] !== m || p[27] !== c ? (f = (0, n.jsxs)(E, {
                ...L,
                id: w,
                className: "group/section flex flex-col gap-4 [--sectioned-page-leading-inset:var(--detail-page-inline-inset,0px)]",
                children: [c, m]
            }), p[23] = E, p[24] = w, p[25] = L, p[26] = m, p[27] = c, p[28] = f) : f = p[28], f
        }
        a.d(t, {
            a: () => s
        })
    }),
    mU: (function(e, t, a) {
        a.d(t, {
            a: () => s,
            b: () => f,
            c: () => p,
            d: () => m,
            e: () => g,
            f: () => b,
            g: () => x
        });
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("zd"),
            l = a("ygO");
        let s = "w-auto gap-2",
            d = "relative rounded-lg border border-chart-blue/40";

        function c() {
            return !("u" < typeof window) && null != window.localStorage && "function" == typeof window.localStorage.getItem && "1" === window.localStorage.getItem("codex.debug.dialogLayout")
        }

        function u(e) {
            let t, a = (0, r.c)(2),
                {
                    name: o
                } = e;
            return a[0] !== o ? (t = (0, n.jsx)("span", {
                className: "absolute -top-2 left-2 rounded bg-chart-blue/15 px-1.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-chart-blue",
                children: o
            }), a[0] = o, a[1] = t) : t = a[1], t
        }

        function m(e) {
            let t, a, i, l, s, m, f, p, h, g, x, b = (0, r.c)(36),
                {
                    icon: v,
                    title: y,
                    subtitle: w,
                    className: j,
                    iconClassName: k,
                    iconBackgroundClassName: C,
                    iconVariant: N,
                    iconLoading: S,
                    titleSize: A,
                    titleClassName: M,
                    subtitleSize: E,
                    subtitleTone: L,
                    subtitleClassName: T,
                    variant: z
                } = e,
                I = void 0 === N ? "default" : N,
                P = void 0 !== S && S,
                _ = void 0 === A ? "dialog" : A,
                O = void 0 === E ? "base" : E,
                D = void 0 === L ? "tertiary" : L,
                R = void 0 === z ? "default" : z;
            return b[0] !== j || b[1] !== I || b[2] !== O || b[3] !== _ || b[4] !== R ? (a = c(), t = "chatgptConfirmation" === R, s = "lg" === _ ? "heading-lg" : "base" === _ ? "heading-base" : "sm" === _ ? "heading-sm" : "heading-dialog", i = "base" === O ? "text-base leading-normal tracking-normal" : "text-sm leading-normal tracking-normal", l = (0, o.b)("flex flex-col items-start", "outlinedCircle" === I ? "gap-4" : "gap-3", a && d, j), b[0] = j, b[1] = I, b[2] = O, b[3] = _, b[4] = R, b[5] = t, b[6] = a, b[7] = i, b[8] = l, b[9] = s) : (t = b[5], a = b[6], i = b[7], l = b[8], s = b[9]), b[10] !== a ? (m = a ? (0, n.jsx)(u, {
                name: "DialogHeader"
            }) : null, b[10] = a, b[11] = m) : m = b[11], b[12] !== v || b[13] !== C || b[14] !== k || b[15] !== P || b[16] !== I ? (f = v ? (0, n.jsxs)("span", {
                className: (0, o.b)("relative flex shrink-0 items-center justify-center", "outlinedCircle" === I ? "size-15 rounded-full border border-subtle bg-surface p-4" : "h-9 w-9 rounded-xl p-2", C ?? ("default" === I ? "bg-text/5" : void 0), k),
                children: [P ? (0, n.jsx)("span", {
                    "aria-hidden": !0,
                    className: "absolute inset-0 rounded-full border border-transparent border-t-current text-default motion-safe:animate-spin"
                }) : null, v]
            }) : null, b[12] = v, b[13] = C, b[14] = k, b[15] = P, b[16] = I, b[17] = f) : f = b[17], b[18] !== t || b[19] !== y || b[20] !== M || b[21] !== s ? (p = y ? (0, n.jsx)("div", {
                className: (0, o.b)(!t && s, t && "chatgptConfirmationHeaderTitle-fhwwIH", "min-w-0", !t && "font-semibold", M),
                children: y
            }) : null, b[18] = t, b[19] = y, b[20] = M, b[21] = s, b[22] = p) : p = b[22], b[23] !== w || b[24] !== T || b[25] !== i || b[26] !== D ? (h = w ? (0, n.jsx)("div", {
                className: (0, o.b)({
                    default: "text-default",
                    secondary: "text-secondary",
                    tertiary: "text-codex-description"
                } [D], i, T),
                children: w
            }) : null, b[23] = w, b[24] = T, b[25] = i, b[26] = D, b[27] = h) : h = b[27], b[28] !== p || b[29] !== h ? (g = (0, n.jsxs)("div", {
                className: "flex min-w-0 flex-1 flex-col gap-1 self-stretch",
                children: [p, h]
            }), b[28] = p, b[29] = h, b[30] = g) : g = b[30], b[31] !== g || b[32] !== l || b[33] !== m || b[34] !== f ? (x = (0, n.jsxs)("div", {
                className: l,
                children: [m, f, g]
            }), b[31] = g, b[32] = l, b[33] = m, b[34] = f, b[35] = x) : x = b[35], x
        }

        function f(e) {
            let t, a, i, l, s, m = (0, r.c)(23),
                {
                    children: f,
                    className: p,
                    size: h,
                    variant: g
                } = e,
                x = void 0 === g ? "default" : g;
            if (m[0] !== p || m[1] !== h || m[2] !== x) {
                t = c();
                let e = "scrollable" === h ? "max-h-[min(calc(85dvh/var(--codex-window-zoom)),calc(var(--spacing)*176))] overflow-hidden" : "viewport" === h ? "max-h-[calc(100dvh/var(--codex-window-zoom)-2rem)] overflow-y-auto" : "topPositioned" === h ? "max-h-[min(var(--dialog-top-content-max-height),calc(85dvh/var(--codex-window-zoom)))] overflow-y-auto" : "full" === h ? "h-full min-h-0" : "tall" === h ? "min-h-[520px] max-h-[560px]" : void 0;
                a = (0, o.b)("flex flex-col text-base leading-normal tracking-normal", "confirmation" === x ? "gap-6 p-8" : "gap-0", "default" === x && "body-ADRAW0", "codeEntry" === x && "p-8", "chatgptConfirmation" === x && "chatgptConfirmationBody-tVEwJh", t && d, e, p), m[0] = p, m[1] = h, m[2] = x, m[3] = t, m[4] = a
            } else t = m[3], a = m[4];
            let b = a;
            if ("form" === e.as) {
                let a, r, o;
                if (m[5] !== e) {
                    let {
                        as: t,
                        children: n,
                        className: r,
                        size: o,
                        variant: i,
                        ...l
                    } = e;
                    a = l, m[5] = e, m[6] = a
                } else a = m[6];
                return m[7] !== t ? (r = t ? (0, n.jsx)(u, {
                    name: "DialogBody"
                }) : null, m[7] = t, m[8] = r) : r = m[8], m[9] !== f || m[10] !== b || m[11] !== a || m[12] !== r ? (o = (0, n.jsxs)("form", {
                    ...a,
                    className: b,
                    children: [r, f]
                }), m[9] = f, m[10] = b, m[11] = a, m[12] = r, m[13] = o) : o = m[13], o
            }
            if (m[14] !== e) {
                let {
                    as: t,
                    children: a,
                    className: n,
                    size: r,
                    variant: o,
                    ...l
                } = e;
                i = l, m[14] = e, m[15] = i
            } else i = m[15];
            return m[16] !== t ? (l = t ? (0, n.jsx)(u, {
                name: "DialogBody"
            }) : null, m[16] = t, m[17] = l) : l = m[17], m[18] !== f || m[19] !== b || m[20] !== i || m[21] !== l ? (s = (0, n.jsxs)("div", {
                ...i,
                className: b,
                children: [l, f]
            }), m[18] = f, m[19] = b, m[20] = i, m[21] = l, m[22] = s) : s = m[22], s
        }

        function p(e) {
            let t, a, s, m, f, p = (0, r.c)(15),
                {
                    children: g,
                    className: x,
                    expandSingleButton: b,
                    variant: v
                } = e,
                y = void 0 === b || b,
                w = void 0 === v ? "default" : v;
            if (p[0] !== g || p[1] !== x || p[2] !== y || p[3] !== w) {
                let e = c(),
                    r = i.Children.toArray(g),
                    m = r.reduce(h, 0);
                a = (0, o.b)("flex w-full flex-wrap items-center justify-end", "chatgptConfirmation" === w ? "gap-2" : "gap-3", "footer-laIpwZ", e && d, x), p[7] !== e ? (s = e ? (0, n.jsx)(u, {
                    name: "DialogFooter"
                }) : null, p[7] = e, p[8] = s) : s = p[8], t = r.map(e => {
                    if (!i.isValidElement(e) || e.type !== l.a) return e;
                    let t = y && 1 === m ? "w-full justify-center" : void 0;
                    return i.cloneElement(e, {
                        size: e.props.size ?? "medium",
                        className: (0, o.b)(e.props.className, t)
                    })
                }), p[0] = g, p[1] = x, p[2] = y, p[3] = w, p[4] = t, p[5] = a, p[6] = s
            } else t = p[4], a = p[5], s = p[6];
            return p[9] !== t ? (m = (0, n.jsx)(n.Fragment, {
                children: t
            }), p[9] = t, p[10] = m) : m = p[10], p[11] !== a || p[12] !== s || p[13] !== m ? (f = (0, n.jsxs)("div", {
                className: a,
                children: [s, m, null]
            }), p[11] = a, p[12] = s, p[13] = m, p[14] = f) : f = p[14], f
        }

        function h(e, t) {
            return i.isValidElement(t) && t.type === l.a ? e + 1 : e
        }

        function g(e) {
            let t, a, i, l, s = (0, r.c)(10),
                {
                    children: m,
                    className: f,
                    spacing: p
                } = e,
                h = void 0 === p ? "default" : p;
            return s[0] !== f || s[1] !== h ? (t = c(), a = (0, o.b)("flex w-full flex-col", "section-zmz5Xf", "large" === h && "largeSection-zsbCRg", t && d, f), s[0] = f, s[1] = h, s[2] = t, s[3] = a) : (t = s[2], a = s[3]), s[4] !== t ? (i = t ? (0, n.jsx)(u, {
                name: "DialogSection"
            }) : null, s[4] = t, s[5] = i) : i = s[5], s[6] !== m || s[7] !== a || s[8] !== i ? (l = (0, n.jsxs)("div", {
                className: a,
                children: [i, m]
            }), s[6] = m, s[7] = a, s[8] = i, s[9] = l) : l = s[9], l
        }

        function x(e) {
            let t, a, i, l, s = (0, r.c)(9),
                {
                    children: m,
                    className: f
                } = e;
            return s[0] !== f ? (t = c(), a = (0, o.b)("relative flex items-center gap-2", t && d, f), s[0] = f, s[1] = t, s[2] = a) : (t = s[1], a = s[2]), s[3] !== t ? (i = t ? (0, n.jsx)(u, {
                name: "FormRow"
            }) : null, s[3] = t, s[4] = i) : i = s[4], s[5] !== m || s[6] !== a || s[7] !== i ? (l = (0, n.jsxs)("div", {
                className: a,
                children: [i, m]
            }), s[5] = m, s[6] = a, s[7] = i, s[8] = l) : l = s[8], l
        }

        function b(e) {
            let t, a, i, l, s = (0, r.c)(9),
                {
                    children: m,
                    className: f
                } = e;
            return s[0] !== f ? (t = c(), a = (0, o.b)("flex flex-col gap-2", t && d, f), s[0] = f, s[1] = t, s[2] = a) : (t = s[1], a = s[2]), s[3] !== t ? (i = t ? (0, n.jsx)(u, {
                name: "FieldStack"
            }) : null, s[3] = t, s[4] = i) : i = s[4], s[5] !== m || s[6] !== a || s[7] !== i ? (l = (0, n.jsxs)("div", {
                className: a,
                children: [i, m]
            }), s[5] = m, s[6] = a, s[7] = i, s[8] = l) : l = s[8], l
        }
    }),
    cZk: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("zd"),
            i = a("oy"),
            l = a("JN"),
            s = a("mU");

        function d(e) {
            let t, a, d, c, u = (0, r.c)(17),
                {
                    open: m,
                    onOpenChange: f,
                    onCloseAutoFocus: p,
                    title: h,
                    failed: g,
                    embedded: x,
                    size: b,
                    children: v,
                    dialogComponent: y,
                    restoreFocusOnUnmount: w
                } = e,
                j = void 0 !== g && g,
                k = void 0 !== x && x,
                C = void 0 === y ? l.b : y,
                N = (0, o.useRef)(m);
            u[0] !== m ? (t = () => {
                N.current = m
            }, a = [m], u[0] = m, u[1] = t, u[2] = a) : (t = u[1], a = u[2]), (0, o.useLayoutEffect)(t, a);
            let S = k ? "h2" : l.e;
            u[3] !== S || u[4] !== v || u[5] !== j || u[6] !== h ? (d = v ?? (0, n.jsx)(s.b, {
                children: (0, n.jsx)(s.e, {
                    className: "select-none",
                    children: (0, n.jsx)(s.d, {
                        title: (0, n.jsx)(S, {
                            children: h
                        }),
                        subtitle: j ? (0, n.jsx)(i.a, {
                            id: "codex.dialogLoadState.reload",
                            defaultMessage: "Reload the app and try again",
                            description: "Recovery instructions after both attempts to download a dialog fail; closing and reopening does not retry the download"
                        }) : void 0
                    })
                })
            }), u[3] = S, u[4] = v, u[5] = j, u[6] = h, u[7] = d) : d = u[7];
            let A = d;
            return u[8] !== C || u[9] !== A || u[10] !== k || u[11] !== p || u[12] !== f || u[13] !== m || u[14] !== w || u[15] !== b ? (c = k ? A : (0, n.jsx)(C, {
                open: m,
                size: b,
                onOpenChange: e => {
                    N.current = e, f(e)
                },
                contentProps: {
                    "aria-describedby": void 0,
                    onCloseAutoFocus: e => {
                        N.current && !w?.() ? e.preventDefault() : p?.(e)
                    }
                },
                children: A
            }), u[8] = C, u[9] = A, u[10] = k, u[11] = p, u[12] = f, u[13] = m, u[14] = w, u[15] = b, u[16] = c) : c = u[16], c
        }
        a.d(t, {
            a: () => d
        })
    }),
    TNW: (function(e, t, a) {
        let n = ".codex-dialog-overlay",
            r = '[role="menu"], [role="dialog"]';

        function o(e) {
            if ("u" < typeof document || "u" < typeof MutationObserver) return () => {};
            let t = new MutationObserver(e);
            return t.observe(document.body, {
                childList: !0,
                subtree: !0
            }), () => {
                t.disconnect()
            }
        }

        function i() {
            return "u" > typeof document && null != document.querySelector(n)
        }

        function l(e) {
            if ("u" < typeof document || "u" < typeof MutationObserver) return () => {};
            let t = new MutationObserver(t => {
                t.some(e => "attributes" === e.type ? e.target instanceof Element && (e.target.matches(r) || "role" === e.attributeName && ("menu" === e.oldValue || "dialog" === e.oldValue)) : [...e.addedNodes, ...e.removedNodes].some(e => e instanceof Element && (e.matches(r) || null != e.querySelector(r)))) && e()
            });
            return t.observe(document.body, {
                childList: !0,
                subtree: !0,
                attributes: !0,
                attributeFilter: ["role", "data-state", "aria-modal"],
                attributeOldValue: !0
            }), () => {
                t.disconnect()
            }
        }

        function s() {
            return "u" > typeof document && null != document.querySelector('[role="menu"][data-state="open"], [role="dialog"][data-state="open"]:not([aria-modal="false"])')
        }
        a.d(t, {
            b: () => i,
            c: () => s,
            d: () => o,
            e: () => l
        }, {
            a: n
        })
    }),
    JN: (function(e, t, a) {
        a.d(t, {
            a: () => k,
            b: () => N,
            c: () => M,
            d: () => A,
            e: () => S
        });
        var n = a("A"),
            r = a("Qo"),
            o = a("NKw"),
            i = a("on"),
            l = a("zd"),
            s = a("Qg"),
            d = a("fVs"),
            c = a("wD9"),
            u = a("gbE"),
            m = a("qM"),
            f = a("i7"),
            p = a("ygO"),
            h = a("HOL"),
            g = a("bf"),
            x = a("gi"),
            b = a("aA"),
            v = "beaconModalOverlay-M55fyr",
            y = a("E18"),
            w = a("pUt");

        function j(e) {
            return "responsiveSheet" === e || "edgeToEdgeSheet" === e || "splitCatalog" === e || "catalogSetup" === e
        }
        let k = "bg-(--color-dialog-overlay) codex-dialog-overlay fixed inset-0 z-50",
            C = (0, s.e)({
                id: "codex.dialog.closeButton",
                defaultMessage: "Close dialog",
                description: "Accessible label for the button that closes a dialog"
            });

        function N(e) {
            let t, a, i, l, s, d, c, u, m, f, p, h, g, x, b, v, y, w, j, k, C, N, S, A, M, T, z, I, P, _, O, D = (0, r.c)(63);
            D[0] !== e ? ({
                children: i,
                modal: x,
                autoFocusCloseButton: t,
                triggerContent: T,
                triggerAsChild: b,
                triggerRef: z,
                contentClassName: d,
                contentOverflow: y,
                contentPosition: w,
                contentProps: c,
                dialogCloseClassName: u,
                closeButtonSize: l,
                closeButtonVariant: s,
                dialogCloseLabel: m,
                headerActions: f,
                overlayClassName: p,
                backdrop: a,
                transparentImage: M,
                portalContainer: h,
                radius: j,
                showDialogClose: k,
                shouldIgnoreClickOutside: C,
                unstyledContent: N,
                viewportSized: S,
                variant: A,
                size: v,
                widthHint: I,
                ...g
            } = e, D[0] = e, D[1] = t, D[2] = a, D[3] = i, D[4] = l, D[5] = s, D[6] = d, D[7] = c, D[8] = u, D[9] = m, D[10] = f, D[11] = p, D[12] = h, D[13] = g, D[14] = x, D[15] = b, D[16] = v, D[17] = y, D[18] = w, D[19] = j, D[20] = k, D[21] = C, D[22] = N, D[23] = S, D[24] = A, D[25] = M, D[26] = T, D[27] = z, D[28] = I) : (t = D[1], a = D[2], i = D[3], l = D[4], s = D[5], d = D[6], c = D[7], u = D[8], m = D[9], f = D[10], p = D[11], h = D[12], g = D[13], x = D[14], b = D[15], v = D[16], y = D[17], w = D[18], j = D[19], k = D[20], C = D[21], N = D[22], S = D[23], A = D[24], M = D[25], T = D[26], z = D[27], I = D[28]);
            let R = void 0 === x || x,
                B = void 0 === b || b,
                F = void 0 === y ? "hidden" : y,
                H = void 0 === w ? "centered" : w,
                W = void 0 === j ? "default" : j,
                Q = void 0 === k || k,
                K = void 0 !== C && C,
                U = void 0 !== N && N,
                q = void 0 !== S && S,
                G = void 0 === A ? "default" : A,
                $ = void 0 === v ? "default" : v;
            return D[29] !== B || D[30] !== T || D[31] !== z ? (P = T && (0, n.jsx)(E, {
                asChild: B,
                triggerRef: z,
                children: T
            }), D[29] = B, D[30] = T, D[31] = z, D[32] = P) : P = D[32], D[33] !== t || D[34] !== a || D[35] !== i || D[36] !== l || D[37] !== s || D[38] !== d || D[39] !== F || D[40] !== H || D[41] !== c || D[42] !== u || D[43] !== m || D[44] !== f || D[45] !== R || D[46] !== p || D[47] !== h || D[48] !== W || D[49] !== K || D[50] !== Q || D[51] !== $ || D[52] !== M || D[53] !== U || D[54] !== G || D[55] !== q || D[56] !== I ? (_ = (0, n.jsx)(L, {
                modal: R,
                autoFocusCloseButton: t,
                contentClassName: d,
                contentOverflow: F,
                contentPosition: H,
                closeButtonSize: l,
                closeButtonVariant: s,
                dialogCloseClassName: u,
                dialogCloseLabel: m,
                headerActions: f,
                overlayClassName: p,
                backdrop: a,
                transparentImage: M,
                portalContainer: h,
                radius: W,
                showDialogClose: Q,
                shouldIgnoreClickOutside: K,
                unstyledContent: U,
                viewportSized: q,
                variant: G,
                size: $,
                widthHint: I,
                ...c,
                children: i
            }), D[33] = t, D[34] = a, D[35] = i, D[36] = l, D[37] = s, D[38] = d, D[39] = F, D[40] = H, D[41] = c, D[42] = u, D[43] = m, D[44] = f, D[45] = R, D[46] = p, D[47] = h, D[48] = W, D[49] = K, D[50] = Q, D[51] = $, D[52] = M, D[53] = U, D[54] = G, D[55] = q, D[56] = I, D[57] = _) : _ = D[57], D[58] !== R || D[59] !== g || D[60] !== P || D[61] !== _ ? (O = (0, n.jsxs)(o.Root, {
                modal: R,
                ...g,
                children: [P, _]
            }), D[58] = R, D[59] = g, D[60] = P, D[61] = _, D[62] = O) : O = D[62], O
        }

        function S(e) {
            let t, a, l, s, d, c = (0, r.c)(13);
            c[0] !== e ? ({
                variant: l,
                className: t,
                ...a
            } = e, c[0] = e, c[1] = t, c[2] = a, c[3] = l) : (t = c[1], a = c[2], l = c[3]);
            let u = void 0 === l ? "default" : l,
                m = "promotional" === u && "promotionalTitle-DDHljK",
                f = "confirmation" === u && "px-6 text-center text-heading-lg leading-7 font-semibold select-none",
                p = ("expressiveBeacon" === u || "responsiveExpressiveBeacon" === u) && "expressiveBeaconTitle-GLcEim",
                h = "responsiveExpressiveBeacon" === u && "responsiveExpressiveBeaconTitle-AXn0Dj";
            return c[4] !== t || c[5] !== m || c[6] !== f || c[7] !== p || c[8] !== h ? (s = (0, i.b)(t, m, f, p, h), c[4] = t, c[5] = m, c[6] = f, c[7] = p, c[8] = h, c[9] = s) : s = c[9], c[10] !== a || c[11] !== s ? (d = (0, n.jsx)(o.Title, {
                className: s,
                ...a
            }), c[10] = a, c[11] = s, c[12] = d) : d = c[12], d
        }

        function A(e) {
            let t, a = (0, r.c)(2);
            return a[0] !== e ? (t = (0, n.jsx)(o.Description, {
                ...e
            }), a[0] = e, a[1] = t) : t = a[1], t
        }

        function M(e) {
            let t, a, o, l, s, d, c, m, f, p = (0, r.c)(19);
            p[0] !== e ? ({
                className: a,
                backdrop: t,
                transparentImage: c,
                variant: l,
                size: s,
                position: d,
                ...o
            } = e, p[0] = e, p[1] = t, p[2] = a, p[3] = o, p[4] = l, p[5] = s, p[6] = d, p[7] = c) : (t = p[1], a = p[2], o = p[3], l = p[4], s = p[5], d = p[6], c = p[7]);
            let h = void 0 === l ? "default" : l,
                g = void 0 === s ? "default" : s,
                x = void 0 === d ? "fixed" : d,
                b = "modal" === t && ("fade" === u.a.backdropStyle ? v : "modalDimOverlay-HaWS0n");
            p[8] !== t || p[9] !== a || p[10] !== x || p[11] !== g || p[12] !== b || p[13] !== h ? (m = (0, i.b)("codex-dialog-overlay inset-0 z-50 pointer-events-auto", x, b, "modal" !== t && [("beaconModal" === h || "expressiveBeacon" === h || j(g) && "promotional" !== h) && v, j(g) && "promotional" === h && "promotionalSheetOverlay-UlKBAY", ("opaque" === h || "form" === h || "catalog" === h || "confirmation" === h || "chatgptConfirmation" === h || "centeredText" === h || "creditCheckout" === h || "image" === h) && "dimmedOverlay-H4rmER", "image" === h && "imageOverlay-_cSMvD", "voicePicker" === h && "voicePickerOverlay-GwLhjh", "detailPanel" === h && "bg-text/5", ("beacon" === h || "promotional" === h) && "bg-text/5 backdrop-blur-sm", ("default" === h || "translucent" === h || "chatgpt" === h || "photoSetup" === h || "mediaDetail" === h) && !j(g) && k], a), p[8] = t, p[9] = a, p[10] = x, p[11] = g, p[12] = b, p[13] = h, p[14] = m) : m = p[14];
            let y = "image" === h ? c : void 0;
            return p[15] !== o || p[16] !== m || p[17] !== y ? (f = (0, n.jsx)("div", {
                className: m,
                "data-transparent": y,
                ...o
            }), p[15] = o, p[16] = m, p[17] = y, p[18] = f) : f = p[18], f
        }

        function E(e) {
            let t, a, i, l, s = (0, r.c)(8);
            s[0] !== e ? ({
                asChild: a,
                triggerRef: i,
                ...t
            } = e, s[0] = e, s[1] = t, s[2] = a, s[3] = i) : (t = s[1], a = s[2], i = s[3]);
            let d = void 0 === a || a;
            return s[4] !== d || s[5] !== t || s[6] !== i ? (l = (0, n.jsx)(o.Trigger, {
                ref: i,
                asChild: d,
                ...t
            }), s[4] = d, s[5] = t, s[6] = i, s[7] = l) : l = s[7], l
        }

        function L(e) {
            let t, a, s, u, f, v, k, N, S, A, E, L, P, _, O, D, R, B = (0, r.c)(90),
                {
                    children: F,
                    modal: H,
                    autoFocusCloseButton: W,
                    contentClassName: Q,
                    contentOverflow: K,
                    contentPosition: U,
                    dialogCloseClassName: q,
                    closeButtonSize: G,
                    closeButtonVariant: $,
                    dialogCloseLabel: V,
                    headerActions: Z,
                    overlayClassName: X,
                    backdrop: Y,
                    transparentImage: J,
                    portalContainer: ee,
                    radius: et,
                    showDialogClose: ea,
                    shouldIgnoreClickOutside: en,
                    shouldStopPointerDownPropagation: er,
                    unstyledContent: eo,
                    viewportSized: ei,
                    variant: el,
                    size: es,
                    widthHint: ed,
                    ...ec
                } = e,
                eu = void 0 === G ? "default" : G,
                em = void 0 === $ ? "default" : $,
                ef = void 0 === et ? "default" : et,
                ep = void 0 === ea || ea,
                eh = void 0 !== en && en,
                eg = void 0 === er || er,
                ex = void 0 !== eo && eo,
                eb = void 0 !== ei && ei,
                ev = void 0 === el ? "default" : el,
                {
                    asChild: ey,
                    className: ew,
                    onOpenAutoFocus: ej,
                    onPointerDown: ek,
                    onPointerDownOutside: eC,
                    style: eN,
                    ...eS
                } = ec,
                eA = (0, l.useContext)(d.a),
                eM = (0, l.useContext)(x.a),
                eE = (0, c.c)(),
                eL = "default" === ev || "opaque" === ev,
                eT = "beacon" === ev || "beaconModal" === ev || "expressiveBeacon" === ev,
                ez = "catalog" === ev || "centeredText" === ev || "confirmation" === ev,
                eI = "creditCheckout" === ev,
                eP = "chatgptConfirmation" === ev && "centered" === U,
                e_ = (0, i.b)("codex-dialog z-50", "centeredText" !== ev && "outline-none", "sheet" === es && "bottom-0 left-0", "centered" === U && !eP && "image" !== ev && "sheet" !== es && !j(es) && ["left-1/2 -translate-x-1/2 -translate-y-1/2", "photoSetup" === ev ? "photoSetupPosition-mQ6M5o" : "top-1/2"], "top" === U && ["left-1/2 -translate-x-1/2", "topPosition-Vk6giF"], "scrollable" === U && "relative m-auto shrink-0 pointer-events-auto", eP && "relative col-start-2 row-start-2 justify-self-center pointer-events-auto", "inline" !== U && "scrollable" !== U && !eP && (null != ee ? "absolute" : "fixed")),
                eO = (0, i.b)(("default" === ev || "translucent" === ev) && ["text-default ring-[0.5px] ring-border shadow-lg", "translucent" === ev ? "bg-surface-elevated-secondary/70 backdrop-blur-lg" : "bg-surface-elevated-secondary/90 backdrop-blur-xl"], ("chatgpt" === ev || "photoSetup" === ev || eT) && ["text-default", "splitCatalog" !== es && "catalogSetup" !== es && "dark:bg-surface-tertiary", "chatgpt" !== ev || "anchored" !== U || "sheet" === es || j(es) ? "bg-surface shadow-lg" : "bg-surface-elevated bg-clip-padding md:border md:border-default md:shadow-2xl"], "expressiveBeacon" === ev && ["border border-default bg-clip-padding", "expressiveBeaconSurface-x8SBYk"], "voicePicker" === ev && "voicePickerSurface-aUuGlJ", "chatgptConfirmation" === ev && "chatgptConfirmationSurface-MCJdC9", "onboarding" === ev && "bg-surface-elevated text-default shadow-lg", "mediaDetail" === ev && "bg-surface text-default shadow-lg", "detailPanel" === ev && "border border-default bg-surface text-default shadow-sm", ("opaque" === ev || "promotional" === ev) && "bg-surface-elevated-secondary text-default shadow-lg ring-[0.5px] ring-border", "form" === ev && "rounded-form-dialog bg-surface-elevated-secondary text-default shadow-form-dialog ring-[0.5px] ring-border", ez && ["bg-surface-elevated-secondary text-default", "catalogSurface-lVdc15"], "centeredText" === ev && "centeredTextSurface-cj3ezh", ez && "compact" === ef && "catalogCompact-p96_jF", eI && ["relative rounded-2xl bg-surface", "creditCheckoutSurface-gLF3IY"], "image" !== ev && "expressiveBeacon" !== ev && "form" !== ev && "voicePicker" !== ev && !ez && !eI && !j(es) && ("compact" === ef || "chatgpt" === ev || "chatgptConfirmation" === ev || eT ? "rounded-2xl" : "rounded-3xl"), "image" !== ev && "voicePicker" !== ev && !eI && "sheet" !== es && "square" !== es && !j(es) && ("scrollable" === U || eP ? "max-w-full" : "max-w-[92vw]"), "visible" === K ? "overflow-visible" : "overflow-hidden", eT && "max-h-[92dvh] overflow-y-auto");
            B[0] !== U || B[1] !== ee || B[2] !== es || B[3] !== eE ? (t = {}, "square" === es ? t.width = `min(760px, calc(100vw / ${eE} - 4rem), calc(100dvh / ${eE} - 6rem))` : "sheet" === es ? (t.width = `calc(100vw / ${eE})`, t.height = `calc(70dvh / ${eE})`, t.maxHeight = `calc(100dvh / ${eE} - 1rem)`) : "appLauncher" === es && (t.maxWidth = `calc(92vw / ${eE})`, t.maxHeight = `calc(90dvh / ${eE})`), "scrollable" === U && null == ee && (t.maxWidth = `calc((100vw - 2rem) / ${eE})`), B[0] = U, B[1] = ee, B[2] = es, B[3] = eE, B[4] = t) : t = B[4];
            let eD = "splitCatalog" === es ? "splitCatalog-xFZ_xK" : "catalogSetup" === es ? "catalogSetup-ldzq0b" : "pinEntry" === es ? "w-52.5" : "large" === es ? "w-lg" : "narrow" === es ? "w-[380px]" : "feature" === es ? "w-[400px]" : "setup" === es ? "h-[min(600px,calc(100dvh-2rem))] w-120" : "catalogDetail" === es ? "w-143.5" : "beacon" === es ? "w-120" : "compact" === es ? "w-105" : "medium" === es ? "w-md" : "wide" === es ? "w-150" : "wideTall" === es ? "h-140 max-h-[calc(100dvh/var(--codex-window-zoom)-2rem)] w-150" : "share" === es ? "w-160" : "feedback" === es ? "w-xl" : "xwide" === es ? "w-[680px]" : "xwideTall" === es ? "h-[min(92vh,800px)] max-h-[min(92vh,800px)] w-[680px]" : "xxwide" === es ? "w-[800px]" : "xxxwideTall" === es ? "h-[min(85vh,740px)] max-h-[min(85vh,740px)] w-[960px]" : "editor" === es ? "w-[600px] h-[720px] max-w-full max-h-full" : "appLauncher" === es ? "w-[750px] h-[720px]" : "square" === es ? "aspect-square" : "sheet" === es ? "rounded-b-none" : j(es) ? (0, i.b)("responsiveSheet-uudmC6", "edgeToEdgeSheet" === es && "edgeToEdgeSheet-QrQSBB") : "w-130";
            "image" === ev ? eD = "inset-0 flex h-full w-full flex-col" : "detailPanel" === ev ? eD = (0, i.b)(eD, "h-[calc(100dvh/var(--codex-window-zoom)-2rem)]") : "chatgptConfirmation" === ev && "default" === es ? eD = "w-125" : eI && (eD = "max-w-125");
            let [eR, eB] = (0, l.useState)(null), [eF, eH] = (0, l.useState)(null), eW = eN?.height != null || /\bh-(?!auto\b)[^\s]+/.test(eD) || /\bh-(?!auto\b)[^\s]+/.test(Q ?? "") || /\bh-(?!auto\b)[^\s]+/.test(ew ?? ""), eQ = !ey && !ex && !eb && "top" !== U && "editor" !== es && "square" !== es && "sheet" !== es && !j(es) && "xxxwideTall" !== es && !eW;
            B[5] !== V || B[6] !== eA ? (a = V || eA?.formatMessage(C) || C.defaultMessage, B[5] = V, B[6] = eA, B[7] = a) : a = B[7], B[8] !== a ? (s = (0, n.jsx)("span", {
                className: "sr-only",
                children: a
            }), B[8] = a, B[9] = s) : s = B[9];
            let eK = s;
            B[10] !== W || B[11] !== eu || B[12] !== em || B[13] !== eK || B[14] !== q || B[15] !== eL || B[16] !== Z || B[17] !== ez || B[18] !== eI || B[19] !== ep || B[20] !== es || B[21] !== ev ? (u = ep ? (0, n.jsx)(o.Close, {
                asChild: "translucent" === ev,
                className: "translucent" === ev ? q : (0, i.b)("no-drag cursor-interaction leading-none", "mediaOverlay" === em ? "bg-media-foreground/20 text-media-foreground hover:bg-media-foreground/30" : "hover:bg-primary-ghost-hover", "voicePicker" !== ev && "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0", eI && "flex size-9 items-center justify-center rounded-lg text-token-text-secondary", !eI && "default" === em && "form" !== ev && (ez || "voicePicker" === ev || "chatgptConfirmation" === ev ? "text-default" : "text-text/80"), "form" === ev && "text-tertiary hover:text-default", "voicePicker" === ev && "absolute flex items-center justify-center", "voicePicker" !== ev && !eI && (eL && "default" === eu ? "rounded p-1" : (0, i.b)("flex items-center justify-center", "chatgpt" === ev || "chatgptConfirmation" === ev || "photoSetup" === ev ? "rounded-lg" : "rounded-full", "compact" === eu && "size-7 bg-surface shadow-xs ring-[0.5px] ring-border", "compact" !== eu && "chatgptConfirmation" !== ev && ("centeredText" === ev || "expressiveBeacon" === ev || "large" === eu ? "size-9" : "size-8"))), null == Z && eI && "absolute top-4 end-4", null == Z && "voicePicker" !== ev && !eI && "large" === eu && "absolute top-4.5 end-4.5", null == Z && "voicePicker" !== ev && !eI && "large" !== eu && "form" === ev && "absolute top-4 right-3.5", null == Z && "voicePicker" !== ev && !eI && "large" !== eu && "form" !== ev && "centeredText" !== ev && ["absolute", "photoSetup" === ev && "top-2 right-2", ("chatgpt" === ev || "promotional" === ev) && "top-3 right-3", "photoSetup" !== ev && "chatgpt" !== ev && "chatgptConfirmation" !== ev && "promotional" !== ev && "top-4 right-4"], ("beacon" === ev || "edgeToEdgeSheet" === es) && "compact" !== eu && "size-9 bg-surface/80 shadow-xs backdrop-blur-md", "beaconModal" === ev && "compact" !== eu && "size-9 bg-surface/20 hover:bg-surface/30 active:bg-surface/80 dark:active:bg-surface/70 shadow-xs backdrop-blur-md transition-colors", "centeredText" === ev && "centeredTextClose-MSjdDy", "voicePicker" === ev && "voicePickerClose-rvh56e", "chatgptConfirmation" === ev && "chatgptConfirmationClose-ugytLj", q, "responsiveSheet" === es && "promotional" === ev && "promotionalSheetClose-BfJu8T"),
                autoFocus: W,
                onClick: T,
                children: "translucent" === ev ? (0, n.jsxs)(p.a, {
                    color: "outlineSurfaceRaised",
                    size: "iconCircle",
                    radius: "full",
                    children: [(0, n.jsx)(g.aj, {}), eK]
                }) : (0, n.jsxs)(n.Fragment, {
                    children: ["default" !== eu && (0, n.jsx)(g.$i, {}), "default" === eu && ez && (0, n.jsx)(h.a, {
                        asset: y.a
                    }), "default" === eu && "form" === ev && (0, n.jsx)(h.a, {
                        asset: w.a
                    }), "default" === eu && !ez && !eL && "form" !== ev && (0, n.jsx)(g.bj, {}), "default" === eu && eL && (0, n.jsx)(m.a, {
                        "aria-hidden": !0,
                        className: "icon-xs"
                    }), eK]
                })
            }) : null, B[10] = W, B[11] = eu, B[12] = em, B[13] = eK, B[14] = q, B[15] = eL, B[16] = Z, B[17] = ez, B[18] = eI, B[19] = ep, B[20] = es, B[21] = ev, B[22] = u) : u = B[22];
            let eU = u;
            B[23] !== eU || B[24] !== Z || B[25] !== ep || B[26] !== ev ? (f = null != Z || "translucent" === ev && ep ? (0, n.jsxs)("div", {
                className: (0, i.b)("absolute flex items-center no-drag", "translucent" === ev ? "top-2 end-2 gap-2" : "top-5 right-5 gap-1"),
                children: [Z, eU]
            }) : eU, B[23] = eU, B[24] = Z, B[25] = ep, B[26] = ev, B[27] = f) : f = B[27];
            let eq = f;
            B[28] !== eF || B[29] !== eR || B[30] !== eQ ? (v = () => {
                if (!eQ || null == eR || null == eF || "u" < typeof ResizeObserver) return;
                let e = null,
                    t = null,
                    a = -1,
                    n = !1,
                    r = () => {
                        null == e && (e = requestAnimationFrame(() => {
                            e = null, (() => {
                                var e;
                                let {
                                    borderTopWidth: r,
                                    borderBottomWidth: o
                                } = getComputedStyle(eR);
                                Number.isFinite(e = (eF.offsetHeight || eF.scrollHeight) + parseFloat(r) + parseFloat(o)) && !(.5 > Math.abs(e - a)) && (a = e, eR.style.setProperty("--dialog-content-height", `${e}px`), eR.style.height = "var(--dialog-content-height)", n || (null != t && cancelAnimationFrame(t), t = requestAnimationFrame(() => {
                                    n = !0, eR.dataset.dialogHeightReady = "true"
                                })))
                            })()
                        }))
                    };
                r();
                let o = new ResizeObserver(r);
                return o.observe(eF), () => {
                    o.disconnect(), null != e && cancelAnimationFrame(e), null != t && cancelAnimationFrame(t), eR.style.removeProperty("--dialog-content-height"), eR.style.height = "", delete eR.dataset.dialogHeightReady
                }
            }, k = [eF, eR, eQ], B[28] = eF, B[29] = eR, B[30] = eQ, B[31] = v, B[32] = k) : (v = B[31], k = B[32]), (0, l.useLayoutEffect)(v, k);
            let eG = eM?.id,
                e$ = (0, i.b)(e_, !ex && eO, !ex && "voicePicker" !== ev && eD, j(es) && "promotional" === ev && "promotionalSheet-Z7haaQ", eQ && "heightAnimated-LhPH1S", Q, ew),
                eV = null != ed && Number.isFinite(ed) && ed > 0 ? ed : void 0,
                eZ = "inline" !== U && null == ee && 1 !== eE ? eE : void 0;
            B[33] !== ee || B[34] !== eb || B[35] !== eE ? (N = eb && null == ee ? {
                height: `calc(100dvh / ${eE})`,
                width: `calc(100vw / ${eE})`
            } : null, B[33] = ee, B[34] = eb, B[35] = eE, B[36] = N) : N = B[36], B[37] !== ee || B[38] !== es || B[39] !== eE ? (S = "setup" === es && null == ee ? {
                height: `min(600px, calc((100dvh - 2rem) / ${eE}))`,
                maxWidth: `calc((100dvw - 2rem) / ${eE})`
            } : null, B[37] = ee, B[38] = es, B[39] = eE, B[40] = S) : S = B[40], B[41] !== t || B[42] !== eN || B[43] !== eV || B[44] !== eZ || B[45] !== N || B[46] !== S ? (A = {
                width: eV,
                zoom: eZ,
                ...t,
                ...N,
                ...S,
                ...eN
            }, B[41] = t, B[42] = eN, B[43] = eV, B[44] = eZ, B[45] = N, B[46] = S, B[47] = A) : A = B[47], B[48] !== eC || B[49] !== eh ? (E = e => {
                eh && e.preventDefault(), eC?.(e)
            }, B[48] = eC, B[49] = eh, B[50] = E) : E = B[50], B[51] !== ek || B[52] !== eg ? (L = e => {
                eg && e.stopPropagation(), ek?.(e)
            }, B[51] = ek, B[52] = eg, B[53] = L) : L = B[53], B[54] !== ej ? (P = e => {
                (0, b.b)(), window.getSelection()?.removeAllRanges(), ej?.(e)
            }, B[54] = ej, B[55] = P) : P = B[55], B[56] !== ey || B[57] !== F || B[58] !== eq || B[59] !== eH || B[60] !== eQ ? (_ = ey && (0, l.isValidElement)(F) ? (0, l.cloneElement)(F, void 0, (0, n.jsx)(I, {}, "overlay-registration"), F.props.children, eq) : (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(I, {}), eQ ? (0, n.jsx)("div", {
                    ref: eH,
                    children: F
                }) : F, eq]
            }), B[56] = ey, B[57] = F, B[58] = eq, B[59] = eH, B[60] = eQ, B[61] = _) : _ = B[61], B[62] !== ey || B[63] !== eS || B[64] !== H || B[65] !== eB || B[66] !== o.Content || B[67] !== eG || B[68] !== e$ || B[69] !== A || B[70] !== E || B[71] !== L || B[72] !== P || B[73] !== _ ? (O = (0, n.jsx)(o.Content, {
                asChild: ey,
                ref: eB,
                "data-overlay-owner": eG,
                className: e$,
                "aria-modal": H,
                style: A,
                onPointerDownOutside: E,
                onPointerDown: L,
                onOpenAutoFocus: P,
                ...eS,
                children: _
            }), B[62] = ey, B[63] = eS, B[64] = H, B[65] = eB, B[66] = o.Content, B[67] = eG, B[68] = e$, B[69] = A, B[70] = E, B[71] = L, B[72] = P, B[73] = _, B[74] = O) : O = B[74];
            let eX = O;
            B[75] !== Y || B[76] !== eX || B[77] !== U || B[78] !== H || B[79] !== X || B[80] !== ee || B[81] !== es || B[82] !== J || B[83] !== eP || B[84] !== ev ? (D = (0, n.jsx)(n.Fragment, {
                children: "scrollable" !== U || H ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(o.Overlay, {
                        asChild: !0,
                        children: (0, n.jsx)(M, {
                            className: (0, i.b)(X, "scrollable" === U && "overflow-y-auto"),
                            variant: ev,
                            backdrop: Y,
                            transparentImage: J,
                            size: es,
                            position: "image" === ev && null != ee ? "absolute" : "fixed",
                            children: "scrollable" === U ? (0, n.jsx)("div", {
                                className: "flex min-h-full p-4",
                                children: eX
                            }) : null
                        })
                    }), eP ? (0, n.jsx)("div", {
                        className: (0, i.b)("pointer-events-none inset-0 z-50", null != ee ? "absolute" : "fixed", "chatgptConfirmationPosition-DL4lLO"),
                        children: eX
                    }) : null, eP || "scrollable" === U ? null : eX]
                }) : (0, n.jsx)("div", {
                    className: "pointer-events-none fixed inset-0 z-50 overflow-y-auto",
                    children: (0, n.jsx)("div", {
                        className: "flex min-h-full p-4",
                        children: eX
                    })
                })
            }), B[75] = Y, B[76] = eX, B[77] = U, B[78] = H, B[79] = X, B[80] = ee, B[81] = es, B[82] = J, B[83] = eP, B[84] = ev, B[85] = D) : D = B[85];
            let eY = D;
            return B[86] !== U || B[87] !== ee || B[88] !== eY ? (R = "inline" === U ? eY : (0, n.jsx)(o.Portal, {
                container: ee ?? void 0,
                children: (0, n.jsx)(z, {
                    container: ee,
                    children: eY
                })
            }), B[86] = U, B[87] = ee, B[88] = eY, B[89] = R) : R = B[89], R
        }

        function T(e) {
            e.stopPropagation()
        }

        function z(e) {
            let t, a = (0, r.c)(3),
                {
                    children: o,
                    container: i
                } = e,
                l = i ?? document.body;
            return a[0] !== o || a[1] !== l ? (t = (0, n.jsx)(f.a, {
                container: l,
                children: o
            }), a[0] = o, a[1] = l, a[2] = t) : t = a[2], t
        }

        function I() {
            let e, t, a = (0, r.c)(3),
                n = (0, l.useContext)(x.a)?.registerOpen;
            return a[0] !== n ? (e = () => n?.(), t = [n], a[0] = n, a[1] = e, a[2] = t) : (e = a[1], t = a[2]), (0, l.useLayoutEffect)(e, t), null
        }
    }),
    Ves: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on");

        function i(e) {
            let t, a, i, l = (0, r.c)(9),
                {
                    children: s,
                    heading: d,
                    action: c,
                    layout: u
                } = e,
                m = "document" === (void 0 === u ? "document" : u) && "h-112";
            return l[0] !== m ? (t = (0, o.b)("flex max-h-(--radix-tooltip-content-available-height) min-h-0 w-112 max-w-full flex-col overflow-hidden rounded-xl", m), l[0] = m, l[1] = t) : t = l[1], l[2] !== c || l[3] !== d ? (a = null != d || null != c ? (0, n.jsxs)("div", {
                className: "flex h-toolbar shrink-0 items-center justify-between gap-3 border-b border-subtle px-4 select-none",
                children: [d, c]
            }) : null, l[2] = c, l[3] = d, l[4] = a) : a = l[4], l[5] !== s || l[6] !== t || l[7] !== a ? (i = (0, n.jsxs)("div", {
                className: t,
                children: [a, s]
            }), l[5] = s, l[6] = t, l[7] = a, l[8] = i) : i = l[8], i
        }
        a.d(t, {
            a: () => i
        })
    }),
    so0: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("G7O"),
            i = a("v7"),
            l = a("wD9"),
            s = a("SMI"),
            d = a("jZD");

        function c(e) {
            let t, a, c = (0, r.c)(5),
                {
                    children: u
                } = e,
                m = (0, l.c)();
            return (0, d.a)() ? (c[0] !== u || c[1] !== m ? (t = null == u ? null : (0, n.jsx)("div", {
                "aria-hidden": !0,
                inert: !0,
                style: {
                    height: `calc(100% / ${m})`,
                    transform: `scale(${m})`,
                    transformOrigin: "top left",
                    width: `calc(100% / ${m})`
                },
                children: u
            }), c[0] = u, c[1] = m, c[2] = t) : t = c[2], c[3] !== t ? (a = (0, i.createPortal)((0, n.jsx)(o.b, {
                adjustScale: !1,
                className: "pointer-events-none",
                dropAnimation: null,
                zIndex: s.a,
                children: t
            }), document.body), c[3] = t, c[4] = a) : a = c[4], a) : null
        }
        a.d(t, {
            a: () => c
        })
    }),
    Lh: (function(e, t, a) {
        var n = a("Qo"),
            r = a("zd"),
            o = a("AB"),
            i = a("TL"),
            l = a("aA");
        let s = {
                icon: "min-w-[120px]",
                xs: "min-w-[160px]",
                sm: "min-w-[180px]",
                menuNarrow: "w-52",
                menu: "min-w-[var(--app-menu-min-width,220px)]",
                menuFixed: "w-[220px]",
                menuBounded: "min-w-[200px] max-w-[320px]",
                menuWide: "w-[240px]",
                menuReadout: "w-65",
                railMenu: "w-57",
                sidebar: "min-w-[172px] max-w-[240px]",
                workspace: "min-w-[260px]",
                panel: "w-[280px]",
                panelWide: "w-[360px]",
                panelExtraWide: "w-[408px]"
            },
            d = {
                compact: "200px",
                list: "250px",
                tall: "350px",
                composerPlugins: "var(--height-composer-plugins-menu, 250px)"
            };

        function c(e) {
            if ("reaction" === e) return "rounded-full bg-surface-elevated-secondary/90 text-default ring-(--color-border-overlay) ring-(length:--dropdown-overlay-ring-width) shadow-(--shadow-dropdown-overlay) backdrop-blur-sm";
            if ("chatgpt" === e) return "min-w-40 bg-surface-elevated-secondary text-default rounded-3xl py-2.5 shadow-(--shadow-dropdown-overlay)";
            let t = "opaque" === e ? "bg-surface-elevated-secondary text-default shadow-(--shadow-dropdown-overlay)" : "bg-surface-elevated-secondary/90 text-default ring-(--color-border-overlay) ring-(length:--dropdown-overlay-ring-width) shadow-(--shadow-dropdown-overlay) backdrop-blur-sm";
            return "panel" === e ? `${t} rounded-2xl p-4 shadow-2xl backdrop-blur-lg` : `${t} rounded-2xl p-[var(--app-menu-gutter,var(--spacing))]`
        }

        function u(e) {
            return null == e ? void 0 : s[e]
        }

        function m(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "calc(100vh - 16px)";
            if (null != e) return `min(${"available"===e?a:d[e]}, ${t}, ${a})`
        }

        function f(e) {
            let t = e?.closest("[data-dropdown-overlay-side]")?.getAttribute("data-dropdown-overlay-side");
            return "bottom" === t || "top" === t ? t : void 0
        }

        function p(e) {
            return 5 - e
        }

        function h(e, t, a) {
            let n = e;
            for (; null != n && "contents" === getComputedStyle(n).display;) {
                let e = n.firstElementChild;
                n = e instanceof HTMLElement ? e : null
            }
            let r = n?.closest("[data-menu-overlay-surface]");
            if (null == n || null == r) return void a(0);
            let o = () => {
                let e = n.getBoundingClientRect(),
                    o = r.getBoundingClientRect();
                a(Math.max(0, "top" === t || "left" === t ? e[t] - o[t] : o[t] - e[t]))
            };
            o();
            let i = new ResizeObserver(o);
            return i.observe(n), i.observe(r), n.ownerDocument.defaultView?.addEventListener("resize", o), () => {
                i.disconnect(), n.ownerDocument.defaultView?.removeEventListener("resize", o)
            }
        }

        function g(e, t, a) {
            let s, d, c, u, m, f, p = (0, n.c)(18);
            p[0] !== a ? (s = void 0 === a ? {} : a, p[0] = a, p[1] = s) : s = p[1];
            let {
                disabled: h,
                dismissOnWindowBlur: g
            } = s, x = void 0 !== h && h, b = void 0 === g || g, [v, y] = (0, r.useState)(!1);
            x && v && y(!1);
            let w = !x && (e ?? v);
            p[2] !== e || p[3] !== x || p[4] !== t ? (d = a => {
                x && a || (a && (0, l.b)(), void 0 === e && y(a), t?.(a))
            }, p[2] = e, p[3] = x, p[4] = t, p[5] = d) : d = p[5];
            let j = d;
            p[6] !== j ? (c = () => {
                j(!1)
            }, p[6] = j, p[7] = c) : c = p[7];
            let k = (0, r.useEffectEvent)(c);
            return p[8] !== b || p[9] !== k || p[10] !== w ? (u = () => {
                if (!w) return;
                let e = () => {
                        k()
                    },
                    t = null != o.a,
                    a = window.innerWidth,
                    n = () => {
                        window.innerWidth !== a && e()
                    },
                    r = i.c.subscribe("browser-sidebar-web-contents-pointer-down", e);
                return b && window.addEventListener("blur", e), t && window.addEventListener("resize", n), () => {
                    r(), window.removeEventListener("blur", e), t && window.removeEventListener("resize", n)
                }
            }, p[8] = b, p[9] = k, p[10] = w, p[11] = u) : u = p[11], p[12] !== b || p[13] !== w ? (m = [b, w], p[12] = b, p[13] = w, p[14] = m) : m = p[14], (0, r.useEffect)(u, m), p[15] !== j || p[16] !== w ? (f = {
                handleOpenChange: j,
                open: w
            }, p[15] = j, p[16] = w, p[17] = f) : f = p[17], f
        }
        a.d(t, {
            a: () => m,
            b: () => f,
            c: () => c,
            d: () => u,
            e: () => p,
            f: () => h,
            g: () => g
        })
    }),
    bq: (function(e, t, a) {
        a.d(t, {
            a: () => et,
            b: () => eo,
            c: () => ei,
            d: () => U,
            e: () => X,
            f: () => H,
            g: () => ee
        });
        var n = a("A"),
            r = a("Qo"),
            o = a("AW"),
            i = a("on"),
            l = a("IP"),
            s = a("suc"),
            d = a("zd"),
            c = a("oy"),
            u = a("AB"),
            m = a("wD9"),
            f = a("ib"),
            p = a("R9"),
            h = a("wd"),
            g = a("Gk"),
            x = a("V8"),
            b = a("HgL"),
            v = a("i7"),
            y = a("Lh"),
            w = a("HOL"),
            j = a("bf"),
            k = a("OE"),
            C = a("tnQ"),
            N = a("v0"),
            S = a("EG"),
            A = a("gi"),
            M = a("UxN"),
            E = a("F0x"),
            L = a("Cq"),
            T = a("YJk"),
            z = "replacedContent-dZ1LFs",
            I = a("Ag");
        let P = {
                top: "bottom",
                right: "left",
                bottom: "top",
                left: "right"
            },
            _ = d.createContext(void 0),
            O = {
                maxWidth: "min(var(--radix-dropdown-menu-content-available-width), calc(100vw - 16px))",
                maxHeight: "min(var(--radix-dropdown-menu-content-available-height), calc(100vh - 16px))"
            },
            D = {
                ...O,
                maxHeight: "calc(100vh - 16px)"
            },
            R = e => {
                let t, a, o, l, s = (0, r.c)(20),
                    {
                        children: d,
                        color: c,
                        tooltipText: u,
                        tooltipOnBeforeOpen: m,
                        tooltipVariant: f,
                        tooltipDisabled: p,
                        tooltipTextClassName: h,
                        tooltipInteractive: g,
                        tooltipSide: x,
                        tooltipSideOffset: b,
                        tooltipAlign: v,
                        tooltipOpenWhen: y
                    } = e,
                    w = void 0 === c ? "default" : c;
                if (!u) {
                    let e;
                    return s[0] !== d ? (e = (0, n.jsx)(n.Fragment, {
                        children: d
                    }), s[0] = d, s[1] = e) : e = s[1], e
                }
                "description" === f ? t = 16 : "surface" === w && (t = 12);
                let j = "description" === f && "text-start";
                s[2] !== j || s[3] !== h ? (a = (0, i.b)("max-w-64 text-pretty", j, h), s[2] = j, s[3] = h, s[4] = a) : a = s[4], s[5] !== a || s[6] !== u ? (o = (0, n.jsx)("div", {
                    className: a,
                    children: u
                }), s[5] = a, s[6] = u, s[7] = o) : o = s[7];
                let k = !g,
                    C = x ?? "right",
                    N = b ?? t;
                return s[8] !== d || s[9] !== w || s[10] !== o || s[11] !== k || s[12] !== C || s[13] !== N || s[14] !== v || s[15] !== p || s[16] !== g || s[17] !== m || s[18] !== y ? (l = (0, n.jsx)(L.a, {
                    cloneCustomTrigger: !0,
                    color: w,
                    disabled: p,
                    onBeforeOpen: m,
                    tooltipContent: o,
                    closeOnTriggerBlur: k,
                    interactive: g,
                    keyboardNavigation: g,
                    side: C,
                    sideOffset: N,
                    align: v,
                    openWhen: y,
                    children: d
                }), s[8] = d, s[9] = w, s[10] = o, s[11] = k, s[12] = C, s[13] = N, s[14] = v, s[15] = p, s[16] = g, s[17] = m, s[18] = y, s[19] = l) : l = s[19], l
            },
            B = {
                content: "flex w-full items-center gap-[var(--spacing-menu-item-content,calc(var(--spacing)*1.5))]",
                icon: "shrink-0 opacity-75 group-focus:opacity-100 group-hover:opacity-100",
                itemBase: I.a.itemBase,
                itemInteractive: (0, i.b)("group", I.a.itemInteractive)
            },
            F = {
                xs: "icon-xs",
                sm: "icon-sm",
                base: "icon-base",
                md: "icon-md"
            };

        function H(e) {
            let t, a, l, s, c, u, m, f, p, h, g, x, b, v, y, j, N, S, A, M, E, L, T, z, P, _, O, D, F, H, U, q, G, $, V, X, Y, J, ee, et, ea, en, er, eo, ei, el, es, ed, ec, eu, em, ef = (0, r.c)(123);
            ef[0] !== e ? ({
                asChild: s,
                children: c,
                LeftIcon: t,
                leftIconAsset: g,
                keyboardShortcut: p,
                leftIcon: h,
                leftIconClassName: x,
                RightIcon: a,
                rightIconAsset: N,
                rightIcon: j,
                rightIconClassName: S,
                rightText: A,
                className: u,
                onClick: b,
                onSelect: v,
                isActive: M,
                disabled: m,
                focusableWhenDisabled: E,
                href: f,
                SubText: l,
                tooltipText: $,
                tooltipOnBeforeOpen: H,
                tooltipVariant: X,
                tooltipDisabled: D,
                tooltipTextClassName: V,
                tooltipInteractive: F,
                tooltipSide: q,
                tooltipSideOffset: G,
                tooltipAlign: O,
                tooltipOpenWhen: U,
                tone: L,
                variant: T,
                allowWrap: z,
                subTextAllowWrap: P,
                textOverflow: _,
                ...y
            } = e, ef[0] = e, ef[1] = t, ef[2] = a, ef[3] = l, ef[4] = s, ef[5] = c, ef[6] = u, ef[7] = m, ef[8] = f, ef[9] = p, ef[10] = h, ef[11] = g, ef[12] = x, ef[13] = b, ef[14] = v, ef[15] = y, ef[16] = j, ef[17] = N, ef[18] = S, ef[19] = A, ef[20] = M, ef[21] = E, ef[22] = L, ef[23] = T, ef[24] = z, ef[25] = P, ef[26] = _, ef[27] = O, ef[28] = D, ef[29] = F, ef[30] = H, ef[31] = U, ef[32] = q, ef[33] = G, ef[34] = $, ef[35] = V, ef[36] = X) : (t = ef[1], a = ef[2], l = ef[3], s = ef[4], c = ef[5], u = ef[6], m = ef[7], f = ef[8], p = ef[9], h = ef[10], g = ef[11], x = ef[12], b = ef[13], v = ef[14], y = ef[15], j = ef[16], N = ef[17], S = ef[18], A = ef[19], M = ef[20], E = ef[21], L = ef[22], T = ef[23], z = ef[24], P = ef[25], _ = ef[26], O = ef[27], D = ef[28], F = ef[29], H = ef[30], U = ef[31], q = ef[32], G = ef[33], $ = ef[34], V = ef[35], X = ef[36]);
            let ep = void 0 !== M && M,
                eh = void 0 !== E && E,
                eg = void 0 === L ? "default" : L,
                ex = void 0 === T ? "default" : T,
                eb = void 0 !== z && z,
                ev = void 0 !== P && P,
                ey = void 0 === _ ? "ellipsis" : _,
                ew = "danger" === eg || "destructive" === eg,
                ej = s && d.isValidElement(c) ? c : null,
                ek = ej?.props.href ?? f,
                eC = ek ? "a" : "div",
                eN = !!m && eh,
                eS = "display" === ex,
                eA = eS || "detail" === ex,
                eM = "label" !== ex && !eS && !m && (!!ek || !!b || !!v),
                eE = null == ej ? c : ej.props.children;
            if (ef[37] !== eE) {
                let e = d.Children.toArray(eE);
                J = (Y = d.isValidElement(e[0]) && e[0].type === Z ? e[0] : null) ? e.slice(1) : eE, ef[37] = eE, ef[38] = Y, ef[39] = J
            } else Y = ef[38], J = ef[39];
            let eL = J,
                eT = null != l ? "icon-sm" : "icon-xs";
            ef[40] !== t || ef[41] !== eT || ef[42] !== Y || ef[43] !== h || ef[44] !== g || ef[45] !== x ? (ee = h ?? Y ?? (g ? (0, n.jsx)(w.a, {
                className: (0, i.b)(x, B.icon),
                "aria-hidden": !1,
                asset: g
            }) : null) ?? (t ? (0, n.jsx)(t, {
                className: (0, i.b)(x ?? eT, B.icon)
            }) : null), ef[40] = t, ef[41] = eT, ef[42] = Y, ef[43] = h, ef[44] = g, ef[45] = x, ef[46] = ee) : ee = ef[46];
            let ez = ee,
                eI = S ?? "icon-xs";
            ef[47] !== eI ? (et = (0, i.b)(eI, B.icon), ef[47] = eI, ef[48] = et) : et = ef[48];
            let eP = et;
            ef[49] !== a || ef[50] !== j || ef[51] !== N || ef[52] !== S || ef[53] !== eP ? (ea = j ?? (N ? (0, n.jsx)(w.a, {
                className: (0, i.b)(S, B.icon),
                "aria-hidden": !1,
                asset: N
            }) : null) ?? (a ? (0, n.jsx)(a, {
                className: eP
            }) : null), ef[49] = a, ef[50] = j, ef[51] = N, ef[52] = S, ef[53] = eP, ef[54] = ea) : ea = ef[54];
            let e_ = ea;
            ef[55] !== p || ef[56] !== e_ || ef[57] !== A ? (en = p || e_ || null != A ? (0, n.jsxs)(n.Fragment, {
                children: [p ? (0, n.jsx)("span", {
                    className: "ms-2 shrink-0 text-xs text-codex-description",
                    children: p
                }) : null, null != A ? (0, n.jsx)("span", {
                    className: (0, i.b)("shrink-0", !e_ && "pe-1"),
                    children: A
                }) : null, e_]
            }) : null, ef[55] = p, ef[56] = e_, ef[57] = A, ef[58] = en) : en = ef[58];
            let eO = en;
            ef[59] !== l || ef[60] !== eb || ef[61] !== ez || ef[62] !== eL || ef[63] !== ev || ef[64] !== ey || ef[65] !== U || ef[66] !== eO ? (er = null != l ? (0, n.jsxs)("div", {
                "data-menu-row-content": !0,
                className: B.content,
                children: [null != ez ? (0, n.jsx)(k.a, {
                    layout: "menu",
                    children: ez
                }) : null, (0, n.jsxs)("div", {
                    className: "flex min-w-0 flex-1 flex-col",
                    children: [(0, n.jsx)("span", {
                        "data-tooltip-overflow-target": "trigger-overflows" === U ? "" : void 0,
                        className: (0, i.b)("min-w-0", eb && "whitespace-normal", !eb && ("fade" === ey ? "text-fade-truncate" : "truncate")),
                        children: eL
                    }), (0, n.jsx)("span", {
                        className: (0, i.b)("min-w-0 text-xs leading-dense text-tertiary", ev ? "whitespace-normal" : "truncate"),
                        children: l
                    })]
                }), eO]
            }) : (0, n.jsx)(C.b, {
                allowWrap: eb,
                leftIcon: ez,
                textOverflow: ey,
                tooltipOverflowTarget: "trigger-overflows" === U,
                trailingContent: eO,
                children: eL
            }), ef[59] = l, ef[60] = eb, ef[61] = ez, ef[62] = eL, ef[63] = ev, ef[64] = ey, ef[65] = U, ef[66] = eO, ef[67] = er) : er = ef[67];
            let eD = er,
                eR = ej?.props.className,
                eB = "default" === ex && ek && "focus:!outline-none";
            ef[68] !== ek || ef[69] !== ew || ef[70] !== eg || ef[71] !== ex ? (eo = "default" === ex && ek && [ew && "!text-danger", "warning" === eg && "!text-warning", "default" === eg && "!text-default"], ef[68] = ek, ef[69] = ew, ef[70] = eg, ef[71] = ex, ef[72] = eo) : eo = ef[72];
            let eF = ("default" === ex || "hint" === ex) && "flex flex-col";
            ef[73] !== eR || ef[74] !== eB || ef[75] !== eo || ef[76] !== eF ? (ei = (0, i.b)(eR, eB, eo, eF), ef[73] = eR, ef[74] = eB, ef[75] = eo, ef[76] = eF, ef[77] = ei) : ei = ef[77], ef[78] !== eD || ef[79] !== ei ? (el = {
                className: ei,
                children: eD
            }, ef[78] = eD, ef[79] = ei, ef[80] = el) : el = ef[80];
            let eH = el,
                eW = eA ? "surface" : "default";
            ef[81] !== u || ef[82] !== m || ef[83] !== ep || ef[84] !== ew || ef[85] !== eA || ef[86] !== eM || ef[87] !== eg || ef[88] !== ex ? (es = (0, i.b)("no-drag", "unstyled" !== ex && [B.itemBase, eA ? "rounded-md" : "rounded-xl"], "label" === ex && "cursor-default select-text text-codex-description", eA && ["select-none text-default", eM ? "cursor-interaction" : "cursor-default", !m && "hover:bg-primary-ghost-hover focus:bg-primary-ghost-hover"], ("default" === ex || "hint" === ex) && [ew && "text-danger", "warning" === eg && "text-warning", "default" === eg && ("hint" === ex ? "text-tertiary" : "text-default"), ep && "bg-primary-ghost-hover", m ? "cursor-default opacity-50" : eM && ("destructive" === eg ? "group hover:bg-danger-soft-alpha focus:bg-danger-soft-alpha cursor-interaction" : B.itemInteractive)], "hint" === ex && [I.a.hintRow, "select-none"], "unstyled" === ex && (m ? "cursor-default" : eM && "group cursor-interaction"), u), ef[81] = u, ef[82] = m, ef[83] = ep, ef[84] = ew, ef[85] = eA, ef[86] = eM, ef[87] = eg, ef[88] = ex, ef[89] = es) : es = ef[89];
            let eQ = ep ? "true" : void 0,
                eK = m || eS || void 0;
            ef[90] !== m || ef[91] !== eS || ef[92] !== b ? (ed = e => {
                eS ? e.preventDefault() : m || b?.(e)
            }, ef[90] = m, ef[91] = eS, ef[92] = b, ef[93] = ed) : ed = ef[93];
            let eU = eN || "label" === ex || eS ? K : m ? void 0 : v,
                eq = m && !eh;
            return ef[94] !== eC || ef[95] !== eH || ef[96] !== m || ef[97] !== ek || ef[98] !== eS || ef[99] !== ej ? (ec = null == ej ? (0, n.jsx)(eC, {
                href: ek,
                ...eH
            }) : d.cloneElement(ej, {
                ...eH,
                onClick: m || eS ? Q : ej.props.onClick,
                onAuxClick: m || eS ? W : ej.props.onAuxClick
            }), ef[94] = eC, ef[95] = eH, ef[96] = m, ef[97] = ek, ef[98] = eS, ef[99] = ej, ef[100] = ec) : ec = ef[100], ef[101] !== y || ef[102] !== es || ef[103] !== eQ || ef[104] !== eK || ef[105] !== ed || ef[106] !== eU || ef[107] !== eq || ef[108] !== ec ? (eu = (0, n.jsx)(o.Item, {
                asChild: !0,
                className: es,
                "aria-current": eQ,
                "aria-disabled": eK,
                onClick: ed,
                onSelect: eU,
                disabled: eq,
                ...y,
                children: ec
            }), ef[101] = y, ef[102] = es, ef[103] = eQ, ef[104] = eK, ef[105] = ed, ef[106] = eU, ef[107] = eq, ef[108] = ec, ef[109] = eu) : eu = ef[109], ef[110] !== eW || ef[111] !== eu || ef[112] !== O || ef[113] !== D || ef[114] !== F || ef[115] !== H || ef[116] !== U || ef[117] !== q || ef[118] !== G || ef[119] !== $ || ef[120] !== V || ef[121] !== X ? (em = (0, n.jsx)(R, {
                color: eW,
                tooltipText: $,
                tooltipOnBeforeOpen: H,
                tooltipVariant: X,
                tooltipDisabled: D,
                tooltipTextClassName: V,
                tooltipInteractive: F,
                tooltipSide: q,
                tooltipSideOffset: G,
                tooltipAlign: O,
                tooltipOpenWhen: U,
                children: eu
            }), ef[110] = eW, ef[111] = eu, ef[112] = O, ef[113] = D, ef[114] = F, ef[115] = H, ef[116] = U, ef[117] = q, ef[118] = G, ef[119] = $, ef[120] = V, ef[121] = X, ef[122] = em) : em = ef[122], em
        }

        function W(e) {
            return e.preventDefault()
        }

        function Q(e) {
            return e.preventDefault()
        }

        function K(e) {
            return e.preventDefault()
        }

        function U(e) {
            let t, a, l, s, c, u, m, f, h, g, x, b, v, y, w, j, C, N, S, A, M, L, T, z = (0, r.c)(52);
            z[0] !== e ? ({
                children: l,
                closeOnSelect: g,
                checked: a,
                className: s,
                disabled: c,
                href: u,
                indicator: x,
                leftIcon: m,
                onSelect: f,
                SubText: t,
                ...h
            } = e, z[0] = e, z[1] = t, z[2] = a, z[3] = l, z[4] = s, z[5] = c, z[6] = u, z[7] = m, z[8] = f, z[9] = h, z[10] = g, z[11] = x) : (t = z[1], a = z[2], l = z[3], s = z[4], c = z[5], u = z[6], m = z[7], f = z[8], h = z[9], g = z[10], x = z[11]);
            let I = void 0 !== g && g,
                P = void 0 === x ? "checkmark" : x;
            if (z[12] !== l) {
                let e = d.Children.toArray(l);
                v = (b = d.isValidElement(e[0]) && e[0].type === Z ? e[0] : null) ? e.slice(1) : l, z[12] = l, z[13] = b, z[14] = v
            } else b = z[13], v = z[14];
            let _ = v;
            z[15] !== b || z[16] !== m ? (y = null != m || null != b ? (0, n.jsx)(k.a, {
                layout: "menu",
                children: m ?? b
            }) : null, z[15] = b, z[16] = m, z[17] = y) : y = z[17], z[18] !== _ ? (w = (0, n.jsx)("span", {
                className: "truncate",
                children: _
            }), z[18] = _, z[19] = w) : w = z[19], z[20] !== t ? (j = null != t ? (0, n.jsx)("span", {
                className: "text-xs leading-dense whitespace-normal text-tertiary",
                children: t
            }) : null, z[20] = t, z[21] = j) : j = z[21], z[22] !== w || z[23] !== j ? (C = (0, n.jsxs)("div", {
                className: "flex min-w-0 flex-1 flex-col",
                children: [w, j]
            }), z[22] = w, z[23] = j, z[24] = C) : C = z[24], z[25] !== a || z[26] !== P ? (N = "switch" === P ? (0, n.jsx)(E.b, {
                checked: !0 === a,
                size: "sm"
            }) : (0, n.jsx)("span", {
                className: "icon-xs shrink-0",
                children: (0, n.jsx)(o.ItemIndicator, {
                    children: (0, n.jsx)(p.a, {
                        className: "icon-xs"
                    })
                })
            }), z[25] = a, z[26] = P, z[27] = N) : N = z[27], z[28] !== y || z[29] !== C || z[30] !== N ? (S = (0, n.jsxs)("div", {
                "data-menu-row-content": !0,
                className: B.content,
                children: [y, C, N]
            }), z[28] = y, z[29] = C, z[30] = N, z[31] = S) : S = z[31];
            let O = S,
                D = null != u,
                R = null != u && "focus:!outline-none !text-default",
                F = c ? "cursor-default opacity-50" : B.itemInteractive;
            return z[32] !== s || z[33] !== R || z[34] !== F ? (A = (0, i.b)("no-drag flex flex-col", B.itemBase, "rounded-xl text-default", R, F, s), z[32] = s, z[33] = R, z[34] = F, z[35] = A) : A = z[35], z[36] !== I || z[37] !== u || z[38] !== f ? (M = e => {
                null != u || I || e.preventDefault(), f?.(e)
            }, z[36] = I, z[37] = u, z[38] = f, z[39] = M) : M = z[39], z[40] !== c || z[41] !== u || z[42] !== O ? (L = null == u ? O : (0, n.jsx)("a", {
                href: u,
                onAuxClick: c ? G : void 0,
                onClick: c ? q : void 0,
                children: O
            }), z[40] = c, z[41] = u, z[42] = O, z[43] = L) : L = z[43], z[44] !== a || z[45] !== c || z[46] !== h || z[47] !== D || z[48] !== A || z[49] !== M || z[50] !== L ? (T = (0, n.jsx)(o.CheckboxItem, {
                asChild: D,
                className: A,
                checked: a,
                disabled: c,
                onSelect: M,
                ...h,
                children: L
            }), z[44] = a, z[45] = c, z[46] = h, z[47] = D, z[48] = A, z[49] = M, z[50] = L, z[51] = T) : T = z[51], T
        }

        function q(e) {
            return e.preventDefault()
        }

        function G(e) {
            return e.preventDefault()
        }

        function $(e) {
            return e.preventDefault()
        }

        function V(e) {
            return e.preventDefault()
        }

        function Z(e) {
            let t, a, o = (0, r.c)(6),
                {
                    children: l,
                    className: s,
                    size: d
                } = e,
                c = F[void 0 === d ? "sm" : d];
            return o[0] !== s || o[1] !== c ? (t = (0, i.b)("inline-flex items-center justify-center leading-none", c, B.icon, s), o[0] = s, o[1] = c, o[2] = t) : t = o[2], o[3] !== l || o[4] !== t ? (a = (0, n.jsx)("span", {
                className: t,
                children: l
            }), o[3] = l, o[4] = t, o[5] = a) : a = o[5], a
        }

        function X(e) {
            let t, a, o, l, s, d, c = (0, r.c)(12);
            return c[0] !== e ? ({
                onKeyDown: a,
                className: t,
                ...o
            } = e, c[0] = e, c[1] = t, c[2] = a, c[3] = o) : (t = c[1], a = c[2], o = c[3]), c[4] !== t ? (l = (0, i.b)("w-full min-w-0 rounded-sm border border-none px-row-x py-row-y text-sm !outline-none", t), c[4] = t, c[5] = l) : l = c[5], c[6] !== a ? (s = e => {
                if (e.stopPropagation(), (e.metaKey || e.ctrlKey) && "a" === e.key.toLowerCase()) {
                    e.preventDefault(), e.currentTarget.select();
                    return
                }
                a?.(e)
            }, c[6] = a, c[7] = s) : s = c[7], c[8] !== o || c[9] !== l || c[10] !== s ? (d = (0, n.jsx)("input", {
                className: l,
                autoFocus: !0,
                onKeyDown: s,
                ...o
            }), c[8] = o, c[9] = l, c[10] = s, c[11] = d) : d = c[11], d
        }

        function Y(e, t) {
            let a = J(e),
                n = "next" === t ? a[0] : a[a.length - 1];
            return n?.focus(), null != n
        }

        function J(e) {
            let t = e.closest('[role="menu"]');
            if (null == t) return [];
            let a = Array.from(t.querySelectorAll('input, [role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"]'));
            return a.slice(a.indexOf(e) + 1).filter(e => {
                let t = e.getAttribute("role");
                return ("menuitem" === t || "menuitemcheckbox" === t || "menuitemradio" === t) && !e.hasAttribute("data-disabled") && "true" !== e.getAttribute("aria-disabled")
            })
        }

        function ee(e) {
            let t, a, o, l, s = (0, r.c)(11),
                {
                    className: d,
                    paddingClassName: c,
                    variant: u
                } = e,
                m = void 0 === c ? "py-[var(--app-menu-separator-gutter,var(--spacing))]" : c,
                f = void 0 === u ? "default" : u;
            s[0] !== d || s[1] !== m || s[2] !== f ? (t = (0, i.b)("w-full", "chatgpt" === f ? "px-4 py-1" : ["px-[var(--app-menu-separator-inset,var(--padding-row-x))]", m], d), s[0] = d, s[1] = m, s[2] = f, s[3] = t) : t = s[3];
            let p = "chatgpt" === f ? "bg-border-subtle" : "bg-border";
            return s[4] !== p ? (a = (0, i.b)("h-px w-full", p), s[4] = p, s[5] = a) : a = s[5], s[6] !== a ? (o = (0, n.jsx)("div", {
                className: a
            }), s[6] = a, s[7] = o) : o = s[7], s[8] !== t || s[9] !== o ? (l = (0, n.jsx)("div", {
                className: t,
                children: o
            }), s[8] = t, s[9] = o, s[10] = l) : l = s[10], l
        }

        function et(e) {
            let t, a, l, s, c, u, f, p, h, g, x, v, w, j, k, C, N, S, M, E, L, z, I, _, D, R, B, F, H, W, Q, K, U, q, G, $ = (0, r.c)(142),
                {
                    triggerButton: V,
                    disabled: Z,
                    children: X,
                    loadingContent: Y,
                    modal: J,
                    open: ee,
                    openOnHover: et,
                    onOpenChange: eo,
                    dir: el,
                    side: es,
                    align: ed,
                    sideOffset: ec,
                    getPlacement: eu,
                    alignOffset: em,
                    contentRef: ef,
                    contentRole: ep,
                    contentAriaLabelledBy: eh,
                    scrollFade: eg,
                    scrollPeek: ex,
                    onContentFocus: eb,
                    onContentKeyDownCapture: ev,
                    onContentPointerDownCapture: ey,
                    onContentPointerEnter: ew,
                    onContentPointerLeave: ej,
                    onOpenAutoFocus: ek,
                    onCloseAutoFocus: eC,
                    onEscapeKeyDown: eN,
                    onInteractOutside: eS,
                    contentClassName: eA,
                    contentVariant: eM,
                    contentStyle: eE,
                    size: eL,
                    rowLayout: eT,
                    surface: ez,
                    contentWidth: eI,
                    contentMaxWidth: eP,
                    matchTriggerWidth: e_,
                    contentMaxHeight: eO,
                    portalContainer: eD
                } = e,
                eR = void 0 !== J && J,
                eB = void 0 !== et && et,
                eF = void 0 === ep ? "menu" : ep,
                eH = void 0 === ez ? "menu" : ez,
                eW = void 0 !== e_ && e_,
                eQ = (0, m.c)(),
                eK = `calc(var(--radix-dropdown-menu-trigger-width) / ${eQ})`,
                eU = (0, d.useRef)(null),
                [eq, eG] = (0, d.useState)(null),
                e$ = (0, d.useRef)(null),
                eV = (0, d.useRef)(void 0),
                eZ = (0, d.useRef)(null),
                eX = (0, d.useRef)(!1),
                eY = null == eu ? void 0 : eG;
            $[0] !== ef || $[1] !== eY ? (t = (0, b.a)(ef, eY), $[0] = ef, $[1] = eY, $[2] = t) : t = $[2];
            let eJ = t,
                [e0, e1] = (0, d.useState)(),
                e2 = e0?.alignOffset ?? em,
                [e3, e5] = (0, d.useState)();
            $[3] !== Z ? (a = {
                disabled: Z,
                dismissOnWindowBlur: !1
            }, $[3] = Z, $[4] = a) : a = $[4];
            let {
                handleOpenChange: e4,
                open: e6
            } = (0, y.g)(ee, eo, a), e7 = (0, d.useContext)(A.a)?.registerOpen;
            $[5] !== e6 || $[6] !== e7 ? (s = () => {
                if (e6) return e7?.()
            }, l = [e6, e7], $[5] = e6, $[6] = e7, $[7] = l, $[8] = s) : (l = $[7], s = $[8]), (0, d.useLayoutEffect)(s, l), e6 || null == e0 || e1(void 0), $[9] === Symbol.for("react.memo_cache_sentinel") ? (c = function() {
                window.clearTimeout(eV.current), eZ.current?.(), eZ.current = null
            }, $[9] = c) : c = $[9];
            let e8 = c;
            $[10] === Symbol.for("react.memo_cache_sentinel") ? (u = function() {
                e8(), eX.current = !1
            }, $[10] = u) : u = $[10];
            let e9 = u;
            $[11] !== e4 ? (f = function(e) {
                e8(), e && (eX.current = !1), e4(e)
            }, $[11] = e4, $[12] = f) : f = $[12];
            let te = f,
                tt = (0, d.useEffectEvent)(e8);
            $[13] !== tt ? (p = () => () => tt(), $[13] = tt, $[14] = p) : p = $[14], $[15] !== Z || $[16] !== e6 || $[17] !== eB ? (h = [Z, e6, eB], $[15] = Z, $[16] = e6, $[17] = eB, $[18] = h) : h = $[18], (0, d.useEffect)(p, h), $[19] !== e4 || $[20] !== e6 || $[21] !== eB ? (g = function(e) {
                if (!eB || "mouse" !== e.pointerType || (e8(), !e6 || !eX.current)) return;
                let t = () => {
                        e8(), e4(!1)
                    },
                    a = () => {
                        window.clearTimeout(eV.current), eV.current = window.setTimeout(t, 100)
                    },
                    n = e.currentTarget === eU.current,
                    r = n ? e$.current : eU.current,
                    o = e$.current?.dataset.side;
                null != r && ("top" === o || "right" === o || "bottom" === o || "left" === o) && (eZ.current = (0, T.a)({
                    sourceElement: e.currentTarget,
                    destinationElement: r,
                    destinationSide: n ? o : P[o],
                    pointer: {
                        x: e.clientX,
                        y: e.clientY
                    },
                    onEnterDestination: e8,
                    onMoveInsideTriangle: a,
                    onMoveOutsideTriangle: t
                })), a()
            }, $[19] = e4, $[20] = e6, $[21] = eB, $[22] = g) : g = $[22];
            let ta = g;
            $[23] !== eq || $[24] !== eu || $[25] !== e6 || $[26] !== es || $[27] !== ec || $[28] !== e3 || $[29] !== eQ ? (x = () => {
                let e = eU.current;
                if (!e6 || null == e) return;
                if (null == eu) {
                    if (null != ec) return;
                    return (0, y.f)(e, e3 ?? es ?? "bottom", e => {
                        let t = (0, y.e)(eQ) + e;
                        e1(e => e?.sideOffset === t ? e : {
                            sideOffset: t
                        })
                    })
                }
                let t = () => {
                    let t = eu(e, eQ, eq?.offsetWidth);
                    e1(e => e?.side === t.side && e?.align === t.align && e?.sideOffset === t.sideOffset && e?.alignOffset === t.alignOffset ? e : t)
                };
                t();
                let a = null == eq ? null : new ResizeObserver(t);
                null != eq && a?.observe(eq);
                let n = new AbortController,
                    {
                        signal: r
                    } = n,
                    o = e.ownerDocument.defaultView;
                return o?.addEventListener("resize", t, {
                    signal: r
                }), o?.addEventListener("scroll", t, {
                    capture: !0,
                    signal: r
                }), o?.visualViewport?.addEventListener("resize", t, {
                    signal: r
                }), o?.visualViewport?.addEventListener("scroll", t, {
                    signal: r
                }), () => {
                    a?.disconnect(), n.abort()
                }
            }, v = [eq, eu, e6, es, ec, e3, eQ], $[23] = eq, $[24] = eu, $[25] = e6, $[26] = es, $[27] = ec, $[28] = e3, $[29] = eQ, $[30] = x, $[31] = v) : (x = $[30], v = $[31]), (0, d.useLayoutEffect)(x, v), $[32] !== ef || $[33] !== eu || $[34] !== eJ || $[35] !== eB ? (w = null != eu || eB ? e => {
                e$.current = e;
                let t = eJ(e);
                return () => {
                    e$.current = null, t?.()
                }
            } : ef, $[32] = ef, $[33] = eu, $[34] = eJ, $[35] = eB, $[36] = w) : w = $[36], $[37] !== eh ? (j = null == eh ? {} : {
                "aria-labelledby": eh
            }, $[37] = eh, $[38] = j) : j = $[38];
            let tn = e3 ?? e0?.side ?? es,
                tr = e0?.align ?? ed,
                to = null == eu ? ec ?? e0?.sideOffset : e0?.sideOffset ?? ec;
            $[39] !== ev ? (k = e => {
                e9(), ev?.(e)
            }, $[39] = ev, $[40] = k) : k = $[40], $[41] !== ey ? (C = e => {
                e9(), ey?.(e)
            }, $[41] = ey, $[42] = C) : C = $[42], $[43] !== ew ? (N = e => {
                e8(), ew?.(e)
            }, $[43] = ew, $[44] = N) : N = $[44], $[45] !== ta || $[46] !== ej ? (S = e => {
                ej?.(e), e.defaultPrevented || ta(e)
            }, $[45] = ta, $[46] = ej, $[47] = S) : S = $[47], $[48] !== ek ? (M = e => {
                eX.current && e.preventDefault(), ek?.(e)
            }, $[48] = ek, $[49] = M) : M = $[49], $[50] !== eC ? (E = e => {
                eX.current && e.preventDefault(), eC?.(e), eX.current = !1
            }, $[50] = eC, $[51] = E) : E = $[51], $[52] !== eS || $[53] !== eB ? (L = e => {
                eB && e.target instanceof Node && eU.current?.contains(e.target) && e.preventDefault(), eS?.(e)
            }, $[52] = eS, $[53] = eB, $[54] = L) : L = $[54], $[55] !== eA || $[56] !== eI ? (z = (0, i.b)((0, y.d)(eI), eA), $[55] = eA, $[56] = eI, $[57] = z) : z = $[57], $[58] !== eW || $[59] !== eK ? (I = eW ? {
                width: eK,
                minWidth: eK
            } : null, $[58] = eW, $[59] = eK, $[60] = I) : I = $[60], $[61] !== eO || $[62] !== eD || $[63] !== eQ ? (_ = (0, y.a)(eO, null == eD ? `calc(var(--radix-dropdown-menu-content-available-height) / ${eQ})` : "var(--radix-dropdown-menu-content-available-height)", null == eD ? `calc((100vh - 16px) / ${eQ})` : void 0) ?? O.maxHeight, $[61] = eO, $[62] = eD, $[63] = eQ, $[64] = _) : _ = $[64];
            let ti = null == eD && 1 !== eQ ? eQ : void 0;
            $[65] !== eE || $[66] !== I || $[67] !== _ || $[68] !== ti ? (D = {
                ...eE,
                ...I,
                maxHeight: _,
                zoom: ti
            }, $[65] = eE, $[66] = I, $[67] = _, $[68] = ti, $[69] = D) : D = $[69], $[70] !== e2 || $[71] !== X || $[72] !== eP || $[73] !== eF || $[74] !== eM || $[75] !== eb || $[76] !== eN || $[77] !== eT || $[78] !== eg || $[79] !== ex || $[80] !== eL || $[81] !== eH || $[82] !== w || $[83] !== j || $[84] !== tn || $[85] !== tr || $[86] !== to || $[87] !== k || $[88] !== C || $[89] !== N || $[90] !== S || $[91] !== M || $[92] !== E || $[93] !== L || $[94] !== z || $[95] !== D ? (R = (0, n.jsx)(ei.Content, {
                ref: w,
                role: eF,
                ...j,
                scrollFade: eg,
                scrollPeek: ex,
                side: tn,
                align: tr,
                sideOffset: to,
                alignOffset: e2,
                onFocus: eb,
                onKeyDownCapture: k,
                onPointerDownCapture: C,
                onPointerEnter: N,
                onPointerLeave: S,
                onOpenAutoFocus: M,
                onCloseAutoFocus: E,
                onEscapeKeyDown: eN,
                onInteractOutside: L,
                size: eL,
                maxWidth: eP,
                rowLayout: eT,
                surface: eH,
                variant: eM,
                className: z,
                style: D,
                children: X
            }), $[70] = e2, $[71] = X, $[72] = eP, $[73] = eF, $[74] = eM, $[75] = eb, $[76] = eN, $[77] = eT, $[78] = eg, $[79] = ex, $[80] = eL, $[81] = eH, $[82] = w, $[83] = j, $[84] = tn, $[85] = tr, $[86] = to, $[87] = k, $[88] = C, $[89] = N, $[90] = S, $[91] = M, $[92] = E, $[93] = L, $[94] = z, $[95] = D, $[96] = R) : R = $[96];
            let tl = R;
            return $[97] !== e6 ? (B = e => {
                eU.current = e, null != e && e6 && e5((0, y.b)(e))
            }, $[97] = e6, $[98] = B) : B = $[98], $[99] !== Z || $[100] !== e4 || $[101] !== e6 || $[102] !== eB ? (F = e => {
                eB && !Z && !e.defaultPrevented && "mouse" === e.pointerType && (e8(), e6 || (eV.current = window.setTimeout(() => {
                    eX.current = !0, e4(!0)
                }, 200)))
            }, $[99] = Z, $[100] = e4, $[101] = e6, $[102] = eB, $[103] = F) : F = $[103], $[104] !== eB ? (H = e => {
                !eB || e.defaultPrevented || 0 !== e.button || e.ctrlKey || (e8(), e.preventDefault())
            }, $[104] = eB, $[105] = H) : H = $[105], $[106] !== te || $[107] !== Z || $[108] !== e6 || $[109] !== eB ? (W = e => {
                if (eB && !Z && !e.defaultPrevented && 0 === e.button && !e.ctrlKey && 0 !== e.detail) {
                    let e = !e6 || eX.current;
                    te(e), e && e$.current?.focus({
                        preventScroll: !0
                    })
                }
            }, $[106] = te, $[107] = Z, $[108] = e6, $[109] = eB, $[110] = W) : W = $[110], $[111] !== e6 || $[112] !== eB ? (Q = e => {
                if (eB && !e.defaultPrevented && (e9(), e6 && ["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key))) {
                    e.preventDefault();
                    let t = e$.current?.querySelectorAll('[role^="menuitem"]:not([data-disabled])');
                    ("ArrowUp" === e.key ? t?.[t.length - 1] : t?.[0])?.focus()
                }
            }, $[111] = e6, $[112] = eB, $[113] = Q) : Q = $[113], $[114] !== Z || $[115] !== ta || $[116] !== B || $[117] !== F || $[118] !== H || $[119] !== W || $[120] !== Q || $[121] !== V ? (K = (0, n.jsx)(ei.Trigger, {
                ref: B,
                asChild: !0,
                disabled: Z,
                onPointerEnter: F,
                onPointerLeave: ta,
                onPointerDown: H,
                onClick: W,
                onKeyDown: Q,
                children: V
            }), $[114] = Z, $[115] = ta, $[116] = B, $[117] = F, $[118] = H, $[119] = W, $[120] = Q, $[121] = V, $[122] = K) : K = $[122], $[123] !== Z || $[124] !== eR || $[125] !== e6 || $[126] !== eD ? (U = !Z && eR && e6 ? (0, n.jsx)(o.Portal, {
                container: eD ?? void 0,
                children: (0, n.jsx)(en, {
                    container: eD ?? void 0,
                    children: (0, n.jsx)("div", {
                        "aria-hidden": !0,
                        className: "pointer-events-auto fixed inset-0"
                    })
                })
            }) : null, $[123] = Z, $[124] = eR, $[125] = e6, $[126] = eD, $[127] = U) : U = $[127], $[128] !== tl || $[129] !== Z || $[130] !== Y || $[131] !== e6 || $[132] !== eD ? (q = !Z && (0, n.jsx)(ea, {
                container: eD ?? void 0,
                children: void 0 === Y ? tl : (0, n.jsx)(er, {
                    content: tl,
                    loadingContent: Y,
                    open: e6
                })
            }), $[128] = tl, $[129] = Z, $[130] = Y, $[131] = e6, $[132] = eD, $[133] = q) : q = $[133], $[134] !== te || $[135] !== el || $[136] !== eR || $[137] !== e6 || $[138] !== K || $[139] !== U || $[140] !== q ? (G = (0, n.jsxs)(o.Root, {
                dir: el,
                modal: eR,
                open: e6,
                onOpenChange: te,
                children: [K, U, q]
            }), $[134] = te, $[135] = el, $[136] = eR, $[137] = e6, $[138] = K, $[139] = U, $[140] = q, $[141] = G) : G = $[141], G
        }

        function ea(e) {
            let t, a, i, l, s = (0, r.c)(12),
                {
                    children: c,
                    container: u
                } = e,
                [m, f] = (0, d.useState)(null),
                p = null == u ? m : void 0;
            return s[0] !== c || s[1] !== u ? (t = null == u ? (0, n.jsx)("div", {
                ref: f,
                className: "contents",
                children: c
            }) : c, s[0] = c, s[1] = u, s[2] = t) : t = s[2], s[3] !== u || s[4] !== t ? (a = (0, n.jsx)(en, {
                container: u,
                children: t
            }), s[3] = u, s[4] = t, s[5] = a) : a = s[5], s[6] !== u || s[7] !== a ? (i = (0, n.jsx)(o.Portal, {
                container: u,
                children: a
            }), s[6] = u, s[7] = a, s[8] = i) : i = s[8], s[9] !== p || s[10] !== i ? (l = (0, n.jsx)(_, {
                value: p,
                children: i
            }), s[9] = p, s[10] = i, s[11] = l) : l = s[11], l
        }

        function en(e) {
            let t, a = (0, r.c)(3),
                {
                    children: o,
                    container: i
                } = e,
                l = i ?? document.body;
            return a[0] !== o || a[1] !== l ? (t = (0, n.jsx)(v.a, {
                container: l,
                children: o
            }), a[0] = o, a[1] = l, a[2] = t) : t = a[2], t
        }

        function er(e) {
            let t, a, o, i, l, s = (0, r.c)(12),
                {
                    content: c,
                    loadingContent: u,
                    open: m
                } = e,
                f = (0, d.useRef)(m);
            return s[0] !== m ? (t = () => {
                f.current = m
            }, a = [m], s[0] = m, s[1] = t, s[2] = a) : (t = s[1], a = s[2]), (0, d.useLayoutEffect)(t, a), s[3] !== c.props ? (o = e => {
                f.current ? e.preventDefault() : c.props.onCloseAutoFocus?.(e)
            }, s[3] = c.props, s[4] = o) : o = s[4], s[5] !== c.props || s[6] !== u || s[7] !== o ? (i = (0, n.jsx)(ei.Content, {
                ...c.props,
                preserveFocusTargetOnOpen: !0,
                onCloseAutoFocus: o,
                children: u
            }), s[5] = c.props, s[6] = u, s[7] = o, s[8] = i) : i = s[8], s[9] !== c || s[10] !== i ? (l = (0, n.jsx)(d.Suspense, {
                fallback: i,
                children: c
            }), s[9] = c, s[10] = i, s[11] = l) : l = s[11], l
        }

        function eo(e) {
            let t, a, o, c, u, m = (0, r.c)(34),
                {
                    trigger: f,
                    children: p,
                    isDefaultOpen: g,
                    onOpenChange: b
                } = e,
                v = f.props.disabled ?? !1,
                [y, w] = (0, d.useState)(!v && void 0 !== g && g),
                j = y && !v;
            if (m[0] !== v || m[1] !== j || m[2] !== b || m[3] !== f) {
                let e, a, r, o, l, s;
                m[5] !== v || m[6] !== j || m[7] !== b || m[8] !== f.props ? (e = e => {
                    f.props.onSelect?.(e), e.defaultPrevented || (e.preventDefault(), e.stopPropagation(), v || (w(!j), b?.(!j)))
                }, m[5] = v, m[6] = j, m[7] = b, m[8] = f.props, m[9] = e) : e = m[9];
                let c = j && "rotate-90";
                m[10] !== c ? (a = (0, i.b)("inline-flex items-center justify-center text-tertiary", c), m[10] = c, m[11] = a) : a = m[11];
                let u = f.props.rightIconClassName ?? "icon-xs";
                m[12] !== u ? (r = (0, i.b)(u, B.icon), m[12] = u, m[13] = r) : r = m[13], m[14] !== r ? (o = (0, n.jsx)(h.a, {
                    className: r
                }), m[14] = r, m[15] = o) : o = m[15], m[16] !== a || m[17] !== o ? (l = (0, n.jsx)("span", {
                    "aria-hidden": !0,
                    className: a,
                    children: o
                }), m[16] = a, m[17] = o, m[18] = l) : l = m[18], m[19] !== e || m[20] !== l ? (s = {
                    onSelect: e,
                    rightIcon: l
                }, m[19] = e, m[20] = l, m[21] = s) : s = m[21], t = d.cloneElement(f, s), m[0] = v, m[1] = j, m[2] = b, m[3] = f, m[4] = t
            } else t = m[4];
            let k = t,
                C = j ? "open" : "closed",
                N = j ? void 0 : "pointer-events-none invisible h-0 overflow-hidden";
            return m[22] !== p || m[23] !== j ? (a = j && (0, n.jsx)(l.a.div, {
                initial: !1,
                animate: {
                    height: "auto",
                    opacity: 1
                },
                exit: {
                    height: 0,
                    opacity: 0
                },
                transition: x.a,
                className: "overflow-hidden",
                children: p
            }, "dropdown-submenu"), m[22] = p, m[23] = j, m[24] = a) : a = m[24], m[25] !== a ? (o = (0, n.jsx)(s.a, {
                initial: !1,
                children: a
            }), m[25] = a, m[26] = o) : o = m[26], m[27] !== N || m[28] !== o ? (c = (0, n.jsx)("div", {
                className: N,
                children: o
            }), m[27] = N, m[28] = o, m[29] = c) : c = m[29], m[30] !== k || m[31] !== C || m[32] !== c ? (u = (0, n.jsxs)("div", {
                className: "flex flex-col",
                "data-state": C,
                children: [k, c]
            }), m[30] = k, m[31] = C, m[32] = c, m[33] = u) : u = m[33], u
        }
        let ei = {
            focusMenuItem: Y,
            Trigger: function(e) {
                let t, a, l, s, d, c, u, m, f = (0, r.c)(19);
                f[0] !== e ? ({
                    ref: s,
                    disabled: a,
                    className: t,
                    onMouseDown: l,
                    ...d
                } = e, f[0] = e, f[1] = t, f[2] = a, f[3] = l, f[4] = s, f[5] = d) : (t = f[1], a = f[2], l = f[3], s = f[4], d = f[5]);
                let p = a || void 0,
                    h = a ? "cursor-default opacity-25" : "cursor-interaction";
                return f[6] !== t || f[7] !== h ? (c = (0, i.b)("outline-hidden", h, t), f[6] = t, f[7] = h, f[8] = c) : c = f[8], f[9] !== a || f[10] !== l ? (u = e => {
                    l?.(e), a || 0 !== e.button || e.ctrlKey || e.preventDefault()
                }, f[9] = a, f[10] = l, f[11] = u) : u = f[11], f[12] !== a || f[13] !== s || f[14] !== d || f[15] !== p || f[16] !== c || f[17] !== u ? (m = (0, n.jsx)(o.Trigger, {
                    ref: s,
                    "aria-disabled": p,
                    disabled: a,
                    className: c,
                    onMouseDown: u,
                    ...d
                }), f[12] = a, f[13] = s, f[14] = d, f[15] = p, f[16] = c, f[17] = u, f[18] = m) : m = f[18], m
            },
            Content: function(e) {
                let t, a, l, s, c, u, f, p, h, g, x, b, v, w, j, k, C, M, E, L, T, z, P, _, D, R, B = (0, r.c)(60);
                B[0] !== e ? ({
                    preserveFocusTargetOnOpen: g,
                    children: a,
                    className: l,
                    align: t,
                    maxWidth: x,
                    onKeyDownCapture: s,
                    sideOffset: p,
                    size: b,
                    rowLayout: f,
                    surface: v,
                    variant: w,
                    scrollFade: j,
                    scrollPeek: k,
                    ref: c,
                    style: h,
                    ...u
                } = e, B[0] = e, B[1] = t, B[2] = a, B[3] = l, B[4] = s, B[5] = c, B[6] = u, B[7] = f, B[8] = p, B[9] = h, B[10] = g, B[11] = x, B[12] = b, B[13] = v, B[14] = w, B[15] = j, B[16] = k) : (t = B[1], a = B[2], l = B[3], s = B[4], c = B[5], u = B[6], f = B[7], p = B[8], h = B[9], g = B[10], x = B[11], b = B[12], v = B[13], w = B[14], j = B[15], k = B[16]);
                let F = void 0 !== g && g,
                    H = void 0 === x ? "default" : x,
                    W = void 0 === b ? "default" : b,
                    Q = void 0 === v ? "menu" : v,
                    K = void 0 === w ? "default" : w,
                    U = void 0 !== j && j,
                    q = void 0 !== k && k,
                    G = (0, m.c)(),
                    $ = (0, d.useContext)(A.a),
                    V = (0, d.useContext)(S.a);
                B[17] !== V ? (C = () => (0, S.b)(V), B[17] = V, B[18] = C) : C = B[18];
                let [Z] = (0, d.useState)(C), X = O.maxWidth;
                "wide" === H ? X = "min(var(--container-sm), var(--radix-dropdown-menu-content-available-width), calc(100vw - 16px))" : "chatgpt" === Q && (X = "min(var(--container-xs), var(--radix-dropdown-menu-content-available-width), calc(100vw - 16px))");
                let Y = $?.id,
                    ee = U || q ? "overflow-hidden" : "overflow-y-auto",
                    et = "picker" === K ? "w-65 [--app-menu-gutter:0px]" : "panel" === Q && "px-1 py-1";
                B[19] !== l || B[20] !== f || B[21] !== W || B[22] !== Q || B[23] !== ee || B[24] !== et || B[25] !== K ? (M = (0, i.b)("no-drag z-50 m-px flex select-none flex-col", ee, et, (0, y.c)(Q), "inset" === K && "px-2.5", "glass" === Q && I.a.glassSurface, "compact" === W && I.a.compactRows, "large" === W && I.a.largeRows, "single-line" === f && I.a.singleLineRows, "descriptive" === W && I.a.descriptiveRows, "select" === W && I.a.selectRows, "inset" === W && I.a.insetRows, "action" === W && I.a.actionRows, l), B[19] = l, B[20] = f, B[21] = W, B[22] = Q, B[23] = ee, B[24] = et, B[25] = K, B[26] = M) : M = B[26];
                let ea = t ?? "start";
                return B[27] !== s ? (E = e => {
                    if (s?.(e), e.defaultPrevented || "ArrowUp" !== e.key && !("Tab" === e.key && e.shiftKey)) return;
                    let t = e.currentTarget.querySelector("input"),
                        a = null == t ? void 0 : J(t)[0];
                    e.target instanceof HTMLElement && e.target.closest('[role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"]') === a && (t?.focus(), e.preventDefault(), e.stopPropagation())
                }, B[27] = s, B[28] = E) : E = B[28], B[29] !== p || B[30] !== G ? (L = p ?? (0, y.e)(G), B[29] = p, B[30] = G, B[31] = L) : L = B[31], B[32] !== X || B[33] !== h ? (T = {
                    ...O,
                    maxWidth: X,
                    ...h
                }, B[32] = X, B[33] = h, B[34] = T) : T = B[34], B[35] !== Z || B[36] !== F || B[37] !== u ? (z = {
                    onOpenAutoFocus: e => {
                        Z.onOpenAutoFocus(e, F), u.onOpenAutoFocus?.(e)
                    }
                }, B[35] = Z, B[36] = F, B[37] = u, B[38] = z) : z = B[38], B[39] !== Z || B[40] !== u ? (P = e => {
                    u.onInteractOutside?.(e), Z.onInteractOutside(e)
                }, _ = e => {
                    u.onCloseAutoFocus?.(e), Z.onCloseAutoFocus(e)
                }, B[39] = Z, B[40] = u, B[41] = P, B[42] = _) : (P = B[41], _ = B[42]), B[43] !== a || B[44] !== U || B[45] !== q ? (D = U || q ? (0, n.jsx)(N.a, {
                    className: "relative flex min-h-0 flex-col",
                    fade: q ? "none" : "overlay",
                    peekMenuItems: q,
                    scrollClassName: "min-h-0 overflow-y-auto",
                    fadeClassName: "inset-x-0",
                    children: a
                }) : a, B[43] = a, B[44] = U, B[45] = q, B[46] = D) : D = B[46], B[47] !== c || B[48] !== u || B[49] !== M || B[50] !== ea || B[51] !== E || B[52] !== L || B[53] !== T || B[54] !== z || B[55] !== P || B[56] !== _ || B[57] !== D || B[58] !== Y ? (R = (0, n.jsx)(o.Content, {
                    ref: c,
                    "data-overlay-owner": Y,
                    className: M,
                    align: ea,
                    collisionPadding: 6,
                    onKeyDownCapture: E,
                    sideOffset: L,
                    style: T,
                    ...u,
                    ...z,
                    onInteractOutside: P,
                    onCloseAutoFocus: _,
                    children: D
                }), B[47] = c, B[48] = u, B[49] = M, B[50] = ea, B[51] = E, B[52] = L, B[53] = T, B[54] = z, B[55] = P, B[56] = _, B[57] = D, B[58] = Y, B[59] = R) : R = B[59], R
            },
            Item: H,
            ItemSlot: o.Item,
            CheckboxItem: U,
            RadioGroup: o.RadioGroup,
            RadioItem: function(e) {
                let t, a, l, s, d, c, u, m, f, h, g, x, b, v, y = (0, r.c)(35);
                y[0] !== e ? ({
                    asChild: a,
                    children: l,
                    className: s,
                    disabled: d,
                    href: c,
                    icon: u,
                    SubText: t,
                    variant: f,
                    ...m
                } = e, y[0] = e, y[1] = t, y[2] = a, y[3] = l, y[4] = s, y[5] = d, y[6] = c, y[7] = u, y[8] = m, y[9] = f) : (t = y[1], a = y[2], l = y[3], s = y[4], d = y[5], c = y[6], u = y[7], m = y[8], f = y[9]);
                let w = void 0 === f ? "default" : f,
                    k = "icon" === w || "swatch" === w;
                y[10] !== t || y[11] !== l || y[12] !== u || y[13] !== k || y[14] !== w ? (h = k ? l : (0, n.jsxs)("div", {
                    className: "chatgpt" === w ? "flex items-center gap-1.5" : B.content,
                    children: [u, (0, n.jsxs)("div", {
                        className: (0, i.b)("flex min-w-0 flex-1 flex-col", "default" === w && "gap-1"),
                        children: [(0, n.jsx)("span", {
                            className: (0, i.b)("whitespace-normal", "default" === w && "font-medium"),
                            children: l
                        }), null != t && "descriptive" !== w ? (0, n.jsx)("span", {
                            className: (0, i.b)("text-xs whitespace-normal", "chatgpt" === w ? "leading-4 text-secondary" : "leading-dense text-tertiary"),
                            children: t
                        }) : null]
                    }), (0, n.jsx)("span", {
                        className: "chatgpt" === w ? "size-4 shrink-0" : "icon-sm shrink-0",
                        children: (0, n.jsx)(o.ItemIndicator, {
                            children: "chatgpt" === w ? (0, n.jsx)(j.Tb, {}) : (0, n.jsx)(p.a, {
                                className: "icon-sm"
                            })
                        })
                    })]
                }), y[10] = t, y[11] = l, y[12] = u, y[13] = k, y[14] = w, y[15] = h) : h = y[15];
                let C = h;
                y[16] !== t || y[17] !== C || y[18] !== w ? (g = "descriptive" === w ? (0, n.jsxs)("div", {
                    className: "flex w-full min-w-0 flex-col gap-1",
                    children: [C, null != t && (0, n.jsx)("span", {
                        className: "text-xs leading-dense whitespace-normal text-tertiary",
                        children: t
                    })]
                }) : C, y[16] = t, y[17] = C, y[18] = w, y[19] = g) : g = y[19];
                let N = g;
                y[20] !== s || y[21] !== d || y[22] !== k || y[23] !== w ? (x = (0, i.b)(k ? ["no-drag flex size-9 items-center justify-center rounded-full p-0 text-default outline-hidden focus-visible:ring-2 focus-visible:ring-ring", d ? "cursor-default opacity-50" : "cursor-interaction", "icon" === w && "data-highlighted:bg-primary-ghost-hover data-[state=checked]:bg-primary-ghost-hover data-[state=checked]:ring-1 data-[state=checked]:ring-border"] : ["no-drag", "chatgpt" === w ? "mx-1.5 rounded-lg px-2.5 py-2 text-sm leading-5 outline-none" : [B.itemBase, "rounded-xl"], "text-default", d && "cursor-default opacity-50", !d && ("chatgpt" === w ? "cursor-interaction data-[highlighted]:bg-primary-ghost-hover" : B.itemInteractive)], s), y[20] = s, y[21] = d, y[22] = k, y[23] = w, y[24] = x) : x = y[24];
                let S = null != c || a;
                return y[25] !== d || y[26] !== c || y[27] !== N ? (b = null == c ? N : (0, n.jsx)("a", {
                    href: c,
                    onAuxClick: d ? V : void 0,
                    onClick: d ? $ : void 0,
                    children: N
                }), y[25] = d, y[26] = c, y[27] = N, y[28] = b) : b = y[28], y[29] !== d || y[30] !== m || y[31] !== x || y[32] !== S || y[33] !== b ? (v = (0, n.jsx)(o.RadioItem, {
                    className: x,
                    disabled: d,
                    ...m,
                    asChild: S,
                    children: b
                }), y[29] = d, y[30] = m, y[31] = x, y[32] = S, y[33] = b, y[34] = v) : v = y[34], v
            },
            ItemIcon: Z,
            Input: X,
            SearchInput: function(e) {
                let t, a, o, l, s, d, c, u, m, f, p, h, x, b, v, y = (0, r.c)(29);
                y[0] !== e ? ({
                    className: t,
                    inputClassName: a,
                    onKeyDown: o,
                    sticky: s,
                    trailingContent: c,
                    variant: d,
                    ...l
                } = e, y[0] = e, y[1] = t, y[2] = a, y[3] = o, y[4] = l, y[5] = s, y[6] = d, y[7] = c) : (t = y[1], a = y[2], o = y[3], l = y[4], s = y[5], d = y[6], c = y[7]);
                let w = void 0 !== s && s,
                    C = "inset" === (void 0 === d ? "default" : d) && "m-2 !w-auto rounded-lg border border-primary-outline";
                y[8] !== t || y[9] !== C ? (u = (0, i.b)(B.content, "p-[var(--app-menu-item-padding,var(--padding-row-y)_var(--padding-row-x))]", C, t), y[8] = t, y[9] = C, y[10] = u) : u = y[10], y[11] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, n.jsx)(k.a, {
                    layout: "menu",
                    children: (0, n.jsx)(M.a, {
                        className: "text-tertiary",
                        icon16: j.Ke,
                        legacyIcon: g.a
                    })
                }), y[11] = m) : m = y[11], y[12] !== a ? (f = (0, i.b)("!w-auto flex-1 appearance-none !rounded-none !border-none bg-transparent !px-0 !py-0 text-default placeholder:text-tertiary", a), y[12] = a, y[13] = f) : f = y[13], y[14] !== o ? (p = e => {
                    o?.(e), !e.defaultPrevented && ("ArrowDown" === e.key || "ArrowUp" === e.key) && Y(e.currentTarget, "ArrowDown" === e.key ? "next" : "previous") && e.preventDefault()
                }, y[14] = o, y[15] = p) : p = y[15], y[16] !== l || y[17] !== f || y[18] !== p ? (h = (0, n.jsx)(X, {
                    className: f,
                    onKeyDown: p,
                    ...l
                }), y[16] = l, y[17] = f, y[18] = p, y[19] = h) : h = y[19], y[20] !== c ? (x = c ? (0, n.jsx)("div", {
                    className: "shrink-0",
                    children: c
                }) : null, y[20] = c, y[21] = x) : x = y[21], y[22] !== u || y[23] !== h || y[24] !== x ? (b = (0, n.jsxs)("div", {
                    className: u,
                    children: [m, h, x]
                }), y[22] = u, y[23] = h, y[24] = x, y[25] = b) : b = y[25];
                let N = b;
                return y[26] !== N || y[27] !== w ? (v = w ? (0, n.jsx)("div", {
                    className: "sticky top-0 z-10 -mx-1 -mt-1 bg-surface-elevated-secondary p-1 before:pointer-events-none before:absolute before:inset-x-0 before:-top-1 before:h-1 before:bg-surface-elevated-secondary before:content-['']",
                    children: N
                }) : N, y[26] = N, y[27] = w, y[28] = v) : v = y[28], v
            },
            Separator: ee,
            SectionLabel: function(e) {
                let t, a, o = (0, r.c)(5),
                    {
                        children: l,
                        className: s
                    } = e;
                return o[0] !== s ? (t = (0, i.b)(I.a.sectionLabel, s), o[0] = s, o[1] = t) : t = o[1], o[2] !== l || o[3] !== t ? (a = (0, n.jsx)("div", {
                    "data-menu-section-label": !0,
                    className: t,
                    children: l
                }), o[2] = l, o[3] = t, o[4] = a) : a = o[4], a
            },
            Message: function(e) {
                let t, a, o = (0, r.c)(12),
                    {
                        children: l,
                        className: s,
                        tone: d,
                        compact: c,
                        centered: u,
                        role: m,
                        variant: f
                    } = e,
                    p = void 0 === d ? "muted" : d,
                    h = void 0 !== c && c,
                    g = void 0 !== u && u,
                    x = void 0 === f ? "default" : f,
                    b = "inset" === x && "m-1 flex flex-1 flex-col items-center justify-center gap-2 rounded-lg border border-default p-3 text-center text-sm",
                    v = "chatgpt" === x && "mx-1.5 px-2.5 py-2.5 text-xs leading-4";
                return o[0] !== g || o[1] !== s || o[2] !== h || o[3] !== b || o[4] !== v || o[5] !== p || o[6] !== x ? (t = (0, i.b)(b, v, "default" === x && ["px-row-x text-sm", h ? "py-2" : "py-3"], "error" === p && "text-danger", "muted" === p && ("chatgpt" === x ? "text-tertiary" : "text-codex-description"), g && "self-center text-center", s), o[0] = g, o[1] = s, o[2] = h, o[3] = b, o[4] = v, o[5] = p, o[6] = x, o[7] = t) : t = o[7], o[8] !== l || o[9] !== m || o[10] !== t ? (a = (0, n.jsx)("div", {
                    role: m,
                    className: t,
                    children: l
                }), o[8] = l, o[9] = m, o[10] = t, o[11] = a) : a = o[11], a
            },
            Title: function(e) {
                let t, a, o = (0, r.c)(26),
                    {
                        children: l,
                        className: s,
                        wrap: d,
                        trailingCircle: c,
                        description: u,
                        actions: m
                    } = e,
                    f = void 0 !== d && d;
                if (f || null != c || null != u || null != m) {
                    let e, t, a, r, d, p, h, g = null != c && "titleWithTrailingCircle-d8V351";
                    o[0] !== s || o[1] !== g ? (e = (0, i.b)("structuredTitle-bVT8Ix", g, s), o[0] = s, o[1] = g, o[2] = e) : e = o[2];
                    let x = f ? "whitespace-normal" : "truncate",
                        b = null == u ? "text-codex-description" : "text-default";
                    return o[3] !== x || o[4] !== b ? (t = (0, i.b)("titleText-cCLEZv", "min-w-0", x, b), o[3] = x, o[4] = b, o[5] = t) : t = o[5], o[6] !== l || o[7] !== t ? (a = (0, n.jsx)("div", {
                        className: t,
                        children: l
                    }), o[6] = l, o[7] = t, o[8] = a) : a = o[8], o[9] !== c ? (r = null != c && (0, n.jsx)("span", {
                        className: "titleTrailingCircle-sFqXm7",
                        children: c
                    }), o[9] = c, o[10] = r) : r = o[10], o[11] !== u ? (d = null != u && (0, n.jsx)("div", {
                        className: "col-span-full mt-1 text-sm text-codex-description",
                        children: u
                    }), o[11] = u, o[12] = d) : d = o[12], o[13] !== m ? (p = null != m && (0, n.jsx)("div", {
                        className: "col-span-full mt-2",
                        children: m
                    }), o[13] = m, o[14] = p) : p = o[14], o[15] !== p || o[16] !== e || o[17] !== a || o[18] !== r || o[19] !== d ? (h = (0, n.jsxs)("div", {
                        className: e,
                        children: [a, r, d, p]
                    }), o[15] = p, o[16] = e, o[17] = a, o[18] = r, o[19] = d, o[20] = h) : h = o[20], h
                }
                return o[21] !== s ? (t = (0, i.b)("text-codex-description flex min-h-6 items-center truncate px-row-x py-row-y text-sm leading-4", s), o[21] = s, o[22] = t) : t = o[22], o[23] !== l || o[24] !== t ? (a = (0, n.jsx)("div", {
                    className: t,
                    children: l
                }), o[23] = l, o[24] = t, o[25] = a) : a = o[25], a
            },
            SubmenuItem: eo,
            FlyoutSubmenuItem: function(e) {
                let t, a, l, s, p, h, g, x, v, C, N, S, M, E, L, T, I, P = (0, r.c)(69),
                    {
                        ref: F,
                        "aria-current": W,
                        ariaLabel: Q,
                        label: K,
                        allowWrap: U,
                        children: q,
                        LeftIcon: G,
                        leftIcon: $,
                        leftIconAsset: V,
                        leftIconClassName: Z,
                        className: X,
                        disabled: Y,
                        align: J,
                        alignToParentBottom: ee,
                        contentClassName: et,
                        contentWidth: ea,
                        contentSurface: en,
                        onSelect: er,
                        triggerContent: eo,
                        rightIcon: ei,
                        tooltipText: el,
                        tooltipDisabled: es,
                        tooltipTextClassName: ed,
                        tooltipSide: ec,
                        tooltipSideOffset: eu,
                        tooltipAlign: em,
                        tooltipOpenWhen: ef,
                        open: ep,
                        onOpenChange: eh,
                        onEscapeKeyDown: eg,
                        variant: ex
                    } = e,
                    eb = void 0 !== U && U,
                    ev = void 0 !== Y && Y,
                    ey = void 0 === en ? "menu" : en,
                    ew = void 0 === ex ? "default" : ex,
                    ej = d.useContext(_),
                    ek = (0, m.c)(),
                    eC = (0, f.a)(u.a ?? "not all"),
                    eN = (0, d.useContext)(A.a),
                    [eS, eA] = (0, d.useState)(null),
                    [eM, eE] = (0, d.useState)(!1),
                    eL = !ev && (ep ?? eM),
                    eT = (0, d.useRef)(!1),
                    ez = (0, d.useRef)(null),
                    eI = (0, d.useRef)(null);
                P[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => {
                    null != ez.current && (clearTimeout(ez.current), ez.current = null), eI.current?.abort(), eI.current = null
                }, P[0] = t) : t = P[0], P[1] !== ev || P[2] !== eL ? (a = [ev, eL], P[1] = ev, P[2] = eL, P[3] = a) : a = P[3], (0, d.useEffect)(t, a), P[4] !== G || P[5] !== $ || P[6] !== V || P[7] !== Z ? (l = $ ?? (V ? (0, n.jsx)(w.a, {
                    className: (0, i.b)(Z, B.icon),
                    "aria-hidden": !1,
                    asset: V
                }) : null) ?? (G ? (0, n.jsx)(G, {
                    className: (0, i.b)(Z ?? "icon-xs", B.icon)
                }) : null), P[4] = G, P[5] = $, P[6] = V, P[7] = Z, P[8] = l) : l = P[8];
                let eP = l,
                    e_ = (0, y.d)(ea),
                    eO = (0, i.b)("z-50 flex min-w-[180px] select-none flex-col overflow-y-auto", "bare" === ey ? "m-0 p-0" : ["m-px", (0, y.c)(ey)]);
                P[9] !== ey || P[10] !== ek ? (s = "bare" === ey ? 5 : (0, y.e)(ek), P[9] = ey, P[10] = ek, P[11] = s) : s = P[11];
                let eD = s,
                    [eR, eB] = (0, d.useState)(0),
                    [eF, eH] = (0, d.useState)(eD),
                    eW = (0, d.useRef)(null),
                    [eQ, eK] = (0, d.useState)(null),
                    eU = ee && null == eQ,
                    eq = eQ ?? (eU ? -4 : eR),
                    eG = eU || "unstyled" === ew ? eD : eF;
                P[12] === Symbol.for("react.memo_cache_sentinel") ? (p = function() {
                    null != ez.current && (clearTimeout(ez.current), ez.current = null), eI.current?.abort(), eI.current = null
                }, P[12] = p) : p = P[12];
                let e$ = p;
                P[13] !== ev || P[14] !== eh ? (h = function(e) {
                    if (!e || !ev && null == ez.current) {
                        if (e$(), e && eT.current) {
                            eT.current = !1;
                            return
                        }
                        eT.current = !e, eE(e), eh?.(e)
                    }
                }, P[13] = ev, P[14] = eh, P[15] = h) : h = P[15];
                let eV = h;
                P[16] !== ee || P[17] !== eC || P[18] !== eD || P[19] !== ek ? (g = function(e) {
                    if (null != e) {
                        let t = getComputedStyle(e);
                        if (eB(-parseFloat(t.paddingTop) - parseFloat(t.marginTop)), !eC) {
                            let e = eW.current,
                                t = e?.closest('[role="menu"]');
                            if (null != e && null != t) {
                                let a = e.getBoundingClientRect(),
                                    n = t.getBoundingClientRect();
                                ee && eK(a.bottom - n.bottom), eH(eD + Math.max(a.left - n.left, n.right - a.right, 0))
                            }
                            return
                        }
                        let a = e.ownerDocument.getElementById(e.getAttribute("aria-labelledby") ?? ""),
                            n = a?.closest('[role="menu"]');
                        if (!a || !n) return;
                        let r = () => {
                            let e = a.getBoundingClientRect(),
                                r = n.getBoundingClientRect(),
                                o = "top" === n.getAttribute("data-side") || "end" === n.getAttribute("data-compact-menu-align"),
                                i = {
                                    trigger: a,
                                    align: o ? "end" : "start",
                                    sideOffset: "rtl" === t.direction ? e.left - r.right : r.left - e.right,
                                    alignOffset: o ? e.bottom - r.bottom : r.top - e.top,
                                    width: Math.min(r.width, window.innerWidth - 16) / ek
                                };
                            eA(e => e?.trigger === a && e.align === i.align && e.sideOffset === i.sideOffset && e.alignOffset === i.alignOffset && e.width === i.width ? e : i)
                        };
                        r(), n.classList.add(z);
                        let o = new ResizeObserver(r);
                        return o.observe(n), o.observe(a), n.addEventListener("scroll", r), window.addEventListener("resize", r), () => {
                            n.classList.remove(z), o.disconnect(), n.removeEventListener("scroll", r), window.removeEventListener("resize", r)
                        }
                    }
                }, P[16] = ee, P[17] = eC, P[18] = eD, P[19] = ek, P[20] = g) : g = P[20];
                let eZ = g;
                P[21] !== ev || P[22] !== eV || P[23] !== eC || P[24] !== eL ? (x = function(e) {
                    if (eC) return void e.preventDefault();
                    if (ev || eL || "mouse" !== e.pointerType) return;
                    if (null == ez.current) {
                        let t = e.currentTarget,
                            a = new AbortController;
                        eI.current = a, t.ownerDocument.addEventListener("keydown", () => {
                            e$(), eT.current = !0
                        }, {
                            capture: !0,
                            signal: a.signal
                        }), ez.current = setTimeout(() => {
                            e$(), t.focus({
                                preventScroll: !0
                            }), eT.current = !1, eV(!0)
                        }, 200)
                    }
                    let t = ez.current;
                    queueMicrotask(() => {
                        e.defaultPrevented && ez.current === t && (e$(), eT.current = !0)
                    })
                }, P[21] = ev, P[22] = eV, P[23] = eC, P[24] = eL, P[25] = x) : x = P[25];
                let eX = x;
                P[26] !== F ? (v = (0, b.a)(F, eW), P[26] = F, P[27] = v) : v = P[27], P[28] !== X || P[29] !== ev || P[30] !== ew ? (C = (0, i.b)("default" === ew ? [B.itemBase, "flex w-full items-center rounded-xl text-default"] : "no-drag outline-hidden", ev ? "cursor-default opacity-50" : "group cursor-interaction", !ev && "default" === ew && "data-[highlighted]:bg-primary-ghost-hover data-[state=open]:bg-primary-ghost-hover focus-visible:bg-primary-ghost-hover", X), P[28] = X, P[29] = ev, P[30] = ew, P[31] = C) : C = P[31], P[32] !== eC ? (N = e => {
                    e$(), eC && e.preventDefault()
                }, P[32] = eC, P[33] = N) : N = P[33], P[34] === Symbol.for("react.memo_cache_sentinel") ? (S = e => {
                    e$(), eT.current = !0;
                    let t = e.currentTarget.closest('[role="menu"]')?.getAttribute("dir") === "rtl" ? "ArrowLeft" : "ArrowRight";
                    (e.key === t || "Enter" === e.key || " " === e.key) && (" " === e.key && queueMicrotask(() => {
                        e.defaultPrevented || (eT.current = !0)
                    }), eT.current = !1)
                }, P[34] = S) : S = P[34], P[35] !== ev || P[36] !== er ? (M = e => {
                    e$(), eT.current = !1, ev || null == er || (e.preventDefault(), e.stopPropagation(), eT.current = !0, er())
                }, P[35] = ev, P[36] = er, P[37] = M) : M = P[37], P[38] !== eb || P[39] !== K || P[40] !== eP || P[41] !== ei || P[42] !== eo ? (E = eo ?? (0, n.jsxs)("div", {
                    "data-menu-row-content": !0,
                    className: B.content,
                    children: [null != eP ? (0, n.jsx)(k.a, {
                        layout: "menu",
                        children: eP
                    }) : null, (0, n.jsx)("span", {
                        className: (0, i.b)("min-w-0 flex-1", eb ? "whitespace-normal" : "truncate"),
                        children: K
                    }), ei, (0, n.jsx)(j.ec, {
                        className: "text-tertiary",
                        "data-rtl-flip": ""
                    })]
                }), P[38] = eb, P[39] = K, P[40] = eP, P[41] = ei, P[42] = eo, P[43] = E) : E = P[43], P[44] !== W || P[45] !== Q || P[46] !== ev || P[47] !== eX || P[48] !== v || P[49] !== C || P[50] !== N || P[51] !== M || P[52] !== E ? (L = (0, n.jsx)(o.SubTrigger, {
                    ref: v,
                    "aria-current": W,
                    "aria-label": Q,
                    className: C,
                    disabled: ev,
                    onPointerEnter: eX,
                    onPointerMove: eX,
                    onPointerLeave: N,
                    onKeyDown: S,
                    onClick: M,
                    children: E
                }), P[44] = W, P[45] = Q, P[46] = ev, P[47] = eX, P[48] = v, P[49] = C, P[50] = N, P[51] = M, P[52] = E, P[53] = L) : L = P[53], P[54] !== L || P[55] !== em || P[56] !== es || P[57] !== ef || P[58] !== ec || P[59] !== eu || P[60] !== el || P[61] !== ed ? (T = (0, n.jsx)(R, {
                    tooltipText: el,
                    tooltipDisabled: es,
                    tooltipTextClassName: ed,
                    tooltipSide: ec,
                    tooltipSideOffset: eu,
                    tooltipAlign: em,
                    tooltipOpenWhen: ef,
                    children: L
                }), P[54] = L, P[55] = em, P[56] = es, P[57] = ef, P[58] = ec, P[59] = eu, P[60] = el, P[61] = ed, P[62] = T) : T = P[62];
                let eY = null !== ej && (0, n.jsx)(o.Portal, {
                    container: ej,
                    children: (0, n.jsxs)(o.SubContent, {
                        ref: eZ,
                        onEscapeKeyDown: eg,
                        "data-overlay-owner": eN?.id,
                        className: (0, i.b)(eO, e_, eU && !eC && "parentBottomAlignedContent-jcw79M", et),
                        align: eC ? eS?.align ?? "start" : null != eQ ? "end" : void 0 === J ? "start" : J,
                        "data-compact-menu-align": eC ? eS?.align : void 0,
                        collisionPadding: 6,
                        avoidCollisions: eC || !eU,
                        sideOffset: eC && eS ? eS.sideOffset : eG,
                        alignOffset: eC && eS ? eS.alignOffset : eq,
                        style: {
                            ...eU ? D : O,
                            ...eC && eS ? {
                                width: eS.width,
                                minWidth: eS.width,
                                maxWidth: eS.width,
                                maxHeight: `calc((100dvh - 16px) / ${ek})`,
                                margin: 0
                            } : {},
                            zoom: 1 !== ek ? ek : void 0
                        },
                        children: [eC && (0, n.jsx)(H, {
                            leftIcon: (0, n.jsx)(j.bc, {
                                className: "rtl:-scale-x-100"
                            }),
                            onSelect: e => {
                                e.preventDefault(), eV(!1), eS?.trigger.closest('[role="menu"]')?.classList.remove(z), eS?.trigger.focus()
                            },
                            children: (0, n.jsx)(c.a, {
                                id: "dropdown.submenu.back",
                                defaultMessage: "Back",
                                description: "Menu action at the top of a submenu in a narrow window that returns to the parent menu without selecting an action or closing the entire menu"
                            })
                        }), (0, n.jsx)("div", {
                            children: q
                        })]
                    })
                });
                return P[63] !== eV || P[64] !== eL || P[65] !== o.Sub || P[66] !== T || P[67] !== eY ? (I = (0, n.jsxs)(o.Sub, {
                    open: eL,
                    onOpenChange: eV,
                    children: [T, eY]
                }), P[63] = eV, P[64] = eL, P[65] = o.Sub, P[66] = T, P[67] = eY, P[68] = I) : I = P[68], I
            },
            Group: function(e) {
                let t, a = (0, r.c)(2),
                    {
                        children: i
                    } = e;
                return a[0] !== i ? (t = (0, n.jsx)(o.Group, {
                    className: "before:mx-4 before:my-1 before:block before:h-px before:bg-border first:before:hidden empty:hidden [:not(:has(div:not([role=group])))]:hidden [&:nth-child(1_of_:has(div:not([role=group])))]:before:hidden",
                    children: i
                }), a[0] = i, a[1] = t) : t = a[1], t
            },
            Section: function(e) {
                let t, a, o = (0, r.c)(10),
                    {
                        ref: l,
                        children: s,
                        className: d,
                        size: c,
                        onScrollCapture: u
                    } = e,
                    m = null != c && "flex min-h-0 flex-col overflow-y-auto text-sm",
                    f = null != c && "scrollSection-Ck2upw";
                return o[0] !== d || o[1] !== c || o[2] !== m || o[3] !== f ? (t = (0, i.b)(m, f, ("seven-rows" === c || "up-to-seven-rows" === c) && ["sevenRowSection-p3Sa0N", "*:shrink-0"], ("five-rows" === c || "seven-rows" === c) && "fixedSection-mUmBGf", d), o[0] = d, o[1] = c, o[2] = m, o[3] = f, o[4] = t) : t = o[4], o[5] !== s || o[6] !== u || o[7] !== l || o[8] !== t ? (a = (0, n.jsx)("div", {
                    ref: l,
                    className: t,
                    onScrollCapture: u,
                    children: s
                }), o[5] = s, o[6] = u, o[7] = l, o[8] = t, o[9] = a) : a = o[9], a
            }
        }
    }),
    tWa: (function(e, t, a) {
        function n(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "calendar",
                n = new Date(e),
                r = Math.max(1, Math.floor((t.getTime() - n.getTime()) / 6e4));
            if (r < 60) return {
                unit: "minute",
                value: r
            };
            let o = Math.floor(r / 60);
            if (o < 24) return {
                unit: "hour",
                value: o
            };
            let i = new Date(t.getFullYear(), t.getMonth(), t.getDate()),
                l = new Date(n.getFullYear(), n.getMonth(), n.getDate()),
                s = "elapsed" === a ? Math.floor(o / 24) : Math.max(1, Math.round((i.getTime() - l.getTime()) / 864e5));
            return s < 7 ? {
                unit: "day",
                value: s
            } : s < 30 ? {
                unit: "week",
                value: Math.floor(s / 7)
            } : s < 365 ? {
                unit: "month",
                value: Math.floor(s / 30)
            } : {
                unit: "year",
                value: Math.floor(s / 365)
            }
        }
        a.d(t, {
            a: () => n
        })
    }),
    WFT: (function(e, t, a) {
        function n(e, t) {
            null != e && /^(?:Failed to fetch dynamically imported module|error loading dynamically imported module|Importing a module script failed|Unable to preload CSS for |Loading (?:CSS )?chunk .+ failed\.)/i.test(e.message) ? window.location.reload() : t()
        }
        a.d(t, {
            a: () => n
        })
    }),
    UI: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("Ui"),
            i = a("zd"),
            l = a("oy"),
            s = a("HZ"),
            d = a("Zi"),
            c = a("SGX"),
            u = a("WF"),
            m = a("ygO"),
            f = a("WFT");

        function p(e) {
            switch (Object.prototype.toString.call(e)) {
                case "[object Error]":
                case "[object Exception]":
                case "[object DOMException]":
                    return !0;
                default:
                    var t = Error;
                    try {
                        return e instanceof t
                    } catch (e) {
                        return !1
                    }
            }
        }
        let h = {
            componentStack: null,
            error: null,
            eventId: ""
        };

        function g(e) {
            let t, a, o, i = (0, r.c)(8),
                {
                    error: c,
                    resetError: u,
                    stayOnPage: p
                } = e,
                h = void 0 !== p && p,
                g = (0, s.Z)();
            return i[0] !== c || i[1] !== g || i[2] !== u || i[3] !== h ? (t = () => {
                (0, f.a)(c, () => {
                    u(), h || g("/")
                })
            }, i[0] = c, i[1] = g, i[2] = u, i[3] = h, i[4] = t) : t = i[4], i[5] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, n.jsx)(l.a, {
                id: "codex.errorBoundary.goHome",
                defaultMessage: "Try again",
                description: "Button label to retry after an error"
            }), i[5] = a) : a = i[5], i[6] !== t ? (o = (0, n.jsx)(d.a, {
                actions: (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(m.a, {
                        size: "large",
                        onClick: t,
                        children: a
                    }), null]
                })
            }), i[6] = t, i[7] = o) : o = i[7], o
        }
        class x extends i.Component {
            static contextType = void 0;
            state = h;
            connectedResetKey = this.props.resetKey;
            componentDidMount() {
                this.resetForChangedKey()
            }
            componentDidUpdate() {
                this.resetForChangedKey()
            }
            resetForChangedKey() {
                let e = this.connectedResetKey;
                this.connectedResetKey = this.props.resetKey, null != this.state.error && e !== this.props.resetKey && this.resetErrorBoundary()
            }
            componentDidCatch(e, t) {
                let {
                    componentStack: a
                } = t, n = a ?? "", r = p(e) ? e : Error(String(e));
                if (p(e)) {
                    let t, a = Error(e.message);
                    a.name = `React ErrorBoundary ${a.name}`, a.stack = n, t = new WeakMap,
                        function e(a, n) {
                            if (!t.has(a)) {
                                if (a.cause) return t.set(a, !0), e(a.cause, n);
                                a.cause = n
                            }
                        }(e, a)
                }
                let i = (0, c.b)(r, {
                    boundaryName: this.props.name,
                    componentStack: n,
                    diagnostics: this.props.diagnostics
                });
                this.props.onError && this.props.onError(r, n, i);
                try {
                    let t = e instanceof AggregateError ? e.errors : void 0,
                        n = (0, o.a)({
                            error: e,
                            componentStack: a ?? ""
                        });
                    null != t && (n.errorChildren = t.slice(0, 5).map(e => (0, o.a)({
                        error: e instanceof Error || "string" == typeof e ? e : "Non-Error rejection"
                    }))), u.a.error("error boundary", {
                        safe: {
                            name: this.props.name,
                            errorCount: t?.length
                        },
                        sensitive: n
                    })
                } catch {}
                this.setState({
                    error: r,
                    componentStack: a,
                    eventId: i
                })
            }
            resetErrorBoundary = () => {
                let {
                    onReset: e
                } = this.props, {
                    error: t,
                    componentStack: a,
                    eventId: n
                } = this.state;
                e && e(t, a ?? "", n), this.setState(h)
            };
            render() {
                let {
                    fallback: e,
                    children: t
                } = this.props, a = this.state, r = e ?? (e => (0, n.jsx)(g, {
                    error: e.error,
                    resetError: () => e.resetError()
                }));
                if (a.error) {
                    let e;
                    return (e = "function" == typeof r ? r({
                        error: a.error,
                        componentStack: a.componentStack ?? "",
                        eventId: a.eventId,
                        resetError: this.resetErrorBoundary
                    }) : r, (0, i.isValidElement)(e)) ? e : null
                }
                return "function" == typeof t ? t() : t
            }
        }
        a.d(t, {
            a: () => x,
            b: () => g
        })
    }),
    kKb: (function(e, t, a) {
        var n = a("Qo"),
            r = a("zd");

        function o() {
            let e, t = (0, n.c)(1);
            return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = [], t[0] = e) : e = t[0], (0, r.useEffect)(i, e), null
        }

        function i() {}
        a("Ot7"), a.d(t, {
            a: () => o
        })
    }),
    g25: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("zd"),
            i = a("oy"),
            l = a("ygO"),
            s = a("JN"),
            d = a("mU"),
            c = a("ae"),
            u = a("Ot7");

        function m(e) {
            let t, a, m, f, p, h, g, x, b, v, y, w, j, k, C, N, S, A = (0, r.c)(60),
                {
                    clickModifiers: M,
                    disposition: E,
                    downloadFilename: L,
                    href: T,
                    hostId: z,
                    initiator: I,
                    onClose: P,
                    onDownload: _,
                    onOpen: O,
                    openTarget: D,
                    openTargetIntent: R,
                    originHostId: B,
                    presentationIntent: F,
                    showCopyLink: H,
                    signal: W,
                    source: Q,
                    useExternalBrowser: K
                } = e,
                U = void 0 !== H && H,
                q = void 0 === Q ? "manual" : Q;
            if (A[0] !== P || A[1] !== W ? (t = () => W?.aborted ? void P() : (W?.addEventListener("abort", P, {
                    once: !0
                }), () => W?.removeEventListener("abort", P)), a = [W, P], A[0] = P, A[1] = W, A[2] = t, A[3] = a) : (t = A[2], a = A[3]), (0, o.useEffect)(t, a), null != L) {
                let e;
                A[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(i.a, {
                    id: "externalLink.confirmation.downloadFileTitle",
                    defaultMessage: "Download file?",
                    description: "Title of the confirmation dialog before downloading a file supplied by an app widget"
                }), A[4] = e) : e = A[4], m = e
            } else if (null != _) {
                let e;
                A[5] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(i.a, {
                    id: "externalLink.confirmation.downloadTitle",
                    defaultMessage: "Download external link?",
                    description: "Title of the confirmation dialog before downloading a web link under a restricted resource policy"
                }), A[5] = e) : e = A[5], m = e
            } else {
                let e;
                A[6] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(i.a, {
                    id: "externalLink.confirmation.title",
                    defaultMessage: "Open external link?",
                    description: "Title of the confirmation dialog shown before opening an external website under a restricted resource policy."
                }), A[6] = e) : e = A[6], m = e
            }
            A[7] !== L ? (f = null != L ? (0, n.jsx)(i.a, {
                id: "externalLink.confirmation.downloadFileDescription",
                defaultMessage: "This app wants to download a file to your device",
                description: "Description of the confirmation dialog for a file download requested by an app widget"
            }) : (0, n.jsx)(i.a, {
                id: "externalLink.confirmation.description",
                defaultMessage: "Confirm before connecting to this website",
                description: "Description of the confirmation dialog shown before opening an external website under a restricted resource policy."
            }), A[7] = L, A[8] = f) : f = A[8];
            let G = f;
            A[9] !== P ? (p = e => {
                e || P()
            }, A[9] = P, A[10] = p) : p = A[10], A[11] !== M || A[12] !== E || A[13] !== z || A[14] !== T || A[15] !== I || A[16] !== P || A[17] !== _ || A[18] !== O || A[19] !== D || A[20] !== R || A[21] !== B || A[22] !== F || A[23] !== W?.aborted || A[24] !== q || A[25] !== K ? (h = e => {
                e.preventDefault(), P(), W?.aborted || (null != _ ? _() : (null == O || !1 === O()) && (0, u.f)({
                    clickModifiers: M,
                    disposition: E,
                    href: T,
                    hostId: z,
                    initiator: I,
                    openTarget: D,
                    openTargetIntent: R,
                    originHostId: B,
                    presentationIntent: F,
                    source: q,
                    useExternalBrowser: K
                }))
            }, A[11] = M, A[12] = E, A[13] = z, A[14] = T, A[15] = I, A[16] = P, A[17] = _, A[18] = O, A[19] = D, A[20] = R, A[21] = B, A[22] = F, A[23] = W?.aborted, A[24] = q, A[25] = K, A[26] = h) : h = A[26], A[27] !== m ? (g = (0, n.jsx)(s.e, {
                className: "sr-only",
                children: m
            }), A[27] = m, A[28] = g) : g = A[28], A[29] !== G ? (x = (0, n.jsx)(s.d, {
                className: "sr-only",
                children: G
            }), A[29] = G, A[30] = x) : x = A[30], A[31] !== G || A[32] !== m ? (b = (0, n.jsx)(d.e, {
                children: (0, n.jsx)(d.d, {
                    title: m,
                    subtitle: G
                })
            }), A[31] = G, A[32] = m, A[33] = b) : b = A[33];
            let $ = L ?? T;
            return A[34] !== $ ? (v = (0, n.jsx)(d.e, {
                children: (0, n.jsx)("div", {
                    className: "rounded-md bg-surface-secondary/92 p-3 text-sm break-all text-secondary",
                    children: $
                })
            }), A[34] = $, A[35] = v) : v = A[35], A[36] !== T || A[37] !== P || A[38] !== U || A[39] !== W?.aborted ? (y = U ? (0, n.jsx)(l.a, {
                color: "secondary",
                type: "button",
                onClick: e => {
                    W?.aborted || (0, c.a)(T, e).then(e => {
                        e && P()
                    })
                },
                children: (0, n.jsx)(i.a, {
                    id: "externalLink.confirmation.copy",
                    defaultMessage: "Copy link",
                    description: "Short button label in the external-link confirmation dialog shown when an app widget asks to open an unverified website. Copies the displayed URL to the clipboard and closes the dialog without visiting the website. Other actions are Cancel and Open link."
                })
            }) : null, A[36] = T, A[37] = P, A[38] = U, A[39] = W?.aborted, A[40] = y) : y = A[40], A[41] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, n.jsx)(i.a, {
                id: "externalLink.confirmation.cancel",
                defaultMessage: "Cancel",
                description: "Button that cancels opening an external website under a restricted resource policy."
            }), A[41] = w) : w = A[41], A[42] !== P ? (j = (0, n.jsx)(l.a, {
                color: "secondary",
                onClick: P,
                children: w
            }), A[42] = P, A[43] = j) : j = A[43], A[44] !== _ ? (k = (0, n.jsx)(l.a, {
                type: "submit",
                children: null != _ ? (0, n.jsx)(i.a, {
                    id: "externalLink.confirmation.download",
                    defaultMessage: "Download",
                    description: "Button confirming the download of a web link under a restricted resource policy"
                }) : (0, n.jsx)(i.a, {
                    id: "externalLink.confirmation.open",
                    defaultMessage: "Open link",
                    description: "Button that confirms opening an external website under a restricted resource policy."
                })
            }), A[44] = _, A[45] = k) : k = A[45], A[46] !== y || A[47] !== j || A[48] !== k ? (C = (0, n.jsx)(d.e, {
                children: (0, n.jsxs)(d.c, {
                    children: [y, j, k]
                })
            }), A[46] = y, A[47] = j, A[48] = k, A[49] = C) : C = A[49], A[50] !== b || A[51] !== v || A[52] !== C || A[53] !== h || A[54] !== g || A[55] !== x ? (N = (0, n.jsxs)(d.b, {
                as: "form",
                onSubmit: h,
                children: [g, x, b, v, C]
            }), A[50] = b, A[51] = v, A[52] = C, A[53] = h, A[54] = g, A[55] = x, A[56] = N) : N = A[56], A[57] !== N || A[58] !== p ? (S = (0, n.jsx)(s.b, {
                open: !0,
                onOpenChange: p,
                size: "compact",
                children: N
            }), A[57] = N, A[58] = p, A[59] = S) : S = A[59], S
        }
        a.d(t, {
            ExternalLinkConfirmationDialog: () => m
        })
    }),
    nK: (function(e, t, a) {
        var n = a("Qo"),
            r = a("Xnl"),
            o = a("OW"),
            i = a("g25"),
            l = a("X6V");

        function s(e) {
            let t, a, s = (0, n.c)(5),
                {
                    children: d
                } = e,
                c = (0, r.z)(o.a);
            return s[0] !== c ? (t = e => {
                (0, l.f)(c, i.ExternalLinkConfirmationDialog, e)
            }, s[0] = c, s[1] = t) : t = s[1], s[2] !== d || s[3] !== t ? (a = d(t), s[2] = d, s[3] = t, s[4] = a) : a = s[4], a
        }
        a.d(t, {
            a: () => s
        })
    }),
    Rcr: (function(e, t, a) {
        var n = a("aM"),
            r = a("Qg"),
            o = a("TT");
        a("X5");
        var i = a("bf"),
            l = a("GaA"),
            s = a("ae"),
            d = a("sf4"),
            c = a("Ot7"),
            u = a("k9");
        let m = new Set;

        function f(e) {
            return m.add(e), () => {
                m.delete(e)
            }
        }

        function p(e) {
            return Array.from(m).flatMap(t => t(e))
        }

        function h(e) {
            let {
                href: t
            } = e;
            return (0, u.a)(t), !1
        }

        function g(e) {
            let {
                appLinkItems: t,
                conversationId: a,
                hostId: m,
                href: f,
                isDefaultBrowser: p,
                isBrowserEnabled: h = !0,
                initiator: g,
                onActivate: x,
                presentation: b = "context-menu",
                selectedText: v
            } = e, y = "context-menu" === b, w = (0, u.a)(f), j = function(e) {
                try {
                    let {
                        protocol: t
                    } = new URL(e);
                    return ("http:" === t || "https:" === t) && (0, n.Yh)(e)
                } catch {
                    return !1
                }
            }(w), k = e => {
                (x?.(), null == a || j) ? (0, c.f)({
                    href: w,
                    hostId: m,
                    initiator: g,
                    openTarget: "in-app-browser",
                    disposition: "new-tab",
                    presentationIntent: e
                }) : (0, o.a)({
                    conversationId: a,
                    url: f,
                    source: "manual",
                    initiator: g,
                    newTab: !0,
                    presentationIntent: e
                })
            };
            return [...y ? [{
                id: "open-in-label",
                type: "label",
                message: (0, r.e)({
                    id: "externalLink.contextMenu.openIn",
                    defaultMessage: "Open in",
                    description: "Heading above the destinations in a link context menu"
                })
            }] : [], ...t ?? [], ...t?.length ? [{
                id: "app-link-separator",
                type: "separator"
            }] : [], h ? {
                id: "open-in-new-tab",
                icon: y ? i.Jg : void 0,
                message: y ? (0, r.e)({
                    id: "externalLink.contextMenu.newTab",
                    defaultMessage: "New tab",
                    description: "Destination under Open in to open a link in a new Codex browser tab"
                }) : (0, r.e)({
                    id: "externalLink.contextMenu.openInNewTab",
                    defaultMessage: "Open in new tab",
                    description: "Context menu action to open a link in a new Codex browser tab"
                }),
                onSelect: () => k()
            } : {
                id: "open-link",
                icon: y ? i.Nd : void 0,
                message: y ? (0, r.e)({
                    id: "externalLink.contextMenu.defaultBrowserUnavailable",
                    defaultMessage: "Default browser",
                    description: "Destination under Open in to open a link in the system browser when the in-app browser is unavailable"
                }) : (0, r.e)({
                    id: "externalLink.contextMenu.openLink",
                    defaultMessage: "Open link",
                    description: "Action in a link hover menu to open the link in the system browser when the in-app browser is unavailable"
                }),
                onSelect: () => {
                    x?.(), (0, c.f)({
                        href: w,
                        hostId: m,
                        initiator: g,
                        openTarget: "external-browser"
                    })
                }
            }, ...h && l.appServices?.detachedWindows != null ? [{
                id: "open-in-new-window",
                icon: y ? i.Lh : void 0,
                message: y ? (0, r.e)({
                    id: "externalLink.contextMenu.newWindow",
                    defaultMessage: "New window",
                    description: "Destination under Open in to open a link in a separate Codex browser window"
                }) : (0, r.e)({
                    id: "externalLink.contextMenu.openInNewWindow",
                    defaultMessage: "Open in new window",
                    description: "Context menu action to open a link in a separate Codex browser window"
                }),
                onSelect: () => k("new-window")
            }] : [], ...!h || p ? [] : [{
                id: "open-in-external-browser",
                icon: y ? i.Nd : void 0,
                message: y ? (0, r.e)({
                    id: "externalLink.contextMenu.defaultBrowser",
                    defaultMessage: "Default browser",
                    description: "Context menu action to open an external link in the external browser"
                }) : (0, r.e)({
                    id: "externalLink.contextMenu.openInExternalBrowser",
                    defaultMessage: "Open in external browser",
                    description: "Context menu action to open an external link in the external browser"
                }),
                onSelect: () => {
                    x?.(), (0, c.f)({
                        href: w,
                        hostId: m,
                        initiator: g,
                        openTarget: "external-browser"
                    })
                }
            }], {
                id: "external-link-separator",
                type: "separator"
            }, ...v ? [{
                id: "copy-selection",
                icon: y ? i.nc : void 0,
                message: (0, r.e)({
                    id: "externalLink.contextMenu.copySelection",
                    defaultMessage: "Copy",
                    description: "Link context menu action to copy selected text"
                }),
                onSelect: () => {
                    (0, s.a)(v)
                }
            }] : [], {
                id: "copy-link",
                icon: y ? i.ve : void 0,
                message: (0, r.e)({
                    id: "externalLink.contextMenu.copyLink",
                    defaultMessage: "Copy link",
                    description: "Context menu action to copy an external link"
                }),
                onSelect: () => {
                    l.appServices.clipboard.writeText(w).catch(() => (0, s.a)(w))
                }
            }, ...l.appServices?.downloads != null && /^https?:\/\//i.test(w) ? [{
                id: "save-link-as",
                icon: y ? i.t : void 0,
                message: (0, r.e)({
                    id: "externalLink.contextMenu.saveLinkAs",
                    defaultMessage: "Save link as…",
                    description: "Link menu action that opens a Save As dialog to download the link target"
                }),
                selectAfterClose: !0,
                onSelect: () => {
                    (0, d.a)({
                        conversationId: a,
                        url: w
                    })
                }
            }] : []]
        }
        a.d(t, {
            a: () => h,
            b: () => p,
            c: () => g,
            d: () => f
        })
    }),
    sf4: (function(e, t, a) {
        var n = a("A"),
            r = a("oy"),
            o = a("GaA"),
            i = a("SGs");
        async function l(e) {
            await o.appServices?.downloads?.downloadUrl(e).catch(() => !1) || (0, i.b)().danger((0, n.jsx)(r.a, {
                id: "externalLink.download.failed",
                defaultMessage: "Unable to start download",
                description: "Error shown when downloading the target of a web link could not start"
            }), {
                errorAnalytics: {
                    toastId: "externalLink.download.failed"
                }
            })
        }
        a.d(t, {
            a: () => l
        })
    }),
    tt: (function(e, t, a) {
        a.d(t, {
            a: () => c
        });
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("zd"),
            l = a("Fl6"),
            s = a("bf"),
            d = a("yCM");

        function c(e) {
            let t, a, c, u, m, f = (0, r.c)(17),
                {
                    href: p,
                    className: h,
                    globeSize: g,
                    loadRemote: x
                } = e,
                b = void 0 === g ? 16 : g,
                v = void 0 === x || x,
                y = (0, i.useContext)(l.a);
            f[0] !== p || f[1] !== y?.disableExternalMedia || f[2] !== v ? (t = v && !y?.disableExternalMedia ? function(e) {
                try {
                    let t = new URL(e);
                    if ("http:" !== t.protocol && "https:" !== t.protocol) return null;
                    return `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(t.origin)}&size=32&drop_404_icon=true`
                } catch {
                    return null
                }
            }(p) : null, f[0] = p, f[1] = y?.disableExternalMedia, f[2] = v, f[3] = t) : t = f[3];
            let w = t,
                [j, k] = (0, i.useState)(null),
                C = null != w && j === w;
            return f[4] !== h ? (a = (0, o.b)("Favicon-xZwQNw", "inline-block shrink-0", h), f[4] = h, f[5] = a) : a = f[5], f[6] !== b || f[7] !== C || f[8] !== p ? (c = !C && (/^mailto:/i.test(p) ? (0, n.jsx)("span", {
                className: "absolute inset-0 flex items-center justify-center rounded-full bg-text/15 text-text/55",
                children: (0, n.jsx)(d.a, {
                    "aria-hidden": !0,
                    className: "size-[70%]"
                })
            }) : (0, n.jsx)("span", {
                className: "absolute inset-0 flex items-center justify-center",
                children: 12 === b ? (0, n.jsx)(s.Md, {}) : (0, n.jsx)(s.Nd, {})
            })), f[6] = b, f[7] = C, f[8] = p, f[9] = c) : c = f[9], f[10] !== C || f[11] !== w ? (u = null != w ? (0, n.jsx)("img", {
                alt: "",
                className: (0, o.b)("absolute inset-0 h-full w-full rounded-2xs object-contain", C ? "opacity-100" : "opacity-0"),
                decoding: "async",
                draggable: !1,
                onLoad: () => k(w),
                referrerPolicy: "no-referrer",
                src: w
            }, w) : null, f[10] = C, f[11] = w, f[12] = u) : u = f[12], f[13] !== a || f[14] !== c || f[15] !== u ? (m = (0, n.jsxs)("span", {
                className: a,
                children: [c, u]
            }), f[13] = a, f[14] = c, f[15] = u, f[16] = m) : m = f[16], m
        }
    }),
    Ot7: (function(e, t, a) {
        var n = a("aM"),
            r = (a("mN"), a("TL")),
            o = a("k9");
        let i = new Map,
            l = /^(?:[a-z][a-z0-9+.-]*:\/\/|www\.)/i,
            s = new Set;

        function d(e) {
            let {
                includeProgrammaticOpens: t = !1
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return i.set(e, t), () => {
                i.delete(e)
            }
        }

        function c(e) {
            return s.add(e), () => s.delete(e)
        }

        function u(e) {
            let {
                conversationId: t,
                event: a,
                href: r,
                hostId: o,
                initiator: i,
                openAsWebsite: l,
                openTarget: s,
                originHostId: d,
                presentationIntent: c
            } = e;
            return (0, n.zh)(r), m({
                conversationId: t,
                event: a,
                href: r,
                hostId: o,
                initiator: i,
                openAsWebsite: l,
                openTarget: s,
                originHostId: d,
                presentationIntent: c
            })
        }

        function m(e) {
            return p(e, e.event)
        }

        function f(e) {
            return p(e)
        }

        function p(e, t) {
            let {
                conversationId: a,
                disposition: r,
                externalReturnSource: i,
                href: s,
                hostId: d,
                initiator: c,
                openAsWebsite: u,
                openTarget: m,
                originHostId: f,
                presentationIntent: p,
                source: g,
                useExternalBrowser: y
            } = e;
            if ((0, n.zh)(s) || !(0, o.b)(s) || !l.test(s)) return !1;
            let w = x({
                conversationId: a,
                defaultDisposition: r,
                event: t ?? {
                    ctrlKey: !1,
                    metaKey: !1
                },
                href: s,
                hostId: f ?? d,
                initiator: c,
                isBrowserEnabled: null != p,
                openAsWebsite: u,
                openTarget: m
            });
            if (t?.preventDefault(), !0 !== y && w.onOpen?.() === !0) return !0;
            let j = h({
                openAsWebsite: !0,
                clickModifiers: w.clickModifiers,
                disposition: w.disposition ?? r,
                externalReturnSource: i,
                href: s,
                hostId: d,
                initiator: c,
                openTarget: w.openTarget,
                openTargetIntent: w.openTargetIntent,
                originHostId: f,
                presentationIntent: p,
                source: g,
                useExternalBrowser: w.useExternalBrowser ?? y
            });
            return j && null != t && v({
                clickModifiers: w.clickModifiers,
                disposition: w.disposition ?? r,
                externalReturnSource: i,
                href: s,
                modifiedClick: b(t) || !1,
                openTarget: w.openTarget,
                useExternalBrowser: w.useExternalBrowser ?? y
            }), j
        }

        function h(e) {
            let {
                clickModifiers: t,
                conversationId: a,
                disposition: n,
                externalReturnSource: l,
                href: s,
                hostId: d,
                initiator: c,
                openAsWebsite: u,
                openTarget: m,
                openTargetIntent: f,
                originHostId: p,
                presentationIntent: h,
                source: g = "manual",
                targetChromeTabId: x,
                useExternalBrowser: b
            } = e;
            return !!(0, o.b)(s) && (!!(!0 !== u && null == m && null == f && null == n && null == t && null == h && null == x && !0 !== b && [...i].some(e => {
                let [t, n] = e;
                return n && t({
                    conversationId: a,
                    href: (0, o.a)(s),
                    hostId: d,
                    initiator: c
                })
            })) || (r.c.dispatchMessage("open-in-browser", {
                ...null == t ? {} : {
                    clickModifiers: t
                },
                conversationId: a,
                disposition: n,
                externalReturnSource: l,
                hostId: d,
                initiator: c,
                openTarget: m,
                openTargetIntent: f,
                originHostId: p,
                presentationIntent: h,
                source: g,
                targetChromeTabId: x,
                useExternalBrowser: b,
                url: (0, o.a)(s)
            }), !0))
        }

        function g(e) {}

        function x(e) {
            let t, {
                    conversationId: a,
                    defaultDisposition: r,
                    event: l,
                    href: s,
                    hostId: d,
                    initiator: c,
                    isBrowserEnabled: u,
                    openAsWebsite: m,
                    openTarget: f
                } = e,
                p = (0, n.zh)(s),
                h = p ? void 0 : g(l),
                x = l.currentTarget instanceof Element ? l.currentTarget : null,
                v = l.target instanceof Element ? l.target.closest("a[href]") : null;
            x?.closest('[data-app-shell-focus-area="main"]');
            let y = b(l),
                w, j = r;
            return y && (j = h ?? "new-tab"), {
                onOpen: !0 === m || null != f || null != r || null != l.button && 0 !== l.button || l.altKey || l.ctrlKey || l.metaKey || l.shiftKey ? void 0 : () => [...i.keys()].some(e => e({
                    conversationId: a,
                    href: (0, o.a)(s),
                    initiator: c,
                    hostId: d,
                    title: (v ?? x)?.textContent?.trim()
                })),
                ...null == w ? {} : {
                    clickModifiers: w
                },
                disposition: j,
                openTarget: f,
                openTargetIntent: void 0,
                presentationIntent: t,
                useExternalBrowser: !!p || void 0
            }
        }

        function b(e) {
            return 1 === e.button || e.metaKey || e.ctrlKey
        }

        function v(e) {
            for (let t of s) t(e)
        }
        a.d(t, {
            a: () => g,
            b: () => x,
            c: () => u,
            d: () => f,
            e: () => m,
            f: () => h,
            g: () => v,
            h: () => d,
            i: () => c
        })
    }),
    Rmv: (function(e, t, a) {
        var n = a("Qo"),
            r = a("wtC"),
            o = a("BO"),
            i = a("Xnl");
        a("aM");
        var l = a("zd"),
            s = a("A9"),
            d = a("Axk");
        a("hz");
        var c = a("TL"),
            u = a("yG");
        a("GaA");
        var m = a("OW");
        a("AD"), a("Qz");
        var f = a("Ot7"),
            p = a("k9");

        function h(e) {
            let t, a, o, h, x, b, v, y = (0, n.c)(12),
                w = (0, i.z)(m.a);
            y[0] !== w ? (t = () => (0, d.a)(e => {
                (0, u.a)(w, r.f, e)
            }, {
                logReceived: () => (0, s.a)(w),
                focusOnlyInactivityMs: g
            }), y[0] = w, y[1] = t) : t = y[1];
            let [j] = (0, l.useState)(t);
            return y[2] !== j ? (a = e => {
                let {
                    url: t,
                    openId: a,
                    openedAtMs: n
                } = e;
                j.recordExternalBrowserOpen(t, {
                    openId: a,
                    openedAtMs: n
                })
            }, y[2] = j, y[3] = a) : a = y[3], (0, c.d)("external-browser-open-started", a), y[4] !== j ? (o = e => {
                let {
                    openId: t,
                    succeeded: a
                } = e;
                j.finishExternalBrowserOpen({
                    openId: t,
                    succeeded: a
                })
            }, y[4] = j, y[5] = o) : o = y[5], (0, c.d)("external-browser-open-finished", o), y[6] !== j ? (h = () => (0, f.i)(e => {
                let {
                    externalReturnSource: t,
                    href: a
                } = e;
                "ads" === t && j.recordExternalBrowserOpen((0, p.a)(a))
            }), x = [j], y[6] = j, y[7] = h, y[8] = x) : (h = y[7], x = y[8]), (0, l.useEffect)(h, x), y[9] !== j ? (b = () => j.subscribe(), v = [j], y[9] = j, y[10] = b, y[11] = v) : (b = y[10], v = y[11]), (0, l.useEffect)(b, v), null
        }

        function g() {
            return (0, o.d)() || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 ? void 0 : 18e5
        }
        a.d(t, {
            a: () => h
        })
    }),
    KxM: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("nB3"),
            i = a("Fv"),
            l = a("tt");

        function s(e) {
            let t, a, s = (0, r.c)(9),
                {
                    className: d,
                    globeSize: c,
                    href: u,
                    loadRemote: m
                } = e,
                f = void 0 === m || m,
                p = (0, o.h)(u)?.appId;
            return s[0] !== d || s[1] !== c || s[2] !== u || s[3] !== f ? (t = (0, n.jsx)(l.a, {
                className: d,
                globeSize: c,
                href: u,
                loadRemote: f
            }), s[0] = d, s[1] = c, s[2] = u, s[3] = f, s[4] = t) : t = s[4], s[5] !== d || s[6] !== p || s[7] !== t ? (a = (0, n.jsx)(i.a, {
                alt: "",
                className: d,
                knownAppId: p,
                fallback: t
            }), s[5] = d, s[6] = p, s[7] = t, s[8] = a) : a = s[8], a
        }
        a.d(t, {
            a: () => s
        })
    }),
    aQv: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("Hs"),
            i = a("xhu"),
            l = a("D3");

        function s(e) {
            let t, a, s = (0, r.c)(9),
                {
                    className: d,
                    ExternalIcon: c,
                    href: u,
                    isBrowserEnabled: m,
                    openTarget: f,
                    useExternalBrowser: p
                } = e,
                h = void 0 === c ? i.a : c;
            s[0] !== u || s[1] !== m || s[2] !== f || s[3] !== p ? (t = {
                href: u,
                isBrowserEnabled: m,
                openTarget: f,
                useExternalBrowser: p
            }, s[0] = u, s[1] = m, s[2] = f, s[3] = p, s[4] = t) : t = s[4];
            let g = (0, l.a)(t);
            return s[5] !== h || s[6] !== d || s[7] !== g ? (a = "in-app-browser" === g ? (0, n.jsx)(o.a, {
                "aria-hidden": !0,
                className: d
            }) : (0, n.jsx)(h, {
                "aria-hidden": !0,
                className: d
            }), s[5] = h, s[6] = d, s[7] = g, s[8] = a) : a = s[8], a
        }
        a.d(t, {
            a: () => s
        })
    }),
    k9: (function(e, t, a) {
        var n = a("I1");
        let r = /^(?:[a-z][a-z0-9+.-]*:|www\.|\/\/)/i;

        function o(e) {
            return r.test(e)
        }

        function i(e) {
            let t = e;
            return e.startsWith("//") ? t = `https:${e}` : /^www\./i.test(e) && (t = `https://${e}`), (0, n.b)(t) ?? t
        }
        a.d(t, {
            a: () => i,
            b: () => o
        })
    }),
    PA: (function(e, t, a) {
        a.d(t, {
            a: () => T,
            b: () => _
        });
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("Xnl"),
            l = a("aM"),
            s = a("hz"),
            d = a("cck"),
            c = a("GaA"),
            u = a("OW"),
            m = a("AD"),
            f = a("rm"),
            p = a("nK"),
            h = a("Rcr"),
            g = a("sf4"),
            x = a("zd"),
            b = a("Wf"),
            v = a("oy"),
            y = a("HgL"),
            w = a("Ot7"),
            j = a("aQv"),
            k = a("jqm"),
            C = a("bf"),
            N = a("Cq");

        function S(e) {
            let t, a, o, i, l, s, d, u, m, p, g, S, L, T, z, I, P, _, O, D, R, B, F, H, W, Q = (0, r.c)(63);
            Q[0] !== e ? ({
                children: t,
                conversationId: o,
                hostId: i,
                href: l,
                initiator: s,
                isBrowserEnabled: d,
                onActivate: u,
                openTarget: p,
                open: a,
                onOpenChange: m,
                ref: g,
                tooltipDelayDuration: S,
                ...L
            } = e, Q[0] = e, Q[1] = t, Q[2] = a, Q[3] = o, Q[4] = i, Q[5] = l, Q[6] = s, Q[7] = d, Q[8] = u, Q[9] = m, Q[10] = p, Q[11] = g, Q[12] = S, Q[13] = L) : (t = Q[1], a = Q[2], o = Q[3], i = Q[4], l = Q[5], s = Q[6], d = Q[7], u = Q[8], m = Q[9], p = Q[10], g = Q[11], S = Q[12], L = Q[13]);
            let K = (0, b.a)(),
                U = (0, x.useRef)(null),
                q = c.appServices?.browserPreferences?.isDefaultBrowser === !0,
                [G, $] = (0, x.useState)(!1),
                [V, Z] = (0, x.useState)(!1);
            if (Q[14] !== o || Q[15] !== i || Q[16] !== l || Q[17] !== s || Q[18] !== d || Q[19] !== u) {
                let e = (0, h.c)({
                    conversationId: o,
                    hostId: i,
                    href: l,
                    initiator: s,
                    isBrowserEnabled: d,
                    isDefaultBrowser: q,
                    onActivate: u,
                    presentation: "hover-menu"
                });
                T = e.find(E), z = e.filter(M), Q[14] = o, Q[15] = i, Q[16] = l, Q[17] = s, Q[18] = d, Q[19] = u, Q[20] = T, Q[21] = z
            } else T = Q[20], z = Q[21];
            let X = z;
            Q[22] !== m ? (I = e => {
                $(e), m?.(e)
            }, Q[22] = m, Q[23] = I) : I = Q[23];
            let Y = I;
            Q[24] !== g ? (P = (0, y.a)(g, U), Q[24] = g, Q[25] = P) : P = Q[25];
            let J = !V,
                ee = !V,
                et = V || (a ?? G);
            return Q[26] !== Y || Q[27] !== i || Q[28] !== l || Q[29] !== s || Q[30] !== d || Q[31] !== u || Q[32] !== p ? (_ = e => {
                e.stopPropagation(), u?.(), (0, w.e)({
                    event: e,
                    href: l,
                    hostId: i,
                    initiator: s,
                    openAsWebsite: !0,
                    openTarget: d ? p : "external-browser"
                }), Y(!1)
            }, Q[26] = Y, Q[27] = i, Q[28] = l, Q[29] = s, Q[30] = d, Q[31] = u, Q[32] = p, Q[33] = _) : _ = Q[33], Q[34] !== l || Q[35] !== d || Q[36] !== p ? (O = (0, n.jsx)(j.a, {
                className: "icon-2xs",
                href: l,
                isBrowserEnabled: d,
                openTarget: p
            }), Q[34] = l, Q[35] = d, Q[36] = p, Q[37] = O) : O = Q[37], Q[38] === Symbol.for("react.memo_cache_sentinel") ? (D = (0, n.jsx)(v.a, {
                id: "externalLink.hoverActions.openLink",
                defaultMessage: "Open link",
                description: "Button in a link hover toolbar to open the original link in the preferred browser"
            }), Q[38] = D) : D = Q[38], Q[39] !== _ || Q[40] !== O ? (R = (0, n.jsxs)(k.b, {
                onClick: _,
                children: [O, D]
            }), Q[39] = _, Q[40] = O, Q[41] = R) : R = Q[41], Q[42] !== T || Q[43] !== Y ? (B = T?.message != null ? (0, n.jsxs)(k.b, {
                onClick: e => {
                    e.stopPropagation(), T.onSelect?.(), Y(!1)
                },
                children: [(0, n.jsx)(C.ve, {}), (0, n.jsx)(v.a, {
                    ...T.message
                })]
            }) : null, Q[42] = T, Q[43] = Y, Q[44] = B) : B = Q[44], Q[45] !== Y || Q[46] !== K || Q[47] !== X ? (F = X.length > 0 ? (0, n.jsx)(f.a, {
                items: X,
                trigger: "click",
                onOpenChange: e => {
                    e && Z(!0)
                },
                onCloseAutoFocus: e => {
                    e.preventDefault(), U.current?.focus({
                        preventScroll: !0
                    }), Z(!1), Y(!1)
                },
                children: (0, n.jsx)(k.b, {
                    "aria-label": K.formatMessage({
                        id: "externalLink.hoverActions.moreActions",
                        defaultMessage: "More link actions",
                        description: "Accessible label for the link toolbar menu with browser choices and download actions"
                    }),
                    onClick: A,
                    children: (0, n.jsx)(C.Xc, {})
                })
            }) : null, Q[45] = Y, Q[46] = K, Q[47] = X, Q[48] = F) : F = Q[48], Q[49] !== R || Q[50] !== B || Q[51] !== F ? (H = (0, n.jsxs)(k.a, {
                preserveEditorFocus: !1,
                children: [R, B, F]
            }), Q[49] = R, Q[50] = B, Q[51] = F, Q[52] = H) : H = Q[52], Q[53] !== t || Q[54] !== Y || Q[55] !== H || Q[56] !== P || Q[57] !== J || Q[58] !== ee || Q[59] !== et || Q[60] !== S || Q[61] !== L ? (W = (0, n.jsx)(N.a, {
                ...L,
                ref: P,
                interactive: !0,
                keyboardNavigation: J,
                closeOnPointerLeave: ee,
                open: et,
                onOpenChange: Y,
                delayDuration: S,
                variant: "unstyled",
                tooltipContent: H,
                children: t
            }), Q[53] = t, Q[54] = Y, Q[55] = H, Q[56] = P, Q[57] = J, Q[58] = ee, Q[59] = et, Q[60] = S, Q[61] = L, Q[62] = W) : W = Q[62], W
        }

        function A(e) {
            return e.stopPropagation()
        }

        function M(e) {
            return "copy-link" !== e.id && "external-link-separator" !== e.id && "open-link" !== e.id
        }

        function E(e) {
            return "copy-link" === e.id
        }
        var L = a("k9");

        function T(e) {
            let t, a = (0, r.c)(5);
            if (null != e.isBrowserEnabled) {
                let t, r = e.conversationId ?? null;
                return a[0] !== e || a[1] !== r ? (t = (0, n.jsx)(I, {
                    ...e,
                    conversationId: r,
                    isBrowserEnabled: e.isBrowserEnabled
                }), a[0] = e, a[1] = r, a[2] = t) : t = a[2], t
            }
            return a[3] !== e ? (t = (0, n.jsx)(z, {
                ...e
            }), a[3] = e, a[4] = t) : t = a[4], t
        }

        function z(e) {
            let t, a, o = (0, r.c)(5);
            o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                name: "browser.in-app"
            }, o[0] = t) : t = o[0];
            let l = (0, i.x)(s.a, t).isCapable,
                d = e.conversationId ?? null;
            return o[1] !== l || o[2] !== e || o[3] !== d ? (a = (0, n.jsx)(I, {
                ...e,
                conversationId: d,
                isBrowserEnabled: l
            }), o[1] = l, o[2] = e, o[3] = d, o[4] = a) : a = o[4], a
        }

        function I(e) {
            let t, a = (0, r.c)(6),
                o = (0, i.z)(u.a);
            if (!0 === e.requiresConfirmation) {
                let t;
                return a[0] !== e || a[1] !== o ? (t = (0, n.jsx)(p.a, {
                    children: t => P(o, e, t)
                }), a[0] = e, a[1] = o, a[2] = t) : t = a[2], t
            }
            return a[3] !== e || a[4] !== o ? (t = P(o, e), a[3] = e, a[4] = o, a[5] = t) : t = a[5], t
        }

        function P(e, t, a) {
            let {
                appearance: r = "default",
                className: i,
                children: s,
                conversationId: u,
                contextMenuInitiator: f,
                href: p,
                initiator: x,
                isBrowserEnabled: b,
                onActivate: v,
                openAsWebsite: y,
                openTarget: j,
                onUnmodifiedClick: k,
                originHostId: C,
                requiresConfirmation: A = !1,
                showCopyLinkInConfirmation: M = !1,
                showHoverActions: E = !1,
                tooltipContent: T,
                tooltipDelayDuration: z,
                underline: I = "secondary" === r ? "always" : void 0,
                ...P
            } = t, O = (0, L.a)(p), D = t => {
                let n = (0, w.b)({
                        conversationId: A ? null : u,
                        defaultDisposition: void 0,
                        event: t,
                        href: p,
                        hostId: C,
                        initiator: x,
                        isBrowserEnabled: b,
                        openAsWebsite: y,
                        openTarget: j
                    }),
                    r = (0, d.a)(t) && /^https?:\/\//i.test(O) && ("alt" !== n.clickModifiers || "alt" !== (0, m.b)(e.get, l.ef.externalBrowserLinkShortcut)),
                    o = r && c.appServices?.downloads != null ? () => {
                        (0, g.a)({
                            conversationId: u,
                            url: O
                        })
                    } : void 0;
                if (A && (0, L.b)(p)) {
                    t.preventDefault(), a?.({
                        ...n,
                        href: (0, L.a)(p),
                        initiator: x,
                        onDownload: o,
                        onOpen: () => (v?.(), n.onOpen?.() ?? !1),
                        originHostId: C,
                        showCopyLink: M
                    });
                    return
                }
                if (r) {
                    null != o && (t.preventDefault(), o());
                    return
                }
                v?.(), (0, w.c)({
                    conversationId: u,
                    event: t,
                    href: p,
                    initiator: x,
                    openAsWebsite: y,
                    openTarget: n.openTarget,
                    originHostId: C,
                    presentationIntent: n.presentationIntent
                })
            }, R = (0, n.jsx)("a", {
                ...P,
                className: (0, o.b)(i, "button" === r && "button-link", "primary" === r && "text-default!", "secondary" === r && "text-secondary!", "inherit" === r && "text-inherit!", ("inherit" === r || "primary" === r) && "cursor-interaction rounded-xs underline-offset-4 hover:text-default! focus-visible:text-default! focus-visible:outline-2 focus-visible:-outline-offset-2", "source" === r && "inline-flex h-6 max-w-40 cursor-interaction items-center gap-2 rounded-full bg-secondary-soft py-1 ps-1 pe-2 text-xs text-secondary! no-underline! select-none hover:bg-primary-ghost-hover hover:no-underline! focus-visible:outline-2 focus-visible:outline-offset-2", "always" === I && "underline!", "hover" === I && "no-underline hover:underline", "none" === I && "no-underline! hover:no-underline!"),
                href: O,
                rel: "noopener noreferrer",
                target: "_blank",
                onAuxClick: e => {
                    P.onAuxClick?.(e), e.defaultPrevented || 1 !== e.button || D(e)
                },
                onClick: e => {
                    P.onClick?.(e), e.defaultPrevented || A || 0 !== e.button || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || k?.(e), e.defaultPrevented || D(e)
                },
                onContextMenu: e => {
                    A && (0, L.b)(p) ? e.preventDefault() : P.onContextMenu?.(e)
                },
                onDragStart: e => {
                    if (P.onDragStart?.(e), e.defaultPrevented) return;
                    if (A) return void e.preventDefault();
                    let t = window.electronBridge?.startLinkDrag;
                    if (null == t) return;
                    let a = document.createElement("a");
                    a.href = (0, L.a)(p), ("http:" === a.protocol || "https:" === a.protocol) && (a.textContent = e.currentTarget.textContent?.trim() || a.href, e.preventDefault(), t({
                        url: a.href,
                        title: a.textContent,
                        html: a.outerHTML
                    }))
                },
                children: s
            }), B = R;
            return E && !A && /^https?:\/\//i.test(O) ? B = (0, n.jsx)(S, {
                conversationId: u,
                hostId: C,
                href: p,
                initiator: f ?? x,
                isBrowserEnabled: b,
                onActivate: v,
                openTarget: j,
                tooltipDelayDuration: z,
                children: R
            }) : null != T && (B = (0, n.jsx)(N.a, {
                delayDuration: z,
                tooltipContent: T,
                children: R
            })), !(0, h.a)({
                href: p
            }) || A ? B : (0, n.jsx)(_, {
                conversationId: u,
                hostId: C,
                href: p,
                initiator: f ?? x,
                isBrowserEnabled: b,
                onActivate: v,
                children: B
            })
        }

        function _(e) {
            let t, a, o = (0, r.c)(10),
                {
                    children: i,
                    conversationId: l,
                    hostId: s,
                    href: d,
                    initiator: u,
                    isBrowserEnabled: m,
                    onActivate: p
                } = e,
                g = c.appServices?.browserPreferences?.isDefaultBrowser === !0;
            return o[0] !== l || o[1] !== s || o[2] !== d || o[3] !== u || o[4] !== m || o[5] !== p ? (t = () => (0, h.c)({
                appLinkItems: (0, h.b)({
                    conversationId: l,
                    hostId: s,
                    href: d,
                    onActivate: p
                }),
                conversationId: l,
                hostId: s,
                href: d,
                isDefaultBrowser: g,
                isBrowserEnabled: m,
                initiator: u,
                onActivate: p,
                selectedText: window.getSelection()?.toString()
            }), o[0] = l, o[1] = s, o[2] = d, o[3] = u, o[4] = m, o[5] = p, o[6] = t) : t = o[6], o[7] !== i || o[8] !== t ? (a = (0, n.jsx)(f.a, {
                getItems: t,
                children: i
            }), o[7] = i, o[8] = t, o[9] = a) : a = o[9], a
        }
        a("fv")
    }),
    jqm: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("ygO"),
            l = a("HOL"),
            s = a("zLI"),
            d = a("adc");

        function c(e) {
            let t, a, i, l = (0, r.c)(8),
                {
                    children: s,
                    preserveEditorFocus: d,
                    variant: c
                } = e,
                u = void 0 === d || d,
                m = "formatting" === (void 0 === c ? "segmented" : c) ? "min-w-0 flex-wrap items-center rounded-xl bg-surface-elevated-secondary p-1 shadow-xl-stronger ring-[0.5px] ring-border" : "rounded-lg border border-border/70 bg-surface-elevated-secondary shadow-lg";
            return l[0] !== m ? (t = (0, o.b)("pointer-events-auto flex w-fit max-w-full overflow-hidden", m), l[0] = m, l[1] = t) : t = l[1], l[2] !== u ? (a = e => {
                u && e.target instanceof Node && e.currentTarget.contains(e.target) && e.preventDefault()
            }, l[2] = u, l[3] = a) : a = l[3], l[4] !== s || l[5] !== t || l[6] !== a ? (i = (0, n.jsx)("div", {
                className: t,
                role: "presentation",
                onMouseDown: a,
                children: s
            }), l[4] = s, l[5] = t, l[6] = a, l[7] = i) : i = l[7], i
        }

        function u(e) {
            let t, a, o, u, m = (0, r.c)(11),
                {
                    children: f,
                    disabled: p,
                    inputProps: h,
                    onSubmit: g,
                    submitLabel: x
                } = e;
            return m[0] !== h ? (t = (0, n.jsx)(s.a, {
                ...h,
                variant: "compact"
            }), m[0] = h, m[1] = t) : t = m[1], m[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, n.jsx)(l.a, {
                asset: d.a
            }), m[2] = a) : a = m[2], m[3] !== p || m[4] !== x ? (o = (0, n.jsx)(i.a, {
                "aria-label": x,
                color: "composerPrimary",
                size: "iconCircleSm",
                type: "submit",
                disabled: p,
                children: a
            }), m[3] = p, m[4] = x, m[5] = o) : o = m[5], m[6] !== f || m[7] !== g || m[8] !== t || m[9] !== o ? (u = (0, n.jsx)(c, {
                variant: "formatting",
                preserveEditorFocus: !1,
                children: (0, n.jsxs)("form", {
                    className: "flex h-7 w-75 max-w-full min-w-0 items-center gap-2 ps-2.5 pe-1.5",
                    onSubmit: g,
                    children: [t, o, f]
                })
            }), m[6] = f, m[7] = g, m[8] = t, m[9] = o, m[10] = u) : u = m[10], u
        }

        function m(e) {
            let t, a, o, l = (0, r.c)(5);
            return l[0] !== e ? (t = (0, n.jsx)(i.a, {
                className: "rounded-none",
                color: "ghostActive",
                size: "composerSm",
                ...e
            }), l[0] = e, l[1] = t) : t = l[1], l[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, n.jsx)("div", {
                "aria-hidden": !0,
                className: "w-px shrink-0 self-stretch bg-border last:hidden"
            }), l[2] = a) : a = l[2], l[3] !== t ? (o = (0, n.jsxs)(n.Fragment, {
                children: [t, a]
            }), l[3] = t, l[4] = o) : o = l[4], o
        }
        a.d(t, {
            a: () => c,
            b: () => m,
            c: () => u
        })
    }),
    rs: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("IP"),
            l = a("zd"),
            s = a("v7"),
            d = a("rP4");

        function c(e) {
            let t, a, i, s, c, u, m, f, p = (0, r.c)(16);
            p[0] !== e ? ({
                asChild: t,
                children: a,
                className: i,
                radius: c,
                unstyled: u,
                variant: m,
                ...s
            } = e, p[0] = e, p[1] = t, p[2] = a, p[3] = i, p[4] = s, p[5] = c, p[6] = u, p[7] = m) : (t = p[1], a = p[2], i = p[3], s = p[4], c = p[5], u = p[6], m = p[7]);
            let h = void 0 !== u && u,
                g = void 0 === m ? "default" : m;
            if (p[8] !== t || p[9] !== a || p[10] !== i || p[11] !== s || p[12] !== c || p[13] !== h || p[14] !== g) {
                let e = (0, o.b)(!h && ("island" === g || "viewer" === g ? ["composer" !== c && "rounded-2xl", "extension:border extension:border-default extension:shadow-md", "viewer" === g ? "bg-background-viewer-control not-browser:backdrop-blur-xl electron:elevation-prominent electron:[--elevation-prominent:var(--elevation-sidebar)]" : "bg-surface-elevated-secondary electron:elevation-prominent"] : [d.a.floatingSurface, ("single-line" === g || "notice" === g) && d.a.singleLineSurface, "canvas" === g && d.a.canvasSurface, "canvas" === g ? "bg-surface-canvas" : "bg-surface-elevated-secondary", "ring-[0.5px] ring-border", "notice" === g ? "shadow-[0_0_2px_0_rgb(0_0_0/5%),0_4px_6px_0_rgb(0_0_0/2%)]" : "shadow-2xl"]), !h && "composer" === c && d.a.composerRadius, i);
                f = t ? (0, l.cloneElement)(a, {
                    className: (0, o.b)(e, a.props.className)
                }) : (0, n.jsx)("div", {
                    className: e,
                    ...s,
                    children: a
                }), p[8] = t, p[9] = a, p[10] = i, p[11] = s, p[12] = c, p[13] = h, p[14] = g, p[15] = f
            } else f = p[15];
            return f
        }

        function u(e) {
            let t, a, i, l, s = (0, r.c)(8);
            return s[0] !== e ? ({
                className: t,
                ...a
            } = e, s[0] = e, s[1] = t, s[2] = a) : (t = s[1], a = s[2]), s[3] !== t ? (i = (0, o.b)(d.a.floatingComposerInset, t), s[3] = t, s[4] = i) : i = s[4], s[5] !== a || s[6] !== i ? (l = (0, n.jsx)("div", {
                className: i,
                ...a
            }), s[5] = a, s[6] = i, s[7] = l) : l = s[7], l
        }

        function m(e) {
            let t, a, l, d, c, u, m = (0, r.c)(18),
                {
                    ref: f,
                    children: p,
                    fadeOpacity: h,
                    portalContainer: g,
                    variant: x
                } = e,
                b = void 0 === h ? 1 : h,
                v = void 0 === x ? "default" : x,
                y = "solid" === v ? "h-12 bg-surface-elevated-secondary" : "h-16";
            m[0] !== y ? (t = (0, o.b)("pointer-events-none sticky top-0 isolate z-10 shrink-0 select-none", y), m[0] = y, m[1] = t) : t = m[1];
            let w = "solid" === v ? "inset-x-0 top-full h-4" : "-inset-x-4 top-0 h-12";
            m[2] !== w ? (a = (0, o.b)("pointer-events-none absolute -z-10 bg-linear-to-b from-surface-elevated-secondary to-transparent", w), m[2] = w, m[3] = a) : a = m[3], m[4] !== b ? (l = {
                opacity: b
            }, m[4] = b, m[5] = l) : l = m[5], m[6] !== a || m[7] !== l ? (d = (0, n.jsx)(i.a.div, {
                className: a,
                style: l,
                "aria-hidden": !0
            }), m[6] = a, m[7] = l, m[8] = d) : d = m[8], m[9] !== p || m[10] !== f || m[11] !== t || m[12] !== d ? (c = (0, n.jsxs)("div", {
                ref: f,
                className: t,
                children: [d, p]
            }), m[9] = p, m[10] = f, m[11] = t, m[12] = d, m[13] = c) : c = m[13];
            let j = c;
            return m[14] !== j || m[15] !== g || m[16] !== v ? (u = null == g ? j : (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)("div", {
                    className: (0, o.b)("shrink-0", "solid" === v ? "h-12" : "h-16"),
                    "aria-hidden": !0
                }), (0, s.createPortal)(j, g)]
            }), m[14] = j, m[15] = g, m[16] = v, m[17] = u) : u = m[17], u
        }
        a.d(t, {
            a: () => u,
            b: () => m,
            c: () => c
        })
    }),
    xs: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("Wf"),
            i = a("oy"),
            l = a("tWa"),
            s = a("KIK");

        function d(e) {
            let t, a = (0, r.c)(10),
                {
                    dateString: d,
                    format: c,
                    dayBasis: m
                } = e,
                f = void 0 === m ? "calendar" : m,
                p = (0, o.a)(),
                h = (0, s.b)();
            if (h.getTime() - new Date(d).getTime() < 6e4) {
                let e;
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(i.a, {
                    id: "wham.formattedRelativeDateTime.justNow",
                    defaultMessage: "just now",
                    description: "Relative timestamp for an event that happened less than a minute ago"
                }), a[0] = e) : e = a[0], e
            }
            if ("relative" === (void 0 === c ? "compact" : c)) {
                let e;
                if (a[1] !== d || a[2] !== f || a[3] !== p || a[4] !== h) {
                    let {
                        unit: t,
                        value: n
                    } = (0, l.a)(d, h, f);
                    e = p.formatRelativeTime(-n, t, {
                        numeric: "always",
                        style: "narrow"
                    }), a[1] = d, a[2] = f, a[3] = p, a[4] = h, a[5] = e
                } else e = a[5];
                return e
            }
            return a[6] !== d || a[7] !== f || a[8] !== h ? (t = (0, n.jsx)(u, {
                dateString: d,
                now: h,
                dayBasis: f
            }), a[6] = d, a[7] = f, a[8] = h, a[9] = t) : t = a[9], t
        }

        function c(e) {
            let t, a = (0, r.c)(3),
                {
                    dateString: o
                } = e,
                i = (0, s.b)();
            return a[0] !== o || a[1] !== i ? (t = (0, n.jsx)(m, {
                dateString: o,
                now: i
            }), a[0] = o, a[1] = i, a[2] = t) : t = a[2], t
        }

        function u(e) {
            let t, a = (0, r.c)(5),
                {
                    dateString: n,
                    now: i,
                    dayBasis: s
                } = e,
                d = (0, o.a)();
            if (a[0] !== n || a[1] !== s || a[2] !== d || a[3] !== i) {
                t = Symbol.for("react.early_return_sentinel");
                e: {
                    let {
                        unit: e,
                        value: a
                    } = (0, l.a)(n, i, s);
                    switch (e) {
                        case "minute":
                            t = d.formatMessage({
                                id: "wham.formattedRelativeDateTime.compactMinutesAgo",
                                defaultMessage: "{value}m",
                                description: "Compact minutes-ago format"
                            }, {
                                value: a
                            });
                            break e;
                        case "hour":
                            t = d.formatMessage({
                                id: "wham.formattedRelativeDateTime.compactHoursAgo",
                                defaultMessage: "{value}h",
                                description: "Compact hours-ago format"
                            }, {
                                value: a
                            });
                            break e;
                        case "day":
                            t = d.formatMessage({
                                id: "wham.formattedRelativeDateTime.compactDaysAgo",
                                defaultMessage: "{value}d",
                                description: "Compact days-ago format"
                            }, {
                                value: a
                            });
                            break e;
                        case "week":
                            t = d.formatMessage({
                                id: "wham.formattedRelativeDateTime.compactWeeksAgo",
                                defaultMessage: "{value}w",
                                description: "Compact weeks-ago format"
                            }, {
                                value: a
                            });
                            break e;
                        case "month":
                            t = d.formatMessage({
                                id: "wham.formattedRelativeDateTime.compactMonthsAgo",
                                defaultMessage: "{value}mo",
                                description: "Compact months-ago format"
                            }, {
                                value: a
                            });
                            break e;
                        case "year":
                            t = d.formatMessage({
                                id: "wham.formattedRelativeDateTime.compactYearsAgo",
                                defaultMessage: "{value}y",
                                description: "Compact years-ago format"
                            }, {
                                value: a
                            });
                            break e
                    }
                }
                a[0] = n, a[1] = s, a[2] = d, a[3] = i, a[4] = t
            } else t = a[4];
            if (t !== Symbol.for("react.early_return_sentinel")) return t
        }

        function m(e) {
            let t, a, n = (0, r.c)(17),
                {
                    dateString: i,
                    now: l
                } = e,
                s = (0, o.a)();
            if (n[0] !== i || n[1] !== l) {
                let e = new Date(i);
                t = Math.floor((l.getTime() - e.getTime()) / 6e4), n[0] = i, n[1] = l, n[2] = t
            } else t = n[2];
            let d = -t;
            if (d <= 0) {
                let e;
                return n[3] !== s ? (e = s.formatRelativeTime(0, "second", {
                    numeric: "auto"
                }), n[3] = s, n[4] = e) : e = n[4], e
            }
            if (d < 60) {
                let e;
                return n[5] !== s || n[6] !== d ? (e = s.formatRelativeTime(d, "minute", {
                    numeric: "always"
                }), n[5] = s, n[6] = d, n[7] = e) : e = n[7], e
            }
            let c = Math.ceil(d / 60);
            if (c < 24) {
                let e;
                return n[8] !== s || n[9] !== c ? (e = s.formatRelativeTime(c, "hour", {
                    numeric: "always"
                }), n[8] = s, n[9] = c, n[10] = e) : e = n[10], e
            }
            let u = Math.ceil(c / 24);
            if (u < 7) {
                let e;
                return n[11] !== s || n[12] !== u ? (e = s.formatRelativeTime(u, "day", {
                    numeric: "always"
                }), n[11] = s, n[12] = u, n[13] = e) : e = n[13], e
            }
            return n[14] !== s || n[15] !== u ? (a = s.formatRelativeTime(Math.ceil(u / 7), "week", {
                numeric: "always"
            }), n[14] = s, n[15] = u, n[16] = a) : a = n[16], a
        }
        a.d(t, {
            a: () => d,
            b: () => c
        })
    }),
    HOL: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("nk"),
            i = a("Ry"),
            l = a("Y6"),
            s = a("ZW");

        function d(e) {
            let t, a, d, c, u, m, f, p, h, g = (0, r.c)(18);
            if (g[0] !== e ? ({
                    asset: a,
                    alignment: t,
                    idPrefix: d,
                    label: c,
                    ...u
                } = e, g[0] = e, g[1] = t, g[2] = a, g[3] = d, g[4] = c, g[5] = u) : (t = g[1], a = g[2], d = g[3], c = g[4], u = g[5]), g[6] !== t || g[7] !== a) {
                let e = (0, s.c)(a);
                "kind" in e || (0, o.r)(e, "icon"), m = l.a, f = e, p = (0, i.c)(e, t), g[6] = t, g[7] = a, g[8] = m, g[9] = f, g[10] = p
            } else m = g[8], f = g[9], p = g[10];
            return g[11] !== m || g[12] !== d || g[13] !== c || g[14] !== u || g[15] !== f || g[16] !== p ? (h = (0, n.jsx)(m, {
                preset: f,
                icon: p,
                svgProps: u,
                idPrefix: d,
                label: c
            }), g[11] = m, g[12] = d, g[13] = c, g[14] = u, g[15] = f, g[16] = p, g[17] = h) : h = g[17], h
        }
        a.d(t, {
            a: () => d
        })
    }),
    nT: (function(e, t, a) {
        var n = a("nk");
        let r = (0, n.a)({
                name: "cursor-rounded-light-16",
                canvas: {
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16"
                },
                paint: {
                    kind: "monochrome"
                },
                optical: {
                    shape: "non-circular"
                },
                capabilities: ["icon"],
                body: '<path fill="none" d="M7.5054 12.44927C7.12667 13.26073 5.95423 13.20367 5.65619 12.3592L2.69589 3.97171C2.41623 3.17931 3.17931 2.41623 3.97171 2.69589L12.3592 5.65619C13.20367 5.95423 13.26073 7.12667 12.44927 7.5054L9.40793 8.92467C9.19507 9.024 9.024 9.19507 8.92467 9.40793L7.5054 12.44927Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />'
            }),
            o = (0, n.a)({
                name: "cursor-rounded-light-20",
                canvas: {
                    width: 20,
                    height: 20,
                    viewBox: "0 0 24 24"
                },
                paint: {
                    kind: "monochrome"
                },
                optical: {
                    shape: "non-circular"
                },
                capabilities: ["icon"],
                body: '<path fill="none" d="M11.2581 18.6739C10.69 19.8911 8.93134 19.8055 8.48429 18.5388L4.04384 5.95756C3.62434 4.76897 4.76897 3.62434 5.95756 4.04384L18.5388 8.48429C19.8055 8.93134 19.8911 10.69 18.6739 11.2581L14.1119 13.387C13.7926 13.536 13.536 13.7926 13.387 14.1119L11.2581 18.6739Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />'
            });
        a.d(t, {}, {
            a: r,
            b: o
        })
    }),
    Y6: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("nk"),
            i = a("zd");

        function l(e) {
            let t, a, l, s, d, c, u, m, f, p, h, g = (0, r.c)(34),
                {
                    preset: x,
                    icon: b,
                    svgProps: v,
                    idPrefix: y,
                    label: w
                } = e;
            g[0] !== v ? ({
                "aria-hidden": t,
                className: s,
                focusable: d,
                role: u,
                style: m,
                "aria-label": a,
                "aria-labelledby": l,
                ...c
            } = v, g[0] = v, g[1] = t, g[2] = a, g[3] = l, g[4] = s, g[5] = d, g[6] = c, g[7] = u, g[8] = m) : (t = g[1], a = g[2], l = g[3], s = g[4], d = g[5], c = g[6], u = g[7], m = g[8]);
            let j = (0, i.useId)(),
                k = a ?? (null == w || "" === w ? void 0 : w),
                C = null != k && "" !== k || null != l && "" !== l;
            g[9] !== b.body || g[10] !== b.href || g[11] !== b.kind || g[12] !== b.transform || g[13] !== y || g[14] !== j || g[15] !== x.name ? (f = "sprite" === b.kind ? {
                children: (0, n.jsx)("use", {
                    href: b.href,
                    fill: "currentColor",
                    transform: b.transform
                })
            } : {
                dangerouslySetInnerHTML: {
                    __html: (0, o.f)(b.body, y ?? `${x.name}-${j}`)
                }
            }, g[9] = b.body, g[10] = b.href, g[11] = b.kind, g[12] = b.transform, g[13] = y, g[14] = j, g[15] = x.name, g[16] = f) : f = g[16];
            let N = f,
                S = t ?? (!C || void 0),
                A = b.supportsWideGamut ? x.name : void 0,
                M = u ?? (C ? "img" : void 0);
            return g[17] !== b.style || g[18] !== m ? (p = {
                ...b.style,
                ...m
            }, g[17] = b.style, g[18] = m, g[19] = p) : p = g[19], g[20] !== k || g[21] !== l || g[22] !== s || g[23] !== N || g[24] !== d || g[25] !== x.canvas.height || g[26] !== x.canvas.viewBox || g[27] !== x.canvas.width || g[28] !== c || g[29] !== S || g[30] !== A || g[31] !== M || g[32] !== p ? (h = (0, n.jsx)("svg", {
                ...c,
                "aria-hidden": S,
                "aria-label": k,
                "aria-labelledby": l,
                className: s,
                "data-icon-p3": A,
                focusable: d,
                height: x.canvas.height,
                role: M,
                style: p,
                viewBox: x.canvas.viewBox,
                width: x.canvas.width,
                xmlns: "http://www.w3.org/2000/svg",
                ...N
            }), g[20] = k, g[21] = l, g[22] = s, g[23] = N, g[24] = d, g[25] = x.canvas.height, g[26] = x.canvas.viewBox, g[27] = x.canvas.width, g[28] = c, g[29] = S, g[30] = A, g[31] = M, g[32] = p, g[33] = h) : h = g[33], h
        }
        a.d(t, {
            a: () => l
        })
    }),
    Ry: (function(e, t, a) {
        a.d(t, {
            a: () => c,
            b: () => m,
            c: () => u
        });
        var n = a("A"),
            r = a("Qo"),
            o = a("nk"),
            i = a("on"),
            l = a("Y6"),
            s = a("ZW"),
            d = "Icon-X4VkKC";

        function c(e, t) {
            let a = (0, s.c)(e),
                c = u(a, t);
            return Object.assign(function(e) {
                let t, o, s = (0, r.c)(6);
                s[0] !== e.className ? (t = (0, i.b)(d, e.className), s[0] = e.className, s[1] = t) : t = s[1];
                let u = e.focusable ?? "false";
                return s[2] !== e || s[3] !== t || s[4] !== u ? (o = (0, n.jsx)(l.a, {
                    preset: a,
                    icon: c,
                    svgProps: {
                        ...e,
                        className: t,
                        focusable: u
                    }
                }), s[2] = e, s[3] = t, s[4] = u, s[5] = o) : o = s[5], o
            }, {
                createElement(e, t) {
                    let n = e.createElementNS("http://www.w3.org/2000/svg", "svg");
                    for (let [e, r] of(n.setAttribute("aria-hidden", "true"), n.setAttribute("class", (0, i.b)(d, t)), n.setAttribute("focusable", "false"), n.setAttribute("height", String(a.canvas.height)), n.setAttribute("viewBox", a.canvas.viewBox), n.setAttribute("width", String(a.canvas.width)), c.supportsWideGamut && n.setAttribute("data-icon-p3", a.name), Object.entries(c.style ?? {}))) null != r && n.style.setProperty(e, String(r));
                    if ("sprite" === c.kind) {
                        let t = e.createElementNS("http://www.w3.org/2000/svg", "use");
                        t.setAttribute("href", c.href), t.setAttribute("fill", "currentColor"), null != c.transform && t.setAttribute("transform", c.transform), n.append(t)
                    } else n.innerHTML = (0, o.f)(c.body, `${a.name}-${crypto.randomUUID()}`);
                    return n
                }
            })
        }

        function u(e, t) {
            if ("kind" in e) {
                let a = e.alignment[t ?? "authored"];
                return {
                    kind: "sprite",
                    href: e.href.startsWith("#") ? `${(0,s.a)()}${e.href}` : e.href,
                    transform: 0 === a.x && 0 === a.y ? void 0 : `translate(${a.x} ${a.y})`,
                    style: {
                        ...e.style,
                        ...a.overflows ? {
                            overflow: "visible"
                        } : {}
                    },
                    supportsWideGamut: !1
                }
            }
            return {
                kind: "inline",
                ...m(e, t)
            }
        }

        function m(e, t) {
            let {
                x: a,
                y: n,
                overflows: r
            } = function(e, t) {
                let a = (0, o.s)(e.canvas);
                if (null == t) return {
                    x: 0,
                    y: 0,
                    overflows: a
                };
                let n = e.canvas.frame ?? {
                        x: 0,
                        y: 0,
                        width: e.canvas.width,
                        height: e.canvas.height
                    },
                    r = {
                        x: n.x + n.width / 2,
                        y: n.y + n.height / 2
                    },
                    i = "composite" === t ? e.optical.anchors?.ink ?? e.optical.center ?? r : e.optical.anchors?.foreground ?? e.optical.anchors?.ink ?? e.optical.center ?? r,
                    l = Number((r.x - i.x).toFixed(6)),
                    s = Number((r.y - i.y).toFixed(6));
                if (0 === l && 0 === s) return {
                    x: l,
                    y: s,
                    overflows: a
                };
                let d = e.canvas.visualBounds;
                return {
                    x: l,
                    y: s,
                    overflows: a || null == d || d.x + l < n.x || d.y + s < n.y || d.x + l + d.width > n.x + n.width || d.y + s + d.height > n.y + n.height
                }
            }(e, t), i = (0, o.u)(e);
            return {
                body: 0 === a && 0 === n ? i : `<g transform="translate(${a} ${n})">${i}</g>`,
                style: {
                    ...(0, o.c)(e),
                    ...r ? {
                        overflow: "visible"
                    } : {}
                },
                supportsWideGamut: "multicolor" === e.paint.kind && e.paint.layers.some(e => ("brand" === e.role || "fixed" === e.role) && null != e.wideGamut)
            }
        }
    }),
    bf: (function(e, t, a) {
        a.d(t, {
            a: () => i3,
            b: () => i5,
            c: () => la,
            d: () => ln,
            e: () => lr,
            f: () => ls,
            g: () => ld,
            h: () => l6,
            i: () => s0,
            j: () => s1,
            k: () => sY,
            l: () => sJ,
            m: () => i6,
            n: () => i7,
            o: () => lJ,
            p: () => lN,
            q: () => lS,
            r: () => lu,
            s: () => lm,
            t: () => lf,
            u: () => lp,
            v: () => sa,
            w: () => sn,
            x: () => sr,
            y: () => so,
            z: () => si,
            A: () => sl,
            B: () => ss,
            C: () => sd,
            D: () => s5,
            E: () => s4,
            F: () => fZ,
            G: () => s$,
            H: () => sV,
            I: () => f_,
            J: () => sZ,
            K: () => sX,
            L: () => s2,
            M: () => s3,
            N: () => l0,
            O: () => l1,
            P: () => s9,
            Q: () => de,
            R: () => s6,
            S: () => s7,
            T: () => s8,
            U: () => l8,
            V: () => l9,
            W: () => se,
            X: () => st,
            Y: () => sc,
            Z: () => su,
            _: () => lc,
            $: () => lC,
            ab: () => fN,
            bb: () => pn,
            cb: () => ft,
            db: () => f3,
            eb: () => dt,
            fb: () => da,
            gb: () => dn,
            hb: () => dr,
            ib: () => di,
            jb: () => dl,
            kb: () => ds,
            lb: () => fa,
            mb: () => f5,
            nb: () => sp,
            ob: () => sh,
            pb: () => dm,
            qb: () => df,
            rb: () => dc,
            sb: () => du,
            tb: () => sm,
            ub: () => sf,
            vb: () => sw,
            wb: () => sj,
            xb: () => sC,
            yb: () => sN,
            zb: () => sS,
            Ab: () => sA,
            Bb: () => sM,
            Cb: () => sE,
            Db: () => f2,
            Eb: () => i8,
            Fb: () => i9,
            Gb: () => lM,
            Hb: () => lE,
            Ib: () => m2,
            Jb: () => lA,
            Kb: () => lz,
            Lb: () => lL,
            Mb: () => lT,
            Nb: () => m5,
            Ob: () => lD,
            Pb: () => ul,
            Qb: () => lB,
            Rb: () => dp,
            Sb: () => dh,
            Tb: () => dg,
            Ub: () => dx,
            Vb: () => uu,
            Wb: () => dN,
            Xb: () => dX,
            Yb: () => d0,
            Zb: () => dY,
            _b: () => dJ,
            $b: () => sq,
            ac: () => sz,
            bc: () => sI,
            cc: () => sP,
            dc: () => s_,
            ec: () => sO,
            fc: () => sD,
            gc: () => fX,
            hc: () => sR,
            ic: () => l_,
            jc: () => lO,
            kc: () => pc,
            lc: () => lI,
            mc: () => lP,
            nc: () => dM,
            oc: () => sB,
            pc: () => sF,
            qc: () => ue,
            rc: () => lF,
            sc: () => lH,
            tc: () => dL,
            uc: () => dE,
            vc: () => dT,
            wc: () => dz,
            xc: () => dI,
            yc: () => d_,
            zc: () => dP,
            Ac: () => dO,
            Bc: () => dD,
            Cc: () => dR,
            Dc: () => dB,
            Ec: () => sx,
            Fc: () => sb,
            Gc: () => dF,
            Hc: () => dH,
            Ic: () => dW,
            Jc: () => dQ,
            Kc: () => dK,
            Lc: () => dU,
            Mc: () => dq,
            Nc: () => dV,
            Oc: () => dZ,
            Pc: () => pI,
            Qc: () => m4,
            Rc: () => sv,
            Sc: () => sy,
            Tc: () => sg,
            Uc: () => fn,
            Vc: () => f4,
            Wc: () => dG,
            Xc: () => d1,
            Yc: () => d2,
            Zc: () => d3,
            _c: () => mY,
            $c: () => m6,
            ad: () => mJ,
            bd: () => lh,
            cd: () => lg,
            dd: () => d5,
            ed: () => d4,
            fd: () => d6,
            gd: () => d7,
            hd: () => f$,
            id: () => fV,
            jd: () => d8,
            kd: () => fI,
            ld: () => d9,
            md: () => ce,
            nd: () => lx,
            od: () => lb,
            pd: () => ct,
            qd: () => f0,
            rd: () => fr,
            sd: () => f6,
            td: () => ca,
            ud: () => ci,
            vd: () => cl,
            wd: () => cn,
            xd: () => cs,
            yd: () => cd,
            zd: () => d$,
            Ad: () => cr,
            Bd: () => co,
            Cd: () => cc,
            Dd: () => cu,
            Ed: () => cf,
            Fd: () => cp,
            Gd: () => cm,
            Hd: () => l7,
            Id: () => ch,
            Jd: () => cg,
            Kd: () => cx,
            Ld: () => fE,
            Md: () => cb,
            Nd: () => cv,
            Od: () => cy,
            Pd: () => cw,
            Qd: () => sW,
            Rd: () => fo,
            Sd: () => fi,
            Td: () => pT,
            Ud: () => pl,
            Vd: () => ps,
            Wd: () => fs,
            Xd: () => fd,
            Yd: () => fc,
            Zd: () => f8,
            _d: () => ff,
            $d: () => fp,
            ae: () => sH,
            be: () => fu,
            ce: () => fm,
            de: () => lV,
            ee: () => lZ,
            fe: () => fh,
            ge: () => f9,
            he: () => pE,
            ie: () => pL,
            je: () => cj,
            ke: () => ck,
            le: () => cC,
            me: () => cN,
            ne: () => cS,
            oe: () => cA,
            pe: () => c9,
            qe: () => sQ,
            re: () => sK,
            se: () => sU,
            te: () => cP,
            ue: () => c_,
            ve: () => lW,
            we: () => lQ,
            xe: () => lK,
            ye: () => lU,
            ze: () => cR,
            Ae: () => sG,
            Be: () => lR,
            Ce: () => cB,
            De: () => mp,
            Ee: () => lq,
            Fe: () => lG,
            Ge: () => l$,
            He: () => dd,
            Ie: () => fg,
            Je: () => pe,
            Ke: () => cM,
            Le: () => cE,
            Me: () => um,
            Ne: () => cO,
            Oe: () => cD,
            Pe: () => dS,
            Qe: () => cF,
            Re: () => dA,
            Se: () => cq,
            Te: () => cG,
            Ue: () => c$,
            Ve: () => cV,
            We: () => fK,
            Xe: () => fU,
            Ye: () => fq,
            Ze: () => cZ,
            _e: () => cX,
            $e: () => pf,
            af: () => pp,
            bf: () => ph,
            cf: () => pg,
            df: () => px,
            ef: () => pb,
            ff: () => pv,
            gf: () => py,
            hf: () => pw,
            if: () => pj,
            jf: () => pk,
            kf: () => pC,
            lf: () => pN,
            mf: () => pS,
            nf: () => pA,
            of: () => pM,
            pf: () => fx,
            qf: () => pt,
            rf: () => mm,
            sf: () => mf,
            tf: () => pP,
            uf: () => fL,
            vf: () => i4,
            wf: () => cT,
            xf: () => cL,
            yf: () => fb,
            zf: () => fv,
            Af: () => fy,
            Bf: () => fw,
            Cf: () => fj,
            Df: () => lX,
            Ef: () => lY,
            Ff: () => cH,
            Gf: () => cW,
            Hf: () => cQ,
            If: () => cY,
            Jf: () => cJ,
            Kf: () => fM,
            Lf: () => pi,
            Mf: () => m3,
            Nf: () => cz,
            Of: () => cI,
            Pf: () => c5,
            Qf: () => fz,
            Rf: () => fG,
            Sf: () => c0,
            Tf: () => c1,
            Uf: () => c2,
            Vf: () => c3,
            Wf: () => m0,
            Xf: () => m1,
            Yf: () => lv,
            Zf: () => ly,
            _f: () => c4,
            $f: () => c6,
            ag: () => c7,
            bg: () => ut,
            cg: () => c8,
            dg: () => fY,
            eg: () => ua,
            fg: () => un,
            gg: () => cK,
            hg: () => cU,
            ig: () => db,
            jg: () => ur,
            kg: () => sL,
            lg: () => sT,
            mg: () => uo,
            ng: () => ui,
            og: () => uh,
            pg: () => lw,
            qg: () => ug,
            rg: () => ux,
            sg: () => ub,
            tg: () => uv,
            ug: () => uy,
            vg: () => ud,
            wg: () => uc,
            xg: () => us,
            yg: () => uw,
            zg: () => fC,
            Ag: () => fk,
            Bg: () => pa,
            Cg: () => l2,
            Dg: () => uj,
            Eg: () => uk,
            Fg: () => uC,
            Gg: () => uN,
            Hg: () => sk,
            Ig: () => l3,
            Jg: () => uS,
            Kg: () => uA,
            Lg: () => m7,
            Mg: () => m8,
            Ng: () => lj,
            Og: () => lk,
            Pg: () => l5,
            Qg: () => l4,
            Rg: () => le,
            Sg: () => lt,
            Tg: () => uL,
            Ug: () => uT,
            Vg: () => uM,
            Wg: () => uE,
            Xg: () => uO,
            Yg: () => uR,
            Zg: () => pz,
            _g: () => u_,
            $g: () => uD,
            ah: () => uB,
            bh: () => uF,
            ch: () => uH,
            dh: () => uW,
            eh: () => uQ,
            fh: () => uK,
            gh: () => uU,
            hh: () => u0,
            ih: () => uq,
            jh: () => uG,
            kh: () => u1,
            lh: () => u2,
            mh: () => u3,
            nh: () => lo,
            oh: () => li,
            ph: () => fO,
            qh: () => fD,
            rh: () => ll,
            sh: () => u$,
            th: () => uV,
            uh: () => u5,
            vh: () => u4,
            wh: () => u6,
            xh: () => u7,
            yh: () => u8,
            zh: () => u9,
            Ah: () => me,
            Bh: () => fF,
            Ch: () => fH,
            Dh: () => uY,
            Eh: () => mt,
            Fh: () => ma,
            Gh: () => mn,
            Hh: () => uJ,
            Ih: () => uZ,
            Jh: () => fP,
            Kh: () => uX,
            Lh: () => mr,
            Mh: () => dv,
            Nh: () => mo,
            Oh: () => uz,
            Ph: () => uI,
            Qh: () => uP,
            Rh: () => f1,
            Sh: () => mL,
            Th: () => fl,
            Uh: () => f7,
            Vh: () => mM,
            Wh: () => mE,
            Xh: () => fS,
            Yh: () => pr,
            Zh: () => fR,
            _h: () => fB,
            $h: () => dy,
            ai: () => pd,
            bi: () => fA,
            ci: () => po,
            di: () => mi,
            ei: () => fT,
            fi: () => ml,
            gi: () => uf,
            hi: () => up,
            ii: () => ms,
            ji: () => md,
            ki: () => mc,
            li: () => mu,
            mi: () => mK,
            ni: () => mv,
            oi: () => mh,
            pi: () => mg,
            qi: () => mH,
            ri: () => mW,
            si: () => mQ,
            ti: () => mx,
            ui: () => mb,
            vi: () => my,
            wi: () => mw,
            xi: () => dw,
            yi: () => dj,
            zi: () => fW,
            Ai: () => fQ,
            Bi: () => mU,
            Ci: () => dk,
            Di: () => dC,
            Ei: () => mS,
            Fi: () => mj,
            Gi: () => mk,
            Hi: () => mN,
            Ii: () => mC,
            Ji: () => mT,
            Ki: () => mz,
            Li: () => mA,
            Mi: () => fJ,
            Ni: () => mq,
            Oi: () => mG,
            Pi: () => m$,
            Qi: () => mV,
            Ri: () => mI,
            Si: () => mP,
            Ti: () => pu,
            Ui: () => pm,
            Vi: () => mZ,
            Wi: () => mX,
            Xi: () => m9,
            Yi: () => fe,
            Zi: () => mF,
            _i: () => m_,
            $i: () => mO,
            aj: () => mB,
            bj: () => mD,
            cj: () => mR
        });
        var n = a("nk");
        let r = (0, n.a)({
                name: "phone-fill-24",
                canvas: {
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24"
                },
                paint: {
                    kind: "monochrome"
                },
                optical: {
                    shape: "non-circular"
                },
                capabilities: ["icon"],
                body: '<path fill="currentColor" d="M7.237 2c.567 0 1.042.125 1.425.375s.684.637.9 1.162l.988 2.388c.216.516.283.996.2 1.437-.075.442-.304.872-.688 1.288l-1.278 1.37c.618 1.22 1.33 2.252 2.142 3.093.81.84 1.804 1.559 2.978 2.159l1.36-1.359c.408-.4.833-.641 1.274-.725.442-.091.93-.024 1.463.2l2.463 1.025c.533.225.92.525 1.162.9.25.376.375.85.375 1.425v1.938c0 .608-.155 1.166-.463 1.675a3.325 3.325 0 0 1-1.25 1.2c-.517.3-1.08.45-1.687.45-2.95 0-5.7-.783-8.25-2.35-2.55-1.566-4.579-3.587-6.087-6.062C2.754 11.105 2 8.575 2 6c0-.733.175-1.404.525-2.013a3.91 3.91 0 0 1 1.45-1.45A3.96 3.96 0 0 1 6 2h1.237Z"/>'
            }),
            o = (0, n.a)({
                name: "envelope-fill-24",
                canvas: {
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24"
                },
                paint: {
                    kind: "monochrome"
                },
                optical: {
                    shape: "non-circular"
                },
                capabilities: ["icon"],
                body: '<path fill="currentColor" d="M6 5h12a3 3 0 0 1 2.58 1.47l-7.83 5.64a1.3 1.3 0 0 1-1.5 0L3.42 6.47A3 3 0 0 1 6 5ZM3 8.03V16c0 .53.14 1.03.38 1.46l5.52-5.18L3 8.03Zm18 0-5.9 4.25 5.52 5.18c.24-.43.38-.93.38-1.46V8.03ZM4.45 18.56C4.91 18.84 5.44 19 6 19h12c.56 0 1.09-.16 1.55-.44l-5.7-5.36-.22.16a2.8 2.8 0 0 1-3.26 0l-.22-.16-5.7 5.36Z"/>'
            });
        var i = a("nT"),
            l = a("Ry");
        let s = (0, n.a)({
                name: "arrow-shape-light-16",
                canvas: {
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16"
                },
                paint: {
                    kind: "monochrome"
                },
                optical: {
                    shape: "non-circular"
                },
                capabilities: ["icon"],
                body: '<path fill="none" d="M3.66667 12.33333L12.33333 3.66667M6.66667 3.66667H12.33333V9.33333" stroke="currentColor" stroke-width="1.05" stroke-linecap="round" stroke-linejoin="round" />'
            }),
            d = (0, n.a)({
                name: "arrow-shape-light-20",
                canvas: {
                    width: 20,
                    height: 20,
                    viewBox: "0 0 24 24"
                },
                paint: {
                    kind: "monochrome"
                },
                optical: {
                    shape: "non-circular"
                },
                capabilities: ["icon"],
                body: '<path fill="none" d="M5.5 18.5L18.5 5.5M10 5.5H18.5V14" stroke="currentColor" stroke-width="1.596" stroke-linecap="round" stroke-linejoin="round" />'
            }),
            c = (0, n.a)({
                name: "circle-shape-light-16",
                canvas: {
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16"
                },
                paint: {
                    kind: "monochrome"
                },
                optical: {
                    shape: "circular"
                },
                capabilities: ["icon"],
                body: '<circle fill="none" cx="8" cy="8.33333" r="5.16667" stroke="currentColor" stroke-width="1.05" />'
            }),
            u = (0, n.a)({
                name: "circle-shape-light-20",
                canvas: {
                    width: 20,
                    height: 20,
                    viewBox: "0 0 24 24"
                },
                paint: {
                    kind: "monochrome"
                },
                optical: {
                    shape: "circular"
                },
                capabilities: ["icon"],
                body: '<circle fill="none" cx="12" cy="12.5" r="7.75" stroke="currentColor" stroke-width="1.596" />'
            }),
            m = (0, n.a)({
                name: "diamond-shape-light-16",
                canvas: {
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16"
                },
                paint: {
                    kind: "monochrome"
                },
                optical: {
                    shape: "non-circular"
                },
                capabilities: ["icon"],
                body: '<path fill="none" d="M8 3.5L13.89333 8.5L8 13.5L2.10667 8.5L8 3.5Z" stroke="currentColor" stroke-width="1.05" stroke-linecap="round" stroke-linejoin="round" />'
            }),
            f = (0, n.a)({
                name: "diamond-shape-light-20",
                canvas: {
                    width: 20,
                    height: 20,
                    viewBox: "0 0 24 24"
                },
                paint: {
                    kind: "monochrome"
                },
                optical: {
                    shape: "non-circular"
                },
                capabilities: ["icon"],
                body: '<path fill="none" d="M12 5.25L20.84 12.75L12 20.25L3.16 12.75L12 5.25Z" stroke="currentColor" stroke-width="1.596" stroke-linecap="round" stroke-linejoin="round" />'
            }),
            p = (0, n.a)({
                name: "heart-shape-light-16",
                canvas: {
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16"
                },
                paint: {
                    kind: "monochrome"
                },
                optical: {
                    shape: "non-circular"
                },
                capabilities: ["icon"],
                body: '<path fill="none" d="M8 13.5L3.15333 9C1 7 2.43333 3.5 5 3.5C6.36667 3.5 7.36 4.21333 8 5.16667C8.64 4.21333 9.63333 3.5 11 3.5C13.56667 3.5 15 7 12.84667 9L8 13.5Z" stroke="currentColor" stroke-width="1.05" stroke-linecap="round" stroke-linejoin="round" />'
            }),
            h = (0, n.a)({
                name: "heart-shape-light-20",
                canvas: {
                    width: 20,
                    height: 20,
                    viewBox: "0 0 24 24"
                },
                paint: {
                    kind: "monochrome"
                },
                optical: {
                    shape: "non-circular"
                },
                capabilities: ["icon"],
                body: '<path fill="none" d="M12 20.25L4.73 13.5C1.5 10.5 3.65 5.25 7.5 5.25C9.55 5.25 11.04 6.32 12 7.75C12.96 6.32 14.45 5.25 16.5 5.25C20.35 5.25 22.5 10.5 19.27 13.5L12 20.25Z" stroke="currentColor" stroke-width="1.596" stroke-linecap="round" stroke-linejoin="round" />'
            }),
            g = (0, n.a)({
                name: "line-shape-light-16",
                canvas: {
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16"
                },
                paint: {
                    kind: "monochrome"
                },
                optical: {
                    shape: "non-circular"
                },
                capabilities: ["icon"],
                body: '<path fill="none" d="M4.22667 11.77333L11.77333 4.22667" stroke="currentColor" stroke-width="1.05" stroke-linecap="round" stroke-linejoin="round" />'
            }),
            x = (0, n.a)({
                name: "line-shape-light-20",
                canvas: {
                    width: 20,
                    height: 20,
                    viewBox: "0 0 24 24"
                },
                paint: {
                    kind: "monochrome"
                },
                optical: {
                    shape: "non-circular"
                },
                capabilities: ["icon"],
                body: '<path fill="none" d="M6.34 17.66L17.66 6.34" stroke="currentColor" stroke-width="1.596" stroke-linecap="round" stroke-linejoin="round" />'
            }),
            b = (0, n.a)({
                name: "rectangle-shape-light-16",
                canvas: {
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16"
                },
                paint: {
                    kind: "monochrome"
                },
                optical: {
                    shape: "non-circular"
                },
                capabilities: ["icon"],
                body: '<rect fill="none" x="3" y="3.5" width="10" height="10" rx="1" stroke="currentColor" stroke-width="1.05" />'
            }),
            v = (0, n.a)({
                name: "rectangle-shape-light-20",
                canvas: {
                    width: 20,
                    height: 20,
                    viewBox: "0 0 24 24"
                },
                paint: {
                    kind: "monochrome"
                },
                optical: {
                    shape: "non-circular"
                },
                capabilities: ["icon"],
                body: '<rect fill="none" x="4.5" y="5.25" width="15" height="15" rx="1.5" stroke="currentColor" stroke-width="1.596" />'
            }),
            y = (0, n.a)({
                name: "shape-stack-light-16",
                canvas: {
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16"
                },
                paint: {
                    kind: "monochrome"
                },
                optical: {
                    shape: "non-circular"
                },
                capabilities: ["icon"],
                body: '<path fill="none" d="M10.2 5.8C10.2 3.36994 8.23008 1.4 5.8 1.4C3.36994 1.4 1.4 3.36994 1.4 5.8C1.4 8.23008 3.36994 10.2 5.8 10.2" stroke="currentColor" stroke-width="1.05" stroke-linecap="round" /><rect fill="none" x="5.8" y="5.8" width="8.4" height="8.4" rx="1.6" stroke="currentColor" stroke-width="1.05" />'
            }),
            w = (0, n.a)({
                name: "shape-stack-light-20",
                canvas: {
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20"
                },
                paint: {
                    kind: "monochrome"
                },
                optical: {
                    shape: "non-circular"
                },
                capabilities: ["icon"],
                body: '<path fill="none" d="M12.75 7.25C12.75 4.21243 10.2876 1.75 7.25 1.75C4.21243 1.75 1.75 4.21243 1.75 7.25C1.75 10.2876 4.21243 12.75 7.25 12.75" stroke="currentColor" stroke-width="1.33" stroke-linecap="round" /><rect fill="none" x="7.25" y="7.25" width="10.5" height="10.5" rx="2" stroke="currentColor" stroke-width="1.33" />'
            }),
            j = (0, n.a)({
                name: "star-shape-light-16",
                canvas: {
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16"
                },
                paint: {
                    kind: "monochrome"
                },
                optical: {
                    shape: "non-circular"
                },
                capabilities: ["icon"],
                body: '<path fill="none" d="M8 3.5L9.50667 7.01333L13.42 7.32L10.44 9.79333L11.34667 13.5L8 11.51333L4.65333 13.5L5.56 9.79333L2.58 7.32L6.49333 7.01333L8 3.5Z" stroke="currentColor" stroke-width="1.05" stroke-linecap="round" stroke-linejoin="round" />'
            }),
            k = (0, n.a)({
                name: "star-shape-light-20",
                canvas: {
                    width: 20,
                    height: 20,
                    viewBox: "0 0 24 24"
                },
                paint: {
                    kind: "monochrome"
                },
                optical: {
                    shape: "non-circular"
                },
                capabilities: ["icon"],
                body: '<path fill="none" d="M12 5.25L14.26 10.52L20.13 10.98L15.66 14.69L17.02 20.25L12 17.27L6.98 20.25L8.34 14.69L3.87 10.98L9.74 10.52L12 5.25Z" stroke="currentColor" stroke-width="1.596" stroke-linecap="round" stroke-linejoin="round" />'
            }),
            C = (0, n.a)({
                name: "triangle-shape-light-16",
                canvas: {
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16"
                },
                paint: {
                    kind: "monochrome"
                },
                optical: {
                    shape: "non-circular"
                },
                capabilities: ["icon"],
                body: '<path fill="none" d="M8 3.5L13.30667 13H2.69333L8 3.5Z" stroke="currentColor" stroke-width="1.05" stroke-linecap="round" stroke-linejoin="round" />'
            }),
            N = (0, n.a)({
                name: "triangle-shape-light-20",
                canvas: {
                    width: 20,
                    height: 20,
                    viewBox: "0 0 24 24"
                },
                paint: {
                    kind: "monochrome"
                },
                optical: {
                    shape: "non-circular"
                },
                capabilities: ["icon"],
                body: '<path fill="none" d="M12 5.25L19.96 19.5H4.04L12 5.25Z" stroke="currentColor" stroke-width="1.596" stroke-linecap="round" stroke-linejoin="round" />'
            }),
            S = "M0.241211 11.541C0.0804036 11.3678 0 11.1699 0 10.9473C0 10.7184 0.0834961 10.5174 0.250488 10.3442L1.8833 8.71143C3.52848 7.06624 4.94792 5.67773 6.1416 4.5459C7.33529 3.41406 8.3527 2.51107 9.19385 1.83691C10.035 1.15658 10.7524 0.680339 11.3462 0.408203C11.9399 0.136068 12.4564 0.0432943 12.8955 0.129883C13.3346 0.216471 13.7459 0.451497 14.1294 0.834961C14.519 1.22461 14.7324 1.66064 14.7695 2.14307C14.8066 2.6193 14.6737 3.16976 14.3706 3.79443C14.0675 4.41911 13.6037 5.14583 12.979 5.97461C12.3543 6.7972 11.575 7.74658 10.6411 8.82275C9.60205 10.0164 8.79183 11.0091 8.21045 11.8008C7.62907 12.5863 7.25488 13.2109 7.08789 13.6748C6.92708 14.1325 6.95182 14.4634 7.16211 14.6675C7.33529 14.8468 7.60433 14.8685 7.96924 14.7324C8.34033 14.5964 8.82894 14.2902 9.43506 13.814C10.0474 13.3315 10.8081 12.6636 11.7173 11.8101C12.7254 10.8514 13.6068 10.1092 14.3613 9.5835C15.1159 9.0516 15.7653 8.74854 16.3096 8.67432C16.86 8.59391 17.3332 8.75472 17.729 9.15674C18.0259 9.44743 18.1836 9.79069 18.2021 10.1865C18.2207 10.5762 18.1156 11.0369 17.8867 11.5688C17.6641 12.1007 17.3332 12.7285 16.894 13.4521C16.6095 13.9284 16.3714 14.3273 16.1797 14.6489C15.988 14.9644 15.855 15.2087 15.7808 15.3818C15.7127 15.5488 15.7096 15.6632 15.7715 15.7251C15.8271 15.7808 15.9323 15.7684 16.0869 15.688C16.2415 15.6014 16.4518 15.4499 16.7178 15.2334C16.9899 15.0107 17.3239 14.717 17.7197 14.3521C17.8929 14.1851 18.0908 14.1016 18.3135 14.1016C18.5423 14.1016 18.7402 14.182 18.9072 14.3428C19.0804 14.516 19.1608 14.7201 19.1484 14.9551C19.1423 15.1901 19.0371 15.4066 18.833 15.6045C17.9362 16.5199 17.1322 17.0981 16.4209 17.3394C15.7096 17.5806 15.1313 17.4785 14.686 17.0332C14.3953 16.7487 14.2345 16.4271 14.2036 16.0684C14.1727 15.7096 14.2253 15.3354 14.3613 14.9458C14.4974 14.55 14.6768 14.1479 14.8994 13.7397C15.1221 13.3315 15.3447 12.9357 15.5674 12.5522C15.9199 11.9461 16.2044 11.4637 16.4209 11.105C16.6436 10.7401 16.6745 10.4741 16.5137 10.3071C16.4209 10.2205 16.2725 10.2236 16.0684 10.3164C15.8704 10.403 15.6169 10.57 15.3076 10.8174C15.0046 11.0648 14.652 11.3771 14.25 11.7544C13.8542 12.1255 13.4089 12.5492 12.9141 13.0254C12.4316 13.4954 11.9368 13.95 11.4297 14.3892C10.9225 14.8283 10.4185 15.2148 9.91748 15.5488C9.4165 15.8828 8.93099 16.1364 8.46094 16.3096C7.99089 16.4827 7.54557 16.5384 7.125 16.4766C6.70443 16.4209 6.31787 16.2199 5.96533 15.8735C5.5695 15.4777 5.34993 15.0386 5.30664 14.5562C5.26953 14.0675 5.3623 13.5511 5.58496 13.0068C5.80762 12.4564 6.11686 11.8905 6.5127 11.3091C6.91471 10.7215 7.36312 10.1278 7.85791 9.52783C8.35889 8.92171 8.86296 8.32178 9.37012 7.72803C9.98861 6.99821 10.5545 6.32715 11.0679 5.71484C11.5812 5.09635 12.008 4.54281 12.3481 4.0542C12.6945 3.56559 12.9233 3.1512 13.0347 2.81104C13.1522 2.47087 13.1213 2.2111 12.9419 2.03174C12.744 1.82764 12.4626 1.78434 12.0977 1.90186C11.7327 2.01318 11.2782 2.26986 10.7339 2.67188C10.1896 3.07389 9.54639 3.61816 8.8042 4.30469C8.0682 4.98503 7.22396 5.79525 6.27148 6.73535C5.31901 7.66927 4.25212 8.72689 3.0708 9.9082L1.43799 11.541C1.271 11.708 1.07308 11.7946 0.844238 11.8008C0.615397 11.8008 0.414388 11.7142 0.241211 11.541Z",
            A = (0, n.a)({
                name: "sketch-light-16",
                canvas: {
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16"
                },
                paint: {
                    kind: "monochrome"
                },
                optical: {
                    shape: "non-circular"
                },
                capabilities: ["icon"],
                body: `<path d="${S}" fill="currentColor" transform="translate(1.48 2) scale(0.68)"/>`
            }),
            M = (0, n.a)({
                name: "sketch-light-20",
                canvas: {
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20"
                },
                paint: {
                    kind: "monochrome"
                },
                optical: {
                    shape: "non-circular"
                },
                capabilities: ["icon"],
                body: `<path d="${S}" fill="currentColor" transform="translate(1.85 2.5) scale(0.85)"/>`
            });
        var E = a("xmj"),
            L = a("G5"),
            T = a("Mp"),
            z = a("RdE"),
            I = a("ie"),
            P = a("V3V"),
            _ = a("sn"),
            O = a("xk"),
            D = a("fe"),
            R = a("w13"),
            B = a("Jy"),
            F = a("iG"),
            H = a("nfq"),
            W = a("Ak"),
            Q = a("a69"),
            K = a("Nu3"),
            U = a("f7Y"),
            q = a("kq"),
            G = a("thT"),
            $ = a("j4"),
            V = a("tOL"),
            Z = a("SgH"),
            X = a("fE"),
            Y = a("jq"),
            J = a("sVR"),
            ee = a("Xu"),
            et = a("zu"),
            ea = a("JT"),
            en = a("lo"),
            er = a("xN3"),
            eo = a("oZ"),
            ei = a("dQF"),
            el = a("fW"),
            es = a("b10"),
            ed = a("Sm9"),
            ec = a("XQu"),
            eu = a("VM"),
            em = a("FR"),
            ef = a("Pq"),
            ep = a("i1"),
            eh = a("nh"),
            eg = a("ch"),
            ex = a("UiT"),
            eb = a("DAF"),
            ev = a("IZ"),
            ey = a("I7"),
            ew = a("nJ"),
            ej = a("Uw"),
            ek = a("ifR"),
            eC = a("AOp"),
            eN = a("j0"),
            eS = a("zg"),
            eA = a("KQ"),
            eM = a("iwR"),
            eE = a("bvd"),
            eL = a("kd"),
            eT = a("QH"),
            ez = a("eHc"),
            eI = a("Ug"),
            eP = a("Oh"),
            e_ = a("kSh"),
            eO = a("Zr"),
            eD = a("mlG"),
            eR = a("Mlg"),
            eB = a("hn"),
            eF = a("MR"),
            eH = a("vXE"),
            eW = a("VH"),
            eQ = a("GN"),
            eK = a("bO"),
            eU = a("ty"),
            eq = a("NAN"),
            eG = a("Ek"),
            e$ = a("yoX"),
            eV = a("TU"),
            eZ = a("kTC"),
            eX = a("K1s"),
            eY = a("OHk"),
            eJ = a("W3l"),
            e0 = a("N3"),
            e1 = a("E9"),
            e2 = a("Oqo"),
            e3 = a("iC"),
            e5 = a("C2P"),
            e4 = a("hat"),
            e6 = a("mj"),
            e7 = a("Gj"),
            e8 = a("Dh"),
            e9 = a("HE"),
            te = a("B6h"),
            tt = a("k0"),
            ta = a("Kx"),
            tn = a("B7"),
            tr = a("yAC"),
            to = a("Tmc"),
            ti = a("Ny"),
            tl = a("RfW"),
            ts = a("Ih"),
            td = a("Ej"),
            tc = a("sg"),
            tu = a("bZ"),
            tm = a("p0P"),
            tf = a("XxN"),
            tp = a("jI"),
            th = a("TN"),
            tg = a("UB"),
            tx = a("vb"),
            tb = a("KB"),
            tv = a("sqv"),
            ty = a("Juf"),
            tw = a("oKF"),
            tj = a("ASy"),
            tk = a("o0I"),
            tC = a("Yn"),
            tN = a("cYW"),
            tS = a("oYq"),
            tA = a("Jc"),
            tM = a("Hf"),
            tE = a("JU"),
            tL = a("u3S"),
            tT = a("Wp"),
            tz = a("xK3"),
            tI = a("x2"),
            tP = a("keP"),
            t_ = a("fWs"),
            tO = a("vuo"),
            tD = a("yY"),
            tR = a("tXO"),
            tB = a("fd"),
            tF = a("u2"),
            tH = a("Iv"),
            tW = a("Lq"),
            tQ = a("cU"),
            tK = a("rR"),
            tU = a("FO"),
            tq = a("xP"),
            tG = a("jwB"),
            t$ = a("h7"),
            tV = a("CV"),
            tZ = a("dal"),
            tX = a("F00"),
            tY = a("NB"),
            tJ = a("j1"),
            t0 = a("Ii"),
            t1 = a("cOY"),
            t2 = a("tm5"),
            t3 = a("cpU"),
            t5 = a("k71"),
            t4 = a("vr"),
            t6 = a("yrZ"),
            t7 = a("mo"),
            t8 = a("Ck"),
            t9 = a("EI"),
            ae = a("gU"),
            at = a("zL"),
            aa = a("ga"),
            an = a("qF"),
            ar = a("BsY"),
            ao = a("AJ"),
            ai = a("vH"),
            al = a("PqQ"),
            as = a("a2"),
            ad = a("beU"),
            ac = a("ho"),
            au = a("re"),
            am = a("bS"),
            af = a("Ynz"),
            ap = a("nS"),
            ah = a("l7"),
            ag = a("GQ"),
            ax = a("LJ"),
            ab = a("F8h"),
            av = a("N5a"),
            ay = a("sp"),
            aw = a("KT"),
            aj = a("sH"),
            ak = a("Aku"),
            aC = a("qf"),
            aN = a("op"),
            aS = a("Z0x"),
            aA = a("Dw"),
            aM = a("NT"),
            aE = a("E0"),
            aL = a("wzZ"),
            aT = a("lM"),
            az = a("D4"),
            aI = a("nTZ"),
            aP = a("mH"),
            a_ = a("IK0"),
            aO = a("Gr"),
            aD = a("cV"),
            aR = a("SX"),
            aB = a("cD"),
            aF = a("lJQ"),
            aH = a("cZ"),
            aW = a("HjO"),
            aQ = a("wG"),
            aK = a("klc"),
            aU = a("nF"),
            aq = a("D9"),
            aG = a("hN"),
            a$ = a("NxQ"),
            aV = a("K0"),
            aZ = a("GP"),
            aX = a("hK6"),
            aY = a("tv"),
            aJ = a("jkC"),
            a0 = a("Ns"),
            a1 = a("z66"),
            a2 = a("sE"),
            a3 = a("OHZ"),
            a5 = a("Csq"),
            a4 = a("PR"),
            a6 = a("JK"),
            a7 = a("NW"),
            a8 = a("Lwb"),
            a9 = a("NNK"),
            ne = a("aF"),
            nt = a("AvU"),
            na = a("zKk"),
            nn = a("A2m"),
            nr = a("nML"),
            no = a("HS"),
            ni = a("Sk"),
            nl = a("KV"),
            ns = a("ZB5"),
            nd = a("RM"),
            nc = a("Qi"),
            nu = a("gN"),
            nm = a("Eu"),
            nf = a("N3c"),
            np = a("CN"),
            nh = a("t0"),
            ng = a("P7z"),
            nx = a("fer"),
            nb = a("FW"),
            nv = a("zv"),
            ny = a("ln"),
            nw = a("Z7"),
            nj = a("gg2"),
            nk = a("Qn"),
            nC = a("nc"),
            nN = a("HB"),
            nS = a("oSo"),
            nA = a("zA"),
            nM = a("hP"),
            nE = a("KM"),
            nL = a("Ad"),
            nT = a("Eo"),
            nz = a("ba"),
            nI = a("s9"),
            nP = a("W1"),
            n_ = a("WWn"),
            nO = a("Nsm"),
            nD = a("lg"),
            nR = a("SB"),
            nB = a("ZS"),
            nF = a("yj"),
            nH = a("rel"),
            nW = a("l9"),
            nQ = a("O9"),
            nK = a("zKa"),
            nU = a("lB"),
            nq = a("tyh"),
            nG = a("ZF"),
            n$ = a("s3k"),
            nV = a("qz"),
            nZ = a("yf"),
            nX = a("x9"),
            nY = a("OL0"),
            nJ = a("g2v"),
            n0 = a("GDi"),
            n1 = a("bR3"),
            n2 = a("j5"),
            n3 = a("uG"),
            n5 = a("cpR"),
            n4 = a("oxT"),
            n6 = a("tj"),
            n7 = a("xd"),
            n8 = a("QfI"),
            n9 = a("jXm"),
            re = a("pm"),
            rt = a("G1"),
            ra = a("pj"),
            rn = a("d1"),
            rr = a("FS"),
            ro = a("v6g"),
            ri = a("Dc"),
            rl = a("x4"),
            rs = a("Ok"),
            rd = a("NY"),
            rc = a("qB"),
            ru = a("aB"),
            rm = a("lm"),
            rf = a("af"),
            rp = a("lp"),
            rh = a("rc"),
            rg = a("fex"),
            rx = a("hu6"),
            rb = a("DW5"),
            rv = a("MXF"),
            ry = a("lK"),
            rw = a("LE"),
            rj = a("OiS"),
            rk = a("ea"),
            rC = a("DF"),
            rN = a("kZ"),
            rS = a("Hc"),
            rA = a("Ki"),
            rM = a("Ig"),
            rE = a("fi"),
            rL = a("UxF"),
            rT = a("Kxe"),
            rz = a("Wl"),
            rI = a("VC"),
            rP = a("qy"),
            r_ = a("qP"),
            rO = a("nFe"),
            rD = a("nx"),
            rR = a("mtx"),
            rB = a("RTb"),
            rF = a("fw"),
            rH = a("u0"),
            rW = a("tM"),
            rQ = a("hA"),
            rK = a("oKy"),
            rU = a("PM"),
            rq = a("MDV"),
            rG = a("eS2"),
            r$ = a("U1i"),
            rV = a("fo"),
            rZ = a("Pf2"),
            rX = a("Ij"),
            rY = a("yY2"),
            rJ = a("EY"),
            r0 = a("tkJ"),
            r1 = a("Pq4"),
            r2 = a("Of"),
            r3 = a("V3T"),
            r5 = a("gpP"),
            r4 = a("f0"),
            r6 = a("MSQ"),
            r7 = a("pEO"),
            r8 = a("RZ"),
            r9 = a("pe"),
            oe = a("dBV"),
            ot = a("UPn"),
            oa = a("O8"),
            on = a("rC"),
            or = a("UV"),
            oo = a("mLD"),
            oi = a("SF"),
            ol = a("rH6"),
            os = a("pG"),
            od = a("Ge"),
            oc = a("bBr"),
            ou = a("PzC"),
            om = a("EjZ"),
            of = a("aAF"),
            op = a("ub"),
            oh = a("RL"),
            og = a("ak"),
            ox = a("Qp"),
            ob = a("B2"),
            ov = a("o7"),
            oy = a("vVp"),
            ow = a("Nn2"),
            oj = a("iV"),
            ok = a("rYP"),
            oC = a("NE"),
            oN = a("Q1r"),
            oS = a("n4"),
            oA = a("OrA"),
            oM = a("gI"),
            oE = a("au"),
            oL = a("aS"),
            oT = a("ekF"),
            oz = a("vQ"),
            oI = a("E3v"),
            oP = a("M2"),
            o_ = a("so"),
            oO = a("v7V"),
            oD = a("mv"),
            oR = a("iZ"),
            oB = a("Ca"),
            oF = a("PB"),
            oH = a("Pab"),
            oW = a("c8"),
            oQ = a("Dt"),
            oK = a("dbr"),
            oU = a("R6"),
            oq = a("EYV"),
            oG = a("pJ"),
            o$ = a("XJ"),
            oV = a("cq"),
            oZ = a("ey8"),
            oX = a("eCc"),
            oY = a("SjD"),
            oJ = a("rJ"),
            o0 = a("Gh"),
            o1 = a("NbM"),
            o2 = a("wVF"),
            o3 = a("PHM"),
            o5 = a("kE"),
            o4 = a("hAa"),
            o6 = a("tK"),
            o7 = a("RG"),
            o8 = a("Et"),
            o9 = a("l2"),
            ie = a("Mo"),
            it = a("Ns4"),
            ia = a("eBr"),
            ir = a("Bjd"),
            io = a("HC"),
            ii = a("lN"),
            il = a("Gkv"),
            is = a("S9"),
            id = a("jW2"),
            ic = a("Rq"),
            iu = a("Hlw"),
            im = a("ZJ"),
            ip = a("Sms"),
            ih = a("ap"),
            ig = a("df"),
            ix = a("M0"),
            ib = a("oU"),
            iv = a("eCO"),
            iy = a("DIe"),
            iw = a("uC"),
            ij = a("cE"),
            ik = a("WC2"),
            iC = a("cPe"),
            iN = a("ar"),
            iS = a("AW0"),
            iA = a("NI"),
            iM = a("bD"),
            iE = a("Hq"),
            iL = a("s6"),
            iT = a("QKh"),
            iz = a("dU"),
            iI = a("zD"),
            iP = a("dh"),
            i_ = a("O0"),
            iO = a("gW"),
            iD = a("tvB"),
            iR = a("DN4"),
            iB = a("lX"),
            iF = a("xDf"),
            iH = a("eqv"),
            iW = a("bU"),
            iQ = a("QG"),
            iK = a("W8"),
            iU = a("GE0"),
            iq = a("lgG"),
            iG = a("Na"),
            i$ = a("vD"),
            iV = a("qK"),
            iZ = a("Iy"),
            iX = a("wzD"),
            iY = a("ad0"),
            iJ = a("a6g"),
            i0 = a("J67"),
            i1 = a("pUt"),
            i2 = a("vy");
        let i3 = (0, l.a)(L.a),
            i5 = (0, l.a)(T.a),
            i4 = (0, l.a)(n8.a),
            i6 = (0, l.a)(W.a),
            i7 = (0, l.a)(Q.a),
            i8 = (0, l.a)(e5.a),
            i9 = (0, l.a)(e4.a),
            le = (0, l.a)(ol.a),
            lt = (0, l.a)(os.a),
            la = (0, l.a)(z.a),
            ln = (0, l.a)(I.a),
            lr = (0, l.a)(P.a),
            lo = (0, l.a)(oA.a),
            li = (0, l.a)(oM.a),
            ll = (0, l.a)(oT.a),
            ls = (0, l.a)(_.a),
            ld = (0, l.a)(O.a),
            lc = (0, l.a)(eS.a),
            lu = (0, l.a)(G.a),
            lm = (0, l.a)($.a),
            lf = (0, l.a)(V.a),
            lp = (0, l.a)(Z.a),
            lh = (0, l.a)(an.a),
            lg = (0, l.a)(ar.a),
            lx = (0, l.a)(ap.a),
            lb = (0, l.a)(ah.a),
            lv = (0, l.a)(rS.a),
            ly = (0, l.a)(rA.a),
            lw = (0, l.a)(rU.a),
            lj = (0, l.a)(on.a),
            lk = (0, l.a)(or.a),
            lC = (0, l.a)(eA.a),
            lN = (0, l.a)(U.a),
            lS = (0, l.a)(q.a),
            lA = (0, l.a)(e9.a),
            lM = (0, l.a)(e7.a),
            lE = (0, l.a)(e8.a),
            lL = (0, l.a)(tt.a),
            lT = (0, l.a)(ta.a),
            lz = (0, l.a)(te.a),
            lI = (0, l.a)(c),
            lP = (0, l.a)(u),
            l_ = (0, l.a)(tA.a),
            lO = (0, l.a)(tS.a),
            lD = (0, l.a)(ti.a),
            lR = (0, l.a)(np.a),
            lB = (0, l.a)(to.a),
            lF = (0, l.a)(tI.a),
            lH = (0, l.a)(tP.a),
            lW = (0, l.a)(ns.a),
            lQ = (0, l.a)(nd.a),
            lK = (0, l.a)(nc.a),
            lU = (0, l.a)(nu.a),
            lq = (0, l.a)(nx.a),
            lG = (0, l.a)(nb.a),
            l$ = (0, l.a)(nv.a),
            lV = (0, l.a)(a2.a),
            lZ = (0, l.a)(a3.a),
            lX = (0, l.a)(ri.a),
            lY = (0, l.a)(rl.a),
            lJ = (0, l.a)(K.a),
            l0 = (0, l.a)(ef.a),
            l1 = (0, l.a)(ep.a),
            l2 = (0, l.a)(r5.a),
            l3 = (0, l.a)(oe.a),
            l5 = (0, l.a)(oo.a),
            l4 = (0, l.a)(oi.a),
            l6 = (0, l.a)(D.a),
            l7 = (0, l.a)(aP.a),
            l8 = (0, l.a)(ey.a),
            l9 = (0, l.a)(ew.a),
            se = (0, l.a)(ej.a),
            st = (0, l.a)(ek.a),
            sa = (0, l.a)(X.a),
            sn = (0, l.a)(Y.a),
            sr = (0, l.a)(J.a),
            so = (0, l.a)(ee.a),
            si = (0, l.a)(et.a),
            sl = (0, l.a)(ea.a),
            ss = (0, l.a)(en.a),
            sd = (0, l.a)(er.a),
            sc = (0, l.a)(eC.a),
            su = (0, l.a)(eN.a),
            sm = (0, l.a)(eG.a),
            sf = (0, l.a)(e$.a),
            sp = (0, l.a)(eH.a),
            sh = (0, l.a)(eW.a),
            sg = (0, l.a)(t3.a),
            sx = (0, l.a)(tK.a),
            sb = (0, l.a)(tU.a),
            sv = (0, l.a)(t1.a),
            sy = (0, l.a)(t2.a),
            sw = (0, l.a)(eV.a),
            sj = (0, l.a)(eZ.a),
            sk = (0, l.a)(r9.a),
            sC = (0, l.a)(eX.a),
            sN = (0, l.a)(eY.a),
            sS = (0, l.a)(eJ.a),
            sA = (0, l.a)(e0.a),
            sM = (0, l.a)(e1.a),
            sE = (0, l.a)(e2.a),
            sL = (0, l.a)(rF.a),
            sT = (0, l.a)(rH.a),
            sz = (0, l.a)(tb.a),
            sI = (0, l.a)(tv.a),
            sP = (0, l.a)(ty.a),
            s_ = (0, l.a)(tw.a),
            sO = (0, l.a)(tj.a),
            sD = (0, l.a)(tk.a),
            sR = (0, l.a)(tN.a),
            sB = (0, l.a)(tL.a),
            sF = (0, l.a)(tT.a),
            sH = (0, l.a)(aJ.a),
            sW = (0, l.a)(aQ.a),
            sQ = (0, l.a)(no.a),
            sK = (0, l.a)(ni.a),
            sU = (0, l.a)(nl.a),
            sq = (0, l.a)(tx.a),
            sG = (0, l.a)(nf.a),
            s$ = (0, l.a)(ei.a),
            sV = (0, l.a)(el.a),
            sZ = (0, l.a)(ed.a),
            sX = (0, l.a)(ec.a),
            sY = (0, l.a)(F.a),
            sJ = (0, l.a)(H.a),
            s0 = (0, l.a)(R.a),
            s1 = (0, l.a)(B.a),
            s2 = (0, l.a)(eu.a),
            s3 = (0, l.a)(em.a),
            s5 = (0, l.a)(s),
            s4 = (0, l.a)(d),
            s6 = (0, l.a)(ex.a),
            s7 = (0, l.a)(eb.a),
            s8 = (0, l.a)(ev.a),
            s9 = (0, l.a)(eh.a),
            de = (0, l.a)(eg.a),
            dt = (0, l.a)(eP.a),
            da = (0, l.a)(e_.a),
            dn = (0, l.a)(ez.a),
            dr = (0, l.a)(eI.a),
            di = (0, l.a)(eD.a),
            dl = (0, l.a)(eR.a),
            ds = (0, l.a)(eO.a),
            dd = (0, l.a)(ny.a),
            dc = (0, l.a)(eU.a),
            du = (0, l.a)(eq.a),
            dm = (0, l.a)(eQ.a),
            df = (0, l.a)(eK.a),
            dp = (0, l.a)(tl.a),
            dh = (0, l.a)(ts.a),
            dg = (0, l.a)(td.a),
            dx = (0, l.a)(tc.a),
            db = (0, l.a)(rB.a),
            dv = (0, l.a)(oZ.a),
            dy = (0, l.a)(o9.a),
            dw = (0, l.a)(iN.a),
            dj = (0, l.a)(iS.a),
            dk = (0, l.a)(iL.a),
            dC = (0, l.a)(iT.a),
            dN = (0, l.a)(tm.a),
            dS = (0, l.a)(nM.a),
            dA = (0, l.a)(nL.a),
            dM = (0, l.a)(tE.a),
            dE = (0, l.a)(tO.a),
            dL = (0, l.a)(t_.a),
            dT = (0, l.a)(tD.a),
            dz = (0, l.a)(tR.a),
            dI = (0, l.a)(tB.a),
            dP = (0, l.a)(tH.a),
            d_ = (0, l.a)(tF.a),
            dO = (0, l.a)(tW.a),
            dD = (0, l.a)(tQ.a),
            dR = (0, l.a)(i.a),
            dB = (0, l.a)(i.b),
            dF = (0, l.a)(tq.a),
            dH = (0, l.a)(tG.a),
            dW = (0, l.a)(t$.a),
            dQ = (0, l.a)(m),
            dK = (0, l.a)(f),
            dU = (0, l.a)(tX.a),
            dq = (0, l.a)(tY.a),
            dG = (0, l.a)(t6.a),
            d$ = (0, l.a)(ak.a),
            dV = (0, l.a)(tV.a),
            dZ = (0, l.a)(tZ.a),
            dX = (0, l.a)(tf.a),
            dY = (0, l.a)(th.a),
            dJ = (0, l.a)(tg.a),
            d0 = (0, l.a)(tp.a),
            d1 = (0, l.a)(t7.a),
            d2 = (0, l.a)(t8.a),
            d3 = (0, l.a)(t9.a),
            d5 = (0, l.a)(aa.a),
            d4 = (0, l.a)(ao.a),
            d6 = (0, l.a)(ai.a),
            d7 = (0, l.a)(al.a),
            d8 = (0, l.a)(am.a),
            d9 = (0, l.a)(ac.a),
            ce = (0, l.a)(au.a),
            ct = (0, l.a)(ag.a),
            ca = (0, l.a)(aS.a),
            cn = (0, l.a)(ay.a),
            cr = (0, l.a)(aC.a),
            co = (0, l.a)(aN.a),
            ci = (0, l.a)(aA.a),
            cl = (0, l.a)(aM.a),
            cs = (0, l.a)(aw.a, "primary"),
            cd = (0, l.a)(aj.a),
            cc = (0, l.a)(aE.a),
            cu = (0, l.a)(aL.a),
            cm = (0, l.a)(aT.a),
            cf = (0, l.a)(az.a),
            cp = (0, l.a)(aI.a),
            ch = (0, l.a)(a_.a),
            cg = (0, l.a)(aO.a),
            cx = (0, l.a)(aD.a),
            cb = (0, l.a)(aB.a),
            cv = (0, l.a)(aF.a),
            cy = (0, l.a)(aH.a),
            cw = (0, l.a)(aW.a),
            cj = (0, l.a)(a8.a),
            ck = (0, l.a)(a9.a),
            cC = (0, l.a)(ne.a),
            cN = (0, l.a)(nt.a),
            cS = (0, l.a)(nn.a),
            cA = (0, l.a)(nr.a),
            cM = (0, l.a)(nk.a),
            cE = (0, l.a)(nC.a),
            cL = (0, l.a)(n9.a),
            cT = (0, l.a)(re.a),
            cz = (0, l.a)(rg.a),
            cI = (0, l.a)(rx.a),
            cP = (0, l.a)(g),
            c_ = (0, l.a)(x),
            cO = (0, l.a)(nS.a),
            cD = (0, l.a)(nA.a),
            cR = (0, l.a)(nm.a),
            cB = (0, l.a)(nh.a),
            cF = (0, l.a)(nE.a),
            cH = (0, l.a)(rs.a),
            cW = (0, l.a)(rd.a),
            cQ = (0, l.a)(rc.a),
            cK = (0, l.a)(rO.a),
            cU = (0, l.a)(rD.a),
            cq = (0, l.a)(nT.a),
            cG = (0, l.a)(nz.a),
            c$ = (0, l.a)(nI.a),
            cV = (0, l.a)(nP.a),
            cZ = (0, l.a)(nR.a),
            cX = (0, l.a)(nB.a),
            cY = (0, l.a)(ru.a),
            cJ = (0, l.a)(rm.a),
            c0 = (0, l.a)(rv.a),
            c1 = (0, l.a)(ry.a),
            c2 = (0, l.a)(rw.a),
            c3 = (0, l.a)(rj.a),
            c5 = (0, l.a)(rk.a),
            c4 = (0, l.a)(rM.a),
            c6 = (0, l.a)(rE.a),
            c7 = (0, l.a)(rT.a),
            c8 = (0, l.a)(rL.a),
            c9 = (0, l.a)(na.a),
            ue = (0, l.a)(tz.a),
            ut = (0, l.a)(rz.a),
            ua = (0, l.a)(rP.a),
            un = (0, l.a)(r_.a),
            ur = (0, l.a)(rR.a),
            uo = (0, l.a)(rW.a),
            ui = (0, l.a)(rQ.a),
            ul = (0, l.a)(tr.a),
            us = (0, l.a)(rJ.a),
            ud = (0, l.a)(rX.a),
            uc = (0, l.a)(rY.a),
            uu = (0, l.a)(tu.a),
            um = (0, l.a)(nN.a),
            uf = (0, l.a)(il.a),
            up = (0, l.a)(is.a),
            uh = (0, l.a)(rK.a),
            ug = (0, l.a)(rq.a),
            ux = (0, l.a)(rG.a),
            ub = (0, l.a)(r$.a),
            uv = (0, l.a)(rV.a),
            uy = (0, l.a)(rZ.a),
            uw = (0, l.a)(r0.a),
            uj = (0, l.a)(r4.a),
            uk = (0, l.a)(r6.a),
            uC = (0, l.a)(r7.a),
            uN = (0, l.a)(r8.a),
            uS = (0, l.a)(b),
            uA = (0, l.a)(v),
            uM = (0, l.a)(od.a),
            uE = (0, l.a)(oc.a),
            uL = (0, l.a)(y),
            uT = (0, l.a)(w),
            uz = (0, l.a)(oY.a),
            uI = (0, l.a)(oJ.a),
            uP = (0, l.a)(o0.a),
            u_ = (0, l.a)(om.a),
            uO = (0, l.a)(of.a),
            uD = (0, l.a)(oh.a),
            uR = (0, l.a)(op.a),
            uB = (0, l.a)(oy.a),
            uF = (0, l.a)(ow.a),
            uH = (0, l.a)(ob.a),
            uW = (0, l.a)(ov.a),
            uQ = (0, l.a)(og.a),
            uK = (0, l.a)(ox.a),
            uU = (0, l.a)(oj.a),
            uq = (0, l.a)(A),
            uG = (0, l.a)(M),
            u$ = (0, l.a)(E.a),
            uV = (0, l.a)(E.b),
            uZ = (0, l.a)(oU.a),
            uX = (0, l.a)(oG.a),
            uY = (0, l.a)(o$.a),
            uJ = (0, l.a)(oK.a),
            u0 = (0, l.a)(ok.a),
            u1 = (0, l.a)(oC.a),
            u2 = (0, l.a)(oN.a),
            u3 = (0, l.a)(oS.a),
            u5 = (0, l.a)(oz.a),
            u4 = (0, l.a)(oI.a),
            u6 = (0, l.a)(oP.a),
            u7 = (0, l.a)(o_.a),
            u8 = (0, l.a)(oO.a),
            u9 = (0, l.a)(oD.a),
            me = (0, l.a)(oR.a),
            mt = (0, l.a)(oH.a),
            ma = (0, l.a)(oW.a),
            mn = (0, l.a)(oQ.a),
            mr = (0, l.a)(oV.a),
            mo = (0, l.a)(oX.a),
            mi = (0, l.a)(ir.a),
            ml = (0, l.a)(ii.a),
            ms = (0, l.a)(id.a),
            md = (0, l.a)(ic.a),
            mc = (0, l.a)(iu.a),
            mu = (0, l.a)(im.a),
            mm = (0, l.a)(n4.a),
            mf = (0, l.a)(n6.a),
            mp = (0, l.a)(ng.a),
            mh = (0, l.a)(ig.a),
            mg = (0, l.a)(ix.a),
            mx = (0, l.a)(iw.a),
            mb = (0, l.a)(ij.a),
            mv = (0, l.a)(ih.a),
            my = (0, l.a)(ik.a),
            mw = (0, l.a)(iC.a),
            mj = (0, l.a)(iP.a),
            mk = (0, l.a)(iz.a),
            mC = (0, l.a)(iR.a),
            mN = (0, l.a)(iD.a),
            mS = (0, l.a)(iI.a),
            mA = (0, l.a)(iB.a),
            mM = (0, l.a)(j),
            mE = (0, l.a)(k),
            mL = (0, l.a)(o2.a),
            mT = (0, l.a)(i_.a),
            mz = (0, l.a)(iO.a),
            mI = (0, l.a)(iQ.a),
            mP = (0, l.a)(iK.a),
            m_ = (0, l.a)(iY.a),
            mO = (0, l.a)(iJ.a),
            mD = (0, l.a)(i1.a),
            mR = (0, l.a)(i2.a),
            mB = (0, l.a)(i0.a),
            mF = (0, l.a)(iX.a),
            mH = (0, l.a)(ib.a),
            mW = (0, l.a)(iv.a),
            mQ = (0, l.a)(iy.a),
            mK = (0, l.a)(ip.a),
            mU = (0, l.a)(iE.a),
            mq = (0, l.a)(iH.a),
            mG = (0, l.a)(iW.a),
            m$ = (0, l.a)(C),
            mV = (0, l.a)(N),
            mZ = (0, l.a)(iG.a),
            mX = (0, l.a)(i$.a),
            mY = (0, l.a)(ae.a),
            mJ = (0, l.a)(o),
            m0 = (0, l.a)(rN.a),
            m1 = (0, l.a)(r),
            m2 = (0, l.a)(e6.a),
            m3 = (0, l.a)(rh.a),
            m5 = (0, l.a)(tn.a),
            m4 = (0, l.a)(t0.a),
            m6 = (0, l.a)(at.a),
            m7 = (0, l.a)(ot.a),
            m8 = (0, l.a)(oa.a),
            m9 = (0, l.a)(iV.a),
            fe = (0, l.a)(iZ.a),
            ft = (0, l.a)(eL.a),
            fa = (0, l.a)(eB.a),
            fn = (0, l.a)(t5.a),
            fr = (0, l.a)(ab.a),
            fo = (0, l.a)(aK.a),
            fi = (0, l.a)(aU.a),
            fl = (0, l.a)(o3.a),
            fs = (0, l.a)(aV.a),
            fd = (0, l.a)(aZ.a),
            fc = (0, l.a)(aX.a),
            fu = (0, l.a)(a0.a),
            fm = (0, l.a)(a1.a),
            ff = (0, l.a)(p),
            fp = (0, l.a)(h),
            fh = (0, l.a)(a5.a),
            fg = (0, l.a)(nw.a),
            fx = (0, l.a)(n2.a),
            fb = (0, l.a)(rt.a),
            fv = (0, l.a)(ra.a),
            fy = (0, l.a)(rn.a),
            fw = (0, l.a)(rr.a),
            fj = (0, l.a)(ro.a),
            fk = (0, l.a)(r2.a),
            fC = (0, l.a)(r1.a),
            fN = (0, l.a)(eM.a),
            fS = (0, l.a)(o4.a),
            fA = (0, l.a)(it.a),
            fM = (0, l.a)(rf.a),
            fE = (0, l.a)(aR.a),
            fL = (0, l.a)(n7.a),
            fT = (0, l.a)(io.a),
            fz = (0, l.a)(rb.a),
            fI = (0, l.a)(af.a),
            fP = (0, l.a)(oq.a),
            f_ = (0, l.a)(es.a),
            fO = (0, l.a)(oE.a),
            fD = (0, l.a)(oL.a),
            fR = (0, l.a)(o7.a),
            fB = (0, l.a)(o8.a),
            fF = (0, l.a)(oB.a),
            fH = (0, l.a)(oF.a),
            fW = (0, l.a)(iA.a),
            fQ = (0, l.a)(iM.a),
            fK = (0, l.a)(n_.a),
            fU = (0, l.a)(nO.a),
            fq = (0, l.a)(nD.a),
            fG = (0, l.a)(rC.a),
            f$ = (0, l.a)(as.a),
            fV = (0, l.a)(ad.a),
            fZ = (0, l.a)(eo.a),
            fX = (0, l.a)(tC.a),
            fY = (0, l.a)(rI.a),
            fJ = (0, l.a)(iF.a),
            f0 = (0, l.a)(ax.a),
            f1 = (0, l.a)(o1.a),
            f2 = (0, l.a)(e3.a),
            f3 = (0, l.a)(eT.a),
            f5 = (0, l.a)(eF.a),
            f4 = (0, l.a)(t4.a),
            f6 = (0, l.a)(av.a),
            f7 = (0, l.a)(o5.a),
            f8 = (0, l.a)(aY.a),
            f9 = (0, l.a)(a4.a),
            pe = (0, l.a)(nj.a),
            pt = (0, l.a)(n3.a),
            pa = (0, l.a)(r3.a),
            pn = (0, l.a)(eE.a),
            pr = (0, l.a)(o6.a),
            po = (0, l.a)(ia.a),
            pi = (0, l.a)(rp.a),
            pl = (0, l.a)(aG.a),
            ps = (0, l.a)(a$.a),
            pd = (0, l.a)(ie.a),
            pc = (0, l.a)(tM.a),
            pu = (0, l.a)(iU.a),
            pm = (0, l.a)(iq.a),
            pf = (0, l.a)(nF.a),
            pp = (0, l.a)(nH.a),
            ph = (0, l.a)(nW.a),
            pg = (0, l.a)(nQ.a),
            px = (0, l.a)(nK.a),
            pb = (0, l.a)(nU.a),
            pv = (0, l.a)(nq.a),
            py = (0, l.a)(nG.a),
            pw = (0, l.a)(n$.a),
            pj = (0, l.a)(nV.a),
            pk = (0, l.a)(nZ.a),
            pC = (0, l.a)(nX.a),
            pN = (0, l.a)(nY.a),
            pS = (0, l.a)(nJ.a),
            pA = (0, l.a)(n0.a),
            pM = (0, l.a)(n1.a),
            pE = (0, l.a)(a6.a),
            pL = (0, l.a)(a7.a),
            pT = (0, l.a)(aq.a),
            pz = (0, l.a)(ou.a),
            pI = (0, l.a)(tJ.a),
            pP = (0, l.a)(n5.a)
    }),
    xmj: (function(e, t, a) {
        var n = a("nk");
        let r = "M7.7 3.55c.67-.05 1.32.18 1.83.62l1.58 1.38c.5.44.82 1.06.86 1.73l.4 5.5a2.6 2.6 0 0 1-2.4 2.78l-5.97.42a2.6 2.6 0 0 1-2.78-2.4L.76 6.5a2.6 2.6 0 0 1 2.4-2.78l4.54-.17Z",
            o = (0, n.a)({
                name: "spaces-light-16",
                canvas: {
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16"
                },
                paint: {
                    kind: "monochrome"
                },
                optical: {
                    shape: "non-circular"
                },
                capabilities: ["icon"],
                body: `<defs><mask id="back" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16"><path d="M0 0h16v16H0z" fill="white"/><path d="${r}" fill="black" stroke="black" stroke-width="2.125"/></mask></defs><g transform="translate(1.85 1.35) scale(.8)"><path d="M6.9.7 12.6 1a2.1 2.1 0 0 1 1.96 2.31l-.6 7.16a2.1 2.1 0 0 1-2.3 1.94l-5.45-.46a2.1 2.1 0 0 1-1.92-2.28l.63-7.05A2.1 2.1 0 0 1 6.9.7Z" fill="none" stroke="currentColor" stroke-width="1.3125" mask="url(#back)"/><path d="${r}m.05.05.19 2.21c.07.8.56 1.12 1.26 1.06l2.06-.15" fill="none" stroke="currentColor" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round"/></g>`
            }),
            i = (0, n.a)({
                name: "spaces-light-20",
                canvas: {
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20"
                },
                paint: {
                    kind: "monochrome"
                },
                optical: {
                    shape: "non-circular"
                },
                capabilities: ["icon"],
                body: '<defs><mask id="back" maskUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="23"><path d="M-1-1h22v23H-1z" fill="white"/><rect x="1.66016" y="3.46295" width="13.6636" height="3.94167" transform="rotate(-3.9429 1.66016 3.46295)" fill="black"/><rect x="16.127" y="4.28009" width="13.6636" height="13.3934" transform="rotate(86.1575 16.127 4.28009)" fill="black"/></mask></defs><g transform="translate(2 1.88) scale(.8)"><rect x="6.37022" y="0.415331" width="12.67" height="14.67" rx="2.835" transform="rotate(5.30338 6.37022 0.415331)" fill="none" stroke="currentColor" stroke-width="1.6625" mask="url(#back)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.36653 4.44879C10.204 4.39334 11.0297 4.6727 11.6611 5.22566L13.6497 6.96724C14.2811 7.52028 14.6668 8.3019 14.7223 9.13941L15.2044 16.4213C15.3197 18.1653 13.9994 19.6731 12.2553 19.7885L4.77171 20.284C3.02766 20.3994 1.52014 19.0789 1.4045 17.3349L0.798928 8.18797C0.683455 6.44381 2.00381 4.93624 3.74797 4.82076L9.36653 4.44879ZM3.83583 6.14794C2.82461 6.21488 2.05915 7.08888 2.1261 8.10011L2.73168 17.2471C2.79879 18.2581 3.67273 19.0238 4.68385 18.9568L12.1675 18.4614C13.1786 18.3944 13.944 17.5203 13.8772 16.5092L13.4807 10.5203L11.2346 10.669C9.9498 10.7541 8.83885 9.78097 8.75366 8.49616L8.57741 5.83402L3.83583 6.14794ZM10.0808 8.40829C10.1175 8.96017 10.5949 9.37841 11.1468 9.34187L13.3909 9.1933C13.3508 8.72067 13.1309 8.28085 12.7734 7.96774L10.7849 6.22616C10.5343 6.00673 10.2306 5.86301 9.90839 5.80365L10.0808 8.40829Z" fill="currentColor" stroke="currentColor" stroke-width=".3325" stroke-linejoin="round"/></g>'
            });
        a.d(t, {}, {
            a: o,
            b: i
        })
    }),
    ZW: (function(e, t, a) {
        function n() {
            return "u" < typeof document ? "" : document.documentElement?.dataset.iconSpriteUrl ?? ""
        }

        function r(e) {
            return e
        }

        function o(e) {
            return "kind" in e && "inline" === e.kind ? e.preset : e
        }
        a.d(t, {
            a: () => n,
            b: () => r,
            c: () => o
        })
    }),
    wZ: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("zd"),
            i = a("RN");

        function l(e) {
            let t, a, l, d, c, u = (0, r.c)(21),
                {
                    browserLoadingPlaceholder: m,
                    loadingPlaceholder: f,
                    hasNextPage: p,
                    isFetchingNextPage: h,
                    onLoadNextPage: g,
                    rootMargin: x,
                    rootRef: b
                } = e,
                v = (0, o.useRef)(null);
            u[0] !== p || u[1] !== h || u[2] !== g ? (t = () => {
                p && !h && g()
            }, u[0] = p, u[1] = h, u[2] = g, u[3] = t) : t = u[3];
            let y = (0, o.useEffectEvent)(t);
            if (u[4] !== p || u[5] !== h || u[6] !== y || u[7] !== x || u[8] !== b ? (a = () => {
                    let e = v.current;
                    if (null == e || !p || h) return;
                    if ("u" < typeof IntersectionObserver) return void y();
                    let t = new IntersectionObserver(e => {
                        e.some(s) && (t.disconnect(), y())
                    }, {
                        root: b?.current,
                        rootMargin: x
                    });
                    return t.observe(e), () => {
                        t.disconnect()
                    }
                }, u[4] = p, u[5] = h, u[6] = y, u[7] = x, u[8] = b, u[9] = a) : a = u[9], u[10] !== p || u[11] !== h || u[12] !== x || u[13] !== b ? (l = [p, h, x, b], u[10] = p, u[11] = h, u[12] = x, u[13] = b, u[14] = l) : l = u[14], (0, o.useEffect)(a, l), !p && !h) return null;
            if (!h) {
                let e;
                return u[15] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)("div", {
                    ref: v,
                    className: "min-h-px w-full"
                }), u[15] = e) : e = u[15], e
            }
            if (void 0 !== f) {
                let e;
                return u[16] !== f ? (e = (0, n.jsx)("div", {
                    ref: v,
                    className: "min-h-px w-full",
                    children: f
                }), u[16] = f, u[17] = e) : e = u[17], e
            }
            u[18] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, n.jsx)("div", {
                ref: v,
                className: "flex w-full justify-center py-3",
                children: (0, n.jsx)(i.a, {
                    className: "icon-xs text-secondary"
                })
            }), u[18] = d) : d = u[18];
            let w = d;
            return u[19] !== m ? (c = (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(n.Fragment, {
                    children: void 0 !== m ? (0, n.jsx)("div", {
                        ref: v,
                        className: "flex min-h-px w-full justify-center",
                        children: m
                    }) : w
                }), null]
            }), u[19] = m, u[20] = c) : c = u[20], c
        }

        function s(e) {
            return e.isIntersecting
        }
        a.d(t, {
            a: () => l
        })
    }),
    evw: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on");

        function i(e) {
            let t, a, i = (0, r.c)(7),
                {
                    className: l,
                    align: s,
                    children: d,
                    layout: c
                } = e,
                u = "settings-row" === (void 0 === c ? "default" : c) && "min-h-[var(--height-token-settings-row)]",
                m = "center" === (void 0 === s ? "center" : s) ? "justify-center text-center" : "justify-start text-start";
            return i[0] !== l || i[1] !== u || i[2] !== m ? (t = (0, o.b)("flex items-center px-4 text-sm text-secondary", u, m, l), i[0] = l, i[1] = u, i[2] = m, i[3] = t) : t = i[3], i[4] !== d || i[5] !== t ? (a = (0, n.jsx)("div", {
                className: t,
                children: d
            }), i[4] = d, i[5] = t, i[6] = a) : a = i[6], a
        }
        a.d(t, {
            a: () => i
        })
    }),
    MM7: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("DVf"),
            l = a("YCV");

        function s(e) {
            let t, a, s, d, c, u, m, f, p, h, g, x, b, v, y, w, j, k, C, N, S, A = (0, r.c)(50);
            A[0] !== e ? ({
                ref: m,
                className: a,
                children: t,
                isActive: f,
                tone: p,
                isDisabled: h,
                isDropTarget: g,
                isHighlighted: x,
                multiline: b,
                onClick: s,
                onKeyDown: d,
                onPress: c,
                hasNavigationLink: v,
                excludeFromNavigation: y,
                variant: w,
                ...u
            } = e, A[0] = e, A[1] = t, A[2] = a, A[3] = s, A[4] = d, A[5] = c, A[6] = u, A[7] = m, A[8] = f, A[9] = p, A[10] = h, A[11] = g, A[12] = x, A[13] = b, A[14] = v, A[15] = y, A[16] = w) : (t = A[1], a = A[2], s = A[3], d = A[4], c = A[5], u = A[6], m = A[7], f = A[8], p = A[9], h = A[10], g = A[11], x = A[12], b = A[13], v = A[14], y = A[15], w = A[16]);
            let M = void 0 !== f && f,
                E = void 0 === p ? "default" : p,
                L = void 0 !== h && h,
                T = void 0 !== g && g,
                z = void 0 !== x && x,
                I = void 0 !== b && b,
                P = void 0 !== v && v,
                _ = void 0 !== y && y,
                O = void 0 === w ? "sidebar" : w;
            A[17] !== L || A[18] !== c ? (j = {
                onSelect: c,
                isDisabled: L
            }, A[17] = L, A[18] = c, A[19] = j) : j = A[19];
            let {
                onClick: D,
                onKeyDown: R
            } = (0, i.a)(j), B = L ? -1 : 0, F = "inverse" === E ? "dark" : void 0, H = T ? "bg-text-info/10 ring-2 ring-inset ring-text-info" : "hover:bg-primary-ghost-hover", W = P && "pointer-events-none isolate [&_[data-state]]:pointer-events-auto [&_[role=button]]:pointer-events-auto [&_a]:pointer-events-auto [&_button]:pointer-events-auto [&_input]:pointer-events-auto", Q = I ? "min-h-[var(--height-token-row)]" : "h-[var(--height-token-row)]", K = "sidebar" === O ? "sidebar-item focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring has-[[aria-haspopup=menu][aria-expanded=true]]:bg-primary-ghost-hover" : "rounded-[var(--radius-token-row)] focus-visible:outline-offset-[-2px]", U = !T && (M || z) && "bg-primary-ghost-hover", q = "inverse" === E && "bg-surface-elevated-secondary text-default", G = L && "opacity-60", $ = "tableRow" === O && "!h-9 bg-transparent !px-0 !py-0 hover:bg-transparent";
            A[20] !== a || A[21] !== H || A[22] !== W || A[23] !== Q || A[24] !== K || A[25] !== U || A[26] !== q || A[27] !== G || A[28] !== $ ? (k = (0, o.b)("group relative cursor-interaction text-sm", H, W, Q, K, U, q, G, $, a), A[20] = a, A[21] = H, A[22] = W, A[23] = Q, A[24] = K, A[25] = U, A[26] = q, A[27] = G, A[28] = $, A[29] = k) : k = A[29], A[30] !== D || A[31] !== P || A[32] !== s ? (C = e => {
                s?.(e), (!P || (0, l.a)(e)) && 0 === e.button && (D?.(e), P && e.preventDefault())
            }, A[30] = D, A[31] = P, A[32] = s, A[33] = C) : C = A[33], A[34] !== R || A[35] !== d ? (N = e => {
                d?.(e), R?.(e)
            }, A[34] = R, A[35] = d, A[36] = N) : N = A[36];
            let V = "sidebar" !== O || null == c || L || _ ? void 0 : "",
                Z = P ? "group" : "button",
                X = P ? void 0 : B,
                Y = M ? "page" : void 0,
                J = L || void 0;
            return A[37] !== t || A[38] !== u || A[39] !== m || A[40] !== F || A[41] !== k || A[42] !== C || A[43] !== N || A[44] !== V || A[45] !== Z || A[46] !== X || A[47] !== Y || A[48] !== J ? (S = (0, n.jsx)("div", {
                ...u,
                ref: m,
                "data-theme": F,
                className: k,
                onClick: C,
                onKeyDown: N,
                "data-sidebar-cycle-item": V,
                role: Z,
                tabIndex: X,
                "aria-current": Y,
                "aria-disabled": J,
                children: t
            }), A[37] = t, A[38] = u, A[39] = m, A[40] = F, A[41] = k, A[42] = C, A[43] = N, A[44] = V, A[45] = Z, A[46] = X, A[47] = Y, A[48] = J, A[49] = S) : S = A[49], S
        }
        a.d(t, {
            a: () => s
        })
    }),
    e2y: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on");

        function i(e) {
            let t, a, i = (0, r.c)(8),
                {
                    keysLabel: l,
                    variant: s,
                    className: d
                } = e,
                c = void 0 === s ? "default" : s,
                u = "tooltip" === c || "tooltipInline" === c ? "h-4.5 min-w-4 items-center justify-center rounded-lg !bg-[var(--color-background-tooltip-shortcut)] !px-1.5 !py-0 !text-sm !leading-4.5 !text-[var(--color-text-tooltip-shortcut)]" : "!rounded-md !bg-current/10 !text-xs !text-current",
                m = "tooltip" === c && "-me-1.75",
                f = "button" === c ? "h-4 min-w-4 items-center justify-center !px-1.5 !py-0 !leading-4" : "default" === c && "!px-1.5 !py-0.5 !leading-none";
            return i[0] !== d || i[1] !== u || i[2] !== m || i[3] !== f ? (t = (0, o.b)("inline-flex !border-0 !font-sans !shadow-none", u, m, f, d), i[0] = d, i[1] = u, i[2] = m, i[3] = f, i[4] = t) : t = i[4], i[5] !== l || i[6] !== t ? (a = (0, n.jsx)("kbd", {
                className: t,
                children: l
            }), i[5] = l, i[6] = t, i[7] = a) : a = i[7], a
        }
        a.d(t, {
            a: () => i
        })
    }),
    Fr: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on");

        function i(e) {
            let t, a, i, l, s, d, c, u = (0, r.c)(33),
                {
                    className: m,
                    contentClassName: f,
                    title: p,
                    description: h,
                    actions: g,
                    illustration: x,
                    illustrationSize: b,
                    layout: v,
                    spacing: y,
                    tone: w
                } = e,
                j = void 0 === b ? "default" : b,
                k = void 0 === v ? "default" : v,
                C = "outlined" === k ? "px-6" : "px-3",
                N = "browse" === k ? "grid grid-rows-2 justify-items-center" : "flex flex-col justify-center",
                S = "withPreview" !== k && "py-6",
                A = "popover" === k && "min-h-80",
                M = "outlined" === k && "min-h-80 rounded-2xl border border-dashed border-default",
                E = ("page" === k || "browse" === k) && "min-h-[var(--height-token-empty-state-page)] flex-1",
                L = "withPreview" === k && "min-h-0 flex-none pt-8 pb-0 sm:pt-2";
            u[0] !== m || u[1] !== E || u[2] !== L || u[3] !== C || u[4] !== N || u[5] !== S || u[6] !== A || u[7] !== M ? (t = (0, o.b)("w-full items-center", C, N, S, A, M, E, L, m), u[0] = m, u[1] = E, u[2] = L, u[3] = C, u[4] = N, u[5] = S, u[6] = A, u[7] = M, u[8] = t) : t = u[8];
            let T = "browse" === k ? "row-start-2 self-start justify-start" : "justify-center",
                z = "outlined" !== k && ("compact" === (void 0 === y ? "compact" : y) ? "gap-3" : "gap-4"),
                I = "outlined" === k && "gap-3.5",
                P = "faded" === (void 0 === w ? "default" : w) && "opacity-60";
            return u[9] !== f || u[10] !== T || u[11] !== z || u[12] !== I || u[13] !== P ? (a = (0, o.b)("flex w-full max-w-xl flex-col items-center text-center", T, z, I, P, f), u[9] = f, u[10] = T, u[11] = z, u[12] = I, u[13] = P, u[14] = a) : a = u[14], u[15] !== x || u[16] !== j || u[17] !== k ? (i = x || "browse" === k ? (0, n.jsx)("div", {
                className: (0, o.b)("pointer-events-none flex items-center justify-center", "browse" === k && "tile" !== j && "h-5", "tile" === j && "size-12 shrink-0 rounded-xl bg-background-primary-soft-active text-default", "icon" === j && "[&>svg]:size-8 [&>svg]:text-secondary", "hero" === j && "relative h-32 w-[30rem] max-w-full overflow-visible"),
                children: "hero" === j ? (0, n.jsx)("div", {
                    className: "absolute top-1/2 left-1/2 size-[30rem] max-h-[55vh] max-w-full -translate-x-1/2 -translate-y-1/2",
                    children: x
                }) : x
            }) : null, u[15] = x, u[16] = j, u[17] = k, u[18] = i) : i = u[18], u[19] !== h || u[20] !== k || u[21] !== p ? (l = null != p || null != h ? (0, n.jsxs)("div", {
                className: (0, o.b)("flex flex-col items-center", "outlined" === k ? "max-w-76.5 gap-1 text-balance" : "gap-2"),
                children: [null != p ? (0, n.jsx)("div", {
                    className: (0, o.b)("leading-6 font-medium text-default", "outlined" === k ? "text-base" : "text-lg"),
                    children: p
                }) : null, h || "browse" === k ? (0, n.jsx)("div", {
                    className: (0, o.b)("text-sm text-secondary", "browse" === k && "min-h-10"),
                    children: h
                }) : null]
            }) : null, u[19] = h, u[20] = k, u[21] = p, u[22] = l) : l = u[22], u[23] !== g ? (s = g ? (0, n.jsx)("div", {
                className: "flex w-full flex-wrap items-center justify-center gap-2",
                children: g
            }) : null, u[23] = g, u[24] = s) : s = u[24], u[25] !== a || u[26] !== i || u[27] !== l || u[28] !== s ? (d = (0, n.jsxs)("div", {
                className: a,
                children: [i, l, s]
            }), u[25] = a, u[26] = i, u[27] = l, u[28] = s, u[29] = d) : d = u[29], u[30] !== t || u[31] !== d ? (c = (0, n.jsx)("div", {
                className: t,
                children: d
            }), u[30] = t, u[31] = d, u[32] = c) : c = u[32], c
        }
        a.d(t, {
            a: () => i
        })
    }),
    Bb: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("zd"),
            i = a("rB");

        function l(e) {
            let t, a, l, {
                fallback: s = null,
                suspendToParent: d = !1,
                errorFallback: c = null,
                propagateLoadError: u = !1
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};

            function m() {
                return null == t && (t = Promise.resolve().then(e).catch(e => {
                    throw t = void 0, e
                })), t
            }
            let f = (0, o.lazy)(async () => {
                try {
                    return {
                        default: await m()
                    }
                } catch {
                    await new Promise(e => setTimeout(e, 200))
                }
                try {
                    return {
                        default: await m()
                    }
                } catch (e) {
                    if (u) throw e;
                    return (0, i.b)(e instanceof Error ? e : Error("Failed to load lazy component", {
                        cause: e
                    }), {
                        tags: {
                            operation: "lazy-component-load"
                        }
                    }), {
                        default: function(t) {
                            return "function" == typeof c ? c(t, e) : c
                        }
                    }
                }
            });

            function p() {
                return a
            }
            return Object.assign(function(e) {
                let t, a, i = (0, r.c)(6),
                    [l] = (0, o.useState)(p);
                i[0] !== l || i[1] !== e ? (t = null == l ? (0, n.jsx)(f, {
                    ...e
                }) : (0, n.jsx)(l, {
                    ...e
                }), i[0] = l, i[1] = e, i[2] = t) : t = i[2];
                let c = t;
                return i[3] !== c || i[4] !== e ? (a = d ? c : (0, n.jsx)(o.Suspense, {
                    fallback: "function" == typeof s ? s(e) : s,
                    children: c
                }), i[3] = c, i[4] = e, i[5] = a) : a = i[5], a
            }, {
                prefetch: () => (null == l && (l = m().then(e => {
                    a = e
                }, () => void 0)), l)
            })
        }
        a.d(t, {
            a: () => l
        })
    }),
    OE: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on");

        function i(e) {
            let t, a, i = (0, r.c)(6),
                {
                    children: l,
                    layout: s
                } = e,
                d = "menu" === s ? "size-(--icon-leading-size)" : "h-5 w-4 text-codex-description";
            return i[0] !== d ? (t = (0, o.b)("inline-flex flex-none items-center justify-center", d), i[0] = d, i[1] = t) : t = i[1], i[2] !== l || i[3] !== s || i[4] !== t ? (a = (0, n.jsx)("span", {
                "data-leading-icon-slot": s,
                className: t,
                children: l
            }), i[2] = l, i[3] = s, i[4] = t, i[5] = a) : a = i[5], a
        }
        a.d(t, {
            a: () => i
        })
    }),
    DcH0: (function(e, t, a) {
        a.d(t, {
            a: () => l
        });
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("aq");

        function l(e) {
            let t, a, l, s, d, c, u = (0, r.c)(14);
            u[0] !== e ? ({
                animate: l,
                variant: s,
                className: t,
                ...a
            } = e, u[0] = e, u[1] = t, u[2] = a, u[3] = l, u[4] = s) : (t = u[1], a = u[2], l = u[3], s = u[4]);
            let m = void 0 === l || l,
                f = void 0 === s ? "default" : s,
                p = "solid" === f && "bg-surface-secondary",
                h = "prominent" === f && "bg-text/10",
                g = "prominent" === f && m && "motion-safe:animate-pulse";
            u[5] !== t || u[6] !== p || u[7] !== h || u[8] !== g ? (d = (0, o.b)("Placeholder-GJXpwo", p, h, g, t), u[5] = t, u[6] = p, u[7] = h, u[8] = g, u[9] = d) : d = u[9];
            let x = "default" === f && !!m || void 0;
            return u[10] !== a || u[11] !== d || u[12] !== x ? (c = (0, n.jsx)("div", {
                ref: i.a,
                className: d,
                "data-animate": x,
                ...a
            }), u[10] = a, u[11] = d, u[12] = x, u[13] = c) : c = u[13], c
        }
    }),
    E6P: (function(e, t, a) {
        a.d(t, {
            a: () => u
        });
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("zd"),
            l = a("Cc"),
            s = a("T0");
        let d = {
            gcTime: 36e5,
            cacheTime: 36e5
        };

        function c(e) {
            let t, a, o, l, c, u, m, f, p, h = (0, r.c)(24),
                {
                    alt: g,
                    className: x,
                    src: b,
                    fallback: v
                } = e,
                y = (0, i.useId)(),
                [w, j] = (0, i.useState)(!1);
            h[0] !== b ? (t = {
                queryKey: ["icon-mask", b],
                queryFn: async () => {
                    try {
                        let e = new Image;
                        e.crossOrigin = "anonymous", e.src = b, await e.decode();
                        let t = document.createElement("canvas"),
                            a = Math.min(1, 64 / Math.max(e.naturalWidth, e.naturalHeight));
                        t.width = Math.max(1, Math.round(e.naturalWidth * a)), t.height = Math.max(1, Math.round(e.naturalHeight * a));
                        let n = t.getContext("2d");
                        if (null == n) return "alpha";
                        n.drawImage(e, 0, 0, t.width, t.height);
                        let {
                            data: r
                        } = n.getImageData(0, 0, t.width, t.height);
                        return ! function(e) {
                            for (let t = 0; t < 3; t++) {
                                let a = 0,
                                    n = 255;
                                for (let r = 0; r < e.length; r += 4) {
                                    let o = e[r + 3];
                                    if (0 === o) continue;
                                    let i = 255 === o ? 0 : 127.5 / o + .5,
                                        l = e[r + t];
                                    if ((a = Math.max(a, l - i)) > (n = Math.min(n, l + i))) return !1
                                }
                            }
                            return !0
                        }(r) ? "luminance" : "alpha"
                    } catch {
                        return "alpha"
                    }
                },
                ...d,
                refetchOnMount: !0,
                staleTime: 3e5
            }, h[0] = b, h[1] = t) : t = h[1];
            let {
                data: k
            } = (0, s.a)(t);
            if (null == k || w) return v;
            let C = "" === g,
                N = g || void 0,
                S = `${y}-invert`;
            h[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, n.jsx)("feColorMatrix", {
                type: "matrix",
                values: "-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0"
            }), h[2] = a) : a = h[2], h[3] !== S ? (o = (0, n.jsx)("filter", {
                id: S,
                colorInterpolationFilters: "sRGB",
                children: a
            }), h[3] = S, h[4] = o) : o = h[4];
            let A = "luminance" === k ? `url(#${y}-invert)` : void 0;
            h[5] === Symbol.for("react.memo_cache_sentinel") ? (l = () => j(!0), h[5] = l) : l = h[5], h[6] !== b || h[7] !== A ? (c = (0, n.jsx)("image", {
                href: b,
                width: "100%",
                height: "100%",
                filter: A,
                onError: l
            }), h[6] = b, h[7] = A, h[8] = c) : c = h[8], h[9] !== y || h[10] !== k || h[11] !== c ? (u = (0, n.jsx)("mask", {
                id: y,
                "mask-type": k,
                colorInterpolation: "sRGB",
                children: c
            }), h[9] = y, h[10] = k, h[11] = c, h[12] = u) : u = h[12], h[13] !== u || h[14] !== o ? (m = (0, n.jsxs)("defs", {
                children: [o, u]
            }), h[13] = u, h[14] = o, h[15] = m) : m = h[15];
            let M = `url(#${y})`;
            return h[16] !== M ? (f = (0, n.jsx)("rect", {
                width: "100%",
                height: "100%",
                fill: "currentColor",
                mask: M
            }), h[16] = M, h[17] = f) : f = h[17], h[18] !== x || h[19] !== m || h[20] !== f || h[21] !== C || h[22] !== N ? (p = (0, n.jsxs)("svg", {
                className: x,
                "aria-hidden": C,
                "aria-label": N,
                role: "img",
                children: [m, f]
            }), h[18] = x, h[19] = m, h[20] = f, h[21] = C, h[22] = N, h[23] = p) : p = h[23], p
        }

        function u(e) {
            let t, a, s, d, u = (0, r.c)(14),
                {
                    alt: m,
                    className: f,
                    src: p,
                    fallback: h,
                    monochrome: g
                } = e;
            u[0] !== p ? (t = (0, l.a)(p), u[0] = p, u[1] = t) : t = u[1];
            let x = t,
                [b, v] = (0, i.useState)(!1);
            if (b) return h;
            if (void 0 !== g && g) {
                let e;
                return u[2] !== m || u[3] !== f || u[4] !== h || u[5] !== x ? (e = (0, n.jsx)(c, {
                    className: f,
                    alt: m,
                    fallback: h,
                    src: x
                }, x), u[2] = m, u[3] = f, u[4] = h, u[5] = x, u[6] = e) : e = u[6], e
            }
            return u[7] !== f ? (a = (0, o.b)("object-contain", f), u[7] = f, u[8] = a) : a = u[8], u[9] === Symbol.for("react.memo_cache_sentinel") ? (s = () => {
                v(!0)
            }, u[9] = s) : s = u[9], u[10] !== m || u[11] !== x || u[12] !== a ? (d = (0, n.jsx)("img", {
                alt: m,
                className: a,
                src: x,
                onError: s
            }), u[10] = m, u[11] = x, u[12] = a, u[13] = d) : d = u[13], d
        }
    }),
    yf2: (function(e, t, a) {
        a.d(t, {
            a: () => m
        });
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("zd"),
            l = a("wD9"),
            s = a("T1"),
            d = a("ns"),
            c = a("bI"),
            u = "content-I_RXQY";

        function m(e) {
            var t, a, m, p, h;
            let g, x, b, v, y, w, j, k, C, N, S, A, M, E, L, T, z, I, P, _, O, D, R, B, F = (0, r.c)(59);
            F[0] !== e ? ({
                id: y,
                className: v,
                animate: k,
                animateOnGroupHover: C,
                scrollMode: N,
                children: b,
                style: j,
                ...w
            } = e, F[0] = e, F[1] = b, F[2] = v, F[3] = y, F[4] = w, F[5] = j, F[6] = k, F[7] = C, F[8] = N) : (b = F[1], v = F[2], y = F[3], w = F[4], j = F[5], k = F[6], C = F[7], N = F[8]);
            let H = void 0 !== k && k,
                W = void 0 !== C && C,
                Q = void 0 === N ? "stop-at-end" : N,
                K = (0, l.c)(),
                U = (0, s.a)(),
                [q, G] = (0, i.useState)(null);
            F[9] !== Q || F[10] !== K ? (S = e => {
                if (e.checkVisibility?.({
                        contentVisibilityAuto: !0
                    }) === !1) return;
                let t = e.querySelector("[data-marquee-content]");
                if (!(t instanceof HTMLElement) && !(t instanceof(e.ownerDocument.defaultView ?? window).HTMLElement)) return;
                let a = t.getBoundingClientRect(),
                    n = (0, l.b)(a.width, K),
                    r = n > 0 ? n : t.scrollWidth,
                    o = (0, l.b)(e.getBoundingClientRect().width, K),
                    i = o > 0 ? o : e.clientWidth;
                if (i <= 0 || r - i < 1) return void G(null);
                let s = getComputedStyle(t),
                    d = Number.parseFloat(s.fontSize),
                    c = Number.isFinite(d) ? d : 13,
                    u = Number.parseFloat(s.getPropertyValue("--marquee-speed-em-per-second")),
                    m = Number.isFinite(u) && u > 0 ? u : 2,
                    f = r - i;
                if ("loop" === Q) {
                    f = r + 1.15 * c;
                    let t = e.querySelector("[data-marquee-copy]");
                    if (t instanceof HTMLElement) {
                        let e = (0, l.b)(Math.abs(t.getBoundingClientRect().left - a.left), K);
                        e > 0 && (f = e)
                    }
                }
                let p = c * m;
                G(e => e?.contentWidth === r && e.scrollDistance === f && e.speedPxPerSecond === p ? e : {
                    contentWidth: r,
                    scrollDistance: f,
                    speedPxPerSecond: p
                })
            }, F[9] = Q, F[10] = K, F[11] = S) : S = F[11];
            let $ = (0, c.a)(S);
            F[12] !== $ ? (A = (e, t) => {
                $(t)
            }, F[12] = $, F[13] = A) : A = F[13];
            let V = (0, d.b)(A);
            F[14] !== $ ? (M = (e, t) => {
                let a = t.closest("[data-marquee-text]");
                (a instanceof HTMLElement || a instanceof(t.ownerDocument.defaultView ?? window).HTMLElement) && $(a)
            }, F[14] = $, F[15] = M) : M = F[15];
            let Z = (0, d.b)(M);
            F[16] !== $ ? (E = (e, t) => {
                let a = t.closest("[data-marquee-text]");
                (a instanceof HTMLElement || a instanceof(t.ownerDocument.defaultView ?? window).HTMLElement) && $(a)
            }, F[16] = $, F[17] = E) : E = F[17];
            let X = (0, d.b)(E);
            F[18] !== $ ? (L = e => {
                let t = e?.closest("[data-marquee-text]");
                t instanceof HTMLElement && $(t)
            }, F[18] = $, F[19] = L) : L = F[19];
            let Y = (0, c.a)(L),
                J = null != q,
                ee = "loop" === Q && J && !U;
            F[20] !== J || F[21] !== q || F[22] !== Q || F[23] !== U ? (T = J && !U ? (t = q.scrollDistance, a = q.speedPxPerSecond, m = Q, x = .35 + (g = t / a) + 1.85 * ("loop" === m), {
                "--marquee-duration": `${x.toFixed(3)}s`,
                "--marquee-scroll-distance": `${t}px`,
                "--marquee-scroll-timing": `linear(${[f(0,0,x),...(p=g,h=x,Array.from({length:33},(e,t)=>{let a=t/32,n=1-a,r=3*n**2*a,o=3*n*a**2,i=a**3;return f(.6*r+ +o+i,.35+p*(.49*r+.7*o+i),h)})),..."loop"===m?[f(1,x,x)]:[]].join(", ")})`
            }) : void 0, F[20] = J, F[21] = q, F[22] = Q, F[23] = U, F[24] = T) : T = F[24];
            let et = T,
                ea = null != et,
                en = H && "animate-WAHB8J",
                er = W && "animateOnGroupHover-vlUIif",
                eo = "stop-at-end" === Q && "stopAtEnd-GNPp1Y";
            F[25] !== v || F[26] !== en || F[27] !== er || F[28] !== eo ? (z = (0, o.b)("viewport-CyJYLD", en, er, eo, v), F[25] = v, F[26] = en, F[27] = er, F[28] = eo, F[29] = z) : z = F[29];
            let ei = J || void 0,
                el = ea || void 0,
                es = J && "overflowingViewport-OKeEIC";
            F[30] !== es ? (I = (0, o.b)("clipViewport-PoovvM", es), F[30] = es, F[31] = I) : I = F[31];
            let ed = ea && "scrolling-p0C9A5";
            return F[32] !== ed ? (P = (0, o.b)("track-y4OpI_", ed), F[32] = ed, F[33] = P) : P = F[33], F[34] !== b || F[35] !== X ? (_ = (0, n.jsx)("span", {
                ref: X,
                className: u,
                "data-marquee-content": !0,
                children: b
            }), F[34] = b, F[35] = X, F[36] = _) : _ = F[36], F[37] !== b || F[38] !== Y || F[39] !== ee ? (O = ee ? (0, n.jsx)("span", {
                ref: Y,
                className: u,
                "aria-hidden": !0,
                "data-marquee-copy": !0,
                inert: !0,
                children: b
            }) : null, F[37] = b, F[38] = Y, F[39] = ee, F[40] = O) : O = F[40], F[41] !== Z || F[42] !== P || F[43] !== _ || F[44] !== O ? (D = (0, n.jsxs)("span", {
                ref: Z,
                className: P,
                children: [_, O]
            }), F[41] = Z, F[42] = P, F[43] = _, F[44] = O, F[45] = D) : D = F[45], F[46] !== et || F[47] !== I || F[48] !== D ? (R = (0, n.jsx)("span", {
                className: I,
                style: et,
                children: D
            }), F[46] = et, F[47] = I, F[48] = D, F[49] = R) : R = F[49], F[50] !== y || F[51] !== V || F[52] !== w || F[53] !== j || F[54] !== z || F[55] !== ei || F[56] !== el || F[57] !== R ? (B = (0, n.jsx)("span", {
                ...w,
                id: y,
                ref: V,
                className: z,
                style: j,
                "data-marquee-text": !0,
                "data-marquee-overflowing": ei,
                "data-marquee-animatable": el,
                draggable: !1,
                children: R
            }), F[50] = y, F[51] = V, F[52] = w, F[53] = j, F[54] = z, F[55] = ei, F[56] = el, F[57] = R, F[58] = B) : B = F[58], B
        }

        function f(e, t, a) {
            return `${e.toFixed(4)} ${(t/a*100).toFixed(4)}%`
        }
    }),
    tnQ: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("OE"),
            l = a("Ag");

        function s(e) {
            let t, a, l, s, d, c = (0, r.c)(17),
                {
                    children: u,
                    LeftIcon: m,
                    leftIcon: f,
                    iconSize: p,
                    trailingContent: h,
                    allowWrap: g,
                    textOverflow: x,
                    tooltipOverflowTarget: b
                } = e,
                v = void 0 === p ? 16 : p,
                y = void 0 !== g && g;
            c[0] !== m || c[1] !== v || c[2] !== f ? (t = f ?? (m ? (0, n.jsx)(m, {
                className: (0, o.b)("shrink-0", 20 === v ? "size-5" : "icon-xs")
            }) : null), c[0] = m, c[1] = v, c[2] = f, c[3] = t) : t = c[3];
            let w = t;
            c[4] !== w ? (a = null != w ? (0, n.jsx)(i.a, {
                layout: "menu",
                children: w
            }) : null, c[4] = w, c[5] = a) : a = c[5];
            let j = void 0 !== b && b ? "" : void 0,
                k = y && "whitespace-normal",
                C = !y && ("fade" === (void 0 === x ? "ellipsis" : x) ? "text-fade-truncate" : "truncate");
            return c[6] !== k || c[7] !== C ? (l = (0, o.b)("flex-1 min-w-0", k, C), c[6] = k, c[7] = C, c[8] = l) : l = c[8], c[9] !== u || c[10] !== l || c[11] !== j ? (s = (0, n.jsx)("span", {
                "data-tooltip-overflow-target": j,
                className: l,
                children: u
            }), c[9] = u, c[10] = l, c[11] = j, c[12] = s) : s = c[12], c[13] !== s || c[14] !== a || c[15] !== h ? (d = (0, n.jsxs)("div", {
                "data-menu-row-content": !0,
                className: "flex w-full min-w-0 items-center gap-[var(--spacing-menu-item-content,calc(var(--spacing)*1.5))]",
                children: [a, s, h]
            }), c[13] = s, c[14] = a, c[15] = h, c[16] = d) : d = c[16], d
        }

        function d(e) {
            let t, a, i, d, c, u, m, f = (0, r.c)(15);
            f[0] !== e ? ({
                children: t,
                leftIcon: i,
                disabled: a,
                ...d
            } = e, f[0] = e, f[1] = t, f[2] = a, f[3] = i, f[4] = d) : (t = f[1], a = f[2], i = f[3], d = f[4]);
            let p = a ? "cursor-default opacity-50" : l.a.itemInteractive;
            return f[5] !== p ? (c = (0, o.b)("no-drag rounded-xl text-start text-default select-none", l.a.itemBase, p), f[5] = p, f[6] = c) : c = f[6], f[7] !== t || f[8] !== i ? (u = (0, n.jsx)(s, {
                leftIcon: i,
                children: t
            }), f[7] = t, f[8] = i, f[9] = u) : u = f[9], f[10] !== a || f[11] !== d || f[12] !== c || f[13] !== u ? (m = (0, n.jsx)("button", {
                ...d,
                type: "button",
                className: c,
                disabled: a,
                children: u
            }), f[10] = a, f[11] = d, f[12] = c, f[13] = u, f[14] = m) : m = f[14], m
        }
        a.d(t, {
            a: () => d,
            b: () => s
        })
    }),
    IyM: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("HeO"),
            i = a("on"),
            l = a("Cq"),
            s = a("oQw");
        let d = null;

        function c(e) {
            let t, a, o, d, c, m, f = (0, r.c)(24),
                {
                    text: p,
                    className: h,
                    maxLines: g,
                    tooltipClassName: x,
                    tooltipSide: b
                } = e,
                v = void 0 === g ? 1 : g;
            f[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                fallbackFontSizePx: s.a
            }, f[0] = t) : t = f[0];
            let {
                setTextMeasurementRef: y,
                textMeasurement: w
            } = (0, s.c)(t);
            e: {
                let e;
                if (null == w) {
                    a = p;
                    break e
                }
                f[1] !== v || f[2] !== p || f[3] !== w.font || f[4] !== w.maxWidthPx ? (e = function(e, t, a, n) {
                    if (0 === e.length || a <= 0 || u(e, t, a, n)) return e;
                    let r = Array.from(e),
                        o = 0,
                        i = r.length - 1,
                        l = "…";
                    for (; o <= i;) {
                        let e = Math.floor((o + i) / 2),
                            s = Math.ceil(e / 2),
                            d = Math.floor(e / 2),
                            c = `${r.slice(0,s).join("")}…${r.slice(r.length-d).join("")}`;
                        u(c, t, a, n) ? (l = c, o = e + 1) : i = e - 1
                    }
                    return l
                }(p, w.font, w.maxWidthPx, v), f[1] = v, f[2] = p, f[3] = w.font, f[4] = w.maxWidthPx, f[5] = e) : e = f[5],
                a = e
            }
            let j = a,
                k = j !== p,
                C = !k;
            return f[6] !== h || f[7] !== k || f[8] !== v ? (o = (0, i.b)("min-w-0 overflow-hidden", 1 === v ? "block whitespace-nowrap" : (0, i.b)("wrap-anywhere whitespace-normal", k ? "block" : "line-clamp-2"), h), f[6] = h, f[7] = k, f[8] = v, f[9] = o) : o = f[9], f[10] !== v || f[11] !== w ? (d = 2 === v && null != w ? {
                maxHeight: w.lineHeightPx * v
            } : void 0, f[10] = v, f[11] = w, f[12] = d) : d = f[12], f[13] !== j || f[14] !== y || f[15] !== o || f[16] !== d ? (c = (0, n.jsx)("span", {
                ref: y,
                className: o,
                style: d,
                children: j
            }), f[13] = j, f[14] = y, f[15] = o, f[16] = d, f[17] = c) : c = f[17], f[18] !== C || f[19] !== c || f[20] !== p || f[21] !== x || f[22] !== b ? (m = (0, n.jsx)(l.a, {
                disabled: C,
                side: b,
                tooltipClassName: x,
                tooltipContent: p,
                children: c
            }), f[18] = C, f[19] = c, f[20] = p, f[21] = x, f[22] = b, f[23] = m) : m = f[23], m
        }

        function u(e, t, a, n) {
            return 2 === n ? (0, o.a)((0, o.b)(e, t, {
                whiteSpace: "pre-wrap"
            }), a, 1).lineCount <= n : null != (d = d ?? document.createElement("canvas").getContext("2d")) ? (d.font = t, d.measureText(e).width <= a * n) : (0, o.a)((0, o.b)(e, t, {
                whiteSpace: "pre-wrap"
            }), a, 1).lineCount <= n
        }
        a.d(t, {
            a: () => c
        })
    }),
    X6V: (function(e, t, a) {
        var n = a("Qo"),
            r = a("Xnl"),
            o = a("OW");
        let i = (0, r.u)(o.a, () => ({
                modals: [],
                localModals: new Map,
                nextKey: 1
            })),
            l = (0, r.c)(o.a, e => {
                let {
                    get: t
                } = e;
                return t(i).modals.some(e => e.blocksOtherModals && (null == e.visibleWhen || t(e.visibleWhen))) || [...t(i).localModals.values()].some(e => null == e || t(e))
            }),
            s = (0, r.d)(o.a, (e, t) => {
                let {
                    get: a
                } = t, n = a(i).localModals.get(e);
                return null == n || a(n)
            });

        function d(e, t) {
            return e.set(i, e => ({
                ...e,
                localModals: new Map(e.localModals).set(t, null)
            })), () => e.set(i, e => {
                let a = new Map(e.localModals);
                return a.delete(t), {
                    ...e,
                    localModals: a
                }
            })
        }

        function c() {
            return (0, r.A)(i)
        }

        function u(e, t, a, n) {
            let r = e.get(i).modals.find(e => {
                var a;
                return a = e.ModalComponent, a === t
            });
            e.set(i, e => {
                let o = {
                    key: r?.key ?? e.nextKey,
                    ModalComponent: t,
                    props: a,
                    blocksOtherModals: n?.blocksOtherModals ?? !0,
                    onDispose: n?.onDispose
                };
                return r ? {
                    ...e,
                    modals: [...e.modals.filter(e => {
                        var a;
                        return a = e.ModalComponent, a !== t
                    }), o]
                } : {
                    ...e,
                    modals: [...e.modals, o],
                    nextKey: e.nextKey + 1
                }
            }), r?.onDispose?.()
        }

        function m(e, t) {
            let a = e.get(i).modals.find(e => {
                var a;
                return a = e.ModalComponent, a === t
            });
            e.set(i, e => {
                let a = e.modals.filter(e => {
                    var a;
                    return a = e.ModalComponent, a !== t
                });
                return a.length === e.modals.length ? e : {
                    ...e,
                    modals: a
                }
            }), a?.onDispose?.()
        }

        function f(e) {
            let {
                modals: t
            } = e.get(i);
            for (let a of (e.set(i, e => ({
                    ...e,
                    modals: []
                })), t)) a.onDispose?.()
        }

        function p(e, t) {
            return e.get(i).modals.some(e => {
                var a;
                return a = e.ModalComponent, a === t
            })
        }

        function h(e) {
            let t, a = (0, n.c)(5),
                {
                    modals: r
                } = c();
            if (a[0] !== e || a[1] !== r) {
                let n;
                a[3] !== e ? (n = t => {
                    var a;
                    return a = t.ModalComponent, a === e
                }, a[3] = e, a[4] = n) : n = a[4], t = r.some(n), a[0] = e, a[1] = r, a[2] = t
            } else t = a[2];
            return t
        }

        function g() {
            return (0, r.A)(l)
        }
        a.d(t, {
            a: () => f,
            b: () => m,
            d: () => p,
            f: () => u,
            g: () => d,
            h: () => g,
            i: () => h,
            j: () => c
        }, {
            c: l,
            e: s
        })
    }),
    cb: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("Xnl"),
            i = a("zd"),
            l = a("OW"),
            s = a("X6V");

        function d(e) {
            let t, a, d, c = (0, r.c)(7),
                {
                    children: u
                } = e,
                m = (0, o.z)(l.a),
                f = (0, i.useId)(),
                p = (0, o.x)(s.e, f);
            c[0] !== f || c[1] !== m ? (t = () => (0, s.g)(m, f), a = [m, f], c[0] = f, c[1] = m, c[2] = t, c[3] = a) : (t = c[2], a = c[3]), (0, i.useLayoutEffect)(t, a);
            let h = p ? "visible" : "hidden";
            return c[4] !== u || c[5] !== h ? (d = (0, n.jsx)(i.Activity, {
                mode: h,
                children: u
            }), c[4] = u, c[5] = h, c[6] = d) : d = c[6], d
        }
        let c = (0, i.memo)(function(e) {
            let t, a, d, c, u = (0, r.c)(13),
                {
                    modal: m
                } = e,
                {
                    ModalComponent: f,
                    props: p,
                    visibleWhen: h
                } = m,
                g = (0, o.z)(l.a),
                x = (0, o.A)(h ?? !0);
            u[0] !== p ? (t = p ?? {}, u[0] = p, u[1] = t) : t = u[1];
            let b = t,
                v = x ? "visible" : "hidden";
            return u[2] !== f || u[3] !== p || u[4] !== g ? (a = () => {
                p?.onClose?.(), (0, s.b)(g, f)
            }, u[2] = f, u[3] = p, u[4] = g, u[5] = a) : a = u[5], u[6] !== f || u[7] !== b || u[8] !== a ? (d = (0, n.jsx)(i.Suspense, {
                fallback: null,
                children: (0, n.jsx)(f, {
                    ...b,
                    onClose: a
                })
            }), u[6] = f, u[7] = b, u[8] = a, u[9] = d) : d = u[9], u[10] !== v || u[11] !== d ? (c = (0, n.jsx)(i.Activity, {
                mode: v,
                children: d
            }), u[10] = v, u[11] = d, u[12] = c) : c = u[12], c
        });

        function u(e) {
            let t, a, o = (0, r.c)(7),
                {
                    filter: i
                } = e,
                {
                    modals: l
                } = (0, s.j)();
            if (o[0] !== i || o[1] !== l) {
                let e;
                o[3] !== i ? (e = e => null == i || i(e) ? (0, n.jsx)(c, {
                    modal: e
                }, e.key) : null, o[3] = i, o[4] = e) : e = o[4], t = l.map(e), o[0] = i, o[1] = l, o[2] = t
            } else t = o[2];
            return o[5] !== t ? (a = (0, n.jsx)(n.Fragment, {
                children: t
            }), o[5] = t, o[6] = a) : a = o[6], a
        }
        a.d(t, {
            a: () => d,
            b: () => u
        })
    }),
    f38: (function(e, t, a) {
        a.d(t, {
            a: () => d
        });
        var n = a("A"),
            r = a("Qo"),
            o = a("lCw"),
            i = a("on"),
            l = a("bf"),
            s = a("UxN");

        function d(e) {
            let t, a, d, c, u, m, f, p, h, g, x, b, v = (0, r.c)(27);
            v[0] !== e ? ({
                className: t,
                label: d,
                onClick: c,
                iconClassName: a,
                iconSize: m,
                size: f,
                uniform: p,
                ...u
            } = e, v[0] = e, v[1] = t, v[2] = a, v[3] = d, v[4] = c, v[5] = u, v[6] = m, v[7] = f, v[8] = p) : (t = v[1], a = v[2], d = v[3], c = v[4], u = v[5], m = v[6], f = v[7], p = v[8]);
            let y = void 0 === m ? "sm" : m,
                w = void 0 === f ? "md" : f,
                j = void 0 === p || p,
                k = "lg" === y ? l.Yc : l.Xc,
                C = "toolbar" === w && "Toolbar-TcAqyt";
            v[9] !== t || v[10] !== C ? (h = (0, i.b)(C, t), v[9] = t, v[10] = C, v[11] = h) : h = v[11];
            let N = "toolbar" === w ? "xl" : w;
            return v[12] !== c ? (g = e => {
                e.stopPropagation(), c?.(e)
            }, v[12] = c, v[13] = g) : g = v[13], v[14] !== k || v[15] !== a || v[16] !== w ? (x = "toolbar" === w ? (0, n.jsx)(s.b, {
                className: a,
                "data-no-autosize": !0,
                icon: {
                    16: l.Xc,
                    20: l.Yc
                }
            }) : (0, n.jsx)(k, {
                className: a
            }), v[14] = k, v[15] = a, v[16] = w, v[17] = x) : x = v[17], v[18] !== y || v[19] !== d || v[20] !== u || v[21] !== h || v[22] !== N || v[23] !== g || v[24] !== x || v[25] !== j ? (b = (0, n.jsx)(o.a, {
                className: h,
                color: "secondary",
                variant: "ghost",
                pill: !1,
                size: N,
                iconSize: y,
                uniform: j,
                "aria-label": d,
                ...u,
                onClick: g,
                children: x
            }), v[18] = y, v[19] = d, v[20] = u, v[21] = h, v[22] = N, v[23] = g, v[24] = x, v[25] = j, v[26] = b) : b = v[26], b
        }
    }),
    Ay: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("pw9"),
            l = a("Tjg"),
            s = a("zKC"),
            d = a("VKq"),
            c = a("bf"),
            u = a("owr");

        function m(e) {
            let t, a, l, s, m, f = (0, r.c)(21),
                {
                    action: p,
                    buttonRef: h,
                    kind: g,
                    variant: x
                } = e,
                b = void 0 === x ? "default" : x,
                v = p.icon,
                y = "beacon" === b && "dismiss" === g,
                w = y || null != v && null == p.label;
            "beacon" === b && (t = "primary" === g ? "primary" : w ? "dismiss" : "secondary");
            let j = p.ariaLabel,
                k = "beacon" !== b && (w ? "border-transparent text-codex-description hover:text-default" : "px-3 [@container_(max-width:400px)]:flex-1 [@container_(max-width:400px)]:justify-center");
            f[0] !== k ? (a = (0, o.b)(k), f[0] = k, f[1] = a) : a = f[1];
            let C = "primary" === g ? "primary" : "ghost";
            return f[2] !== y ? (l = y ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(c.bj, {
                    className: u.a.desktopDismiss
                }), (0, n.jsx)("span", {
                    className: u.a.mobileDismiss,
                    "aria-hidden": "true",
                    children: (0, n.jsx)(i.a, {})
                })]
            }) : null, f[2] = y, f[3] = l) : l = f[3], f[4] !== v || f[5] !== y || f[6] !== b ? (s = v && !y ? (0, n.jsx)(v, {
                className: "beacon" === b ? void 0 : "icon-xs"
            }) : null, f[4] = v, f[5] = y, f[6] = b, f[7] = s) : s = f[7], f[8] !== p.ariaLabel || f[9] !== p.disabled || f[10] !== p.label || f[11] !== p.loading || f[12] !== p.onClick || f[13] !== t || f[14] !== h || f[15] !== w || f[16] !== a || f[17] !== C || f[18] !== l || f[19] !== s ? (m = (0, n.jsxs)(d.a, {
                ref: h,
                "aria-label": j,
                className: a,
                appearance: t,
                color: C,
                disabled: p.disabled,
                loading: p.loading,
                onClick: p.onClick,
                size: "composerSm",
                radius: "full",
                uniform: w,
                children: [l, s, p.label]
            }), f[8] = p.ariaLabel, f[9] = p.disabled, f[10] = p.label, f[11] = p.loading, f[12] = p.onClick, f[13] = t, f[14] = h, f[15] = w, f[16] = a, f[17] = C, f[18] = l, f[19] = s, f[20] = m) : m = f[20], m
        }

        function f(e) {
            let t, a, i, d, c, f, p, h, g, x, b, v, y, w, j, k, C = (0, r.c)(59),
                {
                    actionsPlacement: N,
                    attachedToComposer: S,
                    additionalActions: A,
                    badge: M,
                    density: E,
                    description: L,
                    dismissAction: T,
                    leadingVisual: z,
                    primaryAction: I,
                    primaryActionRef: P,
                    secondaryAction: _,
                    title: O,
                    variant: D
                } = e,
                R = void 0 === N ? "aside" : N,
                B = void 0 !== S && S,
                F = void 0 === D ? "default" : D,
                H = "beacon" === F && !B && "aside" === R,
                W = null != A || null != I || null != _ || null != T && "beacon" !== F,
                Q = H ? void 0 : "self-center [@container_(max-width:400px)]:w-full [@container_(max-width:400px)]:self-stretch [@container_(max-width:400px)]:justify-center";
            if (C[0] !== R || C[1] !== A || C[2] !== T || C[3] !== W || C[4] !== I || C[5] !== P || C[6] !== _ || C[7] !== Q || C[8] !== H || C[9] !== F) {
                let e = {
                        aside: Q,
                        body: "mt-3 w-full justify-end",
                        bodyOnNarrow: "justify-start [@container_(max-width:400px)]:mt-3"
                    } [R],
                    r = t => (0, n.jsxs)("div", {
                        className: (0, o.b)(H ? u.a.actions : "flex items-center gap-2", !H && "beacon" === F && "min-w-0 flex-wrap", e, t),
                        children: [_ ? (0, n.jsx)(m, {
                            action: _,
                            kind: "secondary",
                            variant: F
                        }) : null, I ? (0, n.jsx)(m, {
                            action: I,
                            buttonRef: P,
                            kind: "primary",
                            variant: F
                        }) : null, T && "beacon" !== F ? (0, n.jsx)(m, {
                            action: T,
                            kind: "dismiss"
                        }) : null, A]
                    });
                a = W && "body" === R ? r() : null, i = W && "bodyOnNarrow" === R ? r("hidden [@container_(max-width:400px)]:flex") : null, t = W && "aside" === R ? r() : null, d = W && "bodyOnNarrow" === R ? r("[@container_(max-width:400px)]:hidden") : null, C[0] = R, C[1] = A, C[2] = T, C[3] = W, C[4] = I, C[5] = P, C[6] = _, C[7] = Q, C[8] = H, C[9] = F, C[10] = t, C[11] = a, C[12] = i, C[13] = d
            } else t = C[10], a = C[11], i = C[12], d = C[13];
            let K = d,
                U = H ? "beacon" : "default",
                q = "beacon" === F;
            C[14] !== T || C[15] !== F ? (c = "beacon" === F && null != T ? (0, n.jsx)(m, {
                action: T,
                kind: "dismiss",
                variant: "beacon"
            }) : void 0, C[14] = T, C[15] = F, C[16] = c) : c = C[16];
            let G = H ? u.a.body : "flex min-w-0 items-center gap-2 [@container_(max-width:400px)]:items-start",
                $ = H && !z && u.a.noVisual;
            C[17] !== $ || C[18] !== G ? (f = (0, o.b)(G, $), C[17] = $, C[18] = G, C[19] = f) : f = C[19], C[20] !== R || C[21] !== z || C[22] !== H ? (p = z ? (0, n.jsx)("div", {
                className: (0, o.b)(H ? u.a.visual : "flex size-12 shrink-0 items-center justify-center self-center text-secondary", "bodyOnNarrow" === R && "[@container_(max-width:400px)]:self-start"),
                children: z
            }) : null, C[20] = R, C[21] = z, C[22] = H, C[23] = p) : p = C[23];
            let V = H ? u.a.copy : "min-w-0 flex-1";
            C[24] !== H || C[25] !== F ? (h = H ? u.a.title : (0, o.b)("min-w-0 text-default", "beacon" === F ? "text-sm font-bold" : "text-base font-medium"), C[24] = H, C[25] = F, C[26] = h) : h = C[26], C[27] !== h || C[28] !== O ? (g = (0, n.jsx)("div", {
                className: h,
                children: O
            }), C[27] = h, C[28] = O, C[29] = g) : g = C[29], C[30] !== M ? (x = M ? (0, n.jsx)(l.a, {
                variant: "outline",
                children: M
            }) : null, C[30] = M, C[31] = x) : x = C[31], C[32] !== g || C[33] !== x ? (b = (0, n.jsxs)("div", {
                className: "flex flex-wrap items-center gap-2",
                children: [g, x]
            }), C[32] = g, C[33] = x, C[34] = b) : b = C[34], C[35] !== H || C[36] !== F ? (v = H ? u.a.description : (0, o.b)("text-sm text-pretty text-secondary", "beacon" === F ? "leading-5" : "leading-tight"), C[35] = H, C[36] = F, C[37] = v) : v = C[37], C[38] !== L || C[39] !== v ? (y = (0, n.jsx)("div", {
                className: v,
                children: L
            }), C[38] = L, C[39] = v, C[40] = y) : y = C[40], C[41] !== a || C[42] !== i || C[43] !== V || C[44] !== b || C[45] !== y ? (w = (0, n.jsxs)("div", {
                className: V,
                children: [b, y, a, i]
            }), C[41] = a, C[42] = i, C[43] = V, C[44] = b, C[45] = y, C[46] = w) : w = C[46], C[47] !== f || C[48] !== p || C[49] !== w ? (j = (0, n.jsxs)("div", {
                className: f,
                children: [p, w]
            }), C[47] = f, C[48] = p, C[49] = w, C[50] = j) : j = C[50];
            let Z = t ?? K ?? void 0;
            return C[51] !== B || C[52] !== E || C[53] !== j || C[54] !== Z || C[55] !== U || C[56] !== q || C[57] !== c ? (k = (0, n.jsx)(s.a, {
                variant: U,
                attachedToComposer: B,
                density: E,
                stackOnNarrow: !0,
                wrapCtas: q,
                trailingAction: c,
                content: j,
                customCtas: Z
            }), C[51] = B, C[52] = E, C[53] = j, C[54] = Z, C[55] = U, C[56] = q, C[57] = c, C[58] = k) : k = C[58], k
        }
        a.d(t, {
            a: () => f
        })
    }),
    et: (function(e, t, a) {
        a.d(t, {
            a: () => u
        });
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("d3"),
            l = a("Wi"),
            s = a("IS"),
            d = a("aq");
        let c = (0, s.a)(l);

        function u(e) {
            let t, a, l, s, u = (0, r.c)(11),
                {
                    className: m,
                    Icon: f,
                    maskUrl: p
                } = e,
                h = void 0 === f ? i.a : f,
                g = void 0 === p ? c : p;
            u[0] !== m ? (t = (0, o.b)("Root-z2BNO7", m), u[0] = m, u[1] = t) : t = u[1], u[2] !== h ? (a = (0, n.jsx)(h, {
                className: "Base-Z8GMSc"
            }), u[2] = h, u[3] = a) : a = u[3];
            let x = `url(${g})`,
                b = `url(${g})`;
            return u[4] !== x || u[5] !== b ? (l = (0, n.jsx)("div", {
                className: "Overlay-UCNs2a",
                style: {
                    WebkitMaskImage: x,
                    maskImage: b,
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskSize: "contain",
                    maskSize: "contain"
                }
            }), u[4] = x, u[5] = b, u[6] = l) : l = u[6], u[7] !== t || u[8] !== a || u[9] !== l ? (s = (0, n.jsxs)("div", {
                ref: d.a,
                className: t,
                "aria-hidden": "true",
                children: [a, l]
            }), u[7] = t, u[8] = a, u[9] = l, u[10] = s) : s = u[10], s
        }
    }),
    v0: (function(e, t, a) {
        a.d(t, {
            a: () => s
        });
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("zd"),
            l = a("HgL");

        function s(e) {
            let t, a, s, d, c, u, m, f, p, h, g, x = (0, r.c)(35),
                {
                    children: b,
                    className: v,
                    fade: y,
                    fadeClassName: w,
                    peekMenuItems: j,
                    onOverflowChange: k,
                    scrollClassName: C,
                    scrollProps: N
                } = e,
                S = void 0 === y ? "overlay" : y,
                A = void 0 !== j && j,
                M = (0, i.useRef)(null),
                E = (0, i.useRef)(null),
                L = (0, i.useRef)(null);
            x[0] !== k ? (t = e => {
                k?.(e)
            }, x[0] = k, x[1] = t) : t = x[1];
            let T = (0, i.useEffectEvent)(t);
            x[2] !== S || x[3] !== T || x[4] !== A ? (a = () => {
                let e, t = M.current,
                    a = E.current,
                    n = L.current;
                if (null == t || null == a || null == n) return;
                let r = () => {
                        let e = ("overlay" === S ? n : a).scrollHeight > a.clientHeight + 1,
                            r = a.scrollTop + a.clientHeight < a.scrollHeight - 1;
                        T(e), t.dataset.hasOverflow = e ? "true" : "false", t.dataset.canScrollUp = a.scrollTop > 1 ? "true" : "false", t.dataset.canScrollDown = e && r ? "true" : "false"
                    },
                    o = a.style.maxHeight,
                    i = () => {
                        if (A) {
                            let t = a.scrollTop;
                            a.style.maxHeight = o, e = void 0;
                            let r = a.clientHeight;
                            if (a.scrollHeight > r + 1) {
                                let t = a.getBoundingClientRect(),
                                    o = t.height / a.offsetHeight,
                                    i = 0;
                                if (o > 0)
                                    for (let e of n.querySelectorAll('[role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"]')) {
                                        let n = e.getBoundingClientRect(),
                                            l = (n.top - t.top + n.height / 2) / o - a.clientTop + a.scrollTop;
                                        n.height > 0 && l <= r && (i = Math.max(i, l))
                                    }
                                i > 0 && (e = `${i}px`, a.style.maxHeight = e)
                            }
                            a.scrollTop = t
                        }
                        r()
                    };
                i(), a.addEventListener("scroll", r, {
                    passive: !0
                });
                let l = "u" < typeof ResizeObserver ? void 0 : new ResizeObserver(i);
                l?.observe(a), l?.observe(n);
                let s = A ? new MutationObserver(i) : void 0;
                return s?.observe(n, {
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }), A && window.addEventListener("resize", i), () => {
                    a.removeEventListener("scroll", r), l?.disconnect(), s?.disconnect(), window.removeEventListener("resize", i), a.style.maxHeight === e && (a.style.maxHeight = o)
                }
            }, x[2] = S, x[3] = T, x[4] = A, x[5] = a) : a = x[5];
            let z = N?.style?.maxHeight;
            x[6] !== S || x[7] !== A || x[8] !== z ? (s = [S, A, z], x[6] = S, x[7] = A, x[8] = z, x[9] = s) : s = x[9], (0, i.useLayoutEffect)(a, s), x[10] !== v ? (d = (0, o.b)("group", "Root-wrAjJZ", v), x[10] = v, x[11] = d) : d = x[11];
            let I = N?.ref;
            x[12] !== I ? (c = (0, l.a)(E, I), x[12] = I, x[13] = c) : c = x[13];
            let P = "mask" === S && "Mask-QVl1GP",
                _ = N?.className;
            return x[14] !== C || x[15] !== P || x[16] !== _ ? (u = (0, o.b)(P, C, _), x[14] = C, x[15] = P, x[16] = _, x[17] = u) : u = x[17], x[18] !== b ? (m = (0, n.jsx)("div", {
                ref: L,
                children: b
            }), x[18] = b, x[19] = m) : m = x[19], x[20] !== N || x[21] !== u || x[22] !== m || x[23] !== c ? (f = (0, n.jsx)("div", {
                ...N,
                ref: c,
                className: u,
                children: m
            }), x[20] = N, x[21] = u, x[22] = m, x[23] = c, x[24] = f) : f = x[24], x[25] !== S ? (p = "divider" === S && (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)("div", {
                    "aria-hidden": !0,
                    className: "pointer-events-none absolute inset-x-0 top-0 hidden border-t border-subtle group-data-[can-scroll-up=true]:block"
                }), (0, n.jsx)("div", {
                    "aria-hidden": !0,
                    className: "pointer-events-none absolute inset-x-0 bottom-0 hidden border-t border-subtle group-data-[can-scroll-down=true]:block"
                })]
            }), x[25] = S, x[26] = p) : p = x[26], x[27] !== S || x[28] !== w ? (h = "overlay" === S && (0, n.jsx)("div", {
                className: (0, o.b)("pointer-events-none absolute bottom-0 hidden h-10 bg-gradient-to-b from-transparent to-surface-elevated-secondary/90 group-data-[can-scroll-down=true]:block", w)
            }), x[27] = S, x[28] = w, x[29] = h) : h = x[29], x[30] !== f || x[31] !== p || x[32] !== h || x[33] !== d ? (g = (0, n.jsxs)("div", {
                ref: M,
                "data-can-scroll-down": "false",
                "data-can-scroll-up": "false",
                "data-has-overflow": "false",
                className: d,
                children: [f, p, h]
            }), x[30] = f, x[31] = p, x[32] = h, x[33] = d, x[34] = g) : g = x[34], g
        }
    }),
    EG: (function(e, t, a) {
        let n = (0, a("zd").createContext)(void 0);

        function r(e) {
            let t = null,
                a = null,
                n = !1;
            return {
                onOpenAutoFocus(r) {
                    let o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (null == e) return;
                    let i = e.current ?? document.activeElement;
                    e.current = o ? i : void 0, t = i instanceof HTMLElement ? i : null, a = r.target instanceof HTMLElement ? r.target : null, n = !1
                },
                onInteractOutside(e) {
                    e.defaultPrevented || (n = !0)
                },
                onCloseAutoFocus(r) {
                    if (null == e || r.defaultPrevented) return;
                    if (e.current = void 0, !document.hasFocus()) return void r.preventDefault();
                    let o = document.activeElement;
                    o === document.body || o === t || a?.contains(o) ? !n && t?.isConnected && t !== document.body && null == t.closest("[inert]") && (r.preventDefault(), t.focus({
                        preventScroll: !0
                    })) : r.preventDefault()
                }
            }
        }
        a.d(t, {
            b: () => r
        }, {
            a: n
        })
    }),
    gi: (function(e, t, a) {
        let n = (0, a("zd").createContext)(void 0);
        a.d(t, {}, {
            a: n
        })
    }),
    pIb: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("lCw"),
            i = a("on");

        function l(e) {
            let t, a, l, s, d, c, u, m, f = (0, r.c)(16);
            f[0] !== e ? ({
                icon: l,
                children: t,
                squareOnMobile: d,
                className: a,
                ...s
            } = e, f[0] = e, f[1] = t, f[2] = a, f[3] = l, f[4] = s, f[5] = d) : (t = f[1], a = f[2], l = f[3], s = f[4], d = f[5]), l?.[16];
            let p = l?.[20],
                h = d && "browser:max-md:aspect-square browser:max-md:shrink-0 browser:max-md:justify-center browser:max-md:!px-0";
            return f[6] !== a || f[7] !== h ? (c = (0, i.b)(h, a), f[6] = a, f[7] = h, f[8] = c) : c = f[8], f[9] !== p ? (u = null == p ? null : (0, n.jsx)(p, {}), f[9] = p, f[10] = u) : u = f[10], f[11] !== t || f[12] !== s || f[13] !== c || f[14] !== u ? (m = (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(n.Fragment, {
                    children: (0, n.jsxs)(o.a, {
                        ...s,
                        className: c,
                        size: "xl",
                        iconSize: "lg",
                        children: [u, t]
                    })
                }), null]
            }), f[11] = t, f[12] = s, f[13] = c, f[14] = u, f[15] = m) : m = f[15], m
        }
        a.d(t, {
            a: () => l
        })
    }),
    GK7: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on");

        function i(e) {
            let t, a, i, l, s, d, c, u, m, f, p = (0, r.c)(30),
                {
                    actions: h,
                    asset: g,
                    subtitle: x,
                    subtitleClassName: b,
                    title: v,
                    variant: y
                } = e,
                w = void 0 === y ? "default" : y;
            p[0] !== g ? (t = null == g ? null : (0, n.jsx)("div", {
                className: "flex",
                children: g
            }), p[0] = g, p[1] = t) : t = p[1];
            let j = "page" === w ? "flex-nowrap" : "flex-wrap";
            p[2] !== j ? (a = (0, o.b)("flex min-w-0 items-start justify-between gap-4", j), p[2] = j, p[3] = a) : a = p[3];
            let k = "settingsCompact" === w ? "gap-1.25" : "gap-1.5";
            p[4] !== k ? (i = (0, o.b)("flex min-w-0 flex-1 basis-64 flex-col", k), p[4] = k, p[5] = i) : i = p[5];
            let C = "settings" === w && "heading-lg font-normal",
                N = "settingsCompact" === w && "heading-lg font-semibold leading-7",
                S = "page" === w && "heading-lg electron:heading-xl",
                A = "default" === w && "heading-base electron:heading-lg";
            return p[6] !== A || p[7] !== C || p[8] !== N || p[9] !== S ? (l = (0, o.b)("min-w-0 break-words text-default", C, N, S, A), p[6] = A, p[7] = C, p[8] = N, p[9] = S, p[10] = l) : l = p[10], p[11] !== l || p[12] !== v ? (s = (0, n.jsx)("h1", {
                className: l,
                children: v
            }), p[11] = l, p[12] = v, p[13] = s) : s = p[13], p[14] !== x || p[15] !== b ? (d = null == x ? null : (0, n.jsx)("div", {
                className: (0, o.b)("text-base text-secondary", b),
                children: x
            }), p[14] = x, p[15] = b, p[16] = d) : d = p[16], p[17] !== s || p[18] !== d || p[19] !== i ? (c = (0, n.jsxs)("div", {
                className: i,
                children: [s, d]
            }), p[17] = s, p[18] = d, p[19] = i, p[20] = c) : c = p[20], p[21] !== h ? (u = null == h ? null : (0, n.jsx)("div", {
                className: "flex max-w-full shrink-0 items-center gap-2",
                children: h
            }), p[21] = h, p[22] = u) : u = p[22], p[23] !== c || p[24] !== u || p[25] !== a ? (m = (0, n.jsxs)("div", {
                className: a,
                children: [c, u]
            }), p[23] = c, p[24] = u, p[25] = a, p[26] = m) : m = p[26], p[27] !== m || p[28] !== t ? (f = (0, n.jsxs)("header", {
                className: "flex flex-col gap-4 px-[var(--detail-page-inline-inset,0px)]",
                children: [t, m]
            }), p[27] = m, p[28] = t, p[29] = f) : f = p[29], f
        }
        a.d(t, {
            a: () => i
        })
    }),
    okC: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("zd"),
            l = a("Wf"),
            s = a("Gk"),
            d = a("BrX"),
            c = a("bf"),
            u = a("UxN");

        function m(e) {
            let t, a, m, f, p, h, g, x, b, v = (0, r.c)(64),
                {
                    id: y,
                    inputRef: w,
                    className: j,
                    autoFocus: k,
                    clearLabel: C,
                    disabled: N,
                    inputKey: S,
                    inputRole: A,
                    isClearable: M,
                    label: E,
                    maxLength: L,
                    onFocus: T,
                    onKeyDown: z,
                    onSearchQueryChange: I,
                    placeholder: P,
                    readOnly: _,
                    searchQuery: O,
                    trailingControl: D,
                    variant: R
                } = e,
                B = void 0 === M || M,
                F = void 0 === R ? "default" : R,
                H = (0, l.a)(),
                W = (0, i.useRef)(null),
                Q = w ?? W,
                K = "catalog-compact" === F || "toolbar" === F || "toolbar-action" === F || "toolbar-compact" === F || "directory" === F,
                U = ("default" === F || "settings" === F) && "h-page-search gap-2 border border-primary-outline bg-page-search px-2.5",
                q = "default" === F && "rounded-full",
                G = "settings" === F && "rounded-button-toolbar",
                $ = K && "gap-2 border border-primary-outline text-sm leading-5",
                V = K && "catalog-compact" !== F && "rounded-full px-3",
                Z = "catalog-compact" === F && "h-9 rounded-xl px-2",
                X = K && "directory" !== F && "bg-transparent",
                Y = "directory" === F && "h-9 bg-white dark:bg-(--gray-200)",
                J = "toolbar" === F && "h-9",
                ee = "toolbar-action" === F && "h-token-button-composer",
                et = "toolbar-compact" === F && "h-8 browser:h-9",
                ea = "sidebar" === F && "sidebar-item h-[var(--height-token-row)] bg-background-secondary-soft-alpha pe-[var(--padding-row-cell-x,var(--padding-row-x))]",
                en = "sidebar-header" === F && "h-9 shrink-0 gap-2 rounded-full bg-background-secondary-soft-alpha px-3",
                er = "catalog" === F && "h-14 gap-3 rounded-xl border border-primary-outline bg-surface px-5",
                eo = "catalog-filter" === F && "h-12 gap-3 rounded-xl border border-primary-outline bg-surface-secondary px-4",
                ei = "discovery" === F && "h-12.5 gap-2 rounded-full border border-primary-outline bg-surface-card px-3 text-sm leading-5";
            v[0] !== j || v[1] !== Y || v[2] !== J || v[3] !== ee || v[4] !== et || v[5] !== ea || v[6] !== en || v[7] !== er || v[8] !== eo || v[9] !== ei || v[10] !== U || v[11] !== q || v[12] !== G || v[13] !== $ || v[14] !== V || v[15] !== Z || v[16] !== X ? (t = (0, o.b)("no-drag flex items-center py-0 text-base leading-[18px]", U, q, G, $, V, Z, X, Y, J, ee, et, ea, en, er, eo, ei, j), v[0] = j, v[1] = Y, v[2] = J, v[3] = ee, v[4] = et, v[5] = ea, v[6] = en, v[7] = er, v[8] = eo, v[9] = ei, v[10] = U, v[11] = q, v[12] = G, v[13] = $, v[14] = V, v[15] = Z, v[16] = X, v[17] = t) : t = v[17];
            let el = "sidebar-header" === F || void 0;
            v[18] !== K || v[19] !== F ? (a = "sidebar" === F ? (0, n.jsx)(d.a, {
                icon: (0, n.jsx)(s.a, {
                    className: "icon-sm text-secondary"
                })
            }) : (0, n.jsxs)("span", {
                className: "flex shrink-0 items-center justify-center",
                children: [K && (0, n.jsx)(u.b, {
                    icon: {
                        16: c.Ke,
                        20: c.Le
                    },
                    className: "text-secondary"
                }), "discovery" === F && (0, n.jsx)(c.Le, {}), !K && "discovery" !== F && ("sidebar-header" === F ? (0, n.jsx)(c.Ke, {
                    className: "text-secondary"
                }) : (0, n.jsx)(s.a, {
                    className: "icon-sm text-secondary"
                }))]
            }), v[18] = K, v[19] = F, v[20] = a) : a = v[20], v[21] !== y || v[22] !== E ? (m = (0, n.jsx)("label", {
                className: "sr-only",
                htmlFor: y,
                children: E
            }), v[21] = y, v[22] = E, v[23] = m) : m = v[23];
            let es = "discovery" === F ? "placeholder:text-default" : "placeholder:text-tertiary",
                ed = K || "discovery" === F ? "text-sm leading-5" : "text-base leading-[18px]",
                ec = "discovery" === F && "tracking-[-0.15px] max-md:text-base";
            return v[24] !== es || v[25] !== ed || v[26] !== ec ? (f = (0, o.b)("min-w-0 flex-1 bg-transparent text-default outline-none select-text [&::placeholder]:select-none", es, ed, ec), v[24] = es, v[25] = ed, v[26] = ec, v[27] = f) : f = v[27], v[28] !== I ? (p = e => {
                I(e.target.value)
            }, v[28] = I, v[29] = p) : p = v[29], v[30] !== k || v[31] !== N || v[32] !== y || v[33] !== S || v[34] !== A || v[35] !== L || v[36] !== T || v[37] !== z || v[38] !== P || v[39] !== _ || v[40] !== Q || v[41] !== O || v[42] !== f || v[43] !== p ? (h = (0, n.jsx)("input", {
                autoFocus: k,
                id: y,
                ref: Q,
                className: f,
                autoComplete: "off",
                disabled: N,
                maxLength: L,
                readOnly: _,
                role: A,
                type: "text",
                value: O,
                onChange: p,
                onFocus: T,
                onKeyDown: z,
                placeholder: P
            }, S), v[30] = k, v[31] = N, v[32] = y, v[33] = S, v[34] = A, v[35] = L, v[36] = T, v[37] = z, v[38] = P, v[39] = _, v[40] = Q, v[41] = O, v[42] = f, v[43] = p, v[44] = h) : h = v[44], v[45] !== C || v[46] !== N || v[47] !== H || v[48] !== B || v[49] !== I || v[50] !== Q || v[51] !== O || v[52] !== F ? (g = B && O.length > 0 ? (0, n.jsx)("button", {
                disabled: N,
                "aria-label": C ?? H.formatMessage({
                    id: "skills.pageSearchInput.clear",
                    defaultMessage: "Clear search",
                    description: "Accessible label for clearing a search field"
                }),
                className: (0, o.b)("flex shrink-0 cursor-interaction items-center justify-center text-secondary hover:text-default", "sidebar" === F && "size-6"),
                type: "button",
                onClick: () => {
                    Q.current?.focus(), I("")
                },
                children: (0, n.jsx)(c.Zi, {})
            }) : null, v[45] = C, v[46] = N, v[47] = H, v[48] = B, v[49] = I, v[50] = Q, v[51] = O, v[52] = F, v[53] = g) : g = v[53], v[54] !== D ? (x = null == D ? null : (0, n.jsx)("div", {
                className: "flex shrink-0 items-center",
                children: D
            }), v[54] = D, v[55] = x) : x = v[55], v[56] !== t || v[57] !== el || v[58] !== a || v[59] !== m || v[60] !== h || v[61] !== g || v[62] !== x ? (b = (0, n.jsxs)("div", {
                className: t,
                "data-sidebar-header-search": el,
                children: [a, m, h, g, x]
            }), v[56] = t, v[57] = el, v[58] = a, v[59] = m, v[60] = h, v[61] = g, v[62] = x, v[63] = b) : b = v[63], b
        }
        a.d(t, {
            a: () => m
        })
    }),
    nzx: (function(e, t, a) {
        a.d(t, {
            a: () => h,
            b: () => g,
            c: () => b,
            d: () => v,
            e: () => x
        });
        var n = a("A"),
            r = a("Qo"),
            o = a("YLK"),
            i = a("on"),
            l = a("zd"),
            s = a("wD9"),
            d = a("HgL"),
            c = a("i7"),
            u = a("Lh"),
            m = a("EG"),
            f = a("gi");
        let p = {
            anchor: "w-[var(--radix-popover-trigger-width)]",
            content: "w-fit",
            default: "w-72",
            extraLarge: "w-[408px]",
            large: "w-96",
            menuWide: "w-60",
            railMenu: (0, u.d)("railMenu"),
            workspace: "w-65"
        };

        function h(e) {
            let t, a, i, s, d, c, u, m, p = (0, r.c)(16);
            p[0] !== e ? ({
                open: t,
                defaultOpen: s,
                onOpenChange: a,
                ...i
            } = e, p[0] = e, p[1] = t, p[2] = a, p[3] = i, p[4] = s) : (t = p[1], a = p[2], i = p[3], s = p[4]);
            let h = void 0 !== s && s,
                [g, x] = (0, l.useState)(h),
                b = t ?? g,
                v = (0, l.useContext)(f.a)?.registerOpen;
            return p[5] !== b || p[6] !== v ? (d = () => {
                if (b) return v?.()
            }, c = [b, v], p[5] = b, p[6] = v, p[7] = d, p[8] = c) : (d = p[7], c = p[8]), (0, l.useLayoutEffect)(d, c), p[9] !== t || p[10] !== a ? (u = e => {
                void 0 === t && x(e), a?.(e)
            }, p[9] = t, p[10] = a, p[11] = u) : u = p[11], p[12] !== b || p[13] !== i || p[14] !== u ? (m = (0, n.jsx)(o.f, {
                "data-slot": "popover",
                ...i,
                open: b,
                onOpenChange: u
            }), p[12] = b, p[13] = i, p[14] = u, p[15] = m) : m = p[15], m
        }

        function g(e) {
            let t, a = (0, r.c)(2);
            return a[0] !== e ? (t = (0, n.jsx)(o.a, {
                "data-slot": "popover-anchor",
                ...e
            }), a[0] = e, a[1] = t) : t = a[1], t
        }

        function x(e) {
            let t, a = (0, r.c)(2);
            return a[0] !== e ? (t = (0, n.jsx)(o.g, {
                "data-slot": "popover-trigger",
                ...e
            }), a[0] = e, a[1] = t) : t = a[1], t
        }

        function b(e) {
            let t, a, c, h, g, x, b, v, w, j, k, C, N, S, A, M, E, L, T, z, I, P, _, O, D, R, B, F, H = (0, r.c)(71);
            H[0] !== e ? ({
                ref: g,
                className: a,
                align: v,
                side: w,
                sideOffset: x,
                size: j,
                style: b,
                contentOverflow: k,
                disablePadding: C,
                disablePortal: N,
                animation: t,
                opaque: S,
                portalContainer: c,
                unstyled: A,
                variant: M,
                ...h
            } = e, H[0] = e, H[1] = t, H[2] = a, H[3] = c, H[4] = h, H[5] = g, H[6] = x, H[7] = b, H[8] = v, H[9] = w, H[10] = j, H[11] = k, H[12] = C, H[13] = N, H[14] = S, H[15] = A, H[16] = M) : (t = H[1], a = H[2], c = H[3], h = H[4], g = H[5], x = H[6], b = H[7], v = H[8], w = H[9], j = H[10], k = H[11], C = H[12], N = H[13], S = H[14], A = H[15], M = H[16]);
            let W = void 0 === v ? "start" : v,
                Q = void 0 === w ? "bottom" : w,
                K = void 0 === j ? "default" : j,
                U = void 0 === k ? "auto" : k,
                q = void 0 !== C && C,
                G = void 0 !== N && N,
                $ = void 0 === S || S,
                V = void 0 !== A && A,
                Z = void 0 === M ? "default" : M,
                X = (0, s.c)(),
                [Y, J] = (0, l.useState)(null),
                [ee, et] = (0, l.useState)(0);
            H[17] !== g ? (E = (0, d.a)(g, J), H[17] = g, H[18] = E) : E = H[18];
            let ea = E;
            H[19] !== Y || H[20] !== Q || H[21] !== x ? (L = () => {
                if (null == Y || null != x) return;
                let e = Y.ownerDocument.querySelector(`[aria-controls="${CSS.escape(Y.id)}"]`);
                return (0, u.f)(e, Q, et)
            }, H[19] = Y, H[20] = Q, H[21] = x, H[22] = L) : L = H[22], H[23] !== Y || H[24] !== Q || H[25] !== x || H[26] !== X ? (T = [Y, Q, x, X], H[23] = Y, H[24] = Q, H[25] = x, H[26] = X, H[27] = T) : T = H[27], (0, l.useLayoutEffect)(L, T);
            let en = (0, l.useContext)(f.a),
                er = (0, l.useContext)(m.a);
            H[28] !== er ? (z = () => (0, m.b)(er), H[28] = er, H[29] = z) : z = H[29];
            let [eo] = (0, l.useState)(z), ei = en?.id, el = x ?? 5 + ee, es = "slide-from-left" === t && "slide-from-left-DOQxt5";
            H[30] !== a || H[31] !== U || H[32] !== q || H[33] !== $ || H[34] !== K || H[35] !== es || H[36] !== V || H[37] !== Z ? (I = (0, i.b)(es, !V && ["text-default z-50 flex origin-[var(--radix-popover-content-transform-origin)] flex-col outline-hidden", "auto" === U ? "overflow-y-auto" : "overflow-visible", "menu" === Z ? [(0, u.c)("opaque"), !q && "p-2"] : ["comment" === Z ? "ring-border-subtle rounded-2xl shadow-lg-stronger ring-1" : "ring-(--color-border-overlay) rounded-xl shadow-(--shadow-popover-overlay) ring-(length:--popover-overlay-ring-width)", !q && "px-1 py-1", $ ? "bg-surface-elevated-secondary" : "bg-surface-elevated-secondary/90"], p[K]], a), H[30] = a, H[31] = U, H[32] = q, H[33] = $, H[34] = K, H[35] = es, H[36] = V, H[37] = Z, H[38] = I) : I = H[38];
            let ed = null == c && 1 !== X ? X : void 0,
                ec = `min(calc(var(--radix-popover-content-available-width) / ${X}), calc((100vw - 16px) / ${X}))`,
                eu = `min(${"railMenu"===K?"var(--app-menu-rail-max-height), ":""}calc(var(--radix-popover-content-available-height) / ${X}), calc((100vh - 16px) / ${X}))`;
            H[39] !== b || H[40] !== ed || H[41] !== ec || H[42] !== eu ? (P = {
                zoom: ed,
                maxWidth: ec,
                maxHeight: eu,
                ...b
            }, H[39] = b, H[40] = ed, H[41] = ec, H[42] = eu, H[43] = P) : P = H[43], H[44] !== eo || H[45] !== h ? (_ = e => {
                eo.onOpenAutoFocus(e), h.onOpenAutoFocus?.(e)
            }, O = e => {
                h.onInteractOutside?.(e), eo.onInteractOutside(e)
            }, D = e => {
                h.onCloseAutoFocus?.(e), eo.onCloseAutoFocus(e)
            }, H[44] = eo, H[45] = h, H[46] = _, H[47] = O, H[48] = D) : (_ = H[46], O = H[47], D = H[48]), H[49] !== W || H[50] !== ea || H[51] !== h || H[52] !== Q || H[53] !== ei || H[54] !== el || H[55] !== I || H[56] !== P || H[57] !== _ || H[58] !== O || H[59] !== D ? (R = (0, n.jsx)(o.d, {
                ref: ea,
                "data-overlay-owner": ei,
                "data-slot": "popover-content",
                align: W,
                collisionPadding: 6,
                side: Q,
                sideOffset: el,
                className: I,
                style: P,
                ...h,
                onOpenAutoFocus: _,
                onInteractOutside: O,
                onCloseAutoFocus: D
            }), H[49] = W, H[50] = ea, H[51] = h, H[52] = Q, H[53] = ei, H[54] = el, H[55] = I, H[56] = P, H[57] = _, H[58] = O, H[59] = D, H[60] = R) : R = H[60];
            let em = R;
            if (G) return em;
            if (null != c) {
                let e;
                return H[61] !== em || H[62] !== c || H[63] !== h.forceMount ? (e = (0, n.jsx)(o.e, {
                    container: c,
                    forceMount: h.forceMount,
                    children: em
                }), H[61] = em, H[62] = c, H[63] = h.forceMount, H[64] = e) : e = H[64], e
            }
            return H[65] !== em || H[66] !== ea ? (B = (0, n.jsx)(y, {
                ref: ea,
                content: em
            }), H[65] = em, H[66] = ea, H[67] = B) : B = H[67], H[68] !== h.forceMount || H[69] !== B ? (F = (0, n.jsx)(o.e, {
                forceMount: h.forceMount,
                children: B
            }), H[68] = h.forceMount, H[69] = B, H[70] = F) : F = H[70], F
        }

        function v(e) {
            let t, a, o, l, s = (0, r.c)(8);
            return s[0] !== e ? ({
                className: t,
                ...a
            } = e, s[0] = e, s[1] = t, s[2] = a) : (t = s[1], a = s[2]), s[3] !== t ? (o = (0, i.b)("font-medium", t), s[3] = t, s[4] = o) : o = s[4], s[5] !== a || s[6] !== o ? (l = (0, n.jsx)("div", {
                "data-slot": "popover-title",
                className: o,
                ...a
            }), s[5] = a, s[6] = o, s[7] = l) : l = s[7], l
        }

        function y(e) {
            let t, a, o = (0, r.c)(5),
                {
                    ref: i,
                    content: s
                } = e;
            return o[0] !== s || o[1] !== i ? (t = (0, l.cloneElement)(s, {
                ref: i
            }), o[0] = s, o[1] = i, o[2] = t) : t = o[2], o[3] !== t ? (a = (0, n.jsx)(c.a, {
                container: document.body,
                children: t
            }), o[3] = t, o[4] = a) : a = o[4], a
        }
    }),
    Kc: (function(e, t, a) {
        a.d(t, {
            a: () => i
        });
        var n = a("A"),
            r = a("Qo"),
            o = a("on");

        function i(e) {
            let t, a, i, l, s, d, c = (0, r.c)(29),
                {
                    className: u,
                    progressClassName: m,
                    animateOnMount: f,
                    animateOnMountDelayMs: p,
                    percent: h,
                    reducedMotion: g,
                    size: x,
                    strokeWidth: b,
                    transitionDurationMs: v
                } = e,
                y = void 0 !== f && f,
                w = void 0 !== g && g,
                j = void 0 === x ? 12 : x,
                k = void 0 === b ? 2 : b,
                C = void 0 === v ? 120 : v,
                N = (j - k) / 2,
                S = !Number.isFinite(h) || h < 0 ? 0 : h > 100 ? 100 : h,
                A = 100 - S,
                M = `0 0 ${j} ${j}`;
            c[0] !== u ? (t = (0, o.b)("shrink-0", u), c[0] = u, c[1] = t) : t = c[1];
            let E = j / 2,
                L = j / 2;
            c[2] !== N || c[3] !== k || c[4] !== L || c[5] !== E ? (a = (0, n.jsx)("circle", {
                cx: E,
                cy: L,
                r: N,
                stroke: "currentColor",
                strokeWidth: k,
                fill: "none",
                opacity: .16
            }), c[2] = N, c[3] = k, c[4] = L, c[5] = E, c[6] = a) : a = c[6];
            let T = j / 2,
                z = j / 2,
                I = +(0 !== S),
                P = y && !w && "fillOnMount-QGDQQ4";
            c[7] !== m || c[8] !== P ? (i = (0, o.b)(m, P), c[7] = m, c[8] = P, c[9] = i) : i = c[9];
            let _ = y && !w ? `${void 0===p?0:p}ms` : void 0,
                O = w ? "none" : `stroke-dashoffset ${C}ms ease-out, opacity ${C}ms ease-out`;
            c[10] !== _ || c[11] !== O ? (l = {
                animationDelay: _,
                transition: O
            }, c[10] = _, c[11] = O, c[12] = l) : l = c[12];
            let D = `rotate(-90 ${j/2} ${j/2})`;
            return c[13] !== A || c[14] !== N || c[15] !== k || c[16] !== T || c[17] !== z || c[18] !== I || c[19] !== i || c[20] !== l || c[21] !== D ? (s = (0, n.jsx)("circle", {
                cx: T,
                cy: z,
                r: N,
                stroke: "currentColor",
                strokeWidth: k,
                opacity: I,
                strokeLinecap: "round",
                fill: "none",
                pathLength: 100,
                strokeDasharray: 100,
                strokeDashoffset: A,
                className: i,
                style: l,
                transform: D
            }), c[13] = A, c[14] = N, c[15] = k, c[16] = T, c[17] = z, c[18] = I, c[19] = i, c[20] = l, c[21] = D, c[22] = s) : s = c[22], c[23] !== j || c[24] !== a || c[25] !== s || c[26] !== M || c[27] !== t ? (d = (0, n.jsxs)("svg", {
                "aria-hidden": "true",
                width: j,
                height: j,
                viewBox: M,
                className: t,
                children: [a, s]
            }), c[23] = j, c[24] = a, c[25] = s, c[26] = M, c[27] = t, c[28] = d) : d = c[28], d
        }
    }),
    mT2: (function(e, t, a) {
        let n = (0, a("zd").createContext)("default");
        a.d(t, {}, {
            a: n
        })
    }),
    wqf: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("zd"),
            l = a("ygO"),
            s = a("bq"),
            d = a("PA"),
            c = a("Ot7"),
            u = a("HOL"),
            m = a("bf"),
            f = a("mT2"),
            p = a("owr"),
            h = a("hrci"),
            g = a("cm");

        function x(e) {
            let t, a, x, y, w, j, k, C, N, S = (0, r.c)(50);
            S[0] !== e ? ({
                kind: y,
                children: t,
                color: w,
                className: a,
                ...x
            } = e, S[0] = e, S[1] = t, S[2] = a, S[3] = x, S[4] = y, S[5] = w) : (t = S[1], a = S[2], x = S[3], y = S[4], w = S[5]);
            let A = void 0 === y ? "action" : y,
                M = void 0 === w ? "primary" : w,
                E = (0, i.useContext)(f.a),
                L = M,
                T = "default",
                z = "default";
            "eyebrow" === E ? (L = "action" === A ? "outlineGhost" : "upgradeAccent", T = "dialog", z = "full") : "recovery" === E ? (L = "action" === A ? "outlineGhost" : "upgrade", T = "recoveryAction", z = "full") : "inline" === E ? (L = "primary" === M ? "accentSubtle" : "ghost", T = "dialog", z = "full") : "imageGenTombstone" === E ? (L = "cardAction", T = "detailAction", z = "full") : "menu" === E && (L = "action" === A ? M : "upgrade", T = "recoveryAction", z = "full");
            let I = null;
            if ("default" !== E && "action" !== A)
                if ("imageGenTombstone" === E || "upgrade-offer" !== A) {
                    let e;
                    S[6] !== E ? (e = "eyebrow" === E ? (0, n.jsx)(u.a, {
                        className: "shrink-0",
                        asset: g.a
                    }) : (0, n.jsx)(m.vh, {}), S[6] = E, S[7] = e) : e = S[7], I = e
                } else {
                    let e;
                    S[8] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(u.a, {
                        className: "shrink-0",
                        asset: h.a
                    }), S[8] = e) : e = S[8], I = e
                } S[9] !== t || S[10] !== I ? (j = (0, n.jsxs)(n.Fragment, {
                children: [I, t]
            }), S[9] = t, S[10] = I, S[11] = j) : j = S[11];
            let P = j;
            if ("href" in x) {
                let e, r, i, u, m;
                if ("default" === E) {
                    let e;
                    return S[12] !== t || S[13] !== x.href ? (e = (0, n.jsx)(d.a, {
                        href: x.href,
                        initiator: "open_in_browser_bridge",
                        children: t
                    }), S[12] = t, S[13] = x.href, S[14] = e) : e = S[14], e
                }
                S[15] !== x.href ? (e = e => {
                    (0, c.e)({
                        event: e,
                        href: x.href,
                        initiator: "open_in_browser_bridge"
                    })
                }, S[15] = x.href, S[16] = e) : e = S[16];
                let f = e,
                    h = "eyebrow" === E && p.a.action,
                    g = "imageGenTombstone" === E && "w-full gap-1.5 border-0 text-[15px] text-info-ghost";
                S[17] !== a || S[18] !== h || S[19] !== g ? (r = (0, o.b)(a, h, g), S[17] = a, S[18] = h, S[19] = g, S[20] = r) : r = S[20], S[21] !== f ? (i = e => {
                    1 === e.button && f(e)
                }, S[21] = f, S[22] = i) : i = S[22], S[23] !== L || S[24] !== P || S[25] !== f || S[26] !== x || S[27] !== z || S[28] !== T || S[29] !== r || S[30] !== i ? (u = (0, n.jsx)(l.b, {
                    ...x,
                    className: r,
                    color: L,
                    size: T,
                    radius: z,
                    onClick: f,
                    onAuxClick: i,
                    rel: "noopener noreferrer",
                    target: "_blank",
                    children: P
                }), S[23] = L, S[24] = P, S[25] = f, S[26] = x, S[27] = z, S[28] = T, S[29] = r, S[30] = i, S[31] = u) : u = S[31];
                let b = u;
                return S[32] !== b || S[33] !== E ? (m = "menu" === E ? (0, n.jsx)(s.c.ItemSlot, {
                    asChild: !0,
                    onSelect: v,
                    children: b
                }) : b, S[32] = b, S[33] = E, S[34] = m) : m = S[34], m
            }
            let _ = "eyebrow" === E && p.a.action,
                O = "imageGenTombstone" === E && "w-full gap-1.5 border-0 text-[15px] text-info-ghost";
            S[35] !== a || S[36] !== _ || S[37] !== O ? (k = (0, o.b)(a, _, O), S[35] = a, S[36] = _, S[37] = O, S[38] = k) : k = S[38], S[39] !== L || S[40] !== P || S[41] !== x || S[42] !== z || S[43] !== T || S[44] !== k ? (C = (0, n.jsx)(l.a, {
                ...x,
                className: k,
                color: L,
                size: T,
                radius: z,
                children: P
            }), S[39] = L, S[40] = P, S[41] = x, S[42] = z, S[43] = T, S[44] = k, S[45] = C) : C = S[45];
            let D = C;
            return S[46] !== D || S[47] !== E || S[48] !== x ? (N = "menu" === E ? (0, n.jsx)(s.c.ItemSlot, {
                asChild: !0,
                disabled: x.disabled,
                onSelect: b,
                children: D
            }) : D, S[46] = D, S[47] = E, S[48] = x, S[49] = N) : N = S[49], N
        }

        function b(e) {
            return e.preventDefault()
        }

        function v(e) {
            return e.preventDefault()
        }
        a.d(t, {
            a: () => x
        })
    }),
    VL: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("ygO"),
            l = a("PA"),
            s = a("UxN"),
            d = a("Pjl"),
            c = a("TN");
        let u = "flex h-token-button-composer shrink-0 items-center gap-1 overflow-hidden rounded-lg border border-default bg-transparent px-2 py-0 text-base leading-[18px] whitespace-nowrap",
            m = {
                default: "px-[var(--resource-card-row-padding-x)] py-3",
                compact: "p-1.5"
            },
            f = {
                default: "py-3 pe-10 ps-[var(--resource-card-row-padding-x)]",
                compact: "py-1.5 pe-6 ps-1.5"
            };

        function p(e) {
            let t, a, i = (0, r.c)(18),
                {
                    className: l,
                    as: s,
                    children: d,
                    variant: c
                } = e,
                u = void 0 === c ? "default" : c,
                m = "composer-attachment" === u || "thread-attachment" === u,
                f = "artifact-list" === u && "rounded-2xl border border-default bg-surface-elevated [--resource-card-row-padding-x:1rem]",
                p = "file-tile" === u && "w-50 shrink-0 rounded-2xl bg-surface-elevated ring-1 ring-border ring-inset md:w-80",
                h = "artifact-list" !== u && "file-tile" !== u && "electron:elevation-stroke extension:border extension:border-default extension:bg-background-primary-soft/50 extension:shadow-sm",
                g = "artifact-list" !== u && "file-tile" !== u && !m && "bg-surface-elevated-secondary/50",
                x = m && "composer-attachment-surface group/resource-card relative max-w-64 flex-shrink-0 bg-primary-soft",
                b = "composer-attachment" === u && "w-fit rounded-lg",
                v = "thread-attachment" === u && "w-50 rounded-2xl",
                y = "default" === u && "rounded-lg",
                w = "attachment" === u && "rounded-2xl",
                j = "link-preview" === u && "w-90 rounded-2xl";
            i[0] !== l || i[1] !== y || i[2] !== w || i[3] !== j || i[4] !== f || i[5] !== p || i[6] !== h || i[7] !== g || i[8] !== x || i[9] !== b || i[10] !== v ? (t = (0, o.a)("flex max-w-[min(100%,var(--resource-card-max-width,100%))] flex-col overflow-hidden font-sans text-default [--resource-card-row-padding-x:0.75rem]", f, p, h, g, x, b, v, y, w, j, l), i[0] = l, i[1] = y, i[2] = w, i[3] = j, i[4] = f, i[5] = p, i[6] = h, i[7] = g, i[8] = x, i[9] = b, i[10] = v, i[11] = t) : t = i[11];
            let k = t;
            if ("span" === (void 0 === s ? "div" : s)) {
                let e;
                return i[12] !== d || i[13] !== k ? (e = (0, n.jsx)("span", {
                    className: k,
                    children: d
                }), i[12] = d, i[13] = k, i[14] = e) : e = i[14], e
            }
            return i[15] !== d || i[16] !== k ? (a = (0, n.jsx)("div", {
                className: k,
                children: d
            }), i[15] = d, i[16] = k, i[17] = a) : a = i[17], a
        }

        function h(e) {
            let t, a, i, s, d = (0, r.c)(12);
            d[0] !== e ? ({
                className: t,
                ...a
            } = e, d[0] = e, d[1] = t, d[2] = a) : (t = d[1], a = d[2]);
            let c = null == a.children ? "absolute inset-0" : "relative w-full";
            d[3] !== t || d[4] !== c ? (i = (0, o.a)("peer/resource-card cursor-interaction rounded-[inherit] bg-transparent group-hover/resource-card:bg-background-primary-ghost-hover/30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset", c, t), d[3] = t, d[4] = c, d[5] = i) : i = d[5];
            let u = i;
            if ("href" in a) {
                let e;
                return d[6] !== u || d[7] !== a ? (e = (0, n.jsx)(l.a, {
                    ...a,
                    className: u
                }), d[6] = u, d[7] = a, d[8] = e) : e = d[8], e
            }
            return d[9] !== u || d[10] !== a ? (s = (0, n.jsx)("button", {
                ...a,
                type: "button",
                className: u
            }), d[9] = u, d[10] = a, d[11] = s) : s = d[11], s
        }

        function g(e) {
            let t, a, i = (0, r.c)(5),
                {
                    children: l,
                    className: s
                } = e;
            return i[0] !== s ? (t = (0, o.a)("flex size-10 shrink-0 items-center justify-center rounded-lg bg-surface-secondary/92 text-secondary", s), i[0] = s, i[1] = t) : t = i[1], i[2] !== l || i[3] !== t ? (a = (0, n.jsx)("span", {
                className: t,
                children: l
            }), i[2] = l, i[3] = t, i[4] = a) : a = i[4], a
        }

        function x(e) {
            let t, a = (0, r.c)(2),
                {
                    src: o
                } = e;
            return a[0] !== o ? (t = (0, n.jsx)("img", {
                className: "h-12 w-20 shrink-0 rounded-lg object-cover",
                src: o,
                alt: ""
            }), a[0] = o, a[1] = t) : t = a[1], t
        }

        function b(e) {
            let t, a, i, l, s, d, c, u = (0, r.c)(34),
                {
                    className: p,
                    icon: h,
                    padding: g,
                    reserveTrailingSpace: x,
                    subtitle: b,
                    title: v,
                    titleTooltip: y,
                    trailing: w,
                    variant: j
                } = e,
                k = void 0 !== x && x,
                C = void 0 === j ? "default" : j,
                N = "artifact-list" === C,
                S = "file-tile" === C,
                A = "attachment" === C,
                M = "link-preview" === C,
                E = A || M ? "compact" : void 0 === g ? "default" : g,
                L = N && null != w,
                T = (A || M) && "pointer-events-none relative z-10 h-full",
                z = N && "relative gap-3",
                I = S && "gap-2",
                P = !N && !S && "gap-2.5",
                _ = S && "p-2.5",
                O = !k && !L && !S && m[E],
                D = k && !N && f[E],
                R = N && (k || L) && "py-3 pe-14 ps-[var(--resource-card-row-padding-x)]";
            u[0] !== p || u[1] !== D || u[2] !== R || u[3] !== T || u[4] !== z || u[5] !== I || u[6] !== P || u[7] !== _ || u[8] !== O ? (t = (0, o.a)("flex min-w-0 items-center text-start", T, z, I, P, _, O, D, R, p), u[0] = p, u[1] = D, u[2] = R, u[3] = T, u[4] = z, u[5] = I, u[6] = P, u[7] = _, u[8] = O, u[9] = t) : t = u[9];
            let B = A && (k ? "max-w-36" : "max-w-32"),
                F = S && "text-sm font-semibold",
                H = N && "text-sm font-medium",
                W = !S && !N && "text-size-chat font-medium";
            return u[10] !== B || u[11] !== F || u[12] !== H || u[13] !== W ? (a = (0, o.a)("truncate text-default", B, F, H, W), u[10] = B, u[11] = F, u[12] = H, u[13] = W, u[14] = a) : a = u[14], u[15] !== a || u[16] !== v || u[17] !== y ? (i = (0, n.jsx)("span", {
                className: a,
                title: y,
                children: v
            }), u[15] = a, u[16] = v, u[17] = y, u[18] = i) : i = u[18], u[19] !== N || u[20] !== S || u[21] !== b ? (l = null != b ? (0, n.jsx)("span", {
                className: (0, o.a)("truncate text-secondary", S && "text-sm", N && "text-xs", !S && !N && "text-size-chat-sm"),
                children: b
            }) : null, u[19] = N, u[20] = S, u[21] = b, u[22] = l) : l = u[22], u[23] !== i || u[24] !== l ? (s = (0, n.jsxs)("span", {
                className: "flex min-w-0 flex-1 flex-col",
                children: [i, l]
            }), u[23] = i, u[24] = l, u[25] = s) : s = u[25], u[26] !== L || u[27] !== w ? (d = L ? (0, n.jsx)("span", {
                className: "absolute end-3 top-1/2 -translate-y-1/2",
                children: w
            }) : w, u[26] = L, u[27] = w, u[28] = d) : d = u[28], u[29] !== h || u[30] !== t || u[31] !== s || u[32] !== d ? (c = (0, n.jsxs)("span", {
                className: t,
                children: [h, s, d]
            }), u[29] = h, u[30] = t, u[31] = s, u[32] = d, u[33] = c) : c = u[33], c
        }

        function v(e) {
            let t, a, l, s, d = (0, r.c)(7);
            return d[0] !== e ? ({
                children: t,
                ...a
            } = e, d[0] = e, d[1] = t, d[2] = a) : (t = d[1], a = d[2]), d[3] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, o.a)(u, "not-disabled:not-aria-disabled:hover:bg-primary-ghost-hover"), d[3] = l) : l = d[3], d[4] !== t || d[5] !== a ? (s = (0, n.jsx)(i.a, {
                ...a,
                className: l,
                unstyled: !0,
                children: t
            }), d[4] = t, d[5] = a, d[6] = s) : s = d[6], s
        }

        function y(e) {
            let t, a, i, l = (0, r.c)(6),
                {
                    label: m,
                    showChevron: f
                } = e,
                p = void 0 !== f && f;
            return l[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.a)(u, "hover:bg-primary-ghost-hover"), l[0] = t) : t = l[0], l[1] !== p ? (a = p ? (0, n.jsx)(s.a, {
                className: "opacity-50",
                "aria-hidden": !1,
                legacyIcon: d.a,
                asset16: c.a,
                legacyClassName: "icon-2xs"
            }) : null, l[1] = p, l[2] = a) : a = l[2], l[3] !== m || l[4] !== a ? (i = (0, n.jsxs)("span", {
                className: t,
                children: [m, a]
            }), l[3] = m, l[4] = a, l[5] = i) : i = l[5], i
        }

        function w(e) {
            let t, a, i, l, s = (0, r.c)(14),
                {
                    ariaControls: c,
                    children: u,
                    isExpanded: m,
                    onClick: f,
                    variant: p
                } = e,
                h = void 0 === p ? "default" : p,
                g = m && "rotate-180";
            s[0] !== g ? (t = (0, o.a)("icon-xs", g), s[0] = g, s[1] = t) : t = s[1], s[2] !== t ? (a = (0, n.jsx)(d.a, {
                className: t
            }), s[2] = t, s[3] = a) : a = s[3];
            let x = a,
                b = "artifact-list" === h ? "h-12 justify-start gap-3 border-t border-subtle px-4 text-start text-sm text-default hover:bg-background-primary-ghost-hover focus-visible:ring-1" : "h-10 justify-center gap-1 text-size-chat text-tertiary hover:bg-background-primary-ghost-hover/30 focus-visible:ring-2";
            s[4] !== b ? (i = (0, o.a)("flex cursor-interaction items-center focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset", b), s[4] = b, s[5] = i) : i = s[5];
            let v = "artifact-list" === h ? x : null,
                y = "default" === h ? x : null;
            return s[6] !== c || s[7] !== u || s[8] !== m || s[9] !== f || s[10] !== i || s[11] !== v || s[12] !== y ? (l = (0, n.jsxs)("button", {
                type: "button",
                "aria-controls": c,
                "aria-expanded": m,
                className: i,
                onClick: f,
                children: [v, u, y]
            }), s[6] = c, s[7] = u, s[8] = m, s[9] = f, s[10] = i, s[11] = v, s[12] = y, s[13] = l) : l = s[13], l
        }
        a.d(t, {
            a: () => p,
            b: () => h,
            c: () => v,
            d: () => x,
            e: () => w,
            f: () => g,
            g: () => y,
            h: () => b
        })
    }),
    wqA: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("bf"),
            l = a("f2");

        function s(e) {
            let t, a, s, d, c, u = (0, r.c)(17),
                {
                    className: m,
                    label: f,
                    onClick: p,
                    show: h,
                    showWorkingDots: g
                } = e,
                x = void 0 !== g && g,
                b = h ? "opacity-100" : "pointer-events-none opacity-0";
            u[0] !== m || u[1] !== b ? (t = (0, o.b)("group/scroll-to-bottom cursor-interaction absolute z-30 flex h-8 w-8 translate-x-1/2 items-center justify-center rounded-full border border-default bg-surface bg-clip-padding text-secondary transition-opacity duration-basic ease-in-out end-1/2 print:hidden", b, m), u[0] = m, u[1] = b, u[2] = t) : t = u[2];
            let v = !h,
                y = h ? void 0 : -1,
                w = h ? p : void 0;
            u[3] !== x ? (a = x && (0, n.jsx)("span", {
                className: "group-hover/scroll-to-bottom:hidden group-focus-visible/scroll-to-bottom:hidden",
                children: (0, n.jsx)(l.a, {})
            }), u[3] = x, u[4] = a) : a = u[4];
            let j = x && "hidden group-hover/scroll-to-bottom:block group-focus-visible/scroll-to-bottom:block";
            return u[5] !== j ? (s = (0, o.b)("text-default", j), u[5] = j, u[6] = s) : s = u[6], u[7] !== s ? (d = (0, n.jsx)(i.q, {
                className: s
            }), u[7] = s, u[8] = d) : d = u[8], u[9] !== f || u[10] !== d || u[11] !== t || u[12] !== v || u[13] !== y || u[14] !== w || u[15] !== a ? (c = (0, n.jsxs)("button", {
                className: t,
                "aria-hidden": v,
                "aria-label": f,
                tabIndex: y,
                type: "button",
                onClick: w,
                children: [a, d]
            }), u[9] = f, u[10] = d, u[11] = t, u[12] = v, u[13] = y, u[14] = w, u[15] = a, u[16] = c) : c = u[16], c
        }
        a.d(t, {
            a: () => s
        })
    }),
    PkP: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("Ijb"),
            l = a("jC"),
            s = a("suc"),
            d = a("IP"),
            c = a("Xnl"),
            u = a("zd"),
            m = a("wD9"),
            f = a("kh"),
            p = a("HgL"),
            h = a("MCt"),
            g = a("I7b"),
            x = a("MeA"),
            b = a("okC"),
            v = a("Diy");
        let y = {
            directory: {
                inset: "pt-24",
                title: "text-[28px] leading-9 font-semibold"
            },
            default: {
                inset: "pt-panel",
                title: "heading-xl"
            },
            inset: {
                inset: "pt-panel",
                title: "heading-xl"
            },
            hero: {
                inset: "pt-4",
                title: "text-3xl font-bold md:text-5xl"
            },
            catalog: {
                inset: "pt-4",
                title: "heading-xl font-semibold"
            },
            compact: {
                inset: "pt-6",
                title: "heading-lg"
            },
            profile: {
                inset: "pt-8 md:pt-13",
                title: "text-heading-app leading-8.5 font-normal tracking-[0.39px]"
            }
        };

        function w(e) {
            let t, a, w, S, A, M, E, L, T, z, I, P, _, O, D, R, B, F, H, W, Q, K, U, q, G, $, V, Z, X, Y, J = (0, r.c)(190),
                {
                    animateContentLayout: ee,
                    collapseHeaderOnScroll: et,
                    expandSearchWhenWrapped: ea,
                    banner: en,
                    bannerAfterHeader: er,
                    bannerPlacement: eo,
                    children: ei,
                    contentClassName: el,
                    contentInset: es,
                    contentWidth: ed,
                    controls: ec,
                    headerAction: eu,
                    headerFade: em,
                    headerPlacement: ef,
                    headerVariant: ep,
                    horizontalPaddingClassName: eh,
                    reserveSelectionGutter: eg,
                    balanceScrollbarGutter: ex,
                    navigation: eb,
                    pageActions: ev,
                    scrollContainerRef: ey,
                    search: ew,
                    searchContent: ej,
                    searchPlacement: ek,
                    searchToolbar: eC,
                    stickyControls: eN,
                    subtitle: eS,
                    title: eA,
                    titleRef: eM,
                    toolbarActions: eE,
                    toolbarInset: eL,
                    wrapActionsAtNarrowWidth: eT
                } = e,
                ez = void 0 !== et && et,
                eI = void 0 !== ea && ea,
                eP = void 0 !== er && er,
                e_ = void 0 === es || es,
                eO = void 0 === ed ? "default" : ed,
                eD = void 0 === em ? "always" : em,
                eR = void 0 === ef ? "page" : ef,
                eB = void 0 === ep ? "default" : ep,
                eF = void 0 !== eg && eg,
                eH = void 0 === ek ? "sticky" : ek,
                eW = void 0 === eL || eL,
                eQ = (0, c.A)(f.b),
                eK = (0, m.c)(),
                eU = "px-panel";
            "profile" === eO ? eU = "px-5 md:px-16" : "directory" === eO && (eU = "px-4 md:px-panel");
            let eq = (0, o.b)(eF ? "px-18" : eh ?? (0, o.b)(eU, ("medium" === eO || "extraWide" === eO) && "compact" === eB ? "px-6 lg:px-12" : void 0), eQ && (eF ? "[[data-app-shell-compact-page-gutter=true]_&]:px-14" : null == eh && "profile" !== eO && "[[data-app-shell-compact-page-gutter=true]_&]:px-7.5")),
                [eG] = (0, u.useState)(j),
                [e$, eV] = (0, u.useState)(!1),
                [eZ, eX] = (0, u.useState)(!1),
                eY = (0, u.useRef)(null),
                eJ = (0, u.useRef)(null),
                e0 = (0, u.useRef)(null),
                [e1, e2] = (0, u.useState)(!1),
                [e3, e5] = (0, u.useState)(),
                e4 = (0, u.useRef)(null),
                e6 = (0, u.useRef)(null);
            J[0] !== ey ? (t = (0, p.a)(eY, ey), J[0] = ey, J[1] = t) : t = J[1];
            let e7 = t,
                e8 = (0, u.useRef)(null),
                e9 = (0, u.useRef)(null),
                [te, tt] = (0, u.useState)(),
                ta = document.activeElement,
                tn = "toolbar" === eR,
                tr = "scroll" === eR && eZ,
                to = tn || tr,
                ti = y[eB],
                tl = "directory" === eB,
                ts = "compact" === eB,
                td = "profile" === eB,
                tc = null != ew || null != ej,
                tu = "sticky" === eR,
                tm = tu && ez,
                tf = tu || "inline" === eR,
                tp = "bottom-on-scroll" === eH && tc && !tf,
                th = eQ && !td && !tl && "browser:max-md:text-lg browser:max-md:font-medium",
                tg = {
                    directory: "max-w-[calc(768px+var(--padding-panel)*2)]",
                    extraWide: "max-w-[1440px]",
                    wide: "max-w-5xl",
                    medium: "max-w-[960px]",
                    default: "max-w-[var(--thread-content-max-width)]",
                    profile: "max-w-4xl"
                } [eO],
                tx = !tn && null != eb || null != ev,
                tb = (0, i.a)();
            J[2] !== tb ? (a = tb ? {
                duration: 0
            } : g.a, J[2] = tb, J[3] = a) : a = J[3];
            let tv = a,
                ty = ew?.autoFocus ?? (null == ta || ta === document.body || ta === document.documentElement || ta === eG);
            J[4] !== tp ? (w = () => {
                let e = eY.current,
                    t = eJ.current,
                    a = e0.current;
                if (!tp || null == e || null == t || null == a) return;
                let n = new IntersectionObserver(e => {
                        let [t] = e;
                        e2(!t.isIntersecting && t.boundingClientRect.bottom <= (t.rootBounds?.top ?? 0))
                    }, {
                        root: e
                    }),
                    r = new ResizeObserver(e => {
                        let [t] = e, n = t.borderBoxSize?.[0]?.blockSize ?? a.offsetHeight;
                        n && e5(n)
                    });
                return n.observe(t), r.observe(a, {
                    box: "border-box"
                }), () => {
                    n.disconnect(), r.disconnect()
                }
            }, S = [tp], J[4] = tp, J[5] = w, J[6] = S) : (w = J[5], S = J[6]), (0, u.useLayoutEffect)(w, S), J[7] !== tp || J[8] !== tb ? (A = () => {
                let e = e0.current;
                if (!tp || null == e) return;
                let t = (0, l.a)(e, {
                    opacity: [0, 1],
                    y: [24, 0]
                }, {
                    type: "tween",
                    ease: "easeInOut",
                    duration: .25 * !tb
                });
                return () => t.stop()
            }, J[7] = tp, J[8] = tb, J[9] = A) : A = J[9], J[10] !== tp || J[11] !== e1 || J[12] !== tb ? (M = [tp, e1, tb], J[10] = tp, J[11] = e1, J[12] = tb, J[13] = M) : M = J[13], (0, u.useLayoutEffect)(A, M), J[14] !== tu || J[15] !== eQ || J[16] !== eK ? (E = () => {
                let e = eY.current,
                    t = e4.current;
                if (!eQ || !tu || null == e || null == t) return;
                let a = new ResizeObserver(() => {
                    k(e, t, eK)
                });
                return a.observe(e), a.observe(t), () => {
                    a.disconnect(), t.style.removeProperty("--header-background-top-inset")
                }
            }, L = [eQ, tu, eK], J[14] = tu, J[15] = eQ, J[16] = eK, J[17] = E, J[18] = L) : (E = J[17], L = J[18]), (0, u.useLayoutEffect)(E, L), J[19] !== eR ? (T = () => {
                let e = e8.current,
                    t = eY.current;
                if ("scroll" !== eR || null == e || null == t) return;
                let a = new IntersectionObserver(e => {
                    let [t] = e;
                    eX(!t.isIntersecting && t.boundingClientRect.bottom <= (t.rootBounds?.top ?? 0))
                }, {
                    root: t,
                    threshold: 0
                });
                return a.observe(e), () => a.disconnect()
            }, z = [eR], J[19] = eR, J[20] = T, J[21] = z) : (T = J[20], z = J[21]), (0, u.useLayoutEffect)(T, z), J[22] !== eR || J[23] !== tr ? (I = () => {
                let e = e9.current;
                if ("scroll" !== eR || tr || null == e) return;
                let t = new ResizeObserver(() => {
                    tt({
                        width: e.offsetWidth,
                        height: e.offsetHeight
                    })
                });
                return t.observe(e), () => t.disconnect()
            }, P = [eR, tr], J[22] = eR, J[23] = tr, J[24] = I, J[25] = P) : (I = J[24], P = J[25]), (0, u.useLayoutEffect)(I, P);
            let tw = null == en ? null : (0, n.jsx)("div", {
                className: (0, o.b)("w-full empty:hidden", "inset" === (void 0 === eo ? "inset" : eo) && ["mx-auto pt-panel", tg, eq]),
                children: en
            });
            J[26] !== eu || J[27] !== eB || J[28] !== td || J[29] !== tn || J[30] !== eb || J[31] !== tr || J[32] !== to || J[33] !== th || J[34] !== eA || J[35] !== eM || J[36] !== eE || J[37] !== eW || J[38] !== tv ? (_ = to || null != eE || td ? (0, n.jsx)(h.a, {
                divider: !td,
                children: (0, n.jsxs)(x.a, {
                    inset: eW,
                    children: [(0, n.jsx)(s.a, {
                        initial: !1,
                        children: to ? (0, n.jsx)(d.a.div, {
                            animate: {
                                opacity: 1,
                                transform: "translateY(0)"
                            },
                            className: "min-w-0 flex-1 overflow-hidden",
                            "data-app-shell-overlay-page-header": tr && null == eE || void 0,
                            exit: {
                                opacity: 0,
                                transform: "translateY(4px)"
                            },
                            initial: {
                                opacity: 0,
                                transform: "translateY(4px)"
                            },
                            transition: tv,
                            children: tn && null != eb ? (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("h1", {
                                    ref: eM,
                                    className: "sr-only",
                                    children: eA
                                }), eb]
                            }) : (0, n.jsx)("h1", {
                                ref: eM,
                                className: (0, o.b)("min-w-0 truncate text-base text-default electron:font-medium", th, "inset" === eB ? "px-2" : null),
                                children: eA
                            })
                        }, "toolbar-heading") : null
                    }), null != eE || tr ? (0, n.jsxs)("div", {
                        className: "ms-auto flex min-w-0 items-center justify-end gap-2",
                        children: [tr ? eu : null, eE]
                    }) : null]
                })
            }) : null, J[26] = eu, J[27] = eB, J[28] = td, J[29] = tn, J[30] = eb, J[31] = tr, J[32] = to, J[33] = th, J[34] = eA, J[35] = eM, J[36] = eE, J[37] = eW, J[38] = tv, J[39] = _) : _ = J[39];
            let tj = tp ? "relative flex h-full min-h-0 flex-1 flex-col" : "contents",
                tk = eQ || void 0,
                tC = "profile" === eO && "bg-surface-card",
                tN = tl && "bg-surface [--color-text:var(--gray-1000)] [--color-surface:light-dark(var(--gray-25),var(--black))]",
                tS = void 0 !== ex && ex ? "md:[scrollbar-gutter:stable_both-edges]" : "[scrollbar-gutter:stable]",
                tA = !tp && "relative",
                tM = tr && "vertical-scroll-fade-mask-top";
            J[40] !== tC || J[41] !== tN || J[42] !== tS || J[43] !== tA || J[44] !== tM ? (O = (0, o.b)("h-full min-h-0 flex-1 overflow-x-hidden overflow-y-auto", tC, tN, tS, tA, tM), J[40] = tC, J[41] = tN, J[42] = tS, J[43] = tA, J[44] = tM, J[45] = O) : O = J[45];
            let tE = !tn && !td && null == eE || void 0,
                tL = "inline" === eR ? e$ : void 0;
            J[46] !== ez || J[47] !== tf || J[48] !== tc || J[49] !== tu || J[50] !== eD || J[51] !== eH || J[52] !== eV || J[53] !== eQ || J[54] !== eN || J[55] !== eK ? (D = tf || "when-scrolled" === eD && "sticky" === eH && (tc || null != eN) ? e => {
                let t = e4.current,
                    a = e6.current;
                if (ez && !eQ && null != t && null != a) {
                    t.style.setProperty("--header-scroll-position", `${e.currentTarget.scrollTop}px`);
                    let n = t.getBoundingClientRect();
                    t.style.setProperty("--header-scroll-overlap", `${Math.max(0,(n.bottom-a.getBoundingClientRect().top)*t.offsetHeight/n.height+parseFloat(getComputedStyle(t).marginBottom))}px`)
                }
                eV(eQ && tu && null != t ? e.currentTarget.scrollTop > 0 && t.getBoundingClientRect().top <= e.currentTarget.getBoundingClientRect().top + parseFloat(getComputedStyle(t).top) : e.currentTarget.scrollTop > 0), eQ && tu && null != t && k(e.currentTarget, t, eK)
            } : void 0, J[46] = ez, J[47] = tf, J[48] = tc, J[49] = tu, J[50] = eD, J[51] = eH, J[52] = eV, J[53] = eQ, J[54] = eN, J[55] = eK, J[56] = D) : D = J[56], J[57] !== tp || J[58] !== e3 ? (R = tp ? {
                paddingBottom: e3
            } : void 0, J[57] = tp, J[58] = e3, J[59] = R) : R = J[59];
            let tT = eP && tf ? null : tw;
            J[60] !== eq || J[61] !== eI || J[62] !== tf || J[63] !== tc || J[64] !== tu || J[65] !== eu || J[66] !== ti || J[67] !== tl || J[68] !== e$ || J[69] !== ew || J[70] !== ej || J[71] !== eC || J[72] !== ty || J[73] !== tm || J[74] !== eQ || J[75] !== th || J[76] !== eN || J[77] !== eS || J[78] !== eA || J[79] !== eM || J[80] !== tg || J[81] !== eT ? (B = tf ? (0, n.jsx)(v.a, {
                ref: e4,
                className: tg,
                horizontalPaddingClassName: eq,
                presentation: tl ? "directory" : "default",
                collapseOnScroll: tm,
                expandSearchWhenWrapped: eI,
                wrapActionsAtNarrowWidth: eT,
                showDivider: tu && e$,
                sticky: tu,
                title: null == eA ? null : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("h1", {
                        ref: eM,
                        className: (0, o.b)("flex min-h-9 items-center text-default", eQ && "browser:max-md:min-h-0", th, ti.title),
                        children: eA
                    }), null == eS || eQ && !tl ? null : (0, n.jsx)("div", {
                        className: (0, o.b)("text-base leading-6 text-secondary", tm && "max-w-lg", eQ && !tl && "browser:max-md:hidden"),
                        children: eS
                    })]
                }),
                actions: tc ? (0, n.jsx)(v.b, {
                    search: ej ?? (null == ew ? null : (0, n.jsx)(b.a, {
                        ...ew,
                        autoFocus: ty,
                        className: (0, o.b)("min-w-0 flex-1", ew.className)
                    })),
                    controls: eC,
                    actions: eu
                }) : eu,
                navigation: eQ ? void 0 : eN
            }) : null, J[60] = eq, J[61] = eI, J[62] = tf, J[63] = tc, J[64] = tu, J[65] = eu, J[66] = ti, J[67] = tl, J[68] = e$, J[69] = ew, J[70] = ej, J[71] = eC, J[72] = ty, J[73] = tm, J[74] = eQ, J[75] = th, J[76] = eN, J[77] = eS, J[78] = eA, J[79] = eM, J[80] = tg, J[81] = eT, J[82] = B) : B = J[82], J[83] !== eq || J[84] !== tf || J[85] !== tl || J[86] !== eQ || J[87] !== eS || J[88] !== tg || J[89] !== eT ? (F = tf && eQ && !tl && null != eS ? (0, n.jsx)("div", {
                className: eT ? "@container/searchable-header" : "contents",
                children: (0, n.jsx)("div", {
                    "data-page-subtitle": eT || void 0,
                    className: (0, o.b)("mx-auto w-full text-base leading-6 text-secondary browser:max-md:hidden", tg, eq),
                    children: (0, n.jsx)("div", {
                        className: "max-w-lg -translate-y-1.5",
                        children: eS
                    })
                })
            }) : null, J[83] = eq, J[84] = tf, J[85] = tl, J[86] = eQ, J[87] = eS, J[88] = tg, J[89] = eT, J[90] = F) : F = J[90], J[91] !== eq || J[92] !== tf || J[93] !== eQ || J[94] !== eN || J[95] !== tg ? (H = tf && eQ && null != eN ? (0, n.jsx)("div", {
                className: (0, o.b)("mx-auto flex min-h-15 w-full min-w-0 items-center", tg, eq),
                children: eN
            }) : null, J[91] = eq, J[92] = tf, J[93] = eQ, J[94] = eN, J[95] = tg, J[96] = H) : H = J[96];
            let tz = eP && tf ? tw : null;
            J[97] !== eq || J[98] !== tf || J[99] !== tc || J[100] !== eu || J[101] !== te || J[102] !== ti || J[103] !== eB || J[104] !== ts || J[105] !== td || J[106] !== tn || J[107] !== tr || J[108] !== eQ || J[109] !== th || J[110] !== eS || J[111] !== eA || J[112] !== eM || J[113] !== tv || J[114] !== tg ? (W = tn || tf ? null : (0, n.jsx)(d.a.div, {
                ref: e8,
                "aria-hidden": tr || void 0,
                inert: tr,
                animate: {
                    opacity: 1,
                    transform: "translateY(0)"
                },
                exit: {
                    opacity: 0,
                    transform: "translateY(-4px)"
                },
                initial: {
                    opacity: 0,
                    transform: "translateY(-4px)"
                },
                transition: tv,
                children: (0, n.jsx)("div", {
                    className: (0, o.b)("mx-auto w-full", tg, ti.inset, !tc && (ts || td ? "pb-6" : "pb-4"), eq),
                    children: (0, n.jsxs)("div", {
                        className: (0, o.b)("flex justify-between gap-4", ts && "flex-wrap items-center", td && "items-center px-1", !ts && !td && "items-start", "hero" === eB && "justify-center text-center", "inset" === eB ? "px-2" : null),
                        children: [(0, n.jsxs)("div", {
                            className: (0, o.b)("flex min-w-0 flex-col", "inset" === eB || "hero" === eB ? "gap-2" : "gap-1"),
                            children: [(0, n.jsx)("h1", {
                                ref: tr ? void 0 : eM,
                                className: (0, o.b)("text-default", th, ti.title),
                                children: eA
                            }), null == eS ? null : (0, n.jsx)("div", {
                                className: (0, o.b)("text-base text-secondary", td ? "leading-6.5 tracking-[-0.32px]" : "leading-6", eQ && !td && "browser:max-md:hidden"),
                                children: eS
                            })]
                        }), null == eu ? null : (0, n.jsx)("div", {
                            ref: e9,
                            className: (0, o.b)("min-w-0", ts ? "max-w-full" : "shrink-0"),
                            style: tr ? te : void 0,
                            children: tr ? null : eu
                        })]
                    })
                })
            }, "page-heading"), J[97] = eq, J[98] = tf, J[99] = tc, J[100] = eu, J[101] = te, J[102] = ti, J[103] = eB, J[104] = ts, J[105] = td, J[106] = tn, J[107] = tr, J[108] = eQ, J[109] = th, J[110] = eS, J[111] = eA, J[112] = eM, J[113] = tv, J[114] = tg, J[115] = W) : W = J[115], J[116] !== W ? (Q = (0, n.jsx)(s.a, {
                initial: !1,
                mode: "popLayout",
                children: W
            }), J[116] = W, J[117] = Q) : Q = J[117], J[118] !== eq || J[119] !== tp || J[120] !== tf || J[121] !== tc || J[122] !== eD || J[123] !== eB || J[124] !== e$ || J[125] !== ew || J[126] !== ej || J[127] !== e1 || J[128] !== e3 || J[129] !== eH || J[130] !== eC || J[131] !== ty || J[132] !== eN || J[133] !== tg ? (K = !tc || tf ? null : (0, n.jsx)("div", {
                ref: eJ,
                className: tp ? void 0 : "contents",
                style: tp ? {
                    height: e3
                } : void 0,
                children: (0, n.jsx)("div", {
                    ref: e0,
                    className: (0, o.b)(!tp && "contents", tp && e1 && "absolute inset-x-0 bottom-0 z-30"),
                    children: (0, n.jsxs)(C, {
                        className: "top-0",
                        showScrollFade: "always" === eD || e$,
                        sticky: "sticky" === eH,
                        children: [(0, n.jsxs)("div", {
                            className: (0, o.b)("mx-auto flex w-full items-center gap-2 pb-2", tg, "hero" === eB && "pt-6", "catalog" === eB && "pt-4", "hero" !== eB && "catalog" !== eB && "pt-panel", eq),
                            children: [ej ?? (null == ew ? null : (0, n.jsx)(b.a, {
                                ...ew,
                                autoFocus: ty,
                                className: (0, o.b)("min-w-0 flex-1", ew.className)
                            })), eC]
                        }), null == eN ? null : (0, n.jsx)("div", {
                            className: (0, o.b)("mx-auto w-full", tg, "hero" === eB && "pt-12", eq),
                            children: eN
                        })]
                    })
                })
            }), J[118] = eq, J[119] = tp, J[120] = tf, J[121] = tc, J[122] = eD, J[123] = eB, J[124] = e$, J[125] = ew, J[126] = ej, J[127] = e1, J[128] = e3, J[129] = eH, J[130] = eC, J[131] = ty, J[132] = eN, J[133] = tg, J[134] = K) : K = J[134], J[135] !== eq || J[136] !== tf || J[137] !== tc || J[138] !== eD || J[139] !== ts || J[140] !== e$ || J[141] !== eH || J[142] !== eN || J[143] !== tg ? (U = tc || null == eN || tf ? null : (0, n.jsx)(C, {
                className: "top-0",
                showScrollFade: "always" === eD || e$,
                sticky: "sticky" === eH,
                children: (0, n.jsx)("div", {
                    className: (0, o.b)("mx-auto w-full", !ts && "py-2", tg, eq),
                    children: eN
                })
            }), J[135] = eq, J[136] = tf, J[137] = tc, J[138] = eD, J[139] = ts, J[140] = e$, J[141] = eH, J[142] = eN, J[143] = tg, J[144] = U) : U = J[144];
            let tI = !!(void 0 === ee || ee) && "position",
                tP = eQ && ts ? "pb-4" : "pb-panel",
                t_ = e_ && ts && !tf && "pt-3.5",
                tO = e_ && !ts && !tc && null == eN && "pt-panel",
                tD = e_ && !ts && (tc || null != eN) && (tl ? "pt-3 md:pt-5" : "pt-5");
            return J[145] !== el || J[146] !== eq || J[147] !== tP || J[148] !== t_ || J[149] !== tO || J[150] !== tD || J[151] !== tg ? (q = (0, o.b)("mx-auto flex min-h-0 w-full flex-1 flex-col", tP, tg, t_, tO, tD, el, eq), J[145] = el, J[146] = eq, J[147] = tP, J[148] = t_, J[149] = tO, J[150] = tD, J[151] = tg, J[152] = q) : q = J[152], J[153] !== tx || J[154] !== tn || J[155] !== eb || J[156] !== ev ? (G = tx ? (0, n.jsxs)(N, {
                children: [tn ? null : eb, null == ev ? null : (0, n.jsx)("div", {
                    className: "ms-auto",
                    children: ev
                })]
            }) : null, J[153] = tx, J[154] = tn, J[155] = eb, J[156] = ev, J[157] = G) : G = J[157], J[158] !== ei || J[159] !== ec || J[160] !== tI || J[161] !== q || J[162] !== G || J[163] !== tv ? ($ = (0, n.jsxs)(d.a.div, {
                ref: e6,
                layout: tI,
                className: q,
                transition: tv,
                children: [G, ec, ei]
            }), J[158] = ei, J[159] = ec, J[160] = tI, J[161] = q, J[162] = G, J[163] = tv, J[164] = $) : $ = J[164], J[165] !== R || J[166] !== tT || J[167] !== B || J[168] !== F || J[169] !== H || J[170] !== tz || J[171] !== Q || J[172] !== K || J[173] !== U || J[174] !== $ ? (V = (0, n.jsxs)("div", {
                className: "flex min-h-full w-full flex-col",
                style: R,
                children: [tT, B, F, H, tz, Q, K, U, $]
            }), J[165] = R, J[166] = tT, J[167] = B, J[168] = F, J[169] = H, J[170] = tz, J[171] = Q, J[172] = K, J[173] = U, J[174] = $, J[175] = V) : V = J[175], J[176] !== e7 || J[177] !== tk || J[178] !== O || J[179] !== tE || J[180] !== tL || J[181] !== D || J[182] !== V ? (Z = (0, n.jsx)("div", {
                ref: e7,
                "data-new-slate-layout": tk,
                className: O,
                "data-app-shell-inline-page-header": tE,
                "data-app-shell-page-scrolled": tL,
                onScroll: D,
                children: V
            }), J[176] = e7, J[177] = tk, J[178] = O, J[179] = tE, J[180] = tL, J[181] = D, J[182] = V, J[183] = Z) : Z = J[183], J[184] !== tj || J[185] !== Z ? (X = (0, n.jsx)("div", {
                className: tj,
                children: Z
            }), J[184] = tj, J[185] = Z, J[186] = X) : X = J[186], J[187] !== _ || J[188] !== X ? (Y = (0, n.jsxs)(n.Fragment, {
                children: [_, X]
            }), J[187] = _, J[188] = X, J[189] = Y) : Y = J[189], Y
        }

        function j() {
            return document.activeElement
        }

        function k(e, t, a) {
            let n = (0, m.b)(Math.max(0, e.getBoundingClientRect().top - t.getBoundingClientRect().top), a);
            t.style.setProperty("--header-background-top-inset", `${n}px`)
        }

        function C(e) {
            let t, a, i = (0, r.c)(8),
                {
                    children: l,
                    className: s,
                    fadeSize: d,
                    showScrollFade: c,
                    sticky: u
                } = e,
                m = void 0 === u || u,
                f = m && "sticky z-30 after:pointer-events-none after:absolute after:top-full after:right-0 after:left-0 after:bg-linear-to-b after:from-surface after:to-transparent after:content-['']",
                p = m && ("compact" === (void 0 === d ? "default" : d) ? "after:h-2" : "after:h-8"),
                h = m && !(void 0 === c || c) && "after:hidden";
            return i[0] !== s || i[1] !== f || i[2] !== p || i[3] !== h ? (t = (0, o.b)("bg-surface", f, p, h, s), i[0] = s, i[1] = f, i[2] = p, i[3] = h, i[4] = t) : t = i[4], i[5] !== l || i[6] !== t ? (a = (0, n.jsx)("div", {
                className: t,
                children: l
            }), i[5] = l, i[6] = t, i[7] = a) : a = i[7], a
        }

        function N(e) {
            let t, a, i = (0, r.c)(7),
                {
                    children: l,
                    inset: s,
                    wrap: d,
                    variant: c
                } = e,
                u = "directory" === (void 0 === c ? "default" : c) ? "pb-4" : "pb-2",
                m = void 0 !== d && d && "flex-wrap",
                f = (void 0 === s || s) && "px-3";
            return i[0] !== u || i[1] !== m || i[2] !== f ? (t = (0, o.b)("flex items-center justify-between gap-4", u, m, f), i[0] = u, i[1] = m, i[2] = f, i[3] = t) : t = i[3], i[4] !== l || i[5] !== t ? (a = (0, n.jsx)("div", {
                className: t,
                children: l
            }), i[4] = l, i[5] = t, i[6] = a) : a = i[6], a
        }
        a.d(t, {
            a: () => N,
            b: () => w,
            c: () => C
        })
    }),
    Diy: (function(e, t, a) {
        a.d(t, {
            a: () => u,
            b: () => m
        });
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("zd");
        a("I7b");
        var l = a("HgL"),
            s = "title-x3JvHx",
            d = "titleContent-nEpGod",
            c = "toolbar-wpnXAF";

        function u(e) {
            let t, a, u, m, f, p, h, g, x, b, v, y, w = (0, r.c)(35),
                {
                    ref: j,
                    className: k,
                    horizontalPaddingClassName: C,
                    collapseOnScroll: N,
                    presentation: S,
                    expandSearchWhenWrapped: A,
                    showDivider: M,
                    sticky: E,
                    wrapActionsAtNarrowWidth: L,
                    title: T,
                    actions: z,
                    navigation: I
                } = e,
                P = void 0 === C ? "px-panel" : C,
                _ = void 0 !== N && N,
                O = (0, i.useRef)(null);
            w[0] !== j ? (t = (0, l.a)(O, j), w[0] = j, w[1] = t) : t = w[1];
            let D = t,
                R = (0, i.useRef)(null);
            w[2] !== _ ? (a = () => {
                let e = O.current,
                    t = R.current;
                if (!e || !t) return;
                let a = new ResizeObserver(() => {
                        let a = t.offsetLeft + parseFloat(getComputedStyle(t).paddingInlineStart);
                        e.style.setProperty("--header-content-start", `${a}px`);
                        let n = t.querySelector(`.${c}`);
                        if (!_ || null == n) return void e.removeAttribute("data-collapsible");
                        let r = t.querySelector(`.${d}`);
                        if (null == r) return;
                        let o = r.parentElement;
                        e.style.setProperty("--header-collapse-offset", `${(o?.offsetHeight??0)+parseFloat(getComputedStyle(e).paddingTop)}px`), e.toggleAttribute("data-collapsible", !0)
                    }),
                    n = () => {
                        for (let e of (a.disconnect(), [t, ...t.querySelectorAll(`.${s}`)])) a.observe(e)
                    },
                    r = new MutationObserver(n);
                return r.observe(t, {
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }), n(), () => {
                    a.disconnect(), r.disconnect()
                }
            }, u = [_], w[2] = _, w[3] = a, w[4] = u) : (a = w[3], u = w[4]), (0, i.useLayoutEffect)(a, u);
            let B = _ || void 0,
                F = void 0 !== A && A || void 0,
                H = M || void 0,
                W = void 0 === E || E || void 0,
                Q = L || void 0,
                K = "directory" === (void 0 === S ? "default" : S) && "directoryShell-WYPHEM",
                U = M ? "border-subtle" : "border-transparent";
            w[5] !== K || w[6] !== U ? (m = (0, o.b)("shell-yWQKe6", K, U), w[5] = K, w[6] = U, w[7] = m) : m = w[7], w[8] !== F || w[9] !== H || w[10] !== W || w[11] !== Q || w[12] !== m || w[13] !== B ? (f = {
                "data-scroll-collapse": B,
                "data-expand-search": F,
                "data-scrolled": H,
                "data-sticky": W,
                "data-wrap-actions": Q,
                className: m
            }, w[8] = F, w[9] = H, w[10] = W, w[11] = Q, w[12] = m, w[13] = B, w[14] = f) : f = w[14];
            let q = f;
            w[15] !== k || w[16] !== P ? (p = (0, o.b)("content-ymUHGU", "mx-auto w-full", P, k), w[15] = k, w[16] = P, w[17] = p) : p = w[17], w[18] !== T ? (h = null == T ? null : (0, n.jsx)("div", {
                className: s,
                children: (0, n.jsx)("div", {
                    className: d,
                    children: T
                })
            }), w[18] = T, w[19] = h) : h = w[19], w[20] !== z ? (g = (0, n.jsx)("div", {
                className: "actions-hHaS5d",
                children: z
            }), w[20] = z, w[21] = g) : g = w[21], w[22] !== h || w[23] !== g ? (x = (0, n.jsxs)("div", {
                className: "headerRow-4OaZM9",
                children: [h, g]
            }), w[22] = h, w[23] = g, w[24] = x) : x = w[24], w[25] !== I ? (b = (0, n.jsx)("div", {
                className: "navigation-AqGYXP",
                children: I
            }), w[25] = I, w[26] = b) : b = w[26], w[27] !== p || w[28] !== x || w[29] !== b ? (v = (0, n.jsxs)("div", {
                ref: R,
                className: p,
                children: [x, b]
            }), w[27] = p, w[28] = x, w[29] = b, w[30] = v) : v = w[30];
            let G = v;
            return w[31] !== G || w[32] !== q || w[33] !== D ? (y = (0, n.jsxs)(n.Fragment, {
                children: [null, (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)("div", {
                        ref: D,
                        ...q,
                        children: G
                    })
                })]
            }), w[31] = G, w[32] = q, w[33] = D, w[34] = y) : y = w[34], y
        }

        function m(e) {
            let t, a, o, i, l, s = (0, r.c)(14),
                {
                    filterTags: d,
                    controls: u,
                    search: m,
                    actions: f,
                    fixedSearchWidth: p
                } = e;
            return s[0] !== d ? (t = (0, n.jsx)("div", {
                className: "filterTags-NLxoNh",
                children: (0, n.jsx)("div", {
                    className: "filterTagsContent-VSk9tY",
                    children: d
                })
            }), s[0] = d, s[1] = t) : t = s[1], s[2] !== u ? (a = (0, n.jsx)("div", {
                className: "viewControls-ty6WO3",
                children: u
            }), s[2] = u, s[3] = a) : a = s[3], s[4] !== p || s[5] !== m ? (o = null != m && (0, n.jsx)("div", {
                className: "search-gLCdCn",
                "data-fixed-width": p || void 0,
                children: m
            }), s[4] = p, s[5] = m, s[6] = o) : o = s[6], s[7] !== f ? (i = (0, n.jsx)("div", {
                className: "pageActions-Q2Fd0B",
                children: f
            }), s[7] = f, s[8] = i) : i = s[8], s[9] !== t || s[10] !== a || s[11] !== o || s[12] !== i ? (l = (0, n.jsxs)("div", {
                className: c,
                children: [t, a, o, i]
            }), s[9] = t, s[10] = a, s[11] = o, s[12] = i, s[13] = l) : l = s[13], l
        }
    }),
    aBX: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on");

        function i(e) {
            let t, a, i, l, s, d, c = (0, r.c)(20),
                {
                    action: u,
                    as: m,
                    count: f,
                    showDivider: p,
                    sticky: h,
                    title: g
                } = e,
                x = void 0 === m ? "div" : m,
                b = "summary" === x && "cursor-interaction list-none marker:hidden",
                v = h && "relative sticky top-0 z-10 bg-surface after:pointer-events-none after:absolute after:-inset-x-3 after:top-full after:h-2 after:bg-surface after:content-['']",
                y = (void 0 === p || p) && "border-b border-subtle";
            c[0] !== b || c[1] !== v || c[2] !== y ? (t = (0, o.b)("flex items-center justify-between gap-3 pe-0.5 pb-2 text-default [padding-inline-start:var(--sectioned-page-leading-inset,0.5rem)]", b, v, y), c[0] = b, c[1] = v, c[2] = y, c[3] = t) : t = c[3];
            let w = t;
            c[4] !== f ? (a = null == f ? null : (0, n.jsx)("span", {
                className: "text-tertiary",
                children: f
            }), c[4] = f, c[5] = a) : a = c[5], c[6] !== a || c[7] !== g ? (i = (0, n.jsxs)(n.Fragment, {
                children: [g, a]
            }), c[6] = a, c[7] = g, c[8] = i) : i = c[8];
            let j = i,
                k = "summary" === x ? "span" : "h2",
                C = "summary" === x ? "span" : "div";
            return c[9] !== k || c[10] !== j ? (l = (0, n.jsx)(k, {
                className: "flex min-h-7 items-center gap-1.5 text-lg leading-6 font-medium",
                children: j
            }), c[9] = k, c[10] = j, c[11] = l) : l = c[11], c[12] !== C || c[13] !== u ? (s = null == u ? null : (0, n.jsx)(C, {
                className: "shrink-0",
                children: u
            }), c[12] = C, c[13] = u, c[14] = s) : s = c[14], c[15] !== x || c[16] !== w || c[17] !== s || c[18] !== l ? (d = (0, n.jsxs)(x, {
                className: w,
                "data-slot": "section-header",
                children: [l, s]
            }), c[15] = x, c[16] = w, c[17] = s, c[18] = l, c[19] = d) : d = c[19], d
        }
        a.d(t, {
            a: () => i
        })
    }),
    ESh: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("zd"),
            l = a("ygO"),
            s = a("Cq");

        function d(e) {
            let t, a, d, u, m, f = (0, r.c)(17),
                {
                    options: p,
                    selectedId: h,
                    onHover: g,
                    onSelect: x,
                    size: b,
                    className: v,
                    buttonClassName: y,
                    fullWidth: w,
                    wrapLabels: j,
                    uniform: k,
                    selectedColor: C,
                    unselectedColor: N,
                    focusRing: S,
                    variant: A,
                    ariaLabel: M,
                    ariaLabelledBy: E
                } = e,
                L = void 0 === p ? [] : p,
                T = void 0 !== w && w,
                z = void 0 !== j && j,
                I = void 0 === A ? "default" : A,
                P = (0, i.useRef)(null);
            f[0] !== h ? (t = e => e.id === h, f[0] = h, f[1] = t) : t = f[1];
            let _ = L.findIndex(t),
                O = -1 === _ ? void 0 : {
                    "--segmented-form-indicator-width": `${100/L.length}%`,
                    "--segmented-form-indicator-offset": `${100*_}%`
                },
                D = b ?? "default",
                R = "default",
                B = void 0 === C ? "segmentedSelected" : C,
                F = void 0 === N ? "ghost" : N;
            "inset" === I ? (D = b ?? "compact", R = "large", B = "segmentedInsetSelected") : "field" === I ? (D = "fieldSegment", B = "segmentedInsetSelected") : "form" === I ? (D = "recoveryAction", R = "full", B = "segmentedFormSelected", F = "segmentedFormUnselected") : "pricing" === I ? (D = "dialog", R = "extraLarge") : "filter" === I ? (D = "compact", R = "full", B = "secondary", F = "ghostTertiary") : "viewer" === I && (D = "inline", R = "full", F = "ghostActive");
            let H = k ?? ("icon" === D && L.length > 2);
            f[2] === Symbol.for("react.memo_cache_sentinel") ? (a = () => {
                let e = P.current;
                if (null == e) return;
                let t = () => {
                    let t = e.querySelector('button[aria-pressed="true"], a[aria-current="page"]');
                    if (null == t) return;
                    let a = t.offsetLeft,
                        n = a + t.offsetWidth,
                        r = e.scrollLeft,
                        o = r + e.clientWidth;
                    a < r ? e.scrollLeft = a : n > o && (e.scrollLeft = n - e.clientWidth)
                };
                if ("u" < typeof ResizeObserver) return void t();
                let a = new ResizeObserver(t);
                for (let t of (a.observe(e), e.querySelectorAll("button, a"))) a.observe(t);
                return () => {
                    a.disconnect()
                }
            }, f[2] = a) : a = f[2], (0, i.useLayoutEffect)(a, [L, h]), f[3] !== v || f[4] !== T || f[5] !== I ? (d = (0, o.b)("relative min-w-0 max-w-full items-center", "mode" === I ? [T ? "grid w-full" : "inline-grid", "isolate h-9 auto-cols-fr grid-flow-col gap-0 rounded-full select-none"] : [T ? "flex w-full" : "inline-flex", "hide-scrollbar overflow-x-auto overflow-y-hidden", "field" === I || "form" === I ? "gap-0" : "gap-0.5"], "inset" === I && "rounded-[10px] bg-(--segmented-control-background) p-0.5", "field" === I && "h-8 rounded-lg bg-secondary-soft dark:bg-text/5", "form" === I && "isolate rounded-full bg-background-segmented-form-track p-1 dark:inset-shadow-sm dark:inset-ring-1 dark:inset-ring-border-subtle", "pricing" === I && "rounded-[20px] bg-surface-secondary p-1", "viewer" === I && "h-full p-0.5", v), f[3] = v, f[4] = T, f[5] = I, f[6] = d) : d = f[6];
            let W = "form" === I && -1 !== _ ? (0, n.jsx)("span", {
                "aria-hidden": !0,
                className: "pointer-events-none absolute inset-1 z-10 flex forced-colors:hidden",
                style: O,
                children: (0, n.jsx)("span", {
                    className: "h-full w-(--segmented-form-indicator-width) rounded-full bg-background-segmented-form-selected shadow-md motion-safe:transition-transform motion-safe:duration-basic motion-safe:ease-in-out ltr:translate-x-(--segmented-form-indicator-offset) rtl:-translate-x-(--segmented-form-indicator-offset) dark:shadow-lg-stronger dark:inset-shadow-2xs dark:inset-shadow-border"
                })
            }) : null;
            f[7] !== I ? (u = "mode" === I ? (0, n.jsx)("span", {
                "aria-hidden": !0,
                className: "pointer-events-none absolute inset-x-px top-1/2 z-0 h-8.5 -translate-y-1/2 rounded-full bg-background-mode-toggle-track"
            }) : null, f[7] = I, f[8] = u) : u = f[8];
            let Q = L.map(e => {
                let t = e.id === h,
                    a = e.disabled ?? !1,
                    {
                        id: r,
                        label: i,
                        ariaLabel: d,
                        tooltipContent: c,
                        disabled: u,
                        ...m
                    } = e,
                    f = {
                        unstyled: "mode" === I,
                        color: t ? B : F,
                        focusRing: S ?? ("inset" === I || "field" === I ? "default" : "inset"),
                        size: D,
                        radius: R,
                        onPointerEnter: null == g || a ? void 0 : () => g(r),
                        uniform: H,
                        "aria-label": d,
                        disabled: a,
                        className: (0, o.b)(T ? "flex-1 justify-center" : "shrink-0", z && "self-stretch py-2", "form" === I && "relative min-w-0 flex-1 basis-0 focus-visible:z-20 motion-safe:transition-colors motion-safe:duration-basic", "mode" === I && ["relative z-10 h-full min-w-0 justify-center rounded-full border px-10 text-sm font-medium @max-lg/home-mode-toggle:px-2.5", t ? "border-mode-toggle-selected bg-background-mode-toggle-selected text-mode-toggle-primary shadow-mode-toggle-selected" : "border-transparent text-mode-toggle-inactive hover:text-mode-toggle-primary focus-visible:text-mode-toggle-primary"], "viewer" === I && "h-full px-2.5", y),
                        children: "form" === I || z ? (0, n.jsx)("span", {
                            className: (0, o.b)("form" === I && "relative z-20", z && "min-w-0 wrap-anywhere whitespace-normal"),
                            children: i
                        }) : i
                    },
                    p = null != m.to ? (0, n.jsx)(l.b, {
                        ...m,
                        ...f,
                        "aria-current": t ? "page" : void 0
                    }, r) : (0, n.jsx)(l.a, {
                        ...f,
                        onClick: () => x?.(r),
                        "aria-pressed": t
                    }, r);
                return c ? (0, n.jsx)(s.a, {
                    tooltipContent: c,
                    children: p
                }, r) : p
            });
            return f[9] !== M || f[10] !== E || f[11] !== c || f[12] !== W || f[13] !== u || f[14] !== Q || f[15] !== d ? (m = (0, n.jsxs)("div", {
                ref: P,
                className: d,
                role: "group",
                "aria-label": M,
                "aria-labelledby": E,
                onWheel: c,
                children: [W, u, Q]
            }), f[9] = M, f[10] = E, f[11] = c, f[12] = W, f[13] = u, f[14] = Q, f[15] = d, f[16] = m) : m = f[16], m
        }

        function c(e) {
            let t = e.deltaX || e.deltaY;
            0 !== t && (e.currentTarget.scrollLeft = e.currentTarget.scrollLeft + t)
        }
        a.d(t, {
            a: () => d
        })
    }),
    zkP: (function(e, t, a) {
        a.d(t, {
            a: () => c,
            b: () => s,
            c: () => d
        });
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("HZ"),
            l = a("DVf");

        function s(e) {
            let t, a, i, l, s = (0, r.c)(8);
            return s[0] !== e ? ({
                className: t,
                ...a
            } = e, s[0] = e, s[1] = t, s[2] = a) : (t = s[1], a = s[2]), s[3] !== t ? (i = (0, o.b)("group-Zlx1HD", t), s[3] = t, s[4] = i) : i = s[4], s[5] !== a || s[6] !== i ? (l = (0, n.jsx)("div", {
                ...a,
                className: i
            }), s[5] = a, s[6] = i, s[7] = l) : l = s[7], l
        }

        function d(e) {
            let t, a, i, l, s = (0, r.c)(8);
            return s[0] !== e ? ({
                className: t,
                ...a
            } = e, s[0] = e, s[1] = t, s[2] = a) : (t = s[1], a = s[2]), s[3] !== t ? (i = (0, o.b)("groupItem-WKdBwf", t), s[3] = t, s[4] = i) : i = s[4], s[5] !== a || s[6] !== i ? (l = (0, n.jsx)("div", {
                ...a,
                className: i
            }), s[5] = a, s[6] = i, s[7] = l) : l = s[7], l
        }

        function c(e) {
            let t, a, s, d, c, u, m = (0, r.c)(53),
                {
                    ariaCurrent: f,
                    ariaDescribedBy: p,
                    ariaLabel: h,
                    buttonProps: g,
                    children: x,
                    className: b,
                    compactSecondLine: v,
                    density: y,
                    hasInteractiveContent: w,
                    icon: j,
                    isDisabled: k,
                    isSelected: C,
                    onSelect: N,
                    onContextMenu: S,
                    rightText: A,
                    rightTextPosition: M,
                    role: E,
                    secondaryTitle: L,
                    secondLine: T,
                    secondLineRightText: z,
                    showDivider: I,
                    surface: P,
                    tone: _,
                    title: O,
                    titleAdornment: D,
                    titleWrap: R,
                    to: B
                } = e,
                F = void 0 !== v && v,
                H = void 0 === y ? "default" : y,
                W = void 0 !== w && w,
                Q = void 0 !== k && k,
                K = void 0 === P ? "plain" : P,
                U = void 0 === _ ? "default" : _,
                q = void 0 !== R && R,
                G = "default" !== H,
                $ = I ?? "plain" === K;
            m[0] !== N ? (t = {
                onSelect: N
            }, m[0] = N, m[1] = t) : t = m[1];
            let V = (0, l.a)(t),
                Z = null != A && "center" === (void 0 === M ? "top" : M);
            m[2] !== x || m[3] !== F || m[4] !== H || m[5] !== Z || m[6] !== j || m[7] !== G || m[8] !== A || m[9] !== T || m[10] !== z || m[11] !== L || m[12] !== O || m[13] !== D || m[14] !== q || m[15] !== U ? (a = x ?? (0, n.jsxs)("div", {
                className: (0, o.b)("relative flex min-w-0 gap-2", G && !q ? "items-center" : "items-start", Z ? "pe-16" : null),
                children: [j && (0, n.jsx)("span", {
                    className: (0, o.b)("flex min-w-4 shrink-0 items-center justify-center", G ? "min-h-5" : "min-h-6"),
                    children: j
                }), (0, n.jsxs)("div", {
                    className: (0, o.b)("flex min-w-0 flex-1 flex-col", F ? "gap-0" : G ? "gap-0.5" : "gap-1"),
                    children: [(0, n.jsxs)("div", {
                        className: (0, o.b)("flex min-w-0 gap-3", G && !q && ("row" === H || !T) && "items-center", (q || "compact" === H && !!T) && "items-start", !G && !q && "items-baseline"),
                        children: [(0, n.jsxs)("div", {
                            className: (0, o.b)("flex min-w-0 flex-1 items-baseline gap-2", G && q ? "text-sm leading-5" : "text-base leading-6"),
                            children: [(0, n.jsx)("span", {
                                className: (0, o.b)("min-w-0", q ? "wrap-anywhere" : "truncate", "default" === U && "text-default"),
                                children: O
                            }), null != L ? (0, n.jsx)("span", {
                                className: "max-w-48 shrink-0 truncate text-codex-description",
                                children: L
                            }) : null, null != D ? (0, n.jsx)("span", {
                                className: "flex min-w-0 shrink self-center",
                                children: D
                            }) : null]
                        }), null == A || Z ? null : (0, n.jsx)("div", {
                            className: (0, o.b)("flex shrink-0 items-center text-codex-description", G ? "min-h-5 text-xs" : "min-h-6 text-base"),
                            children: A
                        })]
                    }), T && (0, n.jsxs)("div", {
                        className: (0, o.b)("flex min-w-0 items-center justify-between text-codex-description", G ? "gap-2 text-xs" : "gap-3 text-sm", G || F ? "leading-4" : "leading-[22px]"),
                        children: [(0, n.jsx)("div", {
                            className: "min-w-0 flex-1",
                            children: T
                        }), z && (0, n.jsx)("div", {
                            className: (0, o.b)("flex shrink-0 items-center", G ? "min-h-4" : "min-h-[22px]"),
                            children: z
                        })]
                    })]
                }), Z ? (0, n.jsx)("div", {
                    className: "absolute top-1/2 right-0 flex min-h-6 -translate-y-1/2 items-center text-base text-codex-description",
                    children: A
                }) : null]
            }), m[2] = x, m[3] = F, m[4] = H, m[5] = Z, m[6] = j, m[7] = G, m[8] = A, m[9] = T, m[10] = z, m[11] = L, m[12] = O, m[13] = D, m[14] = q, m[15] = U, m[16] = a) : a = m[16];
            let X = a;
            if (m[17] !== f || m[18] !== p || m[19] !== h || m[20] !== b || m[21] !== X || m[22] !== H || m[23] !== $ || m[24] !== W || m[25] !== G || m[26] !== Q || m[27] !== C || m[28] !== g || m[29] !== S || m[30] !== N || m[31] !== E || m[32] !== K || m[33] !== B || m[34] !== U) {
                d = Symbol.for("react.early_return_sentinel");
                e: if (s = (0, o.b)("group w-full text-start text-base outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0", "row-_z4Vo0", "profile" === H && "profile-nyFLvQ", $ && "divider-nxTXf9", C && "selected-uOOibA", Q && "disabled-tU2D9v", "muted" === U && (C ? "text-default" : "text-secondary"), "muted" === U && !Q && "hover:text-default focus-within:text-default", "profile" === H && "min-h-18 border-b border-transparent py-4", "row" === H && "min-h-[var(--height-token-row)] px-[var(--padding-row-cell-x,var(--padding-row-x))] py-row-y", "profile" !== H && "row" !== H && ["min-h-10 px-3", G ? "py-2.5" : "py-3"], "raised" === K && "rounded-2xl", "plain" === K && (G ? "rounded-xl" : "rounded-lg"), "raised" === K && "border border-subtle shadow-card", "raised" === K && !Q && !C && "hover:border-strong", "raised" === K && !C && "bg-surface-elevated/60", Q ? "cursor-default opacity-50" : C ? "cursor-interaction bg-primary-soft-active" : "cursor-interaction", "raised" !== K && !Q && !C && "hover:bg-primary-ghost-hover", b), (W || null != B) && "row" !== E) {
                    let e, t = {
                        className: (0, o.b)("absolute inset-0 cursor-interaction outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-default", "raised" === K && "rounded-2xl", "plain" === K && "rounded-lg"),
                        "aria-current": f,
                        "aria-label": h,
                        "aria-describedby": p
                    };
                    m[37] !== X ? (e = (0, n.jsx)("div", {
                        className: "pointer-events-none relative",
                        children: X
                    }), m[37] = X, m[38] = e) : e = m[38], d = (0, n.jsxs)("div", {
                        className: (0, o.b)("relative", s),
                        onContextMenu: S,
                        children: [null == B || Q ? (0, n.jsx)("button", {
                            ...t,
                            type: "button",
                            disabled: Q,
                            onClick: N,
                            ...g,
                            className: (0, o.b)(t.className, g?.className)
                        }) : (0, n.jsx)(i.g, {
                            ...t,
                            to: B
                        }), e]
                    });
                    break e
                } m[17] = f, m[18] = p, m[19] = h, m[20] = b, m[21] = X, m[22] = H, m[23] = $, m[24] = W, m[25] = G, m[26] = Q, m[27] = C, m[28] = g, m[29] = S, m[30] = N, m[31] = E, m[32] = K, m[33] = B, m[34] = U, m[35] = s, m[36] = d
            } else s = m[35], d = m[36];
            if (d !== Symbol.for("react.early_return_sentinel")) return d;
            m[39] !== V || m[40] !== Q ? (c = Q ? {} : V, m[39] = V, m[40] = Q, m[41] = c) : c = m[41];
            let Y = E ?? V.role,
                J = "row" === E ? C : void 0;
            return m[42] !== f || m[43] !== p || m[44] !== h || m[45] !== X || m[46] !== Q || m[47] !== S || m[48] !== s || m[49] !== c || m[50] !== Y || m[51] !== J ? (u = (0, n.jsx)("div", {
                "aria-current": f,
                "aria-describedby": p,
                "aria-label": h,
                "aria-disabled": Q,
                className: s,
                onContextMenu: S,
                ...c,
                role: Y,
                "aria-selected": J,
                children: X
            }), m[42] = f, m[43] = p, m[44] = h, m[45] = X, m[46] = Q, m[47] = S, m[48] = s, m[49] = c, m[50] = Y, m[51] = J, m[52] = u) : u = m[52], u
        }
    }),
    zWq: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("b5"),
            l = a("aq"),
            s = a("zkP");
        let d = [{
            key: "first",
            secondLineWidth: "w-1/2",
            titleWidth: "w-2/3"
        }, {
            key: "second",
            secondLineWidth: "w-2/5",
            titleWidth: "w-1/2"
        }, {
            key: "third",
            secondLineWidth: "w-3/5",
            titleWidth: "w-3/4"
        }, {
            key: "fourth",
            secondLineWidth: "w-1/3",
            titleWidth: "w-5/12"
        }, {
            key: "fifth",
            secondLineWidth: "w-1/2",
            titleWidth: "w-7/12"
        }];

        function c(e) {
            let t, a, c, u, m = (0, r.c)(15),
                {
                    density: f,
                    icon: p,
                    loadingLabel: h,
                    rowCount: g
                } = e,
                x = void 0 === f ? "default" : f;
            if (m[0] !== x || m[1] !== p || m[2] !== g) {
                let e;
                m[4] !== x || m[5] !== p ? (e = e => "row" === x ? (0, n.jsx)("div", {
                    ref: l.a,
                    "aria-hidden": !0,
                    children: (0, n.jsx)(s.a, {
                        density: "row",
                        icon: p,
                        compactSecondLine: !0,
                        title: (0, n.jsx)("span", {
                            className: "inline-block h-4 w-32 rounded bg-text/10 motion-safe:animate-pulse"
                        }),
                        secondLine: (0, n.jsx)("span", {
                            className: "inline-block h-3 w-24 rounded bg-text/10 motion-safe:animate-pulse"
                        }),
                        isSelected: !1,
                        hasInteractiveContent: !0,
                        buttonProps: {
                            disabled: !0
                        }
                    })
                }, e.key) : (0, n.jsxs)("div", {
                    ref: l.a,
                    className: (0, o.b)("flex w-full gap-2 motion-safe:animate-pulse", "sidebar" === x ? "h-[var(--height-token-row)] items-center px-[var(--padding-row-cell-x,var(--padding-row-x))]" : "min-h-10 px-3", "compact" === x && "items-center rounded-xl py-2.5", "default" === x && "items-start rounded-lg py-3"),
                    "aria-hidden": !0,
                    children: [p ?? ("compact" !== x ? (0, n.jsx)("div", {
                        className: (0, o.b)("shrink-0 rounded-full bg-text/10", "sidebar" === x ? "size-4" : "size-5")
                    }) : null), (0, n.jsxs)("div", {
                        className: (0, o.b)("flex min-w-0 flex-1 flex-col", "compact" === x && "gap-0", "sidebar" === x && "gap-1.5", "default" === x && "gap-2"),
                        children: [(0, n.jsxs)("div", {
                            className: (0, o.b)("flex min-w-0 items-center gap-3", "compact" === x && "h-6"),
                            children: [(0, n.jsx)("div", {
                                className: (0, o.b)("h-4 max-w-full rounded bg-text/10", e.titleWidth)
                            }), "default" === x ? (0, n.jsx)("div", {
                                className: "ms-auto h-3 w-12 shrink-0 rounded bg-text/10"
                            }) : null]
                        }), "sidebar" === x ? null : (0, n.jsx)("div", {
                            className: (0, o.b)("flex items-center", "compact" === x && "h-4"),
                            children: (0, n.jsx)("div", {
                                className: (0, o.b)("h-3 max-w-full rounded bg-text/10", e.secondLineWidth)
                            })
                        })]
                    })]
                }, e.key), m[4] = x, m[5] = p, m[6] = e) : e = m[6], t = d.slice(0, g ?? ("sidebar" === x ? 4 : 5)).map(e), m[0] = x, m[1] = p, m[2] = g, m[3] = t
            } else t = m[3];
            let b = t;
            return m[7] !== h ? (a = (0, n.jsx)("span", {
                className: "sr-only",
                children: h
            }), m[7] = h, m[8] = a) : a = m[8], m[9] !== x || m[10] !== b ? (c = "sidebar" === x ? (0, n.jsx)(i.b, {
                itemSpacing: "default",
                children: b
            }) : (0, n.jsx)("div", {
                className: "flex flex-col gap-0.5",
                children: b
            }), m[9] = x, m[10] = b, m[11] = c) : c = m[11], m[12] !== a || m[13] !== c ? (u = (0, n.jsxs)("div", {
                role: "status",
                children: [a, c]
            }), m[12] = a, m[13] = c, m[14] = u) : u = m[14], u
        }
        a.d(t, {
            a: () => c
        })
    }),
    X3K: (function(e, t, a) {
        a.d(t, {
            a: () => u,
            b: () => c
        });
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("cL6"),
            l = a.n(i),
            s = a("T1"),
            d = a("aq");

        function c(e) {
            let t, a, i, s, d = (0, r.c)(21),
                {
                    className: c,
                    animate: f,
                    lineClassName: p,
                    lines: h,
                    maxWidth: g,
                    minWidth: x,
                    seed: b,
                    size: v,
                    variant: y
                } = e,
                w = void 0 === f || f,
                j = void 0 === h ? 3 : h,
                k = void 0 === g ? 100 : g,
                C = void 0 === x ? 55 : x,
                N = void 0 === b ? "shimmer-lines" : b,
                S = void 0 === v ? "md" : v;
            d[0] !== j || d[1] !== k || d[2] !== C || d[3] !== N ? (t = function(e) {
                let {
                    count: t,
                    maxWidth: a,
                    minWidth: n,
                    seed: r
                } = e, o = m(Math.min(n, a)), i = m(Math.max(n, a)), s = i - o, d = l()(`${r}:${t}:${o}:${i}`);
                return Array.from({
                    length: Math.max(0, t)
                }, () => o + d() * s)
            }({
                count: j,
                maxWidth: k,
                minWidth: C,
                seed: N
            }), d[0] = j, d[1] = k, d[2] = C, d[3] = N, d[4] = t) : t = d[4];
            let A = t;
            if (d[5] !== c ? (a = (0, o.b)("flex w-full flex-col items-start gap-2", c), d[5] = c, d[6] = a) : a = d[6], d[7] !== w || d[8] !== p || d[9] !== A || d[10] !== S || d[11] !== y) {
                let e;
                d[13] !== w || d[14] !== p || d[15] !== S || d[16] !== y ? (e = (e, t) => (0, n.jsx)(u, {
                    className: p,
                    animate: w,
                    delayMs: -(120 * t),
                    size: S,
                    variant: y,
                    widthPercent: e
                }, t), d[13] = w, d[14] = p, d[15] = S, d[16] = y, d[17] = e) : e = d[17], i = A.map(e), d[7] = w, d[8] = p, d[9] = A, d[10] = S, d[11] = y, d[12] = i
            } else i = d[12];
            return d[18] !== a || d[19] !== i ? (s = (0, n.jsx)("div", {
                className: a,
                children: i
            }), d[18] = a, d[19] = i, d[20] = s) : s = d[20], s
        }

        function u(e) {
            let t, a, i, l, c = (0, r.c)(14),
                {
                    className: u,
                    animate: f,
                    as: p,
                    delayMs: h,
                    size: g,
                    variant: x,
                    widthPercent: b
                } = e,
                v = void 0 === p ? "div" : p,
                y = void 0 === g ? "md" : g,
                w = (0, s.a)();
            c[0] !== b ? (t = null == b ? void 0 : `${m(b)}%`, c[0] = b, c[1] = t) : t = c[1];
            let j = null == h ? void 0 : `${h}ms`;
            c[2] !== t || c[3] !== j ? (a = {
                width: t,
                "--loading-results-shimmer-delay": j
            }, c[2] = t, c[3] = j, c[4] = a) : a = c[4];
            let k = a;
            c[5] !== u ? (i = (0, o.b)("LoadingResultsShimmer-IzeCFB", u), c[5] = u, c[6] = i) : i = c[6];
            let C = !(void 0 === f || f) || w || void 0;
            return c[7] !== v || c[8] !== y || c[9] !== k || c[10] !== i || c[11] !== C || c[12] !== x ? (l = (0, n.jsx)(v, {
                ref: d.a,
                className: i,
                "aria-hidden": !0,
                "data-reduced-motion": C,
                "data-size": y,
                "data-variant": x,
                style: k
            }), c[7] = v, c[8] = y, c[9] = k, c[10] = i, c[11] = C, c[12] = x, c[13] = l) : l = c[13], l
        }

        function m(e) {
            return Math.max(1, Math.min(100, e))
        }
    }),
    RN: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("eH"),
            l = a("aq");

        function s(e) {
            let t, a, l, s = (0, r.c)(9),
                {
                    as: c,
                    Icon: u,
                    className: m,
                    containerClassName: f
                } = e,
                p = void 0 === c ? "div" : c,
                h = u ?? i.a;
            return s[0] !== f ? (t = (0, o.b)("inline-flex h-fit w-fit items-center justify-center leading-none contain-layout contain-paint contain-style motion-safe:animate-spin", f), s[0] = f, s[1] = t) : t = s[1], s[2] !== h || s[3] !== m ? (a = (0, n.jsx)(h, {
                className: m
            }), s[2] = h, s[3] = m, s[4] = a) : a = s[4], s[5] !== p || s[6] !== t || s[7] !== a ? (l = (0, n.jsx)(p, {
                ref: d,
                className: t,
                children: a
            }), s[5] = p, s[6] = t, s[7] = a, s[8] = l) : l = s[8], l
        }

        function d(e) {
            if (null == e) return;
            let t = e.ownerDocument,
                a = !1,
                n = () => a && e.isConnected && !t.hidden,
                r = () => {
                    n() && queueMicrotask(() => {
                        if (!n()) return;
                        let t = e.getAnimations().find(e => e instanceof CSSAnimation && "spin" === e.animationName);
                        t?.playState === "running" && t.ready.then(() => {
                            n() && !t.pending && "running" === t.playState && (t.startTime = 0)
                        }, () => {})
                    })
                },
                o = t => {
                    t.target === e && "spin" === t.animationName && r()
                },
                i = (0, l.a)(e, e => {
                    a = e, r()
                });
            return t.addEventListener("visibilitychange", r), e.addEventListener("animationstart", o), () => {
                a = !1, i?.(), t.removeEventListener("visibilitychange", r), e.removeEventListener("animationstart", o)
            }
        }
        a.d(t, {
            a: () => s
        })
    }),
    iki: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("nB3"),
            i = a("on"),
            l = a("B8U"),
            s = a("tt");

        function d(e) {
            let t, a, d, c = (0, r.c)(9),
                {
                    className: u,
                    href: m,
                    loadRemote: f
                } = e,
                p = void 0 !== f && f;
            if (c[0] !== m) {
                let e = (0, o.h)(m)?.appId;
                t = null == e ? null : (0, l.a)(e), c[0] = m, c[1] = t
            } else t = c[1];
            let h = t;
            c[2] !== u ? (a = (0, i.b)("rounded-2xs", u), c[2] = u, c[3] = a) : a = c[3];
            let g = a;
            return c[4] !== h || c[5] !== m || c[6] !== g || c[7] !== p ? (d = null == h ? (0, n.jsx)(s.a, {
                className: g,
                href: m,
                loadRemote: p
            }) : (0, n.jsx)(h, {
                "aria-hidden": !0,
                className: g
            }), c[4] = h, c[5] = m, c[6] = g, c[7] = p, c[8] = d) : d = c[8], d
        }
        a.d(t, {
            a: () => d
        })
    }),
    Lx2: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("Lh"),
            l = a("Ag");

        function s(e) {
            let t, a, s, d, c, u, m, f, p = (0, r.c)(16);
            p[0] !== e ? ({
                className: t,
                density: s,
                padded: d,
                variant: c,
                width: u,
                ...a
            } = e, p[0] = e, p[1] = t, p[2] = a, p[3] = s, p[4] = d, p[5] = c, p[6] = u) : (t = p[1], a = p[2], s = p[3], d = p[4], c = p[5], u = p[6]);
            let h = void 0 === s ? "default" : s,
                g = void 0 === d || d,
                x = void 0 === c ? "default" : c;
            return p[7] !== t || p[8] !== h || p[9] !== g || p[10] !== x || p[11] !== u ? (m = (0, o.b)("flex flex-col overflow-hidden", "search" === x && "select-none rounded-2xl border border-default bg-surface-elevated-secondary p-3 shadow-lg", "floating" === x ? ["select-none", (0, i.c)("menu")] : "default" === x && ["border-default bg-surface-elevated-secondary relative w-full rounded-[var(--radius-suggestion-menu,var(--radius-2xl))] border-(length:--suggestion-menu-border-width,1px) shadow-(--suggestion-menu-shadow,none) text-sm", g && l.a.suggestionMenu], (0, i.d)(u), "compact" === h && l.a.compactSuggestionMenu, t), p[7] = t, p[8] = h, p[9] = g, p[10] = x, p[11] = u, p[12] = m) : m = p[12], p[13] !== a || p[14] !== m ? (f = (0, n.jsx)("div", {
                className: m,
                ...a
            }), p[13] = a, p[14] = m, p[15] = f) : f = p[15], f
        }

        function d(e) {
            let t, a, i, l, s, d, c = (0, r.c)(12);
            c[0] !== e ? ({
                className: t,
                highlighted: a,
                variant: l,
                ...i
            } = e, c[0] = e, c[1] = t, c[2] = a, c[3] = i, c[4] = l) : (t = c[1], a = c[2], i = c[3], l = c[4]);
            let u = "search" === (void 0 === l ? "default" : l) ? "min-h-9 gap-1.5 rounded-[10px] px-2.5 py-1.5 text-[13px] leading-[18px] font-[510] tracking-[-0.08px] hover:bg-primary-ghost-hover" : "min-h-[var(--app-menu-item-height,0px)] rounded-[var(--suggestion-menu-item-radius,var(--radius-xl))] p-[var(--suggestion-menu-item-padding,var(--app-menu-item-padding,var(--padding-row-y)_var(--padding-row-x)))] text-sm",
                m = a ? "bg-primary-ghost-hover opacity-100" : "menu-row-opacity";
            return c[5] !== t || c[6] !== u || c[7] !== m ? (s = (0, o.b)("text-default outline-hidden focus:bg-primary-ghost-hover cursor-interaction flex w-full shrink-0 items-center overflow-hidden text-start", u, "[content-visibility:auto] [contain-intrinsic-block-size:auto_1lh]", m, t), c[5] = t, c[6] = u, c[7] = m, c[8] = s) : s = c[8], c[9] !== i || c[10] !== s ? (d = (0, n.jsx)("button", {
                className: s,
                type: "button",
                ...i
            }), c[9] = i, c[10] = s, c[11] = d) : d = c[11], d
        }
        a.d(t, {
            a: () => s,
            b: () => d
        })
    }),
    UxN: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("a6"),
            l = a("HOL"),
            s = a("ce");

        function d(e) {
            let t, a, i, s, d, u, f, p = (0, r.c)(58);
            p[0] !== e ? ({
                className: t,
                icon: a,
                legacyClassName: s,
                size: d,
                ...i
            } = e, p[0] = e, p[1] = t, p[2] = a, p[3] = i, p[4] = s, p[5] = d) : (t = p[1], a = p[2], i = p[3], s = p[4], d = p[5]);
            let h = void 0 === s ? "icon-xs shrink-0" : s,
                g = void 0 === d ? "leading" : d;
            if ("assets" in a) {
                let e, r, o, s = i["aria-hidden"] ?? a.ariaHidden;
                if ("leading" !== g) {
                    let e, r = a.assets["inline" === g ? 20 : 16];
                    return p[6] !== s || p[7] !== t || p[8] !== r ? (e = (0, n.jsx)(l.a, {
                        className: t,
                        "aria-hidden": s,
                        asset: r
                    }), p[6] = s, p[7] = t, p[8] = r, p[9] = e) : e = p[9], e
                }
                return p[10] !== s || p[11] !== t || p[12] !== a.assets[16] ? (e = (0, n.jsx)(l.a, {
                    className: t,
                    "aria-hidden": s,
                    asset: a.assets[16]
                }), p[10] = s, p[11] = t, p[12] = a.assets[16], p[13] = e) : e = p[13], p[14] !== s || p[15] !== t || p[16] !== a.assets[20] ? (r = (0, n.jsx)(l.a, {
                    className: t,
                    "aria-hidden": s,
                    asset: a.assets[20]
                }), p[14] = s, p[15] = t, p[16] = a.assets[20], p[17] = r) : r = p[17], p[18] !== e || p[19] !== r ? (o = (0, n.jsx)(c, {
                    compact: e,
                    leading: r
                }), p[18] = e, p[19] = r, p[20] = o) : o = p[20], o
            }
            if ("artwork" in a) {
                let e;
                if ("secondary" === g && null != a.secondary) {
                    let e, r, l = a.secondary;
                    return p[21] !== t || p[22] !== h ? (e = (0, o.b)(h, t), p[21] = t, p[22] = h, p[23] = e) : e = p[23], p[24] !== l || p[25] !== i || p[26] !== e ? (r = (0, n.jsx)(l, {
                        className: e,
                        ...i,
                        "aria-hidden": !0
                    }), p[24] = l, p[25] = i, p[26] = e, p[27] = r) : r = p[27], r
                }
                return p[28] !== t || p[29] !== a.artwork || p[30] !== g ? (e = (0, n.jsx)(m, {
                    className: t,
                    artwork: a.artwork,
                    size: g
                }), p[28] = t, p[29] = a.artwork, p[30] = g, p[31] = e) : e = p[31], e
            }
            if (16 in a) {
                let e, r, o;
                if ("inline" === g) {
                    let e, r = a[20];
                    return p[32] !== r || p[33] !== t || p[34] !== i ? (e = (0, n.jsx)(r, {
                        className: t,
                        ...i,
                        "aria-hidden": !0
                    }), p[32] = r, p[33] = t, p[34] = i, p[35] = e) : e = p[35], e
                }
                let l = a[16];
                if ("leading" !== g) {
                    let e;
                    return p[36] !== l || p[37] !== t || p[38] !== i ? (e = (0, n.jsx)(l, {
                        className: t,
                        ...i,
                        "aria-hidden": !0
                    }), p[36] = l, p[37] = t, p[38] = i, p[39] = e) : e = p[39], e
                }
                let s = a[20];
                return p[40] !== l || p[41] !== t || p[42] !== i ? (e = (0, n.jsx)(l, {
                    className: t,
                    ...i,
                    "aria-hidden": !0
                }), p[40] = l, p[41] = t, p[42] = i, p[43] = e) : e = p[43], p[44] !== s || p[45] !== t || p[46] !== i ? (r = (0, n.jsx)(s, {
                    className: t,
                    ...i,
                    "aria-hidden": !0
                }), p[44] = s, p[45] = t, p[46] = i, p[47] = r) : r = p[47], p[48] !== e || p[49] !== r ? (o = (0, n.jsx)(c, {
                    "aria-hidden": !0,
                    compact: e,
                    leading: r
                }), p[48] = e, p[49] = r, p[50] = o) : o = p[50], o
            }
            let x = a;
            return p[51] !== t || p[52] !== h ? (u = (0, o.b)(h, t), p[51] = t, p[52] = h, p[53] = u) : u = p[53], p[54] !== x || p[55] !== i || p[56] !== u ? (f = (0, n.jsx)(x, {
                className: u,
                ...i
            }), p[54] = x, p[55] = i, p[56] = u, p[57] = f) : f = p[57], f
        }

        function c(e) {
            let t, a, o, i = (0, r.c)(9),
                {
                    "aria-hidden": l,
                    compact: d,
                    leading: c
                } = e;
            return i[0] !== l || i[1] !== d ? (t = (0, n.jsx)("span", {
                className: s.a.CompactSource,
                "aria-hidden": l,
                children: d
            }), i[0] = l, i[1] = d, i[2] = t) : t = i[2], i[3] !== l || i[4] !== c ? (a = (0, n.jsx)("span", {
                className: s.a.LeadingSource,
                "aria-hidden": l,
                children: c
            }), i[3] = l, i[4] = c, i[5] = a) : a = i[5], i[6] !== t || i[7] !== a ? (o = (0, n.jsxs)(n.Fragment, {
                children: [t, a]
            }), i[6] = t, i[7] = a, i[8] = o) : o = i[8], o
        }

        function u(e) {
            let t, a, i, s, d, u, m, f, p, h, g = (0, r.c)(22);
            g[0] !== e ? ({
                className: s,
                icon16: t,
                asset16: i,
                legacyIcon: a,
                legacyClassName: u,
                ...d
            } = e, g[0] = e, g[1] = t, g[2] = a, g[3] = i, g[4] = s, g[5] = d, g[6] = u) : (t = g[1], a = g[2], i = g[3], s = g[4], d = g[5], u = g[6]);
            let x = void 0 === u ? "icon-2xs shrink-0" : u;
            return g[7] !== s || g[8] !== x ? (m = (0, o.b)(x, s), g[7] = s, g[8] = x, g[9] = m) : m = g[9], g[10] !== a || g[11] !== d || g[12] !== m ? (f = (0, n.jsx)(a, {
                className: m,
                ...d
            }), g[10] = a, g[11] = d, g[12] = m, g[13] = f) : f = g[13], g[14] !== t || g[15] !== i || g[16] !== s || g[17] !== d ? (p = null != i ? (0, n.jsx)(l.a, {
                className: s,
                ...d,
                asset: i
            }) : (0, n.jsx)(t, {
                className: s,
                ...d
            }), g[14] = t, g[15] = i, g[16] = s, g[17] = d, g[18] = p) : p = g[18], g[19] !== f || g[20] !== p ? (h = (0, n.jsx)(c, {
                compact: f,
                leading: p
            }), g[19] = f, g[20] = p, g[21] = h) : h = g[21], h
        }

        function m(e) {
            let t, a = (0, r.c)(5),
                {
                    className: o,
                    artwork: l,
                    size: s
                } = e,
                c = !0 === (0, i.a)() ? l.dark ?? l.light : l.light,
                u = "inline" === s ? "icon-base shrink-0" : "icon-leading shrink-0";
            return a[0] !== o || a[1] !== c || a[2] !== s || a[3] !== u ? (t = (0, n.jsx)(d, {
                className: o,
                "aria-hidden": !0,
                icon: c,
                legacyClassName: u,
                size: s
            }), a[0] = o, a[1] = c, a[2] = s, a[3] = u, a[4] = t) : t = a[4], t
        }
        a.d(t, {
            a: () => u,
            b: () => d,
            c: () => c
        })
    }),
    BrP: (function(e, t, a) {
        a.d(t, {
            a: () => h
        });
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("Ijb"),
            l = a("IP"),
            s = a("zd"),
            d = a("qM"),
            c = a("ygO");
        let u = {
            medium: {
                icon: "size-9",
                caption: "w-9"
            },
            large: {
                icon: "size-10",
                caption: "w-10"
            },
            xl: {
                icon: "size-12",
                caption: "w-12"
            }
        };

        function m(e) {
            let t, a, i, l, s, d, m, f, p, h, g, x, b = (0, r.c)(26);
            b[0] !== e ? ({
                children: t,
                icon: a,
                size: l,
                surface: s,
                labelVisibility: d,
                ...i
            } = e, b[0] = e, b[1] = t, b[2] = a, b[3] = i, b[4] = l, b[5] = s, b[6] = d) : (t = b[1], a = b[2], i = b[3], l = b[4], s = b[5], d = b[6]);
            let v = void 0 === s ? "elevated" : s,
                y = void 0 === d ? "visible" : d,
                w = "large" === l && "visible" === y && "pb-1.5";
            b[7] !== w ? (m = (0, o.b)("group/labeled-icon flex-col gap-1.5", w), b[7] = w, b[8] = m) : m = b[8];
            let j = "elevated" === v ? "border shadow-xs" : "border-hairline",
                k = u[l];
            b[9] !== j || b[10] !== k.icon ? (f = (0, o.b)("flex items-center justify-center rounded-full border-default bg-surface text-default group-not-aria-selected/labeled-icon:group-not-disabled/labeled-icon:group-not-aria-disabled/labeled-icon:group-hover/labeled-icon:bg-primary-ghost-hover group-focus-visible/labeled-icon:ring-2 group-focus-visible/labeled-icon:ring-ring group-aria-selected/labeled-icon:border-transparent group-aria-selected/labeled-icon:bg-info-solid group-aria-selected/labeled-icon:text-inverse", j, k.icon), b[9] = j, b[10] = k.icon, b[11] = f) : f = b[11], b[12] !== a || b[13] !== f ? (p = (0, n.jsx)("span", {
                className: f,
                children: a
            }), b[12] = a, b[13] = f, b[14] = p) : p = b[14];
            let C = "hidden" === y ? "sr-only" : "text-center text-sm leading-4 whitespace-normal",
                N = "visible" === y && u[l].caption;
            return b[15] !== N || b[16] !== C ? (h = (0, o.b)(C, N), b[15] = N, b[16] = C, b[17] = h) : h = b[17], b[18] !== t || b[19] !== h ? (g = (0, n.jsx)("span", {
                className: h,
                children: t
            }), b[18] = t, b[19] = h, b[20] = g) : g = b[20], b[21] !== i || b[22] !== g || b[23] !== m || b[24] !== p ? (x = (0, n.jsxs)(c.a, {
                ...i,
                className: m,
                color: "ghostTertiary",
                size: "inline",
                focusRing: "none",
                children: [p, g]
            }), b[21] = i, b[22] = g, b[23] = m, b[24] = p, b[25] = x) : x = b[25], x
        }
        let f = {
                closeButtonClassName: "flex h-7 w-5 items-center justify-center",
                itemClassName: "shrink-0",
                listClassName: "flex min-w-0 items-center gap-0.5",
                segmentedEdges: !1,
                selectedClassName: "bg-surface-secondary text-default",
                selectionIndicator: null,
                tabButtonClassName: "flex min-w-0 gap-1.5 rounded-md px-2 py-1 font-medium",
                unselectedClassName: "text-secondary hover:bg-surface-secondary"
            },
            p = {
                text: {
                    ...f,
                    listClassName: "flex min-w-0 items-center justify-center gap-5",
                    tabButtonClassName: "flex min-h-9 min-w-0 items-center font-medium",
                    selectedClassName: "text-default font-semibold",
                    unselectedClassName: "text-tertiary hover:text-default"
                },
                segmented: {
                    closeButtonClassName: "px-1",
                    itemClassName: "flex-1",
                    listClassName: "border-default flex items-center rounded-lg border",
                    segmentedEdges: !0,
                    selectedClassName: "bg-text-emphasis/25 text-default",
                    selectionIndicator: null,
                    tabButtonClassName: "relative flex-1 rounded-none px-4 py-1.5 font-medium",
                    unselectedClassName: "text-secondary hover:bg-text-emphasis/5"
                },
                toolbar: f,
                search: {
                    ...f,
                    listClassName: "flex min-w-0 items-center gap-px",
                    selectedClassName: "bg-primary-ghost-hover text-default",
                    unselectedClassName: "text-tertiary hover:bg-primary-ghost-hover",
                    tabButtonClassName: "flex h-8 min-w-0 gap-1.5 rounded-[calc(var(--radius-2xl)-var(--spacing)-1px)] px-3 font-medium"
                },
                inset: {
                    ...f,
                    listClassName: "inline-flex min-w-0 max-w-full items-center gap-0.5 rounded-[10px] bg-surface-secondary/92 p-0.5"
                },
                page: {
                    ...f,
                    listClassName: "-ms-2 flex min-w-0 items-center gap-2",
                    tabButtonClassName: `${f.tabButtonClassName} ring-inset`
                },
                pill: {
                    ...f,
                    listClassName: "flex min-w-0 items-center gap-1",
                    selectedClassName: "bg-text/5 text-default ring-1 ring-border-strong",
                    tabButtonClassName: "flex min-w-0 gap-1.5 rounded-full border border-transparent px-4 py-2 font-medium ring-inset",
                    unselectedClassName: "text-tertiary hover:bg-primary-ghost-hover"
                },
                choice: {
                    ...f,
                    listClassName: "flex min-w-0 flex-wrap items-center gap-2"
                },
                filter: {
                    ...f,
                    listClassName: "-ms-3 flex min-w-0 items-center gap-1",
                    selectedClassName: "bg-text/5 text-default",
                    tabButtonClassName: "flex min-h-9 min-w-0 gap-1.5 rounded-full px-3 leading-5 font-normal ring-inset",
                    unselectedClassName: "text-secondary hover:bg-primary-ghost-hover"
                },
                editor: {
                    ...f,
                    listClassName: "-ms-3 flex min-w-0 items-center gap-1 md:ms-0 md:gap-0",
                    selectedClassName: "bg-text/5 text-default",
                    tabButtonClassName: "flex min-h-9 min-w-0 gap-1.5 rounded-full px-3 leading-5 font-normal ring-inset md:min-h-9.5 md:px-4",
                    unselectedClassName: "text-secondary hover:bg-primary-ghost-hover"
                },
                browse: {
                    ...f,
                    listClassName: "flex min-w-0 items-center gap-1",
                    selectedClassName: "bg-primary-ghost-hover text-default",
                    tabButtonClassName: "flex h-9 min-w-0 rounded-full border border-transparent px-4 py-0 font-medium ring-inset",
                    unselectedClassName: "text-secondary hover:bg-background-primary-ghost-hover/50 hover:text-default"
                },
                directory: {
                    ...f,
                    listClassName: "flex min-w-0 max-w-full items-center gap-0 p-px",
                    selectedClassName: "bg-primary-ghost-hover text-default",
                    tabButtonClassName: "flex h-9 min-w-0 rounded-full border border-transparent px-4 py-0 text-sm leading-5 font-medium ring-inset",
                    unselectedClassName: "text-secondary hover:bg-primary-ghost-hover"
                },
                segmentedPill: {
                    ...f,
                    listClassName: "flex min-w-0 items-center",
                    selectedClassName: "bg-primary-ghost-hover text-default font-medium",
                    tabButtonClassName: "flex min-w-0 rounded-full px-4 py-2.25 leading-5 ring-inset",
                    unselectedClassName: "text-secondary font-normal hover:bg-primary-ghost-hover hover:text-default"
                },
                profile: {
                    ...f,
                    itemClassName: "flex-1",
                    listClassName: "flex min-w-0 items-center",
                    selectedClassName: "bg-primary-ghost-hover text-default",
                    tabButtonClassName: "flex h-9 w-full min-w-0 justify-center rounded-full border border-transparent px-3 py-0 font-medium",
                    unselectedClassName: "text-secondary hover:text-default"
                },
                icon: {
                    ...f,
                    listClassName: "flex max-w-full min-w-0 flex-wrap items-start justify-center gap-x-8 gap-y-2"
                },
                underline: {
                    closeButtonClassName: "px-1",
                    itemClassName: "shrink-0 pb-2",
                    listClassName: "border-default flex min-w-0 items-start gap-8 border-b",
                    segmentedEdges: !1,
                    selectedClassName: "text-default",
                    selectionIndicator: "underline",
                    tabButtonClassName: "flex min-w-0 gap-1.5 font-medium",
                    unselectedClassName: "text-secondary hover:text-default"
                }
            };

        function h(e) {
            let t, a, i, l, u = (0, r.c)(60),
                {
                    tabs: f,
                    selectedKey: h,
                    onSelect: b,
                    onTabClick: v,
                    onTabHover: y,
                    className: w,
                    fill: j,
                    scrollable: k,
                    tabListRef: C,
                    variant: N,
                    ariaLabel: S,
                    ariaLabelledBy: A,
                    activationMode: M,
                    animateSelection: E
                } = e,
                L = void 0 !== j && j,
                T = void 0 !== k && k,
                z = void 0 === N ? "segmented" : N,
                I = void 0 === M ? "automatic" : M,
                P = (0, s.useId)(),
                _ = void 0 !== E && E && "segmentedPill" === z,
                O = p[z],
                D = _ ? "text-default font-medium" : O.selectedClassName,
                R = "inset" === z || "choice" === z,
                B = R ? c.a : "button",
                F = L && "w-full",
                H = T && "hide-scrollbar overflow-x-auto overflow-y-hidden";
            u[0] !== w || u[1] !== O.listClassName || u[2] !== F || u[3] !== H ? (t = (0, o.b)(O.listClassName, F, H, w), u[0] = w, u[1] = O.listClassName, u[2] = F, u[3] = H, u[4] = t) : t = u[4];
            let W = T ? g : void 0;
            if (u[5] !== I || u[6] !== b || u[7] !== T || u[8] !== f ? (a = e => {
                    let t;
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || !["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
                    let a = Array.from(e.currentTarget.querySelectorAll('[role="tab"]')),
                        n = a.findIndex(t => t === e.target);
                    if (n < 0 || 0 === a.length) return;
                    e.preventDefault(), e.stopPropagation();
                    let r = "rtl" === getComputedStyle(e.currentTarget).direction;
                    t = "Home" === e.key ? 0 : "End" === e.key ? a.length - 1 : (n + (e.key === (r ? "ArrowLeft" : "ArrowRight") ? 1 : -1) + a.length) % a.length, a[t]?.focus(), T && a[t]?.scrollIntoView({
                        block: "nearest",
                        inline: "nearest"
                    });
                    let o = f[t];
                    null != o && "automatic" === I && b(o.key)
                }, u[5] = I, u[6] = b, u[7] = T, u[8] = f, u[9] = a) : a = u[9], u[10] !== B || u[11] !== I || u[12] !== _ || u[13] !== L || u[14] !== b || u[15] !== v || u[16] !== y || u[17] !== O.closeButtonClassName || u[18] !== O.itemClassName || u[19] !== O.segmentedEdges || u[20] !== O.selectionIndicator || u[21] !== O.tabButtonClassName || u[22] !== O.unselectedClassName || u[23] !== T || u[24] !== D || u[25] !== h || u[26] !== P || u[27] !== f || u[28] !== R || u[29] !== z) {
                let e;
                u[31] !== B || u[32] !== I || u[33] !== _ || u[34] !== L || u[35] !== b || u[36] !== v || u[37] !== y || u[38] !== O.closeButtonClassName || u[39] !== O.itemClassName || u[40] !== O.segmentedEdges || u[41] !== O.selectionIndicator || u[42] !== O.tabButtonClassName || u[43] !== O.unselectedClassName || u[44] !== T || u[45] !== D || u[46] !== h || u[47] !== P || u[48] !== f.length || u[49] !== R || u[50] !== z ? (e = (e, t) => {
                    let a, r, i = e.key === h,
                        l = t === f.length - 1,
                        s = {
                            id: null == e.panelId ? void 0 : `${e.panelId}-tab`,
                            type: "button",
                            role: "tab",
                            "aria-controls": e.panelId,
                            "aria-label": e.ariaLabel,
                            "aria-selected": i,
                            tabIndex: i ? 0 : -1,
                            onPointerEnter: null == y ? void 0 : () => y(e.key),
                            onClick: () => {
                                i && "manual" !== I || b(e.key), v?.(e.key)
                            }
                        };
                    return "inset" === z ? (a = i ? "segmentedInsetSelected" : "ghost", r = "compact") : "choice" === z && (a = i ? "chatgptPrimary" : "outlineGhost", r = "dialogAction"), (0, n.jsxs)("div", {
                        className: (0, o.b)("relative flex min-w-0 items-center", O.itemClassName, L && "flex-1", null != e.onClose && "group/tab"),
                        children: ["icon" === z ? (0, n.jsx)(m, {
                            ...s,
                            icon: e.icon,
                            size: "large",
                            children: e.name
                        }) : (0, n.jsxs)(B, {
                            ...s,
                            className: (0, o.b)(L && "min-w-0 flex-1 justify-center", _ && "relative isolate", !R && ["cursor-interaction items-center select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0", "search" === z ? "text-base" : "text-sm", O.tabButtonClassName, T && "ring-inset", O.segmentedEdges && 0 === t && "rounded-l-md", O.segmentedEdges && l && "rounded-r-md", i ? D : O.unselectedClassName]),
                            color: a,
                            radius: "choice" === z ? "full" : void 0,
                            size: r,
                            children: [_ && i ? (0, n.jsx)(x, {
                                layoutId: P
                            }) : null, null != e.icon ? (0, n.jsx)("span", {
                                "aria-hidden": "true",
                                className: "icon-xs flex shrink-0 items-center justify-center",
                                children: e.icon
                            }) : null, L ? (0, n.jsx)("span", {
                                className: "truncate",
                                children: e.name
                            }) : e.name]
                        }), "underline" === O.selectionIndicator && i ? (0, n.jsx)("div", {
                            className: "absolute inset-x-0 bottom-[-1px] h-px bg-primary-solid"
                        }) : null, null != e.onClose ? (0, n.jsx)("button", {
                            type: "button",
                            "aria-label": e.closeLabel,
                            className: (0, o.b)("cursor-interaction text-tertiary hover:text-default", O.closeButtonClassName),
                            onClick: e.onClose,
                            children: (0, n.jsx)(d.a, {
                                className: "icon-2xs"
                            })
                        }) : null, O.segmentedEdges && !l ? (0, n.jsx)("div", {
                            className: "h-full w-px self-stretch bg-border"
                        }) : null]
                    }, e.key)
                }, u[31] = B, u[32] = I, u[33] = _, u[34] = L, u[35] = b, u[36] = v, u[37] = y, u[38] = O.closeButtonClassName, u[39] = O.itemClassName, u[40] = O.segmentedEdges, u[41] = O.selectionIndicator, u[42] = O.tabButtonClassName, u[43] = O.unselectedClassName, u[44] = T, u[45] = D, u[46] = h, u[47] = P, u[48] = f.length, u[49] = R, u[50] = z, u[51] = e) : e = u[51], i = f.map(e), u[10] = B, u[11] = I, u[12] = _, u[13] = L, u[14] = b, u[15] = v, u[16] = y, u[17] = O.closeButtonClassName, u[18] = O.itemClassName, u[19] = O.segmentedEdges, u[20] = O.selectionIndicator, u[21] = O.tabButtonClassName, u[22] = O.unselectedClassName, u[23] = T, u[24] = D, u[25] = h, u[26] = P, u[27] = f, u[28] = R, u[29] = z, u[30] = i
            } else i = u[30];
            return u[52] !== S || u[53] !== A || u[54] !== a || u[55] !== i || u[56] !== t || u[57] !== W || u[58] !== C ? (l = (0, n.jsx)("div", {
                ref: C,
                role: "tablist",
                tabIndex: -1,
                "aria-label": S,
                "aria-labelledby": A,
                className: t,
                onWheel: W,
                onKeyDown: a,
                children: i
            }), u[52] = S, u[53] = A, u[54] = a, u[55] = i, u[56] = t, u[57] = W, u[58] = C, u[59] = l) : l = u[59], l
        }

        function g(e) {
            let t = e.deltaX || e.deltaY;
            0 !== t && (e.currentTarget.scrollLeft = e.currentTarget.scrollLeft + t)
        }

        function x(e) {
            let t, a, o = (0, r.c)(5),
                {
                    layoutId: s
                } = e,
                d = .25 * !(0, i.a)();
            return o[0] !== d ? (t = {
                type: "spring",
                duration: d,
                bounce: 0
            }, o[0] = d, o[1] = t) : t = o[1], o[2] !== s || o[3] !== t ? (a = (0, n.jsx)(l.a.span, {
                "aria-hidden": !0,
                layoutId: s,
                initial: !1,
                className: "absolute inset-0 -z-10 rounded-full bg-primary-ghost-hover",
                transition: t
            }), o[2] = s, o[3] = t, o[4] = a) : a = o[4], a
        }
    }),
    zLI: (function(e, t, a) {
        a.d(t, {
            a: () => m,
            b: () => f,
            c: () => p
        });
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("zd"),
            l = a("HgL");
        let s = "min-w-0 border text-default outline-none placeholder:text-tertiary aria-invalid:border-text-danger aria-invalid:ring-2 aria-invalid:ring-text-danger/20 disabled:cursor-not-allowed disabled:text-secondary",
            d = "forced-colors:focus:bg-[Highlight] forced-colors:focus:text-[HighlightText] forced-colors:focus:forced-color-adjust-none forced-colors:focus:placeholder:text-[HighlightText]",
            c = "border-transparent enabled:hover:bg-primary-ghost-hover focus:bg-primary-ghost-hover",
            u = {
                amount: "h-10 rounded-lg bg-surface px-3 text-sm font-normal tabular-nums",
                auth: "h-14 rounded-full bg-transparent px-5 text-base focus:ring-1 focus:ring-ring",
                code: "h-9 rounded-md bg-primary-soft px-2.5 font-mono text-sm",
                compact: "h-7 rounded-md bg-primary-soft px-2 text-sm",
                plain: "h-7 rounded-md border-transparent bg-transparent p-0 text-sm",
                default: "h-9 rounded-md bg-primary-soft px-2.5 text-sm",
                field: "h-8 rounded-lg bg-primary-soft px-2 text-sm focus-within:bg-primary-ghost-hover forced-colors:focus-within:outline-2 forced-colors:focus-within:outline-solid",
                form: "h-12 rounded-2xl border-default bg-transparent px-5 text-form-body font-normal",
                onboarding: "h-10 rounded-lg border-default bg-transparent px-3 text-sm font-normal",
                outlined: "h-9.5 rounded-lg border-default bg-surface px-3 py-2 text-sm leading-5",
                grouped: "h-10 rounded-[inherit] border-transparent bg-transparent px-3 text-sm",
                ghost: "h-token-button-composer rounded-md bg-transparent px-2 text-sm",
                heading: "h-9 rounded-sm bg-surface px-2 text-lg font-medium",
                display: "heading-3xl h-14 rounded-sm border-transparent bg-transparent px-2 text-center font-semibold focus:ring-1 focus:ring-ring",
                displayName: "h-11 rounded-sm border-transparent bg-transparent px-2 text-center text-3xl leading-11 font-normal forced-colors:focus:outline-2 forced-colors:focus:outline-solid",
                settings: "rounded-2xl border-default bg-transparent px-4 py-2 text-base",
                inline: "h-11 rounded-xl bg-surface px-3 py-2 text-heading-lg leading-7 font-medium",
                rounded: "h-12 rounded-2xl bg-surface px-4 text-base dark:bg-surface-secondary/92",
                segmented: "h-10 overflow-hidden rounded-xl bg-primary-soft text-sm",
                search: "h-11.5 rounded-none border-x-0 border-t-0 bg-transparent px-4 pb-1.5 text-lg",
                searchFilter: "h-7 rounded-md bg-transparent px-2 text-sm",
                tags: "max-h-40 overflow-y-auto bg-primary-soft px-2 py-1 text-sm",
                transparent: "h-token-button-composer rounded-md border-transparent bg-transparent px-2 text-sm focus:ring-1 focus:ring-ring"
            };

        function m(e) {
            let t, a, i, l, m, f, p, h, g, x, b, v, y, w, j = (0, r.c)(29);
            j[0] !== e ? ({
                autoSize: f,
                id: a,
                ref: m,
                type: v,
                leadingControl: i,
                valueSuffix: y,
                trailingInlineControl: b,
                trailingControl: x,
                variant: p,
                mixed: h,
                tagDensity: g,
                focusRing: t,
                ...l
            } = e, j[0] = e, j[1] = t, j[2] = a, j[3] = i, j[4] = l, j[5] = m, j[6] = f, j[7] = p, j[8] = h, j[9] = g, j[10] = x, j[11] = b, j[12] = v, j[13] = y) : (t = j[1], a = j[2], i = j[3], l = j[4], m = j[5], f = j[6], p = j[7], h = j[8], g = j[9], x = j[10], b = j[11], v = j[12], y = j[13]);
            let k = void 0 !== f && f,
                C = void 0 === p ? "default" : p,
                N = void 0 !== h && h,
                S = void 0 === g ? "compact" : g,
                A = t ?? ("field" !== C && "displayName" !== C),
                M = null != i || null != y || null != b || null != x;
            if (j[14] !== k || j[15] !== A || j[16] !== M || j[17] !== a || j[18] !== i || j[19] !== N || j[20] !== l || j[21] !== m || j[22] !== S || j[23] !== x || j[24] !== b || j[25] !== v || j[26] !== y || j[27] !== C) {
                let e = (0, o.b)(s, k ? "field-sizing-content max-w-full" : "w-full", u[C], "tags" === C && ({
                        compact: "min-h-9 rounded-md",
                        comfortable: "min-h-12 rounded-lg",
                        multiline: "min-h-30 content-start rounded-lg"
                    })[S], "ghost" === C && c, A && "form" === C && !M && ["focus:bg-primary-ghost-hover", d], A && ("plain" === C ? "focus-visible:ring-1 focus-visible:ring-ring" : "ghost" !== C && "focus:border-ring"), "ghost" !== C && "plain" !== C && "displayName" !== C && "transparent" !== C && "grouped" !== C && "disabled:bg-text/5", "rounded" === C && "border-subtle", "ghost" !== C && "plain" !== C && "rounded" !== C && "outlined" !== C && "field" !== C && "form" !== C && "onboarding" !== C && "settings" !== C && "search" !== C && "segmented" !== C && "grouped" !== C && "transparent" !== C && "display" !== C && "displayName" !== C && "border-primary-outline", ("field" === C || "search" === C) && (l.disabled ? "border-transparent" : "border-default"), "segmented" === C && "border-default", "segmented" === C && (null == i ? "ps-3" : "ps-0"), "segmented" === C && (null == x ? "pe-3" : "pe-0"), "field" === C && null != x && "overflow-hidden pe-0", ("compact" === C || "field" === C) && "number" === v && "tabular-nums"),
                    t = (0, n.jsx)("input", {
                        ...l,
                        id: a,
                        ref: m,
                        "data-mixed": N || void 0,
                        className: (0, o.b)("data-[mixed=true]:placeholder:text-default", "field" === C && "number" === v && "numberField-sMs2D7", M ? (0, o.b)("min-w-0 bg-transparent outline-none placeholder:text-tertiary focus:!outline-none disabled:cursor-not-allowed disabled:text-secondary", null == y ? "flex-1" : "field-sizing-content flex-initial", "tags" === C ? "h-6" : "h-full", "tags" === C && null == y && "basis-32", "segmented" === C && "placeholder:text-codex-description", A && "form" === C && d) : (0, o.b)(e, "segmented" === C && "focus:!outline-none")),
                        type: v
                    });
                w = M ? (0, n.jsxs)("div", {
                    className: (0, o.b)(e, "flex items-center", A && "focus-within:border-ring", "form" === C ? A && "focus-within:bg-primary-ghost-hover" : "forced-colors:focus-within:outline-2 forced-colors:focus-within:outline-solid", "tags" === C ? "flex-wrap gap-1" : "gap-2", "auth" === C && "focus-within:ring-1 focus-within:ring-ring", l.disabled && "grouped" !== C && "bg-text/5"),
                    "aria-invalid": l["aria-invalid"],
                    children: [i, null == y ? t : (0, n.jsxs)("label", {
                        className: "flex h-full min-w-0 flex-1 cursor-text items-center gap-0.5",
                        children: [t, !N && y]
                    }), b, ("segmented" === C || "field" === C) && null != x ? (0, n.jsx)("div", {
                        className: (0, o.b)("flex h-full shrink-0 items-center", "segmented" === C && "border-s border-default"),
                        children: x
                    }) : x]
                }) : t, j[14] = k, j[15] = A, j[16] = M, j[17] = a, j[18] = i, j[19] = N, j[20] = l, j[21] = m, j[22] = S, j[23] = x, j[24] = b, j[25] = v, j[26] = y, j[27] = C, j[28] = w
            } else w = j[28];
            return w
        }

        function f(e) {
            let t, a, i = (0, r.c)(3),
                {
                    children: l
                } = e;
            return i[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.b)("inputGroup-tn0xxQ", "divide-y divide-border overflow-hidden rounded-xl border border-default text-sm text-default"), i[0] = t) : t = i[0], i[1] !== l ? (a = (0, n.jsx)("div", {
                className: t,
                children: l
            }), i[1] = l, i[2] = a) : a = i[2], a
        }

        function p(e) {
            let t, a, d, u, m, f, p, x, b, v, y, w, j, k, C, N, S, A, M, E = (0, r.c)(53);
            E[0] !== e ? ({
                autoResize: f,
                focusIndicator: p,
                id: a,
                onInput: d,
                ref: m,
                value: v,
                variant: x,
                trailingControl: b,
                footer: t,
                ...u
            } = e, E[0] = e, E[1] = t, E[2] = a, E[3] = d, E[4] = u, E[5] = m, E[6] = f, E[7] = p, E[8] = x, E[9] = b, E[10] = v) : (t = E[1], a = E[2], d = E[3], u = E[4], m = E[5], f = E[6], p = E[7], x = E[8], b = E[9], v = E[10]);
            let L = void 0 !== f && f,
                T = void 0 === p ? "default" : p,
                z = void 0 === x ? "default" : x,
                I = (0, i.useRef)(null);
            if (E[11] !== L || E[12] !== z ? (y = () => {
                    let e = I.current;
                    if (null != e) {
                        if ("display" === z) {
                            let t = () => h(e);
                            t();
                            let a = new ResizeObserver(t);
                            return a.observe(e), document.fonts?.addEventListener("loadingdone", t), () => {
                                a.disconnect(), document.fonts?.removeEventListener("loadingdone", t)
                            }
                        }
                        L && g(e)
                    }
                }, E[11] = L, E[12] = z, E[13] = y) : y = E[13], E[14] !== L || E[15] !== v || E[16] !== z ? (w = [L, v, z], E[14] = L, E[15] = v, E[16] = z, E[17] = w) : w = E[17], (0, i.useLayoutEffect)(y, w), E[18] !== T || E[19] !== t || E[20] !== a || E[21] !== u || E[22] !== m || E[23] !== z) {
                let e;
                e = "display" === z ? (0, o.b)(s, c, "heading-3xl min-h-20 w-full resize-none overflow-hidden rounded-sm bg-transparent px-2 py-1 text-center font-semibold") : "segmented" === z ? "w-full min-w-0 min-h-24 resize-y bg-transparent px-3 py-2 text-sm text-default outline-none placeholder:text-codex-description focus:!outline-none disabled:cursor-not-allowed disabled:text-secondary" : "plain" === z ? (0, o.b)(s, "w-full min-h-24 resize-y rounded-md border-transparent bg-transparent p-0 text-sm focus-visible:ring-1 focus-visible:ring-ring") : "feedback" === z ? (0, o.b)("w-full min-w-0 min-h-20 resize-y bg-transparent text-sm text-default placeholder:text-tertiary outline-none", null == t ? "rounded-xl border border-default px-3 py-2 focus:border-ring" : "border-0 p-0") : "outlined" === z ? (0, o.b)(s, "field-sizing-content w-full min-h-28 max-h-80 resize-none rounded-3xl border-subtle bg-transparent p-5 text-base leading-6 focus:border-ring") : "editor" === z ? (0, o.b)(s, "w-full min-h-24 resize-y rounded-md border-primary-outline bg-primary-soft px-2.5 py-2 text-sm focus:border-ring disabled:bg-text/5 md:h-33 md:min-h-33 md:rounded-lg md:border-default md:bg-surface md:p-3") : "comparison" === z ? (0, o.b)(s, "w-full min-h-45 resize-none rounded-3xl border-default bg-surface px-6 py-3 text-base leading-7 shadow-sm focus:border-ring focus:ring-1 focus:ring-ring") : "rounded" === z ? (0, o.b)(s, "w-full min-h-26 resize-none rounded-3xl border-subtle bg-surface-secondary/92 px-4 py-4 text-base leading-5 focus:border-ring disabled:bg-text/5") : (0, o.b)(s, "w-full", "settings" === z ? "min-h-9 max-h-30 resize-none overflow-y-auto rounded-lg border-primary-outline bg-surface px-3 py-2 text-sm leading-5 focus:border-ring disabled:bg-text/5" : (0, o.b)("rounded-md text-sm", "compact" === z ? "min-h-9 max-h-30 resize-none overflow-y-auto" : "min-h-24 resize-y", "ghost" === z ? (0, o.b)(c, "bg-transparent px-2 py-0.5") : "border-primary-outline bg-primary-soft px-2.5 py-2 focus:border-ring disabled:bg-text/5")), j = u, k = a, E[28] !== m ? (C = (0, l.a)(m, I), E[28] = m, E[29] = C) : C = E[29], N = (0, o.b)(e, ("feedback" === z || "settings" === z || "compact" === z) && null == t && "default" === T && "focus:ring-1 focus:ring-ring", "code" === z && "font-mono"), E[18] = T, E[19] = t, E[20] = a, E[21] = u, E[22] = m, E[23] = z, E[24] = j, E[25] = k, E[26] = C, E[27] = N
            } else j = E[24], k = E[25], C = E[26], N = E[27];
            E[30] !== L || E[31] !== d || E[32] !== z ? (S = e => {
                "display" === z ? h(e.currentTarget) : L && g(e.currentTarget), d?.(e)
            }, E[30] = L, E[31] = d, E[32] = z, E[33] = S) : S = E[33], E[34] !== S || E[35] !== j || E[36] !== k || E[37] !== C || E[38] !== N || E[39] !== v ? (A = (0, n.jsx)("textarea", {
                ...j,
                id: k,
                ref: C,
                className: N,
                value: v,
                onInput: S
            }), E[34] = S, E[35] = j, E[36] = k, E[37] = C, E[38] = N, E[39] = v, E[40] = A) : A = E[40];
            let P = A;
            if ("feedback" === z && null != t) {
                let e, a, r = "default" === T && "focus-within:ring-1 focus-within:ring-ring";
                E[41] !== r ? (e = (0, o.b)(s, "flex w-full flex-col rounded-xl border-default bg-transparent p-3 focus-within:border-ring", r), E[41] = r, E[42] = e) : e = E[42];
                let i = u["aria-invalid"];
                return E[43] !== t || E[44] !== e || E[45] !== i || E[46] !== P ? (a = (0, n.jsxs)("div", {
                    className: e,
                    "aria-invalid": i,
                    children: [P, t]
                }), E[43] = t, E[44] = e, E[45] = i, E[46] = P, E[47] = a) : a = E[47], a
            }
            return E[48] !== u || E[49] !== P || E[50] !== b || E[51] !== z ? (M = "segmented" === z ? (0, n.jsxs)("div", {
                className: (0, o.b)(s, "flex w-full items-start overflow-hidden rounded-xl border-default bg-primary-soft focus-within:border-ring forced-colors:focus-within:outline-2 forced-colors:focus-within:outline-solid", u.disabled && "bg-text/5"),
                "aria-invalid": u["aria-invalid"],
                children: [P, null != b ? (0, n.jsx)("div", {
                    className: "shrink-0 self-stretch border-s border-default",
                    children: (0, n.jsx)("div", {
                        className: "flex h-10 items-center",
                        children: b
                    })
                }) : null]
            }) : P, E[48] = u, E[49] = P, E[50] = b, E[51] = z, E[52] = M) : M = E[52], M
        }

        function h(e) {
            let t = document.createElement("canvas").getContext("2d");
            if (null == t || 0 === e.clientWidth) return;
            e.style.fontSize = "var(--text-base)";
            let a = parseFloat(getComputedStyle(e).fontSize);
            e.style.fontSize = "";
            let n = getComputedStyle(e),
                r = parseFloat(n.fontSize);
            t.font = n.font, t.letterSpacing = n.letterSpacing;
            let o = Math.max(...e.value.split("\n").map(e => t.measureText(e).width)),
                i = Math.max(a, Math.min(r, Math.floor(r * (e.clientWidth - parseFloat(n.paddingLeft) - parseFloat(n.paddingRight)) / (o || 1))));
            e.style.fontSize = `${i}px`, e.style.whiteSpace = i > a ? "pre" : "pre-wrap", e.style.paddingBlock = "", e.style.minHeight = "0", e.style.height = "auto";
            let l = parseFloat(n.paddingTop),
                s = e.scrollHeight - 2 * l;
            e.style.minHeight = "";
            let d = Math.max(l, (e.clientHeight - s) / 2);
            e.style.paddingBlock = `${d}px`, e.style.height = `${s+2*d+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth)}px`
        }

        function g(e) {
            e.style.height = "auto", e.style.height = `${Math.min(e.scrollHeight+2,120)}px`
        }
    }),
    Wdu: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("Wf"),
            l = a("HOL"),
            s = a("J67");

        function d(e) {
            let t, a, d, c, u, m, f, p, h, g, x, b, v = (0, r.c)(53),
                y = (0, i.a)(),
                {
                    actions: w,
                    actionsInline: j,
                    announce: k,
                    className: C,
                    level: N,
                    fullWidth: S,
                    children: A,
                    contentAlignment: M,
                    icon: E,
                    leading: L,
                    onRemove: T,
                    richColors: z,
                    testId: I,
                    variant: P
                } = e,
                _ = void 0 !== j && j,
                O = void 0 === N ? "info" : N,
                D = void 0 !== z && z,
                R = void 0 === P ? "default" : P,
                B = "default" === R && ("info" === O || "success" === O && !D),
                F = "default" === R && "success" === O && D,
                H = "successNeutral" === R,
                W = "chatgptSuccess" === R,
                Q = "dangerSolid" === R,
                K = "default" === R && "warning" === O,
                U = "default" === R && "danger" === O,
                q = "default" === R && (!D || "info" === O),
                G = "default" === R && D && "success" === O,
                $ = "default" === R && D && "warning" === O,
                V = "default" === R && D && "danger" === O;
            v[0] !== C || v[1] !== S || v[2] !== K || v[3] !== U || v[4] !== q || v[5] !== G || v[6] !== $ || v[7] !== V || v[8] !== B || v[9] !== F || v[10] !== H || v[11] !== W || v[12] !== Q ? (t = (0, o.b)("alert-root inline-flex flex-col gap-2 rounded-xl px-3 py-2 text-base leading-[1.4] pointer-events-auto box-shadow-lg border", {
                flex: S,
                "border-default bg-surface-elevated-secondary": B,
                "border-text-success/20 bg-background-success-surface": F,
                "border-transparent bg-primary-solid text-primary-solid": H,
                "border-transparent bg-(--color-background-chatgpt-success-solid) text-success-solid": W,
                "border-transparent bg-danger-solid text-danger-solid": Q,
                "border-warning-outline bg-warning-surface": K,
                "border-danger-outline bg-danger-surface": U,
                "text-default": q,
                "text-success": G,
                "text-warning": $,
                "text-danger": V
            }, C), v[0] = C, v[1] = S, v[2] = K, v[3] = U, v[4] = q, v[5] = G, v[6] = $, v[7] = V, v[8] = B, v[9] = F, v[10] = H, v[11] = W, v[12] = Q, v[13] = t) : t = v[13];
            let Z = t,
                X = void 0 === k || k ? "alert" : void 0,
                Y = "center" === M ? "items-center gap-3" : "items-start gap-1";
            v[14] !== Y ? (a = (0, o.b)("flex min-w-0", Y), v[14] = Y, v[15] = a) : a = v[15], v[16] !== E || v[17] !== M || v[18] !== L || v[19] !== D || v[20] !== R ? (d = null != L || E ? (0, n.jsx)("div", {
                className: (0, o.b)("flex size-6 shrink-0 grow-0 items-center justify-center", "center" !== M && "self-start", "default" === R && !D && "text-default"),
                children: L ?? (E ? (0, n.jsx)(E, {
                    className: "icon-xs"
                }) : null)
            }) : null, v[16] = E, v[17] = M, v[18] = L, v[19] = D, v[20] = R, v[21] = d) : d = v[21];
            let J = "center" === M ? "items-center" : "items-start";
            return v[22] !== J ? (c = (0, o.b)("flex min-w-0 flex-1 gap-3", J), v[22] = J, v[23] = c) : c = v[23], v[24] !== A ? (u = "string" == typeof A ? (0, n.jsx)("div", {
                className: "font-medium",
                children: A
            }) : A, v[24] = A, v[25] = u) : u = v[25], v[26] !== u ? (m = (0, n.jsx)("div", {
                className: "min-w-0 flex-1 justify-center gap-2 break-words",
                children: u
            }), v[26] = u, v[27] = m) : m = v[27], v[28] !== w || v[29] !== _ ? (f = _ && null != w ? (0, n.jsx)("div", {
                className: "flex shrink-0 items-center gap-2",
                children: w
            }) : null, v[28] = w, v[29] = _, v[30] = f) : f = v[30], v[31] !== c || v[32] !== m || v[33] !== f ? (p = (0, n.jsxs)("div", {
                className: c,
                children: [m, f]
            }), v[31] = c, v[32] = m, v[33] = f, v[34] = p) : p = v[34], v[35] !== M || v[36] !== y || v[37] !== T ? (h = T ? (0, n.jsx)("button", {
                type: "button",
                onClick: T,
                "aria-label": y.formatMessage({
                    id: "codex.alert.closeAriaLabel",
                    defaultMessage: "Close",
                    description: "Aria label for the close button on an alert/toast component"
                }),
                className: (0, o.b)("flex size-6 shrink-0 grow-0 cursor-interaction items-center justify-center rounded-full hover:bg-background-primary-ghost-hover/5", "center" !== M && "self-start"),
                children: (0, n.jsx)(l.a, {
                    "aria-hidden": !1,
                    asset: s.a
                })
            }) : null, v[35] = M, v[36] = y, v[37] = T, v[38] = h) : h = v[38], v[39] !== a || v[40] !== d || v[41] !== p || v[42] !== h ? (g = (0, n.jsxs)("div", {
                className: a,
                children: [d, p, h]
            }), v[39] = a, v[40] = d, v[41] = p, v[42] = h, v[43] = g) : g = v[43], v[44] !== w || v[45] !== _ ? (x = _ || null == w ? null : (0, n.jsx)("div", {
                className: "flex items-center justify-end gap-2",
                children: w
            }), v[44] = w, v[45] = _, v[46] = x) : x = v[46], v[47] !== Z || v[48] !== X || v[49] !== g || v[50] !== x || v[51] !== I ? (b = (0, n.jsxs)("div", {
                className: Z,
                role: X,
                "data-testid": I,
                children: [g, x]
            }), v[47] = Z, v[48] = X, v[49] = g, v[50] = x, v[51] = I, v[52] = b) : b = v[52], b
        }
        a.d(t, {
            a: () => d
        })
    }),
    f2W: (function(e, t, a) {
        var n = a("wtC"),
            r = a("qx"),
            o = a("Tn");

        function i(e, t) {
            e(n.Eb, {
                toastId: t?.toastId ?? "unknown",
                surface: "toast",
                severity: "error",
                operation: t?.operation,
                errorCategory: t?.errorCategory,
                apiErrorCode: t?.apiErrorCode,
                apiErrorCodeAbsenceReason: t?.apiErrorCode == null ? t?.apiErrorCodeAbsenceReason ?? "CHATGPT_ERROR_API_CODE_ABSENCE_REASON_UNKNOWN" : void 0,
                retryable: t?.retryable,
                conversationId: t?.conversationId,
                productExperience: function(e) {
                    switch (e) {
                        case "CHATGPT_USER_FACING_ERROR_SURFACE_CHATGPT":
                            return r.a.CHATGPT_PRODUCT_EXPERIENCE_CHAT;
                        case "CHATGPT_USER_FACING_ERROR_SURFACE_WORK":
                            return r.a.CHATGPT_PRODUCT_EXPERIENCE_WORK;
                        case "CHATGPT_USER_FACING_ERROR_SURFACE_CODEX":
                            return r.a.CHATGPT_PRODUCT_EXPERIENCE_CODEX;
                        case void 0:
                        case "CHATGPT_USER_FACING_ERROR_SURFACE_UNSPECIFIED":
                        case "UNRECOGNIZED":
                            return
                    }
                }(t?.userFacingError?.surface)
            }), e(o.f, {
                ...t?.userFacingError,
                surface: t?.userFacingError?.surface ?? "CHATGPT_USER_FACING_ERROR_SURFACE_UNSPECIFIED",
                format: "CHATGPT_USER_FACING_ERROR_FORMAT_TOAST",
                severity: "CHATGPT_USER_FACING_ERROR_SEVERITY_ERROR",
                errorCategory: t?.userFacingError?.errorCategory ?? "CHATGPT_USER_FACING_ERROR_CATEGORY_UNSPECIFIED",
                errorCode: t?.userFacingError?.errorCode ?? t?.apiErrorCode,
                presentationId: t?.toastId,
                operation: t?.userFacingError?.operation ?? t?.operation,
                dictationSessionId: t?.userFacingError?.dictationSessionId,
                attemptId: t?.userFacingError?.attemptId,
                canRetry: t?.retryable,
                conversationId: t?.conversationId
            })
        }
        a.d(t, {
            a: () => i
        })
    }),
    SGs: (function(e, t, a) {
        var n = a("Qo"),
            r = a("Xnl"),
            o = a("zd"),
            i = a("P6"),
            l = a("OW"),
            s = a("ym");
        let d = 1,
            c = {
                close: () => {}
            },
            u = {
                info: () => c,
                success: () => c,
                warning: () => c,
                danger: () => c,
                custom: () => c,
                closeAll: () => {}
            },
            m = u,
            f = (0, r.u)(l.a, u),
            p = (0, r.u)(l.a, []),
            h = (0, r.u)(l.a, []),
            g = (0, r.c)(l.a, e => {
                let {
                    get: t
                } = e;
                return t(p).at(-1)?.bounds ?? null
            }),
            x = (0, r.c)(l.a, e => {
                let {
                    get: t
                } = e;
                return t(h).at(-1)?.insetPx ?? 0
            });

        function b() {
            return m
        }

        function v(e) {
            return m = e, () => {
                m === e && (m = u)
            }
        }

        function y(e, t) {
            return e.set(f, t), () => {
                e.get(f) === t && e.set(f, u), t.closeAll()
            }
        }

        function w(e, t) {
            let a, n = !1,
                r = () => {
                    if (!n) {
                        n = !0, a?.();
                        try {
                            t.onRemove?.()
                        } catch {}
                    }
                };
            return a = e.watch(a => {
                let {
                    get: o
                } = a, i = o(f);
                if (n || i === u) return;
                let l = !1,
                    s = i.custom({
                        ...t,
                        onUserDismiss: () => {
                            n || l || e.get(f) !== i || t.onUserDismiss?.()
                        },
                        onRemove: () => {
                            l || e.get(f) !== i || r()
                        }
                    });
                return () => {
                    l = !0, s.close()
                }
            }), n && a(), {
                close: r
            }
        }

        function j(e, t, a) {
            e.set(p, e => {
                let n = e.findIndex(e => e.id === t);
                return null == a ? -1 === n ? e : e.filter(e => e.id !== t) : -1 === n ? [...e, {
                    bounds: a,
                    id: t
                }] : e.map((e, t) => t === n ? {
                    ...e,
                    bounds: a
                } : e)
            })
        }

        function k(e, t, a) {
            e.set(h, e => {
                let n = e.findIndex(e => e.id === t);
                return null == a ? -1 === n ? e : e.filter(e => e.id !== t) : -1 === n ? [...e, {
                    id: t,
                    insetPx: a
                }] : e.map((e, r) => r === n ? {
                    id: t,
                    insetPx: a
                } : e)
            })
        }

        function C(e, t, a) {
            let n = !1,
                r = new Map,
                l = new Map,
                c = new Map,
                u = new Map,
                m = [];
            return {
                registerViewport() {
                    for (let e of (n = !0, r.values())) e();
                    return () => {
                        n = !1
                    }
                },
                info: (e, t) => f(e, t, "info"),
                success: (e, t) => f(e, t, "success"),
                warning: (e, t) => f(e, t, "warning"),
                danger: (e, t) => f(e, t, "danger"),
                custom: e => f(null, e, e.level ?? "info"),
                closeAll() {
                    for (let e of [...l.values()]) e()
                }
            };

            function f(f, p, h) {
                if ("danger" === h) try {
                    a?.(p?.errorAnalytics)
                } catch {}
                let g = d++,
                    x = m.pop() ?? `${e}-toast-${g}`;
                c.set(x, g);
                let b = !1,
                    v = !1,
                    y = !1,
                    w = !1,
                    j = !1,
                    k = !1,
                    C = () => {
                        !y || j || k || (k = !0, requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                j ? k = !1 : m.push(x)
                            })
                        }))
                    },
                    S = () => {
                        v || c.get(x) !== g || (w = !0, b ? (i.b.dismiss(x), M()) : E())
                    },
                    A = p?.id == null ? void 0 : u.get(p.id);
                null != A && l.get(A)?.(), p?.id != null && u.set(p.id, x), l.set(x, S);
                let M = () => {
                        if (!v) {
                            if (v = !0, 1 === l.size) {
                                let e = document.activeElement;
                                e instanceof HTMLElement && null != e.closest("[data-sonner-toaster]") && e.blur()
                            }
                            r.delete(x), l.delete(x), c.delete(x), p?.id != null && u.get(p.id) === x && u.delete(p.id);
                            try {
                                p?.onRemove?.()
                            } catch {}
                        }
                    },
                    E = () => {
                        M(), y || (y = !0, C())
                    },
                    L = () => {
                        if (!v && !w && null != p && "content" in p) try {
                            p.onUserDismiss?.()
                        } catch {}
                        E()
                    },
                    T = () => {
                        j = !0;
                        let e = "success" === h && p?.duration !== 0 && Number.isFinite(p?.duration ?? 5) && p?.primaryAction == null && p?.secondaryAction == null && !(null != p && "content" in p) ? setTimeout(S, (p?.duration ?? 5) * 1e3) : void 0;
                        return () => {
                            clearTimeout(e), j = !1, queueMicrotask(() => {
                                j || (E(), C())
                            })
                        }
                    },
                    z = null != p && "content" in p ? o.createElement("div", {
                        className: "max-w-full min-w-0",
                        "data-testid": p.testId
                    }, p.content({
                        close: S,
                        level: h
                    })) : o.createElement(t, {
                        actionPlacement: p?.actionPlacement,
                        description: p?.description,
                        leading: p?.leading,
                        level: h,
                        onClose: p?.hasCloseButton === !1 ? void 0 : S,
                        primaryAction: p?.primaryAction,
                        secondaryAction: p?.secondaryAction,
                        testId: p?.testId,
                        title: f,
                        variant: p?.variant
                    }),
                    I = () => {
                        b = !0, i.b.custom(() => o.createElement(N, {
                            content: z,
                            isRemoved: () => v,
                            onMount: T
                        }), {
                            className: p?.position === "top-center-content" ? s.a.contentCentered : void 0,
                            dismissible: p?.hasCloseButton ?? !0,
                            duration: p?.duration === 0 ? 1 / 0 : (p?.duration ?? 5) * 1e3,
                            id: x,
                            onAutoClose: E,
                            onDismiss: L,
                            position: p?.position === "top-center-content" ? "top-center" : p?.position ?? "top-center",
                            toasterId: e,
                            unstyled: !0
                        })
                    };
                return !v && (r.set(x, I), n && I()), {
                    close: S
                }
            }
        }

        function N(e) {
            let t, a = (0, n.c)(2),
                {
                    content: r,
                    isRemoved: i,
                    onMount: l
                } = e;
            return a[0] !== l ? (t = [l], a[0] = l, a[1] = t) : t = a[1], o.useLayoutEffect(l, t), i() ? null : r
        }
        a.d(t, {
            a: () => C,
            b: () => b,
            c: () => v,
            d: () => y,
            e: () => j,
            f: () => k,
            g: () => w
        }, {
            h: f,
            i: g,
            j: x
        })
    }),
    GWy: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("f4l"),
            i = a("u34"),
            l = a("h81"),
            s = a("on"),
            d = a("ygO"),
            c = a("HOL"),
            u = a("Wdu"),
            m = a("ym"),
            f = a("Jc");
        let p = {
            info: l.a,
            success: o.a,
            warning: i.a,
            danger: i.a
        };

        function h(e) {
            let t, a, o, i, l, h, g, x, b = (0, r.c)(36),
                {
                    actionPlacement: v,
                    description: y,
                    leading: w,
                    level: j,
                    onClose: k,
                    primaryAction: C,
                    secondaryAction: N,
                    testId: S,
                    title: A,
                    variant: M
                } = e,
                E = void 0 === M ? "default" : M,
                L = "successNeutral" === E || "chatgptSuccess" === E,
                T = "primary";
            "chatgptSuccess" === E ? T = "successOutline" : "successNeutral" === E && (T = "tinted"), b[0] !== y || b[1] !== j || b[2] !== E ? (t = null != y ? (0, n.jsx)("div", {
                className: (0, s.b)("text-start", {
                    "text-sm font-normal": "chatgptSuccess" === E,
                    "text-secondary": "default" === E && "info" === j,
                    "text-success/80": "default" === E && "success" === j,
                    "text-primary-solid/80": "successNeutral" === E,
                    "text-danger-solid/80": "dangerSolid" === E,
                    "text-warning/80": "default" === E && "warning" === j,
                    "text-danger/80": "default" === E && "danger" === j
                }),
                children: y
            }) : null, b[0] = y, b[1] = j, b[2] = E, b[3] = t) : t = b[3];
            let z = t,
                I = "chatgptSuccess" === E && m.a.chatgptSuccess,
                P = "inline" === v && "w-max";
            b[4] !== I || b[5] !== P ? (a = (0, s.b)(m.a.alert, I, "leading-normal", P), b[4] = I, b[5] = P, b[6] = a) : a = b[6], b[7] !== L || b[8] !== C || b[9] !== T || b[10] !== N || b[11] !== E ? (o = null != C || null != N ? (0, n.jsxs)(n.Fragment, {
                children: [null != N ? (0, n.jsx)(d.a, {
                    color: "chatgptSuccess" === E ? "successOutline" : "secondary",
                    loading: N.loading,
                    onClick: () => {
                        N.onClick()
                    },
                    size: L ? "actionSm" : "compact",
                    children: N.label
                }) : null, null != C ? (0, n.jsx)(d.a, {
                    color: T,
                    loading: C.loading,
                    onClick: () => {
                        C.onClick()
                    },
                    size: L ? "actionSm" : "compact",
                    children: C.label
                }) : null]
            }) : void 0, b[7] = L, b[8] = C, b[9] = T, b[10] = N, b[11] = E, b[12] = o) : o = b[12];
            let _ = "inline" === v || null == y,
                O = "inline" === v ? "center" : void 0;
            b[13] !== w || b[14] !== j || b[15] !== E ? (i = void 0 === w ? (0, n.jsx)(c.a, {
                "aria-hidden": !1,
                asset: "chatgptSuccess" === E ? f.a : p[j]
            }) : w, b[13] = w, b[14] = j, b[15] = E, b[16] = i) : i = b[16];
            let D = "chatgptSuccess" === E ? "text-base font-semibold" : "font-medium";
            return b[17] !== D ? (l = (0, s.b)("flex min-h-6 items-center text-start whitespace-pre-wrap", D), b[17] = D, b[18] = l) : l = b[18], b[19] !== l || b[20] !== A ? (h = (0, n.jsx)("div", {
                className: l,
                children: A
            }), b[19] = l, b[20] = A, b[21] = h) : h = b[21], b[22] !== z || b[23] !== h ? (g = (0, n.jsxs)("div", {
                className: "min-w-0",
                children: [h, z]
            }), b[22] = z, b[23] = h, b[24] = g) : g = b[24], b[25] !== j || b[26] !== k || b[27] !== g || b[28] !== a || b[29] !== o || b[30] !== _ || b[31] !== O || b[32] !== i || b[33] !== S || b[34] !== E ? (x = (0, n.jsx)(u.a, {
                className: a,
                announce: !1,
                actions: o,
                actionsInline: _,
                contentAlignment: O,
                fullWidth: !0,
                leading: i,
                level: j,
                onRemove: k,
                richColors: !0,
                testId: S,
                variant: E,
                children: g
            }), b[25] = j, b[26] = k, b[27] = g, b[28] = a, b[29] = o, b[30] = _, b[31] = O, b[32] = i, b[33] = S, b[34] = E, b[35] = x) : x = b[35], x
        }
        a.d(t, {
            a: () => h
        })
    }),
    VTt: (function(e, t, a) {
        a.d(t, {
            a: () => k,
            b: () => w
        });
        var n = a("A"),
            r = a("Qo"),
            o = a("IP"),
            i = a("Xnl"),
            l = a("zd"),
            s = a("v7"),
            d = a("Wf"),
            c = a("P6"),
            u = a("zR1"),
            m = a("bN"),
            f = a("OW"),
            p = a("jZD"),
            h = a("HgL"),
            g = a("bI"),
            x = a("f2W"),
            b = a("GWy"),
            v = a("SGs"),
            y = a("ym");

        function w(e) {
            let t, a, s, d, c, u = (0, r.c)(12);
            u[0] !== e ? ({
                ref: a,
                ...t
            } = e, u[0] = e, u[1] = t, u[2] = a) : (t = u[1], a = u[2]);
            let m = (0, i.z)(f.a),
                p = (0, l.useId)(),
                x = (0, l.useRef)(null);
            u[3] !== p || u[4] !== m ? (s = e => {
                if (x.current?.disconnect(), x.current = null, null == e) return void(0, v.e)(m, p, null);
                let t = () => {
                    let t = e.getBoundingClientRect();
                    (0, v.e)(m, p, {
                        bottom: window.innerHeight - t.bottom,
                        left: t.left,
                        right: window.innerWidth - t.right,
                        top: t.top
                    })
                };
                if ("u" < typeof ResizeObserver) return t(), () => {
                    (0, v.e)(m, p, null)
                };
                let a = new ResizeObserver(t);
                return a.observe(e), a.observe(document.documentElement), x.current = a, () => {
                    a.disconnect(), x.current === a && (x.current = null), (0, v.e)(m, p, null)
                }
            }, u[3] = p, u[4] = m, u[5] = s) : s = u[5];
            let b = (0, g.a)(s);
            return u[6] !== a || u[7] !== b ? (d = (0, h.a)(a, b), u[6] = a, u[7] = b, u[8] = d) : d = u[8], u[9] !== t || u[10] !== d ? (c = (0, n.jsx)(o.a.div, {
                ref: d,
                ...t
            }), u[9] = t, u[10] = d, u[11] = c) : c = u[11], c
        }

        function j(e) {
            let t, a, o, m, f, p, h, g, x, b, w, j = (0, r.c)(25),
                {
                    toasterId: k,
                    toaster: C
                } = e,
                N = (0, i.A)(v.i),
                S = (0, i.A)(u.a),
                A = (0, i.A)(v.j),
                M = (0, d.a)(),
                E = !S,
                L = E ? N : null;
            j[0] !== N || j[1] !== E ? (t = E ? {
                inset: 0
            } : N ?? {
                inset: 0
            }, j[0] = N, j[1] = E, j[2] = t) : t = j[2];
            let T = null == L ? "0px" : `${(L.left-L.right)/2}px`,
                z = null == L ? "100%" : `calc(100vw - ${L.left+L.right+A}px - var(--spacing) * 4)`;
            j[3] !== t || j[4] !== T || j[5] !== z ? (a = {
                ...t,
                "--toast-content-offset-x": T,
                "--toast-content-max-width": z
            }, j[3] = t, j[4] = T, j[5] = z, j[6] = a) : a = j[6];
            let I = a;
            return j[7] !== C ? (o = () => C.registerViewport(), m = [C], j[7] = C, j[8] = o, j[9] = m) : (o = j[8], m = j[9]), (0, l.useEffect)(o, m), j[10] !== A ? (f = {
                insetInlineEnd: A
            }, j[10] = A, j[11] = f) : f = j[11], j[12] !== M ? (p = M.formatMessage({
                id: "codex.toast.notificationsAriaLabel",
                defaultMessage: "Notifications",
                description: "ARIA label for the toast notification region"
            }), j[12] = M, j[13] = p) : p = j[13], j[14] === Symbol.for("react.memo_cache_sentinel") ? (h = ["right"], j[14] = h) : h = j[14], j[15] === Symbol.for("react.memo_cache_sentinel") ? (g = {
                className: y.a.toast,
                classNames: {
                    content: y.a.contents,
                    title: y.a.contents
                },
                unstyled: !0
            }, j[15] = g) : g = j[15], j[16] !== p || j[17] !== k ? (x = (0, n.jsx)("span", {
                className: "relative w-full",
                children: (0, n.jsx)(c.a, {
                    id: k,
                    className: "codex-sonner-toaster flex max-w-(--composer-adjacent-max-width) justify-center",
                    containerAriaLabel: p,
                    gap: 8,
                    mobileOffset: 0,
                    offset: 0,
                    position: "top-center",
                    swipeDirections: h,
                    toastOptions: g,
                    visibleToasts: 3
                })
            }), j[16] = p, j[17] = k, j[18] = x) : x = j[18], j[19] !== x || j[20] !== f ? (b = (0, n.jsxs)("span", {
                className: "absolute inset-y-0 start-0 my-2 flex flex-col items-end justify-start px-2 md:pb-5",
                style: f,
                children: [null, x]
            }), j[19] = x, j[20] = f, j[21] = b) : b = j[21], j[22] !== b || j[23] !== I ? (w = (0, s.createPortal)((0, n.jsx)("div", {
                className: "codex-toast-area pointer-events-none fixed z-[60]",
                style: I,
                children: b
            }), document.body), j[22] = b, j[23] = I, j[24] = w) : w = j[24], w
        }

        function k(e) {
            let t, o, s, d, c, u, h = (0, r.c)(16),
                {
                    children: y
                } = e,
                w = (0, i.z)(f.a),
                k = (0, l.useId)(),
                N = (0, p.a)();
            h[0] !== w ? (t = e => {
                (0, x.a)(w.get(m.d).logProductEvent, e)
            }, h[0] = w, h[1] = t) : t = h[1];
            let S = (0, g.a)(t);
            h[2] !== S || h[3] !== k ? (o = () => (0, v.a)(k, b.a, S), h[2] = S, h[3] = k, h[4] = o) : o = h[4];
            let [A] = (0, l.useState)(o);
            return h[5] !== w || h[6] !== A ? (s = () => {
                let e = (0, v.d)(w, A),
                    t = (0, v.c)(A),
                    n = !1;
                return a.e(51280).then(a.bind(a, "KZH")).then(e => {
                    let {
                        restoreCheckoutReturnNotification: t
                    } = e;
                    n || t(A)
                }).catch(C), () => {
                    n = !0, e(), t()
                }
            }, d = [w, A], h[5] = w, h[6] = A, h[7] = s, h[8] = d) : (s = h[7], d = h[8]), (0, l.useLayoutEffect)(s, d), h[9] !== N || h[10] !== A || h[11] !== k ? (c = N ? (0, n.jsx)(j, {
                toasterId: k,
                toaster: A
            }) : null, h[9] = N, h[10] = A, h[11] = k, h[12] = c) : c = h[12], h[13] !== y || h[14] !== c ? (u = (0, n.jsxs)(n.Fragment, {
                children: [c, y]
            }), h[13] = y, h[14] = c, h[15] = u) : u = h[15], u
        }

        function C() {}
    }),
    F0x: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("on");
        let i = {
                default: "h-5 w-8",
                sm: "h-4 w-7"
            },
            l = {
                default: "h-4 w-4 data-[state=unchecked]:translate-x-[2px] data-[state=checked]:translate-x-[14px] rtl:data-[state=unchecked]:-translate-x-[2px] rtl:data-[state=checked]:-translate-x-[14px]",
                sm: "h-3 w-3 data-[state=unchecked]:translate-x-[2px] data-[state=checked]:translate-x-[14px] rtl:data-[state=unchecked]:-translate-x-[2px] rtl:data-[state=checked]:-translate-x-[14px]"
            };

        function s(e) {
            let t, a, i, l, s, c, u, m, f, p, h, g, x, b, v, y, w, j = (0, r.c)(39);
            j[0] !== e ? ({
                checked: i,
                onChange: c,
                disabled: m,
                className: l,
                id: s,
                ariaLabel: t,
                size: f,
                tone: p,
                trackClassName: g,
                thumbClassName: h,
                onClick: u,
                ...a
            } = e, j[0] = e, j[1] = t, j[2] = a, j[3] = i, j[4] = l, j[5] = s, j[6] = c, j[7] = u, j[8] = m, j[9] = f, j[10] = p, j[11] = h, j[12] = g) : (t = j[1], a = j[2], i = j[3], l = j[4], s = j[5], c = j[6], u = j[7], m = j[8], f = j[9], p = j[10], h = j[11], g = j[12]);
            let k = void 0 !== m && m,
                C = void 0 === f ? "default" : f,
                N = void 0 === p ? "accent" : p,
                S = i ? "checked" : "unchecked";
            j[13] !== i || j[14] !== k || j[15] !== c ? (x = () => {
                k || c(!i)
            }, j[13] = i, j[14] = k, j[15] = c, j[16] = x) : x = j[16];
            let A = x;
            j[17] !== A || j[18] !== u ? (b = e => {
                u?.(e), e.defaultPrevented || A()
            }, j[17] = A, j[18] = u, j[19] = b) : b = j[19];
            let M = b,
                E = k ? "cursor-not-allowed opacity-60" : "cursor-interaction";
            return j[20] !== l || j[21] !== E ? (v = (0, o.b)("inline-flex items-center text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-full", E, l), j[20] = l, j[21] = E, j[22] = v) : v = j[22], j[23] !== i || j[24] !== C || j[25] !== h || j[26] !== N || j[27] !== g ? (y = (0, n.jsx)(d, {
                checked: i,
                size: C,
                tone: N,
                trackClassName: g,
                thumbClassName: h
            }), j[23] = i, j[24] = C, j[25] = h, j[26] = N, j[27] = g, j[28] = y) : y = j[28], j[29] !== t || j[30] !== a || j[31] !== i || j[32] !== k || j[33] !== M || j[34] !== s || j[35] !== S || j[36] !== v || j[37] !== y ? (w = (0, n.jsx)("button", {
                type: "button",
                role: "switch",
                "aria-checked": i,
                "aria-label": t,
                id: s,
                className: v,
                "data-state": S,
                ...a,
                onClick: M,
                disabled: k,
                children: y
            }), j[29] = t, j[30] = a, j[31] = i, j[32] = k, j[33] = M, j[34] = s, j[35] = S, j[36] = v, j[37] = y, j[38] = w) : w = j[38], w
        }

        function d(e) {
            let t, a, s, d, c = (0, r.c)(16),
                {
                    checked: u,
                    size: m,
                    tone: f,
                    trackClassName: p,
                    thumbClassName: h
                } = e,
                g = void 0 === m ? "default" : m,
                x = void 0 === f ? "accent" : f,
                b = u ? "checked" : "unchecked",
                v = u && ("neutral" === x ? "bg-text" : "bg-chart-blue"),
                y = !u && "bg-text/10",
                w = i[g];
            c[0] !== v || c[1] !== y || c[2] !== w || c[3] !== p ? (t = (0, o.b)("relative inline-flex shrink-0 items-center rounded-full transition-colors duration-basic ease-out", v, y, w, p), c[0] = v, c[1] = y, c[2] = w, c[3] = p, c[4] = t) : t = c[4];
            let j = "neutral" === x && u ? "border-transparent bg-surface" : "border-control-thumb-on-accent bg-control-thumb-on-accent",
                k = l[g];
            return c[5] !== j || c[6] !== k || c[7] !== h ? (a = (0, o.b)("rounded-full border shadow-sm transition-transform duration-basic ease-out data-[state=unchecked]:translate-x-0", j, k, h), c[5] = j, c[6] = k, c[7] = h, c[8] = a) : a = c[8], c[9] !== b || c[10] !== a ? (s = (0, n.jsx)("span", {
                className: a,
                "data-state": b
            }), c[9] = b, c[10] = a, c[11] = s) : s = c[11], c[12] !== b || c[13] !== s || c[14] !== t ? (d = (0, n.jsx)("span", {
                "aria-hidden": !0,
                className: t,
                "data-state": b,
                children: s
            }), c[12] = b, c[13] = s, c[14] = t, c[15] = d) : d = c[15], d
        }
        a.d(t, {
            a: () => s,
            b: () => d
        })
    }),
    aA: (function(e, t, a) {
        let n = "codex:dismiss-tooltips";

        function r() {
            "u" > typeof window && window.dispatchEvent(new Event(n))
        }
        a.d(t, {
            b: () => r
        }, {
            a: n
        })
    }),
    YJk: (function(e, t, a) {
        function n(e) {
            let {
                destinationElement: t,
                destinationSide: a,
                onEnterDestination: n,
                onMoveInsideTriangle: i,
                onMoveOutsideTriangle: l,
                pointer: s,
                sourceElement: d
            } = e;
            if (o(t.getBoundingClientRect()) || null != d && o(d.getBoundingClientRect())) return null;
            let c = t.ownerDocument,
                u = e => {
                    var c, u;
                    let m, f, p, h = e.composedPath();
                    if (h.includes(t) || null != d && h.includes(d)) return void n();
                    let g = {
                            x: e.clientX,
                            y: e.clientY
                        },
                        x = function(e) {
                            let {
                                destinationRect: t,
                                destinationSide: a,
                                pointer: n,
                                sourceRect: r
                            } = e;
                            if (o(t) || null != r && o(r)) return null;
                            if ("left" === a || "right" === a) {
                                let e = "right" === a ? t.left : t.right;
                                return {
                                    start: n,
                                    endA: {
                                        x: e,
                                        y: t.top - 8
                                    },
                                    endB: {
                                        x: e,
                                        y: t.bottom + 8
                                    }
                                }
                            }
                            let i = "bottom" === a ? t.top : t.bottom;
                            return {
                                start: n,
                                endA: {
                                    x: t.left - 8,
                                    y: i
                                },
                                endB: {
                                    x: t.right + 8,
                                    y: i
                                }
                            }
                        }({
                            destinationRect: t.getBoundingClientRect(),
                            destinationSide: a,
                            pointer: s,
                            sourceRect: d?.getBoundingClientRect()
                        });
                    null == x || (m = r(c = g, (u = x).start, u.endA), f = r(c, u.endA, u.endB), p = r(c, u.endB, u.start), (m < 0 || f < 0 || p < 0) && (m > 0 || f > 0 || p > 0)) ? l() : i(g)
                };
            return c.addEventListener("pointermove", u, !0), () => {
                c.removeEventListener("pointermove", u, !0)
            }
        }

        function r(e, t, a) {
            return (e.x - a.x) * (t.y - a.y) - (t.x - a.x) * (e.y - a.y)
        }

        function o(e) {
            return e.width <= 0 || e.height <= 0
        }
        a.d(t, {
            a: () => n
        })
    }),
    Cq: (function(e, t, a) {
        a.d(t, {
            a: () => k,
            b: () => b
        });
        var n = a("A"),
            r = a("Qo"),
            o = a("q1q"),
            i = a("VwG"),
            l = a("on"),
            s = a("zd"),
            d = a("wD9"),
            c = a("bI"),
            u = a("i7"),
            m = a("bf"),
            f = a("e2y"),
            p = a("gi");
        let h = (0, s.createContext)(null),
            g = (0, s.createContext)(null);
        var x = a("aA");

        function b(e) {
            let t, a, o, i, l, d, u, m, f, p, b, v, y, w, j, k, C, N, S, A = (0, r.c)(27),
                {
                    delayDuration: M,
                    skipDelayDuration: E,
                    children: L,
                    portalContainer: T
                } = e,
                z = void 0 === M ? 200 : M,
                I = void 0 === E ? 300 : E,
                P = (0, s.useRef)(null),
                _ = (0, s.useRef)(null),
                O = (0, s.useRef)(null),
                D = (0, s.useRef)(!0);
            A[0] === Symbol.for("react.memo_cache_sentinel") ? (t = new Map, A[0] = t) : t = A[0];
            let R = (0, s.useRef)(t);
            A[1] === Symbol.for("react.memo_cache_sentinel") ? (a = new Map, A[1] = a) : a = A[1];
            let B = (0, s.useRef)(a),
                F = (0, s.useRef)(!1),
                H = (0, s.useRef)(null);
            A[2] !== I ? (o = () => I, A[2] = I, A[3] = o) : o = A[3];
            let W = (0, c.a)(o);
            A[4] === Symbol.for("react.memo_cache_sentinel") ? (i = () => {
                null != H.current && "u" > typeof window && (window.clearTimeout(H.current), H.current = null)
            }, A[4] = i) : i = A[4];
            let Q = i;
            A[5] !== W ? (l = e => {
                if (R.current.delete(e), P.current !== e) return;
                P.current = null, O.current = null, Q();
                let t = W();
                if (!D.current || 0 === t || "u" < typeof window) {
                    _.current = null, F.current = !1;
                    return
                }
                H.current = window.setTimeout(() => {
                    H.current = null, _.current = null, F.current = !1
                }, t)
            }, A[5] = W, A[6] = l) : l = A[6];
            let K = l;
            A[7] === Symbol.for("react.memo_cache_sentinel") ? (d = (e, t, a) => (R.current.set(e, {
                close: a,
                variant: t
            }), () => {
                R.current.delete(e)
            }), A[7] = d) : d = A[7];
            let U = d;
            A[8] === Symbol.for("react.memo_cache_sentinel") ? (u = (e, t, a) => (B.current.set(e, {
                dismiss: t,
                closeOnWindowBlur: a
            }), () => {
                B.current.delete(e)
            }), A[8] = u) : u = A[8];
            let q = u;
            A[9] === Symbol.for("react.memo_cache_sentinel") ? (m = (e, t, a, n) => {
                for (let [t, n] of R.current) t !== e && ("tooltip" === n.variant || "tooltip" !== a) && n.close();
                P.current = e, O.current !== e && (O.current = null), R.current.set(e, {
                    close: n,
                    variant: a
                }), Q(), _.current = t, F.current = !0
            }, A[9] = m) : m = A[9];
            let G = m;
            A[10] === Symbol.for("react.memo_cache_sentinel") ? (f = (e, t) => F.current && _.current === e ? 0 : t, A[10] = f) : f = A[10];
            let $ = f;
            A[11] === Symbol.for("react.memo_cache_sentinel") ? (p = () => {
                let e = Array.from(B.current.values());
                for (let {
                        dismiss: t
                    }
                    of(R.current.clear(), P.current = null, _.current = null, O.current = null, F.current = !1, Q(), e)) t()
            }, A[11] = p) : p = A[11];
            let V = p;
            A[12] === Symbol.for("react.memo_cache_sentinel") ? (b = () => {
                for (let {
                        dismiss: e,
                        closeOnWindowBlur: t
                    }
                    of Array.from(B.current.values())) t && e();
                _.current = null, O.current = null, F.current = !1, Q()
            }, A[12] = b) : b = A[12];
            let Z = b;
            A[13] === Symbol.for("react.memo_cache_sentinel") ? (v = e => {
                O.current === e && (O.current = null)
            }, A[13] = v) : v = A[13];
            let X = v;
            A[14] === Symbol.for("react.memo_cache_sentinel") ? (y = e => null != O.current && O.current !== e, A[14] = y) : y = A[14];
            let Y = y;
            A[15] === Symbol.for("react.memo_cache_sentinel") ? (w = e => {
                O.current = e
            }, A[15] = w) : w = A[15];
            let J = w;
            A[16] !== K || A[17] !== T ? (j = {
                portalContainer: T,
                activateTooltip: G,
                clearHoverHandoffLock: X,
                deactivateTooltip: K,
                getOpenDelay: $,
                isHoverOpenBlocked: Y,
                registerOpenTooltip: U,
                registerTooltipDismissHandler: q,
                setHoverHandoffLockTooltipId: J
            }, A[16] = K, A[17] = T, A[18] = j) : j = A[18];
            let ee = j;
            return A[19] === Symbol.for("react.memo_cache_sentinel") ? (k = () => {
                if ("u" < typeof window) return;
                D.current = !0;
                let e = R.current,
                    t = B.current,
                    a = e => {
                        "Escape" !== e.key || e.target instanceof Element && e.target.closest("[data-tooltip-keyboard-navigation]") || queueMicrotask(V)
                    };
                return window.addEventListener(x.a, V), window.addEventListener("blur", Z), window.addEventListener("keydown", a, !0), () => {
                    D.current = !1, window.removeEventListener(x.a, V), window.removeEventListener("blur", Z), window.removeEventListener("keydown", a, !0), Q(), e.clear(), t.clear()
                }
            }, C = [Q, V, Z], A[19] = k, A[20] = C) : (k = A[19], C = A[20]), (0, s.useEffect)(k, C), A[21] !== ee || A[22] !== L ? (N = (0, n.jsx)(g.Provider, {
                value: ee,
                children: L
            }), A[21] = ee, A[22] = L, A[23] = N) : N = A[23], A[24] !== z || A[25] !== N ? (S = (0, n.jsx)(h.Provider, {
                value: z,
                children: N
            }), A[24] = z, A[25] = N, A[26] = S) : S = A[26], S
        }
        var v = a("YJk"),
            y = a("KIh"),
            w = "accentTheme-Q3vIp2";
        let j = {
            bottom: 0,
            height: 0,
            left: 0,
            right: 0,
            top: 0,
            width: 0,
            x: 0,
            y: 0,
            toJSON: () => ({})
        };

        function k(e) {
            let t, a = (0, r.c)(7);
            (0, s.useContext)(g);
            let o = (0, s.useContext)(h);
            if (e.disabled || null == e.tooltipContent) {
                let t;
                return a[2] !== e.children ? (t = (0, n.jsx)(n.Fragment, {
                    children: e.children
                }), a[2] = e.children, a[3] = t) : t = a[3], t
            }
            let i = e.delayDuration ?? o ?? 200;
            return a[4] !== e || a[5] !== i ? (t = (0, n.jsx)(C, {
                ...e,
                delayDuration: i
            }), a[4] = e, a[5] = i, a[6] = t) : t = a[6], t
        }

        function C(e) {
            var t, a, r, o, i, d, c;
            let u, {
                    children: p,
                    delayOpen: h,
                    open: x,
                    triggerPopupOpen: b = !1,
                    defaultOpen: y,
                    disableHoverOpen: w = !1,
                    onOpenChange: j,
                    onBeforeOpen: k,
                    tooltipContent: C,
                    shortcut: S,
                    sideOffset: I,
                    side: P,
                    variant: _ = "tooltip",
                    coachmarkArrow: O = "default",
                    align: D = "center",
                    alignOffset: R,
                    flipAlignment: B = !0,
                    disablePadding: F = !1,
                    disabled: H,
                    forceMount: W = !1,
                    triggerAsChild: Q = !0,
                    cloneCustomTrigger: K = !1,
                    triggerRef: U,
                    closeOnTriggerClick: q,
                    openOnClick: G = !1,
                    dialogLabel: $,
                    openOnFocusWithin: V = !1,
                    closeOnTriggerBlur: Z = !0,
                    closeOnPointerLeave: X = !0,
                    closeOnWindowBlur: Y = !0,
                    closeOnInteractOutside: J = !1,
                    closeButtonLabel: ee,
                    delayDuration: et,
                    getDelayDuration: ea,
                    selectable: en = !1,
                    scrollable: er = !1,
                    interactive: eo,
                    followPointer: ei = !1,
                    keyboardNavigation: el,
                    scaleAvailableSizeWithZoom: es = !1,
                    color: ed = "default",
                    tooltipClassName: ec,
                    tooltipBodyClassName: eu,
                    tooltipId: em,
                    tooltipMaxWidth: ef,
                    skipDelayKey: ep = "default",
                    openWhen: eh = "always",
                    portalContainer: eg,
                    positioningElement: ex,
                    triggerElement: eb,
                    className: ev,
                    ref: ey,
                    ...ew
                } = e,
                ej = eo ?? (en || null != ee),
                ek = el ?? null != ee,
                eC = (0, s.useId)(),
                eN = em ?? eC,
                [eS, eA] = (0, s.useState)(!0 === y),
                eM = void 0 !== x,
                eE = "tooltip" === _ && !ej && !eM,
                eL = q ?? eE,
                eT = !0 === ei && !ej && "tooltip" === _,
                ez = b && eE && eL;
            ez && eS && eA(!1);
            let eI = (0, s.useRef)(eb ?? null),
                eP = (0, s.useRef)(null),
                e_ = (0, s.useRef)(P ?? "top"),
                eO = (0, s.useRef)(null),
                eD = (0, s.useRef)(null),
                eR = (0, s.useRef)(null),
                eB = (0, s.useRef)(null),
                eF = (0, s.useRef)(!1),
                eH = (0, s.useRef)(null),
                eW = (0, s.useContext)(g),
                eQ = !ez && (x ?? eS),
                eK = (0, s.useRef)(eQ),
                eU = (0, s.useCallback)(() => {
                    eH.current?.(), eH.current = null
                }, []),
                eq = (0, s.useCallback)(() => {
                    null != eR.current && "u" > typeof window && (window.clearTimeout(eR.current), eR.current = null)
                }, []),
                eG = (0, s.useCallback)(() => {
                    null != eB.current && "u" > typeof window && (window.clearTimeout(eB.current), eB.current = null)
                }, []),
                e$ = (0, s.useCallback)(() => {
                    eq(), eG(), eU();
                    let e = eK.current || eM && eQ;
                    eK.current = !1, eW?.deactivateTooltip(eN), e && (eM || eA(!1), j?.(!1))
                }, [eW, eG, eq, eU, eM, eQ, j, eN]),
                eV = (0, s.useCallback)(e => {
                    eK.current === e && (!eM || eQ === e) || e && k?.() === !1 || (eK.current = e, e ? eW?.activateTooltip(eN, ep, _, e$) : (eW?.clearHoverHandoffLock(eN), eW?.deactivateTooltip(eN)), eM || eA(e), j?.(e))
                }, [eW, e$, eM, eQ, k, j, ep, eN, _]);
            (0, s.useLayoutEffect)(() => {
                eK.current = eQ, eq(), eQ || (eG(), eU(), eW?.clearHoverHandoffLock(eN), eW?.deactivateTooltip(eN))
            }, [eW, eG, eq, eU, w, eM, eQ, ez, eN]), (0, s.useEffect)(() => () => {
                eq(), eG(), eU(), eW?.clearHoverHandoffLock(eN), eW?.deactivateTooltip(eN)
            }, [eW, eG, eq, eU, eN]), (0, s.useEffect)(() => eW?.registerTooltipDismissHandler(eN, e$, Y), [eW, e$, Y, eN]), (0, s.useEffect)(() => {
                if (eQ) return eW?.registerOpenTooltip(eN, _, e$)
            }, [eW, e$, eQ, eN, _]);
            let eZ = e => {
                    if (eG(), eU(), !ez && !eQ && !eK.current) {
                        if (null != eR.current) {
                            if (0 !== e) return;
                            eq()
                        }
                        if (L(eI.current, eh)) {
                            if (0 === e || "u" < typeof window) return void eV(!0);
                            eR.current = window.setTimeout(() => {
                                eR.current = null, L(eI.current, eh) && eV(!0)
                            }, e)
                        }
                    }
                },
                eX = (0, s.useCallback)(() => {
                    eq(), eG(), eU(), eV(!1)
                }, [eG, eq, eU, eV]);
            (0, s.useEffect)(() => {
                if (!eQ || !J) return;
                let e = eI.current?.ownerDocument;
                if (null == e) return;
                let t = e => {
                    E(eI.current, e.target) || E(eP.current, e.target) || eX()
                };
                return e.addEventListener("pointerdown", t, !0), e.addEventListener("click", t, !0), e.addEventListener("focusin", t, !0), () => {
                    e.removeEventListener("pointerdown", t, !0), e.removeEventListener("click", t, !0), e.removeEventListener("focusin", t, !0)
                }
            }, [J, eX, eQ]);
            let eY = () => {
                    eW?.clearHoverHandoffLock(eN), eG(), eU()
                },
                eJ = () => {
                    let e = eP.current;
                    if (ek && ej && e?.contains(e.ownerDocument.activeElement)) return;
                    let t = en ? e?.ownerDocument.getSelection() : null;
                    t?.isCollapsed === !1 && (e?.contains(t.anchorNode) || e?.contains(t.focusNode)) || eX()
                },
                e0 = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "content";
                    if (eq(), eG(), eU(), "u" < typeof window) return void eX();
                    let a = e => {
                            eG(), eB.current = window.setTimeout(() => {
                                eB.current = null;
                                let t = eI.current,
                                    a = eP.current,
                                    n = t?.ownerDocument,
                                    r = null != n && "function" == typeof n.elementFromPoint ? n.elementFromPoint(e.x, e.y) : null;
                                t?.contains(r) === !0 || a?.contains(r) === !0 ? null == eH.current ? eY() : eW?.clearHoverHandoffLock(eN) : eJ()
                            }, 100)
                        },
                        n = eP.current,
                        r = eI.current,
                        o = {
                            x: e.clientX,
                            y: e.clientY
                        };
                    if (null == n || null == r) return void a(o);
                    let i = "reference" === t,
                        l = (0, v.a)({
                            destinationElement: i ? r : n,
                            destinationSide: i ? A(e_.current) : e_.current,
                            onEnterDestination: eY,
                            onMoveInsideTriangle: a,
                            onMoveOutsideTriangle: eJ,
                            pointer: o,
                            sourceElement: i ? n : r
                        });
                    null != l && (eW?.setHoverHandoffLockTooltipId(eN), eH.current = l), a(o)
                },
                e1 = e => {
                    if (w || !E(eI.current, e.target) || eL && eF.current || "touch" === e.pointerType || eW?.isHoverOpenBlocked(eN) === !0) return;
                    eT && ("mouse" === e.pointerType ? (eO.current = new DOMRect(e.clientX, e.clientY), eD.current?.()) : null != eO.current && (eO.current = null, eD.current?.())), eW?.clearHoverHandoffLock(eN);
                    let t = et ?? 0;
                    h && (t = 250), t = eW?.getOpenDelay(ep, t) ?? t, eZ(t = ea?.(e, t) ?? t)
                },
                e2 = e => {
                    let t;
                    if (!ek) {
                        "Escape" === e.key && eX();
                        return
                    }
                    if (e.defaultPrevented) return;
                    let a = eP.current,
                        n = eI.current,
                        r = null == n || n.tabIndex >= 0 ? n : M(n)[0],
                        o = E(a, e.target);
                    if ("Escape" === e.key) {
                        ej && o && E(a, a?.ownerDocument.activeElement ?? null) && (e.preventDefault(), e.stopPropagation(), r?.focus({
                            preventScroll: !0
                        })), eX();
                        return
                    }
                    if ("Tab" !== e.key || e.altKey || e.ctrlKey || e.metaKey || !ej || !eQ || null == a || null == n) return;
                    let i = M(a);
                    if (o || e.shiftKey) {
                        if (o && e.shiftKey && e.target === i[0]) t = r ?? void 0;
                        else if (o && !e.shiftKey && e.target === i.at(-1)) {
                            let e = M(n.ownerDocument.body).filter(e => !a.contains(e)),
                                o = e.findIndex(e => e === r);
                            null != (t = o < 0 ? void 0 : e[o + 1]) && Z && eX()
                        }
                    } else t = i[0];
                    null != t && (e.preventDefault(), t.focus({
                        preventScroll: !0
                    }))
                },
                e3 = eQ ? "delayed-open" : "closed",
                e5 = {
                    "aria-describedby": eQ && null == $ ? eN : void 0,
                    ...null != $ ? {
                        "aria-controls": eQ ? eN : void 0,
                        "aria-haspopup": "dialog",
                        "aria-expanded": eQ
                    } : {},
                    "data-state": e3,
                    onClick(e) {
                        G && !e.defaultPrevented ? eZ(0) : eL && E(eI.current, e.target) && (eF.current = !0, eX())
                    },
                    onBlur(e) {
                        !Z || ej && E(eP.current, e.relatedTarget) || eX()
                    },
                    onContextMenu() {
                        eq(), eX()
                    },
                    onFocus(e) {
                        let t = "nativeEvent" in e ? e.currentTarget : eb ?? null;
                        if (eL && (t = eI.current), V && e.target instanceof HTMLElement && (t = e.target), eL && e.defaultPrevented) {
                            eF.current = !0, eX();
                            return
                        }!e.defaultPrevented && (!eL || E(eI.current, e.target)) && function(e) {
                            try {
                                return e?.matches(":focus-visible") === !0
                            } catch {
                                return !1
                            }
                        }(t) && (eF.current = !1, null != eO.current && (eO.current = null, eD.current?.()), eZ(0))
                    },
                    onKeyDown: e2,
                    onPointerEnter(e) {
                        E(eI.current, e.target) && (eF.current = !1, ej && eQ && eY()), e1(e)
                    },
                    onPointerLeave(e) {
                        if (eq(), X) {
                            if (ej) return void e0(e);
                            eX(), null != eO.current && (eO.current = null, eD.current?.())
                        }
                    },
                    onPointerMove: e1
                },
                e4 = (0, s.useEffectEvent)(() => e5);
            (0, s.useEffect)(() => {
                if (!ek || !ej || !eQ) return;
                let e = e => {
                    "Escape" === e.key && E(eP.current, e.target) && e4().onKeyDown(e)
                };
                return window.addEventListener("keydown", e, !0), () => window.removeEventListener("keydown", e, !0)
            }, [ej, eQ, ek]), (0, s.useEffect)(() => {
                if (null == eb) return;
                eI.current = eb;
                let e = new AbortController,
                    t = (t, a) => {
                        eb.addEventListener(t, a, {
                            signal: e.signal
                        })
                    };
                return t("click", e => e4().onClick(e)), t("focusout", e => e4().onBlur(e)), t("focusin", e => e4().onFocus(e)), t("contextmenu", () => e4().onContextMenu()), t("keydown", e => e4().onKeyDown(e)), t("pointerover", e => {
                    E(eb, e.relatedTarget) || e4().onPointerEnter(e)
                }), t("pointerout", e => {
                    E(eb, e.relatedTarget) || e4().onPointerLeave(e)
                }), t("pointermove", e => e4().onPointerMove(e)), () => {
                    e.abort(), eq(), eG(), eU(), eW?.clearHoverHandoffLock(eN)
                }
            }, [eW, eG, eq, eU, eN, eb]);
            let e6 = {
                    ...e5,
                    ...ew,
                    className: ev,
                    onClick: eL || G ? e => {
                        ew.onClick?.(e), e5.onClick(e)
                    } : ew.onClick,
                    onBlur(e) {
                        ew.onBlur?.(e), e5.onBlur?.(e)
                    },
                    onContextMenu(e) {
                        ew.onContextMenu?.(e), e5.onContextMenu?.()
                    },
                    onFocus(e) {
                        ew.onFocus?.(e), e5.onFocus?.(e)
                    },
                    onKeyDown(e) {
                        ew.onKeyDown?.(e), e5.onKeyDown?.(e)
                    },
                    onPointerEnter(e) {
                        ew.onPointerEnter?.(e), e5.onPointerEnter?.(e)
                    },
                    onPointerLeave(e) {
                        ew.onPointerLeave?.(e), e5.onPointerLeave?.(e)
                    },
                    onPointerMove(e) {
                        ew.onPointerMove?.(e), e5.onPointerMove?.(e)
                    }
                },
                e7 = e => {
                    eI.current = e, T(ey, e)
                },
                e8 = (0, s.isValidElement)(p) ? p.props.ref : void 0,
                e9 = (0, s.useCallback)(e => {
                    eI.current = e, T(ey, e), T(e8, e), z(U, e)
                }, [e8, ey, U]);
            return u = null != eb ? p : Q ? (0, s.isValidElement)(p) ? "string" == typeof p.type || K ? (t = p, a = e6, r = e5["aria-describedby"], o = eL || G, i = e9, (0, s.cloneElement)(t, {
                ...a,
                "aria-describedby": (d = t.props["aria-describedby"], c = r, null == d ? c : null == c ? d : `${d} ${c}`),
                className: (0, l.b)(t.props.className, a.className),
                style: {
                    ...a.style,
                    ...t.props.style
                },
                ref: i,
                onClick: o ? e => {
                    t.props.onClick?.(e), a.onClick?.(e)
                } : a.onClick ?? t.props.onClick,
                onBlur: e => {
                    t.props.onBlur?.(e), a.onBlur?.(e)
                },
                onContextMenu: e => {
                    t.props.onContextMenu?.(e), a.onContextMenu?.(e)
                },
                onFocus: e => {
                    t.props.onFocus?.(e), a.onFocus?.(e)
                },
                onKeyDown: e => {
                    t.props.onKeyDown?.(e), a.onKeyDown?.(e)
                },
                onPointerEnter: e => {
                    t.props.onPointerEnter?.(e), a.onPointerEnter?.(e)
                },
                onPointerLeave: e => {
                    t.props.onPointerLeave?.(e), a.onPointerLeave?.(e)
                },
                onPointerMove: e => {
                    t.props.onPointerMove?.(e), a.onPointerMove?.(e)
                }
            })) : (0, n.jsx)("span", {
                ref: e => {
                    var t;
                    let a, n = e?.firstElementChild ?? null;
                    e7((t = n, null == (a = t?.ownerDocument.defaultView) ? t instanceof HTMLElement : t instanceof a.HTMLElement) ? n : e)
                },
                ...e6,
                className: (0, l.b)("contents", ev),
                children: p
            }) : (0, n.jsx)("span", {
                ref: e7,
                ...e6,
                children: p
            }) : (0, n.jsx)("button", {
                ref: e => {
                    e7(e), z(U, e)
                },
                type: "button",
                ...e6,
                children: p
            }), (0, n.jsxs)(n.Fragment, {
                children: [u, eQ || W ? (0, n.jsx)(N, {
                    id: eN,
                    className: ec,
                    align: D,
                    alignOffset: R,
                    flipAlignment: B,
                    contentRef: eP,
                    disablePadding: F,
                    dialogLabel: $,
                    color: ed,
                    coachmarkArrow: O,
                    followPointer: eT,
                    keyboardNavigation: ek && ej,
                    maxWidth: ef,
                    open: eQ,
                    onBlur: ej && Z ? e => {
                        E(e.currentTarget, e.relatedTarget) || E(eI.current, e.relatedTarget) || eX()
                    } : void 0,
                    onKeyDown: ej ? e2 : void 0,
                    onPointerEnter: ej ? eY : void 0,
                    onPointerLeave: ej && X ? e => {
                        e0(e, "reference")
                    } : void 0,
                    placementSideRef: e_,
                    portalContainer: eg ?? eW?.portalContainer,
                    pointerAnchorRef: eO,
                    positioningElement: ex ?? eb,
                    referenceElementRef: eI,
                    scaleAvailableSizeWithZoom: es,
                    selectable: en,
                    scrollable: er,
                    side: P,
                    sideOffset: I,
                    updatePositionRef: eT ? eD : void 0,
                    variant: _,
                    children: (0, n.jsxs)("div", {
                        className: (0, l.b)("flex gap-2", "tooltip" === _ ? "items-center" : "items-stretch", "tooltip" !== _ && "min-h-0 flex-1"),
                        children: [(0, n.jsx)("div", {
                            className: (0, l.b)("min-w-0", "tooltip" !== _ && "flex min-h-0 w-full", "coachmark" === _ && "overflow-y-auto", "coachmark" === _ && !F && "px-4 py-3", null != ee && "flex items-start gap-2", eu),
                            children: null == ee ? C : (0, n.jsxs)(n.Fragment, {
                                children: [C, (0, n.jsx)("button", {
                                    className: "relative flex size-4 shrink-0 cursor-interaction items-center justify-center rounded-sm before:absolute before:-inset-1 focus-visible:outline-2 focus-visible:outline-current",
                                    "aria-label": ee,
                                    onClick: e => {
                                        e.stopPropagation(), eI.current?.focus({
                                            preventScroll: !0
                                        }), eX()
                                    },
                                    type: "button",
                                    children: (0, n.jsx)(m.aj, {})
                                })]
                            })
                        }), S ? (0, n.jsx)(f.a, {
                            keysLabel: S,
                            variant: "tooltip" === _ && "default" === ed ? "tooltip" : "default"
                        }) : null]
                    })
                }) : null]
            })
        }

        function N(e) {
            var t, a;
            let {
                align: r,
                alignOffset: m,
                flipAlignment: f,
                children: h,
                className: g,
                color: x,
                coachmarkArrow: b,
                contentRef: v,
                disablePadding: k,
                dialogLabel: C,
                followPointer: N,
                id: M,
                keyboardNavigation: E,
                maxWidth: L,
                open: z,
                onBlur: I,
                onKeyDown: P,
                onPointerEnter: _,
                onPointerLeave: O,
                placementSideRef: D,
                portalContainer: R,
                pointerAnchorRef: B,
                positioningElement: F,
                referenceElementRef: H,
                scaleAvailableSizeWithZoom: W,
                selectable: Q,
                scrollable: K,
                side: U,
                sideOffset: q,
                updatePositionRef: G,
                variant: $
            } = e, V = (0, s.useContext)(p.a), Z = (0, d.c)(), X = (0, s.useRef)(F), [Y, J] = (0, s.useState)(null), [ee, et] = (0, s.useState)("top"), ea = null == U && "tooltip" === $ && ("default" === x || "classicLight" === x), [en] = (0, s.useState)(() => ({
                get contextElement() {
                    return X.current ?? H.current ?? void 0
                },
                getBoundingClientRect: () => B.current ?? X.current?.getBoundingClientRect() ?? H.current?.getBoundingClientRect() ?? j
            }));
            (0, s.useLayoutEffect)(() => {
                X.current = F, N || (B.current = null)
            }, [N, B, F]);
            let er = null == R && 1 !== Z,
                eo = er ? Z : 1,
                ei = "coachmark" === $ ? eo : 1,
                el = W || "rich" === $ || "fileCitation" === $ ? eo : ei,
                es = "curved" === b,
                ed = "left" === U || "right" === U,
                ec = 12,
                eu = 12;
            es && (ec = ed ? 14 : 36, eu = ed ? 36 : 14);
            let em = (0, c.a)(() => N && null != B.current),
                ef = (0, o.h)({
                    elements: {
                        reference: N ? en : F ?? en
                    },
                    open: !0,
                    placement: (t = U ?? (ea ? ee : "top"), null == (a = r) || "center" === a ? t : `${t}-${a}`),
                    middleware: [(0, o.e)(e => {
                        let {
                            placement: t
                        } = e, a = q ?? 2;
                        return em() && null == q && (a = 12), null == q && "tooltip" === $ && "default" === x && (a = "bottom" === S(t) ? 6 : 4), {
                            mainAxis: a * ei,
                            crossAxis: (m ?? 0) * ei
                        }
                    }), (0, o.b)({
                        padding: 8,
                        flipAlignment: f,
                        crossAxis: f,
                        fallbackAxisSideDirection: "rich" === $ || "fileCitation" === $ ? "end" : "none"
                    }), (0, o.f)({
                        padding: 8
                    }), (0, o.g)({
                        padding: 8,
                        apply(e) {
                            let {
                                availableWidth: t,
                                availableHeight: a,
                                elements: n,
                                rects: r
                            } = e;
                            n.floating.style.setProperty("--radix-tooltip-trigger-width", `${Math.max(0,r.reference.width)}px`), n.floating.style.setProperty("--radix-tooltip-content-available-width", `${Math.max(0,t)/el}px`), n.floating.style.setProperty("--radix-tooltip-content-available-height", `${Math.max(0,a)/el}px`)
                        }
                    }), "coachmark" === $ && (0, o.a)({
                        element: Y,
                        padding: 16 * ei
                    })],
                    whileElementsMounted: (e, t, a) => (0, i.b)(e, t, () => {
                        let e = H.current;
                        ea && null != e && et("bottom" === getComputedStyle(e).getPropertyValue("--side-tooltip").trim() ? "bottom" : "top"), a()
                    })
                });
            (0, s.useLayoutEffect)(() => {
                if (null != G) return G.current = ef.update, () => {
                    G.current = null
                }
            }, [ef.update, G]);
            let ep = S(ef.placement),
                eh = ef.refs.setFloating,
                eg = (0, s.useCallback)(e => {
                    er || eh(e), T(v, e), null != e && (D.current = ep)
                }, [v, ep, D, eh, er]);
            if ("u" < typeof document) return null;
            let ex = "coachmark" === $ ? (0, n.jsx)("div", {
                    ref: J,
                    className: (0, l.b)("pointer-events-none absolute", "accent" === x && w, !es && ["rotate-45 rounded-2xs", "surface" === x ? "bg-surface-elevated-secondary" : "bg-coachmark"]),
                    style: {
                        width: ec * ei,
                        height: eu * ei,
                        left: ef.middlewareData.arrow?.x,
                        top: ef.middlewareData.arrow?.y,
                        [A(ep)]: -(es ? 14 : 6) * ei
                    },
                    children: es && (0, n.jsx)("svg", {
                        className: ed ? void 0 : "rtl:-scale-x-100",
                        "aria-hidden": "true",
                        width: "100%",
                        height: "100%",
                        viewBox: `0 0 ${ec} ${eu}`,
                        fill: "surface" === x ? "var(--color-surface-elevated-secondary)" : "var(--color-background-coachmark)",
                        children: (0, n.jsx)("path", {
                            d: "M0 0C4 0 6.5 1.2963 8 4.40741C9.5 7.77778 9 10.8889 11 12.7037C12.25 13.7407 13.75 13.7407 15 12.4444C19.25 7.51852 25.5 2.59259 32 0.777778C33.75 0.259259 34.75 0 36 0H0Z",
                            transform: {
                                top: void 0,
                                bottom: "translate(0 14) scale(1 -1)",
                                left: "matrix(0 -1 1 0 0 36)",
                                right: "matrix(0 1 -1 0 14 0)"
                            } [ep]
                        })
                    })
                }) : null,
                eb = (0, n.jsxs)("div", {
                    id: M,
                    ref: eg,
                    "data-overlay-owner": V?.id,
                    "data-side": ep,
                    "data-tooltip-keyboard-navigation": E ? "" : void 0,
                    "aria-hidden": z ? void 0 : "true",
                    hidden: !z && "unstyled" !== $,
                    role: null == C ? "tooltip" : "dialog",
                    "aria-label": C,
                    className: (0, l.b)("w-fit text-sm whitespace-normal break-words", "accent" === x && w, "tooltip" === $ && !K && "min-h-min", K && "overflow-y-auto", Q ? "select-text" : "select-none", "floating-navigation-rail" === $ ? "z-20 flex flex-col" : (0, l.b)("z-50", "tooltip" !== $ && "flex flex-col", "tooltip" !== $ && "coachmark" !== $ && "fileCitation" !== $ && "m-px"), ("rich" === $ || "entityPreview" === $) && "bg-surface-elevated-secondary text-default ring-border shadow-xl-spread ring-[0.5px]", "rich" === $ && "rounded-xl", "fileCitation" === $ && y.a.palette, "fileCitation" === $ && y.a.fileHoverCard, "fileCitation" === $ && "overflow-hidden border border-default text-default", "fileCitation" === $ && "tracking-normal", "entityPreview" === $ && "rounded-3xl", "coachmark" === $ && (0, l.b)("relative rounded-2xl shadow-lg", "surface" === x ? "bg-surface-elevated-secondary text-default" : "bg-coachmark text-coachmark"), "tooltip" === $ && "default" === x && ["textTheme-uIegu3", "text-center"], "tooltip" === $ && "classicLight" === x && "text-center", "tooltip" === $ && "surface" === x && "rounded-md bg-surface-elevated-secondary text-secondary ring-border shadow-xl-spread ring-[0.5px]", "tooltip" === $ && "classicLight" === x && "rounded-full border border-(color:--color-border-tooltip-classic) bg-(--color-background-tooltip-classic) text-(color:--color-text-tooltip-classic) text-[14px] leading-[18px] font-semibold tracking-(--tracking-tooltip) shadow-(--shadow-tooltip)", "tooltip" === $ && "surface" !== x && "classicLight" !== x && ("inverse" === x ? "border-text bg-primary-solid text-primary-solid rounded-2xl border" : "rounded-2xl border border-(color:--color-border-tooltip) bg-(--color-background-tooltip) text-(color:--color-text-tooltip) leading-4.5 font-(weight:--tooltip-compact-font-weight) tracking-(--tracking-tooltip) shadow-(--shadow-tooltip)"), "tooltip" === $ && !k && ("surface" === x || "inverse" === x ? "px-2 py-1.5" : "px-3 py-1.25"), z && (null != _ || null != O) ? "pointer-events-auto" : "pointer-events-none", g),
                    style: {
                        ...er ? void 0 : ef.floatingStyles,
                        zoom: er ? Z : void 0,
                        maxWidth: L ?? ("fileCitation" === $ ? "min(346px, var(--radix-tooltip-content-available-width), calc(100vw - 16px))" : "min(20rem, var(--radix-tooltip-content-available-width), calc(100vw - 16px))"),
                        maxHeight: "min(var(--radix-tooltip-content-available-height), calc(100vh - 16px))"
                    },
                    onBlur: I,
                    onKeyDown: P,
                    onPointerEnter: _,
                    onPointerLeave: O,
                    children: [h, !er && ex]
                });
            return (0, n.jsx)(u.a, {
                container: R ?? document.body,
                children: er ? (0, n.jsxs)("div", {
                    ref: eh,
                    className: "pointer-events-none z-50",
                    "data-overlay-owner": V?.id,
                    style: ef.floatingStyles,
                    children: [eb, ex]
                }) : eb
            })
        }

        function S(e) {
            return "top" === e || e.startsWith("top-") ? "top" : "right" === e || e.startsWith("right-") ? "right" : "bottom" === e || e.startsWith("bottom-") ? "bottom" : "left"
        }

        function A(e) {
            switch (e) {
                case "top":
                    return "bottom";
                case "right":
                    return "left";
                case "bottom":
                    return "top";
                case "left":
                    return "right"
            }
        }

        function M(e) {
            return Array.from(e.querySelectorAll("a[href], button, input, select, textarea, [tabindex], [contenteditable]")).filter(e => {
                if (e.tabIndex < 0 && (e.hasAttribute("tabindex") || !e.matches('[contenteditable="true"], [contenteditable=""], [contenteditable="plaintext-only"]')) || e.matches(":disabled") || null != e.closest("[inert], [hidden]") || "hidden" === getComputedStyle(e).visibility) return !1;
                for (let t = e; t; t = t.parentElement)
                    if ("none" === getComputedStyle(t).display) return !1;
                return !0
            }).sort((e, t) => (e.tabIndex > 0 ? e.tabIndex : 1 / 0) - (t.tabIndex > 0 ? t.tabIndex : 1 / 0))
        }

        function E(e, t) {
            return t instanceof(e?.ownerDocument.defaultView?.Node ?? Node) && e?.contains(t) === !0
        }

        function L(e, t) {
            switch (t) {
                case "always":
                    return !0;
                case "trigger-overflows":
                    let a;
                    return null != (a = e?.querySelector("[data-tooltip-overflow-target]") ?? e) && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight);
                case "visibility-target-hidden": {
                    let t = e?.querySelector("[data-tooltip-visibility-target]");
                    return null != t && "none" === getComputedStyle(t).display
                }
            }
        }

        function T(e, t) {
            if (null != e) {
                if ("function" == typeof e) return void e(t);
                e.current = t
            }
        }

        function z(e, t) {
            if (null != e) {
                var a;
                let n;
                if (null == t || (a = t, null == (n = a?.ownerDocument.defaultView) ? a instanceof HTMLButtonElement : a instanceof n.HTMLButtonElement)) {
                    if ("function" == typeof e) return void e(t);
                    e.current = t
                }
            }
        }
    }),
    f2: (function(e, t, a) {
        a.d(t, {
            a: () => l
        });
        var n = a("A"),
            r = a("Qo"),
            o = a("on"),
            i = a("aq");

        function l() {
            let e, t = (0, r.c)(1);
            return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)("span", {
                ref: i.a,
                className: "flex items-center justify-center gap-1",
                "aria-hidden": !0,
                children: [0, 1, 2].map(s)
            }), t[0] = e) : e = t[0], e
        }

        function s(e) {
            return (0, n.jsx)("span", {
                className: (0, o.b)("h-1 w-1 rounded-full bg-text/70", "waveDot-qgKugp")
            }, e)
        }
    }),
    D3: (function(e, t, a) {
        var n = a("Qo"),
            r = a("Xnl"),
            o = a("aM"),
            i = a("hz"),
            l = a("AD"),
            s = a("Qz"),
            d = a("k9");

        function c(e) {
            let t, a, c = (0, n.c)(8),
                {
                    href: u,
                    isBrowserEnabled: m,
                    openTarget: f,
                    useExternalBrowser: p
                } = e;
            c[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                name: "browser.in-app"
            }, c[0] = t) : t = c[0];
            let h = (0, r.x)(i.a, t).isCapable,
                g = m ?? h,
                x = (0, s.a)(),
                b = (0, l.j)(o.ef.openLocalUrlInTargetPreference);
            return c[1] !== u || c[2] !== g || c[3] !== x || c[4] !== b || c[5] !== f || c[6] !== p ? (a = (0, o.Uf)({
                browserPaneEnabled: g,
                openLinkInTargetPreference: x,
                openLocalUrlInTargetPreference: b,
                openTarget: f,
                url: (0, d.a)(u),
                useExternalBrowser: p
            }), c[1] = u, c[2] = g, c[3] = x, c[4] = b, c[5] = f, c[6] = p, c[7] = a) : a = c[7], a
        }
        a.d(t, {
            a: () => c
        })
    }),
    oQw: (function(e, t, a) {
        var n = a("Qo"),
            r = a("aM"),
            o = a("zd"),
            i = a("ns");
        let l = r.Ld.codeFontSize.default;

        function s(e) {
            let t, a, r, l, s, d = (0, n.c)(16),
                {
                    text: u,
                    collapsedLineCount: m,
                    fallbackFontSizePx: f,
                    forceCollapsible: p
                } = e,
                [h, g] = (0, o.useState)(null),
                [x, b] = (0, o.useState)(!1),
                v = (0, o.useRef)(null);
            d[0] !== m || d[1] !== f ? (t = (e, t) => {
                let a = c(e, t, m, f);
                b(a?.collapsedHeightPx != null && null != a.contentHeightPx && a.contentHeightPx > a.collapsedHeightPx + 1)
            }, d[0] = m, d[1] = f, d[2] = t) : t = d[2];
            let y = t;
            d[3] !== y ? (a = (e, t) => {
                y(t, e.contentRect.width)
            }, d[3] = y, d[4] = a) : a = d[4];
            let w = (0, i.b)(a);
            d[5] !== m || d[6] !== f || d[7] !== w || d[8] !== y ? (r = e => {
                w(e);
                let t = v.current;
                null != e && (t?.element !== e || t.collapsedLineCount !== m || t.fallbackFontSizePx !== f) && (v.current = {
                    element: e,
                    collapsedLineCount: m,
                    fallbackFontSizePx: f
                }, y(e, e.clientWidth))
            }, d[5] = m, d[6] = f, d[7] = w, d[8] = y, d[9] = r) : r = d[9];
            let j = r,
                k = x || void 0 !== p && p ? h === u ? "expanded" : "collapsed" : "uncollapsible";
            d[10] !== u ? (l = () => {
                g(e => e === u ? null : u)
            }, d[10] = u, d[11] = l) : l = d[11];
            let C = l;
            return d[12] !== k || d[13] !== C || d[14] !== j ? (s = {
                setTextContentMeasurementRef: j,
                collapseState: k,
                handleToggleExpansion: C
            }, d[12] = k, d[13] = C, d[14] = j, d[15] = s) : s = d[15], s
        }

        function d(e) {
            let t, a, r, l, s = (0, n.c)(13),
                {
                    collapsedLineCount: d,
                    fallbackFontSizePx: u
                } = e,
                [m, f] = (0, o.useState)(null),
                p = (0, o.useRef)(null);
            s[0] !== d || s[1] !== u ? (t = (e, t) => {
                let a = c(e, t, d, u);
                f(e => e?.collapsedHeightPx === a?.collapsedHeightPx && e?.contentHeightPx === a?.contentHeightPx && e?.font === a?.font && e?.lineHeightPx === a?.lineHeightPx && (null != d || e?.maxWidthPx === a?.maxWidthPx) && e?.element === a?.element && e?.fallbackFontSizePx === a?.fallbackFontSizePx ? e : a)
            }, s[0] = d, s[1] = u, s[2] = t) : t = s[2];
            let h = t;
            s[3] !== h ? (a = (e, t) => {
                h(t, e.contentRect.width)
            }, s[3] = h, s[4] = a) : a = s[4];
            let g = (0, i.b)(a);
            s[5] !== d || s[6] !== u || s[7] !== g || s[8] !== h ? (r = e => {
                g(e);
                let t = p.current;
                null != e && (t?.element !== e || t.collapsedLineCount !== d || t.fallbackFontSizePx !== u) && (p.current = {
                    element: e,
                    collapsedLineCount: d,
                    fallbackFontSizePx: u
                }, h(e, e.clientWidth))
            }, s[5] = d, s[6] = u, s[7] = g, s[8] = h, s[9] = r) : r = s[9];
            let x = r;
            return s[10] !== x || s[11] !== m ? (l = {
                setTextMeasurementRef: x,
                textMeasurement: m
            }, s[10] = x, s[11] = m, s[12] = l) : l = s[12], l
        }

        function c(e, t, a, n) {
            var r, o, i, l, s, d;
            let c, u, m = Math.floor(t);
            if (m <= 0) return null;
            let f = window.getComputedStyle(e),
                p = (r = f, o = n, Number.isFinite(c = Number.parseFloat(r.fontSize)) ? c : o),
                h = (i = f, l = p, Number.isFinite(u = Number.parseFloat(i.lineHeight)) ? u : 1.5 * l);
            return {
                collapsedHeightPx: null == a ? null : Math.ceil(h * a),
                contentHeightPx: null == a ? null : Math.ceil(e.scrollHeight),
                element: e,
                fallbackFontSizePx: n,
                font: (s = f, d = p, [s.fontStyle || "normal", s.fontVariant || "normal", s.fontWeight || "400", `${d}px`, s.fontFamily || "sans-serif"].join(" ")),
                lineHeightPx: h,
                maxWidthPx: m
            }
        }
        a.d(t, {
            b: () => s,
            c: () => d
        }, {
            a: l
        })
    }),
    KIK: (function(e, t, a) {
        var n = a("Qo"),
            r = a("zd");
        let o = (0, r.createContext)(null),
            i = new Date,
            l = new Set,
            s = null;

        function d(e) {
            let t, a, i = (0, n.c)(5),
                l = (0, r.useContext)(o);
            i[0] !== l ? (t = null == l ? h : g(l), i[0] = l, i[1] = t) : t = i[1];
            let s = t;
            i[2] !== s || i[3] !== e ? (a = () => {
                let t = s();
                return null == e ? t : e(t)
            }, i[2] = s, i[3] = e, i[4] = a) : a = i[4];
            let d = a;
            return (0, r.useSyncExternalStore)(null == l ? p : x, d, d)
        }

        function c(e) {
            let t, a, s = (0, n.c)(5),
                d = (0, r.useContext)(o);
            s[0] !== d ? (t = null == d ? h : g(d), s[0] = d, s[1] = t) : t = s[1];
            let c = t;
            s[2] !== d || s[3] !== e ? (a = null == d && null != e ? t => (function(e, t) {
                let a = new Date;
                if (a.getTime() >= t) return i = a, () => {};
                let n = !0,
                    r = window.setTimeout(() => {
                        r = null, i = new Date, e(), s()
                    }, t - a.getTime()),
                    o = () => {
                        e(), i.getTime() >= t && s()
                    },
                    s = () => {
                        n && (n = !1, l.delete(o), null != r && (window.clearTimeout(r), r = null), 0 === l.size && f())
                    };
                return l.add(o), 1 === l.size && m(), s
            })(t, e) : x, s[2] = d, s[3] = e, s[4] = a) : a = s[4];
            let u = a;
            return (0, r.useSyncExternalStore)(u, c, c)
        }

        function u() {
            for (let e of (i = new Date, Array.from(l))) e()
        }

        function m() {
            null == s && "u" > typeof window && (u(), s = window.setInterval(() => {
                u()
            }, 6e4))
        }

        function f() {
            null != s && (window.clearInterval(s), s = null)
        }

        function p(e) {
            return l.add(e), 1 === l.size && m(), () => {
                l.delete(e), 0 === l.size && f()
            }
        }

        function h() {
            return i
        }

        function g(e) {
            let t = new Date(e);
            return () => t
        }

        function x() {
            return () => {}
        }
        a.d(t, {
            a: () => p,
            b: () => d,
            c: () => c
        })
    }),
    XcN: (function(e, t, a) {
        function n(e) {
            let {
                browser: t = !1,
                chromeExtension: a = !1,
                extension: n = !1,
                electron: r = !1
            } = e;
            return t && !0 || r && !1
        }
        a.d(t, {
            a: () => n
        })
    }),
    Ho8: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("Xnl"),
            i = a("JhD"),
            l = a("WAV");

        function s(e) {
            let t, a, o, i, s = (0, r.c)(10);
            return s[0] !== e.children ? (t = (0, n.jsx)(d, {
                children: e.children
            }), s[0] = e.children, s[1] = t) : t = s[1], s[2] !== e || s[3] !== t ? (a = (0, n.jsx)(l.b, {
                ...e,
                children: t
            }), s[2] = e, s[3] = t, s[4] = a) : a = s[4], s[5] !== e ? (o = (0, n.jsx)(l.a, {
                ...e
            }), s[5] = e, s[6] = o) : o = s[6], s[7] !== a || s[8] !== o ? (i = (0, n.jsxs)(n.Fragment, {
                children: [a, o]
            }), s[7] = a, s[8] = o, s[9] = i) : i = s[9], i
        }

        function d(e) {
            let t, a = (0, r.c)(3),
                {
                    children: l
                } = e,
                s = (0, o.A)(i.a);
            return a[0] !== l || a[1] !== s ? (t = s ? null : (0, n.jsx)(n.Fragment, {
                children: l
            }), a[0] = l, a[1] = s, a[2] = t) : t = a[2], t
        }
        a.d(t, {
            a: () => s
        })
    }),
    WAV: (function(e, t, a) {
        var n = a("A"),
            r = a("Qo"),
            o = a("XcN");

        function i(e) {
            let t, a = (0, r.c)(2);
            return a[0] !== e ? (t = (0, o.a)(e) ? (0, n.jsx)(n.Fragment, {
                children: e.children
            }) : null, a[0] = e, a[1] = t) : t = a[1], t
        }

        function l(e) {
            let t, a = (0, r.c)(2);
            return a[0] !== e ? (t = (0, o.a)(e) ? null : (0, n.jsx)(n.Fragment, {
                children: e.children
            }), a[0] = e, a[1] = t) : t = a[1], t
        }
        a.d(t, {
            a: () => l,
            b: () => i
        })
    }),
    KGR: (function(e, t, a) {
        a.d(t, {
            a: () => u
        });
        var n = a("A"),
            r = a("Qo"),
            o = a("oy"),
            i = a("Qg"),
            l = a("HOL"),
            s = a("ztr"),
            d = a("zVM"),
            c = a("apJ");

        function u(e) {
            let t, a = (0, r.c)(8),
                {
                    count: u
                } = e;
            if (null != u && u > 0) {
                let e, t, r;
                a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(l.a, {
                    asset: s.a,
                    focusable: "false"
                }), a[0] = e) : e = a[0];
                let d = u > 9;
                return a[1] !== u ? (t = u > 9 ? (0, n.jsx)(o.a, {
                    id: "tabStackIcon.overflowCount",
                    defaultMessage: "{count, number}+",
                    description: "Compact tab count when more than 9 tabs are open",
                    values: {
                        count: 9
                    }
                }) : (0, n.jsx)(i.c, {
                    value: u
                }), a[1] = u, a[2] = t) : t = a[2], a[3] !== d || a[4] !== t ? (r = (0, n.jsxs)("span", {
                    className: "relative inline-flex shrink-0",
                    "aria-hidden": !0,
                    children: [e, (0, n.jsx)("span", {
                        className: "count-ABGDxy",
                        "data-multiple-digits": d,
                        children: t
                    })]
                }), a[3] = d, a[4] = t, a[5] = r) : r = a[5], r
            }
            let m = 0 === u ? c.a : d.a;
            return a[6] !== m ? (t = (0, n.jsx)(l.a, {
                className: "shrink-0",
                asset: m,
                focusable: "false"
            }), a[6] = m, a[7] = t) : t = a[7], t
        }
    }),
    gbz: (function(e, t, a) {
        var n = a("a6v");

        function r(e, t) {
            if ("electron" !== e) return "native";
            switch (t) {
                case "win32":
                case "linux":
                    return "application-menu";
                case "darwin":
                case "unknown":
                    return "native"
            }
        }

        function o() {
            return "application-menu" === document.documentElement.dataset.codexWindowChrome
        }

        function i() {
            let e = navigator,
                t = (e?.userAgentData?.platform ?? e?.platform ?? (0, n.a)()).toLowerCase();
            return t.includes("win") ? "win32" : t.includes("mac") || t.includes("darwin") ? "darwin" : t.includes("linux") ? "linux" : "unknown"
        }
        a.d(t, {
            a: () => i,
            b: () => r,
            c: () => o
        })
    })
};