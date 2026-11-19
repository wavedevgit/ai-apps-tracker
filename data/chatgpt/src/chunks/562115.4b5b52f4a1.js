export const __rspack_esm_ids = [562115];
export const __webpack_modules__ = {
    IL1g: (function(e, t, n) {
        var a = n("ABep"),
            i = n("QosV"),
            r = n("zd8w"),
            s = n("Wf1j"),
            o = n("ZtSy");
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
            let t, n, s = (0, i.c)(4),
                {
                    inDialog: c
                } = e,
                d = void 0 !== c && c;
            return s[0] !== d ? (t = l.map((e, t) => {
                let n = e.emphasize ? (0, a.jsx)("strong", {
                    children: e.label
                }) : e.label;
                return (0, a.jsxs)(r.Fragment, {
                    children: [t > 0 && (0, a.jsx)("span", {
                        "aria-hidden": "true",
                        children: "|"
                    }), e.href ? (0, a.jsx)(o.a, {
                        href: e.href,
                        initiator: "open_in_browser_bridge",
                        openTarget: d ? "external-browser" : void 0,
                        underline: "always",
                        children: n
                    }) : (0, a.jsxs)("span", {
                        children: [e.prefix, n]
                    })]
                }, e.label)
            }), s[0] = d, s[1] = t) : t = s[1], s[2] !== t ? (n = (0, a.jsx)("div", {
                className: "flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-xs text-secondary select-text",
                children: t
            }), s[2] = t, s[3] = n) : n = s[3], n
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, r, o = (0, i.c)(5),
                    {
                        inDialog: l
                    } = e,
                    d = void 0 !== l && l,
                    u = (0, s.a)();
                return "ko" !== new Intl.Locale(u.locale).language ? null : (o[0] !== d ? (t = (0, a.jsx)(c, {
                    inDialog: d
                }), o[0] = d, o[1] = t) : t = o[1], o[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)("p", {
                    children: "귀하가 19세 미만의 이용자로서 귀하의 법정대리인이 본 계약에 동의하지 않은 경우, 귀하 또는 귀하의 법정대리인은 계약을 취소할 수 있습니다."
                }), o[2] = n) : n = o[2], o[3] !== t ? (r = (0, a.jsxs)("div", {
                    className: "flex flex-col items-center gap-2 text-center text-xs text-secondary select-text",
                    children: [t, n]
                }), o[3] = t, o[4] = r) : r = o[4], r)
            },
            b: c
        })
    }),
    DWXw: (function(e, t, n) {
        n.d(t, {
            BrowserComposerDisclaimer: () => z,
            BrowserComposerDisclaimerMessage: () => B,
            a: () => V
        });
        var a = n("ABep"),
            i = n("QosV"),
            r = n("Q840"),
            s = n("Wf1j"),
            o = n("oyxz"),
            l = n("Qgfj"),
            c = n("rEML"),
            d = n("OFP1"),
            u = n("h6fL"),
            p = n("ipGa"),
            m = n("ZtSy");

        function h(e) {
            return (0, a.jsx)(m.a, {
                href: "https://openai.com/policies/privacy-policy/",
                initiator: "open_in_browser_bridge",
                openTarget: "external-browser",
                children: e
            })
        }

        function f(e) {
            let t, n, r, s, l = (0, i.c)(9),
                {
                    context: c
                } = e;
            l[0] !== c.businessName ? (t = c.businessName?.trim(), l[0] = c.businessName, l[1] = t) : t = l[1];
            let d = t;
            return l[2] !== d ? (n = (0, a.jsx)("p", {
                children: d ? (0, a.jsx)(o.a, {
                    id: "businessProfiles.agentChat.privacy.named",
                    defaultMessage: "This chat remains private. {businessName} can only see overall insights about how its AI agent is doing. <learnMore>Learn more</learnMore>",
                    values: {
                        businessName: d,
                        learnMore: h
                    }
                }) : (0, a.jsx)(o.a, {
                    id: "businessProfiles.agentChat.privacy.unnamed",
                    defaultMessage: "This chat remains private. This business can only see overall insights about how its AI agent is doing. <learnMore>Learn more</learnMore>",
                    values: {
                        learnMore: h
                    }
                })
            }), l[2] = d, l[3] = n) : n = l[3], l[4] !== c.notice ? (r = c.notice?.trim() ? (0, a.jsx)("p", {
                children: c.notice
            }) : null, l[4] = c.notice, l[5] = r) : r = l[5], l[6] !== n || l[7] !== r ? (s = (0, a.jsxs)("div", {
                className: "flex flex-col gap-1",
                children: [n, r]
            }), l[6] = n, l[7] = r, l[8] = s) : s = l[8], s
        }
        var g = n("YJm0"),
            y = n("fzVa"),
            v = n("dQRk"),
            w = n("g2p6"),
            b = n("jAnS"),
            k = n("AcSY"),
            x = n("Ho8f"),
            _ = n("hZax"),
            S = n("fNyS"),
            j = n("zd8w"),
            C = n("IL1g"),
            M = n("JNtf"),
            A = n("mUDD"),
            T = n("ibLK"),
            D = n("jVko"),
            I = n("zWHk");
        let K = new WeakSet;

        function P(e) {
            let t, n, r, s, l = (0, i.c)(10),
                {
                    children: c
                } = e,
                d = (0, T.a)("(width < 640px)"),
                u = (0, j.useContext)(D.a);
            l[0] !== u ? (t = e => {
                if (null == u) return O;
                let t = () => {
                        K.add(u), e()
                    },
                    n = u.view.dom;
                n.addEventListener("input", t, !0);
                let a = (0, I.b)(u.view, t => {
                    t && e()
                });
                return () => {
                    n.removeEventListener("input", t, !0), a()
                }
            }, l[0] = u, l[1] = t) : t = l[1];
            let p = t;
            l[2] !== u ? (n = () => null == u || !u.hasText() && !K.has(u), l[2] = u, l[3] = n) : n = l[3];
            let m = n,
                h = (0, j.useSyncExternalStore)(p, m, W);
            if (!d) {
                let e;
                return l[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(C.b, {}), l[4] = e) : e = l[4], e
            }
            return l[5] !== h ? (r = h && (0, a.jsx)(M.a, {
                size: "responsiveSheet",
                triggerContent: (0, a.jsx)("button", {
                    className: "inline-flex min-h-6 min-w-6 cursor-interaction items-center justify-center text-xs text-secondary underline select-none",
                    type: "button",
                    children: (0, a.jsx)(o.a, {
                        ...L.companyInformation
                    })
                }),
                contentProps: {
                    "aria-describedby": void 0
                },
                children: (0, a.jsxs)(A.b, {
                    children: [(0, a.jsx)(A.d, {
                        title: (0, a.jsx)(M.f, {
                            children: (0, a.jsx)(o.a, {
                                ...L.companyInformation
                            })
                        })
                    }), (0, a.jsx)(A.e, {
                        children: (0, a.jsx)(C.b, {
                            inDialog: !0
                        })
                    })]
                })
            }), l[5] = h, l[6] = r) : r = l[6], l[7] !== c || l[8] !== r ? (s = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-1",
                children: [c, r]
            }), l[7] = c, l[8] = r, l[9] = s) : s = l[9], s
        }

        function W() {
            return !0
        }

        function O() {}
        let L = (0, l.f)({
            companyInformation: {
                id: "chatgpt.compliance.korean_regulatory.company_information.label",
                defaultMessage: "Company info"
            }
        });
        var R = n("md8w"),
            F = n("dBtq"),
            N = n("RGWz");

        function z(e) {
            let t, n, s, o, l = (0, i.c)(10);
            l[0] !== e ? ({
                supportsMessageDisclosures: n,
                ...t
            } = e, l[0] = e, l[1] = t, l[2] = n) : (t = l[1], n = l[2]);
            let c = void 0 !== n && n,
                d = (0, r.z)(R.b),
                u = (0, r.x)(F.a, t.conversationId);
            if ("home" !== t.placement && (c && d || !u)) return null;
            let p = "home" === t.placement ? "empty:hidden" : void 0,
                m = t.placement ?? "thread",
                h = "home" === t.placement ? void 0 : E;
            return l[3] !== t || l[4] !== h ? (s = (0, a.jsx)(B, {
                ...t,
                renderOrdinaryDisclaimer: h
            }), l[3] = t, l[4] = h, l[5] = s) : s = l[5], l[6] !== p || l[7] !== m || l[8] !== s ? (o = (0, a.jsx)(x.a, {
                browser: !0,
                children: (0, a.jsx)(S.a, {
                    className: p,
                    placement: m,
                    children: s
                })
            }), l[6] = p, l[7] = m, l[8] = s, l[9] = o) : o = l[9], o
        }

        function E(e) {
            return (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(N.b, {
                        children: e
                    })
                }), null]
            })
        }

        function B(e) {
            let t, n, l, d = (0, i.c)(28),
                {
                    aiServiceDisclaimer: u,
                    conversationId: m,
                    hasUserMessage: h,
                    isTemporaryChat: g,
                    ordinaryDisclaimer: y,
                    pendingWorkspaceDisclaimer: w,
                    placement: x,
                    regulatedConnectorKindOverride: _,
                    renderOrdinaryDisclaimer: S
                } = e,
                j = void 0 === x ? "thread" : x,
                C = (0, s.a)(),
                {
                    search: M
                } = (0, c.Z)(),
                {
                    data: A
                } = (0, k.f)(),
                T = (0, r.x)(v.u, m ?? null),
                D = (0, r.x)(v.W, T?.status === "ready" && void 0 === _ ? m ?? null : null);
            d[0] !== h || d[1] !== g || d[2] !== j || d[3] !== M ? (t = (g ?? (0, b.i)(M)) && !(h ?? "thread" === j), d[0] = h, d[1] = g, d[2] = j, d[3] = M, d[4] = t) : t = d[4];
            let I = t;
            if (null == A) return null == T ? w ?? null : null;
            if (null != T) {
                let e;
                if ("ready" !== T.status) return null;
                let t = void 0 !== _ ? _ : D;
                if (null != t) {
                    let e;
                    return d[5] !== t || d[6] !== y ? (e = (0, a.jsx)(V, {
                        ordinaryDisclaimer: y,
                        regulatedConnectorKind: t
                    }), d[5] = t, d[6] = y, d[7] = e) : e = d[7], e
                }
                return d[8] !== T.context ? (e = (0, a.jsx)(f, {
                    context: T.context
                }), d[8] = T.context, d[9] = e) : e = d[9], e
            }
            if ("workspace" === A.structure) {
                let e;
                return d[10] !== A || d[11] !== w || d[12] !== S || d[13] !== I ? (e = (0, a.jsx)(H, {
                    account: A,
                    pendingWorkspaceDisclaimer: w,
                    isTemporaryChat: I,
                    renderOrdinaryDisclaimer: S
                }), d[10] = A, d[11] = w, d[12] = S, d[13] = I, d[14] = e) : e = d[14], e
            }
            d[15] !== y || d[16] !== S ? (n = S?.(y ?? (0, a.jsx)(o.a, {
                ...Z.personal
            })) ?? y, d[15] = y, d[16] = S, d[17] = n) : n = d[17], d[18] !== A.id || d[19] !== u || d[20] !== m || d[21] !== j || d[22] !== _ || d[23] !== I || d[24] !== n ? (l = (0, a.jsx)(G, {
                accountId: A.id,
                aiServiceDisclaimer: u,
                conversationId: m,
                isTemporaryChat: I,
                ordinaryDisclaimer: n,
                placement: j,
                regulatedConnectorKindOverride: _
            }), d[18] = A.id, d[19] = u, d[20] = m, d[21] = j, d[22] = _, d[23] = I, d[24] = n, d[25] = l) : l = d[25];
            let K = l;
            if ("home" === j && !h && !I && !(0, p.a)() && "ko" === new Intl.Locale(C.locale).language) {
                let e;
                return d[26] !== K ? (e = (0, a.jsx)(P, {
                    children: K
                }), d[26] = K, d[27] = e) : e = d[27], e
            }
            return K
        }

        function G(e) {
            let t, n = (0, i.c)(16),
                {
                    accountId: r,
                    aiServiceDisclaimer: s,
                    conversationId: o,
                    isTemporaryChat: l,
                    ordinaryDisclaimer: c,
                    placement: d,
                    regulatedConnectorKindOverride: u
                } = e,
                p = (0, _.f)("1831960162");
            if (!(0, _.g)("1831960162") && !p) {
                let e;
                return n[0] !== r || n[1] !== s || n[2] !== o || n[3] !== l || n[4] !== c || n[5] !== d || n[6] !== u ? (e = (0, a.jsx)(q, {
                    accountId: r,
                    aiServiceDisclaimer: s,
                    conversationId: o,
                    isTemporaryChat: l,
                    ordinaryDisclaimer: c,
                    placement: d,
                    regulatedConnectorKindOverride: u
                }), n[0] = r, n[1] = s, n[2] = o, n[3] = l, n[4] = c, n[5] = d, n[6] = u, n[7] = e) : e = n[7], e
            }
            return n[8] !== s || n[9] !== o || n[10] !== l || n[11] !== c || n[12] !== d || n[13] !== u || n[14] !== p ? (t = (0, a.jsx)(Q, {
                aiServiceDisclaimer: s,
                conversationId: o,
                isTemporaryChat: l,
                ordinaryDisclaimer: c,
                placement: d,
                regulatedConnectorKindOverride: u,
                showAiServiceDisclaimer: p
            }), n[8] = s, n[9] = o, n[10] = l, n[11] = c, n[12] = d, n[13] = u, n[14] = p, n[15] = t) : t = n[15], t
        }

        function q(e) {
            let t, n = (0, i.c)(8),
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
                f = (0, r.z)(w.n),
                {
                    data: g
                } = (0, r.z)(y.b),
                v = null != h && f === s,
                b = (0, _.f)(!!v && (null == g || "under_18" === g.age_status) && "1639821169");
            return v ? (n[0] !== o || n[1] !== l || n[2] !== c || n[3] !== d || n[4] !== p || n[5] !== m || n[6] !== b ? (t = (0, a.jsx)(Q, {
                aiServiceDisclaimer: o,
                conversationId: l,
                isTemporaryChat: c,
                ordinaryDisclaimer: d,
                placement: p,
                regulatedConnectorKindOverride: m,
                showAiServiceDisclaimer: b
            }), n[0] = o, n[1] = l, n[2] = c, n[3] = d, n[4] = p, n[5] = m, n[6] = b, n[7] = t) : t = n[7], t) : null
        }

        function Q(e) {
            let t, n, r = (0, i.c)(10),
                {
                    aiServiceDisclaimer: s,
                    conversationId: l,
                    isTemporaryChat: c,
                    ordinaryDisclaimer: d,
                    placement: u,
                    regulatedConnectorKindOverride: m,
                    showAiServiceDisclaimer: h
                } = e;
            r[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, p.a)(), r[0] = t) : t = r[0];
            let f = t;
            if (c) {
                let e;
                return r[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(o.a, {
                    ...Z.temporaryChat
                }), r[1] = e) : e = r[1], e
            }
            if (h) {
                let e;
                return r[2] !== s ? (e = s ?? (0, a.jsx)(o.a, {
                    ...Z.aiService
                }), r[2] = s, r[3] = e) : e = r[3], e
            }
            if (void 0 !== m) {
                let e;
                return null == m && (f || "home" === u) ? null : (r[4] !== d || r[5] !== m ? (e = (0, a.jsx)(V, {
                    ordinaryDisclaimer: d,
                    regulatedConnectorKind: m
                }), r[4] = d, r[5] = m, r[6] = e) : e = r[6], e)
            }
            return "home" === u ? null : (r[7] !== l || r[8] !== d ? (n = (0, a.jsx)(U, {
                conversationId: l,
                isBrowserSideChat: f,
                ordinaryDisclaimer: d
            }), r[7] = l, r[8] = d, r[9] = n) : n = r[9], n)
        }

        function U(e) {
            let t, n = (0, i.c)(3),
                {
                    conversationId: s,
                    isBrowserSideChat: o,
                    ordinaryDisclaimer: l
                } = e,
                c = (0, r.x)(v.W, s ?? null);
            return o && null == c ? null : (n[0] !== l || n[1] !== c ? (t = (0, a.jsx)(V, {
                ordinaryDisclaimer: l,
                regulatedConnectorKind: c
            }), n[0] = l, n[1] = c, n[2] = t) : t = n[2], t)
        }

        function V(e) {
            let t, n = (0, i.c)(4),
                {
                    ordinaryDisclaimer: r,
                    regulatedConnectorKind: s
                } = e;
            if ("finance" === s) {
                let e;
                return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(o.a, {
                    ...Z.finance
                }), n[0] = e) : e = n[0], e
            }
            if ("health" === s) {
                let e;
                return n[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(o.a, {
                    ...Z.health
                }), n[1] = e) : e = n[1], e
            }
            return n[2] !== r ? (t = r ?? (0, a.jsx)(o.a, {
                ...Z.personal
            }), n[2] = r, n[3] = t) : t = n[3], t
        }

        function H(e) {
            let t, n = (0, i.c)(10),
                {
                    account: s,
                    pendingWorkspaceDisclaimer: l,
                    isTemporaryChat: c,
                    renderOrdinaryDisclaimer: u
                } = e,
                m = (0, p.a)(),
                {
                    data: h
                } = (0, r.x)(g.a, s.id),
                {
                    data: f
                } = (0, r.x)(d.m, s.id);
            if (null == h || null != l && null == f) return l ?? null;
            let y = "early-access" === h.account.workspace_type;
            if (!y && null == f) return null;
            let v = h.account.name ?? s.name;
            if (f?.beta_settings.training_allowed === !0) {
                let e;
                n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(o.a, {
                    ...Z.workspaceResearchPartner,
                    values: {
                        link: J
                    }
                }), n[0] = e) : e = n[0], t = e
            } else if (y) {
                let e;
                n[1] !== v ? (e = null == v ? (0, a.jsx)(o.a, {
                    ...Z.earlyAccessWorkspaceWithoutName
                }) : (0, a.jsx)(o.a, {
                    ...Z.earlyAccessWorkspace,
                    values: {
                        workspaceName: v
                    }
                }), n[1] = v, n[2] = e) : e = n[2], t = e
            } else if (c) {
                let e;
                n[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(o.a, {
                    ...Z.workspaceTemporaryChat
                }), n[3] = e) : e = n[3], t = e
            } else if (null != h.account.ekm_config) {
                let e;
                n[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(o.a, {
                    ...Z.encryptedWorkspace
                }), n[4] = e) : e = n[4], t = e
            } else if ("k12" === s.plan_type) {
                let e;
                n[5] !== v ? (e = null == v ? (0, a.jsx)(o.a, {
                    ...Z.k12WorkspaceWithoutName
                }) : (0, a.jsx)(o.a, {
                    ...Z.k12Workspace,
                    values: {
                        workspaceName: v
                    }
                }), n[5] = v, n[6] = e) : e = n[6], t = e
            } else {
                let e, i;
                return m ? null : (n[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(o.a, {
                    ...Z.workspace
                }), n[7] = e) : e = n[7], t = e, n[8] !== u ? (i = u?.(t) ?? t, n[8] = u, n[9] = i) : i = n[9], i)
            }
            return t
        }

        function J(e) {
            return (0, a.jsx)(m.a, {
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
        var a = n("Q840"),
            i = n("lAQI"),
            r = n("Cslg"),
            s = n("OWtl"),
            o = n("cX6x"),
            l = n("O666");
        let c = "623291997",
            d = i.E().nonnegative().catch(2),
            u = i.E().nonnegative().catch(24),
            p = (0, a.c)(s.a, e => {
                let {
                    get: t
                } = e, n = t(l.a, c), a = null == n ? (0, o.d)(c)?.value : void 0, i = null != t(r.k) && (n?.get("app_disclosure_below_message_actions", !1) ?? a?.app_disclosure_below_message_actions === !0), s = i ? n?.get("app_disclosure_impression_seconds", 2) ?? a?.app_disclosure_impression_seconds : 2, p = i ? n?.get("app_disclosure_cooldown_hours", 24) ?? a?.app_disclosure_cooldown_hours : 24;
                return {
                    enabled: i,
                    aboveActions: i && (n?.get("app_disclosure_above_message_actions", !1) ?? a?.app_disclosure_above_message_actions === !0),
                    inlineWithActions: i && (n?.get("app_disclosure_inline_with_message_actions", !1) ?? a?.app_disclosure_inline_with_message_actions === !0),
                    centered: i && (n?.get("app_disclosure_centered", !1) ?? a?.app_disclosure_centered === !0),
                    smallerFontSize: i && (n?.get("app_disclosure_smaller_font_size", !1) ?? a?.app_disclosure_smaller_font_size === !0),
                    workModeEnabled: n?.get("app_disclosure_in_work_mode", !1) ?? a?.app_disclosure_in_work_mode === !0,
                    standardOnlyForSessionSends: i && (n?.get("app_standard_disclosure_session_sends_only", !1) ?? a?.app_standard_disclosure_session_sends_only === !0),
                    showOnFirstMessage: n?.get("app_disclosure_show_on_first_message", !1) ?? a?.app_disclosure_show_on_first_message === !0,
                    impressionMs: 1e3 * d.parse(s),
                    cooldownMs: 60 * u.parse(p) * 60 * 1e3,
                    hideOnSend: !i || (n?.get("app_hide_disclosure_on_send", !0) ?? a?.app_hide_disclosure_on_send !== !1)
                }
            }, {
                isEqual: (e, t) => e.enabled === t.enabled && e.aboveActions === t.aboveActions && e.inlineWithActions === t.inlineWithActions && e.centered === t.centered && e.smallerFontSize === t.smallerFontSize && e.workModeEnabled === t.workModeEnabled && e.standardOnlyForSessionSends === t.standardOnlyForSessionSends && e.showOnFirstMessage === t.showOnFirstMessage && e.impressionMs === t.impressionMs && e.cooldownMs === t.cooldownMs && e.hideOnSend === t.hideOnSend
            }),
            m = (0, a.c)(s.a, e => {
                let {
                    get: t
                } = e;
                return t(p).enabled
            });
        n.d(t, {}, {
            a: p,
            b: m
        })
    }),
    dBtq: (function(e, t, n) {
        n.d(t, {
            a: () => b,
            b: () => k,
            c: () => _
        });
        var a = n("Q840"),
            i = n("lAQI"),
            r = n("Ow2S"),
            s = n("ISgP"),
            o = n("x4uR"),
            l = n("aFoA"),
            c = n("dQRk"),
            d = n("p0Ph"),
            u = n("OWtl"),
            p = n("Nwp9"),
            m = n("md8w"),
            h = n("AuIy"),
            f = n("hx97"),
            g = n("lX86");
        let y = i.F({
                at: i.E().nonnegative(),
                messageId: i.L()
            }),
            v = (0, p.b)("message-disclosure-standard-impression", null, {
                coerceStoredValue: e => y.safeParse(e).data ?? null
            }),
            w = (0, a.u)(u.a, () => new Map),
            b = (0, a.d)(u.a, (e, t) => {
                let {
                    get: n
                } = t, a = null == e ? void 0 : n(c.y, e);
                return "tpp" !== a && "flora" !== a || n(m.a).workModeEnabled
            }),
            k = (0, a.d)(u.a, (e, t) => {
                let {
                    get: n,
                    scope: a
                } = t, i = n(m.a);
                if (!i.enabled || !n(b, e)) return {};
                let u = n(l.a, e) ?? e,
                    p = n(r.j, u);
                if (p && i.hideOnSend) return {};
                let y = n(c.N, e);
                if (null == y) return {};
                let k = n(c.T, e),
                    x = null != k && n(o.b, k).data?.gizmo.gizmo_snorlax_type === "potion" ? "health" : null,
                    _ = a.get(v),
                    S = Date.now(),
                    j = n(c.J, e),
                    C = null;
                j ? C = n(s.a, e) : p && (C = []);
                let M = i.standardOnlyForSessionSends ? n(d.x, (0, l.d)(n, e)) : void 0;
                return function(e, t) {
                    let n, {
                            hideOnSend: a,
                            readyLatestResponseMessageIds: i,
                            projectKind: r,
                            canShowStandard: s,
                            standardDecisions: o,
                            showOnFirstMessage: l,
                            sessionStartSeconds: c,
                            isLocallySentPrompt: d
                        } = t,
                        u = (0, h.a)(e),
                        p = {},
                        m = r ?? "standard",
                        y = !1,
                        v = !1,
                        w = () => {
                            if (null != n) {
                                if ("standard" !== m) p[m] = n;
                                else if (null == c || y) {
                                    let e = o.get(n);
                                    null == e && (e = l && !v || s(n), o.set(n, e)), e && (p.standard = n)
                                }
                                v = !0, n = void 0
                            }
                        };
                    for (let e of u) {
                        var b;
                        "user" === (b = e).author.role && (0, f.o)(b) && !(0, h.n)(b) && (w(), y = null != c && (null == e.create_time ? null != e.id && d?.(e.id) === !0 : e.create_time >= c), m = r ?? "standard", a && (delete p.standard, delete p.health, delete p.finance)), m = (0, g.b)(e) ?? m, (0, f.l)(e) && (n = e.id)
                    }
                    return null != n && (null == i || i.includes(n)) && w(), p
                }({
                    mapping: y,
                    current_node: n(c.C, e)
                }, {
                    hideOnSend: i.hideOnSend,
                    readyLatestResponseMessageIds: C,
                    projectKind: x,
                    canShowStandard: e => {
                        var t, n, a, r;
                        return t = e, n = _, a = i.cooldownMs, r = S, null == n || n.messageId === t || 0 === a || r < n.at || r - n.at >= a
                    },
                    standardDecisions: n(w),
                    showOnFirstMessage: i.showOnFirstMessage,
                    sessionStartSeconds: i.standardOnlyForSessionSends ? performance.timeOrigin / 1e3 : void 0,
                    isLocallySentPrompt: e => null != M && Object.hasOwn(M, e)
                })
            }, {
                isEqual: (e, t) => e.standard === t.standard && e.health === t.health && e.finance === t.finance
            }),
            x = (0, a.d)(u.a, (e, t) => {
                let {
                    conversationId: n,
                    messageId: a
                } = e, {
                    get: i
                } = t, r = i(k, n);
                return r.health === a ? "health" : r.finance === a ? "finance" : r.standard === a ? "standard" : null
            });

        function _(e, t, n) {
            "standard" === e.get(x, {
                conversationId: t,
                messageId: n
            }) && e.set(v, {
                at: Date.now(),
                messageId: n
            })
        }
    }),
    nMiI: (function(e, t, n) {
        n.d(t, {
            a: () => h,
            b: () => d
        });
        var a = n("ABep"),
            i = n("QosV"),
            r = n("zd8w"),
            s = n("Wf1j"),
            o = n("oyxz");
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
            let t, n, d, f, g, y, v, w, b = (0, i.c)(20),
                {
                    sentAtMs: k,
                    nowMs: x
                } = e,
                _ = (0, s.a)(),
                [S] = (0, r.useState)(m);
            if (!Number.isFinite(k)) return null;
            if (b[0] !== _ || b[1] !== S || b[2] !== x || b[3] !== k) {
                let {
                    date: e,
                    time: a,
                    includeAt: i
                } = (0, c.c)(_, new Date(k), new Date(x ?? S));
                n = e, g = a, d = i ? l.older : l.recent, t = h, f = _.formatMessage(d, {
                    date: n,
                    time: g,
                    day: p
                }), b[0] = _, b[1] = S, b[2] = x, b[3] = k, b[4] = t, b[5] = n, b[6] = d, b[7] = f, b[8] = g
            } else t = b[4], n = b[5], d = b[6], f = b[7], g = b[8];
            return b[9] !== n || b[10] !== g ? (y = {
                date: n,
                time: g,
                day: u
            }, b[9] = n, b[10] = g, b[11] = y) : y = b[11], b[12] !== d || b[13] !== y ? (v = (0, a.jsx)(o.a, {
                ...d,
                values: y
            }), b[12] = d, b[13] = y, b[14] = v) : v = b[14], b[15] !== t || b[16] !== k || b[17] !== f || b[18] !== v ? (w = (0, a.jsx)(t, {
                label: f,
                sentAtMs: k,
                children: v
            }), b[15] = t, b[16] = k, b[17] = f, b[18] = v, b[19] = w) : w = b[19], w
        }

        function u(e) {
            return (0, a.jsx)("span", {
                className: "font-medium",
                children: e
            })
        }

        function p(e) {
            return e.join("")
        }

        function m() {
            return Date.now()
        }

        function h(e) {
            let t, n, r, s = (0, i.c)(11),
                {
                    children: o,
                    compact: l,
                    label: c,
                    sentAtMs: d
                } = e,
                u = void 0 !== l && l,
                p = u ? "flex justify-center py-2" : "flex justify-center py-4",
                m = null == c ? void 0 : "separator",
                h = u ? "text-xs text-tertiary select-none" : "text-sm leading-5 font-normal text-tertiary select-none";
            return s[0] !== d ? (t = new Date(d).toISOString(), s[0] = d, s[1] = t) : t = s[1], s[2] !== o || s[3] !== h || s[4] !== t ? (n = (0, a.jsx)("time", {
                className: h,
                dateTime: t,
                children: o
            }), s[2] = o, s[3] = h, s[4] = t, s[5] = n) : n = s[5], s[6] !== c || s[7] !== p || s[8] !== m || s[9] !== n ? (r = (0, a.jsx)("div", {
                "aria-label": c,
                className: p,
                role: m,
                "data-markdown-copy": "exclude",
                children: n
            }), s[6] = c, s[7] = p, s[8] = m, s[9] = n, s[10] = r) : r = s[10], r
        }
    }),
    ds7f: (function(e, t, n) {
        class a extends Event {
            static eventName = "turn-activity-window-will-mount";
            afterMount;
            constructor() {
                super(a.eventName, {
                    bubbles: !0
                })
            }
        }
        n.d(t, {}, {
            a: a
        })
    }),
    WSJu: (function(e, t, n) {
        var a = n("W4He");

        function i(e) {
            return r(e) && (null != e.activity || "keep" !== e.role)
        }

        function r(e) {
            return !e.pendingAnswer && !e.preparing
        }

        function s(e, t) {
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
            a: i,
            b: function(e, t) {
                let {
                    fallback: n,
                    direction: o,
                    opening: l,
                    previous: c,
                    elapsedWaitKey: d
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, u = e.findLastIndex(e => "bubble" === e.role), p = e[u]?.key ?? "initial", m = e.findLastIndex(r), h = e[m], f = m > u ? h : void 0, g = c?.slice === p ? c : void 0, y = g?.source === h?.key ? g : void 0, v = e.findLast(i), w = function(e, t, n, i, r, o, l, c) {
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
                    if (i?.activity) {
                        var d, u;
                        return {
                            kind: "label",
                            source: i.key,
                            status: i.acceptsDirection && l ? (d = i.activity, u = l, "live" === d.kind && "activity" !== d.labelPriority || "tool-status" === d.kind && "immediate" === d.labelPriority ? d : s(d, u)) : i.activity
                        }
                    }
                    if (r?.streamingCommentary || (0, a.b)(i, o, e, t)) return {
                        kind: "quiet"
                    };
                    let p = e.findLast(e => e.commandRow && e.runningWork && e.activity);
                    if (l && (i?.acceptsDirection || null != o || e.some(e => e.commandRow))) {
                        let e = i?.acceptsDirection ? i.key : void 0,
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
                    return p?.activity && null != o && null != i ? i.commandRow && c ? {
                        kind: "label",
                        source: i.key,
                        status: "live" === c.kind ? {
                            ...c,
                            animateIcon: !1
                        } : c
                    } : {
                        kind: "label",
                        status: p.activity
                    } : "delayed-thinking" === o && r !== i && r?.runningWork ? {
                        kind: "quiet"
                    } : "string" == typeof o ? {
                        kind: "wait"
                    } : o ? {
                        kind: "label",
                        status: o
                    } : {
                        kind: "quiet"
                    }
                }(e, u + 1, t, f, v, n, o, y?.status), b = "label" === w.kind && null != w.source && w.source === h?.key, k = null != g && (null != y || null == h || "bubble" === h.role), x = c;
                if (b && h?.activity && y?.status !== h.activity ? x = {
                        slice: p,
                        source: h.key,
                        status: h.activity
                    } : b || "wait" === w.kind && k || (x = void 0), "wait" !== w.kind) return {
                    slice: p,
                    response: w,
                    nextActivity: x,
                    timer: void 0
                };
                let _ = null != g || null != v && "bubble" !== v.role,
                    S = JSON.stringify([p, v?.key]);
                return {
                    slice: p,
                    nextActivity: x,
                    ...(0, a.c)({
                        key: S,
                        elapsedWaitKey: d,
                        midTurn: _,
                        role: v?.role,
                        previous: k ? g.status : void 0,
                        source: y?.source,
                        opening: "starting" === n ? l : void 0
                    })
                }
            }
        })
    }),
    W4He: (function(e, t, n) {
        var a = n("c8QI");

        function i(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            for (let n = t; n < e.length; n++)
                if (e[n].runningWork) return !0;
            return !1
        }
        n.d(t, {}, {
            a: function(e, t) {
                if (!e.compacting) {
                    if ("codex" === e.family) return e.canPresent && (e.hasActivity || e.waitingForFirstActivity || i(t)) ? null != e.namedStatus ? e.namedStatus : e.waitingForFirstActivity && !e.starting ? {
                        kind: "thinking"
                    } : e.starting ? "starting" : "delayed-thinking" : void 0;
                    if (e.canPresent && e.hideReasoning) return {
                        kind: "thinking"
                    };
                    if (e.awaitingUntitledReasoning || e.canPresent && (e.waitingForResponse || e.beforeFirstResponse || "commentary" === e.tailRole || "final" === e.tailRole || i(t))) return "delayed-thinking"
                }
            },
            b: function(e, t, n, a) {
                return e?.role === "commentary" && (!0 === e.streamingCommentary || "delayed-thinking" !== t && !i(n, a))
            },
            c: function(e) {
                let {
                    key: t,
                    elapsedWaitKey: n,
                    role: i,
                    midTurn: r,
                    previous: s,
                    source: o,
                    opening: l
                } = e, c = {
                    key: t,
                    delayMs: r && "commentary" !== i && "final" !== i ? 5e3 : 1e3
                };
                return n === t ? {
                    timer: c,
                    response: {
                        kind: "label",
                        source: o,
                        status: {
                            kind: "thinking",
                            labelKey: r ? a.a : void 0
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
    Z8hx: (function(e, t, n) {
        var a = n("QTNa"),
            i = n("Usao");
        let r = "disclosure";

        function s(e, t) {
            return null == t || !(0, i.g)(e.get(t))
        }
        n.d(t, {}, {
            a: r,
            b: s,
            c: function(e, t, n) {
                return {
                    rows: [{
                        key: e,
                        role: "bubble",
                        node: t,
                        canOwnLatestTurnFollowContent: !1
                    }],
                    phase: "working",
                    fallback: "creating" === n ? "creating" : {
                        kind: "thinking"
                    },
                    summary: {
                        deniedActionCount: 0,
                        workedForItem: null,
                        workedDurationMs: null
                    }
                }
            },
            d: function(e, t) {
                let n, o, l, {
                        response: c,
                        footer: d = [],
                        slice: u
                    } = t,
                    p = function(e, t) {
                        let n, a, s = [],
                            o = new Map,
                            l = !1;
                        for (let t of e)
                            if (!t.pendingAnswer && !t.preparing) {
                                if ((0, i.d)(t)) n = t;
                                else if (null != n || "keep" !== t.role) {
                                    l = !0;
                                    break
                                }
                            } n || "member" === t.continuationSection || s.push({
                            kind: "header",
                            sectionKey: r
                        });
                        let c = !1;
                        for (let l = 0; l < e.length; l++) {
                            let d = e[l];
                            if (d.pendingAnswer) continue;
                            let u = {
                                kind: "row",
                                row: d,
                                sourceIndex: l
                            };
                            if (d.recap?.kind === "collapse") {
                                let e = "recap:" + d.recap.key;
                                o.has(e) || (o.set(e, {
                                    ...(0, i.k)(d.recap.persistedCollapsed, t.preferences.get(e)),
                                    recapSourceIndex: l
                                }), s.push({
                                    kind: "header",
                                    sectionKey: e
                                })), u.sectionKey = e
                            } else if (!d.recap) {
                                let e = (0, i.b)(d.role, null != a);
                                "start-slice" === e ? a = void 0 : "readable-reply" === e ? (a && (a.sectionKey = r, c = !0), a = u) : "fold" === e && (u.sectionKey = r, c = !0)
                            }
                            s.push(u), d === n && s.push({
                                kind: "header",
                                sectionKey: r
                            })
                        }
                        a && t.continuationSection && "interrupted" === t.phase && (a.sectionKey = r);
                        let d = t.activityDetailsDeferred ? {
                                kind: "disclosure",
                                state: "collapsed"
                            } : (0, i.c)(t.continuationSection ? "finished" : t.phase, null != t.continuationSection || c, t.collapsed ?? t.preferences.get(r), t.continuationSection && "prefer-open" === t.policy ? "automatic" : t.policy),
                            u = "working" === t.phase && !l && !t.hasVisibleResponse;
                        return o.set(r, {
                            ...d,
                            reserved: null != n && "force-open" !== t.policy && ("disclosure" === d.kind || u)
                        }), {
                            entries: s,
                            sections: o
                        }
                    }(e, {
                        ...t,
                        hasVisibleResponse: "label" === c.kind
                    }),
                    m = "quiet" === c.kind ? void 0 : c.source,
                    h = p.entries.findLast(e => "row" === e.kind && !e.row.preparing),
                    f = h?.kind === "row" && h.row.key === m ? h : void 0,
                    g = d.findLast(e => e.canOwnLatestTurnFollowContent && !e.preparing) ?? p.entries.findLast(e => "row" === e.kind && e.row.canOwnLatestTurnFollowContent && !e.row.preparing && s(p.sections, e.sectionKey))?.row,
                    y = "label" === c.kind && null == m,
                    v = "initial",
                    w = t.neighbors?.before === "adjacent-user-prompts" ? "bubble" : void 0;

                function b(e, t, l, c) {
                    "bubble" === e.role && (v = e.key);
                    let d = c?.kind === "quiet",
                        m = null != c,
                        h = v !== u && "final" === e.role && l !== r,
                        f = (0, i.d)(e) ? "bubble" : "item",
                        b = {
                            kind: "row",
                            itemKey: e.key,
                            role: e.role,
                            sourceIndex: t,
                            ownsFollow: y ? null == t : e === g,
                            sectionKey: l,
                            renderKey: m || h ? `response:${v}` : e.key,
                            hidden: d || e.preparing,
                            parked: d,
                            response: c,
                            inlineUserActions: !1,
                            spacing: (0, a.a)(w, f, null != e.activityStackKey && e.activityStackKey === n)
                        };
                    return !b.hidden && s(p.sections, l) && (n = e.activityStackKey, "bubble" === f && "bubble" === w && (null != o && (o.inlineUserActions = !0), b.inlineUserActions = !0), w = f, o = "bubble" === f ? b : void 0), b
                }
                let k = [];
                for (let e of p.entries)
                    if ("header" === e.kind) {
                        let t = p.sections.get(e.sectionKey);
                        (t?.reserved || t?.kind === "disclosure") && (n = void 0, w = "disclosure", o = void 0), k.push(e)
                    } else if (e !== f) {
                    let t = "answer" === c.kind && e.row.key === m;
                    k.push(b(e.row, e.sourceIndex, e.sectionKey, t ? c : void 0))
                }
                f ? l = b(f.row, f.sourceIndex, f.sectionKey, c) : null == m && (l = b({
                    key: "response-placeholder",
                    role: "work",
                    activityStackKey: n,
                    canOwnLatestTurnFollowContent: !0
                }, void 0, void 0, c));
                let x = d.map((e, t) => b(e, t));
                return null != o && t.neighbors?.after === "adjacent-user-prompts" && (o.inlineUserActions = !0), {
                    transcript: k,
                    tail: l,
                    footer: x,
                    sections: p.sections
                }
            }
        })
    }),
    E4TW: (function(e, t, n) {
        n.d(t, {
            a: () => I
        });
        var a = n("ABep"),
            i = n("QosV"),
            r = n("on57"),
            s = n("zd8w"),
            o = n("oyxz"),
            l = n("ekLq"),
            c = n("eQiz"),
            d = n("T1PX"),
            u = n("FJmY"),
            p = n("mRLe"),
            m = n("QiEn"),
            h = n("QEDJ");
        n("V8uZ");
        var f = n("K5Kt"),
            g = n("HBzQ"),
            y = n("PxlB"),
            v = n("Z8hx"),
            w = n("wD9O"),
            b = n("ds7f");
        let k = new WeakMap,
            x = new WeakMap;

        function _(e) {
            let t, n, r, o, c, d, u, p = (0, i.c)(21),
                {
                    enabled: m,
                    pinned: h,
                    visible: f,
                    targets: g,
                    estimatedHeight: y,
                    children: v
                } = e,
                b = (0, s.useRef)(null),
                _ = (0, w.c)(),
                [C, M] = (0, s.useState)(h || !m ? null : void 0);
            m && !h || Object.is(C, null) || M(null), p[0] !== m || p[1] !== h || p[2] !== f || p[3] !== _ ? (t = () => {
                var e;
                let t, n, a = b.current,
                    i = a?.closest(l.c.timelineScroll);
                if (!m || h || !f || null == a) return;
                if (null == i) return void M(null);
                let r = (e = i, null == (t = k.get(e)) && (t = e.getBoundingClientRect(), k.set(e, t), queueMicrotask(() => k.delete(e))), t),
                    s = a.getBoundingClientRect();
                s.bottom >= r.top - r.width && s.top <= r.bottom + r.width && M(null);
                let o = e => {
                        n?.();
                        let t = a.hasAttribute("data-turn-activity-spacer");
                        if (n = t ? void 0 : function(e, t) {
                                let n = e.ownerDocument;
                                if (e.contains(n.activeElement)) {
                                    let a = !0,
                                        i = () => {
                                            queueMicrotask(() => {
                                                a && !e.contains(n.activeElement) && t()
                                            })
                                        };
                                    return e.addEventListener("focusout", i), () => {
                                        a = !1, e.removeEventListener("focusout", i)
                                    }
                                }
                                if (S(e)) {
                                    let a = () => {
                                        S(e) || t()
                                    };
                                    return n.addEventListener("selectionchange", a), () => n.removeEventListener("selectionchange", a)
                                }
                            }(a, () => o())) return;
                        let i = (e ?? a.getBoundingClientRect().height) / _;
                        i > 0 && M(e => t && void 0 === e ? void 0 : i)
                    },
                    c = function(e, t, n) {
                        let a = x.get(e);
                        if (null == a) {
                            let t = new Map;
                            a = {
                                observer: new IntersectionObserver(e => {
                                    for (let n of e) t.get(n.target)?.(n)
                                }, {
                                    root: e,
                                    rootMargin: "100% 0px"
                                }),
                                listeners: t
                            }, x.set(e, a)
                        }
                        let {
                            observer: i,
                            listeners: r
                        } = a;
                        return r.set(t, n), i.observe(t), () => {
                            i.unobserve(t), r.delete(t), 0 === r.size && (i.disconnect(), x.delete(e))
                        }
                    }(i, a, e => {
                        e.isIntersecting ? (n?.(), n = void 0, M(null)) : o(e.boundingClientRect.height)
                    });
                return () => {
                    c(), n?.()
                }
            }, n = [m, h, f, _], p[0] = m, p[1] = h, p[2] = f, p[3] = _, p[4] = t, p[5] = n) : (t = p[4], n = p[5]), (0, s.useLayoutEffect)(t, n);
            let A = void 0 === C ? y : C,
                T = m && !h && f ? A : null,
                D = null == T && (!m || h || f);
            p[6] === Symbol.for("react.memo_cache_sentinel") ? (r = () => M(null), p[6] = r) : r = p[6];
            let I = null != T || void 0,
                K = m ? g : void 0;
            return p[7] !== T ? (o = null == T ? void 0 : {
                height: T
            }, p[7] = T, p[8] = o) : o = p[8], p[9] !== v || p[10] !== D ? (c = D ? v() : null, p[9] = v, p[10] = D, p[11] = c) : c = p[11], p[12] !== D || p[13] !== c ? (d = (0, a.jsx)(j, {
                windowRef: b,
                showBody: D,
                children: c
            }), p[12] = D, p[13] = c, p[14] = d) : d = p[14], p[15] !== I || p[16] !== K || p[17] !== o || p[18] !== d || p[19] !== f ? (u = (0, a.jsx)("div", {
                ref: b,
                onFocusCapture: r,
                "data-turn-activity-window": "",
                "data-turn-activity-spacer": I,
                "data-open": f,
                "data-turn-activity-targets": K,
                style: o,
                children: d
            }), p[15] = I, p[16] = K, p[17] = o, p[18] = d, p[19] = f, p[20] = u) : u = p[20], u
        }

        function S(e) {
            let t = e.ownerDocument.getSelection();
            if (null == t) return !1;
            for (let n = 0; n < t.rangeCount; n++) {
                let a = t.getRangeAt(n);
                if (!a.collapsed && a.intersectsNode(e)) return !0
            }
            return !1
        }
        class j extends s.Component {
            getSnapshotBeforeUpdate(e) {
                let t = this.props.windowRef.current;
                if (e.showBody || !this.props.showBody || !t?.hasAttribute("data-turn-activity-spacer")) return null;
                let n = new b.a;
                return t.dispatchEvent(n), n.afterMount ?? null
            }
            componentDidUpdate(e, t, n) {
                n?.()
            }
            render() {
                return this.props.children
            }
        }
        var C = n("WSJu"),
            M = n("X9UJ"),
            A = n("Usao"),
            T = n("Kd6L");
        let D = {
            kind: "thinking",
            labelKey: "starting",
            label: (0, a.jsx)(o.a, {
                ...y.a.creating
            })
        };

        function I(e) {
            let t, n, o, p, h, f, g, y, w, b, k, x, S, j, M = (0, i.c)(51),
                {
                    rows: I,
                    footer: R,
                    phase: F,
                    fallback: N,
                    direction: z,
                    continuationSection: E,
                    finishing: B,
                    labelCadence: G,
                    statusBoundary: q,
                    summary: Q,
                    collapsed: U,
                    activityDetailsDeferred: V,
                    onSetCollapsed: H,
                    followContentRef: J,
                    policy: Z
                } = e;
            M[0] !== R ? (t = void 0 === R ? [] : R, M[0] = R, M[1] = t) : t = M[1];
            let X = t,
                $ = void 0 === G || G,
                [Y, ee] = (0, s.useState)(P),
                [et, en] = (0, s.useState)(K),
                [ea, ei] = (0, s.useState)();
            M[2] === Symbol.for("react.memo_cache_sentinel") ? (n = {
                elapsed: !1
            }, M[2] = n) : n = M[2];
            let [er, es] = (0, s.useState)(n), {
                response: eo,
                nextActivity: el,
                timer: ec,
                slice: ed
            } = (0, C.b)(I, F, {
                direction: z,
                fallback: "creating" === N ? "starting" : N,
                opening: D,
                previous: ea,
                elapsedWaitKey: er.elapsed ? er.key : void 0
            });
            ea !== el && ei(el);
            let eu = ec?.key,
                ep = ec?.delayMs;
            er.key !== eu && es({
                key: eu,
                elapsed: !1
            }), (0, s.useEffect)(() => {
                if (null == eu || null == ep) return;
                let e = window.setTimeout(() => es(e => e.key === eu ? {
                    key: eu,
                    elapsed: !0
                } : e), ep);
                return () => window.clearTimeout(e)
            }, [eu, ep]);
            let em = (0, d.a)(),
                eh = (0, s.useRef)(null),
                ef = (0, s.useRef)(void 0),
                eg = (0, s.useContext)(c.a),
                ey = (0, v.d)(I, {
                    neighbors: eg,
                    activityDetailsDeferred: void 0 !== V && V,
                    continuationSection: E,
                    phase: F,
                    policy: void 0 === Z ? "automatic" : Z,
                    collapsed: U,
                    preferences: Y,
                    footer: X,
                    response: eo,
                    slice: ed
                }),
                ev = ey.sections.get(v.a),
                [ew, eb] = (0, s.useState)(null),
                ek = !em && null != ew && (0, A.g)(ey.sections.get(ew.section)) ? ew.rows : null;
            M[3] !== ek || M[4] !== ew || M[5] !== eb ? (o = () => {
                if (null == ew) return;
                let e = () => eb(null);
                if (null == ek || document.hidden) return void e();
                let t = window.setTimeout(e, 200);
                return document.addEventListener("visibilitychange", e), () => {
                    window.clearTimeout(t), document.removeEventListener("visibilitychange", e)
                }
            }, M[3] = ek, M[4] = ew, M[5] = eb, M[6] = o) : o = M[6], M[7] !== ek || M[8] !== ew ? (p = [ek, ew], M[7] = ek, M[8] = ew, M[9] = p) : p = M[9], (0, s.useLayoutEffect)(o, p), M[10] !== ey.sections || M[11] !== H || M[12] !== em || M[13] !== I || M[14] !== eb || M[15] !== Q || M[16] !== ev ? (h = function(e) {
                let t = ey.sections.get(e),
                    n = t?.recapSourceIndex == null ? void 0 : I[t.recapSourceIndex].recap,
                    i = n?.kind === "collapse" ? n.key : void 0,
                    r = (0, A.g)(t),
                    s = t?.kind === "disclosure",
                    o = t?.reserved;
                return (0, a.jsx)(O, {
                    spacing: "item",
                    clipVertically: !0,
                    visible: o || s,
                    reducedMotion: em || t === ev && r,
                    children: (0, a.jsx)("div", {
                        className: o ? "relative min-h-lh text-size-chat [&_button]:align-top" : "relative",
                        "aria-hidden": !s || void 0,
                        "data-turn-summary-slot": o || void 0,
                        "data-turn-section": s ? e : void 0,
                        "data-turn-recap": i,
                        children: s && (0, a.jsx)(u.a, {
                            ...Q,
                            label: n?.label,
                            description: n?.description,
                            headerAction: n?.headerAction,
                            isCollapsed: r,
                            onToggle: a => {
                                let i = !r,
                                    s = i && !em && !document.hidden && eh.current ? function(e, t) {
                                        let n = e.closest(l.c.timelineScroll)?.getBoundingClientRect(),
                                            a = Math.max(0, n?.top ?? 0),
                                            i = Math.min(window.innerHeight, n?.bottom ?? window.innerHeight),
                                            r = new Set,
                                            s = `[data-history-section="${CSS.escape(t)}"][data-open="true"] > [data-transcript-key]`;
                                        for (let t of e.querySelectorAll(`:scope > ${s}, :scope > [data-turn-activity-window] > ${s}`)) {
                                            let e = t.getBoundingClientRect();
                                            e.top < i && e.bottom > a && null != t.dataset.transcriptKey && r.add(t.dataset.transcriptKey)
                                        }
                                        return r
                                    }(eh.current, e) : null;
                                eb(s?.size ? {
                                    section: e,
                                    rows: s
                                } : null);
                                let o = null == n ? H : n.onSetCollapsed;
                                o ? o(i) : ee(t => new Map(t).set(e, i)), a && !i && t === ev && requestAnimationFrame(() => eh.current?.querySelector("[data-auto-review-denied]")?.scrollIntoView({
                                    block: "center"
                                }))
                            }
                        })
                    })
                }, e)
            }, M[10] = ey.sections, M[11] = H, M[12] = em, M[13] = I, M[14] = eb, M[15] = Q, M[16] = ev, M[17] = h) : h = M[17];
            let ex = h;
            if (M[18] !== ey.sections || M[19] !== ey.tail || M[20] !== ey.transcript ? (f = () => {
                    if (null == ef.current) return;
                    let e = ey.tail?.itemKey === ef.current ? ey.tail : ey.transcript.find(e => "row" === e.kind && e.itemKey === ef.current);
                    e?.kind === "row" && null != e.sectionKey && (0, A.g)(ey.sections.get(e.sectionKey)) && eh.current?.querySelector(`[data-turn-section="${CSS.escape(e.sectionKey)}"] button`)?.focus({
                        preventScroll: !0
                    })
                }, M[18] = ey.sections, M[19] = ey.tail, M[20] = ey.transcript, M[21] = f) : f = M[21], (0, s.useLayoutEffect)(f), M[22] !== et) {
                for (let [e, t] of(g = new Map, et)) t.region && g.set(t.region.slot, JSON.stringify([t.region.slot, e]));
                M[22] = et, M[23] = g
            } else g = M[23];
            M[24] !== ek || M[25] !== et || M[26] !== N || M[27] !== J || M[28] !== $ || M[29] !== ey.sections || M[30] !== g || M[31] !== F || M[32] !== em || M[33] !== ex || M[34] !== q ? (y = function(e, t) {
                if ("header" === e.kind) return ex(e.sectionKey);
                let {
                    itemKey: n,
                    sourceIndex: i,
                    role: s,
                    renderKey: o,
                    spacing: l,
                    sectionKey: d,
                    hidden: u,
                    parked: p,
                    response: h,
                    ownsFollow: f
                } = e, y = null == i ? void 0 : t[i], w = y?.node, b = "working" === F && y?.runningWork && y.activity?.kind !== "thinking" ? y.activity : void 0, k = et.get(n), x = y?.commandRow ? n : k?.region?.key ?? g.get(o) ?? o, _ = null == h && "working" === F ? y?.getHistoryStatus?.() : void 0, S = h?.kind === "label" ? h.status : _ ?? b ?? (k?.expanded ? y?.liveDisclosure?.getCompletedStatus?.() : void 0);
                if (S) {
                    let e = y?.liveDisclosure?.runningCommands === !0,
                        t = null != k && (y?.liveDisclosure?.hasFailure || !!k.runningCommands === e) ? k.expanded : y?.liveDisclosure?.initiallyExpanded ?? !1;
                    w = "creating" === N && null == y ? (0, a.jsx)(m.a, {
                        phase: "creating",
                        placeInline: !0,
                        useTurnLabel: !0
                    }) : (0, a.jsx)(L, {
                        status: S,
                        historical: null != _,
                        labelCadence: $ && null == _,
                        disclosure: y?.liveDisclosure,
                        expanded: t,
                        onToggle: () => en(a => new Map(a).set(n, {
                            expanded: !t,
                            runningCommands: e,
                            region: k?.region ?? (y?.runningWork && !y.commandRow ? {
                                slot: o,
                                key: x
                            } : void 0)
                        }))
                    })
                }
                return (0, a.jsx)(O, {
                    spacing: l,
                    hidden: u,
                    visible: (0, v.b)(ey.sections, d),
                    sectionKey: d,
                    closing: ek?.has(n),
                    clipVertically: null != d,
                    reducedMotion: em,
                    children: (0, a.jsxs)("div", {
                        ref: f ? J : void 0,
                        className: (0, r.b)(y?.activityStackKey != null && "activityRow-Z62Yoj", y?.commandRow && T.a.commandRow),
                        "data-transcript-key": p ? void 0 : n,
                        "data-turn-response": p ? void 0 : h?.kind,
                        "data-local-conversation-final-assistant": "final" === s || void 0,
                        children: [null == y && h?.kind === "label" ? q : y?.firstResponseBoundary, (0, a.jsx)(c.b, {
                            value: e.inlineUserActions ? "inline" : "legacy",
                            children: w
                        })]
                    })
                }, x)
            }, M[24] = ek, M[25] = et, M[26] = N, M[27] = J, M[28] = $, M[29] = ey.sections, M[30] = g, M[31] = F, M[32] = em, M[33] = ex, M[34] = q, M[35] = y) : y = M[35];
            let e_ = y;
            M[36] !== e_ || M[37] !== I ? (w = e => e_(e, I), M[36] = e_, M[37] = I, M[38] = w) : w = M[38], M[39] !== et || M[40] !== g ? (b = e => et.get(e.itemKey)?.region == null && !g.has(e.renderKey), M[39] = et, M[40] = g, M[41] = b) : b = M[41];
            let eS = function(e, t, n, i, r) {
                let o = [],
                    l = e.transcript.length >= 48,
                    [c, d] = (0, s.useState)(() => ({
                        byRow: new Map,
                        nextId: 0
                    })),
                    u = new Map,
                    p = c.nextId,
                    m = !1,
                    h = new Set,
                    f = [];

                function g() {
                    for (let [e, t] of f.entries()) {
                        if (null != t.id) continue;
                        let n = f[e - 1];
                        null != n && n.rows.push(...t.rows.splice(0, 12 - n.rows.length));
                        let a = f[e + 1];
                        if (null != a) {
                            let e = 12 - a.rows.length;
                            a.rows.unshift(...t.rows.splice(Math.max(0, t.rows.length - e)))
                        }
                    }
                    for (let t of f)
                        for (let r = 0; r < t.rows.length; r += 12) ! function(t, r) {
                            let s = null == r || h.has(r) ? p++ : r;
                            h.add(s);
                            let d = new Set,
                                f = !1,
                                g = 0;
                            for (let {
                                    entry: a,
                                    activity: i
                                }
                                of t) {
                                for (let e of (u.set(a.itemKey, s), m = m || c.byRow.get(a.itemKey) !== s, i.targetIds)) d.add(encodeURIComponent(e));
                                f = f || i.pinned || a.ownsFollow, (!a.hidden && (0, v.b)(e.sections, a.sectionKey) || n?.has(a.itemKey) === !0) && g++
                            }
                            o.push((0, a.jsx)(_, {
                                enabled: l,
                                pinned: f,
                                visible: g > 0,
                                estimatedHeight: 28 * g,
                                targets: [...d].join(" "),
                                children: () => t.map(e => {
                                    let {
                                        entry: t
                                    } = e;
                                    return i(t)
                                })
                            }, `activity-window:${s}`))
                        }(t.rows.slice(r, r + 12), t.id);
                    f.length = 0
                }
                for (let n of e.transcript) {
                    if ("row" === n.kind && null != n.sourceIndex && null == n.response && r(n)) {
                        let e = t[n.sourceIndex].activityWindow;
                        if (null != e) {
                            let t = c.byRow.get(n.itemKey),
                                a = f.at(-1);
                            null != a && a.id === t ? a.rows.push({
                                entry: n,
                                activity: e
                            }) : f.push({
                                id: t,
                                rows: [{
                                    entry: n,
                                    activity: e
                                }]
                            });
                            continue
                        }
                    }
                    g(), o.push(i(n))
                }
                return g(), (m || u.size !== c.byRow.size) && d({
                    byRow: u,
                    nextId: p
                }), o
            }(ey, I, ek, w, b);
            for (let e of (ey.tail && eS.push(e_(ey.tail, I)), ey.footer)) eS.push(e_(e, X));
            let ej = void 0 !== B && B || void 0,
                eC = ev?.kind === "disclosure" ? ev.state : "live";
            return M[42] === Symbol.for("react.memo_cache_sentinel") ? (k = e => {
                ef.current = e.target.closest("[data-transcript-key]")?.dataset.transcriptKey
            }, x = e => {
                null == e.relatedTarget || e.currentTarget.contains(e.relatedTarget) || (ef.current = void 0)
            }, M[42] = k, M[43] = x) : (k = M[42], x = M[43]), M[44] !== ey.sections ? (S = (0, a.jsx)(W, {
                root: eh,
                sections: ey.sections
            }), M[44] = ey.sections, M[45] = S) : S = M[45], M[46] !== eS || M[47] !== ej || M[48] !== eC || M[49] !== S ? (j = (0, a.jsxs)("div", {
                ref: eh,
                className: "turn-BAkky6",
                "data-turn-finishing": ej,
                "data-transcript-spacing": "",
                "data-turn-transcript": eC,
                onFocusCapture: k,
                onBlurCapture: x,
                children: [S, eS]
            }), M[46] = eS, M[47] = ej, M[48] = eC, M[49] = S, M[50] = j) : j = M[50], j
        }

        function K() {
            return new Map
        }

        function P() {
            return new Map
        }
        class W extends s.Component {
            getSnapshotBeforeUpdate(e) {
                for (let [t, n] of this.props.sections)
                    if ((0, A.g)(n) && !(0, A.g)(e.sections.get(t))) {
                        this.props.root.current?.dispatchEvent(new Event(h.a, {
                            bubbles: !0
                        }));
                        break
                    } return null
            }
            componentDidUpdate() {}
            render() {
                return null
            }
        }

        function O(e) {
            let t, n, o, l, c = (0, i.c)(18),
                {
                    visible: d,
                    closing: u,
                    sectionKey: m,
                    hidden: h,
                    clipVertically: f,
                    reducedMotion: g,
                    spacing: y,
                    children: v
                } = e,
                w = void 0 !== u && u,
                b = void 0 !== h && h,
                k = f && "overflow-y-clip";
            c[0] !== k ? (t = (0, r.b)("region-l0nj51", k), c[0] = k, c[1] = t) : t = c[1];
            let x = d && !b,
                _ = w || void 0,
                S = g || void 0,
                j = !d,
                C = !d || void 0;
            c[2] !== y ? (n = (0, a.jsx)(p.a, {
                variant: y,
                className: "gap-R3pVUM"
            }), c[2] = y, c[3] = n) : n = c[3];
            let M = d || w ? "visible" : "hidden";
            return c[4] !== v || c[5] !== M ? (o = (0, a.jsx)(s.Activity, {
                mode: M,
                children: v
            }), c[4] = v, c[5] = M, c[6] = o) : o = c[6], c[7] !== b || c[8] !== m || c[9] !== n || c[10] !== o || c[11] !== t || c[12] !== x || c[13] !== _ || c[14] !== S || c[15] !== j || c[16] !== C ? (l = (0, a.jsxs)("div", {
                className: t,
                hidden: b,
                "data-open": x,
                "data-history-section": m,
                "data-closing": _,
                "data-instant": S,
                inert: j,
                "aria-hidden": C,
                children: [n, o]
            }), c[7] = b, c[8] = m, c[9] = n, c[10] = o, c[11] = t, c[12] = x, c[13] = _, c[14] = S, c[15] = j, c[16] = C, c[17] = l) : l = c[17], l
        }

        function L(e) {
            let t, n, s, o, l, c = (0, i.c)(19),
                {
                    historical: d,
                    status: u,
                    labelCadence: p,
                    disclosure: m,
                    expanded: h,
                    onToggle: y
                } = e;
            c[0] !== m ? (t = m ?? {}, c[0] = m, c[1] = t) : t = c[1];
            let {
                details: v,
                below: w,
                accessory: b,
                containsStepLayout: k
            } = t, x = d ? void 0 : "";
            return c[2] !== k || c[3] !== v || c[4] !== h || c[5] !== y ? (n = null == v ? void 0 : {
                expanded: h,
                onToggle: y,
                details: k ? v : (0, a.jsx)(f.a, {
                    variant: "steps",
                    children: v
                })
            }, c[2] = k, c[3] = v, c[4] = h, c[5] = y, c[6] = n) : n = c[6], c[7] !== d || c[8] !== p || c[9] !== u ? (s = d && "live" === u.kind ? (0, a.jsxs)("span", {
                className: (0, r.b)(T.a.line, "inline-flex min-w-0 items-center gap-2 text-tertiary"),
                children: [u.icons.original, (0, a.jsx)("span", {
                    className: "truncate",
                    children: u.label
                })]
            }) : (0, a.jsx)(M.a, {
                status: u,
                cadenced: p
            }), c[7] = d, c[8] = p, c[9] = u, c[10] = s) : s = c[10], c[11] !== b || c[12] !== n || c[13] !== s ? (o = (0, a.jsx)(g.a, {
                accessory: b,
                disclosure: n,
                children: s
            }), c[11] = b, c[12] = n, c[13] = s, c[14] = o) : o = c[14], c[15] !== w || c[16] !== x || c[17] !== o ? (l = (0, a.jsxs)("div", {
                "data-live-response-surface": x,
                className: "flex min-w-0 flex-col",
                children: [o, w]
            }), c[15] = w, c[16] = x, c[17] = o, c[18] = l) : l = c[18], l
        }
    }),
    XsXa: (function(e, t, n) {
        var a = n("RaSH");
        let i = (0, a.a)(new Map).readable;
        n.d(t, {}, {
            a: function() {
                let {
                    get: e,
                    readable: t,
                    set: n
                } = (0, a.a)(new Map);
                return {
                    readable: t,
                    setCollapsed(t, a, i) {
                        let r = e(),
                            s = r.get(t);
                        s?.get(a) !== i && n(new Map(r).set(t, new Map(s).set(a, i)))
                    }
                }
            },
            b: i
        })
    })
};