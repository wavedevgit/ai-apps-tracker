export const __rspack_esm_ids = [889807];
export const __webpack_modules__ = {
    TS05: (function(e, t, n) {
        var r = n("Q840"),
            a = n("tSEg");
        let s = (0, r.v)(a.a, e => !1, void 0, {
            autoDispose: 6e4
        });
        n.d(t, {}, {
            a: s
        })
    }),
    IL1g: (function(e, t, n) {
        var r = n("ABep"),
            a = n("QosV"),
            s = n("zd8w"),
            o = n("Wf1j"),
            i = n("ZtSy");
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
            let t, n, o = (0, a.c)(4),
                {
                    inDialog: c
                } = e,
                d = void 0 !== c && c;
            return o[0] !== d ? (t = l.map((e, t) => {
                let n = e.emphasize ? (0, r.jsx)("strong", {
                    children: e.label
                }) : e.label;
                return (0, r.jsxs)(s.Fragment, {
                    children: [t > 0 && (0, r.jsx)("span", {
                        "aria-hidden": "true",
                        children: "|"
                    }), e.href ? (0, r.jsx)(i.a, {
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
                let t, n, s, i = (0, a.c)(5),
                    {
                        inDialog: l
                    } = e,
                    d = void 0 !== l && l,
                    u = (0, o.a)();
                return "ko" !== new Intl.Locale(u.locale).language ? null : (i[0] !== d ? (t = (0, r.jsx)(c, {
                    inDialog: d
                }), i[0] = d, i[1] = t) : t = i[1], i[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, r.jsx)("p", {
                    children: "귀하가 19세 미만의 이용자로서 귀하의 법정대리인이 본 계약에 동의하지 않은 경우, 귀하 또는 귀하의 법정대리인은 계약을 취소할 수 있습니다."
                }), i[2] = n) : n = i[2], i[3] !== t ? (s = (0, r.jsxs)("div", {
                    className: "flex flex-col items-center gap-2 text-center text-xs text-secondary select-text",
                    children: [t, n]
                }), i[3] = t, i[4] = s) : s = i[4], s)
            },
            b: c
        })
    }),
    DWXw: (function(e, t, n) {
        n.d(t, {
            BrowserComposerDisclaimer: () => W,
            BrowserComposerDisclaimerMessage: () => H,
            a: () => V
        });
        var r = n("ABep"),
            a = n("QosV"),
            s = n("Q840"),
            o = n("Wf1j"),
            i = n("oyxz"),
            l = n("Qgfj"),
            c = n("rEML"),
            d = n("OFP1"),
            u = n("h6fL"),
            m = n("ipGa"),
            h = n("ZtSy");

        function p(e) {
            return (0, r.jsx)(h.a, {
                href: "https://openai.com/policies/privacy-policy/",
                initiator: "open_in_browser_bridge",
                openTarget: "external-browser",
                children: e
            })
        }

        function g(e) {
            let t, n, s, o, l = (0, a.c)(9),
                {
                    context: c
                } = e;
            l[0] !== c.businessName ? (t = c.businessName?.trim(), l[0] = c.businessName, l[1] = t) : t = l[1];
            let d = t;
            return l[2] !== d ? (n = (0, r.jsx)("p", {
                children: d ? (0, r.jsx)(i.a, {
                    id: "businessProfiles.agentChat.privacy.named",
                    defaultMessage: "This chat remains private. {businessName} can only see overall insights about how its AI agent is doing. <learnMore>Learn more</learnMore>",
                    values: {
                        businessName: d,
                        learnMore: p
                    }
                }) : (0, r.jsx)(i.a, {
                    id: "businessProfiles.agentChat.privacy.unnamed",
                    defaultMessage: "This chat remains private. This business can only see overall insights about how its AI agent is doing. <learnMore>Learn more</learnMore>",
                    values: {
                        learnMore: p
                    }
                })
            }), l[2] = d, l[3] = n) : n = l[3], l[4] !== c.notice ? (s = c.notice?.trim() ? (0, r.jsx)("p", {
                children: c.notice
            }) : null, l[4] = c.notice, l[5] = s) : s = l[5], l[6] !== n || l[7] !== s ? (o = (0, r.jsxs)("div", {
                className: "flex flex-col gap-1",
                children: [n, s]
            }), l[6] = n, l[7] = s, l[8] = o) : o = l[8], o
        }
        var f = n("YJm0"),
            y = n("fzVa"),
            b = n("dQRk"),
            w = n("g2p6"),
            x = n("jAnS"),
            v = n("AcSY"),
            k = n("Ho8f"),
            S = n("hZax"),
            _ = n("fNyS"),
            P = n("zd8w"),
            C = n("IL1g"),
            j = n("JNtf"),
            D = n("mUDD"),
            T = n("ibLK"),
            A = n("jVko"),
            M = n("zWHk");
        let E = new WeakSet;

        function F(e) {
            let t, n, s, o, l = (0, a.c)(10),
                {
                    children: c
                } = e,
                d = (0, T.a)("(width < 640px)"),
                u = (0, P.useContext)(A.a);
            l[0] !== u ? (t = e => {
                if (null == u) return L;
                let t = () => {
                        E.add(u), e()
                    },
                    n = u.view.dom;
                n.addEventListener("input", t, !0);
                let r = (0, M.b)(u.view, t => {
                    t && e()
                });
                return () => {
                    n.removeEventListener("input", t, !0), r()
                }
            }, l[0] = u, l[1] = t) : t = l[1];
            let m = t;
            l[2] !== u ? (n = () => null == u || !u.hasText() && !E.has(u), l[2] = u, l[3] = n) : n = l[3];
            let h = n,
                p = (0, P.useSyncExternalStore)(m, h, I);
            if (!d) {
                let e;
                return l[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(C.b, {}), l[4] = e) : e = l[4], e
            }
            return l[5] !== p ? (s = p && (0, r.jsx)(j.a, {
                size: "responsiveSheet",
                triggerContent: (0, r.jsx)("button", {
                    className: "inline-flex min-h-6 min-w-6 cursor-interaction items-center justify-center text-xs text-secondary underline select-none",
                    type: "button",
                    children: (0, r.jsx)(i.a, {
                        ...O.companyInformation
                    })
                }),
                contentProps: {
                    "aria-describedby": void 0
                },
                children: (0, r.jsxs)(D.b, {
                    children: [(0, r.jsx)(D.d, {
                        title: (0, r.jsx)(j.e, {
                            children: (0, r.jsx)(i.a, {
                                ...O.companyInformation
                            })
                        })
                    }), (0, r.jsx)(D.e, {
                        children: (0, r.jsx)(C.b, {
                            inDialog: !0
                        })
                    })]
                })
            }), l[5] = p, l[6] = s) : s = l[6], l[7] !== c || l[8] !== s ? (o = (0, r.jsxs)("div", {
                className: "flex flex-col items-center gap-1",
                children: [c, s]
            }), l[7] = c, l[8] = s, l[9] = o) : o = l[9], o
        }

        function I() {
            return !0
        }

        function L() {}
        let O = (0, l.f)({
            companyInformation: {
                id: "chatgpt.compliance.korean_regulatory.company_information.label",
                defaultMessage: "Company info"
            }
        });
        var B = n("md8w"),
            z = n("dBtq"),
            N = n("RGWz");

        function W(e) {
            let t, n, o, i, l = (0, a.c)(10);
            l[0] !== e ? ({
                supportsMessageDisclosures: n,
                ...t
            } = e, l[0] = e, l[1] = t, l[2] = n) : (t = l[1], n = l[2]);
            let c = void 0 !== n && n,
                d = (0, s.z)(B.b),
                u = (0, s.x)(z.a, t.conversationId);
            if ("home" !== t.placement && (c && d || !u)) return null;
            let m = "home" === t.placement ? "empty:hidden" : void 0,
                h = t.placement ?? "thread",
                p = "home" === t.placement ? void 0 : R;
            return l[3] !== t || l[4] !== p ? (o = (0, r.jsx)(H, {
                ...t,
                renderOrdinaryDisclaimer: p
            }), l[3] = t, l[4] = p, l[5] = o) : o = l[5], l[6] !== m || l[7] !== h || l[8] !== o ? (i = (0, r.jsx)(k.a, {
                browser: !0,
                children: (0, r.jsx)(_.a, {
                    className: m,
                    placement: h,
                    children: o
                })
            }), l[6] = m, l[7] = h, l[8] = o, l[9] = i) : i = l[9], i
        }

        function R(e) {
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(N.b, {
                        children: e
                    })
                }), null]
            })
        }

        function H(e) {
            let t, n, l, d = (0, a.c)(28),
                {
                    aiServiceDisclaimer: u,
                    conversationId: h,
                    hasUserMessage: p,
                    isTemporaryChat: f,
                    ordinaryDisclaimer: y,
                    pendingWorkspaceDisclaimer: w,
                    placement: k,
                    regulatedConnectorKindOverride: S,
                    renderOrdinaryDisclaimer: _
                } = e,
                P = void 0 === k ? "thread" : k,
                C = (0, o.a)(),
                {
                    search: j
                } = (0, c.X)(),
                {
                    data: D
                } = (0, v.f)(),
                T = (0, s.x)(b.u, h ?? null),
                A = (0, s.x)(b.W, T?.status === "ready" && void 0 === S ? h ?? null : null);
            d[0] !== p || d[1] !== f || d[2] !== P || d[3] !== j ? (t = (f ?? (0, x.i)(j)) && !(p ?? "thread" === P), d[0] = p, d[1] = f, d[2] = P, d[3] = j, d[4] = t) : t = d[4];
            let M = t;
            if (null == D) return null == T ? w ?? null : null;
            if (null != T) {
                let e;
                if ("ready" !== T.status) return null;
                let t = void 0 !== S ? S : A;
                if (null != t) {
                    let e;
                    return d[5] !== t || d[6] !== y ? (e = (0, r.jsx)(V, {
                        ordinaryDisclaimer: y,
                        regulatedConnectorKind: t
                    }), d[5] = t, d[6] = y, d[7] = e) : e = d[7], e
                }
                return d[8] !== T.context ? (e = (0, r.jsx)(g, {
                    context: T.context
                }), d[8] = T.context, d[9] = e) : e = d[9], e
            }
            if ("workspace" === D.structure) {
                let e;
                return d[10] !== D || d[11] !== w || d[12] !== _ || d[13] !== M ? (e = (0, r.jsx)(q, {
                    account: D,
                    pendingWorkspaceDisclaimer: w,
                    isTemporaryChat: M,
                    renderOrdinaryDisclaimer: _
                }), d[10] = D, d[11] = w, d[12] = _, d[13] = M, d[14] = e) : e = d[14], e
            }
            d[15] !== y || d[16] !== _ ? (n = _?.(y ?? (0, r.jsx)(i.a, {
                ...Z.personal
            })) ?? y, d[15] = y, d[16] = _, d[17] = n) : n = d[17], d[18] !== D.id || d[19] !== u || d[20] !== h || d[21] !== P || d[22] !== S || d[23] !== M || d[24] !== n ? (l = (0, r.jsx)(U, {
                accountId: D.id,
                aiServiceDisclaimer: u,
                conversationId: h,
                isTemporaryChat: M,
                ordinaryDisclaimer: n,
                placement: P,
                regulatedConnectorKindOverride: S
            }), d[18] = D.id, d[19] = u, d[20] = h, d[21] = P, d[22] = S, d[23] = M, d[24] = n, d[25] = l) : l = d[25];
            let E = l;
            if ("home" === P && !p && !M && !(0, m.a)() && "ko" === new Intl.Locale(C.locale).language) {
                let e;
                return d[26] !== E ? (e = (0, r.jsx)(F, {
                    children: E
                }), d[26] = E, d[27] = e) : e = d[27], e
            }
            return E
        }

        function U(e) {
            let t, n = (0, a.c)(16),
                {
                    accountId: s,
                    aiServiceDisclaimer: o,
                    conversationId: i,
                    isTemporaryChat: l,
                    ordinaryDisclaimer: c,
                    placement: d,
                    regulatedConnectorKindOverride: u
                } = e,
                m = (0, S.f)("1831960162");
            if (!(0, S.g)("1831960162") && !m) {
                let e;
                return n[0] !== s || n[1] !== o || n[2] !== i || n[3] !== l || n[4] !== c || n[5] !== d || n[6] !== u ? (e = (0, r.jsx)(G, {
                    accountId: s,
                    aiServiceDisclaimer: o,
                    conversationId: i,
                    isTemporaryChat: l,
                    ordinaryDisclaimer: c,
                    placement: d,
                    regulatedConnectorKindOverride: u
                }), n[0] = s, n[1] = o, n[2] = i, n[3] = l, n[4] = c, n[5] = d, n[6] = u, n[7] = e) : e = n[7], e
            }
            return n[8] !== o || n[9] !== i || n[10] !== l || n[11] !== c || n[12] !== d || n[13] !== u || n[14] !== m ? (t = (0, r.jsx)(K, {
                aiServiceDisclaimer: o,
                conversationId: i,
                isTemporaryChat: l,
                ordinaryDisclaimer: c,
                placement: d,
                regulatedConnectorKindOverride: u,
                showAiServiceDisclaimer: m
            }), n[8] = o, n[9] = i, n[10] = l, n[11] = c, n[12] = d, n[13] = u, n[14] = m, n[15] = t) : t = n[15], t
        }

        function G(e) {
            let t, n = (0, a.c)(8),
                {
                    accountId: o,
                    aiServiceDisclaimer: i,
                    conversationId: l,
                    isTemporaryChat: c,
                    ordinaryDisclaimer: d,
                    placement: m,
                    regulatedConnectorKindOverride: h
                } = e,
                {
                    userId: p
                } = (0, u.a)(),
                g = (0, s.z)(w.n),
                {
                    data: f
                } = (0, s.z)(y.b),
                b = null != p && g === o,
                x = (0, S.f)(!!b && (null == f || "under_18" === f.age_status) && "1639821169");
            return b ? (n[0] !== i || n[1] !== l || n[2] !== c || n[3] !== d || n[4] !== m || n[5] !== h || n[6] !== x ? (t = (0, r.jsx)(K, {
                aiServiceDisclaimer: i,
                conversationId: l,
                isTemporaryChat: c,
                ordinaryDisclaimer: d,
                placement: m,
                regulatedConnectorKindOverride: h,
                showAiServiceDisclaimer: x
            }), n[0] = i, n[1] = l, n[2] = c, n[3] = d, n[4] = m, n[5] = h, n[6] = x, n[7] = t) : t = n[7], t) : null
        }

        function K(e) {
            let t, n, s = (0, a.c)(10),
                {
                    aiServiceDisclaimer: o,
                    conversationId: l,
                    isTemporaryChat: c,
                    ordinaryDisclaimer: d,
                    placement: u,
                    regulatedConnectorKindOverride: h,
                    showAiServiceDisclaimer: p
                } = e;
            s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, m.a)(), s[0] = t) : t = s[0];
            let g = t;
            if (c) {
                let e;
                return s[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(i.a, {
                    ...Z.temporaryChat
                }), s[1] = e) : e = s[1], e
            }
            if (p) {
                let e;
                return s[2] !== o ? (e = o ?? (0, r.jsx)(i.a, {
                    ...Z.aiService
                }), s[2] = o, s[3] = e) : e = s[3], e
            }
            if (void 0 !== h) {
                let e;
                return null == h && (g || "home" === u) ? null : (s[4] !== d || s[5] !== h ? (e = (0, r.jsx)(V, {
                    ordinaryDisclaimer: d,
                    regulatedConnectorKind: h
                }), s[4] = d, s[5] = h, s[6] = e) : e = s[6], e)
            }
            return "home" === u ? null : (s[7] !== l || s[8] !== d ? (n = (0, r.jsx)(Q, {
                conversationId: l,
                isBrowserSideChat: g,
                ordinaryDisclaimer: d
            }), s[7] = l, s[8] = d, s[9] = n) : n = s[9], n)
        }

        function Q(e) {
            let t, n = (0, a.c)(3),
                {
                    conversationId: o,
                    isBrowserSideChat: i,
                    ordinaryDisclaimer: l
                } = e,
                c = (0, s.x)(b.W, o ?? null);
            return i && null == c ? null : (n[0] !== l || n[1] !== c ? (t = (0, r.jsx)(V, {
                ordinaryDisclaimer: l,
                regulatedConnectorKind: c
            }), n[0] = l, n[1] = c, n[2] = t) : t = n[2], t)
        }

        function V(e) {
            let t, n = (0, a.c)(4),
                {
                    ordinaryDisclaimer: s,
                    regulatedConnectorKind: o
                } = e;
            if ("finance" === o) {
                let e;
                return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(i.a, {
                    ...Z.finance
                }), n[0] = e) : e = n[0], e
            }
            if ("health" === o) {
                let e;
                return n[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(i.a, {
                    ...Z.health
                }), n[1] = e) : e = n[1], e
            }
            return n[2] !== s ? (t = s ?? (0, r.jsx)(i.a, {
                ...Z.personal
            }), n[2] = s, n[3] = t) : t = n[3], t
        }

        function q(e) {
            let t, n = (0, a.c)(10),
                {
                    account: o,
                    pendingWorkspaceDisclaimer: l,
                    isTemporaryChat: c,
                    renderOrdinaryDisclaimer: u
                } = e,
                h = (0, m.a)(),
                {
                    data: p
                } = (0, s.x)(f.a, o.id),
                {
                    data: g
                } = (0, s.x)(d.m, o.id);
            if (null == p || null != l && null == g) return l ?? null;
            let y = "early-access" === p.account.workspace_type;
            if (!y && null == g) return null;
            let b = p.account.name ?? o.name;
            if (g?.beta_settings.training_allowed === !0) {
                let e;
                n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(i.a, {
                    ...Z.workspaceResearchPartner,
                    values: {
                        link: X
                    }
                }), n[0] = e) : e = n[0], t = e
            } else if (y) {
                let e;
                n[1] !== b ? (e = null == b ? (0, r.jsx)(i.a, {
                    ...Z.earlyAccessWorkspaceWithoutName
                }) : (0, r.jsx)(i.a, {
                    ...Z.earlyAccessWorkspace,
                    values: {
                        workspaceName: b
                    }
                }), n[1] = b, n[2] = e) : e = n[2], t = e
            } else if (c) {
                let e;
                n[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(i.a, {
                    ...Z.workspaceTemporaryChat
                }), n[3] = e) : e = n[3], t = e
            } else if (null != p.account.ekm_config) {
                let e;
                n[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(i.a, {
                    ...Z.encryptedWorkspace
                }), n[4] = e) : e = n[4], t = e
            } else if ("k12" === o.plan_type) {
                let e;
                n[5] !== b ? (e = null == b ? (0, r.jsx)(i.a, {
                    ...Z.k12WorkspaceWithoutName
                }) : (0, r.jsx)(i.a, {
                    ...Z.k12Workspace,
                    values: {
                        workspaceName: b
                    }
                }), n[5] = b, n[6] = e) : e = n[6], t = e
            } else {
                let e, a;
                return h ? null : (n[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(i.a, {
                    ...Z.workspace
                }), n[7] = e) : e = n[7], t = e, n[8] !== u ? (a = u?.(t) ?? t, n[8] = u, n[9] = a) : a = n[9], a)
            }
            return t
        }

        function X(e) {
            return (0, r.jsx)(h.a, {
                className: "cursor-interaction underline underline-offset-2 hover:text-default",
                href: "https://help.openai.com/articles/20001245",
                initiator: "open_in_browser_bridge",
                isBrowserEnabled: !1,
                children: e
            })
        }
        let Z = (0, l.f)({
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
            a = n("lAQI"),
            s = n("Cslg"),
            o = n("OWtl"),
            i = n("cX6x"),
            l = n("O666");
        let c = "623291997",
            d = a.E().nonnegative().catch(2),
            u = a.E().nonnegative().catch(24),
            m = (0, r.c)(o.a, e => {
                let {
                    get: t
                } = e, n = t(l.a, c), r = null == n ? (0, i.d)(c)?.value : void 0, a = null != t(s.k) && (n?.get("app_disclosure_below_message_actions", !1) ?? r?.app_disclosure_below_message_actions === !0), o = a ? n?.get("app_disclosure_impression_seconds", 2) ?? r?.app_disclosure_impression_seconds : 2, m = a ? n?.get("app_disclosure_cooldown_hours", 24) ?? r?.app_disclosure_cooldown_hours : 24;
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
                    cooldownMs: 60 * u.parse(m) * 60 * 1e3,
                    hideOnSend: !a || (n?.get("app_hide_disclosure_on_send", !0) ?? r?.app_hide_disclosure_on_send !== !1)
                }
            }, {
                isEqual: (e, t) => e.enabled === t.enabled && e.aboveActions === t.aboveActions && e.inlineWithActions === t.inlineWithActions && e.centered === t.centered && e.smallerFontSize === t.smallerFontSize && e.workModeEnabled === t.workModeEnabled && e.standardOnlyForSessionSends === t.standardOnlyForSessionSends && e.showOnFirstMessage === t.showOnFirstMessage && e.impressionMs === t.impressionMs && e.cooldownMs === t.cooldownMs && e.hideOnSend === t.hideOnSend
            }),
            h = (0, r.c)(o.a, e => {
                let {
                    get: t
                } = e;
                return t(m).enabled
            });
        n.d(t, {}, {
            a: m,
            b: h
        })
    }),
    dBtq: (function(e, t, n) {
        n.d(t, {
            a: () => x,
            b: () => v,
            c: () => S
        });
        var r = n("Q840"),
            a = n("lAQI"),
            s = n("Ow2S"),
            o = n("ISgP"),
            i = n("x4uR"),
            l = n("aFoA"),
            c = n("dQRk"),
            d = n("p0Ph"),
            u = n("OWtl"),
            m = n("Nwp9"),
            h = n("md8w"),
            p = n("AuIy"),
            g = n("hx97"),
            f = n("lX86");
        let y = a.F({
                at: a.E().nonnegative(),
                messageId: a.L()
            }),
            b = (0, m.b)("message-disclosure-standard-impression", null, {
                coerceStoredValue: e => y.safeParse(e).data ?? null
            }),
            w = (0, r.u)(u.a, () => new Map),
            x = (0, r.d)(u.a, (e, t) => {
                let {
                    get: n
                } = t, r = null == e ? void 0 : n(c.y, e);
                return "tpp" !== r && "flora" !== r || n(h.a).workModeEnabled
            }),
            v = (0, r.d)(u.a, (e, t) => {
                let {
                    get: n,
                    scope: r
                } = t, a = n(h.a);
                if (!a.enabled || !n(x, e)) return {};
                let u = n(l.a, e) ?? e,
                    m = n(s.j, u);
                if (m && a.hideOnSend) return {};
                let y = n(c.N, e);
                if (null == y) return {};
                let v = n(c.T, e),
                    k = null != v && n(i.b, v).data?.gizmo.gizmo_snorlax_type === "potion" ? "health" : null,
                    S = r.get(b),
                    _ = Date.now(),
                    P = n(c.J, e),
                    C = null;
                P ? C = n(o.a, e) : m && (C = []);
                let j = a.standardOnlyForSessionSends ? n(d.x, (0, l.d)(n, e)) : void 0;
                return function(e, t) {
                    let n, {
                            hideOnSend: r,
                            readyLatestResponseMessageIds: a,
                            projectKind: s,
                            canShowStandard: o,
                            standardDecisions: i,
                            showOnFirstMessage: l,
                            sessionStartSeconds: c,
                            isLocallySentPrompt: d
                        } = t,
                        u = (0, p.a)(e),
                        m = {},
                        h = s ?? "standard",
                        y = !1,
                        b = !1,
                        w = () => {
                            if (null != n) {
                                if ("standard" !== h) m[h] = n;
                                else if (null == c || y) {
                                    let e = i.get(n);
                                    null == e && (e = l && !b || o(n), i.set(n, e)), e && (m.standard = n)
                                }
                                b = !0, n = void 0
                            }
                        };
                    for (let e of u) {
                        var x;
                        "user" === (x = e).author.role && (0, g.o)(x) && !(0, p.n)(x) && (w(), y = null != c && (null == e.create_time ? null != e.id && d?.(e.id) === !0 : e.create_time >= c), h = s ?? "standard", r && (delete m.standard, delete m.health, delete m.finance)), h = (0, f.b)(e) ?? h, (0, g.l)(e) && (n = e.id)
                    }
                    return null != n && (null == a || a.includes(n)) && w(), m
                }({
                    mapping: y,
                    current_node: n(c.C, e)
                }, {
                    hideOnSend: a.hideOnSend,
                    readyLatestResponseMessageIds: C,
                    projectKind: k,
                    canShowStandard: e => {
                        var t, n, r, s;
                        return t = e, n = S, r = a.cooldownMs, s = _, null == n || n.messageId === t || 0 === r || s < n.at || s - n.at >= r
                    },
                    standardDecisions: n(w),
                    showOnFirstMessage: a.showOnFirstMessage,
                    sessionStartSeconds: a.standardOnlyForSessionSends ? performance.timeOrigin / 1e3 : void 0,
                    isLocallySentPrompt: e => null != j && Object.hasOwn(j, e)
                })
            }, {
                isEqual: (e, t) => e.standard === t.standard && e.health === t.health && e.finance === t.finance
            }),
            k = (0, r.d)(u.a, (e, t) => {
                let {
                    conversationId: n,
                    messageId: r
                } = e, {
                    get: a
                } = t, s = a(v, n);
                return s.health === r ? "health" : s.finance === r ? "finance" : s.standard === r ? "standard" : null
            });

        function S(e, t, n) {
            "standard" === e.get(k, {
                conversationId: t,
                messageId: n
            }) && e.set(b, {
                at: Date.now(),
                messageId: n
            })
        }
    }),
    hkBU: (function(e, t, n) {
        var r = n("ABep"),
            a = n("QosV"),
            s = n("zd8w"),
            o = n("oyxz");
        n.d(t, {}, {
            a: function(e) {
                let t, n, i, l, c, d, u, m, h, p = (0, a.c)(15),
                    {
                        onNavigate: g
                    } = e,
                    f = (0, s.useRef)(null),
                    y = (0, s.useRef)(null),
                    [b, w] = (0, s.useState)(!1);
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
                }, n = [], p[0] = t, p[1] = n) : (t = p[0], n = p[1]), (0, s.useEffect)(t, n), p[2] === Symbol.for("react.memo_cache_sentinel") ? (i = () => y.current?.abort(), p[2] = i) : i = p[2], p[3] !== g ? (l = e => {
                    y.current?.abort();
                    let t = e.currentTarget;
                    t.tabIndex = -1;
                    let n = new AbortController;
                    y.current = n, w(!1), g(n.signal).then(e => {
                        !n.signal.aborted && t.isConnected && t.ownerDocument.activeElement === t && (e?.isConnected ? e.focus({
                            preventScroll: !0
                        }) : w(!0))
                    })
                }, p[3] = g, p[4] = l) : l = p[4], p[5] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, r.jsx)(o.a, {
                    id: "codex.conversation.latestResponse",
                    defaultMessage: "Latest response"
                }), p[5] = c) : c = p[5], p[6] !== l ? (d = (0, r.jsx)("h4", {
                    ref: f,
                    className: "sr-only m-0 select-none",
                    tabIndex: 0,
                    onBlur: i,
                    onFocus: l,
                    children: c
                }), p[6] = l, p[7] = d) : d = p[7], p[8] !== b ? (u = b ? (0, r.jsx)(o.a, {
                    id: "codex.conversation.latestResponseUnavailable",
                    defaultMessage: "No response available"
                }) : null, p[8] = b, p[9] = u) : u = p[9], p[10] !== u ? (m = (0, r.jsx)("span", {
                    className: "sr-only m-0",
                    role: "status",
                    children: u
                }), p[10] = u, p[11] = m) : m = p[11], p[12] !== d || p[13] !== m ? (h = (0, r.jsxs)(r.Fragment, {
                    children: [d, m]
                }), p[12] = d, p[13] = m, p[14] = h) : h = p[14], h
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
            s = n("zd8w"),
            o = n("Wf1j"),
            i = n("oyxz");
        let l = (0, (n("Qgfj")).f)({
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
            let t, n, d, g, f, y, b, w, x = (0, a.c)(20),
                {
                    sentAtMs: v,
                    nowMs: k
                } = e,
                S = (0, o.a)(),
                [_] = (0, s.useState)(h);
            if (!Number.isFinite(v)) return null;
            if (x[0] !== S || x[1] !== _ || x[2] !== k || x[3] !== v) {
                let {
                    date: e,
                    time: r,
                    includeAt: a
                } = (0, c.c)(S, new Date(v), new Date(k ?? _));
                n = e, f = r, d = a ? l.older : l.recent, t = p, g = S.formatMessage(d, {
                    date: n,
                    time: f,
                    day: m
                }), x[0] = S, x[1] = _, x[2] = k, x[3] = v, x[4] = t, x[5] = n, x[6] = d, x[7] = g, x[8] = f
            } else t = x[4], n = x[5], d = x[6], g = x[7], f = x[8];
            return x[9] !== n || x[10] !== f ? (y = {
                date: n,
                time: f,
                day: u
            }, x[9] = n, x[10] = f, x[11] = y) : y = x[11], x[12] !== d || x[13] !== y ? (b = (0, r.jsx)(i.a, {
                ...d,
                values: y
            }), x[12] = d, x[13] = y, x[14] = b) : b = x[14], x[15] !== t || x[16] !== v || x[17] !== g || x[18] !== b ? (w = (0, r.jsx)(t, {
                label: g,
                sentAtMs: v,
                children: b
            }), x[15] = t, x[16] = v, x[17] = g, x[18] = b, x[19] = w) : w = x[19], w
        }

        function u(e) {
            return (0, r.jsx)("span", {
                className: "font-medium",
                children: e
            })
        }

        function m(e) {
            return e.join("")
        }

        function h() {
            return Date.now()
        }

        function p(e) {
            let t, n, s, o = (0, a.c)(11),
                {
                    children: i,
                    compact: l,
                    label: c,
                    sentAtMs: d
                } = e,
                u = void 0 !== l && l,
                m = u ? "flex justify-center py-2" : "flex justify-center py-4",
                h = null == c ? void 0 : "separator",
                p = u ? "text-xs text-tertiary select-none" : "text-sm leading-5 font-normal text-tertiary select-none";
            return o[0] !== d ? (t = new Date(d).toISOString(), o[0] = d, o[1] = t) : t = o[1], o[2] !== i || o[3] !== p || o[4] !== t ? (n = (0, r.jsx)("time", {
                className: p,
                dateTime: t,
                children: i
            }), o[2] = i, o[3] = p, o[4] = t, o[5] = n) : n = o[5], o[6] !== c || o[7] !== m || o[8] !== h || o[9] !== n ? (s = (0, r.jsx)("div", {
                "aria-label": c,
                className: m,
                role: h,
                "data-markdown-copy": "exclude",
                children: n
            }), o[6] = c, o[7] = m, o[8] = h, o[9] = n, o[10] = s) : s = o[10], s
        }
    }),
    WSJu: (function(e, t, n) {
        var r = n("W4He");

        function a(e) {
            return s(e) && (null != e.activity || "keep" !== e.role)
        }

        function s(e) {
            return !e.pendingAnswer && !e.preparing
        }

        function o(e, t) {
            let n = {
                label: t,
                labelKey: `direction:${t}`,
                labelPriority: "direction"
            };
            return "tool-status" === e.kind ? {
                ...e,
                ...n,
                active: !0
            } : {
                ...e,
                ...n
            }
        }
        n.d(t, {}, {
            a: a,
            b: function(e, t) {
                let {
                    fallback: n,
                    direction: i,
                    opening: l,
                    previous: c,
                    elapsedWaitKey: d
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, u = e.findLastIndex(e => "bubble" === e.role), m = e[u]?.key ?? "initial", h = e.findLastIndex(s), p = e[h], g = h > u ? p : void 0, f = c?.slice === m ? c : void 0, y = f?.source === p?.key ? f : void 0, b = e.findLast(a), w = function(e, t, n, a, s, i, l, c) {
                    if ("working" !== n) {
                        for (let n = e.length - 1; n >= t; n--) {
                            let t = e[n];
                            if ("final" === t.role && !t.pendingAnswer && !t.preparing) return {
                                kind: "answer",
                                source: t.key
                            }
                        }
                        return {
                            kind: "quiet"
                        }
                    }
                    if (a?.activity) {
                        var d, u;
                        return {
                            kind: "label",
                            source: a.key,
                            status: a.acceptsDirection && l ? (d = a.activity, u = l, "live" === d.kind && "activity" !== d.labelPriority || "tool-status" === d.kind && "immediate" === d.labelPriority ? d : o(d, u)) : a.activity
                        }
                    }
                    if (s?.streamingCommentary || "delayed-thinking" === i && s !== a && s?.runningWork || (0, r.b)(a, i, e, t)) return {
                        kind: "quiet"
                    };
                    if (l && (a?.acceptsDirection || null != i)) {
                        let e = a?.acceptsDirection ? a.key : void 0,
                            t = e && c?.kind === "live" ? {
                                ...c,
                                animateIcon: !1
                            } : {
                                kind: "thinking"
                            };
                        return {
                            kind: "label",
                            source: e,
                            status: o(t, l)
                        }
                    }
                    return "string" == typeof i ? {
                        kind: "wait"
                    } : i ? {
                        kind: "label",
                        status: i
                    } : {
                        kind: "quiet"
                    }
                }(e, u + 1, t, g, b, n, i, y?.status), x = "label" === w.kind && null != w.source && w.source === p?.key, v = null != f && (null != y || null == p || "bubble" === p.role), k = c;
                if (x && p?.activity && y?.status !== p.activity ? k = {
                        slice: m,
                        source: p.key,
                        status: p.activity
                    } : x || "wait" === w.kind && v || (k = void 0), "wait" !== w.kind) return {
                    slice: m,
                    response: w,
                    nextActivity: k,
                    timer: void 0
                };
                let S = null != f || null != b && "bubble" !== b.role,
                    _ = JSON.stringify([m, b?.key]);
                return {
                    slice: m,
                    nextActivity: k,
                    ...(0, r.c)({
                        key: _,
                        elapsedWaitKey: d,
                        midTurn: S,
                        role: b?.role,
                        previous: v ? f.status : void 0,
                        source: y?.source,
                        opening: "starting" === n ? l : void 0
                    })
                }
            }
        })
    }),
    W4He: (function(e, t, n) {
        var r = n("c8QI");

        function a(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            for (let n = t; n < e.length; n++)
                if (e[n].runningWork) return !0;
            return !1
        }
        n.d(t, {}, {
            a: function(e, t) {
                if (!e.compacting) {
                    if ("codex" === e.family) return e.canPresent && (e.hasActivity || e.waitingForFirstActivity || a(t)) ? null != e.namedStatus ? e.namedStatus : e.waitingForFirstActivity && !e.starting ? {
                        kind: "thinking"
                    } : e.starting ? "starting" : "delayed-thinking" : void 0;
                    if (e.canPresent && e.hideReasoning) return {
                        kind: "thinking"
                    };
                    if (e.awaitingUntitledReasoning || e.canPresent && (e.waitingForResponse || e.beforeFirstResponse || "commentary" === e.tailRole || "final" === e.tailRole || a(t))) return "delayed-thinking"
                }
            },
            b: function(e, t, n, r) {
                return e?.role === "commentary" && (!0 === e.streamingCommentary || "delayed-thinking" !== t && !a(n, r))
            },
            c: function(e) {
                let {
                    key: t,
                    elapsedWaitKey: n,
                    role: a,
                    midTurn: s,
                    previous: o,
                    source: i,
                    opening: l
                } = e, c = {
                    key: t,
                    delayMs: s && "commentary" !== a && "final" !== a ? 5e3 : 1e3
                };
                return n === t ? {
                    timer: c,
                    response: {
                        kind: "label",
                        source: i,
                        status: {
                            kind: "thinking",
                            labelKey: s ? r.a : void 0
                        }
                    }
                } : o ? {
                    timer: c,
                    response: {
                        kind: "label",
                        source: i,
                        status: "live" === o.kind ? {
                            ...o,
                            animateIcon: !1
                        } : o
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
    gOnr: (function(e, t, n) {
        var r = n("QosV"),
            a = n("Q840"),
            s = n("zd8w"),
            o = n("TSib"),
            i = n("ipIJ"),
            l = n("Sd8U"),
            c = n("tSEg"),
            d = n("DRR4"),
            u = n("qZWE");
        n.d(t, {}, {
            a: function(e) {
                let t, n, m, h, p, g = (0, r.c)(14);
                g[0] !== e ? (t = void 0 === e ? {} : e, g[0] = e, g[1] = t) : t = g[1];
                let {
                    transcriptMcpAppIds: f,
                    blockedWidgetSource: y,
                    shouldBlockExternalEgress: b
                } = t, w = void 0 !== b && b, x = (0, a.y)(c.a), v = (0, a.y)(l.a), k = (0, a.z)(u.i), S = (0, a.z)(o.v);
                return g[2] !== S || g[3] !== y || g[4] !== v || g[5] !== k || g[6] !== x || g[7] !== w || g[8] !== f ? (n = () => {
                    for (let [e, t] of("chatgpt-thread" === x.value.routeKind && (0, i.b)(v, S.filter(e => w || null != y && (e.widgetSource ?? "descriptor") === y)), k))(w || null != y && (t.content.mcpAppScope.widgetSource ?? "descriptor") === y || t.hostedInThreadScrollLayout && f?.has(e) === !1) && (0, u.A)(x, e)
                }, m = [S, y, f, v, k, x, w], g[2] = S, g[3] = y, g[4] = v, g[5] = k, g[6] = x, g[7] = w, g[8] = f, g[9] = n, g[10] = m) : (n = g[9], m = g[10]), (0, s.useLayoutEffect)(n, m), g[11] !== x ? (h = () => {
                    (0, d.g)(x)
                }, p = [x], g[11] = x, g[12] = h, g[13] = p) : (h = g[12], p = g[13]), (0, s.useLayoutEffect)(h, p), null
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
            s = n("zd8w"),
            o = n("rEML"),
            i = n("Cslg"),
            l = n("TS05"),
            c = n("tSEg");
        n.d(t, {}, {
            a: function(e) {
                let t, n, d, u = (0, r.c)(18),
                    {
                        ready: m,
                        onNavigate: h
                    } = e,
                    p = (0, a.y)(c.a),
                    g = (0, a.z)(i.f),
                    f = (0, o.X)(),
                    y = f.state,
                    b = y?.sidebarArea === "scheduled";
                u[0] !== g || u[1] !== f.key ? (t = {
                    locationKey: f.key,
                    accountId: g
                }, u[0] = g, u[1] = f.key, u[2] = t) : t = u[2];
                let w = (0, a.x)(l.a, t),
                    x = (0, s.useEffectEvent)(h);
                return u[3] !== g || u[4] !== w || u[5] !== f.key || u[6] !== x || u[7] !== m || u[8] !== b || u[9] !== p ? (n = () => {
                    if (!b || !m || w) return;
                    let e = new AbortController;
                    return x(e.signal).then(() => {
                        e.signal.aborted || p.set(l.a, {
                            locationKey: f.key,
                            accountId: g
                        }, !0)
                    }), () => e.abort()
                }, u[3] = g, u[4] = w, u[5] = f.key, u[6] = x, u[7] = m, u[8] = b, u[9] = p, u[10] = n) : n = u[10], u[11] !== g || u[12] !== w || u[13] !== f.key || u[14] !== m || u[15] !== b || u[16] !== p ? (d = [g, w, f.key, m, b, p], u[11] = g, u[12] = w, u[13] = f.key, u[14] = m, u[15] = b, u[16] = p, u[17] = d) : d = u[17], (0, s.useEffect)(n, d), null
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
                        let s = e(),
                            o = s.get(t);
                        o?.get(r) !== a && n(new Map(s).set(t, new Map(o).set(r, a)))
                    }
                }
            },
            b: a
        })
    }),
    yLzP: (function(e, t, n) {
        var r = n("ABep"),
            a = n("QosV"),
            s = n("on57"),
            o = n("oyxz"),
            i = n("Sm6l"),
            l = n("HOLv"),
            c = n("RNul"),
            d = n("qt75");
        n.d(t, {}, {
            a: function(e) {
                let t, n, u, m, h, p, g = (0, a.c)(16),
                    {
                        ref: f,
                        onRetry: y
                    } = e,
                    b = null == y ? "py-4" : "gap-1.5 px-2 py-1.5 select-none";
                g[0] !== b ? (t = (0, s.b)("flex items-center justify-center", b), g[0] = b, g[1] = t) : t = g[1];
                let w = null == y ? "text-secondary" : "min-w-0 gap-1.5 text-default";
                return g[2] !== w ? (n = (0, s.b)("flex items-center text-sm", w), g[2] = w, g[3] = n) : n = g[3], g[4] !== y ? (u = null != y ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(l.a, {
                        asset: d.a,
                        className: "shrink-0 text-danger"
                    }), (0, r.jsx)("span", {
                        className: "min-w-0 wrap-break-word",
                        children: (0, r.jsx)(o.a, {
                            id: "chatgpt.pagination.error",
                            defaultMessage: "Couldn’t load earlier messages"
                        })
                    })]
                }) : (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(c.a, {}), (0, r.jsx)("span", {
                        className: "sr-only",
                        children: (0, r.jsx)(o.a, {
                            id: "chatgpt.pagination.loading",
                            defaultMessage: "Loading older messages…"
                        })
                    })]
                }), g[4] = y, g[5] = u) : u = g[5], g[6] !== n || g[7] !== u ? (m = (0, r.jsx)("div", {
                    role: "status",
                    className: n,
                    children: u
                }), g[6] = n, g[7] = u, g[8] = m) : m = g[8], g[9] !== y ? (h = null != y && (0, r.jsx)(i.a, {
                    color: "outlineGhost",
                    size: "menuRow",
                    onClick: y,
                    children: (0, r.jsx)(o.a, {
                        id: "chatgpt.pagination.retry",
                        defaultMessage: "Retry"
                    })
                }), g[9] = y, g[10] = h) : h = g[10], g[11] !== f || g[12] !== t || g[13] !== m || g[14] !== h ? (p = (0, r.jsxs)("div", {
                    ref: f,
                    className: t,
                    children: [m, h]
                }), g[11] = f, g[12] = t, g[13] = m, g[14] = h, g[15] = p) : p = g[15], p
            }
        })
    }),
    KFm7: (function(e, t, n) {
        var r = n("acLe"),
            a = n("jCHb"),
            s = n("p5Yg"),
            o = n("V8uZ"),
            i = n("uYx2");
        let l = 2 / 3;

        function c(e, t, n) {
            let r = e.getBoundingClientRect(),
                a = n ?? (r.height / (e.offsetHeight || 1) || 1);
            return (t - (r.bottom - Math.max((0, i.e)(e, a), d(e) * a))) / a
        }

        function d(e) {
            let t = Number.parseFloat(e.style.getPropertyValue("--thread-scroll-padding-bottom") || e.style.getPropertyValue("--thread-scroll-seeded-padding-bottom"));
            return Number.isFinite(t) ? t : 0
        }

        function u(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = Math.max(0, e.clientHeight - d(e));
            return t ? n : Math.max(0, Math.min(n * l, n - 240))
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
                    let n = e - (0, i.b)(t);
                    if (n <= 0) return;
                    let r = this.height.get() + n;
                    if (t.scrollHeight <= t.clientHeight) {
                        let n = r + t.clientHeight;
                        this.writeHeight(n), r = n - ((0, i.b)(t) - e)
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
                        a = null == r ? 0 : (0, i.b)(r);
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
                    !this.canPrepareThreadEndContent || null != this.stopPlacementAnimation || null == t || t.clientHeight <= 0 || null == n || !(c(t, n.getBoundingClientRect().top) > 0) && e() && (this.canPrepareThreadEndContent = !1, this.cancelPendingUserScrollDecay(), this.consumeGrowth((0, i.b)(t)), this.scrollController.compensateScrollToDistanceFromBottomPx(0))
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
                    if (e < t && (0, i.f)(e)) return void this.clear();
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
                            s = this.canPrepareThreadEndContent;
                        a && (this.canPrepareThreadEndContent = !1, this.stop());
                        let o = this.trimTo(u(e, null != this.placementTarget));
                        a && (o || this.scrollController.compensateScrollToDistanceFromBottomPx((0, i.b)(e)), this.animatePlacement(), this.canPrepareThreadEndContent = s)
                    }
                };
                revealSubmittedTurn = e => {
                    let t = this.scrollController.getScrollElement();
                    if (null == t || !t.contains(e)) return;
                    this.scrollController.holdViewport();
                    let n = e.getBoundingClientRect(),
                        r = Math.min(c(t, n.bottom), (n.top - t.getBoundingClientRect().top) / (t.currentCSSZoom || 1));
                    r > 0 && this.scrollController.compensateScrollToDistanceFromBottomPx(Math.max(0, (0, i.b)(t) - r))
                };
                place = e => {
                    let t = this.scrollController.getScrollElement();
                    if (null == t) return;
                    this.canPrepareThreadEndContent = !1, this.cancelPendingUserScrollDecay(), this.interruptPlacement(), this.placementTarget = e, this.viewportHeightPx = t.clientHeight, this.scrollPaddingBottomPx = d(t);
                    let n = this.height.get(),
                        r = (0, i.b)(t),
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
                                                s.b.update(n, !0)
                                            },
                                            stop: () => {
                                                (0, s.a)(n)
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
            b: c,
            c: d
        })
    }),
    Ho4C: (function(e, t, n) {
        var r = n("ABep"),
            a = n("QosV"),
            s = n("zd8w"),
            o = n("T1PX"),
            i = n("ZYy5"),
            l = n("m8On"),
            c = n("bIvi"),
            d = n("lsfk");
        let u = Array.from({
            length: 101
        }, (e, t) => t / 100);
        n.d(t, {}, {
            a: function(e) {
                let t, n, m, h, p, g, f, y, b, w, x, v, k, S, _ = (0, a.c)(31),
                    {
                        controller: P,
                        onReleased: C
                    } = e,
                    j = (0, d.b)(),
                    D = (0, s.useContext)(i.a),
                    T = (0, o.a)(),
                    {
                        getScrollElement: A
                    } = j;
                _[0] !== P ? (t = e => {
                    P.setElement(e)
                }, _[0] = P, _[1] = t) : t = _[1];
                let M = (0, c.a)(t);
                return _[2] !== P || _[3] !== C || _[4] !== T || _[5] !== j ? (n = () => {
                    P.updateContext(j, T, C)
                }, m = [P, j, T, C], _[2] = P, _[3] = C, _[4] = T, _[5] = j, _[6] = n, _[7] = m) : (n = _[6], m = _[7]), (0, s.useInsertionEffect)(n, m), _[8] !== P || _[9] !== A ? (h = () => {
                    let e = A();
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
                }, p = [P, A], _[8] = P, _[9] = A, _[10] = h, _[11] = p) : (h = _[10], p = _[11]), (0, s.useEffect)(h, p), _[12] !== P.cancelPendingUserScrollDecay ? (g = () => P.cancelPendingUserScrollDecay, _[12] = P.cancelPendingUserScrollDecay, _[13] = g) : g = _[13], _[14] !== P ? (f = [P], _[14] = P, _[15] = f) : f = _[15], (0, s.useEffect)(g, f), _[16] !== P || _[17] !== A ? (y = () => {
                    let e = A();
                    if (null == e || "u" < typeof IntersectionObserver) return;
                    let t = new IntersectionObserver(P.collapseIfHidden, {
                            root: e,
                            threshold: u
                        }),
                        n = P.getElement();
                    return null != n && t.observe(n), () => t.disconnect()
                }, b = [P, A], _[16] = P, _[17] = A, _[18] = y, _[19] = b) : (y = _[18], b = _[19]), (0, s.useEffect)(y, b), _[20] !== P || _[21] !== j ? (w = () => {
                    let e = j.addScrollListener(P.handleScroll),
                        t = j.addUserScrollListener(P.handleUserScroll);
                    return P.reconcileViewport(), () => {
                        e(), t()
                    }
                }, x = [P, j], _[20] = P, _[21] = j, _[22] = w, _[23] = x) : (w = _[22], x = _[23]), (0, s.useLayoutEffect)(w, x), _[24] !== P || _[25] !== A || _[26] !== D ? (v = () => {
                    let e = A();
                    if (null == e) return;
                    let t = null,
                        n = () => {
                            null == t && (t = window.requestAnimationFrame(() => {
                                t = null, P.reconcileViewport()
                            }))
                        },
                        r = D ?? (0, l.b)(),
                        a = e.parentElement?.querySelector("[data-thread-scroll-footer]"),
                        s = null == a ? [e] : [e, a];
                    for (let e of s)(0, l.a)({
                        element: e,
                        callback: n,
                        observer: r
                    });
                    return window.addEventListener("resize", n, {
                        passive: !0
                    }), () => {
                        for (let e of s)(0, l.c)({
                            element: e,
                            callback: n,
                            observer: r
                        });
                        null == D && r?.disconnect(), window.removeEventListener("resize", n), null != t && window.cancelAnimationFrame(t)
                    }
                }, k = [P, A, D], _[24] = P, _[25] = A, _[26] = D, _[27] = v, _[28] = k) : (v = _[27], k = _[28]), (0, s.useEffect)(v, k), _[29] !== M ? (S = (0, r.jsx)("div", {
                    ref: M,
                    className: "shrink-0",
                    "aria-hidden": !0
                }), _[29] = M, _[30] = S) : S = _[30], S
            }
        })
    })
};