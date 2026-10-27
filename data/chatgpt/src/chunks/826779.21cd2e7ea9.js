export const __rspack_esm_id = 826779;
export const __rspack_esm_ids = [826779];
export const __webpack_modules__ = {
    Y7np: (function(e, t, a) {
        a.d(t, {
            a: () => K,
            b: () => F
        });
        var n = a("ABep"),
            s = a("QosV"),
            i = a("xU0T"),
            r = a("on57"),
            o = a("NRIv"),
            T = a("zd8w"),
            _ = a("oyxz"),
            l = a("hL9c"),
            c = a("YWcr"),
            d = a("MX6A"),
            C = a("Bbed"),
            E = a("RNul"),
            N = a("jHtb"),
            u = a("GPBf"),
            A = a("aPiu"),
            I = a("rVvC"),
            h = a("RUBg"),
            p = a("zSQm"),
            O = a("ZjkF"),
            m = a("WAdu"),
            S = a("TxRk"),
            g = a("ABl9"),
            f = a("vLpE"),
            R = a("kfGJ"),
            P = a("qKAH"),
            D = a("zHp1"),
            b = a("HAEQ"),
            L = a("rtS4"),
            y = a("taWv"),
            x = a("Zm8H"),
            v = a("OOaz"),
            G = a("TUMj"),
            M = a("drbS"),
            U = a("jAnS");
        let w = (0, C.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(851456), a.e(974872), a.e(953141), a.e(715515), a.e(672793), a.e(344557), a.e(374281), a.e(158126)]).then(a.bind(a, "IQg5"))).WritingBlockDirectiveRenderer, b.a),
            k = {
                [i.a]: function(e) {
                    let t, a = (0, s.c)(3),
                        i = (0, G.d)(),
                        r = i?.contentReferences;
                    return a[0] !== e || a[1] !== r ? (t = (0, n.jsx)(w, {
                        ...e,
                        contentReferences: r,
                        isStreaming: !1,
                        testId: "chatgpt-writing-block"
                    }), a[0] = e, a[1] = r, a[2] = t) : t = a[2], t
                }
            },
            H = (0, h.c)({
                conversationId: null,
                externalResourcePolicy: "restricted",
                isBrowserEnabled: !1,
                openFileLinksInSidePanel: !1
            });

        function F(e) {
            let t, a, i, o, _, l = (0, s.c)(25),
                {
                    prompt: c,
                    response: d,
                    serverConversationId: C,
                    turns: E
                } = e,
                N = "restricted" !== (0, T.useContext)(m.a),
                u = null != d,
                A = "default";
            if (null != c) {
                let e;
                l[0] !== c.renderMarkdown || l[1] !== c.text ? (e = (0, n.jsx)(Z, {
                    renderMarkdown: c.renderMarkdown,
                    text: c.text
                }), l[0] = c.renderMarkdown, l[1] = c.text, l[2] = e) : e = l[2], t = e
            } else if (null != d) {
                let e, a;
                A = "response", l[3] !== C ? (e = (0, v.c)(C), l[3] = C, l[4] = e) : e = l[4];
                let s = N ? "share" : void 0;
                l[5] !== d || l[6] !== e || l[7] !== s ? (a = (0, n.jsx)(L.a, {
                    conversationId: e,
                    cwd: null,
                    hostId: R.a,
                    item: d,
                    isReadOnly: !0,
                    preview: s,
                    trackShownImpressions: !1,
                    turnId: "share-preview"
                }), l[5] = d, l[6] = e, l[7] = s, l[8] = a) : a = l[8], t = a
            } else {
                let e;
                E?.some(j) && (A = "transcript"), l[9] !== N || l[10] !== C || l[11] !== E ? (e = null == E ? null : (0, n.jsx)(B, {
                    preview: N ? "share" : void 0,
                    serverConversationId: C,
                    turns: E
                }), l[9] = N, l[10] = C, l[11] = E, l[12] = e) : e = l[12], t = e
            }
            let I = null == c && null == d && null == E,
                h = A,
                p = u ? "responseTypography-A7UvAY" : "p-4";
            return l[13] !== p ? (a = (0, r.b)("flex min-w-0 flex-col gap-4", p), l[13] = p, l[14] = a) : a = l[14], l[15] !== t || l[16] !== a ? (i = (0, n.jsx)("div", {
                className: a,
                children: t
            }), l[15] = t, l[16] = a, l[17] = i) : i = l[17], l[18] !== C || l[19] !== i ? (o = (0, n.jsx)(W, {
                serverConversationId: C,
                children: i
            }), l[18] = C, l[19] = i, l[20] = o) : o = l[20], l[21] !== I || l[22] !== o || l[23] !== A ? (_ = (0, n.jsx)(P.a, {
                isLoading: I,
                variant: h,
                children: o
            }), l[21] = I, l[22] = o, l[23] = A, l[24] = _) : _ = l[24], _
        }

        function j(e) {
            let {
                turn: t
            } = e;
            return t.items.some(Y)
        }

        function Y(e) {
            return "generated-image" === e.type
        }

        function K(e) {
            let t, a, i = (0, s.c)(7),
                {
                    preview: r,
                    serverConversationId: o,
                    turns: T
                } = e;
            return i[0] !== r || i[1] !== o || i[2] !== T ? (t = (0, n.jsx)("div", {
                className: "flex min-w-0 flex-col gap-4 p-4",
                children: (0, n.jsx)(B, {
                    markdownDirectives: k,
                    preview: r,
                    serverConversationId: o,
                    turns: T
                })
            }), i[0] = r, i[1] = o, i[2] = T, i[3] = t) : t = i[3], i[4] !== o || i[5] !== t ? (a = (0, n.jsx)(W, {
                serverConversationId: o,
                children: t
            }), i[4] = o, i[5] = t, i[6] = a) : a = i[6], a
        }

        function W(e) {
            let t, a, i, r, o = (0, s.c)(10),
                {
                    children: T,
                    serverConversationId: _
                } = e;
            return o[0] !== _ ? (t = (0, U.c)(_), o[0] = _, o[1] = t) : t = o[1], o[2] !== _ || o[3] !== t ? (a = {
                conversationId: _,
                pathname: t,
                routeKind: "chatgpt-thread",
                routeTemplate: U.a
            }, o[2] = _, o[3] = t, o[4] = a) : a = o[4], o[5] !== T ? (i = (0, n.jsx)(m.a.Provider, {
                value: "restricted",
                children: (0, n.jsx)(A.a, {
                    children: T
                })
            }), o[5] = T, o[6] = i) : i = o[6], o[7] !== a || o[8] !== i ? (r = (0, n.jsx)(f.a, {
                route: a,
                children: i
            }), o[7] = a, o[8] = i, o[9] = r) : r = o[9], r
        }

        function B(e) {
            let {
                preview: t,
                markdownDirectives: a,
                serverConversationId: s,
                turns: i
            } = e;
            return i.map(e => {
                let {
                    id: i,
                    turn: r
                } = e;
                return (0, n.jsx)("div", {
                    className: "flex min-w-0 flex-col gap-4",
                    children: r.items.map((e, r) => "user-message" === e.type ? (0, n.jsxs)("div", {
                        className: "flex min-w-0 flex-col items-end gap-2",
                        children: [e.images.map(e => (0, n.jsx)(z, {
                            src: e,
                            serverConversationId: s
                        }, e)), e.message.trim() ? (0, n.jsx)(Z, {
                            item: e,
                            renderMarkdown: e.renderMarkdown,
                            text: (0, o.w)(e.message)
                        }) : null]
                    }, r) : "assistant-message" === e.type ? (0, n.jsx)(L.a, {
                        conversationId: (0, v.c)(s),
                        cwd: null,
                        hostId: R.a,
                        item: e,
                        isReadOnly: !0,
                        preview: t,
                        markdownDirectives: a,
                        trackShownImpressions: !1,
                        turnId: i
                    }, r) : "generated-image" === e.type && null != e.src ? (0, n.jsx)(z, {
                        isGenerated: !0,
                        src: e.src,
                        serverConversationId: s
                    }, r) : null)
                }, i)
            })
        }

        function Z(e) {
            let t, a, i, r = (0, s.c)(7),
                {
                    item: o,
                    renderMarkdown: T,
                    text: _
                } = e;
            r[0] !== o || r[1] !== _ ? (t = function(e, t) {
                let a = t?.chatGptSystemHintMentions ?? (0, M.d)([], e),
                    n = e;
                for (let e of a.toReversed()) {
                    let t = e.id.replace(/^(?:connector|plugin):/u, "");
                    (t === g.a || x.a.has(t) || null != (0, c.z)(e.id)) && (n = n.slice(0, e.startIndex) + (0, d.b)(e.label, g.b) + n.slice(e.endIndex))
                }
                return n
            }(_, o), r[0] = o, r[1] = _, r[2] = t) : t = r[2], r[3] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                a: V
            }, r[3] = a) : a = r[3];
            let l = !0 === T;
            return r[4] !== t || r[5] !== l ? (i = (0, n.jsx)("div", {
                className: "max-w-[77%] min-w-0 self-end overflow-hidden rounded-2xl bg-text/5 px-3 py-2 break-words",
                children: (0, n.jsx)(N.a, {
                    text: t,
                    components: a,
                    cwd: null,
                    hasSerializedParagraphs: l,
                    hostId: R.a,
                    renderMath: !1,
                    variant: "user-message"
                })
            }), r[4] = t, r[5] = l, r[6] = i) : i = r[6], i
        }

        function V(e) {
            let t, a, i = (0, s.c)(10);
            if (e.href !== g.b) {
                let t, a = e[I.a];
                return i[0] !== e.children || i[1] !== e.href || i[2] !== e.title || i[3] !== a ? (t = (0, n.jsx)(H, {
                    href: e.href,
                    title: e.title,
                    "data-markdown-raw-link-label": a,
                    children: e.children
                }), i[0] = e.children, i[1] = e.href, i[2] = e.title, i[3] = a, i[4] = t) : t = i[4], t
            }
            let r = e[I.a];
            return i[5] !== e.children || i[6] !== r ? (t = "string" == typeof r ? (0, d.c)(r) : (0, O.a)(e.children), i[5] = e.children, i[6] = r, i[7] = t) : t = i[7], i[8] !== t ? (a = (0, n.jsx)(S.a, {
                icon: u.a,
                layout: "selection-pill",
                children: t
            }), i[8] = t, i[9] = a) : a = i[9], a
        }

        function z(e) {
            let t, a, i = (0, s.c)(7),
                {
                    isGenerated: r,
                    src: o,
                    serverConversationId: T
                } = e,
                c = void 0 !== r && r,
                d = (0, D.h)(o) ? o : "";
            i[0] !== T ? (t = (0, y.c)((0, v.c)(T)), i[0] = T, i[1] = t) : t = i[1];
            let {
                src: C,
                isLoading: N
            } = (0, D.k)(d, t), u = (0, p.c)(o) ? o : null;
            if (d && (u = C), N) {
                let e;
                return i[2] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(E.a, {
                    className: "icon-sm"
                }), i[2] = e) : e = i[2], e
            }
            if (null == u) {
                let e;
                return i[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)("span", {
                    className: "text-sm text-secondary",
                    children: (0, n.jsx)(_.a, {
                        id: "chatgptConversations.shareDialog.imageUnavailable",
                        defaultMessage: "Image preview unavailable",
                        description: "Placeholder inside the cropped ChatGPT sharing preview when an image cannot be loaded safely. This does not change whether the image is included in the shared chat."
                    })
                }), i[3] = e) : e = i[3], e
            }
            return i[4] !== u || i[5] !== c ? (a = c ? (0, n.jsx)("img", {
                alt: "",
                className: "block max-h-56 max-w-full self-start rounded-2xl object-contain",
                loading: "lazy",
                referrerPolicy: "no-referrer",
                src: u
            }) : (0, n.jsx)(l.a, {
                src: u,
                previewEnabled: !1,
                imageLoading: "lazy"
            }), i[4] = u, i[5] = c, i[6] = a) : a = i[6], a
        }
    }),
    BAUf: (function(e, t, a) {
        a.d(t, {
            a: () => B
        });
        var n = a("ABep"),
            s = a("QosV"),
            i = a("n0Mx"),
            r = a("iRMi"),
            o = a("on57"),
            T = a("iTtm"),
            _ = a("zd8w"),
            l = a("oyxz"),
            c = a("Wf1j"),
            d = a("jqIZ"),
            C = a("g2p6"),
            E = a("ygO2"),
            N = a("HOLv"),
            u = a("Bbed"),
            A = a("X6Vn"),
            I = a("WAdu"),
            h = a("yGJW"),
            p = a("OWtl"),
            O = a("KDax"),
            m = a("UePh"),
            S = a("q0jf"),
            g = a("J8FU"),
            f = a("jXqC"),
            R = a("dZmL"),
            P = a("mEbU"),
            D = a("Ebcs"),
            b = a("hZax"),
            L = a("Elta"),
            y = a("ZhoB"),
            x = a("MrGp");
        let v = (0, u.a)(async () => (await Promise.all([a.e(81461), a.e(968073)]).then(a.bind(a, "Nd5E"))).Markdown),
            G = {
                p: e => {
                    let {
                        children: t
                    } = e;
                    return (0, n.jsx)("div", {
                        children: t
                    })
                },
                a: function(e) {
                    let t, a = (0, s.c)(3),
                        {
                            children: i,
                            href: r
                        } = e;
                    return a[0] !== i || a[1] !== r ? (t = r ? (0, n.jsx)(O.a, {
                        href: r,
                        className: "underline",
                        initiator: "open_in_browser_bridge",
                        children: i
                    }) : i, a[0] = i, a[1] = r, a[2] = t) : t = a[2], t
                }
            };

        function M(e) {
            let t, a, i, r, o, c, d, C, E = (0, s.c)(70),
                {
                    conversationId: N,
                    notice: u,
                    feedbackEnabled: A
                } = e,
                I = (0, T.y)(p.a),
                O = (0, T.x)(L.a, N),
                m = A && !O,
                {
                    value: S
                } = (0, b.g)("4082596618"),
                g = u.policy?.errCode,
                f = u.policy?.errType,
                R = (0, _.useRef)(null);
            E[0] !== g || E[1] !== N || E[2] !== u || E[3] !== I || E[4] !== f ? (t = () => {
                if (null == u.policy) return;
                let e = JSON.stringify([N, u.messageId, g, f]);
                if (R.current === e) return;
                R.current = e;
                let t = I.get(x.L, N),
                    a = I.get(x.x, N);
                (0, y.h)(I.get(h.c).logProductEvent, {
                    conversationId: I.get(x.j, N),
                    isWorkConversation: null == t ? null : "tpp" === a || "flora" === a,
                    notice: u,
                    serverRequestId: null == u.messageId ? void 0 : t?.[u.messageId]?.message?.metadata?.request_id
                })
            }, E[0] = g, E[1] = N, E[2] = u, E[3] = I, E[4] = f, E[5] = t) : t = E[5];
            let P = (0, _.useEffectEvent)(t);
            E[6] !== P ? (a = () => {
                P()
            }, E[6] = P, E[7] = a) : a = E[7], E[8] !== g || E[9] !== N || E[10] !== u.messageId || E[11] !== f ? (i = [N, u.messageId, g, f], E[8] = g, E[9] = N, E[10] = u.messageId, E[11] = f, E[12] = i) : i = E[12], (0, _.useEffect)(a, i), E[13] !== S.bio_trusted_access_link ? (r = "string" == typeof S.bio_trusted_access_link ? S.bio_trusted_access_link.trim() : "", E[13] = S.bio_trusted_access_link, E[14] = r) : r = E[14];
            let M = r;
            E[15] !== S.cyber_trusted_access_link ? (o = "string" == typeof S.cyber_trusted_access_link ? S.cyber_trusted_access_link.trim() : "", E[15] = S.cyber_trusted_access_link, E[16] = o) : o = E[16];
            let H = o,
                F = "cyber_safety_content_policy" === g || "content_regurgitation" === g ? u.structuredCopy : void 0,
                j = U;
            if (null != F) {
                let e, t, a, s, i, r;
                E[17] !== F.title ? (e = (0, n.jsx)("p", {
                    className: "font-semibold",
                    children: F.title
                }), E[17] = F.title, E[18] = e) : e = E[18], E[19] === Symbol.for("react.memo_cache_sentinel") ? (t = ["p", "a", "strong", "em", "br"], E[19] = t) : t = E[19];
                let o = m ? F.feedback_prompt : null;
                E[20] !== F.details || E[21] !== o ? (a = [o, F.details].filter(Boolean), E[20] = F.details, E[21] = o, E[22] = a) : a = E[22];
                let T = a.join(" ");
                return E[23] !== T ? (s = (0, n.jsx)(v, {
                    allowedElements: t,
                    skipHtml: !0,
                    unwrapDisallowed: !0,
                    urlTransform: w,
                    components: G,
                    children: T
                }), E[23] = T, E[24] = s) : s = E[24], E[25] !== g || E[26] !== F.primary_action ? (i = "cyber_safety_content_policy" === g && "sign_in" === F.primary_action ? (0, n.jsx)(D.a, {
                    size: "actionSm"
                }) : null, E[25] = g, E[26] = F.primary_action, E[27] = i) : i = E[27], E[28] !== s || E[29] !== i || E[30] !== e ? (r = (0, n.jsxs)(n.Fragment, {
                    children: [e, s, i]
                }), E[28] = s, E[29] = i, E[30] = e, E[31] = r) : r = E[31], r
            }
            if ("content_policy" === g) {
                let e, t, a;
                return E[32] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(l.a, {
                    id: "chatgpt.moderation.policy.notice",
                    defaultMessage: "This content may violate our <link>usage policies</link>",
                    description: "Notice on a message flagged or blocked by content moderation",
                    values: {
                        link: e => j("https://openai.com/policies/usage-policies", e)
                    }
                }), E[32] = e) : e = E[32], E[33] !== A ? (t = A ? (0, n.jsx)("p", {
                    children: (0, n.jsx)(l.a, {
                        id: "chatgpt.moderation.policy.feedback",
                        defaultMessage: "Did we get it wrong? Please tell us by giving this response a thumbs down.",
                        description: "Invites the user to use the available thumbs-down control to report an incorrect policy warning"
                    })
                }) : null, E[33] = A, E[34] = t) : t = E[34], E[35] !== t ? (a = (0, n.jsxs)(n.Fragment, {
                    children: [e, t]
                }), E[35] = t, E[36] = a) : a = E[36], a
            }
            if ("bio_safety_content_policy" === g) {
                let e, t, a, s, i;
                return E[37] !== M ? (e = (0, n.jsx)("p", {
                    className: "font-semibold",
                    children: M ? (0, n.jsx)(l.a, {
                        id: "chatgpt.moderation.bio.block.title",
                        defaultMessage: "This content can’t be shown",
                        description: "Title on content blocked for biological safety"
                    }) : (0, n.jsx)(l.a, {
                        id: "chatgpt.moderation.bio.flag.title",
                        defaultMessage: "This content was flagged for possible biological safety risk",
                        description: "Title on biological safety content without a Trusted Access application link"
                    })
                }), E[37] = M, E[38] = e) : e = E[38], E[39] !== M || E[40] !== N || E[41] !== u ? (t = M ? (0, n.jsx)(l.a, {
                    id: "chatgpt.moderation.bio.access",
                    defaultMessage: "We’re especially careful with requests involving biological research and applications that could pose safety risks. Eligible researchers can apply for <link>Trusted Access</link>.",
                    description: "Explains biological safety restrictions and links to researcher access",
                    values: {
                        link: e => (0, n.jsx)(k, {
                            conversationId: N,
                            notice: u,
                            href: M,
                            protectionType: "bio",
                            children: e
                        })
                    }
                }) : null, E[39] = M, E[40] = N, E[41] = u, E[42] = t) : t = E[42], E[43] !== M || E[44] !== O ? (a = !M && O ? (0, n.jsx)(l.a, {
                    id: "chatgpt.moderation.bio.learnMore",
                    defaultMessage: "You can read more about our approach in our <link>blog post</link>",
                    description: "Supporting text in a persistent biological safety warning shown in the conversation transcript during an active Voice session. It directs the user to a blog post explaining OpenAI's biological safety approach. The link placeholder wraps the words 'blog post'.",
                    values: {
                        link: e => j("https://openai.com/index/preparing-for-future-ai-capabilities-in-biology/", e)
                    }
                }) : null, E[43] = M, E[44] = O, E[45] = a) : a = E[45], E[46] !== M || E[47] !== A || E[48] !== O ? (s = M || O ? null : (0, n.jsx)(l.a, {
                    id: "chatgpt.moderation.bio.textLearnMoreWithOptionalFeedback",
                    defaultMessage: "{showFeedback, select, true {Did we get it wrong? Please tell us by giving this response a thumbs down and then try rephrasing your request. You can read more about our approach in our <link>blog post</link>.} other {Try rephrasing your request. You can read more about our approach in our <link>blog post</link>.}}",
                    description: "Explains biological safety restrictions in text chat. Only ask for thumbs-down feedback when that control is available; otherwise suggest rephrasing and link to the blog post.",
                    values: {
                        showFeedback: A ? "true" : "false",
                        link: e => j("https://openai.com/index/preparing-for-future-ai-capabilities-in-biology/", e)
                    }
                }), E[46] = M, E[47] = A, E[48] = O, E[49] = s) : s = E[49], E[50] !== e || E[51] !== t || E[52] !== a || E[53] !== s ? (i = (0, n.jsxs)(n.Fragment, {
                    children: [e, t, a, s]
                }), E[50] = e, E[51] = t, E[52] = a, E[53] = s, E[54] = i) : i = E[54], i
            }
            if ("cyber_safety_content_policy" === g) {
                let e, t, a, s;
                E[55] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)("p", {
                    className: "font-semibold",
                    children: (0, n.jsx)(l.a, {
                        id: "chatgpt.moderation.cyber.title",
                        defaultMessage: "This content can’t be shown",
                        description: "Title on cybersecurity safety blocked content"
                    })
                }), t = (0, n.jsx)("p", {
                    children: (0, n.jsx)(l.a, {
                        id: "chatgpt.moderation.cyber.daybreak.eligibility.body",
                        defaultMessage: "This content was flagged for possible cybersecurity risk. You may be eligible for Daybreak Blue, which reduces refusals for authorized defensive work on supported models. Other safeguards still apply.",
                        description: "Body of a cybersecurity refusal in the ChatGPT conversation when no account-specific copy was supplied. Explains why the response was blocked and possible Daybreak Blue eligibility without promising that a retried request will be allowed. Daybreak Blue is an untranslated product name."
                    })
                }), E[55] = e, E[56] = t) : (e = E[55], t = E[56]);
                let i = H || "https://chatgpt.com/cyber";
                return E[57] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, n.jsx)(l.a, {
                    id: "chatgpt.moderation.cyber.daybreak.learn_more.label",
                    defaultMessage: "Learn more",
                    description: "Link label in a ChatGPT cybersecurity refusal. Opens the Daybreak program information page for users who may be eligible."
                }), E[57] = a) : a = E[57], E[58] !== N || E[59] !== u || E[60] !== i ? (s = (0, n.jsxs)(n.Fragment, {
                    children: [e, t, (0, n.jsx)(k, {
                        conversationId: N,
                        notice: u,
                        href: i,
                        protectionType: "cyber",
                        children: a
                    })]
                }), E[58] = N, E[59] = u, E[60] = i, E[61] = s) : s = E[61], s
            }
            return E[62] !== g ? (c = (0, n.jsx)("p", {
                className: "font-semibold",
                children: "content_regurgitation" === g ? (0, n.jsx)(l.a, {
                    id: "chatgpt.moderation.regurgitation.title",
                    defaultMessage: "This content can’t be shown because it may conflict with our guidelines for creative content",
                    description: "Title on a blocked verbatim copyrighted response"
                }) : (0, n.jsx)(l.a, {
                    id: "chatgpt.moderation.safety.title",
                    defaultMessage: "This content can’t be shown for safety reasons",
                    description: "Title on content blocked by a safety policy"
                })
            }), E[62] = g, E[63] = c) : c = E[63], E[64] !== g || E[65] !== m ? (d = "sensitive_conversations_content_policy" === g ? (0, n.jsx)(l.a, {
                id: "chatgpt.moderation.wellbeing.details",
                defaultMessage: "{showFeedback, select, true {If this seems like a mistake, give this response a thumbs down. Learn more about our <link>approach to sensitive conversations</link>.} other {Learn more about our <link>approach to sensitive conversations</link>.}}",
                description: "Explains a sensitive-conversations block and links to the policy; showFeedback is true only when the response has a thumbs-down control",
                values: {
                    showFeedback: m ? "true" : "false",
                    link: e => j("https://openai.com/index/strengthening-chatgpt-responses-in-sensitive-conversations/", e)
                }
            }) : (0, n.jsx)(l.a, {
                id: "chatgpt.moderation.safety.details",
                defaultMessage: "{showFeedback, select, true {If this seems like a mistake, give this response a thumbs down. Learn more about our intended model behavior in our <link>Model Spec</link>.} other {Learn more about our intended model behavior in our <link>Model Spec</link>.}}",
                description: "Explains a generic or copyright safety block and links to the Model Spec; showFeedback is true only when the response has a thumbs-down control",
                values: {
                    showFeedback: m ? "true" : "false",
                    link: e => j("https://model-spec.openai.com/2025-12-18.html", e)
                }
            }), E[64] = g, E[65] = m, E[66] = d) : d = E[66], E[67] !== c || E[68] !== d ? (C = (0, n.jsxs)(n.Fragment, {
                children: [c, d]
            }), E[67] = c, E[68] = d, E[69] = C) : C = E[69], C
        }

        function U(e, t) {
            return (0, n.jsx)(O.a, {
                href: e,
                className: "underline",
                initiator: "open_in_browser_bridge",
                children: t
            })
        }

        function w(e) {
            try {
                return "https:" === new URL(e).protocol ? e : ""
            } catch {
                return ""
            }
        }

        function k(e) {
            let t, a, i, r, o, l, c, d, C = (0, s.c)(23),
                {
                    children: E,
                    conversationId: N,
                    href: u,
                    notice: A,
                    protectionType: I
                } = e,
                m = (0, T.y)(p.a),
                S = (0, T.x)(L.a, N),
                g = (0, _.useRef)(null);
            C[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                amount: .5,
                once: !0
            }, C[0] = t) : t = C[0];
            let f = (0, P.a)(g, t);
            C[1] === Symbol.for("react.memo_cache_sentinel") ? (a = new Set, C[1] = a) : a = C[1];
            let D = (0, _.useRef)(a),
                b = S ? "CHATGPT_SAFETY_LINK_SURFACE_INTEGRATED_VOICE" : "CHATGPT_SAFETY_LINK_SURFACE_TEXT_CHAT";
            C[2] !== N || C[3] !== A.messageId || C[4] !== I || C[5] !== m || C[6] !== b ? (i = e => {
                if (null == N || null == A.messageId) return;
                let t = JSON.stringify([N, A.messageId, b, e]);
                if (D.current.has(t)) return;
                D.current.add(t);
                let a = m.get(x.L, N)?.[A.messageId]?.message?.metadata?.turn_exchange_id;
                (0, h.a)(m, R.a, {
                    actionType: e,
                    conversationId: N,
                    messageId: A.messageId,
                    linkType: "CHATGPT_SAFETY_LINK_TYPE_TERMINAL_BLOCK_TRUSTED_ACCESS",
                    protectionType: "bio" === I ? "CHATGPT_SAFETY_LINK_PROTECTION_TYPE_BIO" : "CHATGPT_SAFETY_LINK_PROTECTION_TYPE_CYBER",
                    surface: b,
                    turnExchangeId: "string" == typeof a ? a : void 0
                })
            }, C[2] = N, C[3] = A.messageId, C[4] = I, C[5] = m, C[6] = b, C[7] = i) : i = C[7];
            let y = i;
            C[8] !== y ? (r = () => y("CHATGPT_SAFETY_LINK_INTERACTION_ACTION_TYPE_SHOWN"), C[8] = y, C[9] = r) : r = C[9];
            let v = (0, _.useEffectEvent)(r);
            return C[10] !== f || C[11] !== v ? (o = () => {
                f && v()
            }, C[10] = f, C[11] = v, C[12] = o) : o = C[12], C[13] !== f || C[14] !== A.messageId || C[15] !== b ? (l = [f, A.messageId, b], C[13] = f, C[14] = A.messageId, C[15] = b, C[16] = l) : l = C[16], (0, _.useEffect)(o, l), C[17] !== y ? (c = () => y("CHATGPT_SAFETY_LINK_INTERACTION_ACTION_TYPE_CLICKED"), C[17] = y, C[18] = c) : c = C[18], C[19] !== E || C[20] !== u || C[21] !== c ? (d = (0, n.jsx)(O.a, {
                ref: g,
                href: u,
                className: "underline",
                initiator: "open_in_browser_bridge",
                onClickCapture: c,
                children: E
            }), C[19] = E, C[20] = u, C[21] = c, C[22] = d) : d = C[22], d
        }
        var H = a("FnQ0"),
            F = a("PxTf"),
            j = a("ryNd");
        let Y = (0, u.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(753405), a.e(585419), a.e(673131), a.e(223580), a.e(877700), a.e(636463), a.e(81461), a.e(784669), a.e(8197), a.e(328034), a.e(810177), a.e(385116), a.e(561068), a.e(62441), a.e(242986), a.e(741325), a.e(841849), a.e(541895)]).then(a.bind(a, "NnLI"))).ProductInterventionNotice, {
                errorFallback: (0, n.jsx)(l.a, {
                    id: "chatgpt.productIntervention.loadError",
                    defaultMessage: "Unable to display this notice",
                    description: "Shown when a conversation notice renderer cannot be loaded"
                })
            }),
            K = (0, u.a)(() => Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(963703), a.e(357381), a.e(411547), a.e(476405), a.e(563738)]).then(a.bind(a, "CGZL")).then(e => e.TrustedContactEnrollment)),
            W = {
                a: function(e) {
                    let t, a, i, _, l, c, d, C, E = (0, s.c)(20);
                    if (E[0] !== e) {
                        let {
                            children: n,
                            className: s,
                            href: r,
                            onClick: o,
                            onClickCapture: T,
                            rel: c,
                            target: d,
                            ...C
                        } = e;
                        t = n, a = s, i = r, _ = T, l = C, E[0] = e, E[1] = t, E[2] = a, E[3] = i, E[4] = _, E[5] = l
                    } else t = E[1], a = E[2], i = E[3], _ = E[4], l = E[5];
                    let N = (0, T.y)(p.a);
                    if (null == i) {
                        let e;
                        return E[6] !== t ? (e = (0, n.jsx)(n.Fragment, {
                            children: t
                        }), E[6] = t, E[7] = e) : e = E[7], e
                    }
                    return E[8] !== a ? (c = (0, o.b)(a, "!text-default underline hover:!text-default hover:no-underline"), E[8] = a, E[9] = c) : c = E[9], E[10] !== i || E[11] !== _ || E[12] !== N ? (d = e => {
                        _?.(e);
                        let t = function(e) {
                            try {
                                switch (new URL(e).protocol) {
                                    case "http:":
                                        return "http";
                                    case "https:":
                                        return "https";
                                    case "sms:":
                                        return "sms";
                                    case "tel:":
                                        return "tel";
                                    default:
                                        return null
                                }
                            } catch {
                                return null
                            }
                        }(i);
                        null != t && (0, h.a)(N, r.CodexDisclaimerLinkClicked, {
                            disclaimerSource: "sh_disclaimer_notice",
                            protocol: t,
                            via: 0 === e.detail ? "keyboard" : "pointer"
                        })
                    }, E[10] = i, E[11] = _, E[12] = N, E[13] = d) : d = E[13], E[14] !== t || E[15] !== i || E[16] !== l || E[17] !== c || E[18] !== d ? (C = (0, n.jsx)(O.a, {
                        ...l,
                        href: i,
                        initiator: "markdown_link_click",
                        isBrowserEnabled: !1,
                        className: c,
                        onClickCapture: d,
                        children: t
                    }), E[14] = t, E[15] = i, E[16] = l, E[17] = c, E[18] = d, E[19] = C) : C = E[19], C
                }
            };

        function B(e) {
            let t, a, i, r = (0, s.c)(20),
                {
                    conversationId: o,
                    hostId: _,
                    feedbackEnabled: l,
                    moderationDisclaimers: d,
                    shouldBlockExternalEgress: C
                } = e,
                E = void 0 !== l && l,
                N = (0, T.y)(p.a),
                u = (0, c.a)();
            if (null == d || 0 === d.length) return null;
            let A = C ? "restricted" : "allow";
            if (r[0] !== o || r[1] !== E || r[2] !== _ || r[3] !== u || r[4] !== d || r[5] !== N || r[6] !== C) {
                let e;
                r[8] !== o || r[9] !== E || r[10] !== _ || r[11] !== u || r[12] !== N || r[13] !== C ? (e = (e, t) => {
                    let {
                        disclaimers: a,
                        disclaimerMetadata: s,
                        disclaimerType: i
                    } = e, r = () => {
                        (0, g.e)(N, e)
                    }, T = (0, S.f)(i) ? i : void 0;
                    return [null != e.policy ? (0, n.jsx)(Z, {
                        conversationId: o,
                        onRendered: r,
                        children: (0, n.jsx)(M, {
                            conversationId: o,
                            notice: e,
                            feedbackEnabled: E
                        })
                    }, t + "-policy") : null, null == e.policy && e.modelIncompatibility ? (0, n.jsx)(Z, {
                        content: u.formatMessage({
                            id: "chatgpt.moderation.modelIncompatibility.notice.body",
                            defaultMessage: "This content can’t be shown for safety reasons{paragraphBreak}Learn more about our intended model behavior in our [Model Spec]({modelSpecUrl}).",
                            description: "Safety notice in a ChatGPT conversation when the model blocks a request or response involving chain-of-thought extraction. The paragraphBreak placeholder separates the bold heading from the details. The second paragraph links to the Model Spec, OpenAI's public model behavior specification. This message is rendered as Markdown: preserve the link syntax and the modelSpecUrl placeholder, which contains its URL."
                        }, {
                            paragraphBreak: "\n\n",
                            modelSpecUrl: "https://model-spec.openai.com/2025-12-18.html"
                        }),
                        conversationId: o,
                        onRendered: r
                    }, `${t}-model-incompatibility`) : null, null == e.productIntervention || C ? null : (0, n.jsx)(Y, {
                        intervention: e.productIntervention
                    }, `${t}-${e.productIntervention.intervention_id}`), ...a.map((e, a) => null == T ? (0, n.jsx)(Z, {
                        className: "w-fit",
                        components: W,
                        content: e,
                        conversationId: o,
                        onRendered: r
                    }, `${String(t)}-${String(a)}-${e}`) : (0, n.jsx)(V, {
                        conversationId: o,
                        disclaimerMetadata: s,
                        disclaimerType: T,
                        hostId: _,
                        onRendered: r
                    }, `${String(t)}-${String(a)}-${e}`))]
                }, r[8] = o, r[9] = E, r[10] = _, r[11] = u, r[12] = N, r[13] = C, r[14] = e) : e = r[14], t = d.flatMap(e), r[0] = o, r[1] = E, r[2] = _, r[3] = u, r[4] = d, r[5] = N, r[6] = C, r[7] = t
            } else t = r[7];
            return r[15] !== t ? (a = (0, n.jsx)("div", {
                className: "mt-3 flex flex-col gap-2",
                children: t
            }), r[15] = t, r[16] = a) : a = r[16], r[17] !== A || r[18] !== a ? (i = (0, n.jsx)(I.a.Provider, {
                value: A,
                children: a
            }), r[17] = A, r[18] = a, r[19] = i) : i = r[19], i
        }

        function Z(e) {
            let t, a, i, r, o, T, _, l = (0, s.c)(21),
                {
                    children: c,
                    className: d,
                    components: C,
                    content: E,
                    conversationId: u,
                    footer: A,
                    icon: I,
                    onRendered: h
                } = e;
            return l[0] !== h ? (t = e => {
                null != e && h()
            }, l[0] = h, l[1] = t) : t = l[1], l[2] !== I ? (a = I ?? (0, n.jsx)(N.a, {
                className: "shrink-0 text-secondary",
                asset: F.a,
                "aria-hidden": !0
            }), l[2] = I, l[3] = a) : a = l[3], l[4] !== c || l[5] !== C || l[6] !== E || l[7] !== u ? (i = c ?? (0, n.jsx)(m.ChatGptMarkdown, {
                className: "text-sm [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 [&>p:first-child]:font-semibold",
                components: C,
                conversationId: u,
                cwd: null,
                isStreaming: !1,
                textStyle: {
                    kind: "assistant-message"
                },
                children: E ?? ""
            }), l[4] = c, l[5] = C, l[6] = E, l[7] = u, l[8] = i) : i = l[8], l[9] !== A ? (r = null == A ? null : (0, n.jsx)("div", {
                className: "mt-3",
                children: A
            }), l[9] = A, l[10] = r) : r = l[10], l[11] !== i || l[12] !== r ? (o = (0, n.jsxs)("div", {
                className: "min-w-0 grow pt-[2px]",
                children: [i, r]
            }), l[11] = i, l[12] = r, l[13] = o) : o = l[13], l[14] !== a || l[15] !== o ? (T = (0, n.jsxs)("div", {
                className: "flex min-w-0 grow items-start gap-3",
                children: [a, o]
            }), l[14] = a, l[15] = o, l[16] = T) : T = l[16], l[17] !== d || l[18] !== t || l[19] !== T ? (_ = (0, n.jsx)(f.a, {
                ref: t,
                className: d,
                children: T
            }), l[17] = d, l[18] = t, l[19] = T, l[20] = _) : _ = l[20], _
        }

        function V(e) {
            let t, a, r, o, u, I, m, g, f, R, P, D = (0, s.c)(34),
                {
                    conversationId: b,
                    disclaimerMetadata: L,
                    disclaimerType: y,
                    hostId: x,
                    onRendered: v
                } = e,
                G = (0, T.y)(p.a),
                M = (0, c.a)(),
                [U, w] = (0, _.useState)(!1),
                [k, F] = (0, _.useState)(!1),
                {
                    data: Y
                } = (0, T.z)(C.p),
                B = (0, d.Y)();
            if (D[0] !== L || D[1] !== y || D[2] !== M || D[3] !== U || D[4] !== Y?.trustedContactsOptedOutAt) {
                I = Symbol.for("react.early_return_sentinel");
                e: {
                    var V;
                    let e, n = (null == (V = L?.trusted_contact_name?.trim()) ? void 0 : Array.from(V, e => `&#${String(e.codePointAt(0))};`).join("")) || M.formatMessage({
                        id: "codex.chatgpt.trustedContactDisclaimer.defaultTrustedContactName",
                        defaultMessage: "your trusted contact",
                        description: "Fallback name used in a ChatGPT trusted-contact disclaimer when the trusted contact's name is unavailable."
                    });
                    if (D[11] !== L || D[12] !== y ? (e = "notify_trusted_contact_us5" === y ? (0, S.d)(L) : void 0, D[11] = L, D[12] = y, D[13] = e) : e = D[13], a = e, U || "notify_trusted_contact_us5" !== y && Y?.trustedContactsOptedOutAt === !0) {
                        I = null;
                        break e
                    }
                    t = Z,
                    r = "w-full bg-surface",
                    o = W,
                    u = function(e) {
                        let {
                            disclaimerType: t,
                            intl: a,
                            trustedContactName: n
                        } = e, s = e => `**${a.formatMessage({id:"codex.chatgpt.trustedContactDisclaimer.addTrustedContactTitle",defaultMessage:"Would it help to have extra support?",description:"Title on the add_trusted_contact_* ChatGPT trusted-contact disclaimer cards in Codex."})}**

${e}`;
                        switch (t) {
                            case "add_trusted_contact_us4":
                                return s(a.formatMessage({
                                    id: "codex.chatgpt.trustedContactDisclaimer.addTrustedContactUs4Body",
                                    defaultMessage: "Adding a trusted contact helps make it easier to connect with someone you trust, if you ever need extra support",
                                    description: "Body copy shown on the add_trusted_contact_us4 ChatGPT trusted-contact disclaimer card in Codex."
                                }));
                            case "add_trusted_contact_us5":
                                return s(a.formatMessage({
                                    id: "codex.chatgpt.trustedContactDisclaimer.addTrustedContactUs5Body",
                                    defaultMessage: "Adding a trusted contact can make it easier for someone you trust to be there for you when things feel hard",
                                    description: "Body copy shown on the add_trusted_contact_us5 ChatGPT trusted-contact disclaimer card in Codex."
                                }));
                            case "notify_trusted_contact_us5":
                                return `**${a.formatMessage({id:"codex.chatgpt.trustedContactDisclaimer.notifyTrustedContactTitle",defaultMessage:"It might help to reach out to {trustedContactName}",description:"Title shown on the notify_trusted_contact_us5 ChatGPT trusted-contact disclaimer card in Codex. {trustedContactName} is the user's trusted contact name."},{trustedContactName:n})}**

${a.formatMessage({id:"codex.chatgpt.trustedContactDisclaimer.notifyTrustedContactBody",defaultMessage:"{trustedContactName} is your trusted contact — someone you've chosen for extra support. We may send them a note to encourage them to check in with you. We recommend that you reach out to them as well.",description:"Body copy shown on the notify_trusted_contact_us5 ChatGPT trusted-contact disclaimer card in Codex. {trustedContactName} is the user's trusted contact name."},{trustedContactName:n})}`
                        }
                    }({
                        disclaimerType: y,
                        intl: M,
                        trustedContactName: n
                    })
                }
                D[0] = L, D[1] = y, D[2] = M, D[3] = U, D[4] = Y?.trustedContactsOptedOutAt, D[5] = t, D[6] = a, D[7] = r, D[8] = o, D[9] = u, D[10] = I
            } else t = D[5], a = D[6], r = D[7], o = D[8], u = D[9], I = D[10];
            return I !== Symbol.for("react.early_return_sentinel") ? I : (D[14] !== y || D[15] !== x || D[16] !== a || D[17] !== G ? (m = "notify_trusted_contact_us5" === y ? null == a || null == x ? (0, n.jsx)(E.a, {
                radius: "full",
                disabled: !0,
                children: (0, n.jsx)(l.a, {
                    id: "codex.chatgpt.trustedContactDisclaimer.sendPersonalNote",
                    defaultMessage: "Send a personal note",
                    description: "Primary action on the notification warning, disabled when no contact address is available."
                })
            }) : (0, n.jsx)(O.a, {
                href: a,
                initiator: "markdown_link_click",
                isBrowserEnabled: !1,
                originHostId: x,
                className: "inline-flex cursor-interaction rounded-full bg-primary-solid px-4 py-1.5 text-sm leading-[18px] text-primary-solid hover:bg-text/80",
                onClickCapture: () => {
                    (0, h.a)(G, i.k, {
                        action: "CHATGPT_TRUSTED_CONTACT_NOTIFICATION_WARNING_ACTION_SEND_PERSONAL_NOTE_CLICKED",
                        entryPoint: "CHATGPT_TRUSTED_CONTACT_ENTRY_POINT_NOTIFICATION_WARNING"
                    })
                },
                children: (0, n.jsx)(l.a, {
                    id: "codex.chatgpt.trustedContactDisclaimer.sendPersonalNote",
                    defaultMessage: "Send a personal note",
                    description: "Primary action on the notify_trusted_contact_us5 ChatGPT trusted-contact disclaimer card in Codex. Opens the user's email or SMS app to compose a message to the trusted contact."
                })
            }) : (0, n.jsxs)("div", {
                className: "flex flex-wrap gap-3",
                children: [(0, n.jsx)(E.a, {
                    radius: "full",
                    onClick: () => {
                        (0, A.f)(G, K, {
                            initialDialog: "intro",
                            entryPoint: "CHATGPT_TRUSTED_CONTACT_ENTRY_POINT_IN_CHAT_DISCLAIMER",
                            onSuccess: () => w(!0)
                        })
                    },
                    children: (0, n.jsx)(l.a, {
                        id: "codex.chatgpt.trustedContactDisclaimer.learnMore",
                        defaultMessage: "Learn more",
                        description: "Primary action label on the add_trusted_contact_* ChatGPT trusted-contact disclaimer cards in Codex."
                    })
                }), (0, n.jsx)(E.a, {
                    radius: "full",
                    color: "secondary",
                    onClick: () => {
                        (0, h.a)(G, i.d, {
                            entryPoint: "CHATGPT_TRUSTED_CONTACT_ENTRY_POINT_IN_CHAT_DISCLAIMER",
                            step: "CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_NO_THANKS"
                        }), F(!0)
                    },
                    children: (0, n.jsx)(l.a, {
                        id: "message.trustedContactDisclaimer.close",
                        defaultMessage: "Close",
                        description: "Secondary button on the in-thread trusted contact card. Opens a confirmation dialog to dismiss or decline the trusted-contact prompt."
                    })
                })]
            }), D[14] = y, D[15] = x, D[16] = a, D[17] = G, D[18] = m) : m = D[18], D[19] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, n.jsx)("span", {
                className: "flex size-8 shrink-0 items-center justify-center rounded-full bg-surface-secondary/92 text-default",
                children: (0, n.jsx)(N.a, {
                    asset: j.a
                })
            }), D[19] = g) : g = D[19], D[20] !== t || D[21] !== b || D[22] !== v || D[23] !== r || D[24] !== o || D[25] !== u || D[26] !== m ? (f = (0, n.jsx)(t, {
                className: r,
                components: o,
                content: u,
                conversationId: b,
                onRendered: v,
                footer: m,
                icon: g
            }), D[20] = t, D[21] = b, D[22] = v, D[23] = r, D[24] = o, D[25] = u, D[26] = m, D[27] = f) : f = D[27], D[28] !== k || D[29] !== B ? (R = k ? (0, n.jsx)(H.TrustedContactNoThanksDialog, {
                open: !0,
                onClose: () => F(!1),
                onDone: () => {
                    F(!1), w(!0)
                },
                onOpenSettings: () => {
                    B("/settings/trusted-contact")
                }
            }) : null, D[28] = k, D[29] = B, D[30] = R) : R = D[30], D[31] !== f || D[32] !== R ? (P = (0, n.jsxs)(n.Fragment, {
                children: [f, R]
            }), D[31] = f, D[32] = R, D[33] = P) : P = D[33], P)
        }
    }),
    FnQ0: (function(e, t, a) {
        var n = a("ABep"),
            s = a("QosV"),
            i = a("iTtm"),
            r = a("M7HN"),
            o = a("zd8w"),
            T = a("Wf1j"),
            _ = a("oyxz"),
            l = a("Kwur"),
            c = a("g2p6"),
            d = a("ygO2"),
            C = a("nhmq"),
            E = a("JNtf"),
            N = a("mUDD"),
            u = a("SGsN"),
            A = a("OWtl"),
            I = a("RlnO");

        function h(e) {
            let t, a = (0, s.c)(2),
                r = (0, i.z)(I.a);
            return e.open && "allowed" === r.status ? (a[0] !== e ? (t = (0, n.jsx)(p, {
                ...e
            }), a[0] = e, a[1] = t) : t = a[1], t) : null
        }

        function p(e) {
            let t, a, h, p, m, S, g, f, R, P, D, b, L, y, x, v, G = (0, s.c)(49),
                {
                    open: M,
                    onClose: U,
                    onDone: w,
                    onOpenSettings: k,
                    dismissOnDoneWithoutOptOut: H
                } = e,
                F = void 0 !== H && H,
                j = (0, i.y)(A.a),
                Y = (0, T.a)(),
                K = (0, o.useId)(),
                [W, B] = (0, o.useState)(!1),
                [Z, V] = (0, o.useState)(!1),
                z = (0, i.z)(I.a),
                [$] = (0, o.useState)(z);
            G[0] !== $.accountId || G[1] !== $.status || G[2] !== $.userId || G[3] !== j ? (t = function() {
                let e = j.get(I.a);
                return "allowed" === $.status && "allowed" === e.status && $.userId === e.userId && $.accountId === e.accountId
            }, G[0] = $.accountId, G[1] = $.status, G[2] = $.userId, G[3] = j, G[4] = t) : t = G[4];
            let q = t;
            G[5] !== U ? (a = function() {
                B(!1), U()
            }, G[5] = U, G[6] = a) : a = G[6];
            let Q = a;
            G[7] !== Q || G[8] !== F || G[9] !== W || G[10] !== Y || G[11] !== q || G[12] !== w || G[13] !== $ || G[14] !== Z || G[15] !== j ? (h = async function() {
                if (Z || !q()) return;
                if (!W) return void(F ? w() : Q());
                if ("allowed" !== $.status) return;
                let {
                    accountId: e
                } = $, t = j.query.snapshot(c.p);
                V(!0);
                try {
                    if (await t.cancel(), !q()) return void V(!1);
                    let a = null == e ? void 0 : {
                        "ChatGPT-Account-ID": e,
                        [r.Zb]: e
                    };
                    if (await l.Request.safePatch("/settings/account_user_setting", {
                            additionalHeaders: a,
                            parameters: {
                                query: {
                                    feature: "trusted_contacts_opted_out_at",
                                    value: !0
                                }
                            }
                        }), !q()) {
                        t.invalidate(), V(!1);
                        return
                    }
                    t.setData(O), t.invalidate(), B(!1), w()
                } catch {
                    if (!q()) return void V(!1);
                    j.get(u.f).danger(Y.formatMessage({
                        id: "codex.chatgpt.trustedContactDisclaimer.optOutError",
                        defaultMessage: "Could not update trusted contact settings",
                        description: "Error toast shown when saving the Don't ask me again choice for trusted-contact prompts fails. The confirmation remains open so the user can retry."
                    }), {
                        errorAnalytics: {
                            toastId: "codex.chatgpt.trustedContactDisclaimer.optOutError"
                        }
                    })
                }
                V(!1)
            }, G[7] = Q, G[8] = F, G[9] = W, G[10] = Y, G[11] = q, G[12] = w, G[13] = $, G[14] = Z, G[15] = j, G[16] = h) : h = G[16];
            let J = h,
                X = M && "allowed" === $.status && "allowed" === z.status && z.userId === $.userId && z.accountId === $.accountId;
            return G[17] !== Q ? (p = e => {
                e || Q()
            }, G[17] = Q, G[18] = p) : p = G[18], G[19] !== J ? (m = e => {
                e.preventDefault(), J()
            }, G[19] = J, G[20] = m) : m = G[20], G[21] === Symbol.for("react.memo_cache_sentinel") ? (S = (0, n.jsx)(E.e, {
                children: (0, n.jsx)(_.a, {
                    id: "message.trustedContactNoThanksModal.title",
                    defaultMessage: "Thanks for letting us know",
                    description: "Title of the modal shown after a user declines the trusted-contact disclaimer."
                })
            }), G[21] = S) : S = G[21], G[22] !== Q || G[23] !== k ? (g = (0, n.jsx)("p", {
                children: (0, n.jsx)(_.a, {
                    id: "message.trustedContactNoThanksModal.body",
                    defaultMessage: "If you change your mind, you can add a trusted contact from your <settingsLink>settings</settingsLink>.",
                    description: "Body copy in the decline modal. The settingsLink opens Trusted contact settings.",
                    values: {
                        settingsLink: e => (0, n.jsx)("button", {
                            className: "cursor-interaction underline",
                            type: "button",
                            onClick: () => {
                                Q(), k()
                            },
                            children: e
                        })
                    }
                })
            }), G[22] = Q, G[23] = k, G[24] = g) : g = G[24], G[25] !== K || G[26] !== W || G[27] !== Z ? (f = (0, n.jsx)(C.a, {
                id: K,
                checked: W,
                disabled: Z,
                onCheckedChange: B
            }), G[25] = K, G[26] = W, G[27] = Z, G[28] = f) : f = G[28], G[29] === Symbol.for("react.memo_cache_sentinel") ? (R = (0, n.jsx)(_.a, {
                id: "message.trustedContactNoThanksModal.checkboxLabel",
                defaultMessage: "Don't ask me again",
                description: "Checkbox label in the trusted-contact decline modal. When checked, future trusted-contact prompts are disabled."
            }), G[29] = R) : R = G[29], G[30] !== K ? (P = (0, n.jsx)("label", {
                className: "select-none",
                htmlFor: K,
                children: R
            }), G[30] = K, G[31] = P) : P = G[31], G[32] !== f || G[33] !== P ? (D = (0, n.jsxs)("div", {
                className: "relative flex items-center gap-3",
                children: [f, P]
            }), G[32] = f, G[33] = P, G[34] = D) : D = G[34], G[35] !== D || G[36] !== g ? (b = (0, n.jsxs)(N.e, {
                children: [S, g, D]
            }), G[35] = D, G[36] = g, G[37] = b) : b = G[37], G[38] === Symbol.for("react.memo_cache_sentinel") ? (L = (0, n.jsx)(_.a, {
                id: "message.trustedContactNoThanksModal.done",
                defaultMessage: "Done",
                description: "Primary action button in the trusted-contact decline modal. Confirms the dismissal flow."
            }), G[38] = L) : L = G[38], G[39] !== Z ? (y = (0, n.jsx)(N.e, {
                children: (0, n.jsx)(N.c, {
                    children: (0, n.jsx)(d.a, {
                        type: "submit",
                        radius: "full",
                        loading: Z,
                        children: L
                    })
                })
            }), G[39] = Z, G[40] = y) : y = G[40], G[41] !== b || G[42] !== y || G[43] !== m ? (x = (0, n.jsxs)(N.b, {
                as: "form",
                onSubmit: m,
                children: [b, y]
            }), G[41] = b, G[42] = y, G[43] = m, G[44] = x) : x = G[44], G[45] !== x || G[46] !== X || G[47] !== p ? (v = (0, n.jsx)(E.b, {
                open: X,
                size: "wide",
                onOpenChange: p,
                children: x
            }), G[45] = x, G[46] = X, G[47] = p, G[48] = v) : v = G[48], v
        }

        function O(e) {
            return null == e ? e : {
                ...e,
                trustedContactsOptedOutAt: !0
            }
        }
        a.d(t, {
            TrustedContactNoThanksDialog: () => h
        })
    }),
    aPiu: (function(e, t, a) {
        var n = a("ABep"),
            s = a("QosV"),
            i = a("iTtm"),
            r = a("Sd8U"),
            o = a("uHE8"),
            T = a("tSEg");

        function _(e) {
            let t, a, _ = (0, s.c)(7),
                {
                    children: l
                } = e,
                c = (0, i.y)(T.a);
            if ("home" === c.value.routeKind) {
                let e;
                return _[0] !== l ? (e = (0, n.jsx)(o.a, {
                    children: l
                }), _[0] = l, _[1] = e) : e = _[1], e
            }
            _[2] !== c ? (t = (0, r.n)(c)?.getOwnValue(r.a) ?? (0, r.c)(c.value, void 0, c.value.clientThreadId), _[2] = c, _[3] = t) : t = _[3];
            let d = t;
            return _[4] !== l || _[5] !== d ? (a = (0, n.jsx)(i.b, {
                scope: r.a,
                value: d,
                children: l
            }), _[4] = l, _[5] = d, _[6] = a) : a = _[6], a
        }
        a.d(t, {
            a: () => _
        })
    }),
    qKAH: (function(e, t, a) {
        a.d(t, {
            a: () => C
        });
        var n = a("ABep"),
            s = a("QosV"),
            i = a("on57"),
            r = a("iTtm"),
            o = a("Wf1j"),
            T = a("oyxz"),
            _ = a("Qgfj"),
            l = a("RNul"),
            c = a("O666");
        let d = {
            default: void 0,
            transcript: void 0,
            image: "size-full",
            response: "p-5"
        };

        function C(e) {
            let t, a, _, C, N, u = (0, s.c)(17),
                {
                    ariaLabel: A,
                    children: I,
                    classicImagePreviewEligible: h,
                    isLoading: p,
                    presentation: O,
                    variant: m
                } = e,
                S = void 0 !== p && p,
                g = void 0 === m ? "default" : m,
                f = (0, o.a)();
            u[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                layer: "3136899520",
                parameter: "classic_image_preview"
            }, u[0] = t) : t = u[0];
            let R = (0, r.x)(void 0 !== h && h ? c.b : null, t) ? "border-transparent bg-transparent" : "border-default bg-surface",
                P = "transcript" === g ? "h-auto" : "aspect-[1200/630]";
            u[1] !== R || u[2] !== P ? (a = (0, i.b)("relative min-h-56 overflow-hidden rounded-lg border select-none", R, P), u[1] = R, u[2] = P, u[3] = a) : a = u[3];
            let D = a;
            return null != O && (D = "imageSheetTwoRows" === O ? "imageSheetTwoRowsPreview-bFaioZ" : "imageSheetPreview-rzCCMf"), u[4] !== A || u[5] !== f || u[6] !== g ? (_ = A ?? f.formatMessage(E["transcript" === g ? "default" : g]), u[4] = A, u[5] = f, u[6] = g, u[7] = _) : _ = u[7], u[8] !== I || u[9] !== S || u[10] !== O || u[11] !== g ? (C = S ? (0, n.jsxs)("div", {
                className: "flex h-full items-center justify-center gap-2 text-sm text-secondary",
                children: [(0, n.jsx)(l.a, {
                    className: "icon-sm"
                }), (0, n.jsx)(T.a, {
                    ...E.loading
                })]
            }) : (0, n.jsxs)("div", {
                "aria-hidden": !0,
                className: d[g],
                inert: !0,
                children: [I, null == O && ("default" === g || "response" === g) && (0, n.jsx)("div", {
                    className: "pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent"
                })]
            }), u[8] = I, u[9] = S, u[10] = O, u[11] = g, u[12] = C) : C = u[12], u[13] !== D || u[14] !== _ || u[15] !== C ? (N = (0, n.jsx)("div", {
                className: D,
                role: "img",
                "aria-label": _,
                children: C
            }), u[13] = D, u[14] = _, u[15] = C, u[16] = N) : N = u[16], N
        }
        let E = (0, _.f)({
            default: {
                id: "shareDialog.thread.previewLabel",
                defaultMessage: "Preview of the beginning of the shared chat",
                description: "Accessible description of the non-interactive cropped transcript preview inside a ChatGPT or Codex thread sharing dialog. It shows only the beginning, not the whole shared chat."
            },
            image: {
                id: "shareDialog.image.previewLabel",
                defaultMessage: "Preview of the shared image",
                description: "Accessible description of the non-interactive generated-image preview inside a ChatGPT image sharing dialog."
            },
            loading: {
                id: "shareDialog.thread.previewLoading",
                defaultMessage: "Loading preview…",
                description: "Status in the thread sharing dialog while the beginning of the chat is being prepared for the transcript preview."
            },
            response: {
                id: "shareDialog.response.previewLabel",
                defaultMessage: "Preview of the shared response",
                description: "Accessible description of the non-interactive response preview inside a ChatGPT response sharing dialog."
            }
        })
    }),
    dZmL: (function(e, t, a) {
        var n, s, i, r, o, T = ((n = {}).CHATGPT_SAFETY_LINK_INTERACTION_ACTION_TYPE_UNSPECIFIED = "CHATGPT_SAFETY_LINK_INTERACTION_ACTION_TYPE_UNSPECIFIED", n.CHATGPT_SAFETY_LINK_INTERACTION_ACTION_TYPE_SHOWN = "CHATGPT_SAFETY_LINK_INTERACTION_ACTION_TYPE_SHOWN", n.CHATGPT_SAFETY_LINK_INTERACTION_ACTION_TYPE_CLICKED = "CHATGPT_SAFETY_LINK_INTERACTION_ACTION_TYPE_CLICKED", n.UNRECOGNIZED = "UNRECOGNIZED", n),
            _ = ((s = {}).CHATGPT_SAFETY_LINK_TYPE_UNSPECIFIED = "CHATGPT_SAFETY_LINK_TYPE_UNSPECIFIED", s.CHATGPT_SAFETY_LINK_TYPE_TERMINAL_BLOCK_TRUSTED_ACCESS = "CHATGPT_SAFETY_LINK_TYPE_TERMINAL_BLOCK_TRUSTED_ACCESS", s.CHATGPT_SAFETY_LINK_TYPE_SAFETY_REVIEW_FASTER_MODEL = "CHATGPT_SAFETY_LINK_TYPE_SAFETY_REVIEW_FASTER_MODEL", s.CHATGPT_SAFETY_LINK_TYPE_SAFETY_REVIEW_LEARN_MORE = "CHATGPT_SAFETY_LINK_TYPE_SAFETY_REVIEW_LEARN_MORE", s.UNRECOGNIZED = "UNRECOGNIZED", s),
            l = ((i = {}).CHATGPT_SAFETY_LINK_PROTECTION_TYPE_UNSPECIFIED = "CHATGPT_SAFETY_LINK_PROTECTION_TYPE_UNSPECIFIED", i.CHATGPT_SAFETY_LINK_PROTECTION_TYPE_BIO = "CHATGPT_SAFETY_LINK_PROTECTION_TYPE_BIO", i.CHATGPT_SAFETY_LINK_PROTECTION_TYPE_CYBER = "CHATGPT_SAFETY_LINK_PROTECTION_TYPE_CYBER", i.UNRECOGNIZED = "UNRECOGNIZED", i),
            c = ((r = {}).CHATGPT_SAFETY_LINK_SURFACE_UNSPECIFIED = "CHATGPT_SAFETY_LINK_SURFACE_UNSPECIFIED", r.CHATGPT_SAFETY_LINK_SURFACE_TEXT_CHAT = "CHATGPT_SAFETY_LINK_SURFACE_TEXT_CHAT", r.CHATGPT_SAFETY_LINK_SURFACE_INTEGRATED_VOICE = "CHATGPT_SAFETY_LINK_SURFACE_INTEGRATED_VOICE", r.UNRECOGNIZED = "UNRECOGNIZED", r),
            d = ((o = {}).CHATGPT_SAFETY_REVIEW_FASTER_MODEL_RETRY_CONFIRMATION_ACTION_TYPE_UNSPECIFIED = "CHATGPT_SAFETY_REVIEW_FASTER_MODEL_RETRY_CONFIRMATION_ACTION_TYPE_UNSPECIFIED", o.CHATGPT_SAFETY_REVIEW_FASTER_MODEL_RETRY_CONFIRMATION_ACTION_TYPE_SHOWN = "CHATGPT_SAFETY_REVIEW_FASTER_MODEL_RETRY_CONFIRMATION_ACTION_TYPE_SHOWN", o.CHATGPT_SAFETY_REVIEW_FASTER_MODEL_RETRY_CONFIRMATION_ACTION_TYPE_CANCELLED = "CHATGPT_SAFETY_REVIEW_FASTER_MODEL_RETRY_CONFIRMATION_ACTION_TYPE_CANCELLED", o.CHATGPT_SAFETY_REVIEW_FASTER_MODEL_RETRY_CONFIRMATION_ACTION_TYPE_CONFIRMED = "CHATGPT_SAFETY_REVIEW_FASTER_MODEL_RETRY_CONFIRMATION_ACTION_TYPE_CONFIRMED", o.UNRECOGNIZED = "UNRECOGNIZED", o);
        a.d(t, {
            b: () => T,
            c: () => l,
            d: () => c,
            e: () => _,
            f: () => d
        }, {
            a: {
                $type: "protobuf_analytics_events.v1.ChatgptSafetyLinkInteraction"
            },
            g: {
                $type: "protobuf_analytics_events.v1.ChatgptSafetyReviewFasterModelRetryConfirmationInteraction"
            }
        })
    }),
    n0Mx: (function(e, t, a) {
        var n, s, i, r, o, T, _, l = ((n = {}).CHATGPT_TRUSTED_CONTACT_ENTRY_POINT_UNSPECIFIED = "CHATGPT_TRUSTED_CONTACT_ENTRY_POINT_UNSPECIFIED", n.CHATGPT_TRUSTED_CONTACT_ENTRY_POINT_IN_CHAT_DISCLAIMER = "CHATGPT_TRUSTED_CONTACT_ENTRY_POINT_IN_CHAT_DISCLAIMER", n.CHATGPT_TRUSTED_CONTACT_ENTRY_POINT_SETTINGS = "CHATGPT_TRUSTED_CONTACT_ENTRY_POINT_SETTINGS", n.CHATGPT_TRUSTED_CONTACT_ENTRY_POINT_PUBLIC_ACCEPT_LINK = "CHATGPT_TRUSTED_CONTACT_ENTRY_POINT_PUBLIC_ACCEPT_LINK", n.CHATGPT_TRUSTED_CONTACT_ENTRY_POINT_PUBLIC_DECLINE_LINK = "CHATGPT_TRUSTED_CONTACT_ENTRY_POINT_PUBLIC_DECLINE_LINK", n.CHATGPT_TRUSTED_CONTACT_ENTRY_POINT_NOTIFICATION_WARNING = "CHATGPT_TRUSTED_CONTACT_ENTRY_POINT_NOTIFICATION_WARNING", n.CHATGPT_TRUSTED_CONTACT_ENTRY_POINT_ALERT_LINK = "CHATGPT_TRUSTED_CONTACT_ENTRY_POINT_ALERT_LINK", n.CHATGPT_TRUSTED_CONTACT_ENTRY_POINT_UNLINKED_LINK = "CHATGPT_TRUSTED_CONTACT_ENTRY_POINT_UNLINKED_LINK", n.UNRECOGNIZED = "UNRECOGNIZED", n),
            c = ((s = {}).CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_UNSPECIFIED = "CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_UNSPECIFIED", s.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_INTRO = "CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_INTRO", s.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_CONTACT_FORM = "CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_CONTACT_FORM", s.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_PERSONAL_NOTE = "CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_PERSONAL_NOTE", s.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_CONFIRMATION = "CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_CONFIRMATION", s.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_NO_THANKS = "CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_NO_THANKS", s.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_CONTACT_UNAVAILABLE = "CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_CONTACT_UNAVAILABLE", s.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_ADD_NEW_CONTACT = "CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_ADD_NEW_CONTACT", s.UNRECOGNIZED = "UNRECOGNIZED", s),
            d = ((i = {}).CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_UNSPECIFIED = "CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_UNSPECIFIED", i.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_PRIMARY_CTA_CLICKED = "CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_PRIMARY_CTA_CLICKED", i.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_ADD_CONTACT_CLICKED = "CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_ADD_CONTACT_CLICKED", i.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_IMPORT_CONTACT_CLICKED = "CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_IMPORT_CONTACT_CLICKED", i.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_PERSONAL_NOTE_SELECTED = "CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_PERSONAL_NOTE_SELECTED", i.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_FORM_SUBMITTED = "CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_FORM_SUBMITTED", i.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_NEVER_SHOW_AGAIN_CLICKED = "CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_NEVER_SHOW_AGAIN_CLICKED", i.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_DISMISSED = "CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_DISMISSED", i.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_BACK_CLICKED = "CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_BACK_CLICKED", i.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_ADD_SOMEONE_ELSE_CLICKED = "CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_ADD_SOMEONE_ELSE_CLICKED", i.UNRECOGNIZED = "UNRECOGNIZED", i),
            C = ((r = {}).CHATGPT_TRUSTED_CONTACT_NOMINEE_ACTION_UNSPECIFIED = "CHATGPT_TRUSTED_CONTACT_NOMINEE_ACTION_UNSPECIFIED", r.CHATGPT_TRUSTED_CONTACT_NOMINEE_ACTION_ACCEPT_CLICKED = "CHATGPT_TRUSTED_CONTACT_NOMINEE_ACTION_ACCEPT_CLICKED", r.CHATGPT_TRUSTED_CONTACT_NOMINEE_ACTION_DECLINE_CLICKED = "CHATGPT_TRUSTED_CONTACT_NOMINEE_ACTION_DECLINE_CLICKED", r.CHATGPT_TRUSTED_CONTACT_NOMINEE_ACTION_RESPONSE_SUCCEEDED = "CHATGPT_TRUSTED_CONTACT_NOMINEE_ACTION_RESPONSE_SUCCEEDED", r.CHATGPT_TRUSTED_CONTACT_NOMINEE_ACTION_RESPONSE_FAILED = "CHATGPT_TRUSTED_CONTACT_NOMINEE_ACTION_RESPONSE_FAILED", r.UNRECOGNIZED = "UNRECOGNIZED", r),
            E = ((o = {}).CHATGPT_TRUSTED_CONTACT_NOMINEE_MODAL_UNSPECIFIED = "CHATGPT_TRUSTED_CONTACT_NOMINEE_MODAL_UNSPECIFIED", o.CHATGPT_TRUSTED_CONTACT_NOMINEE_MODAL_ACCEPT = "CHATGPT_TRUSTED_CONTACT_NOMINEE_MODAL_ACCEPT", o.CHATGPT_TRUSTED_CONTACT_NOMINEE_MODAL_DECLINE = "CHATGPT_TRUSTED_CONTACT_NOMINEE_MODAL_DECLINE", o.CHATGPT_TRUSTED_CONTACT_NOMINEE_MODAL_ALERT_INFO = "CHATGPT_TRUSTED_CONTACT_NOMINEE_MODAL_ALERT_INFO", o.UNRECOGNIZED = "UNRECOGNIZED", o),
            N = ((T = {}).CHATGPT_TRUSTED_CONTACT_SETTINGS_ACTION_UNSPECIFIED = "CHATGPT_TRUSTED_CONTACT_SETTINGS_ACTION_UNSPECIFIED", T.CHATGPT_TRUSTED_CONTACT_SETTINGS_ACTION_PAGE_VIEWED = "CHATGPT_TRUSTED_CONTACT_SETTINGS_ACTION_PAGE_VIEWED", T.CHATGPT_TRUSTED_CONTACT_SETTINGS_ACTION_ADD_CLICKED = "CHATGPT_TRUSTED_CONTACT_SETTINGS_ACTION_ADD_CLICKED", T.CHATGPT_TRUSTED_CONTACT_SETTINGS_ACTION_RESEND_NOTIFICATION_CLICKED = "CHATGPT_TRUSTED_CONTACT_SETTINGS_ACTION_RESEND_NOTIFICATION_CLICKED", T.CHATGPT_TRUSTED_CONTACT_SETTINGS_ACTION_CANCEL_NOMINATION_CLICKED = "CHATGPT_TRUSTED_CONTACT_SETTINGS_ACTION_CANCEL_NOMINATION_CLICKED", T.CHATGPT_TRUSTED_CONTACT_SETTINGS_ACTION_DELETE_TRUSTED_CONTACT_CLICKED = "CHATGPT_TRUSTED_CONTACT_SETTINGS_ACTION_DELETE_TRUSTED_CONTACT_CLICKED", T.UNRECOGNIZED = "UNRECOGNIZED", T),
            u = ((_ = {}).CHATGPT_TRUSTED_CONTACT_NOTIFICATION_WARNING_ACTION_UNSPECIFIED = "CHATGPT_TRUSTED_CONTACT_NOTIFICATION_WARNING_ACTION_UNSPECIFIED", _.CHATGPT_TRUSTED_CONTACT_NOTIFICATION_WARNING_ACTION_SEND_PERSONAL_NOTE_CLICKED = "CHATGPT_TRUSTED_CONTACT_NOTIFICATION_WARNING_ACTION_SEND_PERSONAL_NOTE_CLICKED", _.UNRECOGNIZED = "UNRECOGNIZED", _);
        a.d(t, {
            a: () => d,
            c: () => c,
            e: () => l,
            f: () => C,
            h: () => E,
            j: () => u,
            l: () => N
        }, {
            b: {
                $type: "protobuf_analytics_events.v1.ChatgptTrustedContactEnrollmentActionTaken"
            },
            d: {
                $type: "protobuf_analytics_events.v1.ChatgptTrustedContactEnrollmentStepShown"
            },
            g: {
                $type: "protobuf_analytics_events.v1.ChatgptTrustedContactNomineeActionTaken"
            },
            i: {
                $type: "protobuf_analytics_events.v1.ChatgptTrustedContactNomineeModalShown"
            },
            k: {
                $type: "protobuf_analytics_events.v1.ChatgptTrustedContactNotificationWarningActionTaken"
            },
            m: {
                $type: "protobuf_analytics_events.v1.ChatgptTrustedContactSettingsActionTaken"
            }
        })
    })
};