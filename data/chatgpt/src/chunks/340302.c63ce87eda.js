export const __rspack_esm_ids = [340302];
export const __webpack_modules__ = {
    TS05: (function(e, t, n) {
        var r = n("Q840"),
            a = n("tSEg");
        let l = (0, r.v)(a.a, e => !1, void 0, {
            autoDispose: 6e4
        });
        n.d(t, {}, {
            a: l
        })
    }),
    IL1g: (function(e, t, n) {
        var r = n("ABep"),
            a = n("QosV"),
            l = n("zd8w"),
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
            let t, n, o = (0, a.c)(4),
                {
                    inDialog: c
                } = e,
                d = void 0 !== c && c;
            return o[0] !== d ? (t = i.map((e, t) => {
                let n = e.emphasize ? (0, r.jsx)("strong", {
                    children: e.label
                }) : e.label;
                return (0, r.jsxs)(l.Fragment, {
                    children: [t > 0 && (0, r.jsx)("span", {
                        "aria-hidden": "true",
                        children: "|"
                    }), e.href ? (0, r.jsx)(s.a, {
                        href: e.href,
                        initiator: "open_in_browser_bridge",
                        openTarget: d ? "external-browser" : void 0,
                        underline: "always",
                        children: n
                    }) : (0, r.jsxs)("span", {
                        children: [e.prefix, n]
                    })]
                }, e.label)
            }), o[0] = d, o[1] = t) : t = o[1], o[2] !== t ? (n = (0, r.jsx)("div", {
                className: "flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-xs text-secondary select-text",
                children: t
            }), o[2] = t, o[3] = n) : n = o[3], n
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, l, s = (0, a.c)(5),
                    {
                        inDialog: i
                    } = e,
                    d = void 0 !== i && i,
                    u = (0, o.a)();
                return "ko" !== new Intl.Locale(u.locale).language ? null : (s[0] !== d ? (t = (0, r.jsx)(c, {
                    inDialog: d
                }), s[0] = d, s[1] = t) : t = s[1], s[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, r.jsx)("p", {
                    children: "귀하가 19세 미만의 이용자로서 귀하의 법정대리인이 본 계약에 동의하지 않은 경우, 귀하 또는 귀하의 법정대리인은 계약을 취소할 수 있습니다."
                }), s[2] = n) : n = s[2], s[3] !== t ? (l = (0, r.jsxs)("div", {
                    className: "flex flex-col items-center gap-2 text-center text-xs text-secondary select-text",
                    children: [t, n]
                }), s[3] = t, s[4] = l) : l = s[4], l)
            },
            b: c
        })
    }),
    DWXw: (function(e, t, n) {
        n.d(t, {
            BrowserComposerDisclaimer: () => W,
            BrowserComposerDisclaimerMessage: () => q,
            a: () => Q
        });
        var r = n("ABep"),
            a = n("QosV"),
            l = n("Q840"),
            o = n("Wf1j"),
            s = n("oyxz"),
            i = n("Qgfj"),
            c = n("rEML"),
            d = n("OFP1"),
            u = n("EOo5"),
            h = n("ipGa"),
            m = n("ZtSy");

        function p(e) {
            return (0, r.jsx)(m.a, {
                href: "https://openai.com/policies/privacy-policy/",
                initiator: "open_in_browser_bridge",
                openTarget: "external-browser",
                children: e
            })
        }

        function g(e) {
            let t, n, l, o, i = (0, a.c)(9),
                {
                    context: c
                } = e;
            i[0] !== c.businessName ? (t = c.businessName?.trim(), i[0] = c.businessName, i[1] = t) : t = i[1];
            let d = t;
            return i[2] !== d ? (n = (0, r.jsx)("p", {
                children: d ? (0, r.jsx)(s.a, {
                    id: "businessProfiles.agentChat.privacy.named",
                    defaultMessage: "This chat remains private. {businessName} can only see overall insights about how its AI agent is doing. <learnMore>Learn more</learnMore>",
                    values: {
                        businessName: d,
                        learnMore: p
                    }
                }) : (0, r.jsx)(s.a, {
                    id: "businessProfiles.agentChat.privacy.unnamed",
                    defaultMessage: "This chat remains private. This business can only see overall insights about how its AI agent is doing. <learnMore>Learn more</learnMore>",
                    values: {
                        learnMore: p
                    }
                })
            }), i[2] = d, i[3] = n) : n = i[3], i[4] !== c.notice ? (l = c.notice?.trim() ? (0, r.jsx)("p", {
                children: c.notice
            }) : null, i[4] = c.notice, i[5] = l) : l = i[5], i[6] !== n || i[7] !== l ? (o = (0, r.jsxs)("div", {
                className: "flex flex-col gap-1",
                children: [n, l]
            }), i[6] = n, i[7] = l, i[8] = o) : o = i[8], o
        }
        var f = n("YJm0"),
            y = n("fzVa"),
            x = n("dQRk"),
            v = n("g2p6"),
            b = n("jAnS"),
            w = n("AcSY"),
            S = n("Ho8f"),
            C = n("hZax"),
            k = n("fNyS"),
            P = n("zd8w"),
            _ = n("IL1g"),
            M = n("JNtf"),
            E = n("mUDD"),
            T = n("ibLK"),
            D = n("jVko"),
            j = n("zWHk");
        let A = new WeakSet;

        function I(e) {
            let t, n, l, o, i = (0, a.c)(10),
                {
                    children: c
                } = e,
                d = (0, T.a)("(width < 640px)"),
                u = (0, P.useContext)(D.a);
            i[0] !== u ? (t = e => {
                if (null == u) return F;
                let t = () => {
                        A.add(u), e()
                    },
                    n = u.view.dom;
                n.addEventListener("input", t, !0);
                let r = (0, j.b)(u.view, t => {
                    t && e()
                });
                return () => {
                    n.removeEventListener("input", t, !0), r()
                }
            }, i[0] = u, i[1] = t) : t = i[1];
            let h = t;
            i[2] !== u ? (n = () => null == u || !u.hasText() && !A.has(u), i[2] = u, i[3] = n) : n = i[3];
            let m = n,
                p = (0, P.useSyncExternalStore)(h, m, z);
            if (!d) {
                let e;
                return i[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(_.b, {}), i[4] = e) : e = i[4], e
            }
            return i[5] !== p ? (l = p && (0, r.jsx)(M.a, {
                size: "responsiveSheet",
                triggerContent: (0, r.jsx)("button", {
                    className: "inline-flex min-h-6 min-w-6 cursor-interaction items-center justify-center text-xs text-secondary underline select-none",
                    type: "button",
                    children: (0, r.jsx)(s.a, {
                        ...O.companyInformation
                    })
                }),
                contentProps: {
                    "aria-describedby": void 0
                },
                children: (0, r.jsxs)(E.b, {
                    children: [(0, r.jsx)(E.d, {
                        title: (0, r.jsx)(M.e, {
                            children: (0, r.jsx)(s.a, {
                                ...O.companyInformation
                            })
                        })
                    }), (0, r.jsx)(E.e, {
                        children: (0, r.jsx)(_.b, {
                            inDialog: !0
                        })
                    })]
                })
            }), i[5] = p, i[6] = l) : l = i[6], i[7] !== c || i[8] !== l ? (o = (0, r.jsxs)("div", {
                className: "flex flex-col items-center gap-1",
                children: [c, l]
            }), i[7] = c, i[8] = l, i[9] = o) : o = i[9], o
        }

        function z() {
            return !0
        }

        function F() {}
        let O = (0, i.f)({
            companyInformation: {
                id: "chatgpt.compliance.korean_regulatory.company_information.label",
                defaultMessage: "Company info"
            }
        });
        var B = n("md8w"),
            R = n("dBtq"),
            L = n("RGWz");

        function W(e) {
            let t, n, o, s, i = (0, a.c)(10);
            i[0] !== e ? ({
                supportsMessageDisclosures: n,
                ...t
            } = e, i[0] = e, i[1] = t, i[2] = n) : (t = i[1], n = i[2]);
            let c = void 0 !== n && n,
                d = (0, l.z)(B.b),
                u = (0, l.x)(R.a, t.conversationId);
            if ("home" !== t.placement && (c && d || !u)) return null;
            let h = "home" === t.placement ? "empty:hidden" : void 0,
                m = t.placement ?? "thread",
                p = "home" === t.placement ? void 0 : N;
            return i[3] !== t || i[4] !== p ? (o = (0, r.jsx)(q, {
                ...t,
                renderOrdinaryDisclaimer: p
            }), i[3] = t, i[4] = p, i[5] = o) : o = i[5], i[6] !== h || i[7] !== m || i[8] !== o ? (s = (0, r.jsx)(S.a, {
                browser: !0,
                children: (0, r.jsx)(k.a, {
                    className: h,
                    placement: m,
                    children: o
                })
            }), i[6] = h, i[7] = m, i[8] = o, i[9] = s) : s = i[9], s
        }

        function N(e) {
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(L.b, {
                        children: e
                    })
                }), null]
            })
        }

        function q(e) {
            let t, n, i, d = (0, a.c)(28),
                {
                    aiServiceDisclaimer: u,
                    conversationId: m,
                    hasUserMessage: p,
                    isTemporaryChat: f,
                    ordinaryDisclaimer: y,
                    pendingWorkspaceDisclaimer: v,
                    placement: S,
                    regulatedConnectorKindOverride: C,
                    renderOrdinaryDisclaimer: k
                } = e,
                P = void 0 === S ? "thread" : S,
                _ = (0, o.a)(),
                {
                    search: M
                } = (0, c.Y)(),
                {
                    data: E
                } = (0, w.f)(),
                T = (0, l.x)(x.u, m ?? null),
                D = (0, l.x)(x.U, T?.status === "ready" && void 0 === C ? m ?? null : null);
            d[0] !== p || d[1] !== f || d[2] !== P || d[3] !== M ? (t = (f ?? (0, b.i)(M)) && !(p ?? "thread" === P), d[0] = p, d[1] = f, d[2] = P, d[3] = M, d[4] = t) : t = d[4];
            let j = t;
            if (null == E) return null == T ? v ?? null : null;
            if (null != T) {
                let e;
                if ("ready" !== T.status) return null;
                let t = void 0 !== C ? C : D;
                if (null != t) {
                    let e;
                    return d[5] !== t || d[6] !== y ? (e = (0, r.jsx)(Q, {
                        ordinaryDisclaimer: y,
                        regulatedConnectorKind: t
                    }), d[5] = t, d[6] = y, d[7] = e) : e = d[7], e
                }
                return d[8] !== T.context ? (e = (0, r.jsx)(g, {
                    context: T.context
                }), d[8] = T.context, d[9] = e) : e = d[9], e
            }
            if ("workspace" === E.structure) {
                let e;
                return d[10] !== E || d[11] !== v || d[12] !== k || d[13] !== j ? (e = (0, r.jsx)(V, {
                    account: E,
                    pendingWorkspaceDisclaimer: v,
                    isTemporaryChat: j,
                    renderOrdinaryDisclaimer: k
                }), d[10] = E, d[11] = v, d[12] = k, d[13] = j, d[14] = e) : e = d[14], e
            }
            d[15] !== y || d[16] !== k ? (n = k?.(y ?? (0, r.jsx)(s.a, {
                ...X.personal
            })) ?? y, d[15] = y, d[16] = k, d[17] = n) : n = d[17], d[18] !== E.id || d[19] !== u || d[20] !== m || d[21] !== P || d[22] !== C || d[23] !== j || d[24] !== n ? (i = (0, r.jsx)(K, {
                accountId: E.id,
                aiServiceDisclaimer: u,
                conversationId: m,
                isTemporaryChat: j,
                ordinaryDisclaimer: n,
                placement: P,
                regulatedConnectorKindOverride: C
            }), d[18] = E.id, d[19] = u, d[20] = m, d[21] = P, d[22] = C, d[23] = j, d[24] = n, d[25] = i) : i = d[25];
            let A = i;
            if ("home" === P && !p && !j && !(0, h.a)() && "ko" === new Intl.Locale(_.locale).language) {
                let e;
                return d[26] !== A ? (e = (0, r.jsx)(I, {
                    children: A
                }), d[26] = A, d[27] = e) : e = d[27], e
            }
            return A
        }

        function K(e) {
            let t, n = (0, a.c)(16),
                {
                    accountId: l,
                    aiServiceDisclaimer: o,
                    conversationId: s,
                    isTemporaryChat: i,
                    ordinaryDisclaimer: c,
                    placement: d,
                    regulatedConnectorKindOverride: u
                } = e,
                h = (0, C.f)("1831960162");
            if (!(0, C.g)("1831960162") && !h) {
                let e;
                return n[0] !== l || n[1] !== o || n[2] !== s || n[3] !== i || n[4] !== c || n[5] !== d || n[6] !== u ? (e = (0, r.jsx)(H, {
                    accountId: l,
                    aiServiceDisclaimer: o,
                    conversationId: s,
                    isTemporaryChat: i,
                    ordinaryDisclaimer: c,
                    placement: d,
                    regulatedConnectorKindOverride: u
                }), n[0] = l, n[1] = o, n[2] = s, n[3] = i, n[4] = c, n[5] = d, n[6] = u, n[7] = e) : e = n[7], e
            }
            return n[8] !== o || n[9] !== s || n[10] !== i || n[11] !== c || n[12] !== d || n[13] !== u || n[14] !== h ? (t = (0, r.jsx)(U, {
                aiServiceDisclaimer: o,
                conversationId: s,
                isTemporaryChat: i,
                ordinaryDisclaimer: c,
                placement: d,
                regulatedConnectorKindOverride: u,
                showAiServiceDisclaimer: h
            }), n[8] = o, n[9] = s, n[10] = i, n[11] = c, n[12] = d, n[13] = u, n[14] = h, n[15] = t) : t = n[15], t
        }

        function H(e) {
            let t, n = (0, a.c)(8),
                {
                    accountId: o,
                    aiServiceDisclaimer: s,
                    conversationId: i,
                    isTemporaryChat: c,
                    ordinaryDisclaimer: d,
                    placement: h,
                    regulatedConnectorKindOverride: m
                } = e,
                {
                    userId: p
                } = (0, u.a)(),
                g = (0, l.z)(v.n),
                {
                    data: f
                } = (0, l.z)(y.b),
                x = null != p && g === o,
                b = (0, C.f)(!!x && (null == f || "under_18" === f.age_status) && "1639821169");
            return x ? (n[0] !== s || n[1] !== i || n[2] !== c || n[3] !== d || n[4] !== h || n[5] !== m || n[6] !== b ? (t = (0, r.jsx)(U, {
                aiServiceDisclaimer: s,
                conversationId: i,
                isTemporaryChat: c,
                ordinaryDisclaimer: d,
                placement: h,
                regulatedConnectorKindOverride: m,
                showAiServiceDisclaimer: b
            }), n[0] = s, n[1] = i, n[2] = c, n[3] = d, n[4] = h, n[5] = m, n[6] = b, n[7] = t) : t = n[7], t) : null
        }

        function U(e) {
            let t, n, l = (0, a.c)(10),
                {
                    aiServiceDisclaimer: o,
                    conversationId: i,
                    isTemporaryChat: c,
                    ordinaryDisclaimer: d,
                    placement: u,
                    regulatedConnectorKindOverride: m,
                    showAiServiceDisclaimer: p
                } = e;
            l[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, h.a)(), l[0] = t) : t = l[0];
            let g = t;
            if (c) {
                let e;
                return l[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(s.a, {
                    ...X.temporaryChat
                }), l[1] = e) : e = l[1], e
            }
            if (p) {
                let e;
                return l[2] !== o ? (e = o ?? (0, r.jsx)(s.a, {
                    ...X.aiService
                }), l[2] = o, l[3] = e) : e = l[3], e
            }
            if (void 0 !== m) {
                let e;
                return null == m && (g || "home" === u) ? null : (l[4] !== d || l[5] !== m ? (e = (0, r.jsx)(Q, {
                    ordinaryDisclaimer: d,
                    regulatedConnectorKind: m
                }), l[4] = d, l[5] = m, l[6] = e) : e = l[6], e)
            }
            return "home" === u ? null : (l[7] !== i || l[8] !== d ? (n = (0, r.jsx)(G, {
                conversationId: i,
                isBrowserSideChat: g,
                ordinaryDisclaimer: d
            }), l[7] = i, l[8] = d, l[9] = n) : n = l[9], n)
        }

        function G(e) {
            let t, n = (0, a.c)(3),
                {
                    conversationId: o,
                    isBrowserSideChat: s,
                    ordinaryDisclaimer: i
                } = e,
                c = (0, l.x)(x.U, o ?? null);
            return s && null == c ? null : (n[0] !== i || n[1] !== c ? (t = (0, r.jsx)(Q, {
                ordinaryDisclaimer: i,
                regulatedConnectorKind: c
            }), n[0] = i, n[1] = c, n[2] = t) : t = n[2], t)
        }

        function Q(e) {
            let t, n = (0, a.c)(4),
                {
                    ordinaryDisclaimer: l,
                    regulatedConnectorKind: o
                } = e;
            if ("finance" === o) {
                let e;
                return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(s.a, {
                    ...X.finance
                }), n[0] = e) : e = n[0], e
            }
            if ("health" === o) {
                let e;
                return n[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(s.a, {
                    ...X.health
                }), n[1] = e) : e = n[1], e
            }
            return n[2] !== l ? (t = l ?? (0, r.jsx)(s.a, {
                ...X.personal
            }), n[2] = l, n[3] = t) : t = n[3], t
        }

        function V(e) {
            let t, n = (0, a.c)(10),
                {
                    account: o,
                    pendingWorkspaceDisclaimer: i,
                    isTemporaryChat: c,
                    renderOrdinaryDisclaimer: u
                } = e,
                m = (0, h.a)(),
                {
                    data: p
                } = (0, l.x)(f.a, o.id),
                {
                    data: g
                } = (0, l.x)(d.m, o.id);
            if (null == p || null != i && null == g) return i ?? null;
            let y = "early-access" === p.account.workspace_type;
            if (!y && null == g) return null;
            let x = p.account.name ?? o.name;
            if (g?.beta_settings.training_allowed === !0) {
                let e;
                n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(s.a, {
                    ...X.workspaceResearchPartner,
                    values: {
                        link: $
                    }
                }), n[0] = e) : e = n[0], t = e
            } else if (y) {
                let e;
                n[1] !== x ? (e = null == x ? (0, r.jsx)(s.a, {
                    ...X.earlyAccessWorkspaceWithoutName
                }) : (0, r.jsx)(s.a, {
                    ...X.earlyAccessWorkspace,
                    values: {
                        workspaceName: x
                    }
                }), n[1] = x, n[2] = e) : e = n[2], t = e
            } else if (c) {
                let e;
                n[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(s.a, {
                    ...X.workspaceTemporaryChat
                }), n[3] = e) : e = n[3], t = e
            } else if (null != p.account.ekm_config) {
                let e;
                n[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(s.a, {
                    ...X.encryptedWorkspace
                }), n[4] = e) : e = n[4], t = e
            } else if ("k12" === o.plan_type) {
                let e;
                n[5] !== x ? (e = null == x ? (0, r.jsx)(s.a, {
                    ...X.k12WorkspaceWithoutName
                }) : (0, r.jsx)(s.a, {
                    ...X.k12Workspace,
                    values: {
                        workspaceName: x
                    }
                }), n[5] = x, n[6] = e) : e = n[6], t = e
            } else {
                let e, a;
                return m ? null : (n[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(s.a, {
                    ...X.workspace
                }), n[7] = e) : e = n[7], t = e, n[8] !== u ? (a = u?.(t) ?? t, n[8] = u, n[9] = a) : a = n[9], a)
            }
            return t
        }

        function $(e) {
            return (0, r.jsx)(m.a, {
                className: "cursor-interaction underline underline-offset-2 hover:text-default",
                href: "https://help.openai.com/articles/20001245",
                initiator: "open_in_browser_bridge",
                isBrowserEnabled: !1,
                children: e
            })
        }
        let X = (0, i.f)({
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
    md8w: (function(e, t, n) {
        var r = n("Q840"),
            a = n("ASxG"),
            l = n("Cslg"),
            o = n("OWtl"),
            s = n("cX6x"),
            i = n("O666");
        let c = "623291997",
            d = a.number().nonnegative().catch(2),
            u = a.number().nonnegative().catch(24),
            h = (0, r.c)(o.a, e => {
                let {
                    get: t
                } = e, n = t(i.a, c), r = null == n ? (0, s.d)(c)?.value : void 0, a = null != t(l.k) && (n?.get("app_disclosure_below_message_actions", !1) ?? r?.app_disclosure_below_message_actions === !0), o = a ? n?.get("app_disclosure_impression_seconds", 2) ?? r?.app_disclosure_impression_seconds : 2, h = a ? n?.get("app_disclosure_cooldown_hours", 24) ?? r?.app_disclosure_cooldown_hours : 24;
                return {
                    enabled: a,
                    aboveActions: a && (n?.get("app_disclosure_above_message_actions", !1) ?? r?.app_disclosure_above_message_actions === !0),
                    inlineWithActions: a && (n?.get("app_disclosure_inline_with_message_actions", !1) ?? r?.app_disclosure_inline_with_message_actions === !0),
                    centered: a && (n?.get("app_disclosure_centered", !1) ?? r?.app_disclosure_centered === !0),
                    smallerFontSize: a && (n?.get("app_disclosure_smaller_font_size", !1) ?? r?.app_disclosure_smaller_font_size === !0),
                    workModeEnabled: n?.get("app_disclosure_in_work_mode", !1) ?? r?.app_disclosure_in_work_mode === !0,
                    standardOnlyForSessionSends: a && (n?.get("app_standard_disclosure_session_sends_only", !1) ?? r?.app_standard_disclosure_session_sends_only === !0),
                    showOnFirstMessage: n?.get("app_disclosure_show_on_first_message", !1) ?? r?.app_disclosure_show_on_first_message === !0,
                    impressionMs: 1e3 * d.parse(o),
                    cooldownMs: 60 * u.parse(h) * 6e4,
                    hideOnSend: !a || (n?.get("app_hide_disclosure_on_send", !0) ?? r?.app_hide_disclosure_on_send !== !1)
                }
            }, {
                isEqual: (e, t) => e.enabled === t.enabled && e.aboveActions === t.aboveActions && e.inlineWithActions === t.inlineWithActions && e.centered === t.centered && e.smallerFontSize === t.smallerFontSize && e.workModeEnabled === t.workModeEnabled && e.standardOnlyForSessionSends === t.standardOnlyForSessionSends && e.showOnFirstMessage === t.showOnFirstMessage && e.impressionMs === t.impressionMs && e.cooldownMs === t.cooldownMs && e.hideOnSend === t.hideOnSend
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
            a: () => v,
            b: () => b,
            c: () => S
        });
        var r = n("Q840"),
            a = n("ASxG"),
            l = n("Ow2S"),
            o = n("ISgP"),
            s = n("x4uR"),
            i = n("aFoA"),
            c = n("dQRk"),
            d = n("OWtl"),
            u = n("Nwp9"),
            h = n("md8w"),
            m = n("AuIy"),
            p = n("hx97"),
            g = n("lX86");
        let f = a.object({
                at: a.number().nonnegative(),
                messageId: a.string()
            }),
            y = (0, u.b)("message-disclosure-standard-impression", null, {
                coerceStoredValue: e => f.safeParse(e).data ?? null
            }),
            x = (0, r.u)(d.a, () => new Map),
            v = (0, r.d)(d.a, (e, t) => {
                let {
                    get: n
                } = t, r = null == e ? void 0 : n(c.y, e);
                return "tpp" !== r && "flora" !== r || n(h.a).workModeEnabled
            }),
            b = (0, r.d)(d.a, (e, t) => {
                let {
                    get: n,
                    scope: r
                } = t, a = n(h.a);
                if (!a.enabled || !n(v, e)) return {};
                let d = n(i.a, e) ?? e,
                    u = n(l.j, d);
                if (u && a.hideOnSend) return {};
                let f = n(c.N, e);
                if (null == f) return {};
                let b = n(c.T, e),
                    w = null != b && n(s.b, b).data?.gizmo.gizmo_snorlax_type === "potion" ? "health" : null,
                    S = r.get(y),
                    C = Date.now(),
                    k = n(c.J, e),
                    P = null;
                return k ? P = n(o.a, e) : u && (P = []),
                    function(e, t) {
                        let n, {
                                hideOnSend: r,
                                readyLatestResponseMessageIds: a,
                                projectKind: l,
                                canShowStandard: o,
                                standardDecisions: s,
                                showOnFirstMessage: i,
                                sessionStartSeconds: c
                            } = t,
                            d = (0, m.a)(e),
                            u = {},
                            h = l ?? "standard",
                            f = !1,
                            y = !1,
                            x = () => {
                                if (null != n) {
                                    if ("standard" !== h) u[h] = n;
                                    else if (null == c || f) {
                                        let e = s.get(n);
                                        null == e && (e = i && !y || o(n), s.set(n, e)), e && (u.standard = n)
                                    }
                                    y = !0, n = void 0
                                }
                            };
                        for (let e of d) "user" === e.author.role && (x(), f = null != c && null != e.create_time && e.create_time >= c, h = l ?? "standard", r && (delete u.standard, delete u.health, delete u.finance)), h = (0, g.b)(e) ?? h, (0, p.l)(e) && (n = e.id);
                        return null != n && (null == a || a.includes(n)) && x(), u
                    }({
                        mapping: f,
                        current_node: n(c.C, e)
                    }, {
                        hideOnSend: a.hideOnSend,
                        readyLatestResponseMessageIds: P,
                        projectKind: w,
                        canShowStandard: e => {
                            var t, n, r, l;
                            return t = e, n = S, r = a.cooldownMs, l = C, null == n || n.messageId === t || 0 === r || l < n.at || l - n.at >= r
                        },
                        standardDecisions: n(x),
                        showOnFirstMessage: a.showOnFirstMessage,
                        sessionStartSeconds: a.standardOnlyForSessionSends ? performance.timeOrigin / 1e3 : void 0
                    })
            }, {
                isEqual: (e, t) => e.standard === t.standard && e.health === t.health && e.finance === t.finance
            }),
            w = (0, r.d)(d.a, (e, t) => {
                let {
                    conversationId: n,
                    messageId: r
                } = e, {
                    get: a
                } = t, l = a(b, n);
                return l.health === r ? "health" : l.finance === r ? "finance" : l.standard === r ? "standard" : null
            });

        function S(e, t, n) {
            "standard" === e.get(w, {
                conversationId: t,
                messageId: n
            }) && e.set(y, {
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
            a = n.n(r),
            l = n("SKhr"),
            o = n("L6Md");
        let s = Array.from("αβγδεζηθικλμνξοπρστυφχψω"),
            i = new Map([..."alpha beta gamma delta epsilon zeta eta theta iota kappa lambda mu nu xi omicron pi rho sigma tau upsilon phi chi psi omega".split(" ").map((e, t) => [e, s[t]]), ..."nabla:∇ partial:∂ cdot:⋅ times:× div:÷ pm:± mp:∓ le:≤ leq:≤ ge:≥ geq:≥ ne:≠ neq:≠ infty:∞ sum:∑ prod:∏ int:∫ in:∈ notin:∉ to:→ rightarrow:→ leftarrow:←".split(" ").map(e => {
                let [t, n] = e.split(":");
                return [t, n]
            })]),
            c = /^\\(?:mathbf|boldsymbol|bm|mathrm|mathit|mathsf|mathtt|mathnormal|mathbb|mathcal|mathscr|mathfrak|textbf|textit|textrm)$/,
            d = /^\\(?:quad|qquad|enspace|thinspace|medspace|thickspace|negthinspace|displaystyle|textstyle|scriptstyle|scriptscriptstyle|limits|nolimits|[,;:! ])$/,
            u = /^\\(?:left|right|middle|big|Big|bigg|Bigg|bigl|bigr|Bigl|Bigr|biggl|biggr|Biggl|Biggr)$/;

        function h(e) {
            let t = Array.from(e.matchAll(/\\[a-zA-Z]+|\\[^\r\n]|[^\s]/gu), e => ({
                    value: e[0],
                    start: e.index,
                    end: e.index + e[0].length
                })),
                n = [],
                r = [],
                a = 0;

            function l() {
                let e = t[a]?.start;
                if (null == e) throw Error("Missing argument");
                let n = o(),
                    r = t[a - 1].end;
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
                let e = t[a++];
                if (null == e || "}" === e.value) throw Error("Incomplete math");
                if ("{" === e.value) {
                    let r = [];
                    for (; t[a]?.value !== "}";) r.push(...o());
                    return n.push({
                        start: e.start,
                        end: t[a++].end
                    }), r
                }
                if (c.test(e.value)) {
                    let r = o();
                    return n.push({
                        start: e.start,
                        end: t[a - 1].end
                    }), r
                }
                if (d.test(e.value)) return [];
                if (u.test(e.value)) {
                    let n, l = t[a++];
                    if (null == l) throw Error("Missing delimiter");
                    if ("\\left" === e.value) n = {
                        start: e.start,
                        end: l.end
                    }, r.push(n);
                    else if ("\\right" === e.value) {
                        if (null == (n = r.pop())) throw Error("Unpaired delimiter");
                        n.end = l.end
                    }
                    return "." === l.value ? [] : [{
                        ...l,
                        start: e.start,
                        delimiter: n
                    }]
                }
                if (/^\\[dt]?frac$/.test(e.value)) return [{
                    ...e,
                    value: "\\frac"
                }, ...l(), ...l()];
                if (/^(?:[_^]|\\(?:sqrt|vec|hat|bar|overline|underline))$/.test(e.value) || e.value.startsWith("\\") && !i.has(e.value.slice(1).replace(/^var/, "").toLowerCase()) && t[a]?.value === "{") {
                    if (t[a]?.value === "[") throw Error("Indexed argument");
                    return [e, ...l()]
                }
                let s = e.value.replace(/^\\/, "");
                return s = (s = (s = i.get(s.replace(/^var/, "").toLowerCase()) ?? e.value).replace(/[\u{1D400}-\u{1D7FF}]/gu, e => e.normalize("NFKC")).toLowerCase()).replace(/[ϵϑϕϖϱς−·]/g, e => "εθφπρσ-⋅" ["ϵϑϕϖϱς−·".indexOf(e)]), [{
                    ...e,
                    value: s
                }]
            }
            try {
                let e = [];
                for (; a < t.length;) e.push(...o());
                return 0 === r.length ? {
                    tokens: e,
                    groups: n
                } : null
            } catch {
                return null
            }
        }
        var m = n("agQa"),
            p = n("QxH2"),
            g = n("h8aU");

        function f(e) {
            let {
                contextId: t,
                getTurns: n,
                hydratePersistedMatch: r,
                revealUnrenderedMatches: s = !1,
                searchPersisted: c,
                searchMath: d = !1,
                scrollAdapter: u
            } = e;
            return {
                domain: "conversation",
                contextId: t,
                async search(e, t) {
                    var r, s;
                    let u, p, f = await async function(e, t, n, r) {
                        let a = e.query.trim(),
                            s = n && a.length > 1 && a.startsWith("/") && a.endsWith("/") ? a.slice(1, -1) : void 0,
                            c = t.flatMap(e => e.units.flatMap(t => (t.textChunks ?? [t.text]).flatMap((r, a) => {
                                let l = {
                                        turnKey: e.turnKey,
                                        unitId: t.unitId,
                                        text: n ? r.replace(/\s+/g, " ").trim() : r,
                                        equationIndex: void 0
                                    },
                                    o = n ? t.equations?.[a] : void 0;
                                return null == o ? [l] : [l, {
                                    ...l,
                                    text: o,
                                    equationIndex: a
                                }]
                            }))),
                            d = {
                                domain: e.domain,
                                contextId: e.contextId,
                                query: a,
                                regex: s,
                                searchMath: n || void 0,
                                matches: [],
                                totalMatches: 0,
                                isCapped: !1
                            };
                        if (!a) return d;
                        let u = null == s ? null : await (0, m.a)({
                            query: s,
                            texts: c.map(e => e.text),
                            mathTexts: c.map(e => null != e.equationIndex),
                            maxMatches: 250
                        }, r);
                        if (u?.error) return {
                            ...d,
                            error: u.error
                        };
                        d.totalMatches = u?.totalMatches ?? 0;
                        let p = new Map;
                        for (let [t, n] of c.entries()) {
                            let r = (0, l.e)(n.turnKey, n.unitId),
                                s = p.get(r) ?? 0,
                                {
                                    offsets: c,
                                    totalMatches: m
                                } = null != u ? {
                                    offsets: u.offsets[t] ?? [],
                                    totalMatches: 0
                                } : (null == n.equationIndex ? g.a : function(e, t, n) {
                                    let r = t.trim(),
                                        a = [];
                                    if (!r) return {
                                        offsets: a,
                                        totalMatches: 0
                                    };
                                    let l = h(e),
                                        s = h(i.get(r) ?? r);
                                    if (null == l || null == s) {
                                        let t = e.toLowerCase(),
                                            l = r.toLowerCase(),
                                            s = [...e.matchAll(/\\[a-zA-Z]+/g)];
                                        for (let n = t.indexOf(l); n >= 0; n = t.indexOf(l, n + l.length)) s.some(e => n > e.index && n < e.index + e[0].length) || a.push((0, o.a)(e, {
                                            start: n,
                                            end: n + r.length
                                        }));
                                        return {
                                            offsets: a.slice(0, n),
                                            totalMatches: a.length
                                        }
                                    }
                                    let c = 0;
                                    for (let e = 0; s.tokens.length > 0 && e <= l.tokens.length - s.tokens.length; e += 1) {
                                        if (!s.tokens.every((t, n) => t.value === l.tokens[e + n].value)) continue;
                                        let t = l.tokens.slice(e, e + s.tokens.length),
                                            r = t[0].start,
                                            o = t[t.length - 1].end;
                                        for (let e of t) r = Math.min(r, e.delimiter?.start ?? r), o = Math.max(o, e.delimiter?.end ?? o);
                                        for (let e of l.groups) r < e.start && o > e.start && o < e.end && (o = e.end), r > e.start && r < e.end && o > e.end && (r = e.start);
                                        c += 1, a.length < n && a.push({
                                            start: r,
                                            end: o
                                        }), e += s.tokens.length - 1
                                    }
                                    return {
                                        offsets: a,
                                        totalMatches: c
                                    }
                                })(n.text, a, 250 - d.matches.length);
                            for (let [t, r] of(d.totalMatches += m, c.entries())) {
                                let a = {
                                    domain: "conversation",
                                    contextId: e.contextId,
                                    turnKey: n.turnKey,
                                    unitId: n.unitId,
                                    matchIndex: null == n.equationIndex ? s + t : t,
                                    equationIndex: n.equationIndex,
                                    equationRange: null == n.equationIndex ? void 0 : r
                                };
                                d.matches.push({
                                    id: (0, l.d)(a),
                                    ordinal: d.matches.length + 1,
                                    location: a
                                })
                            }
                            null == n.equationIndex && p.set(r, s + c.length)
                        }
                        return d.isCapped = d.totalMatches > d.matches.length, d
                    }(e, n(), d, t?.signal);
                    if (d || null == c) return f;
                    let y = await c(e, t);
                    return null == y ? f : (r = f, s = y, u = new Map(r.matches.map(e => [e.id, e])), p = a()([...s.matches.map(e => u.get(e.id) ?? e), ...r.matches], "id").map((e, t) => ({
                        ...e,
                        ordinal: t + 1
                    })), {
                        ...r,
                        matches: p,
                        totalMatches: Math.max(p.length, r.totalMatches, s.totalMatches),
                        isCapped: r.isCapped || s.isCapped
                    })
                },
                async ensureVisible(e, n) {
                    if ("conversation" !== e.domain || e.contextId !== t || null != e.turnCursor && null != r && !await r(e, n) || n?.signal?.aborted) return;
                    u.onNavigate?.();
                    let a = null != e.turnCursor,
                        o = u.getTurnContainer(e.turnKey),
                        i = (0, l.d)(e),
                        c = s && null != o && null == (0, l.j)({
                            container: o,
                            matchId: i,
                            includeShadowRoots: !1
                        });
                    if (null == o || a || c) {
                        if (n?.signal?.aborted || (n?.signal == null ? await u.scrollToTurn(e.turnKey) : await u.scrollToTurn(e.turnKey, {
                                signal: n.signal
                            }), n?.signal?.aborted)) return;
                        o = u.getTurnContainer(e.turnKey)
                    }
                    null != o && await (0, p.b)({
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
                    let e = (0, r.e)(n.location.turnKey, n.location.unitId),
                        a = t.get(e) ?? [];
                    a.push(n), t.set(e, a)
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
            a = n("Q840"),
            l = n("zd8w"),
            o = n("SKhr"),
            s = n("gSdW");

        function i(e) {
            let t = [],
                n = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
            for (let r = n.nextNode(); null != r; r = n.nextNode()) {
                if (!(r instanceof Text) || r.parentElement?.closest(".vlist-s")) continue;
                let n = r.parentElement;
                for (; null != n && n !== e && "" === n.style.color;) n = n.parentElement;
                let a = 0;
                for (let e of r.data) t.push({
                    node: r,
                    text: e,
                    color: n?.style.color ?? "",
                    offset: a
                }), a += e.length
            }
            return t
        }
        var c = n("TwSq");
        let d = "[data-content-search-unit-key]";

        function u(e) {
            let t, u, f, y, x, v, b, w, S, C, k, P, _, M, E, T = (0, r.c)(30),
                {
                    containerRef: D,
                    contextId: j,
                    onContentChange: A
                } = e,
                I = (0, a.z)(c.d),
                z = (0, a.z)(c.g),
                F = I?.contextId === j ? I : null,
                O = null != F,
                B = O ? z?.id ?? null : null,
                {
                    schedule: R,
                    cancel: L
                } = (P = (0, r.c)(5), _ = (0, l.useRef)(null), 80 !== P[0] ? (S = e => {
                    null == _.current && (_.current = window.setTimeout(() => {
                        _.current = null, e()
                    }, 80))
                }, P[0] = 80, P[1] = S) : S = P[1], M = S, P[2] === Symbol.for("react.memo_cache_sentinel") ? (C = () => {
                    null != _.current && (window.clearTimeout(_.current), _.current = null)
                }, P[2] = C) : C = P[2], E = C, P[3] !== M ? (k = {
                    schedule: M,
                    cancel: E
                }, P[3] = M, P[4] = k) : k = P[4], k);
            T[0] !== A ? (t = () => A?.(), T[0] = A, T[1] = t) : t = T[1];
            let W = (0, l.useEffectEvent)(t);
            T[2] !== z?.location || T[3] !== j ? (u = e => {
                let t = z?.location;
                return t?.domain === "conversation" && t.contextId === j && (0, o.a)(e, t)
            }, T[2] = z?.location, T[3] = j, T[4] = u) : u = T[4];
            let N = (0, l.useEffectEvent)(u);
            T[5] !== B ? (f = (e, t) => {
                t.forEach(t => {
                    (0, o.o)({
                        element: t,
                        matchId: e
                    }), (0, o.n)(t, e === B)
                })
            }, T[5] = B, T[6] = f) : f = T[6];
            let q = (0, l.useEffectEvent)(f);
            T[7] !== F || T[8] !== D || T[9] !== q ? (y = async (e, t, r) => {
                let a = D.current;
                if (null == a || null == F) return;
                let l = null != r && !F.searchMath && a.contains(r) ? r : a;
                (0, o.b)(l, {
                    includeShadowRoots: !1
                }), t.takeRecords();
                let c = (0, s.a)(F.matches),
                    u = Array.from(l.querySelectorAll(d));
                l !== a && u.unshift(l);
                let f = u.flatMap(e => {
                        let t = c.get(e.dataset.contentSearchUnitKey ?? "");
                        return null == t ? [] : [{
                            element: e,
                            matches: t
                        }]
                    }),
                    y = f.map(g),
                    x = e => {
                        e.forEach((e, t) => e.forEach((e, n) => q(y[t].matches[n].id, e)))
                    };
                if (!F.searchMath) {
                    x(y.map(e => {
                        let {
                            element: t,
                            matches: n
                        } = e;
                        return (0, o.l)({
                            target: t,
                            query: F.query,
                            maxMatches: n.length,
                            includeShadowRoots: !1
                        }).matches
                    })), t.takeRecords();
                    return
                }
                let v = [];
                for (let {
                        element: e,
                        matches: t
                    }
                    of f) e.querySelectorAll("[data-math-source]").forEach((e, r) => {
                    let a = t.flatMap(e => {
                        let {
                            id: t,
                            location: n
                        } = e;
                        return "conversation" === n.domain && n.equationIndex === r && null != n.equationRange ? [{
                            id: t,
                            range: n.equationRange
                        }] : []
                    });
                    0 !== a.length && v.push((async function(e, t) {
                        let r = e.querySelector(".katex-html"),
                            a = e.dataset.mathSource;
                        if (null == r || null == a || 0 === t.length) return () => t.map(() => []);
                        let {
                            katex: l
                        } = await Promise.all([n.e(990054), n.e(559373)]).then(n.bind(n, "RlG8")), s = i(r), c = new Map(s.map(e => {
                            let {
                                node: t
                            } = e;
                            return [t, t.data]
                        })), d = new Set(s.map(e => {
                            let {
                                color: t
                            } = e;
                            return t
                        })), u = document.createElement("span"), h = t.map(() => {
                            let e, t = d.size + 1;
                            do e = `#${t.toString(16).padStart(6,"0")}`, u.style.color = e, t += 1; while (d.has(u.style.color)) return d.add(u.style.color), {
                                hex: e,
                                css: u.style.color
                            }
                        });
                        u.style.color = "";
                        let m = new Map(h.map((e, t) => {
                                let {
                                    css: n
                                } = e;
                                return [n, t]
                            })),
                            p = new Map,
                            g = n => {
                                let r = a;
                                for (let e of [...n].reverse()) {
                                    let {
                                        start: n,
                                        end: a
                                    } = t[e];
                                    r = `${r.slice(0,n)}{\\textcolor{${h[e].hex}}{${r.slice(n,a)}}}${r.slice(a)}`
                                }
                                try {
                                    u.innerHTML = l.renderToString(r, {
                                        displayMode: null != e.querySelector(".katex-display"),
                                        strict: "ignore",
                                        output: "html"
                                    })
                                } catch {
                                    return !1
                                }
                                let o = i(u),
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
                                    p.set(r, n)
                                }), !0
                            };
                        return g(t.map((e, t) => t)) || t.forEach((e, t) => g([t])), () => {
                            let n, l = t.map(() => []);
                            if (e.dataset.mathSource !== a || !e.contains(r) || [...c].some(e => {
                                    let [t, n] = e;
                                    return !r.contains(t) || t.data !== n
                                })) return l;
                            let i = [];
                            for (let e of s) {
                                let t = p.get(e);
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
                                of i.reverse()) l[e].unshift(... function e(t) {
                                let n = t[0],
                                    r = t[t.length - 1],
                                    a = document.createRange();
                                a.setStart(n.node, n.offset), a.setEnd(r.node, r.offset + r.text.length);
                                let l = a.commonAncestorContainer;
                                for (; a.startContainer !== l && 0 === a.startOffset;) a.setStartBefore(a.startContainer);
                                for (; a.endContainer !== l && a.endOffset === (a.endContainer instanceof Text ? a.endContainer.length : a.endContainer.childNodes.length);) a.setEndAfter(a.endContainer);
                                if (a.startContainer !== a.endContainer) return [...t].reverse().flatMap(t => e([t])).reverse();
                                let s = (0, o.g)();
                                return a.surroundContents(s), [s]
                            }(t));
                            return l
                        }
                    })(e, a.map(p)).then(e => () => e().forEach((e, t) => q(a[t].id, e))))
                });
                let [b, w] = await Promise.all([(0, o.m)(y.map(m), F.query, F.regex, e), Promise.all(v)]);
                e.aborted || (x(b()), w.forEach(h), t.takeRecords())
            }, T[7] = F, T[8] = D, T[9] = q, T[10] = y) : y = T[10];
            let K = (0, l.useEffectEvent)(y);
            T[11] !== F?.runId || T[12] !== N || T[13] !== K || T[14] !== L || T[15] !== D || T[16] !== W || T[17] !== R ? (x = () => {
                let e, t = D.current;
                if (null == t || F?.runId == null) return;
                let n = null,
                    r = e => {
                        n?.abort(), K((n = new AbortController).signal, a, e)
                    },
                    a = new MutationObserver(t => {
                        if (!(0, o.p)(t)) return;
                        for (let {
                                target: r
                            }
                            of(n?.abort(), t)) {
                            if (!1 === e) break;
                            let t = r instanceof Element ? r : r.parentElement,
                                n = t?.closest(d) ?? null;
                            e = (void 0 === e || e === n) && null != n && n.parentElement?.closest(d) == null && n
                        }
                        let a = () => {
                            let t = e;
                            e = void 0, W(), r(t || void 0)
                        };
                        N(t) ? (L(), a()) : R(a)
                    });
                return a.observe(t, {
                    childList: !0,
                    subtree: !0,
                    characterData: !0,
                    attributeFilter: ["hidden", "inert", "contenteditable", "data-thread-find-skip", "data-content-search-unit-key"]
                }), r(), () => {
                    a.disconnect(), n?.abort(), L(), (0, o.b)(t, {
                        includeShadowRoots: !1
                    })
                }
            }, T[11] = F?.runId, T[12] = N, T[13] = K, T[14] = L, T[15] = D, T[16] = W, T[17] = R, T[18] = x) : x = T[18];
            let H = F?.runId;
            T[19] !== L || T[20] !== D || T[21] !== j || T[22] !== R || T[23] !== H ? (v = [H, L, D, j, R], T[19] = L, T[20] = D, T[21] = j, T[22] = R, T[23] = H, T[24] = v) : v = T[24], (0, l.useEffect)(x, v), T[25] !== B || T[26] !== D || T[27] !== O ? (b = () => {
                O && D.current?.querySelectorAll("mark[data-search-match]").forEach(e => {
                    (0, o.n)(e, e.dataset.contentSearchMatchId === B)
                })
            }, w = [B, D, O], T[25] = B, T[26] = D, T[27] = O, T[28] = b, T[29] = w) : (b = T[28], w = T[29]), (0, l.useEffect)(b, w)
        }

        function h(e) {
            return e()
        }

        function m(e) {
            let {
                element: t,
                matches: n
            } = e;
            return {
                element: t,
                maxMatches: n.length
            }
        }

        function p(e) {
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
            a = n("QosV"),
            l = n("zd8w"),
            o = n("oyxz");
        n.d(t, {}, {
            a: function(e) {
                let t, n, s, i, c, d, u, h, m, p = (0, a.c)(15),
                    {
                        onNavigate: g
                    } = e,
                    f = (0, l.useRef)(null),
                    y = (0, l.useRef)(null),
                    [x, v] = (0, l.useState)(!1);
                return p[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => {
                    let e = f.current;
                    if (null == e) return;
                    let t = e.ownerDocument,
                        n = e.closest("[data-thread-scroll-footer]") ?? e.parentElement,
                        r = () => {
                            let n = t.activeElement;
                            null != n && e.compareDocumentPosition(n) === Node.DOCUMENT_POSITION_FOLLOWING && (e.tabIndex = 0)
                        },
                        a = t => {
                            "Tab" !== t.key || t.shiftKey || t.defaultPrevented || (e.tabIndex = -1)
                        };
                    return t.addEventListener("keydown", a), n?.addEventListener("focusin", r), () => {
                        t.removeEventListener("keydown", a), n?.removeEventListener("focusin", r), y.current?.abort()
                    }
                }, n = [], p[0] = t, p[1] = n) : (t = p[0], n = p[1]), (0, l.useEffect)(t, n), p[2] === Symbol.for("react.memo_cache_sentinel") ? (s = () => y.current?.abort(), p[2] = s) : s = p[2], p[3] !== g ? (i = e => {
                    y.current?.abort();
                    let t = e.currentTarget;
                    t.tabIndex = -1;
                    let n = new AbortController;
                    y.current = n, v(!1), g(n.signal).then(e => {
                        !n.signal.aborted && t.isConnected && t.ownerDocument.activeElement === t && (e?.isConnected ? e.focus({
                            preventScroll: !0
                        }) : v(!0))
                    })
                }, p[3] = g, p[4] = i) : i = p[4], p[5] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, r.jsx)(o.a, {
                    id: "codex.conversation.latestResponse",
                    defaultMessage: "Latest response"
                }), p[5] = c) : c = p[5], p[6] !== i ? (d = (0, r.jsx)("h4", {
                    ref: f,
                    className: "sr-only m-0 select-none",
                    tabIndex: 0,
                    onBlur: s,
                    onFocus: i,
                    children: c
                }), p[6] = i, p[7] = d) : d = p[7], p[8] !== x ? (u = x ? (0, r.jsx)(o.a, {
                    id: "codex.conversation.latestResponseUnavailable",
                    defaultMessage: "No response available"
                }) : null, p[8] = x, p[9] = u) : u = p[9], p[10] !== u ? (h = (0, r.jsx)("span", {
                    className: "sr-only m-0",
                    role: "status",
                    children: u
                }), p[10] = u, p[11] = h) : h = p[11], p[12] !== d || p[13] !== h ? (m = (0, r.jsxs)(r.Fragment, {
                    children: [d, h]
                }), p[12] = d, p[13] = h, p[14] = m) : m = p[14], m
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
    nMiI: (function(e, t, n) {
        n.d(t, {
            a: () => p,
            b: () => d
        });
        var r = n("ABep"),
            a = n("QosV"),
            l = n("zd8w"),
            o = n("Wf1j"),
            s = n("oyxz");
        let i = (0, n("Qgfj").f)({
            recent: {
                id: "conversation.timestampSeparator.recent",
                defaultMessage: "<day>{date}</day> {time}"
            },
            older: {
                id: "conversation.timestampSeparator.older",
                defaultMessage: "<day>{date}</day> at {time}"
            }
        });
        var c = n("dMTK");

        function d(e) {
            let t, n, d, g, f, y, x, v, b = (0, a.c)(20),
                {
                    sentAtMs: w,
                    nowMs: S
                } = e,
                C = (0, o.a)(),
                [k] = (0, l.useState)(m);
            if (!Number.isFinite(w)) return null;
            if (b[0] !== C || b[1] !== k || b[2] !== S || b[3] !== w) {
                let {
                    date: e,
                    time: r,
                    includeAt: a
                } = (0, c.c)(C, new Date(w), new Date(S ?? k));
                n = e, f = r, d = a ? i.older : i.recent, t = p, g = C.formatMessage(d, {
                    date: n,
                    time: f,
                    day: h
                }), b[0] = C, b[1] = k, b[2] = S, b[3] = w, b[4] = t, b[5] = n, b[6] = d, b[7] = g, b[8] = f
            } else t = b[4], n = b[5], d = b[6], g = b[7], f = b[8];
            return b[9] !== n || b[10] !== f ? (y = {
                date: n,
                time: f,
                day: u
            }, b[9] = n, b[10] = f, b[11] = y) : y = b[11], b[12] !== d || b[13] !== y ? (x = (0, r.jsx)(s.a, {
                ...d,
                values: y
            }), b[12] = d, b[13] = y, b[14] = x) : x = b[14], b[15] !== t || b[16] !== w || b[17] !== g || b[18] !== x ? (v = (0, r.jsx)(t, {
                label: g,
                sentAtMs: w,
                children: x
            }), b[15] = t, b[16] = w, b[17] = g, b[18] = x, b[19] = v) : v = b[19], v
        }

        function u(e) {
            return (0, r.jsx)("span", {
                className: "font-medium",
                children: e
            })
        }

        function h(e) {
            return e.join("")
        }

        function m() {
            return Date.now()
        }

        function p(e) {
            let t, n, l, o = (0, a.c)(11),
                {
                    children: s,
                    compact: i,
                    label: c,
                    sentAtMs: d
                } = e,
                u = void 0 !== i && i,
                h = u ? "flex justify-center py-2" : "flex justify-center py-4",
                m = null == c ? void 0 : "separator",
                p = u ? "text-xs text-tertiary select-none" : "text-sm leading-5 font-normal text-tertiary select-none";
            return o[0] !== d ? (t = new Date(d).toISOString(), o[0] = d, o[1] = t) : t = o[1], o[2] !== s || o[3] !== p || o[4] !== t ? (n = (0, r.jsx)("time", {
                className: p,
                dateTime: t,
                children: s
            }), o[2] = s, o[3] = p, o[4] = t, o[5] = n) : n = o[5], o[6] !== c || o[7] !== h || o[8] !== m || o[9] !== n ? (l = (0, r.jsx)("div", {
                "aria-label": c,
                className: h,
                role: m,
                "data-markdown-copy": "exclude",
                children: n
            }), o[6] = c, o[7] = h, o[8] = m, o[9] = n, o[10] = l) : l = o[10], l
        }
    }),
    QCUA: (function(e, t, n) {
        let r = (0, n("zd8w").createContext)("chat");
        n.d(t, {}, {
            a: r
        })
    }),
    gOnr: (function(e, t, n) {
        var r = n("QosV"),
            a = n("Q840"),
            l = n("zd8w"),
            o = n("TSib"),
            s = n("ipIJ"),
            i = n("Sd8U"),
            c = n("tSEg"),
            d = n("DRR4"),
            u = n("qZWE");
        n.d(t, {}, {
            a: function(e) {
                let t, n, h, m, p, g = (0, r.c)(14);
                g[0] !== e ? (t = void 0 === e ? {} : e, g[0] = e, g[1] = t) : t = g[1];
                let {
                    transcriptMcpAppIds: f,
                    blockedWidgetSource: y,
                    shouldBlockExternalEgress: x
                } = t, v = void 0 !== x && x, b = (0, a.y)(c.a), w = (0, a.y)(i.a), S = (0, a.z)(u.i), C = (0, a.z)(o.v);
                return g[2] !== C || g[3] !== y || g[4] !== w || g[5] !== S || g[6] !== b || g[7] !== v || g[8] !== f ? (n = () => {
                    for (let [e, t] of("chatgpt-thread" === b.value.routeKind && (0, s.b)(w, C.filter(e => v || null != y && (e.widgetSource ?? "descriptor") === y)), S))(v || null != y && (t.content.mcpAppScope.widgetSource ?? "descriptor") === y || t.hostedInThreadScrollLayout && f?.has(e) === !1) && (0, u.A)(b, e)
                }, h = [C, y, f, w, S, b, v], g[2] = C, g[3] = y, g[4] = w, g[5] = S, g[6] = b, g[7] = v, g[8] = f, g[9] = n, g[10] = h) : (n = g[9], h = g[10]), (0, l.useLayoutEffect)(n, h), g[11] !== b ? (m = () => {
                    (0, d.g)(b)
                }, p = [b], g[11] = b, g[12] = m, g[13] = p) : (m = g[12], p = g[13]), (0, l.useLayoutEffect)(m, p), null
            }
        })
    }),
    Mbqw: (function(e, t, n) {
        n("V8uZ"), n.d(t, {}, {
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
            a = n("Q840"),
            l = n("zd8w"),
            o = n("rEML"),
            s = n("Cslg"),
            i = n("TS05"),
            c = n("tSEg");
        n.d(t, {}, {
            a: function(e) {
                let t, n, d, u = (0, r.c)(18),
                    {
                        ready: h,
                        onNavigate: m
                    } = e,
                    p = (0, a.y)(c.a),
                    g = (0, a.z)(s.f),
                    f = (0, o.Y)(),
                    y = f.state,
                    x = y?.sidebarArea === "scheduled";
                u[0] !== g || u[1] !== f.key ? (t = {
                    locationKey: f.key,
                    accountId: g
                }, u[0] = g, u[1] = f.key, u[2] = t) : t = u[2];
                let v = (0, a.x)(i.a, t),
                    b = (0, l.useEffectEvent)(m);
                return u[3] !== g || u[4] !== v || u[5] !== f.key || u[6] !== b || u[7] !== h || u[8] !== x || u[9] !== p ? (n = () => {
                    if (!x || !h || v) return;
                    let e = new AbortController;
                    return b(e.signal).then(() => {
                        e.signal.aborted || p.set(i.a, {
                            locationKey: f.key,
                            accountId: g
                        }, !0)
                    }), () => e.abort()
                }, u[3] = g, u[4] = v, u[5] = f.key, u[6] = b, u[7] = h, u[8] = x, u[9] = p, u[10] = n) : n = u[10], u[11] !== g || u[12] !== v || u[13] !== f.key || u[14] !== h || u[15] !== x || u[16] !== p ? (d = [g, v, f.key, h, x, p], u[11] = g, u[12] = v, u[13] = f.key, u[14] = h, u[15] = x, u[16] = p, u[17] = d) : d = u[17], (0, l.useEffect)(n, d), null
            }
        })
    }),
    XsXa: (function(e, t, n) {
        var r = n("RaSH");
        let a = (0, r.a)(new Map).readable;
        n.d(t, {}, {
            a: function() {
                let {
                    get: e,
                    readable: t,
                    set: n
                } = (0, r.a)(new Map);
                return {
                    readable: t,
                    setCollapsed(t, r, a) {
                        let l = e(),
                            o = l.get(t);
                        o?.get(r) !== a && n(new Map(l).set(t, new Map(o).set(r, a)))
                    }
                }
            },
            b: a
        })
    }),
    yLzP: (function(e, t, n) {
        var r = n("ABep"),
            a = n("QosV"),
            l = n("oyxz"),
            o = n("Sm6l"),
            s = n("RNul");
        n.d(t, {}, {
            a: function(e) {
                let t, n, i, c = (0, a.c)(7),
                    {
                        ref: d,
                        onRetry: u
                    } = e;
                return c[0] !== u ? (t = (0, r.jsx)("div", {
                    role: "status",
                    className: "flex items-center text-sm text-secondary",
                    children: null != u ? (0, r.jsx)(l.a, {
                        id: "chatgpt.pagination.error",
                        defaultMessage: "Couldn’t load earlier messages"
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(s.a, {}), (0, r.jsx)("span", {
                            className: "sr-only",
                            children: (0, r.jsx)(l.a, {
                                id: "chatgpt.pagination.loading",
                                defaultMessage: "Loading older messages…"
                            })
                        })]
                    })
                }), n = null != u && (0, r.jsx)(o.a, {
                    color: "secondary",
                    onClick: u,
                    children: (0, r.jsx)(l.a, {
                        id: "chatgpt.pagination.retry",
                        defaultMessage: "Try again"
                    })
                }), c[0] = u, c[1] = t, c[2] = n) : (t = c[1], n = c[2]), c[3] !== d || c[4] !== t || c[5] !== n ? (i = (0, r.jsxs)("div", {
                    ref: d,
                    className: "flex items-center justify-center gap-2 py-4",
                    children: [t, n]
                }), c[3] = d, c[4] = t, c[5] = n, c[6] = i) : i = c[6], i
            }
        })
    }),
    KFm7: (function(e, t, n) {
        var r = n("acLe"),
            a = n("jCHb"),
            l = n("p5Yg"),
            o = n("V8uZ"),
            s = n("uYx2");
        let i = 2 / 3;

        function c(e, t, n) {
            let r = e.getBoundingClientRect(),
                a = n ?? (r.height / (e.offsetHeight || 1) || 1);
            return (t - (r.bottom - Math.max((0, s.e)(e, a), d(e) * a))) / a
        }

        function d(e) {
            let t = Number.parseFloat(e.style.getPropertyValue("--thread-scroll-padding-bottom") || e.style.getPropertyValue("--thread-scroll-seeded-padding-bottom"));
            return Number.isFinite(t) ? t : 0
        }

        function u(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = Math.max(0, e.clientHeight - d(e));
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
                        a = null == r ? 0 : (0, s.b)(r);
                    return this.writeHeight(n), null != r && this.scrollController.compensateScrollToDistanceFromBottomPx(Math.max(0, a - (t - n))), 0 === n && this.onReleased?.(), !0
                };
                cancelPendingUserScrollDecay = () => {
                    null != this.userScrollDecayAnimationFrame && (window.cancelAnimationFrame(this.userScrollDecayAnimationFrame), this.userScrollDecayAnimationFrame = null), this.pendingUserScrollDecayPx = 0, this.pendingUserScrollElement = null
                };
                clear = () => {
                    this.holdViewport(), this.cancelPendingUserScrollDecay(), this.writeHeight(0), this.placementTarget = void 0
                };
                prepareThreadEndContent = e => {
                    let t = this.scrollController.getScrollElement(),
                        n = this.element;
                    !this.canPrepareThreadEndContent || null != this.stopPlacementAnimation || null == t || t.clientHeight <= 0 || null == n || !(c(t, n.getBoundingClientRect().top) > 0) && e() && (this.canPrepareThreadEndContent = !1, this.cancelPendingUserScrollDecay(), this.consumeGrowth((0, s.b)(t)), this.scrollController.compensateScrollToDistanceFromBottomPx(0))
                };
                collapseIfHidden = () => {
                    let e = this.scrollController.getScrollElement();
                    0 >= this.height.get() || null != this.stopPlacementAnimation || null == e || null == this.element || -1 > c(e, this.element.getBoundingClientRect().top) || this.trimTo(0)
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
                    if (e < t && (0, s.f)(e)) return void this.clear();
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
                            n = d(e),
                            r = t !== this.viewportHeightPx || n !== this.scrollPaddingBottomPx;
                        this.viewportHeightPx = t, this.scrollPaddingBottomPx = n;
                        let a = r && null != this.stopPlacementAnimation,
                            l = this.canPrepareThreadEndContent;
                        a && (this.canPrepareThreadEndContent = !1, this.stop());
                        let o = this.trimTo(u(e, null != this.placementTarget));
                        a && (o || this.scrollController.compensateScrollToDistanceFromBottomPx((0, s.b)(e)), this.animatePlacement(), this.canPrepareThreadEndContent = l)
                    }
                };
                revealSubmittedTurn = e => {
                    let t = this.scrollController.getScrollElement();
                    if (null == t || !t.contains(e)) return;
                    this.scrollController.holdViewport();
                    let n = e.getBoundingClientRect(),
                        r = Math.min(c(t, n.bottom), (n.top - t.getBoundingClientRect().top) / (t.currentCSSZoom || 1));
                    r > 0 && this.scrollController.compensateScrollToDistanceFromBottomPx(Math.max(0, (0, s.b)(t) - r))
                };
                place = e => {
                    let t = this.scrollController.getScrollElement();
                    if (null == t) return;
                    this.canPrepareThreadEndContent = !1, this.cancelPendingUserScrollDecay(), this.interruptPlacement(), this.placementTarget = e, this.viewportHeightPx = t.clientHeight, this.scrollPaddingBottomPx = d(t);
                    let n = this.height.get(),
                        r = (0, s.b)(t),
                        a = this.getPlacementDistancePx(t);
                    this.scrollController.holdViewport(), this.writeHeight(null == e ? u(t) : Math.max(0, n - a + 1)), this.prefersReducedMotion || this.scrollController.compensateScrollToDistanceFromBottomPx(r + this.height.get() - n), this.animatePlacement(), this.canPrepareThreadEndContent = !0
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
                                r = (0, a.a)(0, e, {
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
                                                l.b.update(n, !0)
                                            },
                                            stop: () => {
                                                (0, l.a)(n)
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
            b: c,
            c: d
        })
    }),
    Ho4C: (function(e, t, n) {
        var r = n("ABep"),
            a = n("QosV"),
            l = n("zd8w"),
            o = n("T1PX"),
            s = n("ZYy5"),
            i = n("m8On"),
            c = n("bIvi"),
            d = n("lsfk");
        let u = Array.from({
            length: 101
        }, (e, t) => t / 100);
        n.d(t, {}, {
            a: function(e) {
                let t, n, h, m, p, g, f, y, x, v, b, w, S, C, k = (0, a.c)(31),
                    {
                        controller: P,
                        onReleased: _
                    } = e,
                    M = (0, d.b)(),
                    E = (0, l.useContext)(s.a),
                    T = (0, o.a)(),
                    {
                        getScrollElement: D
                    } = M;
                k[0] !== P ? (t = e => {
                    P.setElement(e)
                }, k[0] = P, k[1] = t) : t = k[1];
                let j = (0, c.a)(t);
                return k[2] !== P || k[3] !== _ || k[4] !== T || k[5] !== M ? (n = () => {
                    P.updateContext(M, T, _)
                }, h = [P, M, T, _], k[2] = P, k[3] = _, k[4] = T, k[5] = M, k[6] = n, k[7] = h) : (n = k[6], h = k[7]), (0, l.useInsertionEffect)(n, h), k[8] !== P || k[9] !== D ? (m = () => {
                    let e = D();
                    if (null == e) return;
                    let t = new AbortController;
                    for (let n of ["wheel", "touchstart", "pointerdown", "keydown"]) e.addEventListener(n, P.interruptPlacement, {
                        capture: !0,
                        passive: !0,
                        signal: t.signal
                    });
                    return () => {
                        t.abort(), P.interruptPlacement()
                    }
                }, p = [P, D], k[8] = P, k[9] = D, k[10] = m, k[11] = p) : (m = k[10], p = k[11]), (0, l.useEffect)(m, p), k[12] !== P.cancelPendingUserScrollDecay ? (g = () => P.cancelPendingUserScrollDecay, k[12] = P.cancelPendingUserScrollDecay, k[13] = g) : g = k[13], k[14] !== P ? (f = [P], k[14] = P, k[15] = f) : f = k[15], (0, l.useEffect)(g, f), k[16] !== P || k[17] !== D ? (y = () => {
                    let e = D();
                    if (null == e || "u" < typeof IntersectionObserver) return;
                    let t = new IntersectionObserver(P.collapseIfHidden, {
                            root: e,
                            threshold: u
                        }),
                        n = P.getElement();
                    return null != n && t.observe(n), () => t.disconnect()
                }, x = [P, D], k[16] = P, k[17] = D, k[18] = y, k[19] = x) : (y = k[18], x = k[19]), (0, l.useEffect)(y, x), k[20] !== P || k[21] !== M ? (v = () => {
                    let e = M.addScrollListener(P.handleScroll),
                        t = M.addUserScrollListener(P.handleUserScroll);
                    return P.reconcileViewport(), () => {
                        e(), t()
                    }
                }, b = [P, M], k[20] = P, k[21] = M, k[22] = v, k[23] = b) : (v = k[22], b = k[23]), (0, l.useLayoutEffect)(v, b), k[24] !== P || k[25] !== D || k[26] !== E ? (w = () => {
                    let e = D();
                    if (null == e) return;
                    let t = null,
                        n = () => {
                            null == t && (t = window.requestAnimationFrame(() => {
                                t = null, P.reconcileViewport()
                            }))
                        },
                        r = E ?? (0, i.b)(),
                        a = e.parentElement?.querySelector("[data-thread-scroll-footer]"),
                        l = null == a ? [e] : [e, a];
                    for (let e of l)(0, i.a)({
                        element: e,
                        callback: n,
                        observer: r
                    });
                    return window.addEventListener("resize", n, {
                        passive: !0
                    }), () => {
                        for (let e of l)(0, i.c)({
                            element: e,
                            callback: n,
                            observer: r
                        });
                        null == E && r?.disconnect(), window.removeEventListener("resize", n), null != t && window.cancelAnimationFrame(t)
                    }
                }, S = [P, D, E], k[24] = P, k[25] = D, k[26] = E, k[27] = w, k[28] = S) : (w = k[27], S = k[28]), (0, l.useEffect)(w, S), k[29] !== j ? (C = (0, r.jsx)("div", {
                    ref: j,
                    className: "shrink-0",
                    "aria-hidden": !0
                }), k[29] = j, k[30] = C) : C = k[30], C
            }
        })
    }),
    pDUk: (function(e, t, n) {
        var r = n("ABep"),
            a = n("QosV"),
            l = n("suct"),
            o = n("iodE"),
            s = n("IPUh"),
            i = n("Q840"),
            c = n("zd8w"),
            d = n("Q2Qp"),
            u = n("QcW8"),
            h = n("wD9O"),
            m = n("nzx4"),
            p = n("eGPX"),
            g = n("csXo"),
            f = n("iS3k"),
            y = n("KWzM");

        function x(e) {
            e.target instanceof Element && null != e.target.closest('[data-app-shell-tab-strip-controller="right"]') && e.preventDefault()
        }

        function v(e) {
            let t, n, l, d, u, g, f, x, v, b, w, S = (0, a.c)(25);
            S[0] !== e ? ({
                animate: t,
                getPaneElement: d,
                children: n,
                className: l,
                ...u
            } = e, S[0] = e, S[1] = t, S[2] = n, S[3] = l, S[4] = d, S[5] = u) : (t = S[1], n = S[2], l = S[3], d = S[4], u = S[5]);
            let C = (0, o.a)(),
                k = (0, i.z)(p.c),
                P = t && !k,
                _ = (0, h.c)(),
                M = (0, c.useRef)(null),
                E = (0, c.useRef)(P);
            S[6] !== d || S[7] !== _ ? (g = () => {
                let e = M.current,
                    t = d();
                if (null == e || null == t || !E.current) return;
                let n = t.getBoundingClientRect(),
                    r = e.getBoundingClientRect();
                e.style.clipPath = `inset(${(n.top-r.top)/_}px ${(r.right-n.right)/_}px ${(r.bottom-n.bottom)/_}px ${(n.left-r.left)/_}px)`
            }, S[6] = d, S[7] = _, S[8] = g) : g = S[8];
            let T = g,
                D = !C,
                j = !C;
            S[9] !== T ? (f = () => {
                E.current = !0, requestAnimationFrame(T)
            }, S[9] = T, S[10] = f) : f = S[10], S[11] === Symbol.for("react.memo_cache_sentinel") ? (x = () => {
                E.current = !1, M.current?.style.removeProperty("clip-path")
            }, S[11] = x) : x = S[11];
            let A = !!P && y.b.hidden;
            return S[12] !== P ? (v = P ? y.a : {
                duration: 0
            }, S[12] = P, S[13] = v) : v = S[13], S[14] !== n || S[15] !== f || S[16] !== A || S[17] !== v ? (b = (0, r.jsx)(s.a.div, {
                onAnimationStart: f,
                onAnimationComplete: x,
                initial: A,
                animate: y.b.visible,
                exit: y.b.hidden,
                transition: v,
                children: n
            }), S[14] = n, S[15] = f, S[16] = A, S[17] = v, S[18] = b) : b = S[18], S[19] !== l || S[20] !== u || S[21] !== D || S[22] !== j || S[23] !== b ? (w = (0, r.jsx)(m.c, {
                ...u,
                ref: M,
                className: l,
                forceMount: !0,
                "aria-hidden": D,
                inert: j,
                children: b
            }), S[19] = l, S[20] = u, S[21] = D, S[22] = j, S[23] = b, S[24] = w) : w = S[24], w
        }

        function b(e) {
            return e instanceof Element && null != e.closest('[data-app-shell-workspace-layout-toggle="right-panel"]')
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, s, i, p, y, w, S, C = (0, a.c)(37),
                    {
                        animate: k,
                        children: P,
                        floatingCardAnchor: _,
                        isOpen: M,
                        isSideChatSplit: E,
                        pane: T,
                        onOpenChange: D,
                        returnFocusId: j,
                        shouldPreventAutoFocus: A,
                        trigger: I
                    } = e,
                    z = void 0 === k || k,
                    F = void 0 !== E && E,
                    O = void 0 !== A && A,
                    B = (0, c.useContext)(d.a),
                    {
                        element: R
                    } = (0, g.a)(void 0 === T ? "chat" : T),
                    [L, W] = (0, c.useState)(null),
                    N = (0, c.useRef)(!1),
                    q = (0, c.useRef)(M && F),
                    K = 8 * (0, h.c)();
                C[0] !== L ? (t = () => L?.closest("[data-thread-floating-chat-actions]") ?? null, C[0] = L, C[1] = t) : t = C[1];
                let H = t;
                C[2] !== R || C[3] !== H || C[4] !== B ? (n = function(e) {
                    let t = void 0 === e ? H() : e;
                    return t?.offsetParent ?? (void 0 === R ? B?.querySelector("[data-app-shell-main-content-layout]") : R) ?? B
                }, C[2] = R, C[3] = H, C[4] = B, C[5] = n) : n = C[5];
                let U = n,
                    G = _ ?? L ?? void 0;
                C[6] !== _ || C[7] !== H || C[8] !== U || C[9] !== G || C[10] !== L ? (o = {
                    contextElement: G,
                    getBoundingClientRect() {
                        if (_?.isConnected) return _.getBoundingClientRect();
                        let e = H(),
                            t = e ?? L?.closest("[data-app-shell-main-titlebar]") ?? L?.closest("[data-app-shell-header-toolbar], [data-app-shell-titlebar]"),
                            n = (t ?? L)?.getBoundingClientRect() ?? new DOMRect,
                            r = U(e);
                        if (null == r) return n;
                        let a = r.getBoundingClientRect();
                        return new DOMRect(a.left, n.top, a.width, n.height)
                    }
                }, C[6] = _, C[7] = H, C[8] = U, C[9] = G, C[10] = L, C[11] = o) : o = C[11];
                let Q = o;
                return C[12] !== Q ? (s = (0, r.jsx)(m.b, {
                    virtualRef: {
                        current: Q
                    }
                }), C[12] = Q, C[13] = s) : s = C[13], C[14] !== M || C[15] !== I ? (i = I ?? (0, r.jsx)(f.a.HeaderButton, {
                    pressed: M
                }), C[14] = M, C[15] = I, C[16] = i) : i = C[16], C[17] !== i ? (p = (0, r.jsx)(m.e, {
                    ref: W,
                    asChild: !0,
                    children: i
                }), C[17] = i, C[18] = p) : p = C[18], C[19] !== z || C[20] !== P || C[21] !== _ || C[22] !== U || C[23] !== M || C[24] !== F || C[25] !== K || C[26] !== j || C[27] !== O ? (y = M && (0, r.jsx)(v, {
                    getPaneElement: U,
                    className: "z-50 flex flex-col text-default outline-hidden",
                    animate: z,
                    align: "end",
                    alignOffset: null == _ ? K : 0,
                    collisionPadding: K,
                    side: "bottom",
                    sideOffset: null == _ ? K : 0,
                    unstyled: !0,
                    onOpenAutoFocus: e => {
                        N.current = !1, (O || q.current) && e.preventDefault(), q.current = !1
                    },
                    onCloseAutoFocus: e => {
                        if (O) e.preventDefault();
                        else if (!N.current && null != j) {
                            let t = document.getElementById(j);
                            t?.focus({
                                preventScroll: !0
                            }), null != t && document.activeElement === t && e.preventDefault()
                        }
                    },
                    onInteractOutside: e => {
                        e.target instanceof Node && _?.contains(e.target) && e.preventDefault(), F && b(e.target) && e.preventDefault(), e.defaultPrevented || (N.current = !0)
                    },
                    onFocusOutside: e => {
                        let t = e.detail.originalEvent.relatedTarget;
                        F && (null == t || b(t)) && "composer" === (0, u.p)(e.target) && e.preventDefault(), e.target instanceof Element && e.target.matches('[role="tabpanel"][data-app-shell-tab-panel-controller="right"]') && e.preventDefault()
                    },
                    onPointerDownOutside: x,
                    style: {
                        maxHeight: "none",
                        maxWidth: "none"
                    },
                    children: P
                }), C[19] = z, C[20] = P, C[21] = _, C[22] = U, C[23] = M, C[24] = F, C[25] = K, C[26] = j, C[27] = O, C[28] = y) : y = C[28], C[29] !== y ? (w = (0, r.jsx)(l.a, {
                    children: y
                }), C[29] = y, C[30] = w) : w = C[30], C[31] !== M || C[32] !== D || C[33] !== p || C[34] !== w || C[35] !== s ? (S = (0, r.jsxs)(m.a, {
                    open: M,
                    onOpenChange: D,
                    children: [s, p, w]
                }), C[31] = M, C[32] = D, C[33] = p, C[34] = w, C[35] = s, C[36] = S) : S = C[36], S
            }
        })
    }),
    BdYu: (function(e, t, n) {
        var r = n("QosV"),
            a = n("p5Yg"),
            l = n("B7sF"),
            o = n("K45w"),
            s = n("jCHb"),
            i = n("RgeH"),
            c = n("Q840"),
            d = n("zd8w"),
            u = n("QcW8"),
            h = n("gbrq"),
            m = n("kl6F"),
            p = n("eGPX"),
            g = n("csXo"),
            f = n("w2yL"),
            y = n("KWzM"),
            x = n("GaCK");

        function v(e) {
            return e.isPopoverOpen ? {
                ...e,
                isPopoverOpen: !1
            } : e
        }

        function b(e, t, n, r, a, l, o) {
            return w({
                centeredPanelGap: o,
                isSummaryPanelPinned: t && (l ?? (0, h.z)(!0 === n ? e.get(h.N) : e.get(h.C, n), n)),
                floatingPanelWidth: a,
                mainContentTargetWidth: r
            })
        }

        function w(e) {
            let {
                centeredPanelGap: t,
                isSummaryPanelPinned: n,
                floatingPanelWidth: r,
                mainContentTargetWidth: a
            } = e, l = (0, f.c)(a, r, t);
            return null != r && "overlay" === l ? (0, f.b)({
                displayMode: (0, f.c)(a),
                isPinned: n
            }) : (0, f.b)({
                displayMode: l,
                isPinned: null != r || n,
                panelWidth: r
            })
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, a, l, v, S, C, k, P, _, M, E, T, D, j, A, I, z = (0, r.c)(77);
                z[0] !== e ? (t = void 0 === e ? {} : e, z[0] = e, z[1] = t) : t = z[1];
                let {
                    centeredPanelGap: F,
                    contentShiftResetKey: O,
                    controlledIsOpen: B,
                    floatingPanelWidth: R,
                    getCurrentPinStateKey: L,
                    isEnabled: W,
                    pane: N,
                    pinStateKey: q
                } = t, K = void 0 === W || W, H = void 0 === q || q, U = (0, c.y)(m.a), G = (0, c.z)(null == B && !0 === H ? h.N : null), Q = (0, c.x)(null == B && !0 !== H ? h.C : null, !0 !== H && H);
                z[2] !== B || z[3] !== Q || z[4] !== G || z[5] !== H ? (n = B ?? (0, h.z)(!0 === H ? G : Q, H), z[2] = B, z[3] = Q, z[4] = G, z[5] = H, z[6] = n) : n = z[6];
                let V = n,
                    $ = (0, c.z)(h.h),
                    X = (0, c.z)(u.D),
                    Z = (0, c.z)(x.b),
                    Y = K && V,
                    J = R ?? 300,
                    ee = K && null == R && (B ?? (Z.isPopoverOpen || "boolean" != typeof H && V)),
                    et = (0, c.z)(p.c),
                    {
                        targetWidth: en,
                        width: er
                    } = (0, g.a)(void 0 === N ? "chat" : N);
                z[7] !== F || z[8] !== R || z[9] !== Y || z[10] !== en ? (a = w({
                    centeredPanelGap: F,
                    isSummaryPanelPinned: Y,
                    floatingPanelWidth: R,
                    mainContentTargetWidth: en.get()
                }), z[7] = F, z[8] = R, z[9] = Y, z[10] = en, z[11] = a) : a = z[11];
                let ea = (0, o.a)(a);
                z[12] !== en ? (l = e => en.on("change", e), z[12] = en, z[13] = l) : l = z[13], z[14] !== F || z[15] !== en || z[16] !== J ? (v = () => (0, f.c)(en.get(), J, F), z[14] = F, z[15] = en, z[16] = J, z[17] = v) : v = z[17], z[18] !== l || z[19] !== v ? (S = {
                    subscribe: l,
                    getSnapshot: v
                }, z[18] = l, z[19] = v, z[20] = S) : S = z[20];
                let el = S,
                    eo = (0, d.useSyncExternalStore)(el.subscribe, el.getSnapshot, el.getSnapshot),
                    es = (0, d.useRef)(null);
                z[21] !== ea ? (C = ea.get(), z[21] = ea, z[22] = C) : C = z[22], z[23] !== en ? (k = en.get(), z[23] = en, z[24] = k) : k = z[24], z[25] !== C || z[26] !== k ? (P = {
                    offset: C,
                    width: k
                }, z[25] = C, z[26] = k, z[27] = P) : P = z[27];
                let ei = (0, d.useRef)(P),
                    ec = (0, d.useRef)(!1),
                    ed = (0, d.useRef)(O),
                    eu = (0, d.useRef)($),
                    eh = (0, d.useRef)(X),
                    em = Y && null == R;
                z[28] !== eo || z[29] !== ee || z[30] !== em ? (_ = (0, f.a)({
                    displayMode: eo,
                    isPinned: em,
                    isPopoverOpen: ee
                }), z[28] = eo, z[29] = ee, z[30] = em, z[31] = _) : _ = z[31];
                let ep = _;
                return z[32] !== F || z[33] !== ea || z[34] !== O || z[35] !== B || z[36] !== R || z[37] !== L || z[38] !== X || z[39] !== K || z[40] !== $ || z[41] !== en || z[42] !== H || z[43] !== U ? (M = () => {
                    let e = eu.current !== $,
                        t = eh.current !== X;
                    if (!ec.current && ed.current === O && !e && !t) return;
                    ec.current = !1, ed.current = O, eu.current = $, eh.current = X;
                    let n = b(U, K, L?.() ?? H, en.get(), R, B, F);
                    ei.current = {
                        offset: n,
                        width: en.get()
                    }, es.current?.(), ea.jump(n)
                }, E = [F, ea, O, B, R, L, X, K, en, H, $, U], z[32] = F, z[33] = ea, z[34] = O, z[35] = B, z[36] = R, z[37] = L, z[38] = X, z[39] = K, z[40] = $, z[41] = en, z[42] = H, z[43] = U, z[44] = M, z[45] = E) : (M = z[44], E = z[45]), (0, d.useLayoutEffect)(M, E), z[46] !== F || z[47] !== er || z[48] !== ea || z[49] !== B || z[50] !== R || z[51] !== L || z[52] !== K || z[53] !== en || z[54] !== H || z[55] !== U || z[56] !== et ? (T = () => {
                    let e = (e, t) => {
                        let n = b(U, K, L?.() ?? H, e, R, B, F),
                            r = ei.current,
                            a = ea.get();
                        if (r.offset === n && (a === n || r.width === e && !t)) return;
                        if (ei.current = {
                                offset: n,
                                width: e
                            }, es.current?.(), t || 0 === e || a === n) return void ea.jump(n);
                        let l = er.get();
                        if (l === e) {
                            let e = (0, s.a)(ea, n, y.a),
                                t = document.activeViewTransition;
                            if (null != t) {
                                e.pause();
                                let n = () => e.play();
                                t.ready.then(n, n)
                            }
                            es.current = () => e.stop();
                            return
                        }
                        let o = (0, i.a)([l, e], [a, n]),
                            c = er.on("change", e => {
                                let t = o(e);
                                ea.set(t), t === n && queueMicrotask(c)
                            });
                        es.current = c
                    };
                    return e(en.get(), et), en.on("change", t => {
                        e(t, et || 0 === en.getPrevious() || U.get(h.h) !== eu.current)
                    })
                }, z[46] = F, z[47] = er, z[48] = ea, z[49] = B, z[50] = R, z[51] = L, z[52] = K, z[53] = en, z[54] = H, z[55] = U, z[56] = et, z[57] = T) : T = z[57], z[58] !== F || z[59] !== er || z[60] !== ea || z[61] !== B || z[62] !== R || z[63] !== L || z[64] !== K || z[65] !== Y || z[66] !== en || z[67] !== H || z[68] !== U || z[69] !== et ? (D = [F, er, ea, B, R, L, K, Y, en, H, U, et], z[58] = F, z[59] = er, z[60] = ea, z[61] = B, z[62] = R, z[63] = L, z[64] = K, z[65] = Y, z[66] = en, z[67] = H, z[68] = U, z[69] = et, z[70] = D) : D = z[70], (0, d.useLayoutEffect)(T, D), z[71] === Symbol.for("react.memo_cache_sentinel") ? (j = () => () => {
                    ec.current = !0, es.current?.()
                }, A = [], z[71] = j, z[72] = A) : (j = z[71], A = z[72]), (0, d.useLayoutEffect)(j, A), z[73] !== ea || z[74] !== eo || z[75] !== ep ? (I = {
                    contentShift: ea,
                    displayMode: eo,
                    ...ep
                }, z[73] = ea, z[74] = eo, z[75] = ep, z[76] = I) : I = z[76], I
            },
            b: function(e, t) {
                let n, o, s, i, u, m, p = (0, r.c)(15),
                    y = void 0 !== t && t,
                    b = (0, c.z)(h.h),
                    w = (0, c.z)(h.q),
                    {
                        targetWidth: S
                    } = (0, g.a)();
                p[0] !== y || p[1] !== S || p[2] !== e ? (n = () => {
                    var t, n;
                    t = e, n = y ? "overlay" : (0, f.c)(S.get()), t.set(x.b, e => {
                        let t = "overlay" === n && e.isPopoverOpen;
                        return e.displayMode === n && e.isPopoverOpen === t ? e : {
                            displayMode: n,
                            isPopoverOpen: t
                        }
                    })
                }, p[0] = y, p[1] = S, p[2] = e, p[3] = n) : n = p[3];
                let C = n;
                p[4] !== C ? (o = () => {
                    a.b.update(C)
                }, p[4] = C, p[5] = o) : o = p[5], (0, l.a)(S, "change", o), p[6] !== C ? (s = () => (C(), () => (0, a.a)(C)), p[6] = C, p[7] = s) : s = p[7], p[8] !== b || p[9] !== w || p[10] !== C ? (i = [b, w, C], p[8] = b, p[9] = w, p[10] = C, p[11] = i) : i = p[11], (0, d.useLayoutEffect)(s, i), p[12] !== e ? (u = () => () => {
                    e.set(x.b, v)
                }, m = [e], p[12] = e, p[13] = u, p[14] = m) : (u = p[13], m = p[14]), (0, d.useLayoutEffect)(u, m)
            }
        })
    }),
    csXo: (function(e, t, n) {
        var r = n("QosV"),
            a = n("K45w"),
            l = n("Q840"),
            o = n("zd8w"),
            s = n("I7bK"),
            i = n("pZMh");
        n.d(t, {}, {
            a: function(e) {
                let t, n = (0, r.c)(8),
                    c = void 0 === e ? "chat" : e,
                    d = (0, o.useContext)(s.c),
                    u = (0, a.a)(0),
                    h = "chat" === c && d?.hasPrimaryPane === !0,
                    m = (0, l.z)(!!h && i.m);
                if ("content" === c || h) {
                    let e, t = d?.secondaryPaneLayout,
                        r = "content" === c || m,
                        a = r ? t?.element : null,
                        l = r ? t?.targetWidth ?? u : u,
                        o = t?.width ?? u;
                    return n[0] !== a || n[1] !== l || n[2] !== o ? (e = {
                        element: a,
                        targetWidth: l,
                        width: o
                    }, n[0] = a, n[1] = l, n[2] = o, n[3] = e) : e = n[3], e
                }
                let p = d?.mainContentTargetWidth ?? u,
                    g = d?.isContentFullWidth ? null : void 0,
                    f = d?.mainPaneWidth ?? p;
                return n[4] !== g || n[5] !== f || n[6] !== p ? (t = {
                    element: g,
                    targetWidth: p,
                    width: f
                }, n[4] = g, n[5] = f, n[6] = p, n[7] = t) : t = n[7], t
            }
        })
    })
};