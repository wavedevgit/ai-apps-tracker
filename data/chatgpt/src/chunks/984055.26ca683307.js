export const __rspack_esm_ids = [984055];
export const __webpack_modules__ = {
    pO6K: (function(a, b, c) {
        var d = c("ABep");
        c("zd8w"), b.a = a => (0, d.jsx)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...a,
            children: (0, d.jsx)("path", {
                d: "M14.3349 13.3301V6.60645L5.47065 15.4707C5.21095 15.7304 4.78895 15.7304 4.52925 15.4707C4.26955 15.211 4.26955 14.789 4.52925 14.5293L13.3935 5.66504H6.66011C6.29284 5.66504 5.99507 5.36727 5.99507 5C5.99507 4.63273 6.29284 4.33496 6.66011 4.33496H14.9999L15.1337 4.34863C15.4369 4.41057 15.665 4.67857 15.665 5V13.3301C15.6649 13.6973 15.3672 13.9951 14.9999 13.9951C14.6327 13.9951 14.335 13.6973 14.3349 13.3301Z",
                fill: "currentColor"
            })
        })
    }),
    v0xU: (function(a, b, c) {
        var d = c("QdUF");

        function e() {
            let a = (0, d.getBrowserChatGptAuthSnapshot)();
            return a?.userId && a.accessToken && !(0, d.isBrowserWorkspaceSwitchPending)() ? JSON.stringify([a.userId, a.accountId]) : null
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, {
                        frame: f,
                        target: g,
                        owner: h,
                        transport: i,
                        onStatus: j
                    } = a,
                    k = new AbortController,
                    l = "",
                    m = () => {
                        k.abort(), f.srcdoc = "", f.removeAttribute("src"), c = c ?? b?.dispose(), b = void 0, window.removeEventListener(d.BROWSER_AUTH_CHANGED_EVENT, n), window.removeEventListener(d.BROWSER_AUTH_CONTEXT_CHANGED_EVENT, n), f.removeEventListener("load", o)
                    },
                    n = () => {
                        if (e() !== h) {
                            m(), j("error");
                            return
                        }
                        let a = (0, d.getBrowserChatGptAuthSnapshot)()?.accessToken;
                        null != b && a && a !== l && (l = a, b.refresh(a).catch(() => {
                            k.signal.aborted || (m(), j("error"))
                        }))
                    },
                    o = () => {
                        k.signal.aborted || null == b || f.hasAttribute("srcdoc") || j("ready")
                    };
                f.srcdoc = "", window.addEventListener(d.BROWSER_AUTH_CHANGED_EVENT, n), window.addEventListener(d.BROWSER_AUTH_CONTEXT_CHANGED_EVENT, n), f.addEventListener("load", o);
                let p = (0, d.getBrowserChatGptAuthSnapshot)();
                if (null == p || e() !== h) return m(), j("error"), async () => {};
                j("loading"), l = p.accessToken;
                let q = (async () => {
                    try {
                        let a = await i.open({
                            target: g,
                            accessToken: l,
                            signal: k.signal
                        });
                        if (k.signal.aborted || e() !== h) {
                            c = a.dispose(), k.signal.aborted || (m(), j("error"));
                            return
                        }
                        if (b = a, "https:" !== a.url.protocol || a.url.username || a.url.password || a.url.origin === window.location.origin || a.url.origin !== g.publicUrl.origin) throw Error("Portal preview requires an isolated origin");
                        f.src = a.url.href, f.removeAttribute("srcdoc"), n()
                    } catch {
                        k.signal.aborted || (m(), j("error"))
                    }
                })();
                return () => (m(), q.then(() => c))
            },
            b: e
        })
    }),
    m625: (function(a, b, c) {
        let d = /^https:\/\/([a-f0-9]{32})--([1-9][0-9]{0,4})--preview\.([^/?#]+)(?=[/?#]|$)/iu;
        c.d(b, {}, {
            a: function(a, b) {
                if (/[\s\p{Cc}\\]/u.test(a)) return null;
                let c = d.exec(a);
                if (null == c || c[3].toLowerCase() !== (b ?? "chatgpt.site")) return null;
                let e = Number(c[2]);
                return e > 65535 ? null : {
                    publicUrl: new URL(a),
                    port: e
                }
            }
        })
    }),
    B1XR: (function(a, b, c) {
        c.d(b, {
            SitePreviewBridge: () => J
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Q840"),
            g = c("aFoA"),
            h = c("Bbed"),
            i = c("tSEg"),
            j = c("zd8w"),
            k = c("IDNd"),
            l = c("Ot7V"),
            m = c("QcW8"),
            n = c("ZU27"),
            o = c("EpL9"),
            p = c("M8lA"),
            q = c("bf6R"),
            r = c("svjy"),
            s = c("rd65"),
            t = c("v0xU"),
            u = c("m625");
        let v = (0, h.a)(async () => (await c.e(969762).then(() => c("KodB"))).PortalPreview),
            w = (0, o.j)("portal-preview", v, {
                ownsSingleTabHeader: () => !0,
                dropDestinations: ["right"],
                isAvailable: () => !0 === (0, p.getClientBootstrap)().portalPreviewEnabled,
                open: x,
                canUndoClose: () => !1,
                showInNewTabLauncher: !1
            });

        function x(a, b, c) {
            if (null == c || !w.isAvailable(a) || a.get(i.j) || !a.get(m.h)) return !1;
            let e = (0, p.getClientBootstrap)().stagingPortalPreviewDomain,
                f = (0, u.a)(b, e),
                g = (0, t.b)();
            return null != f && null != g && ((0, n.h)(a, w, {
                id: `portal-preview:${f.publicUrl.origin}`,
                icon: (0, d.jsx)(q.de, {}),
                props: {
                    url: f.publicUrl.href,
                    owner: g,
                    transport: c,
                    stagingPortalDomain: e
                },
                revealAndFocus: !0,
                title: a.get(r.a).formatMessage({
                    id: "sites.portals.tabTitle",
                    defaultMessage: "Local site preview"
                })
            }), (0, s.b)(a))
        }
        var y = c("lkCH");
        let z = {
            async open(a) {
                let {
                    target: b,
                    accessToken: c,
                    signal: d
                } = a, e = new URL("/_portals/web-session", b.publicUrl.origin), f = crypto.randomUUID(), g = `portal-preview:${b.publicUrl.origin}`, h = !1, i = (0, y.a)(), j = (0, y.a)(), k = Promise.resolve(), l = () => (h = !0, j.resolve(void 0), p), m = () => {
                    l()
                }, n = async (a, b) => fetch(e, {
                    method: a,
                    credentials: "include",
                    mode: "cors",
                    redirect: "error",
                    cache: "no-store",
                    referrerPolicy: "no-referrer",
                    signal: AbortSignal.timeout(1e4),
                    headers: {
                        "X-Portals-Session-Id": f,
                        ...null == b ? {} : {
                            Authorization: b
                        }
                    }
                }), o = async a => {
                    if (h || d.aborted) throw Error("Preview closed");
                    try {
                        let b = await n("POST", `Bearer ${a}`);
                        if (204 !== b.status) throw Error("Preview session unavailable");
                        if (h || d.aborted) throw Error("Preview closed");
                        let c = await n("GET");
                        if (204 !== c.status || h || d.aborted) throw Error("Preview session unavailable")
                    } catch {
                        throw Error("Preview session unavailable")
                    }
                }, p = navigator.locks.request(g, {
                    ifAvailable: !0
                }, async a => {
                    if (null == a) throw Error("Preview already open");
                    d.addEventListener("abort", m, {
                        once: !0
                    });
                    try {
                        await o(c), i.resolve({
                            url: new URL(b.publicUrl.href),
                            refresh: a => {
                                let b = k.then(() => o(a));
                                return k = b.catch(() => {}), b
                            },
                            dispose: l
                        }), await j.promise
                    } finally {
                        h = !0, d.removeEventListener("abort", m), await k, await (async () => {
                            await n("DELETE")
                        })().catch(() => {})
                    }
                }).catch(() => i.reject(Error("Preview session unavailable")));
                return i.promise
            }
        };

        function A(a) {
            let b, c, d = (0, e.c)(5),
                {
                    transport: h
                } = a,
                m = (0, f.y)(i.a),
                n = (0, j.useContext)(k.b);
            return d[0] !== m || d[1] !== h || d[2] !== n ? (b = () => {
                let a = void 0 === h ? z : h;
                if (null != a && n) return (0, l.h)(b => {
                    let {
                        href: c,
                        conversationId: d
                    } = b;
                    if (null != d) {
                        let a = (0, i.d)(m.value, {
                            includeChatGpt: !0
                        });
                        if (!("chatgpt-thread" === m.value.routeKind ? (0, g.d)(m.get, d) === (0, g.d)(m.get, a) : d === a)) return !1
                    }
                    return x(m, c, a)
                })
            }, c = [m, h, n], d[0] = m, d[1] = h, d[2] = n, d[3] = b, d[4] = c) : (b = d[3], c = d[4]), (0, j.useEffect)(b, c), null
        }
        var B = c("gbrq"),
            C = c("rxj0"),
            D = c("uk1V"),
            E = c("PIpC"),
            F = c("UejO");

        function G() {
            let a, b, d, h, k = (0, e.c)(6),
                l = (0, f.y)(i.a);
            return k[0] !== l ? (a = () => {
                let a = null;
                return l.watch(b => {
                    let d = b.get(E.c),
                        e = b.get(m.h),
                        f = b.get(F.b),
                        h = b.get(g.a, f?.hostId == null ? f?.conversationId ?? null : null),
                        i = b.get(B.c),
                        j = b.get(n.l.tabs$),
                        k = "chatgpt-thread" === b.value.routeKind && b.get(C.e, b.value.conversationId);
                    if (null == d || !e || k || a === d || (a = d, (0, F.a)(f, b.value, h, b.value.clientThreadId) || i || j.length > 0)) return;
                    let l = (0, E.a)(d);
                    if (!l?.isOpen) return;
                    let o = !1;
                    return Promise.resolve().then(() => c("SQbA")).then(a => {
                        let {
                            appgenProjectQuery$: c
                        } = a;
                        return o ? null : b.query.fetch(c, l.projectId)
                    }).then(a => {
                        let c = (0, E.a)(d);
                        o || null == a || !c?.isOpen || c.projectId !== l.projectId || "active" !== a.status || null == a.current_live_url || "chatgpt-thread" === b.value.routeKind && b.get(C.e, b.value.conversationId) || (0, D.a)(b, {
                            type: "appgen-app",
                            projectId: a.id,
                            title: a.title,
                            url: a.current_live_url
                        })
                    }, H), () => {
                        o = !0
                    }
                })
            }, b = [l], k[0] = l, k[1] = a, k[2] = b) : (a = k[1], b = k[2]), (0, j.useEffect)(a, b), k[3] !== l ? (d = () => {
                let a = l.get(B.d),
                    b = null;
                return l.watch(c => {
                    let d = c.get(B.d),
                        e = c.get(n.l.activeTab$),
                        f = c.get(E.c);
                    (d !== a || null == b && null != f) && null != f && e?.tabId.startsWith("site-preview:") && (0, E.b)(f, e.tabId.slice(13), d), a = d, b = f
                })
            }, h = [l], k[3] = l, k[4] = d, k[5] = h) : (d = k[4], h = k[5]), (0, j.useEffect)(d, h), null
        }

        function H() {}
        let I = (0, h.a)(async () => (await c.e(402037).then(() => c("U1Pf"))).OpenPendingSitePreview);

        function J() {
            let a, b, c, h, j, k = (0, e.c)(13),
                l = (0, f.y)(i.a),
                m = (0, f.z)(F.b),
                n = (0, f.x)(g.a, m?.hostId == null ? m?.conversationId ?? null : null);
            if ("home" !== l.value.routeKind && "chatgpt-thread" !== l.value.routeKind && "local-thread" !== l.value.routeKind) return null;
            k[0] !== m || k[1] !== n || k[2] !== l ? (a = m?.url != null && (0, F.a)(m, l.value, n, l.value.clientThreadId), k[0] = m, k[1] = n, k[2] = l, k[3] = a) : a = k[3];
            let o = a;
            return k[4] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, d.jsx)(A, {}), k[4] = b) : b = k[4], k[5] !== l ? (c = "home" !== l.value.routeKind ? (0, d.jsx)(G, {}) : null, k[5] = l, k[6] = c) : c = k[6], k[7] !== o || k[8] !== m ? (h = o ? (0, d.jsx)(I, {
                pending: m
            }) : null, k[7] = o, k[8] = m, k[9] = h) : h = k[9], k[10] !== c || k[11] !== h ? (j = (0, d.jsxs)(d.Fragment, {
                children: [b, c, h]
            }), k[10] = c, k[11] = h, k[12] = j) : j = k[12], j
        }
    }),
    FC5L: (function(a, b, c) {
        var d = c("SZCv"),
            e = c.n(d),
            f = c("Q840"),
            g = c("tSEg"),
            h = c("wrxv");
        c.d(b, {}, {
            a: function(a) {
                let b = (0, f.j)(g.a, (b, c) => {
                    let {
                        scope: d
                    } = c;
                    return {
                        onOpen: () => a.open?.(d, b),
                        onDismiss: () => a.dismiss(d, b)
                    }
                }, {
                    autoDispose: 6e4
                });
                return (0, f.d)(g.a, (c, d) => {
                    if (null == c) return h.a;
                    let e = [],
                        f = !1;
                    for (let g of a.conversationIds(d.scope, c)) {
                        let c = a.status(d.scope, g);
                        if (c.pending) {
                            f = !0;
                            continue
                        }
                        if (!c.unread || !c.completed) continue;
                        let h = a.preview(d.scope, g);
                        null != h && e.push({
                            id: c.completionId ?? g,
                            title: a.title(d.scope, g),
                            preview: h,
                            ...d.get(b, g)
                        })
                    }
                    return e.length > 0 ? {
                        type: "ready",
                        value: e
                    } : f ? h.b : h.a
                }, {
                    isEqual: e()
                })
            }
        })
    }),
    iaTG: (function(a, b, c) {
        c.d(b, {
            a: () => q
        });
        var d = c("i5ac"),
            e = c.n(d),
            f = c("qwal"),
            g = c("SKhr"),
            h = c("L6Md");
        let i = Array.from("\u03B1\u03B2\u03B3\u03B4\u03B5\u03B6\u03B7\u03B8\u03B9\u03BA\u03BB\u03BC\u03BD\u03BE\u03BF\u03C0\u03C1\u03C3\u03C4\u03C5\u03C6\u03C7\u03C8\u03C9"),
            j = new Map([..."alpha beta gamma delta epsilon zeta eta theta iota kappa lambda mu nu xi omicron pi rho sigma tau upsilon phi chi psi omega".split(" ").map((a, b) => [a, i[b]]), ..."nabla:\u2207 partial:\u2202 cdot:\u22C5 times:\xd7 div:\xf7 pm:\xb1 mp:\u2213 le:\u2264 leq:\u2264 ge:\u2265 geq:\u2265 ne:\u2260 neq:\u2260 infty:\u221E sum:\u2211 prod:\u220F int:\u222B in:\u2208 notin:\u2209 to:\u2192 rightarrow:\u2192 leftarrow:\u2190".split(" ").map(a => {
                let [b, c] = a.split(":");
                return [b, c]
            })]),
            k = /^\\(?:mathbf|boldsymbol|bm|mathrm|mathit|mathsf|mathtt|mathnormal|mathbb|mathcal|mathscr|mathfrak|textbf|textit|textrm)$/,
            l = /^\\(?:quad|qquad|enspace|thinspace|medspace|thickspace|negthinspace|displaystyle|textstyle|scriptstyle|scriptscriptstyle|limits|nolimits|[,;:! ])$/,
            m = /^\\(?:left|right|middle|big|Big|bigg|Bigg|bigl|bigr|Bigl|Bigr|biggl|biggr|Biggl|Biggr)$/;

        function n(a) {
            let b = Array.from(a.matchAll(/\\[a-zA-Z]+|\\[^\r\n]|[^\s]/gu), a => ({
                    value: a[0],
                    start: a.index,
                    end: a.index + a[0].length
                })),
                c = [],
                d = [],
                e = 0;

            function f() {
                let a = b[e]?.start;
                if (null == a) throw Error("Missing argument");
                let c = g(),
                    d = b[e - 1].end;
                return [{
                    value: "argument:start",
                    start: a,
                    end: a
                }, ...c, {
                    value: "argument:end",
                    start: d,
                    end: d
                }]
            }

            function g() {
                let a = b[e++];
                if (null == a || "}" === a.value) throw Error("Incomplete math");
                if ("{" === a.value) {
                    let d = [];
                    for (; b[e]?.value !== "}";) d.push(...g());
                    return c.push({
                        start: a.start,
                        end: b[e++].end
                    }), d
                }
                if (k.test(a.value)) {
                    let d = g();
                    return c.push({
                        start: a.start,
                        end: b[e - 1].end
                    }), d
                }
                if (l.test(a.value)) return [];
                if (m.test(a.value)) {
                    let c, f = b[e++];
                    if (null == f) throw Error("Missing delimiter");
                    if ("\\left" === a.value) c = {
                        start: a.start,
                        end: f.end
                    }, d.push(c);
                    else if ("\\right" === a.value) {
                        if (null == (c = d.pop())) throw Error("Unpaired delimiter");
                        c.end = f.end
                    }
                    return "." === f.value ? [] : [{
                        ...f,
                        start: a.start,
                        delimiter: c
                    }]
                }
                if (/^\\[dt]?frac$/.test(a.value)) return [{
                    ...a,
                    value: "\\frac"
                }, ...f(), ...f()];
                if (/^(?:[_^]|\\(?:sqrt|vec|hat|bar|overline|underline))$/.test(a.value) || a.value.startsWith("\\") && !j.has(a.value.slice(1).replace(/^var/, "").toLowerCase()) && b[e]?.value === "{") {
                    if (b[e]?.value === "[") throw Error("Indexed argument");
                    return [a, ...f()]
                }
                let h = a.value.replace(/^\\/, "");
                return h = (h = (h = j.get(h.replace(/^var/, "").toLowerCase()) ?? a.value).replace(/[\u{1D400}-\u{1D7FF}]/gu, a => a.normalize("NFKC")).toLowerCase()).replace(/[\u03f5\u03d1\u03d5\u03d6\u03f1\u03c2\u2212\xb7]/g, a => "\u03B5\u03B8\u03C6\u03C0\u03C1\u03C3-\u22C5" ["\u03F5\u03D1\u03D5\u03D6\u03F1\u03C2\u2212\xb7".indexOf(a)]), [{
                    ...a,
                    value: h
                }]
            }
            try {
                let a = [];
                for (; e < b.length;) a.push(...g());
                return 0 === d.length ? {
                    tokens: a,
                    groups: c
                } : null
            } catch {
                return null
            }
        }
        var o = c("agQa"),
            p = c("QxH2");

        function q(a) {
            let {
                contextId: b,
                getTurns: c,
                hydratePersistedMatch: d,
                revealUnrenderedMatches: i = !1,
                searchPersisted: k,
                searchMath: l = !1,
                scrollAdapter: m
            } = a;
            return {
                domain: "conversation",
                contextId: b,
                async search(a, b) {
                    var d, i;
                    let m, p, q = await async function(a, b, c, d) {
                        let e = a.query.trim(),
                            i = (0, f.a)(e),
                            k = c && e.length > 1 && e.startsWith("/") && e.endsWith("/") ? e.slice(1, -1) : void 0,
                            l = b.flatMap(a => a.units.flatMap(b => (b.textChunks ?? [b.text]).flatMap((d, e) => {
                                let f = {
                                        turnKey: a.turnKey,
                                        unitId: b.unitId,
                                        text: c ? d.replace(/\s+/g, " ").trim() : d,
                                        equationIndex: void 0
                                    },
                                    g = c ? b.equations?.[e] : void 0;
                                return null == g ? [f] : [f, {
                                    ...f,
                                    text: g,
                                    equationIndex: e
                                }]
                            }))),
                            m = {
                                domain: a.domain,
                                contextId: a.contextId,
                                query: e,
                                regex: k,
                                searchMath: c || void 0,
                                matches: [],
                                totalMatches: 0,
                                isCapped: !1
                            };
                        if (!e) return m;
                        let p = null == k ? null : await (0, o.a)({
                            query: k,
                            texts: l.map(a => a.text),
                            mathTexts: l.map(a => null != a.equationIndex),
                            maxMatches: 250
                        }, d);
                        if (p?.error) return {
                            ...m,
                            error: p.error
                        };
                        m.totalMatches = p?.totalMatches ?? 0;
                        let q = new Map;
                        for (let [b, c] of l.entries()) {
                            let d = (0, g.e)(c.turnKey, c.unitId),
                                f = q.get(d) ?? 0,
                                k = 250 - m.matches.length,
                                {
                                    offsets: l,
                                    totalMatches: o
                                } = null != p ? {
                                    offsets: p.offsets[b] ?? [],
                                    totalMatches: 0
                                } : null == c.equationIndex ? i(c.text, k) : function(a, b, c) {
                                    let d = b.trim(),
                                        e = [];
                                    if (!d) return {
                                        offsets: e,
                                        totalMatches: 0
                                    };
                                    let f = n(a),
                                        g = n(j.get(d) ?? d);
                                    if (null == f || null == g) {
                                        let b = a.toLowerCase(),
                                            f = d.toLowerCase(),
                                            g = [...a.matchAll(/\\[a-zA-Z]+/g)];
                                        for (let c = b.indexOf(f); c >= 0; c = b.indexOf(f, c + f.length)) g.some(a => c > a.index && c < a.index + a[0].length) || e.push((0, h.a)(a, {
                                            start: c,
                                            end: c + d.length
                                        }));
                                        return {
                                            offsets: e.slice(0, c),
                                            totalMatches: e.length
                                        }
                                    }
                                    let i = 0;
                                    for (let a = 0; g.tokens.length > 0 && a <= f.tokens.length - g.tokens.length; a += 1) {
                                        if (!g.tokens.every((b, c) => b.value === f.tokens[a + c].value)) continue;
                                        let b = f.tokens.slice(a, a + g.tokens.length),
                                            d = b[0].start,
                                            h = b[b.length - 1].end;
                                        for (let a of b) d = Math.min(d, a.delimiter?.start ?? d), h = Math.max(h, a.delimiter?.end ?? h);
                                        for (let a of f.groups) d < a.start && h > a.start && h < a.end && (h = a.end), d > a.start && d < a.end && h > a.end && (d = a.start);
                                        i += 1, e.length < c && e.push({
                                            start: d,
                                            end: h
                                        }), a += g.tokens.length - 1
                                    }
                                    return {
                                        offsets: e,
                                        totalMatches: i
                                    }
                                }(c.text, e, k);
                            for (let [b, d] of(m.totalMatches += o, l.entries())) {
                                let e = {
                                    domain: "conversation",
                                    contextId: a.contextId,
                                    turnKey: c.turnKey,
                                    unitId: c.unitId,
                                    matchIndex: null == c.equationIndex ? f + b : b,
                                    equationIndex: c.equationIndex,
                                    equationRange: null == c.equationIndex ? void 0 : d
                                };
                                m.matches.push({
                                    id: (0, g.d)(e),
                                    ordinal: m.matches.length + 1,
                                    location: e
                                })
                            }
                            null == c.equationIndex && q.set(d, f + l.length)
                        }
                        return m.isCapped = m.totalMatches > m.matches.length, m
                    }(a, await c(b?.signal), l, b?.signal);
                    if (l || null == k) return q;
                    let r = await k(a, b);
                    return null == r ? q : (d = q, i = r, m = new Map(d.matches.map(a => [a.id, a])), p = e()([...i.matches.map(a => m.get(a.id) ?? a), ...d.matches], "id").map((a, b) => ({
                        ...a,
                        ordinal: b + 1
                    })), {
                        ...d,
                        matches: p,
                        totalMatches: Math.max(p.length, d.totalMatches, i.totalMatches),
                        isCapped: d.isCapped || i.isCapped
                    })
                },
                async ensureVisible(a, c) {
                    if ("conversation" !== a.domain || a.contextId !== b || null != a.turnCursor && null != d && !await d(a, c) || c?.signal?.aborted) return;
                    m.onNavigate?.();
                    let e = null != a.turnCursor,
                        {
                            turnKey: f,
                            unitId: h
                        } = a,
                        j = m.getTurnContainer(f),
                        k = (0, g.d)(a),
                        l = !1;
                    if (i && null != j) {
                        let a = (0, g.j)({
                            container: j,
                            matchId: k,
                            includeShadowRoots: !1
                        });
                        l = null == a || null != a.closest("[inert]")
                    }
                    if (null == j || e || l) {
                        if (c?.signal?.aborted || (await m.scrollToTurn(f, c, h), c?.signal?.aborted)) return;
                        j = m.getTurnContainer(f)
                    }
                    null != j && await (0, p.b)({
                        container: j,
                        matchId: k,
                        includeShadowRoots: !1,
                        runId: c?.runId,
                        signal: c?.signal
                    })
                }
            }
        }
    }),
    gSdW: (function(a, b, c) {
        var d = c("SKhr");
        c.d(b, {}, {
            a: function(a) {
                let b = new Map;
                for (let c of a) {
                    if ("conversation" !== c.location.domain) continue;
                    let a = (0, d.e)(c.location.turnKey, c.location.unitId),
                        e = b.get(a) ?? [];
                    e.push(c), b.set(a, e)
                }
                return b
            },
            b: function(a) {
                let b = new Map;
                for (let c of a) {
                    if ("diff" !== c.location.domain) continue;
                    let a = b.get(c.location.path) ?? [];
                    a.push(c), b.set(c.location.path, a)
                }
                return b
            }
        })
    }),
    l0fK: (function(a, b, c) {
        c.d(b, {
            a: () => l
        });
        var d = c("QosV"),
            e = c("Q840"),
            f = c("zd8w"),
            g = c("SKhr"),
            h = c("gSdW");

        function i(a) {
            let b = [],
                c = document.createTreeWalker(a, NodeFilter.SHOW_TEXT);
            for (let d = c.nextNode(); null != d; d = c.nextNode()) {
                if (!(d instanceof Text) || d.parentElement?.closest(".vlist-s")) continue;
                let c = d.parentElement;
                for (; null != c && c !== a && "" === c.style.color;) c = c.parentElement;
                let e = 0;
                for (let a of d.data) b.push({
                    node: d,
                    text: a,
                    color: c?.style.color ?? "",
                    offset: e
                }), e += a.length
            }
            return b
        }
        var j = c("TwSq");
        let k = "[data-content-search-unit-key]";

        function l(a) {
            let b, l, q, r, s, t, u, v, w, x, y, z, A, B, C, D = (0, d.c)(30),
                {
                    containerRef: E,
                    contextId: F,
                    onContentChange: G
                } = a,
                H = (0, e.z)(j.d),
                I = (0, e.z)(j.g),
                J = H?.contextId === F ? H : null,
                K = null != J,
                L = K ? I?.id ?? null : null,
                {
                    schedule: M,
                    cancel: N
                } = (z = (0, d.c)(5), A = (0, f.useRef)(null), 80 !== z[0] ? (w = a => {
                    null == A.current && (A.current = window.setTimeout(() => {
                        A.current = null, a()
                    }, 80))
                }, z[0] = 80, z[1] = w) : w = z[1], B = w, z[2] === Symbol.for("react.memo_cache_sentinel") ? (x = () => {
                    null != A.current && (window.clearTimeout(A.current), A.current = null)
                }, z[2] = x) : x = z[2], C = x, z[3] !== B ? (y = {
                    schedule: B,
                    cancel: C
                }, z[3] = B, z[4] = y) : y = z[4], y);
            D[0] !== G ? (b = () => G?.(), D[0] = G, D[1] = b) : b = D[1];
            let O = (0, f.useEffectEvent)(b);
            D[2] !== I?.location || D[3] !== F ? (l = a => {
                let b = I?.location;
                return b?.domain === "conversation" && b.contextId === F && (0, g.a)(a, b)
            }, D[2] = I?.location, D[3] = F, D[4] = l) : l = D[4];
            let P = (0, f.useEffectEvent)(l);
            D[5] !== L ? (q = (a, b) => {
                b.forEach(b => {
                    (0, g.o)({
                        element: b,
                        matchId: a
                    }), (0, g.n)(b, a === L)
                })
            }, D[5] = L, D[6] = q) : q = D[6];
            let Q = (0, f.useEffectEvent)(q);
            D[7] !== J || D[8] !== E || D[9] !== Q ? (r = async (a, b, d) => {
                let e = E.current;
                if (null == e || null == J) return;
                let f = null != d && !J.searchMath && e.contains(d) ? d : e;
                (0, g.b)(f, {
                    includeShadowRoots: !1
                }), b.takeRecords();
                let j = (0, h.a)(J.matches),
                    l = Array.from(f.querySelectorAll(k));
                f !== e && l.unshift(f);
                let q = l.flatMap(a => {
                        let b = j.get(a.dataset.contentSearchUnitKey ?? "");
                        return null == b ? [] : [{
                            element: a,
                            matches: b
                        }]
                    }),
                    r = q.map(p),
                    s = a => {
                        a.forEach((a, b) => a.forEach((a, c) => Q(r[b].matches[c].id, a)))
                    };
                if (!J.searchMath) {
                    s(r.map(a => {
                        let {
                            element: b,
                            matches: c
                        } = a;
                        return (0, g.l)({
                            target: b,
                            query: J.query,
                            maxMatches: c.length,
                            includeShadowRoots: !1
                        }).matches
                    })), b.takeRecords();
                    return
                }
                let t = [];
                for (let {
                        element: a,
                        matches: b
                    }
                    of q) a.querySelectorAll("[data-math-source]").forEach((a, d) => {
                    let e = b.flatMap(a => {
                        let {
                            id: b,
                            location: c
                        } = a;
                        return "conversation" === c.domain && c.equationIndex === d && null != c.equationRange ? [{
                            id: b,
                            range: c.equationRange
                        }] : []
                    });
                    0 !== e.length && t.push((async function(a, b) {
                        let d = a.querySelector(".katex-html"),
                            e = a.dataset.mathSource;
                        if (null == d || null == e || 0 === b.length) return () => b.map(() => []);
                        let {
                            katex: f
                        } = await Promise.all([c.e(990054), c.e(559373)]).then(() => c("RlG8")), h = i(d), j = new Map(h.map(a => {
                            let {
                                node: b
                            } = a;
                            return [b, b.data]
                        })), k = new Set(h.map(a => {
                            let {
                                color: b
                            } = a;
                            return b
                        })), l = document.createElement("span"), m = b.map(() => {
                            let a, b = k.size + 1;
                            do a = `#${b.toString(16).padStart(6,"0")}`, l.style.color = a, b += 1; while (k.has(l.style.color)) return k.add(l.style.color), {
                                hex: a,
                                css: l.style.color
                            }
                        });
                        l.style.color = "";
                        let n = new Map(m.map((a, b) => {
                                let {
                                    css: c
                                } = a;
                                return [c, b]
                            })),
                            o = new Map,
                            p = c => {
                                let d = e;
                                for (let a of [...c].reverse()) {
                                    let {
                                        start: c,
                                        end: e
                                    } = b[a];
                                    d = `${d.slice(0,c)}{\\textcolor{${m[a].hex}}{${d.slice(c,e)}}}${d.slice(e)}`
                                }
                                try {
                                    l.innerHTML = f.renderToString(d, {
                                        displayMode: null != a.querySelector(".katex-display"),
                                        strict: "ignore",
                                        output: "html"
                                    })
                                } catch {
                                    return !1
                                }
                                let g = i(l),
                                    j = g.length === h.length && g.every((a, b) => {
                                        let {
                                            text: c
                                        } = a;
                                        return c === h[b].text
                                    });
                                return g.forEach((a, b) => {
                                    let c = n.get(a.color);
                                    if (null == c) return;
                                    let d = h[b];
                                    if (!j) {
                                        let b = h.filter(b => {
                                            let {
                                                text: c
                                            } = b;
                                            return c === a.text
                                        });
                                        if (1 !== b.length || 1 !== g.filter(b => {
                                                let {
                                                    text: c
                                                } = b;
                                                return c === a.text
                                            }).length) return;
                                        d = b[0]
                                    }
                                    o.set(d, c)
                                }), !0
                            };
                        return p(b.map((a, b) => b)) || b.forEach((a, b) => p([b])), () => {
                            let c, f = b.map(() => []);
                            if (a.dataset.mathSource !== e || !a.contains(d) || [...j].some(a => {
                                    let [b, c] = a;
                                    return !d.contains(b) || b.data !== c
                                })) return f;
                            let i = [];
                            for (let a of h) {
                                let b = o.get(a);
                                if (null == b) {
                                    c = void 0;
                                    continue
                                }
                                let d = a.node.parentElement?.closest(".vlist > span, .base") ?? null;
                                c?.index === b && c.row === d ? c.glyphs.push(a) : (c = {
                                    index: b,
                                    row: d,
                                    glyphs: [a]
                                }, i.push(c))
                            }
                            for (let {
                                    index: a,
                                    glyphs: b
                                }
                                of i.reverse()) f[a].unshift(... function a(b) {
                                let c = b[0],
                                    d = b[b.length - 1],
                                    e = document.createRange();
                                e.setStart(c.node, c.offset), e.setEnd(d.node, d.offset + d.text.length);
                                let f = e.commonAncestorContainer;
                                for (; e.startContainer !== f && 0 === e.startOffset;) e.setStartBefore(e.startContainer);
                                for (; e.endContainer !== f && e.endOffset === (e.endContainer instanceof Text ? e.endContainer.length : e.endContainer.childNodes.length);) e.setEndAfter(e.endContainer);
                                if (e.startContainer !== e.endContainer) return [...b].reverse().flatMap(b => a([b])).reverse();
                                let h = (0, g.g)();
                                return e.surroundContents(h), [h]
                            }(b));
                            return f
                        }
                    })(a, e.map(o)).then(a => () => a().forEach((a, b) => Q(e[b].id, a))))
                });
                let [u, v] = await Promise.all([(0, g.m)(r.map(n), J.query, J.regex, a), Promise.all(t)]);
                a.aborted || (s(u()), v.forEach(m), b.takeRecords())
            }, D[7] = J, D[8] = E, D[9] = Q, D[10] = r) : r = D[10];
            let R = (0, f.useEffectEvent)(r);
            D[11] !== J || D[12] !== P || D[13] !== R || D[14] !== N || D[15] !== E || D[16] !== O || D[17] !== M ? (s = () => {
                let a, b = E.current;
                if (null == b || J?.runId == null) return;
                b.dataset.contentSearchRunId = String(J.runId);
                let c = null,
                    d = a => {
                        c?.abort(), R((c = new AbortController).signal, e, a)
                    },
                    e = new MutationObserver(b => {
                        if (!(0, g.p)(b)) return;
                        for (let {
                                target: d
                            }
                            of(c?.abort(), b)) {
                            if (!1 === a) break;
                            let b = d instanceof Element ? d : d.parentElement,
                                c = b?.closest(k) ?? null;
                            a = (void 0 === a || a === c) && null != c && c.parentElement?.closest(k) == null && c
                        }
                        let e = () => {
                            let b = a;
                            a = void 0, O(), d(b || void 0)
                        };
                        P(b) ? (N(), e()) : M(e)
                    });
                return e.observe(b, {
                    childList: !0,
                    subtree: !0,
                    characterData: !0,
                    attributeFilter: ["hidden", "inert", "contenteditable", "data-thread-find-skip", "data-content-search-unit-key"]
                }), d(), () => {
                    delete b.dataset.contentSearchRunId, e.disconnect(), c?.abort(), N(), (0, g.b)(b, {
                        includeShadowRoots: !1
                    })
                }
            }, D[11] = J, D[12] = P, D[13] = R, D[14] = N, D[15] = E, D[16] = O, D[17] = M, D[18] = s) : s = D[18];
            let S = J?.runId;
            D[19] !== N || D[20] !== E || D[21] !== F || D[22] !== M || D[23] !== S ? (t = [S, N, E, F, M], D[19] = N, D[20] = E, D[21] = F, D[22] = M, D[23] = S, D[24] = t) : t = D[24], (0, f.useEffect)(s, t), D[25] !== L || D[26] !== E || D[27] !== K ? (u = () => {
                K && E.current?.querySelectorAll("mark[data-search-match]").forEach(a => {
                    (0, g.n)(a, a.dataset.contentSearchMatchId === L)
                })
            }, v = [L, E, K], D[25] = L, D[26] = E, D[27] = K, D[28] = u, D[29] = v) : (u = D[28], v = D[29]), (0, f.useEffect)(u, v)
        }

        function m(a) {
            return a()
        }

        function n(a) {
            let {
                element: b,
                matches: c
            } = a;
            return {
                element: b,
                maxMatches: c.length
            }
        }

        function o(a) {
            let {
                range: b
            } = a;
            return b
        }

        function p(a) {
            let {
                element: b,
                matches: c
            } = a;
            return {
                element: b,
                matches: c.filter(q)
            }
        }

        function q(a) {
            return "conversation" === a.location.domain && null == a.location.equationIndex
        }
    }),
    zjpG: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("oyxz");
        c.d(b, {}, {
            a: function(a) {
                let b, c, h, i = (0, e.c)(5),
                    {
                        className: j
                    } = a;
                return i[0] !== j ? (b = (0, f.b)("last:hidden", j), i[0] = j, i[1] = b) : b = i[1], i[2] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, d.jsx)(g.a, {
                    id: "codex.ui.bulletSeparator",
                    defaultMessage: "\xb7"
                }), i[2] = c) : c = i[2], i[3] !== b ? (h = (0, d.jsx)("span", {
                    "aria-hidden": !0,
                    className: b,
                    children: c
                }), i[3] = b, i[4] = h) : h = i[4], h
            }
        })
    }),
    IxWh: (function(a, b, c) {
        var d = c("Vzyk"),
            e = c.n(d);

        function f(a) {
            let b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ltr",
                c = Math.max(0, a.scrollWidth - a.clientWidth);
            if ("rtl" === b) return {
                maximum: 0,
                minimum: -c
            };
            let d = a.firstElementChild,
                e = Math.min(c, d instanceof HTMLElement ? Math.max(0, g(a, d, b)) : 0);
            return {
                maximum: c,
                minimum: e
            }
        }

        function g(a, b, c) {
            return "rtl" === c ? b.offsetLeft - a.offsetLeft + b.offsetWidth - a.clientWidth + h(a, c) : b.offsetLeft - a.offsetLeft - h(a, c)
        }

        function h(a, b) {
            let c = Number.parseFloat("rtl" === b ? getComputedStyle(a).scrollPaddingRight : getComputedStyle(a).scrollPaddingLeft);
            return Number.isNaN(c) ? 0 : c
        }
        c.d(b, {}, {
            a: f,
            b: function(a, b) {
                let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ltr",
                    {
                        maximum: d,
                        minimum: i
                    } = f(a, c),
                    j = "rtl" === c ? -b : b,
                    k = e()(a.scrollLeft + j * (a.clientWidth - h(a, c)), i, d),
                    l = a.children;
                for (let f = 1 === b ? 0 : l.length - 1; f >= 0 && f < l.length; f += b) {
                    let b = l.item(f);
                    if (!(b instanceof HTMLElement)) continue;
                    let h = e()(g(a, b, c), i, d);
                    if (1 === j && h >= k - 1 || -1 === j && h <= k + 1) return h
                }
                return 1 === j ? d : i
            }
        })
    }),
    SkIz: (function(a, b, c) {
        c.d(b, {
            a: () => v
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Q840"),
            g = c("oyxz"),
            h = c("TjgH"),
            i = c("Sm6l"),
            j = c("X6Vn"),
            k = c("gPv1"),
            l = c("OWtl"),
            m = c("nsrx"),
            n = c("on57"),
            o = c("JNtf"),
            p = c("mUDD"),
            q = c("ZhKl"),
            r = c("qVxm"),
            s = c("a6Zv"),
            t = c("eLmE");

        function u(a) {
            let b, c, h, j, k, u, v, w = (0, e.c)(19),
                {
                    hostId: x,
                    onClose: y,
                    rateLimitStatus: z
                } = a,
                A = (0, f.y)(l.a),
                B = (0, s.a)(),
                C = (0, f.x)(t.b, x),
                D = z.rate_limit_upsell;
            if (!C || null == D) return null;
            let E = !B && "-mb-6";
            w[0] !== E ? (b = (0, n.b)("block w-full scale-105 object-cover", E), w[0] = E, w[1] = b) : b = w[1];
            let F = B ? "https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-dark.png" : "https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-light.png";
            return w[2] !== b || w[3] !== F ? (c = (0, d.jsx)("div", {
                className: "overflow-hidden",
                children: (0, d.jsx)("img", {
                    alt: "",
                    "aria-hidden": "true",
                    className: b,
                    src: F
                })
            }), w[2] = b, w[3] = F, w[4] = c) : c = w[4], w[5] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, d.jsx)(o.f, {
                className: "contents",
                children: (0, d.jsx)(g.a, {
                    id: "codex.lunaReserve.dialog.title",
                    defaultMessage: "Regain access to our most powerful models"
                })
            }), w[5] = h) : h = w[5], w[6] === Symbol.for("react.memo_cache_sentinel") ? (j = (0, d.jsx)(p.e, {
                className: "items-center pb-2",
                children: (0, d.jsx)(p.d, {
                    className: "items-center",
                    titleClassName: "text-center",
                    subtitleTone: "secondary",
                    subtitleClassName: "text-center",
                    title: h,
                    subtitle: (0, d.jsx)(o.e, {
                        className: "contents",
                        children: (0, d.jsx)(g.a, {
                            id: "codex.lunaReserve.dialog.description",
                            defaultMessage: "You are now chatting with Luna. Continue to access our most capable models."
                        })
                    })
                })
            }), w[6] = j) : j = w[6], w[7] !== D.ctas || w[8] !== y || w[9] !== A ? (k = a => (0, d.jsx)("div", {
                className: "self-center",
                children: (0, d.jsx)(p.c, {
                    expandSingleButton: !1,
                    children: D.ctas.map((b, c) => {
                        if (!(0, q.b)(b.action)) return null;
                        let e = a.actions[b.action];
                        return (0, d.jsx)(i.a, {
                            color: 0 === c ? "primary" : "secondary",
                            disabled: e.disabled,
                            size: "large",
                            onClick: a => {
                                (0, m.a)(A, {
                                    action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_MODAL_CTA_CLICKED",
                                    ctaAction: b.action,
                                    source: "details_modal"
                                }), e.log(), y(), e.onClick(a)
                            },
                            children: e.label ?? b.label
                        }, `${b.action}:${c}`)
                    }).reverse()
                })
            }), w[7] = D.ctas, w[8] = y, w[9] = A, w[10] = k) : k = w[10], w[11] !== D || w[12] !== z || w[13] !== k ? (u = (0, d.jsxs)(p.b, {
                children: [j, (0, d.jsx)(p.e, {
                    className: "items-center",
                    children: (0, d.jsx)(r.a, {
                        banner: D,
                        rateLimitStatus: z,
                        renderContent: k
                    })
                })]
            }), w[11] = D, w[12] = z, w[13] = k, w[14] = u) : u = w[14], w[15] !== y || w[16] !== c || w[17] !== u ? (v = (0, d.jsxs)(o.a, {
                open: !0,
                size: "default",
                onOpenChange: y,
                children: [c, u]
            }), w[15] = y, w[16] = c, w[17] = u, w[18] = v) : v = w[18], v
        }

        function v(a) {
            let b, c, n, o, p = (0, e.c)(7),
                {
                    hostId: q
                } = a,
                r = (0, f.y)(l.a);
            return (0, f.x)(t.b, q) ? (p[0] !== q || p[1] !== r ? (b = () => {
                (0, m.a)(r, {
                    action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_HEADER_BUTTON_CLICKED",
                    source: "thread_header"
                });
                let a = r.query.getData(k.c);
                if (null != a) {
                    (0, j.f)(r, u, {
                        hostId: q,
                        rateLimitStatus: a
                    }), (0, m.a)(r, {
                        action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_MODAL_OPENED",
                        source: "details_modal"
                    });
                    return
                }(0, m.a)(r, {
                    action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_ERROR",
                    errorCode: "missing_usage_status",
                    source: "thread_header"
                })
            }, p[0] = q, p[1] = r, p[2] = b) : b = p[2], p[3] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, d.jsx)("span", {
                "aria-hidden": "true",
                className: "text-chart-yellow",
                children: "\u{1F319}"
            }), p[3] = c) : c = p[3], p[4] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, d.jsxs)(h.a, {
                variant: "reserve",
                children: [c, (0, d.jsx)("span", {
                    className: "brightness-75 dark:brightness-100",
                    children: (0, d.jsx)(g.a, {
                        id: "codex.lunaReserve.header.label",
                        defaultMessage: "Luna reserve"
                    })
                })]
            }), p[4] = n) : n = p[4], p[5] !== b ? (o = (0, d.jsx)(i.a, {
                className: "conversation-header-control",
                color: "ghostMuted",
                size: "inline",
                onClick: b,
                children: n
            }), p[5] = b, p[6] = o) : o = p[6], o) : null
        }
    }),
    SUhA: (function(a, b, c) {
        var d = c("QosV"),
            e = c("irkb"),
            f = c("Q840"),
            g = c("zd8w"),
            h = c("tl5a"),
            i = c("CBsD"),
            j = c("kfGJ"),
            k = c("gTKF"),
            l = c("zHp1");
        c.d(b, {}, {
            a: function(a) {
                let b, c, m, n, o, p, q, r, s = (0, d.c)(38),
                    {
                        src: t,
                        conversationId: u,
                        hostId: v,
                        imageAssetResolver: w,
                        shouldLoadFileDataUrl: x
                    } = a,
                    y = (0, e.c)(),
                    z = (0, f.x)(h.H, u),
                    A = v ?? z ?? j.a,
                    B = (0, j.c)(A);
                s[0] !== u ? (b = null == u ? null : {
                    kind: "app-server",
                    conversationId: u
                }, s[0] = u, s[1] = b) : b = s[1];
                let C = (0, f.x)(k.threadExecutorTargetByThread$, b),
                    D = C?.hostId === A ? C.environmentId : void 0,
                    [E, F] = (0, g.useState)(null);
                s[2] !== t ? (c = t.trim(), s[2] = t, s[3] = c) : c = s[3];
                let G = c.length > 0,
                    H = G && (0, l.i)(t) ? t : "",
                    {
                        dataUrl: I,
                        src: J,
                        isLoading: K,
                        isError: L,
                        loadSource: M,
                        loadTiming: N,
                        imageCacheHit: O,
                        isShowingCachedImage: P,
                        imageCheck: Q,
                        refetch: R,
                        deleted: S
                    } = (0, l.m)(H, w);
                s[4] !== G || s[5] !== B.id || s[6] !== B.kind || s[7] !== A || s[8] !== t ? (m = G ? (0, i.b)(t) : null, "local" === B.kind && B.id, n = null, s[4] = G, s[5] = B.id, s[6] = B.kind, s[7] = A, s[8] = t, s[9] = m, s[10] = n) : (m = s[9], n = s[10]);
                let T = n,
                    U = E?.src === t && E.environmentId === D ? E : null,
                    V = U?.dataUrl ?? null,
                    W = G ? J ?? T ?? (null != m || H ? V : t) : null;
                s[11] !== m || s[12] !== u || s[13] !== T || s[14] !== D || s[15] !== A || s[16] !== y || s[17] !== x || s[18] !== t ? (o = () => {
                    if (null == m || null != T && !x) return;
                    let a = !1;
                    return F({
                        src: t,
                        dataUrl: null,
                        environmentId: D,
                        isLoading: !0
                    }), (0, i.e)(m, A, y, void 0, u, D).then(b => {
                        a || F({
                            src: t,
                            dataUrl: b,
                            environmentId: D,
                            isLoading: !1
                        })
                    }), () => {
                        a = !0
                    }
                }, p = [m, u, T, D, A, y, x, t], s[11] = m, s[12] = u, s[13] = T, s[14] = D, s[15] = A, s[16] = y, s[17] = x, s[18] = t, s[19] = o, s[20] = p) : (o = s[19], p = s[20]), (0, g.useEffect)(o, p), s[21] !== I || s[22] !== V || s[23] !== t ? (q = I ?? V ?? (t.startsWith("data:image/") ? t : null), s[21] = I, s[22] = V, s[23] = t, s[24] = q) : q = s[24];
                let X = I ?? V ?? W,
                    Y = K || null != m && null == T && (null == U || U.isLoading),
                    Z = !!H && L;
                return s[25] !== S || s[26] !== O || s[27] !== Q || s[28] !== P || s[29] !== M || s[30] !== N || s[31] !== W || s[32] !== R || s[33] !== q || s[34] !== X || s[35] !== Y || s[36] !== Z ? (r = {
                    dataUrl: q,
                    previewSrc: W,
                    downloadSrc: X,
                    isLoading: Y,
                    isError: Z,
                    loadSource: M,
                    loadTiming: N,
                    imageCacheHit: O,
                    isShowingCachedImage: P,
                    imageCheck: Q,
                    refetch: R,
                    deleted: S
                }, s[25] = S, s[26] = O, s[27] = Q, s[28] = P, s[29] = M, s[30] = N, s[31] = W, s[32] = R, s[33] = q, s[34] = X, s[35] = Y, s[36] = Z, s[37] = r) : r = s[37], r
            }
        })
    }),
    vNLk: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("r7R5"),
            g = c("oyxz"),
            h = c("bf6R"),
            i = c("MRlq");
        c.d(b, {}, {
            a: function(a) {
                let b, c, j, k, l, m, n, o, p, q = (0, e.c)(31),
                    {
                        restored: r,
                        restoring: s,
                        deleting: t,
                        onDelete: u,
                        onUnarchive: v,
                        onDone: w
                    } = a,
                    x = void 0 !== t && t;
                q[0] !== s ? (b = s ? (0, d.jsx)(g.a, {
                    id: "localConversation.archived.restoringDescription",
                    defaultMessage: "Restoring this chat and its workspace\u2026"
                }) : null, q[0] = s, q[1] = b) : b = q[1], q[2] !== r || q[3] !== s ? (c = !s && r ? (0, d.jsx)(g.a, {
                    id: "localConversation.archived.restoredDescription",
                    defaultMessage: "This chat has been restored"
                }) : null, q[2] = r, q[3] = s, q[4] = c) : c = q[4], q[5] !== r || q[6] !== s ? (j = s || r ? null : (0, d.jsx)(g.a, {
                    id: "localConversation.archived.previewDescription",
                    defaultMessage: "This chat is archived. To continue, unarchive it first"
                }), q[5] = r, q[6] = s, q[7] = j) : j = q[7], q[8] !== b || q[9] !== c || q[10] !== j ? (k = (0, d.jsxs)("span", {
                    className: "text-sm text-secondary select-none",
                    children: [b, c, j]
                }), q[8] = b, q[9] = c, q[10] = j, q[11] = k) : k = q[11], q[12] !== x || q[13] !== u || q[14] !== r || q[15] !== s ? (l = r || null == u ? null : (0, d.jsx)(f.a, {
                    color: "danger",
                    variant: "solid",
                    disabled: s,
                    loading: x,
                    size: "lg",
                    onClick: u,
                    children: (0, d.jsx)(g.a, {
                        ...i.a.delete
                    })
                }), q[12] = x, q[13] = u, q[14] = r, q[15] = s, q[16] = l) : l = q[16];
                let y = r ? w : v;
                return q[17] !== r || q[18] !== s ? (m = r && !s ? (0, d.jsx)(g.a, {
                    id: "localConversation.archived.previewDone",
                    defaultMessage: "Done"
                }) : (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(h.h, {}), (0, d.jsx)(g.a, {
                        ...i.a.unarchive
                    })]
                }), q[17] = r, q[18] = s, q[19] = m) : m = q[19], q[20] !== x || q[21] !== s || q[22] !== y || q[23] !== m ? (n = (0, d.jsx)(f.a, {
                    color: "primary",
                    variant: "solid",
                    disabled: x,
                    loading: s,
                    size: "lg",
                    onClick: y,
                    children: m
                }), q[20] = x, q[21] = s, q[22] = y, q[23] = m, q[24] = n) : n = q[24], q[25] !== l || q[26] !== n ? (o = (0, d.jsxs)("div", {
                    className: "pointer-events-auto flex items-center gap-2",
                    children: [l, n]
                }), q[25] = l, q[26] = n, q[27] = o) : o = q[27], q[28] !== o || q[29] !== k ? (p = (0, d.jsxs)("div", {
                    className: "flex flex-col items-center gap-4 py-4",
                    children: [k, o]
                }), q[28] = o, q[29] = k, q[30] = p) : p = q[30], p
            }
        })
    }),
    pDUk: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("suct"),
            g = c("iodE"),
            h = c("IPUh"),
            i = c("Q840"),
            j = c("zd8w"),
            k = c("Q2Qp"),
            l = c("QcW8"),
            m = c("wD9O"),
            n = c("nzx4"),
            o = c("eGPX"),
            p = c("csXo"),
            q = c("iS3k"),
            r = c("KWzM");

        function s(a) {
            a.target instanceof Element && null != a.target.closest('[data-app-shell-tab-strip-controller="right"]') && a.preventDefault()
        }

        function t(a) {
            let b, c, f, k, l, p, q, s, t, u, v, w = (0, e.c)(25);
            w[0] !== a ? ({
                animate: b,
                getPaneElement: k,
                children: c,
                className: f,
                ...l
            } = a, w[0] = a, w[1] = b, w[2] = c, w[3] = f, w[4] = k, w[5] = l) : (b = w[1], c = w[2], f = w[3], k = w[4], l = w[5]);
            let x = (0, g.a)(),
                y = (0, i.z)(o.c),
                z = b && !y,
                A = (0, m.c)(),
                B = (0, j.useRef)(null),
                C = (0, j.useRef)(z);
            w[6] !== k || w[7] !== A ? (p = () => {
                let a = B.current,
                    b = k();
                if (null == a || null == b || !C.current) return;
                let c = b.getBoundingClientRect(),
                    d = a.getBoundingClientRect();
                a.style.clipPath = `inset(${(c.top-d.top)/A}px ${(d.right-c.right)/A}px ${(d.bottom-c.bottom)/A}px ${(c.left-d.left)/A}px)`
            }, w[6] = k, w[7] = A, w[8] = p) : p = w[8];
            let D = p,
                E = !x,
                F = !x;
            w[9] !== D ? (q = () => {
                C.current = !0, requestAnimationFrame(D)
            }, w[9] = D, w[10] = q) : q = w[10], w[11] === Symbol.for("react.memo_cache_sentinel") ? (s = () => {
                C.current = !1, B.current?.style.removeProperty("clip-path")
            }, w[11] = s) : s = w[11];
            let G = !!z && r.b.hidden;
            return w[12] !== z ? (t = z ? r.a : {
                duration: 0
            }, w[12] = z, w[13] = t) : t = w[13], w[14] !== c || w[15] !== q || w[16] !== G || w[17] !== t ? (u = (0, d.jsx)(h.a.div, {
                onAnimationStart: q,
                onAnimationComplete: s,
                initial: G,
                animate: r.b.visible,
                exit: r.b.hidden,
                transition: t,
                children: c
            }), w[14] = c, w[15] = q, w[16] = G, w[17] = t, w[18] = u) : u = w[18], w[19] !== f || w[20] !== l || w[21] !== E || w[22] !== F || w[23] !== u ? (v = (0, d.jsx)(n.c, {
                ...l,
                ref: B,
                className: f,
                forceMount: !0,
                "aria-hidden": E,
                inert: F,
                children: u
            }), w[19] = f, w[20] = l, w[21] = E, w[22] = F, w[23] = u, w[24] = v) : v = w[24], v
        }

        function u(a) {
            return a instanceof Element && null != a.closest('[data-app-shell-workspace-layout-toggle="right-panel"]')
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, g, h, i, o, r, v, w = (0, e.c)(41),
                    {
                        animate: x,
                        animateOnExit: y,
                        children: z,
                        externalControls: A,
                        floatingCardAnchor: B,
                        id: C,
                        isOpen: D,
                        isSideChatSplit: E,
                        label: F,
                        pane: G,
                        onEscapeKeyDown: H,
                        onOpenChange: I,
                        returnFocusId: J,
                        shouldPreventAutoFocus: K,
                        trigger: L
                    } = a,
                    M = void 0 === x || x,
                    N = void 0 !== E && E,
                    O = void 0 !== K && K,
                    P = (0, j.useContext)(k.a),
                    {
                        element: Q
                    } = (0, p.a)(void 0 === G ? "chat" : G),
                    [R, S] = (0, j.useState)(null),
                    T = (0, j.useRef)(!1),
                    U = (0, j.useRef)(D && N),
                    V = 8 * (0, m.c)(),
                    W = A?.anchor ?? R;
                w[0] !== W ? (b = () => W?.closest("[data-thread-floating-chat-actions]") ?? null, w[0] = W, w[1] = b) : b = w[1];
                let X = b;
                w[2] !== Q || w[3] !== X || w[4] !== P ? (c = function(a) {
                    let b = void 0 === a ? X() : a;
                    return b?.offsetParent ?? (void 0 === Q ? P?.querySelector("[data-app-shell-main-content-layout]") : Q) ?? P
                }, w[2] = Q, w[3] = X, w[4] = P, w[5] = c) : c = w[5];
                let Y = c,
                    Z = B ?? W ?? void 0;
                w[6] !== W || w[7] !== B || w[8] !== X || w[9] !== Y || w[10] !== Z ? (g = {
                    contextElement: Z,
                    getBoundingClientRect() {
                        if (B?.isConnected) return B.getBoundingClientRect();
                        let a = X(),
                            b = a ?? W?.closest("[data-app-shell-main-titlebar]") ?? W?.closest("[data-app-shell-header-toolbar], [data-app-shell-titlebar]"),
                            c = (b ?? W)?.getBoundingClientRect() ?? new DOMRect,
                            d = Y(a);
                        if (null == d) return c;
                        let e = d.getBoundingClientRect();
                        return new DOMRect(e.left, c.top, e.width, c.height)
                    }
                }, w[6] = W, w[7] = B, w[8] = X, w[9] = Y, w[10] = Z, w[11] = g) : g = w[11];
                let $ = g,
                    _ = void 0 === y || y ? f.a : j.Fragment;
                return w[12] !== $ ? (h = (0, d.jsx)(n.b, {
                    virtualRef: {
                        current: $
                    }
                }), w[12] = $, w[13] = h) : h = w[13], w[14] !== A || w[15] !== D || w[16] !== L ? (i = null == A && (0, d.jsx)(n.e, {
                    ref: S,
                    asChild: !0,
                    children: L ?? (0, d.jsx)(q.a.HeaderButton, {
                        pressed: D
                    })
                }), w[14] = A, w[15] = D, w[16] = L, w[17] = i) : i = w[17], w[18] !== M || w[19] !== z || w[20] !== A || w[21] !== B || w[22] !== Y || w[23] !== C || w[24] !== D || w[25] !== N || w[26] !== F || w[27] !== H || w[28] !== V || w[29] !== J || w[30] !== O ? (o = D && (0, d.jsx)(t, {
                    id: C,
                    "aria-label": F,
                    getPaneElement: Y,
                    className: "z-50 flex flex-col text-default outline-hidden",
                    animate: M,
                    align: "end",
                    alignOffset: null == B ? V : 0,
                    collisionPadding: V,
                    side: "bottom",
                    sideOffset: null == B ? V : 0,
                    unstyled: !0,
                    onEscapeKeyDown: H,
                    onOpenAutoFocus: a => {
                        T.current = !1, (O || U.current) && a.preventDefault(), U.current = !1
                    },
                    onCloseAutoFocus: a => {
                        if (null != A) a.preventDefault(), O || T.current || A.getReturnFocus()?.focus({
                            preventScroll: !0
                        });
                        else if (O) a.preventDefault();
                        else if (!T.current && null != J) {
                            let b = document.getElementById(J);
                            b?.focus({
                                preventScroll: !0
                            }), null != b && document.activeElement === b && a.preventDefault()
                        }
                    },
                    onInteractOutside: a => {
                        null != A && null != C && a.target instanceof Element && (A.anchor?.contains(a.target) || a.target.closest(`[aria-controls="${CSS.escape(C)}"]`)) && a.preventDefault(), a.target instanceof Node && B?.contains(a.target) && a.preventDefault(), N && u(a.target) && a.preventDefault(), a.defaultPrevented || (T.current = !0)
                    },
                    onFocusOutside: a => {
                        let b = a.detail.originalEvent.relatedTarget;
                        N && (null == b || u(b)) && "composer" === (0, l.m)(a.target) && a.preventDefault(), a.target instanceof Element && a.target.matches('[role="tabpanel"][data-app-shell-tab-panel-controller="right"]') && a.preventDefault()
                    },
                    onPointerDownOutside: s,
                    style: {
                        maxHeight: "none",
                        maxWidth: "none"
                    },
                    children: z
                }), w[18] = M, w[19] = z, w[20] = A, w[21] = B, w[22] = Y, w[23] = C, w[24] = D, w[25] = N, w[26] = F, w[27] = H, w[28] = V, w[29] = J, w[30] = O, w[31] = o) : o = w[31], w[32] !== _ || w[33] !== o ? (r = (0, d.jsx)(_, {
                    children: o
                }), w[32] = _, w[33] = o, w[34] = r) : r = w[34], w[35] !== D || w[36] !== I || w[37] !== h || w[38] !== i || w[39] !== r ? (v = (0, d.jsxs)(n.a, {
                    open: D,
                    onOpenChange: I,
                    children: [h, i, r]
                }), w[35] = D, w[36] = I, w[37] = h, w[38] = i, w[39] = r, w[40] = v) : v = w[40], v
            }
        })
    }),
    BdYu: (function(a, b, c) {
        var d = c("QosV"),
            e = c("xs0G"),
            f = c("B7sF"),
            g = c("K45w"),
            h = c("jCHb"),
            i = c("kx7i"),
            j = c("Q840"),
            k = c("zd8w"),
            l = c("QcW8"),
            m = c("gbrq"),
            n = c("kl6F"),
            o = c("eGPX"),
            p = c("csXo"),
            q = c("w2yL"),
            r = c("KWzM"),
            s = c("GaCK");

        function t(a) {
            return a.isPopoverOpen ? {
                ...a,
                isPopoverOpen: !1
            } : a
        }

        function u(a, b, c, d, e, f, g) {
            return v({
                centeredPanelGap: g,
                isSummaryPanelPinned: b && (f ?? (0, m.u)(!0 === c ? a.get(m.F) : a.get(m.w, c), c)),
                floatingPanelWidth: e,
                mainContentTargetWidth: d
            })
        }

        function v(a) {
            let {
                centeredPanelGap: b,
                isSummaryPanelPinned: c,
                floatingPanelWidth: d,
                mainContentTargetWidth: e
            } = a, f = (0, q.c)(e, d, b);
            return null != d && "overlay" === f ? (0, q.b)({
                displayMode: (0, q.c)(e),
                isPinned: c
            }) : (0, q.b)({
                displayMode: f,
                isPinned: null != d || c,
                panelWidth: d
            })
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, e, f, t, w, x, y, z, A, B, C, D, E, F, G, H, I = (0, d.c)(77);
                I[0] !== a ? (b = void 0 === a ? {} : a, I[0] = a, I[1] = b) : b = I[1];
                let {
                    centeredPanelGap: J,
                    contentShiftResetKey: K,
                    controlledIsOpen: L,
                    floatingPanelWidth: M,
                    getCurrentPinStateKey: N,
                    isEnabled: O,
                    pane: P,
                    pinStateKey: Q
                } = b, R = void 0 === O || O, S = void 0 === Q || Q, T = (0, j.y)(n.a), U = (0, j.z)(null == L && !0 === S ? m.F : null), V = (0, j.x)(null == L && !0 !== S ? m.w : null, !0 !== S && S);
                I[2] !== L || I[3] !== V || I[4] !== U || I[5] !== S ? (c = L ?? (0, m.u)(!0 === S ? U : V, S), I[2] = L, I[3] = V, I[4] = U, I[5] = S, I[6] = c) : c = I[6];
                let W = c,
                    X = (0, j.z)(m.c),
                    Y = (0, j.z)(l.A),
                    Z = (0, j.z)(s.b),
                    $ = R && W,
                    _ = M ?? 300,
                    aa = R && null == M && (L ?? (Z.isPopoverOpen || "boolean" != typeof S && W)),
                    ab = (0, j.z)(o.c),
                    {
                        targetWidth: ac,
                        width: ad
                    } = (0, p.a)(void 0 === P ? "chat" : P);
                I[7] !== J || I[8] !== M || I[9] !== $ || I[10] !== ac ? (e = v({
                    centeredPanelGap: J,
                    isSummaryPanelPinned: $,
                    floatingPanelWidth: M,
                    mainContentTargetWidth: ac.get()
                }), I[7] = J, I[8] = M, I[9] = $, I[10] = ac, I[11] = e) : e = I[11];
                let ae = (0, g.a)(e);
                I[12] !== ac ? (f = a => ac.on("change", a), I[12] = ac, I[13] = f) : f = I[13], I[14] !== J || I[15] !== ac || I[16] !== _ ? (t = () => (0, q.c)(ac.get(), _, J), I[14] = J, I[15] = ac, I[16] = _, I[17] = t) : t = I[17], I[18] !== f || I[19] !== t ? (w = {
                    subscribe: f,
                    getSnapshot: t
                }, I[18] = f, I[19] = t, I[20] = w) : w = I[20];
                let af = w,
                    ag = (0, k.useSyncExternalStore)(af.subscribe, af.getSnapshot, af.getSnapshot),
                    ah = (0, k.useRef)(null);
                I[21] !== ae ? (x = ae.get(), I[21] = ae, I[22] = x) : x = I[22], I[23] !== ac ? (y = ac.get(), I[23] = ac, I[24] = y) : y = I[24], I[25] !== x || I[26] !== y ? (z = {
                    offset: x,
                    width: y
                }, I[25] = x, I[26] = y, I[27] = z) : z = I[27];
                let ai = (0, k.useRef)(z),
                    aj = (0, k.useRef)(!1),
                    ak = (0, k.useRef)(K),
                    al = (0, k.useRef)(X),
                    am = (0, k.useRef)(Y),
                    an = $ && null == M;
                I[28] !== ag || I[29] !== aa || I[30] !== an ? (A = (0, q.a)({
                    displayMode: ag,
                    isPinned: an,
                    isPopoverOpen: aa
                }), I[28] = ag, I[29] = aa, I[30] = an, I[31] = A) : A = I[31];
                let ao = A;
                return I[32] !== J || I[33] !== ae || I[34] !== K || I[35] !== L || I[36] !== M || I[37] !== N || I[38] !== Y || I[39] !== R || I[40] !== X || I[41] !== ac || I[42] !== S || I[43] !== T ? (B = () => {
                    let a = al.current !== X,
                        b = am.current !== Y;
                    if (!aj.current && ak.current === K && !a && !b) return;
                    aj.current = !1, ak.current = K, al.current = X, am.current = Y;
                    let c = u(T, R, N?.() ?? S, ac.get(), M, L, J);
                    ai.current = {
                        offset: c,
                        width: ac.get()
                    }, ah.current?.(), ae.jump(c)
                }, C = [J, ae, K, L, M, N, Y, R, ac, S, X, T], I[32] = J, I[33] = ae, I[34] = K, I[35] = L, I[36] = M, I[37] = N, I[38] = Y, I[39] = R, I[40] = X, I[41] = ac, I[42] = S, I[43] = T, I[44] = B, I[45] = C) : (B = I[44], C = I[45]), (0, k.useLayoutEffect)(B, C), I[46] !== J || I[47] !== ad || I[48] !== ae || I[49] !== L || I[50] !== M || I[51] !== N || I[52] !== R || I[53] !== ac || I[54] !== S || I[55] !== T || I[56] !== ab ? (D = () => {
                    let a = (a, b) => {
                        let c = u(T, R, N?.() ?? S, a, M, L, J),
                            d = ai.current,
                            e = ae.get();
                        if (d.offset === c && (e === c || d.width === a && !b)) return;
                        if (ai.current = {
                                offset: c,
                                width: a
                            }, ah.current?.(), b || 0 === a || e === c) return void ae.jump(c);
                        let f = ad.get();
                        if (f === a) {
                            let a = (0, h.a)(ae, c, r.a),
                                b = document.activeViewTransition;
                            if (null != b) {
                                a.pause();
                                let c = () => a.play();
                                b.ready.then(c, c)
                            }
                            ah.current = () => a.stop();
                            return
                        }
                        let g = (0, i.a)([f, a], [e, c]),
                            j = ad.on("change", a => {
                                let b = g(a);
                                ae.set(b), b === c && queueMicrotask(j)
                            });
                        ah.current = j
                    };
                    return a(ac.get(), ab), ac.on("change", b => {
                        a(b, ab || 0 === ac.getPrevious() || T.get(m.c) !== al.current)
                    })
                }, I[46] = J, I[47] = ad, I[48] = ae, I[49] = L, I[50] = M, I[51] = N, I[52] = R, I[53] = ac, I[54] = S, I[55] = T, I[56] = ab, I[57] = D) : D = I[57], I[58] !== J || I[59] !== ad || I[60] !== ae || I[61] !== L || I[62] !== M || I[63] !== N || I[64] !== R || I[65] !== $ || I[66] !== ac || I[67] !== S || I[68] !== T || I[69] !== ab ? (E = [J, ad, ae, L, M, N, R, $, ac, S, T, ab], I[58] = J, I[59] = ad, I[60] = ae, I[61] = L, I[62] = M, I[63] = N, I[64] = R, I[65] = $, I[66] = ac, I[67] = S, I[68] = T, I[69] = ab, I[70] = E) : E = I[70], (0, k.useLayoutEffect)(D, E), I[71] === Symbol.for("react.memo_cache_sentinel") ? (F = () => () => {
                    aj.current = !0, ah.current?.()
                }, G = [], I[71] = F, I[72] = G) : (F = I[71], G = I[72]), (0, k.useLayoutEffect)(F, G), I[73] !== ae || I[74] !== ag || I[75] !== ao ? (H = {
                    contentShift: ae,
                    displayMode: ag,
                    ...ao
                }, I[73] = ae, I[74] = ag, I[75] = ao, I[76] = H) : H = I[76], H
            },
            b: function(a, b) {
                let c, g, h, i, l, n, o = (0, d.c)(15),
                    r = void 0 !== b && b,
                    u = (0, j.z)(m.c),
                    v = (0, j.z)(m.l),
                    {
                        targetWidth: w
                    } = (0, p.a)();
                o[0] !== r || o[1] !== w || o[2] !== a ? (c = () => {
                    var b, c;
                    b = a, c = r ? "overlay" : (0, q.c)(w.get()), b.set(s.b, a => {
                        let b = "overlay" === c && a.isPopoverOpen;
                        return a.displayMode === c && a.isPopoverOpen === b ? a : {
                            displayMode: c,
                            isPopoverOpen: b
                        }
                    })
                }, o[0] = r, o[1] = w, o[2] = a, o[3] = c) : c = o[3];
                let x = c;
                o[4] !== x ? (g = () => {
                    e.b.update(x)
                }, o[4] = x, o[5] = g) : g = o[5], (0, f.a)(w, "change", g), o[6] !== x ? (h = () => (x(), () => (0, e.a)(x)), o[6] = x, o[7] = h) : h = o[7], o[8] !== u || o[9] !== v || o[10] !== x ? (i = [u, v, x], o[8] = u, o[9] = v, o[10] = x, o[11] = i) : i = o[11], (0, k.useLayoutEffect)(h, i), o[12] !== a ? (l = () => () => {
                    a.set(s.b, t)
                }, n = [a], o[12] = a, o[13] = l, o[14] = n) : (l = o[13], n = o[14]), (0, k.useLayoutEffect)(l, n)
            }
        })
    }),
    enMl: (function(a, b, c) {
        var d = c("QosV"),
            e = c("Q840"),
            f = c("zd8w"),
            g = c("tSEg"),
            h = c("giVD");
        c.d(b, {}, {
            a: function(a) {
                let b, c, i, j, k = (0, d.c)(9),
                    {
                        icon: l,
                        isVisible: m,
                        title: n
                    } = a,
                    o = void 0 === l ? null : l,
                    p = void 0 === m || m,
                    q = (0, e.y)(g.a);
                return k[0] !== o || k[1] !== p || k[2] !== q || k[3] !== n ? (b = () => {
                    q.set(h.b, o), q.set(h.d, n), q.set(h.f, p)
                }, c = [o, p, q, n], k[0] = o, k[1] = p, k[2] = q, k[3] = n, k[4] = b, k[5] = c) : (b = k[4], c = k[5]), (0, f.useLayoutEffect)(b, c), k[6] !== q ? (i = () => () => {
                    q.set(h.b, null), q.set(h.d, null), q.set(h.f, !0)
                }, j = [q], k[6] = q, k[7] = i, k[8] = j) : (i = k[7], j = k[8]), (0, f.useLayoutEffect)(i, j), null
            }
        })
    }),
    AhTG: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Q840"),
            g = c("oKDe"),
            h = c("D7s7");

        function i(a) {
            let b, c = (0, e.c)(3),
                {
                    children: i
                } = a,
                j = (0, f.z)(g.c);
            return c[0] !== i || c[1] !== j ? (b = j ? (0, d.jsx)(h.b, {
                ...j
            }) : i, c[0] = i, c[1] = j, c[2] = b) : b = c[2], b
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, j = (0, e.c)(7),
                    {
                        title: k,
                        project: l,
                        onActivate: m
                    } = a,
                    n = (0, f.z)(g.d) ?? void 0;
                return j[0] !== m || j[1] !== n || j[2] !== k ? (b = (0, d.jsx)(i, {
                    children: (0, d.jsx)(h.a, {
                        title: k,
                        onActivate: m,
                        onDoubleClick: n
                    })
                }), j[0] = m, j[1] = n, j[2] = k, j[3] = b) : b = j[3], j[4] !== l || j[5] !== b ? (c = (0, d.jsxs)("div", {
                    className: "flex w-fit max-w-full min-w-0 items-center",
                    children: [l, b]
                }), j[4] = l, j[5] = b, j[6] = c) : c = j[6], c
            },
            b: i
        })
    }),
    AD0n: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("oyxz"),
            g = c("bqtn"),
            h = c("bf6R");

        function i() {}
        c.d(b, {}, {
            a: function(a) {
                let b, c, j, k = (0, e.c)(13),
                    {
                        startNewChat: l,
                        renderChatMenu: m,
                        presentation: n,
                        newChatDisabled: o,
                        onAction: p,
                        fixedActions: q
                    } = a,
                    r = void 0 === n ? "chat" : n,
                    s = void 0 !== o && o,
                    t = void 0 === p ? i : p;
                if (null != m) {
                    let a;
                    return k[0] !== q || k[1] !== s || k[2] !== t || k[3] !== r || k[4] !== m ? (a = m({
                        presentation: r,
                        newChatDisabled: s,
                        onAction: t,
                        fixedActions: q
                    }), k[0] = q, k[1] = s, k[2] = t, k[3] = r, k[4] = m, k[5] = a) : a = k[5], a
                }
                return k[6] !== t || k[7] !== l ? (b = () => {
                    t(), l()
                }, k[6] = t, k[7] = l, k[8] = b) : b = k[8], k[9] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, d.jsx)(f.a, {
                    id: "floatingComposer.newChat",
                    defaultMessage: "New chat"
                }), k[9] = c) : c = k[9], k[10] !== s || k[11] !== b ? (j = (0, d.jsx)(g.c.Item, {
                    LeftIcon: h.ji,
                    disabled: s,
                    onSelect: b,
                    children: c
                }), k[10] = s, k[11] = b, k[12] = j) : j = k[12], j
            }
        })
    }),
    csXo: (function(a, b, c) {
        var d = c("QosV"),
            e = c("K45w"),
            f = c("Q840"),
            g = c("zd8w"),
            h = c("I7bK"),
            i = c("pZMh");
        c.d(b, {}, {
            a: function(a) {
                let b, c = (0, d.c)(11),
                    j = void 0 === a ? "chat" : a,
                    k = (0, g.useContext)(h.c),
                    l = (0, e.a)(0),
                    m = "chat" === j && k?.hasPrimaryPane === !0,
                    n = (0, f.z)(!!m && i.m);
                if ("content" === j || m) {
                    let a, b, d = k?.secondaryPaneLayout,
                        e = "content" === j || n;
                    c[0] !== e || c[1] !== d ? (a = e ? d?.getElement() : null, c[0] = e, c[1] = d, c[2] = a) : a = c[2];
                    let f = e ? d?.targetWidth ?? l : l,
                        g = d?.width ?? l;
                    return c[3] !== a || c[4] !== f || c[5] !== g ? (b = {
                        element: a,
                        targetWidth: f,
                        width: g
                    }, c[3] = a, c[4] = f, c[5] = g, c[6] = b) : b = c[6], b
                }
                let o = k?.mainContentTargetWidth ?? l,
                    p = k?.isContentFullWidth ? null : void 0,
                    q = k?.mainPaneWidth ?? o;
                return c[7] !== p || c[8] !== q || c[9] !== o ? (b = {
                    element: p,
                    targetWidth: o,
                    width: q
                }, c[7] = p, c[8] = q, c[9] = o, c[10] = b) : b = c[10], b
            }
        })
    }),
    dDDU: (function(a, b, c) {
        var d = c("Qgfj"),
            e = c("Kyn2"),
            f = c("nnol"),
            g = c("QcW8"),
            h = c("ZU27"),
            i = c("bf6R"),
            j = c("GaA7"),
            k = c("Vhua"),
            l = c("NkWL");
        c.d(b, {}, {
            a: function(a) {
                let b = a.get(g.Y);
                return a.get(g.V) || b?.isVisible !== !0 || "split" !== b.mode && !a.get(l.c) ? [] : function(a, b) {
                    let g = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h.l,
                        m = a.get(k.i),
                        n = [];
                    return "chat" === b || b.isWorkspaceHome || null == b.tabType.windowTransfer || null == j.a.detachedWindows || n.push({
                        id: "unified-workspace-move-new-window",
                        enabled: !m && !(0, f.c)(a, b.tabId) && b.tabType.windowTransfer.canTransfer(a, b.props),
                        icon: i.dh,
                        message: (0, d.e)({
                            id: "threadWorkspace.contextMenu.moveToNewWindow",
                            defaultMessage: "Move to new window"
                        }),
                        onSelect: () => {
                            (0, e.a)(a, Promise.resolve().then(() => c("K3jS")).then(c => {
                                let {
                                    moveTabToNewWindow: d
                                } = c;
                                return d(a, g, b, null)
                            }))
                        }
                    }), "chat" === b && a.get(l.c) && n.push({
                        id: "close-tab",
                        menuShortcut: "W",
                        icon: i.Lj,
                        message: (0, d.e)({
                            id: "codex.tabs.contextMenu.close",
                            defaultMessage: "Close"
                        }),
                        onSelect: () => (0, l.a)(a)
                    }), n
                }(a, "chat")
            }
        })
    })
};