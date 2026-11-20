export const __rspack_esm_ids = [712459];
export const __webpack_modules__ = {
    tnaP: (function(e, t, a) {
        var n = a("ABep");
        a("zd8w"), t.a = e => (0, n.jsx)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, n.jsx)("path", {
                d: "M14.3349 13.3301V6.60645L5.47065 15.4707C5.21095 15.7304 4.78895 15.7304 4.52925 15.4707C4.26955 15.211 4.26955 14.789 4.52925 14.5293L13.3935 5.66504H6.66011C6.29284 5.66504 5.99507 5.36727 5.99507 5C5.99507 4.63273 6.29284 4.33496 6.66011 4.33496H14.9999L15.1337 4.34863C15.4369 4.41057 15.665 4.67857 15.665 5V13.3301C15.6649 13.6973 15.3672 13.9951 14.9999 13.9951C14.6327 13.9951 14.335 13.6973 14.3349 13.3301Z",
                fill: "currentColor"
            })
        })
    }),
    sM3V: (function(e, t, a) {
        var n = a("Q840"),
            r = a("a4MG"),
            i = a("OWtl"),
            s = a("tl5a");
        let o = (0, n.d)(i.a, (e, t) => {
                let {
                    hostId: a,
                    conversationId: n
                } = e, {
                    get: r
                } = t;
                if (n.startsWith("chatgpt:")) return null;
                let i = r(s.nc, {
                    hostId: a,
                    threadId: n
                });
                return null != i && "notLoaded" !== i.type ? n : null
            }),
            l = (0, n.d)(i.a, (e, t) => {
                let {
                    get: a
                } = t, {
                    data: n
                } = null == a(o, {
                    hostId: e.hostId,
                    conversationId: e.threadId
                }) ? a(r.q, e.hostId) : a(r.r, e);
                return n?.data.find(t => t.name === e.serverName) ?? null
            });
        a.d(t, {}, {
            a: l,
            b: o
        })
    }),
    VvpR: (function(e, t, a) {
        var n = a("SRbQ"),
            r = a("Y5Sy"),
            i = a("Dgwo"),
            s = a("dF4Z"),
            o = a("hs0N"),
            l = a("syw5");
        a.d(t, {}, {
            a: async function(e, t, a, o) {
                let c = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let d = (0, i.b)(e, t),
                        u = (0, n.a)(c, await d.getFollowUpContext(a, !0), !1);
                    if (e.get(r.a)) throw new s.a;
                    await d.editLastUserTurn(a, {
                        ...o,
                        clientUserMessageId: crypto.randomUUID(),
                        writingBlockContextPrepared: null != u,
                        additionalContext: (0, l.a)(a, u?.writingBlocks, o.additionalContext)
                    })
                } catch (e) {
                    c.error = e, c.hasError = !0
                } finally {
                    (0, n.e)(c)
                }
            },
            b: async function(e, t, a, r, s) {
                let o = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let c = (0, i.b)(e, t),
                        d = (0, n.a)(o, await c.getFollowUpContext(a, !0), !1);
                    await c.retrySafetyBufferedTurn(a, r, s, {
                        additionalContext: (0, l.a)(a, d?.writingBlocks),
                        writingBlockContextPrepared: null != d
                    })
                } catch (e) {
                    o.error = e, o.hasError = !0
                } finally {
                    (0, n.e)(o)
                }
            },
            c: async function(e, t, a, r) {
                let s = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let o = (0, i.b)(e, t),
                        c = (0, n.a)(s, await o.getFollowUpContext(a, !0), !1);
                    await o.startEmptyTurn(a, {
                        ...r,
                        writingBlockContextPrepared: null != c,
                        additionalContext: (0, l.a)(a, c?.writingBlocks, r.additionalContext)
                    })
                } catch (e) {
                    s.error = e, s.hasError = !0
                } finally {
                    (0, n.e)(s)
                }
            },
            d: async function(e, t, a, r) {
                let s = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let c = (0, i.b)(e, t),
                        d = (0, n.a)(s, await c.getFollowUpContext(a, !0), !1);
                    return await c.startTurn(a, {
                        ...r,
                        context: {
                            ...r.context,
                            onRequestDispatched: r.context?.onRequestDispatched ?? (e => {
                                null != r.request.clientUserMessageId && o.a.markRequestDispatched(r.request.clientUserMessageId, e)
                            }),
                            trace: r.context?.trace ?? (null == r.request.clientUserMessageId ? void 0 : o.a.getTrace(r.request.clientUserMessageId)),
                            writingBlockContextPrepared: null != d
                        },
                        request: {
                            ...r.request,
                            additionalContext: (0, l.a)(a, d?.writingBlocks, r.request.additionalContext)
                        }
                    })
                } catch (e) {
                    s.error = e, s.hasError = !0
                } finally {
                    (0, n.e)(s)
                }
            }
        })
    }),
    Ooax: (function(e, t, a) {
        var n = a("lAQI");
        let r = n.L().regex(/^link_[0-9a-f]{32}$/),
            i = n.L().min(1).max(512).regex(/^(?!\.{1,2}$)[a-zA-Z0-9._~!$&'()*+,;=:@-]+$/),
            s = n.F({
                connector_id: i,
                target_link_id: r
            }),
            o = n.F({
                connector_id: i,
                connector_name: n.L().optional(),
                auth_type: n.p(["OAUTH", "API_KEY", "NONE"]).optional(),
                auth_strategy_id: n.L().nullish(),
                auth_reason: n.p(["oauth_upgrade_required", "reauthentication_required"]),
                requested_scopes: n.g(n.L().min(1)).min(1).optional()
            }),
            l = n.F({
                isError: n.z(!1).optional(),
                structuredContent: n.F({
                    kind: n.z("connector_auth_request"),
                    version: n.z(3),
                    status: n.z("requested"),
                    link_id: r
                }),
                _meta: n.F({
                    _codex_apps: n.F({
                        connector_auth_request: o
                    })
                })
            });
        a.d(t, {}, {
            a: "internal://plugin-management-connector-auth",
            b: function(e) {
                return `Authentication for ${e} was requested and accepted. Retry this tool call now.`
            },
            c: function(e, t) {
                let a = s.safeParse(e).data,
                    n = l.safeParse(t).data;
                if (null == a || null == n) return null;
                let r = n._meta._codex_apps.connector_auth_request,
                    {
                        link_id: i
                    } = n.structuredContent,
                    o = "oauth_upgrade_required" === r.auth_reason;
                return a.target_link_id !== i || o !== (null != r.requested_scopes) || o && "OAUTH" !== r.auth_type ? null : {
                    ...r,
                    link_id: i
                }
            }
        })
    }),
    PrVQ: (function(e, t, a) {
        var n = a("kSHG"),
            r = a("Q840"),
            i = a("P61R"),
            s = a("sS8e"),
            o = a("xSzB"),
            l = a("OWtl"),
            c = a("tSEg"),
            d = a("WFY2"),
            u = a("oo2L"),
            p = a("Ooax"),
            m = a("Sbyb");
        let h = (0, r.v)(l.a, e => !1);
        a.d(t, {}, {
            a: function(e) {
                let {
                    scope: t,
                    productSku: a,
                    hostId: n,
                    sourceId: r,
                    resourceUri: s,
                    access: l,
                    toolInput: g,
                    toolResult: f,
                    assertActive: w,
                    onReconnected: y
                } = e;
                if (s !== p.a || null == f || null == l || !("connectorId" in l.serverIdentity) || l.serverIdentity.connectorId !== i.a) return;
                let b = (0, p.c)(g, (0, o.i)({
                    isCodexAppsServer: !0,
                    toolResult: f
                }));
                if (null == b) return;
                let x = null == b.auth_type ? null : (0, u.p)({
                    id: b.link_id,
                    connector_id: b.connector_id,
                    auth_type: b.auth_type,
                    auth_strategy_id: b.auth_strategy_id
                });
                if ("API_KEY" === b.auth_type && null == x) return;
                let _ = e => {
                    if (e.throwIfAborted(), w?.(), t.get(c.j) || "current" !== l.status(t.get)) throw Error("Connector sign-in is unavailable for this widget")
                };
                return async e => {
                    _(e);
                    let i = await (0, m.requestMcpConnectSheet)(t, {
                            connectorId: b.connector_id,
                            hostId: n,
                            oauthPresentation: "popup",
                            productSku: a,
                            startOAuthDirectly: "reauthentication_required" === b.auth_reason && "OAUTH" === x,
                            payload: {
                                requireAuth: !0,
                                reauthLinkId: b.link_id,
                                authReason: b.auth_reason,
                                requestedScopes: b.requested_scopes
                            },
                            beforeConnect: async () => (_(e), !0),
                            signal: e
                        }),
                        s = i.didConnect && i.linkId === b.link_id;
                    if (s && null != y) {
                        let a = JSON.stringify([n, l.accountId, l.uiUserId, r, b.link_id]);
                        t.get(h, a) || (_(e), t.set(h, a, !0), y(b.connector_name?.trim() || b.connector_id).catch(e => {
                            d.a.warning("Failed to deliver connector reconnect follow-up", {
                                safe: {},
                                sensitive: {
                                    error: e
                                }
                            })
                        }))
                    }
                    return {
                        didConnect: s
                    }
                }
            },
            b: async function() {
                throw (0, s.c)("This action is unavailable for the sign-in widget", n.r.MethodNotFound)
            }
        })
    }),
    PuSj: (function(e, t, a) {
        var n = a("kSHG"),
            r = a("lAQI"),
            i = a("KhaL"),
            s = a("geS6"),
            o = a("xSzB");

        function l(e) {
            let {
                scope: t,
                conversationId: a,
                access: r,
                resourceUri: o,
                attribution: l,
                toolDescriptors: c
            } = e;
            r.assertActive();
            let d = r.context.connectorTarget,
                {
                    accountId: u
                } = r;
            if (null == d || null == u) throw Error("MCP app connection is unavailable");
            let p = (0, i.b)({
                scope: t,
                accountId: u,
                appUri: `connectors://${d.connectorId}`,
                chatGptConversationId: null,
                threadId: a ?? void 0,
                productSku: "CODEX",
                messageId: null,
                originMetadata: {
                    link_id: d.targetId
                },
                attribution: l,
                toolDescriptors: c
            });
            return {
                connectorTarget: d,
                assertActive: r.assertActive,
                forwardedRequestMethods: ["tools/call", "tools/list", "resources/read"],
                async handleRequest(e, t, a, i) {
                    if (t?.throwIfAborted(), r.assertActive(), "resources/read" === e.method) {
                        let t = n.T.parse(e);
                        (0, s.a)({
                            server: "codex_apps",
                            mcpAppScope: {
                                originResourceUri: o
                            },
                            uri: t.params.uri
                        })
                    }
                    let l = await p.handleRequest(e, t, a, i);
                    return r.assertActive(), l
                }
            }
        }
        a.d(t, {}, {
            a: async function(e) {
                let {
                    scope: t,
                    access: a,
                    resourceUri: n,
                    tool: i,
                    arguments: s,
                    recipientThreadId: c,
                    attribution: d,
                    signal: u
                } = e, p = i.codexAppsToolIdentity, m = a.context.connectorTarget;
                if (null == p || m?.targetId == null || m.connectorId !== p.connectorId || m.targetId !== p.targetId) throw Error("MCP app connection is unavailable");
                let h = r.F({
                    _codex_apps: r.J(r.L(), r.R()).optional()
                }).nullish().parse(i.tool?._meta)?._codex_apps;
                return o.g.parse(await l({
                    scope: t,
                    conversationId: null,
                    access: a,
                    resourceUri: n,
                    attribution: d,
                    toolDescriptors: null == h ? void 0 : new Map([
                        [p.actionName, {
                            name: i.name,
                            metadata: h
                        }]
                    ])
                }).handleRequest({
                    method: "tools/call",
                    params: {
                        name: p.actionName,
                        arguments: s
                    }
                }, u, void 0, c))
            },
            b: l
        })
    }),
    PYah: (function(e, t, a) {
        var n = a("Dgwo");
        a.d(t, {}, {
            a: async function(e, t, a, r) {
                let {
                    apps: i
                } = await (0, n.b)(e, t).sendRequest("app/installed", {
                    forceRefresh: !0,
                    threadId: a
                }, null == r ? void 0 : {
                    threadAccess: r,
                    coalesce: !1
                });
                return new Set(i.filter(e => {
                    let {
                        callable: t,
                        enabled: a
                    } = e;
                    return t && a
                }).map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                }))
            }
        })
    }),
    IL1g: (function(e, t, a) {
        var n = a("ABep"),
            r = a("QosV"),
            i = a("zd8w"),
            s = a("Wf1j"),
            o = a("ZtSy");
        let l = [{
            label: "OpenAI OpCo, LLC",
            emphasize: !0
        }, {
            label: "대표자: Sam Altman"
        }, {
            label: "주소: 1455 3rd Street, San Francisco, CA 94158"
        }, {
            label: "전화: 02-735-2109"
        }, {
            label: "https://help.openai.com/ko-kr",
            href: "https://help.openai.com/ko-kr"
        }, {
            label: "816-80-03326",
            prefix: "사업자등록번호: ",
            emphasize: !0
        }, {
            label: "통신판매업신고번호: 2026-공정-0022"
        }, {
            label: "이용 약관",
            href: "https://openai.com/ko-KR/policies/row-terms-of-use/"
        }, {
            label: "호스팅 서비스 제공: Microsoft Azure"
        }, {
            label: "사업자 추가 정보",
            href: "https://www.ftc.go.kr/selectBizOvrCommPop.do?apvPermMgtNo=2026%EA%B3%B5%EC%A0%950022",
            emphasize: !0
        }];

        function c(e) {
            let t, a, s = (0, r.c)(4),
                {
                    inDialog: c
                } = e,
                d = void 0 !== c && c;
            return s[0] !== d ? (t = l.map((e, t) => {
                let a = e.emphasize ? (0, n.jsx)("strong", {
                    children: e.label
                }) : e.label;
                return (0, n.jsxs)(i.Fragment, {
                    children: [t > 0 && (0, n.jsx)("span", {
                        "aria-hidden": "true",
                        children: "|"
                    }), e.href ? (0, n.jsx)(o.a, {
                        href: e.href,
                        initiator: "open_in_browser_bridge",
                        openTarget: d ? "external-browser" : void 0,
                        underline: "always",
                        children: a
                    }) : (0, n.jsxs)("span", {
                        children: [e.prefix, a]
                    })]
                }, e.label)
            }), s[0] = d, s[1] = t) : t = s[1], s[2] !== t ? (a = (0, n.jsx)("div", {
                className: "flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-xs text-secondary select-text",
                children: t
            }), s[2] = t, s[3] = a) : a = s[3], a
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, i, o = (0, r.c)(5),
                    {
                        inDialog: l
                    } = e,
                    d = void 0 !== l && l,
                    u = (0, s.a)();
                return "ko" !== new Intl.Locale(u.locale).language ? null : (o[0] !== d ? (t = (0, n.jsx)(c, {
                    inDialog: d
                }), o[0] = d, o[1] = t) : t = o[1], o[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, n.jsx)("p", {
                    children: "귀하가 19세 미만의 이용자로서 귀하의 법정대리인이 본 계약에 동의하지 않은 경우, 귀하 또는 귀하의 법정대리인은 계약을 취소할 수 있습니다."
                }), o[2] = a) : a = o[2], o[3] !== t ? (i = (0, n.jsxs)("div", {
                    className: "flex flex-col items-center gap-2 text-center text-xs text-secondary select-text",
                    children: [t, a]
                }), o[3] = t, o[4] = i) : i = o[4], i)
            },
            b: c
        })
    }),
    DWXw: (function(e, t, a) {
        a.d(t, {
            BrowserComposerDisclaimer: () => E,
            BrowserComposerDisclaimerMessage: () => U,
            a: () => V
        });
        var n = a("ABep"),
            r = a("QosV"),
            i = a("Q840"),
            s = a("Wf1j"),
            o = a("oyxz"),
            l = a("Qgfj"),
            c = a("rEML"),
            d = a("OFP1"),
            u = a("h6fL"),
            p = a("ipGa"),
            m = a("ZtSy");

        function h(e) {
            return (0, n.jsx)(m.a, {
                href: "https://openai.com/policies/privacy-policy/",
                initiator: "open_in_browser_bridge",
                openTarget: "external-browser",
                children: e
            })
        }

        function g(e) {
            let t, a, i, s, l = (0, r.c)(9),
                {
                    context: c
                } = e;
            l[0] !== c.businessName ? (t = c.businessName?.trim(), l[0] = c.businessName, l[1] = t) : t = l[1];
            let d = t;
            return l[2] !== d ? (a = (0, n.jsx)("p", {
                children: d ? (0, n.jsx)(o.a, {
                    id: "businessProfiles.agentChat.privacy.named",
                    defaultMessage: "This chat remains private. {businessName} can only see overall insights about how its AI agent is doing. <learnMore>Learn more</learnMore>",
                    values: {
                        businessName: d,
                        learnMore: h
                    }
                }) : (0, n.jsx)(o.a, {
                    id: "businessProfiles.agentChat.privacy.unnamed",
                    defaultMessage: "This chat remains private. This business can only see overall insights about how its AI agent is doing. <learnMore>Learn more</learnMore>",
                    values: {
                        learnMore: h
                    }
                })
            }), l[2] = d, l[3] = a) : a = l[3], l[4] !== c.notice ? (i = c.notice?.trim() ? (0, n.jsx)("p", {
                children: c.notice
            }) : null, l[4] = c.notice, l[5] = i) : i = l[5], l[6] !== a || l[7] !== i ? (s = (0, n.jsxs)("div", {
                className: "flex flex-col gap-1",
                children: [a, i]
            }), l[6] = a, l[7] = i, l[8] = s) : s = l[8], s
        }
        var f = a("YJm0"),
            w = a("fzVa"),
            y = a("dQRk"),
            b = a("g2p6"),
            x = a("jAnS"),
            _ = a("AcSY"),
            v = a("Ho8f"),
            k = a("hZax"),
            C = a("fNyS"),
            S = a("zd8w"),
            j = a("IL1g"),
            A = a("JNtf"),
            M = a("mUDD"),
            I = a("ibLK"),
            T = a("jVko"),
            P = a("zWHk");
        let F = new WeakSet;

        function D(e) {
            let t, a, i, s, l = (0, r.c)(10),
                {
                    children: c
                } = e,
                d = (0, I.a)("(width < 640px)"),
                u = (0, S.useContext)(T.a);
            l[0] !== u ? (t = e => {
                if (null == u) return O;
                let t = () => {
                        F.add(u), e()
                    },
                    a = u.view.dom;
                a.addEventListener("input", t, !0);
                let n = (0, P.b)(u.view, t => {
                    t && e()
                });
                return () => {
                    a.removeEventListener("input", t, !0), n()
                }
            }, l[0] = u, l[1] = t) : t = l[1];
            let p = t;
            l[2] !== u ? (a = () => null == u || !u.hasText() && !F.has(u), l[2] = u, l[3] = a) : a = l[3];
            let m = a,
                h = (0, S.useSyncExternalStore)(p, m, L);
            if (!d) {
                let e;
                return l[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(j.b, {}), l[4] = e) : e = l[4], e
            }
            return l[5] !== h ? (i = h && (0, n.jsx)(A.a, {
                size: "responsiveSheet",
                triggerContent: (0, n.jsx)("button", {
                    className: "inline-flex min-h-6 min-w-6 cursor-interaction items-center justify-center text-xs text-secondary underline select-none",
                    type: "button",
                    children: (0, n.jsx)(o.a, {
                        ...N.companyInformation
                    })
                }),
                contentProps: {
                    "aria-describedby": void 0
                },
                children: (0, n.jsxs)(M.b, {
                    children: [(0, n.jsx)(M.d, {
                        title: (0, n.jsx)(A.f, {
                            children: (0, n.jsx)(o.a, {
                                ...N.companyInformation
                            })
                        })
                    }), (0, n.jsx)(M.e, {
                        children: (0, n.jsx)(j.b, {
                            inDialog: !0
                        })
                    })]
                })
            }), l[5] = h, l[6] = i) : i = l[6], l[7] !== c || l[8] !== i ? (s = (0, n.jsxs)("div", {
                className: "flex flex-col items-center gap-1",
                children: [c, i]
            }), l[7] = c, l[8] = i, l[9] = s) : s = l[9], s
        }

        function L() {
            return !0
        }

        function O() {}
        let N = (0, l.f)({
            companyInformation: {
                id: "chatgpt.compliance.korean_regulatory.company_information.label",
                defaultMessage: "Company info"
            }
        });
        var q = a("md8w"),
            W = a("dBtq"),
            z = a("RGWz");

        function E(e) {
            let t, a, s, o, l = (0, r.c)(10);
            l[0] !== e ? ({
                supportsMessageDisclosures: a,
                ...t
            } = e, l[0] = e, l[1] = t, l[2] = a) : (t = l[1], a = l[2]);
            let c = void 0 !== a && a,
                d = (0, i.z)(q.b),
                u = (0, i.x)(W.a, t.conversationId);
            if ("home" !== t.placement && (c && d || !u)) return null;
            let p = "home" === t.placement ? "empty:hidden" : void 0,
                m = t.placement ?? "thread",
                h = "home" === t.placement ? void 0 : R;
            return l[3] !== t || l[4] !== h ? (s = (0, n.jsx)(U, {
                ...t,
                renderOrdinaryDisclaimer: h
            }), l[3] = t, l[4] = h, l[5] = s) : s = l[5], l[6] !== p || l[7] !== m || l[8] !== s ? (o = (0, n.jsx)(v.a, {
                browser: !0,
                children: (0, n.jsx)(C.a, {
                    className: p,
                    placement: m,
                    children: s
                })
            }), l[6] = p, l[7] = m, l[8] = s, l[9] = o) : o = l[9], o
        }

        function R(e) {
            return (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)(z.b, {
                        children: e
                    })
                }), null]
            })
        }

        function U(e) {
            let t, a, l, d = (0, r.c)(28),
                {
                    aiServiceDisclaimer: u,
                    conversationId: m,
                    hasUserMessage: h,
                    isTemporaryChat: f,
                    ordinaryDisclaimer: w,
                    pendingWorkspaceDisclaimer: b,
                    placement: v,
                    regulatedConnectorKindOverride: k,
                    renderOrdinaryDisclaimer: C
                } = e,
                S = void 0 === v ? "thread" : v,
                j = (0, s.a)(),
                {
                    search: A
                } = (0, c.Z)(),
                {
                    data: M
                } = (0, _.f)(),
                I = (0, i.x)(y.u, m ?? null),
                T = (0, i.x)(y.W, I?.status === "ready" && void 0 === k ? m ?? null : null);
            d[0] !== h || d[1] !== f || d[2] !== S || d[3] !== A ? (t = (f ?? (0, x.i)(A)) && !(h ?? "thread" === S), d[0] = h, d[1] = f, d[2] = S, d[3] = A, d[4] = t) : t = d[4];
            let P = t;
            if (null == M) return null == I ? b ?? null : null;
            if (null != I) {
                let e;
                if ("ready" !== I.status) return null;
                let t = void 0 !== k ? k : T;
                if (null != t) {
                    let e;
                    return d[5] !== t || d[6] !== w ? (e = (0, n.jsx)(V, {
                        ordinaryDisclaimer: w,
                        regulatedConnectorKind: t
                    }), d[5] = t, d[6] = w, d[7] = e) : e = d[7], e
                }
                return d[8] !== I.context ? (e = (0, n.jsx)(g, {
                    context: I.context
                }), d[8] = I.context, d[9] = e) : e = d[9], e
            }
            if ("workspace" === M.structure) {
                let e;
                return d[10] !== M || d[11] !== b || d[12] !== C || d[13] !== P ? (e = (0, n.jsx)(H, {
                    account: M,
                    pendingWorkspaceDisclaimer: b,
                    isTemporaryChat: P,
                    renderOrdinaryDisclaimer: C
                }), d[10] = M, d[11] = b, d[12] = C, d[13] = P, d[14] = e) : e = d[14], e
            }
            d[15] !== w || d[16] !== C ? (a = C?.(w ?? (0, n.jsx)(o.a, {
                ...Y.personal
            })) ?? w, d[15] = w, d[16] = C, d[17] = a) : a = d[17], d[18] !== M.id || d[19] !== u || d[20] !== m || d[21] !== S || d[22] !== k || d[23] !== P || d[24] !== a ? (l = (0, n.jsx)(B, {
                accountId: M.id,
                aiServiceDisclaimer: u,
                conversationId: m,
                isTemporaryChat: P,
                ordinaryDisclaimer: a,
                placement: S,
                regulatedConnectorKindOverride: k
            }), d[18] = M.id, d[19] = u, d[20] = m, d[21] = S, d[22] = k, d[23] = P, d[24] = a, d[25] = l) : l = d[25];
            let F = l;
            if ("home" === S && !h && !P && !(0, p.a)() && "ko" === new Intl.Locale(j.locale).language) {
                let e;
                return d[26] !== F ? (e = (0, n.jsx)(D, {
                    children: F
                }), d[26] = F, d[27] = e) : e = d[27], e
            }
            return F
        }

        function B(e) {
            let t, a = (0, r.c)(16),
                {
                    accountId: i,
                    aiServiceDisclaimer: s,
                    conversationId: o,
                    isTemporaryChat: l,
                    ordinaryDisclaimer: c,
                    placement: d,
                    regulatedConnectorKindOverride: u
                } = e,
                p = (0, k.f)("1831960162");
            if (!(0, k.g)("1831960162") && !p) {
                let e;
                return a[0] !== i || a[1] !== s || a[2] !== o || a[3] !== l || a[4] !== c || a[5] !== d || a[6] !== u ? (e = (0, n.jsx)(G, {
                    accountId: i,
                    aiServiceDisclaimer: s,
                    conversationId: o,
                    isTemporaryChat: l,
                    ordinaryDisclaimer: c,
                    placement: d,
                    regulatedConnectorKindOverride: u
                }), a[0] = i, a[1] = s, a[2] = o, a[3] = l, a[4] = c, a[5] = d, a[6] = u, a[7] = e) : e = a[7], e
            }
            return a[8] !== s || a[9] !== o || a[10] !== l || a[11] !== c || a[12] !== d || a[13] !== u || a[14] !== p ? (t = (0, n.jsx)(Q, {
                aiServiceDisclaimer: s,
                conversationId: o,
                isTemporaryChat: l,
                ordinaryDisclaimer: c,
                placement: d,
                regulatedConnectorKindOverride: u,
                showAiServiceDisclaimer: p
            }), a[8] = s, a[9] = o, a[10] = l, a[11] = c, a[12] = d, a[13] = u, a[14] = p, a[15] = t) : t = a[15], t
        }

        function G(e) {
            let t, a = (0, r.c)(8),
                {
                    accountId: s,
                    aiServiceDisclaimer: o,
                    conversationId: l,
                    isTemporaryChat: c,
                    ordinaryDisclaimer: d,
                    placement: p,
                    regulatedConnectorKindOverride: m
                } = e,
                {
                    userId: h
                } = (0, u.a)(),
                g = (0, i.z)(b.n),
                {
                    data: f
                } = (0, i.z)(w.b),
                y = null != h && g === s,
                x = (0, k.f)(!!y && (null == f || "under_18" === f.age_status) && "1639821169");
            return y ? (a[0] !== o || a[1] !== l || a[2] !== c || a[3] !== d || a[4] !== p || a[5] !== m || a[6] !== x ? (t = (0, n.jsx)(Q, {
                aiServiceDisclaimer: o,
                conversationId: l,
                isTemporaryChat: c,
                ordinaryDisclaimer: d,
                placement: p,
                regulatedConnectorKindOverride: m,
                showAiServiceDisclaimer: x
            }), a[0] = o, a[1] = l, a[2] = c, a[3] = d, a[4] = p, a[5] = m, a[6] = x, a[7] = t) : t = a[7], t) : null
        }

        function Q(e) {
            let t, a, i = (0, r.c)(10),
                {
                    aiServiceDisclaimer: s,
                    conversationId: l,
                    isTemporaryChat: c,
                    ordinaryDisclaimer: d,
                    placement: u,
                    regulatedConnectorKindOverride: m,
                    showAiServiceDisclaimer: h
                } = e;
            i[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, p.a)(), i[0] = t) : t = i[0];
            let g = t;
            if (c) {
                let e;
                return i[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(o.a, {
                    ...Y.temporaryChat
                }), i[1] = e) : e = i[1], e
            }
            if (h) {
                let e;
                return i[2] !== s ? (e = s ?? (0, n.jsx)(o.a, {
                    ...Y.aiService
                }), i[2] = s, i[3] = e) : e = i[3], e
            }
            if (void 0 !== m) {
                let e;
                return null == m && (g || "home" === u) ? null : (i[4] !== d || i[5] !== m ? (e = (0, n.jsx)(V, {
                    ordinaryDisclaimer: d,
                    regulatedConnectorKind: m
                }), i[4] = d, i[5] = m, i[6] = e) : e = i[6], e)
            }
            return "home" === u ? null : (i[7] !== l || i[8] !== d ? (a = (0, n.jsx)(K, {
                conversationId: l,
                isBrowserSideChat: g,
                ordinaryDisclaimer: d
            }), i[7] = l, i[8] = d, i[9] = a) : a = i[9], a)
        }

        function K(e) {
            let t, a = (0, r.c)(3),
                {
                    conversationId: s,
                    isBrowserSideChat: o,
                    ordinaryDisclaimer: l
                } = e,
                c = (0, i.x)(y.W, s ?? null);
            return o && null == c ? null : (a[0] !== l || a[1] !== c ? (t = (0, n.jsx)(V, {
                ordinaryDisclaimer: l,
                regulatedConnectorKind: c
            }), a[0] = l, a[1] = c, a[2] = t) : t = a[2], t)
        }

        function V(e) {
            let t, a = (0, r.c)(4),
                {
                    ordinaryDisclaimer: i,
                    regulatedConnectorKind: s
                } = e;
            if ("finance" === s) {
                let e;
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(o.a, {
                    ...Y.finance
                }), a[0] = e) : e = a[0], e
            }
            if ("health" === s) {
                let e;
                return a[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(o.a, {
                    ...Y.health
                }), a[1] = e) : e = a[1], e
            }
            return a[2] !== i ? (t = i ?? (0, n.jsx)(o.a, {
                ...Y.personal
            }), a[2] = i, a[3] = t) : t = a[3], t
        }

        function H(e) {
            let t, a = (0, r.c)(10),
                {
                    account: s,
                    pendingWorkspaceDisclaimer: l,
                    isTemporaryChat: c,
                    renderOrdinaryDisclaimer: u
                } = e,
                m = (0, p.a)(),
                {
                    data: h
                } = (0, i.x)(f.a, s.id),
                {
                    data: g
                } = (0, i.x)(d.m, s.id);
            if (null == h || null != l && null == g) return l ?? null;
            let w = "early-access" === h.account.workspace_type;
            if (!w && null == g) return null;
            let y = h.account.name ?? s.name;
            if (g?.beta_settings.training_allowed === !0) {
                let e;
                a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(o.a, {
                    ...Y.workspaceResearchPartner,
                    values: {
                        link: J
                    }
                }), a[0] = e) : e = a[0], t = e
            } else if (w) {
                let e;
                a[1] !== y ? (e = null == y ? (0, n.jsx)(o.a, {
                    ...Y.earlyAccessWorkspaceWithoutName
                }) : (0, n.jsx)(o.a, {
                    ...Y.earlyAccessWorkspace,
                    values: {
                        workspaceName: y
                    }
                }), a[1] = y, a[2] = e) : e = a[2], t = e
            } else if (c) {
                let e;
                a[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(o.a, {
                    ...Y.workspaceTemporaryChat
                }), a[3] = e) : e = a[3], t = e
            } else if (null != h.account.ekm_config) {
                let e;
                a[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(o.a, {
                    ...Y.encryptedWorkspace
                }), a[4] = e) : e = a[4], t = e
            } else if ("k12" === s.plan_type) {
                let e;
                a[5] !== y ? (e = null == y ? (0, n.jsx)(o.a, {
                    ...Y.k12WorkspaceWithoutName
                }) : (0, n.jsx)(o.a, {
                    ...Y.k12Workspace,
                    values: {
                        workspaceName: y
                    }
                }), a[5] = y, a[6] = e) : e = a[6], t = e
            } else {
                let e, r;
                return m ? null : (a[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(o.a, {
                    ...Y.workspace
                }), a[7] = e) : e = a[7], t = e, a[8] !== u ? (r = u?.(t) ?? t, a[8] = u, a[9] = r) : r = a[9], r)
            }
            return t
        }

        function J(e) {
            return (0, n.jsx)(m.a, {
                className: "cursor-interaction underline underline-offset-2 hover:text-default",
                href: "https://help.openai.com/articles/20001245",
                initiator: "open_in_browser_bridge",
                isBrowserEnabled: !1,
                children: e
            })
        }
        let Y = (0, l.f)({
            finance: {
                id: "mattressFinanceDisclaimer.composerDisclaimer",
                defaultMessage: "ChatGPT can make mistakes and isn’t a licensed investment adviser or authorized to prepare tax returns."
            },
            health: {
                id: "potion.footerDisclaimer.medicalDisclaimer",
                defaultMessage: "ChatGPT can make mistakes and isn't intended for diagnosis or treatment. Consult a doctor for medical advice."
            },
            aiService: {
                id: "codex.composer.browserDisclaimer.aiService",
                defaultMessage: "ChatGPT is AI and can make mistakes. Check important info."
            },
            personal: {
                id: "codex.composer.browserDisclaimer",
                defaultMessage: "ChatGPT can make mistakes. Check important info."
            },
            temporaryChat: {
                id: "codex.composer.browserDisclaimer.temporaryChat",
                defaultMessage: "For safety, we may keep a copy of this chat for up to 30 days."
            },
            workspace: {
                id: "codex.composer.browserDisclaimer.workspace",
                defaultMessage: "ChatGPT can make mistakes. Workspace data isn't used to train models."
            },
            workspaceResearchPartner: {
                id: "codex.composer.browserDisclaimer.workspaceResearchPartner",
                defaultMessage: "ChatGPT can make mistakes. This workspace is opted in to the ChatGPT Business Research Partner Program. <link>Learn more</link>"
            },
            earlyAccessWorkspace: {
                id: "codex.composer.browserDisclaimer.earlyAccessWorkspace",
                defaultMessage: "ChatGPT can make mistakes. OpenAI uses {workspaceName} workspace data to train its models."
            },
            earlyAccessWorkspaceWithoutName: {
                id: "codex.composer.browserDisclaimer.earlyAccessWorkspaceWithoutName",
                defaultMessage: "ChatGPT can make mistakes. OpenAI uses your workspace data to train its models."
            },
            workspaceTemporaryChat: {
                id: "codex.composer.browserDisclaimer.workspaceTemporaryChat",
                defaultMessage: "Workspace data isn't used to train models by default. For safety, we may keep a copy of this chat for up to 30 days."
            },
            encryptedWorkspace: {
                id: "codex.composer.browserDisclaimer.encryptedWorkspaceData",
                defaultMessage: "ChatGPT can make mistakes. OpenAI doesn’t train on your workspace data, which is encrypted with keys managed by your organization."
            },
            k12Workspace: {
                id: "codex.composer.browserDisclaimer.k12Workspace",
                defaultMessage: "ChatGPT for Teachers can make mistakes. OpenAI doesn't use {workspaceName} workspace data to train its models."
            },
            k12WorkspaceWithoutName: {
                id: "codex.composer.browserDisclaimer.k12WorkspaceWithoutName",
                defaultMessage: "ChatGPT for Teachers can make mistakes. OpenAI doesn't use your workspace data to train its models."
            }
        })
    }),
    md8w: (function(e, t, a) {
        var n = a("Q840"),
            r = a("lAQI"),
            i = a("Cslg"),
            s = a("OWtl"),
            o = a("cX6x"),
            l = a("O666");
        let c = "623291997",
            d = r.E().nonnegative().catch(2),
            u = r.E().nonnegative().catch(24),
            p = (0, n.c)(s.a, e => {
                let {
                    get: t
                } = e, a = t(l.a, c), n = null == a ? (0, o.d)(c)?.value : void 0, r = null != t(i.k) && (a?.get("app_disclosure_below_message_actions", !1) ?? n?.app_disclosure_below_message_actions === !0), s = r ? a?.get("app_disclosure_impression_seconds", 2) ?? n?.app_disclosure_impression_seconds : 2, p = r ? a?.get("app_disclosure_cooldown_hours", 24) ?? n?.app_disclosure_cooldown_hours : 24;
                return {
                    enabled: r,
                    aboveActions: r && (a?.get("app_disclosure_above_message_actions", !1) ?? n?.app_disclosure_above_message_actions === !0),
                    inlineWithActions: r && (a?.get("app_disclosure_inline_with_message_actions", !1) ?? n?.app_disclosure_inline_with_message_actions === !0),
                    centered: r && (a?.get("app_disclosure_centered", !1) ?? n?.app_disclosure_centered === !0),
                    smallerFontSize: r && (a?.get("app_disclosure_smaller_font_size", !1) ?? n?.app_disclosure_smaller_font_size === !0),
                    workModeEnabled: a?.get("app_disclosure_in_work_mode", !1) ?? n?.app_disclosure_in_work_mode === !0,
                    standardOnlyForSessionSends: r && (a?.get("app_standard_disclosure_session_sends_only", !1) ?? n?.app_standard_disclosure_session_sends_only === !0),
                    showOnFirstMessage: a?.get("app_disclosure_show_on_first_message", !1) ?? n?.app_disclosure_show_on_first_message === !0,
                    impressionMs: 1e3 * d.parse(s),
                    cooldownMs: 60 * u.parse(p) * 60 * 1e3,
                    hideOnSend: !r || (a?.get("app_hide_disclosure_on_send", !0) ?? n?.app_hide_disclosure_on_send !== !1)
                }
            }, {
                isEqual: (e, t) => e.enabled === t.enabled && e.aboveActions === t.aboveActions && e.inlineWithActions === t.inlineWithActions && e.centered === t.centered && e.smallerFontSize === t.smallerFontSize && e.workModeEnabled === t.workModeEnabled && e.standardOnlyForSessionSends === t.standardOnlyForSessionSends && e.showOnFirstMessage === t.showOnFirstMessage && e.impressionMs === t.impressionMs && e.cooldownMs === t.cooldownMs && e.hideOnSend === t.hideOnSend
            }),
            m = (0, n.c)(s.a, e => {
                let {
                    get: t
                } = e;
                return t(p).enabled
            });
        a.d(t, {}, {
            a: p,
            b: m
        })
    }),
    dBtq: (function(e, t, a) {
        a.d(t, {
            a: () => x,
            b: () => _,
            c: () => k
        });
        var n = a("Q840"),
            r = a("lAQI"),
            i = a("Ow2S"),
            s = a("ISgP"),
            o = a("x4uR"),
            l = a("aFoA"),
            c = a("dQRk"),
            d = a("p0Ph"),
            u = a("OWtl"),
            p = a("Nwp9"),
            m = a("md8w"),
            h = a("AuIy"),
            g = a("hx97"),
            f = a("lX86");
        let w = r.F({
                at: r.E().nonnegative(),
                messageId: r.L()
            }),
            y = (0, p.b)("message-disclosure-standard-impression", null, {
                coerceStoredValue: e => w.safeParse(e).data ?? null
            }),
            b = (0, n.u)(u.a, () => new Map),
            x = (0, n.d)(u.a, (e, t) => {
                let {
                    get: a
                } = t, n = null == e ? void 0 : a(c.y, e);
                return "tpp" !== n && "flora" !== n || a(m.a).workModeEnabled
            }),
            _ = (0, n.d)(u.a, (e, t) => {
                let {
                    get: a,
                    scope: n
                } = t, r = a(m.a);
                if (!r.enabled || !a(x, e)) return {};
                let u = a(l.a, e) ?? e,
                    p = a(i.j, u);
                if (p && r.hideOnSend) return {};
                let w = a(c.N, e);
                if (null == w) return {};
                let _ = a(c.T, e),
                    v = null != _ && a(o.b, _).data?.gizmo.gizmo_snorlax_type === "potion" ? "health" : null,
                    k = n.get(y),
                    C = Date.now(),
                    S = a(c.J, e),
                    j = null;
                S ? j = a(s.a, e) : p && (j = []);
                let A = r.standardOnlyForSessionSends ? a(d.x, (0, l.d)(a, e)) : void 0;
                return function(e, t) {
                    let a, {
                            hideOnSend: n,
                            readyLatestResponseMessageIds: r,
                            projectKind: i,
                            canShowStandard: s,
                            standardDecisions: o,
                            showOnFirstMessage: l,
                            sessionStartSeconds: c,
                            isLocallySentPrompt: d
                        } = t,
                        u = (0, h.a)(e),
                        p = {},
                        m = i ?? "standard",
                        w = !1,
                        y = !1,
                        b = () => {
                            if (null != a) {
                                if ("standard" !== m) p[m] = a;
                                else if (null == c || w) {
                                    let e = o.get(a);
                                    null == e && (e = l && !y || s(a), o.set(a, e)), e && (p.standard = a)
                                }
                                y = !0, a = void 0
                            }
                        };
                    for (let e of u) {
                        var x;
                        "user" === (x = e).author.role && (0, g.o)(x) && !(0, h.n)(x) && (b(), w = null != c && (null == e.create_time ? null != e.id && d?.(e.id) === !0 : e.create_time >= c), m = i ?? "standard", n && (delete p.standard, delete p.health, delete p.finance)), m = (0, f.b)(e) ?? m, (0, g.l)(e) && (a = e.id)
                    }
                    return null != a && (null == r || r.includes(a)) && b(), p
                }({
                    mapping: w,
                    current_node: a(c.C, e)
                }, {
                    hideOnSend: r.hideOnSend,
                    readyLatestResponseMessageIds: j,
                    projectKind: v,
                    canShowStandard: e => {
                        var t, a, n, i;
                        return t = e, a = k, n = r.cooldownMs, i = C, null == a || a.messageId === t || 0 === n || i < a.at || i - a.at >= n
                    },
                    standardDecisions: a(b),
                    showOnFirstMessage: r.showOnFirstMessage,
                    sessionStartSeconds: r.standardOnlyForSessionSends ? performance.timeOrigin / 1e3 : void 0,
                    isLocallySentPrompt: e => null != A && Object.hasOwn(A, e)
                })
            }, {
                isEqual: (e, t) => e.standard === t.standard && e.health === t.health && e.finance === t.finance
            }),
            v = (0, n.d)(u.a, (e, t) => {
                let {
                    conversationId: a,
                    messageId: n
                } = e, {
                    get: r
                } = t, i = r(_, a);
                return i.health === n ? "health" : i.finance === n ? "finance" : i.standard === n ? "standard" : null
            });

        function k(e, t, a) {
            "standard" === e.get(v, {
                conversationId: t,
                messageId: a
            }) && e.set(y, {
                at: Date.now(),
                messageId: a
            })
        }
    }),
    dMTK: (function(e, t, a) {
        function n(e, t) {
            return (Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - Date.UTC(t.getFullYear(), t.getMonth(), t.getDate())) / 864e5
        }

        function r(e, t) {
            let a = e.formatRelativeTime(t, "day", {
                numeric: "auto"
            });
            return e.locale.startsWith("en") ? a.charAt(0).toUpperCase() + a.slice(1) : a
        }
        a.d(t, {}, {
            a: n,
            b: r,
            c: function(e, t, a) {
                let i = Math.max(n(a, t), 0);
                return {
                    date: i <= 1 ? r(e, -i) : i <= 7 ? e.formatDate(t, {
                        weekday: "long"
                    }) : i <= 365 ? e.formatDate(t, {
                        weekday: "short",
                        month: "short",
                        day: "numeric"
                    }) : e.formatDate(t, {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                    }),
                    time: e.formatTime(t, {
                        hour: "numeric",
                        minute: "2-digit"
                    }),
                    includeAt: i > 7
                }
            },
            d: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
                    a = null,
                    n = !1;
                return e.map(e => {
                    if (null == e) return a = null, n = !0, null;
                    let r = null;
                    for (let i of e) i.breaksPreviousAdjacency && (a = null), null == r && function(e) {
                        let {
                            current: t,
                            previous: a,
                            isFirstUserTurn: n,
                            nowMs: r
                        } = e;
                        return !1 !== t.opensExchange && null != t.sentAtMs && !!Number.isFinite(t.sentAtMs) && (!!n && r - t.sentAtMs > 36e5 || a?.role === "assistant" && null != a.sentAtMs && Number.isFinite(a.sentAtMs) && t.sentAtMs - a.sentAtMs > ("user" === t.role ? 36e5 : 6e5))
                    }({
                        current: i,
                        previous: a,
                        isFirstUserTurn: "user" === i.role && !n,
                        nowMs: t
                    }) && (r = i.sentAtMs), n = n || "user" === i.role, a = i;
                    return r
                })
            },
            e: function(e) {
                return new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime()
            }
        })
    }),
    WSJu: (function(e, t, a) {
        var n = a("W4He");

        function r(e) {
            return i(e) && (null != e.activity || "keep" !== e.role)
        }

        function i(e) {
            return !e.pendingAnswer && !e.preparing
        }

        function s(e, t) {
            let a = {
                label: t,
                labelKey: `direction:${t}`,
                labelPriority: "direction"
            };
            return "tool-status" === e.kind ? {
                ...e,
                ...a,
                active: !0
            } : {
                ...e,
                ...a
            }
        }
        a.d(t, {}, {
            a: r,
            b: function(e, t) {
                let {
                    fallback: a,
                    direction: o,
                    opening: l,
                    previous: c,
                    elapsedWaitKey: d
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, u = e.findLastIndex(e => "bubble" === e.role), p = e[u]?.key ?? "initial", m = e.findLastIndex(i), h = e[m], g = m > u ? h : void 0, f = c?.slice === p ? c : void 0, w = f?.source === h?.key ? f : void 0, y = e.findLast(r), b = function(e, t, a, r, i, o, l, c) {
                    if ("working" !== a) {
                        for (let a = e.length - 1; a >= t; a--) {
                            let t = e[a];
                            if ("final" === t.role && !t.pendingAnswer && !t.preparing) return {
                                kind: "answer",
                                source: t.key
                            }
                        }
                        return {
                            kind: "quiet"
                        }
                    }
                    if (r?.activity) {
                        var d, u;
                        return {
                            kind: "label",
                            source: r.key,
                            status: r.acceptsDirection && l ? (d = r.activity, u = l, "live" === d.kind && "activity" !== d.labelPriority || "tool-status" === d.kind && "immediate" === d.labelPriority ? d : s(d, u)) : r.activity
                        }
                    }
                    if (i?.streamingCommentary || (0, n.b)(r, o, e, t)) return {
                        kind: "quiet"
                    };
                    let p = e.findLast(e => e.commandRow && e.runningWork && e.activity);
                    if (l && (r?.acceptsDirection || null != o || e.some(e => e.commandRow))) {
                        let e = r?.acceptsDirection ? r.key : void 0,
                            t = e && c?.kind === "live" ? {
                                ...c,
                                animateIcon: !1
                            } : {
                                kind: "thinking"
                            };
                        return {
                            kind: "label",
                            source: e,
                            status: s(t, l)
                        }
                    }
                    return p?.activity && null != o && null != r ? r.commandRow && c ? {
                        kind: "label",
                        source: r.key,
                        status: "live" === c.kind ? {
                            ...c,
                            animateIcon: !1
                        } : c
                    } : {
                        kind: "label",
                        status: p.activity
                    } : "delayed-thinking" === o && i !== r && i?.runningWork ? {
                        kind: "quiet"
                    } : "string" == typeof o ? {
                        kind: "wait"
                    } : o ? {
                        kind: "label",
                        status: o
                    } : {
                        kind: "quiet"
                    }
                }(e, u + 1, t, g, y, a, o, w?.status), x = "label" === b.kind && null != b.source && b.source === h?.key, _ = null != f && (null != w || null == h || "bubble" === h.role), v = c;
                if (x && h?.activity && w?.status !== h.activity ? v = {
                        slice: p,
                        source: h.key,
                        status: h.activity
                    } : x || "wait" === b.kind && _ || (v = void 0), "wait" !== b.kind) return {
                    slice: p,
                    response: b,
                    nextActivity: v,
                    timer: void 0
                };
                let k = null != f || null != y && "bubble" !== y.role,
                    C = JSON.stringify([p, y?.key]);
                return {
                    slice: p,
                    nextActivity: v,
                    ...(0, n.c)({
                        key: C,
                        elapsedWaitKey: d,
                        midTurn: k,
                        role: y?.role,
                        previous: _ ? f.status : void 0,
                        source: w?.source,
                        opening: "starting" === a ? l : void 0
                    })
                }
            }
        })
    }),
    W4He: (function(e, t, a) {
        var n = a("c8QI");

        function r(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            for (let a = t; a < e.length; a++)
                if (e[a].runningWork) return !0;
            return !1
        }
        a.d(t, {}, {
            a: function(e, t) {
                if (!e.compacting) {
                    if ("codex" === e.family) return e.canPresent && (e.hasActivity || e.waitingForFirstActivity || r(t)) ? null != e.namedStatus ? e.namedStatus : e.waitingForFirstActivity && !e.starting ? {
                        kind: "thinking"
                    } : e.starting ? "starting" : "delayed-thinking" : void 0;
                    if (e.canPresent && e.hideReasoning) return {
                        kind: "thinking"
                    };
                    if (e.awaitingUntitledReasoning || e.canPresent && (e.waitingForResponse || e.beforeFirstResponse || "commentary" === e.tailRole || "final" === e.tailRole || r(t))) return "delayed-thinking"
                }
            },
            b: function(e, t, a, n) {
                return e?.role === "commentary" && (!0 === e.streamingCommentary || "delayed-thinking" !== t && !r(a, n))
            },
            c: function(e) {
                let {
                    key: t,
                    elapsedWaitKey: a,
                    role: r,
                    midTurn: i,
                    previous: s,
                    source: o,
                    opening: l
                } = e, c = {
                    key: t,
                    delayMs: i && "commentary" !== r && "final" !== r ? 5e3 : 1e3
                };
                return a === t ? {
                    timer: c,
                    response: {
                        kind: "label",
                        source: o,
                        status: {
                            kind: "thinking",
                            labelKey: i ? n.a : void 0
                        }
                    }
                } : s ? {
                    timer: c,
                    response: {
                        kind: "label",
                        source: o,
                        status: "live" === s.kind ? {
                            ...s,
                            animateIcon: !1
                        } : s
                    }
                } : {
                    timer: c,
                    response: l ? {
                        kind: "label",
                        status: l
                    } : {
                        kind: "quiet"
                    }
                }
            }
        })
    }),
    zjpG: (function(e, t, a) {
        var n = a("ABep"),
            r = a("QosV"),
            i = a("on57"),
            s = a("oyxz");
        a.d(t, {}, {
            a: function(e) {
                let t, a, o, l = (0, r.c)(5),
                    {
                        className: c
                    } = e;
                return l[0] !== c ? (t = (0, i.b)("last:hidden", c), l[0] = c, l[1] = t) : t = l[1], l[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, n.jsx)(s.a, {
                    id: "codex.ui.bulletSeparator",
                    defaultMessage: "·"
                }), l[2] = a) : a = l[2], l[3] !== t ? (o = (0, n.jsx)("span", {
                    "aria-hidden": !0,
                    className: t,
                    children: a
                }), l[3] = t, l[4] = o) : o = l[4], o
            }
        })
    }),
    r21w: (function(e, t, a) {
        a.d(t, {
            a: () => s
        });
        var n = a("ABep"),
            r = a("QosV"),
            i = a("on57");

        function s(e) {
            let t, a, s, o, l = (0, r.c)(8);
            return l[0] !== e ? ({
                className: t,
                ...a
            } = e, l[0] = e, l[1] = t, l[2] = a) : (t = l[1], a = l[2]), l[3] !== t ? (s = (0, i.b)("Placeholder-M5Cmfu", t), l[3] = t, l[4] = s) : s = l[4], l[5] !== a || l[6] !== s ? (o = (0, n.jsx)("div", {
                className: s,
                ...a
            }), l[5] = a, l[6] = s, l[7] = o) : o = l[7], o
        }
    }),
    SUhA: (function(e, t, a) {
        var n = a("QosV"),
            r = a("irkb"),
            i = a("Q840"),
            s = a("zd8w"),
            o = a("tl5a"),
            l = a("CBsD"),
            c = a("kfGJ"),
            d = a("gTKF"),
            u = a("zHp1");
        a.d(t, {}, {
            a: function(e) {
                let t, a, p, m, h, g, f, w, y = (0, n.c)(38),
                    {
                        src: b,
                        conversationId: x,
                        hostId: _,
                        imageAssetResolver: v,
                        shouldLoadFileDataUrl: k
                    } = e,
                    C = (0, r.c)(),
                    S = (0, i.x)(o.H, x),
                    j = _ ?? S ?? c.a,
                    A = (0, c.c)(j);
                y[0] !== x ? (t = null == x ? null : {
                    kind: "app-server",
                    conversationId: x
                }, y[0] = x, y[1] = t) : t = y[1];
                let M = (0, i.x)(d.threadExecutorTargetByThread$, t),
                    I = M?.hostId === j ? M.environmentId : void 0,
                    [T, P] = (0, s.useState)(null);
                y[2] !== b ? (a = b.trim(), y[2] = b, y[3] = a) : a = y[3];
                let F = a.length > 0,
                    D = F && (0, u.h)(b) ? b : "",
                    {
                        dataUrl: L,
                        src: O,
                        isLoading: N,
                        isError: q,
                        loadSource: W,
                        loadTiming: z,
                        imageCacheHit: E,
                        isShowingCachedImage: R,
                        imageCheck: U,
                        refetch: B,
                        deleted: G
                    } = (0, u.l)(D, v);
                y[4] !== F || y[5] !== A.id || y[6] !== A.kind || y[7] !== j || y[8] !== b ? (p = F ? (0, l.b)(b) : null, "local" === A.kind && A.id, m = null, y[4] = F, y[5] = A.id, y[6] = A.kind, y[7] = j, y[8] = b, y[9] = p, y[10] = m) : (p = y[9], m = y[10]);
                let Q = m,
                    K = T?.src === b && T.environmentId === I ? T : null,
                    V = K?.dataUrl ?? null,
                    H = F ? O ?? Q ?? (null != p || D ? V : b) : null;
                y[11] !== p || y[12] !== x || y[13] !== Q || y[14] !== I || y[15] !== j || y[16] !== C || y[17] !== k || y[18] !== b ? (h = () => {
                    if (null == p || null != Q && !k) return;
                    let e = !1;
                    return P({
                        src: b,
                        dataUrl: null,
                        environmentId: I,
                        isLoading: !0
                    }), (0, l.e)(p, j, C, void 0, x, I).then(t => {
                        e || P({
                            src: b,
                            dataUrl: t,
                            environmentId: I,
                            isLoading: !1
                        })
                    }), () => {
                        e = !0
                    }
                }, g = [p, x, Q, I, j, C, k, b], y[11] = p, y[12] = x, y[13] = Q, y[14] = I, y[15] = j, y[16] = C, y[17] = k, y[18] = b, y[19] = h, y[20] = g) : (h = y[19], g = y[20]), (0, s.useEffect)(h, g), y[21] !== L || y[22] !== V || y[23] !== b ? (f = L ?? V ?? (b.startsWith("data:image/") ? b : null), y[21] = L, y[22] = V, y[23] = b, y[24] = f) : f = y[24];
                let J = L ?? V ?? H,
                    Y = N || null != p && null == Q && (null == K || K.isLoading),
                    $ = !!D && q;
                return y[25] !== G || y[26] !== E || y[27] !== U || y[28] !== R || y[29] !== W || y[30] !== z || y[31] !== H || y[32] !== B || y[33] !== f || y[34] !== J || y[35] !== Y || y[36] !== $ ? (w = {
                    dataUrl: f,
                    previewSrc: H,
                    downloadSrc: J,
                    isLoading: Y,
                    isError: $,
                    loadSource: W,
                    loadTiming: z,
                    imageCacheHit: E,
                    isShowingCachedImage: R,
                    imageCheck: U,
                    refetch: B,
                    deleted: G
                }, y[25] = G, y[26] = E, y[27] = U, y[28] = R, y[29] = W, y[30] = z, y[31] = H, y[32] = B, y[33] = f, y[34] = J, y[35] = Y, y[36] = $, y[37] = w) : w = y[37], w
            }
        })
    }),
    QCUA: (function(e, t, a) {
        let n = (0, a("zd8w").createContext)("chat");
        a.d(t, {}, {
            a: n
        })
    }),
    iIHp: (function(e, t, a) {
        var n = a("QosV"),
            r = a("zd8w");
        class i {
            errors;
            pendingRequest = null;
            listeners = new Set;
            constructor(e) {
                this.errors = e
            }
            getSnapshot = () => null == this.pendingRequest ? null : this.pendingRequest.confirmation;
            subscribe = e => (this.listeners.add(e), () => {
                this.listeners.delete(e), 0 === this.listeners.size && this.cancel()
            });
            request = e => null != this.pendingRequest ? Promise.reject(this.errors.createAlreadyPendingError()) : new Promise((t, a) => {
                this.pendingRequest = {
                    confirmation: e,
                    reject: a,
                    resolve: t
                }, this.notify()
            });
            confirm = e => {
                this.takePendingRequest()?.resolve(e)
            };
            cancel = () => {
                this.takePendingRequest()?.reject(this.errors.createCanceledError())
            };
            notify() {
                for (let e of this.listeners) e()
            }
            takePendingRequest() {
                let e = this.pendingRequest;
                return this.pendingRequest = null, null != e && this.notify(), e
            }
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, s = (0, n.c)(7);
                s[0] !== e ? (t = () => new i(e), s[0] = e, s[1] = t) : t = s[1];
                let [o] = (0, r.useState)(t), l = (0, r.useSyncExternalStore)(o.subscribe, o.getSnapshot, o.getSnapshot);
                return s[2] !== l || s[3] !== o.cancel || s[4] !== o.confirm || s[5] !== o.request ? (a = {
                    cancel: o.cancel,
                    confirmation: l,
                    confirm: o.confirm,
                    request: o.request
                }, s[2] = l, s[3] = o.cancel, s[4] = o.confirm, s[5] = o.request, s[6] = a) : a = s[6], a
            }
        })
    }),
    v7ut: (function(e, t, a) {
        var n = a("ABep"),
            r = a("QosV"),
            i = a("zd8w"),
            s = a("Wf1j"),
            o = a("oyxz"),
            l = a("hL9c"),
            c = a("osar"),
            d = a("eFVb"),
            u = a("W2tE"),
            p = a("v5fl"),
            m = a("Sm6l"),
            h = a("JNtf"),
            g = a("mUDD"),
            f = a("zLIa"),
            w = a("sF0J"),
            y = a("E1V6");

        function b(e) {
            let t, a, l, b, C, S, j, A = (0, r.c)(31),
                {
                    canConfirm: M,
                    context: I,
                    description: T,
                    imageUrls: P,
                    onCancel: F,
                    onConfirm: D,
                    prompt: L,
                    title: O
                } = e,
                N = void 0 === M || M,
                q = (0, s.a)();
            A[0] !== L ? (t = () => {
                let e = (0, d.b)(L, {
                    defaultTextKind: "prompt",
                    enableFileMentions: !1,
                    enableSkillMentions: !1,
                    enableSlashCommands: !1,
                    enterBehavior: "newline"
                });
                return {
                    controller: e,
                    destroy: () => e.destroy()
                }
            }, A[0] = L, A[1] = t) : t = A[1];
            let [W] = (0, i.useState)(t), {
                controller: z,
                destroy: E
            } = W;
            (0, y.b)(E, z);
            let R = (0, p.b)(z, _, "document"),
                [U, B] = (0, i.useState)(I);
            A[2] !== I ? (a = k(I), A[2] = I, A[3] = a) : a = A[3];
            let G = a,
                [Q, K] = (0, i.useState)(G),
                [V, H] = (0, i.useState)("prompt");
            A[4] !== Q ? (l = function(e) {
                try {
                    return (0, w.b)(JSON.parse(e))
                } catch {
                    return
                }
            }(Q), A[4] = Q, A[5] = l) : l = A[5];
            let J = l;
            A[6] !== N || A[7] !== U || A[8] !== z || A[9] !== D ? (b = () => {
                let e = z.getText().trim();
                N && e.length > 0 && D((0, w.a)({
                    context: U,
                    prompt: e
                }))
            }, A[6] = N, A[7] = U, A[8] = z, A[9] = D, A[10] = b) : b = A[10];
            let Y = b;
            return A[11] !== F ? (C = e => {
                e || F()
            }, A[11] = F, A[12] = C) : C = A[12], A[13] !== N || A[14] !== Y || A[15] !== U || A[16] !== Q || A[17] !== z || A[18] !== T || A[19] !== R || A[20] !== P || A[21] !== G || A[22] !== q || A[23] !== F || A[24] !== J || A[25] !== O || A[26] !== V ? (S = "prompt" === V ? (0, n.jsxs)(g.b, {
                className: "gap-4",
                as: "form",
                onSubmit: e => {
                    e.preventDefault(), Y()
                },
                children: [(0, n.jsx)(v, {
                    description: T,
                    title: O
                }), (0, n.jsx)(c.a, {
                    paddingVariant: "inset",
                    children: (0, n.jsx)(c.a.Body, {
                        children: (0, n.jsx)(u.a, {
                            ariaLabel: q.formatMessage({
                                id: "codex.mcpTool.confirmFollowUp.promptAriaLabel",
                                defaultMessage: "Prompt"
                            }),
                            composerController: z,
                            linkOpenTarget: "external-browser",
                            minHeight: "1lh",
                            placeholder: "",
                            onSubmit: Y
                        })
                    })
                }), null != P && P.length > 0 ? (0, n.jsx)("div", {
                    className: "flex flex-wrap gap-2",
                    children: P.map(x)
                }) : null, null != U ? (0, n.jsx)("button", {
                    className: "w-fit cursor-interaction border-0 bg-transparent p-0 text-sm text-link-primary underline-offset-2 hover:underline",
                    type: "button",
                    onClick: () => {
                        K(k(U)), H("widget-state")
                    },
                    children: (0, n.jsx)(o.a, {
                        id: "codex.mcpTool.confirmFollowUp.viewWidgetState",
                        defaultMessage: "View widget state"
                    })
                }) : null, (0, n.jsxs)(g.c, {
                    className: "justify-start gap-2",
                    children: [(0, n.jsx)("div", {
                        className: "flex-1"
                    }), (0, n.jsx)(m.a, {
                        className: "ms-auto",
                        color: "secondary",
                        type: "button",
                        onClick: F,
                        children: (0, n.jsx)(o.a, {
                            id: "codex.mcpTool.confirmFollowUp.cancel",
                            defaultMessage: "Cancel"
                        })
                    }), (0, n.jsx)(m.a, {
                        disabled: !N || !R,
                        type: "submit",
                        children: (0, n.jsx)(o.a, {
                            id: "codex.mcpTool.confirmFollowUp.confirm",
                            defaultMessage: "Send"
                        })
                    })]
                })]
            }) : (0, n.jsxs)(g.b, {
                className: "gap-4",
                children: [(0, n.jsx)(g.d, {
                    title: (0, n.jsx)(h.f, {
                        children: (0, n.jsx)(o.a, {
                            id: "codex.mcpTool.confirmFollowUp.widgetStateTitle",
                            defaultMessage: "Widget state"
                        })
                    }),
                    subtitle: (0, n.jsx)(h.e, {
                        className: "text-secondary",
                        children: (0, n.jsx)(o.a, {
                            id: "codex.mcpTool.confirmFollowUp.widgetStateDescription",
                            defaultMessage: "This JSON will be included with the prompt. Editing it won't change the widget."
                        })
                    })
                }), (0, n.jsx)(f.c, {
                    variant: "code",
                    rows: 10,
                    "aria-invalid": null == J,
                    "aria-label": q.formatMessage({
                        id: "codex.mcpTool.confirmFollowUp.widgetStateAriaLabel",
                        defaultMessage: "Widget state JSON"
                    }),
                    autoFocus: !0,
                    spellCheck: !1,
                    value: Q,
                    onChange: e => {
                        K(e.target.value)
                    }
                }), null == J ? (0, n.jsx)("p", {
                    className: "text-sm text-danger",
                    role: "alert",
                    children: (0, n.jsx)(o.a, {
                        id: "codex.mcpTool.confirmFollowUp.invalidWidgetState",
                        defaultMessage: "Enter a valid JSON object under 32 KB"
                    })
                }) : null, (0, n.jsxs)(g.c, {
                    className: "justify-start gap-2",
                    children: [(0, n.jsx)(m.a, {
                        color: "ghost",
                        disabled: Q === G,
                        type: "button",
                        onClick: () => {
                            K(G)
                        },
                        children: (0, n.jsx)(o.a, {
                            id: "codex.mcpTool.confirmFollowUp.resetWidgetState",
                            defaultMessage: "Reset"
                        })
                    }), (0, n.jsx)("div", {
                        className: "flex-1"
                    }), (0, n.jsx)(m.a, {
                        color: "secondary",
                        type: "button",
                        onClick: () => {
                            K(k(U)), H("prompt")
                        },
                        children: (0, n.jsx)(o.a, {
                            id: "codex.mcpTool.confirmFollowUp.backToPrompt",
                            defaultMessage: "Back"
                        })
                    }), (0, n.jsx)(m.a, {
                        disabled: null == J,
                        type: "button",
                        onClick: () => {
                            null != J && (B(J), H("prompt"))
                        },
                        children: (0, n.jsx)(o.a, {
                            id: "codex.mcpTool.confirmFollowUp.applyWidgetState",
                            defaultMessage: "Apply"
                        })
                    })]
                })]
            }), A[13] = N, A[14] = Y, A[15] = U, A[16] = Q, A[17] = z, A[18] = T, A[19] = R, A[20] = P, A[21] = G, A[22] = q, A[23] = F, A[24] = J, A[25] = O, A[26] = V, A[27] = S) : S = A[27], A[28] !== C || A[29] !== S ? (j = (0, n.jsx)(h.a, {
                open: !0,
                onOpenChange: C,
                size: "wide",
                children: S
            }), A[28] = C, A[29] = S, A[30] = j) : j = A[30], j
        }

        function x(e, t) {
            return (0, n.jsx)(l.a, {
                src: e
            }, t)
        }

        function _(e) {
            return e.getText().trim().length > 0
        }

        function v(e) {
            let t, a, i, s, l, c = (0, r.c)(11),
                {
                    description: d,
                    title: u
                } = e;
            return c[0] !== u ? (t = u ?? (0, n.jsx)(o.a, {
                id: "codex.mcpTool.confirmFollowUp.title",
                defaultMessage: "Send follow-up?"
            }), c[0] = u, c[1] = t) : t = c[1], c[2] !== t ? (a = (0, n.jsx)(h.f, {
                children: t
            }), c[2] = t, c[3] = a) : a = c[3], c[4] !== d ? (i = d ?? (0, n.jsx)(o.a, {
                id: "codex.mcpTool.confirmFollowUp.description",
                defaultMessage: "An app wants to send this prompt"
            }), c[4] = d, c[5] = i) : i = c[5], c[6] !== i ? (s = (0, n.jsx)(h.e, {
                className: "text-secondary",
                children: i
            }), c[6] = i, c[7] = s) : s = c[7], c[8] !== a || c[9] !== s ? (l = (0, n.jsx)(g.d, {
                title: a,
                subtitle: s
            }), c[8] = a, c[9] = s, c[10] = l) : l = c[10], l
        }

        function k(e) {
            return null == e ? "" : (0, w.d)(e)
        }
        a.d(t, {}, {
            McpAppFollowUpConfirmationDialog: function(e) {
                let t, a = (0, r.c)(2),
                    {
                        confirmation: i
                    } = e;
                return null == i ? null : (a[0] !== i ? (t = (0, n.jsx)(b, {
                    ...i
                }), a[0] = i, a[1] = t) : t = a[1], t)
            }
        })
    }),
    sF0J: (function(e, t, a) {
        var n = a("SKgO"),
            r = a("lAQI"),
            i = a("sS8e");
        let s = r.F({
            context: n.c.optional(),
            isVisible: r.j().optional(),
            prompt: r.L().trim().min(1),
            title: r.L().trim().min(1).max(250).optional()
        }).strip();

        function o(e) {
            let t = s.safeParse(e);
            if (!t.success) throw (0, i.c)("Invalid follow-up message", -32602);
            return t.data
        }

        function l(e) {
            let {
                context: t,
                prompt: a
            } = e;
            return null == t ? a : `${a}

Current widget context (JSON):
${(0,n.b)(t)}`
        }
        a.d(t, {
            a: () => l,
            b: () => n.a,
            c: () => o,
            d: () => n.b
        })
    }),
    Yshm: (function(e, t, a) {
        var n = a("lAQI");
        let r = n.L().regex(/^[A-Za-z0-9_-]{1,128}$/),
            i = n.F({
                connectedPluginIds: n.g(n.L()).optional(),
                declinedPluginIds: n.g(n.L()).optional()
            }).catchall(n.x()),
            s = n.F({
                pluginId: n.L().min(1),
                suggestionId: r.optional()
            }),
            o = n.F({
                type: n.z("event"),
                label: n.z("chatgpt_plugin_management_suggestion_impression"),
                payload: n.F({
                    remote_plugin_id: n.L().min(1).max(256),
                    plugin_ids: n.g(n.L().min(1).max(256)).min(1).max(10).optional().catch(void 0),
                    suggestion_id: r
                })
            }),
            l = o.extend({
                label: n.z("chatgpt_plugin_management_suggestion_shown"),
                payload: o.shape.payload.extend({
                    suggestion_id: r.optional(),
                    plugin_ids: n.g(n.L().min(1).max(256)).min(1).max(10)
                })
            }),
            c = n.m("label", [o, l]),
            d = n.F({
                kind: n.z("plugin_suggestions"),
                version: n.z(1),
                suggestions: n.g(n.F({
                    plugin_id: n.L().min(1),
                    display_name: n.L().min(1)
                }))
            }),
            u = n.F({
                "openai/plugin_suggestion_id": r.optional(),
                "openai/plugin_suggestion_connector_ids": n.J(n.L(), n.L().min(1)).optional().catch(void 0)
            });
        a.d(t, {}, {
            a: s,
            b: c,
            c: u,
            d: i,
            e: d
        })
    }),
    LGZt: (function(e, t, a) {
        var n = a("UKCO");
        a.d(t, {}, {
            a: function(e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, n.Pg)(t),
                    r = document.createElement(e);
                if (r instanceof HTMLIFrameElement) r.setAttribute("sandbox", "allow-scripts allow-same-origin"), r.setAttribute("referrerpolicy", "no-referrer");
                else {
                    let e = document.createElement("style");
                    e.textContent = "iframe { border-radius: inherit; }", r.shadowRoot?.append(e)
                }
                return r.setAttribute("partition", a), r
            }
        })
    }),
    uzkw: (function(e, t, a) {
        var n = a("Kwur");
        a.d(t, {}, {
            a: function(e) {
                let {
                    connectorId: t,
                    conversationId: a,
                    eventType: r,
                    expectedIdentity: i,
                    messageId: s,
                    pluginId: o,
                    productSurface: l,
                    suggestionMessageId: c
                } = e;
                n.Request.safePost("/unified_user_signals", {
                    expectedIdentity: i,
                    requestBody: {
                        signal_type: "ecosystem_suggestion_interaction",
                        product_surface: l,
                        signal_metadata: {},
                        user_metadata: {},
                        signal_detail: {
                            common_metadata: {
                                conversation_id: a,
                                message_id: s
                            },
                            ecosystem_suggestion_interaction: {
                                connector_id: t ?? "",
                                plugin_id: o,
                                suggestion_message_id: c,
                                event_type: r
                            }
                        }
                    }
                }).catch(() => void 0)
            }
        })
    }),
    XsXa: (function(e, t, a) {
        var n = a("RaSH");
        let r = (0, n.a)(new Map).readable;
        a.d(t, {}, {
            a: function() {
                let {
                    get: e,
                    readable: t,
                    set: a
                } = (0, n.a)(new Map);
                return {
                    readable: t,
                    setCollapsed(t, n, r) {
                        let i = e(),
                            s = i.get(t);
                        s?.get(n) !== r && a(new Map(i).set(t, new Map(s).set(n, r)))
                    }
                }
            },
            b: r
        })
    })
};