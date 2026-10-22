export const __rspack_esm_id = 531579;
export const __rspack_esm_ids = [531579];
export const __webpack_modules__ = {
    kpM: (function(e, t, n) {
        var r = n("A");
        n("zd"), t.a = e => (0, r.jsx)("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, r.jsx)("path", {
                d: "M12.1338 5.94433C12.3919 5.77382 12.7434 5.80202 12.9707 6.02929C13.1979 6.25656 13.2261 6.60807 13.0556 6.8662L12.9707 6.9707L8.47067 11.4707C8.21097 11.7304 7.78896 11.7304 7.52926 11.4707L3.02926 6.9707L2.9443 6.8662C2.77379 6.60807 2.80199 6.25656 3.02926 6.02929C3.25653 5.80202 3.60804 5.77382 3.86617 5.94433L3.97067 6.02929L7.99996 10.0586L12.0293 6.02929L12.1338 5.94433Z"
            })
        })
    }),
    TS0: (function(e, t, n) {
        var r = n("Xnl"),
            l = n("tSE");
        let a = (0, r.v)(l.a, e => !1, void 0, {
            autoDispose: 6e4
        });
        n.d(t, {}, {
            a: a
        })
    }),
    Xhc: (function(e, t, n) {
        n.d(t, {
            BrowserComposerDisclaimer: () => b,
            BrowserComposerDisclaimerMessage: () => S
        });
        var r = n("A"),
            l = n("Qo"),
            a = n("Xnl"),
            o = n("oy"),
            s = n("Qg"),
            i = n("HZ"),
            u = n("OF"),
            c = n("EO"),
            d = n("ipG");

        function h(e) {
            let t, n, a, s, i = (0, l.c)(9),
                {
                    context: u
                } = e;
            i[0] !== u.businessName ? (t = u.businessName?.trim(), i[0] = u.businessName, i[1] = t) : t = i[1];
            let c = t;
            return i[2] !== c ? (n = (0, r.jsx)("p", {
                children: c ? (0, r.jsx)(o.a, {
                    id: "chatgpt.ads.business_agent.composer_disclosure.aggregate_usage.body.named",
                    defaultMessage: "{businessName} can’t see this chat or your personal info — just overall usage trends to help improve their AI agent.",
                    values: {
                        businessName: c
                    },
                    description: "Privacy disclosure below the composer in every organic or sponsored Business Agent chat. It reassures users that the business cannot see the conversation or personal information and receives only aggregate usage trends to improve its AI agent. The {businessName} placeholder is the advertiser-provided business display name and may be long. Allow the sentence to wrap."
                }) : (0, r.jsx)(o.a, {
                    id: "chatgpt.ads.business_agent.composer_disclosure.aggregate_usage.body.unnamed",
                    defaultMessage: "This business can’t see this chat or your personal info — just overall usage trends to help improve their AI agent.",
                    description: "Privacy disclosure below the composer in every organic or sponsored Business Agent chat when no business display name is available. It reassures users that the business operating the agent cannot see the conversation or personal information and receives only aggregate usage trends to improve its AI agent. Allow the sentence to wrap."
                })
            }), i[2] = c, i[3] = n) : n = i[3], i[4] !== u.notice ? (a = u.notice?.trim() ? (0, r.jsx)("p", {
                children: u.notice
            }) : null, i[4] = u.notice, i[5] = a) : a = i[5], i[6] !== n || i[7] !== a ? (s = (0, r.jsxs)("div", {
                className: "flex flex-col gap-1",
                children: [n, a]
            }), i[6] = n, i[7] = a, i[8] = s) : s = i[8], s
        }
        var m = n("YJm"),
            f = n("fz"),
            g = n("Mr"),
            p = n("g2"),
            x = n("jA"),
            C = n("Ac"),
            y = n("PA"),
            L = n("Ho8"),
            v = n("hZa"),
            w = n("fNy"),
            P = n("RGW");

        function b(e) {
            let t, n, a = (0, l.c)(7),
                o = "home" === e.placement ? "empty:hidden" : void 0,
                s = e.placement ?? "thread",
                i = "home" === e.placement ? void 0 : M;
            return a[0] !== e || a[1] !== i ? (t = (0, r.jsx)(S, {
                ...e,
                renderOrdinaryDisclaimer: i
            }), a[0] = e, a[1] = i, a[2] = t) : t = a[2], a[3] !== o || a[4] !== s || a[5] !== t ? (n = (0, r.jsx)(L.a, {
                browser: !0,
                children: (0, r.jsx)(w.a, {
                    className: o,
                    placement: s,
                    children: t
                })
            }), a[3] = o, a[4] = s, a[5] = t, a[6] = n) : n = a[6], n
        }

        function M(e) {
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(P.b, {
                        children: e
                    })
                }), null]
            })
        }

        function S(e) {
            let t, n, s, u = (0, l.c)(25),
                {
                    aiServiceDisclaimer: c,
                    conversationId: d,
                    hasUserMessage: m,
                    isTemporaryChat: f,
                    ordinaryDisclaimer: p,
                    placement: y,
                    regulatedConnectorKindOverride: L,
                    renderOrdinaryDisclaimer: v
                } = e,
                w = void 0 === y ? "thread" : y,
                {
                    search: P
                } = (0, i.X)(),
                {
                    data: b
                } = (0, C.m)(),
                M = (0, a.x)(g.t, d ?? null),
                S = (0, a.x)(g.P, M?.status === "ready" && void 0 === L ? d ?? null : null);
            u[0] !== m || u[1] !== f || u[2] !== w || u[3] !== P ? (t = (f ?? (0, x.e)(P)) && !(m ?? "thread" === w), u[0] = m, u[1] = f, u[2] = w, u[3] = P, u[4] = t) : t = u[4];
            let k = t;
            if (null == b) return null;
            if (null != M) {
                let e;
                if ("ready" !== M.status) return null;
                let t = void 0 !== L ? L : S;
                if (null != t) {
                    let e;
                    return u[5] !== t || u[6] !== p ? (e = (0, r.jsx)(B, {
                        ordinaryDisclaimer: p,
                        regulatedConnectorKind: t
                    }), u[5] = t, u[6] = p, u[7] = e) : e = u[7], e
                }
                return u[8] !== M.context ? (e = (0, r.jsx)(h, {
                    context: M.context
                }), u[8] = M.context, u[9] = e) : e = u[9], e
            }
            if ("workspace" === b.structure) {
                let e;
                return u[10] !== b || u[11] !== v || u[12] !== k ? (e = (0, r.jsx)(T, {
                    account: b,
                    isTemporaryChat: k,
                    renderOrdinaryDisclaimer: v
                }), u[10] = b, u[11] = v, u[12] = k, u[13] = e) : e = u[13], e
            }
            return u[14] !== p || u[15] !== v ? (n = v?.(p ?? (0, r.jsx)(o.a, {
                ...D.personal
            })) ?? p, u[14] = p, u[15] = v, u[16] = n) : n = u[16], u[17] !== b.id || u[18] !== c || u[19] !== d || u[20] !== w || u[21] !== L || u[22] !== k || u[23] !== n ? (s = (0, r.jsx)(I, {
                accountId: b.id,
                aiServiceDisclaimer: c,
                conversationId: d,
                isTemporaryChat: k,
                ordinaryDisclaimer: n,
                placement: w,
                regulatedConnectorKindOverride: L
            }), u[17] = b.id, u[18] = c, u[19] = d, u[20] = w, u[21] = L, u[22] = k, u[23] = n, u[24] = s) : s = u[24], s
        }

        function I(e) {
            let t, n = (0, l.c)(16),
                {
                    accountId: a,
                    aiServiceDisclaimer: o,
                    conversationId: s,
                    isTemporaryChat: i,
                    ordinaryDisclaimer: u,
                    placement: c,
                    regulatedConnectorKindOverride: d
                } = e,
                h = (0, v.h)("1831960162");
            if (!(0, v.i)("1831960162") && !h) {
                let e;
                return n[0] !== a || n[1] !== o || n[2] !== s || n[3] !== i || n[4] !== u || n[5] !== c || n[6] !== d ? (e = (0, r.jsx)(k, {
                    accountId: a,
                    aiServiceDisclaimer: o,
                    conversationId: s,
                    isTemporaryChat: i,
                    ordinaryDisclaimer: u,
                    placement: c,
                    regulatedConnectorKindOverride: d
                }), n[0] = a, n[1] = o, n[2] = s, n[3] = i, n[4] = u, n[5] = c, n[6] = d, n[7] = e) : e = n[7], e
            }
            return n[8] !== o || n[9] !== s || n[10] !== i || n[11] !== u || n[12] !== c || n[13] !== d || n[14] !== h ? (t = (0, r.jsx)(H, {
                aiServiceDisclaimer: o,
                conversationId: s,
                isTemporaryChat: i,
                ordinaryDisclaimer: u,
                placement: c,
                regulatedConnectorKindOverride: d,
                showAiServiceDisclaimer: h
            }), n[8] = o, n[9] = s, n[10] = i, n[11] = u, n[12] = c, n[13] = d, n[14] = h, n[15] = t) : t = n[15], t
        }

        function k(e) {
            let t, n = (0, l.c)(8),
                {
                    accountId: o,
                    aiServiceDisclaimer: s,
                    conversationId: i,
                    isTemporaryChat: u,
                    ordinaryDisclaimer: d,
                    placement: h,
                    regulatedConnectorKindOverride: m
                } = e,
                {
                    userId: g
                } = (0, c.a)(),
                x = (0, a.A)(p.n),
                {
                    data: C
                } = (0, a.A)(f.b),
                y = null != g && x === o,
                L = (0, v.h)(!!y && (null == C || "under_18" === C.age_status) && "1639821169");
            return y ? (n[0] !== s || n[1] !== i || n[2] !== u || n[3] !== d || n[4] !== h || n[5] !== m || n[6] !== L ? (t = (0, r.jsx)(H, {
                aiServiceDisclaimer: s,
                conversationId: i,
                isTemporaryChat: u,
                ordinaryDisclaimer: d,
                placement: h,
                regulatedConnectorKindOverride: m,
                showAiServiceDisclaimer: L
            }), n[0] = s, n[1] = i, n[2] = u, n[3] = d, n[4] = h, n[5] = m, n[6] = L, n[7] = t) : t = n[7], t) : null
        }

        function H(e) {
            let t, n, a = (0, l.c)(10),
                {
                    aiServiceDisclaimer: s,
                    conversationId: i,
                    isTemporaryChat: u,
                    ordinaryDisclaimer: c,
                    placement: h,
                    regulatedConnectorKindOverride: m,
                    showAiServiceDisclaimer: f
                } = e;
            a[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, d.a)(), a[0] = t) : t = a[0];
            let g = t;
            if (u) {
                let e;
                return a[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(o.a, {
                    ...D.temporaryChat
                }), a[1] = e) : e = a[1], e
            }
            if (f) {
                let e;
                return a[2] !== s ? (e = s ?? (0, r.jsx)(o.a, {
                    ...D.aiService
                }), a[2] = s, a[3] = e) : e = a[3], e
            }
            if (void 0 !== m) {
                let e;
                return null == m && (g || "home" === h) ? null : (a[4] !== c || a[5] !== m ? (e = (0, r.jsx)(B, {
                    ordinaryDisclaimer: c,
                    regulatedConnectorKind: m
                }), a[4] = c, a[5] = m, a[6] = e) : e = a[6], e)
            }
            return "home" === h ? null : (a[7] !== i || a[8] !== c ? (n = (0, r.jsx)(E, {
                conversationId: i,
                isBrowserSideChat: g,
                ordinaryDisclaimer: c
            }), a[7] = i, a[8] = c, a[9] = n) : n = a[9], n)
        }

        function E(e) {
            let t, n = (0, l.c)(3),
                {
                    conversationId: o,
                    isBrowserSideChat: s,
                    ordinaryDisclaimer: i
                } = e,
                u = (0, a.x)(g.P, o ?? null);
            return s && null == u ? null : (n[0] !== i || n[1] !== u ? (t = (0, r.jsx)(B, {
                ordinaryDisclaimer: i,
                regulatedConnectorKind: u
            }), n[0] = i, n[1] = u, n[2] = t) : t = n[2], t)
        }

        function B(e) {
            let t, n = (0, l.c)(4),
                {
                    ordinaryDisclaimer: a,
                    regulatedConnectorKind: s
                } = e;
            if ("finance" === s) {
                let e;
                return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(o.a, {
                    ...D.finance
                }), n[0] = e) : e = n[0], e
            }
            if ("health" === s) {
                let e;
                return n[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(o.a, {
                    ...D.health
                }), n[1] = e) : e = n[1], e
            }
            return n[2] !== a ? (t = a ?? (0, r.jsx)(o.a, {
                ...D.personal
            }), n[2] = a, n[3] = t) : t = n[3], t
        }

        function T(e) {
            let t, n = (0, l.c)(10),
                {
                    account: s,
                    isTemporaryChat: i,
                    renderOrdinaryDisclaimer: c
                } = e,
                h = (0, d.a)(),
                {
                    data: f
                } = (0, a.x)(m.a, s.id),
                {
                    data: g
                } = (0, a.x)(u.k, s.id);
            if (null == f) return null;
            let p = "early-access" === f.account.workspace_type;
            if (!p && null == g) return null;
            let x = f.account.name ?? s.name;
            if (g?.beta_settings.training_allowed === !0) {
                let e;
                n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(o.a, {
                    ...D.workspaceResearchPartner,
                    values: {
                        link: Z
                    }
                }), n[0] = e) : e = n[0], t = e
            } else if (p) {
                let e;
                n[1] !== x ? (e = null == x ? (0, r.jsx)(o.a, {
                    ...D.earlyAccessWorkspaceWithoutName
                }) : (0, r.jsx)(o.a, {
                    ...D.earlyAccessWorkspace,
                    values: {
                        workspaceName: x
                    }
                }), n[1] = x, n[2] = e) : e = n[2], t = e
            } else if (i) {
                let e;
                n[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(o.a, {
                    ...D.workspaceTemporaryChat
                }), n[3] = e) : e = n[3], t = e
            } else if (null != f.account.ekm_config) {
                let e;
                n[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(o.a, {
                    ...D.encryptedWorkspace
                }), n[4] = e) : e = n[4], t = e
            } else if ("k12" === s.plan_type) {
                let e;
                n[5] !== x ? (e = null == x ? (0, r.jsx)(o.a, {
                    ...D.k12WorkspaceWithoutName
                }) : (0, r.jsx)(o.a, {
                    ...D.k12Workspace,
                    values: {
                        workspaceName: x
                    }
                }), n[5] = x, n[6] = e) : e = n[6], t = e
            } else {
                let e, l;
                return h ? null : (n[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(o.a, {
                    ...D.workspace
                }), n[7] = e) : e = n[7], t = e, n[8] !== c ? (l = c?.(t) ?? t, n[8] = c, n[9] = l) : l = n[9], l)
            }
            return t
        }

        function Z(e) {
            return (0, r.jsx)(y.a, {
                className: "cursor-interaction underline underline-offset-2 hover:text-default",
                href: "https://help.openai.com/articles/20001245",
                initiator: "open_in_browser_bridge",
                isBrowserEnabled: !1,
                children: e
            })
        }
        let D = (0, s.f)({
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
    ia: (function(e, t, n) {
        n.d(t, {
            a: () => p
        });
        var r = n("i5a"),
            l = n.n(r),
            a = n("SKh"),
            o = n("L6M");
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
                if (u.test(e.value)) {
                    let r = o();
                    return n.push({
                        start: e.start,
                        end: t[l - 1].end
                    }), r
                }
                if (c.test(e.value)) return [];
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
        var m = n("agQ"),
            f = n("QxH"),
            g = n("h8");

        function p(e) {
            let {
                contextId: t,
                getTurns: n,
                hydratePersistedMatch: r,
                revealUnrenderedMatches: o = !1,
                searchPersisted: s,
                searchMath: i = !1,
                scrollAdapter: u
            } = e;
            return {
                domain: "conversation",
                contextId: t,
                async search(e, t) {
                    var r, a;
                    let o, u, c = await x(e, n(), i, t?.signal);
                    if (i || null == s) return c;
                    let d = await s(e, t);
                    return null == d ? c : (r = c, a = d, o = new Map(r.matches.map(e => [e.id, e])), u = l()([...a.matches.map(e => o.get(e.id) ?? e), ...r.matches], "id").map((e, t) => ({
                        ...e,
                        ordinal: t + 1
                    })), {
                        ...r,
                        matches: u,
                        totalMatches: Math.max(u.length, r.totalMatches, a.totalMatches),
                        isCapped: r.isCapped || a.isCapped
                    })
                },
                async ensureVisible(e, n) {
                    if ("conversation" !== e.domain || e.contextId !== t || null != e.turnCursor && null != r && (!await r(e, n) || n?.signal?.aborted)) return;
                    let l = null != e.turnCursor,
                        s = u.getTurnContainer(e.turnKey),
                        i = (0, a.b)(e),
                        c = o && null != s && null == (0, a.g)({
                            container: s,
                            matchId: i,
                            includeShadowRoots: !1
                        });
                    if (null == s || l || c) {
                        if (n?.signal?.aborted || (n?.signal == null ? await u.scrollToTurn(e.turnKey) : await u.scrollToTurn(e.turnKey, {
                                signal: n.signal
                            }), n?.signal?.aborted)) return;
                        s = u.getTurnContainer(e.turnKey)
                    }
                    null != s && await (0, f.a)({
                        container: s,
                        matchId: i,
                        includeShadowRoots: !1,
                        signal: n?.signal
                    })
                }
            }
        }
        async function x(e, t, n, r) {
            let l = e.query.trim(),
                s = n && l.length > 1 && l.startsWith("/") && l.endsWith("/") ? l.slice(1, -1) : void 0,
                u = t.flatMap(e => e.units.flatMap(t => (t.textChunks ?? [t.text]).flatMap((r, l) => {
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
            let f = new Map;
            for (let [t, n] of u.entries()) {
                let r = (0, a.c)(n.turnKey, n.unitId),
                    s = f.get(r) ?? 0,
                    {
                        offsets: u,
                        totalMatches: m
                    } = null != d ? {
                        offsets: d.offsets[t] ?? [],
                        totalMatches: 0
                    } : (null == n.equationIndex ? g.a : function(e, t, n) {
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
                        let u = 0;
                        for (let e = 0; s.tokens.length > 0 && e <= a.tokens.length - s.tokens.length; e += 1) {
                            if (!s.tokens.every((t, n) => t.value === a.tokens[e + n].value)) continue;
                            let t = a.tokens.slice(e, e + s.tokens.length),
                                r = t[0].start,
                                o = t[t.length - 1].end;
                            for (let e of t) r = Math.min(r, e.delimiter?.start ?? r), o = Math.max(o, e.delimiter?.end ?? o);
                            for (let e of a.groups) r < e.start && o > e.start && o < e.end && (o = e.end), r > e.start && r < e.end && o > e.end && (r = e.start);
                            u += 1, l.length < n && l.push({
                                start: r,
                                end: o
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
                        id: (0, a.b)(l),
                        ordinal: c.matches.length + 1,
                        location: l
                    })
                }
                null == n.equationIndex && f.set(r, s + u.length)
            }
            return c.isCapped = c.totalMatches > c.matches.length, c
        }
    }),
    gSd: (function(e, t, n) {
        var r = n("SKh");

        function l(e) {
            let t = new Map;
            for (let n of e) {
                if ("conversation" !== n.location.domain) continue;
                let e = (0, r.c)(n.location.turnKey, n.location.unitId),
                    l = t.get(e) ?? [];
                l.push(n), t.set(e, l)
            }
            return t
        }

        function a(e) {
            let t = new Map;
            for (let n of e) {
                if ("diff" !== n.location.domain) continue;
                let e = t.get(n.location.path) ?? [];
                e.push(n), t.set(n.location.path, e)
            }
            return t
        }
        n.d(t, {
            a: () => l,
            b: () => a
        })
    }),
    l0f: (function(e, t, n) {
        n.d(t, {
            a: () => d
        });
        var r = n("Qo"),
            l = n("Xnl"),
            a = n("zd"),
            o = n("SKh"),
            s = n("gSd");
        async function i(e, t) {
            let r = e.querySelector(".katex-html"),
                l = e.dataset.mathSource;
            if (null == r || null == l || 0 === t.length) return () => t.map(() => []);
            let {
                default: a
            } = await n.e(990054).then(n.bind(n, "MKD")), s = u(r), i = new Map(s.map(e => {
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
                f = new Map,
                g = n => {
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
                    let o = u(d),
                        i = o.length === s.length && o.every((e, t) => {
                            let {
                                text: n
                            } = e;
                            return n === s[t].text
                        });
                    return o.forEach((e, t) => {
                        let n = m.get(e.color);
                        if (null == n) return;
                        let r = s[t];
                        if (!i) {
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
                        f.set(r, n)
                    }), !0
                };
            return g(t.map((e, t) => t)) || t.forEach((e, t) => g([t])), () => {
                let n, a = t.map(() => []);
                if (e.dataset.mathSource !== l || !e.contains(r) || [...i].some(e => {
                        let [t, n] = e;
                        return !r.contains(t) || t.data !== n
                    })) return a;
                let u = [];
                for (let e of s) {
                    let t = f.get(e);
                    if (null == t) {
                        n = void 0;
                        continue
                    }
                    let r = e.node.parentElement?.closest(".vlist > span, .base") ?? null;
                    n?.index === t && n.row === r ? n.glyphs.push(e) : (n = {
                        index: t,
                        row: r,
                        glyphs: [e]
                    }, u.push(n))
                }
                for (let {
                        index: e,
                        glyphs: t
                    }
                    of u.reverse()) a[e].unshift(... function e(t) {
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
        }

        function u(e) {
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
        var c = n("TwS");

        function d(e) {
            let t, n, u, d, p, x, C, y, L, v, w, P = (0, r.c)(20),
                {
                    containerRef: b,
                    contextId: M,
                    onContentChange: S
                } = e,
                I = (0, l.A)(c.d),
                k = (0, l.A)(c.g),
                H = I?.contextId === M ? I : null,
                E = null == H ? null : k?.id ?? null,
                {
                    schedule: B,
                    cancel: T
                } = (y = (0, r.c)(5), L = (0, a.useRef)(null), 80 !== y[0] ? (p = e => {
                    null == L.current && (L.current = window.setTimeout(() => {
                        L.current = null, e()
                    }, 80))
                }, y[0] = 80, y[1] = p) : p = y[1], v = p, y[2] === Symbol.for("react.memo_cache_sentinel") ? (x = () => {
                    null != L.current && (window.clearTimeout(L.current), L.current = null)
                }, y[2] = x) : x = y[2], w = x, y[3] !== v ? (C = {
                    schedule: v,
                    cancel: w
                }, y[3] = v, y[4] = C) : C = y[4], C);
            P[0] !== S ? (t = () => S?.(), P[0] = S, P[1] = t) : t = P[1];
            let Z = (0, a.useEffectEvent)(t);
            P[2] !== H || P[3] !== E || P[4] !== b ? (n = async (e, t) => {
                let n = b.current;
                if (null == n || ((0, o.a)(n, {
                        includeShadowRoots: !1
                    }), t.takeRecords(), null == H)) return;
                let r = (0, s.a)(H.matches),
                    l = Array.from(n.querySelectorAll("[data-content-search-unit-key]")).flatMap(e => {
                        let t = r.get(e.dataset.contentSearchUnitKey ?? "");
                        return null == t ? [] : [{
                            element: e,
                            matches: t
                        }]
                    }),
                    a = (e, t) => {
                        t.forEach(t => {
                            (0, o.l)({
                                element: t,
                                matchId: e
                            }), (0, o.k)(t, e === E)
                        })
                    },
                    u = l.map(g),
                    c = e => {
                        e.forEach((e, t) => e.forEach((e, n) => a(u[t].matches[n].id, e)))
                    };
                if (!H.searchMath) {
                    c(u.map(e => {
                        let {
                            element: t,
                            matches: n
                        } = e;
                        return (0, o.i)({
                            target: t,
                            query: H.query,
                            maxMatches: n.length,
                            includeShadowRoots: !1
                        }).matches
                    })), t.takeRecords();
                    return
                }
                let d = [];
                for (let {
                        element: e,
                        matches: t
                    }
                    of l) e.querySelectorAll("[data-math-source]").forEach((e, n) => {
                    let r = t.flatMap(e => {
                        let {
                            id: t,
                            location: r
                        } = e;
                        return "conversation" === r.domain && r.equationIndex === n && null != r.equationRange ? [{
                            id: t,
                            range: r.equationRange
                        }] : []
                    });
                    0 !== r.length && d.push(i(e, r.map(f)).then(e => () => e().forEach((e, t) => a(r[t].id, e))))
                });
                let [p, x] = await Promise.all([(0, o.j)(u.map(m), H.query, H.regex, e), Promise.all(d)]);
                e.aborted || (c(p()), x.forEach(h), t.takeRecords())
            }, P[2] = H, P[3] = E, P[4] = b, P[5] = n) : n = P[5];
            let D = (0, a.useEffectEvent)(n);
            P[6] !== H?.runId || P[7] !== D || P[8] !== T || P[9] !== b || P[10] !== Z || P[11] !== B ? (u = () => {
                let e = b.current;
                if (null == e) return;
                let t = null,
                    n = () => {
                        t?.abort(), D((t = new AbortController).signal, r)
                    },
                    r = new MutationObserver(e => {
                        (0, o.m)(e) && (t?.abort(), B(() => {
                            Z(), n()
                        }))
                    });
                return H?.runId == null ? void n() : (r.observe(e, {
                    childList: !0,
                    subtree: !0,
                    characterData: !0,
                    attributeFilter: ["hidden"]
                }), n(), () => {
                    r.disconnect(), t?.abort(), T(), (0, o.a)(e, {
                        includeShadowRoots: !1
                    })
                })
            }, P[6] = H?.runId, P[7] = D, P[8] = T, P[9] = b, P[10] = Z, P[11] = B, P[12] = u) : u = P[12];
            let K = H?.runId;
            P[13] !== E || P[14] !== T || P[15] !== b || P[16] !== M || P[17] !== B || P[18] !== K ? (d = [K, E, T, b, M, B], P[13] = E, P[14] = T, P[15] = b, P[16] = M, P[17] = B, P[18] = K, P[19] = d) : d = P[19], (0, a.useEffect)(u, d)
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

        function f(e) {
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
    hkB: (function(e, t, n) {
        var r = n("A"),
            l = n("Qo"),
            a = n("zd"),
            o = n("oy");

        function s(e) {
            let t, n, s, i, u, c, d, h, m, f = (0, l.c)(15),
                {
                    onNavigate: g
                } = e,
                p = (0, a.useRef)(null),
                x = (0, a.useRef)(null),
                [C, y] = (0, a.useState)(!1);
            return f[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => {
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
            }, n = [], f[0] = t, f[1] = n) : (t = f[0], n = f[1]), (0, a.useEffect)(t, n), f[2] === Symbol.for("react.memo_cache_sentinel") ? (s = () => x.current?.abort(), f[2] = s) : s = f[2], f[3] !== g ? (i = e => {
                x.current?.abort();
                let t = e.currentTarget;
                t.tabIndex = -1;
                let n = new AbortController;
                x.current = n, y(!1), g(n.signal).then(e => {
                    !n.signal.aborted && t.isConnected && t.ownerDocument.activeElement === t && (e?.isConnected ? e.focus({
                        preventScroll: !0
                    }) : y(!0))
                })
            }, f[3] = g, f[4] = i) : i = f[4], f[5] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, r.jsx)(o.a, {
                id: "codex.conversation.latestResponse",
                defaultMessage: "Latest response",
                description: "Invisible heading before the composer; focusing it moves to the newest assistant response"
            }), f[5] = u) : u = f[5], f[6] !== i ? (c = (0, r.jsx)("h4", {
                ref: p,
                className: "sr-only m-0 select-none",
                tabIndex: 0,
                onBlur: s,
                onFocus: i,
                children: u
            }), f[6] = i, f[7] = c) : c = f[7], f[8] !== C ? (d = C ? (0, r.jsx)(o.a, {
                id: "codex.conversation.latestResponseUnavailable",
                defaultMessage: "No response available",
                description: "Screen-reader announcement when navigation to the latest assistant response finds no response in the conversation"
            }) : null, f[8] = C, f[9] = d) : d = f[9], f[10] !== d ? (h = (0, r.jsx)("span", {
                className: "sr-only m-0",
                role: "status",
                children: d
            }), f[10] = d, f[11] = h) : h = f[11], f[12] !== c || f[13] !== h ? (m = (0, r.jsxs)(r.Fragment, {
                children: [c, h]
            }), f[12] = c, f[13] = h, f[14] = m) : m = f[14], m
        }
        n.d(t, {
            a: () => s
        })
    }),
    r2m: (function(e, t, n) {
        var r = n("A"),
            l = n("Qo"),
            a = n("zd"),
            o = n("Wf"),
            s = n("oy"),
            i = n("Qg"),
            u = n("dM");

        function c(e) {
            let t, n, i, c, p, x, C, y, L = (0, l.c)(20),
                {
                    sentAtMs: v,
                    nowMs: w
                } = e,
                P = (0, o.a)(),
                [b] = (0, a.useState)(m);
            if (!Number.isFinite(v)) return null;
            if (L[0] !== P || L[1] !== b || L[2] !== w || L[3] !== v) {
                let {
                    date: e,
                    time: r,
                    includeAt: l
                } = (0, u.c)(P, new Date(v), new Date(w ?? b));
                n = e, p = r, i = l ? g.older : g.recent, t = f, c = P.formatMessage(i, {
                    date: n,
                    time: p,
                    day: h
                }), L[0] = P, L[1] = b, L[2] = w, L[3] = v, L[4] = t, L[5] = n, L[6] = i, L[7] = c, L[8] = p
            } else t = L[4], n = L[5], i = L[6], c = L[7], p = L[8];
            return L[9] !== n || L[10] !== p ? (x = {
                date: n,
                time: p,
                day: d
            }, L[9] = n, L[10] = p, L[11] = x) : x = L[11], L[12] !== i || L[13] !== x ? (C = (0, r.jsx)(s.a, {
                ...i,
                values: x
            }), L[12] = i, L[13] = x, L[14] = C) : C = L[14], L[15] !== t || L[16] !== v || L[17] !== c || L[18] !== C ? (y = (0, r.jsx)(t, {
                label: c,
                sentAtMs: v,
                children: C
            }), L[15] = t, L[16] = v, L[17] = c, L[18] = C, L[19] = y) : y = L[19], y
        }

        function d(e) {
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

        function f(e) {
            let t, n, a, o = (0, l.c)(11),
                {
                    children: s,
                    compact: i,
                    label: u,
                    sentAtMs: c
                } = e,
                d = void 0 !== i && i,
                h = d ? "flex justify-center py-2" : "flex justify-center py-4",
                m = null == u ? void 0 : "separator",
                f = d ? "text-xs text-tertiary select-none" : "text-sm leading-5 font-normal text-tertiary select-none";
            return o[0] !== c ? (t = new Date(c).toISOString(), o[0] = c, o[1] = t) : t = o[1], o[2] !== s || o[3] !== f || o[4] !== t ? (n = (0, r.jsx)("time", {
                className: f,
                dateTime: t,
                children: s
            }), o[2] = s, o[3] = f, o[4] = t, o[5] = n) : n = o[5], o[6] !== u || o[7] !== h || o[8] !== m || o[9] !== n ? (a = (0, r.jsx)("div", {
                "aria-label": u,
                className: h,
                role: m,
                "data-markdown-copy": "exclude",
                children: n
            }), o[6] = u, o[7] = h, o[8] = m, o[9] = n, o[10] = a) : a = o[10], a
        }
        let g = (0, i.f)({
            recent: {
                id: "conversation.timestampSeparator.recent",
                defaultMessage: "<day>{date}</day> {time}",
                description: "Centered timestamp separating messages in a Codex conversation. The date is a localized relative day such as Today, Yesterday, or Monday; time is the localized time of day. The day tag emphasizes the date. Keep the complete label short and adjust its order or punctuation for the locale."
            },
            older: {
                id: "conversation.timestampSeparator.older",
                defaultMessage: "<day>{date}</day> at {time}",
                description: "Centered timestamp separating older messages in a Codex conversation. The date is a localized calendar date, including the year when more than 365 days old; time is the localized time of day. The day tag emphasizes the date. Keep the complete label short and translate the date-time relationship naturally."
            }
        });
        n.d(t, {
            a: () => f,
            b: () => c
        })
    }),
    if6: (function(e, t, n) {
        n.d(t, {
            a: () => x
        });
        var r = n("A"),
            l = n("Qo"),
            a = n("on"),
            o = n("zd"),
            s = n("v7"),
            i = n("wD9"),
            u = n("f4V"),
            c = n("lsf"),
            d = n("bI");

        function h(e) {
            let {
                collapseEmptyRows: t = !1,
                entries: n,
                gapPx: r,
                measuredHeightsByKey: l,
                pixelScale: a
            } = e, o = new Set, s = [], i = [], u = [], c = new Map, d = [], h = 0;
            for (let [e, m] of n.entries()) {
                let n = m.turnKey,
                    f = Math.max(m.minHeightPx ?? 0, l[n] ?? m.estimatedHeightPx ?? 280);
                null != a && (f = Math.round(f * a) / a);
                let g = (t ? h > 0 && f > 0 : e > 0) ? m.gapBeforePx ?? r : 0;
                null != a && (g = Math.round(g * a) / a), h += g, s.push(g), "gap" === m.type && o.add(n), c.set(n, e), d.push(n), u.push(h), i.push(f), h += f
            }
            return {
                bottomOffsetsPx: u.map((e, t) => h - e - (i[t] ?? 0)),
                collapseEmptyRows: t,
                gapKeys: o,
                gapsBeforePx: s,
                heightsPx: i,
                topOffsetsPx: u,
                totalHeightPx: h,
                turnIndexByKey: c,
                turnKeys: d
            }
        }

        function m(e) {
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

        function f(e) {
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

        function g(e) {
            let {
                layout: t,
                turnKey: n,
                viewportHeightPx: r
            } = e, l = t.turnIndexByKey.get(n);
            return null == l ? null : Math.max(0, (t.bottomOffsetsPx[l] ?? 0) - r / 2 + (t.heightsPx[l] ?? 0) / 2)
        }
        let p = {};

        function x(e) {
            let t, n, x, I, k, H, E, B, T, Z, D, K, R, A, F, _, j, O, V, N, z, q, W, U, G, Q, $, X, Y, J, ee, et, en, er, el, ea, eo, es, ei, eu, ec, ed, eh, em, ef, eg, ep, ex, eC, ey, eL, ev, ew, eP, eb, eM, eS, eI, ek, eH, eE, eB, eT, eZ = (0, l.c)(235),
                {
                    collapseEmptyRows: eD,
                    entries: eK,
                    RowComponent: eR,
                    onApiChange: eA,
                    onVisibleContentReady: eF,
                    className: e_,
                    gapPx: ej,
                    getBottomScrollPaddingPx: eO,
                    onLatestTurnHeightChange: eV,
                    preserveMeasuredTurnViewport: eN,
                    preserveUnderfilledViewport: ez,
                    getPendingRestoreScrollDistanceFromBottomPx: eq,
                    restoreScrollDistanceFromBottomPx: eW,
                    initialRestoreState: eU,
                    latestTurnFooter: eG,
                    latestTurnFooterKey: eQ,
                    onRestoreStateChange: e$,
                    onViewportChange: eX,
                    onHistoryRetentionBoundaryChange: eY,
                    latestTurnSynchronousMeasurementKey: eJ,
                    layoutReadyTurnKey: e1,
                    onTurnLayoutReady: e2,
                    synchronousMeasurementTurnKey: e0,
                    retainedTurnKeys: e3
                } = e,
                e8 = void 0 !== eD && eD,
                e5 = void 0 === ej ? 12 : ej,
                e9 = void 0 !== eN && eN,
                e4 = void 0 !== ez && ez,
                [e6, e7] = (0, o.useState)(null);
            eZ[0] !== e6 || eZ[1] !== e4 || eZ[2] !== eK ? (t = eK.map(e => ({
                turnKey: e.turnKey,
                gapBeforePx: e.gapBeforePx,
                estimatedHeightPx: e.estimatedHeightPx,
                minHeightPx: e4 && e6?.turnKey === e.turnKey && e.turnKey === eK.at(-1)?.turnKey ? Math.max(e.minHeightPx ?? 0, e6.viewportHeightPx - e6.heightOutsideTurnPx) : e.minHeightPx,
                type: e.type
            })), eZ[0] = e6, eZ[1] = e4, eZ[2] = eK, eZ[3] = t) : t = eZ[3];
            let te = t,
                tt = (0, c.b)(),
                tn = (0, i.c)(),
                tr = tn * (globalThis.devicePixelRatio ?? 1),
                tl = eU?.turnHeightsByKey ?? p,
                [ta, to] = (0, o.useState)(tl),
                [ts, ti] = (0, o.useState)(null);
            eZ[4] !== e8 || eZ[5] !== te || eZ[6] !== e5 || eZ[7] !== eO || eZ[8] !== eU || eZ[9] !== tr || eZ[10] !== tt ? (n = () => {
                var e, t, n, r, l, a;
                let o, s, i, u = b(eO);
                return e = te, t = M(tt.getLastScrollDistanceFromBottomPx(), u), n = e5, r = e8, l = eU, a = tr, i = m({
                    distanceFromBottomPx: s = Math.min(t, (o = h({
                        collapseEmptyRows: r,
                        entries: e,
                        gapPx: n,
                        measuredHeightsByKey: l?.turnHeightsByKey ?? p,
                        pixelScale: a
                    })).totalHeightPx),
                    layout: o,
                    overscanCount: 2,
                    viewportHeightPx: 800
                }), {
                    distanceFromBottomPx: s,
                    renderedRange: (l?.renderedWindow == null ? null : f({
                        anchorKey: l.renderedWindow.anchorKey,
                        layout: o,
                        previousRange: {
                            startIndex: 0,
                            endIndex: Math.min(l.renderedWindow.count, i.endIndex - i.startIndex)
                        }
                    })) ?? i,
                    turnKeys: o.turnKeys,
                    viewportHeightPx: 800
                }
            }, eZ[4] = e8, eZ[5] = te, eZ[6] = e5, eZ[7] = eO, eZ[8] = eU, eZ[9] = tr, eZ[10] = tt, eZ[11] = n) : n = eZ[11];
            let [tu, tc] = (0, o.useState)(n), [td] = (0, o.useState)(y), th = (0, o.useSyncExternalStore)(td.subscribe, td.getSnapshot, td.getSnapshot), tm = (0, o.useRef)(null), tf = (0, o.useRef)(ta), tg = (0, o.useRef)(tu), tp = (0, o.useRef)(null);
            eZ[12] === Symbol.for("react.memo_cache_sentinel") ? (x = new Map, eZ[12] = x) : x = eZ[12];
            let tx = (0, o.useRef)(x);
            eZ[13] === Symbol.for("react.memo_cache_sentinel") ? (I = new Map, eZ[13] = I) : I = eZ[13];
            let tC = (0, o.useRef)(I);
            eZ[14] === Symbol.for("react.memo_cache_sentinel") ? (k = new WeakSet, eZ[14] = k) : k = eZ[14];
            let ty = (0, o.useRef)(k);
            eZ[15] === Symbol.for("react.memo_cache_sentinel") ? (H = new Map, eZ[15] = H) : H = eZ[15];
            let tL = (0, o.useRef)(H);
            eZ[16] === Symbol.for("react.memo_cache_sentinel") ? (E = new Map, eZ[16] = E) : E = eZ[16];
            let tv = (0, o.useRef)(E),
                tw = (0, o.useRef)(null),
                tP = (0, o.useRef)(null),
                tb = (0, o.useRef)(0),
                tM = (0, o.useRef)(null),
                [tS, tI] = (0, o.useState)(null),
                tk = (0, o.useRef)(!1),
                tH = (0, o.useRef)(null);
            eZ[17] !== e8 || eZ[18] !== te || eZ[19] !== e5 || eZ[20] !== tr || eZ[21] !== ta ? (B = h({
                collapseEmptyRows: e8,
                entries: te,
                gapPx: e5,
                measuredHeightsByKey: ta,
                pixelScale: tr
            }), eZ[17] = e8, eZ[18] = te, eZ[19] = e5, eZ[20] = tr, eZ[21] = ta, eZ[22] = B) : B = eZ[22];
            let tE = B,
                tB = (0, o.useRef)(tE),
                tT = (0, o.useRef)(tE),
                tZ = (0, o.useRef)(tE),
                tD = (0, o.useRef)(null);
            eZ[23] !== ta ? (T = () => {
                ta !== tf.current && to(tf.current)
            }, eZ[23] = ta, eZ[24] = T) : T = eZ[24], eZ[25] !== e8 || eZ[26] !== te || eZ[27] !== e5 || eZ[28] !== tr || eZ[29] !== ta ? (Z = [e8, te, e5, tr, ta], eZ[25] = e8, eZ[26] = te, eZ[27] = e5, eZ[28] = tr, eZ[29] = ta, eZ[30] = Z) : Z = eZ[30], (0, o.useLayoutEffect)(T, Z), eZ[31] === Symbol.for("react.memo_cache_sentinel") ? (D = e => {
                tm.current = e, ti(e)
            }, eZ[31] = D) : D = eZ[31];
            let tK = (0, d.a)(D);
            eZ[32] !== e8 || eZ[33] !== te || eZ[34] !== e5 || eZ[35] !== tE || eZ[36] !== tr || eZ[37] !== ta ? (K = () => {
                if (tT.current !== tE) {
                    tT.current = tE, tB.current = ta === tf.current ? tE : h({
                        collapseEmptyRows: e8,
                        entries: te,
                        gapPx: e5,
                        measuredHeightsByKey: tf.current,
                        pixelScale: tr
                    });
                    let e = tm.current;
                    null != e && (e.style.height = `${tB.current.totalHeightPx}px`)
                }
                return tB.current
            }, eZ[32] = e8, eZ[33] = te, eZ[34] = e5, eZ[35] = tE, eZ[36] = tr, eZ[37] = ta, eZ[38] = K) : K = eZ[38];
            let tR = (0, d.a)(K);
            eZ[39] !== eO || eZ[40] !== tt || eZ[41] !== tn ? (R = e => {
                let t = tt.getScrollElement(),
                    n = tm.current,
                    r = t?.firstElementChild;
                return null == n || null == r ? e - b(eO) : e - (0, i.b)(r.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, tn)
            }, eZ[39] = eO, eZ[40] = tt, eZ[41] = tn, eZ[42] = R) : R = eZ[42];
            let tA = (0, d.a)(R),
                tF = tu.renderedRange;
            if (null != th) {
                let e = g({
                    layout: tE,
                    turnKey: th.turnKey,
                    viewportHeightPx: tu.viewportHeightPx
                });
                null != e && (tF = m({
                    distanceFromBottomPx: e,
                    layout: tE,
                    overscanCount: 2,
                    viewportHeightPx: tu.viewportHeightPx
                }))
            } else if (!P(tu.turnKeys, tE.turnKeys)) {
                let e = tu.turnKeys[tu.renderedRange.startIndex];
                null != e && (tF = f({
                    anchorKey: e,
                    layout: tE,
                    previousRange: tF
                }) ?? tF)
            }
            eZ[43] !== eW ? (A = () => {
                null == tw.current && eW?.()
            }, eZ[43] = eW, eZ[44] = A) : A = eZ[44];
            let t_ = (0, d.a)(A);
            eZ[45] === Symbol.for("react.memo_cache_sentinel") ? (F = () => {
                null != tH.current && (window.cancelAnimationFrame(tH.current), tH.current = null)
            }, eZ[45] = F) : F = eZ[45];
            let tj = (0, d.a)(F);
            eZ[46] !== te || eZ[47] !== eF || eZ[48] !== t_ ? (_ = () => {
                null == eF || tk.current || null != tH.current || null == tm.current || te.length > 0 && 0 === tC.current.size || (tH.current = window.requestAnimationFrame(() => {
                    tH.current = window.requestAnimationFrame(() => {
                        tH.current = null, tk.current || null == tm.current || te.length > 0 && 0 === tC.current.size || (tk.current = !0, t_(), eF())
                    })
                }))
            }, eZ[46] = te, eZ[47] = eF, eZ[48] = t_, eZ[49] = _) : _ = eZ[49];
            let tO = (0, d.a)(_),
                tV = eK.slice(tF.startIndex, tF.endIndex).map((e, t) => ({
                    entry: e,
                    turnIndex: tF.startIndex + t
                }));
            for (let e of new Set(e3)) {
                let t = tE.turnIndexByKey.get(e);
                if (null == t || t >= tF.startIndex && t < tF.endIndex) continue;
                let n = eK[t];
                null != n && tV.push({
                    entry: n,
                    turnIndex: t
                })
            }
            tV.sort(C);
            let tN = null == eY ? [] : tV.map(e => {
                    let {
                        entry: t,
                        turnIndex: n
                    } = e, r = null;
                    return "sourceTurnId" in t && "string" == typeof t.sourceTurnId ? r = t.sourceTurnId : "turnId" in t && "string" == typeof t.turnId && (r = t.turnId), {
                        turnIndex: n,
                        turnId: r,
                        retained: e3?.includes(t.turnKey) === !0,
                        gap: "gap" === t.type,
                        firstProtectedItemId: "turnStatus" in t && "inProgress" === t.turnStatus && "turnItemIds" in t && Array.isArray(t.turnItemIds) ? t.turnItemIds.at(-500) ?? null : null
                    }
                }),
                tz = (0, d.a)(e => {
                    if (null == eY) return;
                    if (e > 24 || null != td.getSnapshot()) return void eY(null);
                    let t = m({
                            distanceFromBottomPx: M(e, b(eO)),
                            layout: tE,
                            overscanCount: 0,
                            viewportHeightPx: tu.viewportHeightPx
                        }),
                        n = null;
                    for (let e of tN)
                        if (!e.gap && (e.retained || !(e.turnIndex < t.startIndex) && !(e.turnIndex >= t.endIndex))) {
                            if (null == e.turnId) return void eY(null);
                            null == n && (n = {
                                oldestRenderedTurnId: e.turnId,
                                firstProtectedItemId: e.firstProtectedItemId
                            })
                        } eY(n)
                });
            eZ[50] !== tz || eZ[51] !== tt ? (j = () => {
                tz(tt.getLastScrollDistanceFromBottomPx())
            }, eZ[50] = tz, eZ[51] = tt, eZ[52] = j) : j = eZ[52], (0, o.useLayoutEffect)(j, [eK, e3, tF.startIndex, tF.endIndex, eY, th, tz, tt]), eZ[53] !== e1 || eZ[54] !== e2 || eZ[55] !== tt ? (O = () => {
                if (null == e1 || null == e2 || null != tw.current || tL.current.size > 0) return;
                let e = tt.getScrollElement(),
                    t = tC.current.get(e1);
                null != e && !(e.clientHeight <= 0) && null != t && ty.current.has(t) && !((tf.current[e1] ?? 0) <= 0) && e2(e1, t)
            }, eZ[53] = e1, eZ[54] = e2, eZ[55] = tt, eZ[56] = O) : O = eZ[56];
            let tq = (0, d.a)(O);
            eZ[57] !== eO || eZ[58] !== eV || eZ[59] !== t_ || eZ[60] !== tt ? (V = e => {
                let t = b(eO);
                null != e.latestTurnHeightChange && eV?.(e.latestTurnHeightChange), e.restoreScrollDistanceFromBottom ? t_() : null != e.scrollDistanceFromBottomPx && tt.compensateScrollToDistanceFromBottomPx(e.scrollDistanceFromBottomPx + b(eO) - t)
            }, eZ[57] = eO, eZ[58] = eV, eZ[59] = t_, eZ[60] = tt, eZ[61] = V) : V = eZ[61];
            let tW = (0, d.a)(V);
            eZ[62] !== tR ? (N = (e, t) => {
                if (null != tw.current || t <= 0) return;
                let n = tg.current,
                    r = v({
                        current: n,
                        distanceFromBottomPx: e,
                        layout: tR(),
                        viewportHeightPx: t
                    });
                r === n || (tg.current = r, r.renderedRange.startIndex === n.renderedRange.startIndex && r.renderedRange.endIndex === n.renderedRange.endIndex && P(r.turnKeys, n.turnKeys) || tc(r))
            }, eZ[62] = tR, eZ[63] = N) : N = eZ[63];
            let tU = (0, d.a)(N);
            eZ[64] !== eY ? (z = () => () => eY?.(void 0), q = [eY], eZ[64] = eY, eZ[65] = z, eZ[66] = q) : (z = eZ[65], q = eZ[66]), (0, o.useLayoutEffect)(z, q), eZ[67] !== tR || eZ[68] !== eX ? (W = (e, t, n) => {
                if (null == eX) return;
                let r = tR(),
                    l = Math.max(0, Math.min(r.totalHeightPx, r.totalHeightPx - e)),
                    a = Math.max(0, l - t);
                eX({
                    viewportEndPx: l,
                    viewportStartPx: a
                }, n)
            }, eZ[67] = tR, eZ[68] = eX, eZ[69] = W) : W = eZ[69];
            let tG = (0, d.a)(W);
            eZ[70] !== td ? (U = e => {
                td.getSnapshot() === e && td.replace(null)
            }, eZ[70] = td, eZ[71] = U) : U = eZ[71];
            let tQ = (0, d.a)(U);
            eZ[72] !== eY || eZ[73] !== td ? (G = (e, t, n) => n?.signal?.aborted ? Promise.resolve() : (eY?.(null), new Promise(r => {
                let l = () => {
                        td.getSnapshot() === a && td.replace(null)
                    },
                    a = {
                        align: n?.align ?? "center",
                        complete: () => {
                            n?.signal?.removeEventListener("abort", l), r()
                        },
                        getTargetElement: t,
                        turnKey: e
                    };
                tc(tg.current), td.replace(a), n?.signal?.addEventListener("abort", l, {
                    once: !0
                })
            })), eZ[72] = eY, eZ[73] = td, eZ[74] = G) : G = eZ[74];
            let t$ = (0, d.a)(G);
            eZ[75] !== tR ? (Q = e => {
                let t = tR(),
                    n = t.turnIndexByKey.get(e);
                if (null == n) return null;
                let r = t.topOffsetsPx[n],
                    l = t.heightsPx[n];
                return null == r || null == l ? null : {
                    endPx: r + l,
                    startPx: r
                }
            }, eZ[75] = tR, eZ[76] = Q) : Q = eZ[76];
            let tX = (0, d.a)(Q);
            eZ[77] !== eV || eZ[78] !== tt || eZ[79] !== tn ? ($ = () => {
                let e = 0,
                    t = null;
                for (let [n, r] of tv.current) e += r, (null == t || t.compareDocumentPosition(n) === Node.DOCUMENT_POSITION_FOLLOWING) && (t = n);
                null != t && eV?.({
                    heightDeltaPx: null,
                    heightPx: null,
                    bottomViewportOverflowPx: S({
                        scrollElement: tt.getScrollElement(),
                        turnElement: t,
                        windowZoom: tn
                    }),
                    turnElement: t,
                    followContentHeightPx: e
                })
            }, eZ[77] = eV, eZ[78] = tt, eZ[79] = tn, eZ[80] = $) : $ = eZ[80];
            let tY = (0, d.a)($);
            eZ[81] !== e8 || eZ[82] !== tW || eZ[83] !== te || eZ[84] !== e5 || eZ[85] !== eO || eZ[86] !== tR || eZ[87] !== tA || eZ[88] !== eq || eZ[89] !== tr || eZ[90] !== e9 || eZ[91] !== tt || eZ[92] !== td || eZ[93] !== tn ? (X = (e, t, n) => {
                var r;
                let l = tR(),
                    a = tt.getScrollElement();
                if (a?.getClientRects().length === 0) return !1;
                let o = tw.current,
                    u = tf.current,
                    c = u,
                    d = 0,
                    m = !1,
                    f = null,
                    g = 0,
                    p = !1,
                    x = !1,
                    C = "controller" === (void 0 === n ? "measured" : n) ? tt.getLastScrollDistanceFromBottomPx() : function(e, t) {
                        let n = e.getScrollElement(),
                            r = n?.firstElementChild;
                        if (null == n || null == r || 0 === n.clientHeight) return e.getLastScrollDistanceFromBottomPx();
                        let l = r.getBoundingClientRect();
                        if (0 === l.height) return e.getLastScrollDistanceFromBottomPx();
                        let a = n.scrollTop;
                        return Math.max(0, Math.round(a + (0, i.b)(l.bottom - n.getBoundingClientRect().top, t)) - n.clientHeight) - a
                    }(tt, tn),
                    y = b(eO),
                    L = M(C, y),
                    I = e9 ? null : eq?.() ?? null,
                    k = null == o ? L : tg.current.distanceFromBottomPx,
                    H = k;
                if (e9 && null == td.getSnapshot() && eq?.() == null) {
                    let e = P(tZ.current.turnKeys, l.turnKeys) ? l : tZ.current,
                        t = e === l ? o?.scrollDistanceFromBottomPx ?? C : C,
                        n = w({
                            distanceFromBottomPx: tA(t),
                            preferLatestVisibleRow: t < y,
                            layout: e,
                            measuredHeightsByKey: u,
                            nextLayout: l,
                            viewportHeightPx: tg.current.viewportHeightPx
                        }),
                        r = a?.ownerDocument.activeElement,
                        s = r?.closest("[data-turn-key]"),
                        i = s?.dataset.turnKey;
                    if (a && r && s && i && tC.current.get(i) === s) {
                        let e = r.getBoundingClientRect(),
                            t = a.getBoundingClientRect();
                        e.bottom > t.top && e.top < t.bottom && (n = i)
                    }
                    let c = null == n ? null : l.turnIndexByKey.get(n);
                    null != c && (H = l.bottomOffsetsPx[c] ?? k)
                }
                for (let [t, n] of e) {
                    let {
                        element: e,
                        heightPx: r
                    } = n, a = tC.current.get(t);
                    if (a !== e) continue;
                    r > 0 ? ty.current.add(a) : ty.current.delete(a);
                    let o = Math.max(+!e8, r),
                        s = u[t];
                    if (s === o) continue;
                    c === u && (c = {
                        ...u
                    }), c[t] = o;
                    let i = l.turnIndexByKey.get(t);
                    if (null == i) continue;
                    let h = i === l.turnKeys.length - 1,
                        C = Math.round(Math.max(te[i]?.minHeightPx ?? 0, o) * tr) / tr,
                        y = C - (l.heightsPx[i] ?? C);
                    x = x || null == s || 0 !== y, h && (m = !0, d += null == s ? 0 : y, f = a), p = p || e8 && (0 === C || 0 === l.heightsPx[i]), (l.bottomOffsetsPx[i] ?? 0) <= H && (e9 || null != eq && !h) && (g += y)
                }
                if (c === u) return !1;
                if (!x) return tf.current = c, !1;
                let E = h({
                    collapseEmptyRows: e8,
                    entries: te,
                    gapPx: e5,
                    measuredHeightsByKey: c,
                    pixelScale: tr
                });
                if (p)
                    for (let [e, t] of E.gapsBeforePx.entries()) {
                        let n = t - (l.gapsBeforePx[e] ?? 0);
                        (l.bottomOffsetsPx[e] ?? 0) + (l.heightsPx[e] ?? 0) <= H && (e9 || null != eq && e !== l.turnKeys.length - 1) && (g += n)
                    }
                let B = e9 && tt.shouldFollowContentGrowth() && (r = C, 0 === y && r <= 24) && f?.querySelector("[data-preserve-turn-viewport]") == null,
                    T = o?.restoreScrollDistanceFromBottom || null != I,
                    Z = null;
                T || (Z = B ? 0 : 0 !== g ? (o?.scrollDistanceFromBottomPx ?? tt.getUnroundedScrollDistanceFromBottomPx(C)) + g : o?.scrollDistanceFromBottomPx ?? (e9 || !m ? C : null));
                let D = tg.current.distanceFromBottomPx;
                T ? D = I ?? D : null != Z && (D = M(Z, y));
                let K = v({
                        current: tg.current,
                        distanceFromBottomPx: D,
                        layout: E,
                        viewportHeightPx: tg.current.viewportHeightPx
                    }),
                    R = o?.latestTurnHeightChange,
                    A = f ?? R?.turnElement ?? null,
                    F = {
                        latestTurnHeightChange: m || null != R ? {
                            heightDeltaPx: (R?.heightDeltaPx ?? 0) + d,
                            heightPx: E.heightsPx.at(-1) ?? null,
                            bottomViewportOverflowPx: S({
                                scrollElement: tt.getScrollElement(),
                                turnElement: A,
                                windowZoom: tn
                            }),
                            turnElement: A,
                            followContentHeightPx: null
                        } : null,
                        restoreScrollDistanceFromBottom: T,
                        scrollDistanceFromBottomPx: Z,
                        turnHeightsByKey: c
                    },
                    _ = tm.current;
                for (let [t, n] of e) {
                    let {
                        element: e
                    } = n, r = E.turnIndexByKey.get(t);
                    tC.current.get(t) === e && null != r && null != e.parentElement && (e.parentElement.style.height = `${E.heightsPx[r]}px`, e.parentElement.style.minHeight = "")
                }
                if (m && 1 === e.size && null == o && K === tg.current && E.gapsBeforePx.at(-1) === l.gapsBeforePx.at(-1) && null != _) return tf.current = c, tB.current = E, tZ.current = E, _.style.height = `${E.totalHeightPx}px`, tW(F), !0;
                null == tD.current && (tD.current = l);
                let j = () => {
                    tf.current = c, tB.current = E, to(c), K !== tg.current && (tg.current = K, tc(K))
                };
                return tw.current = F, void 0 === t || t ? (0, s.flushSync)(j) : j(), !0
            }, eZ[81] = e8, eZ[82] = tW, eZ[83] = te, eZ[84] = e5, eZ[85] = eO, eZ[86] = tR, eZ[87] = tA, eZ[88] = eq, eZ[89] = tr, eZ[90] = e9, eZ[91] = tt, eZ[92] = td, eZ[93] = tn, eZ[94] = X) : X = eZ[94];
            let tJ = (0, d.a)(X);
            eZ[95] !== tJ || eZ[96] !== tY || eZ[97] !== tq ? (Y = () => {
                if (null != tP.current) return tP.current;
                let e = new ResizeObserver(e => {
                    let t = new Map,
                        n = !1;
                    for (let r of e) {
                        let e = tx.current.get(r.target);
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
                                tv.current.set(e.element, l), n = !0
                        }
                    }
                    tJ(t), n && tY(), tq()
                });
                return tP.current = e, e
            }, eZ[95] = tJ, eZ[96] = tY, eZ[97] = tq, eZ[98] = Y) : Y = eZ[98];
            let t1 = (0, d.a)(Y);
            eZ[99] !== t1 || eZ[100] !== tO ? (J = (e, t) => {
                if (null == t) return;
                tx.current.set(t, {
                    kind: "turn",
                    turnKey: e
                }), tC.current.set(e, t), ty.current.delete(t), tL.current.set(e, t);
                let n = t1();
                return n.observe(t), tO(), () => {
                    n.unobserve(t), tx.current.delete(t), tL.current.get(e) === t && tL.current.delete(e), tC.current.get(e) === t && tC.current.delete(e)
                }
            }, eZ[99] = t1, eZ[100] = tO, eZ[101] = J) : J = eZ[101];
            let t2 = (0, d.a)(J);
            eZ[102] !== tJ || eZ[103] !== te || eZ[104] !== e0 || eZ[105] !== tn ? (ee = () => {
                let e = e0 ?? te.at(-1)?.turnKey;
                if (null == e) return;
                let t = tC.current.get(e);
                if (null == t) return;
                let n = (0, i.b)(t.getBoundingClientRect().height, tn);
                n <= 0 || tJ(new Map([
                    [e, {
                        element: t,
                        heightPx: n
                    }]
                ]), !1)
            }, eZ[102] = tJ, eZ[103] = te, eZ[104] = e0, eZ[105] = tn, eZ[106] = ee) : ee = eZ[106];
            let t0 = (0, d.a)(ee);
            eZ[107] !== t1 ? (et = e => {
                if (null == e) return;
                tx.current.set(e, {
                    element: e,
                    kind: "latest-turn-follow-content"
                }), tv.current.set(e, 0);
                let t = t1();
                return t.observe(e), () => {
                    t.unobserve(e), tx.current.delete(e), tv.current.delete(e)
                }
            }, eZ[107] = t1, eZ[108] = et) : et = eZ[108];
            let t3 = (0, d.a)(et);
            eZ[109] !== tJ || eZ[110] !== tn ? (en = () => {
                let e = tL.current;
                if (0 === e.size) {
                    tb.current = 0;
                    return
                }
                if (null != tM.current) return;
                if (tb.current >= 8) {
                    tM.current = requestAnimationFrame(e => {
                        tM.current = null, tb.current = 0, tI(e)
                    });
                    return
                }
                tb.current = tb.current + 1, tL.current = new Map;
                let t = new Map;
                for (let [n, r] of e) {
                    if (tC.current.get(n) !== r) continue;
                    let e = (0, i.b)(r.getBoundingClientRect().height, tn);
                    e > 0 && t.set(n, {
                        element: r,
                        heightPx: e
                    })
                }
                if (t.size > 0)
                    if (tJ(t, !1, "controller"))
                        for (let [t, n] of e) tC.current.get(t) === n && tL.current.set(t, n);
                    else tb.current = 0
            }, eZ[109] = tJ, eZ[110] = tn, eZ[111] = en) : en = eZ[111], (0, o.useLayoutEffect)(en), eZ[112] !== eJ || eZ[113] !== t0 ? (er = () => {
                null != eJ && t0()
            }, el = [eJ, t0], eZ[112] = eJ, eZ[113] = t0, eZ[114] = er, eZ[115] = el) : (er = eZ[114], el = eZ[115]), (0, o.useLayoutEffect)(er, el), eZ[116] !== tW || eZ[117] !== ta ? (ea = () => {
                let e = tw.current;
                null != e && e.turnHeightsByKey === ta && (tw.current = null, tW(e))
            }, eo = [tW, ta], eZ[116] = tW, eZ[117] = ta, eZ[118] = ea, eZ[119] = eo) : (ea = eZ[118], eo = eZ[119]), (0, o.useLayoutEffect)(ea, eo), eZ[120] !== te || eZ[121] !== e6 || eZ[122] !== tE.heightsPx || eZ[123] !== e4 || eZ[124] !== ta || eZ[125] !== ts || eZ[126] !== tn ? (es = e => {
                if (!e4 || e6?.viewportHeightPx === e) return;
                if (null != e6) return void(0, s.flushSync)(() => {
                    e7({
                        ...e6,
                        viewportHeightPx: e
                    })
                });
                let t = ts?.closest("[data-thread-user-message-navigation-content]"),
                    n = t?.lastElementChild,
                    r = te.at(-1)?.turnKey;
                if (null == t || null == n || null == r || te.some(e => null == ta[e.turnKey])) return;
                let l = (0, i.b)(t.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, tn) - parseFloat(getComputedStyle(t).paddingBottom);
                l <= 24 || (0, s.flushSync)(() => {
                    e7({
                        turnKey: r,
                        heightOutsideTurnPx: e - (tE.heightsPx.at(-1) ?? 0) - l,
                        viewportHeightPx: e
                    })
                })
            }, eZ[120] = te, eZ[121] = e6, eZ[122] = tE.heightsPx, eZ[123] = e4, eZ[124] = ta, eZ[125] = ts, eZ[126] = tn, eZ[127] = es) : es = eZ[127];
            let t8 = (0, d.a)(es);
            eZ[128] !== tX || eZ[129] !== eA || eZ[130] !== t$ ? (ei = () => {
                if (null != eA) return eA({
                    getEntryGeometry: tX,
                    scrollToKey: t$
                }), () => {
                    eA(null)
                }
            }, eu = [tX, eA, t$], eZ[128] = tX, eZ[129] = eA, eZ[130] = t$, eZ[131] = ei, eZ[132] = eu) : (ei = eZ[131], eu = eZ[132]), (0, o.useEffect)(ei, eu), eZ[133] !== tj ? (ec = () => () => {
                tk.current = !1, tj()
            }, ed = [tj], eZ[133] = tj, eZ[134] = ec, eZ[135] = ed) : (ec = eZ[134], ed = eZ[135]), (0, o.useLayoutEffect)(ec, ed), eZ[136] !== tj || eZ[137] !== tO ? (eh = () => (tO(), tj), eZ[136] = tj, eZ[137] = tO, eZ[138] = eh) : eh = eZ[138], eZ[139] !== tj || eZ[140] !== te.length || eZ[141] !== eF || eZ[142] !== tO || eZ[143] !== ts ? (em = [tj, te.length, eF, tO, ts], eZ[139] = tj, eZ[140] = te.length, eZ[141] = eF, eZ[142] = tO, eZ[143] = ts, eZ[144] = em) : em = eZ[144], (0, o.useEffect)(eh, em), eZ[145] !== td ? (ef = () => {
                let e = tx.current,
                    t = tC.current,
                    n = tv.current;
                return () => {
                    null != tM.current && (cancelAnimationFrame(tM.current), tM.current = null), tP.current?.disconnect(), tP.current = null, e.clear(), t.clear(), tL.current.clear(), n.clear(), tw.current = null, td.replace(null)
                }
            }, eg = [td], eZ[145] = td, eZ[146] = ef, eZ[147] = eg) : (ef = eZ[146], eg = eZ[147]), (0, o.useEffect)(ef, eg), eZ[148] !== e$ ? (ep = () => {
                if (null != e$) return () => {
                    e$(function(e, t, n) {
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
                    }(tf.current, tg.current.turnKeys, tg.current.renderedRange))
                }
            }, ex = [e$], eZ[148] = e$, eZ[149] = ep, eZ[150] = ex) : (ep = eZ[149], ex = eZ[150]), (0, o.useLayoutEffect)(ep, ex);
            let {
                addScrollListener: t5,
                addUserScrollListener: t9,
                getScrollElement: t4
            } = tt;
            eZ[151] !== t5 || eZ[152] !== t9 || eZ[153] !== eO || eZ[154] !== t4 || eZ[155] !== t8 || eZ[156] !== e4 || eZ[157] !== tz || eZ[158] !== tq || eZ[159] !== tG || eZ[160] !== t_ || eZ[161] !== ts || eZ[162] !== tU ? (eC = () => {
                let e = t4();
                if (null == e) return;
                let t = () => (null == tp.current && (tp.current = e.clientHeight), tp.current || tg.current.viewportHeightPx || 800),
                    n = t5(e => {
                        tU(M(e, b(eO)), t()), tz(e)
                    }),
                    r = t9((e, n) => {
                        tG(M(e, b(eO)), t(), null != n && e > n)
                    }),
                    l = new ResizeObserver(n => {
                        let r = n.find(t => t.target === e);
                        if (null != r) {
                            let {
                                height: e
                            } = (0, u.a)(r);
                            tp.current = e, tU(tg.current.distanceFromBottomPx, e), t_()
                        }
                        t8(t()), tq()
                    });
                return l.observe(e), e4 && null != ts && l.observe(ts), () => {
                    n(), r(), l.disconnect()
                }
            }, ey = [t5, t9, eO, t4, t8, tq, e4, tG, tz, t_, ts, tU], eZ[151] = t5, eZ[152] = t9, eZ[153] = eO, eZ[154] = t4, eZ[155] = t8, eZ[156] = e4, eZ[157] = tz, eZ[158] = tq, eZ[159] = tG, eZ[160] = t_, eZ[161] = ts, eZ[162] = tU, eZ[163] = eC, eZ[164] = ey) : (eC = eZ[163], ey = eZ[164]), (0, o.useLayoutEffect)(eC, ey), eZ[165] !== tJ || eZ[166] !== eO || eZ[167] !== tE || eZ[168] !== th || eZ[169] !== tt || eZ[170] !== td || eZ[171] !== tQ || eZ[172] !== tU || eZ[173] !== tn ? (eL = () => {
                if (null == th || td.getSnapshot() !== th || null != tM.current) return;
                let e = tt.getScrollElement();
                if (null == e) return;
                let t = new Map;
                for (let [e, n] of tC.current) {
                    let r = (0, i.b)(n.getBoundingClientRect().height, tn);
                    r > 0 && t.set(e, {
                        element: n,
                        heightPx: r
                    })
                }
                if (tJ(t, !1) || null != tw.current) return;
                let n = tC.current.get(th.turnKey),
                    r = null == n ? null : th.getTargetElement?.(n) ?? n,
                    l = null == n || null == r ? function(e) {
                        let {
                            align: t,
                            layout: n,
                            turnKey: r,
                            viewportHeightPx: l
                        } = e;
                        if ("center" === t) return g({
                            layout: n,
                            turnKey: r,
                            viewportHeightPx: l
                        });
                        let a = n.turnIndexByKey.get(r);
                        return null == a ? null : Math.max(0, (n.bottomOffsetsPx[a] ?? 0) + (n.heightsPx[a] ?? 0) - l + 10)
                    }({
                        align: th.align,
                        layout: tE,
                        turnKey: th.turnKey,
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
                        } = e, u = n.turnIndexByKey.get(a);
                        if (null == u) return null;
                        let c = l.getBoundingClientRect(),
                            d = r.getBoundingClientRect(),
                            h = (0, i.b)(d.top - c.top, o),
                            m = (0, i.b)(d.height, o),
                            f = (n.bottomOffsetsPx[u] ?? 0) + (n.heightsPx[u] ?? 0) - h;
                        return "top" === t ? Math.max(0, f - s + 10) : Math.max(0, f - m / 2 - s / 2)
                    }({
                        align: th.align,
                        layout: tE,
                        targetElement: r,
                        turnElement: n,
                        turnKey: th.turnKey,
                        viewportHeightPx: e.clientHeight,
                        windowZoom: tn
                    });
                if (null == l) return void queueMicrotask(() => tQ(th));
                let a = "top" === th.align && null != r ? Math.max(0, tt.getLastScrollDistanceFromBottomPx() - (0, i.b)(r.getBoundingClientRect().top - e.getBoundingClientRect().top, tn) + 10) : l + b(eO);
                tt.scrollToDistanceFromBottomPx(a, "instant", "user"), tU(Math.max(0, a - b(eO)), e.clientHeight), queueMicrotask(() => tQ(th))
            }, eZ[165] = tJ, eZ[166] = eO, eZ[167] = tE, eZ[168] = th, eZ[169] = tt, eZ[170] = td, eZ[171] = tQ, eZ[172] = tU, eZ[173] = tn, eZ[174] = eL) : eL = eZ[174], eZ[175] !== tJ || eZ[176] !== eO || eZ[177] !== tE || eZ[178] !== tS || eZ[179] !== th || eZ[180] !== tt || eZ[181] !== td || eZ[182] !== tQ || eZ[183] !== tU || eZ[184] !== tn ? (ev = [tJ, tE, tS, th, tt, td, tQ, eO, tU, tn], eZ[175] = tJ, eZ[176] = eO, eZ[177] = tE, eZ[178] = tS, eZ[179] = th, eZ[180] = tt, eZ[181] = td, eZ[182] = tQ, eZ[183] = tU, eZ[184] = tn, eZ[185] = ev) : ev = eZ[185], (0, o.useLayoutEffect)(eL, ev), eZ[186] !== eO || eZ[187] !== tR || eZ[188] !== tA || eZ[189] !== eq || eZ[190] !== th || eZ[191] !== e9 || eZ[192] !== tt || eZ[193] !== tU ? (ew = () => {
                var e;
                if (null != tw.current) return;
                let t = tZ.current,
                    n = tR(),
                    r = tD.current ?? n;
                if (tD.current = null, tZ.current = n, null != th || !e9 && t.turnKeys.at(-1) !== r.turnKeys.at(-1) || t === r) return;
                let l = b(eO),
                    a = tt.getLastScrollDistanceFromBottomPx(),
                    o = M(a, l);
                if (null != (eq?.() ?? null)) return;
                if (tt.shouldFollowContentGrowth() && (e = a, 0 === l && e <= 24)) return void tt.compensateScrollToDistanceFromBottomPx(0);
                let s = w({
                    distanceFromBottomPx: tA(a),
                    preferLatestVisibleRow: a < l,
                    layout: t,
                    measuredHeightsByKey: tf.current,
                    nextLayout: r,
                    viewportHeightPx: tg.current.viewportHeightPx
                });
                if (null == s) return;
                let i = function(e) {
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
                    anchorKey: s,
                    distanceFromBottomPx: o,
                    nextLayout: r,
                    previousLayout: t
                });
                null != i && (i !== o || t.totalHeightPx !== r.totalHeightPx) && (tU(i, tg.current.viewportHeightPx), tt.compensateScrollToDistanceFromBottomPx(tt.getUnroundedScrollDistanceFromBottomPx(a) + i - o))
            }, eZ[186] = eO, eZ[187] = tR, eZ[188] = tA, eZ[189] = eq, eZ[190] = th, eZ[191] = e9, eZ[192] = tt, eZ[193] = tU, eZ[194] = ew) : ew = eZ[194], eZ[195] !== eO || eZ[196] !== tR || eZ[197] !== tA || eZ[198] !== eq || eZ[199] !== tE || eZ[200] !== th || eZ[201] !== e9 || eZ[202] !== tt || eZ[203] !== tU ? (eP = [eO, tR, tA, eq, tE, th, e9, tt, tU], eZ[195] = eO, eZ[196] = tR, eZ[197] = tA, eZ[198] = eq, eZ[199] = tE, eZ[200] = th, eZ[201] = e9, eZ[202] = tt, eZ[203] = tU, eZ[204] = eP) : eP = eZ[204], (0, o.useLayoutEffect)(ew, eP), eZ[205] !== th || eZ[206] !== tG || eZ[207] !== t_ || eZ[208] !== tU ? (eb = () => {
                null == th && null == tw.current && (tU(tg.current.distanceFromBottomPx, tg.current.viewportHeightPx), t_(), tG(tg.current.distanceFromBottomPx, tg.current.viewportHeightPx, !1))
            }, eZ[205] = th, eZ[206] = tG, eZ[207] = t_, eZ[208] = tU, eZ[209] = eb) : eb = eZ[209], eZ[210] !== tE || eZ[211] !== th || eZ[212] !== tG || eZ[213] !== t_ || eZ[214] !== tU ? (eM = [tE, th, tG, t_, tU], eZ[210] = tE, eZ[211] = th, eZ[212] = tG, eZ[213] = t_, eZ[214] = tU, eZ[215] = eM) : eM = eZ[215], (0, o.useLayoutEffect)(eb, eM), eZ[216] !== tq ? (eS = () => {
                tq()
            }, eZ[216] = tq, eZ[217] = eS) : eS = eZ[217], (0, o.useLayoutEffect)(eS), eZ[218] !== te || eZ[219] !== eQ ? (eI = eQ ?? te.at(-1)?.turnKey, eZ[218] = te, eZ[219] = eQ, eZ[220] = eI) : eI = eZ[220];
            let t6 = eI;
            eZ[221] !== e_ ? (ek = (0, a.b)("relative shrink-0", e_), eZ[221] = e_, eZ[222] = ek) : ek = eZ[222], eZ[223] !== tE.totalHeightPx ? (eH = {
                height: tE.totalHeightPx
            }, eZ[223] = tE.totalHeightPx, eZ[224] = eH) : eH = eZ[224];
            let t7 = `${tE.topOffsetsPx[tF.startIndex]??0}px`;
            eZ[225] !== t7 ? (eE = {
                marginTop: t7
            }, eZ[225] = t7, eZ[226] = eE) : eE = eZ[226];
            let ne = tV.map(e => {
                let {
                    entry: t,
                    turnIndex: n
                } = e;
                return (0, r.jsx)(L, {
                    entry: t,
                    gapBeforePx: n === tF.startIndex ? 0 : tE.gapsBeforePx[n] ?? 0,
                    retainedTopPx: n < tF.startIndex || n >= tF.endIndex ? tE.topOffsetsPx[n] : void 0,
                    latestTurnFollowContentRef: n === te.length - 1 && null != eV ? t3 : void 0,
                    latestTurnFooter: t.turnKey === t6 ? eG : void 0,
                    RowComponent: eR,
                    measuredHeightPx: null == ta[t.turnKey] ? void 0 : tE.heightsPx[n],
                    constrainedHeightPx: n !== te.length - 1 && th?.turnKey !== t.turnKey && null == ta[t.turnKey] ? tE.heightsPx[n] : void 0,
                    observeTurnElement: t2
                }, t.turnKey)
            });
            return eZ[227] !== eE || eZ[228] !== ne ? (eB = (0, r.jsx)("div", {
                className: "flex flex-col",
                style: eE,
                children: ne
            }), eZ[227] = eE, eZ[228] = ne, eZ[229] = eB) : eB = eZ[229], eZ[230] !== tK || eZ[231] !== ek || eZ[232] !== eH || eZ[233] !== eB ? (eT = (0, r.jsx)("div", {
                ref: tK,
                className: ek,
                style: eH,
                children: eB
            }), eZ[230] = tK, eZ[231] = ek, eZ[232] = eH, eZ[233] = eB, eZ[234] = eT) : eT = eZ[234], eT
        }

        function C(e, t) {
            return e.turnIndex - t.turnIndex
        }

        function y() {
            return new I
        }
        let L = (0, o.memo)(function(e) {
            let t, n, o, s, i, u, c = (0, l.c)(24),
                {
                    entry: h,
                    gapBeforePx: m,
                    latestTurnFollowContentRef: f,
                    latestTurnFooter: g,
                    RowComponent: p,
                    constrainedHeightPx: x,
                    measuredHeightPx: C,
                    retainedTopPx: y,
                    observeTurnElement: L
                } = e,
                {
                    turnKey: v
                } = h;
            c[0] !== L || c[1] !== v ? (t = e => L(v, e), c[0] = L, c[1] = v, c[2] = t) : t = c[2];
            let w = (0, d.a)(t),
                P = null != y && "absolute inset-x-0",
                b = null != x && "overflow-hidden";
            c[3] !== P || c[4] !== b ? (n = (0, a.b)(P, b), c[3] = P, c[4] = b, c[5] = n) : n = c[5];
            let M = C ?? x,
                S = null == y ? m : 0,
                I = null == C ? h.minHeightPx : void 0;
            return c[6] !== y || c[7] !== M || c[8] !== S || c[9] !== I ? (o = {
                height: M,
                marginTop: S,
                minHeight: I,
                top: y
            }, c[6] = y, c[7] = M, c[8] = S, c[9] = I, c[10] = o) : o = c[10], c[11] !== p || c[12] !== h || c[13] !== f || c[14] !== g ? (s = (0, r.jsx)(p, {
                entry: h,
                latestTurnFooter: g,
                latestTurnFollowContentRef: f
            }), c[11] = p, c[12] = h, c[13] = f, c[14] = g, c[15] = s) : s = c[15], c[16] !== w || c[17] !== s || c[18] !== v ? (i = (0, r.jsx)("div", {
                ref: w,
                className: "[&_[data-virtualized-turn-content]]:[content-visibility:visible]",
                "data-turn-key": v,
                children: s
            }), c[16] = w, c[17] = s, c[18] = v, c[19] = i) : i = c[19], c[20] !== i || c[21] !== n || c[22] !== o ? (u = (0, r.jsx)("div", {
                className: n,
                style: o,
                children: i
            }), c[20] = i, c[21] = n, c[22] = o, c[23] = u) : u = c[23], u
        });

        function v(e) {
            var t, n;
            let {
                current: r,
                distanceFromBottomPx: l,
                layout: a,
                viewportHeightPx: o
            } = e, s = Math.min(l, a.totalHeightPx), i = m({
                distanceFromBottomPx: s,
                layout: a,
                overscanCount: 2,
                viewportHeightPx: o
            }), u = (t = r.renderedRange, n = i, t.startIndex <= n.startIndex && t.endIndex >= n.endIndex) ? r.renderedRange : i;
            return r.distanceFromBottomPx === s && r.viewportHeightPx === o && r.renderedRange.startIndex === u.startIndex && r.renderedRange.endIndex === u.endIndex && P(r.turnKeys, a.turnKeys) ? r : {
                distanceFromBottomPx: s,
                renderedRange: u,
                turnKeys: a.turnKeys,
                viewportHeightPx: o
            }
        }

        function w(e) {
            let {
                distanceFromBottomPx: t,
                preferLatestVisibleRow: n,
                layout: r,
                measuredHeightsByKey: l,
                nextLayout: a,
                viewportHeightPx: o
            } = e, s = m({
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

        function P(e, t) {
            return e === t || e.length === t.length && e.every((e, n) => e === t[n])
        }

        function b(e) {
            return Math.max(0, e?.() ?? 0)
        }

        function M(e, t) {
            return Math.max(0, e - t)
        }

        function S(e) {
            let {
                scrollElement: t,
                turnElement: n,
                windowZoom: r
            } = e;
            return null == t || null == n ? 0 : (0, i.b)(n.getBoundingClientRect().bottom - t.getBoundingClientRect().bottom, r)
        }
        class I {
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
    QSw: (function(e, t, n) {
        var r = n("Qo"),
            l = n("Xnl"),
            a = n("zd"),
            o = n("TS"),
            s = n("ipI"),
            i = n("Sd"),
            u = n("tSE"),
            c = n("vzz"),
            d = n("ALW");

        function h(e) {
            let t, n, h, m, f, g = (0, r.c)(14);
            g[0] !== e ? (t = void 0 === e ? {} : e, g[0] = e, g[1] = t) : t = g[1];
            let {
                transcriptMcpAppIds: p,
                blockedWidgetSource: x,
                shouldBlockExternalEgress: C
            } = t, y = void 0 !== C && C, L = (0, l.z)(u.a), v = (0, l.z)(i.a), w = (0, l.A)(d.k), P = (0, l.A)(o.w);
            return g[2] !== P || g[3] !== x || g[4] !== v || g[5] !== w || g[6] !== L || g[7] !== y || g[8] !== p ? (n = () => {
                for (let [e, t] of("chatgpt-thread" === L.value.routeKind && (0, s.b)(v, P.filter(e => y || null != x && (e.widgetSource ?? "descriptor") === x)), w))(y || null != x && (t.content.mcpAppScope.widgetSource ?? "descriptor") === x || t.hostedInThreadScrollLayout && p?.has(e) === !1) && (0, d.z)(L, e)
            }, h = [P, x, p, v, w, L, y], g[2] = P, g[3] = x, g[4] = v, g[5] = w, g[6] = L, g[7] = y, g[8] = p, g[9] = n, g[10] = h) : (n = g[9], h = g[10]), (0, a.useLayoutEffect)(n, h), g[11] !== L ? (m = () => {
                (0, c.e)(L)
            }, f = [L], g[11] = L, g[12] = m, g[13] = f) : (m = g[12], f = g[13]), (0, a.useLayoutEffect)(m, f), null
        }
        n.d(t, {
            a: () => h
        })
    }),
    Mb: (function(e, t, n) {
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
    yzQ: (function(e, t, n) {
        var r = n("Qo"),
            l = n("Xnl"),
            a = n("zd"),
            o = n("HZ"),
            s = n("Csl"),
            i = n("TS0"),
            u = n("tSE");

        function c(e) {
            let t, n, c, d = (0, r.c)(18),
                {
                    ready: h,
                    onNavigate: m
                } = e,
                f = (0, l.z)(u.a),
                g = (0, l.A)(s.e),
                p = (0, o.X)(),
                x = p.state,
                C = x?.sidebarArea === "scheduled";
            d[0] !== g || d[1] !== p.key ? (t = {
                locationKey: p.key,
                accountId: g
            }, d[0] = g, d[1] = p.key, d[2] = t) : t = d[2];
            let y = (0, l.x)(i.a, t),
                L = (0, a.useEffectEvent)(m);
            return d[3] !== g || d[4] !== y || d[5] !== p.key || d[6] !== L || d[7] !== h || d[8] !== C || d[9] !== f ? (n = () => {
                if (!C || !h || y) return;
                let e = new AbortController;
                return L(e.signal).then(() => {
                    e.signal.aborted || f.set(i.a, {
                        locationKey: p.key,
                        accountId: g
                    }, !0)
                }), () => e.abort()
            }, d[3] = g, d[4] = y, d[5] = p.key, d[6] = L, d[7] = h, d[8] = C, d[9] = f, d[10] = n) : n = d[10], d[11] !== g || d[12] !== y || d[13] !== p.key || d[14] !== h || d[15] !== C || d[16] !== f ? (c = [g, y, p.key, h, C, f], d[11] = g, d[12] = y, d[13] = p.key, d[14] = h, d[15] = C, d[16] = f, d[17] = c) : c = d[17], (0, a.useEffect)(n, c), null
        }
        n.d(t, {
            a: () => c
        })
    }),
    yLz: (function(e, t, n) {
        var r = n("A"),
            l = n("Qo"),
            a = n("oy"),
            o = n("ygO"),
            s = n("RN");

        function i(e) {
            let t, n, i = (0, l.c)(5),
                {
                    ref: u,
                    onRetry: c
                } = e;
            return i[0] !== c ? (t = null != c ? (0, r.jsx)(o.a, {
                color: "secondary",
                onClick: c,
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
            }), i[0] = c, i[1] = t) : t = i[1], i[2] !== u || i[3] !== t ? (n = (0, r.jsx)("div", {
                ref: u,
                className: "flex justify-center py-4",
                children: t
            }), i[2] = u, i[3] = t, i[4] = n) : n = i[4], n
        }
        n.d(t, {
            a: () => i
        })
    }),
    KFm: (function(e, t, n) {
        var r = n("acL"),
            l = n("jC"),
            a = n("p5Y"),
            o = n("V8"),
            s = n("uY");
        let i = 2 / 3;
        class u {
            scrollController;
            height = (0, r.c)(0);
            element = null;
            prefersReducedMotion = !0;
            onReleased;
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
                    l = null == r ? 0 : (0, s.a)(r);
                return this.writeHeight(n), null != r && this.scrollController.compensateScrollToDistanceFromBottomPx(Math.max(0, l - (t - n))), 0 === n && this.onReleased?.(), !0
            };
            cancelPendingUserScrollDecay = () => {
                null != this.userScrollDecayAnimationFrame && (window.cancelAnimationFrame(this.userScrollDecayAnimationFrame), this.userScrollDecayAnimationFrame = null), this.pendingUserScrollDecayPx = 0, this.pendingUserScrollElement = null
            };
            clear = () => {
                this.canPrepareThreadEndContent = !1, this.stop(), this.cancelPendingUserScrollDecay(), this.writeHeight(0), this.placementTarget = void 0
            };
            prepareThreadEndContent = () => {
                let e = this.scrollController.getScrollElement(),
                    t = this.element;
                if (!this.canPrepareThreadEndContent || null != this.stopPlacementAnimation || null == e || e.clientHeight <= 0 || null == t) return;
                let n = e.getBoundingClientRect(),
                    r = n.bottom - c(e) * (n.height / e.clientHeight);
                t.getBoundingClientRect().top > r || (this.canPrepareThreadEndContent = !1, this.cancelPendingUserScrollDecay(), this.consumeGrowth((0, s.a)(e)), this.scrollController.compensateScrollToDistanceFromBottomPx(0))
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
                if (this.stop(), null == t) return;
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
                    let o = this.trimTo(d(e, null != this.placementTarget));
                    l && (o || this.scrollController.compensateScrollToDistanceFromBottomPx((0, s.a)(e)), this.animatePlacement(), this.canPrepareThreadEndContent = a)
                }
            };
            place = e => {
                let t = this.scrollController.getScrollElement();
                if (null == t) return;
                this.canPrepareThreadEndContent = !1, this.cancelPendingUserScrollDecay(), this.stop(), this.placementTarget = e, this.viewportHeightPx = t.clientHeight, this.scrollPaddingBottomPx = c(t);
                let n = this.height.get(),
                    r = (0, s.a)(t),
                    l = this.getPlacementDistancePx(t);
                this.scrollController.holdViewport(), this.writeHeight(null == e ? d(t) : Math.max(0, n - l + 1)), this.prefersReducedMotion || this.scrollController.compensateScrollToDistanceFromBottomPx(r + this.height.get() - n), this.animatePlacement(), this.canPrepareThreadEndContent = !0
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
                return (0, s.a)(e) - (this.placementTarget.getBoundingClientRect().top - t.top) / n + e.clientTop + r
            }
        }

        function c(e) {
            let t = Number.parseFloat(e.style.getPropertyValue("--thread-scroll-padding-bottom"));
            return Number.isFinite(t) ? t : 0
        }

        function d(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = Math.max(0, e.clientHeight - c(e));
            return t ? n : Math.max(0, Math.min(n * i, n - 240))
        }
        n.d(t, {
            a: () => u,
            b: () => c
        })
    }),
    Ho4: (function(e, t, n) {
        var r = n("A"),
            l = n("Qo"),
            a = n("zd"),
            o = n("T1"),
            s = n("ZY"),
            i = n("m8O"),
            u = n("bI"),
            c = n("lsf");
        let d = Array.from({
            length: 101
        }, (e, t) => t / 100);

        function h(e) {
            let t, n, h, m, f, g, p, x, C, y, L, v, w, P, b = (0, l.c)(41),
                {
                    controller: M,
                    onReleased: S
                } = e,
                I = (0, c.b)(),
                k = (0, a.useContext)(s.a),
                H = (0, o.a)(),
                {
                    getScrollElement: E
                } = I;
            b[0] !== M ? (t = e => {
                M.setElement(e)
            }, b[0] = M, b[1] = t) : t = b[1];
            let B = (0, u.a)(t);
            return b[2] !== M || b[3] !== S || b[4] !== H || b[5] !== I ? (n = () => {
                M.updateContext(I, H, S)
            }, h = [M, I, H, S], b[2] = M, b[3] = S, b[4] = H, b[5] = I, b[6] = n, b[7] = h) : (n = b[6], h = b[7]), (0, a.useInsertionEffect)(n, h), b[8] !== M || b[9] !== E ? (m = () => {
                let e = E();
                if (null == e) return;
                let t = new AbortController;
                for (let n of ["wheel", "touchstart", "pointerdown", "keydown"]) e.addEventListener(n, M.stop, {
                    capture: !0,
                    passive: !0,
                    signal: t.signal
                });
                return () => {
                    t.abort(), M.stop()
                }
            }, f = [M, E], b[8] = M, b[9] = E, b[10] = m, b[11] = f) : (m = b[10], f = b[11]), (0, a.useEffect)(m, f), b[12] !== M.cancelPendingUserScrollDecay ? (g = () => M.cancelPendingUserScrollDecay, b[12] = M.cancelPendingUserScrollDecay, b[13] = g) : g = b[13], b[14] !== M ? (p = [M], b[14] = M, b[15] = p) : p = b[15], (0, a.useEffect)(g, p), b[16] !== M || b[17] !== E ? (x = () => {
                let e = E();
                if (null == e || "u" < typeof IntersectionObserver) return;
                let t = new IntersectionObserver(M.collapseIfHidden, {
                        root: e,
                        threshold: d
                    }),
                    n = M.getElement();
                return null != n && t.observe(n), () => t.disconnect()
            }, b[16] = M, b[17] = E, b[18] = x) : x = b[18], b[19] !== M || b[20] !== E || b[21] !== I ? (C = [M, E, I], b[19] = M, b[20] = E, b[21] = I, b[22] = C) : C = b[22], (0, a.useLayoutEffect)(x, C), b[23] !== M.handleScroll || b[24] !== M.handleUserScroll || b[25] !== I ? (y = () => {
                let e = I.addScrollListener(M.handleScroll),
                    t = I.addUserScrollListener(M.handleUserScroll);
                return () => {
                    e(), t()
                }
            }, b[23] = M.handleScroll, b[24] = M.handleUserScroll, b[25] = I, b[26] = y) : y = b[26], b[27] !== M || b[28] !== I ? (L = [M, I], b[27] = M, b[28] = I, b[29] = L) : L = b[29], (0, a.useLayoutEffect)(y, L), b[30] !== M || b[31] !== E || b[32] !== k ? (v = () => {
                let e = E();
                if (null == e) return;
                M.reconcileViewport();
                let t = null,
                    n = () => {
                        null == t && (t = window.requestAnimationFrame(() => {
                            t = null, M.reconcileViewport()
                        }))
                    },
                    r = k ?? (0, i.b)(),
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
                    null == k && r?.disconnect(), window.removeEventListener("resize", n), null != t && window.cancelAnimationFrame(t)
                }
            }, b[30] = M, b[31] = E, b[32] = k, b[33] = v) : v = b[33], b[34] !== M || b[35] !== E || b[36] !== k || b[37] !== I ? (w = [M, E, I, k], b[34] = M, b[35] = E, b[36] = k, b[37] = I, b[38] = w) : w = b[38], (0, a.useLayoutEffect)(v, w), b[39] !== B ? (P = (0, r.jsx)("div", {
                ref: B,
                className: "shrink-0",
                "aria-hidden": !0
            }), b[39] = B, b[40] = P) : P = b[40], P
        }
        n.d(t, {
            a: () => h
        })
    }),
    GaC: (function(e, t, n) {
        var r = n("Xnl"),
            l = n("gbr"),
            a = n("OW"),
            o = n("tSE"),
            s = n("Ex"),
            i = n("w2y");
        let u = (0, r.u)(a.a, {
                displayMode: "overlay",
                isPopoverOpen: !1
            }),
            c = (0, r.d)(o.a, (e, t) => {
                let {
                    get: n
                } = t, r = (0, l.z)(!0 === e ? n(l.N) : n(l.C, e), e), a = n(u), o = (0, i.a)({
                    displayMode: a.displayMode,
                    isPinned: r,
                    isPopoverOpen: a.isPopoverOpen || "boolean" != typeof e && r
                });
                return n(s.g) ? {
                    ...o,
                    shouldShow: !1,
                    shouldHideInlineImmediately: !0,
                    visibleSurface: null
                } : o
            }),
            d = (0, r.d)(o.a, (e, t) => {
                let {
                    get: n
                } = t;
                return null != n(c, e).visibleSurface
            });
        n.d(t, {}, {
            a: d,
            b: u
        })
    }),
    Dof: (function(e, t, n) {
        var r = n("gbr"),
            l = n("GaC");

        function a(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = arguments.length > 2 ? arguments[2] : void 0,
                a = e.get(l.b),
                s = (0, r.z)(!0 === t ? e.get(r.N) : e.get(r.C, t), t);
            o(e, "overlay" === a.displayMode ? !(a.isPopoverOpen || "boolean" != typeof t && s) : !s, {
                pinStateKey: t,
                transition: n
            })
        }

        function o(e, t) {
            let {
                pinStateKey: n = !0,
                returnFocusId: a,
                transition: s
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (null != s) return void s(t, () => o(e, t, {
                pinStateKey: n,
                returnFocusId: a
            }));
            let i = e.get(l.b);
            "overlay" !== i.displayMode ? !0 === n ? e.set(r.N, t) : e.set(r.C, n, (0, r.u)(n, t)) : ("boolean" != typeof n && e.set(r.C, n, (0, r.u)(n, t)), e.set(l.b, {
                ...i,
                isPopoverOpen: t,
                returnFocusId: t ? a : i.returnFocusId
            }))
        }
        n.d(t, {
            a: () => o,
            b: () => a
        })
    }),
    BdY: (function(e, t, n) {
        var r = n("Qo"),
            l = n("K4"),
            a = n("p5Y"),
            o = n("B7s"),
            s = n("cT"),
            i = n("jC"),
            u = n("Xnl"),
            c = n("zd"),
            d = n("I7b"),
            h = n("Qc"),
            m = n("gbr"),
            f = n("zR1"),
            g = n("SGs"),
            p = n("OW"),
            x = n("eG"),
            C = n("Ex"),
            y = n("w2y"),
            L = n("GaC");

        function v(e, t) {
            let n, s, i, h, f, g, p = (0, r.c)(15),
                x = void 0 !== t && t,
                C = (0, u.A)(m.i),
                v = (0, u.A)(m.r),
                P = (0, c.useContext)(d.c),
                b = (0, l.a)(0),
                M = P?.mainContentTargetWidth ?? b;
            p[0] !== x || p[1] !== M || p[2] !== e ? (n = () => {
                var t, n;
                t = e, n = x ? "overlay" : (0, y.c)(M.get()), t.set(L.b, e => {
                    let t = "overlay" === n && e.isPopoverOpen;
                    return e.displayMode === n && e.isPopoverOpen === t ? e : {
                        displayMode: n,
                        isPopoverOpen: t
                    }
                })
            }, p[0] = x, p[1] = M, p[2] = e, p[3] = n) : n = p[3];
            let S = n;
            p[4] !== S ? (s = () => {
                a.b.update(S)
            }, p[4] = S, p[5] = s) : s = p[5], (0, o.a)(M, "change", s), p[6] !== S ? (i = () => (S(), () => (0, a.a)(S)), p[6] = S, p[7] = i) : i = p[7], p[8] !== C || p[9] !== v || p[10] !== S ? (h = [C, v, S], p[8] = C, p[9] = v, p[10] = S, p[11] = h) : h = p[11], (0, c.useLayoutEffect)(i, h), p[12] !== e ? (f = () => () => {
                e.set(L.b, w)
            }, g = [e], p[12] = e, p[13] = f, p[14] = g) : (f = p[13], g = p[14]), (0, c.useLayoutEffect)(f, g)
        }

        function w(e) {
            return e.isPopoverOpen ? {
                ...e,
                isPopoverOpen: !1
            } : e
        }

        function P(e) {
            let t, n, a, i, v, w, P, I, k, H, E, B, T, Z, D, K, R = (0, r.c)(92),
                {
                    contentShiftResetKey: A,
                    controlledIsOpen: F,
                    floatingPanelWidth: _,
                    getCurrentPinStateKey: j,
                    isEnabled: O,
                    pinStateKey: V
                } = void 0 === e ? {} : e,
                N = void 0 === O || O,
                z = void 0 === V || V,
                q = (0, u.z)(p.a),
                W = (0, s.a)(),
                U = (0, c.useId)(),
                G = (0, u.A)(null == F && !0 === z ? m.N : null),
                Q = (0, u.x)(null == F && !0 !== z ? m.C : null, !0 !== z && z),
                $ = F ?? (0, m.z)(!0 === z ? G : Q, z),
                X = (0, u.A)(m.h),
                Y = (0, u.A)(h.F),
                J = (0, u.A)(m.i),
                ee = (0, u.A)(C.g),
                et = (0, u.A)(m.r),
                en = (0, u.A)(L.b),
                er = N && $,
                el = _ ?? 300,
                ea = N && null == _ && (F ?? (en.isPopoverOpen || "boolean" != typeof z && $)),
                eo = (0, u.A)(x.c),
                es = (0, u.A)(f.a),
                ei = (0, c.useContext)(d.c),
                eu = (0, l.a)(0),
                ec = ei?.mainContentTargetWidth ?? eu,
                ed = (0, l.a)(M({
                    isSummaryPanelPinned: er,
                    floatingPanelWidth: _,
                    mainContentTargetWidth: ec.get()
                }));
            R[0] !== ec ? (t = e => ec.on("change", e), R[0] = ec, R[1] = t) : t = R[1];
            let eh = t,
                em = () => (0, y.c)(ec.get(), el),
                ef = (0, c.useSyncExternalStore)(eh, em, em),
                eg = (0, c.useRef)(null);
            R[2] !== ed ? (n = ed.get(), R[2] = ed, R[3] = n) : n = R[3];
            let ep = (0, c.useRef)(n),
                ex = (0, c.useRef)(!1),
                eC = (0, c.useRef)(A),
                ey = (0, c.useRef)(X),
                eL = (0, c.useRef)(Y),
                ev = (0, y.a)({
                    displayMode: ef,
                    isPinned: er && null == _,
                    isPopoverOpen: ea
                }),
                ew = ev.shouldShow && !ee,
                eP = ew || null != _ && "overlay" !== ef ? 308 + el - 300 : 0,
                eb = (0, l.a)(eP);
            R[4] !== es || R[5] !== q || R[6] !== U ? (a = e => {
                es && (0, g.f)(q, U, 2 * Math.abs(e))
            }, R[4] = es, R[5] = q, R[6] = U, R[7] = a) : a = R[7], (0, o.a)(ed, "change", a), R[8] !== es || R[9] !== q || R[10] !== U ? (i = e => {
                es || (0, g.f)(q, U, e)
            }, R[8] = es, R[9] = q, R[10] = U, R[11] = i) : i = R[11], (0, o.a)(eb, "change", i), R[12] !== ed || R[13] !== es || R[14] !== q || R[15] !== eb || R[16] !== U ? (v = () => ((0, g.f)(q, U, es ? 2 * Math.abs(ed.get()) : eb.get()), () => {
                (0, g.f)(q, U, null)
            }), w = [ed, es, q, eb, U], R[12] = ed, R[13] = es, R[14] = q, R[15] = eb, R[16] = U, R[17] = v, R[18] = w) : (v = R[17], w = R[18]), (0, c.useLayoutEffect)(v, w), R[19] !== eo || R[20] !== eb || R[21] !== eP ? (I = () => {
                if (eb.get() === eP) return;
                let e = S(eb, eP, eo);
                return () => e?.stop()
            }, P = [eP, eo, eb], R[19] = eo, R[20] = eb, R[21] = eP, R[22] = P, R[23] = I) : (P = R[22], I = R[23]), (0, c.useEffect)(I, P), R[24] !== ed || R[25] !== A || R[26] !== eC || R[27] !== F || R[28] !== _ || R[29] !== j || R[30] !== Y || R[31] !== N || R[32] !== ec || R[33] !== z || R[34] !== X || R[35] !== q || R[36] !== W ? (k = () => {
                let e = ey.current !== X,
                    t = eL.current !== Y;
                if (!ex.current && eC.current === A && !e && !t) return;
                ex.current = !1, eC.current = A, ey.current = X, eL.current = Y;
                let n = b(q, N, j?.() ?? z, ec.get(), _, F);
                (ep.current = n, eg.current?.stop(), e) ? W(() => ed.set(n)): ed.jump(n)
            }, R[24] = ed, R[25] = A, R[26] = eC, R[27] = F, R[28] = _, R[29] = j, R[30] = Y, R[31] = N, R[32] = ec, R[33] = z, R[34] = X, R[35] = q, R[36] = W, R[37] = k) : k = R[37], R[38] !== ed || R[39] !== A || R[40] !== F || R[41] !== _ || R[42] !== j || R[43] !== Y || R[44] !== N || R[45] !== er || R[46] !== ec || R[47] !== z || R[48] !== X || R[49] !== q || R[50] !== W ? (H = [ed, A, F, _, j, Y, N, er, ec, z, X, q, W], R[38] = ed, R[39] = A, R[40] = F, R[41] = _, R[42] = j, R[43] = Y, R[44] = N, R[45] = er, R[46] = ec, R[47] = z, R[48] = X, R[49] = q, R[50] = W, R[51] = H) : H = R[51], (0, c.useLayoutEffect)(k, H), R[52] !== ed || R[53] !== F || R[54] !== _ || R[55] !== j || R[56] !== N || R[57] !== ec || R[58] !== z || R[59] !== q || R[60] !== eo ? (E = e => {
                if (ex.current) return;
                let t = b(q, N, j?.() ?? z, e, _, F);
                if (ep.current !== t) {
                    if (ep.current = t, eg.current?.stop(), 0 === e || 0 === ec.getPrevious()) return void ed.jump(t);
                    eg.current = S(ed, t, eo)
                }
            }, R[52] = ed, R[53] = F, R[54] = _, R[55] = j, R[56] = N, R[57] = ec, R[58] = z, R[59] = q, R[60] = eo, R[61] = E) : E = R[61], (0, o.a)(ec, "change", E), R[62] !== ed || R[63] !== F || R[64] !== _ || R[65] !== j || R[66] !== N || R[67] !== ec || R[68] !== z || R[69] !== q || R[70] !== eo ? (B = () => {
                let e = b(q, N, j?.() ?? z, ec.get(), _, F);
                ep.current !== e && (ep.current = e, eg.current?.stop(), eg.current = S(ed, e, eo))
            }, R[62] = ed, R[63] = F, R[64] = _, R[65] = j, R[66] = N, R[67] = ec, R[68] = z, R[69] = q, R[70] = eo, R[71] = B) : B = R[71], R[72] !== ed || R[73] !== F || R[74] !== _ || R[75] !== j || R[76] !== N || R[77] !== J || R[78] !== et || R[79] !== er || R[80] !== ec || R[81] !== z || R[82] !== q || R[83] !== eo ? (T = [ed, F, _, j, N, er, J, et, ec, z, q, eo], R[72] = ed, R[73] = F, R[74] = _, R[75] = j, R[76] = N, R[77] = J, R[78] = et, R[79] = er, R[80] = ec, R[81] = z, R[82] = q, R[83] = eo, R[84] = T) : T = R[84], (0, c.useEffect)(B, T), R[85] === Symbol.for("react.memo_cache_sentinel") ? (Z = () => () => {
                ex.current = !0, eg.current?.stop()
            }, D = [], R[85] = Z, R[86] = D) : (Z = R[85], D = R[86]), (0, c.useLayoutEffect)(Z, D);
            let eM = ev.shouldHideInlineImmediately || ee,
                eS = ee ? null : ev.visibleSurface;
            return R[87] !== ed || R[88] !== ew || R[89] !== eM || R[90] !== eS ? (K = {
                contentShift: ed,
                shouldHideInlineImmediately: eM,
                shouldShow: ew,
                visibleSurface: eS
            }, R[87] = ed, R[88] = ew, R[89] = eM, R[90] = eS, R[91] = K) : K = R[91], K
        }

        function b(e, t, n, r, l, a) {
            return M({
                isSummaryPanelPinned: t && (a ?? (0, m.z)(!0 === n ? e.get(m.N) : e.get(m.C, n), n)),
                floatingPanelWidth: l,
                mainContentTargetWidth: r
            })
        }

        function M(e) {
            let {
                isSummaryPanelPinned: t,
                floatingPanelWidth: n,
                mainContentTargetWidth: r
            } = e, l = (0, y.c)(r, n);
            return null != n && "overlay" === l ? (0, y.b)({
                displayMode: (0, y.c)(r),
                isPinned: t
            }) : (0, y.b)({
                displayMode: l,
                isPinned: null != n || t,
                panelWidth: n
            })
        }

        function S(e, t, n) {
            return n ? (e.set(t), null) : (0, i.a)(e, t, d.a)
        }
        n.d(t, {
            a: () => P,
            b: () => v
        })
    }),
    XK0: (function(e, t, n) {
        var r = n("A"),
            l = n("Qo");
        t.default = e => {
            let t, n, a, o, s, i = (0, l.c)(6);
            return i[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, r.jsxs)("g", {
                filter: "url(#filter0_d_8150_6803)",
                children: [(0, r.jsx)("mask", {
                    id: "path-1-inside-1_8150_6803",
                    fill: "white",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M23 7.85169C23 7.59052 23.0001 7.32933 22.9985 7.06813C22.9972 6.84811 22.9947 6.62813 22.9887 6.40822C22.9758 5.92889 22.9475 5.44545 22.8622 4.97147C22.7758 4.49065 22.6346 4.04314 22.4121 3.60627C22.1934 3.17687 21.9077 2.78394 21.5668 2.44329C21.226 2.10264 20.833 1.81712 20.4034 1.59854C19.9661 1.376 19.5181 1.23487 19.0367 1.14845C18.5627 1.06333 18.0791 1.03511 17.5998 1.02216C17.3797 1.01621 17.1597 1.0137 16.9395 1.01233C16.6782 1.01073 16.4169 1.01087 16.1555 1.01087L13.1213 1H10.8519L7.87129 1.01087C7.60946 1.01087 7.34762 1.01073 7.08578 1.01233C6.8652 1.0137 6.64472 1.01621 6.42421 1.02216C5.94377 1.03511 5.45911 1.06336 4.98395 1.14858C4.50195 1.23498 4.05331 1.37605 3.61539 1.59843C3.18493 1.81704 2.79104 2.10259 2.44951 2.44329C2.10803 2.78392 1.82179 3.17676 1.60267 3.60608C1.37958 4.04317 1.23813 4.49094 1.15146 4.97203C1.06613 5.44583 1.03786 5.9291 1.02486 6.40822C1.01893 6.62816 1.01637 6.84813 1.01503 7.06813C1.01343 7.32936 1 7.65383 1 7.91502L1.00008 10.8543L1 13.148L1.01356 16.1497C1.01356 16.4113 1.01346 16.6728 1.01503 16.9344C1.01637 17.1547 1.01893 17.375 1.02488 17.5952C1.03786 18.0751 1.06619 18.5593 1.1516 19.0339C1.23823 19.5154 1.37966 19.9635 1.60257 20.4009C1.82171 20.831 2.108 21.2244 2.44951 21.5655C2.79101 21.9067 3.18479 22.1925 3.61518 22.4114C4.05336 22.6343 4.50222 22.7756 4.98451 22.8621C5.45945 22.9474 5.94396 22.9757 6.42421 22.9886C6.64472 22.9946 6.86523 22.9971 7.08581 22.9984C7.34765 23 7.60946 22.9999 7.87129 22.9999L10.8788 23H13.1538L16.1555 22.9999C16.4169 22.9999 16.6782 23 16.9395 22.9984C17.1597 22.9971 17.3797 22.9946 17.5998 22.9886C18.0793 22.9756 18.5631 22.9473 19.0373 22.862C19.5184 22.7755 19.9661 22.6342 20.4032 22.4115C20.8329 22.1927 21.226 21.9067 21.5668 21.5655C21.9076 21.2244 22.1933 20.8311 22.412 20.4011C22.6347 19.9635 22.7758 19.5151 22.8623 19.0333C22.9475 18.5589 22.9758 18.075 22.9887 17.5952C22.9947 17.3749 22.9972 17.1547 22.9985 16.9344C23.0001 16.6728 23 16.4113 23 16.1497C23 16.1497 22.9998 13.201 22.9998 13.148V10.8519C22.9998 10.8128 23 7.85169 23 7.85169Z"
                    })
                }), (0, r.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M23 7.85169C23 7.59052 23.0001 7.32933 22.9985 7.06813C22.9972 6.84811 22.9947 6.62813 22.9887 6.40822C22.9758 5.92889 22.9475 5.44545 22.8622 4.97147C22.7758 4.49065 22.6346 4.04314 22.4121 3.60627C22.1934 3.17687 21.9077 2.78394 21.5668 2.44329C21.226 2.10264 20.833 1.81712 20.4034 1.59854C19.9661 1.376 19.5181 1.23487 19.0367 1.14845C18.5627 1.06333 18.0791 1.03511 17.5998 1.02216C17.3797 1.01621 17.1597 1.0137 16.9395 1.01233C16.6782 1.01073 16.4169 1.01087 16.1555 1.01087L13.1213 1H10.8519L7.87129 1.01087C7.60946 1.01087 7.34762 1.01073 7.08578 1.01233C6.8652 1.0137 6.64472 1.01621 6.42421 1.02216C5.94377 1.03511 5.45911 1.06336 4.98395 1.14858C4.50195 1.23498 4.05331 1.37605 3.61539 1.59843C3.18493 1.81704 2.79104 2.10259 2.44951 2.44329C2.10803 2.78392 1.82179 3.17676 1.60267 3.60608C1.37958 4.04317 1.23813 4.49094 1.15146 4.97203C1.06613 5.44583 1.03786 5.9291 1.02486 6.40822C1.01893 6.62816 1.01637 6.84813 1.01503 7.06813C1.01343 7.32936 1 7.65383 1 7.91502L1.00008 10.8543L1 13.148L1.01356 16.1497C1.01356 16.4113 1.01346 16.6728 1.01503 16.9344C1.01637 17.1547 1.01893 17.375 1.02488 17.5952C1.03786 18.0751 1.06619 18.5593 1.1516 19.0339C1.23823 19.5154 1.37966 19.9635 1.60257 20.4009C1.82171 20.831 2.108 21.2244 2.44951 21.5655C2.79101 21.9067 3.18479 22.1925 3.61518 22.4114C4.05336 22.6343 4.50222 22.7756 4.98451 22.8621C5.45945 22.9474 5.94396 22.9757 6.42421 22.9886C6.64472 22.9946 6.86523 22.9971 7.08581 22.9984C7.34765 23 7.60946 22.9999 7.87129 22.9999L10.8788 23H13.1538L16.1555 22.9999C16.4169 22.9999 16.6782 23 16.9395 22.9984C17.1597 22.9971 17.3797 22.9946 17.5998 22.9886C18.0793 22.9756 18.5631 22.9473 19.0373 22.862C19.5184 22.7755 19.9661 22.6342 20.4032 22.4115C20.8329 22.1927 21.226 21.9067 21.5668 21.5655C21.9076 21.2244 22.1933 20.8311 22.412 20.4011C22.6347 19.9635 22.7758 19.5151 22.8623 19.0333C22.9475 18.5589 22.9758 18.075 22.9887 17.5952C22.9947 17.3749 22.9972 17.1547 22.9985 16.9344C23.0001 16.6728 23 16.4113 23 16.1497C23 16.1497 22.9998 13.201 22.9998 13.148V10.8519C22.9998 10.8128 23 7.85169 23 7.85169Z",
                    fill: "url(#paint0_linear_8150_6803)"
                }), (0, r.jsx)("path", {
                    d: "M22.9985 7.06813L22.4985 7.07111L22.4985 7.0712L22.9985 7.06813ZM22.9887 6.40822L22.4889 6.42169L22.4889 6.42181L22.9887 6.40822ZM22.8622 4.97147L22.3701 5.05995L22.3701 5.05997L22.8622 4.97147ZM22.4121 3.60627L22.8577 3.37937L22.8577 3.37933L22.4121 3.60627ZM21.5668 2.44329L21.2133 2.79693L21.2134 2.79697L21.5668 2.44329ZM20.4034 1.59854L20.6302 1.15291L20.6302 1.15291L20.4034 1.59854ZM19.0367 1.14845L18.9484 1.64058L18.9484 1.64058L19.0367 1.14845ZM17.5998 1.02216L17.5863 1.52198L17.5863 1.52198L17.5998 1.02216ZM16.9395 1.01233L16.9426 0.512344L16.9426 0.512344L16.9395 1.01233ZM16.1555 1.01087L16.1537 1.51087H16.1555V1.01087ZM13.1213 1L13.1231 0.5H13.1213V1ZM10.8519 1V0.499997L10.85 0.500003L10.8519 1ZM7.87129 1.01087V1.51087L7.87311 1.51086L7.87129 1.01087ZM7.08578 1.01233L7.08273 0.512344L7.0827 0.512344L7.08578 1.01233ZM6.42421 1.02216L6.43769 1.52198L6.43771 1.52198L6.42421 1.02216ZM4.98395 1.14858L5.07217 1.64074L5.07222 1.64073L4.98395 1.14858ZM3.61539 1.59843L3.389 1.15262L3.38899 1.15262L3.61539 1.59843ZM2.44951 2.44329L2.80262 2.79729L2.80263 2.79727L2.44951 2.44329ZM1.60267 3.60608L2.04802 3.83339L2.04802 3.83338L1.60267 3.60608ZM1.15146 4.97203L0.659383 4.88338L0.659379 4.8834L1.15146 4.97203ZM1.02486 6.40822L0.525041 6.39465L0.525038 6.39475L1.02486 6.40822ZM1.01503 7.06813L1.51502 7.0712L1.51502 7.07117L1.01503 7.06813ZM1 7.91502H0.5V7.91504L1 7.91502ZM1.00008 10.8543L1.50008 10.8543V10.8543L1.00008 10.8543ZM1 13.148L0.499995 13.148L0.500005 13.1503L1 13.148ZM1.01356 16.1497H1.51357L1.51356 16.1475L1.01356 16.1497ZM1.01503 16.9344L0.515041 16.9374L0.515041 16.9374L1.01503 16.9344ZM1.02488 17.5952L0.525066 17.6087L0.525066 17.6087L1.02488 17.5952ZM1.1516 19.0339L1.64369 18.9453L1.64369 18.9453L1.1516 19.0339ZM1.60257 20.4009L1.15707 20.628L1.15708 20.628L1.60257 20.4009ZM3.61518 22.4114L3.3885 22.8571L3.38853 22.8571L3.61518 22.4114ZM4.98451 22.8621L5.07284 22.37L5.07281 22.37L4.98451 22.8621ZM6.42421 22.9886L6.43771 22.4888H6.43769L6.42421 22.9886ZM7.08581 22.9984L7.08887 22.4984H7.08884L7.08581 22.9984ZM7.87129 22.9999L7.8713 22.4999H7.87129V22.9999ZM10.8788 23L10.8788 23.5H10.8788V23ZM13.1538 23V23.5H13.1539L13.1538 23ZM16.1555 22.9999V22.4999H16.1555L16.1555 22.9999ZM16.9395 22.9984L16.9365 22.4984H16.9365L16.9395 22.9984ZM17.5998 22.9886L17.6133 23.4884H17.6133L17.5998 22.9886ZM19.0373 22.862L19.1258 23.3541H19.1258L19.0373 22.862ZM20.4032 22.4115L20.1762 21.966L20.1762 21.966L20.4032 22.4115ZM21.5668 21.5655L21.2131 21.2121L21.2131 21.2121L21.5668 21.5655ZM22.412 20.4011L22.8577 20.6278L22.8577 20.6278L22.412 20.4011ZM22.8623 19.0333L23.3545 19.1217L23.3545 19.1217L22.8623 19.0333ZM22.9887 17.5952L22.4889 17.5817V17.5817L22.9887 17.5952ZM22.9985 16.9344L22.4985 16.9313L22.4985 16.9314L22.9985 16.9344ZM23 16.1497H23.5V16.1497L23 16.1497ZM23 7.85169H23.5C23.5 7.59099 23.5001 7.32812 23.4985 7.06507L22.9985 7.06813L22.4985 7.0712C22.5001 7.33054 22.5 7.59006 22.5 7.85169H23ZM22.9985 7.06813L23.4985 7.06516C23.4972 6.84347 23.4946 6.61956 23.4885 6.39462L22.9887 6.40822L22.4889 6.42181C22.4947 6.63671 22.4972 6.85274 22.4985 7.07111L22.9985 7.06813ZM22.9887 6.40822L23.4885 6.39474C23.4753 5.90713 23.4463 5.39412 23.3543 4.88296L22.8622 4.97147L22.3701 5.05997C22.4487 5.49679 22.4762 5.95065 22.4889 6.42169L22.9887 6.40822ZM22.8622 4.97147L23.3543 4.88299C23.2604 4.36025 23.1051 3.86518 22.8577 3.37937L22.4121 3.60627L21.9666 3.83317C22.1641 4.22111 22.2912 4.62104 22.3701 5.05995L22.8622 4.97147ZM22.4121 3.60627L22.8577 3.37933C22.615 2.90303 22.2982 2.46734 21.9202 2.08961L21.5668 2.44329L21.2134 2.79697C21.5172 3.10054 21.7718 3.45071 21.9666 3.8332L22.4121 3.60627ZM21.5668 2.44329L21.9203 2.08966C21.5424 1.71195 21.1066 1.39536 20.6302 1.15291L20.4034 1.59854L20.1766 2.04416C20.5593 2.23888 20.9096 2.49333 21.2133 2.79693L21.5668 2.44329ZM20.4034 1.59854L20.6302 1.15291C20.1439 0.905457 19.6483 0.750255 19.1251 0.656315L19.0367 1.14845L18.9484 1.64058C19.3879 1.71949 19.7883 1.84654 20.1766 2.04416L20.4034 1.59854ZM19.0367 1.14845L19.1251 0.656316C18.614 0.564535 18.1009 0.535513 17.6133 0.522342L17.5998 1.02216L17.5863 1.52198C18.0574 1.5347 18.5115 1.56212 18.9484 1.64058L19.0367 1.14845ZM17.5998 1.02216L17.6133 0.522343C17.3883 0.516254 17.1643 0.513716 16.9426 0.512344L16.9395 1.01233L16.9364 1.51233C17.155 1.51368 17.3712 1.51616 17.5863 1.52198L17.5998 1.02216ZM16.9395 1.01233L16.9426 0.512344C16.6794 0.510731 16.4163 0.510866 16.1555 0.510866V1.01087V1.51087C16.4174 1.51087 16.677 1.51074 16.9365 1.51233L16.9395 1.01233ZM16.1555 1.01087L16.1573 0.51087L13.1231 0.500003L13.1213 1L13.1195 1.5L16.1537 1.51086L16.1555 1.01087ZM13.1213 1V0.5H10.8519V1V1.5H13.1213V1ZM10.8519 1L10.85 0.500003L7.86947 0.51087L7.87129 1.01087L7.87311 1.51086L10.8537 1.5L10.8519 1ZM7.87129 1.01087V0.510866C7.60997 0.510866 7.34642 0.510731 7.08273 0.512344L7.08578 1.01233L7.08884 1.51233C7.34882 1.51074 7.60894 1.51087 7.87129 1.51087V1.01087ZM7.08578 1.01233L7.0827 0.512344C6.86059 0.513715 6.63621 0.516254 6.41072 0.522342L6.42421 1.02216L6.43771 1.52198C6.65323 1.51616 6.86981 1.51368 7.08887 1.51233L7.08578 1.01233ZM6.42421 1.02216L6.41074 0.522342C5.92208 0.535512 5.40792 0.564559 4.89568 0.656433L4.98395 1.14858L5.07222 1.64073C5.51029 1.56215 5.96546 1.53471 6.43769 1.52198L6.42421 1.02216ZM4.98395 1.14858L4.89573 0.656424C4.37197 0.750308 3.87583 0.905404 3.389 1.15262L3.61539 1.59843L3.84178 2.04424C4.23078 1.84671 4.63194 1.71965 5.07217 1.64074L4.98395 1.14858ZM3.61539 1.59843L3.38899 1.15262C2.91168 1.39503 2.47503 1.71157 2.09638 2.08931L2.44951 2.44329L2.80263 2.79727C3.10704 2.4936 3.45817 2.23905 3.84179 2.04424L3.61539 1.59843ZM2.44951 2.44329L2.0964 2.0893C1.71781 2.46693 1.40041 2.90251 1.15732 3.37878L1.60267 3.60608L2.04802 3.83338C2.24317 3.45102 2.49825 3.1009 2.80262 2.79729L2.44951 2.44329ZM1.60267 3.60608L1.15733 3.37877C0.909192 3.86492 0.753601 4.36036 0.659383 4.88338L1.15146 4.97203L1.64354 5.06067C1.72265 4.62151 1.84996 4.22142 2.04802 3.83339L1.60267 3.60608ZM1.15146 4.97203L0.659379 4.8834C0.567345 5.39443 0.538266 5.90732 0.525041 6.39465L1.02486 6.40822L1.52467 6.42178C1.53745 5.95088 1.56492 5.49722 1.64355 5.06065L1.15146 4.97203ZM1.02486 6.40822L0.525038 6.39475C0.518979 6.6196 0.516386 6.84343 0.515041 7.0651L1.01503 7.06813L1.51502 7.07117C1.51635 6.85284 1.51888 6.63672 1.52468 6.42168L1.02486 6.40822ZM1.01503 7.06813L0.515041 7.06507C0.514274 7.19006 0.510666 7.33114 0.507063 7.47944C0.503525 7.62505 0.5 7.77741 0.5 7.91502H1H1.5C1.5 7.79144 1.50319 7.65097 1.50677 7.50373C1.51028 7.35919 1.51419 7.20742 1.51502 7.0712L1.01503 7.06813ZM1 7.91502L0.5 7.91504L0.50008 10.8543L1.00008 10.8543L1.50008 10.8543L1.5 7.91501L1 7.91502ZM1.00008 10.8543L0.50008 10.8543L0.5 13.148L1 13.148L1.5 13.148L1.50008 10.8543L1.00008 10.8543ZM1 13.148L0.500005 13.1503L0.513568 16.152L1.01356 16.1497L1.51356 16.1475L1.49999 13.1458L1 13.148ZM1.01356 16.1497H0.513563C0.513563 16.4108 0.513454 16.674 0.515041 16.9374L1.01503 16.9344L1.51502 16.9314C1.51346 16.6716 1.51356 16.4118 1.51356 16.1497H1.01356ZM1.01503 16.9344L0.515041 16.9374C0.516386 17.1594 0.518979 17.3835 0.525066 17.6087L1.02488 17.5952L1.5247 17.5817C1.51888 17.3664 1.51635 17.15 1.51502 16.9313L1.01503 16.9344ZM1.02488 17.5952L0.525066 17.6087C0.538265 18.0969 0.567398 18.6106 0.6595 19.1225L1.1516 19.0339L1.64369 18.9453C1.56497 18.5079 1.53745 18.0534 1.5247 17.5817L1.02488 17.5952ZM1.1516 19.0339L0.6595 19.1225C0.753676 19.6458 0.909205 20.1415 1.15707 20.628L1.60257 20.4009L2.04806 20.1739C1.85011 19.7855 1.72279 19.3849 1.64369 18.9453L1.1516 19.0339ZM1.60257 20.4009L1.15708 20.628C1.40015 21.1049 1.71757 21.5411 2.09615 21.9193L2.44951 21.5655L2.80287 21.2118C2.49843 20.9077 2.24327 20.557 2.04805 20.1739L1.60257 20.4009ZM2.44951 21.5655L2.09615 21.9193C2.47473 22.2974 2.91125 22.6144 3.3885 22.8571L3.61518 22.4114L3.84185 21.9658C3.45834 21.7707 3.10729 21.5159 2.80287 21.2118L2.44951 21.5655ZM3.61518 22.4114L3.38853 22.8571C3.87567 23.1049 4.37209 23.2602 4.89621 23.3543L4.98451 22.8621L5.07281 22.37C4.63235 22.291 4.23104 22.1637 3.84182 21.9658L3.61518 22.4114ZM4.98451 22.8621L4.89617 23.3543C5.40822 23.4462 5.92224 23.4752 6.41074 23.4884L6.42421 22.9886L6.43769 22.4888C5.96567 22.4761 5.51068 22.4486 5.07284 22.37L4.98451 22.8621ZM6.42421 22.9886L6.41072 23.4884C6.63619 23.4945 6.86058 23.4971 7.08279 23.4984L7.08581 22.9984L7.08884 22.4984C6.86987 22.4971 6.65325 22.4946 6.43771 22.4888L6.42421 22.9886ZM7.08581 22.9984L7.08275 23.4984C7.34644 23.5 7.60992 23.4999 7.87129 23.4999V22.9999V22.4999C7.60899 22.4999 7.34886 22.5 7.08887 22.4984L7.08581 22.9984ZM7.87129 22.9999L7.87128 23.4999L10.8788 23.5L10.8788 23L10.8788 22.5L7.8713 22.4999L7.87129 22.9999ZM10.8788 23V23.5H13.1538V23V22.5H10.8788V23ZM13.1538 23L13.1539 23.5L16.1556 23.4999L16.1555 22.9999L16.1555 22.4999L13.1538 22.5L13.1538 23ZM16.1555 22.9999V23.4999C16.4163 23.4999 16.6794 23.5 16.9426 23.4984L16.9395 22.9984L16.9365 22.4984C16.677 22.5 16.4174 22.4999 16.1555 22.4999V22.9999ZM16.9395 22.9984L16.9426 23.4984C17.1643 23.4971 17.3883 23.4945 17.6133 23.4884L17.5998 22.9886L17.5863 22.4888C17.3712 22.4946 17.155 22.4971 16.9365 22.4984L16.9395 22.9984ZM17.5998 22.9886L17.6133 23.4884C18.1011 23.4752 18.6144 23.4461 19.1258 23.3541L19.0373 22.862L18.9488 22.3699C18.5117 22.4485 18.0575 22.476 17.5863 22.4888L17.5998 22.9886ZM19.0373 22.862L19.1258 23.3541C19.6488 23.2601 20.1441 23.1047 20.6302 22.857L20.4032 22.4115L20.1762 21.966C19.7881 22.1638 19.388 22.2909 18.9488 22.3699L19.0373 22.862ZM20.4032 22.4115L20.6302 22.857C21.1068 22.6143 21.5426 22.2972 21.9205 21.9189L21.5668 21.5655L21.2131 21.2121C20.9093 21.5162 20.5589 21.771 20.1762 21.966L20.4032 22.4115ZM21.5668 21.5655L21.9205 21.9189C22.2984 21.5408 22.6151 21.1047 22.8577 20.6278L22.412 20.4011L21.9664 20.1744C21.7715 20.5575 21.5169 20.9081 21.2131 21.2121L21.5668 21.5655ZM22.412 20.4011L22.8577 20.6278C23.1052 20.1412 23.2605 19.6453 23.3545 19.1217L22.8623 19.0333L22.3702 18.945C22.2912 19.385 22.1641 19.7858 21.9664 20.1744L22.412 20.4011ZM22.8623 19.0333L23.3545 19.1217C23.4463 18.6101 23.4754 18.0967 23.4885 17.6087L22.9887 17.5952L22.4889 17.5817C22.4762 18.0532 22.4487 18.5077 22.3702 18.945L22.8623 19.0333ZM22.9887 17.5952L23.4885 17.6087C23.4946 17.3835 23.4972 17.1593 23.4985 16.9373L22.9985 16.9344L22.4985 16.9314C22.4972 17.15 22.4947 17.3664 22.4889 17.5817L22.9887 17.5952ZM22.9985 16.9344L23.4985 16.9375C23.5001 16.6741 23.5 16.4108 23.5 16.1497H23H22.5C22.5 16.4118 22.5001 16.6716 22.4985 16.9313L22.9985 16.9344ZM23 16.1497C23.5 16.1497 23.5 16.1497 23.5 16.1497C23.5 16.1497 23.5 16.1496 23.5 16.1496C23.5 16.1495 23.5 16.1494 23.5 16.1492C23.5 16.1488 23.5 16.1483 23.5 16.1476C23.5 16.1462 23.5 16.1441 23.5 16.1413C23.5 16.1357 23.5 16.1274 23.5 16.1166C23.5 16.095 23.5 16.0633 23.5 16.0229C23.5 15.9422 23.5 15.8268 23.5 15.6882C23.5 15.4109 23.4999 15.0406 23.4999 14.6687C23.4999 13.9249 23.4998 13.1745 23.4998 13.148H22.9998H22.4998C22.4998 13.1745 22.4999 13.925 22.4999 14.6688C22.4999 15.0407 22.5 15.4109 22.5 15.6882C22.5 15.8268 22.5 15.9422 22.5 16.023C22.5 16.0633 22.5 16.095 22.5 16.1166C22.5 16.1275 22.5 16.1357 22.5 16.1413C22.5 16.1441 22.5 16.1462 22.5 16.1476C22.5 16.1483 22.5 16.1489 22.5 16.1492C22.5 16.1494 22.5 16.1496 22.5 16.1496C22.5 16.1497 22.5 16.1497 22.5 16.1497C22.5 16.1498 22.5 16.1498 23 16.1497ZM22.9998 13.148H23.4998V10.8519H22.9998H22.4998V13.148H22.9998ZM22.9998 10.8519H23.4998C23.4998 10.8324 23.4999 10.0823 23.4999 9.33715C23.4999 8.96457 23.5 8.59321 23.5 8.315C23.5 8.17589 23.5 8.06007 23.5 7.97903C23.5 7.93851 23.5 7.90668 23.5 7.88498C23.5 7.87414 23.5 7.86582 23.5 7.86022C23.5 7.85741 23.5 7.85529 23.5 7.85387C23.5 7.85316 23.5 7.85262 23.5 7.85226C23.5 7.85208 23.5 7.85195 23.5 7.85186C23.5 7.85181 23.5 7.85178 23.5 7.85175C23.5 7.85173 23.5 7.85172 23 7.85169C22.5 7.85167 22.5 7.85168 22.5 7.8517C22.5 7.85172 22.5 7.85176 22.5 7.8518C22.5 7.85189 22.5 7.85203 22.5 7.85221C22.5 7.85256 22.5 7.8531 22.5 7.85381C22.5 7.85523 22.5 7.85736 22.5 7.86016C22.5 7.86576 22.5 7.87408 22.5 7.88493C22.5 7.90663 22.5 7.93846 22.5 7.97898C22.5 8.06002 22.5 8.17584 22.5 8.31495C22.5 8.59316 22.4999 8.96451 22.4999 9.3371C22.4999 10.0822 22.4998 10.8323 22.4998 10.8519H22.9998Z",
                    fill: "#C0CBDA",
                    fillOpacity: .8,
                    mask: "url(#path-1-inside-1_8150_6803)"
                })]
            }), n = (0, r.jsx)("path", {
                d: "M13.2038 20C12.6705 20 12.1638 19.8987 11.6838 19.696C11.2038 19.4933 10.7772 19.2107 10.4038 18.848C9.9985 18.9867 9.57716 19.056 9.13983 19.056C8.42516 19.056 7.76383 18.88 7.15583 18.528C6.54783 18.176 6.05716 17.696 5.68383 17.088C5.32116 16.48 5.13983 15.8027 5.13983 15.056C5.13983 14.7467 5.18249 14.4107 5.26783 14.048C4.84116 13.6533 4.51049 13.2 4.27583 12.688C4.04116 12.1653 3.92383 11.6213 3.92383 11.056C3.92383 10.48 4.04649 9.92533 4.29183 9.392C4.53716 8.85867 4.87849 8.4 5.31583 8.016C5.76383 7.62133 6.28116 7.34933 6.86783 7.2C6.98516 6.592 7.23049 6.048 7.60383 5.568C7.98783 5.07733 8.45716 4.69333 9.01183 4.416C9.56649 4.13867 10.1585 4 10.7878 4C11.3212 4 11.8278 4.10133 12.3078 4.304C12.7878 4.50667 13.2145 4.78933 13.5878 5.152C13.9932 5.01333 14.4145 4.944 14.8518 4.944C15.5665 4.944 16.2278 5.12 16.8358 5.472C17.4438 5.824 17.9292 6.304 18.2918 6.912C18.6652 7.52 18.8518 8.19733 18.8518 8.944C18.8518 9.25333 18.8092 9.58933 18.7238 9.952C19.1505 10.3467 19.4812 10.8053 19.7158 11.328C19.9505 11.84 20.0678 12.3787 20.0678 12.944C20.0678 13.52 19.9452 14.0747 19.6998 14.608C19.4545 15.1413 19.1078 15.6053 18.6598 16C18.2225 16.384 17.7105 16.6507 17.1238 16.8C17.0065 17.408 16.7558 17.952 16.3718 18.432C15.9985 18.9227 15.5345 19.3067 14.9798 19.584C14.4252 19.8613 13.8332 20 13.2038 20ZM9.28383 17.824C9.78516 17.824 10.2278 17.712 10.6118 17.488L13.5078 15.824C13.6252 15.7493 13.6838 15.648 13.6838 15.52V14.4L10.1158 16.448C9.78516 16.64 9.45449 16.64 9.12383 16.448L6.37183 14.864C6.37183 14.8747 6.37183 14.8907 6.37183 14.912C6.37183 14.9333 6.37183 14.96 6.37183 14.992C6.37183 15.5147 6.4945 15.9947 6.73983 16.432C6.99583 16.8587 7.34783 17.1947 7.79583 17.44C8.24383 17.696 8.73983 17.824 9.28383 17.824ZM9.42783 15.216C9.49183 15.2587 9.5505 15.28 9.60383 15.28C9.65716 15.2693 9.71583 15.248 9.77983 15.216L10.7558 14.672L7.20383 12.592C6.87316 12.4107 6.70783 12.1227 6.70783 11.728V8.576C6.23849 8.82133 5.86516 9.168 5.58783 9.616C5.32116 10.0533 5.18783 10.5387 5.18783 11.072C5.18783 11.5733 5.3105 12.0533 5.55583 12.512C5.81183 12.96 6.14249 13.3013 6.54783 13.536L9.42783 15.216ZM13.1878 18.752C13.7318 18.752 14.2225 18.6293 14.6598 18.384C15.0972 18.1387 15.4385 17.8027 15.6838 17.376C15.9398 16.9493 16.0678 16.4747 16.0678 15.952V12.624C16.0678 12.4853 16.0092 12.384 15.8918 12.32L14.9158 11.728V15.856C14.9158 16.2507 14.7505 16.5387 14.4198 16.72L11.6838 18.304C12.1532 18.6027 12.6545 18.752 13.1878 18.752ZM13.6838 13.008V10.992L12.0038 10.032L10.3078 10.992V13.008L12.0038 13.968L13.6838 13.008ZM9.07583 8.144C9.07583 7.74933 9.24116 7.46133 9.57183 7.28L12.3078 5.696C11.8385 5.39733 11.3372 5.248 10.8038 5.248C10.2705 5.248 9.78516 5.37067 9.34783 5.616C8.9105 5.86133 8.56383 6.19733 8.30783 6.624C8.0625 7.05067 7.93983 7.52533 7.93983 8.048V11.36C7.93983 11.488 7.9985 11.5947 8.11583 11.68L9.07583 12.272V8.144ZM17.2998 15.424C17.7585 15.1893 18.1212 14.848 18.3878 14.4C18.6652 13.952 18.8038 13.4613 18.8038 12.928C18.8038 12.4267 18.6758 11.952 18.4198 11.504C18.1745 11.0453 17.8492 10.6987 17.4438 10.464L14.5638 8.8C14.4998 8.75733 14.4412 8.74133 14.3878 8.752C14.3345 8.752 14.2758 8.768 14.2118 8.8L13.2358 9.328L16.8038 11.424C16.9745 11.52 17.0972 11.6373 17.1718 11.776C17.2572 11.904 17.2998 12.0693 17.2998 12.272V15.424ZM13.8758 7.52C14.2065 7.31733 14.5372 7.31733 14.8678 7.52L17.6198 9.136C17.6198 9.104 17.6198 9.072 17.6198 9.04C17.6198 8.54933 17.4972 8.08533 17.2518 7.648C17.0172 7.2 16.6758 6.84267 16.2278 6.576C15.7905 6.30933 15.2838 6.176 14.7078 6.176C14.2065 6.176 13.7638 6.288 13.3798 6.512L10.4838 8.176C10.3665 8.25067 10.3078 8.352 10.3078 8.48V9.6L13.8758 7.52Z",
                fill: "#2C3339"
            }), i[0] = t, i[1] = n) : (t = i[0], n = i[1]), i[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, r.jsxs)("filter", {
                id: "filter0_d_8150_6803",
                x: .583333,
                y: 1,
                width: 22.8333,
                height: 22.8333,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB",
                children: [(0, r.jsx)("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), (0, r.jsx)("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), (0, r.jsx)("feOffset", {
                    dy: .416667
                }), (0, r.jsx)("feGaussianBlur", {
                    stdDeviation: .208333
                }), (0, r.jsx)("feComposite", {
                    in2: "hardAlpha",
                    operator: "out"
                }), (0, r.jsx)("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 0.172549 0 0 0 0 0.2 0 0 0 0 0.223529 0 0 0 0.36 0"
                }), (0, r.jsx)("feBlend", {
                    mode: "normal",
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_8150_6803"
                }), (0, r.jsx)("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow_8150_6803",
                    result: "shape"
                })]
            }), i[2] = a) : a = i[2], i[3] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, r.jsxs)("defs", {
                children: [a, (0, r.jsxs)("linearGradient", {
                    id: "paint0_linear_8150_6803",
                    x1: 12,
                    y1: 1,
                    x2: 12,
                    y2: 23,
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, r.jsx)("stop", {
                        stopColor: "white"
                    }), (0, r.jsx)("stop", {
                        offset: 1,
                        stopColor: "#E2EAF3"
                    })]
                })]
            }), i[3] = o) : o = i[3], i[4] !== e ? (s = (0, r.jsxs)("svg", {
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                ...e,
                children: [t, n, o]
            }), i[4] = e, i[5] = s) : s = i[5], s
        }
    })
};