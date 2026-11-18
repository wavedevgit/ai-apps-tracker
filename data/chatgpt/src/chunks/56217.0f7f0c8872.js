export const __rspack_esm_ids = [56217];
export const __webpack_modules__ = {
    v0xU: (function(e, t, n) {
        var r = n("QdUF");

        function a() {
            let e = (0, r.getBrowserChatGptAuthSnapshot)();
            return e?.userId && e.accessToken && !(0, r.isBrowserWorkspaceSwitchPending)() ? JSON.stringify([e.userId, e.accountId]) : null
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, {
                        frame: l,
                        target: i,
                        owner: o,
                        transport: s,
                        onStatus: u
                    } = e,
                    c = new AbortController,
                    d = "",
                    h = () => {
                        c.abort(), l.srcdoc = "", l.removeAttribute("src"), n = n ?? t?.dispose(), t = void 0, window.removeEventListener(r.BROWSER_AUTH_CHANGED_EVENT, f), window.removeEventListener(r.BROWSER_AUTH_CONTEXT_CHANGED_EVENT, f), l.removeEventListener("load", p)
                    },
                    f = () => {
                        if (a() !== o) {
                            h(), u("error");
                            return
                        }
                        let e = (0, r.getBrowserChatGptAuthSnapshot)()?.accessToken;
                        null != t && e && e !== d && (d = e, t.refresh(e).catch(() => {
                            c.signal.aborted || (h(), u("error"))
                        }))
                    },
                    p = () => {
                        c.signal.aborted || null == t || l.hasAttribute("srcdoc") || u("ready")
                    };
                l.srcdoc = "", window.addEventListener(r.BROWSER_AUTH_CHANGED_EVENT, f), window.addEventListener(r.BROWSER_AUTH_CONTEXT_CHANGED_EVENT, f), l.addEventListener("load", p);
                let g = (0, r.getBrowserChatGptAuthSnapshot)();
                if (null == g || a() !== o) return h(), u("error"), async () => {};
                u("loading"), d = g.accessToken;
                let m = (async () => {
                    try {
                        let e = await s.open({
                            target: i,
                            accessToken: d,
                            signal: c.signal
                        });
                        if (c.signal.aborted || a() !== o) {
                            n = e.dispose(), c.signal.aborted || (h(), u("error"));
                            return
                        }
                        if (t = e, "https:" !== e.url.protocol || e.url.username || e.url.password || e.url.origin === window.location.origin || e.url.origin !== i.publicUrl.origin) throw Error("Portal preview requires an isolated origin");
                        l.src = e.url.href, l.removeAttribute("srcdoc"), f()
                    } catch {
                        c.signal.aborted || (h(), u("error"))
                    }
                })();
                return () => (h(), m.then(() => n))
            },
            b: a
        })
    }),
    m625: (function(e, t, n) {
        let r = /^https:\/\/([a-f0-9]{32})--([1-9][0-9]{0,4})--preview\.([^/?#]+)(?=[/?#]|$)/iu;
        n.d(t, {}, {
            a: function(e, t) {
                if (/[\s\p{Cc}\\]/u.test(e)) return null;
                let n = r.exec(e);
                if (null == n || n[3].toLowerCase() !== (t ?? "chatgpt.site")) return null;
                let a = Number(n[2]);
                return a > 65535 ? null : {
                    publicUrl: new URL(e),
                    port: a
                }
            }
        })
    }),
    B1XR: (function(e, t, n) {
        n.d(t, {
            SitePreviewBridge: () => P
        });
        var r = n("ABep"),
            a = n("QosV"),
            l = n("Q840"),
            i = n("aFoA"),
            o = n("Bbed"),
            s = n("tSEg"),
            u = n("zd8w"),
            c = n("IDNd"),
            d = n("Ot7V"),
            h = n("QcW8"),
            f = n("ZU27"),
            p = n("EpL9"),
            g = n("M8lA"),
            m = n("bf6R"),
            v = n("svjy"),
            b = n("rd65"),
            x = n("v0xU"),
            w = n("m625");
        let y = (0, o.a)(async () => (await n.e(969762).then(n.bind(n, "KodB"))).PortalPreview),
            E = (0, p.k)("portal-preview", y, {
                ownsSingleTabHeader: () => !0,
                dropDestinations: ["right"],
                isAvailable: () => !0 === (0, g.getClientBootstrap)().portalPreviewEnabled,
                open: C,
                canUndoClose: () => !1,
                showInNewTabLauncher: !1
            });

        function C(e, t, n) {
            if (null == n || !E.isAvailable(e) || e.get(s.j) || !e.get(h.i)) return !1;
            let a = (0, g.getClientBootstrap)().stagingPortalPreviewDomain,
                l = (0, w.a)(t, a),
                i = (0, x.b)();
            return null != l && null != i && ((0, f.h)(e, E, {
                id: `portal-preview:${l.publicUrl.origin}`,
                icon: (0, r.jsx)(m.Vd, {}),
                props: {
                    url: l.publicUrl.href,
                    owner: i,
                    transport: n,
                    stagingPortalDomain: a
                },
                revealAndFocus: !0,
                title: e.get(v.a).formatMessage({
                    id: "sites.portals.tabTitle",
                    defaultMessage: "Local site preview"
                })
            }), (0, b.b)(e))
        }
        var S = n("lkCH");
        let k = {
            async open(e) {
                let {
                    target: t,
                    accessToken: n,
                    signal: r
                } = e, a = new URL("/_portals/web-session", t.publicUrl.origin), l = crypto.randomUUID(), i = `portal-preview:${t.publicUrl.origin}`, o = !1, s = (0, S.a)(), u = (0, S.a)(), c = Promise.resolve(), d = () => (o = !0, u.resolve(void 0), g), h = () => {
                    d()
                }, f = async (e, t) => fetch(a, {
                    method: e,
                    credentials: "include",
                    mode: "cors",
                    redirect: "error",
                    cache: "no-store",
                    referrerPolicy: "no-referrer",
                    signal: AbortSignal.timeout(1e4),
                    headers: {
                        "X-Portals-Session-Id": l,
                        ...null == t ? {} : {
                            Authorization: t
                        }
                    }
                }), p = async e => {
                    if (o || r.aborted) throw Error("Preview closed");
                    try {
                        let t = await f("POST", `Bearer ${e}`);
                        if (204 !== t.status) throw Error("Preview session unavailable");
                        if (o || r.aborted) throw Error("Preview closed");
                        let n = await f("GET");
                        if (204 !== n.status || o || r.aborted) throw Error("Preview session unavailable")
                    } catch {
                        throw Error("Preview session unavailable")
                    }
                }, g = navigator.locks.request(i, {
                    ifAvailable: !0
                }, async e => {
                    if (null == e) throw Error("Preview already open");
                    r.addEventListener("abort", h, {
                        once: !0
                    });
                    try {
                        await p(n), s.resolve({
                            url: new URL(t.publicUrl.href),
                            refresh: e => {
                                let t = c.then(() => p(e));
                                return c = t.catch(() => {}), t
                            },
                            dispose: d
                        }), await u.promise
                    } finally {
                        o = !0, r.removeEventListener("abort", h), await c, await (async () => {
                            await f("DELETE")
                        })().catch(() => {})
                    }
                }).catch(() => s.reject(Error("Preview session unavailable")));
                return s.promise
            }
        };

        function _(e) {
            let t, n, r = (0, a.c)(5),
                {
                    transport: o
                } = e,
                h = (0, l.y)(s.a),
                f = (0, u.useContext)(c.b);
            return r[0] !== h || r[1] !== o || r[2] !== f ? (t = () => {
                let e = void 0 === o ? k : o;
                if (null != e && f) return (0, d.h)(t => {
                    let {
                        href: n,
                        conversationId: r
                    } = t;
                    if (null != r) {
                        let e = (0, s.d)(h.value, {
                            includeChatGpt: !0
                        });
                        if (!("chatgpt-thread" === h.value.routeKind ? (0, i.d)(h.get, r) === (0, i.d)(h.get, e) : r === e)) return !1
                    }
                    return C(h, n, e)
                })
            }, n = [h, o, f], r[0] = h, r[1] = o, r[2] = f, r[3] = t, r[4] = n) : (t = r[3], n = r[4]), (0, u.useEffect)(t, n), null
        }
        var I = n("gbrq"),
            M = n("rxj0"),
            j = n("uk1V"),
            L = n("PIpC"),
            R = n("UejO");

        function T() {
            let e, t, r, o, c = (0, a.c)(6),
                d = (0, l.y)(s.a);
            return c[0] !== d ? (e = () => {
                let e = null;
                return d.watch(t => {
                    let r = t.get(L.c),
                        a = t.get(h.i),
                        l = t.get(R.b),
                        o = t.get(i.a, l?.hostId == null ? l?.conversationId ?? null : null),
                        s = t.get(I.h),
                        u = t.get(f.l.tabs$),
                        c = "chatgpt-thread" === t.value.routeKind && t.get(M.e, t.value.conversationId);
                    if (null == r || !a || c || e === r || (e = r, (0, R.a)(l, t.value, o, t.value.clientThreadId) || s || u.length > 0)) return;
                    let d = (0, L.a)(r);
                    if (!d?.isOpen) return;
                    let p = !1;
                    return Promise.resolve().then(n.bind(n, "SQbA")).then(e => {
                        let {
                            appgenProjectQuery$: n
                        } = e;
                        return p ? null : t.query.fetch(n, d.projectId)
                    }).then(e => {
                        let n = (0, L.a)(r);
                        p || null == e || !n?.isOpen || n.projectId !== d.projectId || "active" !== e.status || null == e.current_live_url || "chatgpt-thread" === t.value.routeKind && t.get(M.e, t.value.conversationId) || (0, j.a)(t, {
                            type: "appgen-app",
                            projectId: e.id,
                            title: e.title,
                            url: e.current_live_url
                        })
                    }, A), () => {
                        p = !0
                    }
                })
            }, t = [d], c[0] = d, c[1] = e, c[2] = t) : (e = c[1], t = c[2]), (0, u.useEffect)(e, t), c[3] !== d ? (r = () => {
                let e = d.get(I.i),
                    t = null;
                return d.watch(n => {
                    let r = n.get(I.i),
                        a = n.get(f.l.activeTab$),
                        l = n.get(L.c);
                    (r !== e || null == t && null != l) && null != l && a?.tabId.startsWith("site-preview:") && (0, L.b)(l, a.tabId.slice(13), r), e = r, t = l
                })
            }, o = [d], c[3] = d, c[4] = r, c[5] = o) : (r = c[4], o = c[5]), (0, u.useEffect)(r, o), null
        }

        function A() {}
        let N = (0, o.a)(async () => (await n.e(402037).then(n.bind(n, "U1Pf"))).OpenPendingSitePreview);

        function P() {
            let e, t, n, o, u, c = (0, a.c)(13),
                d = (0, l.y)(s.a),
                h = (0, l.z)(R.b),
                f = (0, l.x)(i.a, h?.hostId == null ? h?.conversationId ?? null : null);
            if ("home" !== d.value.routeKind && "chatgpt-thread" !== d.value.routeKind && "local-thread" !== d.value.routeKind) return null;
            c[0] !== h || c[1] !== f || c[2] !== d ? (e = h?.url != null && (0, R.a)(h, d.value, f, d.value.clientThreadId), c[0] = h, c[1] = f, c[2] = d, c[3] = e) : e = c[3];
            let p = e;
            return c[4] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, r.jsx)(_, {}), c[4] = t) : t = c[4], c[5] !== d ? (n = "home" !== d.value.routeKind ? (0, r.jsx)(T, {}) : null, c[5] = d, c[6] = n) : n = c[6], c[7] !== p || c[8] !== h ? (o = p ? (0, r.jsx)(N, {
                pending: h
            }) : null, c[7] = p, c[8] = h, c[9] = o) : o = c[9], c[10] !== n || c[11] !== o ? (u = (0, r.jsxs)(r.Fragment, {
                children: [t, n, o]
            }), c[10] = n, c[11] = o, c[12] = u) : u = c[12], u
        }
    }),
    FC5L: (function(e, t, n) {
        var r = n("SZCv"),
            a = n.n(r),
            l = n("Q840"),
            i = n("tSEg"),
            o = n("wrxv");
        n.d(t, {}, {
            a: function(e) {
                let t = (0, l.j)(i.a, (t, n) => {
                    let {
                        scope: r
                    } = n;
                    return {
                        onOpen: () => e.open?.(r, t),
                        onDismiss: () => e.dismiss(r, t)
                    }
                }, {
                    autoDispose: 6e4
                });
                return (0, l.d)(i.a, (n, r) => {
                    if (null == n) return o.a;
                    let a = [],
                        l = !1;
                    for (let i of e.conversationIds(r.scope, n)) {
                        let n = e.status(r.scope, i);
                        if (n.pending) {
                            l = !0;
                            continue
                        }
                        if (!n.unread || !n.completed) continue;
                        let o = e.preview(r.scope, i);
                        null != o && a.push({
                            id: n.completionId ?? i,
                            title: e.title(r.scope, i),
                            preview: o,
                            ...r.get(t, i)
                        })
                    }
                    return a.length > 0 ? {
                        type: "ready",
                        value: a
                    } : l ? o.b : o.a
                }, {
                    isEqual: a()
                })
            }
        })
    }),
    iaTG: (function(e, t, n) {
        n.d(t, {
            a: () => m
        });
        var r = n("i5ac"),
            a = n.n(r),
            l = n("SKhr"),
            i = n("L6Md");
        let o = Array.from("αβγδεζηθικλμνξοπρστυφχψω"),
            s = new Map([..."alpha beta gamma delta epsilon zeta eta theta iota kappa lambda mu nu xi omicron pi rho sigma tau upsilon phi chi psi omega".split(" ").map((e, t) => [e, o[t]]), ..."nabla:∇ partial:∂ cdot:⋅ times:× div:÷ pm:± mp:∓ le:≤ leq:≤ ge:≥ geq:≥ ne:≠ neq:≠ infty:∞ sum:∑ prod:∏ int:∫ in:∈ notin:∉ to:→ rightarrow:→ leftarrow:←".split(" ").map(e => {
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
                a = 0;

            function l() {
                let e = t[a]?.start;
                if (null == e) throw Error("Missing argument");
                let n = i(),
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

            function i() {
                let e = t[a++];
                if (null == e || "}" === e.value) throw Error("Incomplete math");
                if ("{" === e.value) {
                    let r = [];
                    for (; t[a]?.value !== "}";) r.push(...i());
                    return n.push({
                        start: e.start,
                        end: t[a++].end
                    }), r
                }
                if (u.test(e.value)) {
                    let r = i();
                    return n.push({
                        start: e.start,
                        end: t[a - 1].end
                    }), r
                }
                if (c.test(e.value)) return [];
                if (d.test(e.value)) {
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
                if (/^(?:[_^]|\\(?:sqrt|vec|hat|bar|overline|underline))$/.test(e.value) || e.value.startsWith("\\") && !s.has(e.value.slice(1).replace(/^var/, "").toLowerCase()) && t[a]?.value === "{") {
                    if (t[a]?.value === "[") throw Error("Indexed argument");
                    return [e, ...l()]
                }
                let o = e.value.replace(/^\\/, "");
                return o = (o = (o = s.get(o.replace(/^var/, "").toLowerCase()) ?? e.value).replace(/[\u{1D400}-\u{1D7FF}]/gu, e => e.normalize("NFKC")).toLowerCase()).replace(/[ϵϑϕϖϱς−·]/g, e => "εθφπρσ-⋅" ["ϵϑϕϖϱς−·".indexOf(e)]), [{
                    ...e,
                    value: o
                }]
            }
            try {
                let e = [];
                for (; a < t.length;) e.push(...i());
                return 0 === r.length ? {
                    tokens: e,
                    groups: n
                } : null
            } catch {
                return null
            }
        }
        var f = n("agQa"),
            p = n("QxH2"),
            g = n("h8aU");

        function m(e) {
            let {
                contextId: t,
                getTurns: n,
                hydratePersistedMatch: r,
                revealUnrenderedMatches: o = !1,
                searchPersisted: u,
                searchMath: c = !1,
                scrollAdapter: d
            } = e;
            return {
                domain: "conversation",
                contextId: t,
                async search(e, t) {
                    var r, o;
                    let d, p, m = await async function(e, t, n, r) {
                        let a = e.query.trim(),
                            o = n && a.length > 1 && a.startsWith("/") && a.endsWith("/") ? a.slice(1, -1) : void 0,
                            u = t.flatMap(e => e.units.flatMap(t => (t.textChunks ?? [t.text]).flatMap((r, a) => {
                                let l = {
                                        turnKey: e.turnKey,
                                        unitId: t.unitId,
                                        text: n ? r.replace(/\s+/g, " ").trim() : r,
                                        equationIndex: void 0
                                    },
                                    i = n ? t.equations?.[a] : void 0;
                                return null == i ? [l] : [l, {
                                    ...l,
                                    text: i,
                                    equationIndex: a
                                }]
                            }))),
                            c = {
                                domain: e.domain,
                                contextId: e.contextId,
                                query: a,
                                regex: o,
                                searchMath: n || void 0,
                                matches: [],
                                totalMatches: 0,
                                isCapped: !1
                            };
                        if (!a) return c;
                        let d = null == o ? null : await (0, f.a)({
                            query: o,
                            texts: u.map(e => e.text),
                            mathTexts: u.map(e => null != e.equationIndex),
                            maxMatches: 250
                        }, r);
                        if (d?.error) return {
                            ...c,
                            error: d.error
                        };
                        c.totalMatches = d?.totalMatches ?? 0;
                        let p = new Map;
                        for (let [t, n] of u.entries()) {
                            let r = (0, l.e)(n.turnKey, n.unitId),
                                o = p.get(r) ?? 0,
                                {
                                    offsets: u,
                                    totalMatches: f
                                } = null != d ? {
                                    offsets: d.offsets[t] ?? [],
                                    totalMatches: 0
                                } : (null == n.equationIndex ? g.a : function(e, t, n) {
                                    let r = t.trim(),
                                        a = [];
                                    if (!r) return {
                                        offsets: a,
                                        totalMatches: 0
                                    };
                                    let l = h(e),
                                        o = h(s.get(r) ?? r);
                                    if (null == l || null == o) {
                                        let t = e.toLowerCase(),
                                            l = r.toLowerCase(),
                                            o = [...e.matchAll(/\\[a-zA-Z]+/g)];
                                        for (let n = t.indexOf(l); n >= 0; n = t.indexOf(l, n + l.length)) o.some(e => n > e.index && n < e.index + e[0].length) || a.push((0, i.a)(e, {
                                            start: n,
                                            end: n + r.length
                                        }));
                                        return {
                                            offsets: a.slice(0, n),
                                            totalMatches: a.length
                                        }
                                    }
                                    let u = 0;
                                    for (let e = 0; o.tokens.length > 0 && e <= l.tokens.length - o.tokens.length; e += 1) {
                                        if (!o.tokens.every((t, n) => t.value === l.tokens[e + n].value)) continue;
                                        let t = l.tokens.slice(e, e + o.tokens.length),
                                            r = t[0].start,
                                            i = t[t.length - 1].end;
                                        for (let e of t) r = Math.min(r, e.delimiter?.start ?? r), i = Math.max(i, e.delimiter?.end ?? i);
                                        for (let e of l.groups) r < e.start && i > e.start && i < e.end && (i = e.end), r > e.start && r < e.end && i > e.end && (r = e.start);
                                        u += 1, a.length < n && a.push({
                                            start: r,
                                            end: i
                                        }), e += o.tokens.length - 1
                                    }
                                    return {
                                        offsets: a,
                                        totalMatches: u
                                    }
                                })(n.text, a, 250 - c.matches.length);
                            for (let [t, r] of(c.totalMatches += f, u.entries())) {
                                let a = {
                                    domain: "conversation",
                                    contextId: e.contextId,
                                    turnKey: n.turnKey,
                                    unitId: n.unitId,
                                    matchIndex: null == n.equationIndex ? o + t : t,
                                    equationIndex: n.equationIndex,
                                    equationRange: null == n.equationIndex ? void 0 : r
                                };
                                c.matches.push({
                                    id: (0, l.d)(a),
                                    ordinal: c.matches.length + 1,
                                    location: a
                                })
                            }
                            null == n.equationIndex && p.set(r, o + u.length)
                        }
                        return c.isCapped = c.totalMatches > c.matches.length, c
                    }(e, n(), c, t?.signal);
                    if (c || null == u) return m;
                    let v = await u(e, t);
                    return null == v ? m : (r = m, o = v, d = new Map(r.matches.map(e => [e.id, e])), p = a()([...o.matches.map(e => d.get(e.id) ?? e), ...r.matches], "id").map((e, t) => ({
                        ...e,
                        ordinal: t + 1
                    })), {
                        ...r,
                        matches: p,
                        totalMatches: Math.max(p.length, r.totalMatches, o.totalMatches),
                        isCapped: r.isCapped || o.isCapped
                    })
                },
                async ensureVisible(e, n) {
                    if ("conversation" !== e.domain || e.contextId !== t || null != e.turnCursor && null != r && !await r(e, n) || n?.signal?.aborted) return;
                    d.onNavigate?.();
                    let a = null != e.turnCursor,
                        i = d.getTurnContainer(e.turnKey),
                        s = (0, l.d)(e),
                        u = o && null != i && null == (0, l.j)({
                            container: i,
                            matchId: s,
                            includeShadowRoots: !1
                        });
                    if (null == i || a || u) {
                        if (n?.signal?.aborted || (n?.signal == null ? await d.scrollToTurn(e.turnKey) : await d.scrollToTurn(e.turnKey, {
                                signal: n.signal
                            }), n?.signal?.aborted)) return;
                        i = d.getTurnContainer(e.turnKey)
                    }
                    null != i && await (0, p.b)({
                        container: i,
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
            a: () => d
        });
        var r = n("QosV"),
            a = n("Q840"),
            l = n("zd8w"),
            i = n("SKhr"),
            o = n("gSdW");

        function s(e) {
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
        var u = n("TwSq");
        let c = "[data-content-search-unit-key]";

        function d(e) {
            let t, d, m, v, b, x, w, y, E, C, S, k, _, I, M, j = (0, r.c)(30),
                {
                    containerRef: L,
                    contextId: R,
                    onContentChange: T
                } = e,
                A = (0, a.z)(u.d),
                N = (0, a.z)(u.g),
                P = A?.contextId === R ? A : null,
                O = null != P,
                D = O ? N?.id ?? null : null,
                {
                    schedule: q,
                    cancel: z
                } = (k = (0, r.c)(5), _ = (0, l.useRef)(null), 80 !== k[0] ? (E = e => {
                    null == _.current && (_.current = window.setTimeout(() => {
                        _.current = null, e()
                    }, 80))
                }, k[0] = 80, k[1] = E) : E = k[1], I = E, k[2] === Symbol.for("react.memo_cache_sentinel") ? (C = () => {
                    null != _.current && (window.clearTimeout(_.current), _.current = null)
                }, k[2] = C) : C = k[2], M = C, k[3] !== I ? (S = {
                    schedule: I,
                    cancel: M
                }, k[3] = I, k[4] = S) : S = k[4], S);
            j[0] !== T ? (t = () => T?.(), j[0] = T, j[1] = t) : t = j[1];
            let W = (0, l.useEffectEvent)(t);
            j[2] !== N?.location || j[3] !== R ? (d = e => {
                let t = N?.location;
                return t?.domain === "conversation" && t.contextId === R && (0, i.a)(e, t)
            }, j[2] = N?.location, j[3] = R, j[4] = d) : d = j[4];
            let B = (0, l.useEffectEvent)(d);
            j[5] !== D ? (m = (e, t) => {
                t.forEach(t => {
                    (0, i.o)({
                        element: t,
                        matchId: e
                    }), (0, i.n)(t, e === D)
                })
            }, j[5] = D, j[6] = m) : m = j[6];
            let U = (0, l.useEffectEvent)(m);
            j[7] !== P || j[8] !== L || j[9] !== U ? (v = async (e, t, r) => {
                let a = L.current;
                if (null == a || null == P) return;
                let l = null != r && !P.searchMath && a.contains(r) ? r : a;
                (0, i.b)(l, {
                    includeShadowRoots: !1
                }), t.takeRecords();
                let u = (0, o.a)(P.matches),
                    d = Array.from(l.querySelectorAll(c));
                l !== a && d.unshift(l);
                let m = d.flatMap(e => {
                        let t = u.get(e.dataset.contentSearchUnitKey ?? "");
                        return null == t ? [] : [{
                            element: e,
                            matches: t
                        }]
                    }),
                    v = m.map(g),
                    b = e => {
                        e.forEach((e, t) => e.forEach((e, n) => U(v[t].matches[n].id, e)))
                    };
                if (!P.searchMath) {
                    b(v.map(e => {
                        let {
                            element: t,
                            matches: n
                        } = e;
                        return (0, i.l)({
                            target: t,
                            query: P.query,
                            maxMatches: n.length,
                            includeShadowRoots: !1
                        }).matches
                    })), t.takeRecords();
                    return
                }
                let x = [];
                for (let {
                        element: e,
                        matches: t
                    }
                    of m) e.querySelectorAll("[data-math-source]").forEach((e, r) => {
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
                    0 !== a.length && x.push((async function(e, t) {
                        let r = e.querySelector(".katex-html"),
                            a = e.dataset.mathSource;
                        if (null == r || null == a || 0 === t.length) return () => t.map(() => []);
                        let {
                            katex: l
                        } = await Promise.all([n.e(990054), n.e(559373)]).then(n.bind(n, "RlG8")), o = s(r), u = new Map(o.map(e => {
                            let {
                                node: t
                            } = e;
                            return [t, t.data]
                        })), c = new Set(o.map(e => {
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
                        let f = new Map(h.map((e, t) => {
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
                                    d.innerHTML = l.renderToString(r, {
                                        displayMode: null != e.querySelector(".katex-display"),
                                        strict: "ignore",
                                        output: "html"
                                    })
                                } catch {
                                    return !1
                                }
                                let i = s(d),
                                    u = i.length === o.length && i.every((e, t) => {
                                        let {
                                            text: n
                                        } = e;
                                        return n === o[t].text
                                    });
                                return i.forEach((e, t) => {
                                    let n = f.get(e.color);
                                    if (null == n) return;
                                    let r = o[t];
                                    if (!u) {
                                        let t = o.filter(t => {
                                            let {
                                                text: n
                                            } = t;
                                            return n === e.text
                                        });
                                        if (1 !== t.length || 1 !== i.filter(t => {
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
                            if (e.dataset.mathSource !== a || !e.contains(r) || [...u].some(e => {
                                    let [t, n] = e;
                                    return !r.contains(t) || t.data !== n
                                })) return l;
                            let s = [];
                            for (let e of o) {
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
                                }, s.push(n))
                            }
                            for (let {
                                    index: e,
                                    glyphs: t
                                }
                                of s.reverse()) l[e].unshift(... function e(t) {
                                let n = t[0],
                                    r = t[t.length - 1],
                                    a = document.createRange();
                                a.setStart(n.node, n.offset), a.setEnd(r.node, r.offset + r.text.length);
                                let l = a.commonAncestorContainer;
                                for (; a.startContainer !== l && 0 === a.startOffset;) a.setStartBefore(a.startContainer);
                                for (; a.endContainer !== l && a.endOffset === (a.endContainer instanceof Text ? a.endContainer.length : a.endContainer.childNodes.length);) a.setEndAfter(a.endContainer);
                                if (a.startContainer !== a.endContainer) return [...t].reverse().flatMap(t => e([t])).reverse();
                                let o = (0, i.g)();
                                return a.surroundContents(o), [o]
                            }(t));
                            return l
                        }
                    })(e, a.map(p)).then(e => () => e().forEach((e, t) => U(a[t].id, e))))
                });
                let [w, y] = await Promise.all([(0, i.m)(v.map(f), P.query, P.regex, e), Promise.all(x)]);
                e.aborted || (b(w()), y.forEach(h), t.takeRecords())
            }, j[7] = P, j[8] = L, j[9] = U, j[10] = v) : v = j[10];
            let K = (0, l.useEffectEvent)(v);
            j[11] !== P?.runId || j[12] !== B || j[13] !== K || j[14] !== z || j[15] !== L || j[16] !== W || j[17] !== q ? (b = () => {
                let e, t = L.current;
                if (null == t || P?.runId == null) return;
                let n = null,
                    r = e => {
                        n?.abort(), K((n = new AbortController).signal, a, e)
                    },
                    a = new MutationObserver(t => {
                        if (!(0, i.p)(t)) return;
                        for (let {
                                target: r
                            }
                            of(n?.abort(), t)) {
                            if (!1 === e) break;
                            let t = r instanceof Element ? r : r.parentElement,
                                n = t?.closest(c) ?? null;
                            e = (void 0 === e || e === n) && null != n && n.parentElement?.closest(c) == null && n
                        }
                        let a = () => {
                            let t = e;
                            e = void 0, W(), r(t || void 0)
                        };
                        B(t) ? (z(), a()) : q(a)
                    });
                return a.observe(t, {
                    childList: !0,
                    subtree: !0,
                    characterData: !0,
                    attributeFilter: ["hidden", "inert", "contenteditable", "data-thread-find-skip", "data-content-search-unit-key"]
                }), r(), () => {
                    a.disconnect(), n?.abort(), z(), (0, i.b)(t, {
                        includeShadowRoots: !1
                    })
                }
            }, j[11] = P?.runId, j[12] = B, j[13] = K, j[14] = z, j[15] = L, j[16] = W, j[17] = q, j[18] = b) : b = j[18];
            let Q = P?.runId;
            j[19] !== z || j[20] !== L || j[21] !== R || j[22] !== q || j[23] !== Q ? (x = [Q, z, L, R, q], j[19] = z, j[20] = L, j[21] = R, j[22] = q, j[23] = Q, j[24] = x) : x = j[24], (0, l.useEffect)(b, x), j[25] !== D || j[26] !== L || j[27] !== O ? (w = () => {
                O && L.current?.querySelectorAll("mark[data-search-match]").forEach(e => {
                    (0, i.n)(e, e.dataset.contentSearchMatchId === D)
                })
            }, y = [D, L, O], j[25] = D, j[26] = L, j[27] = O, j[28] = w, j[29] = y) : (w = j[28], y = j[29]), (0, l.useEffect)(w, y)
        }

        function h(e) {
            return e()
        }

        function f(e) {
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
                matches: n.filter(m)
            }
        }

        function m(e) {
            return "conversation" === e.location.domain && null == e.location.equationIndex
        }
    }),
    zjpG: (function(e, t, n) {
        var r = n("ABep"),
            a = n("QosV"),
            l = n("on57"),
            i = n("oyxz");
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, s = (0, a.c)(5),
                    {
                        className: u
                    } = e;
                return s[0] !== u ? (t = (0, l.b)("last:hidden", u), s[0] = u, s[1] = t) : t = s[1], s[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, r.jsx)(i.a, {
                    id: "codex.ui.bulletSeparator",
                    defaultMessage: "·"
                }), s[2] = n) : n = s[2], s[3] !== t ? (o = (0, r.jsx)("span", {
                    "aria-hidden": !0,
                    className: t,
                    children: n
                }), s[3] = t, s[4] = o) : o = s[4], o
            }
        })
    }),
    IxWh: (function(e, t, n) {
        var r = n("Vzyk"),
            a = n.n(r);

        function l(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ltr",
                n = Math.max(0, e.scrollWidth - e.clientWidth);
            if ("rtl" === t) return {
                maximum: 0,
                minimum: -n
            };
            let r = e.firstElementChild,
                a = Math.min(n, r instanceof HTMLElement ? Math.max(0, i(e, r, t)) : 0);
            return {
                maximum: n,
                minimum: a
            }
        }

        function i(e, t, n) {
            return "rtl" === n ? t.offsetLeft - e.offsetLeft + t.offsetWidth - e.clientWidth + o(e, n) : t.offsetLeft - e.offsetLeft - o(e, n)
        }

        function o(e, t) {
            let n = Number.parseFloat("rtl" === t ? getComputedStyle(e).scrollPaddingRight : getComputedStyle(e).scrollPaddingLeft);
            return Number.isNaN(n) ? 0 : n
        }
        n.d(t, {}, {
            a: l,
            b: function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ltr",
                    {
                        maximum: r,
                        minimum: s
                    } = l(e, n),
                    u = "rtl" === n ? -t : t,
                    c = a()(e.scrollLeft + u * (e.clientWidth - o(e, n)), s, r),
                    d = e.children;
                for (let l = 1 === t ? 0 : d.length - 1; l >= 0 && l < d.length; l += t) {
                    let t = d.item(l);
                    if (!(t instanceof HTMLElement)) continue;
                    let o = a()(i(e, t, n), s, r);
                    if (1 === u && o >= c - 1 || -1 === u && o <= c + 1) return o
                }
                return 1 === u ? r : s
            }
        })
    }),
    SkIz: (function(e, t, n) {
        n.d(t, {
            a: () => y
        });
        var r = n("ABep"),
            a = n("QosV"),
            l = n("Q840"),
            i = n("oyxz"),
            o = n("TjgH"),
            s = n("Sm6l"),
            u = n("X6Vn"),
            c = n("gPv1"),
            d = n("OWtl"),
            h = n("nsrx"),
            f = n("on57"),
            p = n("JNtf"),
            g = n("mUDD"),
            m = n("ZhKl"),
            v = n("qVxm"),
            b = n("a6Zv"),
            x = n("eLmE");

        function w(e) {
            let t, n, o, u, c, w, y, E = (0, a.c)(19),
                {
                    hostId: C,
                    onClose: S,
                    rateLimitStatus: k
                } = e,
                _ = (0, l.y)(d.a),
                I = (0, b.a)(),
                M = (0, l.x)(x.b, C),
                j = k.rate_limit_upsell;
            if (!M || null == j) return null;
            let L = !I && "-mb-6";
            E[0] !== L ? (t = (0, f.b)("block w-full scale-105 object-cover", L), E[0] = L, E[1] = t) : t = E[1];
            let R = I ? "https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-dark.png" : "https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-light.png";
            return E[2] !== t || E[3] !== R ? (n = (0, r.jsx)("div", {
                className: "overflow-hidden",
                children: (0, r.jsx)("img", {
                    alt: "",
                    "aria-hidden": "true",
                    className: t,
                    src: R
                })
            }), E[2] = t, E[3] = R, E[4] = n) : n = E[4], E[5] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, r.jsx)(p.e, {
                className: "contents",
                children: (0, r.jsx)(i.a, {
                    id: "codex.lunaReserve.dialog.title",
                    defaultMessage: "Regain access to our most powerful models"
                })
            }), E[5] = o) : o = E[5], E[6] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, r.jsx)(g.e, {
                className: "items-center pb-2",
                children: (0, r.jsx)(g.d, {
                    className: "items-center",
                    titleClassName: "text-center",
                    subtitleTone: "secondary",
                    subtitleClassName: "text-center",
                    title: o,
                    subtitle: (0, r.jsx)(p.d, {
                        className: "contents",
                        children: (0, r.jsx)(i.a, {
                            id: "codex.lunaReserve.dialog.description",
                            defaultMessage: "You are now chatting with Luna. Continue to access our most capable models."
                        })
                    })
                })
            }), E[6] = u) : u = E[6], E[7] !== j.ctas || E[8] !== S || E[9] !== _ ? (c = e => (0, r.jsx)("div", {
                className: "self-center",
                children: (0, r.jsx)(g.c, {
                    expandSingleButton: !1,
                    children: j.ctas.map((t, n) => {
                        if (!(0, m.b)(t.action)) return null;
                        let a = e.actions[t.action];
                        return (0, r.jsx)(s.a, {
                            color: 0 === n ? "primary" : "secondary",
                            disabled: a.disabled,
                            size: "large",
                            onClick: e => {
                                (0, h.a)(_, {
                                    action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_MODAL_CTA_CLICKED",
                                    ctaAction: t.action,
                                    source: "details_modal"
                                }), a.log(), S(), a.onClick(e)
                            },
                            children: a.label ?? t.label
                        }, `${t.action}:${n}`)
                    }).reverse()
                })
            }), E[7] = j.ctas, E[8] = S, E[9] = _, E[10] = c) : c = E[10], E[11] !== j || E[12] !== k || E[13] !== c ? (w = (0, r.jsxs)(g.b, {
                children: [u, (0, r.jsx)(g.e, {
                    className: "items-center",
                    children: (0, r.jsx)(v.a, {
                        banner: j,
                        rateLimitStatus: k,
                        renderContent: c
                    })
                })]
            }), E[11] = j, E[12] = k, E[13] = c, E[14] = w) : w = E[14], E[15] !== S || E[16] !== n || E[17] !== w ? (y = (0, r.jsxs)(p.a, {
                open: !0,
                size: "default",
                onOpenChange: S,
                children: [n, w]
            }), E[15] = S, E[16] = n, E[17] = w, E[18] = y) : y = E[18], y
        }

        function y(e) {
            let t, n, f, p, g = (0, a.c)(7),
                {
                    hostId: m
                } = e,
                v = (0, l.y)(d.a);
            return (0, l.x)(x.b, m) ? (g[0] !== m || g[1] !== v ? (t = () => {
                (0, h.a)(v, {
                    action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_HEADER_BUTTON_CLICKED",
                    source: "thread_header"
                });
                let e = v.query.getData(c.c);
                if (null != e) {
                    (0, u.f)(v, w, {
                        hostId: m,
                        rateLimitStatus: e
                    }), (0, h.a)(v, {
                        action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_MODAL_OPENED",
                        source: "details_modal"
                    });
                    return
                }(0, h.a)(v, {
                    action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_ERROR",
                    errorCode: "missing_usage_status",
                    source: "thread_header"
                })
            }, g[0] = m, g[1] = v, g[2] = t) : t = g[2], g[3] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, r.jsx)("span", {
                "aria-hidden": "true",
                className: "text-chart-yellow",
                children: "🌙"
            }), g[3] = n) : n = g[3], g[4] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, r.jsxs)(o.a, {
                variant: "reserve",
                children: [n, (0, r.jsx)("span", {
                    className: "brightness-75 dark:brightness-100",
                    children: (0, r.jsx)(i.a, {
                        id: "codex.lunaReserve.header.label",
                        defaultMessage: "Luna reserve"
                    })
                })]
            }), g[4] = f) : f = g[4], g[5] !== t ? (p = (0, r.jsx)(s.a, {
                className: "conversation-header-control",
                color: "ghostMuted",
                size: "inline",
                onClick: t,
                children: f
            }), g[5] = t, g[6] = p) : p = g[6], p) : null
        }
    }),
    SUhA: (function(e, t, n) {
        var r = n("QosV"),
            a = n("irkb"),
            l = n("Q840"),
            i = n("zd8w"),
            o = n("tl5a"),
            s = n("CBsD"),
            u = n("kfGJ"),
            c = n("gTKF"),
            d = n("zHp1");
        n.d(t, {}, {
            a: function(e) {
                let t, n, h, f, p, g, m, v, b = (0, r.c)(38),
                    {
                        src: x,
                        conversationId: w,
                        hostId: y,
                        imageAssetResolver: E,
                        shouldLoadFileDataUrl: C
                    } = e,
                    S = (0, a.c)(),
                    k = (0, l.x)(o.H, w),
                    _ = y ?? k ?? u.a,
                    I = (0, u.c)(_);
                b[0] !== w ? (t = null == w ? null : {
                    kind: "app-server",
                    conversationId: w
                }, b[0] = w, b[1] = t) : t = b[1];
                let M = (0, l.x)(c.threadExecutorTargetByThread$, t),
                    j = M?.hostId === _ ? M.environmentId : void 0,
                    [L, R] = (0, i.useState)(null);
                b[2] !== x ? (n = x.trim(), b[2] = x, b[3] = n) : n = b[3];
                let T = n.length > 0,
                    A = T && (0, d.h)(x) ? x : "",
                    {
                        dataUrl: N,
                        src: P,
                        isLoading: O,
                        isError: D,
                        loadSource: q,
                        loadTiming: z,
                        imageCacheHit: W,
                        isShowingCachedImage: B,
                        imageCheck: U,
                        refetch: K,
                        deleted: Q
                    } = (0, d.k)(A, E);
                b[4] !== T || b[5] !== I.id || b[6] !== I.kind || b[7] !== _ || b[8] !== x ? (h = T ? (0, s.b)(x) : null, "local" === I.kind && I.id, f = null, b[4] = T, b[5] = I.id, b[6] = I.kind, b[7] = _, b[8] = x, b[9] = h, b[10] = f) : (h = b[9], f = b[10]);
                let V = f,
                    F = L?.src === x && L.environmentId === j ? L : null,
                    H = F?.dataUrl ?? null,
                    $ = T ? P ?? V ?? (null != h || A ? H : x) : null;
                b[11] !== h || b[12] !== w || b[13] !== V || b[14] !== j || b[15] !== _ || b[16] !== S || b[17] !== C || b[18] !== x ? (p = () => {
                    if (null == h || null != V && !C) return;
                    let e = !1;
                    return R({
                        src: x,
                        dataUrl: null,
                        environmentId: j,
                        isLoading: !0
                    }), (0, s.e)(h, _, S, void 0, w, j).then(t => {
                        e || R({
                            src: x,
                            dataUrl: t,
                            environmentId: j,
                            isLoading: !1
                        })
                    }), () => {
                        e = !0
                    }
                }, g = [h, w, V, j, _, S, C, x], b[11] = h, b[12] = w, b[13] = V, b[14] = j, b[15] = _, b[16] = S, b[17] = C, b[18] = x, b[19] = p, b[20] = g) : (p = b[19], g = b[20]), (0, i.useEffect)(p, g), b[21] !== N || b[22] !== H || b[23] !== x ? (m = N ?? H ?? (x.startsWith("data:image/") ? x : null), b[21] = N, b[22] = H, b[23] = x, b[24] = m) : m = b[24];
                let G = N ?? H ?? $,
                    X = O || null != h && null == V && (null == F || F.isLoading),
                    Z = !!A && D;
                return b[25] !== Q || b[26] !== W || b[27] !== U || b[28] !== B || b[29] !== q || b[30] !== z || b[31] !== $ || b[32] !== K || b[33] !== m || b[34] !== G || b[35] !== X || b[36] !== Z ? (v = {
                    dataUrl: m,
                    previewSrc: $,
                    downloadSrc: G,
                    isLoading: X,
                    isError: Z,
                    loadSource: q,
                    loadTiming: z,
                    imageCacheHit: W,
                    isShowingCachedImage: B,
                    imageCheck: U,
                    refetch: K,
                    deleted: Q
                }, b[25] = Q, b[26] = W, b[27] = U, b[28] = B, b[29] = q, b[30] = z, b[31] = $, b[32] = K, b[33] = m, b[34] = G, b[35] = X, b[36] = Z, b[37] = v) : v = b[37], v
            }
        })
    }),
    vNLk: (function(e, t, n) {
        var r = n("ABep"),
            a = n("QosV"),
            l = n("hwkA"),
            i = n("oyxz"),
            o = n("bf6R"),
            s = n("MRlq");
        n.d(t, {}, {
            a: function(e) {
                let t, n, u, c, d, h, f, p, g, m = (0, a.c)(31),
                    {
                        restored: v,
                        restoring: b,
                        deleting: x,
                        onDelete: w,
                        onUnarchive: y,
                        onDone: E
                    } = e,
                    C = void 0 !== x && x;
                m[0] !== b ? (t = b ? (0, r.jsx)(i.a, {
                    id: "localConversation.archived.restoringDescription",
                    defaultMessage: "Restoring this chat and its workspace…"
                }) : null, m[0] = b, m[1] = t) : t = m[1], m[2] !== v || m[3] !== b ? (n = !b && v ? (0, r.jsx)(i.a, {
                    id: "localConversation.archived.restoredDescription",
                    defaultMessage: "This chat has been restored"
                }) : null, m[2] = v, m[3] = b, m[4] = n) : n = m[4], m[5] !== v || m[6] !== b ? (u = b || v ? null : (0, r.jsx)(i.a, {
                    id: "localConversation.archived.previewDescription",
                    defaultMessage: "This chat is archived. To continue, unarchive it first"
                }), m[5] = v, m[6] = b, m[7] = u) : u = m[7], m[8] !== t || m[9] !== n || m[10] !== u ? (c = (0, r.jsxs)("span", {
                    className: "text-sm text-secondary select-none",
                    children: [t, n, u]
                }), m[8] = t, m[9] = n, m[10] = u, m[11] = c) : c = m[11], m[12] !== C || m[13] !== w || m[14] !== v || m[15] !== b ? (d = v || null == w ? null : (0, r.jsx)(l.a, {
                    color: "danger",
                    variant: "solid",
                    disabled: b,
                    loading: C,
                    size: "lg",
                    onClick: w,
                    children: (0, r.jsx)(i.a, {
                        ...s.a.delete
                    })
                }), m[12] = C, m[13] = w, m[14] = v, m[15] = b, m[16] = d) : d = m[16];
                let S = v ? E : y;
                return m[17] !== v || m[18] !== b ? (h = v && !b ? (0, r.jsx)(i.a, {
                    id: "localConversation.archived.previewDone",
                    defaultMessage: "Done"
                }) : (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(o.f, {}), (0, r.jsx)(i.a, {
                        ...s.a.unarchive
                    })]
                }), m[17] = v, m[18] = b, m[19] = h) : h = m[19], m[20] !== C || m[21] !== b || m[22] !== S || m[23] !== h ? (f = (0, r.jsx)(l.a, {
                    color: "primary",
                    variant: "solid",
                    disabled: C,
                    loading: b,
                    size: "lg",
                    onClick: S,
                    children: h
                }), m[20] = C, m[21] = b, m[22] = S, m[23] = h, m[24] = f) : f = m[24], m[25] !== d || m[26] !== f ? (p = (0, r.jsxs)("div", {
                    className: "pointer-events-auto flex items-center gap-2",
                    children: [d, f]
                }), m[25] = d, m[26] = f, m[27] = p) : p = m[27], m[28] !== p || m[29] !== c ? (g = (0, r.jsxs)("div", {
                    className: "flex flex-col items-center gap-4 py-4",
                    children: [c, p]
                }), m[28] = p, m[29] = c, m[30] = g) : g = m[30], g
            }
        })
    }),
    sqqv: (function(e, t, n) {
        var r = n("ABep"),
            a = n("QosV"),
            l = n("slpy"),
            i = n("Wf1j"),
            o = n("oyxz"),
            s = n("Sm6l"),
            u = n("bf6R"),
            c = n("mphG"),
            d = n("ABl9"),
            h = n("Zt82");
        n.d(t, {}, {
            a: function(e) {
                let t, n, f, p, g, m, v, b, x, w, y, E, C = (0, a.c)(26);
                C[0] !== e ? ({
                    title: p,
                    project: n,
                    onActivate: t,
                    ...f
                } = e, C[0] = e, C[1] = t, C[2] = n, C[3] = f, C[4] = p) : (t = C[1], n = C[2], f = C[3], p = C[4]);
                let S = (0, i.a)(),
                    k = n?.name;
                return C[5] !== S || C[6] !== k ? (g = (0, h.a)(S, k), C[5] = S, C[6] = k, C[7] = g) : g = C[7], C[8] !== t || C[9] !== f ? (m = e => {
                    f.onClick?.(e), t?.()
                }, v = e => {
                    f.onKeyDown?.(e), e.defaultPrevented && !e.repeat && ("Enter" === e.key || " " === e.key) && t?.()
                }, C[8] = t, C[9] = f, C[10] = m, C[11] = v) : (m = C[10], v = C[11]), C[12] !== n ? (b = null == n ? null : (0, r.jsx)(l.a, {
                    content: n.name,
                    children: (0, r.jsx)("span", {
                        "aria-hidden": "true",
                        className: "flex shrink-0 items-center",
                        children: n.icon
                    })
                }), C[12] = n, C[13] = b) : b = C[13], C[14] !== p ? (x = "string" == typeof p ? (0, d.d)(p) : p ?? (0, r.jsx)(o.a, {
                    id: "threadWorkspace.chatTitlebar.fallbackTitle",
                    defaultMessage: "Chat"
                }), C[14] = p, C[15] = x) : x = C[15], C[16] !== x ? (w = (0, r.jsx)(c.a, {
                    className: "min-w-0 truncate",
                    children: x
                }), C[16] = x, C[17] = w) : w = C[17], C[18] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, r.jsx)("span", {
                    className: "grid size-3.5 shrink-0 place-items-center",
                    children: (0, r.jsx)(u.Zb, {})
                }), C[18] = y) : y = C[18], C[19] !== f || C[20] !== g || C[21] !== m || C[22] !== v || C[23] !== b || C[24] !== w ? (E = (0, r.jsxs)(s.a, {
                    "aria-description": g,
                    ...f,
                    onClick: m,
                    onKeyDown: v,
                    className: "conversation-header-control max-w-full min-w-0 select-none",
                    color: "ghostActive",
                    size: "conversationTitle",
                    children: [b, w, y]
                }), C[19] = f, C[20] = g, C[21] = m, C[22] = v, C[23] = b, C[24] = w, C[25] = E) : E = C[25], E
            }
        })
    }),
    pDUk: (function(e, t, n) {
        var r = n("ABep"),
            a = n("QosV"),
            l = n("suct"),
            i = n("iodE"),
            o = n("IPUh"),
            s = n("Q840"),
            u = n("zd8w"),
            c = n("Q2Qp"),
            d = n("QcW8"),
            h = n("wD9O"),
            f = n("nzx4"),
            p = n("eGPX"),
            g = n("csXo"),
            m = n("iS3k"),
            v = n("KWzM");

        function b(e) {
            e.target instanceof Element && null != e.target.closest('[data-app-shell-tab-strip-controller="right"]') && e.preventDefault()
        }

        function x(e) {
            let t, n, l, c, d, g, m, b, x, w, y, E = (0, a.c)(25);
            E[0] !== e ? ({
                animate: t,
                getPaneElement: c,
                children: n,
                className: l,
                ...d
            } = e, E[0] = e, E[1] = t, E[2] = n, E[3] = l, E[4] = c, E[5] = d) : (t = E[1], n = E[2], l = E[3], c = E[4], d = E[5]);
            let C = (0, i.a)(),
                S = (0, s.z)(p.c),
                k = t && !S,
                _ = (0, h.c)(),
                I = (0, u.useRef)(null),
                M = (0, u.useRef)(k);
            E[6] !== c || E[7] !== _ ? (g = () => {
                let e = I.current,
                    t = c();
                if (null == e || null == t || !M.current) return;
                let n = t.getBoundingClientRect(),
                    r = e.getBoundingClientRect();
                e.style.clipPath = `inset(${(n.top-r.top)/_}px ${(r.right-n.right)/_}px ${(r.bottom-n.bottom)/_}px ${(n.left-r.left)/_}px)`
            }, E[6] = c, E[7] = _, E[8] = g) : g = E[8];
            let j = g,
                L = !C,
                R = !C;
            E[9] !== j ? (m = () => {
                M.current = !0, requestAnimationFrame(j)
            }, E[9] = j, E[10] = m) : m = E[10], E[11] === Symbol.for("react.memo_cache_sentinel") ? (b = () => {
                M.current = !1, I.current?.style.removeProperty("clip-path")
            }, E[11] = b) : b = E[11];
            let T = !!k && v.b.hidden;
            return E[12] !== k ? (x = k ? v.a : {
                duration: 0
            }, E[12] = k, E[13] = x) : x = E[13], E[14] !== n || E[15] !== m || E[16] !== T || E[17] !== x ? (w = (0, r.jsx)(o.a.div, {
                onAnimationStart: m,
                onAnimationComplete: b,
                initial: T,
                animate: v.b.visible,
                exit: v.b.hidden,
                transition: x,
                children: n
            }), E[14] = n, E[15] = m, E[16] = T, E[17] = x, E[18] = w) : w = E[18], E[19] !== l || E[20] !== d || E[21] !== L || E[22] !== R || E[23] !== w ? (y = (0, r.jsx)(f.c, {
                ...d,
                ref: I,
                className: l,
                forceMount: !0,
                "aria-hidden": L,
                inert: R,
                children: w
            }), E[19] = l, E[20] = d, E[21] = L, E[22] = R, E[23] = w, E[24] = y) : y = E[24], y
        }

        function w(e) {
            return e instanceof Element && null != e.closest('[data-app-shell-workspace-layout-toggle="right-panel"]')
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, i, o, s, p, v, y, E, C = (0, a.c)(37),
                    {
                        animate: S,
                        children: k,
                        floatingCardAnchor: _,
                        isOpen: I,
                        isSideChatSplit: M,
                        pane: j,
                        onOpenChange: L,
                        returnFocusId: R,
                        shouldPreventAutoFocus: T,
                        trigger: A
                    } = e,
                    N = void 0 === S || S,
                    P = void 0 !== M && M,
                    O = void 0 !== T && T,
                    D = (0, u.useContext)(c.a),
                    {
                        element: q
                    } = (0, g.a)(void 0 === j ? "chat" : j),
                    [z, W] = (0, u.useState)(null),
                    B = (0, u.useRef)(!1),
                    U = (0, u.useRef)(I && P),
                    K = 8 * (0, h.c)();
                C[0] !== z ? (t = () => z?.closest("[data-thread-floating-chat-actions]") ?? null, C[0] = z, C[1] = t) : t = C[1];
                let Q = t;
                C[2] !== q || C[3] !== Q || C[4] !== D ? (n = function(e) {
                    let t = void 0 === e ? Q() : e;
                    return t?.offsetParent ?? (void 0 === q ? D?.querySelector("[data-app-shell-main-content-layout]") : q) ?? D
                }, C[2] = q, C[3] = Q, C[4] = D, C[5] = n) : n = C[5];
                let V = n,
                    F = _ ?? z ?? void 0;
                C[6] !== _ || C[7] !== Q || C[8] !== V || C[9] !== F || C[10] !== z ? (i = {
                    contextElement: F,
                    getBoundingClientRect() {
                        if (_?.isConnected) return _.getBoundingClientRect();
                        let e = Q(),
                            t = e ?? z?.closest("[data-app-shell-main-titlebar]") ?? z?.closest("[data-app-shell-header-toolbar], [data-app-shell-titlebar]"),
                            n = (t ?? z)?.getBoundingClientRect() ?? new DOMRect,
                            r = V(e);
                        if (null == r) return n;
                        let a = r.getBoundingClientRect();
                        return new DOMRect(a.left, n.top, a.width, n.height)
                    }
                }, C[6] = _, C[7] = Q, C[8] = V, C[9] = F, C[10] = z, C[11] = i) : i = C[11];
                let H = i;
                return C[12] !== H ? (o = (0, r.jsx)(f.b, {
                    virtualRef: {
                        current: H
                    }
                }), C[12] = H, C[13] = o) : o = C[13], C[14] !== I || C[15] !== A ? (s = A ?? (0, r.jsx)(m.a.HeaderButton, {
                    pressed: I
                }), C[14] = I, C[15] = A, C[16] = s) : s = C[16], C[17] !== s ? (p = (0, r.jsx)(f.e, {
                    ref: W,
                    asChild: !0,
                    children: s
                }), C[17] = s, C[18] = p) : p = C[18], C[19] !== N || C[20] !== k || C[21] !== _ || C[22] !== V || C[23] !== I || C[24] !== P || C[25] !== K || C[26] !== R || C[27] !== O ? (v = I && (0, r.jsx)(x, {
                    getPaneElement: V,
                    className: "z-50 flex flex-col text-default outline-hidden",
                    animate: N,
                    align: "end",
                    alignOffset: null == _ ? K : 0,
                    collisionPadding: K,
                    side: "bottom",
                    sideOffset: null == _ ? K : 0,
                    unstyled: !0,
                    onOpenAutoFocus: e => {
                        B.current = !1, (O || U.current) && e.preventDefault(), U.current = !1
                    },
                    onCloseAutoFocus: e => {
                        if (O) e.preventDefault();
                        else if (!B.current && null != R) {
                            let t = document.getElementById(R);
                            t?.focus({
                                preventScroll: !0
                            }), null != t && document.activeElement === t && e.preventDefault()
                        }
                    },
                    onInteractOutside: e => {
                        e.target instanceof Node && _?.contains(e.target) && e.preventDefault(), P && w(e.target) && e.preventDefault(), e.defaultPrevented || (B.current = !0)
                    },
                    onFocusOutside: e => {
                        let t = e.detail.originalEvent.relatedTarget;
                        P && (null == t || w(t)) && "composer" === (0, d.q)(e.target) && e.preventDefault(), e.target instanceof Element && e.target.matches('[role="tabpanel"][data-app-shell-tab-panel-controller="right"]') && e.preventDefault()
                    },
                    onPointerDownOutside: b,
                    style: {
                        maxHeight: "none",
                        maxWidth: "none"
                    },
                    children: k
                }), C[19] = N, C[20] = k, C[21] = _, C[22] = V, C[23] = I, C[24] = P, C[25] = K, C[26] = R, C[27] = O, C[28] = v) : v = C[28], C[29] !== v ? (y = (0, r.jsx)(l.a, {
                    children: v
                }), C[29] = v, C[30] = y) : y = C[30], C[31] !== I || C[32] !== L || C[33] !== p || C[34] !== y || C[35] !== o ? (E = (0, r.jsxs)(f.a, {
                    open: I,
                    onOpenChange: L,
                    children: [o, p, y]
                }), C[31] = I, C[32] = L, C[33] = p, C[34] = y, C[35] = o, C[36] = E) : E = C[36], E
            }
        })
    }),
    BdYu: (function(e, t, n) {
        var r = n("QosV"),
            a = n("p5Yg"),
            l = n("B7sF"),
            i = n("K45w"),
            o = n("jCHb"),
            s = n("RgeH"),
            u = n("Q840"),
            c = n("zd8w"),
            d = n("QcW8"),
            h = n("gbrq"),
            f = n("kl6F"),
            p = n("eGPX"),
            g = n("csXo"),
            m = n("w2yL"),
            v = n("KWzM"),
            b = n("GaCK");

        function x(e) {
            return e.isPopoverOpen ? {
                ...e,
                isPopoverOpen: !1
            } : e
        }

        function w(e, t, n, r, a, l, i) {
            return y({
                centeredPanelGap: i,
                isSummaryPanelPinned: t && (l ?? (0, h.z)(!0 === n ? e.get(h.N) : e.get(h.C, n), n)),
                floatingPanelWidth: a,
                mainContentTargetWidth: r
            })
        }

        function y(e) {
            let {
                centeredPanelGap: t,
                isSummaryPanelPinned: n,
                floatingPanelWidth: r,
                mainContentTargetWidth: a
            } = e, l = (0, m.c)(a, r, t);
            return null != r && "overlay" === l ? (0, m.b)({
                displayMode: (0, m.c)(a),
                isPinned: n
            }) : (0, m.b)({
                displayMode: l,
                isPinned: null != r || n,
                panelWidth: r
            })
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, a, l, x, E, C, S, k, _, I, M, j, L, R, T, A, N = (0, r.c)(77);
                N[0] !== e ? (t = void 0 === e ? {} : e, N[0] = e, N[1] = t) : t = N[1];
                let {
                    centeredPanelGap: P,
                    contentShiftResetKey: O,
                    controlledIsOpen: D,
                    floatingPanelWidth: q,
                    getCurrentPinStateKey: z,
                    isEnabled: W,
                    pane: B,
                    pinStateKey: U
                } = t, K = void 0 === W || W, Q = void 0 === U || U, V = (0, u.y)(f.a), F = (0, u.z)(null == D && !0 === Q ? h.N : null), H = (0, u.x)(null == D && !0 !== Q ? h.C : null, !0 !== Q && Q);
                N[2] !== D || N[3] !== H || N[4] !== F || N[5] !== Q ? (n = D ?? (0, h.z)(!0 === Q ? F : H, Q), N[2] = D, N[3] = H, N[4] = F, N[5] = Q, N[6] = n) : n = N[6];
                let $ = n,
                    G = (0, u.z)(h.h),
                    X = (0, u.z)(d.E),
                    Z = (0, u.z)(b.b),
                    Y = K && $,
                    J = q ?? 300,
                    ee = K && null == q && (D ?? (Z.isPopoverOpen || "boolean" != typeof Q && $)),
                    et = (0, u.z)(p.c),
                    {
                        targetWidth: en,
                        width: er
                    } = (0, g.a)(void 0 === B ? "chat" : B);
                N[7] !== P || N[8] !== q || N[9] !== Y || N[10] !== en ? (a = y({
                    centeredPanelGap: P,
                    isSummaryPanelPinned: Y,
                    floatingPanelWidth: q,
                    mainContentTargetWidth: en.get()
                }), N[7] = P, N[8] = q, N[9] = Y, N[10] = en, N[11] = a) : a = N[11];
                let ea = (0, i.a)(a);
                N[12] !== en ? (l = e => en.on("change", e), N[12] = en, N[13] = l) : l = N[13], N[14] !== P || N[15] !== en || N[16] !== J ? (x = () => (0, m.c)(en.get(), J, P), N[14] = P, N[15] = en, N[16] = J, N[17] = x) : x = N[17], N[18] !== l || N[19] !== x ? (E = {
                    subscribe: l,
                    getSnapshot: x
                }, N[18] = l, N[19] = x, N[20] = E) : E = N[20];
                let el = E,
                    ei = (0, c.useSyncExternalStore)(el.subscribe, el.getSnapshot, el.getSnapshot),
                    eo = (0, c.useRef)(null);
                N[21] !== ea ? (C = ea.get(), N[21] = ea, N[22] = C) : C = N[22], N[23] !== en ? (S = en.get(), N[23] = en, N[24] = S) : S = N[24], N[25] !== C || N[26] !== S ? (k = {
                    offset: C,
                    width: S
                }, N[25] = C, N[26] = S, N[27] = k) : k = N[27];
                let es = (0, c.useRef)(k),
                    eu = (0, c.useRef)(!1),
                    ec = (0, c.useRef)(O),
                    ed = (0, c.useRef)(G),
                    eh = (0, c.useRef)(X),
                    ef = Y && null == q;
                N[28] !== ei || N[29] !== ee || N[30] !== ef ? (_ = (0, m.a)({
                    displayMode: ei,
                    isPinned: ef,
                    isPopoverOpen: ee
                }), N[28] = ei, N[29] = ee, N[30] = ef, N[31] = _) : _ = N[31];
                let ep = _;
                return N[32] !== P || N[33] !== ea || N[34] !== O || N[35] !== D || N[36] !== q || N[37] !== z || N[38] !== X || N[39] !== K || N[40] !== G || N[41] !== en || N[42] !== Q || N[43] !== V ? (I = () => {
                    let e = ed.current !== G,
                        t = eh.current !== X;
                    if (!eu.current && ec.current === O && !e && !t) return;
                    eu.current = !1, ec.current = O, ed.current = G, eh.current = X;
                    let n = w(V, K, z?.() ?? Q, en.get(), q, D, P);
                    es.current = {
                        offset: n,
                        width: en.get()
                    }, eo.current?.(), ea.jump(n)
                }, M = [P, ea, O, D, q, z, X, K, en, Q, G, V], N[32] = P, N[33] = ea, N[34] = O, N[35] = D, N[36] = q, N[37] = z, N[38] = X, N[39] = K, N[40] = G, N[41] = en, N[42] = Q, N[43] = V, N[44] = I, N[45] = M) : (I = N[44], M = N[45]), (0, c.useLayoutEffect)(I, M), N[46] !== P || N[47] !== er || N[48] !== ea || N[49] !== D || N[50] !== q || N[51] !== z || N[52] !== K || N[53] !== en || N[54] !== Q || N[55] !== V || N[56] !== et ? (j = () => {
                    let e = (e, t) => {
                        let n = w(V, K, z?.() ?? Q, e, q, D, P),
                            r = es.current,
                            a = ea.get();
                        if (r.offset === n && (a === n || r.width === e && !t)) return;
                        if (es.current = {
                                offset: n,
                                width: e
                            }, eo.current?.(), t || 0 === e || a === n) return void ea.jump(n);
                        let l = er.get();
                        if (l === e) {
                            let e = (0, o.a)(ea, n, v.a),
                                t = document.activeViewTransition;
                            if (null != t) {
                                e.pause();
                                let n = () => e.play();
                                t.ready.then(n, n)
                            }
                            eo.current = () => e.stop();
                            return
                        }
                        let i = (0, s.a)([l, e], [a, n]),
                            u = er.on("change", e => {
                                let t = i(e);
                                ea.set(t), t === n && queueMicrotask(u)
                            });
                        eo.current = u
                    };
                    return e(en.get(), et), en.on("change", t => {
                        e(t, et || 0 === en.getPrevious() || V.get(h.h) !== ed.current)
                    })
                }, N[46] = P, N[47] = er, N[48] = ea, N[49] = D, N[50] = q, N[51] = z, N[52] = K, N[53] = en, N[54] = Q, N[55] = V, N[56] = et, N[57] = j) : j = N[57], N[58] !== P || N[59] !== er || N[60] !== ea || N[61] !== D || N[62] !== q || N[63] !== z || N[64] !== K || N[65] !== Y || N[66] !== en || N[67] !== Q || N[68] !== V || N[69] !== et ? (L = [P, er, ea, D, q, z, K, Y, en, Q, V, et], N[58] = P, N[59] = er, N[60] = ea, N[61] = D, N[62] = q, N[63] = z, N[64] = K, N[65] = Y, N[66] = en, N[67] = Q, N[68] = V, N[69] = et, N[70] = L) : L = N[70], (0, c.useLayoutEffect)(j, L), N[71] === Symbol.for("react.memo_cache_sentinel") ? (R = () => () => {
                    eu.current = !0, eo.current?.()
                }, T = [], N[71] = R, N[72] = T) : (R = N[71], T = N[72]), (0, c.useLayoutEffect)(R, T), N[73] !== ea || N[74] !== ei || N[75] !== ep ? (A = {
                    contentShift: ea,
                    displayMode: ei,
                    ...ep
                }, N[73] = ea, N[74] = ei, N[75] = ep, N[76] = A) : A = N[76], A
            },
            b: function(e, t) {
                let n, i, o, s, d, f, p = (0, r.c)(15),
                    v = void 0 !== t && t,
                    w = (0, u.z)(h.h),
                    y = (0, u.z)(h.q),
                    {
                        targetWidth: E
                    } = (0, g.a)();
                p[0] !== v || p[1] !== E || p[2] !== e ? (n = () => {
                    var t, n;
                    t = e, n = v ? "overlay" : (0, m.c)(E.get()), t.set(b.b, e => {
                        let t = "overlay" === n && e.isPopoverOpen;
                        return e.displayMode === n && e.isPopoverOpen === t ? e : {
                            displayMode: n,
                            isPopoverOpen: t
                        }
                    })
                }, p[0] = v, p[1] = E, p[2] = e, p[3] = n) : n = p[3];
                let C = n;
                p[4] !== C ? (i = () => {
                    a.b.update(C)
                }, p[4] = C, p[5] = i) : i = p[5], (0, l.a)(E, "change", i), p[6] !== C ? (o = () => (C(), () => (0, a.a)(C)), p[6] = C, p[7] = o) : o = p[7], p[8] !== w || p[9] !== y || p[10] !== C ? (s = [w, y, C], p[8] = w, p[9] = y, p[10] = C, p[11] = s) : s = p[11], (0, c.useLayoutEffect)(o, s), p[12] !== e ? (d = () => () => {
                    e.set(b.b, x)
                }, f = [e], p[12] = e, p[13] = d, p[14] = f) : (d = p[13], f = p[14]), (0, c.useLayoutEffect)(d, f)
            }
        })
    }),
    enMl: (function(e, t, n) {
        var r = n("QosV"),
            a = n("Q840"),
            l = n("zd8w"),
            i = n("tSEg"),
            o = n("giVD");
        n.d(t, {}, {
            a: function(e) {
                let t, n, s, u, c = (0, r.c)(9),
                    {
                        icon: d,
                        isVisible: h,
                        title: f
                    } = e,
                    p = void 0 === d ? null : d,
                    g = void 0 === h || h,
                    m = (0, a.y)(i.a);
                return c[0] !== p || c[1] !== g || c[2] !== m || c[3] !== f ? (t = () => {
                    m.set(o.b, p), m.set(o.d, f), m.set(o.f, g)
                }, n = [p, g, m, f], c[0] = p, c[1] = g, c[2] = m, c[3] = f, c[4] = t, c[5] = n) : (t = c[4], n = c[5]), (0, l.useLayoutEffect)(t, n), c[6] !== m ? (s = () => () => {
                    m.set(o.b, null), m.set(o.d, null), m.set(o.f, !0)
                }, u = [m], c[6] = m, c[7] = s, c[8] = u) : (s = c[7], u = c[8]), (0, l.useLayoutEffect)(s, u), null
            }
        })
    }),
    csXo: (function(e, t, n) {
        var r = n("QosV"),
            a = n("K45w"),
            l = n("Q840"),
            i = n("zd8w"),
            o = n("I7bK"),
            s = n("pZMh");
        n.d(t, {}, {
            a: function(e) {
                let t, n = (0, r.c)(8),
                    u = void 0 === e ? "chat" : e,
                    c = (0, i.useContext)(o.c),
                    d = (0, a.a)(0),
                    h = "chat" === u && c?.hasPrimaryPane === !0,
                    f = (0, l.z)(!!h && s.m);
                if ("content" === u || h) {
                    let e, t = c?.secondaryPaneLayout,
                        r = "content" === u || f,
                        a = r ? t?.element : null,
                        l = r ? t?.targetWidth ?? d : d,
                        i = t?.width ?? d;
                    return n[0] !== a || n[1] !== l || n[2] !== i ? (e = {
                        element: a,
                        targetWidth: l,
                        width: i
                    }, n[0] = a, n[1] = l, n[2] = i, n[3] = e) : e = n[3], e
                }
                let p = c?.mainContentTargetWidth ?? d,
                    g = c?.isContentFullWidth ? null : void 0,
                    m = c?.mainPaneWidth ?? p;
                return n[4] !== g || n[5] !== m || n[6] !== p ? (t = {
                    element: g,
                    targetWidth: p,
                    width: m
                }, n[4] = g, n[5] = m, n[6] = p, n[7] = t) : t = n[7], t
            }
        })
    }),
    dDDU: (function(e, t, n) {
        var r = n("Qgfj"),
            a = n("Kyn2"),
            l = n("nnol"),
            i = n("QcW8"),
            o = n("ZU27"),
            s = n("bf6R"),
            u = n("GaA7"),
            c = n("Vhua"),
            d = n("NkWL");
        n.d(t, {}, {
            a: function(e) {
                let t = e.get(i.bb);
                return e.get(i._) || t?.isVisible !== !0 || "split" !== t.mode && !e.get(d.c) ? [] : function(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.l,
                        h = e.get(c.i),
                        f = [];
                    return "chat" === t || t.isWorkspaceHome || null == t.tabType.windowTransfer || null == u.a.detachedWindows || f.push({
                        id: "unified-workspace-move-new-window",
                        enabled: !h && !(0, l.c)(e, t.tabId) && t.tabType.windowTransfer.canTransfer(e, t.props),
                        icon: s.Qg,
                        message: (0, r.e)({
                            id: "threadWorkspace.contextMenu.moveToNewWindow",
                            defaultMessage: "Move to new window"
                        }),
                        onSelect: () => {
                            (0, a.a)(e, Promise.resolve().then(n.bind(n, "K3jS")).then(n => {
                                let {
                                    moveTabToNewWindow: r
                                } = n;
                                return r(e, i, t, null)
                            }))
                        }
                    }), "chat" === t && e.get(d.c) && f.push({
                        id: "close-tab",
                        icon: s.zj,
                        message: (0, r.e)({
                            id: "codex.tabs.contextMenu.close",
                            defaultMessage: "Close"
                        }),
                        onSelect: () => (0, d.a)(e)
                    }), f
                }(e, "chat")
            }
        })
    })
};