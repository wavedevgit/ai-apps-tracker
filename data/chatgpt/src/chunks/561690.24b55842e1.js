export const __rspack_esm_ids = [561690];
export const __webpack_modules__ = {
    ydDm: (function(e, t, i) {
        var n = i("Kwur"),
            s = i("rvFo"),
            l = i("eShZ");
        i.d(t, {}, {
            a: function(e, t, i) {
                return {
                    queryKey: ["dot-plan-summary-preview", e, t, i],
                    queryFn: async e => {
                        let {
                            signal: t
                        } = e;
                        try {
                            let e = await n.Request.safeGet("/files/library/automation-plans/{automation_id}/plan-summary", {
                                parameters: {
                                    path: {
                                        automation_id: i
                                    }
                                },
                                expectedErrorStatuses: [403, 404],
                                signal: t
                            });
                            return e?.state?.automation_id === i ? e : null
                        } catch (e) {
                            if (e instanceof l.a && 404 === e.status) return null;
                            throw e
                        }
                    },
                    staleTime: s.b.THIRTY_SECONDS,
                    retry: !1
                }
            },
            b: function(e, t, i) {
                return {
                    queryKey: ["library-plan-summary-preview", e, t, i],
                    queryFn: e => {
                        let {
                            signal: t
                        } = e;
                        return n.Request.safeGet("/files/library/files/{library_file_id}/plan-summary", {
                            parameters: {
                                path: {
                                    library_file_id: i
                                }
                            },
                            signal: t
                        })
                    },
                    staleTime: 0,
                    retry: !1
                }
            }
        })
    }),
    P2D5: (function(e, t, i) {
        let n = new WeakMap,
            s = "orbit-transcript-entrance-change";
        i.d(t, {}, {
            a: s,
            b: function(e) {
                return n.get(e)?.() ?? !0
            },
            c: function(e, t) {
                null == t ? n.delete(e) : n.set(e, t), e.dispatchEvent(new Event(s))
            }
        })
    }),
    QkVh: (function(e, t, i) {
        var n = i("iTtm"),
            s = i("Cslg"),
            l = i("OWtl"),
            r = i("rvFo"),
            a = i("eShZ"),
            o = i("Kwur");
        let c = (0, n.q)(l.a, (e, t) => {
            let {
                get: i
            } = t, n = i(s.f);
            return {
                queryKey: ["automation-plan-file", n, e],
                enabled: null != n && "" !== e,
                staleTime: r.b.ONE_MINUTE,
                retry: !1,
                queryFn: async t => {
                    let {
                        signal: i
                    } = t;
                    try {
                        return await o.Request.safeGet("/files/library/files/{library_file_id}/node", {
                            parameters: {
                                path: {
                                    library_file_id: e
                                }
                            },
                            additionalHeaders: null == n ? void 0 : {
                                "ChatGPT-Account-ID": n
                            },
                            expectedErrorStatuses: [403, 404],
                            signal: i
                        })
                    } catch (e) {
                        if (e instanceof a.a && (403 === e.status || 404 === e.status)) return null;
                        throw e
                    }
                }
            }
        });
        i.d(t, {}, {
            a: c
        })
    }),
    y9NQ: (function(e, t, i) {
        var n = i("QosV"),
            s = i("T0Rc"),
            l = i("iTtm"),
            r = i("zd8w"),
            a = i("Wf1j"),
            o = i("Cslg"),
            c = i("fGpH"),
            d = i("Ro2M"),
            u = i("ydDm"),
            p = i("SGsN"),
            h = i("tSEg"),
            m = i("OMIV"),
            f = i("rvFo"),
            y = i("g2p6"),
            g = i("rxj0"),
            v = i("QkVh");

        function _(e) {
            return /^file-inline-(libfile[_-][^~]+)(?:~.*)?$/.exec(e ?? "")?.[1]
        }
        i.d(t, {}, {
            a: function(e, t) {
                let b, R, I, w, S, x, E, L, A, T, M, q, k, C, O, P, j = (0, n.c)(76),
                    D = (0, l.y)(h.a),
                    z = (0, a.a)(),
                    N = (0, l.x)(null == e ? null : m.d, "3901104270"),
                    F = null == t,
                    K = (0, l.z)(o.f),
                    U = (0, l.z)(o.k),
                    V = !F;
                j[0] !== V ? (b = {
                    enabled: V
                }, j[0] = V, j[1] = b) : b = j[1];
                let G = (0, l.x)(N ? d.e : null, e ?? "", b),
                    W = F && (null == U || G?.data?.viewerUserId !== U) ? void 0 : G?.data,
                    Q = F && !0 === N && null != e && null != K && null != U,
                    Y = (0, l.z)(Q ? g.chatGptConsumerLockdownAccountState$ : null);
                j[2] !== K || j[3] !== e || j[4] !== G?.isSuccess || j[5] !== F || j[6] !== W || j[7] !== D ? (R = F && null != W && G?.isSuccess ? D.queryClient.getQueryCache().find({
                    queryKey: (0, d.m)(e ?? "", K).queryKey,
                    exact: !0
                }) : void 0, I = null != W && R?.isStaleByTime(f.b.THIRTY_SECONDS) === !1 ? function(e) {
                    let {
                        automation: t
                    } = e, i = _(t.plan_file_id);
                    return (0, c.u)(e) && "owner" === t.current_user_role && "language_learning" !== t.plan_type && null != i && t.plan_summary?.steps != null && t.title.trim() && null != t.goal_summary ? {
                        component: "CachedGoalProgress",
                        state: {
                            automation_id: t.id,
                            library_file_id: i,
                            title: t.title,
                            plan_type: t.plan_type,
                            steps: t.plan_summary.steps
                        },
                        goal_summary: t.goal_summary,
                        display_emoji: t.display_emoji
                    } : null
                }(W) : null, j[2] = K, j[3] = e, j[4] = G?.isSuccess, j[5] = F, j[6] = W, j[7] = D, j[8] = R, j[9] = I) : (R = j[8], I = j[9]);
                let B = I,
                    H = e ?? "";
                j[10] !== K || j[11] !== H || j[12] !== U ? (w = (0, u.a)(K, U, H), j[10] = K, j[11] = H, j[12] = U, j[13] = w) : w = j[13];
                let $ = w;
                j[14] !== B || j[15] !== Q || j[16] !== Y || j[17] !== W ? (S = Q && "disabled" === Y && null == B && (null == W || (0, c.u)(W)), j[14] = B, j[15] = Q, j[16] = Y, j[17] = W, j[18] = S) : S = j[18], j[19] !== $ || j[20] !== S ? (x = {
                    ...$,
                    staleTime: $.staleTime,
                    enabled: S
                }, j[19] = $, j[20] = S, j[21] = x) : x = j[21];
                let J = (0, s.a)(x),
                    Z = B ?? (J.isSuccess ? J.data : null),
                    X = W?.automation.plan_type === "language_learning";
                j[22] !== t ? (E = function(e) {
                    return null == t ? (0, c.u)(e) : "language_learning" !== e.automation.plan_type
                }, j[22] = t, j[23] = E) : E = j[23];
                let ee = E;
                j[24] !== N || j[25] !== W || j[26] !== ee ? (L = !0 === N && (null == W || ee(W)), j[24] = N, j[25] = W, j[26] = ee, j[27] = L) : L = j[27];
                let et = L,
                    ei = W?.automation.plan_file_id;
                j[28] !== ei ? (A = _(ei), j[28] = ei, j[29] = A) : A = j[29];
                let en = A,
                    es = null != t || W?.automation.plan_type == null;
                j[30] !== es ? (T = {
                    enabled: es
                }, j[30] = es, j[31] = T) : T = j[31];
                let el = (0, l.x)(et && null != en && (!F || J.isSuccess && null == Z && W?.automation.plan_type == null) ? v.a : null, en ?? "", T),
                    er = el?.data,
                    ea = et && (null != Z || W?.automation.plan_type != null || er?.mime_type === "text/markdown" && "owned" === er.access_kind),
                    [eo, ec] = (0, r.useState)(!1),
                    ed = (0, r.useRef)(null);
                j[32] === Symbol.for("react.memo_cache_sentinel") ? (M = () => () => ed.current?.abort(), j[32] = M) : M = j[32], j[33] !== e || j[34] !== t || j[35] !== D ? (q = [D, t, e], j[33] = e, j[34] = t, j[35] = D, j[36] = q) : q = j[36], (0, r.useEffect)(M, q), j[37] !== K || j[38] !== e || j[39] !== B || j[40] !== t || j[41] !== G?.dataUpdatedAt || j[42] !== R || j[43] !== Q || j[44] !== $ || j[45] !== et || j[46] !== ea || j[47] !== z || j[48] !== F || j[49] !== W || j[50] !== en || j[51] !== er || j[52] !== el?.isError || j[53] !== el?.isSuccess || j[54] !== D || j[55] !== ee || j[56] !== U ? (k = function(n) {
                    if (!et || null == e || null != W && null == W.automation.plan_type && (null == en || el?.isSuccess && null == er || el?.isError)) return void n();
                    ed.current?.abort();
                    let s = new AbortController;
                    ed.current = s, ec(!0);
                    let l = e => s.signal.aborted || !e.get(m.d, "3901104270") || e.get(o.f) !== K || e.get(o.k) !== U,
                        r = e => l(e) || (0, g.i)(e, t),
                        a = ea;
                    (async () => {
                        if (F) {
                            if (!Q) return void n();
                            if (D.get(y.o) && await D.query.getOrFetch(y.p), r(D)) {
                                l(D) || ea || n();
                                return
                            }
                            let e = null != B && R?.isStaleByTime(f.b.THIRTY_SECONDS) === !1,
                                t = e ? B : await D.queryClient.fetchQuery($);
                            if (r(D)) return;
                            let o = t?.state.library_file_id ?? (null != W && (0, c.u)(W) ? en : null);
                            if (null == o) return void n();
                            let d = (0, u.b)(K, U, o),
                                p = e ? G?.dataUpdatedAt : D.queryClient.getQueryState($.queryKey)?.dataUpdatedAt,
                                h = D.queryClient.getQueryState(d.queryKey);
                            null != t && (null == h || "error" !== h.status && null != p && h.dataUpdatedAt < p) && D.queryClient.setQueryData(d.queryKey, t, {
                                updatedAt: p
                            }), a = !0;
                            let {
                                openSavedGoal: m
                            } = await Promise.all([i.e(418851), i.e(109308), i.e(399565), i.e(257798), i.e(153380), i.e(617936), i.e(807489), i.e(337882), i.e(955979), i.e(646436), i.e(7078), i.e(200429), i.e(698524), i.e(956483), i.e(87162), i.e(396705), i.e(155568), i.e(731863), i.e(767086), i.e(76629), i.e(514085), i.e(204542), i.e(982651), i.e(673108), i.e(487481), i.e(28434)]).then(i.bind(i, "Tn6D"));
                            return void(r(D) || await m(D, {
                                conversationId: null,
                                libraryFileId: o,
                                fileName: t?.file_name ?? void 0,
                                signal: s.signal
                            }))
                        }
                        let o = await D.query.getOrFetch(d.e, e);
                        if (l(D)) return;
                        if (!ee(o)) {
                            null != t && r(D) || n();
                            return
                        }
                        if (a = a || null != o.automation.plan_type, r(D)) return;
                        let p = _(o.automation.plan_file_id),
                            h = null == p ? null : await D.query.getOrFetch(v.a, p).catch(e => {
                                if (null != o.automation.plan_type) throw e;
                                return null
                            });
                        if (r(D)) return;
                        if (null == h && null == o.automation.plan_type) return void n();
                        if (h?.mime_type !== "text/markdown" || "owned" !== h.access_kind) throw Error("Saved plan is inaccessible");
                        a = !0;
                        let {
                            openChatGptFile: m
                        } = await Promise.all([i.e(418851), i.e(109308), i.e(399565), i.e(257798), i.e(153380), i.e(617936), i.e(807489), i.e(337882), i.e(955979), i.e(646436), i.e(7078), i.e(200429), i.e(698524), i.e(956483), i.e(87162), i.e(396705), i.e(155568), i.e(731863), i.e(767086), i.e(76629), i.e(514085), i.e(204542), i.e(982651), i.e(673108), i.e(487481)]).then(i.bind(i, "f2PP"));
                        await m(D, {
                            allowTaskPreview: null == t,
                            conversationId: t,
                            fileName: h.name,
                            libraryArtifactType: null == t ? "automation_plan" : h.library_artifact_type,
                            mimeType: h.mime_type,
                            browserPreview: !0,
                            fullWidth: !1,
                            downloadFallback: !1,
                            tabKey: `automation-plan:${h.id}`,
                            signal: s.signal,
                            isAccessBlocked: r,
                            target: {
                                type: "file-id",
                                fileId: `file-inline-${h.id}`,
                                libraryFileId: h.id
                            }
                        })
                    })().catch(() => {
                        if (!l(D)) {
                            if (!a) {
                                null != t && r(D) || n();
                                return
                            }
                            r(D) || D.get(p.f).danger(z.formatMessage({
                                id: "chatgptConversations.automationSource.openFailed",
                                defaultMessage: "Failed to open task",
                                description: "Error shown when opening the saved plan or task settings from the title above an automated response fails"
                            }), {
                                errorAnalytics: {
                                    toastId: "chatgptConversations.automationSource.openFailed"
                                }
                            })
                        }
                    }).finally(() => {
                        ed.current === s && (ed.current = null, ec(!1))
                    })
                }, j[37] = K, j[38] = e, j[39] = B, j[40] = t, j[41] = G?.dataUpdatedAt, j[42] = R, j[43] = Q, j[44] = $, j[45] = et, j[46] = ea, j[47] = z, j[48] = F, j[49] = W, j[50] = en, j[51] = er, j[52] = el?.isError, j[53] = el?.isSuccess, j[54] = D, j[55] = ee, j[56] = U, j[57] = k) : k = j[57];
                let eu = k;
                return j[58] !== Z ? (C = null != Z ? {
                    title: Z.state.title,
                    emoji: Z.display_emoji
                } : void 0, j[58] = Z, j[59] = C) : C = j[59], j[60] !== K || j[61] !== e || j[62] !== B || j[63] !== J || j[64] !== Y || j[65] !== N || j[66] !== W || j[67] !== U ? (O = null == e || null != K && null != U && (!N || "enabled" === Y) || null == B && (J.isError || J.isSuccess && null == J.data || null != W && !(0, c.u)(W)), j[60] = K, j[61] = e, j[62] = B, j[63] = J, j[64] = Y, j[65] = N, j[66] = W, j[67] = U, j[68] = O) : O = j[68], j[69] !== ea || j[70] !== X || j[71] !== eo || j[72] !== eu || j[73] !== C || j[74] !== O ? (P = {
                    hasGoal: ea,
                    isLanguageLearning: X,
                    isOpening: eo,
                    open: eu,
                    dotAttachment: C,
                    useDetailLabel: O
                }, j[69] = ea, j[70] = X, j[71] = eo, j[72] = eu, j[73] = C, j[74] = O, j[75] = P) : P = j[75], P
            }
        })
    }),
    QxH2: (function(e, t, i) {
        var n = i("SKhr");
        i.d(t, {}, {
            a: function(e) {
                let {
                    container: t,
                    matchId: i,
                    includeShadowRoots: s,
                    scrollBehavior: l = "smooth",
                    signal: r,
                    timeoutMs: a = 1500
                } = e, o = () => (0, n.g)({
                    container: t,
                    matchId: i,
                    includeShadowRoots: s
                });
                if (r?.aborted) return Promise.resolve();
                let c = o();
                return null != c ? (c.scrollIntoView({
                    block: "center",
                    behavior: l
                }), Promise.resolve()) : new Promise(e => {
                    let t = null,
                        i = null;

                    function n(n) {
                        null != t && (window.cancelAnimationFrame(t), t = null), null != i && (window.clearTimeout(i), i = null), r?.removeEventListener("abort", s), null != n && n.scrollIntoView({
                            block: "center",
                            behavior: l
                        }), e()
                    }

                    function s() {
                        n()
                    }
                    r?.addEventListener("abort", s, {
                        once: !0
                    }), i = window.setTimeout(() => {
                        n()
                    }, a), t = window.requestAnimationFrame(function e() {
                        if (r?.aborted) return void n();
                        let i = o();
                        null != i ? n(i) : t = window.requestAnimationFrame(e)
                    })
                })
            },
            b: function() {
                return new Promise(e => {
                    window.requestAnimationFrame(() => {
                        window.requestAnimationFrame(() => {
                            e()
                        })
                    })
                })
            }
        })
    }),
    p1kG: (function(e, t, i) {
        var n = i("ABep"),
            s = i("QosV"),
            l = i("oyxz"),
            r = i("ygO2"),
            a = i("JNtf"),
            o = i("mUDD"),
            c = i("b8ru"),
            d = i("HgLj");

        function u() {
            (0, c.a)()
        }
        i.d(t, {}, {
            a: function(e) {
                let t, i, c, p, h, m, f = (0, s.c)(13),
                    {
                        image: y,
                        onClose: g,
                        onCloseAutoFocus: v,
                        onOpenAutoFocus: _
                    } = e;
                return f[0] !== g ? (t = e => !e && g(), f[0] = g, f[1] = t) : t = f[1], f[2] !== y || f[3] !== _ ? (i = e => {
                    (0, d.a)(y.imageRef)(null), _?.(e)
                }, f[2] = y, f[3] = _, f[4] = i) : i = f[4], f[5] !== v || f[6] !== i ? (c = {
                    onCloseAutoFocus: v,
                    onOpenAutoFocus: i
                }, f[5] = v, f[6] = i, f[7] = c) : c = f[7], f[8] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, n.jsx)(o.e, {
                    children: (0, n.jsx)(o.d, {
                        title: (0, n.jsx)(a.e, {
                            children: (0, n.jsx)(l.a, {
                                id: "codex.imagePreview.loadError.title",
                                defaultMessage: "Couldn’t open image preview",
                                description: "Title of the recovery dialog shown when the image preview interface fails to download. The user can close it or reload the app."
                            })
                        })
                    })
                }), f[8] = p) : p = f[8], f[9] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, n.jsxs)(o.b, {
                    children: [p, (0, n.jsx)(o.c, {
                        children: (0, n.jsx)(r.a, {
                            onClick: u,
                            children: (0, n.jsx)(l.a, {
                                id: "codex.imagePreview.loadError.reload",
                                defaultMessage: "Reload",
                                description: "Button in the image preview load error dialog that saves pending drafts and reloads the app so the user can open the image again."
                            })
                        })
                    })]
                }), f[9] = h) : h = f[9], f[10] !== t || f[11] !== c ? (m = (0, n.jsx)(a.b, {
                    open: !0,
                    size: "compact",
                    onOpenChange: t,
                    contentProps: c,
                    children: h
                }), f[10] = t, f[11] = c, f[12] = m) : m = f[12], m
            }
        })
    }),
    cabL: (function(e, t, i) {
        var n = i("ABep"),
            s = i("QosV"),
            l = i("iTtm"),
            r = i("Wf1j"),
            a = i("E8Sp"),
            o = i("fyx9"),
            c = i("B0Wx"),
            d = i("jAnS"),
            u = i("bf6R"),
            p = i("TL6G"),
            h = i("tSEg"),
            m = i("wbP4"),
            f = i("tPd1"),
            y = i("lbOW");
        i.d(t, {}, {
            a: function(e) {
                let t, i, g, v, _, b = (0, s.c)(20),
                    {
                        automationId: R,
                        conversationId: I
                    } = e,
                    w = (0, l.y)(h.a),
                    S = (0, r.a)(),
                    x = (0, l.x)(null == I ? null : c.a, I ?? ""),
                    E = (0, y.a)(R),
                    L = E.attachment;
                b[0] !== L?.title || b[1] !== I || b[2] !== x || b[3] !== S ? (t = L?.title ?? (null == I ? S.formatMessage({
                    id: "orbit.messaging.attachedGoal.title",
                    defaultMessage: "View Goal",
                    description: "Fallback label for a saved Goal attached to a Dot message"
                }) : x), b[0] = L?.title, b[1] = I, b[2] = x, b[3] = S, b[4] = t) : t = b[4];
                let A = t;
                b[5] !== R || b[6] !== I || b[7] !== w ? (i = function() {
                    if (null == I && null == R) return;
                    let e = null != I ? (0, d.c)(I) : `${(0,o.c)()}?${new URLSearchParams({automationId:R??"",automationSource:"cloud"})}`,
                        t = w.get(f.b);
                    if (null != t) {
                        t.run(), p.c.dispatchMessage("open-in-main-window", {
                            path: e
                        });
                        return
                    }(0, a.d)(w, e)
                }, b[5] = R, b[6] = I, b[7] = w, b[8] = i) : i = b[8];
                let T = i;
                b[9] !== L ? (g = L?.emoji == null ? (0, n.jsx)(u.Hb, {
                    "aria-hidden": !0
                }) : (0, n.jsx)(m.b, {
                    emoji: L.emoji
                }), b[9] = L, b[10] = g) : g = b[10];
                let M = A ?? void 0;
                return b[11] !== E || b[12] !== T ? (v = () => E.open(T), b[11] = E, b[12] = T, b[13] = v) : v = b[13], b[14] !== E.isOpening || b[15] !== g || b[16] !== M || b[17] !== v || b[18] !== A ? (_ = (0, n.jsx)(m.a, {
                    icon: g,
                    title: M,
                    "aria-busy": E.isOpening,
                    disabled: E.isOpening,
                    onClick: v,
                    children: A
                }), b[14] = E.isOpening, b[15] = g, b[16] = M, b[17] = v, b[18] = A, b[19] = _) : _ = b[19], _
            }
        })
    }),
    QvXf: (function(e, t, i) {
        i.d(t, {
            a: () => h,
            b: () => m
        });
        var n = i("ABep"),
            s = i("on57"),
            l = i("CZAr"),
            r = i("NvEJ"),
            a = i("pxwu");
        let {
            p: o
        } = (0, r.a)({
            allowWideBlocks: !1,
            mediaComponent: void 0
        });

        function c(e) {
            let {
                children: t
            } = e;
            return (0, a.a)(t, o)
        }
        var d = i("NmJv"),
            u = i("ZWn2"),
            p = i("Lydu");
        let h = {
            h1: c,
            h2: c,
            h3: c,
            hr: () => null
        };

        function m(e, t, i) {
            let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                a = [];
            for (let t of e.flatMap(f)) {
                if ("space" === t.type || "hr" === t.type) continue;
                let e = "code" === t.type || "table" === t.type || "paragraph" === t.type && t.tokens?.some(y) || "codexDirective" === t.type && t.name === l.e,
                    i = a.at(-1);
                e || null == i || i.standalone ? a.push({
                    standalone: e,
                    tokens: [t]
                }) : i.tokens.push(t)
            }
            return null != i && (a.at(-1)?.standalone ?? !0) && a.push({
                standalone: !1,
                tokens: []
            }), a.map((e, l) => {
                let o = t(e.tokens),
                    c = null != i && l === a.length - 1,
                    h = e.standalone ? (0, n.jsx)(d.a, {
                        children: (0, n.jsx)("div", {
                            className: "[&>*:first-child]:mt-0 [&>*:last-child]:mb-0",
                            "data-markdown-copy": "contents",
                            children: o
                        })
                    }, l) : (0, n.jsxs)("div", {
                        className: (0, s.b)("min-w-0", u.a.compactMessageBubble, c && u.a.compactMessageBubbleWithAttachment),
                        "data-markdown-copy": "contents",
                        children: [e.tokens.length > 0 ? (0, n.jsx)("div", {
                            className: (0, s.b)(p.a.MarkdownRoot, "[&>*:first-child]:mt-0 [&>*:last-child]:mb-0 [&>p:last-child]:inline", c && u.a.compactMessageBody),
                            "data-markdown-copy": "contents",
                            "data-markdown-text-style": "assistant-message",
                            children: o
                        }) : null, c ? (0, n.jsx)("div", {
                            className: (0, s.b)(e.tokens.length > 0 && "border-t-2 border-surface"),
                            "data-markdown-copy": "contents",
                            children: i
                        }) : null]
                    }, l);
                return null != r && l === a.length - 1 ? (0, n.jsxs)("div", {
                    className: (0, s.b)("flex max-w-full items-center gap-2", e.standalone && "w-full"),
                    children: [h, r]
                }, l) : h
            })
        }

        function f(e) {
            let t = "paragraph" === e.type ? e.tokens : void 0;
            if (!t?.some(y)) return [e];
            let i = [],
                n = null,
                s = !1;
            for (let e of t) {
                let t = "br" === e.type || 0 === e.raw.trim().length;
                if (t && null == n) continue;
                let l = y(e);
                null != n && (t || l === s) || (n = {
                    type: "paragraph",
                    raw: "",
                    text: "",
                    tokens: []
                }, s = l, i.push(n)), n.raw += e.raw, n.text += e.raw, n.tokens.push(e)
            }
            return i
        }

        function y(e) {
            return "image" === e.type || "link" === e.type && e.tokens?.length === 1 && e.tokens[0]?.type === "image"
        }
    }),
    wbP4: (function(e, t, i) {
        var n = i("ABep"),
            s = i("QosV"),
            l = i("on57"),
            r = i("ygO2"),
            a = i("bf6R");
        i.d(t, {}, {
            a: function(e) {
                let t, i, o, c, d, u, p, h, m = (0, s.c)(16);
                m[0] !== e ? ({
                    icon: o,
                    accessory: t,
                    children: i,
                    ...c
                } = e, m[0] = e, m[1] = t, m[2] = i, m[3] = o, m[4] = c) : (t = m[1], i = m[2], o = m[3], c = m[4]);
                let f = !0 === c["aria-busy"] && "loading-shimmer-pure-text";
                return m[5] !== f ? (d = (0, l.b)("min-w-0 truncate", f), m[5] = f, m[6] = d) : d = m[6], m[7] !== i || m[8] !== d ? (u = (0, n.jsx)("span", {
                    className: d,
                    children: i
                }), m[7] = i, m[8] = d, m[9] = u) : u = m[9], m[10] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, n.jsx)(a.ec, {
                    className: "text-tertiary"
                }), m[10] = p) : p = m[10], m[11] !== t || m[12] !== o || m[13] !== c || m[14] !== u ? (h = (0, n.jsxs)(r.a, {
                    ...c,
                    className: "w-fit max-w-full text-start",
                    allowShrink: !0,
                    color: "outlineSurface",
                    size: "messageChip",
                    radius: "full",
                    children: [o, u, t, p]
                }), m[11] = t, m[12] = o, m[13] = c, m[14] = u, m[15] = h) : h = m[15], h
            },
            b: function(e) {
                let t, i = (0, s.c)(2),
                    {
                        emoji: l
                    } = e;
                return i[0] !== l ? (t = (0, n.jsx)("span", {
                    "aria-hidden": !0,
                    className: "flex size-5 shrink-0 items-center justify-center p-0.5 leading-none",
                    children: l
                }), i[0] = l, i[1] = t) : t = i[1], t
            }
        })
    }),
    Lm6t: (function(e, t, i) {
        var n = i("ABep"),
            s = i("QosV"),
            l = i("iTtm"),
            r = i("oyxz"),
            a = i("ygO2"),
            o = i("bf6R"),
            c = i("tSEg"),
            d = i("hL0E");
        i.d(t, {}, {
            a: function(e) {
                let t, i, u, p, h, m = (0, s.c)(8),
                    {
                        conversationId: f,
                        handoff: y,
                        orbitId: g
                    } = e,
                    v = (0, l.y)(c.a),
                    _ = (0, l.z)(c.j),
                    b = (0, l.z)(d.b),
                    R = "local-thread" === v.value.routeKind && v.value.conversationId === f,
                    I = null != g && "other" === v.value.routeKind && v.value.orbitId === g;
                return !_ && b && (R || I) ? (m[0] !== y || m[1] !== v ? (t = () => {
                    (0, d.d)(v, void 0, {
                        handoff: {
                            ...y,
                            requestId: crypto.randomUUID()
                        }
                    })
                }, m[0] = y, m[1] = v, m[2] = t) : t = m[2], m[3] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, n.jsx)(o.Hc, {}), m[3] = i) : i = m[3], m[4] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, n.jsx)("span", {
                    className: "flex-1 text-start wrap-anywhere whitespace-normal",
                    children: (0, n.jsx)(r.a, {
                        id: "restricted.aeon.computer.handoffOpen",
                        defaultMessage: "Open computer",
                        description: "Opens the dot's shared computer at the offered browser tab. Taking control is a separate action."
                    })
                }), p = (0, n.jsx)(o.ec, {}), m[4] = u, m[5] = p) : (u = m[4], p = m[5]), m[6] !== t ? (h = (0, n.jsxs)(a.a, {
                    className: "w-fit max-w-full gap-2",
                    color: "secondary",
                    radius: "full",
                    size: "large",
                    onClick: t,
                    children: [i, u, p]
                }), m[6] = t, m[7] = h) : h = m[7], h) : null
            }
        })
    }),
    NyQh: (function(e, t, i) {
        i.d(t, {}, {
            a: function(e) {
                let t = [],
                    i = new Map;
                for (let n of e) {
                    let {
                        automationId: e
                    } = n;
                    if (null == e) {
                        t.push(n);
                        continue
                    }
                    let s = i.get(e);
                    null == s ? (i.set(e, t.length), t.push(n)) : null == t[s].conversationId && null != n.conversationId && (t[s] = n)
                }
                return t
            }
        })
    }),
    NNZM: (function(e, t, i) {
        var n = i("ABep"),
            s = i("QosV"),
            l = i("zd8w"),
            r = i("P2D5"),
            a = i("dJBt");
        let o = () => "visible" === document.visibilityState,
            c = () => !1;

        function d(e) {
            let t, i = (0, s.c)(3),
                r = (0, l.useSyncExternalStore)(p, o, c);
            return i[0] !== e || i[1] !== r ? (t = r && "u" > typeof IntersectionObserver ? (0, n.jsx)(u, {
                ...e
            }) : null, i[0] = e, i[1] = r, i[2] = t) : t = i[2], t
        }

        function u(e) {
            let t, i, o, c = (0, s.c)(7),
                {
                    messageId: d,
                    performance: u,
                    rowRef: p
                } = e,
                [h, m] = (0, l.useState)(!1);
            return c[0] !== p ? (t = () => {
                let e, t, i = p.current;
                if (null == i) return;
                let n = !1,
                    s = !1,
                    l = () => {
                        if (null != e && (cancelAnimationFrame(e), e = void 0), n) return;
                        let t = s && (0, r.b)(i);
                        m(t), s && !t && (e = requestAnimationFrame(l))
                    },
                    a = new IntersectionObserver(e => {
                        if (!n)
                            for (let r of e) {
                                if (r.target !== i) continue;
                                let e = r.boundingClientRect.width > 0 && r.boundingClientRect.height > 0;
                                if (s = e && r.isIntersecting && r.intersectionRatio > 0 && r.intersectionRect.width > 0 && r.intersectionRect.height > 0, l(), e) t?.disconnect(), t = void 0;
                                else if (null == t && "u" > typeof ResizeObserver) {
                                    let e = new ResizeObserver(s => {
                                        !n && t === e && s.some(e => e.target === i && e.contentRect.width > 0 && e.contentRect.height > 0) && (t?.disconnect(), t = void 0, a.unobserve(i), a.observe(i))
                                    });
                                    t = e, e.observe(i)
                                }
                            }
                    }, {
                        rootMargin: "0px",
                        threshold: [0, Number.EPSILON]
                    });
                return i.addEventListener(r.a, l), a.observe(i), () => {
                    n = !0, a.disconnect(), t?.disconnect(), i.removeEventListener(r.a, l), null != e && cancelAnimationFrame(e)
                }
            }, i = [p], c[0] = p, c[1] = t, c[2] = i) : (t = c[1], i = c[2]), (0, l.useEffect)(t, i), c[3] !== h || c[4] !== d || c[5] !== u ? (o = h ? (0, n.jsx)(a.a, {
                onPaint: () => u.rendered(d),
                requireVisibleAtPaint: !0
            }) : null, c[3] = h, c[4] = d, c[5] = u, c[6] = o) : o = c[6], o
        }

        function p(e) {
            return document.addEventListener("visibilitychange", e), () => document.removeEventListener("visibilitychange", e)
        }
        i.d(t, {}, {
            a: function(e) {
                let t, i, r, a = (0, s.c)(10),
                    {
                        messageId: o,
                        performance: u
                    } = e;
                a[0] !== o || a[1] !== u ? (t = e => u.subscribeLifecycleReply(o, e), a[0] = o, a[1] = u, a[2] = t) : t = a[2];
                let p = t;
                a[3] !== o || a[4] !== u ? (i = () => u.hasPendingLifecycleReply(o), a[3] = o, a[4] = u, a[5] = i) : i = a[5];
                let h = i,
                    m = (0, l.useSyncExternalStore)(p, h, c);
                return a[6] !== o || a[7] !== m || a[8] !== e ? (r = m ? (0, n.jsx)(d, {
                    ...e
                }, o) : null, a[6] = o, a[7] = m, a[8] = e, a[9] = r) : r = a[9], r
            }
        })
    }),
    uWtN: (function(e, t, i) {
        i.d(t, {
            a: () => I
        });
        var n = i("iTtm"),
            s = i("PFjh"),
            l = i("Cslg"),
            r = i("IYFr"),
            a = i("OWtl"),
            o = i("fVOX");
        let c = {
            $type: "protobuf_analytics_events.v1.DotMessageLifecycleEvent"
        };
        i("ReGc");
        var d = i("yGJW"),
            u = i("SClg"),
            p = i("w5lF"),
            h = i("v9CB"),
            m = i("pwwq"),
            f = i("WFY2");
        class y {
            roomId;
            options;
            sends = new Map;
            inputs = new Map;
            replies = new Map;
            lifecycleSends = new Map;
            lifecycleReplies = new Map;
            lifecycleListeners = new Map;
            operations = new Set;
            wallOrigin = Date.now() - performance.now();
            views = new Map;
            reactionSenderId;
            roomKind = "unknown";
            visibilityChanged = () => {
                "visible" !== document.visibilityState && this.interruptObservations()
            };
            constructor(e, t = {}) {
                this.roomId = e, this.options = t
            }
            setActive(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this,
                    i = this.active;
                this.views.set(t, e), this.active || this.interruptObservations(), i !== this.active && this.notifyLifecycleReplies()
            }
            release(e) {
                let t = this.active;
                this.views.delete(e), this.active || this.interruptObservations(), t !== this.active && this.notifyLifecycleReplies()
            }
            setReactionSender(e) {
                if (this.reactionSenderId !== e) {
                    for (let t of (this.reactionSenderId = e, this.replies.values())) this.emitLifecycleReply(t);
                    for (let e of this.lifecycleReplies.values()) this.emitLifecycleReply(e);
                    this.notifyLifecycleReplies()
                }
            }
            setRoomKind(e) {
                this.roomKind = e
            }
            get idle() {
                return 0 === this.views.size && 0 === this.sends.size && 0 === this.lifecycleSends.size && 0 === this.operations.size
            }
            get active() {
                for (let e of this.views.values())
                    if (e) return !0;
                return !1
            }
            startSend(e, t) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "messages",
                    n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    s = this.sends.get(e);
                if (n || null == s || this.finish(s, "aborted", performance.now()), !n && this.sends.size >= 64) {
                    let e = this.sends.values().next().value;
                    null != e && this.finish(e, "aborted", performance.now())
                }
                let l = performance.now(),
                    r = void 0 === t ? void 0 : g(t),
                    a = (n ? s?.measurementId : void 0) ?? crypto.randomUUID(),
                    o = (n ? s?.roomKind : void 0) ?? this.roomKind,
                    c = {
                        client_request_id: e,
                        measurement_id: a,
                        room_kind: o,
                        is_retry: n,
                        input_text_characters: r,
                        entry_point: i
                    },
                    d = n ? s?.trace ?? null : (0, m.f)({
                        name: "orbit.messaging.client.message_flow",
                        attributes: v(this.roomId, this.options.surface ?? "unknown", c)
                    }),
                    u = this.operation("client.http_send", c, d?.trace);
                if (n) null != s && (s.finishHttp = u.finish);
                else {
                    let t = {
                        clientRequestId: e,
                        measurementId: a,
                        roomKind: o,
                        entryPoint: i,
                        inputTextCharacters: r,
                        startedAt: l,
                        firstResponseRecorded: !1,
                        interruptedAt: this.active && "visible" === document.visibilityState ? void 0 : l,
                        trace: d,
                        finishHttp: u.finish,
                        timeout: setTimeout(() => {
                            this.finish(t, "timeout", performance.now()), this.expireLifecycle(t)
                        }, 3e5)
                    };
                    if (s = t, this.sends.set(e, s), this.tracksLifecycle(s)) {
                        let t = this.lifecycleSends.get(e);
                        if (null != t && this.expireLifecycle(t), this.lifecycleSends.size >= 64) {
                            let e = this.lifecycleSends.values().next().value;
                            null != e && this.expireLifecycle(e)
                        }
                        this.lifecycleSends.set(e, s)
                    }
                    document.addEventListener("visibilitychange", this.visibilityChanged), this.options.onPendingChange?.(!0), this.emit("client.send", "started", c, l, d?.trace), this.emitLifecycle(s, "DOT_MESSAGE_LIFECYCLE_EVENT_TYPE_SEND_MESSAGE", {
                        at: l,
                        active: this.active,
                        visible: "visible" === document.visibilityState
                    }), this.notifyLifecycleReplies()
                }
                return {
                    headers: u.headers,
                    responseHeaders: e => {
                        if (this.operations.has(u.finish)) try {
                            this.emit("client.http_response_headers", "success", {
                                ...c,
                                server_request_id: p.j.parse(e.get("x-oai-request-id"))
                            }, performance.now())
                        } catch {}
                    },
                    accepted: t => {
                        u.finish(void 0, {
                            message_id: t
                        }), null != s && this.sends.get(e) === s && s.finishHttp === u.finish && this.associateInput(s, t)
                    },
                    failed: t => {
                        if (u.finish(t), null == s || this.sends.get(e) !== s || s.finishHttp !== u.finish) return;
                        let i = b(t);
                        n || "delivery_unknown" === i || this.finish(s, i, performance.now())
                    }
                }
            }
            startRead(e) {
                let t = [...this.replies.values()].filter(e => null != e.send && null == e.availableAt),
                    i = 1 === t.length ? t[0] : void 0;
                return this.operation("history" === e ? "client.history_fetch" : "client.room_fetch", null == i ? {} : {
                    ..._(i.identity),
                    client_request_id: i.send?.clientRequestId,
                    measurement_id: i.send?.measurementId,
                    room_kind: i.send?.roomKind,
                    input_text_characters: i.send?.inputTextCharacters,
                    entry_point: i.send?.entryPoint
                }, i?.send?.trace?.trace)
            }
            received(e, t) {
                let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (e !== this.roomId) return;
                let n = performance.now(),
                    s = t.clientRequestId ? this.sends.get(t.clientRequestId) : void 0;
                if (t.self && null != s) {
                    this.emit("client.pubsub_received", "success", {
                        client_request_id: s.clientRequestId,
                        measurement_id: s.measurementId,
                        room_kind: s.roomKind,
                        input_text_characters: s.inputTextCharacters,
                        entry_point: s.entryPoint,
                        message_id: t.messageId
                    }, n, s.trace?.trace), this.associateInput(s, t.messageId);
                    return
                }
                let l = this.reply(t);
                if (null == l) return void this.emit("client.pubsub_received", "unmatched", _(t), n);
                if (null != l.receivedAt) {
                    this.emitLifecycleReply(l), this.emit("client.pubsub_received", "duplicate", {
                        ..._(t),
                        measurement_id: l.send?.measurementId,
                        room_kind: l.send?.roomKind
                    }, n);
                    return
                }
                l.receivedAt = this.moment(), this.recordLifecycleReceipt(l, l.receivedAt, i ? "DOT_MESSAGE_LIFECYCLE_DELIVERY_SOURCE_HISTORY" : "DOT_MESSAGE_LIFECYCLE_DELIVERY_SOURCE_LIVE_UPDATE"), null == l.send && this.emit("client.pubsub_received", "unmatched", _(t), n), this.emitReply(l)
            }
            projected(e, t, i) {
                if (e.roomId !== this.roomId || "" !== e.deliveryState) return;
                let n = this.sends.get(e.requestId);
                if (e.self && null != n) return void this.associateInput(n, e.id);
                let s = {
                        messageId: e.id,
                        clientRequestId: e.requestId,
                        replyToMessageId: e.replyTo?.messageId,
                        self: e.self,
                        role: e.role,
                        accountUserId: e.senderId
                    },
                    l = this.reply(s);
                null != l && (l.identity.role = s.role, l.identity.accountUserId = s.accountUserId, l.availableAt = l.availableAt ?? this.moment(), l.lifecycleDeleted = !!e.deletedAt, l.lifecycleDeleted || this.recordLifecycleReceipt(l, this.moment(), i), null != l.textCharacters || void 0 === t || e.deletedAt || (l.textCharacters = g(t ?? "")), this.emitReply(l), this.notifyLifecycleReply(e.id))
            }
            committed(e) {
                let t = this.replies.get(e);
                null != t && (t.committedAt = t.committedAt ?? this.moment(), this.emitReply(t))
            }
            observeRenderedMessage(e, t) {
                let i = this.reply({
                    messageId: e,
                    self: !1
                }, !0);
                null != i && (i.availableAt = i.availableAt ?? this.moment(), this.recordLifecycleReceipt(i, i.availableAt), null == i.textCharacters && void 0 !== t && (i.textCharacters = g(t ?? "")), this.emitReply(i))
            }
            hasPendingReply(e) {
                return this.replies.has(e)
            }
            hasLifecycleCandidate(e) {
                let t = this.lifecycleReplies.get(e);
                return null != t && null == t.lifecycleRenderedAt
            }
            hasPendingLifecycleReply(e) {
                if (!this.active) return !1;
                let t = this.lifecycleReplies.get(e);
                if (null == t || null != t.lifecycleRenderedAt || t.lifecycleDeleted || null != t.identity.role && "user" !== t.identity.role || null != this.reactionSenderId && null != t.identity.accountUserId && t.identity.accountUserId !== this.reactionSenderId) return !1;
                for (let e of null == t.send ? this.lifecycleSends.values() : [t.send])
                    if (this.lifecycleSends.get(e.clientRequestId) === e && (null != t.send || null == t.identity.replyToMessageId || null == e.messageId) && performance.now() - e.startedAt < 3e5) return !0;
                return !1
            }
            subscribeLifecycleReply(e, t) {
                if (!this.hasLifecycleCandidate(e)) return () => {};
                let i = this.lifecycleListeners.get(e);
                return null == i && (i = new Set, this.lifecycleListeners.set(e, i)), i.add(t), () => {
                    i.delete(t), 0 === i.size && this.lifecycleListeners.get(e) === i && this.lifecycleListeners.delete(e)
                }
            }
            rendered(e) {
                if (!this.hasPendingLifecycleReply(e) || "visible" !== document.visibilityState) return;
                let t = this.lifecycleReplies.get(e);
                null != t && (t.lifecycleRenderedAt = this.moment(), this.emitLifecycleReply(t), this.notifyLifecycleReply(e))
            }
            hasPendingReaction(e) {
                let t = this.inputs.get(e.id),
                    i = this.reactionSenderId;
                return e.roomId === this.roomId && e.self && !e.deletedAt && t?.entryPoint === "messages" && !t.firstResponseRecorded && null != i && e.reactions.some(e => e.accountUserIds.includes(i))
            }
            reactionPaintOpportunity(e) {
                if (!this.hasPendingReaction(e) || !this.active || "visible" !== document.visibilityState) return;
                let t = this.inputs.get(e.id);
                null != t && this.firstResponse(t, "success", performance.now(), {
                    response_type: "reaction"
                })
            }
            paintOpportunity(e) {
                let t = this.replies.get(e);
                null != t && this.active && "visible" === document.visibilityState && (t.paintedAt = t.paintedAt ?? this.moment(), this.emitReply(t))
            }
            paintPreviewOpportunity(e) {
                let t = this.replies.get(e);
                null != t && "visible" === document.visibilityState && (t.paintedAt = t.paintedAt ?? this.moment(), this.emitReply(t))
            }
            subscription(e) {
                this.emit("client.subscription", e ? "success" : "aborted", {}, performance.now())
            }
            dispose() {
                this.views.clear();
                let e = new DOMException("Messaging session closed", "AbortError");
                for (let t of this.operations) t(e);
                for (let e of this.sends.values()) this.finish(e, "aborted", performance.now());
                for (let e of (this.inputs.clear(), this.replies.clear(), this.lifecycleSends.values())) this.expireLifecycle(e);
                this.lifecycleReplies.clear(), this.notifyLifecycleReplies()
            }
            associateInput(e, t) {
                for (let i of (e.messageId = t, this.inputs.set(t, e), this.replies.values())) i.identity.replyToMessageId === t && (i.send = e, this.retainLifecycleReply(i), this.emitReply(i));
                for (let i of this.lifecycleReplies.values()) i.identity.replyToMessageId === t && (i.send = e, this.emitLifecycleReply(i));
                this.notifyLifecycleReplies()
            }
            reply(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (e.self || !e.replyToMessageId && !t || 0 === this.sends.size && 0 === this.lifecycleSends.size) return;
                let i = this.replies.get(e.messageId) ?? this.lifecycleReplies.get(e.messageId);
                if (null != i) return i.identity.role = e.role ?? i.identity.role, i.identity.accountUserId = e.accountUserId ?? i.identity.accountUserId, !i.identity.replyToMessageId && e.replyToMessageId && (i.identity = e, i.send = this.findSend(e.replyToMessageId)), this.retainLifecycleReply(i), this.notifyLifecycleReply(e.messageId), i;
                if (this.replies.size >= 64) {
                    let e = this.replies.keys().next().value;
                    null != e && (this.replies.delete(e), this.notifyLifecycleReply(e))
                }
                let n = {
                    identity: e,
                    send: e.replyToMessageId ? this.findSend(e.replyToMessageId) : void 0,
                    emitted: new Set
                };
                return this.sends.size > 0 && this.replies.set(e.messageId, n), this.lifecycleSends.size > 0 && this.retainLifecycleReply(n), this.notifyLifecycleReply(e.messageId), n
            }
            emitReply(e) {
                this.emitLifecycleReply(e);
                let t = e.send;
                if (null == t || this.sends.get(t.clientRequestId) !== t) return;
                let i = {
                    ..._(e.identity),
                    client_request_id: t.clientRequestId,
                    measurement_id: t.measurementId,
                    room_kind: t.roomKind,
                    input_text_characters: t.inputTextCharacters,
                    reply_text_characters: e.textCharacters,
                    entry_point: t.entryPoint
                };
                for (let [n, s] of [
                        ["client.pubsub_received", e.receivedAt],
                        ["client.message_available", e.availableAt],
                        ["client.message_committed", e.committedAt],
                        ["client.message_paint_opportunity", e.paintedAt]
                    ]) null == s || e.emitted.has(n) || (e.emitted.add(n), this.emit(n, "success", i, s.at, t.trace?.trace, t.startedAt, s));
                null != e.paintedAt && null != e.committedAt && this.finish(t, "success", e.paintedAt.at, i, e.paintedAt)
            }
            finish(e, t, i) {
                let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    s = arguments.length > 4 ? arguments[4] : void 0;
                if (this.sends.get(e.clientRequestId) === e) {
                    for (let [l, r] of("success" !== t && this.expireLifecycle(e), this.lifecycleSends.get(e.clientRequestId) !== e && clearTimeout(e.timeout), "success" !== t && e.finishHttp(new DOMException("Message observation ended", "AbortError")), this.firstResponse(e, t, i, {
                            ...n,
                            response_type: "success" === t ? "reply" : void 0
                        }, s), this.emit("client.round_trip", t, {
                            measurement_id: e.measurementId,
                            room_kind: e.roomKind,
                            client_request_id: e.clientRequestId,
                            input_text_characters: e.inputTextCharacters,
                            entry_point: e.entryPoint,
                            message_id: e.messageId,
                            observation_interrupted: null != e.interruptedAt && e.interruptedAt <= i,
                            ...n
                        }, i, e.trace?.trace, e.startedAt, s), e.trace?.finish(void 0, {
                            outcome: "success" === t || "aborted" === t ? t : "failure",
                            reason: "success" === t ? null : t
                        }), this.sends.delete(e.clientRequestId), null != e.messageId && this.inputs.delete(e.messageId), this.replies)) r.send === e && this.replies.delete(l);
                    0 === this.sends.size && (document.removeEventListener("visibilitychange", this.visibilityChanged), this.replies.clear(), 0 === this.lifecycleSends.size && this.options.onPendingChange?.(!1)), this.notifyLifecycleReplies()
                }
            }
            tracksLifecycle(e) {
                return null != this.options.onLifecycle && "orbit" === this.options.surface && "dot" === e.roomKind
            }
            recordLifecycleReceipt(e, t, i) {
                null != this.options.onLifecycle && null == e.lifecycleReceipt && (e.lifecycleReceipt = {
                    moment: t,
                    source: i
                })
            }
            emitLifecycleReply(e) {
                let t = e.send;
                !(null == t || !this.tracksLifecycle(t) || !this.isLifecycleReply(e) || performance.now() - t.startedAt >= 3e5) && this.lifecycleSends.get(t.clientRequestId) === t && (null == e.lifecycleReceipt || e.lifecycleReceivedEmitted || (e.lifecycleReceivedEmitted = !0, this.emitLifecycle(t, "DOT_MESSAGE_LIFECYCLE_EVENT_TYPE_RECEIVE_MESSAGE", e.lifecycleReceipt.moment, e)), null == e.lifecycleRenderedAt || e.lifecycleRenderedEmitted || (e.lifecycleRenderedEmitted = !0, this.emitLifecycle(t, "DOT_MESSAGE_LIFECYCLE_EVENT_TYPE_RENDER_MESSAGE", e.lifecycleRenderedAt, e)))
            }
            emitLifecycle(e, t, i, n) {
                this.tracksLifecycle(e) && this.options.onLifecycle?.({
                    type: t,
                    observationId: e.measurementId,
                    roomId: this.roomId,
                    clientRequestId: e.clientRequestId,
                    inputMessageId: null == n ? void 0 : e.messageId,
                    replyMessageId: n?.identity.messageId,
                    elapsedMs: String(Math.max(0, Math.ceil(i.at - e.startedAt))),
                    isAppVisible: i.visible,
                    isActiveRoom: i.active,
                    deliverySource: n?.lifecycleReceipt?.source
                }, this.wallOrigin + i.at)
            }
            isLifecycleReply(e) {
                return !e.lifecycleDeleted && "user" === e.identity.role && null != this.reactionSenderId && e.identity.accountUserId === this.reactionSenderId
            }
            retainLifecycleReply(e) {
                if (0 !== this.lifecycleSends.size && (null == e.send || this.lifecycleSends.get(e.send.clientRequestId) === e.send) && (null != e.send || null == e.identity.replyToMessageId || [...this.lifecycleSends.values()].some(e => null == e.messageId)) && !this.lifecycleReplies.has(e.identity.messageId)) {
                    if (this.lifecycleReplies.size >= 64) {
                        let t = [...this.lifecycleReplies.values()].find(e => null == e.send);
                        if (null == t && null == e.send) return;
                        let i = t ?? this.lifecycleReplies.values().next().value;
                        null != i && (this.lifecycleReplies.delete(i.identity.messageId), null != i.send && this.expireLifecycle(i.send), this.notifyLifecycleReply(i.identity.messageId))
                    }
                    this.lifecycleSends.size > 0 && (null == e.send || this.lifecycleSends.get(e.send.clientRequestId) === e.send) && this.lifecycleReplies.set(e.identity.messageId, e)
                }
            }
            findSend(e) {
                let t = this.inputs.get(e);
                if (null != t) return t;
                for (let t of this.lifecycleSends.values())
                    if (t.messageId === e) return t
            }
            expireLifecycle(e) {
                if (this.lifecycleSends.get(e.clientRequestId) === e) {
                    for (let [t, i] of(this.lifecycleSends.delete(e.clientRequestId), this.lifecycleReplies))(i.send === e || 0 === this.lifecycleSends.size) && (this.lifecycleReplies.delete(t), this.notifyLifecycleReply(t));
                    this.sends.get(e.clientRequestId) !== e && clearTimeout(e.timeout), 0 === this.sends.size && 0 === this.lifecycleSends.size && this.options.onPendingChange?.(!1)
                }
            }
            notifyLifecycleReply(e) {
                for (let t of this.lifecycleListeners.get(e) ?? []) t();
                this.hasLifecycleCandidate(e) || this.lifecycleListeners.delete(e)
            }
            notifyLifecycleReplies() {
                for (let e of this.lifecycleListeners.keys()) this.notifyLifecycleReply(e)
            }
            firstResponse(e, t, i, n, s) {
                "messages" !== e.entryPoint || e.firstResponseRecorded || (e.firstResponseRecorded = !0, this.emit("client.first_response", t, {
                    measurement_id: e.measurementId,
                    room_kind: e.roomKind,
                    client_request_id: e.clientRequestId,
                    message_id: e.messageId,
                    input_text_characters: e.inputTextCharacters,
                    entry_point: e.entryPoint,
                    observation_interrupted: null != e.interruptedAt && e.interruptedAt <= i,
                    ...n
                }, i, e.trace?.trace, e.startedAt, s))
            }
            interruptObservations() {
                let e = performance.now();
                for (let t of this.sends.values()) t.interruptedAt = t.interruptedAt ?? e
            }
            operation(e, t, i) {
                var n = this;
                this.operations.size >= 64 && this.operations.values().next().value?.(new DOMException("Message observation capacity exceeded", "AbortError"));
                let s = performance.now(),
                    l = (0, m.f)({
                        name: `orbit.messaging.${e}`,
                        attributes: v(this.roomId, this.options.surface ?? "unknown", t),
                        trace: i
                    }),
                    r = {
                        ...t,
                        trace_id: l?.trace.traceparent.split("-")[1]
                    };
                this.emit(e, "started", r, s);
                let a = function(t) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (!n.operations.delete(a)) return;
                        clearTimeout(o);
                        let c = null == t ? "success" : b(t);
                        n.emit(e, c, {
                            ...r,
                            ...i
                        }, performance.now(), void 0, s), l?.finish(t)
                    },
                    o = setTimeout(() => {
                        a(new DOMException("Message observation timed out", "TimeoutError"))
                    }, 3e5);
                this.operations.add(a);
                let c = {};
                return null != l && (c.traceparent = l.trace.traceparent, null != l.trace.tracestate && (c.tracestate = l.trace.tracestate)), {
                    headers: c,
                    finish: a
                }
            }
            emit(e, t, i, n, s, l, r) {
                let a = null == l ? void 0 : Math.max(0, n - l),
                    o = "instant";
                null != l && (o = "client.round_trip" === e || "client.first_response" === e || "client.http_send" === e || "client.history_fetch" === e || "client.room_fetch" === e ? "duration" : "elapsed_since_send");
                let c = {
                        event: "orbit.messaging.stage",
                        surface: this.options.surface ?? "unknown",
                        stage: e,
                        outcome: t,
                        durationMs: a,
                        measurement: o,
                        clientTimestampMs: this.wallOrigin + n,
                        sessionActive: r?.active ?? this.active,
                        documentVisible: r?.visible ?? "visible" === document.visibilityState,
                        inputTextCharacters: i.input_text_characters,
                        replyTextCharacters: i.reply_text_characters,
                        entryPoint: i.entry_point,
                        responseType: i.response_type,
                        observationInterrupted: i.observation_interrupted,
                        measurementId: i.measurement_id,
                        serverRequestId: i.server_request_id,
                        roomKind: i.room_kind ?? this.roomKind,
                        isRetry: i.is_retry
                    },
                    d = v(this.roomId, c.surface, {
                        ...i,
                        trace_id: s?.traceparent.split("-")[1] ?? i.trace_id
                    });
                f.a.info("Orbit messaging stage", {
                    safe: c,
                    sensitive: {
                        roomId: this.roomId,
                        clientRequestId: i.client_request_id,
                        messageId: i.message_id,
                        replyToMessageId: i.reply_to_message_id,
                        traceId: d.trace_id
                    }
                }), this.options.onRecord?.(c);
                let u = `orbit.messaging.${e}`,
                    p = {
                        ...c,
                        ...d
                    };
                performance.clearMarks(u), performance.mark(u, {
                    startTime: n,
                    detail: p
                }), null != l && (performance.clearMeasures(u), performance.measure(u, {
                    start: l,
                    end: n,
                    detail: p
                })), null != s && (0, m.c)({
                    name: u,
                    trace: s,
                    attributes: {
                        stage: e,
                        outcome: t,
                        ...d
                    },
                    startTimeMs: this.wallOrigin + ("client.round_trip" === e || "client.first_response" === e ? l ?? n : n),
                    endTimeMs: this.wallOrigin + n,
                    failed: "failure" === t || "timeout" === t
                })
            }
            moment() {
                return {
                    at: performance.now(),
                    active: this.active,
                    visible: "visible" === document.visibilityState
                }
            }
        }

        function g(e) {
            let t = 0;
            for (let i of e) t++;
            return t
        }

        function v(e, t, i) {
            let n = {
                room_id: e,
                surface: t
            };
            for (let [e, t] of Object.entries(i)) null != t && (n[e] = t);
            return n
        }

        function _(e) {
            return {
                message_id: e.messageId,
                client_request_id: e.clientRequestId || void 0,
                reply_to_message_id: e.replyToMessageId || void 0
            }
        }

        function b(e) {
            if (e instanceof Error || e instanceof DOMException) {
                if ("AbortError" === e.name) return "aborted";
                if ("TimeoutError" === e.name) return "timeout"
            }
            return e instanceof h.a && e.deliveryUnknown ? "delivery_unknown" : "failure"
        }
        let R = (0, n.j)(a.a, () => new w);

        function I(e, t) {
            return e.get(R, void 0).get(e, t)
        }
        class w {
            identityKey = null;
            rooms = new Map;
            pendingRooms = new Set;
            stopWatching;
            stopSubscription;
            get(e, t) {
                let {
                    accountId: i,
                    userId: n,
                    accountUserId: a,
                    roomId: p
                } = t, h = JSON.stringify([i, n, a]);
                if (this.identityKey !== h) {
                    this.dispose(), this.identityKey = h;
                    let t = e.watch(e => {
                        let {
                            get: t
                        } = e;
                        (t(l.f) !== i || t(l.k) !== n) && this.dispose()
                    });
                    this.identityKey === h ? this.stopWatching = t : t()
                }
                let m = this.rooms.get(p);
                if (null != m) return m;
                let f = (0, s.c)(e),
                    g = new y(p, {
                        surface: "orbit",
                        onLifecycle: (t, s) => {
                            try {
                                if (e.get(l.f) !== i || e.get(l.k) !== n) return;
                                let r = (0, u.c)(),
                                    a = r?.trim();
                                (0, d.a)(e, c, {
                                    ...t,
                                    client: {
                                        type: "DOT_MESSAGE_LIFECYCLE_CLIENT_TYPE_WEB",
                                        version: "" === a || "dev" === a || "browser-dev" === a || "development" === a || "0.0.0" === a ? void 0 : a
                                    }
                                }, void 0, void 0, {
                                    expectedUserId: n,
                                    expectedAccountId: i,
                                    eventCreatedAt: new Date(s).toISOString()
                                })
                            } catch {}
                        },
                        onRecord: t => {
                            ! function(e, t) {
                                if ("client.first_response" !== t.stage && "client.round_trip" !== t.stage || "started" === t.outcome) return;
                                let i = {
                                    stage: t.stage,
                                    outcome: t.outcome,
                                    entry_point: t.entryPoint ?? "unknown",
                                    observation_interrupted: String(t.observationInterrupted ?? !1)
                                };
                                e.count("default", "orbit.messaging.client.response_result", i), null != t.durationMs && e.hist("default", "orbit.messaging.client.response_duration_ms", i, t.durationMs)
                            }(f, t), e.get(o.a).log({
                                message: "Orbit messaging stage",
                                status: "info",
                                context: {
                                    event: t.event,
                                    surface: t.surface,
                                    stage: t.stage,
                                    outcome: t.outcome,
                                    measurement: t.measurement,
                                    durationMs: t.durationMs,
                                    clientTimestampMs: t.clientTimestampMs,
                                    sessionActive: t.sessionActive,
                                    documentVisible: t.documentVisible,
                                    inputTextCharacters: t.inputTextCharacters,
                                    replyTextCharacters: t.replyTextCharacters,
                                    entryPoint: t.entryPoint,
                                    responseType: t.responseType,
                                    observationInterrupted: t.observationInterrupted,
                                    measurementId: t.measurementId,
                                    serverRequestId: t.serverRequestId,
                                    roomKind: t.roomKind,
                                    isRetry: t.isRetry
                                }
                            })
                        },
                        onPendingChange: e => {
                            this.rooms.get(p) === g && (e ? this.pendingRooms.add(p) : this.pendingRooms.delete(p), 0 === this.pendingRooms.size ? (this.stopSubscription?.(), this.stopSubscription = void 0) : null == this.stopSubscription && (this.stopSubscription = (0, r.a)({
                                accountId: i,
                                userId: n,
                                onUpdate: () => {},
                                onMessageReceived: (e, t, i) => {
                                    null != t.id && this.pendingRooms.has(e) && this.rooms.get(e)?.received(e, {
                                        messageId: t.id,
                                        clientRequestId: t.request_id,
                                        replyToMessageId: t.reply_to?.message_id,
                                        role: t.role,
                                        accountUserId: t.account_user_id,
                                        self: "user" === t.role && t.account_user_id === a
                                    }, i)
                                }
                            })))
                        }
                    }),
                    v = [...this.rooms.values()].filter(e => e.idle).length;
                for (let [e, t] of this.rooms) t.idle && v >= 64 && (t.dispose(), this.rooms.delete(e), v--);
                return this.rooms.set(p, g), g
            }
            dispose() {
                this.identityKey = null, this.stopWatching?.(), this.stopWatching = void 0, this.stopSubscription?.(), this.stopSubscription = void 0, this.pendingRooms.clear();
                let e = [...this.rooms.values()];
                for (let t of (this.rooms.clear(), e)) t.dispose()
            }
        }
    }),
    tPd1: (function(e, t, i) {
        var n = i("iTtm"),
            s = i("TL6G"),
            l = i("liTb"),
            r = i("OWtl"),
            a = i("WFY2");
        let o = (0, n.u)(r.a, !1),
            c = (0, n.u)(r.a, () => null),
            d = (0, n.u)(r.a, () => null);
        i.d(t, {}, {
            a: d,
            b: c,
            c: o,
            d: function(e, t) {
                let {
                    source: i = "request"
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                a.a.info("Opening Orbit from Mini in the desktop app"), s.c.dispatchMessage("open-in-main-window", {
                    path: (0, l.f)(t),
                    appEntryAttribution: "header" === i ? {
                        channel: "shortcut",
                        source: "shortcut"
                    } : void 0
                }), "request" === i && e.get(c)?.run()
            }
        })
    }),
    lbOW: (function(e, t, i) {
        var n = i("QosV"),
            s = i("iTtm"),
            l = i("Ro2M"),
            r = i("y9NQ"),
            a = i("tPd1");
        i.d(t, {}, {
            a: function(e) {
                let t, i = (0, n.c)(3),
                    o = (0, s.z)(null == e ? null : a.b),
                    c = (0, r.a)(null == o ? e : null, null),
                    d = (0, s.x)(c.useDetailLabel ? l.c : null, e),
                    u = c.dotAttachment ?? d ?? void 0;
                return i[0] !== c || i[1] !== u ? (t = {
                    ...c,
                    attachment: u
                }, i[0] = c, i[1] = u, i[2] = t) : t = i[2], t
            }
        })
    })
};