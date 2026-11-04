export const __rspack_esm_ids = [296241];
export const __webpack_modules__ = {
    TS05: (function(e, t, n) {
        var r = n("BolX"),
            l = n("tSEg");
        let o = (0, r.v)(l.a, e => !1, void 0, {
            autoDispose: 6e4
        });
        n.d(t, {}, {
            a: o
        })
    }),
    IL1g: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            o = n("zd8w"),
            a = n("Wf1j"),
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

        function u(e) {
            let t, n, a = (0, l.c)(4),
                {
                    inDialog: u
                } = e,
                c = void 0 !== u && u;
            return a[0] !== c ? (t = i.map((e, t) => {
                let n = e.emphasize ? (0, r.jsx)("strong", {
                    children: e.label
                }) : e.label;
                return (0, r.jsxs)(o.Fragment, {
                    children: [t > 0 && (0, r.jsx)("span", {
                        "aria-hidden": "true",
                        children: "|"
                    }), e.href ? (0, r.jsx)(s.a, {
                        href: e.href,
                        initiator: "open_in_browser_bridge",
                        openTarget: c ? "external-browser" : void 0,
                        underline: "always",
                        children: n
                    }) : (0, r.jsxs)("span", {
                        children: [e.prefix, n]
                    })]
                }, e.label)
            }), a[0] = c, a[1] = t) : t = a[1], a[2] !== t ? (n = (0, r.jsx)("div", {
                className: "flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-xs text-secondary select-text",
                children: t
            }), a[2] = t, a[3] = n) : n = a[3], n
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, s = (0, l.c)(5),
                    {
                        inDialog: i
                    } = e,
                    c = void 0 !== i && i,
                    d = (0, a.a)();
                return "ko" !== new Intl.Locale(d.locale).language ? null : (s[0] !== c ? (t = (0, r.jsx)(u, {
                    inDialog: c
                }), s[0] = c, s[1] = t) : t = s[1], s[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, r.jsx)("p", {
                    children: "귀하가 19세 미만의 이용자로서 귀하의 법정대리인이 본 계약에 동의하지 않은 경우, 귀하 또는 귀하의 법정대리인은 계약을 취소할 수 있습니다."
                }), s[2] = n) : n = s[2], s[3] !== t ? (o = (0, r.jsxs)("div", {
                    className: "flex flex-col items-center gap-2 text-center text-xs text-secondary select-text",
                    children: [t, n]
                }), s[3] = t, s[4] = o) : o = s[4], o)
            },
            b: u
        })
    }),
    DWXw: (function(e, t, n) {
        n.d(t, {
            BrowserComposerDisclaimer: () => A,
            BrowserComposerDisclaimerMessage: () => _
        });
        var r = n("ABep"),
            l = n("QosV"),
            o = n("BolX"),
            a = n("Wf1j"),
            s = n("oyxz"),
            i = n("Qgfj"),
            u = n("jqIZ"),
            c = n("OFP1"),
            d = n("EOo5"),
            h = n("ipGa");

        function m(e) {
            let t, n, o, a, i = (0, l.c)(9),
                {
                    context: u
                } = e;
            i[0] !== u.businessName ? (t = u.businessName?.trim(), i[0] = u.businessName, i[1] = t) : t = i[1];
            let c = t;
            return i[2] !== c ? (n = (0, r.jsx)("p", {
                children: c ? (0, r.jsx)(s.a, {
                    id: "chatgpt.ads.business_agent.composer_disclosure.aggregate_usage.body.named",
                    defaultMessage: "{businessName} can’t see this chat or your personal info — just overall usage trends to help improve their AI agent.",
                    values: {
                        businessName: c
                    },
                    description: "Privacy disclosure below the composer in every organic or sponsored Business Agent chat. It reassures users that the business cannot see the conversation or personal information and receives only aggregate usage trends to improve its AI agent. The {businessName} placeholder is the advertiser-provided business display name and may be long. Allow the sentence to wrap."
                }) : (0, r.jsx)(s.a, {
                    id: "chatgpt.ads.business_agent.composer_disclosure.aggregate_usage.body.unnamed",
                    defaultMessage: "This business can’t see this chat or your personal info — just overall usage trends to help improve their AI agent.",
                    description: "Privacy disclosure below the composer in every organic or sponsored Business Agent chat when no business display name is available. It reassures users that the business operating the agent cannot see the conversation or personal information and receives only aggregate usage trends to improve its AI agent. Allow the sentence to wrap."
                })
            }), i[2] = c, i[3] = n) : n = i[3], i[4] !== u.notice ? (o = u.notice?.trim() ? (0, r.jsx)("p", {
                children: u.notice
            }) : null, i[4] = u.notice, i[5] = o) : o = i[5], i[6] !== n || i[7] !== o ? (a = (0, r.jsxs)("div", {
                className: "flex flex-col gap-1",
                children: [n, o]
            }), i[6] = n, i[7] = o, i[8] = a) : a = i[8], a
        }
        var g = n("YJm0"),
            p = n("fzVa"),
            f = n("dQRk"),
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
        let K = new WeakSet;

        function D(e) {
            let t, n, o, a, i = (0, l.c)(10),
                {
                    children: u
                } = e,
                c = (0, B.a)("(width < 640px)"),
                d = (0, C.useContext)(M.a);
            i[0] !== d ? (t = e => {
                if (null == d) return R;
                let t = () => {
                        K.add(d), e()
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
            i[2] !== d ? (n = () => null == d || !d.hasText() && !K.has(d), i[2] = d, i[3] = n) : n = i[3];
            let m = n,
                g = (0, C.useSyncExternalStore)(h, m, H);
            if (!c) {
                let e;
                return i[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(k.b, {}), i[4] = e) : e = i[4], e
            }
            return i[5] !== g ? (o = g && (0, r.jsx)(I.a, {
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
            }), i[5] = g, i[6] = o) : o = i[6], i[7] !== u || i[8] !== o ? (a = (0, r.jsxs)("div", {
                className: "flex flex-col items-center gap-1",
                children: [u, o]
            }), i[7] = u, i[8] = o, i[9] = a) : a = i[9], a
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
        var j = n("RGWz");

        function A(e) {
            let t, n, o = (0, l.c)(7),
                a = "home" === e.placement ? "empty:hidden" : void 0,
                s = e.placement ?? "thread",
                i = "home" === e.placement ? void 0 : L;
            return o[0] !== e || o[1] !== i ? (t = (0, r.jsx)(_, {
                ...e,
                renderOrdinaryDisclaimer: i
            }), o[0] = e, o[1] = i, o[2] = t) : t = o[2], o[3] !== a || o[4] !== s || o[5] !== t ? (n = (0, r.jsx)(P.a, {
                browser: !0,
                children: (0, r.jsx)(S.a, {
                    className: a,
                    placement: s,
                    children: t
                })
            }), o[3] = a, o[4] = s, o[5] = t, o[6] = n) : n = o[6], n
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
            let t, n, i, c = (0, l.c)(28),
                {
                    aiServiceDisclaimer: d,
                    conversationId: g,
                    hasUserMessage: p,
                    isTemporaryChat: x,
                    ordinaryDisclaimer: w,
                    pendingWorkspaceDisclaimer: P,
                    placement: b,
                    regulatedConnectorKindOverride: S,
                    renderOrdinaryDisclaimer: C
                } = e,
                k = void 0 === b ? "thread" : b,
                I = (0, a.a)(),
                {
                    search: E
                } = (0, u.Y)(),
                {
                    data: B
                } = (0, v.i)(),
                M = (0, o.x)(f.t, g ?? null),
                T = (0, o.x)(f.S, M?.status === "ready" && void 0 === S ? g ?? null : null);
            c[0] !== p || c[1] !== x || c[2] !== k || c[3] !== E ? (t = (x ?? (0, y.i)(E)) && !(p ?? "thread" === k), c[0] = p, c[1] = x, c[2] = k, c[3] = E, c[4] = t) : t = c[4];
            let K = t;
            if (null == B) return null == M ? P ?? null : null;
            if (null != M) {
                let e;
                if ("ready" !== M.status) return null;
                let t = void 0 !== S ? S : T;
                if (null != t) {
                    let e;
                    return c[5] !== t || c[6] !== w ? (e = (0, r.jsx)(W, {
                        ordinaryDisclaimer: w,
                        regulatedConnectorKind: t
                    }), c[5] = t, c[6] = w, c[7] = e) : e = c[7], e
                }
                return c[8] !== M.context ? (e = (0, r.jsx)(m, {
                    context: M.context
                }), c[8] = M.context, c[9] = e) : e = c[9], e
            }
            if ("workspace" === B.structure) {
                let e;
                return c[10] !== B || c[11] !== P || c[12] !== C || c[13] !== K ? (e = (0, r.jsx)(U, {
                    account: B,
                    pendingWorkspaceDisclaimer: P,
                    isTemporaryChat: K,
                    renderOrdinaryDisclaimer: C
                }), c[10] = B, c[11] = P, c[12] = C, c[13] = K, c[14] = e) : e = c[14], e
            }
            c[15] !== w || c[16] !== C ? (n = C?.(w ?? (0, r.jsx)(s.a, {
                ...V.personal
            })) ?? w, c[15] = w, c[16] = C, c[17] = n) : n = c[17], c[18] !== B.id || c[19] !== d || c[20] !== g || c[21] !== k || c[22] !== S || c[23] !== K || c[24] !== n ? (i = (0, r.jsx)(z, {
                accountId: B.id,
                aiServiceDisclaimer: d,
                conversationId: g,
                isTemporaryChat: K,
                ordinaryDisclaimer: n,
                placement: k,
                regulatedConnectorKindOverride: S
            }), c[18] = B.id, c[19] = d, c[20] = g, c[21] = k, c[22] = S, c[23] = K, c[24] = n, c[25] = i) : i = c[25];
            let H = i;
            if ("home" === k && !p && !K && !(0, h.a)() && "ko" === new Intl.Locale(I.locale).language) {
                let e;
                return c[26] !== H ? (e = (0, r.jsx)(D, {
                    children: H
                }), c[26] = H, c[27] = e) : e = c[27], e
            }
            return H
        }

        function z(e) {
            let t, n = (0, l.c)(16),
                {
                    accountId: o,
                    aiServiceDisclaimer: a,
                    conversationId: s,
                    isTemporaryChat: i,
                    ordinaryDisclaimer: u,
                    placement: c,
                    regulatedConnectorKindOverride: d
                } = e,
                h = (0, b.h)("1831960162");
            if (!(0, b.i)("1831960162") && !h) {
                let e;
                return n[0] !== o || n[1] !== a || n[2] !== s || n[3] !== i || n[4] !== u || n[5] !== c || n[6] !== d ? (e = (0, r.jsx)(O, {
                    accountId: o,
                    aiServiceDisclaimer: a,
                    conversationId: s,
                    isTemporaryChat: i,
                    ordinaryDisclaimer: u,
                    placement: c,
                    regulatedConnectorKindOverride: d
                }), n[0] = o, n[1] = a, n[2] = s, n[3] = i, n[4] = u, n[5] = c, n[6] = d, n[7] = e) : e = n[7], e
            }
            return n[8] !== a || n[9] !== s || n[10] !== i || n[11] !== u || n[12] !== c || n[13] !== d || n[14] !== h ? (t = (0, r.jsx)(q, {
                aiServiceDisclaimer: a,
                conversationId: s,
                isTemporaryChat: i,
                ordinaryDisclaimer: u,
                placement: c,
                regulatedConnectorKindOverride: d,
                showAiServiceDisclaimer: h
            }), n[8] = a, n[9] = s, n[10] = i, n[11] = u, n[12] = c, n[13] = d, n[14] = h, n[15] = t) : t = n[15], t
        }

        function O(e) {
            let t, n = (0, l.c)(8),
                {
                    accountId: a,
                    aiServiceDisclaimer: s,
                    conversationId: i,
                    isTemporaryChat: u,
                    ordinaryDisclaimer: c,
                    placement: h,
                    regulatedConnectorKindOverride: m
                } = e,
                {
                    userId: g
                } = (0, d.a)(),
                f = (0, o.z)(x.n),
                {
                    data: y
                } = (0, o.z)(p.b),
                v = null != g && f === a,
                w = (0, b.h)(!!v && (null == y || "under_18" === y.age_status) && "1639821169");
            return v ? (n[0] !== s || n[1] !== i || n[2] !== u || n[3] !== c || n[4] !== h || n[5] !== m || n[6] !== w ? (t = (0, r.jsx)(q, {
                aiServiceDisclaimer: s,
                conversationId: i,
                isTemporaryChat: u,
                ordinaryDisclaimer: c,
                placement: h,
                regulatedConnectorKindOverride: m,
                showAiServiceDisclaimer: w
            }), n[0] = s, n[1] = i, n[2] = u, n[3] = c, n[4] = h, n[5] = m, n[6] = w, n[7] = t) : t = n[7], t) : null
        }

        function q(e) {
            let t, n, o = (0, l.c)(10),
                {
                    aiServiceDisclaimer: a,
                    conversationId: i,
                    isTemporaryChat: u,
                    ordinaryDisclaimer: c,
                    placement: d,
                    regulatedConnectorKindOverride: m,
                    showAiServiceDisclaimer: g
                } = e;
            o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, h.a)(), o[0] = t) : t = o[0];
            let p = t;
            if (u) {
                let e;
                return o[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(s.a, {
                    ...V.temporaryChat
                }), o[1] = e) : e = o[1], e
            }
            if (g) {
                let e;
                return o[2] !== a ? (e = a ?? (0, r.jsx)(s.a, {
                    ...V.aiService
                }), o[2] = a, o[3] = e) : e = o[3], e
            }
            if (void 0 !== m) {
                let e;
                return null == m && (p || "home" === d) ? null : (o[4] !== c || o[5] !== m ? (e = (0, r.jsx)(W, {
                    ordinaryDisclaimer: c,
                    regulatedConnectorKind: m
                }), o[4] = c, o[5] = m, o[6] = e) : e = o[6], e)
            }
            return "home" === d ? null : (o[7] !== i || o[8] !== c ? (n = (0, r.jsx)(N, {
                conversationId: i,
                isBrowserSideChat: p,
                ordinaryDisclaimer: c
            }), o[7] = i, o[8] = c, o[9] = n) : n = o[9], n)
        }

        function N(e) {
            let t, n = (0, l.c)(3),
                {
                    conversationId: a,
                    isBrowserSideChat: s,
                    ordinaryDisclaimer: i
                } = e,
                u = (0, o.x)(f.S, a ?? null);
            return s && null == u ? null : (n[0] !== i || n[1] !== u ? (t = (0, r.jsx)(W, {
                ordinaryDisclaimer: i,
                regulatedConnectorKind: u
            }), n[0] = i, n[1] = u, n[2] = t) : t = n[2], t)
        }

        function W(e) {
            let t, n = (0, l.c)(4),
                {
                    ordinaryDisclaimer: o,
                    regulatedConnectorKind: a
                } = e;
            if ("finance" === a) {
                let e;
                return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(s.a, {
                    ...V.finance
                }), n[0] = e) : e = n[0], e
            }
            if ("health" === a) {
                let e;
                return n[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(s.a, {
                    ...V.health
                }), n[1] = e) : e = n[1], e
            }
            return n[2] !== o ? (t = o ?? (0, r.jsx)(s.a, {
                ...V.personal
            }), n[2] = o, n[3] = t) : t = n[3], t
        }

        function U(e) {
            let t, n = (0, l.c)(10),
                {
                    account: a,
                    pendingWorkspaceDisclaimer: i,
                    isTemporaryChat: u,
                    renderOrdinaryDisclaimer: d
                } = e,
                m = (0, h.a)(),
                {
                    data: p
                } = (0, o.x)(g.a, a.id),
                {
                    data: f
                } = (0, o.x)(c.k, a.id);
            if (null == p || null != i && null == f) return i ?? null;
            let x = "early-access" === p.account.workspace_type;
            if (!x && null == f) return null;
            let y = p.account.name ?? a.name;
            if (f?.beta_settings.training_allowed === !0) {
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
            } else if (u) {
                let e;
                n[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(s.a, {
                    ...V.workspaceTemporaryChat
                }), n[3] = e) : e = n[3], t = e
            } else if (null != p.account.ekm_config) {
                let e;
                n[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(s.a, {
                    ...V.encryptedWorkspace
                }), n[4] = e) : e = n[4], t = e
            } else if ("k12" === a.plan_type) {
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
            a: () => f
        });
        var r = n("i5ac"),
            l = n.n(r),
            o = n("SKhr"),
            a = n("L6Md");
        let s = Array.from("αβγδεζηθικλμνξοπρστυφχψω"),
            i = new Map([..."alpha beta gamma delta epsilon zeta eta theta iota kappa lambda mu nu xi omicron pi rho sigma tau upsilon phi chi psi omega".split(" ").map((e, t) => [e, s[t]]), ..."nabla:∇ partial:∂ cdot:⋅ times:× div:÷ pm:± mp:∓ le:≤ leq:≤ ge:≥ geq:≥ ne:≠ neq:≠ infty:∞ sum:∑ prod:∏ int:∫ in:∈ notin:∉ to:→ rightarrow:→ leftarrow:←".split(" ").map(e => {
                let [t, n] = e.split(":");
                return [t, n]
            })]),
            u = /^\\(?:mathbf|boldsymbol|bm|mathrm|mathit|mathsf|mathtt|mathnormal|mathbb|mathcal|mathscr|mathfrak|textbf|textit|textrm)$/,
            c = /^\\(?:quad|qquad|enspace|thinspace|medspace|thickspace|negthinspace|displaystyle|textstyle|scriptstyle|scriptscriptstyle|limits|nolimits|[,;:! ])$/,
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

            function o() {
                let e = t[l]?.start;
                if (null == e) throw Error("Missing argument");
                let n = a(),
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

            function a() {
                let e = t[l++];
                if (null == e || "}" === e.value) throw Error("Incomplete math");
                if ("{" === e.value) {
                    let r = [];
                    for (; t[l]?.value !== "}";) r.push(...a());
                    return n.push({
                        start: e.start,
                        end: t[l++].end
                    }), r
                }
                if (u.test(e.value)) {
                    let r = a();
                    return n.push({
                        start: e.start,
                        end: t[l - 1].end
                    }), r
                }
                if (c.test(e.value)) return [];
                if (d.test(e.value)) {
                    let n, o = t[l++];
                    if (null == o) throw Error("Missing delimiter");
                    if ("\\left" === e.value) n = {
                        start: e.start,
                        end: o.end
                    }, r.push(n);
                    else if ("\\right" === e.value) {
                        if (null == (n = r.pop())) throw Error("Unpaired delimiter");
                        n.end = o.end
                    }
                    return "." === o.value ? [] : [{
                        ...o,
                        start: e.start,
                        delimiter: n
                    }]
                }
                if (/^\\[dt]?frac$/.test(e.value)) return [{
                    ...e,
                    value: "\\frac"
                }, ...o(), ...o()];
                if (/^(?:[_^]|\\(?:sqrt|vec|hat|bar|overline|underline))$/.test(e.value) || e.value.startsWith("\\") && !i.has(e.value.slice(1).replace(/^var/, "").toLowerCase()) && t[l]?.value === "{") {
                    if (t[l]?.value === "[") throw Error("Indexed argument");
                    return [e, ...o()]
                }
                let s = e.value.replace(/^\\/, "");
                return s = (s = (s = i.get(s.replace(/^var/, "").toLowerCase()) ?? e.value).replace(/[\u{1D400}-\u{1D7FF}]/gu, e => e.normalize("NFKC")).toLowerCase()).replace(/[ϵϑϕϖϱς−·]/g, e => "εθφπρσ-⋅" ["ϵϑϕϖϱς−·".indexOf(e)]), [{
                    ...e,
                    value: s
                }]
            }
            try {
                let e = [];
                for (; l < t.length;) e.push(...a());
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
                searchPersisted: u,
                searchMath: c = !1,
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
                            u = t.flatMap(e => e.units.flatMap(t => (t.textChunks ?? [t.text]).flatMap((r, l) => {
                                let o = {
                                        turnKey: e.turnKey,
                                        unitId: t.unitId,
                                        text: n ? r.replace(/\s+/g, " ").trim() : r,
                                        equationIndex: void 0
                                    },
                                    a = n ? t.equations?.[l] : void 0;
                                return null == a ? [o] : [o, {
                                    ...o,
                                    text: a,
                                    equationIndex: l
                                }]
                            }))),
                            c = {
                                domain: e.domain,
                                contextId: e.contextId,
                                query: l,
                                regex: s,
                                searchMath: n || void 0,
                                matches: [],
                                totalMatches: 0,
                                isCapped: !1
                            };
                        if (!l) return c;
                        let d = null == s ? null : await (0, m.a)({
                            query: s,
                            texts: u.map(e => e.text),
                            mathTexts: u.map(e => null != e.equationIndex),
                            maxMatches: 250
                        }, r);
                        if (d?.error) return {
                            ...c,
                            error: d.error
                        };
                        c.totalMatches = d?.totalMatches ?? 0;
                        let g = new Map;
                        for (let [t, n] of u.entries()) {
                            let r = (0, o.c)(n.turnKey, n.unitId),
                                s = g.get(r) ?? 0,
                                {
                                    offsets: u,
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
                                    let o = h(e),
                                        s = h(i.get(r) ?? r);
                                    if (null == o || null == s) {
                                        let t = e.toLowerCase(),
                                            o = r.toLowerCase(),
                                            s = [...e.matchAll(/\\[a-zA-Z]+/g)];
                                        for (let n = t.indexOf(o); n >= 0; n = t.indexOf(o, n + o.length)) s.some(e => n > e.index && n < e.index + e[0].length) || l.push((0, a.a)(e, {
                                            start: n,
                                            end: n + r.length
                                        }));
                                        return {
                                            offsets: l.slice(0, n),
                                            totalMatches: l.length
                                        }
                                    }
                                    let u = 0;
                                    for (let e = 0; s.tokens.length > 0 && e <= o.tokens.length - s.tokens.length; e += 1) {
                                        if (!s.tokens.every((t, n) => t.value === o.tokens[e + n].value)) continue;
                                        let t = o.tokens.slice(e, e + s.tokens.length),
                                            r = t[0].start,
                                            a = t[t.length - 1].end;
                                        for (let e of t) r = Math.min(r, e.delimiter?.start ?? r), a = Math.max(a, e.delimiter?.end ?? a);
                                        for (let e of o.groups) r < e.start && a > e.start && a < e.end && (a = e.end), r > e.start && r < e.end && a > e.end && (r = e.start);
                                        u += 1, l.length < n && l.push({
                                            start: r,
                                            end: a
                                        }), e += s.tokens.length - 1
                                    }
                                    return {
                                        offsets: l,
                                        totalMatches: u
                                    }
                                })(n.text, l, 250 - c.matches.length);
                            for (let [t, r] of(c.totalMatches += m, u.entries())) {
                                let l = {
                                    domain: "conversation",
                                    contextId: e.contextId,
                                    turnKey: n.turnKey,
                                    unitId: n.unitId,
                                    matchIndex: null == n.equationIndex ? s + t : t,
                                    equationIndex: n.equationIndex,
                                    equationRange: null == n.equationIndex ? void 0 : r
                                };
                                c.matches.push({
                                    id: (0, o.b)(l),
                                    ordinal: c.matches.length + 1,
                                    location: l
                                })
                            }
                            null == n.equationIndex && g.set(r, s + u.length)
                        }
                        return c.isCapped = c.totalMatches > c.matches.length, c
                    }(e, n(), c, t?.signal);
                    if (c || null == u) return f;
                    let x = await u(e, t);
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
                        a = d.getTurnContainer(e.turnKey),
                        i = (0, o.b)(e),
                        u = s && null != a && null == (0, o.g)({
                            container: a,
                            matchId: i,
                            includeShadowRoots: !1
                        });
                    if (null == a || l || u) {
                        if (n?.signal?.aborted || (n?.signal == null ? await d.scrollToTurn(e.turnKey) : await d.scrollToTurn(e.turnKey, {
                                signal: n.signal
                            }), n?.signal?.aborted)) return;
                        a = d.getTurnContainer(e.turnKey)
                    }
                    null != a && await (0, g.b)({
                        container: a,
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
            a: () => c
        });
        var r = n("QosV"),
            l = n("BolX"),
            o = n("zd8w"),
            a = n("SKhr"),
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
        var u = n("TwSq");

        function c(e) {
            let t, c, p, f, x, y, v, w, P, b, S, C = (0, r.c)(20),
                {
                    containerRef: k,
                    contextId: I,
                    onContentChange: E
                } = e,
                B = (0, l.z)(u.d),
                M = (0, l.z)(u.g),
                T = B?.contextId === I ? B : null,
                K = null == T ? null : M?.id ?? null,
                {
                    schedule: D,
                    cancel: H
                } = (w = (0, r.c)(5), P = (0, o.useRef)(null), 80 !== w[0] ? (x = e => {
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
            let R = (0, o.useEffectEvent)(t);
            C[2] !== T || C[3] !== K || C[4] !== k ? (c = async (e, t) => {
                let r = k.current;
                if (null == r || ((0, a.a)(r, {
                        includeShadowRoots: !1
                    }), t.takeRecords(), null == T)) return;
                let l = (0, s.a)(T.matches),
                    o = Array.from(r.querySelectorAll("[data-content-search-unit-key]")).flatMap(e => {
                        let t = l.get(e.dataset.contentSearchUnitKey ?? "");
                        return null == t ? [] : [{
                            element: e,
                            matches: t
                        }]
                    }),
                    u = (e, t) => {
                        t.forEach(t => {
                            (0, a.l)({
                                element: t,
                                matchId: e
                            }), (0, a.k)(t, e === K)
                        })
                    },
                    c = o.map(g),
                    p = e => {
                        e.forEach((e, t) => e.forEach((e, n) => u(c[t].matches[n].id, e)))
                    };
                if (!T.searchMath) {
                    p(c.map(e => {
                        let {
                            element: t,
                            matches: n
                        } = e;
                        return (0, a.i)({
                            target: t,
                            query: T.query,
                            maxMatches: n.length,
                            includeShadowRoots: !1
                        }).matches
                    })), t.takeRecords();
                    return
                }
                let f = [];
                for (let {
                        element: e,
                        matches: t
                    }
                    of o) e.querySelectorAll("[data-math-source]").forEach((e, r) => {
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
                    0 !== l.length && f.push((async function(e, t) {
                        let r = e.querySelector(".katex-html"),
                            l = e.dataset.mathSource;
                        if (null == r || null == l || 0 === t.length) return () => t.map(() => []);
                        let {
                            katex: o
                        } = await Promise.all([n.e(990054), n.e(559373)]).then(n.bind(n, "RlG8")), s = i(r), u = new Map(s.map(e => {
                            let {
                                node: t
                            } = e;
                            return [t, t.data]
                        })), c = new Set(s.map(e => {
                            let {
                                color: t
                            } = e;
                            return t
                        })), d = document.createElement("span"), h = t.map(() => {
                            let e, t = c.size + 1;
                            do e = `#${t.toString(16).padStart(6,"0")}`, d.style.color = e, t += 1; while (c.has(d.style.color)) return c.add(d.style.color), {
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
                                    d.innerHTML = o.renderToString(r, {
                                        displayMode: null != e.querySelector(".katex-display"),
                                        strict: "ignore",
                                        output: "html"
                                    })
                                } catch {
                                    return !1
                                }
                                let a = i(d),
                                    u = a.length === s.length && a.every((e, t) => {
                                        let {
                                            text: n
                                        } = e;
                                        return n === s[t].text
                                    });
                                return a.forEach((e, t) => {
                                    let n = m.get(e.color);
                                    if (null == n) return;
                                    let r = s[t];
                                    if (!u) {
                                        let t = s.filter(t => {
                                            let {
                                                text: n
                                            } = t;
                                            return n === e.text
                                        });
                                        if (1 !== t.length || 1 !== a.filter(t => {
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
                            let n, o = t.map(() => []);
                            if (e.dataset.mathSource !== l || !e.contains(r) || [...u].some(e => {
                                    let [t, n] = e;
                                    return !r.contains(t) || t.data !== n
                                })) return o;
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
                                of i.reverse()) o[e].unshift(... function e(t) {
                                let n = t[0],
                                    r = t[t.length - 1],
                                    l = document.createRange();
                                l.setStart(n.node, n.offset), l.setEnd(r.node, r.offset + r.text.length);
                                let o = l.commonAncestorContainer;
                                for (; l.startContainer !== o && 0 === l.startOffset;) l.setStartBefore(l.startContainer);
                                for (; l.endContainer !== o && l.endOffset === (l.endContainer instanceof Text ? l.endContainer.length : l.endContainer.childNodes.length);) l.setEndAfter(l.endContainer);
                                if (l.startContainer !== l.endContainer) return [...t].reverse().flatMap(t => e([t])).reverse();
                                let s = (0, a.e)();
                                return l.surroundContents(s), [s]
                            }(t));
                            return o
                        }
                    })(e, l.map(m)).then(e => () => e().forEach((e, t) => u(l[t].id, e))))
                });
                let [x, y] = await Promise.all([(0, a.j)(c.map(h), T.query, T.regex, e), Promise.all(f)]);
                e.aborted || (p(x()), y.forEach(d), t.takeRecords())
            }, C[2] = T, C[3] = K, C[4] = k, C[5] = c) : c = C[5];
            let F = (0, o.useEffectEvent)(c);
            C[6] !== T?.runId || C[7] !== F || C[8] !== H || C[9] !== k || C[10] !== R || C[11] !== D ? (p = () => {
                let e = k.current;
                if (null == e) return;
                let t = null,
                    n = () => {
                        t?.abort(), F((t = new AbortController).signal, r)
                    },
                    r = new MutationObserver(e => {
                        (0, a.m)(e) && (t?.abort(), D(() => {
                            R(), n()
                        }))
                    });
                return T?.runId == null ? void n() : (r.observe(e, {
                    childList: !0,
                    subtree: !0,
                    characterData: !0,
                    attributeFilter: ["hidden"]
                }), n(), () => {
                    r.disconnect(), t?.abort(), H(), (0, a.a)(e, {
                        includeShadowRoots: !1
                    })
                })
            }, C[6] = T?.runId, C[7] = F, C[8] = H, C[9] = k, C[10] = R, C[11] = D, C[12] = p) : p = C[12];
            let j = T?.runId;
            C[13] !== K || C[14] !== H || C[15] !== k || C[16] !== I || C[17] !== D || C[18] !== j ? (f = [j, K, H, k, I, D], C[13] = K, C[14] = H, C[15] = k, C[16] = I, C[17] = D, C[18] = j, C[19] = f) : f = C[19], (0, o.useEffect)(p, f)
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
            o = n("zd8w"),
            a = n("oyxz");
        n.d(t, {}, {
            a: function(e) {
                let t, n, s, i, u, c, d, h, m, g = (0, l.c)(15),
                    {
                        onNavigate: p
                    } = e,
                    f = (0, o.useRef)(null),
                    x = (0, o.useRef)(null),
                    [y, v] = (0, o.useState)(!1);
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
                }, n = [], g[0] = t, g[1] = n) : (t = g[0], n = g[1]), (0, o.useEffect)(t, n), g[2] === Symbol.for("react.memo_cache_sentinel") ? (s = () => x.current?.abort(), g[2] = s) : s = g[2], g[3] !== p ? (i = e => {
                    x.current?.abort();
                    let t = e.currentTarget;
                    t.tabIndex = -1;
                    let n = new AbortController;
                    x.current = n, v(!1), p(n.signal).then(e => {
                        !n.signal.aborted && t.isConnected && t.ownerDocument.activeElement === t && (e?.isConnected ? e.focus({
                            preventScroll: !0
                        }) : v(!0))
                    })
                }, g[3] = p, g[4] = i) : i = g[4], g[5] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, r.jsx)(a.a, {
                    id: "codex.conversation.latestResponse",
                    defaultMessage: "Latest response",
                    description: "Invisible heading before the composer; focusing it moves to the newest assistant response"
                }), g[5] = u) : u = g[5], g[6] !== i ? (c = (0, r.jsx)("h4", {
                    ref: f,
                    className: "sr-only m-0 select-none",
                    tabIndex: 0,
                    onBlur: s,
                    onFocus: i,
                    children: u
                }), g[6] = i, g[7] = c) : c = g[7], g[8] !== y ? (d = y ? (0, r.jsx)(a.a, {
                    id: "codex.conversation.latestResponseUnavailable",
                    defaultMessage: "No response available",
                    description: "Screen-reader announcement when navigation to the latest assistant response finds no response in the conversation"
                }) : null, g[8] = y, g[9] = d) : d = g[9], g[10] !== d ? (h = (0, r.jsx)("span", {
                    className: "sr-only m-0",
                    role: "status",
                    children: d
                }), g[10] = d, g[11] = h) : h = g[11], g[12] !== c || g[13] !== h ? (m = (0, r.jsxs)(r.Fragment, {
                    children: [c, h]
                }), g[12] = c, g[13] = h, g[14] = m) : m = g[14], m
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
    if6d: (function(e, t, n) {
        n.d(t, {
            a: () => C
        });
        var r = n("ABep"),
            l = n("QosV"),
            o = n("on57"),
            a = n("BolX"),
            s = n("zd8w"),
            i = n("v7qY"),
            u = n("wD9O"),
            c = n("zm5q"),
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
                pixelScale: o
            } = e, a = new Set, s = [], i = [], u = [], c = new Map, d = [], h = 0;
            for (let [e, m] of n.entries()) {
                let n = m.turnKey,
                    g = Math.max(m.minHeightPx ?? 0, l[n] ?? m.estimatedHeightPx ?? 280);
                null != o && (g = Math.round(g * o) / o);
                let p = (t ? h > 0 && g > 0 : e > 0) ? m.gapBeforePx ?? r : 0;
                null != o && (p = Math.round(p * o) / o), h += p, s.push(p), "gap" === m.type && a.add(n), c.set(n, e), d.push(n), u.push(h), i.push(g), h += g
            }
            return {
                bottomOffsetsPx: u.map((e, t) => h - e - (i[t] ?? 0)),
                collapseEmptyRows: t,
                gapKeys: a,
                gapsBeforePx: s,
                heightsPx: i,
                topOffsetsPx: u,
                totalHeightPx: h,
                turnIndexByKey: c,
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
            let o = Math.min(Math.max(0, t), n.totalHeightPx),
                a = Math.min(o + Math.max(0, l), n.totalHeightPx),
                s = n.collapseEmptyRows && a === n.totalHeightPx ? 0 : function(e, t) {
                    let n = 0,
                        r = e.length;
                    for (; n < r;) {
                        let l = Math.floor((n + r) / 2);
                        (e[l] ?? 0) < t ? r = l : n = l + 1
                    }
                    return n
                }(n.bottomOffsetsPx, a),
                i = n.collapseEmptyRows && 0 === o ? n.turnKeys.length : function(e, t, n) {
                    let r = 0,
                        l = e.length;
                    for (; r < l;) {
                        let o = Math.floor((r + l) / 2);
                        (e[o] ?? 0) + (t[o] ?? 0) <= n ? l = o : r = o + 1
                    }
                    return r
                }(n.bottomOffsetsPx, n.heightsPx, o);
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
            let t, n, p, x, C, R, F, j, A, L, _, z, O, q, N, W, U, G, V, Q, $, X, Y, Z, J, ee, et, en, er, el, eo, ea, es, ei, eu, ec, ed, eh, em, eg, ep, ef, ex, ey, ev, ew, eP, eb, eS, eC, ek, eI, eE, eB, eM, eT, eK, eD, eH, eR, eF, ej, eA, eL, e_, ez, eO, eq = (0, l.c)(249),
                {
                    collapseEmptyRows: eN,
                    entries: eW,
                    RowComponent: eU,
                    onApiChange: eG,
                    onVisibleContentReady: eV,
                    className: eQ,
                    gapPx: e$,
                    getBottomScrollPaddingPx: eX,
                    onLatestTurnHeightChange: eY,
                    preserveMeasuredTurnViewport: eZ,
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
                tl = void 0 !== eN && eN,
                to = void 0 === e$ ? 12 : e$,
                ta = void 0 !== eZ && eZ,
                ts = void 0 !== eJ && eJ,
                ti = void 0 !== tr && tr,
                tu = (0, a.z)(m.b),
                tc = [...tn ?? [], ...tu],
                [td, th] = (0, s.useState)(null);
            eq[0] !== td || eq[1] !== ts || eq[2] !== eW ? (t = eW.map(e => ({
                turnKey: e.turnKey,
                gapBeforePx: e.gapBeforePx,
                estimatedHeightPx: e.estimatedHeightPx,
                minHeightPx: ts && td?.turnKey === e.turnKey && e.turnKey === eW.at(-1)?.turnKey ? Math.max(e.minHeightPx ?? 0, td.viewportHeightPx - td.heightOutsideTurnPx) : e.minHeightPx,
                type: e.type
            })), eq[0] = td, eq[1] = ts, eq[2] = eW, eq[3] = t) : t = eq[3];
            let tm = t,
                tg = (0, h.b)(),
                tp = (0, u.c)(),
                tf = tp * (globalThis.devicePixelRatio ?? 1),
                tx = e2?.turnHeightsByKey ?? S,
                [ty, tv] = (0, s.useState)(tx),
                [tw, tP] = (0, s.useState)(null);
            eq[4] !== tl || eq[5] !== tm || eq[6] !== to || eq[7] !== tf || eq[8] !== ty ? (n = v({
                collapseEmptyRows: tl,
                entries: tm,
                gapPx: to,
                measuredHeightsByKey: ty,
                pixelScale: tf
            }), eq[4] = tl, eq[5] = tm, eq[6] = to, eq[7] = tf, eq[8] = ty, eq[9] = n) : n = eq[9];
            let tb = n;
            eq[10] !== eX || eq[11] !== e2 || eq[12] !== tb || eq[13] !== tg ? (p = () => {
                var e, t, n;
                let r, l, o = K(eX);
                return e = tb, t = D(tg.getLastScrollDistanceFromBottomPx(), o), n = e2, l = w({
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
            }, eq[10] = eX, eq[11] = e2, eq[12] = tb, eq[13] = tg, eq[14] = p) : p = eq[14];
            let [tS, tC] = (0, s.useState)(p), [tk] = (0, s.useState)(I), tI = (0, s.useSyncExternalStore)(tk.subscribe, tk.getSnapshot, tk.getSnapshot), tE = (0, s.useRef)(null), tB = (0, s.useRef)(ty), tM = (0, s.useRef)(tS), tT = (0, s.useRef)(null);
            eq[15] === Symbol.for("react.memo_cache_sentinel") ? (x = new Map, eq[15] = x) : x = eq[15];
            let tK = (0, s.useRef)(x);
            eq[16] === Symbol.for("react.memo_cache_sentinel") ? (C = new Map, eq[16] = C) : C = eq[16];
            let tD = (0, s.useRef)(C);
            eq[17] === Symbol.for("react.memo_cache_sentinel") ? (R = new WeakSet, eq[17] = R) : R = eq[17];
            let tH = (0, s.useRef)(R);
            eq[18] === Symbol.for("react.memo_cache_sentinel") ? (F = new Map, eq[18] = F) : F = eq[18];
            let tR = (0, s.useRef)(F);
            eq[19] === Symbol.for("react.memo_cache_sentinel") ? (j = new Map, eq[19] = j) : j = eq[19];
            let tF = (0, s.useRef)(j),
                tj = (0, s.useRef)(null),
                tA = (0, s.useRef)(null),
                tL = (0, s.useRef)(0),
                t_ = (0, s.useRef)(null),
                [tz, tO] = (0, s.useState)(null),
                tq = (0, s.useRef)(!1),
                tN = (0, s.useRef)(null),
                tW = (0, s.useRef)(tb),
                tU = (0, s.useRef)(tb),
                tG = (0, s.useRef)(tb),
                tV = (0, s.useRef)(null);
            eq[20] !== ty ? (A = () => {
                ty !== tB.current && tv(tB.current)
            }, eq[20] = ty, eq[21] = A) : A = eq[21], eq[22] !== tl || eq[23] !== tm || eq[24] !== to || eq[25] !== tf || eq[26] !== ty ? (L = [tl, tm, to, tf, ty], eq[22] = tl, eq[23] = tm, eq[24] = to, eq[25] = tf, eq[26] = ty, eq[27] = L) : L = eq[27], (0, s.useLayoutEffect)(A, L), eq[28] === Symbol.for("react.memo_cache_sentinel") ? (_ = e => {
                tE.current = e, tP(e)
            }, eq[28] = _) : _ = eq[28];
            let tQ = (0, g.a)(_);
            eq[29] !== tl || eq[30] !== tm || eq[31] !== to || eq[32] !== tb || eq[33] !== tf || eq[34] !== ty ? (z = () => {
                if (tU.current !== tb) {
                    tU.current = tb, tW.current = ty === tB.current ? tb : v({
                        collapseEmptyRows: tl,
                        entries: tm,
                        gapPx: to,
                        measuredHeightsByKey: tB.current,
                        pixelScale: tf
                    });
                    let e = tE.current;
                    null != e && (e.style.height = `${tW.current.totalHeightPx}px`)
                }
                return tW.current
            }, eq[29] = tl, eq[30] = tm, eq[31] = to, eq[32] = tb, eq[33] = tf, eq[34] = ty, eq[35] = z) : z = eq[35];
            let t$ = (0, g.a)(z);
            eq[36] !== eX || eq[37] !== tg || eq[38] !== tp ? (O = e => {
                let t = tg.getScrollElement(),
                    n = tE.current,
                    r = t?.firstElementChild;
                return null == n || null == r ? e - K(eX) : e - (0, u.b)(r.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, tp)
            }, eq[36] = eX, eq[37] = tg, eq[38] = tp, eq[39] = O) : O = eq[39];
            let tX = (0, g.a)(O),
                tY = tS.renderedRange;
            if (null != tI) {
                let e = b({
                    layout: tb,
                    turnKey: tI.turnKey,
                    viewportHeightPx: tS.viewportHeightPx
                });
                null != e && (tY = w({
                    distanceFromBottomPx: e,
                    layout: tb,
                    overscanCount: 2,
                    viewportHeightPx: tS.viewportHeightPx
                }))
            } else if (!T(tS.turnKeys, tb.turnKeys)) {
                let e = tS.turnKeys[tS.renderedRange.startIndex];
                null != e && (tY = P({
                    anchorKey: e,
                    layout: tb,
                    previousRange: tY
                }) ?? w({
                    distanceFromBottomPx: tS.distanceFromBottomPx,
                    layout: tb,
                    overscanCount: 2,
                    viewportHeightPx: tS.viewportHeightPx
                }))
            }
            eq[40] !== e1 ? (q = () => {
                null == tj.current && e1?.()
            }, eq[40] = e1, eq[41] = q) : q = eq[41];
            let tZ = (0, g.a)(q);
            eq[42] === Symbol.for("react.memo_cache_sentinel") ? (N = () => {
                null != tN.current && (window.cancelAnimationFrame(tN.current), tN.current = null)
            }, eq[42] = N) : N = eq[42];
            let tJ = (0, g.a)(N);
            eq[43] !== tm || eq[44] !== eV || eq[45] !== tZ ? (W = () => {
                null == eV || tq.current || null != tN.current || null == tE.current || tm.length > 0 && 0 === tD.current.size || (tN.current = window.requestAnimationFrame(() => {
                    tN.current = window.requestAnimationFrame(() => {
                        tN.current = null, tq.current || null == tE.current || tm.length > 0 && 0 === tD.current.size || (tq.current = !0, tZ(), eV())
                    })
                }))
            }, eq[43] = tm, eq[44] = eV, eq[45] = tZ, eq[46] = W) : W = eq[46];
            let t0 = (0, g.a)(W),
                t1 = eW.slice(tY.startIndex, tY.endIndex).map((e, t) => ({
                    entry: e,
                    turnIndex: tY.startIndex + t
                }));
            for (let e of new Set(tc)) {
                let t = tb.turnIndexByKey.get(e);
                if (null == t || t >= tY.startIndex && t < tY.endIndex) continue;
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
                        endIndex: o
                    } = w({
                        distanceFromBottomPx: 0,
                        layout: n,
                        overscanCount: 0,
                        viewportHeightPx: r
                    }), a = 1 / 0, s = null, i = t => {
                        let n = e[t];
                        if ("gap" === n.type) return !1;
                        let r = null;
                        return "sourceTurnId" in n && "string" == typeof n.sourceTurnId ? r = n.sourceTurnId : "turnId" in n && "string" == typeof n.turnId && (r = n.turnId), null != r && (t < a && (a = t, s = {
                            oldestProtectedTurnId: r,
                            firstProtectedItemId: "turnStatus" in n && "inProgress" === n.turnStatus && "turnItemIds" in n && Array.isArray(n.turnItemIds) ? n.turnItemIds.at(-500) ?? null : null
                        }), !0)
                    };
                    for (let e = l; e < o; e++)
                        if (!i(e)) return null;
                    for (let e of t ?? []) {
                        let t = n.turnIndexByKey.get(e);
                        if (null != t && !i(t)) return null
                    }
                    return s
                }(eW, tc, tb, tS.viewportHeightPx + 24),
                t3 = (0, g.a)(e => {
                    e8?.(e > 24 || null != tk.getSnapshot() ? null : t2)
                });
            eq[47] !== t3 || eq[48] !== tg ? (U = () => {
                t3(tg.getLastScrollDistanceFromBottomPx())
            }, eq[47] = t3, eq[48] = tg, eq[49] = U) : U = eq[49];
            let t4 = t2?.oldestProtectedTurnId,
                t5 = t2?.firstProtectedItemId;
            eq[50] !== e8 || eq[51] !== tI || eq[52] !== t3 || eq[53] !== tg || eq[54] !== t4 || eq[55] !== t5 ? (G = [t4, t5, e8, tI, t3, tg], eq[50] = e8, eq[51] = tI, eq[52] = t3, eq[53] = tg, eq[54] = t4, eq[55] = t5, eq[56] = G) : G = eq[56], (0, s.useLayoutEffect)(U, G), eq[57] !== e9 || eq[58] !== te || eq[59] !== tg ? (V = () => {
                if (null == e9 || null == te || null != tj.current || tR.current.size > 0) return;
                let e = tg.getScrollElement(),
                    t = tD.current.get(e9);
                null != e && !(e.clientHeight <= 0) && null != t && tH.current.has(t) && !((tB.current[e9] ?? 0) <= 0) && te(e9, t)
            }, eq[57] = e9, eq[58] = te, eq[59] = tg, eq[60] = V) : V = eq[60];
            let t6 = (0, g.a)(V);
            eq[61] !== eX || eq[62] !== eY || eq[63] !== tZ || eq[64] !== tg ? (Q = e => {
                let t = K(eX);
                null != e.latestTurnHeightChange && eY?.(e.latestTurnHeightChange), e.restoreScrollDistanceFromBottom ? tZ() : null != e.scrollDistanceFromBottomPx && tg.compensateScrollToDistanceFromBottomPx(e.scrollDistanceFromBottomPx + K(eX) - t), e.afterMeasure?.()
            }, eq[61] = eX, eq[62] = eY, eq[63] = tZ, eq[64] = tg, eq[65] = Q) : Q = eq[65];
            let t8 = (0, g.a)(Q);
            eq[66] !== t$ ? ($ = (e, t) => {
                if (null != tj.current || t <= 0) return;
                let n = tM.current,
                    r = B({
                        current: n,
                        distanceFromBottomPx: e,
                        layout: t$(),
                        viewportHeightPx: t
                    });
                r === n || (tM.current = r, r.renderedRange.startIndex === n.renderedRange.startIndex && r.renderedRange.endIndex === n.renderedRange.endIndex && T(r.turnKeys, n.turnKeys) || tC(r))
            }, eq[66] = t$, eq[67] = $) : $ = eq[67];
            let t7 = (0, g.a)($);
            eq[68] !== e8 ? (X = () => () => e8?.(void 0), Y = [e8], eq[68] = e8, eq[69] = X, eq[70] = Y) : (X = eq[69], Y = eq[70]), (0, s.useLayoutEffect)(X, Y), eq[71] !== t$ || eq[72] !== e6 ? (Z = (e, t, n) => {
                if (null == e6) return;
                let r = t$(),
                    l = Math.max(0, Math.min(r.totalHeightPx, r.totalHeightPx - e)),
                    o = Math.max(0, l - t);
                e6({
                    viewportEndPx: l,
                    viewportStartPx: o
                }, n)
            }, eq[71] = t$, eq[72] = e6, eq[73] = Z) : Z = eq[73];
            let t9 = (0, g.a)(Z);
            eq[74] !== tk ? (J = e => {
                tk.getSnapshot() === e && tk.replace(null)
            }, eq[74] = tk, eq[75] = J) : J = eq[75];
            let ne = (0, g.a)(J);
            eq[76] !== e8 || eq[77] !== tk ? (ee = (e, t, n) => n?.signal?.aborted ? Promise.resolve() : (e8?.(null), new Promise(r => {
                let l = () => {
                        tk.getSnapshot() === o && tk.replace(null)
                    },
                    o = {
                        align: n?.align ?? "center",
                        complete: () => {
                            n?.signal?.removeEventListener("abort", l), r()
                        },
                        getTargetElement: t,
                        turnKey: e
                    };
                tC(tM.current), tk.replace(o), n?.signal?.addEventListener("abort", l, {
                    once: !0
                })
            })), eq[76] = e8, eq[77] = tk, eq[78] = ee) : ee = eq[78];
            let nt = (0, g.a)(ee);
            eq[79] !== t$ || eq[80] !== eW ? (et = e => {
                let {
                    viewportStartPx: t,
                    viewportEndPx: n
                } = e;
                return function(e, t, n, r) {
                    let {
                        topOffsetsPx: l,
                        heightsPx: o
                    } = t, a = Math.max(0, y()(l, n) - 1);
                    return (l[a] ?? 0) + (o[a] ?? 0) <= n && a++, e.slice(a, f()(l, r))
                }(eW, t$(), t, n)
            }, eq[79] = t$, eq[80] = eW, eq[81] = et) : et = eq[81];
            let nn = (0, g.a)(et);
            eq[82] !== t$ ? (en = e => {
                let t = t$(),
                    n = t.turnIndexByKey.get(e);
                if (null == n) return null;
                let r = t.topOffsetsPx[n],
                    l = t.heightsPx[n];
                return null == r || null == l ? null : {
                    endPx: r + l,
                    startPx: r
                }
            }, eq[82] = t$, eq[83] = en) : en = eq[83];
            let nr = (0, g.a)(en);
            eq[84] !== eY || eq[85] !== tg || eq[86] !== tp ? (er = () => {
                let e = 0,
                    t = null;
                for (let [n, r] of tF.current) e += r, (null == t || t.compareDocumentPosition(n) === Node.DOCUMENT_POSITION_FOLLOWING) && (t = n);
                null != t && eY?.({
                    heightDeltaPx: null,
                    heightPx: null,
                    bottomViewportOverflowPx: tg.isNativeEndSnapFollowing?.() ? 0 : H({
                        scrollElement: tg.getScrollElement(),
                        turnElement: t,
                        windowZoom: tp
                    }),
                    turnElement: t,
                    followContentHeightPx: e
                })
            }, eq[84] = eY, eq[85] = tg, eq[86] = tp, eq[87] = er) : er = eq[87];
            let nl = (0, g.a)(er);
            eq[88] !== tl || eq[89] !== t8 || eq[90] !== tm || eq[91] !== to || eq[92] !== eX || eq[93] !== t$ || eq[94] !== tX || eq[95] !== e0 || eq[96] !== tf || eq[97] !== ta || eq[98] !== tg || eq[99] !== tk || eq[100] !== tp ? (el = (e, t, n) => {
                var r;
                let l = t$(),
                    o = tg.getScrollElement();
                if (o?.getClientRects().length === 0) return !1;
                let a = tj.current,
                    s = tB.current,
                    c = s,
                    d = 0,
                    h = !1,
                    m = null,
                    g = 0,
                    p = !1,
                    f = !1,
                    x = "controller" === (void 0 === n ? "measured" : n) ? tg.getLastScrollDistanceFromBottomPx({
                        includePendingUserScroll: !0
                    }) : function(e, t) {
                        let n = e.getScrollElement(),
                            r = n?.firstElementChild;
                        if (null == n || null == r || 0 === n.clientHeight) return e.getLastScrollDistanceFromBottomPx();
                        let l = r.getBoundingClientRect();
                        if (0 === l.height) return e.getLastScrollDistanceFromBottomPx();
                        let o = n.scrollTop;
                        return Math.max(0, Math.round(o + (0, u.b)(l.bottom - n.getBoundingClientRect().top, t)) - n.clientHeight) - o
                    }(tg, tp),
                    y = K(eX),
                    w = D(x, y),
                    P = ta ? null : e0?.() ?? null,
                    b = null == a ? w : tM.current.distanceFromBottomPx,
                    S = b;
                if (ta && null == tk.getSnapshot() && e0?.() == null) {
                    let e = T(tG.current.turnKeys, l.turnKeys) ? l : tG.current,
                        t = e === l ? a?.scrollDistanceFromBottomPx ?? x : x,
                        n = M({
                            distanceFromBottomPx: tX(t),
                            preferLatestVisibleRow: t < y,
                            layout: e,
                            measuredHeightsByKey: s,
                            nextLayout: l,
                            viewportHeightPx: tM.current.viewportHeightPx
                        }),
                        r = o?.ownerDocument.activeElement,
                        i = r?.closest("[data-turn-key]"),
                        u = i?.dataset.turnKey;
                    if (o && r && i && u && tD.current.get(u) === i) {
                        let e = r.getBoundingClientRect(),
                            t = o.getBoundingClientRect();
                        e.bottom > t.top && e.top < t.bottom && (n = u)
                    }
                    let c = null == n ? null : l.turnIndexByKey.get(n);
                    null != c && (S = l.bottomOffsetsPx[c] ?? b)
                }
                for (let [t, n] of e) {
                    let {
                        element: e,
                        heightPx: r
                    } = n, o = tD.current.get(t);
                    if (o !== e) continue;
                    r > 0 ? tH.current.add(o) : tH.current.delete(o);
                    let a = Math.max(+!tl, r),
                        i = s[t];
                    if (i === a) continue;
                    c === s && (c = {
                        ...s
                    }), c[t] = a;
                    let u = l.turnIndexByKey.get(t);
                    if (null == u) continue;
                    let x = u === l.turnKeys.length - 1,
                        y = Math.round(Math.max(tm[u]?.minHeightPx ?? 0, a) * tf) / tf,
                        v = y - (l.heightsPx[u] ?? y);
                    f = f || null == i || 0 !== v, x && (h = !0, d += null == i ? 0 : v, m = o), p = p || tl && (0 === y || 0 === l.heightsPx[u]), (l.bottomOffsetsPx[u] ?? 0) <= S && (ta || null != e0 && !x) && (g += v)
                }
                if (c === s) return !1;
                if (!f) return tB.current = c, !1;
                let C = v({
                    collapseEmptyRows: tl,
                    entries: tm,
                    gapPx: to,
                    measuredHeightsByKey: c,
                    pixelScale: tf
                });
                if (p)
                    for (let [e, t] of C.gapsBeforePx.entries()) {
                        let n = t - (l.gapsBeforePx[e] ?? 0);
                        (l.bottomOffsetsPx[e] ?? 0) + (l.heightsPx[e] ?? 0) <= S && (ta || null != e0 && e !== l.turnKeys.length - 1) && (g += n)
                    }
                let k = tg.isNativeEndSnapFollowing?.(),
                    I = ta && tg.shouldFollowContentGrowth() && (k || (r = x, 0 === y && r <= 24)) && m?.querySelector("[data-preserve-turn-viewport]") == null,
                    E = a?.restoreScrollDistanceFromBottom || null != P,
                    R = null;
                E || (R = I ? 0 : 0 !== g ? (a?.scrollDistanceFromBottomPx ?? tg.getUnroundedScrollDistanceFromBottomPx(x)) + g : a?.scrollDistanceFromBottomPx ?? (ta || !h ? x : null));
                let F = tM.current.distanceFromBottomPx;
                E ? F = P ?? F : null != R && (F = D(R, y));
                let j = B({
                        current: tM.current,
                        distanceFromBottomPx: F,
                        layout: C,
                        viewportHeightPx: tM.current.viewportHeightPx
                    }),
                    A = a?.latestTurnHeightChange,
                    L = m ?? A?.turnElement ?? null,
                    _ = {
                        afterMeasure: a?.afterMeasure,
                        latestTurnHeightChange: h || null != A ? {
                            heightDeltaPx: (A?.heightDeltaPx ?? 0) + d,
                            heightPx: C.heightsPx.at(-1) ?? null,
                            bottomViewportOverflowPx: k ? 0 : H({
                                scrollElement: tg.getScrollElement(),
                                turnElement: L,
                                windowZoom: tp
                            }),
                            turnElement: L,
                            followContentHeightPx: null
                        } : null,
                        restoreScrollDistanceFromBottom: E,
                        scrollDistanceFromBottomPx: R,
                        turnHeightsByKey: c
                    },
                    z = tE.current;
                for (let [t, n] of e) {
                    let {
                        element: e
                    } = n, r = C.turnIndexByKey.get(t);
                    tD.current.get(t) === e && null != r && null != e.parentElement && (e.parentElement.style.height = `${C.heightsPx[r]}px`, e.parentElement.style.minHeight = "")
                }
                if (h && 1 === e.size && null == a && j === tM.current && C.gapsBeforePx.at(-1) === l.gapsBeforePx.at(-1) && null != z) return tB.current = c, tW.current = C, tG.current = C, z.style.height = `${C.totalHeightPx}px`, t8(_), !0;
                null == tV.current && (tV.current = l);
                let O = () => {
                    tB.current = c, tW.current = C, tv(c), j !== tM.current && (tM.current = j, tC(j))
                };
                return tj.current = _, void 0 === t || t ? (0, i.flushSync)(O) : O(), !0
            }, eq[88] = tl, eq[89] = t8, eq[90] = tm, eq[91] = to, eq[92] = eX, eq[93] = t$, eq[94] = tX, eq[95] = e0, eq[96] = tf, eq[97] = ta, eq[98] = tg, eq[99] = tk, eq[100] = tp, eq[101] = el) : el = eq[101];
            let no = (0, g.a)(el);
            eq[102] !== no || eq[103] !== nl || eq[104] !== t6 || eq[105] !== ti ? (eo = e => {
                let t = new Map,
                    n = !1;
                for (let r of e) {
                    let e = tK.current.get(r.target);
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
                }(!ti || t.size > 0) && no(t), n && nl(), t6()
            }, eq[102] = no, eq[103] = nl, eq[104] = t6, eq[105] = ti, eq[106] = eo) : eo = eq[106];
            let na = (0, g.a)(eo);
            eq[107] !== na ? (ea = () => {
                if (null != tA.current) return tA.current;
                let e = new ResizeObserver(na);
                return tA.current = e, e
            }, eq[107] = na, eq[108] = ea) : ea = eq[108];
            let ns = (0, g.a)(ea);
            eq[109] !== ns || eq[110] !== t0 ? (es = (e, t) => {
                if (null == t) return;
                tK.current.set(t, {
                    kind: "turn",
                    turnKey: e
                }), tD.current.set(e, t), tH.current.delete(t), tR.current.set(e, t);
                let n = ns();
                return n.observe(t), t0(), () => {
                    n.unobserve(t), tK.current.delete(t), tR.current.get(e) === t && tR.current.delete(e), tD.current.get(e) === t && tD.current.delete(e)
                }
            }, eq[109] = ns, eq[110] = t0, eq[111] = es) : es = eq[111];
            let ni = (0, g.a)(es);
            eq[112] !== no || eq[113] !== tp ? (ei = (e, t) => {
                let n = tD.current.get(e);
                if (null == n) return;
                let r = (0, u.b)(n.getBoundingClientRect().height, tp);
                if (!(r <= 0) && (no(new Map([
                        [e, {
                            element: n,
                            heightPx: r
                        }]
                    ]), !1), null != t)) {
                    let e = tj.current;
                    null == e ? t() : e.afterMeasure = t
                }
            }, eq[112] = no, eq[113] = tp, eq[114] = ei) : ei = eq[114];
            let nu = (0, g.a)(ei);
            eq[115] !== ns ? (eu = e => {
                if (null == e) return;
                tK.current.set(e, {
                    element: e,
                    kind: "latest-turn-follow-content"
                }), tF.current.set(e, 0);
                let t = ns();
                return t.observe(e), () => {
                    t.unobserve(e), tK.current.delete(e), tF.current.delete(e)
                }
            }, eq[115] = ns, eq[116] = eu) : eu = eq[116];
            let nc = (0, g.a)(eu);
            eq[117] !== no || eq[118] !== tp ? (ec = () => {
                let e = tR.current;
                if (0 === e.size) {
                    tL.current = 0;
                    return
                }
                if (null != t_.current) return;
                if (tL.current >= 8) {
                    t_.current = requestAnimationFrame(e => {
                        t_.current = null, tL.current = 0, tO(e)
                    });
                    return
                }
                tL.current = tL.current + 1, tR.current = new Map;
                let t = new Map;
                if ((0, c.a)("virtualizedTurnList.readMountedHeights", () => {
                        for (let [n, r] of e) {
                            if (tD.current.get(n) !== r) continue;
                            let e = (0, u.b)(r.getBoundingClientRect().height, tp);
                            e > 0 && t.set(n, {
                                element: r,
                                heightPx: e
                            })
                        }
                    }, e.size), t.size > 0) {
                    let n = tB.current;
                    if (no(t, !1, "controller"))
                        for (let [t, r] of e)(null == n[t] || tL.current > 1) && tD.current.get(t) === r && tR.current.set(t, r);
                    else tL.current = 0
                }
            }, eq[117] = no, eq[118] = tp, eq[119] = ec) : ec = eq[119], (0, s.useLayoutEffect)(ec), eq[120] !== tm || eq[121] !== nu || eq[122] !== tt ? (ed = () => {
                let e = tt ?? tm.at(-1)?.turnKey;
                null != e && nu(e)
            }, eq[120] = tm, eq[121] = nu, eq[122] = tt, eq[123] = ed) : ed = eq[123];
            let nd = (0, g.a)(ed);
            eq[124] !== e7 || eq[125] !== nd ? (eh = () => {
                null != e7 && nd()
            }, em = [e7, nd], eq[124] = e7, eq[125] = nd, eq[126] = eh, eq[127] = em) : (eh = eq[126], em = eq[127]), (0, s.useLayoutEffect)(eh, em), eq[128] !== t8 || eq[129] !== ty ? (eg = () => {
                let e = tj.current;
                null != e && e.turnHeightsByKey === ty && (tj.current = null, t8(e))
            }, ep = [t8, ty], eq[128] = t8, eq[129] = ty, eq[130] = eg, eq[131] = ep) : (eg = eq[130], ep = eq[131]), (0, s.useLayoutEffect)(eg, ep), eq[132] !== tm || eq[133] !== td || eq[134] !== tb.heightsPx || eq[135] !== ts || eq[136] !== ty || eq[137] !== tw || eq[138] !== tp ? (ef = e => {
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
                let l = (0, u.b)(t.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, tp) - parseFloat(getComputedStyle(t).paddingBottom);
                l <= 24 || (0, i.flushSync)(() => {
                    th({
                        turnKey: r,
                        heightOutsideTurnPx: e - (tb.heightsPx.at(-1) ?? 0) - l,
                        viewportHeightPx: e
                    })
                })
            }, eq[132] = tm, eq[133] = td, eq[134] = tb.heightsPx, eq[135] = ts, eq[136] = ty, eq[137] = tw, eq[138] = tp, eq[139] = ef) : ef = eq[139];
            let nh = (0, g.a)(ef);
            eq[140] !== nn || eq[141] !== nr || eq[142] !== nu || eq[143] !== eG || eq[144] !== nt ? (ex = () => {
                if (null != eG) return eG({
                    getEntriesInViewport: nn,
                    getEntryGeometry: nr,
                    measureTurnBeforePaint: nu,
                    scrollToKey: nt
                }), () => {
                    eG(null)
                }
            }, ey = [nn, nr, nu, eG, nt], eq[140] = nn, eq[141] = nr, eq[142] = nu, eq[143] = eG, eq[144] = nt, eq[145] = ex, eq[146] = ey) : (ex = eq[145], ey = eq[146]), (0, s.useEffect)(ex, ey), eq[147] !== tJ ? (ev = () => () => {
                tq.current = !1, tJ()
            }, ew = [tJ], eq[147] = tJ, eq[148] = ev, eq[149] = ew) : (ev = eq[148], ew = eq[149]), (0, s.useLayoutEffect)(ev, ew), eq[150] !== tJ || eq[151] !== t0 ? (eP = () => (t0(), tJ), eq[150] = tJ, eq[151] = t0, eq[152] = eP) : eP = eq[152], eq[153] !== tJ || eq[154] !== tm.length || eq[155] !== eV || eq[156] !== t0 || eq[157] !== tw ? (eb = [tJ, tm.length, eV, t0, tw], eq[153] = tJ, eq[154] = tm.length, eq[155] = eV, eq[156] = t0, eq[157] = tw, eq[158] = eb) : eb = eq[158], (0, s.useEffect)(eP, eb), eq[159] !== tk ? (eS = () => {
                let e = tK.current,
                    t = tD.current,
                    n = tF.current;
                return () => {
                    null != t_.current && (cancelAnimationFrame(t_.current), t_.current = null), tA.current?.disconnect(), tA.current = null, e.clear(), t.clear(), tR.current.clear(), n.clear(), tj.current = null, tk.replace(null)
                }
            }, eC = [tk], eq[159] = tk, eq[160] = eS, eq[161] = eC) : (eS = eq[160], eC = eq[161]), (0, s.useEffect)(eS, eC), eq[162] !== e5 ? (ek = () => {
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
            }, eI = [e5], eq[162] = e5, eq[163] = ek, eq[164] = eI) : (ek = eq[163], eI = eq[164]), (0, s.useLayoutEffect)(ek, eI);
            let {
                addScrollListener: nm,
                addUserScrollListener: ng,
                getScrollElement: np
            } = tg;
            eq[165] !== nm || eq[166] !== ng || eq[167] !== eX || eq[168] !== np || eq[169] !== nh || eq[170] !== ts || eq[171] !== t3 || eq[172] !== t6 || eq[173] !== t9 || eq[174] !== tZ || eq[175] !== tw || eq[176] !== t7 ? (eE = () => {
                let e = np();
                if (null == e) return;
                let t = () => (null == tT.current && (tT.current = e.clientHeight), tT.current || tM.current.viewportHeightPx || 800),
                    n = nm(e => {
                        t7(D(e, K(eX)), t()), t3(e)
                    }),
                    r = ng((e, n) => {
                        t9(D(e, K(eX)), t(), null != n && e > n)
                    }),
                    l = new ResizeObserver(n => {
                        let r = n.find(t => t.target === e);
                        if (null != r) {
                            let {
                                height: e
                            } = (0, d.a)(r);
                            tT.current = e, t7(tM.current.distanceFromBottomPx, e), tZ()
                        }
                        nh(t()), t6()
                    });
                return l.observe(e), ts && null != tw && l.observe(tw), () => {
                    n(), r(), l.disconnect()
                }
            }, eB = [nm, ng, eX, np, nh, t6, ts, t9, t3, tZ, tw, t7], eq[165] = nm, eq[166] = ng, eq[167] = eX, eq[168] = np, eq[169] = nh, eq[170] = ts, eq[171] = t3, eq[172] = t6, eq[173] = t9, eq[174] = tZ, eq[175] = tw, eq[176] = t7, eq[177] = eE, eq[178] = eB) : (eE = eq[177], eB = eq[178]), (0, s.useLayoutEffect)(eE, eB), eq[179] !== no || eq[180] !== eX || eq[181] !== tb || eq[182] !== tI || eq[183] !== tg || eq[184] !== tk || eq[185] !== ne || eq[186] !== t7 || eq[187] !== tp ? (eM = () => {
                if (null == tI || tk.getSnapshot() !== tI || null != t_.current) return;
                let e = tg.getScrollElement();
                if (null == e) return;
                let t = new Map;
                for (let [e, n] of tD.current) {
                    let r = (0, u.b)(n.getBoundingClientRect().height, tp);
                    r > 0 && t.set(e, {
                        element: n,
                        heightPx: r
                    })
                }
                if (no(t, !1) || null != tj.current) return;
                let n = tD.current.get(tI.turnKey),
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
                        let o = n.turnIndexByKey.get(r);
                        return null == o ? null : Math.max(0, (n.bottomOffsetsPx[o] ?? 0) + (n.heightsPx[o] ?? 0) - l + 10)
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
                            turnKey: o,
                            windowZoom: a,
                            viewportHeightPx: s
                        } = e, i = n.turnIndexByKey.get(o);
                        if (null == i) return null;
                        let c = l.getBoundingClientRect(),
                            d = r.getBoundingClientRect(),
                            h = (0, u.b)(d.top - c.top, a),
                            m = (0, u.b)(d.height, a),
                            g = (n.bottomOffsetsPx[i] ?? 0) + (n.heightsPx[i] ?? 0) - h;
                        return "top" === t ? Math.max(0, g - s + 10) : Math.max(0, g - m / 2 - s / 2)
                    }({
                        align: tI.align,
                        layout: tb,
                        targetElement: r,
                        turnElement: n,
                        turnKey: tI.turnKey,
                        viewportHeightPx: e.clientHeight,
                        windowZoom: tp
                    });
                if (null == l) return void queueMicrotask(() => ne(tI));
                let o = "top" === tI.align && null != r ? Math.max(0, tg.getLastScrollDistanceFromBottomPx() - (0, u.b)(r.getBoundingClientRect().top - e.getBoundingClientRect().top, tp) + 10) : l + K(eX);
                tg.scrollToDistanceFromBottomPx(o, "instant", "user"), t7(Math.max(0, o - K(eX)), e.clientHeight), queueMicrotask(() => ne(tI))
            }, eq[179] = no, eq[180] = eX, eq[181] = tb, eq[182] = tI, eq[183] = tg, eq[184] = tk, eq[185] = ne, eq[186] = t7, eq[187] = tp, eq[188] = eM) : eM = eq[188], eq[189] !== no || eq[190] !== eX || eq[191] !== tb || eq[192] !== tz || eq[193] !== tI || eq[194] !== tg || eq[195] !== tk || eq[196] !== ne || eq[197] !== t7 || eq[198] !== tp ? (eT = [no, tb, tz, tI, tg, tk, ne, eX, t7, tp], eq[189] = no, eq[190] = eX, eq[191] = tb, eq[192] = tz, eq[193] = tI, eq[194] = tg, eq[195] = tk, eq[196] = ne, eq[197] = t7, eq[198] = tp, eq[199] = eT) : eT = eq[199], (0, s.useLayoutEffect)(eM, eT), eq[200] !== eX || eq[201] !== t$ || eq[202] !== tX || eq[203] !== e0 || eq[204] !== tI || eq[205] !== ta || eq[206] !== tg || eq[207] !== t7 ? (eK = () => {
                var e;
                if (null != tj.current) return;
                let t = tG.current,
                    n = t$(),
                    r = tV.current ?? n;
                if (tV.current = null, tG.current = n, null != tI || !ta && t.turnKeys.at(-1) !== r.turnKeys.at(-1) || t === r) return;
                let l = K(eX),
                    o = tg.getLastScrollDistanceFromBottomPx({
                        includePendingUserScroll: !0
                    });
                if (null != (e0?.() ?? null)) return;
                if (tg.shouldFollowContentGrowth() && (e = o, 0 === l && e <= 24)) return void tg.compensateScrollToDistanceFromBottomPx(0);
                let a = M({
                    distanceFromBottomPx: tX(o),
                    preferLatestVisibleRow: o < l,
                    layout: t,
                    measuredHeightsByKey: tB.current,
                    nextLayout: r,
                    viewportHeightPx: tM.current.viewportHeightPx
                });
                if (null == a) return;
                let s = tg.getUnroundedScrollDistanceFromBottomPx(o),
                    i = function(e) {
                        let {
                            anchorKey: t,
                            distanceFromBottomPx: n,
                            nextLayout: r,
                            previousLayout: l
                        } = e, o = l.turnIndexByKey.get(t), a = r.turnIndexByKey.get(t);
                        if (null == o || null == a) return null;
                        let s = (l.bottomOffsetsPx[o] ?? 0) + (l.heightsPx[o] ?? 0);
                        return Math.max(0, n + ((r.bottomOffsetsPx[a] ?? 0) + (r.heightsPx[a] ?? 0)) - s)
                    }({
                        anchorKey: a,
                        distanceFromBottomPx: s,
                        nextLayout: r,
                        previousLayout: t
                    });
                null != i && (i !== s || t.totalHeightPx !== r.totalHeightPx) && (t7(D(i, l), tM.current.viewportHeightPx), tg.compensateScrollToDistanceFromBottomPx(i))
            }, eq[200] = eX, eq[201] = t$, eq[202] = tX, eq[203] = e0, eq[204] = tI, eq[205] = ta, eq[206] = tg, eq[207] = t7, eq[208] = eK) : eK = eq[208], eq[209] !== eX || eq[210] !== t$ || eq[211] !== tX || eq[212] !== e0 || eq[213] !== tb || eq[214] !== tI || eq[215] !== ta || eq[216] !== tg || eq[217] !== t7 ? (eD = [eX, t$, tX, e0, tb, tI, ta, tg, t7], eq[209] = eX, eq[210] = t$, eq[211] = tX, eq[212] = e0, eq[213] = tb, eq[214] = tI, eq[215] = ta, eq[216] = tg, eq[217] = t7, eq[218] = eD) : eD = eq[218], (0, s.useLayoutEffect)(eK, eD), eq[219] !== tI || eq[220] !== t9 || eq[221] !== tZ || eq[222] !== t7 ? (eH = () => {
                null == tI && null == tj.current && (t7(tM.current.distanceFromBottomPx, tM.current.viewportHeightPx), tZ(), t9(tM.current.distanceFromBottomPx, tM.current.viewportHeightPx, !1))
            }, eq[219] = tI, eq[220] = t9, eq[221] = tZ, eq[222] = t7, eq[223] = eH) : eH = eq[223], eq[224] !== tb || eq[225] !== tI || eq[226] !== t9 || eq[227] !== tZ || eq[228] !== t7 ? (eR = [tb, tI, t9, tZ, t7], eq[224] = tb, eq[225] = tI, eq[226] = t9, eq[227] = tZ, eq[228] = t7, eq[229] = eR) : eR = eq[229], (0, s.useLayoutEffect)(eH, eR), eq[230] !== t6 ? (eF = () => {
                t6()
            }, eq[230] = t6, eq[231] = eF) : eF = eq[231], (0, s.useLayoutEffect)(eF), eq[232] !== tm || eq[233] !== e4 ? (ej = e4 ?? tm.at(-1)?.turnKey, eq[232] = tm, eq[233] = e4, eq[234] = ej) : ej = eq[234];
            let nf = ej;
            eq[235] !== eQ ? (eA = (0, o.b)("relative shrink-0", eQ), eq[235] = eQ, eq[236] = eA) : eA = eq[236], eq[237] !== tb.totalHeightPx ? (eL = {
                height: tb.totalHeightPx
            }, eq[237] = tb.totalHeightPx, eq[238] = eL) : eL = eq[238];
            let nx = `${tb.topOffsetsPx[tY.startIndex]??0}px`;
            eq[239] !== nx ? (e_ = {
                marginTop: nx
            }, eq[239] = nx, eq[240] = e_) : e_ = eq[240];
            let ny = t1.map(e => {
                let {
                    entry: t,
                    turnIndex: n
                } = e;
                return (0, r.jsx)(E, {
                    entry: t,
                    gapBeforePx: n === tY.startIndex ? 0 : tb.gapsBeforePx[n] ?? 0,
                    retainedTopPx: n < tY.startIndex || n >= tY.endIndex ? tb.topOffsetsPx[n] : void 0,
                    latestTurnFollowContentRef: n === tm.length - 1 && null != eY ? nc : void 0,
                    latestTurnFooter: t.turnKey === nf ? e3 : void 0,
                    RowComponent: eU,
                    measuredHeightPx: null == ty[t.turnKey] ? void 0 : tb.heightsPx[n],
                    constrainedHeightPx: n !== tm.length - 1 && tI?.turnKey !== t.turnKey && null == ty[t.turnKey] ? tb.heightsPx[n] : void 0,
                    observeTurnElement: ni
                }, t.turnKey)
            });
            return eq[241] !== e_ || eq[242] !== ny ? (ez = (0, r.jsx)("div", {
                className: "flex flex-col",
                style: e_,
                children: ny
            }), eq[241] = e_, eq[242] = ny, eq[243] = ez) : ez = eq[243], eq[244] !== tQ || eq[245] !== eA || eq[246] !== eL || eq[247] !== ez ? (eO = (0, r.jsx)("div", {
                ref: tQ,
                className: eA,
                style: eL,
                children: ez
            }), eq[244] = tQ, eq[245] = eA, eq[246] = eL, eq[247] = ez, eq[248] = eO) : eO = eq[248], eO
        }

        function k(e, t) {
            return e.turnIndex - t.turnIndex
        }

        function I() {
            return new R
        }
        let E = (0, s.memo)(function(e) {
            let t, n, a, s, i, u, c = (0, l.c)(24),
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
                    turnKey: P
                } = d;
            c[0] !== w || c[1] !== P ? (t = e => w(P, e), c[0] = w, c[1] = P, c[2] = t) : t = c[2];
            let b = (0, g.a)(t),
                S = null != v && "absolute inset-x-0",
                C = null != x && "overflow-hidden";
            c[3] !== S || c[4] !== C ? (n = (0, o.b)(S, C), c[3] = S, c[4] = C, c[5] = n) : n = c[5];
            let k = y ?? x,
                I = null == v ? h : 0,
                E = null == y ? d.minHeightPx : void 0;
            return c[6] !== v || c[7] !== k || c[8] !== I || c[9] !== E ? (a = {
                height: k,
                marginTop: I,
                minHeight: E,
                top: v
            }, c[6] = v, c[7] = k, c[8] = I, c[9] = E, c[10] = a) : a = c[10], c[11] !== f || c[12] !== d || c[13] !== m || c[14] !== p ? (s = (0, r.jsx)(f, {
                entry: d,
                latestTurnFooter: p,
                latestTurnFollowContentRef: m
            }), c[11] = f, c[12] = d, c[13] = m, c[14] = p, c[15] = s) : s = c[15], c[16] !== b || c[17] !== s || c[18] !== P ? (i = (0, r.jsx)("div", {
                ref: b,
                className: "[&_[data-virtualized-turn-content]]:[content-visibility:visible]",
                "data-turn-key": P,
                children: s
            }), c[16] = b, c[17] = s, c[18] = P, c[19] = i) : i = c[19], c[20] !== i || c[21] !== n || c[22] !== a ? (u = (0, r.jsx)("div", {
                className: n,
                style: a,
                children: i
            }), c[20] = i, c[21] = n, c[22] = a, c[23] = u) : u = c[23], u
        });

        function B(e) {
            var t, n;
            let {
                current: r,
                distanceFromBottomPx: l,
                layout: o,
                viewportHeightPx: a
            } = e, s = Math.min(l, o.totalHeightPx), i = w({
                distanceFromBottomPx: s,
                layout: o,
                overscanCount: 2,
                viewportHeightPx: a
            }), u = (t = r.renderedRange, n = i, t.startIndex <= n.startIndex && t.endIndex >= n.endIndex) ? r.renderedRange : i;
            return r.distanceFromBottomPx === s && r.viewportHeightPx === a && r.renderedRange.startIndex === u.startIndex && r.renderedRange.endIndex === u.endIndex && T(r.turnKeys, o.turnKeys) ? r : {
                distanceFromBottomPx: s,
                renderedRange: u,
                turnKeys: o.turnKeys,
                viewportHeightPx: a
            }
        }

        function M(e) {
            let {
                distanceFromBottomPx: t,
                preferLatestVisibleRow: n,
                layout: r,
                measuredHeightsByKey: l,
                nextLayout: o,
                viewportHeightPx: a
            } = e, s = w({
                distanceFromBottomPx: t,
                layout: r,
                overscanCount: 0,
                viewportHeightPx: Math.max(0, a + Math.min(0, t))
            }), i = null;
            for (let e = s.startIndex; e < s.endIndex; e += 1) {
                let s = r.turnKeys[e];
                if (null != s && !r.gapKeys.has(s) && (!r.collapseEmptyRows || (r.heightsPx[e] ?? 0) > 0) && null != l[s] && o.turnIndexByKey.has(s) && (r.bottomOffsetsPx[e] ?? 0) < t + a && (r.bottomOffsetsPx[e] ?? 0) + (r.heightsPx[e] ?? 0) > t) {
                    if (n) i = s;
                    else if (null == i && (i = s), (r.bottomOffsetsPx[e] ?? 0) + (r.heightsPx[e] ?? 0) <= t + a) return s
                }
            }
            return i
        }

        function T(e, t) {
            return e === t || e.length === t.length && e.every((e, n) => e === t[n])
        }

        function K(e) {
            return Math.max(0, e?.() ?? 0)
        }

        function D(e, t) {
            return Math.max(0, e - t)
        }

        function H(e) {
            let {
                scrollElement: t,
                turnElement: n,
                windowZoom: r
            } = e;
            return null == t || null == n ? 0 : (0, u.b)(n.getBoundingClientRect().bottom - t.getBoundingClientRect().bottom, r)
        }
        class R {
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
    QSwz: (function(e, t, n) {
        var r = n("QosV"),
            l = n("BolX"),
            o = n("zd8w"),
            a = n("TSib"),
            s = n("ipIJ"),
            i = n("Sd8U"),
            u = n("tSEg"),
            c = n("vzzY"),
            d = n("ALWK");
        n.d(t, {}, {
            a: function(e) {
                let t, n, h, m, g, p = (0, r.c)(14);
                p[0] !== e ? (t = void 0 === e ? {} : e, p[0] = e, p[1] = t) : t = p[1];
                let {
                    transcriptMcpAppIds: f,
                    blockedWidgetSource: x,
                    shouldBlockExternalEgress: y
                } = t, v = void 0 !== y && y, w = (0, l.y)(u.a), P = (0, l.y)(i.a), b = (0, l.z)(d.j), S = (0, l.z)(a.w);
                return p[2] !== S || p[3] !== x || p[4] !== P || p[5] !== b || p[6] !== w || p[7] !== v || p[8] !== f ? (n = () => {
                    for (let [e, t] of("chatgpt-thread" === w.value.routeKind && (0, s.b)(P, S.filter(e => v || null != x && (e.widgetSource ?? "descriptor") === x)), b))(v || null != x && (t.content.mcpAppScope.widgetSource ?? "descriptor") === x || t.hostedInThreadScrollLayout && f?.has(e) === !1) && (0, d.y)(w, e)
                }, h = [S, x, f, P, b, w, v], p[2] = S, p[3] = x, p[4] = P, p[5] = b, p[6] = w, p[7] = v, p[8] = f, p[9] = n, p[10] = h) : (n = p[9], h = p[10]), (0, o.useLayoutEffect)(n, h), p[11] !== w ? (m = () => {
                    (0, c.e)(w)
                }, g = [w], p[11] = w, p[12] = m, p[13] = g) : (m = p[12], g = p[13]), (0, o.useLayoutEffect)(m, g), null
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
            o = n("zd8w"),
            a = n("jqIZ"),
            s = n("Cslg"),
            i = n("TS05"),
            u = n("tSEg");
        n.d(t, {}, {
            a: function(e) {
                let t, n, c, d = (0, r.c)(18),
                    {
                        ready: h,
                        onNavigate: m
                    } = e,
                    g = (0, l.y)(u.a),
                    p = (0, l.z)(s.f),
                    f = (0, a.Y)(),
                    x = f.state,
                    y = x?.sidebarArea === "scheduled";
                d[0] !== p || d[1] !== f.key ? (t = {
                    locationKey: f.key,
                    accountId: p
                }, d[0] = p, d[1] = f.key, d[2] = t) : t = d[2];
                let v = (0, l.x)(i.a, t),
                    w = (0, o.useEffectEvent)(m);
                return d[3] !== p || d[4] !== v || d[5] !== f.key || d[6] !== w || d[7] !== h || d[8] !== y || d[9] !== g ? (n = () => {
                    if (!y || !h || v) return;
                    let e = new AbortController;
                    return w(e.signal).then(() => {
                        e.signal.aborted || g.set(i.a, {
                            locationKey: f.key,
                            accountId: p
                        }, !0)
                    }), () => e.abort()
                }, d[3] = p, d[4] = v, d[5] = f.key, d[6] = w, d[7] = h, d[8] = y, d[9] = g, d[10] = n) : n = d[10], d[11] !== p || d[12] !== v || d[13] !== f.key || d[14] !== h || d[15] !== y || d[16] !== g ? (c = [p, v, f.key, h, y, g], d[11] = p, d[12] = v, d[13] = f.key, d[14] = h, d[15] = y, d[16] = g, d[17] = c) : c = d[17], (0, o.useEffect)(n, c), null
            }
        })
    }),
    yLzP: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            o = n("oyxz"),
            a = n("ygO2"),
            s = n("RNul");
        n.d(t, {}, {
            a: function(e) {
                let t, n, i = (0, l.c)(5),
                    {
                        ref: u,
                        onRetry: c
                    } = e;
                return i[0] !== c ? (t = null != c ? (0, r.jsx)(a.a, {
                    color: "secondary",
                    onClick: c,
                    children: (0, r.jsx)(o.a, {
                        id: "chatgpt.pagination.retry",
                        defaultMessage: "Try again",
                        description: "Button to retry loading older conversation messages after a failure"
                    })
                }) : (0, r.jsxs)("div", {
                    role: "status",
                    children: [(0, r.jsx)(s.a, {}), (0, r.jsx)("span", {
                        className: "sr-only",
                        children: (0, r.jsx)(o.a, {
                            id: "chatgpt.pagination.loading",
                            defaultMessage: "Loading older messages…",
                            description: "Accessible status while an older page of conversation messages loads"
                        })
                    })]
                }), i[0] = c, i[1] = t) : t = i[1], i[2] !== u || i[3] !== t ? (n = (0, r.jsx)("div", {
                    ref: u,
                    className: "flex justify-center py-4",
                    children: t
                }), i[2] = u, i[3] = t, i[4] = n) : n = i[4], n
            }
        })
    }),
    KFm7: (function(e, t, n) {
        var r = n("acLe"),
            l = n("jCHb"),
            o = n("p5Yg"),
            a = n("V8uZ"),
            s = n("uYx2");
        let i = 2 / 3;

        function u(e) {
            let t = Number.parseFloat(e.style.getPropertyValue("--thread-scroll-padding-bottom") || e.style.getPropertyValue("--thread-scroll-seeded-padding-bottom"));
            return Number.isFinite(t) ? t : 0
        }

        function c(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = Math.max(0, e.clientHeight - u(e));
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
                        r = n.bottom - u(e) * (n.height / e.clientHeight);
                    t.getBoundingClientRect().top > r || (this.canPrepareThreadEndContent = !1, this.cancelPendingUserScrollDecay(), this.consumeGrowth((0, s.b)(e)), this.scrollController.compensateScrollToDistanceFromBottomPx(0))
                };
                collapseIfHidden = () => {
                    let e = this.scrollController.getScrollElement();
                    if (0 >= this.height.get() || null != this.stopPlacementAnimation || null == e || null == this.element) return;
                    let t = e.getBoundingClientRect(),
                        n = t.height / e.clientHeight,
                        r = t.bottom - u(e) * n;
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
                            n = u(e),
                            r = t !== this.viewportHeightPx || n !== this.scrollPaddingBottomPx;
                        this.viewportHeightPx = t, this.scrollPaddingBottomPx = n;
                        let l = r && null != this.stopPlacementAnimation,
                            o = this.canPrepareThreadEndContent;
                        l && (this.canPrepareThreadEndContent = !1, this.stop());
                        let a = this.trimTo(c(e, null != this.placementTarget));
                        l && (a || this.scrollController.compensateScrollToDistanceFromBottomPx((0, s.b)(e)), this.animatePlacement(), this.canPrepareThreadEndContent = o)
                    }
                };
                place = e => {
                    let t = this.scrollController.getScrollElement();
                    if (null == t) return;
                    this.canPrepareThreadEndContent = !1, this.cancelPendingUserScrollDecay(), this.interruptPlacement(), this.placementTarget = e, this.viewportHeightPx = t.clientHeight, this.scrollPaddingBottomPx = u(t);
                    let n = this.height.get(),
                        r = (0, s.b)(t),
                        l = this.getPlacementDistancePx(t);
                    this.scrollController.holdViewport(), this.writeHeight(null == e ? c(t) : Math.max(0, n - l + 1)), this.prefersReducedMotion || this.scrollController.compensateScrollToDistanceFromBottomPx(r + this.height.get() - n), this.animatePlacement(), this.canPrepareThreadEndContent = !0
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
                                    ...a.g,
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
                                                o.b.update(n, !0)
                                            },
                                            stop: () => {
                                                (0, o.a)(n)
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
            b: u
        })
    }),
    Ho4C: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            o = n("zd8w"),
            a = n("T1PX"),
            s = n("ZYy5"),
            i = n("m8On"),
            u = n("bIvi"),
            c = n("lsfk");
        let d = Array.from({
            length: 101
        }, (e, t) => t / 100);
        n.d(t, {}, {
            a: function(e) {
                let t, n, h, m, g, p, f, x, y, v, w, P, b, S, C = (0, l.c)(31),
                    {
                        controller: k,
                        onReleased: I
                    } = e,
                    E = (0, c.b)(),
                    B = (0, o.useContext)(s.a),
                    M = (0, a.a)(),
                    {
                        getScrollElement: T
                    } = E;
                C[0] !== k ? (t = e => {
                    k.setElement(e)
                }, C[0] = k, C[1] = t) : t = C[1];
                let K = (0, u.a)(t);
                return C[2] !== k || C[3] !== I || C[4] !== M || C[5] !== E ? (n = () => {
                    k.updateContext(E, M, I)
                }, h = [k, E, M, I], C[2] = k, C[3] = I, C[4] = M, C[5] = E, C[6] = n, C[7] = h) : (n = C[6], h = C[7]), (0, o.useInsertionEffect)(n, h), C[8] !== k || C[9] !== T ? (m = () => {
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
                }, g = [k, T], C[8] = k, C[9] = T, C[10] = m, C[11] = g) : (m = C[10], g = C[11]), (0, o.useEffect)(m, g), C[12] !== k.cancelPendingUserScrollDecay ? (p = () => k.cancelPendingUserScrollDecay, C[12] = k.cancelPendingUserScrollDecay, C[13] = p) : p = C[13], C[14] !== k ? (f = [k], C[14] = k, C[15] = f) : f = C[15], (0, o.useEffect)(p, f), C[16] !== k || C[17] !== T ? (x = () => {
                    let e = T();
                    if (null == e || "u" < typeof IntersectionObserver) return;
                    let t = new IntersectionObserver(k.collapseIfHidden, {
                            root: e,
                            threshold: d
                        }),
                        n = k.getElement();
                    return null != n && t.observe(n), () => t.disconnect()
                }, y = [k, T], C[16] = k, C[17] = T, C[18] = x, C[19] = y) : (x = C[18], y = C[19]), (0, o.useEffect)(x, y), C[20] !== k || C[21] !== E ? (v = () => {
                    let e = E.addScrollListener(k.handleScroll),
                        t = E.addUserScrollListener(k.handleUserScroll);
                    return k.reconcileViewport(), () => {
                        e(), t()
                    }
                }, w = [k, E], C[20] = k, C[21] = E, C[22] = v, C[23] = w) : (v = C[22], w = C[23]), (0, o.useLayoutEffect)(v, w), C[24] !== k || C[25] !== T || C[26] !== B ? (P = () => {
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
                        o = null == l ? [e] : [e, l];
                    for (let e of o)(0, i.a)({
                        element: e,
                        callback: n,
                        observer: r
                    });
                    return window.addEventListener("resize", n, {
                        passive: !0
                    }), () => {
                        for (let e of o)(0, i.c)({
                            element: e,
                            callback: n,
                            observer: r
                        });
                        null == B && r?.disconnect(), window.removeEventListener("resize", n), null != t && window.cancelAnimationFrame(t)
                    }
                }, b = [k, T, B], C[24] = k, C[25] = T, C[26] = B, C[27] = P, C[28] = b) : (P = C[27], b = C[28]), (0, o.useEffect)(P, b), C[29] !== K ? (S = (0, r.jsx)("div", {
                    ref: K,
                    className: "shrink-0",
                    "aria-hidden": !0
                }), C[29] = K, C[30] = S) : S = C[30], S
            }
        })
    }),
    g3o5: (function(e, t, n) {
        var r = n("SZCv"),
            l = n.n(r),
            o = n("BolX"),
            a = n("OWtl");
        let s = (0, o.u)(a.a, () => new Map),
            i = (0, o.c)(a.a, e => {
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
            o = n("p5Yg"),
            a = n("B7sF"),
            s = n("jCHb"),
            i = n("RgeH"),
            u = n("BolX"),
            c = n("zd8w"),
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

        function P(e, t, n, r, l, o) {
            return b({
                isSummaryPanelPinned: t && (o ?? (0, m.z)(!0 === n ? e.get(m.N) : e.get(m.C, n), n)),
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
                let t, n, o, a, w, S, C, k, I, E, B, M = (0, r.c)(64),
                    {
                        contentShiftResetKey: T,
                        controlledIsOpen: K,
                        floatingPanelWidth: D,
                        getCurrentPinStateKey: H,
                        isEnabled: R,
                        pinStateKey: F
                    } = void 0 === e ? {} : e,
                    j = void 0 === R || R,
                    A = void 0 === F || F,
                    L = (0, u.y)(g.a),
                    _ = (0, u.z)(null == K && !0 === A ? m.N : null),
                    z = (0, u.x)(null == K && !0 !== A ? m.C : null, !0 !== A && A),
                    O = K ?? (0, m.z)(!0 === A ? _ : z, A),
                    q = (0, u.z)(m.h),
                    N = (0, u.z)(h.G),
                    W = (0, u.z)(f.g),
                    U = (0, u.z)(v.b),
                    G = j && O,
                    V = D ?? 300,
                    Q = j && null == D && (K ?? (U.isPopoverOpen || "boolean" != typeof A && O)),
                    $ = (0, u.z)(p.c),
                    X = (0, c.useContext)(d.c),
                    Y = (0, l.a)(0),
                    Z = X?.mainContentTargetWidth ?? Y,
                    J = (0, l.a)(b({
                        isSummaryPanelPinned: G,
                        floatingPanelWidth: D,
                        mainContentTargetWidth: Z.get()
                    }));
                M[0] !== Z ? (t = e => Z.on("change", e), M[0] = Z, M[1] = t) : t = M[1];
                let ee = t,
                    et = () => (0, x.c)(Z.get(), V),
                    en = (0, c.useSyncExternalStore)(ee, et, et),
                    er = (0, c.useRef)(null);
                M[2] !== J ? (n = J.get(), M[2] = J, M[3] = n) : n = M[3], M[4] !== Z ? (o = Z.get(), M[4] = Z, M[5] = o) : o = M[5], M[6] !== n || M[7] !== o ? (a = {
                    offset: n,
                    width: o
                }, M[6] = n, M[7] = o, M[8] = a) : a = M[8];
                let el = (0, c.useRef)(a),
                    eo = (0, c.useRef)(!1),
                    ea = (0, c.useRef)(T),
                    es = (0, c.useRef)(q),
                    ei = (0, c.useRef)(N),
                    eu = (0, x.a)({
                        displayMode: en,
                        isPinned: G && null == D,
                        isPopoverOpen: Q
                    }),
                    ec = eu.shouldShow && !W;
                M[9] !== J || M[10] !== T || M[11] !== ea || M[12] !== K || M[13] !== D || M[14] !== H || M[15] !== N || M[16] !== j || M[17] !== Z || M[18] !== A || M[19] !== q || M[20] !== L ? (w = () => {
                    let e = es.current !== q,
                        t = ei.current !== N;
                    if (!eo.current && ea.current === T && !e && !t) return;
                    eo.current = !1, ea.current = T, es.current = q, ei.current = N;
                    let n = P(L, j, H?.() ?? A, Z.get(), D, K);
                    el.current = {
                        offset: n,
                        width: Z.get()
                    }, er.current?.(), J.jump(n)
                }, M[9] = J, M[10] = T, M[11] = ea, M[12] = K, M[13] = D, M[14] = H, M[15] = N, M[16] = j, M[17] = Z, M[18] = A, M[19] = q, M[20] = L, M[21] = w) : w = M[21], M[22] !== J || M[23] !== T || M[24] !== K || M[25] !== D || M[26] !== H || M[27] !== N || M[28] !== j || M[29] !== Z || M[30] !== A || M[31] !== q || M[32] !== L ? (S = [J, T, K, D, H, N, j, Z, A, q, L], M[22] = J, M[23] = T, M[24] = K, M[25] = D, M[26] = H, M[27] = N, M[28] = j, M[29] = Z, M[30] = A, M[31] = q, M[32] = L, M[33] = S) : S = M[33], (0, c.useLayoutEffect)(w, S);
                let ed = X?.chatPaneWidth ?? Z;
                M[34] !== ed || M[35] !== J || M[36] !== K || M[37] !== D || M[38] !== H || M[39] !== j || M[40] !== Z || M[41] !== A || M[42] !== L || M[43] !== $ ? (C = () => {
                    let e = (e, t) => {
                        let n = P(L, j, H?.() ?? A, e, D, K),
                            r = el.current,
                            l = J.get();
                        if (r.offset === n && (l === n || r.width === e && !t)) return;
                        if (el.current = {
                                offset: n,
                                width: e
                            }, er.current?.(), t || 0 === e || l === n) return void J.jump(n);
                        let o = ed.get();
                        if (o === e) {
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
                        let a = (0, i.a)([o, e], [l, n]),
                            u = ed.on("change", e => {
                                let t = a(e);
                                J.set(t), t === n && queueMicrotask(u)
                            });
                        er.current = u
                    };
                    return e(Z.get(), $), Z.on("change", t => {
                        e(t, $ || 0 === Z.getPrevious() || L.get(m.h) !== es.current)
                    })
                }, M[34] = ed, M[35] = J, M[36] = K, M[37] = D, M[38] = H, M[39] = j, M[40] = Z, M[41] = A, M[42] = L, M[43] = $, M[44] = C) : C = M[44], M[45] !== ed || M[46] !== J || M[47] !== K || M[48] !== D || M[49] !== H || M[50] !== j || M[51] !== G || M[52] !== Z || M[53] !== A || M[54] !== L || M[55] !== $ ? (k = [ed, J, K, D, H, j, G, Z, A, L, $], M[45] = ed, M[46] = J, M[47] = K, M[48] = D, M[49] = H, M[50] = j, M[51] = G, M[52] = Z, M[53] = A, M[54] = L, M[55] = $, M[56] = k) : k = M[56], (0, c.useLayoutEffect)(C, k), M[57] === Symbol.for("react.memo_cache_sentinel") ? (I = () => () => {
                    eo.current = !0, er.current?.()
                }, E = [], M[57] = I, M[58] = E) : (I = M[57], E = M[58]), (0, c.useLayoutEffect)(I, E);
                let eh = eu.shouldHideInlineImmediately || W,
                    em = W ? null : eu.visibleSurface;
                return M[59] !== J || M[60] !== ec || M[61] !== eh || M[62] !== em ? (B = {
                    contentShift: J,
                    shouldHideInlineImmediately: eh,
                    shouldShow: ec,
                    visibleSurface: em
                }, M[59] = J, M[60] = ec, M[61] = eh, M[62] = em, M[63] = B) : B = M[63], B
            },
            b: function(e, t) {
                let n, s, i, h, g, p, f = (0, r.c)(15),
                    y = void 0 !== t && t,
                    P = (0, u.z)(m.i),
                    b = (0, u.z)(m.r),
                    S = (0, c.useContext)(d.c),
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
                    o.b.update(I)
                }, f[4] = I, f[5] = s) : s = f[5], (0, a.a)(k, "change", s), f[6] !== I ? (i = () => (I(), () => (0, o.a)(I)), f[6] = I, f[7] = i) : i = f[7], f[8] !== P || f[9] !== b || f[10] !== I ? (h = [P, b, I], f[8] = P, f[9] = b, f[10] = I, f[11] = h) : h = f[11], (0, c.useLayoutEffect)(i, h), f[12] !== e ? (g = () => () => {
                    e.set(v.b, w)
                }, p = [e], f[12] = e, f[13] = g, f[14] = p) : (g = f[13], p = f[14]), (0, c.useLayoutEffect)(g, p)
            }
        })
    })
};