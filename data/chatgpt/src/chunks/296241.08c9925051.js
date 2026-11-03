export const __rspack_esm_ids = [296241];
export const __webpack_modules__ = {
    TS05: (function(e, t, n) {
        var r = n("iTtm"),
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
            i = n("ZtSy");
        let s = [{
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
            let t, n, a = (0, l.c)(4),
                {
                    inDialog: c
                } = e,
                u = void 0 !== c && c;
            return a[0] !== u ? (t = s.map((e, t) => {
                let n = e.emphasize ? (0, r.jsx)("strong", {
                    children: e.label
                }) : e.label;
                return (0, r.jsxs)(o.Fragment, {
                    children: [t > 0 && (0, r.jsx)("span", {
                        "aria-hidden": "true",
                        children: "|"
                    }), e.href ? (0, r.jsx)(i.a, {
                        href: e.href,
                        initiator: "open_in_browser_bridge",
                        openTarget: u ? "external-browser" : void 0,
                        underline: "always",
                        children: n
                    }) : (0, r.jsxs)("span", {
                        children: [e.prefix, n]
                    })]
                }, e.label)
            }), a[0] = u, a[1] = t) : t = a[1], a[2] !== t ? (n = (0, r.jsx)("div", {
                className: "flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-xs text-secondary select-text",
                children: t
            }), a[2] = t, a[3] = n) : n = a[3], n
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, i = (0, l.c)(5),
                    {
                        inDialog: s
                    } = e,
                    u = void 0 !== s && s,
                    d = (0, a.a)();
                return "ko" !== new Intl.Locale(d.locale).language ? null : (i[0] !== u ? (t = (0, r.jsx)(c, {
                    inDialog: u
                }), i[0] = u, i[1] = t) : t = i[1], i[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, r.jsx)("p", {
                    children: "귀하가 19세 미만의 이용자로서 귀하의 법정대리인이 본 계약에 동의하지 않은 경우, 귀하 또는 귀하의 법정대리인은 계약을 취소할 수 있습니다."
                }), i[2] = n) : n = i[2], i[3] !== t ? (o = (0, r.jsxs)("div", {
                    className: "flex flex-col items-center gap-2 text-center text-xs text-secondary select-text",
                    children: [t, n]
                }), i[3] = t, i[4] = o) : o = i[4], o)
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
            o = n("iTtm"),
            a = n("Wf1j"),
            i = n("oyxz"),
            s = n("Qgfj"),
            c = n("jqIZ"),
            u = n("OFP1"),
            d = n("EOo5"),
            h = n("ipGa");

        function m(e) {
            let t, n, o, a, s = (0, l.c)(9),
                {
                    context: c
                } = e;
            s[0] !== c.businessName ? (t = c.businessName?.trim(), s[0] = c.businessName, s[1] = t) : t = s[1];
            let u = t;
            return s[2] !== u ? (n = (0, r.jsx)("p", {
                children: u ? (0, r.jsx)(i.a, {
                    id: "chatgpt.ads.business_agent.composer_disclosure.aggregate_usage.body.named",
                    defaultMessage: "{businessName} can’t see this chat or your personal info — just overall usage trends to help improve their AI agent.",
                    values: {
                        businessName: u
                    },
                    description: "Privacy disclosure below the composer in every organic or sponsored Business Agent chat. It reassures users that the business cannot see the conversation or personal information and receives only aggregate usage trends to improve its AI agent. The {businessName} placeholder is the advertiser-provided business display name and may be long. Allow the sentence to wrap."
                }) : (0, r.jsx)(i.a, {
                    id: "chatgpt.ads.business_agent.composer_disclosure.aggregate_usage.body.unnamed",
                    defaultMessage: "This business can’t see this chat or your personal info — just overall usage trends to help improve their AI agent.",
                    description: "Privacy disclosure below the composer in every organic or sponsored Business Agent chat when no business display name is available. It reassures users that the business operating the agent cannot see the conversation or personal information and receives only aggregate usage trends to improve its AI agent. Allow the sentence to wrap."
                })
            }), s[2] = u, s[3] = n) : n = s[3], s[4] !== c.notice ? (o = c.notice?.trim() ? (0, r.jsx)("p", {
                children: c.notice
            }) : null, s[4] = c.notice, s[5] = o) : o = s[5], s[6] !== n || s[7] !== o ? (a = (0, r.jsxs)("div", {
                className: "flex flex-col gap-1",
                children: [n, o]
            }), s[6] = n, s[7] = o, s[8] = a) : a = s[8], a
        }
        var g = n("YJm0"),
            p = n("fzVa"),
            f = n("dQRk"),
            x = n("g2p6"),
            y = n("jAnS"),
            v = n("AcSY"),
            P = n("ZtSy"),
            w = n("Ho8f"),
            b = n("hZax"),
            S = n("fNyS"),
            C = n("zd8w"),
            k = n("IL1g"),
            I = n("JNtf"),
            E = n("mUDD"),
            B = n("ibLK"),
            T = n("jVko"),
            M = n("zWHk");
        let K = new WeakSet;

        function D(e) {
            let t, n, o, a, s = (0, l.c)(10),
                {
                    children: c
                } = e,
                u = (0, B.a)("(width < 640px)"),
                d = (0, C.useContext)(T.a);
            s[0] !== d ? (t = e => {
                if (null == d) return R;
                let t = () => {
                        K.add(d), e()
                    },
                    n = d.view.dom;
                n.addEventListener("input", t, !0);
                let r = (0, M.b)(d.view, t => {
                    t && e()
                });
                return () => {
                    n.removeEventListener("input", t, !0), r()
                }
            }, s[0] = d, s[1] = t) : t = s[1];
            let h = t;
            s[2] !== d ? (n = () => null == d || !d.hasText() && !K.has(d), s[2] = d, s[3] = n) : n = s[3];
            let m = n,
                g = (0, C.useSyncExternalStore)(h, m, H);
            if (!u) {
                let e;
                return s[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(k.b, {}), s[4] = e) : e = s[4], e
            }
            return s[5] !== g ? (o = g && (0, r.jsx)(I.a, {
                size: "responsiveSheet",
                triggerContent: (0, r.jsx)("button", {
                    className: "inline-flex min-h-6 min-w-6 cursor-interaction items-center justify-center text-xs text-secondary underline select-none",
                    type: "button",
                    children: (0, r.jsx)(i.a, {
                        ...F.companyInformation
                    })
                }),
                contentProps: {
                    "aria-describedby": void 0
                },
                children: (0, r.jsxs)(E.b, {
                    children: [(0, r.jsx)(E.d, {
                        title: (0, r.jsx)(I.d, {
                            children: (0, r.jsx)(i.a, {
                                ...F.companyInformation
                            })
                        })
                    }), (0, r.jsx)(E.e, {
                        children: (0, r.jsx)(k.b, {
                            inDialog: !0
                        })
                    })]
                })
            }), s[5] = g, s[6] = o) : o = s[6], s[7] !== c || s[8] !== o ? (a = (0, r.jsxs)("div", {
                className: "flex flex-col items-center gap-1",
                children: [c, o]
            }), s[7] = c, s[8] = o, s[9] = a) : a = s[9], a
        }

        function H() {
            return !0
        }

        function R() {}
        let F = (0, s.f)({
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
                i = e.placement ?? "thread",
                s = "home" === e.placement ? void 0 : L;
            return o[0] !== e || o[1] !== s ? (t = (0, r.jsx)(_, {
                ...e,
                renderOrdinaryDisclaimer: s
            }), o[0] = e, o[1] = s, o[2] = t) : t = o[2], o[3] !== a || o[4] !== i || o[5] !== t ? (n = (0, r.jsx)(w.a, {
                browser: !0,
                children: (0, r.jsx)(S.a, {
                    className: a,
                    placement: i,
                    children: t
                })
            }), o[3] = a, o[4] = i, o[5] = t, o[6] = n) : n = o[6], n
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
            let t, n, s, u = (0, l.c)(28),
                {
                    aiServiceDisclaimer: d,
                    conversationId: g,
                    hasUserMessage: p,
                    isTemporaryChat: x,
                    ordinaryDisclaimer: P,
                    pendingWorkspaceDisclaimer: w,
                    placement: b,
                    regulatedConnectorKindOverride: S,
                    renderOrdinaryDisclaimer: C
                } = e,
                k = void 0 === b ? "thread" : b,
                I = (0, a.a)(),
                {
                    search: E
                } = (0, c.Y)(),
                {
                    data: B
                } = (0, v.i)(),
                T = (0, o.x)(f.t, g ?? null),
                M = (0, o.x)(f.S, T?.status === "ready" && void 0 === S ? g ?? null : null);
            u[0] !== p || u[1] !== x || u[2] !== k || u[3] !== E ? (t = (x ?? (0, y.i)(E)) && !(p ?? "thread" === k), u[0] = p, u[1] = x, u[2] = k, u[3] = E, u[4] = t) : t = u[4];
            let K = t;
            if (null == B) return null == T ? w ?? null : null;
            if (null != T) {
                let e;
                if ("ready" !== T.status) return null;
                let t = void 0 !== S ? S : M;
                if (null != t) {
                    let e;
                    return u[5] !== t || u[6] !== P ? (e = (0, r.jsx)(W, {
                        ordinaryDisclaimer: P,
                        regulatedConnectorKind: t
                    }), u[5] = t, u[6] = P, u[7] = e) : e = u[7], e
                }
                return u[8] !== T.context ? (e = (0, r.jsx)(m, {
                    context: T.context
                }), u[8] = T.context, u[9] = e) : e = u[9], e
            }
            if ("workspace" === B.structure) {
                let e;
                return u[10] !== B || u[11] !== w || u[12] !== C || u[13] !== K ? (e = (0, r.jsx)(U, {
                    account: B,
                    pendingWorkspaceDisclaimer: w,
                    isTemporaryChat: K,
                    renderOrdinaryDisclaimer: C
                }), u[10] = B, u[11] = w, u[12] = C, u[13] = K, u[14] = e) : e = u[14], e
            }
            u[15] !== P || u[16] !== C ? (n = C?.(P ?? (0, r.jsx)(i.a, {
                ...V.personal
            })) ?? P, u[15] = P, u[16] = C, u[17] = n) : n = u[17], u[18] !== B.id || u[19] !== d || u[20] !== g || u[21] !== k || u[22] !== S || u[23] !== K || u[24] !== n ? (s = (0, r.jsx)(z, {
                accountId: B.id,
                aiServiceDisclaimer: d,
                conversationId: g,
                isTemporaryChat: K,
                ordinaryDisclaimer: n,
                placement: k,
                regulatedConnectorKindOverride: S
            }), u[18] = B.id, u[19] = d, u[20] = g, u[21] = k, u[22] = S, u[23] = K, u[24] = n, u[25] = s) : s = u[25];
            let H = s;
            if ("home" === k && !p && !K && !(0, h.a)() && "ko" === new Intl.Locale(I.locale).language) {
                let e;
                return u[26] !== H ? (e = (0, r.jsx)(D, {
                    children: H
                }), u[26] = H, u[27] = e) : e = u[27], e
            }
            return H
        }

        function z(e) {
            let t, n = (0, l.c)(16),
                {
                    accountId: o,
                    aiServiceDisclaimer: a,
                    conversationId: i,
                    isTemporaryChat: s,
                    ordinaryDisclaimer: c,
                    placement: u,
                    regulatedConnectorKindOverride: d
                } = e,
                h = (0, b.h)("1831960162");
            if (!(0, b.i)("1831960162") && !h) {
                let e;
                return n[0] !== o || n[1] !== a || n[2] !== i || n[3] !== s || n[4] !== c || n[5] !== u || n[6] !== d ? (e = (0, r.jsx)(O, {
                    accountId: o,
                    aiServiceDisclaimer: a,
                    conversationId: i,
                    isTemporaryChat: s,
                    ordinaryDisclaimer: c,
                    placement: u,
                    regulatedConnectorKindOverride: d
                }), n[0] = o, n[1] = a, n[2] = i, n[3] = s, n[4] = c, n[5] = u, n[6] = d, n[7] = e) : e = n[7], e
            }
            return n[8] !== a || n[9] !== i || n[10] !== s || n[11] !== c || n[12] !== u || n[13] !== d || n[14] !== h ? (t = (0, r.jsx)(q, {
                aiServiceDisclaimer: a,
                conversationId: i,
                isTemporaryChat: s,
                ordinaryDisclaimer: c,
                placement: u,
                regulatedConnectorKindOverride: d,
                showAiServiceDisclaimer: h
            }), n[8] = a, n[9] = i, n[10] = s, n[11] = c, n[12] = u, n[13] = d, n[14] = h, n[15] = t) : t = n[15], t
        }

        function O(e) {
            let t, n = (0, l.c)(8),
                {
                    accountId: a,
                    aiServiceDisclaimer: i,
                    conversationId: s,
                    isTemporaryChat: c,
                    ordinaryDisclaimer: u,
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
                P = (0, b.h)(!!v && (null == y || "under_18" === y.age_status) && "1639821169");
            return v ? (n[0] !== i || n[1] !== s || n[2] !== c || n[3] !== u || n[4] !== h || n[5] !== m || n[6] !== P ? (t = (0, r.jsx)(q, {
                aiServiceDisclaimer: i,
                conversationId: s,
                isTemporaryChat: c,
                ordinaryDisclaimer: u,
                placement: h,
                regulatedConnectorKindOverride: m,
                showAiServiceDisclaimer: P
            }), n[0] = i, n[1] = s, n[2] = c, n[3] = u, n[4] = h, n[5] = m, n[6] = P, n[7] = t) : t = n[7], t) : null
        }

        function q(e) {
            let t, n, o = (0, l.c)(10),
                {
                    aiServiceDisclaimer: a,
                    conversationId: s,
                    isTemporaryChat: c,
                    ordinaryDisclaimer: u,
                    placement: d,
                    regulatedConnectorKindOverride: m,
                    showAiServiceDisclaimer: g
                } = e;
            o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, h.a)(), o[0] = t) : t = o[0];
            let p = t;
            if (c) {
                let e;
                return o[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(i.a, {
                    ...V.temporaryChat
                }), o[1] = e) : e = o[1], e
            }
            if (g) {
                let e;
                return o[2] !== a ? (e = a ?? (0, r.jsx)(i.a, {
                    ...V.aiService
                }), o[2] = a, o[3] = e) : e = o[3], e
            }
            if (void 0 !== m) {
                let e;
                return null == m && (p || "home" === d) ? null : (o[4] !== u || o[5] !== m ? (e = (0, r.jsx)(W, {
                    ordinaryDisclaimer: u,
                    regulatedConnectorKind: m
                }), o[4] = u, o[5] = m, o[6] = e) : e = o[6], e)
            }
            return "home" === d ? null : (o[7] !== s || o[8] !== u ? (n = (0, r.jsx)(N, {
                conversationId: s,
                isBrowserSideChat: p,
                ordinaryDisclaimer: u
            }), o[7] = s, o[8] = u, o[9] = n) : n = o[9], n)
        }

        function N(e) {
            let t, n = (0, l.c)(3),
                {
                    conversationId: a,
                    isBrowserSideChat: i,
                    ordinaryDisclaimer: s
                } = e,
                c = (0, o.x)(f.S, a ?? null);
            return i && null == c ? null : (n[0] !== s || n[1] !== c ? (t = (0, r.jsx)(W, {
                ordinaryDisclaimer: s,
                regulatedConnectorKind: c
            }), n[0] = s, n[1] = c, n[2] = t) : t = n[2], t)
        }

        function W(e) {
            let t, n = (0, l.c)(4),
                {
                    ordinaryDisclaimer: o,
                    regulatedConnectorKind: a
                } = e;
            if ("finance" === a) {
                let e;
                return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(i.a, {
                    ...V.finance
                }), n[0] = e) : e = n[0], e
            }
            if ("health" === a) {
                let e;
                return n[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(i.a, {
                    ...V.health
                }), n[1] = e) : e = n[1], e
            }
            return n[2] !== o ? (t = o ?? (0, r.jsx)(i.a, {
                ...V.personal
            }), n[2] = o, n[3] = t) : t = n[3], t
        }

        function U(e) {
            let t, n = (0, l.c)(10),
                {
                    account: a,
                    pendingWorkspaceDisclaimer: s,
                    isTemporaryChat: c,
                    renderOrdinaryDisclaimer: d
                } = e,
                m = (0, h.a)(),
                {
                    data: p
                } = (0, o.x)(g.a, a.id),
                {
                    data: f
                } = (0, o.x)(u.k, a.id);
            if (null == p || null != s && null == f) return s ?? null;
            let x = "early-access" === p.account.workspace_type;
            if (!x && null == f) return null;
            let y = p.account.name ?? a.name;
            if (f?.beta_settings.training_allowed === !0) {
                let e;
                n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(i.a, {
                    ...V.workspaceResearchPartner,
                    values: {
                        link: G
                    }
                }), n[0] = e) : e = n[0], t = e
            } else if (x) {
                let e;
                n[1] !== y ? (e = null == y ? (0, r.jsx)(i.a, {
                    ...V.earlyAccessWorkspaceWithoutName
                }) : (0, r.jsx)(i.a, {
                    ...V.earlyAccessWorkspace,
                    values: {
                        workspaceName: y
                    }
                }), n[1] = y, n[2] = e) : e = n[2], t = e
            } else if (c) {
                let e;
                n[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(i.a, {
                    ...V.workspaceTemporaryChat
                }), n[3] = e) : e = n[3], t = e
            } else if (null != p.account.ekm_config) {
                let e;
                n[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(i.a, {
                    ...V.encryptedWorkspace
                }), n[4] = e) : e = n[4], t = e
            } else if ("k12" === a.plan_type) {
                let e;
                n[5] !== y ? (e = null == y ? (0, r.jsx)(i.a, {
                    ...V.k12WorkspaceWithoutName
                }) : (0, r.jsx)(i.a, {
                    ...V.k12Workspace,
                    values: {
                        workspaceName: y
                    }
                }), n[5] = y, n[6] = e) : e = n[6], t = e
            } else {
                let e, l;
                return m ? null : (n[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(i.a, {
                    ...V.workspace
                }), n[7] = e) : e = n[7], t = e, n[8] !== d ? (l = d?.(t) ?? t, n[8] = d, n[9] = l) : l = n[9], l)
            }
            return t
        }

        function G(e) {
            return (0, r.jsx)(P.a, {
                className: "cursor-interaction underline underline-offset-2 hover:text-default",
                href: "https://help.openai.com/articles/20001245",
                initiator: "open_in_browser_bridge",
                isBrowserEnabled: !1,
                children: e
            })
        }
        let V = (0, s.f)({
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
        let i = Array.from("αβγδεζηθικλμνξοπρστυφχψω"),
            s = new Map([..."alpha beta gamma delta epsilon zeta eta theta iota kappa lambda mu nu xi omicron pi rho sigma tau upsilon phi chi psi omega".split(" ").map((e, t) => [e, i[t]]), ..."nabla:∇ partial:∂ cdot:⋅ times:× div:÷ pm:± mp:∓ le:≤ leq:≤ ge:≥ geq:≥ ne:≠ neq:≠ infty:∞ sum:∑ prod:∏ int:∫ in:∈ notin:∉ to:→ rightarrow:→ leftarrow:←".split(" ").map(e => {
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
                if (c.test(e.value)) {
                    let r = a();
                    return n.push({
                        start: e.start,
                        end: t[l - 1].end
                    }), r
                }
                if (u.test(e.value)) return [];
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
                if (/^(?:[_^]|\\(?:sqrt|vec|hat|bar|overline|underline))$/.test(e.value) || e.value.startsWith("\\") && !s.has(e.value.slice(1).replace(/^var/, "").toLowerCase()) && t[l]?.value === "{") {
                    if (t[l]?.value === "[") throw Error("Indexed argument");
                    return [e, ...o()]
                }
                let i = e.value.replace(/^\\/, "");
                return i = (i = (i = s.get(i.replace(/^var/, "").toLowerCase()) ?? e.value).replace(/[\u{1D400}-\u{1D7FF}]/gu, e => e.normalize("NFKC")).toLowerCase()).replace(/[ϵϑϕϖϱς−·]/g, e => "εθφπρσ-⋅" ["ϵϑϕϖϱς−·".indexOf(e)]), [{
                    ...e,
                    value: i
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
                revealUnrenderedMatches: i = !1,
                searchPersisted: c,
                searchMath: u = !1,
                scrollAdapter: d
            } = e;
            return {
                domain: "conversation",
                contextId: t,
                async search(e, t) {
                    var r, i;
                    let d, g, f = await async function(e, t, n, r) {
                        let l = e.query.trim(),
                            i = n && l.length > 1 && l.startsWith("/") && l.endsWith("/") ? l.slice(1, -1) : void 0,
                            c = t.flatMap(e => e.units.flatMap(t => (t.textChunks ?? [t.text]).flatMap((r, l) => {
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
                            u = {
                                domain: e.domain,
                                contextId: e.contextId,
                                query: l,
                                regex: i,
                                searchMath: n || void 0,
                                matches: [],
                                totalMatches: 0,
                                isCapped: !1
                            };
                        if (!l) return u;
                        let d = null == i ? null : await (0, m.a)({
                            query: i,
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
                            let r = (0, o.c)(n.turnKey, n.unitId),
                                i = g.get(r) ?? 0,
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
                                    let o = h(e),
                                        i = h(s.get(r) ?? r);
                                    if (null == o || null == i) {
                                        let t = e.toLowerCase(),
                                            o = r.toLowerCase(),
                                            i = [...e.matchAll(/\\[a-zA-Z]+/g)];
                                        for (let n = t.indexOf(o); n >= 0; n = t.indexOf(o, n + o.length)) i.some(e => n > e.index && n < e.index + e[0].length) || l.push((0, a.a)(e, {
                                            start: n,
                                            end: n + r.length
                                        }));
                                        return {
                                            offsets: l.slice(0, n),
                                            totalMatches: l.length
                                        }
                                    }
                                    let c = 0;
                                    for (let e = 0; i.tokens.length > 0 && e <= o.tokens.length - i.tokens.length; e += 1) {
                                        if (!i.tokens.every((t, n) => t.value === o.tokens[e + n].value)) continue;
                                        let t = o.tokens.slice(e, e + i.tokens.length),
                                            r = t[0].start,
                                            a = t[t.length - 1].end;
                                        for (let e of t) r = Math.min(r, e.delimiter?.start ?? r), a = Math.max(a, e.delimiter?.end ?? a);
                                        for (let e of o.groups) r < e.start && a > e.start && a < e.end && (a = e.end), r > e.start && r < e.end && a > e.end && (r = e.start);
                                        c += 1, l.length < n && l.push({
                                            start: r,
                                            end: a
                                        }), e += i.tokens.length - 1
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
                                    matchIndex: null == n.equationIndex ? i + t : t,
                                    equationIndex: n.equationIndex,
                                    equationRange: null == n.equationIndex ? void 0 : r
                                };
                                u.matches.push({
                                    id: (0, o.b)(l),
                                    ordinal: u.matches.length + 1,
                                    location: l
                                })
                            }
                            null == n.equationIndex && g.set(r, i + c.length)
                        }
                        return u.isCapped = u.totalMatches > u.matches.length, u
                    }(e, n(), u, t?.signal);
                    if (u || null == c) return f;
                    let x = await c(e, t);
                    return null == x ? f : (r = f, i = x, d = new Map(r.matches.map(e => [e.id, e])), g = l()([...i.matches.map(e => d.get(e.id) ?? e), ...r.matches], "id").map((e, t) => ({
                        ...e,
                        ordinal: t + 1
                    })), {
                        ...r,
                        matches: g,
                        totalMatches: Math.max(g.length, r.totalMatches, i.totalMatches),
                        isCapped: r.isCapped || i.isCapped
                    })
                },
                async ensureVisible(e, n) {
                    if ("conversation" !== e.domain || e.contextId !== t || null != e.turnCursor && null != r && (!await r(e, n) || n?.signal?.aborted)) return;
                    let l = null != e.turnCursor,
                        a = d.getTurnContainer(e.turnKey),
                        s = (0, o.b)(e),
                        c = i && null != a && null == (0, o.g)({
                            container: a,
                            matchId: s,
                            includeShadowRoots: !1
                        });
                    if (null == a || l || c) {
                        if (n?.signal?.aborted || (n?.signal == null ? await d.scrollToTurn(e.turnKey) : await d.scrollToTurn(e.turnKey, {
                                signal: n.signal
                            }), n?.signal?.aborted)) return;
                        a = d.getTurnContainer(e.turnKey)
                    }
                    null != a && await (0, g.b)({
                        container: a,
                        matchId: s,
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
            l = n("iTtm"),
            o = n("zd8w"),
            a = n("SKhr"),
            i = n("gSdW");

        function s(e) {
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
            let t, u, p, f, x, y, v, P, w, b, S, C = (0, r.c)(20),
                {
                    containerRef: k,
                    contextId: I,
                    onContentChange: E
                } = e,
                B = (0, l.z)(c.d),
                T = (0, l.z)(c.g),
                M = B?.contextId === I ? B : null,
                K = null == M ? null : T?.id ?? null,
                {
                    schedule: D,
                    cancel: H
                } = (P = (0, r.c)(5), w = (0, o.useRef)(null), 80 !== P[0] ? (x = e => {
                    null == w.current && (w.current = window.setTimeout(() => {
                        w.current = null, e()
                    }, 80))
                }, P[0] = 80, P[1] = x) : x = P[1], b = x, P[2] === Symbol.for("react.memo_cache_sentinel") ? (y = () => {
                    null != w.current && (window.clearTimeout(w.current), w.current = null)
                }, P[2] = y) : y = P[2], S = y, P[3] !== b ? (v = {
                    schedule: b,
                    cancel: S
                }, P[3] = b, P[4] = v) : v = P[4], v);
            C[0] !== E ? (t = () => E?.(), C[0] = E, C[1] = t) : t = C[1];
            let R = (0, o.useEffectEvent)(t);
            C[2] !== M || C[3] !== K || C[4] !== k ? (u = async (e, t) => {
                let r = k.current;
                if (null == r || ((0, a.a)(r, {
                        includeShadowRoots: !1
                    }), t.takeRecords(), null == M)) return;
                let l = (0, i.a)(M.matches),
                    o = Array.from(r.querySelectorAll("[data-content-search-unit-key]")).flatMap(e => {
                        let t = l.get(e.dataset.contentSearchUnitKey ?? "");
                        return null == t ? [] : [{
                            element: e,
                            matches: t
                        }]
                    }),
                    c = (e, t) => {
                        t.forEach(t => {
                            (0, a.l)({
                                element: t,
                                matchId: e
                            }), (0, a.k)(t, e === K)
                        })
                    },
                    u = o.map(g),
                    p = e => {
                        e.forEach((e, t) => e.forEach((e, n) => c(u[t].matches[n].id, e)))
                    };
                if (!M.searchMath) {
                    p(u.map(e => {
                        let {
                            element: t,
                            matches: n
                        } = e;
                        return (0, a.i)({
                            target: t,
                            query: M.query,
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
                        } = await Promise.all([n.e(990054), n.e(559373)]).then(n.bind(n, "RlG8")), i = s(r), c = new Map(i.map(e => {
                            let {
                                node: t
                            } = e;
                            return [t, t.data]
                        })), u = new Set(i.map(e => {
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
                                    d.innerHTML = o.renderToString(r, {
                                        displayMode: null != e.querySelector(".katex-display"),
                                        strict: "ignore",
                                        output: "html"
                                    })
                                } catch {
                                    return !1
                                }
                                let a = s(d),
                                    c = a.length === i.length && a.every((e, t) => {
                                        let {
                                            text: n
                                        } = e;
                                        return n === i[t].text
                                    });
                                return a.forEach((e, t) => {
                                    let n = m.get(e.color);
                                    if (null == n) return;
                                    let r = i[t];
                                    if (!c) {
                                        let t = i.filter(t => {
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
                            if (e.dataset.mathSource !== l || !e.contains(r) || [...c].some(e => {
                                    let [t, n] = e;
                                    return !r.contains(t) || t.data !== n
                                })) return o;
                            let s = [];
                            for (let e of i) {
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
                                }, s.push(n))
                            }
                            for (let {
                                    index: e,
                                    glyphs: t
                                }
                                of s.reverse()) o[e].unshift(... function e(t) {
                                let n = t[0],
                                    r = t[t.length - 1],
                                    l = document.createRange();
                                l.setStart(n.node, n.offset), l.setEnd(r.node, r.offset + r.text.length);
                                let o = l.commonAncestorContainer;
                                for (; l.startContainer !== o && 0 === l.startOffset;) l.setStartBefore(l.startContainer);
                                for (; l.endContainer !== o && l.endOffset === (l.endContainer instanceof Text ? l.endContainer.length : l.endContainer.childNodes.length);) l.setEndAfter(l.endContainer);
                                if (l.startContainer !== l.endContainer) return [...t].reverse().flatMap(t => e([t])).reverse();
                                let i = (0, a.e)();
                                return l.surroundContents(i), [i]
                            }(t));
                            return o
                        }
                    })(e, l.map(m)).then(e => () => e().forEach((e, t) => c(l[t].id, e))))
                });
                let [x, y] = await Promise.all([(0, a.j)(u.map(h), M.query, M.regex, e), Promise.all(f)]);
                e.aborted || (p(x()), y.forEach(d), t.takeRecords())
            }, C[2] = M, C[3] = K, C[4] = k, C[5] = u) : u = C[5];
            let F = (0, o.useEffectEvent)(u);
            C[6] !== M?.runId || C[7] !== F || C[8] !== H || C[9] !== k || C[10] !== R || C[11] !== D ? (p = () => {
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
                return M?.runId == null ? void n() : (r.observe(e, {
                    childList: !0,
                    subtree: !0,
                    characterData: !0,
                    attributeFilter: ["hidden"]
                }), n(), () => {
                    r.disconnect(), t?.abort(), H(), (0, a.a)(e, {
                        includeShadowRoots: !1
                    })
                })
            }, C[6] = M?.runId, C[7] = F, C[8] = H, C[9] = k, C[10] = R, C[11] = D, C[12] = p) : p = C[12];
            let j = M?.runId;
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
                let t, n, i, s, c, u, d, h, m, g = (0, l.c)(15),
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
                }, n = [], g[0] = t, g[1] = n) : (t = g[0], n = g[1]), (0, o.useEffect)(t, n), g[2] === Symbol.for("react.memo_cache_sentinel") ? (i = () => x.current?.abort(), g[2] = i) : i = g[2], g[3] !== p ? (s = e => {
                    x.current?.abort();
                    let t = e.currentTarget;
                    t.tabIndex = -1;
                    let n = new AbortController;
                    x.current = n, v(!1), p(n.signal).then(e => {
                        !n.signal.aborted && t.isConnected && t.ownerDocument.activeElement === t && (e?.isConnected ? e.focus({
                            preventScroll: !0
                        }) : v(!0))
                    })
                }, g[3] = p, g[4] = s) : s = g[4], g[5] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, r.jsx)(a.a, {
                    id: "codex.conversation.latestResponse",
                    defaultMessage: "Latest response",
                    description: "Invisible heading before the composer; focusing it moves to the newest assistant response"
                }), g[5] = c) : c = g[5], g[6] !== s ? (u = (0, r.jsx)("h4", {
                    ref: f,
                    className: "sr-only m-0 select-none",
                    tabIndex: 0,
                    onBlur: i,
                    onFocus: s,
                    children: c
                }), g[6] = s, g[7] = u) : u = g[7], g[8] !== y ? (d = y ? (0, r.jsx)(a.a, {
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
    if6d: (function(e, t, n) {
        n.d(t, {
            a: () => b
        });
        var r = n("ABep"),
            l = n("QosV"),
            o = n("on57"),
            a = n("zd8w"),
            i = n("v7qY"),
            s = n("wD9O"),
            c = n("zm5q"),
            u = n("f4Vb"),
            d = n("lsfk"),
            h = n("bIvi"),
            m = n("hTLy"),
            g = n.n(m),
            p = n("R9dK"),
            f = n.n(p);

        function x(e) {
            let {
                collapseEmptyRows: t = !1,
                entries: n,
                gapPx: r,
                measuredHeightsByKey: l,
                pixelScale: o
            } = e, a = new Set, i = [], s = [], c = [], u = new Map, d = [], h = 0;
            for (let [e, m] of n.entries()) {
                let n = m.turnKey,
                    g = Math.max(m.minHeightPx ?? 0, l[n] ?? m.estimatedHeightPx ?? 280);
                null != o && (g = Math.round(g * o) / o);
                let p = (t ? h > 0 && g > 0 : e > 0) ? m.gapBeforePx ?? r : 0;
                null != o && (p = Math.round(p * o) / o), h += p, i.push(p), "gap" === m.type && a.add(n), u.set(n, e), d.push(n), c.push(h), s.push(g), h += g
            }
            return {
                bottomOffsetsPx: c.map((e, t) => h - e - (s[t] ?? 0)),
                collapseEmptyRows: t,
                gapKeys: a,
                gapsBeforePx: i,
                heightsPx: s,
                topOffsetsPx: c,
                totalHeightPx: h,
                turnIndexByKey: u,
                turnKeys: d
            }
        }

        function y(e) {
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
                i = n.collapseEmptyRows && a === n.totalHeightPx ? 0 : function(e, t) {
                    let n = 0,
                        r = e.length;
                    for (; n < r;) {
                        let l = Math.floor((n + r) / 2);
                        (e[l] ?? 0) < t ? r = l : n = l + 1
                    }
                    return n
                }(n.bottomOffsetsPx, a),
                s = n.collapseEmptyRows && 0 === o ? n.turnKeys.length : function(e, t, n) {
                    let r = 0,
                        l = e.length;
                    for (; r < l;) {
                        let o = Math.floor((r + l) / 2);
                        (e[o] ?? 0) + (t[o] ?? 0) <= n ? l = o : r = o + 1
                    }
                    return r
                }(n.bottomOffsetsPx, n.heightsPx, o);
            return {
                startIndex: Math.max(0, i - r),
                endIndex: Math.min(n.turnKeys.length, Math.max(s, i + 1) + r)
            }
        }

        function v(e) {
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
        let w = {};

        function b(e) {
            let t, n, m, p, b, D, H, R, F, j, A, L, _, z, O, q, N, W, U, G, V, Q, $, Y, Z, X, J, ee, et, en, er, el, eo, ea, ei, es, ec, eu, ed, eh, em, eg, ep, ef, ex, ey, ev, eP, ew, eb, eS, eC, ek, eI, eE, eB, eT, eM, eK, eD, eH, eR, eF, ej, eA, eL, e_, ez, eO, eq = (0, l.c)(259),
                {
                    collapseEmptyRows: eN,
                    entries: eW,
                    RowComponent: eU,
                    onApiChange: eG,
                    onVisibleContentReady: eV,
                    className: eQ,
                    gapPx: e$,
                    getBottomScrollPaddingPx: eY,
                    onLatestTurnHeightChange: eZ,
                    preserveMeasuredTurnViewport: eX,
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
                ta = void 0 !== eX && eX,
                ti = void 0 !== eJ && eJ,
                ts = void 0 !== tr && tr,
                [tc, tu] = (0, a.useState)(null);
            eq[0] !== tc || eq[1] !== ti || eq[2] !== eW ? (t = eW.map(e => ({
                turnKey: e.turnKey,
                gapBeforePx: e.gapBeforePx,
                estimatedHeightPx: e.estimatedHeightPx,
                minHeightPx: ti && tc?.turnKey === e.turnKey && e.turnKey === eW.at(-1)?.turnKey ? Math.max(e.minHeightPx ?? 0, tc.viewportHeightPx - tc.heightOutsideTurnPx) : e.minHeightPx,
                type: e.type
            })), eq[0] = tc, eq[1] = ti, eq[2] = eW, eq[3] = t) : t = eq[3];
            let td = t,
                th = (0, d.b)(),
                tm = (0, s.c)(),
                tg = tm * (globalThis.devicePixelRatio ?? 1),
                tp = e2?.turnHeightsByKey ?? w,
                [tf, tx] = (0, a.useState)(tp),
                [ty, tv] = (0, a.useState)(null);
            eq[4] !== tl || eq[5] !== td || eq[6] !== to || eq[7] !== tg || eq[8] !== tf ? (n = x({
                collapseEmptyRows: tl,
                entries: td,
                gapPx: to,
                measuredHeightsByKey: tf,
                pixelScale: tg
            }), eq[4] = tl, eq[5] = td, eq[6] = to, eq[7] = tg, eq[8] = tf, eq[9] = n) : n = eq[9];
            let tP = n;
            eq[10] !== eY || eq[11] !== e2 || eq[12] !== tP || eq[13] !== th ? (m = () => {
                var e, t, n;
                let r, l, o = T(eY);
                return e = tP, t = M(th.getLastScrollDistanceFromBottomPx(), o), n = e2, l = y({
                    distanceFromBottomPx: r = Math.min(t, e.totalHeightPx),
                    layout: e,
                    overscanCount: 2,
                    viewportHeightPx: 800
                }), {
                    distanceFromBottomPx: r,
                    renderedRange: (n?.renderedWindow == null ? null : v({
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
            }, eq[10] = eY, eq[11] = e2, eq[12] = tP, eq[13] = th, eq[14] = m) : m = eq[14];
            let [tw, tb] = (0, a.useState)(m), [tS] = (0, a.useState)(C), tC = (0, a.useSyncExternalStore)(tS.subscribe, tS.getSnapshot, tS.getSnapshot), tk = (0, a.useRef)(null), tI = (0, a.useRef)(tf), tE = (0, a.useRef)(tw), tB = (0, a.useRef)(null);
            eq[15] === Symbol.for("react.memo_cache_sentinel") ? (p = new Map, eq[15] = p) : p = eq[15];
            let tT = (0, a.useRef)(p);
            eq[16] === Symbol.for("react.memo_cache_sentinel") ? (b = new Map, eq[16] = b) : b = eq[16];
            let tM = (0, a.useRef)(b);
            eq[17] === Symbol.for("react.memo_cache_sentinel") ? (D = new WeakSet, eq[17] = D) : D = eq[17];
            let tK = (0, a.useRef)(D);
            eq[18] === Symbol.for("react.memo_cache_sentinel") ? (H = new Map, eq[18] = H) : H = eq[18];
            let tD = (0, a.useRef)(H);
            eq[19] === Symbol.for("react.memo_cache_sentinel") ? (R = new Map, eq[19] = R) : R = eq[19];
            let tH = (0, a.useRef)(R),
                tR = (0, a.useRef)(null),
                tF = (0, a.useRef)(null),
                tj = (0, a.useRef)(0),
                tA = (0, a.useRef)(null),
                [tL, t_] = (0, a.useState)(null),
                tz = (0, a.useRef)(!1),
                tO = (0, a.useRef)(null),
                tq = (0, a.useRef)(tP),
                tN = (0, a.useRef)(tP),
                tW = (0, a.useRef)(tP),
                tU = (0, a.useRef)(null);
            eq[20] !== tf ? (F = () => {
                tf !== tI.current && tx(tI.current)
            }, eq[20] = tf, eq[21] = F) : F = eq[21], eq[22] !== tl || eq[23] !== td || eq[24] !== to || eq[25] !== tg || eq[26] !== tf ? (j = [tl, td, to, tg, tf], eq[22] = tl, eq[23] = td, eq[24] = to, eq[25] = tg, eq[26] = tf, eq[27] = j) : j = eq[27], (0, a.useLayoutEffect)(F, j), eq[28] === Symbol.for("react.memo_cache_sentinel") ? (A = e => {
                tk.current = e, tv(e)
            }, eq[28] = A) : A = eq[28];
            let tG = (0, h.a)(A);
            eq[29] !== tl || eq[30] !== td || eq[31] !== to || eq[32] !== tP || eq[33] !== tg || eq[34] !== tf ? (L = () => {
                if (tN.current !== tP) {
                    tN.current = tP, tq.current = tf === tI.current ? tP : x({
                        collapseEmptyRows: tl,
                        entries: td,
                        gapPx: to,
                        measuredHeightsByKey: tI.current,
                        pixelScale: tg
                    });
                    let e = tk.current;
                    null != e && (e.style.height = `${tq.current.totalHeightPx}px`)
                }
                return tq.current
            }, eq[29] = tl, eq[30] = td, eq[31] = to, eq[32] = tP, eq[33] = tg, eq[34] = tf, eq[35] = L) : L = eq[35];
            let tV = (0, h.a)(L);
            eq[36] !== eY || eq[37] !== th || eq[38] !== tm ? (_ = e => {
                let t = th.getScrollElement(),
                    n = tk.current,
                    r = t?.firstElementChild;
                return null == n || null == r ? e - T(eY) : e - (0, s.b)(r.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, tm)
            }, eq[36] = eY, eq[37] = th, eq[38] = tm, eq[39] = _) : _ = eq[39];
            let tQ = (0, h.a)(_),
                t$ = tw.renderedRange;
            if (null != tC) {
                let e = P({
                    layout: tP,
                    turnKey: tC.turnKey,
                    viewportHeightPx: tw.viewportHeightPx
                });
                null != e && (t$ = y({
                    distanceFromBottomPx: e,
                    layout: tP,
                    overscanCount: 2,
                    viewportHeightPx: tw.viewportHeightPx
                }))
            } else if (!B(tw.turnKeys, tP.turnKeys)) {
                let e = tw.turnKeys[tw.renderedRange.startIndex];
                null != e && (t$ = v({
                    anchorKey: e,
                    layout: tP,
                    previousRange: t$
                }) ?? y({
                    distanceFromBottomPx: tw.distanceFromBottomPx,
                    layout: tP,
                    overscanCount: 2,
                    viewportHeightPx: tw.viewportHeightPx
                }))
            }
            eq[40] !== e1 ? (z = () => {
                null == tR.current && e1?.()
            }, eq[40] = e1, eq[41] = z) : z = eq[41];
            let tY = (0, h.a)(z);
            eq[42] === Symbol.for("react.memo_cache_sentinel") ? (O = () => {
                null != tO.current && (window.cancelAnimationFrame(tO.current), tO.current = null)
            }, eq[42] = O) : O = eq[42];
            let tZ = (0, h.a)(O);
            eq[43] !== td || eq[44] !== eV || eq[45] !== tY ? (q = () => {
                null == eV || tz.current || null != tO.current || null == tk.current || td.length > 0 && 0 === tM.current.size || (tO.current = window.requestAnimationFrame(() => {
                    tO.current = window.requestAnimationFrame(() => {
                        tO.current = null, tz.current || null == tk.current || td.length > 0 && 0 === tM.current.size || (tz.current = !0, tY(), eV())
                    })
                }))
            }, eq[43] = td, eq[44] = eV, eq[45] = tY, eq[46] = q) : q = eq[46];
            let tX = (0, h.a)(q),
                tJ = eW.slice(t$.startIndex, t$.endIndex).map((e, t) => ({
                    entry: e,
                    turnIndex: t$.startIndex + t
                }));
            for (let e of new Set(tn)) {
                let t = tP.turnIndexByKey.get(e);
                if (null == t || t >= t$.startIndex && t < t$.endIndex) continue;
                let n = eW[t];
                null != n && tJ.push({
                    entry: n,
                    turnIndex: t
                })
            }
            tJ.sort(S), eq[47] !== tP || eq[48] !== e8 || eq[49] !== tw || eq[50] !== tn || eq[51] !== eW ? (N = null == e8 ? null : function(e, t, n, r) {
                let {
                    startIndex: l,
                    endIndex: o
                } = y({
                    distanceFromBottomPx: 0,
                    layout: n,
                    overscanCount: 0,
                    viewportHeightPx: r
                }), a = 1 / 0, i = null, s = t => {
                    let n = e[t];
                    if ("gap" === n.type) return !1;
                    let r = null;
                    return "sourceTurnId" in n && "string" == typeof n.sourceTurnId ? r = n.sourceTurnId : "turnId" in n && "string" == typeof n.turnId && (r = n.turnId), null != r && (t < a && (a = t, i = {
                        oldestProtectedTurnId: r,
                        firstProtectedItemId: "turnStatus" in n && "inProgress" === n.turnStatus && "turnItemIds" in n && Array.isArray(n.turnItemIds) ? n.turnItemIds.at(-500) ?? null : null
                    }), !0)
                };
                for (let e = l; e < o; e++)
                    if (!s(e)) return null;
                for (let e of t ?? []) {
                    let t = n.turnIndexByKey.get(e);
                    if (null != t && !s(t)) return null
                }
                return i
            }(eW, tn, tP, tw.viewportHeightPx + 24), eq[47] = tP, eq[48] = e8, eq[49] = tw, eq[50] = tn, eq[51] = eW, eq[52] = N) : N = eq[52];
            let t0 = N;
            eq[53] !== t0 || eq[54] !== e8 || eq[55] !== tS ? (W = e => {
                e8?.(e > 24 || null != tS.getSnapshot() ? null : t0)
            }, eq[53] = t0, eq[54] = e8, eq[55] = tS, eq[56] = W) : W = eq[56];
            let t1 = (0, h.a)(W);
            eq[57] !== t1 || eq[58] !== th ? (U = () => {
                t1(th.getLastScrollDistanceFromBottomPx())
            }, eq[57] = t1, eq[58] = th, eq[59] = U) : U = eq[59];
            let t2 = t0?.oldestProtectedTurnId,
                t3 = t0?.firstProtectedItemId;
            eq[60] !== e8 || eq[61] !== tC || eq[62] !== t1 || eq[63] !== th || eq[64] !== t2 || eq[65] !== t3 ? (G = [t2, t3, e8, tC, t1, th], eq[60] = e8, eq[61] = tC, eq[62] = t1, eq[63] = th, eq[64] = t2, eq[65] = t3, eq[66] = G) : G = eq[66], (0, a.useLayoutEffect)(U, G), eq[67] !== e9 || eq[68] !== te || eq[69] !== th ? (V = () => {
                if (null == e9 || null == te || null != tR.current || tD.current.size > 0) return;
                let e = th.getScrollElement(),
                    t = tM.current.get(e9);
                null != e && !(e.clientHeight <= 0) && null != t && tK.current.has(t) && !((tI.current[e9] ?? 0) <= 0) && te(e9, t)
            }, eq[67] = e9, eq[68] = te, eq[69] = th, eq[70] = V) : V = eq[70];
            let t4 = (0, h.a)(V);
            eq[71] !== eY || eq[72] !== eZ || eq[73] !== tY || eq[74] !== th ? (Q = e => {
                let t = T(eY);
                null != e.latestTurnHeightChange && eZ?.(e.latestTurnHeightChange), e.restoreScrollDistanceFromBottom ? tY() : null != e.scrollDistanceFromBottomPx && th.compensateScrollToDistanceFromBottomPx(e.scrollDistanceFromBottomPx + T(eY) - t), e.afterMeasure?.()
            }, eq[71] = eY, eq[72] = eZ, eq[73] = tY, eq[74] = th, eq[75] = Q) : Q = eq[75];
            let t5 = (0, h.a)(Q);
            eq[76] !== tV ? ($ = (e, t) => {
                if (null != tR.current || t <= 0) return;
                let n = tE.current,
                    r = I({
                        current: n,
                        distanceFromBottomPx: e,
                        layout: tV(),
                        viewportHeightPx: t
                    });
                r === n || (tE.current = r, r.renderedRange.startIndex === n.renderedRange.startIndex && r.renderedRange.endIndex === n.renderedRange.endIndex && B(r.turnKeys, n.turnKeys) || tb(r))
            }, eq[76] = tV, eq[77] = $) : $ = eq[77];
            let t6 = (0, h.a)($);
            eq[78] !== e8 ? (Y = () => () => e8?.(void 0), Z = [e8], eq[78] = e8, eq[79] = Y, eq[80] = Z) : (Y = eq[79], Z = eq[80]), (0, a.useLayoutEffect)(Y, Z), eq[81] !== tV || eq[82] !== e6 ? (X = (e, t, n) => {
                if (null == e6) return;
                let r = tV(),
                    l = Math.max(0, Math.min(r.totalHeightPx, r.totalHeightPx - e)),
                    o = Math.max(0, l - t);
                e6({
                    viewportEndPx: l,
                    viewportStartPx: o
                }, n)
            }, eq[81] = tV, eq[82] = e6, eq[83] = X) : X = eq[83];
            let t8 = (0, h.a)(X);
            eq[84] !== tS ? (J = e => {
                tS.getSnapshot() === e && tS.replace(null)
            }, eq[84] = tS, eq[85] = J) : J = eq[85];
            let t7 = (0, h.a)(J);
            eq[86] !== e8 || eq[87] !== tS ? (ee = (e, t, n) => n?.signal?.aborted ? Promise.resolve() : (e8?.(null), new Promise(r => {
                let l = () => {
                        tS.getSnapshot() === o && tS.replace(null)
                    },
                    o = {
                        align: n?.align ?? "center",
                        complete: () => {
                            n?.signal?.removeEventListener("abort", l), r()
                        },
                        getTargetElement: t,
                        turnKey: e
                    };
                tb(tE.current), tS.replace(o), n?.signal?.addEventListener("abort", l, {
                    once: !0
                })
            })), eq[86] = e8, eq[87] = tS, eq[88] = ee) : ee = eq[88];
            let t9 = (0, h.a)(ee);
            eq[89] !== tV || eq[90] !== eW ? (et = e => {
                let {
                    viewportStartPx: t,
                    viewportEndPx: n
                } = e;
                return function(e, t, n, r) {
                    let {
                        topOffsetsPx: l,
                        heightsPx: o
                    } = t, a = Math.max(0, f()(l, n) - 1);
                    return (l[a] ?? 0) + (o[a] ?? 0) <= n && a++, e.slice(a, g()(l, r))
                }(eW, tV(), t, n)
            }, eq[89] = tV, eq[90] = eW, eq[91] = et) : et = eq[91];
            let ne = (0, h.a)(et);
            eq[92] !== tV ? (en = e => {
                let t = tV(),
                    n = t.turnIndexByKey.get(e);
                if (null == n) return null;
                let r = t.topOffsetsPx[n],
                    l = t.heightsPx[n];
                return null == r || null == l ? null : {
                    endPx: r + l,
                    startPx: r
                }
            }, eq[92] = tV, eq[93] = en) : en = eq[93];
            let nt = (0, h.a)(en);
            eq[94] !== eZ || eq[95] !== th || eq[96] !== tm ? (er = () => {
                let e = 0,
                    t = null;
                for (let [n, r] of tH.current) e += r, (null == t || t.compareDocumentPosition(n) === Node.DOCUMENT_POSITION_FOLLOWING) && (t = n);
                null != t && eZ?.({
                    heightDeltaPx: null,
                    heightPx: null,
                    bottomViewportOverflowPx: K({
                        scrollElement: th.getScrollElement(),
                        turnElement: t,
                        windowZoom: tm
                    }),
                    turnElement: t,
                    followContentHeightPx: e
                })
            }, eq[94] = eZ, eq[95] = th, eq[96] = tm, eq[97] = er) : er = eq[97];
            let nn = (0, h.a)(er);
            eq[98] !== tl || eq[99] !== t5 || eq[100] !== td || eq[101] !== to || eq[102] !== eY || eq[103] !== tV || eq[104] !== tQ || eq[105] !== e0 || eq[106] !== tg || eq[107] !== ta || eq[108] !== th || eq[109] !== tS || eq[110] !== tm ? (el = (e, t, n) => {
                var r;
                let l = tV(),
                    o = th.getScrollElement();
                if (o?.getClientRects().length === 0) return !1;
                let a = tR.current,
                    c = tI.current,
                    u = c,
                    d = 0,
                    h = !1,
                    m = null,
                    g = 0,
                    p = !1,
                    f = !1,
                    y = "controller" === (void 0 === n ? "measured" : n) ? th.getLastScrollDistanceFromBottomPx({
                        includePendingUserScroll: !0
                    }) : function(e, t) {
                        let n = e.getScrollElement(),
                            r = n?.firstElementChild;
                        if (null == n || null == r || 0 === n.clientHeight) return e.getLastScrollDistanceFromBottomPx();
                        let l = r.getBoundingClientRect();
                        if (0 === l.height) return e.getLastScrollDistanceFromBottomPx();
                        let o = n.scrollTop;
                        return Math.max(0, Math.round(o + (0, s.b)(l.bottom - n.getBoundingClientRect().top, t)) - n.clientHeight) - o
                    }(th, tm),
                    v = T(eY),
                    P = M(y, v),
                    w = ta ? null : e0?.() ?? null,
                    b = null == a ? P : tE.current.distanceFromBottomPx,
                    S = b;
                if (ta && null == tS.getSnapshot() && e0?.() == null) {
                    let e = B(tW.current.turnKeys, l.turnKeys) ? l : tW.current,
                        t = e === l ? a?.scrollDistanceFromBottomPx ?? y : y,
                        n = E({
                            distanceFromBottomPx: tQ(t),
                            preferLatestVisibleRow: t < v,
                            layout: e,
                            measuredHeightsByKey: c,
                            nextLayout: l,
                            viewportHeightPx: tE.current.viewportHeightPx
                        }),
                        r = o?.ownerDocument.activeElement,
                        i = r?.closest("[data-turn-key]"),
                        s = i?.dataset.turnKey;
                    if (o && r && i && s && tM.current.get(s) === i) {
                        let e = r.getBoundingClientRect(),
                            t = o.getBoundingClientRect();
                        e.bottom > t.top && e.top < t.bottom && (n = s)
                    }
                    let u = null == n ? null : l.turnIndexByKey.get(n);
                    null != u && (S = l.bottomOffsetsPx[u] ?? b)
                }
                for (let [t, n] of e) {
                    let {
                        element: e,
                        heightPx: r
                    } = n, o = tM.current.get(t);
                    if (o !== e) continue;
                    r > 0 ? tK.current.add(o) : tK.current.delete(o);
                    let a = Math.max(+!tl, r),
                        i = c[t];
                    if (i === a) continue;
                    u === c && (u = {
                        ...c
                    }), u[t] = a;
                    let s = l.turnIndexByKey.get(t);
                    if (null == s) continue;
                    let x = s === l.turnKeys.length - 1,
                        y = Math.round(Math.max(td[s]?.minHeightPx ?? 0, a) * tg) / tg,
                        v = y - (l.heightsPx[s] ?? y);
                    f = f || null == i || 0 !== v, x && (h = !0, d += null == i ? 0 : v, m = o), p = p || tl && (0 === y || 0 === l.heightsPx[s]), (l.bottomOffsetsPx[s] ?? 0) <= S && (ta || null != e0 && !x) && (g += v)
                }
                if (u === c) return !1;
                if (!f) return tI.current = u, !1;
                let C = x({
                    collapseEmptyRows: tl,
                    entries: td,
                    gapPx: to,
                    measuredHeightsByKey: u,
                    pixelScale: tg
                });
                if (p)
                    for (let [e, t] of C.gapsBeforePx.entries()) {
                        let n = t - (l.gapsBeforePx[e] ?? 0);
                        (l.bottomOffsetsPx[e] ?? 0) + (l.heightsPx[e] ?? 0) <= S && (ta || null != e0 && e !== l.turnKeys.length - 1) && (g += n)
                    }
                let k = ta && th.shouldFollowContentGrowth() && (r = y, 0 === v && r <= 24) && m?.querySelector("[data-preserve-turn-viewport]") == null,
                    D = a?.restoreScrollDistanceFromBottom || null != w,
                    H = null;
                D || (H = k ? 0 : 0 !== g ? (a?.scrollDistanceFromBottomPx ?? th.getUnroundedScrollDistanceFromBottomPx(y)) + g : a?.scrollDistanceFromBottomPx ?? (ta || !h ? y : null));
                let R = tE.current.distanceFromBottomPx;
                D ? R = w ?? R : null != H && (R = M(H, v));
                let F = I({
                        current: tE.current,
                        distanceFromBottomPx: R,
                        layout: C,
                        viewportHeightPx: tE.current.viewportHeightPx
                    }),
                    j = a?.latestTurnHeightChange,
                    A = m ?? j?.turnElement ?? null,
                    L = {
                        afterMeasure: a?.afterMeasure,
                        latestTurnHeightChange: h || null != j ? {
                            heightDeltaPx: (j?.heightDeltaPx ?? 0) + d,
                            heightPx: C.heightsPx.at(-1) ?? null,
                            bottomViewportOverflowPx: K({
                                scrollElement: th.getScrollElement(),
                                turnElement: A,
                                windowZoom: tm
                            }),
                            turnElement: A,
                            followContentHeightPx: null
                        } : null,
                        restoreScrollDistanceFromBottom: D,
                        scrollDistanceFromBottomPx: H,
                        turnHeightsByKey: u
                    },
                    _ = tk.current;
                for (let [t, n] of e) {
                    let {
                        element: e
                    } = n, r = C.turnIndexByKey.get(t);
                    tM.current.get(t) === e && null != r && null != e.parentElement && (e.parentElement.style.height = `${C.heightsPx[r]}px`, e.parentElement.style.minHeight = "")
                }
                if (h && 1 === e.size && null == a && F === tE.current && C.gapsBeforePx.at(-1) === l.gapsBeforePx.at(-1) && null != _) return tI.current = u, tq.current = C, tW.current = C, _.style.height = `${C.totalHeightPx}px`, t5(L), !0;
                null == tU.current && (tU.current = l);
                let z = () => {
                    tI.current = u, tq.current = C, tx(u), F !== tE.current && (tE.current = F, tb(F))
                };
                return tR.current = L, void 0 === t || t ? (0, i.flushSync)(z) : z(), !0
            }, eq[98] = tl, eq[99] = t5, eq[100] = td, eq[101] = to, eq[102] = eY, eq[103] = tV, eq[104] = tQ, eq[105] = e0, eq[106] = tg, eq[107] = ta, eq[108] = th, eq[109] = tS, eq[110] = tm, eq[111] = el) : el = eq[111];
            let nr = (0, h.a)(el);
            eq[112] !== nr || eq[113] !== nn || eq[114] !== t4 || eq[115] !== ts ? (eo = e => {
                let t = new Map,
                    n = !1;
                for (let r of e) {
                    let e = tT.current.get(r.target);
                    if (null == e) continue;
                    let {
                        height: l
                    } = (0, u.a)(r);
                    switch (e.kind) {
                        case "turn":
                            t.set(e.turnKey, {
                                element: r.target,
                                heightPx: l
                            });
                            break;
                        case "latest-turn-follow-content":
                            tH.current.set(e.element, l), n = !0
                    }
                }(!ts || t.size > 0) && nr(t), n && nn(), t4()
            }, eq[112] = nr, eq[113] = nn, eq[114] = t4, eq[115] = ts, eq[116] = eo) : eo = eq[116];
            let nl = (0, h.a)(eo);
            eq[117] !== nl ? (ea = () => {
                if (null != tF.current) return tF.current;
                let e = new ResizeObserver(nl);
                return tF.current = e, e
            }, eq[117] = nl, eq[118] = ea) : ea = eq[118];
            let no = (0, h.a)(ea);
            eq[119] !== no || eq[120] !== tX ? (ei = (e, t) => {
                if (null == t) return;
                tT.current.set(t, {
                    kind: "turn",
                    turnKey: e
                }), tM.current.set(e, t), tK.current.delete(t), tD.current.set(e, t);
                let n = no();
                return n.observe(t), tX(), () => {
                    n.unobserve(t), tT.current.delete(t), tD.current.get(e) === t && tD.current.delete(e), tM.current.get(e) === t && tM.current.delete(e)
                }
            }, eq[119] = no, eq[120] = tX, eq[121] = ei) : ei = eq[121];
            let na = (0, h.a)(ei);
            eq[122] !== nr || eq[123] !== tm ? (es = (e, t) => {
                let n = tM.current.get(e);
                if (null == n) return;
                let r = (0, s.b)(n.getBoundingClientRect().height, tm);
                if (!(r <= 0) && (nr(new Map([
                        [e, {
                            element: n,
                            heightPx: r
                        }]
                    ]), !1), null != t)) {
                    let e = tR.current;
                    null == e ? t() : e.afterMeasure = t
                }
            }, eq[122] = nr, eq[123] = tm, eq[124] = es) : es = eq[124];
            let ni = (0, h.a)(es);
            eq[125] !== no ? (ec = e => {
                if (null == e) return;
                tT.current.set(e, {
                    element: e,
                    kind: "latest-turn-follow-content"
                }), tH.current.set(e, 0);
                let t = no();
                return t.observe(e), () => {
                    t.unobserve(e), tT.current.delete(e), tH.current.delete(e)
                }
            }, eq[125] = no, eq[126] = ec) : ec = eq[126];
            let ns = (0, h.a)(ec);
            eq[127] !== nr || eq[128] !== tm ? (eu = () => {
                let e = tD.current;
                if (0 === e.size) {
                    tj.current = 0;
                    return
                }
                if (null != tA.current) return;
                if (tj.current >= 8) {
                    tA.current = requestAnimationFrame(e => {
                        tA.current = null, tj.current = 0, t_(e)
                    });
                    return
                }
                tj.current = tj.current + 1, tD.current = new Map;
                let t = new Map;
                if ((0, c.a)("virtualizedTurnList.readMountedHeights", () => {
                        for (let [n, r] of e) {
                            if (tM.current.get(n) !== r) continue;
                            let e = (0, s.b)(r.getBoundingClientRect().height, tm);
                            e > 0 && t.set(n, {
                                element: r,
                                heightPx: e
                            })
                        }
                    }, e.size), t.size > 0) {
                    let n = tI.current;
                    if (nr(t, !1, "controller"))
                        for (let [t, r] of e)(null == n[t] || tj.current > 1) && tM.current.get(t) === r && tD.current.set(t, r);
                    else tj.current = 0
                }
            }, eq[127] = nr, eq[128] = tm, eq[129] = eu) : eu = eq[129], (0, a.useLayoutEffect)(eu), eq[130] !== td || eq[131] !== ni || eq[132] !== tt ? (ed = () => {
                let e = tt ?? td.at(-1)?.turnKey;
                null != e && ni(e)
            }, eq[130] = td, eq[131] = ni, eq[132] = tt, eq[133] = ed) : ed = eq[133];
            let nc = (0, h.a)(ed);
            eq[134] !== e7 || eq[135] !== nc ? (eh = () => {
                null != e7 && nc()
            }, em = [e7, nc], eq[134] = e7, eq[135] = nc, eq[136] = eh, eq[137] = em) : (eh = eq[136], em = eq[137]), (0, a.useLayoutEffect)(eh, em), eq[138] !== t5 || eq[139] !== tf ? (eg = () => {
                let e = tR.current;
                null != e && e.turnHeightsByKey === tf && (tR.current = null, t5(e))
            }, ep = [t5, tf], eq[138] = t5, eq[139] = tf, eq[140] = eg, eq[141] = ep) : (eg = eq[140], ep = eq[141]), (0, a.useLayoutEffect)(eg, ep), eq[142] !== td || eq[143] !== tc || eq[144] !== tP.heightsPx || eq[145] !== ti || eq[146] !== tf || eq[147] !== ty || eq[148] !== tm ? (ef = e => {
                if (!ti || tc?.viewportHeightPx === e) return;
                if (null != tc) return void(0, i.flushSync)(() => {
                    tu({
                        ...tc,
                        viewportHeightPx: e
                    })
                });
                let t = ty?.closest("[data-thread-user-message-navigation-content]"),
                    n = t?.lastElementChild,
                    r = td.at(-1)?.turnKey;
                if (null == t || null == n || null == r || td.some(e => null == tf[e.turnKey])) return;
                let l = (0, s.b)(t.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, tm) - parseFloat(getComputedStyle(t).paddingBottom);
                l <= 24 || (0, i.flushSync)(() => {
                    tu({
                        turnKey: r,
                        heightOutsideTurnPx: e - (tP.heightsPx.at(-1) ?? 0) - l,
                        viewportHeightPx: e
                    })
                })
            }, eq[142] = td, eq[143] = tc, eq[144] = tP.heightsPx, eq[145] = ti, eq[146] = tf, eq[147] = ty, eq[148] = tm, eq[149] = ef) : ef = eq[149];
            let nu = (0, h.a)(ef);
            eq[150] !== ne || eq[151] !== nt || eq[152] !== ni || eq[153] !== eG || eq[154] !== t9 ? (ex = () => {
                if (null != eG) return eG({
                    getEntriesInViewport: ne,
                    getEntryGeometry: nt,
                    measureTurnBeforePaint: ni,
                    scrollToKey: t9
                }), () => {
                    eG(null)
                }
            }, ey = [ne, nt, ni, eG, t9], eq[150] = ne, eq[151] = nt, eq[152] = ni, eq[153] = eG, eq[154] = t9, eq[155] = ex, eq[156] = ey) : (ex = eq[155], ey = eq[156]), (0, a.useEffect)(ex, ey), eq[157] !== tZ ? (ev = () => () => {
                tz.current = !1, tZ()
            }, eP = [tZ], eq[157] = tZ, eq[158] = ev, eq[159] = eP) : (ev = eq[158], eP = eq[159]), (0, a.useLayoutEffect)(ev, eP), eq[160] !== tZ || eq[161] !== tX ? (ew = () => (tX(), tZ), eq[160] = tZ, eq[161] = tX, eq[162] = ew) : ew = eq[162], eq[163] !== tZ || eq[164] !== td.length || eq[165] !== eV || eq[166] !== tX || eq[167] !== ty ? (eb = [tZ, td.length, eV, tX, ty], eq[163] = tZ, eq[164] = td.length, eq[165] = eV, eq[166] = tX, eq[167] = ty, eq[168] = eb) : eb = eq[168], (0, a.useEffect)(ew, eb), eq[169] !== tS ? (eS = () => {
                let e = tT.current,
                    t = tM.current,
                    n = tH.current;
                return () => {
                    null != tA.current && (cancelAnimationFrame(tA.current), tA.current = null), tF.current?.disconnect(), tF.current = null, e.clear(), t.clear(), tD.current.clear(), n.clear(), tR.current = null, tS.replace(null)
                }
            }, eC = [tS], eq[169] = tS, eq[170] = eS, eq[171] = eC) : (eS = eq[170], eC = eq[171]), (0, a.useEffect)(eS, eC), eq[172] !== e5 ? (ek = () => {
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
                    }(tI.current, tE.current.turnKeys, tE.current.renderedRange))
                }
            }, eI = [e5], eq[172] = e5, eq[173] = ek, eq[174] = eI) : (ek = eq[173], eI = eq[174]), (0, a.useLayoutEffect)(ek, eI);
            let {
                addScrollListener: nd,
                addUserScrollListener: nh,
                getScrollElement: nm
            } = th;
            eq[175] !== nd || eq[176] !== nh || eq[177] !== eY || eq[178] !== nm || eq[179] !== nu || eq[180] !== ti || eq[181] !== t1 || eq[182] !== t4 || eq[183] !== t8 || eq[184] !== tY || eq[185] !== ty || eq[186] !== t6 ? (eE = () => {
                let e = nm();
                if (null == e) return;
                let t = () => (null == tB.current && (tB.current = e.clientHeight), tB.current || tE.current.viewportHeightPx || 800),
                    n = nd(e => {
                        t6(M(e, T(eY)), t()), t1(e)
                    }),
                    r = nh((e, n) => {
                        t8(M(e, T(eY)), t(), null != n && e > n)
                    }),
                    l = new ResizeObserver(n => {
                        let r = n.find(t => t.target === e);
                        if (null != r) {
                            let {
                                height: e
                            } = (0, u.a)(r);
                            tB.current = e, t6(tE.current.distanceFromBottomPx, e), tY()
                        }
                        nu(t()), t4()
                    });
                return l.observe(e), ti && null != ty && l.observe(ty), () => {
                    n(), r(), l.disconnect()
                }
            }, eB = [nd, nh, eY, nm, nu, t4, ti, t8, t1, tY, ty, t6], eq[175] = nd, eq[176] = nh, eq[177] = eY, eq[178] = nm, eq[179] = nu, eq[180] = ti, eq[181] = t1, eq[182] = t4, eq[183] = t8, eq[184] = tY, eq[185] = ty, eq[186] = t6, eq[187] = eE, eq[188] = eB) : (eE = eq[187], eB = eq[188]), (0, a.useLayoutEffect)(eE, eB), eq[189] !== nr || eq[190] !== eY || eq[191] !== tP || eq[192] !== tC || eq[193] !== th || eq[194] !== tS || eq[195] !== t7 || eq[196] !== t6 || eq[197] !== tm ? (eT = () => {
                if (null == tC || tS.getSnapshot() !== tC || null != tA.current) return;
                let e = th.getScrollElement();
                if (null == e) return;
                let t = new Map;
                for (let [e, n] of tM.current) {
                    let r = (0, s.b)(n.getBoundingClientRect().height, tm);
                    r > 0 && t.set(e, {
                        element: n,
                        heightPx: r
                    })
                }
                if (nr(t, !1) || null != tR.current) return;
                let n = tM.current.get(tC.turnKey),
                    r = null == n ? null : tC.getTargetElement?.(n) ?? n,
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
                        let o = n.turnIndexByKey.get(r);
                        return null == o ? null : Math.max(0, (n.bottomOffsetsPx[o] ?? 0) + (n.heightsPx[o] ?? 0) - l + 10)
                    }({
                        align: tC.align,
                        layout: tP,
                        turnKey: tC.turnKey,
                        viewportHeightPx: e.clientHeight
                    }) : function(e) {
                        let {
                            align: t,
                            layout: n,
                            targetElement: r,
                            turnElement: l,
                            turnKey: o,
                            windowZoom: a,
                            viewportHeightPx: i
                        } = e, c = n.turnIndexByKey.get(o);
                        if (null == c) return null;
                        let u = l.getBoundingClientRect(),
                            d = r.getBoundingClientRect(),
                            h = (0, s.b)(d.top - u.top, a),
                            m = (0, s.b)(d.height, a),
                            g = (n.bottomOffsetsPx[c] ?? 0) + (n.heightsPx[c] ?? 0) - h;
                        return "top" === t ? Math.max(0, g - i + 10) : Math.max(0, g - m / 2 - i / 2)
                    }({
                        align: tC.align,
                        layout: tP,
                        targetElement: r,
                        turnElement: n,
                        turnKey: tC.turnKey,
                        viewportHeightPx: e.clientHeight,
                        windowZoom: tm
                    });
                if (null == l) return void queueMicrotask(() => t7(tC));
                let o = "top" === tC.align && null != r ? Math.max(0, th.getLastScrollDistanceFromBottomPx() - (0, s.b)(r.getBoundingClientRect().top - e.getBoundingClientRect().top, tm) + 10) : l + T(eY);
                th.scrollToDistanceFromBottomPx(o, "instant", "user"), t6(Math.max(0, o - T(eY)), e.clientHeight), queueMicrotask(() => t7(tC))
            }, eq[189] = nr, eq[190] = eY, eq[191] = tP, eq[192] = tC, eq[193] = th, eq[194] = tS, eq[195] = t7, eq[196] = t6, eq[197] = tm, eq[198] = eT) : eT = eq[198], eq[199] !== nr || eq[200] !== eY || eq[201] !== tP || eq[202] !== tL || eq[203] !== tC || eq[204] !== th || eq[205] !== tS || eq[206] !== t7 || eq[207] !== t6 || eq[208] !== tm ? (eM = [nr, tP, tL, tC, th, tS, t7, eY, t6, tm], eq[199] = nr, eq[200] = eY, eq[201] = tP, eq[202] = tL, eq[203] = tC, eq[204] = th, eq[205] = tS, eq[206] = t7, eq[207] = t6, eq[208] = tm, eq[209] = eM) : eM = eq[209], (0, a.useLayoutEffect)(eT, eM), eq[210] !== eY || eq[211] !== tV || eq[212] !== tQ || eq[213] !== e0 || eq[214] !== tC || eq[215] !== ta || eq[216] !== th || eq[217] !== t6 ? (eK = () => {
                var e;
                if (null != tR.current) return;
                let t = tW.current,
                    n = tV(),
                    r = tU.current ?? n;
                if (tU.current = null, tW.current = n, null != tC || !ta && t.turnKeys.at(-1) !== r.turnKeys.at(-1) || t === r) return;
                let l = T(eY),
                    o = th.getLastScrollDistanceFromBottomPx({
                        includePendingUserScroll: !0
                    });
                if (null != (e0?.() ?? null)) return;
                if (th.shouldFollowContentGrowth() && (e = o, 0 === l && e <= 24)) return void th.compensateScrollToDistanceFromBottomPx(0);
                let a = E({
                    distanceFromBottomPx: tQ(o),
                    preferLatestVisibleRow: o < l,
                    layout: t,
                    measuredHeightsByKey: tI.current,
                    nextLayout: r,
                    viewportHeightPx: tE.current.viewportHeightPx
                });
                if (null == a) return;
                let i = th.getUnroundedScrollDistanceFromBottomPx(o),
                    s = function(e) {
                        let {
                            anchorKey: t,
                            distanceFromBottomPx: n,
                            nextLayout: r,
                            previousLayout: l
                        } = e, o = l.turnIndexByKey.get(t), a = r.turnIndexByKey.get(t);
                        if (null == o || null == a) return null;
                        let i = (l.bottomOffsetsPx[o] ?? 0) + (l.heightsPx[o] ?? 0);
                        return Math.max(0, n + ((r.bottomOffsetsPx[a] ?? 0) + (r.heightsPx[a] ?? 0)) - i)
                    }({
                        anchorKey: a,
                        distanceFromBottomPx: i,
                        nextLayout: r,
                        previousLayout: t
                    });
                null != s && (s !== i || t.totalHeightPx !== r.totalHeightPx) && (t6(M(s, l), tE.current.viewportHeightPx), th.compensateScrollToDistanceFromBottomPx(s))
            }, eq[210] = eY, eq[211] = tV, eq[212] = tQ, eq[213] = e0, eq[214] = tC, eq[215] = ta, eq[216] = th, eq[217] = t6, eq[218] = eK) : eK = eq[218], eq[219] !== eY || eq[220] !== tV || eq[221] !== tQ || eq[222] !== e0 || eq[223] !== tP || eq[224] !== tC || eq[225] !== ta || eq[226] !== th || eq[227] !== t6 ? (eD = [eY, tV, tQ, e0, tP, tC, ta, th, t6], eq[219] = eY, eq[220] = tV, eq[221] = tQ, eq[222] = e0, eq[223] = tP, eq[224] = tC, eq[225] = ta, eq[226] = th, eq[227] = t6, eq[228] = eD) : eD = eq[228], (0, a.useLayoutEffect)(eK, eD), eq[229] !== tC || eq[230] !== t8 || eq[231] !== tY || eq[232] !== t6 ? (eH = () => {
                null == tC && null == tR.current && (t6(tE.current.distanceFromBottomPx, tE.current.viewportHeightPx), tY(), t8(tE.current.distanceFromBottomPx, tE.current.viewportHeightPx, !1))
            }, eq[229] = tC, eq[230] = t8, eq[231] = tY, eq[232] = t6, eq[233] = eH) : eH = eq[233], eq[234] !== tP || eq[235] !== tC || eq[236] !== t8 || eq[237] !== tY || eq[238] !== t6 ? (eR = [tP, tC, t8, tY, t6], eq[234] = tP, eq[235] = tC, eq[236] = t8, eq[237] = tY, eq[238] = t6, eq[239] = eR) : eR = eq[239], (0, a.useLayoutEffect)(eH, eR), eq[240] !== t4 ? (eF = () => {
                t4()
            }, eq[240] = t4, eq[241] = eF) : eF = eq[241], (0, a.useLayoutEffect)(eF), eq[242] !== td || eq[243] !== e4 ? (ej = e4 ?? td.at(-1)?.turnKey, eq[242] = td, eq[243] = e4, eq[244] = ej) : ej = eq[244];
            let ng = ej;
            eq[245] !== eQ ? (eA = (0, o.b)("relative shrink-0", eQ), eq[245] = eQ, eq[246] = eA) : eA = eq[246], eq[247] !== tP.totalHeightPx ? (eL = {
                height: tP.totalHeightPx
            }, eq[247] = tP.totalHeightPx, eq[248] = eL) : eL = eq[248];
            let np = `${tP.topOffsetsPx[t$.startIndex]??0}px`;
            eq[249] !== np ? (e_ = {
                marginTop: np
            }, eq[249] = np, eq[250] = e_) : e_ = eq[250];
            let nf = tJ.map(e => {
                let {
                    entry: t,
                    turnIndex: n
                } = e;
                return (0, r.jsx)(k, {
                    entry: t,
                    gapBeforePx: n === t$.startIndex ? 0 : tP.gapsBeforePx[n] ?? 0,
                    retainedTopPx: n < t$.startIndex || n >= t$.endIndex ? tP.topOffsetsPx[n] : void 0,
                    latestTurnFollowContentRef: n === td.length - 1 && null != eZ ? ns : void 0,
                    latestTurnFooter: t.turnKey === ng ? e3 : void 0,
                    RowComponent: eU,
                    measuredHeightPx: null == tf[t.turnKey] ? void 0 : tP.heightsPx[n],
                    constrainedHeightPx: n !== td.length - 1 && tC?.turnKey !== t.turnKey && null == tf[t.turnKey] ? tP.heightsPx[n] : void 0,
                    observeTurnElement: na
                }, t.turnKey)
            });
            return eq[251] !== e_ || eq[252] !== nf ? (ez = (0, r.jsx)("div", {
                className: "flex flex-col",
                style: e_,
                children: nf
            }), eq[251] = e_, eq[252] = nf, eq[253] = ez) : ez = eq[253], eq[254] !== tG || eq[255] !== eA || eq[256] !== eL || eq[257] !== ez ? (eO = (0, r.jsx)("div", {
                ref: tG,
                className: eA,
                style: eL,
                children: ez
            }), eq[254] = tG, eq[255] = eA, eq[256] = eL, eq[257] = ez, eq[258] = eO) : eO = eq[258], eO
        }

        function S(e, t) {
            return e.turnIndex - t.turnIndex
        }

        function C() {
            return new D
        }
        let k = (0, a.memo)(function(e) {
            let t, n, a, i, s, c, u = (0, l.c)(24),
                {
                    entry: d,
                    gapBeforePx: m,
                    latestTurnFollowContentRef: g,
                    latestTurnFooter: p,
                    RowComponent: f,
                    constrainedHeightPx: x,
                    measuredHeightPx: y,
                    retainedTopPx: v,
                    observeTurnElement: P
                } = e,
                {
                    turnKey: w
                } = d;
            u[0] !== P || u[1] !== w ? (t = e => P(w, e), u[0] = P, u[1] = w, u[2] = t) : t = u[2];
            let b = (0, h.a)(t),
                S = null != v && "absolute inset-x-0",
                C = null != x && "overflow-hidden";
            u[3] !== S || u[4] !== C ? (n = (0, o.b)(S, C), u[3] = S, u[4] = C, u[5] = n) : n = u[5];
            let k = y ?? x,
                I = null == v ? m : 0,
                E = null == y ? d.minHeightPx : void 0;
            return u[6] !== v || u[7] !== k || u[8] !== I || u[9] !== E ? (a = {
                height: k,
                marginTop: I,
                minHeight: E,
                top: v
            }, u[6] = v, u[7] = k, u[8] = I, u[9] = E, u[10] = a) : a = u[10], u[11] !== f || u[12] !== d || u[13] !== g || u[14] !== p ? (i = (0, r.jsx)(f, {
                entry: d,
                latestTurnFooter: p,
                latestTurnFollowContentRef: g
            }), u[11] = f, u[12] = d, u[13] = g, u[14] = p, u[15] = i) : i = u[15], u[16] !== b || u[17] !== i || u[18] !== w ? (s = (0, r.jsx)("div", {
                ref: b,
                className: "[&_[data-virtualized-turn-content]]:[content-visibility:visible]",
                "data-turn-key": w,
                children: i
            }), u[16] = b, u[17] = i, u[18] = w, u[19] = s) : s = u[19], u[20] !== s || u[21] !== n || u[22] !== a ? (c = (0, r.jsx)("div", {
                className: n,
                style: a,
                children: s
            }), u[20] = s, u[21] = n, u[22] = a, u[23] = c) : c = u[23], c
        });

        function I(e) {
            var t, n;
            let {
                current: r,
                distanceFromBottomPx: l,
                layout: o,
                viewportHeightPx: a
            } = e, i = Math.min(l, o.totalHeightPx), s = y({
                distanceFromBottomPx: i,
                layout: o,
                overscanCount: 2,
                viewportHeightPx: a
            }), c = (t = r.renderedRange, n = s, t.startIndex <= n.startIndex && t.endIndex >= n.endIndex) ? r.renderedRange : s;
            return r.distanceFromBottomPx === i && r.viewportHeightPx === a && r.renderedRange.startIndex === c.startIndex && r.renderedRange.endIndex === c.endIndex && B(r.turnKeys, o.turnKeys) ? r : {
                distanceFromBottomPx: i,
                renderedRange: c,
                turnKeys: o.turnKeys,
                viewportHeightPx: a
            }
        }

        function E(e) {
            let {
                distanceFromBottomPx: t,
                preferLatestVisibleRow: n,
                layout: r,
                measuredHeightsByKey: l,
                nextLayout: o,
                viewportHeightPx: a
            } = e, i = y({
                distanceFromBottomPx: t,
                layout: r,
                overscanCount: 0,
                viewportHeightPx: Math.max(0, a + Math.min(0, t))
            }), s = null;
            for (let e = i.startIndex; e < i.endIndex; e += 1) {
                let i = r.turnKeys[e];
                if (null != i && !r.gapKeys.has(i) && (!r.collapseEmptyRows || (r.heightsPx[e] ?? 0) > 0) && null != l[i] && o.turnIndexByKey.has(i) && (r.bottomOffsetsPx[e] ?? 0) < t + a && (r.bottomOffsetsPx[e] ?? 0) + (r.heightsPx[e] ?? 0) > t) {
                    if (n) s = i;
                    else if (null == s && (s = i), (r.bottomOffsetsPx[e] ?? 0) + (r.heightsPx[e] ?? 0) <= t + a) return i
                }
            }
            return s
        }

        function B(e, t) {
            return e === t || e.length === t.length && e.every((e, n) => e === t[n])
        }

        function T(e) {
            return Math.max(0, e?.() ?? 0)
        }

        function M(e, t) {
            return Math.max(0, e - t)
        }

        function K(e) {
            let {
                scrollElement: t,
                turnElement: n,
                windowZoom: r
            } = e;
            return null == t || null == n ? 0 : (0, s.b)(n.getBoundingClientRect().bottom - t.getBoundingClientRect().bottom, r)
        }
        class D {
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
            l = n("iTtm"),
            o = n("zd8w"),
            a = n("TSib"),
            i = n("ipIJ"),
            s = n("Sd8U"),
            c = n("tSEg"),
            u = n("vzzY"),
            d = n("ALWK");
        n.d(t, {}, {
            a: function(e) {
                let t, n, h, m, g, p = (0, r.c)(14);
                p[0] !== e ? (t = void 0 === e ? {} : e, p[0] = e, p[1] = t) : t = p[1];
                let {
                    transcriptMcpAppIds: f,
                    blockedWidgetSource: x,
                    shouldBlockExternalEgress: y
                } = t, v = void 0 !== y && y, P = (0, l.y)(c.a), w = (0, l.y)(s.a), b = (0, l.z)(d.j), S = (0, l.z)(a.w);
                return p[2] !== S || p[3] !== x || p[4] !== w || p[5] !== b || p[6] !== P || p[7] !== v || p[8] !== f ? (n = () => {
                    for (let [e, t] of("chatgpt-thread" === P.value.routeKind && (0, i.b)(w, S.filter(e => v || null != x && (e.widgetSource ?? "descriptor") === x)), b))(v || null != x && (t.content.mcpAppScope.widgetSource ?? "descriptor") === x || t.hostedInThreadScrollLayout && f?.has(e) === !1) && (0, d.y)(P, e)
                }, h = [S, x, f, w, b, P, v], p[2] = S, p[3] = x, p[4] = w, p[5] = b, p[6] = P, p[7] = v, p[8] = f, p[9] = n, p[10] = h) : (n = p[9], h = p[10]), (0, o.useLayoutEffect)(n, h), p[11] !== P ? (m = () => {
                    (0, u.e)(P)
                }, g = [P], p[11] = P, p[12] = m, p[13] = g) : (m = p[12], g = p[13]), (0, o.useLayoutEffect)(m, g), null
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
            l = n("iTtm"),
            o = n("zd8w"),
            a = n("jqIZ"),
            i = n("Cslg"),
            s = n("TS05"),
            c = n("tSEg");
        n.d(t, {}, {
            a: function(e) {
                let t, n, u, d = (0, r.c)(18),
                    {
                        ready: h,
                        onNavigate: m
                    } = e,
                    g = (0, l.y)(c.a),
                    p = (0, l.z)(i.f),
                    f = (0, a.Y)(),
                    x = f.state,
                    y = x?.sidebarArea === "scheduled";
                d[0] !== p || d[1] !== f.key ? (t = {
                    locationKey: f.key,
                    accountId: p
                }, d[0] = p, d[1] = f.key, d[2] = t) : t = d[2];
                let v = (0, l.x)(s.a, t),
                    P = (0, o.useEffectEvent)(m);
                return d[3] !== p || d[4] !== v || d[5] !== f.key || d[6] !== P || d[7] !== h || d[8] !== y || d[9] !== g ? (n = () => {
                    if (!y || !h || v) return;
                    let e = new AbortController;
                    return P(e.signal).then(() => {
                        e.signal.aborted || g.set(s.a, {
                            locationKey: f.key,
                            accountId: p
                        }, !0)
                    }), () => e.abort()
                }, d[3] = p, d[4] = v, d[5] = f.key, d[6] = P, d[7] = h, d[8] = y, d[9] = g, d[10] = n) : n = d[10], d[11] !== p || d[12] !== v || d[13] !== f.key || d[14] !== h || d[15] !== y || d[16] !== g ? (u = [p, v, f.key, h, y, g], d[11] = p, d[12] = v, d[13] = f.key, d[14] = h, d[15] = y, d[16] = g, d[17] = u) : u = d[17], (0, o.useEffect)(n, u), null
            }
        })
    }),
    yLzP: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            o = n("oyxz"),
            a = n("ygO2"),
            i = n("RNul");
        n.d(t, {}, {
            a: function(e) {
                let t, n, s = (0, l.c)(5),
                    {
                        ref: c,
                        onRetry: u
                    } = e;
                return s[0] !== u ? (t = null != u ? (0, r.jsx)(a.a, {
                    color: "secondary",
                    onClick: u,
                    children: (0, r.jsx)(o.a, {
                        id: "chatgpt.pagination.retry",
                        defaultMessage: "Try again",
                        description: "Button to retry loading older conversation messages after a failure"
                    })
                }) : (0, r.jsxs)("div", {
                    role: "status",
                    children: [(0, r.jsx)(i.a, {}), (0, r.jsx)("span", {
                        className: "sr-only",
                        children: (0, r.jsx)(o.a, {
                            id: "chatgpt.pagination.loading",
                            defaultMessage: "Loading older messages…",
                            description: "Accessible status while an older page of conversation messages loads"
                        })
                    })]
                }), s[0] = u, s[1] = t) : t = s[1], s[2] !== c || s[3] !== t ? (n = (0, r.jsx)("div", {
                    ref: c,
                    className: "flex justify-center py-4",
                    children: t
                }), s[2] = c, s[3] = t, s[4] = n) : n = s[4], n
            }
        })
    }),
    KFm7: (function(e, t, n) {
        var r = n("acLe"),
            l = n("jCHb"),
            o = n("p5Yg"),
            a = n("V8uZ"),
            i = n("uYx2");
        let s = 2 / 3;

        function c(e) {
            let t = Number.parseFloat(e.style.getPropertyValue("--thread-scroll-padding-bottom") || e.style.getPropertyValue("--thread-scroll-seeded-padding-bottom"));
            return Number.isFinite(t) ? t : 0
        }

        function u(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = Math.max(0, e.clientHeight - c(e));
            return t ? n : Math.max(0, Math.min(n * s, n - 240))
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
                        l = null == r ? 0 : (0, i.b)(r);
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
                    t.getBoundingClientRect().top > r || (this.canPrepareThreadEndContent = !1, this.cancelPendingUserScrollDecay(), this.consumeGrowth((0, i.b)(e)), this.scrollController.compensateScrollToDistanceFromBottomPx(0))
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
                            o = this.canPrepareThreadEndContent;
                        l && (this.canPrepareThreadEndContent = !1, this.stop());
                        let a = this.trimTo(u(e, null != this.placementTarget));
                        l && (a || this.scrollController.compensateScrollToDistanceFromBottomPx((0, i.b)(e)), this.animatePlacement(), this.canPrepareThreadEndContent = o)
                    }
                };
                place = e => {
                    let t = this.scrollController.getScrollElement();
                    if (null == t) return;
                    this.canPrepareThreadEndContent = !1, this.cancelPendingUserScrollDecay(), this.interruptPlacement(), this.placementTarget = e, this.viewportHeightPx = t.clientHeight, this.scrollPaddingBottomPx = c(t);
                    let n = this.height.get(),
                        r = (0, i.b)(t),
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
                    return (0, i.b)(e) - (this.placementTarget.getBoundingClientRect().top - t.top) / n + e.clientTop + r
                }
            },
            b: c
        })
    }),
    Ho4C: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            o = n("zd8w"),
            a = n("T1PX"),
            i = n("ZYy5"),
            s = n("m8On"),
            c = n("bIvi"),
            u = n("lsfk");
        let d = Array.from({
            length: 101
        }, (e, t) => t / 100);
        n.d(t, {}, {
            a: function(e) {
                let t, n, h, m, g, p, f, x, y, v, P, w, b, S, C = (0, l.c)(31),
                    {
                        controller: k,
                        onReleased: I
                    } = e,
                    E = (0, u.b)(),
                    B = (0, o.useContext)(i.a),
                    T = (0, a.a)(),
                    {
                        getScrollElement: M
                    } = E;
                C[0] !== k ? (t = e => {
                    k.setElement(e)
                }, C[0] = k, C[1] = t) : t = C[1];
                let K = (0, c.a)(t);
                return C[2] !== k || C[3] !== I || C[4] !== T || C[5] !== E ? (n = () => {
                    k.updateContext(E, T, I)
                }, h = [k, E, T, I], C[2] = k, C[3] = I, C[4] = T, C[5] = E, C[6] = n, C[7] = h) : (n = C[6], h = C[7]), (0, o.useInsertionEffect)(n, h), C[8] !== k || C[9] !== M ? (m = () => {
                    let e = M();
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
                }, g = [k, M], C[8] = k, C[9] = M, C[10] = m, C[11] = g) : (m = C[10], g = C[11]), (0, o.useEffect)(m, g), C[12] !== k.cancelPendingUserScrollDecay ? (p = () => k.cancelPendingUserScrollDecay, C[12] = k.cancelPendingUserScrollDecay, C[13] = p) : p = C[13], C[14] !== k ? (f = [k], C[14] = k, C[15] = f) : f = C[15], (0, o.useEffect)(p, f), C[16] !== k || C[17] !== M ? (x = () => {
                    let e = M();
                    if (null == e || "u" < typeof IntersectionObserver) return;
                    let t = new IntersectionObserver(k.collapseIfHidden, {
                            root: e,
                            threshold: d
                        }),
                        n = k.getElement();
                    return null != n && t.observe(n), () => t.disconnect()
                }, y = [k, M], C[16] = k, C[17] = M, C[18] = x, C[19] = y) : (x = C[18], y = C[19]), (0, o.useEffect)(x, y), C[20] !== k || C[21] !== E ? (v = () => {
                    let e = E.addScrollListener(k.handleScroll),
                        t = E.addUserScrollListener(k.handleUserScroll);
                    return k.reconcileViewport(), () => {
                        e(), t()
                    }
                }, P = [k, E], C[20] = k, C[21] = E, C[22] = v, C[23] = P) : (v = C[22], P = C[23]), (0, o.useLayoutEffect)(v, P), C[24] !== k || C[25] !== M || C[26] !== B ? (w = () => {
                    let e = M();
                    if (null == e) return;
                    let t = null,
                        n = () => {
                            null == t && (t = window.requestAnimationFrame(() => {
                                t = null, k.reconcileViewport()
                            }))
                        },
                        r = B ?? (0, s.b)(),
                        l = e.parentElement?.querySelector("[data-thread-scroll-footer]"),
                        o = null == l ? [e] : [e, l];
                    for (let e of o)(0, s.a)({
                        element: e,
                        callback: n,
                        observer: r
                    });
                    return window.addEventListener("resize", n, {
                        passive: !0
                    }), () => {
                        for (let e of o)(0, s.c)({
                            element: e,
                            callback: n,
                            observer: r
                        });
                        null == B && r?.disconnect(), window.removeEventListener("resize", n), null != t && window.cancelAnimationFrame(t)
                    }
                }, b = [k, M, B], C[24] = k, C[25] = M, C[26] = B, C[27] = w, C[28] = b) : (w = C[27], b = C[28]), (0, o.useEffect)(w, b), C[29] !== K ? (S = (0, r.jsx)("div", {
                    ref: K,
                    className: "shrink-0",
                    "aria-hidden": !0
                }), C[29] = K, C[30] = S) : S = C[30], S
            }
        })
    }),
    BdYu: (function(e, t, n) {
        var r = n("QosV"),
            l = n("K45w"),
            o = n("p5Yg"),
            a = n("B7sF"),
            i = n("jCHb"),
            s = n("RgeH"),
            c = n("iTtm"),
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

        function P(e) {
            return e.isPopoverOpen ? {
                ...e,
                isPopoverOpen: !1
            } : e
        }

        function w(e, t, n, r, l, o) {
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
                let t, n, o, a, P, S, C, k, I, E, B, T = (0, r.c)(64),
                    {
                        contentShiftResetKey: M,
                        controlledIsOpen: K,
                        floatingPanelWidth: D,
                        getCurrentPinStateKey: H,
                        isEnabled: R,
                        pinStateKey: F
                    } = void 0 === e ? {} : e,
                    j = void 0 === R || R,
                    A = void 0 === F || F,
                    L = (0, c.y)(g.a),
                    _ = (0, c.z)(null == K && !0 === A ? m.N : null),
                    z = (0, c.x)(null == K && !0 !== A ? m.C : null, !0 !== A && A),
                    O = K ?? (0, m.z)(!0 === A ? _ : z, A),
                    q = (0, c.z)(m.h),
                    N = (0, c.z)(h.G),
                    W = (0, c.z)(f.g),
                    U = (0, c.z)(v.b),
                    G = j && O,
                    V = D ?? 300,
                    Q = j && null == D && (K ?? (U.isPopoverOpen || "boolean" != typeof A && O)),
                    $ = (0, c.z)(p.c),
                    Y = (0, u.useContext)(d.c),
                    Z = (0, l.a)(0),
                    X = Y?.mainContentTargetWidth ?? Z,
                    J = (0, l.a)(b({
                        isSummaryPanelPinned: G,
                        floatingPanelWidth: D,
                        mainContentTargetWidth: X.get()
                    }));
                T[0] !== X ? (t = e => X.on("change", e), T[0] = X, T[1] = t) : t = T[1];
                let ee = t,
                    et = () => (0, x.c)(X.get(), V),
                    en = (0, u.useSyncExternalStore)(ee, et, et),
                    er = (0, u.useRef)(null);
                T[2] !== J ? (n = J.get(), T[2] = J, T[3] = n) : n = T[3], T[4] !== X ? (o = X.get(), T[4] = X, T[5] = o) : o = T[5], T[6] !== n || T[7] !== o ? (a = {
                    offset: n,
                    width: o
                }, T[6] = n, T[7] = o, T[8] = a) : a = T[8];
                let el = (0, u.useRef)(a),
                    eo = (0, u.useRef)(!1),
                    ea = (0, u.useRef)(M),
                    ei = (0, u.useRef)(q),
                    es = (0, u.useRef)(N),
                    ec = (0, x.a)({
                        displayMode: en,
                        isPinned: G && null == D,
                        isPopoverOpen: Q
                    }),
                    eu = ec.shouldShow && !W;
                T[9] !== J || T[10] !== M || T[11] !== ea || T[12] !== K || T[13] !== D || T[14] !== H || T[15] !== N || T[16] !== j || T[17] !== X || T[18] !== A || T[19] !== q || T[20] !== L ? (P = () => {
                    let e = ei.current !== q,
                        t = es.current !== N;
                    if (!eo.current && ea.current === M && !e && !t) return;
                    eo.current = !1, ea.current = M, ei.current = q, es.current = N;
                    let n = w(L, j, H?.() ?? A, X.get(), D, K);
                    el.current = {
                        offset: n,
                        width: X.get()
                    }, er.current?.(), J.jump(n)
                }, T[9] = J, T[10] = M, T[11] = ea, T[12] = K, T[13] = D, T[14] = H, T[15] = N, T[16] = j, T[17] = X, T[18] = A, T[19] = q, T[20] = L, T[21] = P) : P = T[21], T[22] !== J || T[23] !== M || T[24] !== K || T[25] !== D || T[26] !== H || T[27] !== N || T[28] !== j || T[29] !== X || T[30] !== A || T[31] !== q || T[32] !== L ? (S = [J, M, K, D, H, N, j, X, A, q, L], T[22] = J, T[23] = M, T[24] = K, T[25] = D, T[26] = H, T[27] = N, T[28] = j, T[29] = X, T[30] = A, T[31] = q, T[32] = L, T[33] = S) : S = T[33], (0, u.useLayoutEffect)(P, S);
                let ed = Y?.chatPaneWidth ?? X;
                T[34] !== ed || T[35] !== J || T[36] !== K || T[37] !== D || T[38] !== H || T[39] !== j || T[40] !== X || T[41] !== A || T[42] !== L || T[43] !== $ ? (C = () => {
                    let e = (e, t) => {
                        let n = w(L, j, H?.() ?? A, e, D, K),
                            r = el.current,
                            l = J.get();
                        if (r.offset === n && (l === n || r.width === e && !t)) return;
                        if (el.current = {
                                offset: n,
                                width: e
                            }, er.current?.(), t || 0 === e || l === n) return void J.jump(n);
                        let o = ed.get();
                        if (o === e) {
                            let e = (0, i.a)(J, n, y.a),
                                t = document.activeViewTransition;
                            if (null != t) {
                                e.pause();
                                let n = () => e.play();
                                t.ready.then(n, n)
                            }
                            er.current = () => e.stop();
                            return
                        }
                        let a = (0, s.a)([o, e], [l, n]),
                            c = ed.on("change", e => {
                                let t = a(e);
                                J.set(t), t === n && queueMicrotask(c)
                            });
                        er.current = c
                    };
                    return e(X.get(), $), X.on("change", t => {
                        e(t, $ || 0 === X.getPrevious() || L.get(m.h) !== ei.current)
                    })
                }, T[34] = ed, T[35] = J, T[36] = K, T[37] = D, T[38] = H, T[39] = j, T[40] = X, T[41] = A, T[42] = L, T[43] = $, T[44] = C) : C = T[44], T[45] !== ed || T[46] !== J || T[47] !== K || T[48] !== D || T[49] !== H || T[50] !== j || T[51] !== G || T[52] !== X || T[53] !== A || T[54] !== L || T[55] !== $ ? (k = [ed, J, K, D, H, j, G, X, A, L, $], T[45] = ed, T[46] = J, T[47] = K, T[48] = D, T[49] = H, T[50] = j, T[51] = G, T[52] = X, T[53] = A, T[54] = L, T[55] = $, T[56] = k) : k = T[56], (0, u.useLayoutEffect)(C, k), T[57] === Symbol.for("react.memo_cache_sentinel") ? (I = () => () => {
                    eo.current = !0, er.current?.()
                }, E = [], T[57] = I, T[58] = E) : (I = T[57], E = T[58]), (0, u.useLayoutEffect)(I, E);
                let eh = ec.shouldHideInlineImmediately || W,
                    em = W ? null : ec.visibleSurface;
                return T[59] !== J || T[60] !== eu || T[61] !== eh || T[62] !== em ? (B = {
                    contentShift: J,
                    shouldHideInlineImmediately: eh,
                    shouldShow: eu,
                    visibleSurface: em
                }, T[59] = J, T[60] = eu, T[61] = eh, T[62] = em, T[63] = B) : B = T[63], B
            },
            b: function(e, t) {
                let n, i, s, h, g, p, f = (0, r.c)(15),
                    y = void 0 !== t && t,
                    w = (0, c.z)(m.i),
                    b = (0, c.z)(m.r),
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
                f[4] !== I ? (i = () => {
                    o.b.update(I)
                }, f[4] = I, f[5] = i) : i = f[5], (0, a.a)(k, "change", i), f[6] !== I ? (s = () => (I(), () => (0, o.a)(I)), f[6] = I, f[7] = s) : s = f[7], f[8] !== w || f[9] !== b || f[10] !== I ? (h = [w, b, I], f[8] = w, f[9] = b, f[10] = I, f[11] = h) : h = f[11], (0, u.useLayoutEffect)(s, h), f[12] !== e ? (g = () => () => {
                    e.set(v.b, P)
                }, p = [e], f[12] = e, f[13] = g, f[14] = p) : (g = f[13], p = f[14]), (0, u.useLayoutEffect)(g, p)
            }
        })
    })
};