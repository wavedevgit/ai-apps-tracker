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
            BrowserComposerDisclaimer: () => A,
            BrowserComposerDisclaimerMessage: () => _
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
            h = n("ipGa");

        function m(e) {
            let t, n, a, o, i = (0, l.c)(9),
                {
                    context: c
                } = e;
            i[0] !== c.businessName ? (t = c.businessName?.trim(), i[0] = c.businessName, i[1] = t) : t = i[1];
            let u = t;
            return i[2] !== u ? (n = (0, r.jsx)("p", {
                children: u ? (0, r.jsx)(s.a, {
                    id: "chatgpt.ads.business_agent.composer_disclosure.aggregate_usage.body.named",
                    defaultMessage: "{businessName} can’t see this chat or your personal info — just overall usage trends to help improve their AI agent.",
                    values: {
                        businessName: u
                    },
                    description: "Privacy disclosure below the composer in every organic or sponsored Business Agent chat. It reassures users that the business cannot see the conversation or personal information and receives only aggregate usage trends to improve its AI agent. The {businessName} placeholder is the advertiser-provided business display name and may be long. Allow the sentence to wrap."
                }) : (0, r.jsx)(s.a, {
                    id: "chatgpt.ads.business_agent.composer_disclosure.aggregate_usage.body.unnamed",
                    defaultMessage: "This business can’t see this chat or your personal info — just overall usage trends to help improve their AI agent.",
                    description: "Privacy disclosure below the composer in every organic or sponsored Business Agent chat when no business display name is available. It reassures users that the business operating the agent cannot see the conversation or personal information and receives only aggregate usage trends to improve its AI agent. Allow the sentence to wrap."
                })
            }), i[2] = u, i[3] = n) : n = i[3], i[4] !== c.notice ? (a = c.notice?.trim() ? (0, r.jsx)("p", {
                children: c.notice
            }) : null, i[4] = c.notice, i[5] = a) : a = i[5], i[6] !== n || i[7] !== a ? (o = (0, r.jsxs)("div", {
                className: "flex flex-col gap-1",
                children: [n, a]
            }), i[6] = n, i[7] = a, i[8] = o) : o = i[8], o
        }
        var g = n("YJm0"),
            f = n("fzVa"),
            p = n("dQRk"),
            x = n("g2p6"),
            y = n("jAnS"),
            v = n("AcSY"),
            w = n("ZtSy"),
            P = n("Ho8f"),
            b = n("hZax"),
            S = n("fNyS"),
            C = n("zd8w"),
            k = n("IL1g"),
            I = n("JNtf"),
            E = n("mUDD"),
            B = n("ibLK"),
            M = n("jVko"),
            T = n("zWHk");
        let D = new WeakSet;

        function K(e) {
            let t, n, a, o, i = (0, l.c)(10),
                {
                    children: c
                } = e,
                u = (0, B.a)("(width < 640px)"),
                d = (0, C.useContext)(M.a);
            i[0] !== d ? (t = e => {
                if (null == d) return H;
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
                g = (0, C.useSyncExternalStore)(h, m, R);
            if (!u) {
                let e;
                return i[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(k.b, {}), i[4] = e) : e = i[4], e
            }
            return i[5] !== g ? (a = g && (0, r.jsx)(I.a, {
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
                        title: (0, r.jsx)(I.d, {
                            children: (0, r.jsx)(s.a, {
                                ...F.companyInformation
                            })
                        })
                    }), (0, r.jsx)(E.e, {
                        children: (0, r.jsx)(k.b, {
                            inDialog: !0
                        })
                    })]
                })
            }), i[5] = g, i[6] = a) : a = i[6], i[7] !== c || i[8] !== a ? (o = (0, r.jsxs)("div", {
                className: "flex flex-col items-center gap-1",
                children: [c, a]
            }), i[7] = c, i[8] = a, i[9] = o) : o = i[9], o
        }

        function R() {
            return !0
        }

        function H() {}
        let F = (0, i.f)({
            companyInformation: {
                id: "chatgpt.compliance.korean_regulatory.company_information.label",
                defaultMessage: "Company info",
                description: "Short footer link and dialog title shown to Korean-language ChatGPT users on their signed-in or signed-out mobile-web landing page. Selecting the link opens OpenAI's legally required company registration, address, support, hosting, terms, and business disclosures. Keep the label short for the mobile footer."
            }
        });
        var j = n("RGWz");

        function A(e) {
            let t, n, a = (0, l.c)(7),
                o = "home" === e.placement ? "empty:hidden" : void 0,
                s = e.placement ?? "thread",
                i = "home" === e.placement ? void 0 : L;
            return a[0] !== e || a[1] !== i ? (t = (0, r.jsx)(_, {
                ...e,
                renderOrdinaryDisclaimer: i
            }), a[0] = e, a[1] = i, a[2] = t) : t = a[2], a[3] !== o || a[4] !== s || a[5] !== t ? (n = (0, r.jsx)(P.a, {
                browser: !0,
                children: (0, r.jsx)(S.a, {
                    className: o,
                    placement: s,
                    children: t
                })
            }), a[3] = o, a[4] = s, a[5] = t, a[6] = n) : n = a[6], n
        }

        function L(e) {
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(j.b, {
                        children: e
                    })
                }), null]
            })
        }

        function _(e) {
            let t, n, i, u = (0, l.c)(28),
                {
                    aiServiceDisclaimer: d,
                    conversationId: g,
                    hasUserMessage: f,
                    isTemporaryChat: x,
                    ordinaryDisclaimer: w,
                    pendingWorkspaceDisclaimer: P,
                    placement: b,
                    regulatedConnectorKindOverride: S,
                    renderOrdinaryDisclaimer: C
                } = e,
                k = void 0 === b ? "thread" : b,
                I = (0, o.a)(),
                {
                    search: E
                } = (0, c.X)(),
                {
                    data: B
                } = (0, v.i)(),
                M = (0, a.x)(p.t, g ?? null),
                T = (0, a.x)(p.S, M?.status === "ready" && void 0 === S ? g ?? null : null);
            u[0] !== f || u[1] !== x || u[2] !== k || u[3] !== E ? (t = (x ?? (0, y.i)(E)) && !(f ?? "thread" === k), u[0] = f, u[1] = x, u[2] = k, u[3] = E, u[4] = t) : t = u[4];
            let D = t;
            if (null == B) return null == M ? P ?? null : null;
            if (null != M) {
                let e;
                if ("ready" !== M.status) return null;
                let t = void 0 !== S ? S : T;
                if (null != t) {
                    let e;
                    return u[5] !== t || u[6] !== w ? (e = (0, r.jsx)(W, {
                        ordinaryDisclaimer: w,
                        regulatedConnectorKind: t
                    }), u[5] = t, u[6] = w, u[7] = e) : e = u[7], e
                }
                return u[8] !== M.context ? (e = (0, r.jsx)(m, {
                    context: M.context
                }), u[8] = M.context, u[9] = e) : e = u[9], e
            }
            if ("workspace" === B.structure) {
                let e;
                return u[10] !== B || u[11] !== P || u[12] !== C || u[13] !== D ? (e = (0, r.jsx)(U, {
                    account: B,
                    pendingWorkspaceDisclaimer: P,
                    isTemporaryChat: D,
                    renderOrdinaryDisclaimer: C
                }), u[10] = B, u[11] = P, u[12] = C, u[13] = D, u[14] = e) : e = u[14], e
            }
            u[15] !== w || u[16] !== C ? (n = C?.(w ?? (0, r.jsx)(s.a, {
                ...V.personal
            })) ?? w, u[15] = w, u[16] = C, u[17] = n) : n = u[17], u[18] !== B.id || u[19] !== d || u[20] !== g || u[21] !== k || u[22] !== S || u[23] !== D || u[24] !== n ? (i = (0, r.jsx)(O, {
                accountId: B.id,
                aiServiceDisclaimer: d,
                conversationId: g,
                isTemporaryChat: D,
                ordinaryDisclaimer: n,
                placement: k,
                regulatedConnectorKindOverride: S
            }), u[18] = B.id, u[19] = d, u[20] = g, u[21] = k, u[22] = S, u[23] = D, u[24] = n, u[25] = i) : i = u[25];
            let R = i;
            if ("home" === k && !f && !D && !(0, h.a)() && "ko" === new Intl.Locale(I.locale).language) {
                let e;
                return u[26] !== R ? (e = (0, r.jsx)(K, {
                    children: R
                }), u[26] = R, u[27] = e) : e = u[27], e
            }
            return R
        }

        function O(e) {
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
                h = (0, b.h)("1831960162");
            if (!(0, b.i)("1831960162") && !h) {
                let e;
                return n[0] !== a || n[1] !== o || n[2] !== s || n[3] !== i || n[4] !== c || n[5] !== u || n[6] !== d ? (e = (0, r.jsx)(z, {
                    accountId: a,
                    aiServiceDisclaimer: o,
                    conversationId: s,
                    isTemporaryChat: i,
                    ordinaryDisclaimer: c,
                    placement: u,
                    regulatedConnectorKindOverride: d
                }), n[0] = a, n[1] = o, n[2] = s, n[3] = i, n[4] = c, n[5] = u, n[6] = d, n[7] = e) : e = n[7], e
            }
            return n[8] !== o || n[9] !== s || n[10] !== i || n[11] !== c || n[12] !== u || n[13] !== d || n[14] !== h ? (t = (0, r.jsx)(N, {
                aiServiceDisclaimer: o,
                conversationId: s,
                isTemporaryChat: i,
                ordinaryDisclaimer: c,
                placement: u,
                regulatedConnectorKindOverride: d,
                showAiServiceDisclaimer: h
            }), n[8] = o, n[9] = s, n[10] = i, n[11] = c, n[12] = u, n[13] = d, n[14] = h, n[15] = t) : t = n[15], t
        }

        function z(e) {
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
                p = (0, a.z)(x.n),
                {
                    data: y
                } = (0, a.z)(f.b),
                v = null != g && p === o,
                w = (0, b.h)(!!v && (null == y || "under_18" === y.age_status) && "1639821169");
            return v ? (n[0] !== s || n[1] !== i || n[2] !== c || n[3] !== u || n[4] !== h || n[5] !== m || n[6] !== w ? (t = (0, r.jsx)(N, {
                aiServiceDisclaimer: s,
                conversationId: i,
                isTemporaryChat: c,
                ordinaryDisclaimer: u,
                placement: h,
                regulatedConnectorKindOverride: m,
                showAiServiceDisclaimer: w
            }), n[0] = s, n[1] = i, n[2] = c, n[3] = u, n[4] = h, n[5] = m, n[6] = w, n[7] = t) : t = n[7], t) : null
        }

        function N(e) {
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
            let f = t;
            if (c) {
                let e;
                return a[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(s.a, {
                    ...V.temporaryChat
                }), a[1] = e) : e = a[1], e
            }
            if (g) {
                let e;
                return a[2] !== o ? (e = o ?? (0, r.jsx)(s.a, {
                    ...V.aiService
                }), a[2] = o, a[3] = e) : e = a[3], e
            }
            if (void 0 !== m) {
                let e;
                return null == m && (f || "home" === d) ? null : (a[4] !== u || a[5] !== m ? (e = (0, r.jsx)(W, {
                    ordinaryDisclaimer: u,
                    regulatedConnectorKind: m
                }), a[4] = u, a[5] = m, a[6] = e) : e = a[6], e)
            }
            return "home" === d ? null : (a[7] !== i || a[8] !== u ? (n = (0, r.jsx)(q, {
                conversationId: i,
                isBrowserSideChat: f,
                ordinaryDisclaimer: u
            }), a[7] = i, a[8] = u, a[9] = n) : n = a[9], n)
        }

        function q(e) {
            let t, n = (0, l.c)(3),
                {
                    conversationId: o,
                    isBrowserSideChat: s,
                    ordinaryDisclaimer: i
                } = e,
                c = (0, a.x)(p.S, o ?? null);
            return s && null == c ? null : (n[0] !== i || n[1] !== c ? (t = (0, r.jsx)(W, {
                ordinaryDisclaimer: i,
                regulatedConnectorKind: c
            }), n[0] = i, n[1] = c, n[2] = t) : t = n[2], t)
        }

        function W(e) {
            let t, n = (0, l.c)(4),
                {
                    ordinaryDisclaimer: a,
                    regulatedConnectorKind: o
                } = e;
            if ("finance" === o) {
                let e;
                return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(s.a, {
                    ...V.finance
                }), n[0] = e) : e = n[0], e
            }
            if ("health" === o) {
                let e;
                return n[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(s.a, {
                    ...V.health
                }), n[1] = e) : e = n[1], e
            }
            return n[2] !== a ? (t = a ?? (0, r.jsx)(s.a, {
                ...V.personal
            }), n[2] = a, n[3] = t) : t = n[3], t
        }

        function U(e) {
            let t, n = (0, l.c)(10),
                {
                    account: o,
                    pendingWorkspaceDisclaimer: i,
                    isTemporaryChat: c,
                    renderOrdinaryDisclaimer: d
                } = e,
                m = (0, h.a)(),
                {
                    data: f
                } = (0, a.x)(g.a, o.id),
                {
                    data: p
                } = (0, a.x)(u.l, o.id);
            if (null == f || null != i && null == p) return i ?? null;
            let x = "early-access" === f.account.workspace_type;
            if (!x && null == p) return null;
            let y = f.account.name ?? o.name;
            if (p?.beta_settings.training_allowed === !0) {
                let e;
                n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(s.a, {
                    ...V.workspaceResearchPartner,
                    values: {
                        link: G
                    }
                }), n[0] = e) : e = n[0], t = e
            } else if (x) {
                let e;
                n[1] !== y ? (e = null == y ? (0, r.jsx)(s.a, {
                    ...V.earlyAccessWorkspaceWithoutName
                }) : (0, r.jsx)(s.a, {
                    ...V.earlyAccessWorkspace,
                    values: {
                        workspaceName: y
                    }
                }), n[1] = y, n[2] = e) : e = n[2], t = e
            } else if (c) {
                let e;
                n[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(s.a, {
                    ...V.workspaceTemporaryChat
                }), n[3] = e) : e = n[3], t = e
            } else if (null != f.account.ekm_config) {
                let e;
                n[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(s.a, {
                    ...V.encryptedWorkspace
                }), n[4] = e) : e = n[4], t = e
            } else if ("k12" === o.plan_type) {
                let e;
                n[5] !== y ? (e = null == y ? (0, r.jsx)(s.a, {
                    ...V.k12WorkspaceWithoutName
                }) : (0, r.jsx)(s.a, {
                    ...V.k12Workspace,
                    values: {
                        workspaceName: y
                    }
                }), n[5] = y, n[6] = e) : e = n[6], t = e
            } else {
                let e, l;
                return m ? null : (n[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(s.a, {
                    ...V.workspace
                }), n[7] = e) : e = n[7], t = e, n[8] !== d ? (l = d?.(t) ?? t, n[8] = d, n[9] = l) : l = n[9], l)
            }
            return t
        }

        function G(e) {
            return (0, r.jsx)(w.a, {
                className: "cursor-interaction underline underline-offset-2 hover:text-default",
                href: "https://help.openai.com/articles/20001245",
                initiator: "open_in_browser_bridge",
                isBrowserEnabled: !1,
                children: e
            })
        }
        let V = (0, i.f)({
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
    iaTG: (function(e, t, n) {
        n.d(t, {
            a: () => p
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
            f = n("h8aU");

        function p(e) {
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
                    let d, g, p = await async function(e, t, n, r) {
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
                                } : (null == n.equationIndex ? f.a : function(e, t, n) {
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
                    if (u || null == c) return p;
                    let x = await c(e, t);
                    return null == x ? p : (r = p, s = x, d = new Map(r.matches.map(e => [e.id, e])), g = l()([...s.matches.map(e => d.get(e.id) ?? e), ...r.matches], "id").map((e, t) => ({
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
            let t, u, f, p, x, y, v, w, P, b, S, C = (0, r.c)(20),
                {
                    containerRef: k,
                    contextId: I,
                    onContentChange: E
                } = e,
                B = (0, l.z)(c.d),
                M = (0, l.z)(c.g),
                T = B?.contextId === I ? B : null,
                D = null == T ? null : M?.id ?? null,
                {
                    schedule: K,
                    cancel: R
                } = (w = (0, r.c)(5), P = (0, a.useRef)(null), 80 !== w[0] ? (x = e => {
                    null == P.current && (P.current = window.setTimeout(() => {
                        P.current = null, e()
                    }, 80))
                }, w[0] = 80, w[1] = x) : x = w[1], b = x, w[2] === Symbol.for("react.memo_cache_sentinel") ? (y = () => {
                    null != P.current && (window.clearTimeout(P.current), P.current = null)
                }, w[2] = y) : y = w[2], S = y, w[3] !== b ? (v = {
                    schedule: b,
                    cancel: S
                }, w[3] = b, w[4] = v) : v = w[4], v);
            C[0] !== E ? (t = () => E?.(), C[0] = E, C[1] = t) : t = C[1];
            let H = (0, a.useEffectEvent)(t);
            C[2] !== T || C[3] !== D || C[4] !== k ? (u = async (e, t) => {
                let r = k.current;
                if (null == r || ((0, o.a)(r, {
                        includeShadowRoots: !1
                    }), t.takeRecords(), null == T)) return;
                let l = (0, s.a)(T.matches),
                    a = Array.from(r.querySelectorAll("[data-content-search-unit-key]")).flatMap(e => {
                        let t = l.get(e.dataset.contentSearchUnitKey ?? "");
                        return null == t ? [] : [{
                            element: e,
                            matches: t
                        }]
                    }),
                    c = (e, t) => {
                        t.forEach(t => {
                            (0, o.l)({
                                element: t,
                                matchId: e
                            }), (0, o.k)(t, e === D)
                        })
                    },
                    u = a.map(g),
                    f = e => {
                        e.forEach((e, t) => e.forEach((e, n) => c(u[t].matches[n].id, e)))
                    };
                if (!T.searchMath) {
                    f(u.map(e => {
                        let {
                            element: t,
                            matches: n
                        } = e;
                        return (0, o.i)({
                            target: t,
                            query: T.query,
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
                            f = n => {
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
                        return f(t.map((e, t) => t)) || t.forEach((e, t) => f([t])), () => {
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
                    })(e, l.map(m)).then(e => () => e().forEach((e, t) => c(l[t].id, e))))
                });
                let [x, y] = await Promise.all([(0, o.j)(u.map(h), T.query, T.regex, e), Promise.all(p)]);
                e.aborted || (f(x()), y.forEach(d), t.takeRecords())
            }, C[2] = T, C[3] = D, C[4] = k, C[5] = u) : u = C[5];
            let F = (0, a.useEffectEvent)(u);
            C[6] !== T?.runId || C[7] !== F || C[8] !== R || C[9] !== k || C[10] !== H || C[11] !== K ? (f = () => {
                let e = k.current;
                if (null == e) return;
                let t = null,
                    n = () => {
                        t?.abort(), F((t = new AbortController).signal, r)
                    },
                    r = new MutationObserver(e => {
                        (0, o.m)(e) && (t?.abort(), K(() => {
                            H(), n()
                        }))
                    });
                return T?.runId == null ? void n() : (r.observe(e, {
                    childList: !0,
                    subtree: !0,
                    characterData: !0,
                    attributeFilter: ["hidden"]
                }), n(), () => {
                    r.disconnect(), t?.abort(), R(), (0, o.a)(e, {
                        includeShadowRoots: !1
                    })
                })
            }, C[6] = T?.runId, C[7] = F, C[8] = R, C[9] = k, C[10] = H, C[11] = K, C[12] = f) : f = C[12];
            let j = T?.runId;
            C[13] !== D || C[14] !== R || C[15] !== k || C[16] !== I || C[17] !== K || C[18] !== j ? (p = [j, D, R, k, I, K], C[13] = D, C[14] = R, C[15] = k, C[16] = I, C[17] = K, C[18] = j, C[19] = p) : p = C[19], (0, a.useEffect)(f, p)
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
                matches: n.filter(f)
            }
        }

        function f(e) {
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
                        onNavigate: f
                    } = e,
                    p = (0, a.useRef)(null),
                    x = (0, a.useRef)(null),
                    [y, v] = (0, a.useState)(!1);
                return g[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => {
                    let e = p.current;
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
                }, n = [], g[0] = t, g[1] = n) : (t = g[0], n = g[1]), (0, a.useEffect)(t, n), g[2] === Symbol.for("react.memo_cache_sentinel") ? (s = () => x.current?.abort(), g[2] = s) : s = g[2], g[3] !== f ? (i = e => {
                    x.current?.abort();
                    let t = e.currentTarget;
                    t.tabIndex = -1;
                    let n = new AbortController;
                    x.current = n, v(!1), f(n.signal).then(e => {
                        !n.signal.aborted && t.isConnected && t.ownerDocument.activeElement === t && (e?.isConnected ? e.focus({
                            preventScroll: !0
                        }) : v(!0))
                    })
                }, g[3] = f, g[4] = i) : i = g[4], g[5] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, r.jsx)(o.a, {
                    id: "codex.conversation.latestResponse",
                    defaultMessage: "Latest response",
                    description: "Invisible heading before the composer; focusing it moves to the newest assistant response"
                }), g[5] = c) : c = g[5], g[6] !== i ? (u = (0, r.jsx)("h4", {
                    ref: p,
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
                let t, n, g, f, p, x, y, v, w = (0, l.c)(20),
                    {
                        sentAtMs: P,
                        nowMs: b
                    } = e,
                    S = (0, o.a)(),
                    [C] = (0, a.useState)(h);
                if (!Number.isFinite(P)) return null;
                if (w[0] !== S || w[1] !== C || w[2] !== b || w[3] !== P) {
                    let {
                        date: e,
                        time: r,
                        includeAt: l
                    } = (0, c.c)(S, new Date(P), new Date(b ?? C));
                    n = e, p = r, g = l ? i.a.older : i.a.recent, t = m, f = S.formatMessage(g, {
                        date: n,
                        time: p,
                        day: d
                    }), w[0] = S, w[1] = C, w[2] = b, w[3] = P, w[4] = t, w[5] = n, w[6] = g, w[7] = f, w[8] = p
                } else t = w[4], n = w[5], g = w[6], f = w[7], p = w[8];
                return w[9] !== n || w[10] !== p ? (x = {
                    date: n,
                    time: p,
                    day: u
                }, w[9] = n, w[10] = p, w[11] = x) : x = w[11], w[12] !== g || w[13] !== x ? (y = (0, r.jsx)(s.a, {
                    ...g,
                    values: x
                }), w[12] = g, w[13] = x, w[14] = y) : y = w[14], w[15] !== t || w[16] !== P || w[17] !== f || w[18] !== y ? (v = (0, r.jsx)(t, {
                    label: f,
                    sentAtMs: P,
                    children: y
                }), w[15] = t, w[16] = P, w[17] = f, w[18] = y, w[19] = v) : v = w[19], v
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
            f = n("hTLy"),
            p = n.n(f),
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
                let f = (t ? h > 0 && g > 0 : e > 0) ? m.gapBeforePx ?? r : 0;
                null != a && (f = Math.round(f * a) / a), h += f, s.push(f), "gap" === m.type && o.add(n), u.set(n, e), d.push(n), c.push(h), i.push(g), h += g
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

        function P(e) {
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

        function b(e) {
            let {
                layout: t,
                turnKey: n,
                viewportHeightPx: r
            } = e, l = t.turnIndexByKey.get(n);
            return null == l ? null : Math.max(0, (t.bottomOffsetsPx[l] ?? 0) - r / 2 + (t.heightsPx[l] ?? 0) / 2)
        }
        let S = {};

        function C(e) {
            let t, n, f, x, C, H, F, j, A, L, _, O, z, N, q, W, U, G, V, Q, $, X, Z, Y, J, ee, et, en, er, el, ea, eo, es, ei, ec, eu, ed, eh, em, eg, ef, ep, ex, ey, ev, ew, eP, eb, eS, eC, ek, eI, eE, eB, eM, eT, eD, eK, eR, eH, eF, ej, eA, eL, e_, eO, ez, eN = (0, l.c)(249),
                {
                    collapseEmptyRows: eq,
                    entries: eW,
                    RowComponent: eU,
                    onApiChange: eG,
                    onVisibleContentReady: eV,
                    className: eQ,
                    gapPx: e$,
                    getBottomScrollPaddingPx: eX,
                    onLatestTurnHeightChange: eZ,
                    preserveMeasuredTurnViewport: eY,
                    preserveUnderfilledViewport: eJ,
                    getPendingRestoreScrollDistanceFromBottomPx: e0,
                    restoreScrollDistanceFromBottomPx: e1,
                    initialRestoreState: e2,
                    latestTurnFooter: e3,
                    latestTurnFooterKey: e4,
                    onRestoreStateChange: e5,
                    onViewportChange: e6,
                    onHistoryRetentionBoundaryChange: e8,
                    latestTurnSynchronousMeasurementKey: e7,
                    layoutReadyTurnKey: e9,
                    onTurnLayoutReady: te,
                    synchronousMeasurementTurnKey: tt,
                    retainedTurnKeys: tn,
                    skipEmptyResizeMeasurements: tr
                } = e,
                tl = void 0 !== eq && eq,
                ta = void 0 === e$ ? 12 : e$,
                to = void 0 !== eY && eY,
                ts = void 0 !== eJ && eJ,
                ti = void 0 !== tr && tr,
                tc = (0, o.z)(m.b),
                tu = [...tn ?? [], ...tc],
                [td, th] = (0, s.useState)(null);
            eN[0] !== td || eN[1] !== ts || eN[2] !== eW ? (t = eW.map(e => ({
                turnKey: e.turnKey,
                gapBeforePx: e.gapBeforePx,
                estimatedHeightPx: e.estimatedHeightPx,
                minHeightPx: ts && td?.turnKey === e.turnKey && e.turnKey === eW.at(-1)?.turnKey ? Math.max(e.minHeightPx ?? 0, td.viewportHeightPx - td.heightOutsideTurnPx) : e.minHeightPx,
                type: e.type
            })), eN[0] = td, eN[1] = ts, eN[2] = eW, eN[3] = t) : t = eN[3];
            let tm = t,
                tg = (0, h.b)(),
                tf = (0, c.c)(),
                tp = tf * (globalThis.devicePixelRatio ?? 1),
                tx = e2?.turnHeightsByKey ?? S,
                [ty, tv] = (0, s.useState)(tx),
                [tw, tP] = (0, s.useState)(null);
            eN[4] !== tl || eN[5] !== tm || eN[6] !== ta || eN[7] !== tp || eN[8] !== ty ? (n = v({
                collapseEmptyRows: tl,
                entries: tm,
                gapPx: ta,
                measuredHeightsByKey: ty,
                pixelScale: tp
            }), eN[4] = tl, eN[5] = tm, eN[6] = ta, eN[7] = tp, eN[8] = ty, eN[9] = n) : n = eN[9];
            let tb = n;
            eN[10] !== eX || eN[11] !== e2 || eN[12] !== tb || eN[13] !== tg ? (f = () => {
                var e, t, n;
                let r, l, a = D(eX);
                return e = tb, t = K(tg.getLastScrollDistanceFromBottomPx(), a), n = e2, l = w({
                    distanceFromBottomPx: r = Math.min(t, e.totalHeightPx),
                    layout: e,
                    overscanCount: 2,
                    viewportHeightPx: 800
                }), {
                    distanceFromBottomPx: r,
                    renderedRange: (n?.renderedWindow == null ? null : P({
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
            }, eN[10] = eX, eN[11] = e2, eN[12] = tb, eN[13] = tg, eN[14] = f) : f = eN[14];
            let [tS, tC] = (0, s.useState)(f), [tk] = (0, s.useState)(I), tI = (0, s.useSyncExternalStore)(tk.subscribe, tk.getSnapshot, tk.getSnapshot), tE = (0, s.useRef)(null), tB = (0, s.useRef)(ty), tM = (0, s.useRef)(tS), tT = (0, s.useRef)(null);
            eN[15] === Symbol.for("react.memo_cache_sentinel") ? (x = new Map, eN[15] = x) : x = eN[15];
            let tD = (0, s.useRef)(x);
            eN[16] === Symbol.for("react.memo_cache_sentinel") ? (C = new Map, eN[16] = C) : C = eN[16];
            let tK = (0, s.useRef)(C);
            eN[17] === Symbol.for("react.memo_cache_sentinel") ? (H = new WeakSet, eN[17] = H) : H = eN[17];
            let tR = (0, s.useRef)(H);
            eN[18] === Symbol.for("react.memo_cache_sentinel") ? (F = new Map, eN[18] = F) : F = eN[18];
            let tH = (0, s.useRef)(F);
            eN[19] === Symbol.for("react.memo_cache_sentinel") ? (j = new Map, eN[19] = j) : j = eN[19];
            let tF = (0, s.useRef)(j),
                tj = (0, s.useRef)(null),
                tA = (0, s.useRef)(null),
                tL = (0, s.useRef)(0),
                t_ = (0, s.useRef)(null),
                [tO, tz] = (0, s.useState)(null),
                tN = (0, s.useRef)(!1),
                tq = (0, s.useRef)(null),
                tW = (0, s.useRef)(tb),
                tU = (0, s.useRef)(tb),
                tG = (0, s.useRef)(tb),
                tV = (0, s.useRef)(null);
            eN[20] !== ty ? (A = () => {
                ty !== tB.current && tv(tB.current)
            }, eN[20] = ty, eN[21] = A) : A = eN[21], eN[22] !== tl || eN[23] !== tm || eN[24] !== ta || eN[25] !== tp || eN[26] !== ty ? (L = [tl, tm, ta, tp, ty], eN[22] = tl, eN[23] = tm, eN[24] = ta, eN[25] = tp, eN[26] = ty, eN[27] = L) : L = eN[27], (0, s.useLayoutEffect)(A, L), eN[28] === Symbol.for("react.memo_cache_sentinel") ? (_ = e => {
                tE.current = e, tP(e)
            }, eN[28] = _) : _ = eN[28];
            let tQ = (0, g.a)(_);
            eN[29] !== tl || eN[30] !== tm || eN[31] !== ta || eN[32] !== tb || eN[33] !== tp || eN[34] !== ty ? (O = () => {
                if (tU.current !== tb) {
                    tU.current = tb, tW.current = ty === tB.current ? tb : v({
                        collapseEmptyRows: tl,
                        entries: tm,
                        gapPx: ta,
                        measuredHeightsByKey: tB.current,
                        pixelScale: tp
                    });
                    let e = tE.current;
                    null != e && (e.style.height = `${tW.current.totalHeightPx}px`)
                }
                return tW.current
            }, eN[29] = tl, eN[30] = tm, eN[31] = ta, eN[32] = tb, eN[33] = tp, eN[34] = ty, eN[35] = O) : O = eN[35];
            let t$ = (0, g.a)(O);
            eN[36] !== eX || eN[37] !== tg || eN[38] !== tf ? (z = e => {
                let t = tg.getScrollElement(),
                    n = tE.current,
                    r = t?.firstElementChild;
                return null == n || null == r ? e - D(eX) : e - (0, c.b)(r.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, tf)
            }, eN[36] = eX, eN[37] = tg, eN[38] = tf, eN[39] = z) : z = eN[39];
            let tX = (0, g.a)(z),
                tZ = tS.renderedRange;
            if (null != tI) {
                let e = b({
                    layout: tb,
                    turnKey: tI.turnKey,
                    viewportHeightPx: tS.viewportHeightPx
                });
                null != e && (tZ = w({
                    distanceFromBottomPx: e,
                    layout: tb,
                    overscanCount: 2,
                    viewportHeightPx: tS.viewportHeightPx
                }))
            } else if (!T(tS.turnKeys, tb.turnKeys)) {
                let e = tS.turnKeys[tS.renderedRange.startIndex];
                null != e && (tZ = P({
                    anchorKey: e,
                    layout: tb,
                    previousRange: tZ
                }) ?? w({
                    distanceFromBottomPx: tS.distanceFromBottomPx,
                    layout: tb,
                    overscanCount: 2,
                    viewportHeightPx: tS.viewportHeightPx
                }))
            }
            eN[40] !== e1 ? (N = () => {
                null == tj.current && e1?.()
            }, eN[40] = e1, eN[41] = N) : N = eN[41];
            let tY = (0, g.a)(N);
            eN[42] === Symbol.for("react.memo_cache_sentinel") ? (q = () => {
                null != tq.current && (window.cancelAnimationFrame(tq.current), tq.current = null)
            }, eN[42] = q) : q = eN[42];
            let tJ = (0, g.a)(q);
            eN[43] !== tm || eN[44] !== eV || eN[45] !== tY ? (W = () => {
                null == eV || tN.current || null != tq.current || null == tE.current || tm.length > 0 && 0 === tK.current.size || (tq.current = window.requestAnimationFrame(() => {
                    tq.current = window.requestAnimationFrame(() => {
                        tq.current = null, tN.current || null == tE.current || tm.length > 0 && 0 === tK.current.size || (tN.current = !0, tY(), eV())
                    })
                }))
            }, eN[43] = tm, eN[44] = eV, eN[45] = tY, eN[46] = W) : W = eN[46];
            let t0 = (0, g.a)(W),
                t1 = eW.slice(tZ.startIndex, tZ.endIndex).map((e, t) => ({
                    entry: e,
                    turnIndex: tZ.startIndex + t
                }));
            for (let e of new Set(tu)) {
                let t = tb.turnIndexByKey.get(e);
                if (null == t || t >= tZ.startIndex && t < tZ.endIndex) continue;
                let n = eW[t];
                null != n && t1.push({
                    entry: n,
                    turnIndex: t
                })
            }
            t1.sort(k);
            let t2 = null == e8 ? null : function(e, t, n, r) {
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
                }(eW, tu, tb, tS.viewportHeightPx + 24),
                t3 = (0, g.a)(e => {
                    e8?.(e > 24 || null != tk.getSnapshot() ? null : t2)
                });
            eN[47] !== t3 || eN[48] !== tg ? (U = () => {
                t3(tg.getLastScrollDistanceFromBottomPx())
            }, eN[47] = t3, eN[48] = tg, eN[49] = U) : U = eN[49];
            let t4 = t2?.oldestProtectedTurnId,
                t5 = t2?.firstProtectedItemId;
            eN[50] !== e8 || eN[51] !== tI || eN[52] !== t3 || eN[53] !== tg || eN[54] !== t4 || eN[55] !== t5 ? (G = [t4, t5, e8, tI, t3, tg], eN[50] = e8, eN[51] = tI, eN[52] = t3, eN[53] = tg, eN[54] = t4, eN[55] = t5, eN[56] = G) : G = eN[56], (0, s.useLayoutEffect)(U, G), eN[57] !== e9 || eN[58] !== te || eN[59] !== tg ? (V = () => {
                if (null == e9 || null == te || null != tj.current || tH.current.size > 0) return;
                let e = tg.getScrollElement(),
                    t = tK.current.get(e9);
                null != e && !(e.clientHeight <= 0) && null != t && tR.current.has(t) && !((tB.current[e9] ?? 0) <= 0) && te(e9, t)
            }, eN[57] = e9, eN[58] = te, eN[59] = tg, eN[60] = V) : V = eN[60];
            let t6 = (0, g.a)(V);
            eN[61] !== eX || eN[62] !== eZ || eN[63] !== tY || eN[64] !== tg ? (Q = e => {
                let t = D(eX);
                null != e.latestTurnHeightChange && eZ?.(e.latestTurnHeightChange), e.restoreScrollDistanceFromBottom ? tY() : null != e.scrollDistanceFromBottomPx && tg.compensateScrollToDistanceFromBottomPx(e.scrollDistanceFromBottomPx + D(eX) - t), e.afterMeasure?.()
            }, eN[61] = eX, eN[62] = eZ, eN[63] = tY, eN[64] = tg, eN[65] = Q) : Q = eN[65];
            let t8 = (0, g.a)(Q);
            eN[66] !== t$ ? ($ = (e, t) => {
                if (null != tj.current || t <= 0) return;
                let n = tM.current,
                    r = B({
                        current: n,
                        distanceFromBottomPx: e,
                        layout: t$(),
                        viewportHeightPx: t
                    });
                r === n || (tM.current = r, r.renderedRange.startIndex === n.renderedRange.startIndex && r.renderedRange.endIndex === n.renderedRange.endIndex && T(r.turnKeys, n.turnKeys) || tC(r))
            }, eN[66] = t$, eN[67] = $) : $ = eN[67];
            let t7 = (0, g.a)($);
            eN[68] !== e8 ? (X = () => () => e8?.(void 0), Z = [e8], eN[68] = e8, eN[69] = X, eN[70] = Z) : (X = eN[69], Z = eN[70]), (0, s.useLayoutEffect)(X, Z), eN[71] !== t$ || eN[72] !== e6 ? (Y = (e, t, n) => {
                if (null == e6) return;
                let r = t$(),
                    l = Math.max(0, Math.min(r.totalHeightPx, r.totalHeightPx - e)),
                    a = Math.max(0, l - t);
                e6({
                    viewportEndPx: l,
                    viewportStartPx: a
                }, n)
            }, eN[71] = t$, eN[72] = e6, eN[73] = Y) : Y = eN[73];
            let t9 = (0, g.a)(Y);
            eN[74] !== tk ? (J = e => {
                tk.getSnapshot() === e && tk.replace(null)
            }, eN[74] = tk, eN[75] = J) : J = eN[75];
            let ne = (0, g.a)(J);
            eN[76] !== e8 || eN[77] !== tk ? (ee = (e, t, n) => n?.signal?.aborted ? Promise.resolve() : (e8?.(null), new Promise(r => {
                let l = () => {
                        tk.getSnapshot() === a && tk.replace(null)
                    },
                    a = {
                        align: n?.align ?? "center",
                        complete: () => {
                            n?.signal?.removeEventListener("abort", l), r()
                        },
                        getTargetElement: t,
                        turnKey: e
                    };
                tC(tM.current), tk.replace(a), n?.signal?.addEventListener("abort", l, {
                    once: !0
                })
            })), eN[76] = e8, eN[77] = tk, eN[78] = ee) : ee = eN[78];
            let nt = (0, g.a)(ee);
            eN[79] !== t$ || eN[80] !== eW ? (et = e => {
                let {
                    viewportStartPx: t,
                    viewportEndPx: n
                } = e;
                return function(e, t, n, r) {
                    let {
                        topOffsetsPx: l,
                        heightsPx: a
                    } = t, o = Math.max(0, y()(l, n) - 1);
                    return (l[o] ?? 0) + (a[o] ?? 0) <= n && o++, e.slice(o, p()(l, r))
                }(eW, t$(), t, n)
            }, eN[79] = t$, eN[80] = eW, eN[81] = et) : et = eN[81];
            let nn = (0, g.a)(et);
            eN[82] !== t$ ? (en = e => {
                let t = t$(),
                    n = t.turnIndexByKey.get(e);
                if (null == n) return null;
                let r = t.topOffsetsPx[n],
                    l = t.heightsPx[n];
                return null == r || null == l ? null : {
                    endPx: r + l,
                    startPx: r
                }
            }, eN[82] = t$, eN[83] = en) : en = eN[83];
            let nr = (0, g.a)(en);
            eN[84] !== eZ || eN[85] !== tg || eN[86] !== tf ? (er = () => {
                let e = 0,
                    t = null;
                for (let [n, r] of tF.current) e += r, (null == t || t.compareDocumentPosition(n) === Node.DOCUMENT_POSITION_FOLLOWING) && (t = n);
                null != t && eZ?.({
                    heightDeltaPx: null,
                    heightPx: null,
                    bottomViewportOverflowPx: tg.isNativeEndSnapFollowing?.() ? 0 : R({
                        scrollElement: tg.getScrollElement(),
                        turnElement: t,
                        windowZoom: tf
                    }),
                    turnElement: t,
                    followContentHeightPx: e
                })
            }, eN[84] = eZ, eN[85] = tg, eN[86] = tf, eN[87] = er) : er = eN[87];
            let nl = (0, g.a)(er);
            eN[88] !== tl || eN[89] !== t8 || eN[90] !== tm || eN[91] !== ta || eN[92] !== eX || eN[93] !== t$ || eN[94] !== tX || eN[95] !== e0 || eN[96] !== tp || eN[97] !== to || eN[98] !== tg || eN[99] !== tk || eN[100] !== tf ? (el = (e, t, n) => {
                var r;
                let l = t$(),
                    a = tg.getScrollElement();
                if (a?.getClientRects().length === 0) return !1;
                let o = tj.current,
                    s = tB.current,
                    u = s,
                    d = 0,
                    h = !1,
                    m = null,
                    g = 0,
                    f = !1,
                    p = !1,
                    x = "controller" === (void 0 === n ? "measured" : n) ? tg.getLastScrollDistanceFromBottomPx({
                        includePendingUserScroll: !0
                    }) : function(e, t) {
                        let n = e.getScrollElement(),
                            r = n?.firstElementChild;
                        if (null == n || null == r || 0 === n.clientHeight) return e.getLastScrollDistanceFromBottomPx();
                        let l = r.getBoundingClientRect();
                        if (0 === l.height) return e.getLastScrollDistanceFromBottomPx();
                        let a = n.scrollTop;
                        return Math.max(0, Math.round(a + (0, c.b)(l.bottom - n.getBoundingClientRect().top, t)) - n.clientHeight) - a
                    }(tg, tf),
                    y = D(eX),
                    w = K(x, y),
                    P = to ? null : e0?.() ?? null,
                    b = null == o ? w : tM.current.distanceFromBottomPx,
                    S = b;
                if (to && null == tk.getSnapshot() && e0?.() == null) {
                    let e = T(tG.current.turnKeys, l.turnKeys) ? l : tG.current,
                        t = e === l ? o?.scrollDistanceFromBottomPx ?? x : x,
                        n = M({
                            distanceFromBottomPx: tX(t),
                            preferLatestVisibleRow: t < y,
                            layout: e,
                            measuredHeightsByKey: s,
                            nextLayout: l,
                            viewportHeightPx: tM.current.viewportHeightPx
                        }),
                        r = a?.ownerDocument.activeElement,
                        i = r?.closest("[data-turn-key]"),
                        c = i?.dataset.turnKey;
                    if (a && r && i && c && tK.current.get(c) === i) {
                        let e = r.getBoundingClientRect(),
                            t = a.getBoundingClientRect();
                        e.bottom > t.top && e.top < t.bottom && (n = c)
                    }
                    let u = null == n ? null : l.turnIndexByKey.get(n);
                    null != u && (S = l.bottomOffsetsPx[u] ?? b)
                }
                for (let [t, n] of e) {
                    let {
                        element: e,
                        heightPx: r
                    } = n, a = tK.current.get(t);
                    if (a !== e) continue;
                    r > 0 ? tR.current.add(a) : tR.current.delete(a);
                    let o = Math.max(+!tl, r),
                        i = s[t];
                    if (i === o) continue;
                    u === s && (u = {
                        ...s
                    }), u[t] = o;
                    let c = l.turnIndexByKey.get(t);
                    if (null == c) continue;
                    let x = c === l.turnKeys.length - 1,
                        y = Math.round(Math.max(tm[c]?.minHeightPx ?? 0, o) * tp) / tp,
                        v = y - (l.heightsPx[c] ?? y);
                    p = p || null == i || 0 !== v, x && (h = !0, d += null == i ? 0 : v, m = a), f = f || tl && (0 === y || 0 === l.heightsPx[c]), (l.bottomOffsetsPx[c] ?? 0) <= S && (to || null != e0 && !x) && (g += v)
                }
                if (u === s) return !1;
                if (!p) return tB.current = u, !1;
                let C = v({
                    collapseEmptyRows: tl,
                    entries: tm,
                    gapPx: ta,
                    measuredHeightsByKey: u,
                    pixelScale: tp
                });
                if (f)
                    for (let [e, t] of C.gapsBeforePx.entries()) {
                        let n = t - (l.gapsBeforePx[e] ?? 0);
                        (l.bottomOffsetsPx[e] ?? 0) + (l.heightsPx[e] ?? 0) <= S && (to || null != e0 && e !== l.turnKeys.length - 1) && (g += n)
                    }
                let k = tg.isNativeEndSnapFollowing?.(),
                    I = to && tg.shouldFollowContentGrowth() && (k || (r = x, 0 === y && r <= 24)) && m?.querySelector("[data-preserve-turn-viewport]") == null,
                    E = o?.restoreScrollDistanceFromBottom || null != P,
                    H = null;
                E || (H = I ? 0 : 0 !== g ? (o?.scrollDistanceFromBottomPx ?? tg.getUnroundedScrollDistanceFromBottomPx(x)) + g : o?.scrollDistanceFromBottomPx ?? (to || !h ? x : null));
                let F = tM.current.distanceFromBottomPx;
                E ? F = P ?? F : null != H && (F = K(H, y));
                let j = B({
                        current: tM.current,
                        distanceFromBottomPx: F,
                        layout: C,
                        viewportHeightPx: tM.current.viewportHeightPx
                    }),
                    A = o?.latestTurnHeightChange,
                    L = m ?? A?.turnElement ?? null,
                    _ = {
                        afterMeasure: o?.afterMeasure,
                        latestTurnHeightChange: h || null != A ? {
                            heightDeltaPx: (A?.heightDeltaPx ?? 0) + d,
                            heightPx: C.heightsPx.at(-1) ?? null,
                            bottomViewportOverflowPx: k ? 0 : R({
                                scrollElement: tg.getScrollElement(),
                                turnElement: L,
                                windowZoom: tf
                            }),
                            turnElement: L,
                            followContentHeightPx: null
                        } : null,
                        restoreScrollDistanceFromBottom: E,
                        scrollDistanceFromBottomPx: H,
                        turnHeightsByKey: u
                    },
                    O = tE.current;
                for (let [t, n] of e) {
                    let {
                        element: e
                    } = n, r = C.turnIndexByKey.get(t);
                    tK.current.get(t) === e && null != r && null != e.parentElement && (e.parentElement.style.height = `${C.heightsPx[r]}px`, e.parentElement.style.minHeight = "")
                }
                if (h && 1 === e.size && null == o && j === tM.current && C.gapsBeforePx.at(-1) === l.gapsBeforePx.at(-1) && null != O) return tB.current = u, tW.current = C, tG.current = C, O.style.height = `${C.totalHeightPx}px`, t8(_), !0;
                null == tV.current && (tV.current = l);
                let z = () => {
                    tB.current = u, tW.current = C, tv(u), j !== tM.current && (tM.current = j, tC(j))
                };
                return tj.current = _, void 0 === t || t ? (0, i.flushSync)(z) : z(), !0
            }, eN[88] = tl, eN[89] = t8, eN[90] = tm, eN[91] = ta, eN[92] = eX, eN[93] = t$, eN[94] = tX, eN[95] = e0, eN[96] = tp, eN[97] = to, eN[98] = tg, eN[99] = tk, eN[100] = tf, eN[101] = el) : el = eN[101];
            let na = (0, g.a)(el);
            eN[102] !== na || eN[103] !== nl || eN[104] !== t6 || eN[105] !== ti ? (ea = e => {
                let t = new Map,
                    n = !1;
                for (let r of e) {
                    let e = tD.current.get(r.target);
                    if (null == e) continue;
                    let {
                        height: l
                    } = (0, d.a)(r);
                    switch (e.kind) {
                        case "turn":
                            t.set(e.turnKey, {
                                element: r.target,
                                heightPx: l
                            });
                            break;
                        case "latest-turn-follow-content":
                            tF.current.set(e.element, l), n = !0
                    }
                }(!ti || t.size > 0) && na(t), n && nl(), t6()
            }, eN[102] = na, eN[103] = nl, eN[104] = t6, eN[105] = ti, eN[106] = ea) : ea = eN[106];
            let no = (0, g.a)(ea);
            eN[107] !== no ? (eo = () => {
                if (null != tA.current) return tA.current;
                let e = new ResizeObserver(no);
                return tA.current = e, e
            }, eN[107] = no, eN[108] = eo) : eo = eN[108];
            let ns = (0, g.a)(eo);
            eN[109] !== ns || eN[110] !== t0 ? (es = (e, t) => {
                if (null == t) return;
                tD.current.set(t, {
                    kind: "turn",
                    turnKey: e
                }), tK.current.set(e, t), tR.current.delete(t), tH.current.set(e, t);
                let n = ns();
                return n.observe(t), t0(), () => {
                    n.unobserve(t), tD.current.delete(t), tH.current.get(e) === t && tH.current.delete(e), tK.current.get(e) === t && tK.current.delete(e)
                }
            }, eN[109] = ns, eN[110] = t0, eN[111] = es) : es = eN[111];
            let ni = (0, g.a)(es);
            eN[112] !== na || eN[113] !== tf ? (ei = (e, t) => {
                let n = tK.current.get(e);
                if (null == n) return;
                let r = (0, c.b)(n.getBoundingClientRect().height, tf);
                if (!(r <= 0) && (na(new Map([
                        [e, {
                            element: n,
                            heightPx: r
                        }]
                    ]), !1), null != t)) {
                    let e = tj.current;
                    null == e ? t() : e.afterMeasure = t
                }
            }, eN[112] = na, eN[113] = tf, eN[114] = ei) : ei = eN[114];
            let nc = (0, g.a)(ei);
            eN[115] !== ns ? (ec = e => {
                if (null == e) return;
                tD.current.set(e, {
                    element: e,
                    kind: "latest-turn-follow-content"
                }), tF.current.set(e, 0);
                let t = ns();
                return t.observe(e), () => {
                    t.unobserve(e), tD.current.delete(e), tF.current.delete(e)
                }
            }, eN[115] = ns, eN[116] = ec) : ec = eN[116];
            let nu = (0, g.a)(ec);
            eN[117] !== na || eN[118] !== tf ? (eu = () => {
                let e = tH.current;
                if (0 === e.size) {
                    tL.current = 0;
                    return
                }
                if (null != t_.current) return;
                if (tL.current >= 8) {
                    t_.current = requestAnimationFrame(e => {
                        t_.current = null, tL.current = 0, tz(e)
                    });
                    return
                }
                tL.current = tL.current + 1, tH.current = new Map;
                let t = new Map;
                if ((0, u.a)("virtualizedTurnList.readMountedHeights", () => {
                        for (let [n, r] of e) {
                            if (tK.current.get(n) !== r) continue;
                            let e = (0, c.b)(r.getBoundingClientRect().height, tf);
                            e > 0 && t.set(n, {
                                element: r,
                                heightPx: e
                            })
                        }
                    }, e.size), t.size > 0) {
                    let n = tB.current;
                    if (na(t, !1, "controller"))
                        for (let [t, r] of e)(null == n[t] || tL.current > 1) && tK.current.get(t) === r && tH.current.set(t, r);
                    else tL.current = 0
                }
            }, eN[117] = na, eN[118] = tf, eN[119] = eu) : eu = eN[119], (0, s.useLayoutEffect)(eu), eN[120] !== tm || eN[121] !== nc || eN[122] !== tt ? (ed = () => {
                let e = tt ?? tm.at(-1)?.turnKey;
                null != e && nc(e)
            }, eN[120] = tm, eN[121] = nc, eN[122] = tt, eN[123] = ed) : ed = eN[123];
            let nd = (0, g.a)(ed);
            eN[124] !== e7 || eN[125] !== nd ? (eh = () => {
                null != e7 && nd()
            }, em = [e7, nd], eN[124] = e7, eN[125] = nd, eN[126] = eh, eN[127] = em) : (eh = eN[126], em = eN[127]), (0, s.useLayoutEffect)(eh, em), eN[128] !== t8 || eN[129] !== ty ? (eg = () => {
                let e = tj.current;
                null != e && e.turnHeightsByKey === ty && (tj.current = null, t8(e))
            }, ef = [t8, ty], eN[128] = t8, eN[129] = ty, eN[130] = eg, eN[131] = ef) : (eg = eN[130], ef = eN[131]), (0, s.useLayoutEffect)(eg, ef), eN[132] !== tm || eN[133] !== td || eN[134] !== tb.heightsPx || eN[135] !== ts || eN[136] !== ty || eN[137] !== tw || eN[138] !== tf ? (ep = e => {
                if (!ts || td?.viewportHeightPx === e) return;
                if (null != td) return void(0, i.flushSync)(() => {
                    th({
                        ...td,
                        viewportHeightPx: e
                    })
                });
                let t = tw?.closest("[data-thread-user-message-navigation-content]"),
                    n = t?.lastElementChild,
                    r = tm.at(-1)?.turnKey;
                if (null == t || null == n || null == r || tm.some(e => null == ty[e.turnKey])) return;
                let l = (0, c.b)(t.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, tf) - parseFloat(getComputedStyle(t).paddingBottom);
                l <= 24 || (0, i.flushSync)(() => {
                    th({
                        turnKey: r,
                        heightOutsideTurnPx: e - (tb.heightsPx.at(-1) ?? 0) - l,
                        viewportHeightPx: e
                    })
                })
            }, eN[132] = tm, eN[133] = td, eN[134] = tb.heightsPx, eN[135] = ts, eN[136] = ty, eN[137] = tw, eN[138] = tf, eN[139] = ep) : ep = eN[139];
            let nh = (0, g.a)(ep);
            eN[140] !== nn || eN[141] !== nr || eN[142] !== nc || eN[143] !== eG || eN[144] !== nt ? (ex = () => {
                if (null != eG) return eG({
                    getEntriesInViewport: nn,
                    getEntryGeometry: nr,
                    measureTurnBeforePaint: nc,
                    scrollToKey: nt
                }), () => {
                    eG(null)
                }
            }, ey = [nn, nr, nc, eG, nt], eN[140] = nn, eN[141] = nr, eN[142] = nc, eN[143] = eG, eN[144] = nt, eN[145] = ex, eN[146] = ey) : (ex = eN[145], ey = eN[146]), (0, s.useEffect)(ex, ey), eN[147] !== tJ ? (ev = () => () => {
                tN.current = !1, tJ()
            }, ew = [tJ], eN[147] = tJ, eN[148] = ev, eN[149] = ew) : (ev = eN[148], ew = eN[149]), (0, s.useLayoutEffect)(ev, ew), eN[150] !== tJ || eN[151] !== t0 ? (eP = () => (t0(), tJ), eN[150] = tJ, eN[151] = t0, eN[152] = eP) : eP = eN[152], eN[153] !== tJ || eN[154] !== tm.length || eN[155] !== eV || eN[156] !== t0 || eN[157] !== tw ? (eb = [tJ, tm.length, eV, t0, tw], eN[153] = tJ, eN[154] = tm.length, eN[155] = eV, eN[156] = t0, eN[157] = tw, eN[158] = eb) : eb = eN[158], (0, s.useEffect)(eP, eb), eN[159] !== tk ? (eS = () => {
                let e = tD.current,
                    t = tK.current,
                    n = tF.current;
                return () => {
                    null != t_.current && (cancelAnimationFrame(t_.current), t_.current = null), tA.current?.disconnect(), tA.current = null, e.clear(), t.clear(), tH.current.clear(), n.clear(), tj.current = null, tk.replace(null)
                }
            }, eC = [tk], eN[159] = tk, eN[160] = eS, eN[161] = eC) : (eS = eN[160], eC = eN[161]), (0, s.useEffect)(eS, eC), eN[162] !== e5 ? (ek = () => {
                if (null != e5) return () => {
                    e5(function(e, t, n) {
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
                    }(tB.current, tM.current.turnKeys, tM.current.renderedRange))
                }
            }, eI = [e5], eN[162] = e5, eN[163] = ek, eN[164] = eI) : (ek = eN[163], eI = eN[164]), (0, s.useLayoutEffect)(ek, eI);
            let {
                addScrollListener: nm,
                addUserScrollListener: ng,
                getScrollElement: nf
            } = tg;
            eN[165] !== nm || eN[166] !== ng || eN[167] !== eX || eN[168] !== nf || eN[169] !== nh || eN[170] !== ts || eN[171] !== t3 || eN[172] !== t6 || eN[173] !== t9 || eN[174] !== tY || eN[175] !== tw || eN[176] !== t7 ? (eE = () => {
                let e = nf();
                if (null == e) return;
                let t = () => (null == tT.current && (tT.current = e.clientHeight), tT.current || tM.current.viewportHeightPx || 800),
                    n = nm(e => {
                        t7(K(e, D(eX)), t()), t3(e)
                    }),
                    r = ng((e, n) => {
                        t9(K(e, D(eX)), t(), null != n && e > n)
                    }),
                    l = new ResizeObserver(n => {
                        let r = n.find(t => t.target === e);
                        if (null != r) {
                            let {
                                height: e
                            } = (0, d.a)(r);
                            tT.current = e, t7(tM.current.distanceFromBottomPx, e), tY()
                        }
                        nh(t()), t6()
                    });
                return l.observe(e), ts && null != tw && l.observe(tw), () => {
                    n(), r(), l.disconnect()
                }
            }, eB = [nm, ng, eX, nf, nh, t6, ts, t9, t3, tY, tw, t7], eN[165] = nm, eN[166] = ng, eN[167] = eX, eN[168] = nf, eN[169] = nh, eN[170] = ts, eN[171] = t3, eN[172] = t6, eN[173] = t9, eN[174] = tY, eN[175] = tw, eN[176] = t7, eN[177] = eE, eN[178] = eB) : (eE = eN[177], eB = eN[178]), (0, s.useLayoutEffect)(eE, eB), eN[179] !== na || eN[180] !== eX || eN[181] !== tb || eN[182] !== tI || eN[183] !== tg || eN[184] !== tk || eN[185] !== ne || eN[186] !== t7 || eN[187] !== tf ? (eM = () => {
                if (null == tI || tk.getSnapshot() !== tI || null != t_.current) return;
                let e = tg.getScrollElement();
                if (null == e) return;
                let t = new Map;
                for (let [e, n] of tK.current) {
                    let r = (0, c.b)(n.getBoundingClientRect().height, tf);
                    r > 0 && t.set(e, {
                        element: n,
                        heightPx: r
                    })
                }
                if (na(t, !1) || null != tj.current) return;
                let n = tK.current.get(tI.turnKey),
                    r = null == n ? null : tI.getTargetElement?.(n) ?? n,
                    l = null == n || null == r ? function(e) {
                        let {
                            align: t,
                            layout: n,
                            turnKey: r,
                            viewportHeightPx: l
                        } = e;
                        if ("center" === t) return b({
                            layout: n,
                            turnKey: r,
                            viewportHeightPx: l
                        });
                        let a = n.turnIndexByKey.get(r);
                        return null == a ? null : Math.max(0, (n.bottomOffsetsPx[a] ?? 0) + (n.heightsPx[a] ?? 0) - l + 10)
                    }({
                        align: tI.align,
                        layout: tb,
                        turnKey: tI.turnKey,
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
                        align: tI.align,
                        layout: tb,
                        targetElement: r,
                        turnElement: n,
                        turnKey: tI.turnKey,
                        viewportHeightPx: e.clientHeight,
                        windowZoom: tf
                    });
                if (null == l) return void queueMicrotask(() => ne(tI));
                let a = "top" === tI.align && null != r ? Math.max(0, tg.getLastScrollDistanceFromBottomPx() - (0, c.b)(r.getBoundingClientRect().top - e.getBoundingClientRect().top, tf) + 10) : l + D(eX);
                tg.scrollToDistanceFromBottomPx(a, "instant", "user"), t7(Math.max(0, a - D(eX)), e.clientHeight), queueMicrotask(() => ne(tI))
            }, eN[179] = na, eN[180] = eX, eN[181] = tb, eN[182] = tI, eN[183] = tg, eN[184] = tk, eN[185] = ne, eN[186] = t7, eN[187] = tf, eN[188] = eM) : eM = eN[188], eN[189] !== na || eN[190] !== eX || eN[191] !== tb || eN[192] !== tO || eN[193] !== tI || eN[194] !== tg || eN[195] !== tk || eN[196] !== ne || eN[197] !== t7 || eN[198] !== tf ? (eT = [na, tb, tO, tI, tg, tk, ne, eX, t7, tf], eN[189] = na, eN[190] = eX, eN[191] = tb, eN[192] = tO, eN[193] = tI, eN[194] = tg, eN[195] = tk, eN[196] = ne, eN[197] = t7, eN[198] = tf, eN[199] = eT) : eT = eN[199], (0, s.useLayoutEffect)(eM, eT), eN[200] !== eX || eN[201] !== t$ || eN[202] !== tX || eN[203] !== e0 || eN[204] !== tI || eN[205] !== to || eN[206] !== tg || eN[207] !== t7 ? (eD = () => {
                var e;
                if (null != tj.current) return;
                let t = tG.current,
                    n = t$(),
                    r = tV.current ?? n;
                if (tV.current = null, tG.current = n, null != tI || !to && t.turnKeys.at(-1) !== r.turnKeys.at(-1) || t === r) return;
                let l = D(eX),
                    a = tg.getLastScrollDistanceFromBottomPx({
                        includePendingUserScroll: !0
                    });
                if (null != (e0?.() ?? null)) return;
                if (tg.shouldFollowContentGrowth() && (e = a, 0 === l && e <= 24)) return void tg.compensateScrollToDistanceFromBottomPx(0);
                let o = M({
                    distanceFromBottomPx: tX(a),
                    preferLatestVisibleRow: a < l,
                    layout: t,
                    measuredHeightsByKey: tB.current,
                    nextLayout: r,
                    viewportHeightPx: tM.current.viewportHeightPx
                });
                if (null == o) return;
                let s = tg.getUnroundedScrollDistanceFromBottomPx(a),
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
                null != i && (i !== s || t.totalHeightPx !== r.totalHeightPx) && (t7(K(i, l), tM.current.viewportHeightPx), tg.compensateScrollToDistanceFromBottomPx(i))
            }, eN[200] = eX, eN[201] = t$, eN[202] = tX, eN[203] = e0, eN[204] = tI, eN[205] = to, eN[206] = tg, eN[207] = t7, eN[208] = eD) : eD = eN[208], eN[209] !== eX || eN[210] !== t$ || eN[211] !== tX || eN[212] !== e0 || eN[213] !== tb || eN[214] !== tI || eN[215] !== to || eN[216] !== tg || eN[217] !== t7 ? (eK = [eX, t$, tX, e0, tb, tI, to, tg, t7], eN[209] = eX, eN[210] = t$, eN[211] = tX, eN[212] = e0, eN[213] = tb, eN[214] = tI, eN[215] = to, eN[216] = tg, eN[217] = t7, eN[218] = eK) : eK = eN[218], (0, s.useLayoutEffect)(eD, eK), eN[219] !== tI || eN[220] !== t9 || eN[221] !== tY || eN[222] !== t7 ? (eR = () => {
                null == tI && null == tj.current && (t7(tM.current.distanceFromBottomPx, tM.current.viewportHeightPx), tY(), t9(tM.current.distanceFromBottomPx, tM.current.viewportHeightPx, !1))
            }, eN[219] = tI, eN[220] = t9, eN[221] = tY, eN[222] = t7, eN[223] = eR) : eR = eN[223], eN[224] !== tb || eN[225] !== tI || eN[226] !== t9 || eN[227] !== tY || eN[228] !== t7 ? (eH = [tb, tI, t9, tY, t7], eN[224] = tb, eN[225] = tI, eN[226] = t9, eN[227] = tY, eN[228] = t7, eN[229] = eH) : eH = eN[229], (0, s.useLayoutEffect)(eR, eH), eN[230] !== t6 ? (eF = () => {
                t6()
            }, eN[230] = t6, eN[231] = eF) : eF = eN[231], (0, s.useLayoutEffect)(eF), eN[232] !== tm || eN[233] !== e4 ? (ej = e4 ?? tm.at(-1)?.turnKey, eN[232] = tm, eN[233] = e4, eN[234] = ej) : ej = eN[234];
            let np = ej;
            eN[235] !== eQ ? (eA = (0, a.b)("relative shrink-0", eQ), eN[235] = eQ, eN[236] = eA) : eA = eN[236], eN[237] !== tb.totalHeightPx ? (eL = {
                height: tb.totalHeightPx
            }, eN[237] = tb.totalHeightPx, eN[238] = eL) : eL = eN[238];
            let nx = `${tb.topOffsetsPx[tZ.startIndex]??0}px`;
            eN[239] !== nx ? (e_ = {
                marginTop: nx
            }, eN[239] = nx, eN[240] = e_) : e_ = eN[240];
            let ny = t1.map(e => {
                let {
                    entry: t,
                    turnIndex: n
                } = e;
                return (0, r.jsx)(E, {
                    entry: t,
                    gapBeforePx: n === tZ.startIndex ? 0 : tb.gapsBeforePx[n] ?? 0,
                    retainedTopPx: n < tZ.startIndex || n >= tZ.endIndex ? tb.topOffsetsPx[n] : void 0,
                    latestTurnFollowContentRef: n === tm.length - 1 && null != eZ ? nu : void 0,
                    latestTurnFooter: t.turnKey === np ? e3 : void 0,
                    RowComponent: eU,
                    measuredHeightPx: null == ty[t.turnKey] ? void 0 : tb.heightsPx[n],
                    constrainedHeightPx: n !== tm.length - 1 && tI?.turnKey !== t.turnKey && null == ty[t.turnKey] ? tb.heightsPx[n] : void 0,
                    observeTurnElement: ni
                }, t.turnKey)
            });
            return eN[241] !== e_ || eN[242] !== ny ? (eO = (0, r.jsx)("div", {
                className: "flex flex-col",
                style: e_,
                children: ny
            }), eN[241] = e_, eN[242] = ny, eN[243] = eO) : eO = eN[243], eN[244] !== tQ || eN[245] !== eA || eN[246] !== eL || eN[247] !== eO ? (ez = (0, r.jsx)("div", {
                ref: tQ,
                className: eA,
                style: eL,
                children: eO
            }), eN[244] = tQ, eN[245] = eA, eN[246] = eL, eN[247] = eO, eN[248] = ez) : ez = eN[248], ez
        }

        function k(e, t) {
            return e.turnIndex - t.turnIndex
        }

        function I() {
            return new H
        }
        let E = (0, s.memo)(function(e) {
            let t, n, o, s, i, c, u = (0, l.c)(24),
                {
                    entry: d,
                    gapBeforePx: h,
                    latestTurnFollowContentRef: m,
                    latestTurnFooter: f,
                    RowComponent: p,
                    constrainedHeightPx: x,
                    measuredHeightPx: y,
                    retainedTopPx: v,
                    observeTurnElement: w
                } = e,
                {
                    turnKey: P
                } = d;
            u[0] !== w || u[1] !== P ? (t = e => w(P, e), u[0] = w, u[1] = P, u[2] = t) : t = u[2];
            let b = (0, g.a)(t),
                S = null != v && "absolute inset-x-0",
                C = null != x && "overflow-hidden";
            u[3] !== S || u[4] !== C ? (n = (0, a.b)(S, C), u[3] = S, u[4] = C, u[5] = n) : n = u[5];
            let k = y ?? x,
                I = null == v ? h : 0,
                E = null == y ? d.minHeightPx : void 0;
            return u[6] !== v || u[7] !== k || u[8] !== I || u[9] !== E ? (o = {
                height: k,
                marginTop: I,
                minHeight: E,
                top: v
            }, u[6] = v, u[7] = k, u[8] = I, u[9] = E, u[10] = o) : o = u[10], u[11] !== p || u[12] !== d || u[13] !== m || u[14] !== f ? (s = (0, r.jsx)(p, {
                entry: d,
                latestTurnFooter: f,
                latestTurnFollowContentRef: m
            }), u[11] = p, u[12] = d, u[13] = m, u[14] = f, u[15] = s) : s = u[15], u[16] !== b || u[17] !== s || u[18] !== P ? (i = (0, r.jsx)("div", {
                ref: b,
                className: "[&_[data-virtualized-turn-content]]:[content-visibility:visible]",
                "data-turn-key": P,
                children: s
            }), u[16] = b, u[17] = s, u[18] = P, u[19] = i) : i = u[19], u[20] !== i || u[21] !== n || u[22] !== o ? (c = (0, r.jsx)("div", {
                className: n,
                style: o,
                children: i
            }), u[20] = i, u[21] = n, u[22] = o, u[23] = c) : c = u[23], c
        });

        function B(e) {
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
            return r.distanceFromBottomPx === s && r.viewportHeightPx === o && r.renderedRange.startIndex === c.startIndex && r.renderedRange.endIndex === c.endIndex && T(r.turnKeys, a.turnKeys) ? r : {
                distanceFromBottomPx: s,
                renderedRange: c,
                turnKeys: a.turnKeys,
                viewportHeightPx: o
            }
        }

        function M(e) {
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

        function T(e, t) {
            return e === t || e.length === t.length && e.every((e, n) => e === t[n])
        }

        function D(e) {
            return Math.max(0, e?.() ?? 0)
        }

        function K(e, t) {
            return Math.max(0, e - t)
        }

        function R(e) {
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
                let t, n, h, m, g, f = (0, r.c)(14);
                f[0] !== e ? (t = void 0 === e ? {} : e, f[0] = e, f[1] = t) : t = f[1];
                let {
                    transcriptMcpAppIds: p,
                    blockedWidgetSource: x,
                    shouldBlockExternalEgress: y
                } = t, v = void 0 !== y && y, w = (0, l.y)(c.a), P = (0, l.y)(i.a), b = (0, l.z)(d.i), S = (0, l.z)(o.w);
                return f[2] !== S || f[3] !== x || f[4] !== P || f[5] !== b || f[6] !== w || f[7] !== v || f[8] !== p ? (n = () => {
                    for (let [e, t] of("chatgpt-thread" === w.value.routeKind && (0, s.b)(P, S.filter(e => v || null != x && (e.widgetSource ?? "descriptor") === x)), b))(v || null != x && (t.content.mcpAppScope.widgetSource ?? "descriptor") === x || t.hostedInThreadScrollLayout && p?.has(e) === !1) && (0, d.y)(w, e)
                }, h = [S, x, p, P, b, w, v], f[2] = S, f[3] = x, f[4] = P, f[5] = b, f[6] = w, f[7] = v, f[8] = p, f[9] = n, f[10] = h) : (n = f[9], h = f[10]), (0, a.useLayoutEffect)(n, h), f[11] !== w ? (m = () => {
                    (0, u.g)(w)
                }, g = [w], f[11] = w, f[12] = m, f[13] = g) : (m = f[12], g = f[13]), (0, a.useLayoutEffect)(m, g), null
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
                    f = (0, l.z)(s.f),
                    p = (0, o.X)(),
                    x = p.state,
                    y = x?.sidebarArea === "scheduled";
                d[0] !== f || d[1] !== p.key ? (t = {
                    locationKey: p.key,
                    accountId: f
                }, d[0] = f, d[1] = p.key, d[2] = t) : t = d[2];
                let v = (0, l.x)(i.a, t),
                    w = (0, a.useEffectEvent)(m);
                return d[3] !== f || d[4] !== v || d[5] !== p.key || d[6] !== w || d[7] !== h || d[8] !== y || d[9] !== g ? (n = () => {
                    if (!y || !h || v) return;
                    let e = new AbortController;
                    return w(e.signal).then(() => {
                        e.signal.aborted || g.set(i.a, {
                            locationKey: p.key,
                            accountId: f
                        }, !0)
                    }), () => e.abort()
                }, d[3] = f, d[4] = v, d[5] = p.key, d[6] = w, d[7] = h, d[8] = y, d[9] = g, d[10] = n) : n = d[10], d[11] !== f || d[12] !== v || d[13] !== p.key || d[14] !== h || d[15] !== y || d[16] !== g ? (u = [f, v, p.key, h, y, g], d[11] = f, d[12] = v, d[13] = p.key, d[14] = h, d[15] = y, d[16] = g, d[17] = u) : u = d[17], (0, a.useEffect)(n, u), null
            }
        })
    }),
    yLzP: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            a = n("oyxz"),
            o = n("ygO2"),
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
                getElement = () => this.element;
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
                    if (0 === e) return void this.clear();
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
                let t, n, h, m, g, f, p, x, y, v, w, P, b, S, C = (0, l.c)(31),
                    {
                        controller: k,
                        onReleased: I
                    } = e,
                    E = (0, u.b)(),
                    B = (0, a.useContext)(s.a),
                    M = (0, o.a)(),
                    {
                        getScrollElement: T
                    } = E;
                C[0] !== k ? (t = e => {
                    k.setElement(e)
                }, C[0] = k, C[1] = t) : t = C[1];
                let D = (0, c.a)(t);
                return C[2] !== k || C[3] !== I || C[4] !== M || C[5] !== E ? (n = () => {
                    k.updateContext(E, M, I)
                }, h = [k, E, M, I], C[2] = k, C[3] = I, C[4] = M, C[5] = E, C[6] = n, C[7] = h) : (n = C[6], h = C[7]), (0, a.useInsertionEffect)(n, h), C[8] !== k || C[9] !== T ? (m = () => {
                    let e = T();
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
                }, g = [k, T], C[8] = k, C[9] = T, C[10] = m, C[11] = g) : (m = C[10], g = C[11]), (0, a.useEffect)(m, g), C[12] !== k.cancelPendingUserScrollDecay ? (f = () => k.cancelPendingUserScrollDecay, C[12] = k.cancelPendingUserScrollDecay, C[13] = f) : f = C[13], C[14] !== k ? (p = [k], C[14] = k, C[15] = p) : p = C[15], (0, a.useEffect)(f, p), C[16] !== k || C[17] !== T ? (x = () => {
                    let e = T();
                    if (null == e || "u" < typeof IntersectionObserver) return;
                    let t = new IntersectionObserver(k.collapseIfHidden, {
                            root: e,
                            threshold: d
                        }),
                        n = k.getElement();
                    return null != n && t.observe(n), () => t.disconnect()
                }, y = [k, T], C[16] = k, C[17] = T, C[18] = x, C[19] = y) : (x = C[18], y = C[19]), (0, a.useEffect)(x, y), C[20] !== k || C[21] !== E ? (v = () => {
                    let e = E.addScrollListener(k.handleScroll),
                        t = E.addUserScrollListener(k.handleUserScroll);
                    return k.reconcileViewport(), () => {
                        e(), t()
                    }
                }, w = [k, E], C[20] = k, C[21] = E, C[22] = v, C[23] = w) : (v = C[22], w = C[23]), (0, a.useLayoutEffect)(v, w), C[24] !== k || C[25] !== T || C[26] !== B ? (P = () => {
                    let e = T();
                    if (null == e) return;
                    let t = null,
                        n = () => {
                            null == t && (t = window.requestAnimationFrame(() => {
                                t = null, k.reconcileViewport()
                            }))
                        },
                        r = B ?? (0, i.b)(),
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
                        null == B && r?.disconnect(), window.removeEventListener("resize", n), null != t && window.cancelAnimationFrame(t)
                    }
                }, b = [k, T, B], C[24] = k, C[25] = T, C[26] = B, C[27] = P, C[28] = b) : (P = C[27], b = C[28]), (0, a.useEffect)(P, b), C[29] !== D ? (S = (0, r.jsx)("div", {
                    ref: D,
                    className: "shrink-0",
                    "aria-hidden": !0
                }), C[29] = D, C[30] = S) : S = C[30], S
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
            f = n("eGPX"),
            p = n("Exwq"),
            x = n("w2yL"),
            y = n("KWzM"),
            v = n("GaCK");

        function w(e) {
            return e.isPopoverOpen ? {
                ...e,
                isPopoverOpen: !1
            } : e
        }

        function P(e, t, n, r, l, a) {
            return b({
                isSummaryPanelPinned: t && (a ?? (0, m.z)(!0 === n ? e.get(m.N) : e.get(m.C, n), n)),
                floatingPanelWidth: l,
                mainContentTargetWidth: r
            })
        }

        function b(e) {
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
                let t, n, a, o, w, S, C, k, I, E, B, M = (0, r.c)(64),
                    {
                        contentShiftResetKey: T,
                        controlledIsOpen: D,
                        floatingPanelWidth: K,
                        getCurrentPinStateKey: R,
                        isEnabled: H,
                        pinStateKey: F
                    } = void 0 === e ? {} : e,
                    j = void 0 === H || H,
                    A = void 0 === F || F,
                    L = (0, c.y)(g.a),
                    _ = (0, c.z)(null == D && !0 === A ? m.N : null),
                    O = (0, c.x)(null == D && !0 !== A ? m.C : null, !0 !== A && A),
                    z = D ?? (0, m.z)(!0 === A ? _ : O, A),
                    N = (0, c.z)(m.h),
                    q = (0, c.z)(h.G),
                    W = (0, c.z)(p.g),
                    U = (0, c.z)(v.b),
                    G = j && z,
                    V = K ?? 300,
                    Q = j && null == K && (D ?? (U.isPopoverOpen || "boolean" != typeof A && z)),
                    $ = (0, c.z)(f.c),
                    X = (0, u.useContext)(d.c),
                    Z = (0, l.a)(0),
                    Y = X?.mainContentTargetWidth ?? Z,
                    J = (0, l.a)(b({
                        isSummaryPanelPinned: G,
                        floatingPanelWidth: K,
                        mainContentTargetWidth: Y.get()
                    }));
                M[0] !== Y ? (t = e => Y.on("change", e), M[0] = Y, M[1] = t) : t = M[1];
                let ee = t,
                    et = () => (0, x.c)(Y.get(), V),
                    en = (0, u.useSyncExternalStore)(ee, et, et),
                    er = (0, u.useRef)(null);
                M[2] !== J ? (n = J.get(), M[2] = J, M[3] = n) : n = M[3], M[4] !== Y ? (a = Y.get(), M[4] = Y, M[5] = a) : a = M[5], M[6] !== n || M[7] !== a ? (o = {
                    offset: n,
                    width: a
                }, M[6] = n, M[7] = a, M[8] = o) : o = M[8];
                let el = (0, u.useRef)(o),
                    ea = (0, u.useRef)(!1),
                    eo = (0, u.useRef)(T),
                    es = (0, u.useRef)(N),
                    ei = (0, u.useRef)(q),
                    ec = (0, x.a)({
                        displayMode: en,
                        isPinned: G && null == K,
                        isPopoverOpen: Q
                    }),
                    eu = ec.shouldShow && !W;
                M[9] !== J || M[10] !== T || M[11] !== eo || M[12] !== D || M[13] !== K || M[14] !== R || M[15] !== q || M[16] !== j || M[17] !== Y || M[18] !== A || M[19] !== N || M[20] !== L ? (w = () => {
                    let e = es.current !== N,
                        t = ei.current !== q;
                    if (!ea.current && eo.current === T && !e && !t) return;
                    ea.current = !1, eo.current = T, es.current = N, ei.current = q;
                    let n = P(L, j, R?.() ?? A, Y.get(), K, D);
                    el.current = {
                        offset: n,
                        width: Y.get()
                    }, er.current?.(), J.jump(n)
                }, M[9] = J, M[10] = T, M[11] = eo, M[12] = D, M[13] = K, M[14] = R, M[15] = q, M[16] = j, M[17] = Y, M[18] = A, M[19] = N, M[20] = L, M[21] = w) : w = M[21], M[22] !== J || M[23] !== T || M[24] !== D || M[25] !== K || M[26] !== R || M[27] !== q || M[28] !== j || M[29] !== Y || M[30] !== A || M[31] !== N || M[32] !== L ? (S = [J, T, D, K, R, q, j, Y, A, N, L], M[22] = J, M[23] = T, M[24] = D, M[25] = K, M[26] = R, M[27] = q, M[28] = j, M[29] = Y, M[30] = A, M[31] = N, M[32] = L, M[33] = S) : S = M[33], (0, u.useLayoutEffect)(w, S);
                let ed = X?.chatPaneWidth ?? Y;
                M[34] !== ed || M[35] !== J || M[36] !== D || M[37] !== K || M[38] !== R || M[39] !== j || M[40] !== Y || M[41] !== A || M[42] !== L || M[43] !== $ ? (C = () => {
                    let e = (e, t) => {
                        let n = P(L, j, R?.() ?? A, e, K, D),
                            r = el.current,
                            l = J.get();
                        if (r.offset === n && (l === n || r.width === e && !t)) return;
                        if (el.current = {
                                offset: n,
                                width: e
                            }, er.current?.(), t || 0 === e || l === n) return void J.jump(n);
                        let a = ed.get();
                        if (a === e) {
                            let e = (0, s.a)(J, n, y.a),
                                t = document.activeViewTransition;
                            if (null != t) {
                                e.pause();
                                let n = () => e.play();
                                t.ready.then(n, n)
                            }
                            er.current = () => e.stop();
                            return
                        }
                        let o = (0, i.a)([a, e], [l, n]),
                            c = ed.on("change", e => {
                                let t = o(e);
                                J.set(t), t === n && queueMicrotask(c)
                            });
                        er.current = c
                    };
                    return e(Y.get(), $), Y.on("change", t => {
                        e(t, $ || 0 === Y.getPrevious() || L.get(m.h) !== es.current)
                    })
                }, M[34] = ed, M[35] = J, M[36] = D, M[37] = K, M[38] = R, M[39] = j, M[40] = Y, M[41] = A, M[42] = L, M[43] = $, M[44] = C) : C = M[44], M[45] !== ed || M[46] !== J || M[47] !== D || M[48] !== K || M[49] !== R || M[50] !== j || M[51] !== G || M[52] !== Y || M[53] !== A || M[54] !== L || M[55] !== $ ? (k = [ed, J, D, K, R, j, G, Y, A, L, $], M[45] = ed, M[46] = J, M[47] = D, M[48] = K, M[49] = R, M[50] = j, M[51] = G, M[52] = Y, M[53] = A, M[54] = L, M[55] = $, M[56] = k) : k = M[56], (0, u.useLayoutEffect)(C, k), M[57] === Symbol.for("react.memo_cache_sentinel") ? (I = () => () => {
                    ea.current = !0, er.current?.()
                }, E = [], M[57] = I, M[58] = E) : (I = M[57], E = M[58]), (0, u.useLayoutEffect)(I, E);
                let eh = ec.shouldHideInlineImmediately || W,
                    em = W ? null : ec.visibleSurface;
                return M[59] !== J || M[60] !== eu || M[61] !== eh || M[62] !== em ? (B = {
                    contentShift: J,
                    shouldHideInlineImmediately: eh,
                    shouldShow: eu,
                    visibleSurface: em
                }, M[59] = J, M[60] = eu, M[61] = eh, M[62] = em, M[63] = B) : B = M[63], B
            },
            b: function(e, t) {
                let n, s, i, h, g, f, p = (0, r.c)(15),
                    y = void 0 !== t && t,
                    P = (0, c.z)(m.i),
                    b = (0, c.z)(m.r),
                    S = (0, u.useContext)(d.c),
                    C = (0, l.a)(0),
                    k = S?.mainContentTargetWidth ?? C;
                p[0] !== y || p[1] !== k || p[2] !== e ? (n = () => {
                    var t, n;
                    t = e, n = y ? "overlay" : (0, x.c)(k.get()), t.set(v.b, e => {
                        let t = "overlay" === n && e.isPopoverOpen;
                        return e.displayMode === n && e.isPopoverOpen === t ? e : {
                            displayMode: n,
                            isPopoverOpen: t
                        }
                    })
                }, p[0] = y, p[1] = k, p[2] = e, p[3] = n) : n = p[3];
                let I = n;
                p[4] !== I ? (s = () => {
                    a.b.update(I)
                }, p[4] = I, p[5] = s) : s = p[5], (0, o.a)(k, "change", s), p[6] !== I ? (i = () => (I(), () => (0, a.a)(I)), p[6] = I, p[7] = i) : i = p[7], p[8] !== P || p[9] !== b || p[10] !== I ? (h = [P, b, I], p[8] = P, p[9] = b, p[10] = I, p[11] = h) : h = p[11], (0, u.useLayoutEffect)(i, h), p[12] !== e ? (g = () => () => {
                    e.set(v.b, w)
                }, f = [e], p[12] = e, p[13] = g, p[14] = f) : (g = p[13], f = p[14]), (0, u.useLayoutEffect)(g, f)
            }
        })
    })
};