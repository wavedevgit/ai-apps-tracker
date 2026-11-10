export const __rspack_esm_ids = [227195];
export const __webpack_modules__ = {
    TS05: (function(e, t, n) {
        var r = n("BolX"),
            l = n("tSEg");
        let a = (0, r.v)(l.a, e => !1, void 0, {
            autoDispose: 6e4
        });
        n.d(t, {}, {
            a: a
        })
    }),
    IL1g: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            a = n("zd8w"),
            o = n("Wf1j"),
            s = n("ZtSy");
        let i = [{
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
            let t, n, o = (0, l.c)(4),
                {
                    inDialog: c
                } = e,
                u = void 0 !== c && c;
            return o[0] !== u ? (t = i.map((e, t) => {
                let n = e.emphasize ? (0, r.jsx)("strong", {
                    children: e.label
                }) : e.label;
                return (0, r.jsxs)(a.Fragment, {
                    children: [t > 0 && (0, r.jsx)("span", {
                        "aria-hidden": "true",
                        children: "|"
                    }), e.href ? (0, r.jsx)(s.a, {
                        href: e.href,
                        initiator: "open_in_browser_bridge",
                        openTarget: u ? "external-browser" : void 0,
                        underline: "always",
                        children: n
                    }) : (0, r.jsxs)("span", {
                        children: [e.prefix, n]
                    })]
                }, e.label)
            }), o[0] = u, o[1] = t) : t = o[1], o[2] !== t ? (n = (0, r.jsx)("div", {
                className: "flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-xs text-secondary select-text",
                children: t
            }), o[2] = t, o[3] = n) : n = o[3], n
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, a, s = (0, l.c)(5),
                    {
                        inDialog: i
                    } = e,
                    u = void 0 !== i && i,
                    d = (0, o.a)();
                return "ko" !== new Intl.Locale(d.locale).language ? null : (s[0] !== u ? (t = (0, r.jsx)(c, {
                    inDialog: u
                }), s[0] = u, s[1] = t) : t = s[1], s[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, r.jsx)("p", {
                    children: "귀하가 19세 미만의 이용자로서 귀하의 법정대리인이 본 계약에 동의하지 않은 경우, 귀하 또는 귀하의 법정대리인은 계약을 취소할 수 있습니다."
                }), s[2] = n) : n = s[2], s[3] !== t ? (a = (0, r.jsxs)("div", {
                    className: "flex flex-col items-center gap-2 text-center text-xs text-secondary select-text",
                    children: [t, n]
                }), s[3] = t, s[4] = a) : a = s[4], a)
            },
            b: c
        })
    }),
    DWXw: (function(e, t, n) {
        n.d(t, {
            BrowserComposerDisclaimer: () => O,
            BrowserComposerDisclaimerMessage: () => q,
            a: () => V
        });
        var r = n("ABep"),
            l = n("QosV"),
            a = n("BolX"),
            o = n("Wf1j"),
            s = n("oyxz"),
            i = n("Qgfj"),
            c = n("jqIZ"),
            u = n("OFP1"),
            d = n("EOo5"),
            h = n("ipGa"),
            m = n("ZtSy");

        function g(e) {
            return (0, r.jsx)(m.a, {
                href: "https://openai.com/policies/privacy-policy/",
                initiator: "open_in_browser_bridge",
                openTarget: "external-browser",
                children: e
            })
        }

        function p(e) {
            let t, n, a, o, i = (0, l.c)(9),
                {
                    context: c
                } = e;
            i[0] !== c.businessName ? (t = c.businessName?.trim(), i[0] = c.businessName, i[1] = t) : t = i[1];
            let u = t;
            return i[2] !== u ? (n = (0, r.jsx)("p", {
                children: u ? (0, r.jsx)(s.a, {
                    id: "businessProfiles.agentChat.privacy.named",
                    defaultMessage: "This chat remains private. {businessName} can only see overall insights about how its AI agent is doing. <learnMore>Learn more</learnMore>",
                    values: {
                        businessName: u,
                        learnMore: g
                    },
                    description: "Privacy disclosure below the composer in every organic or sponsored Business Agent chat. It reassures users that the business cannot see the conversation or personal information and receives only aggregate usage trends to improve its AI agent. The {businessName} placeholder is the advertiser-provided business display name and may be long. Allow the sentence to wrap."
                }) : (0, r.jsx)(s.a, {
                    id: "businessProfiles.agentChat.privacy.unnamed",
                    defaultMessage: "This chat remains private. This business can only see overall insights about how its AI agent is doing. <learnMore>Learn more</learnMore>",
                    values: {
                        learnMore: g
                    },
                    description: "Privacy disclosure below the composer in every organic or sponsored Business Agent chat when no business display name is available. It reassures users that the business operating the agent cannot see the conversation or personal information and receives only aggregate usage trends to improve its AI agent. Allow the sentence to wrap."
                })
            }), i[2] = u, i[3] = n) : n = i[3], i[4] !== c.notice ? (a = c.notice?.trim() ? (0, r.jsx)("p", {
                children: c.notice
            }) : null, i[4] = c.notice, i[5] = a) : a = i[5], i[6] !== n || i[7] !== a ? (o = (0, r.jsxs)("div", {
                className: "flex flex-col gap-1",
                children: [n, a]
            }), i[6] = n, i[7] = a, i[8] = o) : o = i[8], o
        }
        var f = n("YJm0"),
            x = n("fzVa"),
            y = n("dQRk"),
            v = n("g2p6"),
            w = n("jAnS"),
            b = n("AcSY"),
            P = n("Ho8f"),
            S = n("hZax"),
            C = n("fNyS"),
            k = n("zd8w"),
            I = n("IL1g"),
            M = n("JNtf"),
            E = n("mUDD"),
            B = n("ibLK"),
            _ = n("jVko"),
            T = n("zWHk");
        let D = new WeakSet;

        function K(e) {
            let t, n, a, o, i = (0, l.c)(10),
                {
                    children: c
                } = e,
                u = (0, B.a)("(width < 640px)"),
                d = (0, k.useContext)(_.a);
            i[0] !== d ? (t = e => {
                if (null == d) return R;
                let t = () => {
                        D.add(d), e()
                    },
                    n = d.view.dom;
                n.addEventListener("input", t, !0);
                let r = (0, T.b)(d.view, t => {
                    t && e()
                });
                return () => {
                    n.removeEventListener("input", t, !0), r()
                }
            }, i[0] = d, i[1] = t) : t = i[1];
            let h = t;
            i[2] !== d ? (n = () => null == d || !d.hasText() && !D.has(d), i[2] = d, i[3] = n) : n = i[3];
            let m = n,
                g = (0, k.useSyncExternalStore)(h, m, H);
            if (!u) {
                let e;
                return i[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(I.b, {}), i[4] = e) : e = i[4], e
            }
            return i[5] !== g ? (a = g && (0, r.jsx)(M.a, {
                size: "responsiveSheet",
                triggerContent: (0, r.jsx)("button", {
                    className: "inline-flex min-h-6 min-w-6 cursor-interaction items-center justify-center text-xs text-secondary underline select-none",
                    type: "button",
                    children: (0, r.jsx)(s.a, {
                        ...F.companyInformation
                    })
                }),
                contentProps: {
                    "aria-describedby": void 0
                },
                children: (0, r.jsxs)(E.b, {
                    children: [(0, r.jsx)(E.d, {
                        title: (0, r.jsx)(M.e, {
                            children: (0, r.jsx)(s.a, {
                                ...F.companyInformation
                            })
                        })
                    }), (0, r.jsx)(E.e, {
                        children: (0, r.jsx)(I.b, {
                            inDialog: !0
                        })
                    })]
                })
            }), i[5] = g, i[6] = a) : a = i[6], i[7] !== c || i[8] !== a ? (o = (0, r.jsxs)("div", {
                className: "flex flex-col items-center gap-1",
                children: [c, a]
            }), i[7] = c, i[8] = a, i[9] = o) : o = i[9], o
        }

        function H() {
            return !0
        }

        function R() {}
        let F = (0, i.f)({
            companyInformation: {
                id: "chatgpt.compliance.korean_regulatory.company_information.label",
                defaultMessage: "Company info",
                description: "Short footer link and dialog title shown to Korean-language ChatGPT users on their signed-in or signed-out mobile-web landing page. Selecting the link opens OpenAI's legally required company registration, address, support, hosting, terms, and business disclosures. Keep the label short for the mobile footer."
            }
        });
        var A = n("md8w"),
            j = n("dBtq"),
            L = n("RGWz");

        function O(e) {
            let t, n, o, s, i = (0, l.c)(10);
            i[0] !== e ? ({
                supportsMessageDisclosures: n,
                ...t
            } = e, i[0] = e, i[1] = t, i[2] = n) : (t = i[1], n = i[2]);
            let c = void 0 !== n && n,
                u = (0, a.z)(A.b),
                d = (0, a.x)(j.a, t.conversationId);
            if ("home" !== t.placement && (c && u || !d)) return null;
            let h = "home" === t.placement ? "empty:hidden" : void 0,
                m = t.placement ?? "thread",
                g = "home" === t.placement ? void 0 : z;
            return i[3] !== t || i[4] !== g ? (o = (0, r.jsx)(q, {
                ...t,
                renderOrdinaryDisclaimer: g
            }), i[3] = t, i[4] = g, i[5] = o) : o = i[5], i[6] !== h || i[7] !== m || i[8] !== o ? (s = (0, r.jsx)(P.a, {
                browser: !0,
                children: (0, r.jsx)(C.a, {
                    className: h,
                    placement: m,
                    children: o
                })
            }), i[6] = h, i[7] = m, i[8] = o, i[9] = s) : s = i[9], s
        }

        function z(e) {
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(L.b, {
                        children: e
                    })
                }), null]
            })
        }

        function q(e) {
            let t, n, i, u = (0, l.c)(28),
                {
                    aiServiceDisclaimer: d,
                    conversationId: m,
                    hasUserMessage: g,
                    isTemporaryChat: f,
                    ordinaryDisclaimer: x,
                    pendingWorkspaceDisclaimer: v,
                    placement: P,
                    regulatedConnectorKindOverride: S,
                    renderOrdinaryDisclaimer: C
                } = e,
                k = void 0 === P ? "thread" : P,
                I = (0, o.a)(),
                {
                    search: M
                } = (0, c.Y)(),
                {
                    data: E
                } = (0, b.i)(),
                B = (0, a.x)(y.u, m ?? null),
                _ = (0, a.x)(y.T, B?.status === "ready" && void 0 === S ? m ?? null : null);
            u[0] !== g || u[1] !== f || u[2] !== k || u[3] !== M ? (t = (f ?? (0, w.i)(M)) && !(g ?? "thread" === k), u[0] = g, u[1] = f, u[2] = k, u[3] = M, u[4] = t) : t = u[4];
            let T = t;
            if (null == E) return null == B ? v ?? null : null;
            if (null != B) {
                let e;
                if ("ready" !== B.status) return null;
                let t = void 0 !== S ? S : _;
                if (null != t) {
                    let e;
                    return u[5] !== t || u[6] !== x ? (e = (0, r.jsx)(V, {
                        ordinaryDisclaimer: x,
                        regulatedConnectorKind: t
                    }), u[5] = t, u[6] = x, u[7] = e) : e = u[7], e
                }
                return u[8] !== B.context ? (e = (0, r.jsx)(p, {
                    context: B.context
                }), u[8] = B.context, u[9] = e) : e = u[9], e
            }
            if ("workspace" === E.structure) {
                let e;
                return u[10] !== E || u[11] !== v || u[12] !== C || u[13] !== T ? (e = (0, r.jsx)(Q, {
                    account: E,
                    pendingWorkspaceDisclaimer: v,
                    isTemporaryChat: T,
                    renderOrdinaryDisclaimer: C
                }), u[10] = E, u[11] = v, u[12] = C, u[13] = T, u[14] = e) : e = u[14], e
            }
            u[15] !== x || u[16] !== C ? (n = C?.(x ?? (0, r.jsx)(s.a, {
                ...$.personal
            })) ?? x, u[15] = x, u[16] = C, u[17] = n) : n = u[17], u[18] !== E.id || u[19] !== d || u[20] !== m || u[21] !== k || u[22] !== S || u[23] !== T || u[24] !== n ? (i = (0, r.jsx)(N, {
                accountId: E.id,
                aiServiceDisclaimer: d,
                conversationId: m,
                isTemporaryChat: T,
                ordinaryDisclaimer: n,
                placement: k,
                regulatedConnectorKindOverride: S
            }), u[18] = E.id, u[19] = d, u[20] = m, u[21] = k, u[22] = S, u[23] = T, u[24] = n, u[25] = i) : i = u[25];
            let D = i;
            if ("home" === k && !g && !T && !(0, h.a)() && "ko" === new Intl.Locale(I.locale).language) {
                let e;
                return u[26] !== D ? (e = (0, r.jsx)(K, {
                    children: D
                }), u[26] = D, u[27] = e) : e = u[27], e
            }
            return D
        }

        function N(e) {
            let t, n = (0, l.c)(16),
                {
                    accountId: a,
                    aiServiceDisclaimer: o,
                    conversationId: s,
                    isTemporaryChat: i,
                    ordinaryDisclaimer: c,
                    placement: u,
                    regulatedConnectorKindOverride: d
                } = e,
                h = (0, S.f)("1831960162");
            if (!(0, S.g)("1831960162") && !h) {
                let e;
                return n[0] !== a || n[1] !== o || n[2] !== s || n[3] !== i || n[4] !== c || n[5] !== u || n[6] !== d ? (e = (0, r.jsx)(W, {
                    accountId: a,
                    aiServiceDisclaimer: o,
                    conversationId: s,
                    isTemporaryChat: i,
                    ordinaryDisclaimer: c,
                    placement: u,
                    regulatedConnectorKindOverride: d
                }), n[0] = a, n[1] = o, n[2] = s, n[3] = i, n[4] = c, n[5] = u, n[6] = d, n[7] = e) : e = n[7], e
            }
            return n[8] !== o || n[9] !== s || n[10] !== i || n[11] !== c || n[12] !== u || n[13] !== d || n[14] !== h ? (t = (0, r.jsx)(U, {
                aiServiceDisclaimer: o,
                conversationId: s,
                isTemporaryChat: i,
                ordinaryDisclaimer: c,
                placement: u,
                regulatedConnectorKindOverride: d,
                showAiServiceDisclaimer: h
            }), n[8] = o, n[9] = s, n[10] = i, n[11] = c, n[12] = u, n[13] = d, n[14] = h, n[15] = t) : t = n[15], t
        }

        function W(e) {
            let t, n = (0, l.c)(8),
                {
                    accountId: o,
                    aiServiceDisclaimer: s,
                    conversationId: i,
                    isTemporaryChat: c,
                    ordinaryDisclaimer: u,
                    placement: h,
                    regulatedConnectorKindOverride: m
                } = e,
                {
                    userId: g
                } = (0, d.a)(),
                p = (0, a.z)(v.n),
                {
                    data: f
                } = (0, a.z)(x.b),
                y = null != g && p === o,
                w = (0, S.f)(!!y && (null == f || "under_18" === f.age_status) && "1639821169");
            return y ? (n[0] !== s || n[1] !== i || n[2] !== c || n[3] !== u || n[4] !== h || n[5] !== m || n[6] !== w ? (t = (0, r.jsx)(U, {
                aiServiceDisclaimer: s,
                conversationId: i,
                isTemporaryChat: c,
                ordinaryDisclaimer: u,
                placement: h,
                regulatedConnectorKindOverride: m,
                showAiServiceDisclaimer: w
            }), n[0] = s, n[1] = i, n[2] = c, n[3] = u, n[4] = h, n[5] = m, n[6] = w, n[7] = t) : t = n[7], t) : null
        }

        function U(e) {
            let t, n, a = (0, l.c)(10),
                {
                    aiServiceDisclaimer: o,
                    conversationId: i,
                    isTemporaryChat: c,
                    ordinaryDisclaimer: u,
                    placement: d,
                    regulatedConnectorKindOverride: m,
                    showAiServiceDisclaimer: g
                } = e;
            a[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, h.a)(), a[0] = t) : t = a[0];
            let p = t;
            if (c) {
                let e;
                return a[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(s.a, {
                    ...$.temporaryChat
                }), a[1] = e) : e = a[1], e
            }
            if (g) {
                let e;
                return a[2] !== o ? (e = o ?? (0, r.jsx)(s.a, {
                    ...$.aiService
                }), a[2] = o, a[3] = e) : e = a[3], e
            }
            if (void 0 !== m) {
                let e;
                return null == m && (p || "home" === d) ? null : (a[4] !== u || a[5] !== m ? (e = (0, r.jsx)(V, {
                    ordinaryDisclaimer: u,
                    regulatedConnectorKind: m
                }), a[4] = u, a[5] = m, a[6] = e) : e = a[6], e)
            }
            return "home" === d ? null : (a[7] !== i || a[8] !== u ? (n = (0, r.jsx)(G, {
                conversationId: i,
                isBrowserSideChat: p,
                ordinaryDisclaimer: u
            }), a[7] = i, a[8] = u, a[9] = n) : n = a[9], n)
        }

        function G(e) {
            let t, n = (0, l.c)(3),
                {
                    conversationId: o,
                    isBrowserSideChat: s,
                    ordinaryDisclaimer: i
                } = e,
                c = (0, a.x)(y.T, o ?? null);
            return s && null == c ? null : (n[0] !== i || n[1] !== c ? (t = (0, r.jsx)(V, {
                ordinaryDisclaimer: i,
                regulatedConnectorKind: c
            }), n[0] = i, n[1] = c, n[2] = t) : t = n[2], t)
        }

        function V(e) {
            let t, n = (0, l.c)(4),
                {
                    ordinaryDisclaimer: a,
                    regulatedConnectorKind: o
                } = e;
            if ("finance" === o) {
                let e;
                return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(s.a, {
                    ...$.finance
                }), n[0] = e) : e = n[0], e
            }
            if ("health" === o) {
                let e;
                return n[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(s.a, {
                    ...$.health
                }), n[1] = e) : e = n[1], e
            }
            return n[2] !== a ? (t = a ?? (0, r.jsx)(s.a, {
                ...$.personal
            }), n[2] = a, n[3] = t) : t = n[3], t
        }

        function Q(e) {
            let t, n = (0, l.c)(10),
                {
                    account: o,
                    pendingWorkspaceDisclaimer: i,
                    isTemporaryChat: c,
                    renderOrdinaryDisclaimer: d
                } = e,
                m = (0, h.a)(),
                {
                    data: g
                } = (0, a.x)(f.a, o.id),
                {
                    data: p
                } = (0, a.x)(u.l, o.id);
            if (null == g || null != i && null == p) return i ?? null;
            let x = "early-access" === g.account.workspace_type;
            if (!x && null == p) return null;
            let y = g.account.name ?? o.name;
            if (p?.beta_settings.training_allowed === !0) {
                let e;
                n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(s.a, {
                    ...$.workspaceResearchPartner,
                    values: {
                        link: X
                    }
                }), n[0] = e) : e = n[0], t = e
            } else if (x) {
                let e;
                n[1] !== y ? (e = null == y ? (0, r.jsx)(s.a, {
                    ...$.earlyAccessWorkspaceWithoutName
                }) : (0, r.jsx)(s.a, {
                    ...$.earlyAccessWorkspace,
                    values: {
                        workspaceName: y
                    }
                }), n[1] = y, n[2] = e) : e = n[2], t = e
            } else if (c) {
                let e;
                n[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(s.a, {
                    ...$.workspaceTemporaryChat
                }), n[3] = e) : e = n[3], t = e
            } else if (null != g.account.ekm_config) {
                let e;
                n[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(s.a, {
                    ...$.encryptedWorkspace
                }), n[4] = e) : e = n[4], t = e
            } else if ("k12" === o.plan_type) {
                let e;
                n[5] !== y ? (e = null == y ? (0, r.jsx)(s.a, {
                    ...$.k12WorkspaceWithoutName
                }) : (0, r.jsx)(s.a, {
                    ...$.k12Workspace,
                    values: {
                        workspaceName: y
                    }
                }), n[5] = y, n[6] = e) : e = n[6], t = e
            } else {
                let e, l;
                return m ? null : (n[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(s.a, {
                    ...$.workspace
                }), n[7] = e) : e = n[7], t = e, n[8] !== d ? (l = d?.(t) ?? t, n[8] = d, n[9] = l) : l = n[9], l)
            }
            return t
        }

        function X(e) {
            return (0, r.jsx)(m.a, {
                className: "cursor-interaction underline underline-offset-2 hover:text-default",
                href: "https://help.openai.com/articles/20001245",
                initiator: "open_in_browser_bridge",
                isBrowserEnabled: !1,
                children: e
            })
        }
        let $ = (0, i.f)({
            finance: {
                id: "mattressFinanceDisclaimer.composerDisclaimer",
                defaultMessage: "ChatGPT can make mistakes and isn’t a licensed investment adviser or authorized to prepare tax returns.",
                description: "Footer disclaimer shown below the ChatGPT Personal Finance chat composer on web and below the regular Chat composer after a Finance app, connector, or plugin is selected or invoked. Legal/regulatory context: U.S.-specific. ‘Licensed investment adviser’ refers to a regulated, licensed/registered professional (e.g., SEC/state registered). ‘Prepare tax returns’ means preparing and filing tax return documents for tax authorities (not ‘tax refunds’). Keep the tone as a legal disclaimer."
            },
            health: {
                id: "potion.footerDisclaimer.medicalDisclaimer",
                defaultMessage: "ChatGPT can make mistakes and isn't intended for diagnosis or treatment. Consult a doctor for medical advice.",
                description: "Medical disclaimer under the Health message composer"
            },
            aiService: {
                id: "codex.composer.browserDisclaimer.aiService",
                defaultMessage: "ChatGPT is AI and can make mistakes. Check important info.",
                description: "Compact legal disclosure beside the ChatGPT composer on Home and in conversations for eligible personal-account users. It explicitly identifies ChatGPT as artificial intelligence and reminds users to verify important information. Keep both sentences together; the footer may wrap on narrow screens."
            },
            personal: {
                id: "codex.composer.browserDisclaimer",
                defaultMessage: "ChatGPT can make mistakes. Check important info.",
                description: "Compact legal disclosure above the browser conversation composer for a personal ChatGPT account, reminding users that AI responses may contain mistakes and important information should be checked."
            },
            temporaryChat: {
                id: "codex.composer.browserDisclaimer.temporaryChat",
                defaultMessage: "For safety, we may keep a copy of this chat for up to 30 days.",
                description: "Compact privacy disclosure above the browser composer before a personal-account user sends the first message in a temporary ChatGPT conversation, explaining its maximum safety-retention period."
            },
            workspace: {
                id: "codex.composer.browserDisclaimer.workspace",
                defaultMessage: "ChatGPT can make mistakes. Workspace data isn't used to train models.",
                description: "Compact legal and privacy disclosure above the browser composer for a Business or Enterprise workspace that has not opted in to model training, reassuring workspace members that their data is excluded from training."
            },
            workspaceResearchPartner: {
                id: "codex.composer.browserDisclaimer.workspaceResearchPartner",
                defaultMessage: "ChatGPT can make mistakes. This workspace is opted in to the ChatGPT Business Research Partner Program. <link>Learn more</link>",
                description: "Legal and privacy disclosure above the browser composer for a Business workspace opted in to sharing its data through the ChatGPT Business Research Partner Program. The <link> tag wraps a clickable Help Center article labeled Learn more."
            },
            earlyAccessWorkspace: {
                id: "codex.composer.browserDisclaimer.earlyAccessWorkspace",
                defaultMessage: "ChatGPT can make mistakes. OpenAI uses {workspaceName} workspace data to train its models.",
                description: "Legal and privacy disclosure above the browser composer for an early-access workspace whose data is used to train AI models. The {workspaceName} placeholder is the human-readable name of the current workspace."
            },
            earlyAccessWorkspaceWithoutName: {
                id: "codex.composer.browserDisclaimer.earlyAccessWorkspaceWithoutName",
                defaultMessage: "ChatGPT can make mistakes. OpenAI uses your workspace data to train its models.",
                description: "Legal and privacy disclosure above the browser composer for an early-access workspace whose data is used to train AI models when the workspace has no display name."
            },
            workspaceTemporaryChat: {
                id: "codex.composer.browserDisclaimer.workspaceTemporaryChat",
                defaultMessage: "Workspace data isn't used to train models by default. For safety, we may keep a copy of this chat for up to 30 days.",
                description: "Privacy disclosure above the browser composer before a workspace member sends the first message in a temporary ChatGPT conversation, explaining that workspace data is not used for model training and may be retained for safety for up to 30 days."
            },
            encryptedWorkspace: {
                id: "codex.composer.browserDisclaimer.encryptedWorkspaceData",
                defaultMessage: "ChatGPT can make mistakes. OpenAI doesn’t train on your workspace data, which is encrypted with keys managed by your organization.",
                description: "Legal and privacy disclosure above the browser composer for Business, Enterprise, and ChatGPT for Teachers workspaces protected by organization-managed cryptographic encryption keys. Reassures members that OpenAI does not train on their workspace data and that their organization manages its encryption keys. Uses the same generic ChatGPT wording regardless of the workspace name or plan."
            },
            k12Workspace: {
                id: "codex.composer.browserDisclaimer.k12Workspace",
                defaultMessage: "ChatGPT for Teachers can make mistakes. OpenAI doesn't use {workspaceName} workspace data to train its models.",
                description: "Legal and privacy disclosure above the browser composer for a ChatGPT for Teachers workspace, assuring educators that their workspace data is not used to train AI models. The {workspaceName} placeholder is the human-readable name of the school workspace."
            },
            k12WorkspaceWithoutName: {
                id: "codex.composer.browserDisclaimer.k12WorkspaceWithoutName",
                defaultMessage: "ChatGPT for Teachers can make mistakes. OpenAI doesn't use your workspace data to train its models.",
                description: "Legal and privacy disclosure above the browser composer for a ChatGPT for Teachers workspace without a display name, assuring educators that their workspace data is not used to train AI models."
            }
        })
    }),
    md8w: (function(e, t, n) {
        var r = n("BolX"),
            l = n("ASxG"),
            a = n("Cslg"),
            o = n("OWtl"),
            s = n("cX6x"),
            i = n("O666");
        let c = "623291997",
            u = l.number().nonnegative().catch(2),
            d = l.number().nonnegative().catch(24),
            h = (0, r.c)(o.a, e => {
                let {
                    get: t
                } = e, n = t(i.a, c), r = null == n ? (0, s.d)(c)?.value : void 0, l = null != t(a.k) && (n?.get("app_disclosure_below_message_actions", !1) ?? r?.app_disclosure_below_message_actions === !0), o = l ? n?.get("app_disclosure_impression_seconds", 2) ?? r?.app_disclosure_impression_seconds : 2, h = l ? n?.get("app_disclosure_cooldown_hours", 24) ?? r?.app_disclosure_cooldown_hours : 24;
                return {
                    enabled: l,
                    aboveActions: l && (n?.get("app_disclosure_above_message_actions", !1) ?? r?.app_disclosure_above_message_actions === !0),
                    inlineWithActions: l && (n?.get("app_disclosure_inline_with_message_actions", !1) ?? r?.app_disclosure_inline_with_message_actions === !0),
                    smallerFontSize: l && (n?.get("app_disclosure_smaller_font_size", !1) ?? r?.app_disclosure_smaller_font_size === !0),
                    workModeEnabled: n?.get("app_disclosure_in_work_mode", !1) ?? r?.app_disclosure_in_work_mode === !0,
                    showOnFirstMessage: n?.get("app_disclosure_show_on_first_message", !1) ?? r?.app_disclosure_show_on_first_message === !0,
                    impressionMs: 1e3 * u.parse(o),
                    cooldownMs: 60 * d.parse(h) * 6e4,
                    hideOnSend: !l || (n?.get("app_hide_disclosure_on_send", !0) ?? r?.app_hide_disclosure_on_send !== !1)
                }
            }, {
                isEqual: (e, t) => e.enabled === t.enabled && e.aboveActions === t.aboveActions && e.inlineWithActions === t.inlineWithActions && e.smallerFontSize === t.smallerFontSize && e.workModeEnabled === t.workModeEnabled && e.showOnFirstMessage === t.showOnFirstMessage && e.impressionMs === t.impressionMs && e.cooldownMs === t.cooldownMs && e.hideOnSend === t.hideOnSend
            }),
            m = (0, r.c)(o.a, e => {
                let {
                    get: t
                } = e;
                return t(h).enabled
            });
        n.d(t, {}, {
            a: h,
            b: m
        })
    }),
    dBtq: (function(e, t, n) {
        n.d(t, {
            a: () => y,
            b: () => v,
            c: () => b
        });
        var r = n("BolX"),
            l = n("ASxG"),
            a = n("Ow2S"),
            o = n("x4uR"),
            s = n("aFoA"),
            i = n("dQRk"),
            c = n("OWtl"),
            u = n("Nwp9"),
            d = n("md8w"),
            h = n("AuIy"),
            m = n("ccwJ"),
            g = n("lX86");
        let p = l.object({
                at: l.number().nonnegative(),
                messageId: l.string()
            }),
            f = (0, u.b)("message-disclosure-standard-impression", null, {
                coerceStoredValue: e => p.safeParse(e).data ?? null
            }),
            x = (0, r.u)(c.a, 0),
            y = (0, r.d)(c.a, (e, t) => {
                let {
                    get: n
                } = t, r = null == e ? void 0 : n(i.y, e);
                return "tpp" !== r && "flora" !== r || n(d.a).workModeEnabled
            }),
            v = (0, r.d)(c.a, (e, t) => {
                let {
                    get: n,
                    scope: r
                } = t, l = n(d.a);
                if (!l.enabled || !n(y, e)) return {};
                let c = n(s.a, e) ?? e,
                    u = n(a.j, c);
                if (u && l.hideOnSend) return {};
                let p = n(i.M, e);
                if (null == p) return {};
                let v = n(i.S, e),
                    w = null != v && n(o.b, v).data?.gizmo.gizmo_snorlax_type === "potion" ? "health" : null;
                n(x);
                let b = r.get(f),
                    P = Date.now();
                return function(e, t, n, r) {
                    let l, a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0,
                        o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                        s = (0, h.a)(e),
                        i = s.findLastIndex(e => "user" === e.author.role),
                        c = {},
                        u = r ?? "standard",
                        d = !1,
                        p = () => {
                            null != l && ("standard" !== u || o && !d || a(l)) && (c[u] = l), d = d || null != l, l = void 0
                        };
                    for (let [e, a] of s.entries()) {
                        "user" === a.author.role && (p(), u = r ?? "standard", t && (delete c.standard, delete c.health, delete c.finance)), u = (0, g.b)(a) ?? u;
                        let o = (0, m.b)(a, {
                            isActiveTurn: !1,
                            isStreaming: !1
                        }).some(e => "completed" === e.status && null != e.src);
                        !(n && e > i || (0, h.n)(a)) && (o || "assistant" === a.author.role && (null == a.recipient || "all" === a.recipient) && (null == a.channel || "final" === a.channel) && ("finished_successfully" === a.status || "finished_partial_completion" === a.status)) && (l = a.id)
                    }
                    return p(), c
                }({
                    mapping: p,
                    current_node: n(i.C, e)
                }, l.hideOnSend, u || n(i.I, e), w, e => {
                    var t, n, r, a;
                    return t = e, n = b, r = l.cooldownMs, a = P, null == n || n.messageId === t || 0 === r || a < n.at || a - n.at >= r
                }, l.showOnFirstMessage)
            }, {
                isEqual: (e, t) => e.standard === t.standard && e.health === t.health && e.finance === t.finance
            }),
            w = (0, r.d)(c.a, (e, t) => {
                let {
                    conversationId: n,
                    messageId: r
                } = e, {
                    get: l
                } = t, a = l(v, n);
                return a.health === r ? "health" : a.finance === r ? "finance" : a.standard === r ? "standard" : null
            });

        function b(e, t, n) {
            "standard" === e.get(w, {
                conversationId: t,
                messageId: n
            }) && e.set(f, {
                at: Date.now(),
                messageId: n
            })
        }
    }),
    iaTG: (function(e, t, n) {
        n.d(t, {
            a: () => f
        });
        var r = n("i5ac"),
            l = n.n(r),
            a = n("SKhr"),
            o = n("L6Md");
        let s = Array.from("αβγδεζηθικλμνξοπρστυφχψω"),
            i = new Map([..."alpha beta gamma delta epsilon zeta eta theta iota kappa lambda mu nu xi omicron pi rho sigma tau upsilon phi chi psi omega".split(" ").map((e, t) => [e, s[t]]), ..."nabla:∇ partial:∂ cdot:⋅ times:× div:÷ pm:± mp:∓ le:≤ leq:≤ ge:≥ geq:≥ ne:≠ neq:≠ infty:∞ sum:∑ prod:∏ int:∫ in:∈ notin:∉ to:→ rightarrow:→ leftarrow:←".split(" ").map(e => {
                let [t, n] = e.split(":");
                return [t, n]
            })]),
            c = /^\\(?:mathbf|boldsymbol|bm|mathrm|mathit|mathsf|mathtt|mathnormal|mathbb|mathcal|mathscr|mathfrak|textbf|textit|textrm)$/,
            u = /^\\(?:quad|qquad|enspace|thinspace|medspace|thickspace|negthinspace|displaystyle|textstyle|scriptstyle|scriptscriptstyle|limits|nolimits|[,;:! ])$/,
            d = /^\\(?:left|right|middle|big|Big|bigg|Bigg|bigl|bigr|Bigl|Bigr|biggl|biggr|Biggl|Biggr)$/;

        function h(e) {
            let t = Array.from(e.matchAll(/\\[a-zA-Z]+|\\[^\r\n]|[^\s]/gu), e => ({
                    value: e[0],
                    start: e.index,
                    end: e.index + e[0].length
                })),
                n = [],
                r = [],
                l = 0;

            function a() {
                let e = t[l]?.start;
                if (null == e) throw Error("Missing argument");
                let n = o(),
                    r = t[l - 1].end;
                return [{
                    value: "argument:start",
                    start: e,
                    end: e
                }, ...n, {
                    value: "argument:end",
                    start: r,
                    end: r
                }]
            }

            function o() {
                let e = t[l++];
                if (null == e || "}" === e.value) throw Error("Incomplete math");
                if ("{" === e.value) {
                    let r = [];
                    for (; t[l]?.value !== "}";) r.push(...o());
                    return n.push({
                        start: e.start,
                        end: t[l++].end
                    }), r
                }
                if (c.test(e.value)) {
                    let r = o();
                    return n.push({
                        start: e.start,
                        end: t[l - 1].end
                    }), r
                }
                if (u.test(e.value)) return [];
                if (d.test(e.value)) {
                    let n, a = t[l++];
                    if (null == a) throw Error("Missing delimiter");
                    if ("\\left" === e.value) n = {
                        start: e.start,
                        end: a.end
                    }, r.push(n);
                    else if ("\\right" === e.value) {
                        if (null == (n = r.pop())) throw Error("Unpaired delimiter");
                        n.end = a.end
                    }
                    return "." === a.value ? [] : [{
                        ...a,
                        start: e.start,
                        delimiter: n
                    }]
                }
                if (/^\\[dt]?frac$/.test(e.value)) return [{
                    ...e,
                    value: "\\frac"
                }, ...a(), ...a()];
                if (/^(?:[_^]|\\(?:sqrt|vec|hat|bar|overline|underline))$/.test(e.value) || e.value.startsWith("\\") && !i.has(e.value.slice(1).replace(/^var/, "").toLowerCase()) && t[l]?.value === "{") {
                    if (t[l]?.value === "[") throw Error("Indexed argument");
                    return [e, ...a()]
                }
                let s = e.value.replace(/^\\/, "");
                return s = (s = (s = i.get(s.replace(/^var/, "").toLowerCase()) ?? e.value).replace(/[\u{1D400}-\u{1D7FF}]/gu, e => e.normalize("NFKC")).toLowerCase()).replace(/[ϵϑϕϖϱς−·]/g, e => "εθφπρσ-⋅" ["ϵϑϕϖϱς−·".indexOf(e)]), [{
                    ...e,
                    value: s
                }]
            }
            try {
                let e = [];
                for (; l < t.length;) e.push(...o());
                return 0 === r.length ? {
                    tokens: e,
                    groups: n
                } : null
            } catch {
                return null
            }
        }
        var m = n("agQa"),
            g = n("QxH2"),
            p = n("h8aU");

        function f(e) {
            let {
                contextId: t,
                getTurns: n,
                hydratePersistedMatch: r,
                revealUnrenderedMatches: s = !1,
                searchPersisted: c,
                searchMath: u = !1,
                scrollAdapter: d
            } = e;
            return {
                domain: "conversation",
                contextId: t,
                async search(e, t) {
                    var r, s;
                    let d, g, f = await async function(e, t, n, r) {
                        let l = e.query.trim(),
                            s = n && l.length > 1 && l.startsWith("/") && l.endsWith("/") ? l.slice(1, -1) : void 0,
                            c = t.flatMap(e => e.units.flatMap(t => (t.textChunks ?? [t.text]).flatMap((r, l) => {
                                let a = {
                                        turnKey: e.turnKey,
                                        unitId: t.unitId,
                                        text: n ? r.replace(/\s+/g, " ").trim() : r,
                                        equationIndex: void 0
                                    },
                                    o = n ? t.equations?.[l] : void 0;
                                return null == o ? [a] : [a, {
                                    ...a,
                                    text: o,
                                    equationIndex: l
                                }]
                            }))),
                            u = {
                                domain: e.domain,
                                contextId: e.contextId,
                                query: l,
                                regex: s,
                                searchMath: n || void 0,
                                matches: [],
                                totalMatches: 0,
                                isCapped: !1
                            };
                        if (!l) return u;
                        let d = null == s ? null : await (0, m.a)({
                            query: s,
                            texts: c.map(e => e.text),
                            mathTexts: c.map(e => null != e.equationIndex),
                            maxMatches: 250
                        }, r);
                        if (d?.error) return {
                            ...u,
                            error: d.error
                        };
                        u.totalMatches = d?.totalMatches ?? 0;
                        let g = new Map;
                        for (let [t, n] of c.entries()) {
                            let r = (0, a.c)(n.turnKey, n.unitId),
                                s = g.get(r) ?? 0,
                                {
                                    offsets: c,
                                    totalMatches: m
                                } = null != d ? {
                                    offsets: d.offsets[t] ?? [],
                                    totalMatches: 0
                                } : (null == n.equationIndex ? p.a : function(e, t, n) {
                                    let r = t.trim(),
                                        l = [];
                                    if (!r) return {
                                        offsets: l,
                                        totalMatches: 0
                                    };
                                    let a = h(e),
                                        s = h(i.get(r) ?? r);
                                    if (null == a || null == s) {
                                        let t = e.toLowerCase(),
                                            a = r.toLowerCase(),
                                            s = [...e.matchAll(/\\[a-zA-Z]+/g)];
                                        for (let n = t.indexOf(a); n >= 0; n = t.indexOf(a, n + a.length)) s.some(e => n > e.index && n < e.index + e[0].length) || l.push((0, o.a)(e, {
                                            start: n,
                                            end: n + r.length
                                        }));
                                        return {
                                            offsets: l.slice(0, n),
                                            totalMatches: l.length
                                        }
                                    }
                                    let c = 0;
                                    for (let e = 0; s.tokens.length > 0 && e <= a.tokens.length - s.tokens.length; e += 1) {
                                        if (!s.tokens.every((t, n) => t.value === a.tokens[e + n].value)) continue;
                                        let t = a.tokens.slice(e, e + s.tokens.length),
                                            r = t[0].start,
                                            o = t[t.length - 1].end;
                                        for (let e of t) r = Math.min(r, e.delimiter?.start ?? r), o = Math.max(o, e.delimiter?.end ?? o);
                                        for (let e of a.groups) r < e.start && o > e.start && o < e.end && (o = e.end), r > e.start && r < e.end && o > e.end && (r = e.start);
                                        c += 1, l.length < n && l.push({
                                            start: r,
                                            end: o
                                        }), e += s.tokens.length - 1
                                    }
                                    return {
                                        offsets: l,
                                        totalMatches: c
                                    }
                                })(n.text, l, 250 - u.matches.length);
                            for (let [t, r] of(u.totalMatches += m, c.entries())) {
                                let l = {
                                    domain: "conversation",
                                    contextId: e.contextId,
                                    turnKey: n.turnKey,
                                    unitId: n.unitId,
                                    matchIndex: null == n.equationIndex ? s + t : t,
                                    equationIndex: n.equationIndex,
                                    equationRange: null == n.equationIndex ? void 0 : r
                                };
                                u.matches.push({
                                    id: (0, a.b)(l),
                                    ordinal: u.matches.length + 1,
                                    location: l
                                })
                            }
                            null == n.equationIndex && g.set(r, s + c.length)
                        }
                        return u.isCapped = u.totalMatches > u.matches.length, u
                    }(e, n(), u, t?.signal);
                    if (u || null == c) return f;
                    let x = await c(e, t);
                    return null == x ? f : (r = f, s = x, d = new Map(r.matches.map(e => [e.id, e])), g = l()([...s.matches.map(e => d.get(e.id) ?? e), ...r.matches], "id").map((e, t) => ({
                        ...e,
                        ordinal: t + 1
                    })), {
                        ...r,
                        matches: g,
                        totalMatches: Math.max(g.length, r.totalMatches, s.totalMatches),
                        isCapped: r.isCapped || s.isCapped
                    })
                },
                async ensureVisible(e, n) {
                    if ("conversation" !== e.domain || e.contextId !== t || null != e.turnCursor && null != r && (!await r(e, n) || n?.signal?.aborted)) return;
                    let l = null != e.turnCursor,
                        o = d.getTurnContainer(e.turnKey),
                        i = (0, a.b)(e),
                        c = s && null != o && null == (0, a.g)({
                            container: o,
                            matchId: i,
                            includeShadowRoots: !1
                        });
                    if (null == o || l || c) {
                        if (n?.signal?.aborted || (n?.signal == null ? await d.scrollToTurn(e.turnKey) : await d.scrollToTurn(e.turnKey, {
                                signal: n.signal
                            }), n?.signal?.aborted)) return;
                        o = d.getTurnContainer(e.turnKey)
                    }
                    null != o && await (0, g.b)({
                        container: o,
                        matchId: i,
                        includeShadowRoots: !1,
                        signal: n?.signal
                    })
                }
            }
        }
    }),
    gSdW: (function(e, t, n) {
        var r = n("SKhr");
        n.d(t, {}, {
            a: function(e) {
                let t = new Map;
                for (let n of e) {
                    if ("conversation" !== n.location.domain) continue;
                    let e = (0, r.c)(n.location.turnKey, n.location.unitId),
                        l = t.get(e) ?? [];
                    l.push(n), t.set(e, l)
                }
                return t
            },
            b: function(e) {
                let t = new Map;
                for (let n of e) {
                    if ("diff" !== n.location.domain) continue;
                    let e = t.get(n.location.path) ?? [];
                    e.push(n), t.set(n.location.path, e)
                }
                return t
            }
        })
    }),
    l0fK: (function(e, t, n) {
        n.d(t, {
            a: () => u
        });
        var r = n("QosV"),
            l = n("BolX"),
            a = n("zd8w"),
            o = n("SKhr"),
            s = n("gSdW");

        function i(e) {
            let t = [],
                n = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
            for (let r = n.nextNode(); null != r; r = n.nextNode()) {
                if (!(r instanceof Text) || r.parentElement?.closest(".vlist-s")) continue;
                let n = r.parentElement;
                for (; null != n && n !== e && "" === n.style.color;) n = n.parentElement;
                let l = 0;
                for (let e of r.data) t.push({
                    node: r,
                    text: e,
                    color: n?.style.color ?? "",
                    offset: l
                }), l += e.length
            }
            return t
        }
        var c = n("TwSq");

        function u(e) {
            let t, u, p, f, x, y, v, w, b, P, S, C, k, I, M = (0, r.c)(25),
                {
                    containerRef: E,
                    contextId: B,
                    onContentChange: _
                } = e,
                T = (0, l.z)(c.d),
                D = (0, l.z)(c.g),
                K = T?.contextId === B ? T : null,
                H = null == K ? null : D?.id ?? null,
                {
                    schedule: R,
                    cancel: F
                } = (S = (0, r.c)(5), C = (0, a.useRef)(null), 80 !== S[0] ? (w = e => {
                    null == C.current && (C.current = window.setTimeout(() => {
                        C.current = null, e()
                    }, 80))
                }, S[0] = 80, S[1] = w) : w = S[1], k = w, S[2] === Symbol.for("react.memo_cache_sentinel") ? (b = () => {
                    null != C.current && (window.clearTimeout(C.current), C.current = null)
                }, S[2] = b) : b = S[2], I = b, S[3] !== k ? (P = {
                    schedule: k,
                    cancel: I
                }, S[3] = k, S[4] = P) : P = S[4], P);
            M[0] !== _ ? (t = () => _?.(), M[0] = _, M[1] = t) : t = M[1];
            let A = (0, a.useEffectEvent)(t);
            M[2] !== H ? (u = (e, t) => {
                t.forEach(t => {
                    (0, o.l)({
                        element: t,
                        matchId: e
                    }), (0, o.k)(t, e === H)
                })
            }, M[2] = H, M[3] = u) : u = M[3];
            let j = (0, a.useEffectEvent)(u);
            M[4] !== K || M[5] !== E || M[6] !== j ? (p = async (e, t) => {
                let r = E.current;
                if (null == r || ((0, o.a)(r, {
                        includeShadowRoots: !1
                    }), t.takeRecords(), null == K)) return;
                let l = (0, s.a)(K.matches),
                    a = Array.from(r.querySelectorAll("[data-content-search-unit-key]")).flatMap(e => {
                        let t = l.get(e.dataset.contentSearchUnitKey ?? "");
                        return null == t ? [] : [{
                            element: e,
                            matches: t
                        }]
                    }),
                    c = a.map(g),
                    u = e => {
                        e.forEach((e, t) => e.forEach((e, n) => j(c[t].matches[n].id, e)))
                    };
                if (!K.searchMath) {
                    u(c.map(e => {
                        let {
                            element: t,
                            matches: n
                        } = e;
                        return (0, o.i)({
                            target: t,
                            query: K.query,
                            maxMatches: n.length,
                            includeShadowRoots: !1
                        }).matches
                    })), t.takeRecords();
                    return
                }
                let p = [];
                for (let {
                        element: e,
                        matches: t
                    }
                    of a) e.querySelectorAll("[data-math-source]").forEach((e, r) => {
                    let l = t.flatMap(e => {
                        let {
                            id: t,
                            location: n
                        } = e;
                        return "conversation" === n.domain && n.equationIndex === r && null != n.equationRange ? [{
                            id: t,
                            range: n.equationRange
                        }] : []
                    });
                    0 !== l.length && p.push((async function(e, t) {
                        let r = e.querySelector(".katex-html"),
                            l = e.dataset.mathSource;
                        if (null == r || null == l || 0 === t.length) return () => t.map(() => []);
                        let {
                            katex: a
                        } = await Promise.all([n.e(990054), n.e(559373)]).then(n.bind(n, "RlG8")), s = i(r), c = new Map(s.map(e => {
                            let {
                                node: t
                            } = e;
                            return [t, t.data]
                        })), u = new Set(s.map(e => {
                            let {
                                color: t
                            } = e;
                            return t
                        })), d = document.createElement("span"), h = t.map(() => {
                            let e, t = u.size + 1;
                            do e = `#${t.toString(16).padStart(6,"0")}`, d.style.color = e, t += 1; while (u.has(d.style.color)) return u.add(d.style.color), {
                                hex: e,
                                css: d.style.color
                            }
                        });
                        d.style.color = "";
                        let m = new Map(h.map((e, t) => {
                                let {
                                    css: n
                                } = e;
                                return [n, t]
                            })),
                            g = new Map,
                            p = n => {
                                let r = l;
                                for (let e of [...n].reverse()) {
                                    let {
                                        start: n,
                                        end: l
                                    } = t[e];
                                    r = `${r.slice(0,n)}{\\textcolor{${h[e].hex}}{${r.slice(n,l)}}}${r.slice(l)}`
                                }
                                try {
                                    d.innerHTML = a.renderToString(r, {
                                        displayMode: null != e.querySelector(".katex-display"),
                                        strict: "ignore",
                                        output: "html"
                                    })
                                } catch {
                                    return !1
                                }
                                let o = i(d),
                                    c = o.length === s.length && o.every((e, t) => {
                                        let {
                                            text: n
                                        } = e;
                                        return n === s[t].text
                                    });
                                return o.forEach((e, t) => {
                                    let n = m.get(e.color);
                                    if (null == n) return;
                                    let r = s[t];
                                    if (!c) {
                                        let t = s.filter(t => {
                                            let {
                                                text: n
                                            } = t;
                                            return n === e.text
                                        });
                                        if (1 !== t.length || 1 !== o.filter(t => {
                                                let {
                                                    text: n
                                                } = t;
                                                return n === e.text
                                            }).length) return;
                                        r = t[0]
                                    }
                                    g.set(r, n)
                                }), !0
                            };
                        return p(t.map((e, t) => t)) || t.forEach((e, t) => p([t])), () => {
                            let n, a = t.map(() => []);
                            if (e.dataset.mathSource !== l || !e.contains(r) || [...c].some(e => {
                                    let [t, n] = e;
                                    return !r.contains(t) || t.data !== n
                                })) return a;
                            let i = [];
                            for (let e of s) {
                                let t = g.get(e);
                                if (null == t) {
                                    n = void 0;
                                    continue
                                }
                                let r = e.node.parentElement?.closest(".vlist > span, .base") ?? null;
                                n?.index === t && n.row === r ? n.glyphs.push(e) : (n = {
                                    index: t,
                                    row: r,
                                    glyphs: [e]
                                }, i.push(n))
                            }
                            for (let {
                                    index: e,
                                    glyphs: t
                                }
                                of i.reverse()) a[e].unshift(... function e(t) {
                                let n = t[0],
                                    r = t[t.length - 1],
                                    l = document.createRange();
                                l.setStart(n.node, n.offset), l.setEnd(r.node, r.offset + r.text.length);
                                let a = l.commonAncestorContainer;
                                for (; l.startContainer !== a && 0 === l.startOffset;) l.setStartBefore(l.startContainer);
                                for (; l.endContainer !== a && l.endOffset === (l.endContainer instanceof Text ? l.endContainer.length : l.endContainer.childNodes.length);) l.setEndAfter(l.endContainer);
                                if (l.startContainer !== l.endContainer) return [...t].reverse().flatMap(t => e([t])).reverse();
                                let s = (0, o.e)();
                                return l.surroundContents(s), [s]
                            }(t));
                            return a
                        }
                    })(e, l.map(m)).then(e => () => e().forEach((e, t) => j(l[t].id, e))))
                });
                let [f, x] = await Promise.all([(0, o.j)(c.map(h), K.query, K.regex, e), Promise.all(p)]);
                e.aborted || (u(f()), x.forEach(d), t.takeRecords())
            }, M[4] = K, M[5] = E, M[6] = j, M[7] = p) : p = M[7];
            let L = (0, a.useEffectEvent)(p);
            M[8] !== K?.runId || M[9] !== L || M[10] !== F || M[11] !== E || M[12] !== A || M[13] !== R ? (f = () => {
                let e = E.current;
                if (null == e) return;
                let t = null,
                    n = () => {
                        t?.abort(), L((t = new AbortController).signal, r)
                    },
                    r = new MutationObserver(e => {
                        (0, o.m)(e) && (t?.abort(), R(() => {
                            A(), n()
                        }))
                    });
                return K?.runId == null ? void n() : (r.observe(e, {
                    childList: !0,
                    subtree: !0,
                    characterData: !0,
                    attributeFilter: ["hidden", "inert"]
                }), n(), () => {
                    r.disconnect(), t?.abort(), F(), (0, o.a)(e, {
                        includeShadowRoots: !1
                    })
                })
            }, M[8] = K?.runId, M[9] = L, M[10] = F, M[11] = E, M[12] = A, M[13] = R, M[14] = f) : f = M[14];
            let O = K?.runId;
            M[15] !== F || M[16] !== E || M[17] !== B || M[18] !== R || M[19] !== O ? (x = [O, F, E, B, R], M[15] = F, M[16] = E, M[17] = B, M[18] = R, M[19] = O, M[20] = x) : x = M[20], (0, a.useEffect)(f, x), M[21] !== H || M[22] !== E ? (y = () => {
                E.current?.querySelectorAll("mark[data-search-match]").forEach(e => {
                    (0, o.k)(e, e.dataset.contentSearchMatchId === H)
                })
            }, v = [H, E], M[21] = H, M[22] = E, M[23] = y, M[24] = v) : (y = M[23], v = M[24]), (0, a.useEffect)(y, v)
        }

        function d(e) {
            return e()
        }

        function h(e) {
            let {
                element: t,
                matches: n
            } = e;
            return {
                element: t,
                maxMatches: n.length
            }
        }

        function m(e) {
            let {
                range: t
            } = e;
            return t
        }

        function g(e) {
            let {
                element: t,
                matches: n
            } = e;
            return {
                element: t,
                matches: n.filter(p)
            }
        }

        function p(e) {
            return "conversation" === e.location.domain && null == e.location.equationIndex
        }
    }),
    hkBU: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            a = n("zd8w"),
            o = n("oyxz");
        n.d(t, {}, {
            a: function(e) {
                let t, n, s, i, c, u, d, h, m, g = (0, l.c)(15),
                    {
                        onNavigate: p
                    } = e,
                    f = (0, a.useRef)(null),
                    x = (0, a.useRef)(null),
                    [y, v] = (0, a.useState)(!1);
                return g[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => {
                    let e = f.current;
                    if (null == e) return;
                    let t = e.ownerDocument,
                        n = e.closest("[data-thread-scroll-footer]") ?? e.parentElement,
                        r = () => {
                            let n = t.activeElement;
                            null != n && e.compareDocumentPosition(n) === Node.DOCUMENT_POSITION_FOLLOWING && (e.tabIndex = 0)
                        },
                        l = t => {
                            "Tab" !== t.key || t.shiftKey || t.defaultPrevented || (e.tabIndex = -1)
                        };
                    return t.addEventListener("keydown", l), n?.addEventListener("focusin", r), () => {
                        t.removeEventListener("keydown", l), n?.removeEventListener("focusin", r), x.current?.abort()
                    }
                }, n = [], g[0] = t, g[1] = n) : (t = g[0], n = g[1]), (0, a.useEffect)(t, n), g[2] === Symbol.for("react.memo_cache_sentinel") ? (s = () => x.current?.abort(), g[2] = s) : s = g[2], g[3] !== p ? (i = e => {
                    x.current?.abort();
                    let t = e.currentTarget;
                    t.tabIndex = -1;
                    let n = new AbortController;
                    x.current = n, v(!1), p(n.signal).then(e => {
                        !n.signal.aborted && t.isConnected && t.ownerDocument.activeElement === t && (e?.isConnected ? e.focus({
                            preventScroll: !0
                        }) : v(!0))
                    })
                }, g[3] = p, g[4] = i) : i = g[4], g[5] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, r.jsx)(o.a, {
                    id: "codex.conversation.latestResponse",
                    defaultMessage: "Latest response",
                    description: "Invisible heading before the composer; focusing it moves to the newest assistant response"
                }), g[5] = c) : c = g[5], g[6] !== i ? (u = (0, r.jsx)("h4", {
                    ref: f,
                    className: "sr-only m-0 select-none",
                    tabIndex: 0,
                    onBlur: s,
                    onFocus: i,
                    children: c
                }), g[6] = i, g[7] = u) : u = g[7], g[8] !== y ? (d = y ? (0, r.jsx)(o.a, {
                    id: "codex.conversation.latestResponseUnavailable",
                    defaultMessage: "No response available",
                    description: "Screen-reader announcement when navigation to the latest assistant response finds no response in the conversation"
                }) : null, g[8] = y, g[9] = d) : d = g[9], g[10] !== d ? (h = (0, r.jsx)("span", {
                    className: "sr-only m-0",
                    role: "status",
                    children: d
                }), g[10] = d, g[11] = h) : h = g[11], g[12] !== u || g[13] !== h ? (m = (0, r.jsxs)(r.Fragment, {
                    children: [u, h]
                }), g[12] = u, g[13] = h, g[14] = m) : m = g[14], m
            }
        })
    }),
    cP1f: (function(e, t, n) {
        n.d(t, {}, {
            a: async function(e, t, n) {
                if (null == e || null == t || n.aborted) return null;
                let r = null;
                return await e(t, e => {
                    let t = e.querySelectorAll('[data-conversation-role="assistant"]');
                    return r = t.item(t.length - 1)
                }, {
                    align: "top",
                    signal: n
                }), n.aborted ? null : r
            }
        })
    }),
    r2mP: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            a = n("zd8w"),
            o = n("Wf1j"),
            s = n("oyxz"),
            i = n("ozji"),
            c = n("dMTK");

        function u(e) {
            return (0, r.jsx)("span", {
                className: "font-medium",
                children: e
            })
        }

        function d(e) {
            return e.join("")
        }

        function h() {
            return Date.now()
        }

        function m(e) {
            let t, n, a, o = (0, l.c)(11),
                {
                    children: s,
                    compact: i,
                    label: c,
                    sentAtMs: u
                } = e,
                d = void 0 !== i && i,
                h = d ? "flex justify-center py-2" : "flex justify-center py-4",
                m = null == c ? void 0 : "separator",
                g = d ? "text-xs text-tertiary select-none" : "text-sm leading-5 font-normal text-tertiary select-none";
            return o[0] !== u ? (t = new Date(u).toISOString(), o[0] = u, o[1] = t) : t = o[1], o[2] !== s || o[3] !== g || o[4] !== t ? (n = (0, r.jsx)("time", {
                className: g,
                dateTime: t,
                children: s
            }), o[2] = s, o[3] = g, o[4] = t, o[5] = n) : n = o[5], o[6] !== c || o[7] !== h || o[8] !== m || o[9] !== n ? (a = (0, r.jsx)("div", {
                "aria-label": c,
                className: h,
                role: m,
                "data-markdown-copy": "exclude",
                children: n
            }), o[6] = c, o[7] = h, o[8] = m, o[9] = n, o[10] = a) : a = o[10], a
        }
        n.d(t, {}, {
            a: m,
            b: function(e) {
                let t, n, g, p, f, x, y, v, w = (0, l.c)(20),
                    {
                        sentAtMs: b,
                        nowMs: P
                    } = e,
                    S = (0, o.a)(),
                    [C] = (0, a.useState)(h);
                if (!Number.isFinite(b)) return null;
                if (w[0] !== S || w[1] !== C || w[2] !== P || w[3] !== b) {
                    let {
                        date: e,
                        time: r,
                        includeAt: l
                    } = (0, c.c)(S, new Date(b), new Date(P ?? C));
                    n = e, f = r, g = l ? i.a.older : i.a.recent, t = m, p = S.formatMessage(g, {
                        date: n,
                        time: f,
                        day: d
                    }), w[0] = S, w[1] = C, w[2] = P, w[3] = b, w[4] = t, w[5] = n, w[6] = g, w[7] = p, w[8] = f
                } else t = w[4], n = w[5], g = w[6], p = w[7], f = w[8];
                return w[9] !== n || w[10] !== f ? (x = {
                    date: n,
                    time: f,
                    day: u
                }, w[9] = n, w[10] = f, w[11] = x) : x = w[11], w[12] !== g || w[13] !== x ? (y = (0, r.jsx)(s.a, {
                    ...g,
                    values: x
                }), w[12] = g, w[13] = x, w[14] = y) : y = w[14], w[15] !== t || w[16] !== b || w[17] !== p || w[18] !== y ? (v = (0, r.jsx)(t, {
                    label: p,
                    sentAtMs: b,
                    children: y
                }), w[15] = t, w[16] = b, w[17] = p, w[18] = y, w[19] = v) : v = w[19], v
            }
        })
    }),
    if6d: (function(e, t, n) {
        n.d(t, {
            a: () => C
        });
        var r = n("ABep"),
            l = n("QosV"),
            a = n("on57"),
            o = n("BolX"),
            s = n("zd8w"),
            i = n("v7qY"),
            c = n("wD9O"),
            u = n("zm5q"),
            d = n("f4Vb"),
            h = n("lsfk"),
            m = n("g3o5"),
            g = n("bIvi"),
            p = n("hTLy"),
            f = n.n(p),
            x = n("R9dK"),
            y = n.n(x);

        function v(e) {
            let {
                collapseEmptyRows: t = !1,
                entries: n,
                gapPx: r,
                measuredHeightsByKey: l,
                pixelScale: a
            } = e, o = new Set, s = [], i = [], c = [], u = new Map, d = [], h = 0;
            for (let [e, m] of n.entries()) {
                let n = m.turnKey,
                    g = Math.max(m.minHeightPx ?? 0, l[n] ?? m.estimatedHeightPx ?? 280);
                null != a && (g = Math.round(g * a) / a);
                let p = (t ? h > 0 && g > 0 : e > 0) ? m.gapBeforePx ?? r : 0;
                null != a && (p = Math.round(p * a) / a), h += p, s.push(p), "gap" === m.type && o.add(n), u.set(n, e), d.push(n), c.push(h), i.push(g), h += g
            }
            return {
                bottomOffsetsPx: c.map((e, t) => h - e - (i[t] ?? 0)),
                collapseEmptyRows: t,
                gapKeys: o,
                gapsBeforePx: s,
                heightsPx: i,
                topOffsetsPx: c,
                totalHeightPx: h,
                turnIndexByKey: u,
                turnKeys: d
            }
        }

        function w(e) {
            let {
                distanceFromBottomPx: t,
                layout: n,
                overscanCount: r,
                viewportHeightPx: l
            } = e;
            if (0 === n.turnKeys.length) return {
                startIndex: 0,
                endIndex: 0
            };
            let a = Math.min(Math.max(0, t), n.totalHeightPx),
                o = Math.min(a + Math.max(0, l), n.totalHeightPx),
                s = n.collapseEmptyRows && o === n.totalHeightPx ? 0 : function(e, t) {
                    let n = 0,
                        r = e.length;
                    for (; n < r;) {
                        let l = Math.floor((n + r) / 2);
                        (e[l] ?? 0) < t ? r = l : n = l + 1
                    }
                    return n
                }(n.bottomOffsetsPx, o),
                i = n.collapseEmptyRows && 0 === a ? n.turnKeys.length : function(e, t, n) {
                    let r = 0,
                        l = e.length;
                    for (; r < l;) {
                        let a = Math.floor((r + l) / 2);
                        (e[a] ?? 0) + (t[a] ?? 0) <= n ? l = a : r = a + 1
                    }
                    return r
                }(n.bottomOffsetsPx, n.heightsPx, a);
            return {
                startIndex: Math.max(0, s - r),
                endIndex: Math.min(n.turnKeys.length, Math.max(i, s + 1) + r)
            }
        }

        function b(e) {
            let {
                anchorKey: t,
                layout: n,
                previousRange: r
            } = e, l = n.turnIndexByKey.get(t);
            return null == l ? null : {
                startIndex: l,
                endIndex: Math.min(n.turnKeys.length, l + r.endIndex - r.startIndex)
            }
        }

        function P(e) {
            let {
                layout: t,
                turnKey: n,
                viewportHeightPx: r
            } = e, l = t.turnIndexByKey.get(n);
            return null == l ? null : Math.max(0, (t.bottomOffsetsPx[l] ?? 0) - r / 2 + (t.heightsPx[l] ?? 0) / 2)
        }
        let S = {};

        function C(e) {
            let t, n, p, x, C, H, R, F, A, j, L, O, z, q, N, W, U, G, V, Q, X, $, Z, Y, J, ee, et, en, er, el, ea, eo, es, ei, ec, eu, ed, eh, em, eg, ep, ef, ex, ey, ev, ew, eb, eP, eS, eC, ek, eI, eM, eE, eB, e_, eT, eD, eK, eH, eR, eF, eA, ej, eL, eO, ez, eq, eN = (0, l.c)(254),
                {
                    collapseEmptyRows: eW,
                    entries: eU,
                    RowComponent: eG,
                    onApiChange: eV,
                    onVisibleContentReady: eQ,
                    className: eX,
                    gapPx: e$,
                    getBottomScrollPaddingPx: eZ,
                    isSubmitPlacementAnimating: eY,
                    onLatestTurnHeightChange: eJ,
                    preserveMeasuredTurnViewport: e0,
                    preserveUnderfilledViewport: e1,
                    getPendingRestoreScrollDistanceFromBottomPx: e2,
                    restoreScrollDistanceFromBottomPx: e3,
                    initialRestoreState: e4,
                    latestTurnFooter: e5,
                    latestTurnFooterKey: e6,
                    onRestoreStateChange: e8,
                    onViewportChange: e7,
                    onHistoryRetentionBoundaryChange: e9,
                    latestTurnSynchronousMeasurementKey: te,
                    layoutReadyTurnKey: tt,
                    onTurnLayoutReady: tn,
                    synchronousMeasurementTurnKey: tr,
                    retainedTurnKeys: tl,
                    skipEmptyResizeMeasurements: ta
                } = e,
                to = void 0 !== eW && eW,
                ts = void 0 === e$ ? 12 : e$,
                ti = void 0 !== e0 && e0,
                tc = void 0 !== e1 && e1,
                tu = void 0 !== ta && ta,
                td = (0, o.z)(m.b);
            eN[0] !== tl ? (t = tl ?? [], eN[0] = tl, eN[1] = t) : t = eN[1];
            let th = [...t, ...td],
                [tm, tg] = (0, s.useState)(null);
            eN[2] !== tm || eN[3] !== tc || eN[4] !== eU ? (n = eU.map(e => ({
                turnKey: e.turnKey,
                gapBeforePx: e.gapBeforePx,
                estimatedHeightPx: e.estimatedHeightPx,
                minHeightPx: tc && tm?.turnKey === e.turnKey && e.turnKey === eU.at(-1)?.turnKey ? Math.max(e.minHeightPx ?? 0, tm.viewportHeightPx - tm.heightOutsideTurnPx) : e.minHeightPx,
                type: e.type
            })), eN[2] = tm, eN[3] = tc, eN[4] = eU, eN[5] = n) : n = eN[5];
            let tp = n,
                tf = (0, h.b)(),
                tx = (0, c.c)(),
                ty = tx * (globalThis.devicePixelRatio ?? 1),
                tv = e4?.turnHeightsByKey ?? S,
                [tw, tb] = (0, s.useState)(tv),
                [tP, tS] = (0, s.useState)(null);
            eN[6] !== to || eN[7] !== tp || eN[8] !== ts || eN[9] !== ty || eN[10] !== tw ? (p = v({
                collapseEmptyRows: to,
                entries: tp,
                gapPx: ts,
                measuredHeightsByKey: tw,
                pixelScale: ty
            }), eN[6] = to, eN[7] = tp, eN[8] = ts, eN[9] = ty, eN[10] = tw, eN[11] = p) : p = eN[11];
            let tC = p;
            eN[12] !== eZ || eN[13] !== e4 || eN[14] !== tC || eN[15] !== tf ? (x = () => {
                var e, t, n;
                let r, l, a = T(eZ);
                return e = tC, t = D(tf.getLastScrollDistanceFromBottomPx(), a), n = e4, l = w({
                    distanceFromBottomPx: r = Math.min(t, e.totalHeightPx),
                    layout: e,
                    overscanCount: 2,
                    viewportHeightPx: 800
                }), {
                    distanceFromBottomPx: r,
                    renderedRange: (n?.renderedWindow == null ? null : b({
                        anchorKey: n.renderedWindow.anchorKey,
                        layout: e,
                        previousRange: {
                            startIndex: 0,
                            endIndex: Math.min(n.renderedWindow.count, l.endIndex - l.startIndex)
                        }
                    })) ?? l,
                    turnKeys: e.turnKeys,
                    viewportHeightPx: 800
                }
            }, eN[12] = eZ, eN[13] = e4, eN[14] = tC, eN[15] = tf, eN[16] = x) : x = eN[16];
            let [tk, tI] = (0, s.useState)(x), [tM] = (0, s.useState)(I), tE = (0, s.useSyncExternalStore)(tM.subscribe, tM.getSnapshot, tM.getSnapshot), tB = (0, s.useRef)(null), t_ = (0, s.useRef)(tw), tT = (0, s.useRef)(tk), tD = (0, s.useRef)(null);
            eN[17] === Symbol.for("react.memo_cache_sentinel") ? (C = new Map, eN[17] = C) : C = eN[17];
            let tK = (0, s.useRef)(C);
            eN[18] === Symbol.for("react.memo_cache_sentinel") ? (H = new Map, eN[18] = H) : H = eN[18];
            let tH = (0, s.useRef)(H);
            eN[19] === Symbol.for("react.memo_cache_sentinel") ? (R = new WeakSet, eN[19] = R) : R = eN[19];
            let tR = (0, s.useRef)(R);
            eN[20] === Symbol.for("react.memo_cache_sentinel") ? (F = new Map, eN[20] = F) : F = eN[20];
            let tF = (0, s.useRef)(F);
            eN[21] === Symbol.for("react.memo_cache_sentinel") ? (A = new Map, eN[21] = A) : A = eN[21];
            let tA = (0, s.useRef)(A),
                tj = (0, s.useRef)(null),
                tL = (0, s.useRef)(null),
                tO = (0, s.useRef)(0),
                tz = (0, s.useRef)(null),
                [tq, tN] = (0, s.useState)(null),
                tW = (0, s.useRef)(!1),
                tU = (0, s.useRef)(null),
                tG = (0, s.useRef)(tC),
                tV = (0, s.useRef)(tC),
                tQ = (0, s.useRef)(tC),
                tX = (0, s.useRef)(null);
            eN[22] !== tw ? (j = () => {
                tw !== t_.current && tb(t_.current)
            }, eN[22] = tw, eN[23] = j) : j = eN[23], eN[24] !== to || eN[25] !== tp || eN[26] !== ts || eN[27] !== ty || eN[28] !== tw ? (L = [to, tp, ts, ty, tw], eN[24] = to, eN[25] = tp, eN[26] = ts, eN[27] = ty, eN[28] = tw, eN[29] = L) : L = eN[29], (0, s.useLayoutEffect)(j, L), eN[30] === Symbol.for("react.memo_cache_sentinel") ? (O = e => {
                tB.current = e, tS(e)
            }, eN[30] = O) : O = eN[30];
            let t$ = (0, g.a)(O);
            eN[31] !== to || eN[32] !== tp || eN[33] !== ts || eN[34] !== tC || eN[35] !== ty || eN[36] !== tw ? (z = () => {
                if (tV.current !== tC) {
                    tV.current = tC, tG.current = tw === t_.current ? tC : v({
                        collapseEmptyRows: to,
                        entries: tp,
                        gapPx: ts,
                        measuredHeightsByKey: t_.current,
                        pixelScale: ty
                    });
                    let e = tB.current;
                    null != e && (e.style.height = `${tG.current.totalHeightPx}px`)
                }
                return tG.current
            }, eN[31] = to, eN[32] = tp, eN[33] = ts, eN[34] = tC, eN[35] = ty, eN[36] = tw, eN[37] = z) : z = eN[37];
            let tZ = (0, g.a)(z);
            eN[38] !== eZ || eN[39] !== tf || eN[40] !== tx ? (q = e => {
                let t = tf.getScrollElement(),
                    n = tB.current,
                    r = t?.firstElementChild;
                return null == n || null == r ? e - T(eZ) : e - (0, c.b)(r.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, tx)
            }, eN[38] = eZ, eN[39] = tf, eN[40] = tx, eN[41] = q) : q = eN[41];
            let tY = (0, g.a)(q),
                tJ = tk.renderedRange;
            if (null != tE) {
                let e = P({
                    layout: tC,
                    turnKey: tE.turnKey,
                    viewportHeightPx: tk.viewportHeightPx
                });
                null != e && (tJ = w({
                    distanceFromBottomPx: e,
                    layout: tC,
                    overscanCount: 2,
                    viewportHeightPx: tk.viewportHeightPx
                }))
            } else if (!_(tk.turnKeys, tC.turnKeys)) {
                let e = tk.turnKeys[tk.renderedRange.startIndex];
                null != e && (tJ = b({
                    anchorKey: e,
                    layout: tC,
                    previousRange: tJ
                }) ?? w({
                    distanceFromBottomPx: tk.distanceFromBottomPx,
                    layout: tC,
                    overscanCount: 2,
                    viewportHeightPx: tk.viewportHeightPx
                }))
            }
            eN[42] !== e3 ? (N = () => {
                null == tj.current && e3?.()
            }, eN[42] = e3, eN[43] = N) : N = eN[43];
            let t0 = (0, g.a)(N);
            eN[44] === Symbol.for("react.memo_cache_sentinel") ? (W = () => {
                null != tU.current && (window.cancelAnimationFrame(tU.current), tU.current = null)
            }, eN[44] = W) : W = eN[44];
            let t1 = (0, g.a)(W);
            eN[45] !== tp || eN[46] !== eQ || eN[47] !== t0 ? (U = () => {
                null == eQ || tW.current || null != tU.current || null == tB.current || tp.length > 0 && 0 === tH.current.size || (tU.current = window.requestAnimationFrame(() => {
                    tU.current = window.requestAnimationFrame(() => {
                        tU.current = null, tW.current || null == tB.current || tp.length > 0 && 0 === tH.current.size || (tW.current = !0, t0(), eQ())
                    })
                }))
            }, eN[45] = tp, eN[46] = eQ, eN[47] = t0, eN[48] = U) : U = eN[48];
            let t2 = (0, g.a)(U),
                t3 = eU.slice(tJ.startIndex, tJ.endIndex).map((e, t) => ({
                    entry: e,
                    turnIndex: tJ.startIndex + t
                }));
            for (let e of new Set(th)) {
                let t = tC.turnIndexByKey.get(e);
                if (null == t || t >= tJ.startIndex && t < tJ.endIndex) continue;
                let n = eU[t];
                null != n && t3.push({
                    entry: n,
                    turnIndex: t
                })
            }
            t3.sort(k);
            let t4 = null == e9 ? null : function(e, t, n, r) {
                    let {
                        startIndex: l,
                        endIndex: a
                    } = w({
                        distanceFromBottomPx: 0,
                        layout: n,
                        overscanCount: 0,
                        viewportHeightPx: r
                    }), o = 1 / 0, s = null, i = t => {
                        let n = e[t];
                        if ("gap" === n.type) return !1;
                        let r = null;
                        return "sourceTurnId" in n && "string" == typeof n.sourceTurnId ? r = n.sourceTurnId : "turnId" in n && "string" == typeof n.turnId && (r = n.turnId), null != r && (t < o && (o = t, s = {
                            oldestProtectedTurnId: r,
                            firstProtectedItemId: "turnStatus" in n && "inProgress" === n.turnStatus && "turnItemIds" in n && Array.isArray(n.turnItemIds) ? n.turnItemIds.at(-500) ?? null : null
                        }), !0)
                    };
                    for (let e = l; e < a; e++)
                        if (!i(e)) return null;
                    for (let e of t ?? []) {
                        let t = n.turnIndexByKey.get(e);
                        if (null != t && !i(t)) return null
                    }
                    return s
                }(eU, th, tC, tk.viewportHeightPx + 24),
                t5 = (0, g.a)(e => {
                    e9?.(e > 24 || null != tM.getSnapshot() ? null : t4)
                });
            eN[49] !== t5 || eN[50] !== tf ? (G = () => {
                t5(tf.getLastScrollDistanceFromBottomPx())
            }, eN[49] = t5, eN[50] = tf, eN[51] = G) : G = eN[51];
            let t6 = t4?.oldestProtectedTurnId,
                t8 = t4?.firstProtectedItemId;
            eN[52] !== e9 || eN[53] !== tE || eN[54] !== t5 || eN[55] !== tf || eN[56] !== t6 || eN[57] !== t8 ? (V = [t6, t8, e9, tE, t5, tf], eN[52] = e9, eN[53] = tE, eN[54] = t5, eN[55] = tf, eN[56] = t6, eN[57] = t8, eN[58] = V) : V = eN[58], (0, s.useLayoutEffect)(G, V), eN[59] !== tt || eN[60] !== tn || eN[61] !== tf ? (Q = () => {
                if (null == tt || null == tn || null != tj.current || tF.current.size > 0) return;
                let e = tf.getScrollElement(),
                    t = tH.current.get(tt);
                null != e && !(e.clientHeight <= 0) && null != t && tR.current.has(t) && !((t_.current[tt] ?? 0) <= 0) && tn(tt, t)
            }, eN[59] = tt, eN[60] = tn, eN[61] = tf, eN[62] = Q) : Q = eN[62];
            let t7 = (0, g.a)(Q);
            eN[63] !== eZ || eN[64] !== e2 || eN[65] !== eY || eN[66] !== eJ || eN[67] !== t0 || eN[68] !== tf || eN[69] !== tM ? (X = e => {
                let t = T(eZ);
                if (null != e.latestTurnHeightChange && eJ?.(e.latestTurnHeightChange), e.restoreScrollDistanceFromBottom) t0();
                else if (null != e.scrollDistanceFromBottomPx) {
                    var n, r;
                    let l, a = e.scrollDistanceFromBottomPx,
                        o = tQ.current,
                        s = tG.current,
                        i = tX.current;
                    eY?.() && null != e.latestTurnHeightChange && null != i && i.totalHeightPx !== o.totalHeightPx && null == tM.getSnapshot() && e2?.() == null && (n = o, (l = (r = s).turnKeys.length - 1) > 0 && n.turnKeys.length === r.turnKeys.length && n.turnKeys[l] !== r.turnKeys[l] && n.turnKeys.every((e, t) => t === l || e === r.turnKeys[t] && n.topOffsetsPx[t] === r.topOffsetsPx[t] && n.heightsPx[t] === r.heightsPx[t])) && (a = tf.getUnroundedScrollDistanceFromBottomPx(tf.getLastScrollDistanceFromBottomPx()) + s.totalHeightPx - o.totalHeightPx, tX.current = o), tf.compensateScrollToDistanceFromBottomPx(a + T(eZ) - t, null != e.afterMeasure || null != tM.getSnapshot() || e2?.() != null || eY?.() ? void 0 : "turn-resize")
                }
                e.afterMeasure?.()
            }, eN[63] = eZ, eN[64] = e2, eN[65] = eY, eN[66] = eJ, eN[67] = t0, eN[68] = tf, eN[69] = tM, eN[70] = X) : X = eN[70];
            let t9 = (0, g.a)(X);
            eN[71] !== tZ ? ($ = (e, t) => {
                if (null != tj.current || t <= 0) return;
                let n = tT.current,
                    r = E({
                        current: n,
                        distanceFromBottomPx: e,
                        layout: tZ(),
                        viewportHeightPx: t
                    });
                r === n || (tT.current = r, r.renderedRange.startIndex === n.renderedRange.startIndex && r.renderedRange.endIndex === n.renderedRange.endIndex && _(r.turnKeys, n.turnKeys) || tI(r))
            }, eN[71] = tZ, eN[72] = $) : $ = eN[72];
            let ne = (0, g.a)($);
            eN[73] !== e9 ? (Z = () => () => e9?.(void 0), Y = [e9], eN[73] = e9, eN[74] = Z, eN[75] = Y) : (Z = eN[74], Y = eN[75]), (0, s.useLayoutEffect)(Z, Y), eN[76] !== tZ || eN[77] !== e7 ? (J = (e, t, n) => {
                if (null == e7) return;
                let r = tZ(),
                    l = Math.max(0, Math.min(r.totalHeightPx, r.totalHeightPx - e)),
                    a = Math.max(0, l - t);
                e7({
                    viewportEndPx: l,
                    viewportStartPx: a
                }, n)
            }, eN[76] = tZ, eN[77] = e7, eN[78] = J) : J = eN[78];
            let nt = (0, g.a)(J);
            eN[79] !== tM ? (ee = e => {
                tM.getSnapshot() === e && tM.replace(null)
            }, eN[79] = tM, eN[80] = ee) : ee = eN[80];
            let nn = (0, g.a)(ee);
            eN[81] !== e9 || eN[82] !== tM ? (et = (e, t, n) => n?.signal?.aborted ? Promise.resolve() : (e9?.(null), new Promise(r => {
                let l = () => {
                        tM.getSnapshot() === a && tM.replace(null)
                    },
                    a = {
                        align: n?.align ?? "center",
                        complete: () => {
                            n?.signal?.removeEventListener("abort", l), r()
                        },
                        getTargetElement: t,
                        turnKey: e
                    };
                tI(tT.current), tM.replace(a), n?.signal?.addEventListener("abort", l, {
                    once: !0
                })
            })), eN[81] = e9, eN[82] = tM, eN[83] = et) : et = eN[83];
            let nr = (0, g.a)(et);
            eN[84] !== tZ || eN[85] !== eU ? (en = e => {
                let {
                    viewportStartPx: t,
                    viewportEndPx: n
                } = e;
                return function(e, t, n, r) {
                    let {
                        topOffsetsPx: l,
                        heightsPx: a
                    } = t, o = Math.max(0, y()(l, n) - 1);
                    return (l[o] ?? 0) + (a[o] ?? 0) <= n && o++, e.slice(o, f()(l, r))
                }(eU, tZ(), t, n)
            }, eN[84] = tZ, eN[85] = eU, eN[86] = en) : en = eN[86];
            let nl = (0, g.a)(en);
            eN[87] !== tZ ? (er = e => {
                let t = tZ(),
                    n = t.turnIndexByKey.get(e);
                if (null == n) return null;
                let r = t.topOffsetsPx[n],
                    l = t.heightsPx[n];
                return null == r || null == l ? null : {
                    endPx: r + l,
                    startPx: r
                }
            }, eN[87] = tZ, eN[88] = er) : er = eN[88];
            let na = (0, g.a)(er);
            eN[89] !== eJ || eN[90] !== tf || eN[91] !== tx ? (el = () => {
                let e = 0,
                    t = null;
                for (let [n, r] of tA.current) e += r, (null == t || t.compareDocumentPosition(n) === Node.DOCUMENT_POSITION_FOLLOWING) && (t = n);
                null != t && eJ?.({
                    heightDeltaPx: null,
                    heightPx: null,
                    bottomViewportOverflowPx: tf.isNativeEndSnapFollowing?.() ? 0 : K({
                        scrollElement: tf.getScrollElement(),
                        turnElement: t,
                        windowZoom: tx
                    }),
                    turnElement: t,
                    followContentHeightPx: e
                })
            }, eN[89] = eJ, eN[90] = tf, eN[91] = tx, eN[92] = el) : el = eN[92];
            let no = (0, g.a)(el);
            eN[93] !== to || eN[94] !== t9 || eN[95] !== tp || eN[96] !== ts || eN[97] !== eZ || eN[98] !== tZ || eN[99] !== tY || eN[100] !== e2 || eN[101] !== ty || eN[102] !== ti || eN[103] !== tf || eN[104] !== tM || eN[105] !== tx ? (ea = (e, t, n) => {
                var r;
                let l = tZ(),
                    a = tf.getScrollElement();
                if (a?.getClientRects().length === 0) return !1;
                let o = tj.current,
                    s = t_.current,
                    u = s,
                    d = 0,
                    h = !1,
                    m = null,
                    g = 0,
                    p = !1,
                    f = !1,
                    x = "controller" === (void 0 === n ? "measured" : n) ? tf.getLastScrollDistanceFromBottomPx({
                        includePendingUserScroll: !0
                    }) : function(e, t) {
                        let n = e.getScrollElement(),
                            r = n?.firstElementChild;
                        if (null == n || null == r || 0 === n.clientHeight) return e.getLastScrollDistanceFromBottomPx();
                        let l = r.getBoundingClientRect();
                        if (0 === l.height) return e.getLastScrollDistanceFromBottomPx();
                        let a = n.scrollTop;
                        return Math.max(0, Math.round(a + (0, c.b)(l.bottom - n.getBoundingClientRect().top, t)) - n.clientHeight) - a
                    }(tf, tx),
                    y = T(eZ),
                    w = D(x, y),
                    b = ti ? null : e2?.() ?? null,
                    P = null == o ? w : tT.current.distanceFromBottomPx,
                    S = P;
                if (ti && null == tM.getSnapshot() && e2?.() == null) {
                    let e = _(tQ.current.turnKeys, l.turnKeys) ? l : tQ.current,
                        t = e === l ? o?.scrollDistanceFromBottomPx ?? x : x,
                        n = B({
                            distanceFromBottomPx: tY(t),
                            preferLatestVisibleRow: t < y,
                            layout: e,
                            measuredHeightsByKey: s,
                            nextLayout: l,
                            viewportHeightPx: tT.current.viewportHeightPx
                        }),
                        r = a?.ownerDocument.activeElement,
                        i = r?.closest("[data-turn-key]"),
                        c = i?.dataset.turnKey;
                    if (a && r && i && c && tH.current.get(c) === i) {
                        let e = r.getBoundingClientRect(),
                            t = a.getBoundingClientRect();
                        e.bottom > t.top && e.top < t.bottom && (n = c)
                    }
                    let u = null == n ? null : l.turnIndexByKey.get(n);
                    null != u && (S = l.bottomOffsetsPx[u] ?? P)
                }
                for (let [t, n] of e) {
                    let {
                        element: e,
                        heightPx: r
                    } = n, a = tH.current.get(t);
                    if (a !== e) continue;
                    r > 0 ? tR.current.add(a) : tR.current.delete(a);
                    let o = Math.max(+!to, r),
                        i = s[t];
                    if (i === o) continue;
                    u === s && (u = {
                        ...s
                    }), u[t] = o;
                    let c = l.turnIndexByKey.get(t);
                    if (null == c) continue;
                    let x = c === l.turnKeys.length - 1,
                        y = Math.round(Math.max(tp[c]?.minHeightPx ?? 0, o) * ty) / ty,
                        v = y - (l.heightsPx[c] ?? y);
                    f = f || null == i || 0 !== v, x && (h = !0, d += null == i ? 0 : v, m = a), p = p || to && (0 === y || 0 === l.heightsPx[c]), (l.bottomOffsetsPx[c] ?? 0) <= S && (ti || null != e2 && !x) && (g += v)
                }
                if (u === s) return !1;
                if (!f) return t_.current = u, !1;
                let C = v({
                    collapseEmptyRows: to,
                    entries: tp,
                    gapPx: ts,
                    measuredHeightsByKey: u,
                    pixelScale: ty
                });
                if (p)
                    for (let [e, t] of C.gapsBeforePx.entries()) {
                        let n = t - (l.gapsBeforePx[e] ?? 0);
                        (l.bottomOffsetsPx[e] ?? 0) + (l.heightsPx[e] ?? 0) <= S && (ti || null != e2 && e !== l.turnKeys.length - 1) && (g += n)
                    }
                let k = tf.isNativeEndSnapFollowing?.(),
                    I = ti && tf.shouldFollowContentGrowth() && (k || (r = x, 0 === y && r <= 24)) && m?.querySelector("[data-preserve-turn-viewport]") == null,
                    M = o?.restoreScrollDistanceFromBottom || null != b,
                    H = null;
                M || (H = I ? 0 : 0 !== g ? (o?.scrollDistanceFromBottomPx ?? tf.getUnroundedScrollDistanceFromBottomPx(x)) + g : o?.scrollDistanceFromBottomPx ?? (ti || !h ? x : null));
                let R = tT.current.distanceFromBottomPx;
                M ? R = b ?? R : null != H && (R = D(H, y));
                let F = E({
                        current: tT.current,
                        distanceFromBottomPx: R,
                        layout: C,
                        viewportHeightPx: tT.current.viewportHeightPx
                    }),
                    A = o?.latestTurnHeightChange,
                    j = m ?? A?.turnElement ?? null,
                    L = {
                        afterMeasure: o?.afterMeasure,
                        latestTurnHeightChange: h || null != A ? {
                            heightDeltaPx: (A?.heightDeltaPx ?? 0) + d,
                            heightPx: C.heightsPx.at(-1) ?? null,
                            bottomViewportOverflowPx: k ? 0 : K({
                                scrollElement: tf.getScrollElement(),
                                turnElement: j,
                                windowZoom: tx
                            }),
                            turnElement: j,
                            followContentHeightPx: null
                        } : null,
                        restoreScrollDistanceFromBottom: M,
                        scrollDistanceFromBottomPx: H,
                        turnHeightsByKey: u
                    },
                    O = tB.current;
                for (let [t, n] of e) {
                    let {
                        element: e
                    } = n, r = C.turnIndexByKey.get(t);
                    tH.current.get(t) === e && null != r && null != e.parentElement && (e.parentElement.style.height = `${C.heightsPx[r]}px`, e.parentElement.style.minHeight = "")
                }
                if (h && 1 === e.size && null == o && F === tT.current && C.gapsBeforePx.at(-1) === l.gapsBeforePx.at(-1) && null != O) return t_.current = u, tG.current = C, tQ.current = C, O.style.height = `${C.totalHeightPx}px`, t9(L), !0;
                null == tX.current && (tX.current = l);
                let z = () => {
                    t_.current = u, tG.current = C, tb(u), F !== tT.current && (tT.current = F, tI(F))
                };
                return tj.current = L, void 0 === t || t ? (0, i.flushSync)(z) : z(), !0
            }, eN[93] = to, eN[94] = t9, eN[95] = tp, eN[96] = ts, eN[97] = eZ, eN[98] = tZ, eN[99] = tY, eN[100] = e2, eN[101] = ty, eN[102] = ti, eN[103] = tf, eN[104] = tM, eN[105] = tx, eN[106] = ea) : ea = eN[106];
            let ns = (0, g.a)(ea);
            eN[107] !== ns || eN[108] !== no || eN[109] !== t7 || eN[110] !== tu ? (eo = e => {
                let t = new Map,
                    n = !1,
                    r = !1;
                for (let l of e) {
                    let e = tK.current.get(l.target);
                    if (null == e) continue;
                    let {
                        height: a
                    } = (0, d.a)(l);
                    switch (e.kind) {
                        case "turn": {
                            n = !0;
                            let r = e.turnKey,
                                o = tH.current.get(r);
                            if (a > 0 && o === l.target && tR.current.has(o) && t_.current[r] === a) break;
                            t.set(r, {
                                element: l.target,
                                heightPx: a
                            });
                            break
                        }
                        case "latest-turn-follow-content":
                            tA.current.set(e.element, a), r = !0
                    }
                }!(t.size > 0) && (n || tu) || ns(t), r && no(), t7()
            }, eN[107] = ns, eN[108] = no, eN[109] = t7, eN[110] = tu, eN[111] = eo) : eo = eN[111];
            let ni = (0, g.a)(eo);
            eN[112] !== ni ? (es = () => {
                if (null != tL.current) return tL.current;
                let e = new ResizeObserver(ni);
                return tL.current = e, e
            }, eN[112] = ni, eN[113] = es) : es = eN[113];
            let nc = (0, g.a)(es);
            eN[114] !== nc || eN[115] !== t2 ? (ei = (e, t) => {
                if (null == t) return;
                tK.current.set(t, {
                    kind: "turn",
                    turnKey: e
                }), tH.current.set(e, t), tR.current.delete(t), tF.current.set(e, t);
                let n = nc();
                return n.observe(t), t2(), () => {
                    n.unobserve(t), tK.current.delete(t), tF.current.get(e) === t && tF.current.delete(e), tH.current.get(e) === t && tH.current.delete(e)
                }
            }, eN[114] = nc, eN[115] = t2, eN[116] = ei) : ei = eN[116];
            let nu = (0, g.a)(ei);
            eN[117] !== ns || eN[118] !== tx ? (ec = (e, t) => {
                let n = tH.current.get(e);
                if (null == n) return;
                let r = (0, c.b)(n.getBoundingClientRect().height, tx);
                if (!(r <= 0) && (ns(new Map([
                        [e, {
                            element: n,
                            heightPx: r
                        }]
                    ]), !1), null != t)) {
                    let e = tj.current;
                    null == e ? t() : e.afterMeasure = t
                }
            }, eN[117] = ns, eN[118] = tx, eN[119] = ec) : ec = eN[119];
            let nd = (0, g.a)(ec);
            eN[120] !== nc ? (eu = e => {
                if (null == e) return;
                tK.current.set(e, {
                    element: e,
                    kind: "latest-turn-follow-content"
                }), tA.current.set(e, 0);
                let t = nc();
                return t.observe(e), () => {
                    t.unobserve(e), tK.current.delete(e), tA.current.delete(e)
                }
            }, eN[120] = nc, eN[121] = eu) : eu = eN[121];
            let nh = (0, g.a)(eu);
            eN[122] !== ns || eN[123] !== tx ? (ed = () => {
                let e = tF.current;
                if (0 === e.size) {
                    tO.current = 0;
                    return
                }
                if (null != tz.current) return;
                if (tO.current >= 8) {
                    tz.current = requestAnimationFrame(e => {
                        tz.current = null, tO.current = 0, tN(e)
                    });
                    return
                }
                tO.current = tO.current + 1, tF.current = new Map;
                let t = new Map;
                if ((0, u.a)("virtualizedTurnList.readMountedHeights", () => {
                        for (let [n, r] of e) {
                            if (tH.current.get(n) !== r) continue;
                            let e = (0, c.b)(r.getBoundingClientRect().height, tx);
                            e > 0 && t.set(n, {
                                element: r,
                                heightPx: e
                            })
                        }
                    }, e.size), t.size > 0) {
                    let n = t_.current;
                    if (ns(t, !1, "controller"))
                        for (let [t, r] of e)(null == n[t] || tO.current > 1) && tH.current.get(t) === r && tF.current.set(t, r);
                    else tO.current = 0
                }
            }, eN[122] = ns, eN[123] = tx, eN[124] = ed) : ed = eN[124], (0, s.useLayoutEffect)(ed), eN[125] !== tp || eN[126] !== nd || eN[127] !== tr ? (eh = () => {
                let e = tr ?? tp.at(-1)?.turnKey;
                null != e && nd(e)
            }, eN[125] = tp, eN[126] = nd, eN[127] = tr, eN[128] = eh) : eh = eN[128];
            let nm = (0, g.a)(eh);
            eN[129] !== te || eN[130] !== nm ? (em = () => {
                null != te && nm()
            }, eg = [te, nm], eN[129] = te, eN[130] = nm, eN[131] = em, eN[132] = eg) : (em = eN[131], eg = eN[132]), (0, s.useLayoutEffect)(em, eg), eN[133] !== t9 || eN[134] !== tw ? (ep = () => {
                let e = tj.current;
                null != e && e.turnHeightsByKey === tw && (tj.current = null, t9(e))
            }, ef = [t9, tw], eN[133] = t9, eN[134] = tw, eN[135] = ep, eN[136] = ef) : (ep = eN[135], ef = eN[136]), (0, s.useLayoutEffect)(ep, ef), eN[137] !== tp || eN[138] !== tm || eN[139] !== tC.heightsPx || eN[140] !== tc || eN[141] !== tw || eN[142] !== tP || eN[143] !== tx ? (ex = e => {
                if (!tc || tm?.viewportHeightPx === e) return;
                if (null != tm) return void(0, i.flushSync)(() => {
                    tg({
                        ...tm,
                        viewportHeightPx: e
                    })
                });
                let t = tP?.closest("[data-thread-user-message-navigation-content]"),
                    n = t?.lastElementChild,
                    r = tp.at(-1)?.turnKey;
                if (null == t || null == n || null == r || tp.some(e => null == tw[e.turnKey])) return;
                let l = (0, c.b)(t.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, tx) - parseFloat(getComputedStyle(t).paddingBottom);
                l <= 24 || (0, i.flushSync)(() => {
                    tg({
                        turnKey: r,
                        heightOutsideTurnPx: e - (tC.heightsPx.at(-1) ?? 0) - l,
                        viewportHeightPx: e
                    })
                })
            }, eN[137] = tp, eN[138] = tm, eN[139] = tC.heightsPx, eN[140] = tc, eN[141] = tw, eN[142] = tP, eN[143] = tx, eN[144] = ex) : ex = eN[144];
            let ng = (0, g.a)(ex);
            eN[145] !== nl || eN[146] !== na || eN[147] !== nd || eN[148] !== eV || eN[149] !== nr ? (ey = () => {
                if (null != eV) return eV({
                    getEntriesInViewport: nl,
                    getEntryGeometry: na,
                    measureTurnBeforePaint: nd,
                    scrollToKey: nr
                }), () => {
                    eV(null)
                }
            }, ev = [nl, na, nd, eV, nr], eN[145] = nl, eN[146] = na, eN[147] = nd, eN[148] = eV, eN[149] = nr, eN[150] = ey, eN[151] = ev) : (ey = eN[150], ev = eN[151]), (0, s.useEffect)(ey, ev), eN[152] !== t1 ? (ew = () => () => {
                tW.current = !1, t1()
            }, eb = [t1], eN[152] = t1, eN[153] = ew, eN[154] = eb) : (ew = eN[153], eb = eN[154]), (0, s.useLayoutEffect)(ew, eb), eN[155] !== t1 || eN[156] !== t2 ? (eP = () => (t2(), t1), eN[155] = t1, eN[156] = t2, eN[157] = eP) : eP = eN[157], eN[158] !== t1 || eN[159] !== tp.length || eN[160] !== eQ || eN[161] !== t2 || eN[162] !== tP ? (eS = [t1, tp.length, eQ, t2, tP], eN[158] = t1, eN[159] = tp.length, eN[160] = eQ, eN[161] = t2, eN[162] = tP, eN[163] = eS) : eS = eN[163], (0, s.useEffect)(eP, eS), eN[164] !== tM ? (eC = () => {
                let e = tK.current,
                    t = tH.current,
                    n = tA.current;
                return () => {
                    null != tz.current && (cancelAnimationFrame(tz.current), tz.current = null), tL.current?.disconnect(), tL.current = null, e.clear(), t.clear(), tF.current.clear(), n.clear(), tj.current = null, tM.replace(null)
                }
            }, ek = [tM], eN[164] = tM, eN[165] = eC, eN[166] = ek) : (eC = eN[165], ek = eN[166]), (0, s.useEffect)(eC, ek), eN[167] !== e8 ? (eI = () => {
                if (null != e8) return () => {
                    e8(function(e, t, n) {
                        let r = {};
                        for (let n of t) {
                            let t = e[n];
                            null != t && (r[n] = t)
                        }
                        let l = t[n.startIndex];
                        return 0 === Object.keys(r).length || null == l ? null : {
                            renderedWindow: {
                                anchorKey: l,
                                count: n.endIndex - n.startIndex
                            },
                            turnHeightsByKey: r
                        }
                    }(t_.current, tT.current.turnKeys, tT.current.renderedRange))
                }
            }, eM = [e8], eN[167] = e8, eN[168] = eI, eN[169] = eM) : (eI = eN[168], eM = eN[169]), (0, s.useLayoutEffect)(eI, eM);
            let {
                addScrollListener: np,
                addUserScrollListener: nf,
                getScrollElement: nx
            } = tf;
            eN[170] !== np || eN[171] !== nf || eN[172] !== eZ || eN[173] !== nx || eN[174] !== ng || eN[175] !== tc || eN[176] !== t5 || eN[177] !== t7 || eN[178] !== nt || eN[179] !== t0 || eN[180] !== tP || eN[181] !== ne ? (eE = () => {
                let e = nx();
                if (null == e) return;
                let t = () => (null == tD.current && (tD.current = e.clientHeight), tD.current || tT.current.viewportHeightPx || 800),
                    n = np(e => {
                        ne(D(e, T(eZ)), t()), t5(e)
                    }),
                    r = nf((e, n) => {
                        nt(D(e, T(eZ)), t(), null != n && e > n)
                    }),
                    l = new ResizeObserver(n => {
                        let r = n.find(t => t.target === e);
                        if (null != r) {
                            let {
                                height: e
                            } = (0, d.a)(r);
                            tD.current = e, ne(tT.current.distanceFromBottomPx, e), t0()
                        }
                        ng(t()), t7()
                    });
                return l.observe(e), tc && null != tP && l.observe(tP), () => {
                    n(), r(), l.disconnect()
                }
            }, eB = [np, nf, eZ, nx, ng, t7, tc, nt, t5, t0, tP, ne], eN[170] = np, eN[171] = nf, eN[172] = eZ, eN[173] = nx, eN[174] = ng, eN[175] = tc, eN[176] = t5, eN[177] = t7, eN[178] = nt, eN[179] = t0, eN[180] = tP, eN[181] = ne, eN[182] = eE, eN[183] = eB) : (eE = eN[182], eB = eN[183]), (0, s.useLayoutEffect)(eE, eB), eN[184] !== ns || eN[185] !== eZ || eN[186] !== tC || eN[187] !== tE || eN[188] !== tf || eN[189] !== tM || eN[190] !== nn || eN[191] !== ne || eN[192] !== tx ? (e_ = () => {
                if (null == tE || tM.getSnapshot() !== tE || null != tz.current) return;
                let e = tf.getScrollElement();
                if (null == e) return;
                let t = new Map;
                for (let [e, n] of tH.current) {
                    let r = (0, c.b)(n.getBoundingClientRect().height, tx);
                    r > 0 && t.set(e, {
                        element: n,
                        heightPx: r
                    })
                }
                if (ns(t, !1) || null != tj.current) return;
                let n = tH.current.get(tE.turnKey),
                    r = null == n ? null : tE.getTargetElement?.(n) ?? n,
                    l = null == n || null == r ? function(e) {
                        let {
                            align: t,
                            layout: n,
                            turnKey: r,
                            viewportHeightPx: l
                        } = e;
                        if ("center" === t) return P({
                            layout: n,
                            turnKey: r,
                            viewportHeightPx: l
                        });
                        let a = n.turnIndexByKey.get(r);
                        return null == a ? null : Math.max(0, (n.bottomOffsetsPx[a] ?? 0) + (n.heightsPx[a] ?? 0) - l + 10)
                    }({
                        align: tE.align,
                        layout: tC,
                        turnKey: tE.turnKey,
                        viewportHeightPx: e.clientHeight
                    }) : function(e) {
                        let {
                            align: t,
                            layout: n,
                            targetElement: r,
                            turnElement: l,
                            turnKey: a,
                            windowZoom: o,
                            viewportHeightPx: s
                        } = e, i = n.turnIndexByKey.get(a);
                        if (null == i) return null;
                        let u = l.getBoundingClientRect(),
                            d = r.getBoundingClientRect(),
                            h = (0, c.b)(d.top - u.top, o),
                            m = (0, c.b)(d.height, o),
                            g = (n.bottomOffsetsPx[i] ?? 0) + (n.heightsPx[i] ?? 0) - h;
                        return "top" === t ? Math.max(0, g - s + 10) : Math.max(0, g - m / 2 - s / 2)
                    }({
                        align: tE.align,
                        layout: tC,
                        targetElement: r,
                        turnElement: n,
                        turnKey: tE.turnKey,
                        viewportHeightPx: e.clientHeight,
                        windowZoom: tx
                    });
                if (null == l) return void queueMicrotask(() => nn(tE));
                let a = "top" === tE.align && null != r ? Math.max(0, tf.getLastScrollDistanceFromBottomPx() - (0, c.b)(r.getBoundingClientRect().top - e.getBoundingClientRect().top, tx) + 10) : l + T(eZ);
                tf.scrollToDistanceFromBottomPx(a, "instant", "user"), ne(Math.max(0, a - T(eZ)), e.clientHeight), queueMicrotask(() => nn(tE))
            }, eN[184] = ns, eN[185] = eZ, eN[186] = tC, eN[187] = tE, eN[188] = tf, eN[189] = tM, eN[190] = nn, eN[191] = ne, eN[192] = tx, eN[193] = e_) : e_ = eN[193], eN[194] !== ns || eN[195] !== eZ || eN[196] !== tC || eN[197] !== tq || eN[198] !== tE || eN[199] !== tf || eN[200] !== tM || eN[201] !== nn || eN[202] !== ne || eN[203] !== tx ? (eT = [ns, tC, tq, tE, tf, tM, nn, eZ, ne, tx], eN[194] = ns, eN[195] = eZ, eN[196] = tC, eN[197] = tq, eN[198] = tE, eN[199] = tf, eN[200] = tM, eN[201] = nn, eN[202] = ne, eN[203] = tx, eN[204] = eT) : eT = eN[204], (0, s.useLayoutEffect)(e_, eT), eN[205] !== eZ || eN[206] !== tZ || eN[207] !== tY || eN[208] !== e2 || eN[209] !== tE || eN[210] !== ti || eN[211] !== tf || eN[212] !== ne ? (eD = () => {
                var e;
                if (null != tj.current) return;
                let t = tQ.current,
                    n = tZ(),
                    r = tX.current ?? n;
                if (tX.current = null, tQ.current = n, null != tE || !ti && t.turnKeys.at(-1) !== r.turnKeys.at(-1) || t === r) return;
                let l = T(eZ),
                    a = tf.getLastScrollDistanceFromBottomPx({
                        includePendingUserScroll: !0
                    });
                if (null != (e2?.() ?? null)) return;
                if (tf.shouldFollowContentGrowth() && (e = a, 0 === l && e <= 24)) return void tf.compensateScrollToDistanceFromBottomPx(0);
                let o = B({
                    distanceFromBottomPx: tY(a),
                    preferLatestVisibleRow: a < l,
                    layout: t,
                    measuredHeightsByKey: t_.current,
                    nextLayout: r,
                    viewportHeightPx: tT.current.viewportHeightPx
                });
                if (null == o) return;
                let s = tf.getUnroundedScrollDistanceFromBottomPx(a),
                    i = function(e) {
                        let {
                            anchorKey: t,
                            distanceFromBottomPx: n,
                            nextLayout: r,
                            previousLayout: l
                        } = e, a = l.turnIndexByKey.get(t), o = r.turnIndexByKey.get(t);
                        if (null == a || null == o) return null;
                        let s = (l.bottomOffsetsPx[a] ?? 0) + (l.heightsPx[a] ?? 0);
                        return Math.max(0, n + ((r.bottomOffsetsPx[o] ?? 0) + (r.heightsPx[o] ?? 0)) - s)
                    }({
                        anchorKey: o,
                        distanceFromBottomPx: s,
                        nextLayout: r,
                        previousLayout: t
                    });
                null != i && (i !== s || t.totalHeightPx !== r.totalHeightPx) && (ne(D(i, l), tT.current.viewportHeightPx), tf.compensateScrollToDistanceFromBottomPx(i))
            }, eN[205] = eZ, eN[206] = tZ, eN[207] = tY, eN[208] = e2, eN[209] = tE, eN[210] = ti, eN[211] = tf, eN[212] = ne, eN[213] = eD) : eD = eN[213], eN[214] !== eZ || eN[215] !== tZ || eN[216] !== tY || eN[217] !== e2 || eN[218] !== tC || eN[219] !== tE || eN[220] !== ti || eN[221] !== tf || eN[222] !== ne ? (eK = [eZ, tZ, tY, e2, tC, tE, ti, tf, ne], eN[214] = eZ, eN[215] = tZ, eN[216] = tY, eN[217] = e2, eN[218] = tC, eN[219] = tE, eN[220] = ti, eN[221] = tf, eN[222] = ne, eN[223] = eK) : eK = eN[223], (0, s.useLayoutEffect)(eD, eK), eN[224] !== tE || eN[225] !== nt || eN[226] !== t0 || eN[227] !== ne ? (eH = () => {
                null == tE && null == tj.current && (ne(tT.current.distanceFromBottomPx, tT.current.viewportHeightPx), t0(), nt(tT.current.distanceFromBottomPx, tT.current.viewportHeightPx, !1))
            }, eN[224] = tE, eN[225] = nt, eN[226] = t0, eN[227] = ne, eN[228] = eH) : eH = eN[228], eN[229] !== tC || eN[230] !== tE || eN[231] !== nt || eN[232] !== t0 || eN[233] !== ne ? (eR = [tC, tE, nt, t0, ne], eN[229] = tC, eN[230] = tE, eN[231] = nt, eN[232] = t0, eN[233] = ne, eN[234] = eR) : eR = eN[234], (0, s.useLayoutEffect)(eH, eR), eN[235] !== t7 ? (eF = () => {
                t7()
            }, eN[235] = t7, eN[236] = eF) : eF = eN[236], (0, s.useLayoutEffect)(eF), eN[237] !== tp || eN[238] !== e6 ? (eA = e6 ?? tp.at(-1)?.turnKey, eN[237] = tp, eN[238] = e6, eN[239] = eA) : eA = eN[239];
            let ny = eA;
            eN[240] !== eX ? (ej = (0, a.b)("relative shrink-0", eX), eN[240] = eX, eN[241] = ej) : ej = eN[241], eN[242] !== tC.totalHeightPx ? (eL = {
                height: tC.totalHeightPx
            }, eN[242] = tC.totalHeightPx, eN[243] = eL) : eL = eN[243];
            let nv = `${tC.topOffsetsPx[tJ.startIndex]??0}px`;
            eN[244] !== nv ? (eO = {
                marginTop: nv
            }, eN[244] = nv, eN[245] = eO) : eO = eN[245];
            let nw = t3.map(e => {
                let {
                    entry: t,
                    turnIndex: n
                } = e;
                return (0, r.jsx)(M, {
                    entry: t,
                    gapBeforePx: n === tJ.startIndex ? 0 : tC.gapsBeforePx[n] ?? 0,
                    retainedTopPx: n < tJ.startIndex || n >= tJ.endIndex ? tC.topOffsetsPx[n] : void 0,
                    latestTurnFollowContentRef: n === tp.length - 1 && null != eJ ? nh : void 0,
                    latestTurnFooter: t.turnKey === ny ? e5 : void 0,
                    RowComponent: eG,
                    measuredHeightPx: null == tw[t.turnKey] ? void 0 : tC.heightsPx[n],
                    constrainedHeightPx: n !== tp.length - 1 && tE?.turnKey !== t.turnKey && null == tw[t.turnKey] ? tC.heightsPx[n] : void 0,
                    observeTurnElement: nu
                }, t.turnKey)
            });
            return eN[246] !== eO || eN[247] !== nw ? (ez = (0, r.jsx)("div", {
                className: "flex flex-col",
                style: eO,
                children: nw
            }), eN[246] = eO, eN[247] = nw, eN[248] = ez) : ez = eN[248], eN[249] !== t$ || eN[250] !== ej || eN[251] !== eL || eN[252] !== ez ? (eq = (0, r.jsx)("div", {
                ref: t$,
                className: ej,
                style: eL,
                children: ez
            }), eN[249] = t$, eN[250] = ej, eN[251] = eL, eN[252] = ez, eN[253] = eq) : eq = eN[253], eq
        }

        function k(e, t) {
            return e.turnIndex - t.turnIndex
        }

        function I() {
            return new H
        }
        let M = (0, s.memo)(function(e) {
            let t, n, o, s, i, c, u = (0, l.c)(24),
                {
                    entry: d,
                    gapBeforePx: h,
                    latestTurnFollowContentRef: m,
                    latestTurnFooter: p,
                    RowComponent: f,
                    constrainedHeightPx: x,
                    measuredHeightPx: y,
                    retainedTopPx: v,
                    observeTurnElement: w
                } = e,
                {
                    turnKey: b
                } = d;
            u[0] !== w || u[1] !== b ? (t = e => w(b, e), u[0] = w, u[1] = b, u[2] = t) : t = u[2];
            let P = (0, g.a)(t),
                S = null != v && "absolute inset-x-0",
                C = null != x && "overflow-hidden";
            u[3] !== S || u[4] !== C ? (n = (0, a.b)(S, C), u[3] = S, u[4] = C, u[5] = n) : n = u[5];
            let k = y ?? x,
                I = null == v ? h : 0,
                M = null == y ? d.minHeightPx : void 0;
            return u[6] !== v || u[7] !== k || u[8] !== I || u[9] !== M ? (o = {
                height: k,
                marginTop: I,
                minHeight: M,
                top: v
            }, u[6] = v, u[7] = k, u[8] = I, u[9] = M, u[10] = o) : o = u[10], u[11] !== f || u[12] !== d || u[13] !== m || u[14] !== p ? (s = (0, r.jsx)(f, {
                entry: d,
                latestTurnFooter: p,
                latestTurnFollowContentRef: m
            }), u[11] = f, u[12] = d, u[13] = m, u[14] = p, u[15] = s) : s = u[15], u[16] !== P || u[17] !== s || u[18] !== b ? (i = (0, r.jsx)("div", {
                ref: P,
                className: "[&_[data-virtualized-turn-content]]:[content-visibility:visible]",
                "data-turn-key": b,
                children: s
            }), u[16] = P, u[17] = s, u[18] = b, u[19] = i) : i = u[19], u[20] !== i || u[21] !== n || u[22] !== o ? (c = (0, r.jsx)("div", {
                className: n,
                style: o,
                children: i
            }), u[20] = i, u[21] = n, u[22] = o, u[23] = c) : c = u[23], c
        });

        function E(e) {
            var t, n;
            let {
                current: r,
                distanceFromBottomPx: l,
                layout: a,
                viewportHeightPx: o
            } = e, s = Math.min(l, a.totalHeightPx), i = w({
                distanceFromBottomPx: s,
                layout: a,
                overscanCount: 2,
                viewportHeightPx: o
            }), c = (t = r.renderedRange, n = i, t.startIndex <= n.startIndex && t.endIndex >= n.endIndex) ? r.renderedRange : i;
            return r.distanceFromBottomPx === s && r.viewportHeightPx === o && r.renderedRange.startIndex === c.startIndex && r.renderedRange.endIndex === c.endIndex && _(r.turnKeys, a.turnKeys) ? r : {
                distanceFromBottomPx: s,
                renderedRange: c,
                turnKeys: a.turnKeys,
                viewportHeightPx: o
            }
        }

        function B(e) {
            let {
                distanceFromBottomPx: t,
                preferLatestVisibleRow: n,
                layout: r,
                measuredHeightsByKey: l,
                nextLayout: a,
                viewportHeightPx: o
            } = e, s = w({
                distanceFromBottomPx: t,
                layout: r,
                overscanCount: 0,
                viewportHeightPx: Math.max(0, o + Math.min(0, t))
            }), i = null;
            for (let e = s.startIndex; e < s.endIndex; e += 1) {
                let s = r.turnKeys[e];
                if (null != s && !r.gapKeys.has(s) && (!r.collapseEmptyRows || (r.heightsPx[e] ?? 0) > 0) && null != l[s] && a.turnIndexByKey.has(s) && (r.bottomOffsetsPx[e] ?? 0) < t + o && (r.bottomOffsetsPx[e] ?? 0) + (r.heightsPx[e] ?? 0) > t) {
                    if (n) i = s;
                    else if (null == i && (i = s), (r.bottomOffsetsPx[e] ?? 0) + (r.heightsPx[e] ?? 0) <= t + o) return s
                }
            }
            return i
        }

        function _(e, t) {
            return e === t || e.length === t.length && e.every((e, n) => e === t[n])
        }

        function T(e) {
            return Math.max(0, e?.() ?? 0)
        }

        function D(e, t) {
            return Math.max(0, e - t)
        }

        function K(e) {
            let {
                scrollElement: t,
                turnElement: n,
                windowZoom: r
            } = e;
            return null == t || null == n ? 0 : (0, c.b)(n.getBoundingClientRect().bottom - t.getBoundingClientRect().bottom, r)
        }
        class H {
            request = null;
            listeners = new Set;
            getSnapshot = () => this.request;
            subscribe = e => (this.listeners.add(e), () => {
                this.listeners.delete(e)
            });
            replace(e) {
                if (this.request === e) return;
                let t = this.request;
                for (let n of (this.request = e, t?.complete(), this.listeners)) n()
            }
        }
    }),
    gOnr: (function(e, t, n) {
        var r = n("QosV"),
            l = n("BolX"),
            a = n("zd8w"),
            o = n("TSib"),
            s = n("ipIJ"),
            i = n("Sd8U"),
            c = n("tSEg"),
            u = n("DRR4"),
            d = n("qZWE");
        n.d(t, {}, {
            a: function(e) {
                let t, n, h, m, g, p = (0, r.c)(14);
                p[0] !== e ? (t = void 0 === e ? {} : e, p[0] = e, p[1] = t) : t = p[1];
                let {
                    transcriptMcpAppIds: f,
                    blockedWidgetSource: x,
                    shouldBlockExternalEgress: y
                } = t, v = void 0 !== y && y, w = (0, l.y)(c.a), b = (0, l.y)(i.a), P = (0, l.z)(d.i), S = (0, l.z)(o.w);
                return p[2] !== S || p[3] !== x || p[4] !== b || p[5] !== P || p[6] !== w || p[7] !== v || p[8] !== f ? (n = () => {
                    for (let [e, t] of("chatgpt-thread" === w.value.routeKind && (0, s.b)(b, S.filter(e => v || null != x && (e.widgetSource ?? "descriptor") === x)), P))(v || null != x && (t.content.mcpAppScope.widgetSource ?? "descriptor") === x || t.hostedInThreadScrollLayout && f?.has(e) === !1) && (0, d.z)(w, e)
                }, h = [S, x, f, b, P, w, v], p[2] = S, p[3] = x, p[4] = b, p[5] = P, p[6] = w, p[7] = v, p[8] = f, p[9] = n, p[10] = h) : (n = p[9], h = p[10]), (0, a.useLayoutEffect)(n, h), p[11] !== w ? (m = () => {
                    (0, u.g)(w)
                }, g = [w], p[11] = w, p[12] = m, p[13] = g) : (m = p[12], g = p[13]), (0, a.useLayoutEffect)(m, g), null
            }
        })
    }),
    Mbqw: (function(e, t, n) {
        n.d(t, {}, {
            a: {
                duration: .2,
                ease: [.16, 1, .3, 1]
            },
            b: {
                duration: .28,
                ease: [.33, 1, .68, 1]
            },
            c: {
                duration: 0
            }
        })
    }),
    yzQ9: (function(e, t, n) {
        var r = n("QosV"),
            l = n("BolX"),
            a = n("zd8w"),
            o = n("jqIZ"),
            s = n("Cslg"),
            i = n("TS05"),
            c = n("tSEg");
        n.d(t, {}, {
            a: function(e) {
                let t, n, u, d = (0, r.c)(18),
                    {
                        ready: h,
                        onNavigate: m
                    } = e,
                    g = (0, l.y)(c.a),
                    p = (0, l.z)(s.f),
                    f = (0, o.Y)(),
                    x = f.state,
                    y = x?.sidebarArea === "scheduled";
                d[0] !== p || d[1] !== f.key ? (t = {
                    locationKey: f.key,
                    accountId: p
                }, d[0] = p, d[1] = f.key, d[2] = t) : t = d[2];
                let v = (0, l.x)(i.a, t),
                    w = (0, a.useEffectEvent)(m);
                return d[3] !== p || d[4] !== v || d[5] !== f.key || d[6] !== w || d[7] !== h || d[8] !== y || d[9] !== g ? (n = () => {
                    if (!y || !h || v) return;
                    let e = new AbortController;
                    return w(e.signal).then(() => {
                        e.signal.aborted || g.set(i.a, {
                            locationKey: f.key,
                            accountId: p
                        }, !0)
                    }), () => e.abort()
                }, d[3] = p, d[4] = v, d[5] = f.key, d[6] = w, d[7] = h, d[8] = y, d[9] = g, d[10] = n) : n = d[10], d[11] !== p || d[12] !== v || d[13] !== f.key || d[14] !== h || d[15] !== y || d[16] !== g ? (u = [p, v, f.key, h, y, g], d[11] = p, d[12] = v, d[13] = f.key, d[14] = h, d[15] = y, d[16] = g, d[17] = u) : u = d[17], (0, a.useEffect)(n, u), null
            }
        })
    }),
    yLzP: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            a = n("oyxz"),
            o = n("Sm6l"),
            s = n("RNul");
        n.d(t, {}, {
            a: function(e) {
                let t, n, i = (0, l.c)(5),
                    {
                        ref: c,
                        onRetry: u
                    } = e;
                return i[0] !== u ? (t = null != u ? (0, r.jsx)(o.a, {
                    color: "secondary",
                    onClick: u,
                    children: (0, r.jsx)(a.a, {
                        id: "chatgpt.pagination.retry",
                        defaultMessage: "Try again",
                        description: "Button to retry loading older conversation messages after a failure"
                    })
                }) : (0, r.jsxs)("div", {
                    role: "status",
                    children: [(0, r.jsx)(s.a, {}), (0, r.jsx)("span", {
                        className: "sr-only",
                        children: (0, r.jsx)(a.a, {
                            id: "chatgpt.pagination.loading",
                            defaultMessage: "Loading older messages…",
                            description: "Accessible status while an older page of conversation messages loads"
                        })
                    })]
                }), i[0] = u, i[1] = t) : t = i[1], i[2] !== c || i[3] !== t ? (n = (0, r.jsx)("div", {
                    ref: c,
                    className: "flex justify-center py-4",
                    children: t
                }), i[2] = c, i[3] = t, i[4] = n) : n = i[4], n
            }
        })
    }),
    KFm7: (function(e, t, n) {
        var r = n("acLe"),
            l = n("jCHb"),
            a = n("p5Yg"),
            o = n("V8uZ"),
            s = n("uYx2");
        let i = 2 / 3;

        function c(e) {
            let t = Number.parseFloat(e.style.getPropertyValue("--thread-scroll-padding-bottom") || e.style.getPropertyValue("--thread-scroll-seeded-padding-bottom"));
            return Number.isFinite(t) ? t : 0
        }

        function u(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = Math.max(0, e.clientHeight - c(e));
            return t ? n : Math.max(0, Math.min(n * i, n - 240))
        }
        n.d(t, {}, {
            a: class {
                scrollController;
                height = (0, r.c)(0);
                element = null;
                prefersReducedMotion = !0;
                onReleased;
                pendingPlacement = null;
                stopPlacementAnimation = null;
                canPrepareThreadEndContent = !1;
                pendingUserScrollDecayPx = 0;
                pendingUserScrollElement = null;
                userScrollDecayAnimationFrame = null;
                viewportHeightPx = null;
                scrollPaddingBottomPx = null;
                placementTarget;
                constructor(e) {
                    this.scrollController = e
                }
                updateContext = (e, t, n) => {
                    this.scrollController = e, this.prefersReducedMotion = t, this.onReleased = n
                };
                setElement = e => {
                    this.element = e, null != e && (e.style.height = `${this.height.get()}px`)
                };
                getHeightPx = () => this.height.get();
                isPlacementAnimating = () => null != this.stopPlacementAnimation;
                getElement = () => this.element;
                ensureScrollRoomForAnchor = e => {
                    let t = this.scrollController.getScrollElement();
                    if (!this.element || !t) return;
                    let n = e - (0, s.b)(t);
                    if (n <= 0) return;
                    let r = this.height.get() + n;
                    if (t.scrollHeight <= t.clientHeight) {
                        let n = r + t.clientHeight;
                        this.writeHeight(n), r = n - ((0, s.b)(t) - e)
                    }
                    this.writeHeight(r)
                };
                stop = () => {
                    this.stopPlacementAnimation?.(), this.stopPlacementAnimation = null
                };
                getPendingPlacementSignal = () => (null == this.pendingPlacement && (this.pendingPlacement = new AbortController), this.pendingPlacement.signal);
                interruptPlacement = () => {
                    this.pendingPlacement?.abort(), this.pendingPlacement = null, this.stop()
                };
                holdViewport = () => {
                    this.canPrepareThreadEndContent = !1, this.interruptPlacement()
                };
                writeHeight = e => {
                    this.height.set(e), null != this.element && (this.element.style.height = `${e}px`)
                };
                consumeGrowth = e => {
                    this.writeHeight(Math.max(0, this.height.get() - Math.max(0, e)))
                };
                trimTo = e => {
                    let t = this.height.get(),
                        n = Math.max(0, Math.min(t, e));
                    if (t <= n) return !1;
                    let r = this.scrollController.getScrollElement(),
                        l = null == r ? 0 : (0, s.b)(r);
                    return this.writeHeight(n), null != r && this.scrollController.compensateScrollToDistanceFromBottomPx(Math.max(0, l - (t - n))), 0 === n && this.onReleased?.(), !0
                };
                cancelPendingUserScrollDecay = () => {
                    null != this.userScrollDecayAnimationFrame && (window.cancelAnimationFrame(this.userScrollDecayAnimationFrame), this.userScrollDecayAnimationFrame = null), this.pendingUserScrollDecayPx = 0, this.pendingUserScrollElement = null
                };
                clear = () => {
                    this.holdViewport(), this.cancelPendingUserScrollDecay(), this.writeHeight(0), this.placementTarget = void 0
                };
                prepareThreadEndContent = () => {
                    let e = this.scrollController.getScrollElement(),
                        t = this.element;
                    if (!this.canPrepareThreadEndContent || null != this.stopPlacementAnimation || null == e || e.clientHeight <= 0 || null == t) return;
                    let n = e.getBoundingClientRect(),
                        r = n.bottom - c(e) * (n.height / e.clientHeight);
                    t.getBoundingClientRect().top > r || (this.canPrepareThreadEndContent = !1, this.cancelPendingUserScrollDecay(), this.consumeGrowth((0, s.b)(e)), this.scrollController.compensateScrollToDistanceFromBottomPx(0))
                };
                collapseIfHidden = () => {
                    let e = this.scrollController.getScrollElement();
                    if (0 >= this.height.get() || null != this.stopPlacementAnimation || null == e || null == this.element) return;
                    let t = e.getBoundingClientRect(),
                        n = t.height / e.clientHeight,
                        r = t.bottom - c(e) * n;
                    this.element.getBoundingClientRect().top < r - n || this.trimTo(0)
                };
                flushUserScrollDecay = () => {
                    this.userScrollDecayAnimationFrame = null;
                    let e = this.pendingUserScrollDecayPx,
                        t = this.pendingUserScrollElement;
                    this.pendingUserScrollDecayPx = 0, this.pendingUserScrollElement = null, t === this.scrollController.getScrollElement() && this.trimTo(this.height.get() - e) && this.collapseIfHidden()
                };
                handleScroll = e => {
                    let t = this.scrollController.getScrollElement();
                    this.height.get() > 0 && null != t && t.scrollHeight <= t.clientHeight && 0 === this.scrollController.getUnroundedScrollDistanceFromBottomPx(e) && this.clear()
                };
                handleUserScroll = (e, t) => {
                    if (this.interruptPlacement(), null == t) return;
                    if (e < t && (0, s.d)(e)) return void this.clear();
                    let n = e - t;
                    if (n <= 0) return;
                    this.canPrepareThreadEndContent = !1;
                    let r = this.scrollController.getScrollElement();
                    this.pendingUserScrollElement !== r && this.cancelPendingUserScrollDecay(), this.pendingUserScrollDecayPx += n, null == this.userScrollDecayAnimationFrame && (this.pendingUserScrollElement = r, this.userScrollDecayAnimationFrame = window.requestAnimationFrame(this.flushUserScrollDecay))
                };
                reconcileViewport = () => {
                    let e = this.scrollController.getScrollElement();
                    if (null != e && e.clientHeight > 0) {
                        let t = e.clientHeight,
                            n = c(e),
                            r = t !== this.viewportHeightPx || n !== this.scrollPaddingBottomPx;
                        this.viewportHeightPx = t, this.scrollPaddingBottomPx = n;
                        let l = r && null != this.stopPlacementAnimation,
                            a = this.canPrepareThreadEndContent;
                        l && (this.canPrepareThreadEndContent = !1, this.stop());
                        let o = this.trimTo(u(e, null != this.placementTarget));
                        l && (o || this.scrollController.compensateScrollToDistanceFromBottomPx((0, s.b)(e)), this.animatePlacement(), this.canPrepareThreadEndContent = a)
                    }
                };
                place = e => {
                    let t = this.scrollController.getScrollElement();
                    if (null == t) return;
                    this.canPrepareThreadEndContent = !1, this.cancelPendingUserScrollDecay(), this.interruptPlacement(), this.placementTarget = e, this.viewportHeightPx = t.clientHeight, this.scrollPaddingBottomPx = c(t);
                    let n = this.height.get(),
                        r = (0, s.b)(t),
                        l = this.getPlacementDistancePx(t);
                    this.scrollController.holdViewport(), this.writeHeight(null == e ? u(t) : Math.max(0, n - l + 1)), this.prefersReducedMotion || this.scrollController.compensateScrollToDistanceFromBottomPx(r + this.height.get() - n), this.animatePlacement(), this.canPrepareThreadEndContent = !0
                };
                animatePlacement = () => {
                    let e = this.scrollController.getScrollElement();
                    if (null == e) return;
                    let t = Math.max(1, this.getPlacementDistancePx(e));
                    if (!this.prefersReducedMotion) {
                        let e = this.scrollController.getLastScrollDistanceFromBottomPx() - t;
                        if (e > 0) {
                            let t = 0,
                                n = !1,
                                r = (0, l.a)(0, e, {
                                    ...o.g,
                                    driver: e => {
                                        let t = 0,
                                            n = n => {
                                                let {
                                                    delta: r
                                                } = n;
                                                e(t += r)
                                            };
                                        return {
                                            start: () => {
                                                a.b.update(n, !0)
                                            },
                                            stop: () => {
                                                (0, a.a)(n)
                                            },
                                            now: () => t
                                        }
                                    },
                                    onUpdate: e => {
                                        if (n) return;
                                        let r = this.scrollController.getUnroundedScrollDistanceFromBottomPx(this.scrollController.getLastScrollDistanceFromBottomPx());
                                        this.scrollController.compensateScrollToDistanceFromBottomPx(Math.max(1, r - (e - t))), t = e
                                    },
                                    onComplete: () => {
                                        this.stopPlacementAnimation = null, this.scrollController.compensateScrollToDistanceFromBottomPx(this.scrollController.getUnroundedScrollDistanceFromBottomPx(this.scrollController.getLastScrollDistanceFromBottomPx()))
                                    }
                                });
                            this.stopPlacementAnimation = () => {
                                n = !0, r.stop()
                            };
                            return
                        }
                    }
                    this.scrollController.scrollToDistanceFromBottomPx(t, "instant")
                };
                getPlacementDistancePx = e => {
                    if (null == this.placementTarget) return 1;
                    let t = e.getBoundingClientRect(),
                        n = t.height / (e.offsetHeight || e.clientHeight),
                        r = Number.parseFloat(getComputedStyle(e).paddingTop) || 0;
                    return (0, s.b)(e) - (this.placementTarget.getBoundingClientRect().top - t.top) / n + e.clientTop + r
                }
            },
            b: c
        })
    }),
    Ho4C: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            a = n("zd8w"),
            o = n("T1PX"),
            s = n("ZYy5"),
            i = n("m8On"),
            c = n("bIvi"),
            u = n("lsfk");
        let d = Array.from({
            length: 101
        }, (e, t) => t / 100);
        n.d(t, {}, {
            a: function(e) {
                let t, n, h, m, g, p, f, x, y, v, w, b, P, S, C = (0, l.c)(31),
                    {
                        controller: k,
                        onReleased: I
                    } = e,
                    M = (0, u.b)(),
                    E = (0, a.useContext)(s.a),
                    B = (0, o.a)(),
                    {
                        getScrollElement: _
                    } = M;
                C[0] !== k ? (t = e => {
                    k.setElement(e)
                }, C[0] = k, C[1] = t) : t = C[1];
                let T = (0, c.a)(t);
                return C[2] !== k || C[3] !== I || C[4] !== B || C[5] !== M ? (n = () => {
                    k.updateContext(M, B, I)
                }, h = [k, M, B, I], C[2] = k, C[3] = I, C[4] = B, C[5] = M, C[6] = n, C[7] = h) : (n = C[6], h = C[7]), (0, a.useInsertionEffect)(n, h), C[8] !== k || C[9] !== _ ? (m = () => {
                    let e = _();
                    if (null == e) return;
                    let t = new AbortController;
                    for (let n of ["wheel", "touchstart", "pointerdown", "keydown"]) e.addEventListener(n, k.interruptPlacement, {
                        capture: !0,
                        passive: !0,
                        signal: t.signal
                    });
                    return () => {
                        t.abort(), k.interruptPlacement()
                    }
                }, g = [k, _], C[8] = k, C[9] = _, C[10] = m, C[11] = g) : (m = C[10], g = C[11]), (0, a.useEffect)(m, g), C[12] !== k.cancelPendingUserScrollDecay ? (p = () => k.cancelPendingUserScrollDecay, C[12] = k.cancelPendingUserScrollDecay, C[13] = p) : p = C[13], C[14] !== k ? (f = [k], C[14] = k, C[15] = f) : f = C[15], (0, a.useEffect)(p, f), C[16] !== k || C[17] !== _ ? (x = () => {
                    let e = _();
                    if (null == e || "u" < typeof IntersectionObserver) return;
                    let t = new IntersectionObserver(k.collapseIfHidden, {
                            root: e,
                            threshold: d
                        }),
                        n = k.getElement();
                    return null != n && t.observe(n), () => t.disconnect()
                }, y = [k, _], C[16] = k, C[17] = _, C[18] = x, C[19] = y) : (x = C[18], y = C[19]), (0, a.useEffect)(x, y), C[20] !== k || C[21] !== M ? (v = () => {
                    let e = M.addScrollListener(k.handleScroll),
                        t = M.addUserScrollListener(k.handleUserScroll);
                    return k.reconcileViewport(), () => {
                        e(), t()
                    }
                }, w = [k, M], C[20] = k, C[21] = M, C[22] = v, C[23] = w) : (v = C[22], w = C[23]), (0, a.useLayoutEffect)(v, w), C[24] !== k || C[25] !== _ || C[26] !== E ? (b = () => {
                    let e = _();
                    if (null == e) return;
                    let t = null,
                        n = () => {
                            null == t && (t = window.requestAnimationFrame(() => {
                                t = null, k.reconcileViewport()
                            }))
                        },
                        r = E ?? (0, i.b)(),
                        l = e.parentElement?.querySelector("[data-thread-scroll-footer]"),
                        a = null == l ? [e] : [e, l];
                    for (let e of a)(0, i.a)({
                        element: e,
                        callback: n,
                        observer: r
                    });
                    return window.addEventListener("resize", n, {
                        passive: !0
                    }), () => {
                        for (let e of a)(0, i.c)({
                            element: e,
                            callback: n,
                            observer: r
                        });
                        null == E && r?.disconnect(), window.removeEventListener("resize", n), null != t && window.cancelAnimationFrame(t)
                    }
                }, P = [k, _, E], C[24] = k, C[25] = _, C[26] = E, C[27] = b, C[28] = P) : (b = C[27], P = C[28]), (0, a.useEffect)(b, P), C[29] !== T ? (S = (0, r.jsx)("div", {
                    ref: T,
                    className: "shrink-0",
                    "aria-hidden": !0
                }), C[29] = T, C[30] = S) : S = C[30], S
            }
        })
    }),
    g3o5: (function(e, t, n) {
        var r = n("SZCv"),
            l = n.n(r),
            a = n("BolX"),
            o = n("OWtl");
        let s = (0, a.u)(o.a, () => new Map),
            i = (0, a.c)(o.a, e => {
                let {
                    get: t
                } = e;
                return [...t(s).keys()]
            }, {
                isEqual: l()
            });
        n.d(t, {}, {
            a: function(e, t) {
                return e.set(s, e => new Map(e).set(t, (e.get(t) ?? 0) + 1)), () => {
                    e.set(s, e => {
                        let n = new Map(e),
                            r = (n.get(t) ?? 1) - 1;
                        return 0 === r ? n.delete(t) : n.set(t, r), n
                    })
                }
            },
            b: i
        })
    }),
    BdYu: (function(e, t, n) {
        var r = n("QosV"),
            l = n("K45w"),
            a = n("p5Yg"),
            o = n("B7sF"),
            s = n("jCHb"),
            i = n("RgeH"),
            c = n("BolX"),
            u = n("zd8w"),
            d = n("I7bK"),
            h = n("QcW8"),
            m = n("gbrq"),
            g = n("kl6F"),
            p = n("eGPX"),
            f = n("Exwq"),
            x = n("w2yL"),
            y = n("KWzM"),
            v = n("GaCK");

        function w(e) {
            return e.isPopoverOpen ? {
                ...e,
                isPopoverOpen: !1
            } : e
        }

        function b(e, t, n, r, l, a) {
            return P({
                isSummaryPanelPinned: t && (a ?? (0, m.z)(!0 === n ? e.get(m.N) : e.get(m.C, n), n)),
                floatingPanelWidth: l,
                mainContentTargetWidth: r
            })
        }

        function P(e) {
            let {
                isSummaryPanelPinned: t,
                floatingPanelWidth: n,
                mainContentTargetWidth: r
            } = e, l = (0, x.c)(r, n);
            return null != n && "overlay" === l ? (0, x.b)({
                displayMode: (0, x.c)(r),
                isPinned: t
            }) : (0, x.b)({
                displayMode: l,
                isPinned: null != n || t,
                panelWidth: n
            })
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, a, o, w, S, C, k, I, M, E, B, _, T, D, K, H, R = (0, r.c)(73);
                R[0] !== e ? (t = void 0 === e ? {} : e, R[0] = e, R[1] = t) : t = R[1];
                let {
                    contentShiftResetKey: F,
                    controlledIsOpen: A,
                    floatingPanelWidth: j,
                    getCurrentPinStateKey: L,
                    isEnabled: O,
                    pinStateKey: z
                } = t, q = void 0 === O || O, N = void 0 === z || z, W = (0, c.y)(g.a), U = (0, c.z)(null == A && !0 === N ? m.N : null), G = (0, c.x)(null == A && !0 !== N ? m.C : null, !0 !== N && N);
                R[2] !== A || R[3] !== G || R[4] !== U || R[5] !== N ? (n = A ?? (0, m.z)(!0 === N ? U : G, N), R[2] = A, R[3] = G, R[4] = U, R[5] = N, R[6] = n) : n = R[6];
                let V = n,
                    Q = (0, c.z)(m.h),
                    X = (0, c.z)(h.G),
                    $ = (0, c.z)(f.g),
                    Z = (0, c.z)(v.b),
                    Y = q && V,
                    J = j ?? 300,
                    ee = q && null == j && (A ?? (Z.isPopoverOpen || "boolean" != typeof N && V)),
                    et = (0, c.z)(p.c),
                    en = (0, u.useContext)(d.c),
                    er = (0, l.a)(0),
                    el = en?.mainContentTargetWidth ?? er;
                R[7] !== j || R[8] !== Y || R[9] !== el ? (a = P({
                    isSummaryPanelPinned: Y,
                    floatingPanelWidth: j,
                    mainContentTargetWidth: el.get()
                }), R[7] = j, R[8] = Y, R[9] = el, R[10] = a) : a = R[10];
                let ea = (0, l.a)(a);
                R[11] !== el ? (o = e => el.on("change", e), R[11] = el, R[12] = o) : o = R[12], R[13] !== el || R[14] !== J ? (w = () => (0, x.c)(el.get(), J), R[13] = el, R[14] = J, R[15] = w) : w = R[15], R[16] !== o || R[17] !== w ? (S = {
                    subscribe: o,
                    getSnapshot: w
                }, R[16] = o, R[17] = w, R[18] = S) : S = R[18];
                let eo = S,
                    es = (0, u.useSyncExternalStore)(eo.subscribe, eo.getSnapshot, eo.getSnapshot),
                    ei = (0, u.useRef)(null);
                R[19] !== ea ? (C = ea.get(), R[19] = ea, R[20] = C) : C = R[20], R[21] !== el ? (k = el.get(), R[21] = el, R[22] = k) : k = R[22], R[23] !== k || R[24] !== C ? (I = {
                    offset: C,
                    width: k
                }, R[23] = k, R[24] = C, R[25] = I) : I = R[25];
                let ec = (0, u.useRef)(I),
                    eu = (0, u.useRef)(!1),
                    ed = (0, u.useRef)(F),
                    eh = (0, u.useRef)(Q),
                    em = (0, u.useRef)(X),
                    eg = Y && null == j;
                R[26] !== es || R[27] !== ee || R[28] !== eg ? (M = (0, x.a)({
                    displayMode: es,
                    isPinned: eg,
                    isPopoverOpen: ee
                }), R[26] = es, R[27] = ee, R[28] = eg, R[29] = M) : M = R[29];
                let ep = M,
                    ef = ep.shouldShow && !$;
                R[30] !== ea || R[31] !== F || R[32] !== A || R[33] !== j || R[34] !== L || R[35] !== X || R[36] !== q || R[37] !== el || R[38] !== N || R[39] !== Q || R[40] !== W ? (E = () => {
                    let e = eh.current !== Q,
                        t = em.current !== X;
                    if (!eu.current && ed.current === F && !e && !t) return;
                    eu.current = !1, ed.current = F, eh.current = Q, em.current = X;
                    let n = b(W, q, L?.() ?? N, el.get(), j, A);
                    ec.current = {
                        offset: n,
                        width: el.get()
                    }, ei.current?.(), ea.jump(n)
                }, B = [ea, F, A, j, L, X, q, el, N, Q, W], R[30] = ea, R[31] = F, R[32] = A, R[33] = j, R[34] = L, R[35] = X, R[36] = q, R[37] = el, R[38] = N, R[39] = Q, R[40] = W, R[41] = E, R[42] = B) : (E = R[41], B = R[42]), (0, u.useLayoutEffect)(E, B);
                let ex = en?.chatPaneWidth ?? el;
                R[43] !== ex || R[44] !== ea || R[45] !== A || R[46] !== j || R[47] !== L || R[48] !== q || R[49] !== el || R[50] !== N || R[51] !== W || R[52] !== et ? (_ = () => {
                    let e = (e, t) => {
                        let n = b(W, q, L?.() ?? N, e, j, A),
                            r = ec.current,
                            l = ea.get();
                        if (r.offset === n && (l === n || r.width === e && !t)) return;
                        if (ec.current = {
                                offset: n,
                                width: e
                            }, ei.current?.(), t || 0 === e || l === n) return void ea.jump(n);
                        let a = ex.get();
                        if (a === e) {
                            let e = (0, s.a)(ea, n, y.a),
                                t = document.activeViewTransition;
                            if (null != t) {
                                e.pause();
                                let n = () => e.play();
                                t.ready.then(n, n)
                            }
                            ei.current = () => e.stop();
                            return
                        }
                        let o = (0, i.a)([a, e], [l, n]),
                            c = ex.on("change", e => {
                                let t = o(e);
                                ea.set(t), t === n && queueMicrotask(c)
                            });
                        ei.current = c
                    };
                    return e(el.get(), et), el.on("change", t => {
                        e(t, et || 0 === el.getPrevious() || W.get(m.h) !== eh.current)
                    })
                }, R[43] = ex, R[44] = ea, R[45] = A, R[46] = j, R[47] = L, R[48] = q, R[49] = el, R[50] = N, R[51] = W, R[52] = et, R[53] = _) : _ = R[53], R[54] !== ex || R[55] !== ea || R[56] !== A || R[57] !== j || R[58] !== L || R[59] !== q || R[60] !== Y || R[61] !== el || R[62] !== N || R[63] !== W || R[64] !== et ? (T = [ex, ea, A, j, L, q, Y, el, N, W, et], R[54] = ex, R[55] = ea, R[56] = A, R[57] = j, R[58] = L, R[59] = q, R[60] = Y, R[61] = el, R[62] = N, R[63] = W, R[64] = et, R[65] = T) : T = R[65], (0, u.useLayoutEffect)(_, T), R[66] === Symbol.for("react.memo_cache_sentinel") ? (D = () => () => {
                    eu.current = !0, ei.current?.()
                }, K = [], R[66] = D, R[67] = K) : (D = R[66], K = R[67]), (0, u.useLayoutEffect)(D, K);
                let ey = ep.shouldHideInlineImmediately || $,
                    ev = $ ? null : ep.visibleSurface;
                return R[68] !== ea || R[69] !== ef || R[70] !== ey || R[71] !== ev ? (H = {
                    contentShift: ea,
                    shouldHideInlineImmediately: ey,
                    shouldShow: ef,
                    visibleSurface: ev
                }, R[68] = ea, R[69] = ef, R[70] = ey, R[71] = ev, R[72] = H) : H = R[72], H
            },
            b: function(e, t) {
                let n, s, i, h, g, p, f = (0, r.c)(15),
                    y = void 0 !== t && t,
                    b = (0, c.z)(m.i),
                    P = (0, c.z)(m.r),
                    S = (0, u.useContext)(d.c),
                    C = (0, l.a)(0),
                    k = S?.mainContentTargetWidth ?? C;
                f[0] !== y || f[1] !== k || f[2] !== e ? (n = () => {
                    var t, n;
                    t = e, n = y ? "overlay" : (0, x.c)(k.get()), t.set(v.b, e => {
                        let t = "overlay" === n && e.isPopoverOpen;
                        return e.displayMode === n && e.isPopoverOpen === t ? e : {
                            displayMode: n,
                            isPopoverOpen: t
                        }
                    })
                }, f[0] = y, f[1] = k, f[2] = e, f[3] = n) : n = f[3];
                let I = n;
                f[4] !== I ? (s = () => {
                    a.b.update(I)
                }, f[4] = I, f[5] = s) : s = f[5], (0, o.a)(k, "change", s), f[6] !== I ? (i = () => (I(), () => (0, a.a)(I)), f[6] = I, f[7] = i) : i = f[7], f[8] !== b || f[9] !== P || f[10] !== I ? (h = [b, P, I], f[8] = b, f[9] = P, f[10] = I, f[11] = h) : h = f[11], (0, u.useLayoutEffect)(i, h), f[12] !== e ? (g = () => () => {
                    e.set(v.b, w)
                }, p = [e], f[12] = e, f[13] = g, f[14] = p) : (g = f[13], p = f[14]), (0, u.useLayoutEffect)(g, p)
            }
        })
    })
};