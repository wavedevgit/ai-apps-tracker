export const __rspack_esm_ids = [359413];
export const __webpack_modules__ = {
    piij: (function(a, b, c) {
        a.exports = c.p + "assets/space-recovery.105d9c61fe.png"
    }),
    sM3V: (function(a, b, c) {
        var d = c("Q840"),
            e = c("a4MG"),
            f = c("OWtl"),
            g = c("tl5a");
        let h = (0, d.d)(f.a, (a, b) => {
                let {
                    hostId: c,
                    conversationId: d
                } = a, {
                    get: e
                } = b;
                if (d.startsWith("chatgpt:")) return null;
                let f = e(g.nc, {
                    hostId: c,
                    threadId: d
                });
                return null != f && "notLoaded" !== f.type ? d : null
            }),
            i = (0, d.d)(f.a, (a, b) => {
                let {
                    get: c
                } = b, {
                    data: d
                } = null == c(h, {
                    hostId: a.hostId,
                    conversationId: a.threadId
                }) ? c(e.r, a.hostId) : c(e.s, a);
                return d?.data.find(b => b.name === a.serverName) ?? null
            });
        c.d(b, {}, {
            a: i,
            b: h
        })
    }),
    VvpR: (function(a, b, c) {
        var d = c("aPIw"),
            e = c("WSqI"),
            f = c("Y5Sy"),
            g = c("Dgwo"),
            h = c("dF4Z"),
            i = c("NTGw"),
            j = c("syw5");
        c.d(b, {}, {
            a: async function(a, b, c, i) {
                let k = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let e = (0, g.b)(a, b),
                        l = (0, d._)(k, await e.getFollowUpContext(c, !0), !1);
                    if (a.get(f.a)) throw new h.a;
                    await e.editLastUserTurn(c, {
                        ...i,
                        clientUserMessageId: crypto.randomUUID(),
                        writingBlockContextPrepared: null != l,
                        additionalContext: (0, j.a)(c, l?.writingBlocks, i.additionalContext)
                    })
                } catch (a) {
                    k.error = a, k.hasError = !0
                } finally {
                    (0, e._)(k)
                }
            },
            b: async function(a, b, c, f, h) {
                let i = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let e = (0, g.b)(a, b),
                        k = (0, d._)(i, await e.getFollowUpContext(c, !0), !1);
                    await e.retrySafetyBufferedTurn(c, f, h, {
                        additionalContext: (0, j.a)(c, k?.writingBlocks),
                        writingBlockContextPrepared: null != k
                    })
                } catch (a) {
                    i.error = a, i.hasError = !0
                } finally {
                    (0, e._)(i)
                }
            },
            c: async function(a, b, c, f) {
                let h = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let e = (0, g.b)(a, b),
                        i = (0, d._)(h, await e.getFollowUpContext(c, !0), !1);
                    await e.startEmptyTurn(c, {
                        ...f,
                        writingBlockContextPrepared: null != i,
                        additionalContext: (0, j.a)(c, i?.writingBlocks, f.additionalContext)
                    })
                } catch (a) {
                    h.error = a, h.hasError = !0
                } finally {
                    (0, e._)(h)
                }
            },
            d: async function(a, b, c, f) {
                let h = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let e = (0, g.b)(a, b),
                        k = (0, d._)(h, await e.getFollowUpContext(c, !0), !1);
                    return await e.startTurn(c, {
                        ...f,
                        context: {
                            ...f.context,
                            onRequestDispatched: f.context?.onRequestDispatched ?? (a => {
                                null != f.request.clientUserMessageId && i.a.markRequestDispatched(f.request.clientUserMessageId, a)
                            }),
                            trace: f.context?.trace ?? (null == f.request.clientUserMessageId ? void 0 : i.a.getTrace(f.request.clientUserMessageId)),
                            writingBlockContextPrepared: null != k
                        },
                        request: {
                            ...f.request,
                            additionalContext: (0, j.a)(c, k?.writingBlocks, f.request.additionalContext)
                        }
                    })
                } catch (a) {
                    h.error = a, h.hasError = !0
                } finally {
                    (0, e._)(h)
                }
            }
        })
    }),
    Ooax: (function(a, b, c) {
        var d = c("lAQI");
        let e = d.L().regex(/^link_[0-9a-f]{32}$/),
            f = d.L().min(1).max(512).regex(/^(?!\.{1,2}$)[a-zA-Z0-9._~!$&'()*+,;=:@-]+$/),
            g = d.F({
                connector_id: f,
                target_link_id: e
            }),
            h = d.F({
                connector_id: f,
                connector_name: d.L().optional(),
                auth_type: d.p(["OAUTH", "API_KEY", "NONE"]).optional(),
                auth_strategy_id: d.L().nullish(),
                auth_reason: d.p(["oauth_upgrade_required", "reauthentication_required"]),
                requested_scopes: d.g(d.L().min(1)).min(1).optional()
            }),
            i = d.F({
                isError: d.z(!1).optional(),
                structuredContent: d.F({
                    kind: d.z("connector_auth_request"),
                    version: d.z(3),
                    status: d.z("requested"),
                    link_id: e
                }),
                _meta: d.F({
                    _codex_apps: d.F({
                        connector_auth_request: h
                    })
                })
            });
        c.d(b, {}, {
            a: "internal://plugin-management-connector-auth",
            b: function(a) {
                return `Authentication for ${a} was requested and accepted. Retry this tool call now.`
            },
            c: function(a, b) {
                let c = g.safeParse(a).data,
                    d = i.safeParse(b).data;
                if (null == c || null == d) return null;
                let e = d._meta._codex_apps.connector_auth_request,
                    {
                        link_id: f
                    } = d.structuredContent,
                    h = "oauth_upgrade_required" === e.auth_reason;
                return c.target_link_id !== f || h !== (null != e.requested_scopes) || h && "OAUTH" !== e.auth_type ? null : {
                    ...e,
                    link_id: f
                }
            }
        })
    }),
    PrVQ: (function(a, b, c) {
        var d = c("kSHG"),
            e = c("Q840"),
            f = c("P61R"),
            g = c("sS8e"),
            h = c("xSzB"),
            i = c("OWtl"),
            j = c("tSEg"),
            k = c("WFY2"),
            l = c("oo2L"),
            m = c("Ooax"),
            n = c("Sbyb");
        let o = (0, e.v)(i.a, a => !1);
        c.d(b, {}, {
            a: function(a) {
                let {
                    scope: b,
                    productSku: c,
                    hostId: d,
                    sourceId: e,
                    resourceUri: g,
                    access: i,
                    toolInput: p,
                    toolResult: q,
                    assertActive: r,
                    onReconnected: s
                } = a;
                if (g !== m.a || null == q || null == i || !("connectorId" in i.serverIdentity) || i.serverIdentity.connectorId !== f.a) return;
                let t = (0, m.c)(p, (0, h.i)({
                    isCodexAppsServer: !0,
                    toolResult: q
                }));
                if (null == t) return;
                let u = null == t.auth_type ? null : (0, l.p)({
                    id: t.link_id,
                    connector_id: t.connector_id,
                    auth_type: t.auth_type,
                    auth_strategy_id: t.auth_strategy_id
                });
                if ("API_KEY" === t.auth_type && null == u) return;
                let v = a => {
                    if (a.throwIfAborted(), r?.(), b.get(j.j) || "current" !== i.status(b.get)) throw Error("Connector sign-in is unavailable for this widget")
                };
                return async a => {
                    v(a);
                    let f = await (0, n.requestMcpConnectSheet)(b, {
                            connectorId: t.connector_id,
                            hostId: d,
                            oauthPresentation: "popup",
                            productSku: c,
                            startOAuthDirectly: "reauthentication_required" === t.auth_reason && "OAUTH" === u,
                            payload: {
                                requireAuth: !0,
                                reauthLinkId: t.link_id,
                                authReason: t.auth_reason,
                                requestedScopes: t.requested_scopes
                            },
                            beforeConnect: async () => (v(a), !0),
                            signal: a
                        }),
                        g = f.didConnect && f.linkId === t.link_id;
                    if (g && null != s) {
                        let c = JSON.stringify([d, i.accountId, i.uiUserId, e, t.link_id]);
                        b.get(o, c) || (v(a), b.set(o, c, !0), s(t.connector_name?.trim() || t.connector_id).catch(a => {
                            k.a.warning("Failed to deliver connector reconnect follow-up", {
                                safe: {},
                                sensitive: {
                                    error: a
                                }
                            })
                        }))
                    }
                    return {
                        didConnect: g
                    }
                }
            },
            b: async function() {
                throw (0, g.c)("This action is unavailable for the sign-in widget", d.r.MethodNotFound)
            }
        })
    }),
    PYah: (function(a, b, c) {
        var d = c("Dgwo");
        c.d(b, {}, {
            a: async function(a, b, c, e) {
                let {
                    apps: f
                } = await (0, d.b)(a, b).sendRequest("app/installed", {
                    forceRefresh: !0,
                    threadId: c
                }, null == e ? void 0 : {
                    threadAccess: e,
                    coalesce: !1
                });
                return new Set(f.filter(a => {
                    let {
                        callable: b,
                        enabled: c
                    } = a;
                    return b && c
                }).map(a => {
                    let {
                        id: b
                    } = a;
                    return b
                }))
            }
        })
    }),
    aiHW: (function(a, b, c) {
        let d = "shadow:";

        function e(a) {
            if (null == a || "object" != typeof a) return !1;
            let b = a.ownerDocument?.defaultView,
                c = b?.HTMLElement ?? ("u" < typeof HTMLElement ? null : HTMLElement);
            if (null != c && a instanceof c) return !0;
            let d = b?.Node ?? ("u" < typeof Node ? null : Node);
            return null != d && a.nodeType === d.ELEMENT_NODE && null != a.ownerDocument && "function" == typeof a.getBoundingClientRect && "string" == typeof a.tagName
        }

        function f(a) {
            if (null == a || "object" != typeof a) return !1;
            let b = a.ownerDocument?.defaultView,
                c = b?.HTMLIFrameElement ?? ("u" < typeof HTMLIFrameElement ? null : HTMLIFrameElement);
            return null != c && a instanceof c || a.tagName?.toLowerCase() === "iframe" && "contentWindow" in a
        }

        function g(a) {
            if (!f(a)) return null;
            try {
                let b = a.contentWindow;
                if (b?.document == null) return null;
                return b
            } catch {
                return null
            }
        }

        function h(a, b) {
            let c = function(a, b) {
                let c = b.startsWith(d) ? b.slice(d.length).split(">>>") : [b],
                    f = a;
                for (let [a, b] of c.entries()) {
                    let d = f.querySelector(b);
                    if (a === c.length - 1) return e(d) ? d : null;
                    if (!e(d) || null == d.shadowRoot) break;
                    f = d.shadowRoot
                }
                return null
            }(a, b);
            return f(c) ? c : null
        }
        new WeakMap, Symbol("denied-browser-frame-target"), c.d(b, {}, {
            a: function(a) {
                var b;
                if (null != a.assignedSlot) return a.assignedSlot;
                if (null != a.parentElement) return a.parentElement;
                let c = a.getRootNode();
                return (b = c).nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in b && e(b.host) && b.host.shadowRoot === b ? c.host : null
            },
            b: h,
            c: function(a) {
                let b = window,
                    c = document;
                for (let d of a) {
                    let a = h(c, d);
                    if (null == a) return null;
                    let e = g(a);
                    if (null == e) return null;
                    b = e, c = e.document
                }
                return b
            },
            d: g,
            e: e,
            f: f
        })
    }),
    KO1w: (function(a, b, c) {
        var d = c("ABep"),
            e = c("Bbed"),
            f = c("vbBn");
        let g = (0, e.a)(async () => (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(753405), c.e(321957), c.e(585419), c.e(673131), c.e(877700), c.e(353230), c.e(81461), c.e(557325), c.e(259288), c.e(163426), c.e(784669), c.e(101893), c.e(8197), c.e(370876), c.e(656837), c.e(122246), c.e(408642), c.e(583641), c.e(168251), c.e(405332), c.e(712593), c.e(133559), c.e(839342), c.e(221469), c.e(499790), c.e(301030), c.e(953533), c.e(383559), c.e(587936), c.e(909395), c.e(865302), c.e(445705), c.e(452048), c.e(684598), c.e(299268), c.e(826779), c.e(50536), c.e(543588), c.e(167649), c.e(17983), c.e(967094), c.e(16212), c.e(722053), c.e(449803), c.e(631989), c.e(568461), c.e(480744), c.e(82154)]).then(() => c("aT9k"))).DilResponse, {
            errorFallback: (0, d.jsx)(f.b, {
                stage: "host_error",
                initialization: !0
            })
        });
        c.d(b, {}, {
            DilResponse: g
        })
    }),
    greq: (function(a, b, c) {
        c.d(b, {
            a: () => n,
            b: () => m,
            c: () => o,
            d: () => l
        });
        var d = c("XtHz"),
            e = c("zd8w"),
            f = c("PFjh"),
            g = c("hJIv"),
            h = c("Q840"),
            i = c("fVOX"),
            j = c("OWtl");
        c("WFY2");
        let k = (0, h.u)(j.a, a => {
            let {
                scope: b
            } = a, c = 0, e = 0, g = (a, c, d) => {
                try {
                    (0, f.c)(b).count("default", "chatgpt.model_written_dil.v2.startup.report_suppressed", {
                        result: a,
                        report_cutoff: c,
                        reason: d,
                        web_frontend: "codex_webview"
                    })
                } catch {}
            }, h = (a, b) => c < 10 || (g(a, b, "page_report_limit"), !1);
            return {
                canPublish: h,
                recordSuppression: g,
                publish: (a, f, j) => {
                    if (!h(f.result, f.report_cutoff)) return !1;
                    try {
                        let h, k = (0, d.h)(f);
                        if (k > d.b ? h = "report_byte_limit" : e + k > 262144 && (h = "page_byte_limit"), null != h) return g(f.result, f.report_cutoff, h), !1;
                        return c++, e += k, b.get(i.a).log({
                            message: a,
                            status: j ? "info" : "error",
                            context: f
                        }), !0
                    } catch {
                        return g(f.result, f.report_cutoff, "observer_error"), !1
                    }
                }
            }
        });

        function l(a) {
            let b, c = (b = (0, f.c)(a), {
                    count: (a, c) => b.count("default", a, {
                        ...c,
                        web_frontend: "codex_webview"
                    }),
                    hist: (a, c, d) => b.hist("default", a, {
                        ...c,
                        web_frontend: "codex_webview"
                    }, d)
                }),
                e = a.get(g.a),
                h = a.get(k),
                i = (0, d.e)(c, {
                    enabled: () => e,
                    reporting: h
                });
            return {
                metrics: c,
                diagnosticsEnabled: e,
                render: (0, d.d)({
                    metrics: c,
                    diagnosticsExpected: e,
                    startupReporting: e ? h : void 0,
                    presentation: i
                }),
                presentation: i
            }
        }
        let m = (0, e.createContext)(null),
            n = (0, e.createContext)(null),
            o = (0, e.createContext)(void 0)
    }),
    vbBn: (function(a, b, c) {
        c.d(b, {
            a: () => A,
            b: () => C
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Q840"),
            g = c("wDWo"),
            h = c("zd8w"),
            i = c("UIU6"),
            j = c("nUGc"),
            k = c("wKFm"),
            l = c("OWtl"),
            m = c("TUMj"),
            n = c("RAbv"),
            o = c("zgGI"),
            p = c("zHp1"),
            q = c("Yscs");
        let r = new WeakMap,
            s = new WeakMap,
            t = /^image\/(?:jpeg|png|webp|gif)$/i;

        function u(a) {
            let b = a.getAttribute("src"),
                c = a.closest("[data-d-progressive-settled]")?.parentElement?.querySelector("[data-d-progressive-full] img");
            return !b || b.startsWith("data:") || a.srcset || c?.complete && c.naturalWidth > 0 || null != a.closest("picture") || "" === a.getAttribute("alt") || !a.closest('[data-d-component="image"]') || !a.currentSrc || a.currentSrc !== a.src ? null : b
        }

        function v(a) {
            let b = a.dataset.chatgptCopyImageSrc;
            if (null == b) return 0;
            let c = s.get(a);
            return c?.url === a.currentSrc && b === u(a) ? c.bytes : (delete a.dataset.chatgptCopyImageData, delete a.dataset.chatgptCopyImageSrc, s.delete(a), 0)
        }
        var w = c("N55g"),
            x = c("greq");
        let y = new Set;

        function z() {
            for (let a of y) a.presentation.onPageHide()
        }

        function A(a) {
            let b, c, g, j, k, m, n, o, p, q, r, s = (0, e.c)(33),
                {
                    children: t,
                    contentReferenceIndex: u,
                    observationMessageId: v,
                    isPresented: w,
                    isPreparing: A,
                    isStreaming: D,
                    sourceMessageId: E
                } = a,
                F = void 0 === w || w,
                G = (0, f.y)(l.a);
            s[0] !== v || s[1] !== G ? (b = () => ({
                messageId: v,
                observation: (0, x.d)(G)
            }), s[0] = v, s[1] = G, s[2] = b) : b = s[2];
            let [H, I] = (0, h.useState)(b);
            H.messageId !== v && I({
                messageId: v,
                observation: (0, x.d)(G)
            });
            let J = H.observation,
                K = void 0 !== A && A ? null : J;
            s[3] !== F || s[4] !== D || s[5] !== K ? (c = () => {
                K && (K.presentation.updateStreaming(D), K.presentation.setPresented(F))
            }, g = [K, F, D], s[3] = F, s[4] = D, s[5] = K, s[6] = c, s[7] = g) : (c = s[6], g = s[7]), (0, h.useLayoutEffect)(c, g), s[8] !== D || s[9] !== K?.presentation || s[10] !== K?.presentation.attach ? (j = () => K?.presentation.attach(D), s[8] = D, s[9] = K?.presentation, s[10] = K?.presentation.attach, s[11] = j) : j = s[11];
            let L = (0, h.useEffectEvent)(j);
            s[12] !== L || s[13] !== K ? (k = () => {
                if (!K) return;
                let a = L();
                return y.add(K), 1 === y.size && window.addEventListener("pagehide", z, !0), () => {
                    y.delete(K), 0 === y.size && window.removeEventListener("pagehide", z, !0), a?.()
                }
            }, s[12] = L, s[13] = K, s[14] = k) : k = s[14], s[15] !== K ? (m = [K], s[15] = K, s[16] = m) : m = s[16], (0, h.useEffect)(k, m);
            let M = null == u ? void 0 : "contents";
            s[17] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, d.jsx)(C, {}), s[17] = n) : n = s[17];
            let N = K?.render.onHostRenderFailure;
            return s[18] !== t || s[19] !== v || s[20] !== N ? (o = (0, d.jsx)(i.a, {
                name: "ModelWrittenDILV2Renderer",
                resetKey: v,
                fallback: n,
                onError: N,
                children: t
            }), s[18] = t, s[19] = v, s[20] = N, s[21] = o) : o = s[21], s[22] !== u || s[23] !== E || s[24] !== o || s[25] !== M ? (p = (0, d.jsx)("div", {
                className: "my-4 first:mt-0 last:mb-0 empty:hidden",
                "data-dil-source-message-id": E,
                "data-chatgpt-copy-reference": u,
                "data-markdown-copy": M,
                onLoadCapture: B,
                children: o
            }), s[22] = u, s[23] = E, s[24] = o, s[25] = M, s[26] = p) : p = s[26], s[27] !== K || s[28] !== p ? (q = (0, d.jsx)(x.b.Provider, {
                value: K,
                children: p
            }), s[27] = K, s[28] = p, s[29] = q) : q = s[29], s[30] !== J.render.onPreparationEnd || s[31] !== q ? (r = (0, d.jsx)(x.a.Provider, {
                value: J.render.onPreparationEnd,
                children: q
            }), s[30] = J.render.onPreparationEnd, s[31] = q, s[32] = r) : r = s[32], r
        }

        function B(a) {
            a.target instanceof HTMLImageElement && async function(a, b) {
                if (v(b) > 0) return;
                let c = u(b);
                if (!c) return;
                let d = URL.parse(b.currentSrc);
                if (null == d || d.origin !== a.ownerDocument.location.origin || !["blob:", "https:", "http:"].includes(d.protocol)) return;
                let e = (r.get(a) ?? Promise.resolve()).then(() => (async function(a, b, c, d) {
                    let e = () => a.contains(b) && c === u(b) && d.href === b.currentSrc;
                    try {
                        let f;
                        if (!e() || v(b) > 0) return;
                        let g = n.a;
                        for (let b of a.querySelectorAll("img[data-chatgpt-copy-image-src]")) g -= v(b);
                        let h = Math.min(524288, g);
                        if (h <= 0) return;
                        if ("blob:" === d.protocol) f = (0, p.g)(d.href);
                        else {
                            let a = await fetch(d, {
                                cache: "only-if-cached",
                                mode: "same-origin",
                                redirect: "error"
                            });
                            if (!a.ok || !t.test(a.headers.get("content-type") ?? "")) return;
                            f = await (0, o.a)(a, h)
                        }
                        if (null == f || !t.test(f.type) || 0 === f.size || f.size > h) return;
                        let i = await (0, q.a)(f);
                        e() && (b.dataset.chatgptCopyImageSrc = c, b.dataset.chatgptCopyImageData = i, s.set(b, {
                            bytes: f.size,
                            url: d.href
                        }))
                    } catch {}
                })(a, b, c, d));
                return r.set(a, e), e
            }(a.currentTarget, a.target)
        }

        function C(a) {
            let b, c, f, i = (0, e.c)(11),
                {
                    savedAnswer: l,
                    stage: n,
                    errorClass: o,
                    initialization: p
                } = a,
                q = void 0 !== p && p,
                r = (0, h.useContext)(x.b),
                s = (0, m.e)(),
                t = (0, h.useContext)(j.a);
            if (i[0] !== q || i[1] !== r || i[2] !== n ? (b = () => {
                    null != n && r?.render.onTerminalFailure(n), r?.render.onFallbackResult("shown", n), r?.presentation.reportRootFailure(q)
                }, c = [r, n, q], i[0] = q, i[1] = r, i[2] = n, i[3] = b, i[4] = c) : (b = i[3], c = i[4]), (0, h.useEffect)(b, c), i[5] !== o || i[6] !== t || i[7] !== l || i[8] !== n || i[9] !== s?.contentReferences) {
                let a = t || l?.source_message_status !== "finished_successfully" ? "" : (0, g.i)((0, g.e)(l) ?? "", s?.contentReferences ?? [], {
                    isStreaming: !1
                });
                f = a.trim() ? (0, d.jsx)(k.Markdown, {
                    externalResourcePolicy: "restricted",
                    textStyle: {
                        kind: "assistant-message"
                    },
                    children: a
                }) : (0, d.jsx)(w.a, {
                    stage: n,
                    errorClass: o
                }), i[5] = o, i[6] = t, i[7] = l, i[8] = n, i[9] = s?.contentReferences, i[10] = f
            } else f = i[10];
            return f
        }
    }),
    xof2: (function(a, b, c) {
        var d = c("EA6X"),
            e = c("D015"),
            f = c("yGJW"),
            g = c("OMIV"),
            h = c("CTBG"),
            i = c("Kwur"),
            j = c("dQRk"),
            k = c("hx97");

        function l(a, b, c) {
            if (null == b || null == c) return;
            let d = 0,
                f = !1;
            for (let g of a.get(h.c, b) ?? [])
                if ((0, k.o)(g) && (f = !1), "assistant" !== g.author.role || f || (d += 1, f = !0), g.id === c) return d > 0 ? (0, e.a)(d) : void 0
        }

        function m(a, b) {
            let c = a.parentContext;
            return {
                action_type: b,
                surface_location: a.surfaceLocation,
                assistant_message_id: a.assistantMessageId,
                turn_ordinal: a.turnOrdinal,
                content_reference_type: a.contentReferenceType,
                content_reference_start_index: a.contentReferenceStartIndex,
                parent_context: null == c ? void 0 : {
                    entity_id: c.entityId,
                    entity_category: c.entityCategory,
                    widget_type: c.widgetType,
                    widget_name: c.widgetName,
                    content_reference_start_index: c.contentReferenceStartIndex,
                    message_id: c.messageId
                }
            }
        }

        function n(a, b) {
            return Math.random() < (a.get(g.g)?.getDynamicConfig("3538562248", {
                disableExposureLog: !0
            }).get(b, 1) ?? 1)
        }

        function o(a, b, c) {
            null != b.actionType && n(a, "widget_action") && i.Request.safePost("/unified_user_signals", {
                requestBody: {
                    signal_type: "widget_action",
                    product_surface: "CHAT",
                    signal_metadata: {},
                    user_metadata: {},
                    signal_detail: {
                        common_metadata: {
                            conversation_id: b.conversationId,
                            message_id: b.messageId
                        },
                        widget_action: {
                            ...m(b, b.actionType),
                            widget_type: b.widgetType,
                            widget_name: b.widgetName,
                            widget_affordance: b.widgetAffordance,
                            widget_action_target: b.widgetActionTarget,
                            widget_action_value: b.widgetActionValue,
                            feedback_reasons: b.feedbackReasons,
                            effect: c
                        }
                    }
                }
            }).catch(() => void 0)
        }

        function p(a, b) {
            null != b.actionType && "CHATGPT_ENGAGEMENT_ACTION_TYPE_SHOWN" !== b.actionType && n(a, "entity_action") && i.Request.safePost("/unified_user_signals", {
                requestBody: {
                    signal_type: "entity_action",
                    product_surface: "CHAT",
                    signal_metadata: {},
                    user_metadata: {},
                    signal_detail: {
                        common_metadata: {
                            conversation_id: b.conversationId,
                            message_id: b.messageId
                        },
                        entity_action: {
                            ...m(b, b.actionType),
                            entity_id: b.entityId,
                            entity_category: b.entityCategory,
                            entity_affordance: b.entityAffordance
                        }
                    }
                }
            }).catch(() => void 0)
        }

        function q(a, b) {
            null != b.actionType && n(a, "link_action") && i.Request.safePost("/unified_user_signals", {
                requestBody: {
                    signal_type: "link_action",
                    product_surface: "CHAT",
                    signal_metadata: {},
                    user_metadata: {},
                    signal_detail: {
                        common_metadata: {
                            conversation_id: b.conversationId,
                            message_id: b.messageId
                        },
                        link_action: {
                            ...m(b, b.actionType),
                            link_type: b.linkType,
                            link_affordance: b.linkAffordance,
                            url: b.url,
                            link_index: b.linkIndex,
                            citation_numbers: b.citationNumbers
                        }
                    }
                }
            }).catch(() => void 0)
        }
        c.d(b, {}, {
            a: l,
            b: function(a, b) {
                try {
                    let c = {
                        ...b,
                        conversationId: null == b.conversationId ? void 0 : a.get(j.j, b.conversationId) ?? void 0,
                        turnOrdinal: l(a, b.conversationId, b.assistantMessageId ?? b.messageId)
                    };
                    p(a, c), (0, f.a)(a, d.c, c)
                } catch {}
            },
            c: function(a, b) {
                null != b.actionType && n(a, "image_action") && i.Request.safePost("/unified_user_signals", {
                    requestBody: {
                        signal_type: "image_action",
                        product_surface: "CHAT",
                        signal_metadata: {},
                        user_metadata: {},
                        signal_detail: {
                            common_metadata: {
                                conversation_id: b.conversationId,
                                message_id: b.messageId
                            },
                            image_action: {
                                ...m(b, b.actionType),
                                image_affordance: b.imageAffordance,
                                image_index: b.imageIndex,
                                url: b.url,
                                content_url: b.contentUrl,
                                original_content_url: b.originalContentUrl,
                                tags: b.tags
                            }
                        }
                    }
                }).catch(() => void 0), (0, f.a)(a, d.e, b)
            },
            d: function(a, b) {
                q(a, b), (0, f.a)(a, d.g, b)
            },
            e: function(a, b) {
                p(a, b), (0, f.a)(a, d.c, b)
            },
            f: function(a, b) {
                o(a, b), (0, f.a)(a, d.j, b)
            },
            g: q,
            h: o
        })
    }),
    s60H: (function(a, b, c) {
        c("QdUF"), c("M8lA"), c("bWX0"), c.d(b, {}, {
            a: function(a) {}
        })
    }),
    PxnS: (function(a, b, c) {
        var d = c("EA6X"),
            e = c("lSdY"),
            f = c("Q840"),
            g = c("aiHW"),
            h = c("yGJW"),
            i = c("OWtl"),
            j = c("xsLm"),
            k = c("HgLj"),
            l = c("XW2n");
        let m = (0, f.u)(i.a, () => new WeakMap),
            n = (0, f.d)(i.a, (a, b) => {
                let {
                    widgetType: c,
                    turnMessageId: d,
                    sourceMessageId: f
                } = a, {
                    get: g
                } = b, h = g(l.b);
                if (h?.productExperience !== e.a.CHATGPT_PRODUCT_EXPERIENCE_DOTS) return;
                let i = f ?? d,
                    j = null != d && h.messageIds.has(d) ? d : void 0;
                if (null != i && (h.messageIds.has(i) || null != j)) return {
                    widgetType: c,
                    messageId: i,
                    assistantMessageId: j
                }
            });

        function o(a, b, c, e) {
            (0, h.a)(a, d.j, {
                ...b,
                actionType: c,
                widgetActionTarget: e,
                surfaceLocation: d.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
                isGenui: "model_written_dil" === b.widgetType || void 0
            })
        }
        c.d(b, {}, {
            a: function(a, b, c, d) {
                return (0, k.a)(d, c => {
                    if (!b || !c) return;
                    let d = a.get(m);
                    if (d.get(c) !== b.messageId) return (0, j.a)(c, () => {
                        for (let a = (0, g.a)(c); a; a = (0, g.a)(a))
                            if (a.hasAttribute("data-shared-answer-widget-shell")) return !0;
                        return d.set(c, b.messageId), o(a, b, "CHATGPT_ENGAGEMENT_ACTION_TYPE_VIEWPORT_IMPRESSION", "widget_container"), !0
                    }, {
                        threshold: .01
                    })
                })(c)
            },
            b: function(a, b, c) {
                b && o(a, b, "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED", c)
            },
            c: n
        })
    }),
    nUGc: (function(a, b, c) {
        let d = (0, c("zd8w").createContext)(null);
        c.d(b, {}, {
            a: d
        })
    }),
    r21w: (function(a, b, c) {
        c.d(b, {
            a: () => g
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57");

        function g(a) {
            let b, c, g, h, i = (0, e.c)(8);
            return i[0] !== a ? ({
                className: b,
                ...c
            } = a, i[0] = a, i[1] = b, i[2] = c) : (b = i[1], c = i[2]), i[3] !== b ? (g = (0, f.b)("Placeholder-M5Cmfu", b), i[3] = b, i[4] = g) : g = i[4], i[5] !== c || i[6] !== g ? (h = (0, d.jsx)("div", {
                className: g,
                ...c
            }), i[5] = c, i[6] = g, i[7] = h) : h = i[7], h
        }
    }),
    iIHp: (function(a, b, c) {
        var d = c("QosV"),
            e = c("zd8w");
        class f {
            errors;
            pendingRequest = null;
            listeners = new Set;
            constructor(a) {
                this.errors = a
            }
            getSnapshot = () => null == this.pendingRequest ? null : this.pendingRequest.confirmation;
            subscribe = a => (this.listeners.add(a), () => {
                this.listeners.delete(a), 0 === this.listeners.size && this.cancel()
            });
            request = a => null != this.pendingRequest ? Promise.reject(this.errors.createAlreadyPendingError()) : new Promise((b, c) => {
                this.pendingRequest = {
                    confirmation: a,
                    reject: c,
                    resolve: b
                }, this.notify()
            });
            confirm = a => {
                this.takePendingRequest()?.resolve(a)
            };
            cancel = () => {
                this.takePendingRequest()?.reject(this.errors.createCanceledError())
            };
            notify() {
                for (let a of this.listeners) a()
            }
            takePendingRequest() {
                let a = this.pendingRequest;
                return this.pendingRequest = null, null != a && this.notify(), a
            }
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, g = (0, d.c)(7);
                g[0] !== a ? (b = () => new f(a), g[0] = a, g[1] = b) : b = g[1];
                let [h] = (0, e.useState)(b), i = (0, e.useSyncExternalStore)(h.subscribe, h.getSnapshot, h.getSnapshot);
                return g[2] !== i || g[3] !== h.cancel || g[4] !== h.confirm || g[5] !== h.request ? (c = {
                    cancel: h.cancel,
                    confirmation: i,
                    confirm: h.confirm,
                    request: h.request
                }, g[2] = i, g[3] = h.cancel, g[4] = h.confirm, g[5] = h.request, g[6] = c) : c = g[6], c
            }
        })
    }),
    v7ut: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("zd8w"),
            g = c("Wf1j"),
            h = c("oyxz"),
            i = c("hL9c"),
            j = c("osar"),
            k = c("eFVb"),
            l = c("W2tE"),
            m = c("v5fl"),
            n = c("Sm6l"),
            o = c("JNtf"),
            p = c("mUDD"),
            q = c("zLIa"),
            r = c("sF0J"),
            s = c("E1V6");

        function t(a) {
            let b, c, i, t, y, z, A, B = (0, e.c)(31),
                {
                    canConfirm: C,
                    context: D,
                    description: E,
                    imageUrls: F,
                    onCancel: G,
                    onConfirm: H,
                    prompt: I,
                    title: J
                } = a,
                K = void 0 === C || C,
                L = (0, g.a)();
            B[0] !== I ? (b = () => {
                let a = (0, k.b)(I, {
                    defaultTextKind: "prompt",
                    enableFileMentions: !1,
                    enableSkillMentions: !1,
                    enableSlashCommands: !1,
                    enterBehavior: "newline"
                });
                return {
                    controller: a,
                    destroy: () => a.destroy()
                }
            }, B[0] = I, B[1] = b) : b = B[1];
            let [M] = (0, f.useState)(b), {
                controller: N,
                destroy: O
            } = M;
            (0, s.b)(O, N);
            let P = (0, m.b)(N, v, "document"),
                [Q, R] = (0, f.useState)(D);
            B[2] !== D ? (c = x(D), B[2] = D, B[3] = c) : c = B[3];
            let S = c,
                [T, U] = (0, f.useState)(S),
                [V, W] = (0, f.useState)("prompt");
            B[4] !== T ? (i = function(a) {
                try {
                    return (0, r.b)(JSON.parse(a))
                } catch {
                    return
                }
            }(T), B[4] = T, B[5] = i) : i = B[5];
            let X = i;
            B[6] !== K || B[7] !== Q || B[8] !== N || B[9] !== H ? (t = () => {
                let a = N.getText().trim();
                K && a.length > 0 && H((0, r.a)({
                    context: Q,
                    prompt: a
                }))
            }, B[6] = K, B[7] = Q, B[8] = N, B[9] = H, B[10] = t) : t = B[10];
            let Y = t;
            return B[11] !== G ? (y = a => {
                a || G()
            }, B[11] = G, B[12] = y) : y = B[12], B[13] !== K || B[14] !== Y || B[15] !== Q || B[16] !== T || B[17] !== N || B[18] !== E || B[19] !== P || B[20] !== F || B[21] !== S || B[22] !== L || B[23] !== G || B[24] !== X || B[25] !== J || B[26] !== V ? (z = "prompt" === V ? (0, d.jsxs)(p.b, {
                className: "gap-4",
                as: "form",
                onSubmit: a => {
                    a.preventDefault(), Y()
                },
                children: [(0, d.jsx)(w, {
                    description: E,
                    title: J
                }), (0, d.jsx)(j.a, {
                    paddingVariant: "inset",
                    children: (0, d.jsx)(j.a.Body, {
                        children: (0, d.jsx)(l.a, {
                            ariaLabel: L.formatMessage({
                                id: "codex.mcpTool.confirmFollowUp.promptAriaLabel",
                                defaultMessage: "Prompt"
                            }),
                            composerController: N,
                            linkOpenTarget: "external-browser",
                            minHeight: "1lh",
                            placeholder: "",
                            onSubmit: Y
                        })
                    })
                }), null != F && F.length > 0 ? (0, d.jsx)("div", {
                    className: "flex flex-wrap gap-2",
                    children: F.map(u)
                }) : null, null != Q ? (0, d.jsx)("button", {
                    className: "w-fit cursor-interaction border-0 bg-transparent p-0 text-sm text-link-primary underline-offset-2 hover:underline",
                    type: "button",
                    onClick: () => {
                        U(x(Q)), W("widget-state")
                    },
                    children: (0, d.jsx)(h.a, {
                        id: "codex.mcpTool.confirmFollowUp.viewWidgetState",
                        defaultMessage: "View widget state"
                    })
                }) : null, (0, d.jsxs)(p.c, {
                    className: "justify-start gap-2",
                    children: [(0, d.jsx)("div", {
                        className: "flex-1"
                    }), (0, d.jsx)(n.a, {
                        className: "ms-auto",
                        color: "secondary",
                        type: "button",
                        onClick: G,
                        children: (0, d.jsx)(h.a, {
                            id: "codex.mcpTool.confirmFollowUp.cancel",
                            defaultMessage: "Cancel"
                        })
                    }), (0, d.jsx)(n.a, {
                        disabled: !K || !P,
                        type: "submit",
                        children: (0, d.jsx)(h.a, {
                            id: "codex.mcpTool.confirmFollowUp.confirm",
                            defaultMessage: "Send"
                        })
                    })]
                })]
            }) : (0, d.jsxs)(p.b, {
                className: "gap-4",
                children: [(0, d.jsx)(p.d, {
                    title: (0, d.jsx)(o.f, {
                        children: (0, d.jsx)(h.a, {
                            id: "codex.mcpTool.confirmFollowUp.widgetStateTitle",
                            defaultMessage: "Widget state"
                        })
                    }),
                    subtitle: (0, d.jsx)(o.e, {
                        className: "text-secondary",
                        children: (0, d.jsx)(h.a, {
                            id: "codex.mcpTool.confirmFollowUp.widgetStateDescription",
                            defaultMessage: "This JSON will be included with the prompt. Editing it won't change the widget."
                        })
                    })
                }), (0, d.jsx)(q.c, {
                    variant: "code",
                    rows: 10,
                    "aria-invalid": null == X,
                    "aria-label": L.formatMessage({
                        id: "codex.mcpTool.confirmFollowUp.widgetStateAriaLabel",
                        defaultMessage: "Widget state JSON"
                    }),
                    autoFocus: !0,
                    spellCheck: !1,
                    value: T,
                    onChange: a => {
                        U(a.target.value)
                    }
                }), null == X ? (0, d.jsx)("p", {
                    className: "text-sm text-danger",
                    role: "alert",
                    children: (0, d.jsx)(h.a, {
                        id: "codex.mcpTool.confirmFollowUp.invalidWidgetState",
                        defaultMessage: "Enter a valid JSON object under 32 KB"
                    })
                }) : null, (0, d.jsxs)(p.c, {
                    className: "justify-start gap-2",
                    children: [(0, d.jsx)(n.a, {
                        color: "ghost",
                        disabled: T === S,
                        type: "button",
                        onClick: () => {
                            U(S)
                        },
                        children: (0, d.jsx)(h.a, {
                            id: "codex.mcpTool.confirmFollowUp.resetWidgetState",
                            defaultMessage: "Reset"
                        })
                    }), (0, d.jsx)("div", {
                        className: "flex-1"
                    }), (0, d.jsx)(n.a, {
                        color: "secondary",
                        type: "button",
                        onClick: () => {
                            U(x(Q)), W("prompt")
                        },
                        children: (0, d.jsx)(h.a, {
                            id: "codex.mcpTool.confirmFollowUp.backToPrompt",
                            defaultMessage: "Back"
                        })
                    }), (0, d.jsx)(n.a, {
                        disabled: null == X,
                        type: "button",
                        onClick: () => {
                            null != X && (R(X), W("prompt"))
                        },
                        children: (0, d.jsx)(h.a, {
                            id: "codex.mcpTool.confirmFollowUp.applyWidgetState",
                            defaultMessage: "Apply"
                        })
                    })]
                })]
            }), B[13] = K, B[14] = Y, B[15] = Q, B[16] = T, B[17] = N, B[18] = E, B[19] = P, B[20] = F, B[21] = S, B[22] = L, B[23] = G, B[24] = X, B[25] = J, B[26] = V, B[27] = z) : z = B[27], B[28] !== y || B[29] !== z ? (A = (0, d.jsx)(o.a, {
                open: !0,
                onOpenChange: y,
                size: "wide",
                children: z
            }), B[28] = y, B[29] = z, B[30] = A) : A = B[30], A
        }

        function u(a, b) {
            return (0, d.jsx)(i.a, {
                src: a
            }, b)
        }

        function v(a) {
            return a.getText().trim().length > 0
        }

        function w(a) {
            let b, c, f, g, i, j = (0, e.c)(11),
                {
                    description: k,
                    title: l
                } = a;
            return j[0] !== l ? (b = l ?? (0, d.jsx)(h.a, {
                id: "codex.mcpTool.confirmFollowUp.title",
                defaultMessage: "Send follow-up?"
            }), j[0] = l, j[1] = b) : b = j[1], j[2] !== b ? (c = (0, d.jsx)(o.f, {
                children: b
            }), j[2] = b, j[3] = c) : c = j[3], j[4] !== k ? (f = k ?? (0, d.jsx)(h.a, {
                id: "codex.mcpTool.confirmFollowUp.description",
                defaultMessage: "An app wants to send this prompt"
            }), j[4] = k, j[5] = f) : f = j[5], j[6] !== f ? (g = (0, d.jsx)(o.e, {
                className: "text-secondary",
                children: f
            }), j[6] = f, j[7] = g) : g = j[7], j[8] !== c || j[9] !== g ? (i = (0, d.jsx)(p.d, {
                title: c,
                subtitle: g
            }), j[8] = c, j[9] = g, j[10] = i) : i = j[10], i
        }

        function x(a) {
            return null == a ? "" : (0, r.d)(a)
        }
        c.d(b, {}, {
            McpAppFollowUpConfirmationDialog: function(a) {
                let b, c = (0, e.c)(2),
                    {
                        confirmation: f
                    } = a;
                return null == f ? null : (c[0] !== f ? (b = (0, d.jsx)(t, {
                    ...f
                }), c[0] = f, c[1] = b) : b = c[1], b)
            }
        })
    }),
    sF0J: (function(a, b, c) {
        var d = c("SKgO"),
            e = c("lAQI"),
            f = c("sS8e");
        let g = e.F({
            context: d.c.optional(),
            isVisible: e.j().optional(),
            prompt: e.L().trim().min(1),
            title: e.L().trim().min(1).max(250).optional()
        }).strip();

        function h(a) {
            let b = g.safeParse(a);
            if (!b.success) throw (0, f.c)("Invalid follow-up message", -32602);
            return b.data
        }

        function i(a) {
            let {
                context: b,
                prompt: c
            } = a;
            return null == b ? c : `${c}

Current widget context (JSON):
${(0,d.b)(b)}`
        }
        c.d(b, {
            a: () => i,
            b: () => d.a,
            c: () => h,
            d: () => d.b
        })
    }),
    Yshm: (function(a, b, c) {
        var d = c("lAQI");
        let e = d.L().regex(/^[A-Za-z0-9_-]{1,128}$/),
            f = d.F({
                connectedPluginIds: d.g(d.L()).optional(),
                declinedPluginIds: d.g(d.L()).optional()
            }).catchall(d.x()),
            g = d.F({
                pluginId: d.L().min(1),
                suggestionId: e.optional()
            }),
            h = d.F({
                type: d.z("event"),
                label: d.z("chatgpt_plugin_management_suggestion_impression"),
                payload: d.F({
                    remote_plugin_id: d.L().min(1).max(256),
                    plugin_ids: d.g(d.L().min(1).max(256)).min(1).max(10).optional().catch(void 0),
                    suggestion_id: e
                })
            }),
            i = h.extend({
                label: d.z("chatgpt_plugin_management_suggestion_shown"),
                payload: h.shape.payload.extend({
                    suggestion_id: e.optional(),
                    plugin_ids: d.g(d.L().min(1).max(256)).min(1).max(10)
                })
            }),
            j = d.m("label", [h, i]),
            k = d.F({
                kind: d.z("plugin_suggestions"),
                version: d.z(1),
                suggestions: d.g(d.F({
                    plugin_id: d.L().min(1),
                    display_name: d.L().min(1)
                }))
            }),
            l = d.F({
                "openai/plugin_suggestion_id": e.optional(),
                "openai/plugin_suggestion_connector_ids": d.J(d.L(), d.L().min(1)).optional().catch(void 0)
            });
        c.d(b, {}, {
            a: g,
            b: j,
            c: l,
            d: f,
            e: k
        })
    }),
    LGZt: (function(a, b, c) {
        var d = c("vUFP");
        c.d(b, {}, {
            a: function(a, b) {
                let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, d.Pg)(b),
                    e = document.createElement(a);
                if (e instanceof HTMLIFrameElement) e.setAttribute("sandbox", "allow-scripts allow-same-origin"), e.setAttribute("referrerpolicy", "no-referrer");
                else {
                    let a = document.createElement("style");
                    a.textContent = "iframe { border-radius: inherit; }", e.shadowRoot?.append(a)
                }
                return e.setAttribute("partition", c), e
            }
        })
    }),
    uzkw: (function(a, b, c) {
        var d = c("Kwur");
        c.d(b, {}, {
            a: function(a) {
                let {
                    connectorId: b,
                    conversationId: c,
                    eventType: e,
                    expectedIdentity: f,
                    messageId: g,
                    pluginId: h,
                    productSurface: i,
                    suggestionMessageId: j
                } = a;
                d.Request.safePost("/unified_user_signals", {
                    expectedIdentity: f,
                    requestBody: {
                        signal_type: "ecosystem_suggestion_interaction",
                        product_surface: i,
                        signal_metadata: {},
                        user_metadata: {},
                        signal_detail: {
                            common_metadata: {
                                conversation_id: c,
                                message_id: g
                            },
                            ecosystem_suggestion_interaction: {
                                connector_id: b ?? "",
                                plugin_id: h,
                                suggestion_message_id: j,
                                event_type: e
                            }
                        }
                    }
                }).catch(() => void 0)
            }
        })
    }),
    RiLw: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("Wf1j"),
            h = c("oyxz"),
            i = c("bf6R"),
            j = c("syEl"),
            k = c("UxN3"),
            l = c("Y3Vu"),
            m = c("Jjku");
        let n = (0, d.jsx)(k.b, {
            className: m.a.shareIcon,
            icon: {
                16: i.N,
                20: i.O
            }
        });
        c.d(b, {}, {
            a: function(a) {
                let b, c, i, k, o, p, q, r, s = (0, e.c)(24);
                s[0] !== a ? ({
                    children: b,
                    className: c,
                    facepile: i,
                    iconOnly: o,
                    leading: p,
                    ...k
                } = a, s[0] = a, s[1] = b, s[2] = c, s[3] = i, s[4] = k, s[5] = o, s[6] = p) : (b = s[1], c = s[2], i = s[3], k = s[4], o = s[5], p = s[6]);
                let t = void 0 !== o && o,
                    u = void 0 === p ? n : p,
                    v = (0, g.a)();
                if (t) {
                    let a, b, e;
                    s[7] !== v ? (a = v.formatMessage({
                        id: "artifactViewer.share",
                        defaultMessage: "Share"
                    }), s[7] = v, s[8] = a) : a = s[8];
                    let g = a;
                    return s[9] !== c || s[10] !== i || s[11] !== g || s[12] !== k ? (b = a => (0, d.jsxs)(l.a, {
                        focusRing: "inset",
                        ...k,
                        ...a,
                        className: (0, f.b)(c, null != i && m.a.iconShareWithFacepile),
                        uniform: null == i,
                        "aria-label": g,
                        children: [i, n]
                    }), s[9] = c, s[10] = i, s[11] = g, s[12] = k, s[13] = b) : b = s[13], s[14] !== g || s[15] !== b ? (e = (0, d.jsx)(j.b, {
                        content: g,
                        describeTrigger: !1,
                        children: b
                    }), s[14] = g, s[15] = b, s[16] = e) : e = s[16], e
                }
                return s[17] === Symbol.for("react.memo_cache_sentinel") ? (q = (0, d.jsx)("span", {
                    "data-page-share-label": !0,
                    "data-tooltip-visibility-target": !0,
                    "data-tooltip-enablement-target": !0,
                    "data-viewer-header-collapsible": !0,
                    className: "overflow-hidden whitespace-nowrap",
                    children: (0, d.jsx)(h.a, {
                        id: "artifactViewer.share",
                        defaultMessage: "Share"
                    })
                }), s[17] = q) : q = s[17], s[18] !== b || s[19] !== c || s[20] !== i || s[21] !== u || s[22] !== k ? (r = (0, d.jsxs)(l.a, {
                    focusRing: "inset",
                    className: c,
                    ...k,
                    children: [u, i, q, b]
                }), s[18] = b, s[19] = c, s[20] = i, s[21] = u, s[22] = k, s[23] = r) : r = s[23], r
            }
        })
    })
};