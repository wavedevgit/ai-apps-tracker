export const __rspack_esm_ids = [436242];
export const __webpack_modules__ = {
    pO6K: (function(a, b, c) {
        var d = c("ABep");
        c("zd8w"), b.a = a => (0, d.jsx)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...a,
            children: (0, d.jsx)("path", {
                d: "M14.3349 13.3301V6.60645L5.47065 15.4707C5.21095 15.7304 4.78895 15.7304 4.52925 15.4707C4.26955 15.211 4.26955 14.789 4.52925 14.5293L13.3935 5.66504H6.66011C6.29284 5.66504 5.99507 5.36727 5.99507 5C5.99507 4.63273 6.29284 4.33496 6.66011 4.33496H14.9999L15.1337 4.34863C15.4369 4.41057 15.665 4.67857 15.665 5V13.3301C15.6649 13.6973 15.3672 13.9951 14.9999 13.9951C14.6327 13.9951 14.335 13.6973 14.3349 13.3301Z",
                fill: "currentColor"
            })
        })
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
    PuSj: (function(a, b, c) {
        var d = c("kSHG"),
            e = c("lAQI"),
            f = c("KhaL"),
            g = c("YqAS"),
            h = c("xSzB");

        function i(a) {
            let {
                scope: b,
                conversationId: c,
                access: e,
                resourceUri: h,
                attribution: i,
                toolDescriptors: j
            } = a;
            e.assertActive();
            let k = e.context.connectorTarget,
                {
                    accountId: l
                } = e;
            if (null == k || null == l) throw Error("MCP app connection is unavailable");
            let m = (0, f.b)({
                scope: b,
                accountId: l,
                appUri: `connectors://${k.connectorId}`,
                chatGptConversationId: null,
                threadId: c ?? void 0,
                productSku: "CODEX",
                messageId: null,
                originMetadata: {
                    link_id: k.targetId
                },
                attribution: i,
                toolDescriptors: j
            });
            return {
                connectorTarget: k,
                assertActive: e.assertActive,
                forwardedRequestMethods: ["tools/call", "tools/list", "resources/read"],
                async handleRequest(a, b, c, f) {
                    if (b?.throwIfAborted(), e.assertActive(), "resources/read" === a.method) {
                        let b = d.T.parse(a);
                        (0, g.a)({
                            server: "codex_apps",
                            mcpAppScope: {
                                originResourceUri: h
                            },
                            uri: b.params.uri
                        })
                    }
                    let i = await m.handleRequest(a, b, c, f);
                    return e.assertActive(), i
                }
            }
        }
        c.d(b, {}, {
            a: async function(a) {
                let {
                    scope: b,
                    access: c,
                    resourceUri: d,
                    tool: f,
                    arguments: g,
                    recipientThreadId: j,
                    attribution: k,
                    signal: l
                } = a, m = f.codexAppsToolIdentity, n = c.context.connectorTarget;
                if (null == m || n?.targetId == null || n.connectorId !== m.connectorId || n.targetId !== m.targetId) throw Error("MCP app connection is unavailable");
                let o = e.F({
                    _codex_apps: e.J(e.L(), e.R()).optional()
                }).nullish().parse(f.tool?._meta)?._codex_apps;
                return h.g.parse(await i({
                    scope: b,
                    conversationId: null,
                    access: c,
                    resourceUri: d,
                    attribution: k,
                    toolDescriptors: null == o ? void 0 : new Map([
                        [m.actionName, {
                            name: f.name,
                            metadata: o
                        }]
                    ])
                }).handleRequest({
                    method: "tools/call",
                    params: {
                        name: m.actionName,
                        arguments: g
                    }
                }, l, void 0, j))
            },
            b: i
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
    IL1g: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("zd8w"),
            g = c("Wf1j"),
            h = c("ZtSy");
        let i = [{
            label: "OpenAI OpCo, LLC",
            emphasize: !0
        }, {
            label: "\uB300\uD45C\uC790: Sam Altman"
        }, {
            label: "\uC8FC\uC18C: 1455 3rd Street, San Francisco, CA 94158"
        }, {
            label: "\uC804\uD654: 02-735-2109"
        }, {
            label: "https://help.openai.com/ko-kr",
            href: "https://help.openai.com/ko-kr"
        }, {
            label: "816-80-03326",
            prefix: "\uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638: ",
            emphasize: !0
        }, {
            label: "\uD1B5\uC2E0\uD310\uB9E4\uC5C5\uC2E0\uACE0\uBC88\uD638: 2026-\uACF5\uC815-0022"
        }, {
            label: "\uC774\uC6A9 \uC57D\uAD00",
            href: "https://openai.com/ko-KR/policies/row-terms-of-use/"
        }, {
            label: "\uD638\uC2A4\uD305 \uC11C\uBE44\uC2A4 \uC81C\uACF5: Microsoft Azure"
        }, {
            label: "\uC0AC\uC5C5\uC790 \uCD94\uAC00 \uC815\uBCF4",
            href: "https://www.ftc.go.kr/selectBizOvrCommPop.do?apvPermMgtNo=2026%EA%B3%B5%EC%A0%950022",
            emphasize: !0
        }];

        function j(a) {
            let b, c, g = (0, e.c)(4),
                {
                    inDialog: j
                } = a,
                k = void 0 !== j && j;
            return g[0] !== k ? (b = i.map((a, b) => {
                let c = a.emphasize ? (0, d.jsx)("strong", {
                    children: a.label
                }) : a.label;
                return (0, d.jsxs)(f.Fragment, {
                    children: [b > 0 && (0, d.jsx)("span", {
                        "aria-hidden": "true",
                        children: "|"
                    }), a.href ? (0, d.jsx)(h.a, {
                        href: a.href,
                        initiator: "open_in_browser_bridge",
                        openTarget: k ? "external-browser" : void 0,
                        underline: "always",
                        children: c
                    }) : (0, d.jsxs)("span", {
                        children: [a.prefix, c]
                    })]
                }, a.label)
            }), g[0] = k, g[1] = b) : b = g[1], g[2] !== b ? (c = (0, d.jsx)("div", {
                className: "flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-xs text-secondary select-text",
                children: b
            }), g[2] = b, g[3] = c) : c = g[3], c
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, f, h = (0, e.c)(5),
                    {
                        inDialog: i
                    } = a,
                    k = void 0 !== i && i,
                    l = (0, g.a)();
                return "ko" !== new Intl.Locale(l.locale).language ? null : (h[0] !== k ? (b = (0, d.jsx)(j, {
                    inDialog: k
                }), h[0] = k, h[1] = b) : b = h[1], h[2] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, d.jsx)("p", {
                    children: "\uADC0\uD558\uAC00 19\uC138 \uBBF8\uB9CC\uC758 \uC774\uC6A9\uC790\uB85C\uC11C \uADC0\uD558\uC758 \uBC95\uC815\uB300\uB9AC\uC778\uC774 \uBCF8 \uACC4\uC57D\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uC740 \uACBD\uC6B0, \uADC0\uD558 \uB610\uB294 \uADC0\uD558\uC758 \uBC95\uC815\uB300\uB9AC\uC778\uC740 \uACC4\uC57D\uC744 \uCDE8\uC18C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                }), h[2] = c) : c = h[2], h[3] !== b ? (f = (0, d.jsxs)("div", {
                    className: "flex flex-col items-center gap-2 text-center text-xs text-secondary select-text",
                    children: [b, c]
                }), h[3] = b, h[4] = f) : f = h[4], f)
            },
            b: j
        })
    }),
    DWXw: (function(a, b, c) {
        c.d(b, {
            BrowserComposerDisclaimer: () => O,
            BrowserComposerDisclaimerMessage: () => Q,
            a: () => V
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Q840"),
            g = c("Wf1j"),
            h = c("oyxz"),
            i = c("Qgfj"),
            j = c("rEML"),
            k = c("OFP1"),
            l = c("h6fL"),
            m = c("ipGa"),
            n = c("ZtSy");

        function o(a) {
            return (0, d.jsx)(n.a, {
                href: "https://openai.com/policies/privacy-policy/",
                initiator: "open_in_browser_bridge",
                openTarget: "external-browser",
                children: a
            })
        }

        function p(a) {
            let b, c, f, g, i = (0, e.c)(9),
                {
                    context: j
                } = a;
            i[0] !== j.businessName ? (b = j.businessName?.trim(), i[0] = j.businessName, i[1] = b) : b = i[1];
            let k = b;
            return i[2] !== k ? (c = (0, d.jsx)("p", {
                children: k ? (0, d.jsx)(h.a, {
                    id: "businessProfiles.agentChat.privacy.named",
                    defaultMessage: "This chat remains private. {businessName} can only see overall insights about how its AI agent is doing. <learnMore>Learn more</learnMore>",
                    values: {
                        businessName: k,
                        learnMore: o
                    }
                }) : (0, d.jsx)(h.a, {
                    id: "businessProfiles.agentChat.privacy.unnamed",
                    defaultMessage: "This chat remains private. This business can only see overall insights about how its AI agent is doing. <learnMore>Learn more</learnMore>",
                    values: {
                        learnMore: o
                    }
                })
            }), i[2] = k, i[3] = c) : c = i[3], i[4] !== j.notice ? (f = j.notice?.trim() ? (0, d.jsx)("p", {
                children: j.notice
            }) : null, i[4] = j.notice, i[5] = f) : f = i[5], i[6] !== c || i[7] !== f ? (g = (0, d.jsxs)("div", {
                className: "flex flex-col gap-1",
                children: [c, f]
            }), i[6] = c, i[7] = f, i[8] = g) : g = i[8], g
        }
        var q = c("YJm0"),
            r = c("fzVa"),
            s = c("dQRk"),
            t = c("g2p6"),
            u = c("jAnS"),
            v = c("AcSY"),
            w = c("Ho8f"),
            x = c("hZax"),
            y = c("fNyS"),
            z = c("zd8w"),
            A = c("IL1g"),
            B = c("JNtf"),
            C = c("mUDD"),
            D = c("ibLK"),
            E = c("jVko"),
            F = c("zWHk");
        let G = new WeakSet;

        function H(a) {
            let b, c, f, g, i = (0, e.c)(10),
                {
                    children: j
                } = a,
                k = (0, D.a)("(width < 640px)"),
                l = (0, z.useContext)(E.a);
            i[0] !== l ? (b = a => {
                if (null == l) return J;
                let b = () => {
                        G.add(l), a()
                    },
                    c = l.view.dom;
                c.addEventListener("input", b, !0);
                let d = (0, F.b)(l.view, b => {
                    b && a()
                });
                return () => {
                    c.removeEventListener("input", b, !0), d()
                }
            }, i[0] = l, i[1] = b) : b = i[1];
            let m = b;
            i[2] !== l ? (c = () => null == l || !l.hasText() && !G.has(l), i[2] = l, i[3] = c) : c = i[3];
            let n = c,
                o = (0, z.useSyncExternalStore)(m, n, I);
            if (!k) {
                let a;
                return i[4] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(A.b, {}), i[4] = a) : a = i[4], a
            }
            return i[5] !== o ? (f = o && (0, d.jsx)(B.a, {
                size: "responsiveSheet",
                triggerContent: (0, d.jsx)("button", {
                    className: "inline-flex min-h-6 min-w-6 cursor-interaction items-center justify-center text-xs text-secondary underline select-none",
                    type: "button",
                    children: (0, d.jsx)(h.a, {
                        ...K.companyInformation
                    })
                }),
                contentProps: {
                    "aria-describedby": void 0
                },
                children: (0, d.jsxs)(C.b, {
                    children: [(0, d.jsx)(C.d, {
                        title: (0, d.jsx)(B.f, {
                            children: (0, d.jsx)(h.a, {
                                ...K.companyInformation
                            })
                        })
                    }), (0, d.jsx)(C.e, {
                        children: (0, d.jsx)(A.b, {
                            inDialog: !0
                        })
                    })]
                })
            }), i[5] = o, i[6] = f) : f = i[6], i[7] !== j || i[8] !== f ? (g = (0, d.jsxs)("div", {
                className: "flex flex-col items-center gap-1",
                children: [j, f]
            }), i[7] = j, i[8] = f, i[9] = g) : g = i[9], g
        }

        function I() {
            return !0
        }

        function J() {}
        let K = (0, i.f)({
            companyInformation: {
                id: "chatgpt.compliance.korean_regulatory.company_information.label",
                defaultMessage: "Company info"
            }
        });
        var L = c("md8w"),
            M = c("dBtq"),
            N = c("RGWz");

        function O(a) {
            let b, c, g, h, i = (0, e.c)(10);
            i[0] !== a ? ({
                supportsMessageDisclosures: c,
                ...b
            } = a, i[0] = a, i[1] = b, i[2] = c) : (b = i[1], c = i[2]);
            let j = void 0 !== c && c,
                k = (0, f.z)(L.b),
                l = (0, f.x)(M.a, b.conversationId);
            if ("home" !== b.placement && (j && k || !l)) return null;
            let m = "home" === b.placement ? "empty:hidden" : void 0,
                n = b.placement ?? "thread",
                o = "home" === b.placement ? void 0 : P;
            return i[3] !== b || i[4] !== o ? (g = (0, d.jsx)(Q, {
                ...b,
                renderOrdinaryDisclaimer: o
            }), i[3] = b, i[4] = o, i[5] = g) : g = i[5], i[6] !== m || i[7] !== n || i[8] !== g ? (h = (0, d.jsx)(w.a, {
                browser: !0,
                children: (0, d.jsx)(y.a, {
                    className: m,
                    placement: n,
                    children: g
                })
            }), i[6] = m, i[7] = n, i[8] = g, i[9] = h) : h = i[9], h
        }

        function P(a) {
            return (0, d.jsxs)(d.Fragment, {
                children: [(0, d.jsx)(d.Fragment, {
                    children: (0, d.jsx)(N.b, {
                        children: a
                    })
                }), null]
            })
        }

        function Q(a) {
            let b, c, i, k = (0, e.c)(28),
                {
                    aiServiceDisclaimer: l,
                    conversationId: n,
                    hasUserMessage: o,
                    isTemporaryChat: q,
                    ordinaryDisclaimer: r,
                    pendingWorkspaceDisclaimer: t,
                    placement: w,
                    regulatedConnectorKindOverride: x,
                    renderOrdinaryDisclaimer: y
                } = a,
                z = void 0 === w ? "thread" : w,
                A = (0, g.a)(),
                {
                    search: B
                } = (0, j.Z)(),
                {
                    data: C
                } = (0, v.f)(),
                D = (0, f.x)(s.u, n ?? null),
                E = (0, f.x)(s.W, D?.status === "ready" && void 0 === x ? n ?? null : null);
            k[0] !== o || k[1] !== q || k[2] !== z || k[3] !== B ? (b = (q ?? (0, u.i)(B)) && !(o ?? "thread" === z), k[0] = o, k[1] = q, k[2] = z, k[3] = B, k[4] = b) : b = k[4];
            let F = b;
            if (null == C) return null == D ? t ?? null : null;
            if (null != D) {
                let a;
                if ("ready" !== D.status) return null;
                let b = void 0 !== x ? x : E;
                if (null != b) {
                    let a;
                    return k[5] !== b || k[6] !== r ? (a = (0, d.jsx)(V, {
                        ordinaryDisclaimer: r,
                        regulatedConnectorKind: b
                    }), k[5] = b, k[6] = r, k[7] = a) : a = k[7], a
                }
                return k[8] !== D.context ? (a = (0, d.jsx)(p, {
                    context: D.context
                }), k[8] = D.context, k[9] = a) : a = k[9], a
            }
            if ("workspace" === C.structure) {
                let a;
                return k[10] !== C || k[11] !== t || k[12] !== y || k[13] !== F ? (a = (0, d.jsx)(W, {
                    account: C,
                    pendingWorkspaceDisclaimer: t,
                    isTemporaryChat: F,
                    renderOrdinaryDisclaimer: y
                }), k[10] = C, k[11] = t, k[12] = y, k[13] = F, k[14] = a) : a = k[14], a
            }
            k[15] !== r || k[16] !== y ? (c = y?.(r ?? (0, d.jsx)(h.a, {
                ...Y.personal
            })) ?? r, k[15] = r, k[16] = y, k[17] = c) : c = k[17], k[18] !== C.id || k[19] !== l || k[20] !== n || k[21] !== z || k[22] !== x || k[23] !== F || k[24] !== c ? (i = (0, d.jsx)(R, {
                accountId: C.id,
                aiServiceDisclaimer: l,
                conversationId: n,
                isTemporaryChat: F,
                ordinaryDisclaimer: c,
                placement: z,
                regulatedConnectorKindOverride: x
            }), k[18] = C.id, k[19] = l, k[20] = n, k[21] = z, k[22] = x, k[23] = F, k[24] = c, k[25] = i) : i = k[25];
            let G = i;
            if ("home" === z && !o && !F && !(0, m.a)() && "ko" === new Intl.Locale(A.locale).language) {
                let a;
                return k[26] !== G ? (a = (0, d.jsx)(H, {
                    children: G
                }), k[26] = G, k[27] = a) : a = k[27], a
            }
            return G
        }

        function R(a) {
            let b, c = (0, e.c)(16),
                {
                    accountId: f,
                    aiServiceDisclaimer: g,
                    conversationId: h,
                    isTemporaryChat: i,
                    ordinaryDisclaimer: j,
                    placement: k,
                    regulatedConnectorKindOverride: l
                } = a,
                m = (0, x.f)("1831960162");
            if (!(0, x.g)("1831960162") && !m) {
                let a;
                return c[0] !== f || c[1] !== g || c[2] !== h || c[3] !== i || c[4] !== j || c[5] !== k || c[6] !== l ? (a = (0, d.jsx)(S, {
                    accountId: f,
                    aiServiceDisclaimer: g,
                    conversationId: h,
                    isTemporaryChat: i,
                    ordinaryDisclaimer: j,
                    placement: k,
                    regulatedConnectorKindOverride: l
                }), c[0] = f, c[1] = g, c[2] = h, c[3] = i, c[4] = j, c[5] = k, c[6] = l, c[7] = a) : a = c[7], a
            }
            return c[8] !== g || c[9] !== h || c[10] !== i || c[11] !== j || c[12] !== k || c[13] !== l || c[14] !== m ? (b = (0, d.jsx)(T, {
                aiServiceDisclaimer: g,
                conversationId: h,
                isTemporaryChat: i,
                ordinaryDisclaimer: j,
                placement: k,
                regulatedConnectorKindOverride: l,
                showAiServiceDisclaimer: m
            }), c[8] = g, c[9] = h, c[10] = i, c[11] = j, c[12] = k, c[13] = l, c[14] = m, c[15] = b) : b = c[15], b
        }

        function S(a) {
            let b, c = (0, e.c)(8),
                {
                    accountId: g,
                    aiServiceDisclaimer: h,
                    conversationId: i,
                    isTemporaryChat: j,
                    ordinaryDisclaimer: k,
                    placement: m,
                    regulatedConnectorKindOverride: n
                } = a,
                {
                    userId: o
                } = (0, l.a)(),
                p = (0, f.z)(t.n),
                {
                    data: q
                } = (0, f.z)(r.b),
                s = null != o && p === g,
                u = (0, x.f)(!!s && (null == q || "under_18" === q.age_status) && "1639821169");
            return s ? (c[0] !== h || c[1] !== i || c[2] !== j || c[3] !== k || c[4] !== m || c[5] !== n || c[6] !== u ? (b = (0, d.jsx)(T, {
                aiServiceDisclaimer: h,
                conversationId: i,
                isTemporaryChat: j,
                ordinaryDisclaimer: k,
                placement: m,
                regulatedConnectorKindOverride: n,
                showAiServiceDisclaimer: u
            }), c[0] = h, c[1] = i, c[2] = j, c[3] = k, c[4] = m, c[5] = n, c[6] = u, c[7] = b) : b = c[7], b) : null
        }

        function T(a) {
            let b, c, f = (0, e.c)(10),
                {
                    aiServiceDisclaimer: g,
                    conversationId: i,
                    isTemporaryChat: j,
                    ordinaryDisclaimer: k,
                    placement: l,
                    regulatedConnectorKindOverride: n,
                    showAiServiceDisclaimer: o
                } = a;
            f[0] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, m.a)(), f[0] = b) : b = f[0];
            let p = b;
            if (j) {
                let a;
                return f[1] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(h.a, {
                    ...Y.temporaryChat
                }), f[1] = a) : a = f[1], a
            }
            if (o) {
                let a;
                return f[2] !== g ? (a = g ?? (0, d.jsx)(h.a, {
                    ...Y.aiService
                }), f[2] = g, f[3] = a) : a = f[3], a
            }
            if (void 0 !== n) {
                let a;
                return null == n && (p || "home" === l) ? null : (f[4] !== k || f[5] !== n ? (a = (0, d.jsx)(V, {
                    ordinaryDisclaimer: k,
                    regulatedConnectorKind: n
                }), f[4] = k, f[5] = n, f[6] = a) : a = f[6], a)
            }
            return "home" === l ? null : (f[7] !== i || f[8] !== k ? (c = (0, d.jsx)(U, {
                conversationId: i,
                isBrowserSideChat: p,
                ordinaryDisclaimer: k
            }), f[7] = i, f[8] = k, f[9] = c) : c = f[9], c)
        }

        function U(a) {
            let b, c = (0, e.c)(3),
                {
                    conversationId: g,
                    isBrowserSideChat: h,
                    ordinaryDisclaimer: i
                } = a,
                j = (0, f.x)(s.W, g ?? null);
            return h && null == j ? null : (c[0] !== i || c[1] !== j ? (b = (0, d.jsx)(V, {
                ordinaryDisclaimer: i,
                regulatedConnectorKind: j
            }), c[0] = i, c[1] = j, c[2] = b) : b = c[2], b)
        }

        function V(a) {
            let b, c = (0, e.c)(4),
                {
                    ordinaryDisclaimer: f,
                    regulatedConnectorKind: g
                } = a;
            if ("finance" === g) {
                let a;
                return c[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(h.a, {
                    ...Y.finance
                }), c[0] = a) : a = c[0], a
            }
            if ("health" === g) {
                let a;
                return c[1] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(h.a, {
                    ...Y.health
                }), c[1] = a) : a = c[1], a
            }
            return c[2] !== f ? (b = f ?? (0, d.jsx)(h.a, {
                ...Y.personal
            }), c[2] = f, c[3] = b) : b = c[3], b
        }

        function W(a) {
            let b, c = (0, e.c)(10),
                {
                    account: g,
                    pendingWorkspaceDisclaimer: i,
                    isTemporaryChat: j,
                    renderOrdinaryDisclaimer: l
                } = a,
                n = (0, m.a)(),
                {
                    data: o
                } = (0, f.x)(q.a, g.id),
                {
                    data: p
                } = (0, f.x)(k.n, g.id);
            if (null == o || null != i && null == p) return i ?? null;
            let r = "early-access" === o.account.workspace_type;
            if (!r && null == p) return null;
            let s = o.account.name ?? g.name;
            if (p?.beta_settings.training_allowed === !0) {
                let a;
                c[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(h.a, {
                    ...Y.workspaceResearchPartner,
                    values: {
                        link: X
                    }
                }), c[0] = a) : a = c[0], b = a
            } else if (r) {
                let a;
                c[1] !== s ? (a = null == s ? (0, d.jsx)(h.a, {
                    ...Y.earlyAccessWorkspaceWithoutName
                }) : (0, d.jsx)(h.a, {
                    ...Y.earlyAccessWorkspace,
                    values: {
                        workspaceName: s
                    }
                }), c[1] = s, c[2] = a) : a = c[2], b = a
            } else if (j) {
                let a;
                c[3] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(h.a, {
                    ...Y.workspaceTemporaryChat
                }), c[3] = a) : a = c[3], b = a
            } else if (null != o.account.ekm_config) {
                let a;
                c[4] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(h.a, {
                    ...Y.encryptedWorkspace
                }), c[4] = a) : a = c[4], b = a
            } else if ("k12" === g.plan_type) {
                let a;
                c[5] !== s ? (a = null == s ? (0, d.jsx)(h.a, {
                    ...Y.k12WorkspaceWithoutName
                }) : (0, d.jsx)(h.a, {
                    ...Y.k12Workspace,
                    values: {
                        workspaceName: s
                    }
                }), c[5] = s, c[6] = a) : a = c[6], b = a
            } else {
                let a, e;
                return n ? null : (c[7] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(h.a, {
                    ...Y.workspace
                }), c[7] = a) : a = c[7], b = a, c[8] !== l ? (e = l?.(b) ?? b, c[8] = l, c[9] = e) : e = c[9], e)
            }
            return b
        }

        function X(a) {
            return (0, d.jsx)(n.a, {
                className: "cursor-interaction underline underline-offset-2 hover:text-default",
                href: "https://help.openai.com/articles/20001245",
                initiator: "open_in_browser_bridge",
                isBrowserEnabled: !1,
                children: a
            })
        }
        let Y = (0, i.f)({
            finance: {
                id: "mattressFinanceDisclaimer.composerDisclaimer",
                defaultMessage: "ChatGPT can make mistakes and isn\u2019t a licensed investment adviser or authorized to prepare tax returns."
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
                defaultMessage: "ChatGPT can make mistakes. OpenAI doesn\u2019t train on your workspace data, which is encrypted with keys managed by your organization."
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
    md8w: (function(a, b, c) {
        var d = c("Q840"),
            e = c("lAQI"),
            f = c("Cslg"),
            g = c("OWtl"),
            h = c("cX6x"),
            i = c("O666");
        let j = "623291997",
            k = e.E().nonnegative().catch(2),
            l = e.E().nonnegative().catch(24),
            m = (0, d.c)(g.a, a => {
                let {
                    get: b
                } = a, c = b(i.a, j), d = null == c ? (0, h.d)(j)?.value : void 0, e = null != b(f.k) && (c?.get("app_disclosure_below_message_actions", !1) ?? d?.app_disclosure_below_message_actions === !0), g = e ? c?.get("app_disclosure_impression_seconds", 2) ?? d?.app_disclosure_impression_seconds : 2, m = e ? c?.get("app_disclosure_cooldown_hours", 24) ?? d?.app_disclosure_cooldown_hours : 24;
                return {
                    enabled: e,
                    aboveActions: e && (c?.get("app_disclosure_above_message_actions", !1) ?? d?.app_disclosure_above_message_actions === !0),
                    inlineWithActions: e && (c?.get("app_disclosure_inline_with_message_actions", !1) ?? d?.app_disclosure_inline_with_message_actions === !0),
                    centered: e && (c?.get("app_disclosure_centered", !1) ?? d?.app_disclosure_centered === !0),
                    smallerFontSize: e && (c?.get("app_disclosure_smaller_font_size", !1) ?? d?.app_disclosure_smaller_font_size === !0),
                    workModeEnabled: c?.get("app_disclosure_in_work_mode", !1) ?? d?.app_disclosure_in_work_mode === !0,
                    standardOnlyForSessionSends: e && (c?.get("app_standard_disclosure_session_sends_only", !1) ?? d?.app_standard_disclosure_session_sends_only === !0),
                    showOnFirstMessage: c?.get("app_disclosure_show_on_first_message", !1) ?? d?.app_disclosure_show_on_first_message === !0,
                    impressionMs: 1e3 * k.parse(g),
                    cooldownMs: 60 * l.parse(m) * 60 * 1e3,
                    hideOnSend: !e || (c?.get("app_hide_disclosure_on_send", !0) ?? d?.app_hide_disclosure_on_send !== !1)
                }
            }, {
                isEqual: (a, b) => a.enabled === b.enabled && a.aboveActions === b.aboveActions && a.inlineWithActions === b.inlineWithActions && a.centered === b.centered && a.smallerFontSize === b.smallerFontSize && a.workModeEnabled === b.workModeEnabled && a.standardOnlyForSessionSends === b.standardOnlyForSessionSends && a.showOnFirstMessage === b.showOnFirstMessage && a.impressionMs === b.impressionMs && a.cooldownMs === b.cooldownMs && a.hideOnSend === b.hideOnSend
            }),
            n = (0, d.c)(g.a, a => {
                let {
                    get: b
                } = a;
                return b(m).enabled
            });
        c.d(b, {}, {
            a: m,
            b: n
        })
    }),
    dBtq: (function(a, b, c) {
        c.d(b, {
            a: () => u,
            b: () => v,
            c: () => x
        });
        var d = c("Q840"),
            e = c("lAQI"),
            f = c("Ow2S"),
            g = c("ISgP"),
            h = c("x4uR"),
            i = c("aFoA"),
            j = c("dQRk"),
            k = c("p0Ph"),
            l = c("OWtl"),
            m = c("Nwp9"),
            n = c("md8w"),
            o = c("AuIy"),
            p = c("hx97"),
            q = c("lX86");
        let r = e.F({
                at: e.E().nonnegative(),
                messageId: e.L()
            }),
            s = (0, m.b)("message-disclosure-standard-impression", null, {
                coerceStoredValue: a => r.safeParse(a).data ?? null
            }),
            t = (0, d.u)(l.a, () => new Map),
            u = (0, d.d)(l.a, (a, b) => {
                let {
                    get: c
                } = b, d = null == a ? void 0 : c(j.y, a);
                return "tpp" !== d && "flora" !== d || c(n.a).workModeEnabled
            }),
            v = (0, d.d)(l.a, (a, b) => {
                let {
                    get: c,
                    scope: d
                } = b, e = c(n.a);
                if (!e.enabled || !c(u, a)) return {};
                let l = c(i.a, a) ?? a,
                    m = c(f.j, l);
                if (m && e.hideOnSend) return {};
                let r = c(j.N, a);
                if (null == r) return {};
                let v = c(j.T, a),
                    w = null != v && c(h.b, v).data?.gizmo.gizmo_snorlax_type === "potion" ? "health" : null,
                    x = d.get(s),
                    y = Date.now(),
                    z = c(j.J, a),
                    A = null;
                z ? A = c(g.a, a) : m && (A = []);
                let B = e.standardOnlyForSessionSends ? c(k.y, (0, i.d)(c, a)) : void 0;
                return function(a, b) {
                    let c, {
                            hideOnSend: d,
                            readyLatestResponseMessageIds: e,
                            projectKind: f,
                            canShowStandard: g,
                            standardDecisions: h,
                            showOnFirstMessage: i,
                            sessionStartSeconds: j,
                            isLocallySentPrompt: k
                        } = b,
                        l = (0, o.a)(a),
                        m = {},
                        n = f ?? "standard",
                        r = !1,
                        s = !1,
                        t = () => {
                            if (null != c) {
                                if ("standard" !== n) m[n] = c;
                                else if (null == j || r) {
                                    let a = h.get(c);
                                    null == a && (a = i && !s || g(c), h.set(c, a)), a && (m.standard = c)
                                }
                                s = !0, c = void 0
                            }
                        };
                    for (let a of l) {
                        var u;
                        "user" === (u = a).author.role && (0, p.p)(u) && !(0, o.n)(u) && (t(), r = null != j && (null == a.create_time ? null != a.id && k?.(a.id) === !0 : a.create_time >= j), n = f ?? "standard", d && (delete m.standard, delete m.health, delete m.finance)), n = (0, q.b)(a) ?? n, (0, p.m)(a) && (c = a.id)
                    }
                    return null != c && (null == e || e.includes(c)) && t(), m
                }({
                    mapping: r,
                    current_node: c(j.C, a)
                }, {
                    hideOnSend: e.hideOnSend,
                    readyLatestResponseMessageIds: A,
                    projectKind: w,
                    canShowStandard: a => {
                        var b, c, d, f;
                        return b = a, c = x, d = e.cooldownMs, f = y, null == c || c.messageId === b || 0 === d || f < c.at || f - c.at >= d
                    },
                    standardDecisions: c(t),
                    showOnFirstMessage: e.showOnFirstMessage,
                    sessionStartSeconds: e.standardOnlyForSessionSends ? performance.timeOrigin / 1e3 : void 0,
                    isLocallySentPrompt: a => null != B && Object.hasOwn(B, a)
                })
            }, {
                isEqual: (a, b) => a.standard === b.standard && a.health === b.health && a.finance === b.finance
            }),
            w = (0, d.d)(l.a, (a, b) => {
                let {
                    conversationId: c,
                    messageId: d
                } = a, {
                    get: e
                } = b, f = e(v, c);
                return f.health === d ? "health" : f.finance === d ? "finance" : f.standard === d ? "standard" : null
            });

        function x(a, b, c) {
            "standard" === a.get(w, {
                conversationId: b,
                messageId: c
            }) && a.set(s, {
                at: Date.now(),
                messageId: c
            })
        }
    }),
    dMTK: (function(a, b, c) {
        function d(a, b) {
            return (Date.UTC(a.getFullYear(), a.getMonth(), a.getDate()) - Date.UTC(b.getFullYear(), b.getMonth(), b.getDate())) / 864e5
        }

        function e(a, b) {
            let c = a.formatRelativeTime(b, "day", {
                numeric: "auto"
            });
            return a.locale.startsWith("en") ? c.charAt(0).toUpperCase() + c.slice(1) : c
        }
        c.d(b, {}, {
            a: d,
            b: e,
            c: function(a, b, c) {
                let f = Math.max(d(c, b), 0);
                return {
                    date: f <= 1 ? e(a, -f) : f <= 7 ? a.formatDate(b, {
                        weekday: "long"
                    }) : f <= 365 ? a.formatDate(b, {
                        weekday: "short",
                        month: "short",
                        day: "numeric"
                    }) : a.formatDate(b, {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                    }),
                    time: a.formatTime(b, {
                        hour: "numeric",
                        minute: "2-digit"
                    }),
                    includeAt: f > 7
                }
            },
            d: function(a) {
                let b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
                    c = null,
                    d = !1;
                return a.map(a => {
                    if (null == a) return c = null, d = !0, null;
                    let e = null;
                    for (let f of a) f.breaksPreviousAdjacency && (c = null), null == e && function(a) {
                        let {
                            current: b,
                            previous: c,
                            isFirstUserTurn: d,
                            nowMs: e
                        } = a;
                        return !1 !== b.opensExchange && null != b.sentAtMs && !!Number.isFinite(b.sentAtMs) && (!!d && e - b.sentAtMs > 36e5 || c?.role === "assistant" && null != c.sentAtMs && Number.isFinite(c.sentAtMs) && b.sentAtMs - c.sentAtMs > ("user" === b.role ? 36e5 : 6e5))
                    }({
                        current: f,
                        previous: c,
                        isFirstUserTurn: "user" === f.role && !d,
                        nowMs: b
                    }) && (e = f.sentAtMs), d = d || "user" === f.role, c = f;
                    return e
                })
            },
            e: function(a) {
                return new Date(a.getFullYear(), a.getMonth(), a.getDate()).getTime()
            }
        })
    }),
    WSJu: (function(a, b, c) {
        var d = c("W4He");

        function e(a) {
            return f(a) && (null != a.activity || "keep" !== a.role)
        }

        function f(a) {
            return !a.pendingAnswer && !a.preparing
        }

        function g(a, b) {
            let c = {
                label: b,
                labelKey: `direction:${b}`,
                labelPriority: "direction"
            };
            return "tool-status" === a.kind ? {
                ...a,
                ...c,
                active: !0
            } : {
                ...a,
                ...c
            }
        }
        c.d(b, {}, {
            a: e,
            b: function(a, b) {
                let {
                    fallback: c,
                    direction: h,
                    opening: i,
                    previous: j,
                    elapsedWaitKey: k
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, l = a.findLastIndex(a => "bubble" === a.role), m = a[l]?.key ?? "initial", n = a.findLastIndex(f), o = a[n], p = n > l ? o : void 0, q = j?.slice === m ? j : void 0, r = q?.source === o?.key ? q : void 0, s = a.findLast(e), t = function(a, b, c, e, f, h, i, j) {
                    if ("working" !== c) {
                        for (let c = a.length - 1; c >= b; c--) {
                            let b = a[c];
                            if ("final" === b.role && !b.pendingAnswer && !b.preparing) return {
                                kind: "answer",
                                source: b.key
                            }
                        }
                        return {
                            kind: "quiet"
                        }
                    }
                    if (e?.activity) {
                        var k, l;
                        return {
                            kind: "label",
                            source: e.key,
                            status: e.acceptsDirection && i ? (k = e.activity, l = i, "live" === k.kind && "activity" !== k.labelPriority || "tool-status" === k.kind && "immediate" === k.labelPriority ? k : g(k, l)) : e.activity
                        }
                    }
                    if (f?.streamingCommentary || (0, d.b)(e, h, a, b)) return {
                        kind: "quiet"
                    };
                    let m = a.findLast(a => a.commandRow && a.runningWork && a.activity);
                    if (i && (e?.acceptsDirection || null != h || a.some(a => a.commandRow))) {
                        let a = e?.acceptsDirection ? e.key : void 0,
                            b = a && j?.kind === "live" ? {
                                ...j,
                                animateIcon: !1
                            } : {
                                kind: "thinking"
                            };
                        return {
                            kind: "label",
                            source: a,
                            status: g(b, i)
                        }
                    }
                    return m?.activity && null != h && null != e ? e.commandRow && j ? {
                        kind: "label",
                        source: e.key,
                        status: "live" === j.kind ? {
                            ...j,
                            animateIcon: !1
                        } : j
                    } : {
                        kind: "label",
                        status: m.activity
                    } : "delayed-thinking" === h && f !== e && f?.runningWork ? {
                        kind: "quiet"
                    } : "string" == typeof h ? {
                        kind: "wait"
                    } : h ? {
                        kind: "label",
                        status: h
                    } : {
                        kind: "quiet"
                    }
                }(a, l + 1, b, p, s, c, h, r?.status), u = "label" === t.kind && null != t.source && t.source === o?.key, v = null != q && (null != r || null == o || "bubble" === o.role), w = j;
                if (u && o?.activity && r?.status !== o.activity ? w = {
                        slice: m,
                        source: o.key,
                        status: o.activity
                    } : u || "wait" === t.kind && v || (w = void 0), "wait" !== t.kind) return {
                    slice: m,
                    response: t,
                    nextActivity: w,
                    timer: void 0
                };
                let x = null != q || null != s && "bubble" !== s.role,
                    y = JSON.stringify([m, s?.key]);
                return {
                    slice: m,
                    nextActivity: w,
                    ...(0, d.c)({
                        key: y,
                        elapsedWaitKey: k,
                        midTurn: x,
                        role: s?.role,
                        previous: v ? q.status : void 0,
                        source: r?.source,
                        opening: "starting" === c ? i : void 0
                    })
                }
            }
        })
    }),
    W4He: (function(a, b, c) {
        var d = c("c8QI");

        function e(a) {
            let b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            for (let c = b; c < a.length; c++)
                if (a[c].runningWork) return !0;
            return !1
        }
        c.d(b, {}, {
            a: function(a, b) {
                if (!a.compacting) {
                    if ("codex" === a.family) return a.canPresent && (a.hasActivity || a.waitingForFirstActivity || e(b)) ? null != a.namedStatus ? a.namedStatus : a.waitingForFirstActivity && !a.starting ? {
                        kind: "thinking"
                    } : a.starting ? "starting" : "delayed-thinking" : void 0;
                    if (a.canPresent && a.hideReasoning) return {
                        kind: "thinking"
                    };
                    if (a.awaitingUntitledReasoning || a.canPresent && (a.waitingForResponse || a.beforeFirstResponse || "commentary" === a.tailRole || "final" === a.tailRole || e(b))) return "delayed-thinking"
                }
            },
            b: function(a, b, c, d) {
                return a?.role === "commentary" && (!0 === a.streamingCommentary || "delayed-thinking" !== b && !e(c, d))
            },
            c: function(a) {
                let {
                    key: b,
                    elapsedWaitKey: c,
                    role: e,
                    midTurn: f,
                    previous: g,
                    source: h,
                    opening: i
                } = a, j = {
                    key: b,
                    delayMs: f && "commentary" !== e && "final" !== e ? 5e3 : 1e3
                };
                return c === b ? {
                    timer: j,
                    response: {
                        kind: "label",
                        source: h,
                        status: {
                            kind: "thinking",
                            labelKey: f ? d.a : void 0
                        }
                    }
                } : g ? {
                    timer: j,
                    response: {
                        kind: "label",
                        source: h,
                        status: "live" === g.kind ? {
                            ...g,
                            animateIcon: !1
                        } : g
                    }
                } : {
                    timer: j,
                    response: i ? {
                        kind: "label",
                        status: i
                    } : {
                        kind: "quiet"
                    }
                }
            }
        })
    }),
    zjpG: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("oyxz");
        c.d(b, {}, {
            a: function(a) {
                let b, c, h, i = (0, e.c)(5),
                    {
                        className: j
                    } = a;
                return i[0] !== j ? (b = (0, f.b)("last:hidden", j), i[0] = j, i[1] = b) : b = i[1], i[2] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, d.jsx)(g.a, {
                    id: "codex.ui.bulletSeparator",
                    defaultMessage: "\xb7"
                }), i[2] = c) : c = i[2], i[3] !== b ? (h = (0, d.jsx)("span", {
                    "aria-hidden": !0,
                    className: b,
                    children: c
                }), i[3] = b, i[4] = h) : h = i[4], h
            }
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
    QCUA: (function(a, b, c) {
        let d = (0, c("zd8w").createContext)("chat");
        c.d(b, {}, {
            a: d
        })
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
            k = c("hKy7"),
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
        var d = c("DBCl");
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
    XsXa: (function(a, b, c) {
        var d = c("RaSH");
        let e = (0, d.a)(new Map).readable;
        c.d(b, {}, {
            a: function() {
                let {
                    get: a,
                    readable: b,
                    set: c
                } = (0, d.a)(new Map);
                return {
                    readable: b,
                    setCollapsed(b, d, e) {
                        let f = a(),
                            g = f.get(b);
                        g?.get(d) !== e && c(new Map(f).set(b, new Map(g).set(d, e)))
                    }
                }
            },
            b: e
        })
    })
};