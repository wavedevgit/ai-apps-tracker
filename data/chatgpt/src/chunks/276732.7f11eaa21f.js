export const __rspack_esm_ids = [276732];
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
    iaTG: (function(e, t, n) {
        n.d(t, {
            a: () => p
        });
        var r = n("i5ac"),
            l = n.n(r),
            o = n("SKhr"),
            i = n("L6Md");
        let a = Array.from("αβγδεζηθικλμνξοπρστυφχψω"),
            u = new Map([..."alpha beta gamma delta epsilon zeta eta theta iota kappa lambda mu nu xi omicron pi rho sigma tau upsilon phi chi psi omega".split(" ").map((e, t) => [e, a[t]]), ..."nabla:∇ partial:∂ cdot:⋅ times:× div:÷ pm:± mp:∓ le:≤ leq:≤ ge:≥ geq:≥ ne:≠ neq:≠ infty:∞ sum:∑ prod:∏ int:∫ in:∈ notin:∉ to:→ rightarrow:→ leftarrow:←".split(" ").map(e => {
                let [t, n] = e.split(":");
                return [t, n]
            })]),
            s = /^\\(?:mathbf|boldsymbol|bm|mathrm|mathit|mathsf|mathtt|mathnormal|mathbb|mathcal|mathscr|mathfrak|textbf|textit|textrm)$/,
            c = /^\\(?:quad|qquad|enspace|thinspace|medspace|thickspace|negthinspace|displaystyle|textstyle|scriptstyle|scriptscriptstyle|limits|nolimits|[,;:! ])$/,
            h = /^\\(?:left|right|middle|big|Big|bigg|Bigg|bigl|bigr|Bigl|Bigr|biggl|biggr|Biggl|Biggr)$/;

        function d(e) {
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
                let n = i(),
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

            function i() {
                let e = t[l++];
                if (null == e || "}" === e.value) throw Error("Incomplete math");
                if ("{" === e.value) {
                    let r = [];
                    for (; t[l]?.value !== "}";) r.push(...i());
                    return n.push({
                        start: e.start,
                        end: t[l++].end
                    }), r
                }
                if (s.test(e.value)) {
                    let r = i();
                    return n.push({
                        start: e.start,
                        end: t[l - 1].end
                    }), r
                }
                if (c.test(e.value)) return [];
                if (h.test(e.value)) {
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
                if (/^(?:[_^]|\\(?:sqrt|vec|hat|bar|overline|underline))$/.test(e.value) || e.value.startsWith("\\") && !u.has(e.value.slice(1).replace(/^var/, "").toLowerCase()) && t[l]?.value === "{") {
                    if (t[l]?.value === "[") throw Error("Indexed argument");
                    return [e, ...o()]
                }
                let a = e.value.replace(/^\\/, "");
                return a = (a = (a = u.get(a.replace(/^var/, "").toLowerCase()) ?? e.value).replace(/[\u{1D400}-\u{1D7FF}]/gu, e => e.normalize("NFKC")).toLowerCase()).replace(/[ϵϑϕϖϱς−·]/g, e => "εθφπρσ-⋅" ["ϵϑϕϖϱς−·".indexOf(e)]), [{
                    ...e,
                    value: a
                }]
            }
            try {
                let e = [];
                for (; l < t.length;) e.push(...i());
                return 0 === r.length ? {
                    tokens: e,
                    groups: n
                } : null
            } catch {
                return null
            }
        }
        var g = n("agQa"),
            m = n("QxH2"),
            f = n("h8aU");

        function p(e) {
            let {
                contextId: t,
                getTurns: n,
                hydratePersistedMatch: r,
                revealUnrenderedMatches: a = !1,
                searchPersisted: s,
                searchMath: c = !1,
                scrollAdapter: h
            } = e;
            return {
                domain: "conversation",
                contextId: t,
                async search(e, t) {
                    var r, a;
                    let h, m, p = await async function(e, t, n, r) {
                        let l = e.query.trim(),
                            a = n && l.length > 1 && l.startsWith("/") && l.endsWith("/") ? l.slice(1, -1) : void 0,
                            s = t.flatMap(e => e.units.flatMap(t => (t.textChunks ?? [t.text]).flatMap((r, l) => {
                                let o = {
                                        turnKey: e.turnKey,
                                        unitId: t.unitId,
                                        text: n ? r.replace(/\s+/g, " ").trim() : r,
                                        equationIndex: void 0
                                    },
                                    i = n ? t.equations?.[l] : void 0;
                                return null == i ? [o] : [o, {
                                    ...o,
                                    text: i,
                                    equationIndex: l
                                }]
                            }))),
                            c = {
                                domain: e.domain,
                                contextId: e.contextId,
                                query: l,
                                regex: a,
                                searchMath: n || void 0,
                                matches: [],
                                totalMatches: 0,
                                isCapped: !1
                            };
                        if (!l) return c;
                        let h = null == a ? null : await (0, g.a)({
                            query: a,
                            texts: s.map(e => e.text),
                            mathTexts: s.map(e => null != e.equationIndex),
                            maxMatches: 250
                        }, r);
                        if (h?.error) return {
                            ...c,
                            error: h.error
                        };
                        c.totalMatches = h?.totalMatches ?? 0;
                        let m = new Map;
                        for (let [t, n] of s.entries()) {
                            let r = (0, o.c)(n.turnKey, n.unitId),
                                a = m.get(r) ?? 0,
                                {
                                    offsets: s,
                                    totalMatches: g
                                } = null != h ? {
                                    offsets: h.offsets[t] ?? [],
                                    totalMatches: 0
                                } : (null == n.equationIndex ? f.a : function(e, t, n) {
                                    let r = t.trim(),
                                        l = [];
                                    if (!r) return {
                                        offsets: l,
                                        totalMatches: 0
                                    };
                                    let o = d(e),
                                        a = d(u.get(r) ?? r);
                                    if (null == o || null == a) {
                                        let t = e.toLowerCase(),
                                            o = r.toLowerCase(),
                                            a = [...e.matchAll(/\\[a-zA-Z]+/g)];
                                        for (let n = t.indexOf(o); n >= 0; n = t.indexOf(o, n + o.length)) a.some(e => n > e.index && n < e.index + e[0].length) || l.push((0, i.a)(e, {
                                            start: n,
                                            end: n + r.length
                                        }));
                                        return {
                                            offsets: l.slice(0, n),
                                            totalMatches: l.length
                                        }
                                    }
                                    let s = 0;
                                    for (let e = 0; a.tokens.length > 0 && e <= o.tokens.length - a.tokens.length; e += 1) {
                                        if (!a.tokens.every((t, n) => t.value === o.tokens[e + n].value)) continue;
                                        let t = o.tokens.slice(e, e + a.tokens.length),
                                            r = t[0].start,
                                            i = t[t.length - 1].end;
                                        for (let e of t) r = Math.min(r, e.delimiter?.start ?? r), i = Math.max(i, e.delimiter?.end ?? i);
                                        for (let e of o.groups) r < e.start && i > e.start && i < e.end && (i = e.end), r > e.start && r < e.end && i > e.end && (r = e.start);
                                        s += 1, l.length < n && l.push({
                                            start: r,
                                            end: i
                                        }), e += a.tokens.length - 1
                                    }
                                    return {
                                        offsets: l,
                                        totalMatches: s
                                    }
                                })(n.text, l, 250 - c.matches.length);
                            for (let [t, r] of(c.totalMatches += g, s.entries())) {
                                let l = {
                                    domain: "conversation",
                                    contextId: e.contextId,
                                    turnKey: n.turnKey,
                                    unitId: n.unitId,
                                    matchIndex: null == n.equationIndex ? a + t : t,
                                    equationIndex: n.equationIndex,
                                    equationRange: null == n.equationIndex ? void 0 : r
                                };
                                c.matches.push({
                                    id: (0, o.b)(l),
                                    ordinal: c.matches.length + 1,
                                    location: l
                                })
                            }
                            null == n.equationIndex && m.set(r, a + s.length)
                        }
                        return c.isCapped = c.totalMatches > c.matches.length, c
                    }(e, n(), c, t?.signal);
                    if (c || null == s) return p;
                    let x = await s(e, t);
                    return null == x ? p : (r = p, a = x, h = new Map(r.matches.map(e => [e.id, e])), m = l()([...a.matches.map(e => h.get(e.id) ?? e), ...r.matches], "id").map((e, t) => ({
                        ...e,
                        ordinal: t + 1
                    })), {
                        ...r,
                        matches: m,
                        totalMatches: Math.max(m.length, r.totalMatches, a.totalMatches),
                        isCapped: r.isCapped || a.isCapped
                    })
                },
                async ensureVisible(e, n) {
                    if ("conversation" !== e.domain || e.contextId !== t || null != e.turnCursor && null != r && (!await r(e, n) || n?.signal?.aborted)) return;
                    let l = null != e.turnCursor,
                        i = h.getTurnContainer(e.turnKey),
                        u = (0, o.b)(e),
                        s = a && null != i && null == (0, o.g)({
                            container: i,
                            matchId: u,
                            includeShadowRoots: !1
                        });
                    if (null == i || l || s) {
                        if (n?.signal?.aborted || (n?.signal == null ? await h.scrollToTurn(e.turnKey) : await h.scrollToTurn(e.turnKey, {
                                signal: n.signal
                            }), n?.signal?.aborted)) return;
                        i = h.getTurnContainer(e.turnKey)
                    }
                    null != i && await (0, m.b)({
                        container: i,
                        matchId: u,
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
            i = n("SKhr"),
            a = n("gSdW");

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
        var s = n("TwSq");

        function c(e) {
            let t, c, f, p, x, y, P, v, w, b, S, E, I, C, B = (0, r.c)(25),
                {
                    containerRef: M,
                    contextId: H,
                    onContentChange: R
                } = e,
                K = (0, l.z)(s.d),
                T = (0, l.z)(s.g),
                F = K?.contextId === H ? K : null,
                D = null == F ? null : T?.id ?? null,
                {
                    schedule: L,
                    cancel: k
                } = (S = (0, r.c)(5), E = (0, o.useRef)(null), 80 !== S[0] ? (v = e => {
                    null == E.current && (E.current = window.setTimeout(() => {
                        E.current = null, e()
                    }, 80))
                }, S[0] = 80, S[1] = v) : v = S[1], I = v, S[2] === Symbol.for("react.memo_cache_sentinel") ? (w = () => {
                    null != E.current && (window.clearTimeout(E.current), E.current = null)
                }, S[2] = w) : w = S[2], C = w, S[3] !== I ? (b = {
                    schedule: I,
                    cancel: C
                }, S[3] = I, S[4] = b) : b = S[4], b);
            B[0] !== R ? (t = () => R?.(), B[0] = R, B[1] = t) : t = B[1];
            let q = (0, o.useEffectEvent)(t);
            B[2] !== D ? (c = (e, t) => {
                t.forEach(t => {
                    (0, i.l)({
                        element: t,
                        matchId: e
                    }), (0, i.k)(t, e === D)
                })
            }, B[2] = D, B[3] = c) : c = B[3];
            let A = (0, o.useEffectEvent)(c);
            B[4] !== F || B[5] !== M || B[6] !== A ? (f = async (e, t) => {
                let r = M.current;
                if (null == r || ((0, i.a)(r, {
                        includeShadowRoots: !1
                    }), t.takeRecords(), null == F)) return;
                let l = (0, a.a)(F.matches),
                    o = Array.from(r.querySelectorAll("[data-content-search-unit-key]")).flatMap(e => {
                        let t = l.get(e.dataset.contentSearchUnitKey ?? "");
                        return null == t ? [] : [{
                            element: e,
                            matches: t
                        }]
                    }),
                    s = o.map(m),
                    c = e => {
                        e.forEach((e, t) => e.forEach((e, n) => A(s[t].matches[n].id, e)))
                    };
                if (!F.searchMath) {
                    c(s.map(e => {
                        let {
                            element: t,
                            matches: n
                        } = e;
                        return (0, i.i)({
                            target: t,
                            query: F.query,
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
                        } = await Promise.all([n.e(990054), n.e(559373)]).then(n.bind(n, "RlG8")), a = u(r), s = new Map(a.map(e => {
                            let {
                                node: t
                            } = e;
                            return [t, t.data]
                        })), c = new Set(a.map(e => {
                            let {
                                color: t
                            } = e;
                            return t
                        })), h = document.createElement("span"), d = t.map(() => {
                            let e, t = c.size + 1;
                            do e = `#${t.toString(16).padStart(6,"0")}`, h.style.color = e, t += 1; while (c.has(h.style.color)) return c.add(h.style.color), {
                                hex: e,
                                css: h.style.color
                            }
                        });
                        h.style.color = "";
                        let g = new Map(d.map((e, t) => {
                                let {
                                    css: n
                                } = e;
                                return [n, t]
                            })),
                            m = new Map,
                            f = n => {
                                let r = l;
                                for (let e of [...n].reverse()) {
                                    let {
                                        start: n,
                                        end: l
                                    } = t[e];
                                    r = `${r.slice(0,n)}{\\textcolor{${d[e].hex}}{${r.slice(n,l)}}}${r.slice(l)}`
                                }
                                try {
                                    h.innerHTML = o.renderToString(r, {
                                        displayMode: null != e.querySelector(".katex-display"),
                                        strict: "ignore",
                                        output: "html"
                                    })
                                } catch {
                                    return !1
                                }
                                let i = u(h),
                                    s = i.length === a.length && i.every((e, t) => {
                                        let {
                                            text: n
                                        } = e;
                                        return n === a[t].text
                                    });
                                return i.forEach((e, t) => {
                                    let n = g.get(e.color);
                                    if (null == n) return;
                                    let r = a[t];
                                    if (!s) {
                                        let t = a.filter(t => {
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
                                    m.set(r, n)
                                }), !0
                            };
                        return f(t.map((e, t) => t)) || t.forEach((e, t) => f([t])), () => {
                            let n, o = t.map(() => []);
                            if (e.dataset.mathSource !== l || !e.contains(r) || [...s].some(e => {
                                    let [t, n] = e;
                                    return !r.contains(t) || t.data !== n
                                })) return o;
                            let u = [];
                            for (let e of a) {
                                let t = m.get(e);
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
                                of u.reverse()) o[e].unshift(... function e(t) {
                                let n = t[0],
                                    r = t[t.length - 1],
                                    l = document.createRange();
                                l.setStart(n.node, n.offset), l.setEnd(r.node, r.offset + r.text.length);
                                let o = l.commonAncestorContainer;
                                for (; l.startContainer !== o && 0 === l.startOffset;) l.setStartBefore(l.startContainer);
                                for (; l.endContainer !== o && l.endOffset === (l.endContainer instanceof Text ? l.endContainer.length : l.endContainer.childNodes.length);) l.setEndAfter(l.endContainer);
                                if (l.startContainer !== l.endContainer) return [...t].reverse().flatMap(t => e([t])).reverse();
                                let a = (0, i.e)();
                                return l.surroundContents(a), [a]
                            }(t));
                            return o
                        }
                    })(e, l.map(g)).then(e => () => e().forEach((e, t) => A(l[t].id, e))))
                });
                let [p, x] = await Promise.all([(0, i.j)(s.map(d), F.query, F.regex, e), Promise.all(f)]);
                e.aborted || (c(p()), x.forEach(h), t.takeRecords())
            }, B[4] = F, B[5] = M, B[6] = A, B[7] = f) : f = B[7];
            let O = (0, o.useEffectEvent)(f);
            B[8] !== F?.runId || B[9] !== O || B[10] !== k || B[11] !== M || B[12] !== q || B[13] !== L ? (p = () => {
                let e = M.current;
                if (null == e) return;
                let t = null,
                    n = () => {
                        t?.abort(), O((t = new AbortController).signal, r)
                    },
                    r = new MutationObserver(e => {
                        (0, i.m)(e) && (t?.abort(), L(() => {
                            q(), n()
                        }))
                    });
                return F?.runId == null ? void n() : (r.observe(e, {
                    childList: !0,
                    subtree: !0,
                    characterData: !0,
                    attributeFilter: ["hidden", "inert"]
                }), n(), () => {
                    r.disconnect(), t?.abort(), k(), (0, i.a)(e, {
                        includeShadowRoots: !1
                    })
                })
            }, B[8] = F?.runId, B[9] = O, B[10] = k, B[11] = M, B[12] = q, B[13] = L, B[14] = p) : p = B[14];
            let z = F?.runId;
            B[15] !== k || B[16] !== M || B[17] !== H || B[18] !== L || B[19] !== z ? (x = [z, k, M, H, L], B[15] = k, B[16] = M, B[17] = H, B[18] = L, B[19] = z, B[20] = x) : x = B[20], (0, o.useEffect)(p, x), B[21] !== D || B[22] !== M ? (y = () => {
                M.current?.querySelectorAll("mark[data-search-match]").forEach(e => {
                    (0, i.k)(e, e.dataset.contentSearchMatchId === D)
                })
            }, P = [D, M], B[21] = D, B[22] = M, B[23] = y, B[24] = P) : (y = B[23], P = B[24]), (0, o.useEffect)(y, P)
        }

        function h(e) {
            return e()
        }

        function d(e) {
            let {
                element: t,
                matches: n
            } = e;
            return {
                element: t,
                maxMatches: n.length
            }
        }

        function g(e) {
            let {
                range: t
            } = e;
            return t
        }

        function m(e) {
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
            l = n("QosV"),
            o = n("zd8w"),
            i = n("oyxz");
        n.d(t, {}, {
            a: function(e) {
                let t, n, a, u, s, c, h, d, g, m = (0, l.c)(15),
                    {
                        onNavigate: f
                    } = e,
                    p = (0, o.useRef)(null),
                    x = (0, o.useRef)(null),
                    [y, P] = (0, o.useState)(!1);
                return m[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => {
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
                }, n = [], m[0] = t, m[1] = n) : (t = m[0], n = m[1]), (0, o.useEffect)(t, n), m[2] === Symbol.for("react.memo_cache_sentinel") ? (a = () => x.current?.abort(), m[2] = a) : a = m[2], m[3] !== f ? (u = e => {
                    x.current?.abort();
                    let t = e.currentTarget;
                    t.tabIndex = -1;
                    let n = new AbortController;
                    x.current = n, P(!1), f(n.signal).then(e => {
                        !n.signal.aborted && t.isConnected && t.ownerDocument.activeElement === t && (e?.isConnected ? e.focus({
                            preventScroll: !0
                        }) : P(!0))
                    })
                }, m[3] = f, m[4] = u) : u = m[4], m[5] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, r.jsx)(i.a, {
                    id: "codex.conversation.latestResponse",
                    defaultMessage: "Latest response",
                    description: "Invisible heading before the composer; focusing it moves to the newest assistant response"
                }), m[5] = s) : s = m[5], m[6] !== u ? (c = (0, r.jsx)("h4", {
                    ref: p,
                    className: "sr-only m-0 select-none",
                    tabIndex: 0,
                    onBlur: a,
                    onFocus: u,
                    children: s
                }), m[6] = u, m[7] = c) : c = m[7], m[8] !== y ? (h = y ? (0, r.jsx)(i.a, {
                    id: "codex.conversation.latestResponseUnavailable",
                    defaultMessage: "No response available",
                    description: "Screen-reader announcement when navigation to the latest assistant response finds no response in the conversation"
                }) : null, m[8] = y, m[9] = h) : h = m[9], m[10] !== h ? (d = (0, r.jsx)("span", {
                    className: "sr-only m-0",
                    role: "status",
                    children: h
                }), m[10] = h, m[11] = d) : d = m[11], m[12] !== c || m[13] !== d ? (g = (0, r.jsxs)(r.Fragment, {
                    children: [c, d]
                }), m[12] = c, m[13] = d, m[14] = g) : g = m[14], g
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
    wltt: (function(e, t, n) {
        n.d(t, {
            a: () => B
        });
        var r = n("ABep"),
            l = n("QosV"),
            o = n("on57"),
            i = n("BolX"),
            a = n("zd8w"),
            u = n("v7qY"),
            s = n("wD9O"),
            c = n("zm5q"),
            h = n("f4Vb"),
            d = n("QEDJ"),
            g = n("lsfk"),
            m = n("uYx2"),
            f = n("g3o5"),
            p = n("bIvi"),
            x = n("hTLy"),
            y = n.n(x),
            P = n("R9dK"),
            v = n.n(P);

        function w(e) {
            let {
                collapseEmptyRows: t = !1,
                entries: n,
                gapPx: r,
                measuredHeightsByKey: l,
                pixelScale: o
            } = e, i = new Set, a = [], u = [], s = [], c = new Map, h = [], d = 0;
            for (let [e, g] of n.entries()) {
                let n = g.turnKey,
                    m = Math.max(g.minHeightPx ?? 0, l[n] ?? g.estimatedHeightPx ?? 280);
                null != o && (m = Math.round(m * o) / o);
                let f = (t ? d > 0 && m > 0 : e > 0) ? g.gapBeforePx ?? r : 0;
                null != o && (f = Math.round(f * o) / o), d += f, a.push(f), "gap" === g.type && i.add(n), c.set(n, e), h.push(n), s.push(d), u.push(m), d += m
            }
            return {
                bottomOffsetsPx: s.map((e, t) => d - e - (u[t] ?? 0)),
                collapseEmptyRows: t,
                gapKeys: i,
                gapsBeforePx: a,
                heightsPx: u,
                topOffsetsPx: s,
                totalHeightPx: d,
                turnIndexByKey: c,
                turnKeys: h
            }
        }

        function b(e) {
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
                i = Math.min(o + Math.max(0, l), n.totalHeightPx),
                a = n.collapseEmptyRows && i === n.totalHeightPx ? 0 : function(e, t) {
                    let n = 0,
                        r = e.length;
                    for (; n < r;) {
                        let l = Math.floor((n + r) / 2);
                        (e[l] ?? 0) < t ? r = l : n = l + 1
                    }
                    return n
                }(n.bottomOffsetsPx, i),
                u = n.collapseEmptyRows && 0 === o ? n.turnKeys.length : function(e, t, n) {
                    let r = 0,
                        l = e.length;
                    for (; r < l;) {
                        let o = Math.floor((r + l) / 2);
                        (e[o] ?? 0) + (t[o] ?? 0) <= n ? l = o : r = o + 1
                    }
                    return r
                }(n.bottomOffsetsPx, n.heightsPx, o);
            return {
                startIndex: Math.max(0, a - r),
                endIndex: Math.min(n.turnKeys.length, Math.max(u, a + 1) + r)
            }
        }

        function S(e) {
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

        function E(e) {
            let {
                layout: t,
                turnKey: n,
                viewportHeightPx: r
            } = e, l = t.turnIndexByKey.get(n);
            return null == l ? null : Math.max(0, (t.bottomOffsetsPx[l] ?? 0) - r / 2 + (t.heightsPx[l] ?? 0) / 2)
        }

        function I(e, t, n) {
            let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            if (null == e || null == t) return null;
            let l = t.getBoundingClientRect();
            if (0 === l.height) return null;
            let o = e.querySelectorAll("[data-history-message-id]"),
                i = () => {
                    let t = e.getBoundingClientRect();
                    return "retention" === n && null != r && t.height > 0 && t.bottom > l.top && t.top < l.bottom ? r : null
                };
            if (0 === o.length) return i();
            let a = 0,
                u = o.length;
            for (; a < u;) {
                let e = Math.floor((a + u) / 2),
                    t = o[e].getBoundingClientRect();
                if (0 === t.height) return null;
                t.bottom <= l.top ? a = e + 1 : u = e
            }
            let s = o[a];
            if (null == s) return i();
            let c = s.getBoundingClientRect();
            if (0 === c.height || c.top >= l.bottom) return null;
            let h = "retention" === n && c.top > l.top ? o[a - 1] : s;
            return h?.dataset.historyMessageId ?? null
        }
        let C = {};

        function B(e) {
            let t, n, x, P, B, q, A, O, z, U, _, N, j, V, W, $, Q, G, X, Y, Z, J, ee, et, en, er, el, eo, ei, ea, eu, es, ec, eh, ed, eg, em, ef, ep, ex, ey, eP, ev, ew, eb, eS, eE, eI, eC, eB, eM, eH, eR, eK, eT, eF, eD, eL, ek, eq, eA, eO, ez, eU, e_, eN, ej, eV, eW, e$, eQ, eG, eX, eY = (0, l.c)(273),
                {
                    collapseEmptyRows: eZ,
                    entries: eJ,
                    RowComponent: e0,
                    onApiChange: e1,
                    onVisibleContentReady: e2,
                    className: e3,
                    gapPx: e4,
                    getBottomScrollPaddingPx: e5,
                    isSubmitPlacementAnimating: e6,
                    onLatestTurnHeightChange: e7,
                    preserveMeasuredTurnViewport: e8,
                    preserveUnderfilledViewport: e9,
                    getPendingRestoreScrollDistanceFromBottomPx: te,
                    restoreScrollDistanceFromBottomPx: tt,
                    initialRestoreState: tn,
                    latestTurnFooter: tr,
                    latestTurnFooterKey: tl,
                    onRestoreStateChange: to,
                    onViewportChange: ti,
                    onHistoryRetentionBoundaryChange: ta,
                    latestTurnSynchronousMeasurementKey: tu,
                    layoutReadyTurnKey: ts,
                    onTurnLayoutReady: tc,
                    synchronousMeasurementTurnKey: th,
                    retainedTurnKeys: td,
                    skipEmptyResizeMeasurements: tg
                } = e,
                tm = void 0 !== eZ && eZ,
                tf = void 0 === e4 ? 12 : e4,
                tp = void 0 !== e8 && e8,
                tx = void 0 !== e9 && e9,
                ty = void 0 !== tg && tg,
                tP = (0, i.z)(f.b);
            eY[0] !== td ? (t = td ?? [], eY[0] = td, eY[1] = t) : t = eY[1];
            let tv = [...t, ...tP],
                [tw, tb] = (0, a.useState)(null);
            eY[2] !== tw || eY[3] !== tx || eY[4] !== eJ ? (n = eJ.map(e => ({
                turnKey: e.turnKey,
                gapBeforePx: e.gapBeforePx,
                estimatedHeightPx: e.estimatedHeightPx,
                minHeightPx: tx && tw?.turnKey === e.turnKey && e.turnKey === eJ.at(-1)?.turnKey ? Math.max(e.minHeightPx ?? 0, tw.viewportHeightPx - tw.heightOutsideTurnPx) : e.minHeightPx,
                type: e.type
            })), eY[2] = tw, eY[3] = tx, eY[4] = eJ, eY[5] = n) : n = eY[5];
            let tS = n,
                tE = (0, g.b)(),
                tI = (0, s.c)(),
                tC = tI * (globalThis.devicePixelRatio ?? 1),
                tB = tn?.turnHeightsByKey ?? C,
                [tM, tH] = (0, a.useState)(tB),
                [tR, tK] = (0, a.useState)(null);
            eY[6] !== tm || eY[7] !== tS || eY[8] !== tf || eY[9] !== tC || eY[10] !== tM ? (x = w({
                collapseEmptyRows: tm,
                entries: tS,
                gapPx: tf,
                measuredHeightsByKey: tM,
                pixelScale: tC
            }), eY[6] = tm, eY[7] = tS, eY[8] = tf, eY[9] = tC, eY[10] = tM, eY[11] = x) : x = eY[11];
            let tT = x;
            eY[12] !== e5 || eY[13] !== tn || eY[14] !== tT || eY[15] !== tE ? (P = () => {
                var e, t, n;
                let r, l, o = D(e5);
                return e = tT, t = L(tE.getLastScrollDistanceFromBottomPx(), o), n = tn, l = b({
                    distanceFromBottomPx: r = Math.min(t, e.totalHeightPx),
                    layout: e,
                    overscanCount: 2,
                    viewportHeightPx: 800
                }), {
                    distanceFromBottomPx: r,
                    renderedRange: (n?.renderedWindow == null ? null : S({
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
            }, eY[12] = e5, eY[13] = tn, eY[14] = tT, eY[15] = tE, eY[16] = P) : P = eY[16];
            let [tF, tD] = (0, a.useState)(P), [tL] = (0, a.useState)(H), tk = (0, a.useSyncExternalStore)(tL.subscribe, tL.getSnapshot, tL.getSnapshot), tq = (0, a.useRef)(null), tA = (0, a.useRef)(tM), tO = (0, a.useRef)(0);
            eY[17] === Symbol.for("react.memo_cache_sentinel") ? (B = e => {
                tO.current = e;
                let t = tq.current;
                null != t && (t.style.minHeight = e > 0 ? `${e}px` : "")
            }, eY[17] = B) : B = eY[17];
            let tz = (0, p.a)(B),
                tU = (0, a.useRef)(tF),
                t_ = (0, a.useRef)(null);
            eY[18] === Symbol.for("react.memo_cache_sentinel") ? (q = new Map, eY[18] = q) : q = eY[18];
            let tN = (0, a.useRef)(q);
            eY[19] === Symbol.for("react.memo_cache_sentinel") ? (A = new Map, eY[19] = A) : A = eY[19];
            let tj = (0, a.useRef)(A);
            eY[20] === Symbol.for("react.memo_cache_sentinel") ? (O = new WeakSet, eY[20] = O) : O = eY[20];
            let tV = (0, a.useRef)(O);
            eY[21] === Symbol.for("react.memo_cache_sentinel") ? (z = new Map, eY[21] = z) : z = eY[21];
            let tW = (0, a.useRef)(z);
            eY[22] === Symbol.for("react.memo_cache_sentinel") ? (U = new Map, eY[22] = U) : U = eY[22];
            let t$ = (0, a.useRef)(U),
                tQ = (0, a.useRef)(null),
                tG = (0, a.useRef)(null),
                tX = (0, a.useRef)(0),
                tY = (0, a.useRef)(null),
                [tZ, tJ] = (0, a.useState)(null),
                t0 = (0, a.useRef)(!1),
                t1 = (0, a.useRef)(null),
                t2 = (0, a.useRef)(tT),
                t3 = (0, a.useRef)(tT),
                t4 = (0, a.useRef)(tT),
                t5 = (0, a.useRef)(null);
            eY[23] !== tM ? (_ = () => {
                tM !== tA.current && tH(tA.current)
            }, eY[23] = tM, eY[24] = _) : _ = eY[24], eY[25] !== tm || eY[26] !== tS || eY[27] !== tf || eY[28] !== tC || eY[29] !== tM ? (N = [tm, tS, tf, tC, tM], eY[25] = tm, eY[26] = tS, eY[27] = tf, eY[28] = tC, eY[29] = tM, eY[30] = N) : N = eY[30], (0, a.useLayoutEffect)(_, N), eY[31] === Symbol.for("react.memo_cache_sentinel") ? (j = e => {
                tq.current = e, tK(e)
            }, eY[31] = j) : j = eY[31];
            let t6 = (0, p.a)(j);
            eY[32] !== tm || eY[33] !== tS || eY[34] !== tf || eY[35] !== tT || eY[36] !== tC || eY[37] !== tM ? (V = () => {
                if (t3.current !== tT) {
                    t3.current = tT, t2.current = tM === tA.current ? tT : w({
                        collapseEmptyRows: tm,
                        entries: tS,
                        gapPx: tf,
                        measuredHeightsByKey: tA.current,
                        pixelScale: tC
                    });
                    let e = tq.current;
                    null != e && (e.style.height = `${t2.current.totalHeightPx}px`)
                }
                return t2.current
            }, eY[32] = tm, eY[33] = tS, eY[34] = tf, eY[35] = tT, eY[36] = tC, eY[37] = tM, eY[38] = V) : V = eY[38];
            let t7 = (0, p.a)(V);
            eY[39] !== e5 || eY[40] !== tE || eY[41] !== tI ? (W = e => {
                let t = tE.getScrollElement(),
                    n = tq.current,
                    r = t?.firstElementChild;
                return null == n || null == r ? e - D(e5) : e - (0, s.b)(r.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, tI)
            }, eY[39] = e5, eY[40] = tE, eY[41] = tI, eY[42] = W) : W = eY[42];
            let t8 = (0, p.a)(W),
                t9 = tF.renderedRange;
            if (null != tk) {
                let e = E({
                    layout: tT,
                    turnKey: tk.turnKey,
                    viewportHeightPx: tF.viewportHeightPx
                });
                null != e && (t9 = b({
                    distanceFromBottomPx: e,
                    layout: tT,
                    overscanCount: 2,
                    viewportHeightPx: tF.viewportHeightPx
                }))
            } else if (!F(tF.turnKeys, tT.turnKeys)) {
                let e = tF.turnKeys[tF.renderedRange.startIndex];
                null != e && (t9 = S({
                    anchorKey: e,
                    layout: tT,
                    previousRange: t9
                }) ?? b({
                    distanceFromBottomPx: tF.distanceFromBottomPx,
                    layout: tT,
                    overscanCount: 2,
                    viewportHeightPx: tF.viewportHeightPx
                }))
            }
            eY[43] !== tt ? ($ = () => {
                null == tQ.current && tt?.()
            }, eY[43] = tt, eY[44] = $) : $ = eY[44];
            let ne = (0, p.a)($);
            eY[45] === Symbol.for("react.memo_cache_sentinel") ? (Q = () => {
                null != t1.current && (window.cancelAnimationFrame(t1.current), t1.current = null)
            }, eY[45] = Q) : Q = eY[45];
            let nt = (0, p.a)(Q);
            eY[46] !== tS || eY[47] !== e2 || eY[48] !== ne ? (G = () => {
                null == e2 || t0.current || null != t1.current || null == tq.current || tS.length > 0 && 0 === tj.current.size || (t1.current = window.requestAnimationFrame(() => {
                    t1.current = window.requestAnimationFrame(() => {
                        t1.current = null, t0.current || null == tq.current || tS.length > 0 && 0 === tj.current.size || (t0.current = !0, ne(), e2())
                    })
                }))
            }, eY[46] = tS, eY[47] = e2, eY[48] = ne, eY[49] = G) : G = eY[49];
            let nn = (0, p.a)(G),
                nr = eJ.slice(t9.startIndex, t9.endIndex).map((e, t) => ({
                    entry: e,
                    turnIndex: t9.startIndex + t
                }));
            for (let e of new Set(tv)) {
                let t = tT.turnIndexByKey.get(e);
                if (null == t || t >= t9.startIndex && t < t9.endIndex) continue;
                let n = eJ[t];
                null != n && nr.push({
                    entry: n,
                    turnIndex: t
                })
            }
            nr.sort(M), eY[50] !== tE ? (X = e => I(tj.current.get(e), tE.getScrollElement(), "visible"), eY[50] = tE, eY[51] = X) : X = eY[51];
            let nl = (0, p.a)(X),
                no = null == ta ? null : function(e, t, n, r) {
                    let {
                        startIndex: l,
                        endIndex: o
                    } = b({
                        distanceFromBottomPx: 0,
                        layout: n,
                        overscanCount: 0,
                        viewportHeightPx: r
                    }), i = 1 / 0, a = null, u = n => {
                        let r = e[n];
                        if ("gap" === r.type) return !1;
                        let l = null;
                        if ("sourceTurnId" in r && "string" == typeof r.sourceTurnId ? l = r.sourceTurnId : "turnId" in r && "string" == typeof r.turnId && (l = r.turnId), null == l) return !1;
                        if (n < i) {
                            i = n;
                            let e = "historyRetentionLastItemId" in r && "string" == typeof r.historyRetentionLastItemId && !t?.includes(r.turnKey) ? r.historyRetentionLastItemId : null;
                            a = {
                                anchorItemId: "historyRetentionAnchorItemId" in r && "string" == typeof r.historyRetentionAnchorItemId ? r.historyRetentionAnchorItemId : null,
                                turnId: l,
                                measuredTurnKey: null == e ? null : r.turnKey,
                                lastItemId: e
                            }
                        }
                        return !0
                    };
                    for (let e = l; e < o; e++)
                        if (!u(e)) return null;
                    for (let e of t ?? []) {
                        let t = n.turnIndexByKey.get(e);
                        if (null != t && !u(t)) return null
                    }
                    return a
                }(eJ, tv, tT, tF.viewportHeightPx + 24),
                ni = (0, p.a)(e => {
                    if (null != ta) {
                        if (null == no || e > 24 || null != tL.getSnapshot()) return void ta(null);
                        ta({
                            oldestProtectedTurnId: no.turnId,
                            firstProtectedItemId: null == no.measuredTurnKey ? null : I(tj.current.get(no.measuredTurnKey), tE.getScrollElement(), "retention", no.anchorItemId ?? no.lastItemId)
                        })
                    }
                });
            eY[52] !== ni || eY[53] !== tE ? (Y = () => {
                ni(tE.getLastScrollDistanceFromBottomPx())
            }, eY[52] = ni, eY[53] = tE, eY[54] = Y) : Y = eY[54];
            let na = no?.anchorItemId,
                nu = no?.turnId,
                ns = no?.measuredTurnKey,
                nc = no?.lastItemId;
            eY[55] !== tT.totalHeightPx || eY[56] !== ta || eY[57] !== tk || eY[58] !== tF.viewportHeightPx || eY[59] !== ni || eY[60] !== tE || eY[61] !== na || eY[62] !== nu || eY[63] !== ns || eY[64] !== nc ? (Z = [na, nu, ns, nc, tF.viewportHeightPx, tT.totalHeightPx, ta, tk, ni, tE], eY[55] = tT.totalHeightPx, eY[56] = ta, eY[57] = tk, eY[58] = tF.viewportHeightPx, eY[59] = ni, eY[60] = tE, eY[61] = na, eY[62] = nu, eY[63] = ns, eY[64] = nc, eY[65] = Z) : Z = eY[65], (0, a.useLayoutEffect)(Y, Z), eY[66] !== ts || eY[67] !== tc || eY[68] !== tE ? (J = () => {
                if (null == ts || null == tc || null != tQ.current || tW.current.size > 0) return;
                let e = tE.getScrollElement(),
                    t = tj.current.get(ts);
                null != e && !(e.clientHeight <= 0) && null != t && tV.current.has(t) && !((tA.current[ts] ?? 0) <= 0) && tc(ts, t)
            }, eY[66] = ts, eY[67] = tc, eY[68] = tE, eY[69] = J) : J = eY[69];
            let nh = (0, p.a)(J);
            eY[70] !== e5 || eY[71] !== te || eY[72] !== e6 || eY[73] !== e7 || eY[74] !== ne || eY[75] !== tE || eY[76] !== tL ? (ee = e => {
                let t = D(e5);
                if (null != e.latestTurnHeightChange && e7?.(e.latestTurnHeightChange), e.restoreScrollDistanceFromBottom) ne();
                else if (null != e.scrollDistanceFromBottomPx) {
                    var n, r;
                    let l, o = e.scrollDistanceFromBottomPx,
                        i = t4.current,
                        a = t2.current,
                        u = t5.current;
                    e6?.() && null != e.latestTurnHeightChange && null != u && u.totalHeightPx !== i.totalHeightPx && null == tL.getSnapshot() && te?.() == null && (n = i, (l = (r = a).turnKeys.length - 1) > 0 && n.turnKeys.length === r.turnKeys.length && n.turnKeys[l] !== r.turnKeys[l] && n.turnKeys.every((e, t) => t === l || e === r.turnKeys[t] && n.topOffsetsPx[t] === r.topOffsetsPx[t] && n.heightsPx[t] === r.heightsPx[t])) && (o = tE.getUnroundedScrollDistanceFromBottomPx(tE.getLastScrollDistanceFromBottomPx()) + a.totalHeightPx - i.totalHeightPx, t5.current = i), tE.compensateScrollToDistanceFromBottomPx(o + D(e5) - t, null != e.afterMeasure || null != tL.getSnapshot() || te?.() != null || e6?.() ? void 0 : "turn-resize")
                }
                e.afterMeasure?.()
            }, eY[70] = e5, eY[71] = te, eY[72] = e6, eY[73] = e7, eY[74] = ne, eY[75] = tE, eY[76] = tL, eY[77] = ee) : ee = eY[77];
            let nd = (0, p.a)(ee);
            eY[78] !== t7 ? (et = (e, t) => {
                if (null != tQ.current || t <= 0) return;
                let n = tU.current,
                    r = K({
                        current: n,
                        distanceFromBottomPx: e,
                        layout: t7(),
                        viewportHeightPx: t
                    });
                r === n || (tU.current = r, r.renderedRange.startIndex === n.renderedRange.startIndex && r.renderedRange.endIndex === n.renderedRange.endIndex && F(r.turnKeys, n.turnKeys) || tD(r))
            }, eY[78] = t7, eY[79] = et) : et = eY[79];
            let ng = (0, p.a)(et);
            eY[80] !== ta ? (en = () => () => ta?.(void 0), er = [ta], eY[80] = ta, eY[81] = en, eY[82] = er) : (en = eY[81], er = eY[82]), (0, a.useLayoutEffect)(en, er), eY[83] !== t7 || eY[84] !== ti ? (el = (e, t, n) => {
                if (null == ti) return;
                let r = t7(),
                    l = Math.max(0, Math.min(r.totalHeightPx, r.totalHeightPx - e)),
                    o = Math.max(0, l - t);
                ti({
                    viewportEndPx: l,
                    viewportStartPx: o
                }, n)
            }, eY[83] = t7, eY[84] = ti, eY[85] = el) : el = eY[85];
            let nm = (0, p.a)(el);
            eY[86] !== tL ? (eo = e => {
                tL.getSnapshot() === e && tL.replace(null)
            }, eY[86] = tL, eY[87] = eo) : eo = eY[87];
            let nf = (0, p.a)(eo);
            eY[88] !== ta || eY[89] !== tL ? (ei = (e, t, n) => n?.signal?.aborted ? Promise.resolve() : (ta?.(null), new Promise(r => {
                let l = () => {
                        tL.getSnapshot() === o && tL.replace(null)
                    },
                    o = {
                        align: n?.align ?? "center",
                        complete: () => {
                            n?.signal?.removeEventListener("abort", l), r()
                        },
                        getTargetElement: t,
                        turnKey: e
                    };
                tD(tU.current), tL.replace(o), n?.signal?.addEventListener("abort", l, {
                    once: !0
                })
            })), eY[88] = ta, eY[89] = tL, eY[90] = ei) : ei = eY[90];
            let np = (0, p.a)(ei);
            eY[91] !== t7 || eY[92] !== eJ ? (ea = e => {
                let {
                    viewportStartPx: t,
                    viewportEndPx: n
                } = e;
                return function(e, t, n, r) {
                    let {
                        topOffsetsPx: l,
                        heightsPx: o
                    } = t, i = Math.max(0, v()(l, n) - 1);
                    return (l[i] ?? 0) + (o[i] ?? 0) <= n && i++, e.slice(i, y()(l, r))
                }(eJ, t7(), t, n)
            }, eY[91] = t7, eY[92] = eJ, eY[93] = ea) : ea = eY[93];
            let nx = (0, p.a)(ea);
            eY[94] !== t7 ? (eu = e => {
                let t = t7(),
                    n = t.turnIndexByKey.get(e);
                if (null == n) return null;
                let r = t.topOffsetsPx[n],
                    l = t.heightsPx[n];
                return null == r || null == l ? null : {
                    endPx: r + l,
                    startPx: r
                }
            }, eY[94] = t7, eY[95] = eu) : eu = eY[95];
            let ny = (0, p.a)(eu);
            eY[96] !== e7 || eY[97] !== tE || eY[98] !== tI ? (es = () => {
                let e = 0,
                    t = null;
                for (let [n, r] of t$.current) e += r, (null == t || t.compareDocumentPosition(n) === Node.DOCUMENT_POSITION_FOLLOWING) && (t = n);
                null != t && e7?.({
                    heightDeltaPx: null,
                    heightPx: null,
                    bottomViewportOverflowPx: tE.isNativeEndSnapFollowing?.() ? 0 : k({
                        scrollElement: tE.getScrollElement(),
                        turnElement: t,
                        windowZoom: tI
                    }),
                    turnElement: t,
                    followContentHeightPx: e
                })
            }, eY[96] = e7, eY[97] = tE, eY[98] = tI, eY[99] = es) : es = eY[99];
            let nP = (0, p.a)(es);
            eY[100] !== tm || eY[101] !== nd || eY[102] !== tS || eY[103] !== tf || eY[104] !== e5 || eY[105] !== t7 || eY[106] !== t8 || eY[107] !== te || eY[108] !== tC || eY[109] !== tp || eY[110] !== tE || eY[111] !== tL || eY[112] !== tz || eY[113] !== tI ? (ec = (e, t, n) => {
                var r;
                let l = t7(),
                    o = tE.getScrollElement();
                if (o?.getClientRects().length === 0) return !1;
                let i = tQ.current,
                    a = tA.current,
                    c = a,
                    h = 0,
                    d = !1,
                    g = null,
                    m = 0,
                    f = !1,
                    p = !1,
                    x = "controller" === (void 0 === n ? "measured" : n) ? tE.getLastScrollDistanceFromBottomPx({
                        includePendingUserScroll: !0
                    }) : function(e, t) {
                        let n = e.getScrollElement(),
                            r = n?.firstElementChild;
                        if (null == n || null == r || 0 === n.clientHeight) return e.getLastScrollDistanceFromBottomPx();
                        let l = r.getBoundingClientRect();
                        if (0 === l.height) return e.getLastScrollDistanceFromBottomPx();
                        let o = n.scrollTop;
                        return Math.max(0, Math.round(o + (0, s.b)(l.bottom - n.getBoundingClientRect().top, t)) - n.clientHeight) - o
                    }(tE, tI),
                    y = D(e5),
                    P = L(x, y),
                    v = tp ? null : te?.() ?? null,
                    b = null == i ? P : tU.current.distanceFromBottomPx,
                    S = b;
                if (tp && null == tL.getSnapshot() && te?.() == null) {
                    let e = F(t4.current.turnKeys, l.turnKeys) ? l : t4.current,
                        t = e === l ? i?.scrollDistanceFromBottomPx ?? x : x,
                        n = T({
                            distanceFromBottomPx: t8(t),
                            preferLatestVisibleRow: t < y,
                            layout: e,
                            measuredHeightsByKey: a,
                            nextLayout: l,
                            viewportHeightPx: tU.current.viewportHeightPx
                        }),
                        r = o?.ownerDocument.activeElement,
                        u = r?.closest("[data-turn-key]"),
                        s = u?.dataset.turnKey;
                    if (o && r && u && s && tj.current.get(s) === u) {
                        let e = r.getBoundingClientRect(),
                            t = o.getBoundingClientRect();
                        e.bottom > t.top && e.top < t.bottom && (n = s)
                    }
                    let c = null == n ? null : l.turnIndexByKey.get(n);
                    null != c && (S = l.bottomOffsetsPx[c] ?? b)
                }
                for (let [t, n] of e) {
                    let {
                        element: e,
                        heightPx: r
                    } = n, o = tj.current.get(t);
                    if (o !== e) continue;
                    r > 0 ? tV.current.add(o) : tV.current.delete(o);
                    let i = Math.max(+!tm, r),
                        u = a[t];
                    if (u === i) continue;
                    c === a && (c = {
                        ...a
                    }), c[t] = i;
                    let s = l.turnIndexByKey.get(t);
                    if (null == s) continue;
                    let x = s === l.turnKeys.length - 1,
                        y = Math.round(Math.max(tS[s]?.minHeightPx ?? 0, i) * tC) / tC,
                        P = y - (l.heightsPx[s] ?? y);
                    p = p || null == u || 0 !== P, x && (d = !0, h += null == u ? 0 : P, g = o), f = f || tm && (0 === y || 0 === l.heightsPx[s]), (l.bottomOffsetsPx[s] ?? 0) <= S && (tp || null != te && !x) && (m += P)
                }
                if (c === a) return !1;
                if (!p) return tA.current = c, !1;
                let E = w({
                    collapseEmptyRows: tm,
                    entries: tS,
                    gapPx: tf,
                    measuredHeightsByKey: c,
                    pixelScale: tC
                });
                if (f)
                    for (let [e, t] of E.gapsBeforePx.entries()) {
                        let n = t - (l.gapsBeforePx[e] ?? 0);
                        (l.bottomOffsetsPx[e] ?? 0) + (l.heightsPx[e] ?? 0) <= S && (tp || null != te && e !== l.turnKeys.length - 1) && (m += n)
                    }
                let I = tO.current;
                if (I > 0) {
                    let e = Math.max(0, I - l.totalHeightPx),
                        t = Math.max(0, I - E.totalHeightPx);
                    m += t - e, h > 0 && e > t && (h = Math.max(0, h - (e - t))), e > 0 && 0 === t && tz(0)
                }
                let C = tE.isNativeEndSnapFollowing?.(),
                    B = tp && tE.shouldFollowContentGrowth() && (C || (r = x, 0 === y && r <= 24)) && g?.querySelector("[data-preserve-turn-viewport]") == null,
                    M = i?.restoreScrollDistanceFromBottom || null != v,
                    H = null;
                M || (H = B ? 0 : 0 !== m ? (i?.scrollDistanceFromBottomPx ?? tE.getUnroundedScrollDistanceFromBottomPx(x)) + m : i?.scrollDistanceFromBottomPx ?? (tp || !d ? x : null));
                let R = tU.current.distanceFromBottomPx;
                M ? R = v ?? R : null != H && (R = L(H, y));
                let q = K({
                        current: tU.current,
                        distanceFromBottomPx: R,
                        layout: E,
                        viewportHeightPx: tU.current.viewportHeightPx
                    }),
                    A = i?.latestTurnHeightChange,
                    O = g ?? A?.turnElement ?? null,
                    z = {
                        afterMeasure: i?.afterMeasure,
                        latestTurnHeightChange: d || null != A ? {
                            heightDeltaPx: (A?.heightDeltaPx ?? 0) + h,
                            heightPx: E.heightsPx.at(-1) ?? null,
                            bottomViewportOverflowPx: C ? 0 : k({
                                scrollElement: tE.getScrollElement(),
                                turnElement: O,
                                windowZoom: tI
                            }),
                            turnElement: O,
                            followContentHeightPx: null
                        } : null,
                        restoreScrollDistanceFromBottom: M,
                        scrollDistanceFromBottomPx: H,
                        turnHeightsByKey: c
                    },
                    U = tq.current;
                for (let [t, n] of e) {
                    let {
                        element: e
                    } = n, r = E.turnIndexByKey.get(t);
                    tj.current.get(t) === e && null != r && null != e.parentElement && (e.parentElement.style.height = `${E.heightsPx[r]}px`, e.parentElement.style.minHeight = "")
                }
                if (d && 1 === e.size && null == i && q === tU.current && E.gapsBeforePx.at(-1) === l.gapsBeforePx.at(-1) && null != U) return tA.current = c, t2.current = E, t4.current = E, U.style.height = `${E.totalHeightPx}px`, nd(z), !0;
                null == t5.current && (t5.current = l);
                let _ = () => {
                    tA.current = c, t2.current = E, tH(c), q !== tU.current && (tU.current = q, tD(q))
                };
                return tQ.current = z, void 0 === t || t ? (0, u.flushSync)(_) : _(), !0
            }, eY[100] = tm, eY[101] = nd, eY[102] = tS, eY[103] = tf, eY[104] = e5, eY[105] = t7, eY[106] = t8, eY[107] = te, eY[108] = tC, eY[109] = tp, eY[110] = tE, eY[111] = tL, eY[112] = tz, eY[113] = tI, eY[114] = ec) : ec = eY[114];
            let nv = (0, p.a)(ec);
            eY[115] !== nv || eY[116] !== nP || eY[117] !== nh || eY[118] !== ty ? (eh = e => {
                let t = new Map,
                    n = !1,
                    r = !1;
                for (let l of e) {
                    let e = tN.current.get(l.target);
                    if (null == e) continue;
                    let {
                        height: o
                    } = (0, h.a)(l);
                    switch (e.kind) {
                        case "turn": {
                            n = !0;
                            let r = e.turnKey,
                                i = tj.current.get(r);
                            if (o > 0 && i === l.target && tV.current.has(i) && tA.current[r] === o) break;
                            t.set(r, {
                                element: l.target,
                                heightPx: o
                            });
                            break
                        }
                        case "latest-turn-follow-content":
                            t$.current.set(e.element, o), r = !0
                    }
                }!(t.size > 0) && (n || ty) || nv(t), r && nP(), nh()
            }, eY[115] = nv, eY[116] = nP, eY[117] = nh, eY[118] = ty, eY[119] = eh) : eh = eY[119];
            let nw = (0, p.a)(eh);
            eY[120] !== nw ? (ed = () => {
                if (null != tG.current) return tG.current;
                let e = new ResizeObserver(nw);
                return tG.current = e, e
            }, eY[120] = nw, eY[121] = ed) : ed = eY[121];
            let nb = (0, p.a)(ed);
            eY[122] !== nb || eY[123] !== nn ? (eg = (e, t) => {
                if (null == t) return;
                tN.current.set(t, {
                    kind: "turn",
                    turnKey: e
                }), tj.current.set(e, t), tV.current.delete(t), tW.current.set(e, t);
                let n = nb();
                return n.observe(t), nn(), () => {
                    n.unobserve(t), tN.current.delete(t), tW.current.get(e) === t && tW.current.delete(e), tj.current.get(e) === t && tj.current.delete(e)
                }
            }, eY[122] = nb, eY[123] = nn, eY[124] = eg) : eg = eY[124];
            let nS = (0, p.a)(eg);
            eY[125] !== nv || eY[126] !== tI ? (em = (e, t) => {
                let n = tj.current.get(e);
                if (null == n) return;
                let r = (0, s.b)(n.getBoundingClientRect().height, tI);
                if (!(r <= 0) && (nv(new Map([
                        [e, {
                            element: n,
                            heightPx: r
                        }]
                    ]), !1), null != t)) {
                    let e = tQ.current;
                    null == e ? t() : e.afterMeasure = t
                }
            }, eY[125] = nv, eY[126] = tI, eY[127] = em) : em = eY[127];
            let nE = (0, p.a)(em);
            eY[128] !== nb ? (ef = e => {
                if (null == e) return;
                tN.current.set(e, {
                    element: e,
                    kind: "latest-turn-follow-content"
                }), t$.current.set(e, 0);
                let t = nb();
                return t.observe(e), () => {
                    t.unobserve(e), tN.current.delete(e), t$.current.delete(e)
                }
            }, eY[128] = nb, eY[129] = ef) : ef = eY[129];
            let nI = (0, p.a)(ef);
            eY[130] !== nv || eY[131] !== tI ? (ep = () => {
                let e = tW.current;
                if (0 === e.size) {
                    tX.current = 0;
                    return
                }
                if (null != tY.current) return;
                if (tX.current >= 8) {
                    tY.current = requestAnimationFrame(e => {
                        tY.current = null, tX.current = 0, tJ(e)
                    });
                    return
                }
                tX.current = tX.current + 1, tW.current = new Map;
                let t = new Map;
                if ((0, c.a)("virtualizedTurnList.readMountedHeights", () => {
                        for (let [n, r] of e) {
                            if (tj.current.get(n) !== r) continue;
                            let e = (0, s.b)(r.getBoundingClientRect().height, tI);
                            e > 0 && t.set(n, {
                                element: r,
                                heightPx: e
                            })
                        }
                    }, e.size), t.size > 0) {
                    let n = tA.current;
                    if (nv(t, !1, "controller"))
                        for (let [t, r] of e)(null == n[t] || tX.current > 1) && tj.current.get(t) === r && tW.current.set(t, r);
                    else tX.current = 0
                }
            }, eY[130] = nv, eY[131] = tI, eY[132] = ep) : ep = eY[132], (0, a.useLayoutEffect)(ep), eY[133] !== tS || eY[134] !== nE || eY[135] !== th ? (ex = () => {
                let e = th ?? tS.at(-1)?.turnKey;
                null != e && nE(e)
            }, eY[133] = tS, eY[134] = nE, eY[135] = th, eY[136] = ex) : ex = eY[136];
            let nC = (0, p.a)(ex);
            eY[137] !== tu || eY[138] !== nC ? (ey = () => {
                null != tu && nC()
            }, eP = [tu, nC], eY[137] = tu, eY[138] = nC, eY[139] = ey, eY[140] = eP) : (ey = eY[139], eP = eY[140]), (0, a.useLayoutEffect)(ey, eP), eY[141] !== nd || eY[142] !== tM ? (ev = () => {
                let e = tQ.current;
                null != e && e.turnHeightsByKey === tM && (tQ.current = null, nd(e))
            }, ew = [nd, tM], eY[141] = nd, eY[142] = tM, eY[143] = ev, eY[144] = ew) : (ev = eY[143], ew = eY[144]), (0, a.useLayoutEffect)(ev, ew), eY[145] !== tS || eY[146] !== tw || eY[147] !== tT.heightsPx || eY[148] !== tx || eY[149] !== tM || eY[150] !== tR || eY[151] !== tI ? (eb = e => {
                if (!tx || tw?.viewportHeightPx === e) return;
                if (null != tw) return void(0, u.flushSync)(() => {
                    tb({
                        ...tw,
                        viewportHeightPx: e
                    })
                });
                let t = tR?.closest("[data-thread-user-message-navigation-content]"),
                    n = t?.lastElementChild,
                    r = tS.at(-1)?.turnKey;
                if (null == t || null == n || null == r || tS.some(e => null == tM[e.turnKey])) return;
                let l = (0, s.b)(t.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, tI) - parseFloat(getComputedStyle(t).paddingBottom);
                l <= 24 || (0, u.flushSync)(() => {
                    tb({
                        turnKey: r,
                        heightOutsideTurnPx: e - (tT.heightsPx.at(-1) ?? 0) - l,
                        viewportHeightPx: e
                    })
                })
            }, eY[145] = tS, eY[146] = tw, eY[147] = tT.heightsPx, eY[148] = tx, eY[149] = tM, eY[150] = tR, eY[151] = tI, eY[152] = eb) : eb = eY[152];
            let nB = (0, p.a)(eb);
            eY[153] !== nx || eY[154] !== ny || eY[155] !== nl || eY[156] !== nE || eY[157] !== e1 || eY[158] !== np ? (eS = () => {
                if (null != e1) return e1({
                    getEntriesInViewport: nx,
                    getFirstVisibleMessageItemId: nl,
                    getEntryGeometry: ny,
                    measureTurnBeforePaint: nE,
                    scrollToKey: np
                }), () => {
                    e1(null)
                }
            }, eE = [nx, nl, ny, nE, e1, np], eY[153] = nx, eY[154] = ny, eY[155] = nl, eY[156] = nE, eY[157] = e1, eY[158] = np, eY[159] = eS, eY[160] = eE) : (eS = eY[159], eE = eY[160]), (0, a.useEffect)(eS, eE), eY[161] !== nt ? (eI = () => () => {
                t0.current = !1, nt()
            }, eC = [nt], eY[161] = nt, eY[162] = eI, eY[163] = eC) : (eI = eY[162], eC = eY[163]), (0, a.useLayoutEffect)(eI, eC), eY[164] !== nt || eY[165] !== nn ? (eB = () => (nn(), nt), eY[164] = nt, eY[165] = nn, eY[166] = eB) : eB = eY[166], eY[167] !== nt || eY[168] !== tS.length || eY[169] !== e2 || eY[170] !== nn || eY[171] !== tR ? (eM = [nt, tS.length, e2, nn, tR], eY[167] = nt, eY[168] = tS.length, eY[169] = e2, eY[170] = nn, eY[171] = tR, eY[172] = eM) : eM = eY[172], (0, a.useEffect)(eB, eM), eY[173] !== tL ? (eH = () => {
                let e = tN.current,
                    t = tj.current,
                    n = t$.current;
                return () => {
                    null != tY.current && (cancelAnimationFrame(tY.current), tY.current = null), tG.current?.disconnect(), tG.current = null, e.clear(), t.clear(), tW.current.clear(), n.clear(), tQ.current = null, tL.replace(null)
                }
            }, eR = [tL], eY[173] = tL, eY[174] = eH, eY[175] = eR) : (eH = eY[174], eR = eY[175]), (0, a.useEffect)(eH, eR), eY[176] !== to ? (eK = () => {
                if (null != to) return () => {
                    to(function(e, t, n) {
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
                    }(tA.current, tU.current.turnKeys, tU.current.renderedRange))
                }
            }, eT = [to], eY[176] = to, eY[177] = eK, eY[178] = eT) : (eK = eY[177], eT = eY[178]), (0, a.useLayoutEffect)(eK, eT), eY[179] !== eJ ? (eF = eJ.at(-1), eY[179] = eJ, eY[180] = eF) : eF = eY[180];
            let nM = eF,
                nH = nM?.turnSearchKey ?? nM?.turnKey;
            eY[181] !== nH || eY[182] !== tE || eY[183] !== tz || eY[184] !== tR || eY[185] !== tI ? (eD = () => {
                if (null == tR || null == nH) return;
                let e = e => {
                    let t = tE.getScrollElement(),
                        n = e.target;
                    null != t && !(t.scrollTop <= 0) && n instanceof Element && !(n.getBoundingClientRect().bottom <= t.getBoundingClientRect().top) && tz(Math.max(0, (0, s.b)(tR.getBoundingClientRect().height, tI) - (0, m.b)(t)))
                };
                return tR.addEventListener(d.a, e), () => {
                    tR.removeEventListener(d.a, e), tz(0)
                }
            }, eL = [nH, tE, tz, tR, tI], eY[181] = nH, eY[182] = tE, eY[183] = tz, eY[184] = tR, eY[185] = tI, eY[186] = eD, eY[187] = eL) : (eD = eY[186], eL = eY[187]), (0, a.useLayoutEffect)(eD, eL);
            let {
                addScrollListener: nR,
                addUserScrollListener: nK,
                getScrollElement: nT
            } = tE;
            eY[188] !== nR || eY[189] !== nK || eY[190] !== e5 || eY[191] !== nT || eY[192] !== nB || eY[193] !== tx || eY[194] !== ni || eY[195] !== nh || eY[196] !== nm || eY[197] !== ne || eY[198] !== tz || eY[199] !== tR || eY[200] !== ng ? (ek = () => {
                let e = nT();
                if (null == e) return;
                let t = () => (null == t_.current && (t_.current = e.clientHeight), t_.current || tU.current.viewportHeightPx || 800),
                    n = nR(e => {
                        ng(L(e, D(e5)), t()), ni(e)
                    }),
                    r = nK((e, n) => {
                        let r = tO.current;
                        if (r > 0) {
                            let t = r - e;
                            tz(t > t2.current.totalHeightPx && e > 0 ? t : 0)
                        }
                        nm(L(e, D(e5)), t(), null != n && e > n)
                    }),
                    l = new ResizeObserver(n => {
                        let r = n.find(t => t.target === e);
                        if (null != r) {
                            let {
                                height: e
                            } = (0, h.a)(r);
                            t_.current = e, ng(tU.current.distanceFromBottomPx, e), ne()
                        }
                        nB(t()), nh()
                    });
                return l.observe(e), tx && null != tR && l.observe(tR), () => {
                    n(), r(), l.disconnect()
                }
            }, eq = [nR, nK, e5, nT, nB, nh, tx, nm, ni, ne, tz, tR, ng], eY[188] = nR, eY[189] = nK, eY[190] = e5, eY[191] = nT, eY[192] = nB, eY[193] = tx, eY[194] = ni, eY[195] = nh, eY[196] = nm, eY[197] = ne, eY[198] = tz, eY[199] = tR, eY[200] = ng, eY[201] = ek, eY[202] = eq) : (ek = eY[201], eq = eY[202]), (0, a.useLayoutEffect)(ek, eq), eY[203] !== nv || eY[204] !== e5 || eY[205] !== tT || eY[206] !== tk || eY[207] !== tE || eY[208] !== tL || eY[209] !== nf || eY[210] !== ng || eY[211] !== tI ? (eA = () => {
                if (null == tk || tL.getSnapshot() !== tk || null != tY.current) return;
                let e = tE.getScrollElement();
                if (null == e) return;
                let t = new Map;
                for (let [e, n] of tj.current) {
                    let r = (0, s.b)(n.getBoundingClientRect().height, tI);
                    r > 0 && t.set(e, {
                        element: n,
                        heightPx: r
                    })
                }
                if (nv(t, !1) || null != tQ.current) return;
                let n = tj.current.get(tk.turnKey),
                    r = null == n ? null : tk.getTargetElement?.(n) ?? n,
                    l = null == n || null == r ? function(e) {
                        let {
                            align: t,
                            layout: n,
                            turnKey: r,
                            viewportHeightPx: l
                        } = e;
                        if ("center" === t) return E({
                            layout: n,
                            turnKey: r,
                            viewportHeightPx: l
                        });
                        let o = n.turnIndexByKey.get(r);
                        return null == o ? null : Math.max(0, (n.bottomOffsetsPx[o] ?? 0) + (n.heightsPx[o] ?? 0) - l + 10)
                    }({
                        align: tk.align,
                        layout: tT,
                        turnKey: tk.turnKey,
                        viewportHeightPx: e.clientHeight
                    }) : function(e) {
                        let {
                            align: t,
                            layout: n,
                            targetElement: r,
                            turnElement: l,
                            turnKey: o,
                            windowZoom: i,
                            viewportHeightPx: a
                        } = e, u = n.turnIndexByKey.get(o);
                        if (null == u) return null;
                        let c = l.getBoundingClientRect(),
                            h = r.getBoundingClientRect(),
                            d = (0, s.b)(h.top - c.top, i),
                            g = (0, s.b)(h.height, i),
                            m = (n.bottomOffsetsPx[u] ?? 0) + (n.heightsPx[u] ?? 0) - d;
                        return "top" === t ? Math.max(0, m - a + 10) : Math.max(0, m - g / 2 - a / 2)
                    }({
                        align: tk.align,
                        layout: tT,
                        targetElement: r,
                        turnElement: n,
                        turnKey: tk.turnKey,
                        viewportHeightPx: e.clientHeight,
                        windowZoom: tI
                    });
                if (null == l) return void queueMicrotask(() => nf(tk));
                let o = "top" === tk.align && null != r ? Math.max(0, tE.getLastScrollDistanceFromBottomPx() - (0, s.b)(r.getBoundingClientRect().top - e.getBoundingClientRect().top, tI) + 10) : l + D(e5);
                tE.scrollToDistanceFromBottomPx(o, "instant", "user"), ng(Math.max(0, o - D(e5)), e.clientHeight), queueMicrotask(() => nf(tk))
            }, eY[203] = nv, eY[204] = e5, eY[205] = tT, eY[206] = tk, eY[207] = tE, eY[208] = tL, eY[209] = nf, eY[210] = ng, eY[211] = tI, eY[212] = eA) : eA = eY[212], eY[213] !== nv || eY[214] !== e5 || eY[215] !== tT || eY[216] !== tZ || eY[217] !== tk || eY[218] !== tE || eY[219] !== tL || eY[220] !== nf || eY[221] !== ng || eY[222] !== tI ? (eO = [nv, tT, tZ, tk, tE, tL, nf, e5, ng, tI], eY[213] = nv, eY[214] = e5, eY[215] = tT, eY[216] = tZ, eY[217] = tk, eY[218] = tE, eY[219] = tL, eY[220] = nf, eY[221] = ng, eY[222] = tI, eY[223] = eO) : eO = eY[223], (0, a.useLayoutEffect)(eA, eO), eY[224] !== e5 || eY[225] !== t7 || eY[226] !== t8 || eY[227] !== te || eY[228] !== tk || eY[229] !== tp || eY[230] !== tE || eY[231] !== ng ? (ez = () => {
                var e;
                if (null != tQ.current) return;
                let t = t4.current,
                    n = t7(),
                    r = t5.current ?? n;
                if (t5.current = null, t4.current = n, null != tk || !tp && t.turnKeys.at(-1) !== r.turnKeys.at(-1) || t === r) return;
                let l = D(e5),
                    o = tE.getLastScrollDistanceFromBottomPx({
                        includePendingUserScroll: !0
                    });
                if (null != (te?.() ?? null)) return;
                if (tE.shouldFollowContentGrowth() && (e = o, 0 === l && e <= 24)) return void tE.compensateScrollToDistanceFromBottomPx(0);
                let i = T({
                    distanceFromBottomPx: t8(o),
                    preferLatestVisibleRow: o < l,
                    layout: t,
                    measuredHeightsByKey: tA.current,
                    nextLayout: r,
                    viewportHeightPx: tU.current.viewportHeightPx
                });
                if (null == i) return;
                let a = tE.getUnroundedScrollDistanceFromBottomPx(o),
                    u = function(e) {
                        let {
                            anchorKey: t,
                            distanceFromBottomPx: n,
                            nextLayout: r,
                            previousLayout: l
                        } = e, o = l.turnIndexByKey.get(t), i = r.turnIndexByKey.get(t);
                        if (null == o || null == i) return null;
                        let a = (l.bottomOffsetsPx[o] ?? 0) + (l.heightsPx[o] ?? 0);
                        return Math.max(0, n + ((r.bottomOffsetsPx[i] ?? 0) + (r.heightsPx[i] ?? 0)) - a)
                    }({
                        anchorKey: i,
                        distanceFromBottomPx: a,
                        nextLayout: r,
                        previousLayout: t
                    });
                null != u && (u !== a || t.totalHeightPx !== r.totalHeightPx) && (ng(L(u, l), tU.current.viewportHeightPx), tE.compensateScrollToDistanceFromBottomPx(u))
            }, eY[224] = e5, eY[225] = t7, eY[226] = t8, eY[227] = te, eY[228] = tk, eY[229] = tp, eY[230] = tE, eY[231] = ng, eY[232] = ez) : ez = eY[232], eY[233] !== e5 || eY[234] !== t7 || eY[235] !== t8 || eY[236] !== te || eY[237] !== tT || eY[238] !== tk || eY[239] !== tp || eY[240] !== tE || eY[241] !== ng ? (eU = [e5, t7, t8, te, tT, tk, tp, tE, ng], eY[233] = e5, eY[234] = t7, eY[235] = t8, eY[236] = te, eY[237] = tT, eY[238] = tk, eY[239] = tp, eY[240] = tE, eY[241] = ng, eY[242] = eU) : eU = eY[242], (0, a.useLayoutEffect)(ez, eU), eY[243] !== tk || eY[244] !== nm || eY[245] !== ne || eY[246] !== ng ? (e_ = () => {
                null == tk && null == tQ.current && (ng(tU.current.distanceFromBottomPx, tU.current.viewportHeightPx), ne(), nm(tU.current.distanceFromBottomPx, tU.current.viewportHeightPx, !1))
            }, eY[243] = tk, eY[244] = nm, eY[245] = ne, eY[246] = ng, eY[247] = e_) : e_ = eY[247], eY[248] !== tT || eY[249] !== tk || eY[250] !== nm || eY[251] !== ne || eY[252] !== ng ? (eN = [tT, tk, nm, ne, ng], eY[248] = tT, eY[249] = tk, eY[250] = nm, eY[251] = ne, eY[252] = ng, eY[253] = eN) : eN = eY[253], (0, a.useLayoutEffect)(e_, eN), eY[254] !== nh ? (ej = () => {
                nh()
            }, eY[254] = nh, eY[255] = ej) : ej = eY[255], (0, a.useLayoutEffect)(ej), eY[256] !== tS || eY[257] !== tl ? (eV = tl ?? tS.at(-1)?.turnKey, eY[256] = tS, eY[257] = tl, eY[258] = eV) : eV = eY[258];
            let nF = eV;
            eY[259] !== e3 ? (eW = (0, o.b)("relative shrink-0", e3), eY[259] = e3, eY[260] = eW) : eW = eY[260], eY[261] !== tT.totalHeightPx ? (e$ = {
                height: tT.totalHeightPx
            }, eY[261] = tT.totalHeightPx, eY[262] = e$) : e$ = eY[262];
            let nD = `${tT.topOffsetsPx[t9.startIndex]??0}px`;
            eY[263] !== nD ? (eQ = {
                marginTop: nD
            }, eY[263] = nD, eY[264] = eQ) : eQ = eY[264];
            let nL = nr.map(e => {
                let {
                    entry: t,
                    turnIndex: n
                } = e;
                return (0, r.jsx)(R, {
                    entry: t,
                    gapBeforePx: n === t9.startIndex ? 0 : tT.gapsBeforePx[n] ?? 0,
                    retainedTopPx: n < t9.startIndex || n >= t9.endIndex ? tT.topOffsetsPx[n] : void 0,
                    latestTurnFollowContentRef: n === tS.length - 1 && null != e7 ? nI : void 0,
                    latestTurnFooter: t.turnKey === nF ? tr : void 0,
                    RowComponent: e0,
                    measuredHeightPx: null == tM[t.turnKey] ? void 0 : tT.heightsPx[n],
                    constrainedHeightPx: n !== tS.length - 1 && tk?.turnKey !== t.turnKey && null == tM[t.turnKey] ? tT.heightsPx[n] : void 0,
                    observeTurnElement: nS
                }, t.turnKey)
            });
            return eY[265] !== eQ || eY[266] !== nL ? (eG = (0, r.jsx)("div", {
                className: "flex flex-col",
                style: eQ,
                children: nL
            }), eY[265] = eQ, eY[266] = nL, eY[267] = eG) : eG = eY[267], eY[268] !== t6 || eY[269] !== eW || eY[270] !== e$ || eY[271] !== eG ? (eX = (0, r.jsx)("div", {
                ref: t6,
                className: eW,
                style: e$,
                children: eG
            }), eY[268] = t6, eY[269] = eW, eY[270] = e$, eY[271] = eG, eY[272] = eX) : eX = eY[272], eX
        }

        function M(e, t) {
            return e.turnIndex - t.turnIndex
        }

        function H() {
            return new q
        }
        let R = (0, a.memo)(function(e) {
            let t, n, i, a, u, s, c = (0, l.c)(24),
                {
                    entry: h,
                    gapBeforePx: d,
                    latestTurnFollowContentRef: g,
                    latestTurnFooter: m,
                    RowComponent: f,
                    constrainedHeightPx: x,
                    measuredHeightPx: y,
                    retainedTopPx: P,
                    observeTurnElement: v
                } = e,
                {
                    turnKey: w
                } = h;
            c[0] !== v || c[1] !== w ? (t = e => v(w, e), c[0] = v, c[1] = w, c[2] = t) : t = c[2];
            let b = (0, p.a)(t),
                S = null != P && "absolute inset-x-0",
                E = null != x && "overflow-hidden";
            c[3] !== S || c[4] !== E ? (n = (0, o.b)(S, E), c[3] = S, c[4] = E, c[5] = n) : n = c[5];
            let I = y ?? x,
                C = null == P ? d : 0,
                B = null == y ? h.minHeightPx : void 0;
            return c[6] !== P || c[7] !== I || c[8] !== C || c[9] !== B ? (i = {
                height: I,
                marginTop: C,
                minHeight: B,
                top: P
            }, c[6] = P, c[7] = I, c[8] = C, c[9] = B, c[10] = i) : i = c[10], c[11] !== f || c[12] !== h || c[13] !== g || c[14] !== m ? (a = (0, r.jsx)(f, {
                entry: h,
                latestTurnFooter: m,
                latestTurnFollowContentRef: g
            }), c[11] = f, c[12] = h, c[13] = g, c[14] = m, c[15] = a) : a = c[15], c[16] !== b || c[17] !== a || c[18] !== w ? (u = (0, r.jsx)("div", {
                ref: b,
                className: "[&_[data-virtualized-turn-content]]:[content-visibility:visible]",
                "data-turn-key": w,
                children: a
            }), c[16] = b, c[17] = a, c[18] = w, c[19] = u) : u = c[19], c[20] !== u || c[21] !== n || c[22] !== i ? (s = (0, r.jsx)("div", {
                className: n,
                style: i,
                children: u
            }), c[20] = u, c[21] = n, c[22] = i, c[23] = s) : s = c[23], s
        });

        function K(e) {
            var t, n;
            let {
                current: r,
                distanceFromBottomPx: l,
                layout: o,
                viewportHeightPx: i
            } = e, a = Math.min(l, o.totalHeightPx), u = b({
                distanceFromBottomPx: a,
                layout: o,
                overscanCount: 2,
                viewportHeightPx: i
            }), s = (t = r.renderedRange, n = u, t.startIndex <= n.startIndex && t.endIndex >= n.endIndex) ? r.renderedRange : u;
            return r.distanceFromBottomPx === a && r.viewportHeightPx === i && r.renderedRange.startIndex === s.startIndex && r.renderedRange.endIndex === s.endIndex && F(r.turnKeys, o.turnKeys) ? r : {
                distanceFromBottomPx: a,
                renderedRange: s,
                turnKeys: o.turnKeys,
                viewportHeightPx: i
            }
        }

        function T(e) {
            let {
                distanceFromBottomPx: t,
                preferLatestVisibleRow: n,
                layout: r,
                measuredHeightsByKey: l,
                nextLayout: o,
                viewportHeightPx: i
            } = e, a = b({
                distanceFromBottomPx: t,
                layout: r,
                overscanCount: 0,
                viewportHeightPx: Math.max(0, i + Math.min(0, t))
            }), u = null;
            for (let e = a.startIndex; e < a.endIndex; e += 1) {
                let a = r.turnKeys[e];
                if (null != a && !r.gapKeys.has(a) && (!r.collapseEmptyRows || (r.heightsPx[e] ?? 0) > 0) && null != l[a] && o.turnIndexByKey.has(a) && (r.bottomOffsetsPx[e] ?? 0) < t + i && (r.bottomOffsetsPx[e] ?? 0) + (r.heightsPx[e] ?? 0) > t) {
                    if (n) u = a;
                    else if (null == u && (u = a), (r.bottomOffsetsPx[e] ?? 0) + (r.heightsPx[e] ?? 0) <= t + i) return a
                }
            }
            return u
        }

        function F(e, t) {
            return e === t || e.length === t.length && e.every((e, n) => e === t[n])
        }

        function D(e) {
            return Math.max(0, e?.() ?? 0)
        }

        function L(e, t) {
            return Math.max(0, e - t)
        }

        function k(e) {
            let {
                scrollElement: t,
                turnElement: n,
                windowZoom: r
            } = e;
            return null == t || null == n ? 0 : (0, s.b)(n.getBoundingClientRect().bottom - t.getBoundingClientRect().bottom, r)
        }
        class q {
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
    gOnr: (function(e, t, n) {
        var r = n("QosV"),
            l = n("BolX"),
            o = n("zd8w"),
            i = n("TSib"),
            a = n("ipIJ"),
            u = n("Sd8U"),
            s = n("tSEg"),
            c = n("DRR4"),
            h = n("qZWE");
        n.d(t, {}, {
            a: function(e) {
                let t, n, d, g, m, f = (0, r.c)(14);
                f[0] !== e ? (t = void 0 === e ? {} : e, f[0] = e, f[1] = t) : t = f[1];
                let {
                    transcriptMcpAppIds: p,
                    blockedWidgetSource: x,
                    shouldBlockExternalEgress: y
                } = t, P = void 0 !== y && y, v = (0, l.y)(s.a), w = (0, l.y)(u.a), b = (0, l.z)(h.i), S = (0, l.z)(i.w);
                return f[2] !== S || f[3] !== x || f[4] !== w || f[5] !== b || f[6] !== v || f[7] !== P || f[8] !== p ? (n = () => {
                    for (let [e, t] of("chatgpt-thread" === v.value.routeKind && (0, a.b)(w, S.filter(e => P || null != x && (e.widgetSource ?? "descriptor") === x)), b))(P || null != x && (t.content.mcpAppScope.widgetSource ?? "descriptor") === x || t.hostedInThreadScrollLayout && p?.has(e) === !1) && (0, h.z)(v, e)
                }, d = [S, x, p, w, b, v, P], f[2] = S, f[3] = x, f[4] = w, f[5] = b, f[6] = v, f[7] = P, f[8] = p, f[9] = n, f[10] = d) : (n = f[9], d = f[10]), (0, o.useLayoutEffect)(n, d), f[11] !== v ? (g = () => {
                    (0, c.g)(v)
                }, m = [v], f[11] = v, f[12] = g, f[13] = m) : (g = f[12], m = f[13]), (0, o.useLayoutEffect)(g, m), null
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
            i = n("jqIZ"),
            a = n("Cslg"),
            u = n("TS05"),
            s = n("tSEg");
        n.d(t, {}, {
            a: function(e) {
                let t, n, c, h = (0, r.c)(18),
                    {
                        ready: d,
                        onNavigate: g
                    } = e,
                    m = (0, l.y)(s.a),
                    f = (0, l.z)(a.f),
                    p = (0, i.Y)(),
                    x = p.state,
                    y = x?.sidebarArea === "scheduled";
                h[0] !== f || h[1] !== p.key ? (t = {
                    locationKey: p.key,
                    accountId: f
                }, h[0] = f, h[1] = p.key, h[2] = t) : t = h[2];
                let P = (0, l.x)(u.a, t),
                    v = (0, o.useEffectEvent)(g);
                return h[3] !== f || h[4] !== P || h[5] !== p.key || h[6] !== v || h[7] !== d || h[8] !== y || h[9] !== m ? (n = () => {
                    if (!y || !d || P) return;
                    let e = new AbortController;
                    return v(e.signal).then(() => {
                        e.signal.aborted || m.set(u.a, {
                            locationKey: p.key,
                            accountId: f
                        }, !0)
                    }), () => e.abort()
                }, h[3] = f, h[4] = P, h[5] = p.key, h[6] = v, h[7] = d, h[8] = y, h[9] = m, h[10] = n) : n = h[10], h[11] !== f || h[12] !== P || h[13] !== p.key || h[14] !== d || h[15] !== y || h[16] !== m ? (c = [f, P, p.key, d, y, m], h[11] = f, h[12] = P, h[13] = p.key, h[14] = d, h[15] = y, h[16] = m, h[17] = c) : c = h[17], (0, o.useEffect)(n, c), null
            }
        })
    }),
    QEDJ: (function(e, t, n) {
        n.d(t, {}, {
            a: "thread-content-will-collapse"
        })
    }),
    yLzP: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            o = n("oyxz"),
            i = n("Sm6l"),
            a = n("RNul");
        n.d(t, {}, {
            a: function(e) {
                let t, n, u = (0, l.c)(5),
                    {
                        ref: s,
                        onRetry: c
                    } = e;
                return u[0] !== c ? (t = null != c ? (0, r.jsx)(i.a, {
                    color: "secondary",
                    onClick: c,
                    children: (0, r.jsx)(o.a, {
                        id: "chatgpt.pagination.retry",
                        defaultMessage: "Try again",
                        description: "Button to retry loading older conversation messages after a failure"
                    })
                }) : (0, r.jsxs)("div", {
                    role: "status",
                    children: [(0, r.jsx)(a.a, {}), (0, r.jsx)("span", {
                        className: "sr-only",
                        children: (0, r.jsx)(o.a, {
                            id: "chatgpt.pagination.loading",
                            defaultMessage: "Loading older messages…",
                            description: "Accessible status while an older page of conversation messages loads"
                        })
                    })]
                }), u[0] = c, u[1] = t) : t = u[1], u[2] !== s || u[3] !== t ? (n = (0, r.jsx)("div", {
                    ref: s,
                    className: "flex justify-center py-4",
                    children: t
                }), u[2] = s, u[3] = t, u[4] = n) : n = u[4], n
            }
        })
    }),
    KFm7: (function(e, t, n) {
        var r = n("acLe"),
            l = n("jCHb"),
            o = n("p5Yg"),
            i = n("V8uZ"),
            a = n("uYx2");
        let u = 2 / 3;

        function s(e) {
            let t = Number.parseFloat(e.style.getPropertyValue("--thread-scroll-padding-bottom") || e.style.getPropertyValue("--thread-scroll-seeded-padding-bottom"));
            return Number.isFinite(t) ? t : 0
        }

        function c(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = Math.max(0, e.clientHeight - s(e));
            return t ? n : Math.max(0, Math.min(n * u, n - 240))
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
                    let n = e - (0, a.b)(t);
                    if (n <= 0) return;
                    let r = this.height.get() + n;
                    if (t.scrollHeight <= t.clientHeight) {
                        let n = r + t.clientHeight;
                        this.writeHeight(n), r = n - ((0, a.b)(t) - e)
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
                        l = null == r ? 0 : (0, a.b)(r);
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
                        r = n.bottom - s(e) * (n.height / e.clientHeight);
                    t.getBoundingClientRect().top > r || (this.canPrepareThreadEndContent = !1, this.cancelPendingUserScrollDecay(), this.consumeGrowth((0, a.b)(e)), this.scrollController.compensateScrollToDistanceFromBottomPx(0))
                };
                collapseIfHidden = () => {
                    let e = this.scrollController.getScrollElement();
                    if (0 >= this.height.get() || null != this.stopPlacementAnimation || null == e || null == this.element) return;
                    let t = e.getBoundingClientRect(),
                        n = t.height / e.clientHeight,
                        r = t.bottom - s(e) * n;
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
                    if (e < t && (0, a.d)(e)) return void this.clear();
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
                            n = s(e),
                            r = t !== this.viewportHeightPx || n !== this.scrollPaddingBottomPx;
                        this.viewportHeightPx = t, this.scrollPaddingBottomPx = n;
                        let l = r && null != this.stopPlacementAnimation,
                            o = this.canPrepareThreadEndContent;
                        l && (this.canPrepareThreadEndContent = !1, this.stop());
                        let i = this.trimTo(c(e, null != this.placementTarget));
                        l && (i || this.scrollController.compensateScrollToDistanceFromBottomPx((0, a.b)(e)), this.animatePlacement(), this.canPrepareThreadEndContent = o)
                    }
                };
                place = e => {
                    let t = this.scrollController.getScrollElement();
                    if (null == t) return;
                    this.canPrepareThreadEndContent = !1, this.cancelPendingUserScrollDecay(), this.interruptPlacement(), this.placementTarget = e, this.viewportHeightPx = t.clientHeight, this.scrollPaddingBottomPx = s(t);
                    let n = this.height.get(),
                        r = (0, a.b)(t),
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
                                    ...i.g,
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
                    return (0, a.b)(e) - (this.placementTarget.getBoundingClientRect().top - t.top) / n + e.clientTop + r
                }
            },
            b: s
        })
    }),
    Ho4C: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            o = n("zd8w"),
            i = n("T1PX"),
            a = n("ZYy5"),
            u = n("m8On"),
            s = n("bIvi"),
            c = n("lsfk");
        let h = Array.from({
            length: 101
        }, (e, t) => t / 100);
        n.d(t, {}, {
            a: function(e) {
                let t, n, d, g, m, f, p, x, y, P, v, w, b, S, E = (0, l.c)(31),
                    {
                        controller: I,
                        onReleased: C
                    } = e,
                    B = (0, c.b)(),
                    M = (0, o.useContext)(a.a),
                    H = (0, i.a)(),
                    {
                        getScrollElement: R
                    } = B;
                E[0] !== I ? (t = e => {
                    I.setElement(e)
                }, E[0] = I, E[1] = t) : t = E[1];
                let K = (0, s.a)(t);
                return E[2] !== I || E[3] !== C || E[4] !== H || E[5] !== B ? (n = () => {
                    I.updateContext(B, H, C)
                }, d = [I, B, H, C], E[2] = I, E[3] = C, E[4] = H, E[5] = B, E[6] = n, E[7] = d) : (n = E[6], d = E[7]), (0, o.useInsertionEffect)(n, d), E[8] !== I || E[9] !== R ? (g = () => {
                    let e = R();
                    if (null == e) return;
                    let t = new AbortController;
                    for (let n of ["wheel", "touchstart", "pointerdown", "keydown"]) e.addEventListener(n, I.interruptPlacement, {
                        capture: !0,
                        passive: !0,
                        signal: t.signal
                    });
                    return () => {
                        t.abort(), I.interruptPlacement()
                    }
                }, m = [I, R], E[8] = I, E[9] = R, E[10] = g, E[11] = m) : (g = E[10], m = E[11]), (0, o.useEffect)(g, m), E[12] !== I.cancelPendingUserScrollDecay ? (f = () => I.cancelPendingUserScrollDecay, E[12] = I.cancelPendingUserScrollDecay, E[13] = f) : f = E[13], E[14] !== I ? (p = [I], E[14] = I, E[15] = p) : p = E[15], (0, o.useEffect)(f, p), E[16] !== I || E[17] !== R ? (x = () => {
                    let e = R();
                    if (null == e || "u" < typeof IntersectionObserver) return;
                    let t = new IntersectionObserver(I.collapseIfHidden, {
                            root: e,
                            threshold: h
                        }),
                        n = I.getElement();
                    return null != n && t.observe(n), () => t.disconnect()
                }, y = [I, R], E[16] = I, E[17] = R, E[18] = x, E[19] = y) : (x = E[18], y = E[19]), (0, o.useEffect)(x, y), E[20] !== I || E[21] !== B ? (P = () => {
                    let e = B.addScrollListener(I.handleScroll),
                        t = B.addUserScrollListener(I.handleUserScroll);
                    return I.reconcileViewport(), () => {
                        e(), t()
                    }
                }, v = [I, B], E[20] = I, E[21] = B, E[22] = P, E[23] = v) : (P = E[22], v = E[23]), (0, o.useLayoutEffect)(P, v), E[24] !== I || E[25] !== R || E[26] !== M ? (w = () => {
                    let e = R();
                    if (null == e) return;
                    let t = null,
                        n = () => {
                            null == t && (t = window.requestAnimationFrame(() => {
                                t = null, I.reconcileViewport()
                            }))
                        },
                        r = M ?? (0, u.b)(),
                        l = e.parentElement?.querySelector("[data-thread-scroll-footer]"),
                        o = null == l ? [e] : [e, l];
                    for (let e of o)(0, u.a)({
                        element: e,
                        callback: n,
                        observer: r
                    });
                    return window.addEventListener("resize", n, {
                        passive: !0
                    }), () => {
                        for (let e of o)(0, u.c)({
                            element: e,
                            callback: n,
                            observer: r
                        });
                        null == M && r?.disconnect(), window.removeEventListener("resize", n), null != t && window.cancelAnimationFrame(t)
                    }
                }, b = [I, R, M], E[24] = I, E[25] = R, E[26] = M, E[27] = w, E[28] = b) : (w = E[27], b = E[28]), (0, o.useEffect)(w, b), E[29] !== K ? (S = (0, r.jsx)("div", {
                    ref: K,
                    className: "shrink-0",
                    "aria-hidden": !0
                }), E[29] = K, E[30] = S) : S = E[30], S
            }
        })
    }),
    g3o5: (function(e, t, n) {
        var r = n("SZCv"),
            l = n.n(r),
            o = n("BolX"),
            i = n("OWtl");
        let a = (0, o.u)(i.a, () => new Map),
            u = (0, o.c)(i.a, e => {
                let {
                    get: t
                } = e;
                return [...t(a).keys()]
            }, {
                isEqual: l()
            });
        n.d(t, {}, {
            a: function(e, t) {
                return e.set(a, e => new Map(e).set(t, (e.get(t) ?? 0) + 1)), () => {
                    e.set(a, e => {
                        let n = new Map(e),
                            r = (n.get(t) ?? 1) - 1;
                        return 0 === r ? n.delete(t) : n.set(t, r), n
                    })
                }
            },
            b: u
        })
    }),
    BdYu: (function(e, t, n) {
        var r = n("QosV"),
            l = n("K45w"),
            o = n("p5Yg"),
            i = n("B7sF"),
            a = n("jCHb"),
            u = n("RgeH"),
            s = n("BolX"),
            c = n("zd8w"),
            h = n("I7bK"),
            d = n("QcW8"),
            g = n("gbrq"),
            m = n("kl6F"),
            f = n("eGPX"),
            p = n("Exwq"),
            x = n("w2yL"),
            y = n("KWzM"),
            P = n("GaCK");

        function v(e) {
            return e.isPopoverOpen ? {
                ...e,
                isPopoverOpen: !1
            } : e
        }

        function w(e, t, n, r, l, o) {
            return b({
                isSummaryPanelPinned: t && (o ?? (0, g.z)(!0 === n ? e.get(g.N) : e.get(g.C, n), n)),
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
                let t, n, o, i, v, S, E, I, C, B, M, H, R, K, T, F, D, L = (0, r.c)(73);
                L[0] !== e ? (t = void 0 === e ? {} : e, L[0] = e, L[1] = t) : t = L[1];
                let {
                    contentShiftResetKey: k,
                    controlledIsOpen: q,
                    floatingPanelWidth: A,
                    getCurrentPinStateKey: O,
                    isEnabled: z,
                    pinStateKey: U
                } = t, _ = void 0 === z || z, N = void 0 === U || U, j = (0, s.y)(m.a), V = (0, s.z)(null == q && !0 === N ? g.N : null), W = (0, s.x)(null == q && !0 !== N ? g.C : null, !0 !== N && N);
                L[2] !== q || L[3] !== W || L[4] !== V || L[5] !== N ? (n = q ?? (0, g.z)(!0 === N ? V : W, N), L[2] = q, L[3] = W, L[4] = V, L[5] = N, L[6] = n) : n = L[6];
                let $ = n,
                    Q = (0, s.z)(g.h),
                    G = (0, s.z)(d.G),
                    X = (0, s.z)(p.g),
                    Y = (0, s.z)(P.b),
                    Z = _ && $,
                    J = A ?? 300,
                    ee = _ && null == A && (q ?? (Y.isPopoverOpen || "boolean" != typeof N && $)),
                    et = (0, s.z)(f.c),
                    en = (0, c.useContext)(h.c),
                    er = (0, l.a)(0),
                    el = en?.mainContentTargetWidth ?? er;
                L[7] !== A || L[8] !== Z || L[9] !== el ? (o = b({
                    isSummaryPanelPinned: Z,
                    floatingPanelWidth: A,
                    mainContentTargetWidth: el.get()
                }), L[7] = A, L[8] = Z, L[9] = el, L[10] = o) : o = L[10];
                let eo = (0, l.a)(o);
                L[11] !== el ? (i = e => el.on("change", e), L[11] = el, L[12] = i) : i = L[12], L[13] !== el || L[14] !== J ? (v = () => (0, x.c)(el.get(), J), L[13] = el, L[14] = J, L[15] = v) : v = L[15], L[16] !== i || L[17] !== v ? (S = {
                    subscribe: i,
                    getSnapshot: v
                }, L[16] = i, L[17] = v, L[18] = S) : S = L[18];
                let ei = S,
                    ea = (0, c.useSyncExternalStore)(ei.subscribe, ei.getSnapshot, ei.getSnapshot),
                    eu = (0, c.useRef)(null);
                L[19] !== eo ? (E = eo.get(), L[19] = eo, L[20] = E) : E = L[20], L[21] !== el ? (I = el.get(), L[21] = el, L[22] = I) : I = L[22], L[23] !== I || L[24] !== E ? (C = {
                    offset: E,
                    width: I
                }, L[23] = I, L[24] = E, L[25] = C) : C = L[25];
                let es = (0, c.useRef)(C),
                    ec = (0, c.useRef)(!1),
                    eh = (0, c.useRef)(k),
                    ed = (0, c.useRef)(Q),
                    eg = (0, c.useRef)(G),
                    em = Z && null == A;
                L[26] !== ea || L[27] !== ee || L[28] !== em ? (B = (0, x.a)({
                    displayMode: ea,
                    isPinned: em,
                    isPopoverOpen: ee
                }), L[26] = ea, L[27] = ee, L[28] = em, L[29] = B) : B = L[29];
                let ef = B,
                    ep = ef.shouldShow && !X;
                L[30] !== eo || L[31] !== k || L[32] !== q || L[33] !== A || L[34] !== O || L[35] !== G || L[36] !== _ || L[37] !== el || L[38] !== N || L[39] !== Q || L[40] !== j ? (M = () => {
                    let e = ed.current !== Q,
                        t = eg.current !== G;
                    if (!ec.current && eh.current === k && !e && !t) return;
                    ec.current = !1, eh.current = k, ed.current = Q, eg.current = G;
                    let n = w(j, _, O?.() ?? N, el.get(), A, q);
                    es.current = {
                        offset: n,
                        width: el.get()
                    }, eu.current?.(), eo.jump(n)
                }, H = [eo, k, q, A, O, G, _, el, N, Q, j], L[30] = eo, L[31] = k, L[32] = q, L[33] = A, L[34] = O, L[35] = G, L[36] = _, L[37] = el, L[38] = N, L[39] = Q, L[40] = j, L[41] = M, L[42] = H) : (M = L[41], H = L[42]), (0, c.useLayoutEffect)(M, H);
                let ex = en?.chatPaneWidth ?? el;
                L[43] !== ex || L[44] !== eo || L[45] !== q || L[46] !== A || L[47] !== O || L[48] !== _ || L[49] !== el || L[50] !== N || L[51] !== j || L[52] !== et ? (R = () => {
                    let e = (e, t) => {
                        let n = w(j, _, O?.() ?? N, e, A, q),
                            r = es.current,
                            l = eo.get();
                        if (r.offset === n && (l === n || r.width === e && !t)) return;
                        if (es.current = {
                                offset: n,
                                width: e
                            }, eu.current?.(), t || 0 === e || l === n) return void eo.jump(n);
                        let o = ex.get();
                        if (o === e) {
                            let e = (0, a.a)(eo, n, y.a),
                                t = document.activeViewTransition;
                            if (null != t) {
                                e.pause();
                                let n = () => e.play();
                                t.ready.then(n, n)
                            }
                            eu.current = () => e.stop();
                            return
                        }
                        let i = (0, u.a)([o, e], [l, n]),
                            s = ex.on("change", e => {
                                let t = i(e);
                                eo.set(t), t === n && queueMicrotask(s)
                            });
                        eu.current = s
                    };
                    return e(el.get(), et), el.on("change", t => {
                        e(t, et || 0 === el.getPrevious() || j.get(g.h) !== ed.current)
                    })
                }, L[43] = ex, L[44] = eo, L[45] = q, L[46] = A, L[47] = O, L[48] = _, L[49] = el, L[50] = N, L[51] = j, L[52] = et, L[53] = R) : R = L[53], L[54] !== ex || L[55] !== eo || L[56] !== q || L[57] !== A || L[58] !== O || L[59] !== _ || L[60] !== Z || L[61] !== el || L[62] !== N || L[63] !== j || L[64] !== et ? (K = [ex, eo, q, A, O, _, Z, el, N, j, et], L[54] = ex, L[55] = eo, L[56] = q, L[57] = A, L[58] = O, L[59] = _, L[60] = Z, L[61] = el, L[62] = N, L[63] = j, L[64] = et, L[65] = K) : K = L[65], (0, c.useLayoutEffect)(R, K), L[66] === Symbol.for("react.memo_cache_sentinel") ? (T = () => () => {
                    ec.current = !0, eu.current?.()
                }, F = [], L[66] = T, L[67] = F) : (T = L[66], F = L[67]), (0, c.useLayoutEffect)(T, F);
                let ey = ef.shouldHideInlineImmediately || X,
                    eP = X ? null : ef.visibleSurface;
                return L[68] !== eo || L[69] !== ep || L[70] !== ey || L[71] !== eP ? (D = {
                    contentShift: eo,
                    shouldHideInlineImmediately: ey,
                    shouldShow: ep,
                    visibleSurface: eP
                }, L[68] = eo, L[69] = ep, L[70] = ey, L[71] = eP, L[72] = D) : D = L[72], D
            },
            b: function(e, t) {
                let n, a, u, d, m, f, p = (0, r.c)(15),
                    y = void 0 !== t && t,
                    w = (0, s.z)(g.i),
                    b = (0, s.z)(g.r),
                    S = (0, c.useContext)(h.c),
                    E = (0, l.a)(0),
                    I = S?.mainContentTargetWidth ?? E;
                p[0] !== y || p[1] !== I || p[2] !== e ? (n = () => {
                    var t, n;
                    t = e, n = y ? "overlay" : (0, x.c)(I.get()), t.set(P.b, e => {
                        let t = "overlay" === n && e.isPopoverOpen;
                        return e.displayMode === n && e.isPopoverOpen === t ? e : {
                            displayMode: n,
                            isPopoverOpen: t
                        }
                    })
                }, p[0] = y, p[1] = I, p[2] = e, p[3] = n) : n = p[3];
                let C = n;
                p[4] !== C ? (a = () => {
                    o.b.update(C)
                }, p[4] = C, p[5] = a) : a = p[5], (0, i.a)(I, "change", a), p[6] !== C ? (u = () => (C(), () => (0, o.a)(C)), p[6] = C, p[7] = u) : u = p[7], p[8] !== w || p[9] !== b || p[10] !== C ? (d = [w, b, C], p[8] = w, p[9] = b, p[10] = C, p[11] = d) : d = p[11], (0, c.useLayoutEffect)(u, d), p[12] !== e ? (m = () => () => {
                    e.set(P.b, v)
                }, f = [e], p[12] = e, p[13] = m, p[14] = f) : (m = p[13], f = p[14]), (0, c.useLayoutEffect)(m, f)
            }
        })
    })
};