export const __rspack_esm_ids = [464191];
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
            a = n("L6Md");
        let i = Array.from("αβγδεζηθικλμνξοπρστυφχψω"),
            u = new Map([..."alpha beta gamma delta epsilon zeta eta theta iota kappa lambda mu nu xi omicron pi rho sigma tau upsilon phi chi psi omega".split(" ").map((e, t) => [e, i[t]]), ..."nabla:∇ partial:∂ cdot:⋅ times:× div:÷ pm:± mp:∓ le:≤ leq:≤ ge:≥ geq:≥ ne:≠ neq:≠ infty:∞ sum:∑ prod:∏ int:∫ in:∈ notin:∉ to:→ rightarrow:→ leftarrow:←".split(" ").map(e => {
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
                if (s.test(e.value)) {
                    let r = a();
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
                let i = e.value.replace(/^\\/, "");
                return i = (i = (i = u.get(i.replace(/^var/, "").toLowerCase()) ?? e.value).replace(/[\u{1D400}-\u{1D7FF}]/gu, e => e.normalize("NFKC")).toLowerCase()).replace(/[ϵϑϕϖϱς−·]/g, e => "εθφπρσ-⋅" ["ϵϑϕϖϱς−·".indexOf(e)]), [{
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
        var g = n("agQa"),
            m = n("QxH2"),
            f = n("h8aU");

        function p(e) {
            let {
                contextId: t,
                getTurns: n,
                hydratePersistedMatch: r,
                revealUnrenderedMatches: i = !1,
                searchPersisted: s,
                searchMath: c = !1,
                scrollAdapter: h
            } = e;
            return {
                domain: "conversation",
                contextId: t,
                async search(e, t) {
                    var r, i;
                    let h, m, p = await async function(e, t, n, r) {
                        let l = e.query.trim(),
                            i = n && l.length > 1 && l.startsWith("/") && l.endsWith("/") ? l.slice(1, -1) : void 0,
                            s = t.flatMap(e => e.units.flatMap(t => (t.textChunks ?? [t.text]).flatMap((r, l) => {
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
                            c = {
                                domain: e.domain,
                                contextId: e.contextId,
                                query: l,
                                regex: i,
                                searchMath: n || void 0,
                                matches: [],
                                totalMatches: 0,
                                isCapped: !1
                            };
                        if (!l) return c;
                        let h = null == i ? null : await (0, g.a)({
                            query: i,
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
                            let r = (0, o.e)(n.turnKey, n.unitId),
                                i = m.get(r) ?? 0,
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
                                        i = d(u.get(r) ?? r);
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
                                    let s = 0;
                                    for (let e = 0; i.tokens.length > 0 && e <= o.tokens.length - i.tokens.length; e += 1) {
                                        if (!i.tokens.every((t, n) => t.value === o.tokens[e + n].value)) continue;
                                        let t = o.tokens.slice(e, e + i.tokens.length),
                                            r = t[0].start,
                                            a = t[t.length - 1].end;
                                        for (let e of t) r = Math.min(r, e.delimiter?.start ?? r), a = Math.max(a, e.delimiter?.end ?? a);
                                        for (let e of o.groups) r < e.start && a > e.start && a < e.end && (a = e.end), r > e.start && r < e.end && a > e.end && (r = e.start);
                                        s += 1, l.length < n && l.push({
                                            start: r,
                                            end: a
                                        }), e += i.tokens.length - 1
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
                                    matchIndex: null == n.equationIndex ? i + t : t,
                                    equationIndex: n.equationIndex,
                                    equationRange: null == n.equationIndex ? void 0 : r
                                };
                                c.matches.push({
                                    id: (0, o.d)(l),
                                    ordinal: c.matches.length + 1,
                                    location: l
                                })
                            }
                            null == n.equationIndex && m.set(r, i + s.length)
                        }
                        return c.isCapped = c.totalMatches > c.matches.length, c
                    }(e, n(), c, t?.signal);
                    if (c || null == s) return p;
                    let x = await s(e, t);
                    return null == x ? p : (r = p, i = x, h = new Map(r.matches.map(e => [e.id, e])), m = l()([...i.matches.map(e => h.get(e.id) ?? e), ...r.matches], "id").map((e, t) => ({
                        ...e,
                        ordinal: t + 1
                    })), {
                        ...r,
                        matches: m,
                        totalMatches: Math.max(m.length, r.totalMatches, i.totalMatches),
                        isCapped: r.isCapped || i.isCapped
                    })
                },
                async ensureVisible(e, n) {
                    if ("conversation" !== e.domain || e.contextId !== t || null != e.turnCursor && null != r && !await r(e, n) || n?.signal?.aborted) return;
                    h.onNavigate?.();
                    let l = null != e.turnCursor,
                        a = h.getTurnContainer(e.turnKey),
                        u = (0, o.d)(e),
                        s = i && null != a && null == (0, o.j)({
                            container: a,
                            matchId: u,
                            includeShadowRoots: !1
                        });
                    if (null == a || l || s) {
                        if (n?.signal?.aborted || (n?.signal == null ? await h.scrollToTurn(e.turnKey) : await h.scrollToTurn(e.turnKey, {
                                signal: n.signal
                            }), n?.signal?.aborted)) return;
                        a = h.getTurnContainer(e.turnKey)
                    }
                    null != a && await (0, m.b)({
                        container: a,
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
                    let e = (0, r.e)(n.location.turnKey, n.location.unitId),
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
            a = n("SKhr"),
            i = n("gSdW");

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
            let t, c, f, p, x, y, P, v, w, b, S, E, B, C, M, I = (0, r.c)(29),
                {
                    containerRef: H,
                    contextId: R,
                    onContentChange: K
                } = e,
                T = (0, l.z)(s.d),
                F = (0, l.z)(s.g),
                D = T?.contextId === R ? T : null,
                L = null == D ? null : F?.id ?? null,
                {
                    schedule: k,
                    cancel: O
                } = (E = (0, r.c)(5), B = (0, o.useRef)(null), 80 !== E[0] ? (w = e => {
                    null == B.current && (B.current = window.setTimeout(() => {
                        B.current = null, e()
                    }, 80))
                }, E[0] = 80, E[1] = w) : w = E[1], C = w, E[2] === Symbol.for("react.memo_cache_sentinel") ? (b = () => {
                    null != B.current && (window.clearTimeout(B.current), B.current = null)
                }, E[2] = b) : b = E[2], M = b, E[3] !== C ? (S = {
                    schedule: C,
                    cancel: M
                }, E[3] = C, E[4] = S) : S = E[4], S);
            I[0] !== K ? (t = () => K?.(), I[0] = K, I[1] = t) : t = I[1];
            let q = (0, o.useEffectEvent)(t);
            I[2] !== F?.location || I[3] !== R ? (c = e => {
                let t = F?.location;
                return t?.domain === "conversation" && t.contextId === R && (0, a.a)(e, t)
            }, I[2] = F?.location, I[3] = R, I[4] = c) : c = I[4];
            let A = (0, o.useEffectEvent)(c);
            I[5] !== L ? (f = (e, t) => {
                t.forEach(t => {
                    (0, a.o)({
                        element: t,
                        matchId: e
                    }), (0, a.n)(t, e === L)
                })
            }, I[5] = L, I[6] = f) : f = I[6];
            let z = (0, o.useEffectEvent)(f);
            I[7] !== D || I[8] !== H || I[9] !== z ? (p = async (e, t) => {
                let r = H.current;
                if (null == r || ((0, a.b)(r, {
                        includeShadowRoots: !1
                    }), t.takeRecords(), null == D)) return;
                let l = (0, i.a)(D.matches),
                    o = Array.from(r.querySelectorAll("[data-content-search-unit-key]")).flatMap(e => {
                        let t = l.get(e.dataset.contentSearchUnitKey ?? "");
                        return null == t ? [] : [{
                            element: e,
                            matches: t
                        }]
                    }),
                    s = o.map(m),
                    c = e => {
                        e.forEach((e, t) => e.forEach((e, n) => z(s[t].matches[n].id, e)))
                    };
                if (!D.searchMath) {
                    c(s.map(e => {
                        let {
                            element: t,
                            matches: n
                        } = e;
                        return (0, a.l)({
                            target: t,
                            query: D.query,
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
                        } = await Promise.all([n.e(990054), n.e(559373)]).then(n.bind(n, "RlG8")), i = u(r), s = new Map(i.map(e => {
                            let {
                                node: t
                            } = e;
                            return [t, t.data]
                        })), c = new Set(i.map(e => {
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
                                let a = u(h),
                                    s = a.length === i.length && a.every((e, t) => {
                                        let {
                                            text: n
                                        } = e;
                                        return n === i[t].text
                                    });
                                return a.forEach((e, t) => {
                                    let n = g.get(e.color);
                                    if (null == n) return;
                                    let r = i[t];
                                    if (!s) {
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
                            for (let e of i) {
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
                                let i = (0, a.g)();
                                return l.surroundContents(i), [i]
                            }(t));
                            return o
                        }
                    })(e, l.map(g)).then(e => () => e().forEach((e, t) => z(l[t].id, e))))
                });
                let [p, x] = await Promise.all([(0, a.m)(s.map(d), D.query, D.regex, e), Promise.all(f)]);
                e.aborted || (c(p()), x.forEach(h), t.takeRecords())
            }, I[7] = D, I[8] = H, I[9] = z, I[10] = p) : p = I[10];
            let U = (0, o.useEffectEvent)(p);
            I[11] !== D?.runId || I[12] !== A || I[13] !== U || I[14] !== O || I[15] !== H || I[16] !== q || I[17] !== k ? (x = () => {
                let e = H.current;
                if (null == e) return;
                let t = null,
                    n = () => {
                        t?.abort(), U((t = new AbortController).signal, r)
                    },
                    r = new MutationObserver(e => {
                        if (!(0, a.p)(e)) return;
                        t?.abort();
                        let r = () => {
                            q(), n()
                        };
                        A(e) ? (O(), r()) : k(r)
                    });
                return D?.runId == null ? void n() : (r.observe(e, {
                    childList: !0,
                    subtree: !0,
                    characterData: !0,
                    attributeFilter: ["hidden", "inert"]
                }), n(), () => {
                    r.disconnect(), t?.abort(), O(), (0, a.b)(e, {
                        includeShadowRoots: !1
                    })
                })
            }, I[11] = D?.runId, I[12] = A, I[13] = U, I[14] = O, I[15] = H, I[16] = q, I[17] = k, I[18] = x) : x = I[18];
            let j = D?.runId;
            I[19] !== O || I[20] !== H || I[21] !== R || I[22] !== k || I[23] !== j ? (y = [j, O, H, R, k], I[19] = O, I[20] = H, I[21] = R, I[22] = k, I[23] = j, I[24] = y) : y = I[24], (0, o.useEffect)(x, y), I[25] !== L || I[26] !== H ? (P = () => {
                H.current?.querySelectorAll("mark[data-search-match]").forEach(e => {
                    (0, a.n)(e, e.dataset.contentSearchMatchId === L)
                })
            }, v = [L, H], I[25] = L, I[26] = H, I[27] = P, I[28] = v) : (P = I[27], v = I[28]), (0, o.useEffect)(P, v)
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
            a = n("oyxz");
        n.d(t, {}, {
            a: function(e) {
                let t, n, i, u, s, c, h, d, g, m = (0, l.c)(15),
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
                }, n = [], m[0] = t, m[1] = n) : (t = m[0], n = m[1]), (0, o.useEffect)(t, n), m[2] === Symbol.for("react.memo_cache_sentinel") ? (i = () => x.current?.abort(), m[2] = i) : i = m[2], m[3] !== f ? (u = e => {
                    x.current?.abort();
                    let t = e.currentTarget;
                    t.tabIndex = -1;
                    let n = new AbortController;
                    x.current = n, P(!1), f(n.signal).then(e => {
                        !n.signal.aborted && t.isConnected && t.ownerDocument.activeElement === t && (e?.isConnected ? e.focus({
                            preventScroll: !0
                        }) : P(!0))
                    })
                }, m[3] = f, m[4] = u) : u = m[4], m[5] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, r.jsx)(a.a, {
                    id: "codex.conversation.latestResponse",
                    defaultMessage: "Latest response"
                }), m[5] = s) : s = m[5], m[6] !== u ? (c = (0, r.jsx)("h4", {
                    ref: p,
                    className: "sr-only m-0 select-none",
                    tabIndex: 0,
                    onBlur: i,
                    onFocus: u,
                    children: s
                }), m[6] = u, m[7] = c) : c = m[7], m[8] !== y ? (h = y ? (0, r.jsx)(a.a, {
                    id: "codex.conversation.latestResponseUnavailable",
                    defaultMessage: "No response available"
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
    if6d: (function(e, t, n) {
        n.d(t, {
            a: () => M,
            b: () => C
        });
        var r = n("ABep"),
            l = n("QosV"),
            o = n("on57"),
            a = n("BolX"),
            i = n("zd8w"),
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
            return "gap" !== e.type
        }

        function b(e) {
            let {
                collapseEmptyRows: t = !1,
                entries: n,
                gapPx: r,
                measuredHeightsByKey: l,
                pixelScale: o
            } = e, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e => !1 !== e.anchorEligible, i = new Set, u = [], s = [], c = [], h = new Map, d = [], g = 0;
            for (let [e, m] of n.entries()) {
                let n = m.turnKey,
                    f = Object.hasOwn(l, n) ? l[n] : void 0,
                    p = Math.max(m.minHeightPx ?? 0, f ?? m.estimatedHeightPx ?? 280);
                null != o && (p = Math.round(p * o) / o);
                let x = (t ? g > 0 && p > 0 : e > 0) ? m.gapBeforePx ?? r : 0;
                null != o && (x = Math.round(x * o) / o), g += x, u.push(x), a(m) || i.add(n), h.set(n, e), d.push(n), c.push(g), s.push(p), g += p
            }
            return {
                bottomOffsetsPx: c.map((e, t) => g - e - (s[t] ?? 0)),
                collapseEmptyRows: t,
                gapKeys: i,
                gapsBeforePx: u,
                heightsPx: s,
                topOffsetsPx: c,
                totalHeightPx: g,
                turnIndexByKey: h,
                turnKeys: d
            }
        }

        function S(e) {
            let {
                distanceFromBottomPx: t,
                layout: n,
                overscanCount: r,
                overscanPx: l = 0,
                viewportHeightPx: o
            } = e;
            if (0 === n.turnKeys.length) return {
                startIndex: 0,
                endIndex: 0
            };
            let a = Math.min(Math.max(0, t), n.totalHeightPx),
                i = Math.max(0, a - l),
                u = Math.min(a + Math.max(0, o) + l, n.totalHeightPx),
                s = n.collapseEmptyRows && u === n.totalHeightPx ? 0 : function(e, t) {
                    let n = 0,
                        r = e.length;
                    for (; n < r;) {
                        let l = Math.floor((n + r) / 2);
                        (e[l] ?? 0) < t ? r = l : n = l + 1
                    }
                    return n
                }(n.bottomOffsetsPx, u),
                c = n.collapseEmptyRows && 0 === i ? n.turnKeys.length : function(e, t, n) {
                    let r = 0,
                        l = e.length;
                    for (; r < l;) {
                        let o = Math.floor((r + l) / 2);
                        (e[o] ?? 0) + (t[o] ?? 0) <= n ? l = o : r = o + 1
                    }
                    return r
                }(n.bottomOffsetsPx, n.heightsPx, i);
            return {
                startIndex: Math.max(0, s - r),
                endIndex: Math.min(n.turnKeys.length, Math.max(c, s + 1) + r)
            }
        }

        function E(e) {
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

        function B(e) {
            let {
                layout: t,
                turnKey: n,
                viewportHeightPx: r
            } = e, l = t.turnIndexByKey.get(n);
            return null == l ? null : Math.max(0, (t.bottomOffsetsPx[l] ?? 0) - r / 2 + (t.heightsPx[l] ?? 0) / 2)
        }

        function C(e) {
            let t, n, o, a, i = (0, l.c)(8);
            return i[0] !== e ? ({
                entries: n,
                RowComponent: t,
                ...o
            } = e, i[0] = e, i[1] = t, i[2] = n, i[3] = o) : (t = i[1], n = i[2], o = i[3]), i[4] !== t || i[5] !== n || i[6] !== o ? (a = (0, r.jsx)(M, {
                ...o,
                rows: n,
                getRowKey: F,
                getRowGeometry: D,
                getRowCollapseScopeKey: L,
                isRowAnchorEligible: w,
                renderRow: t
            }), i[4] = t, i[5] = n, i[6] = o, i[7] = a) : a = i[7], a
        }

        function M(e) {
            let {
                collapseEmptyRows: t = !1,
                rows: n,
                getRowKey: l,
                getRowGeometry: x,
                getRowCollapseScopeKey: P,
                isRowAnchorEligible: w,
                renderRow: C,
                onApiChange: M,
                onVisibleContentReady: F,
                className: D,
                gapPx: L = 12,
                getBottomScrollPaddingPx: j,
                isSubmitPlacementAnimating: N,
                onLatestTurnHeightChange: _,
                preserveMeasuredTurnViewport: V = !1,
                preserveUnderfilledViewport: W = !1,
                getPendingRestoreScrollDistanceFromBottomPx: $,
                restoreScrollDistanceFromBottomPx: Q,
                initialRestoreState: G,
                onRestoreStateChange: X,
                onViewportChange: Y,
                onEndViewportChange: Z,
                latestTurnSynchronousMeasurementKey: J,
                layoutReadyTurnKey: ee,
                onTurnLayoutReady: et,
                synchronousMeasurementTurnKey: en,
                retainedTurnKeys: er
            } = e, el = (0, a.z)(f.b), eo = [...er ?? [], ...el], [ea, ei] = (0, i.useState)(null), [eu] = (0, i.useState)(T), es = n.length - 1, ec = es < 0 ? void 0 : l(n[es]), eh = W && null != ea && ea.turnKey === ec ? ea.viewportHeightPx - ea.heightOutsideTurnPx : void 0, ed = (0, i.useMemo)(() => eu(n, l, x, w, eh), [eu, n, l, x, w, eh]), eg = (0, g.b)(), em = (0, s.c)(), ef = em * (globalThis.devicePixelRatio ?? 1), [ep, ex] = (0, i.useState)(() => A(G?.turnHeightsByKey)), [ey, eP] = (0, i.useState)(null), ev = (0, i.useMemo)(() => b({
                collapseEmptyRows: t,
                entries: ed,
                gapPx: L,
                measuredHeightsByKey: ep,
                pixelScale: ef
            }), [t, ed, L, ep, ef]), [ew, eb] = (0, i.useState)(() => {
                var e, t, n;
                let r, l, o, a, i = O(j);
                return e = ev, t = q(eg.getLastScrollDistanceFromBottomPx(), i), n = G, r = n?.renderedWindow, l = r?.viewportHeightPx ?? 800, o = Math.min(t, e.totalHeightPx), a = R(e, o, l), {
                    distanceFromBottomPx: o,
                    renderedRange: (null == r ? null : E({
                        anchorKey: r.anchorKey,
                        layout: e,
                        previousRange: {
                            startIndex: 0,
                            endIndex: null == r.viewportHeightPx ? Math.min(r.count, a.endIndex - a.startIndex) : r.count
                        }
                    })) ?? a,
                    turnKeys: e.turnKeys,
                    viewportHeightPx: l
                }
            }), [eS] = (0, i.useState)(() => new U), eE = (0, i.useSyncExternalStore)(eS.subscribe, eS.getSnapshot, eS.getSnapshot), eB = (0, i.useRef)(null), eC = (0, i.useRef)(ep), eM = (0, i.useRef)(0), eI = (0, p.a)(e => {
                eM.current = e;
                let t = eB.current;
                null != t && (t.style.minHeight = e > 0 ? `${e}px` : "")
            }), eH = (0, i.useRef)(ew), eR = (0, i.useRef)(null), eK = (0, i.useRef)(new Map), eT = (0, i.useRef)(new Map), eF = (0, i.useRef)(new WeakSet), eD = (0, i.useRef)(new Map), eL = (0, i.useRef)(new Map), ek = (0, i.useRef)(null), eO = (0, i.useRef)(null), eq = (0, i.useRef)(0), eA = (0, i.useRef)(null), [ez, eU] = (0, i.useState)(null), ej = (0, i.useRef)(!1), eN = (0, i.useRef)(null), e_ = (0, i.useRef)(ev), eV = (0, i.useRef)(ev), eW = (0, i.useRef)(ev), e$ = (0, i.useRef)(n), eQ = (0, i.useRef)(null);
            (0, i.useLayoutEffect)(() => {
                ep !== eC.current && ex(eC.current)
            }, [t, ed, L, ef, ep]);
            let eG = (0, p.a)(e => {
                    eB.current = e, eP(e)
                }),
                eX = (0, p.a)(() => {
                    if (eV.current !== ev) {
                        eV.current = ev, e_.current = ep === eC.current ? ev : b({
                            collapseEmptyRows: t,
                            entries: ed,
                            gapPx: L,
                            measuredHeightsByKey: eC.current,
                            pixelScale: ef
                        });
                        let e = eB.current;
                        null != e && (e.style.height = `${e_.current.totalHeightPx}px`)
                    }
                    return e_.current
                }),
                eY = (0, p.a)(e => {
                    let t = eg.getScrollElement(),
                        n = eB.current,
                        r = t?.firstElementChild;
                    return null == n || null == r ? e - O(j) : e - (0, s.b)(r.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, em)
                }),
                eZ = ew.renderedRange;
            if (null != eE) {
                let e = B({
                    layout: ev,
                    turnKey: eE.turnKey,
                    viewportHeightPx: ew.viewportHeightPx
                });
                null != e && (eZ = R(ev, e, ew.viewportHeightPx))
            } else if (!k(ew.turnKeys, ev.turnKeys)) {
                let e = ew.turnKeys[ew.renderedRange.startIndex];
                null != e && (eZ = E({
                    anchorKey: e,
                    layout: ev,
                    previousRange: eZ
                }) ?? R(ev, ew.distanceFromBottomPx, ew.viewportHeightPx))
            }
            let eJ = (0, p.a)(() => {
                    null == ek.current && Q?.()
                }),
                e0 = (0, p.a)(() => {
                    null != eN.current && (window.cancelAnimationFrame(eN.current), eN.current = null)
                }),
                e1 = (0, p.a)(() => {
                    null == F || ej.current || null != eN.current || null == eB.current || ed.length > 0 && 0 === eT.current.size || (eN.current = window.requestAnimationFrame(() => {
                        eN.current = window.requestAnimationFrame(() => {
                            eN.current = null, ej.current || null == eB.current || ed.length > 0 && 0 === eT.current.size || (ej.current = !0, eJ(), F())
                        })
                    }))
                }),
                e2 = n.slice(eZ.startIndex, eZ.endIndex).map((e, t) => ({
                    entry: e,
                    turnIndex: eZ.startIndex + t
                }));
            for (let e of new Set(eo)) {
                let t = ev.turnIndexByKey.get(e);
                null == t || t >= eZ.startIndex && t < eZ.endIndex || e2.push({
                    entry: n[t],
                    turnIndex: t
                })
            }
            e2.sort((e, t) => e.turnIndex - t.turnIndex);
            let e4 = (0, p.a)(e => eT.current.get(e)),
                e3 = (0, p.a)(e => {
                    Z?.(e <= 24 && null == eS.getSnapshot() ? function(e, t, n, r) {
                        let {
                            startIndex: l,
                            endIndex: o
                        } = S({
                            distanceFromBottomPx: 0,
                            layout: n,
                            overscanCount: 0,
                            viewportHeightPx: r
                        }), a = new Set(t), i = new Set;
                        for (let e = l; e < o; e++) i.add(e);
                        for (let e of a) {
                            let t = n.turnIndexByKey.get(e);
                            null != t && i.add(t)
                        }
                        return [...i].sort((e, t) => e - t).map(t => ({
                            entry: e[t],
                            retained: a.has(n.turnKeys[t])
                        }))
                    }(n, eo, ev, ew.viewportHeightPx + 24) : null, e4)
                });
            (0, i.useLayoutEffect)(() => {
                e3(eg.getLastScrollDistanceFromBottomPx())
            }, [ev, Z, eE, ew.viewportHeightPx, e3, el, er, n, eg]);
            let e5 = (0, p.a)(() => {
                    if (null == ee || null == et || null != ek.current || eD.current.size > 0) return;
                    let e = eg.getScrollElement(),
                        t = eT.current.get(ee);
                    null != t && eF.current.has(t) && !((eC.current[ee] ?? 0) <= 0) && null != e && !(e.clientHeight <= 0) && et(ee, t)
                }),
                e6 = (0, p.a)(e => {
                    let t = O(j);
                    if (null != e.latestTurnHeightChange && _?.(e.latestTurnHeightChange), e.restoreScrollDistanceFromBottom) eJ();
                    else if (null != e.scrollDistanceFromBottomPx) {
                        var n, r;
                        let l, o = e.scrollDistanceFromBottomPx,
                            a = eW.current,
                            i = e_.current,
                            u = eQ.current;
                        N?.() && null != e.latestTurnHeightChange && null != u && u.totalHeightPx !== a.totalHeightPx && null == eS.getSnapshot() && $?.() == null && (n = a, (l = (r = i).turnKeys.length - 1) > 0 && n.turnKeys.length === r.turnKeys.length && n.turnKeys[l] !== r.turnKeys[l] && n.turnKeys.every((e, t) => t === l || e === r.turnKeys[t] && n.topOffsetsPx[t] === r.topOffsetsPx[t] && n.heightsPx[t] === r.heightsPx[t])) && (o = eg.getUnroundedScrollDistanceFromBottomPx(eg.getLastScrollDistanceFromBottomPx()) + i.totalHeightPx - a.totalHeightPx, eQ.current = a), eg.compensateScrollToDistanceFromBottomPx(o + O(j) - t, null != e.afterMeasure || null != eS.getSnapshot() || $?.() != null || N?.() ? void 0 : "turn-resize")
                    }
                    e.afterMeasure?.()
                }),
                e7 = (0, p.a)((e, t) => {
                    if (null != ek.current || t <= 0) return;
                    let n = eH.current,
                        r = H({
                            current: n,
                            distanceFromBottomPx: e,
                            layout: eX(),
                            viewportHeightPx: t
                        });
                    r === n || (eH.current = r, r.renderedRange.startIndex === n.renderedRange.startIndex && r.renderedRange.endIndex === n.renderedRange.endIndex && k(r.turnKeys, n.turnKeys) || eb(r))
                });
            (0, i.useLayoutEffect)(() => () => Z?.(void 0, e4), [e4, Z]);
            let e8 = (0, p.a)((e, t, n) => {
                    if (null == Y) return;
                    let r = eX(),
                        l = Math.max(0, Math.min(r.totalHeightPx, r.totalHeightPx - e)),
                        o = Math.max(0, l - t);
                    Y({
                        viewportEndPx: l,
                        viewportStartPx: o
                    }, n)
                }),
                e9 = (0, p.a)(e => {
                    eS.getSnapshot() === e && eS.replace(null)
                }),
                te = (0, p.a)((e, t, n) => n?.signal?.aborted ? Promise.resolve() : (Z?.(null, e4), new Promise(r => {
                    let l = () => {
                            eS.getSnapshot() === o && eS.replace(null)
                        },
                        o = {
                            align: n?.align ?? "center",
                            complete: () => {
                                n?.signal?.removeEventListener("abort", l), r()
                            },
                            getTargetElement: t,
                            turnKey: e
                        };
                    eb(eH.current), eS.replace(o), n?.signal?.addEventListener("abort", l, {
                        once: !0
                    })
                }))),
                tt = (0, p.a)(e => {
                    let {
                        viewportStartPx: t,
                        viewportEndPx: r
                    } = e;
                    return function(e, t, n, r) {
                        let {
                            topOffsetsPx: l,
                            heightsPx: o
                        } = t, a = Math.max(0, v()(l, n) - 1);
                        return (l[a] ?? 0) + (o[a] ?? 0) <= n && a++, e.slice(a, y()(l, r))
                    }(n, eX(), t, r)
                }),
                tn = (0, p.a)(e => {
                    let t = eX(),
                        n = t.turnIndexByKey.get(e);
                    if (null == n) return null;
                    let r = t.topOffsetsPx[n],
                        l = t.heightsPx[n];
                    return null == r || null == l ? null : {
                        endPx: r + l,
                        startPx: r
                    }
                }),
                tr = (0, p.a)(() => {
                    let e = 0,
                        t = null;
                    for (let [n, r] of eL.current) e += r, (null == t || t.compareDocumentPosition(n) === Node.DOCUMENT_POSITION_FOLLOWING) && (t = n);
                    null != t && _?.({
                        heightDeltaPx: null,
                        heightPx: null,
                        bottomViewportOverflowPx: z({
                            scrollElement: eg.getScrollElement(),
                            turnElement: t,
                            windowZoom: em
                        }),
                        turnElement: t,
                        followContentHeightPx: e
                    })
                }),
                tl = (0, p.a)(function(e) {
                    var n;
                    let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "measured",
                        o = eX(),
                        a = eg.getScrollElement();
                    if (a?.getClientRects().length === 0) return !1;
                    let i = ek.current,
                        c = eC.current;
                    if ("controller" === l && null == i) {
                        let n = !1;
                        for (let [r, {
                                element: l,
                                heightPx: o
                            }] of e) {
                            if (o <= 0 || c[r] !== Math.max(+!t, o)) {
                                n = !0;
                                break
                            }
                            let e = eT.current.get(r);
                            e === l && eF.current.add(e)
                        }
                        if (!n) return !1
                    }
                    let h = c,
                        d = 0,
                        g = !1,
                        m = null,
                        f = 0,
                        p = !1,
                        x = !1,
                        y = "controller" === l ? eg.getLastScrollDistanceFromBottomPx({
                            includePendingUserScroll: !0
                        }) : function(e, t) {
                            let n = e.getScrollElement(),
                                r = n?.firstElementChild;
                            if (null == n || null == r || 0 === n.clientHeight) return e.getLastScrollDistanceFromBottomPx();
                            let l = r.getBoundingClientRect();
                            if (0 === l.height) return e.getLastScrollDistanceFromBottomPx();
                            let o = n.scrollTop;
                            return Math.max(0, Math.round(o + (0, s.b)(l.bottom - n.getBoundingClientRect().top, t)) - n.clientHeight) - o
                        }(eg, em),
                        P = O(j),
                        v = q(y, P),
                        w = V ? null : $?.() ?? null,
                        S = null == i ? v : eH.current.distanceFromBottomPx,
                        E = S;
                    if (V && null == eS.getSnapshot() && $?.() == null) {
                        let e = k(eW.current.turnKeys, o.turnKeys) ? o : eW.current,
                            t = e === o ? i?.scrollDistanceFromBottomPx ?? y : y,
                            n = K({
                                distanceFromBottomPx: eY(t),
                                preferLatestVisibleRow: t < P,
                                layout: e,
                                measuredHeightsByKey: c,
                                nextLayout: o,
                                viewportHeightPx: eH.current.viewportHeightPx
                            }),
                            r = a?.ownerDocument.activeElement,
                            l = r?.closest("[data-turn-key]"),
                            u = l?.dataset.turnKey;
                        if (a && r && l && u && eT.current.get(u) === l) {
                            let e = r.getBoundingClientRect(),
                                t = a.getBoundingClientRect();
                            e.bottom > t.top && e.top < t.bottom && (n = u)
                        }
                        let s = null == n ? null : o.turnIndexByKey.get(n);
                        null != s && (E = o.bottomOffsetsPx[s] ?? S)
                    }
                    for (let [n, r] of e) {
                        let {
                            element: e,
                            heightPx: l
                        } = r, a = eT.current.get(n);
                        if (a !== e) continue;
                        l > 0 ? eF.current.add(a) : eF.current.delete(a);
                        let i = Math.max(+!t, l),
                            u = c[n];
                        if (u === i) continue;
                        h === c && (h = A(c)), h[n] = i;
                        let s = o.turnIndexByKey.get(n);
                        if (null == s) continue;
                        let y = s === o.turnKeys.length - 1,
                            P = Math.round(Math.max(ed[s]?.minHeightPx ?? 0, i) * ef) / ef,
                            v = P - (o.heightsPx[s] ?? P);
                        x = x || null == u || 0 !== v, y && (g = !0, d += null == u ? 0 : v, m = a), p = p || t && (0 === P || 0 === o.heightsPx[s]), (o.bottomOffsetsPx[s] ?? 0) <= E && (V || null != $ && !y) && (f += v)
                    }
                    if (h === c) return !1;
                    if (!x) return eC.current = h, !1;
                    let B = b({
                        collapseEmptyRows: t,
                        entries: ed,
                        gapPx: L,
                        measuredHeightsByKey: h,
                        pixelScale: ef
                    });
                    if (p)
                        for (let [e, t] of B.gapsBeforePx.entries()) {
                            let n = t - (o.gapsBeforePx[e] ?? 0);
                            (o.bottomOffsetsPx[e] ?? 0) + (o.heightsPx[e] ?? 0) <= E && (V || null != $ && e !== o.turnKeys.length - 1) && (f += n)
                        }
                    let C = eM.current;
                    if (C > 0) {
                        let e = Math.max(0, C - o.totalHeightPx),
                            t = Math.max(0, C - B.totalHeightPx);
                        f += t - e, d > 0 && e > t && (d = Math.max(0, d - (e - t))), e > 0 && 0 === t && eI(0)
                    }
                    let M = V && eg.shouldFollowContentGrowth() && (n = y, 0 === P && n <= 24) && m?.querySelector("[data-preserve-turn-viewport]") == null,
                        I = i?.restoreScrollDistanceFromBottom || null != w,
                        R = null;
                    I || (R = M ? 0 : 0 !== f ? (i?.scrollDistanceFromBottomPx ?? eg.getUnroundedScrollDistanceFromBottomPx(y)) + f : i?.scrollDistanceFromBottomPx ?? (V || !g ? y : null));
                    let T = eH.current.distanceFromBottomPx;
                    I ? T = w ?? T : null != R && (T = q(R, P));
                    let F = H({
                            current: eH.current,
                            distanceFromBottomPx: T,
                            layout: B,
                            viewportHeightPx: eH.current.viewportHeightPx
                        }),
                        D = i?.latestTurnHeightChange,
                        U = m ?? D?.turnElement ?? null,
                        N = {
                            afterMeasure: i?.afterMeasure,
                            latestTurnHeightChange: g || null != D ? {
                                heightDeltaPx: (D?.heightDeltaPx ?? 0) + d,
                                heightPx: B.heightsPx.at(-1) ?? null,
                                bottomViewportOverflowPx: z({
                                    scrollElement: eg.getScrollElement(),
                                    turnElement: U,
                                    windowZoom: em
                                }),
                                turnElement: U,
                                followContentHeightPx: null
                            } : null,
                            restoreScrollDistanceFromBottom: I,
                            scrollDistanceFromBottomPx: R,
                            turnHeightsByKey: h
                        },
                        _ = eB.current;
                    for (let [t, n] of e) {
                        let {
                            element: e
                        } = n, r = B.turnIndexByKey.get(t);
                        eT.current.get(t) === e && null != r && null != e.parentElement && (e.parentElement.style.height = `${B.heightsPx[r]}px`, e.parentElement.style.minHeight = "")
                    }
                    if (g && 1 === e.size && null == i && F === eH.current && B.gapsBeforePx.at(-1) === o.gapsBeforePx.at(-1) && null != _) return eC.current = h, e_.current = B, eW.current = B, _.style.height = `${B.totalHeightPx}px`, e6(N), !0;
                    null == eQ.current && (eQ.current = o);
                    let W = () => {
                        eC.current = h, e_.current = B, ex(h), F !== eH.current && (eH.current = F, eb(F))
                    };
                    return ek.current = N, r ? (0, u.flushSync)(W) : W(), !0
                }),
                to = (0, p.a)(e => {
                    let t = new Map,
                        n = !1,
                        r = !1;
                    for (let l of e) {
                        let e = eK.current.get(l.target);
                        if (null == e) continue;
                        let {
                            height: o
                        } = (0, h.a)(l);
                        switch (e.kind) {
                            case "turn": {
                                let r = e.turnKey,
                                    a = eT.current.get(r);
                                if (a !== l.target || eF.current.has(a) || (n = !0), o > 0 && a === l.target && eC.current[r] === o) {
                                    eF.current.add(a);
                                    break
                                }
                                t.set(r, {
                                    element: l.target,
                                    heightPx: o
                                });
                                break
                            }
                            case "latest-turn-follow-content":
                                eL.current.set(e.element, o), r = !0
                        }
                    }
                    t.size > 0 && tl(t, !0, n ? "controller" : "measured"), r && tr(), e5()
                }),
                ta = (0, p.a)(() => {
                    if (null != eO.current) return eO.current;
                    let e = new ResizeObserver(to);
                    return eO.current = e, e
                }),
                ti = (0, p.a)((e, t) => {
                    if (null == t) return;
                    eK.current.set(t, {
                        kind: "turn",
                        turnKey: e
                    }), eT.current.set(e, t), eF.current.delete(t), null == eC.current[e] && eD.current.set(e, t);
                    let n = ta();
                    return n.observe(t), e1(), () => {
                        n.unobserve(t), eK.current.delete(t), eD.current.get(e) === t && eD.current.delete(e), eT.current.get(e) === t && eT.current.delete(e)
                    }
                }),
                tu = (0, p.a)((e, t) => {
                    let n = eT.current.get(e);
                    if (null == n) return;
                    let r = (0, s.b)(n.getBoundingClientRect().height, em);
                    if (!(r <= 0) && (tl(new Map([
                            [e, {
                                element: n,
                                heightPx: r
                            }]
                        ]), !1), null != t)) {
                        let e = ek.current;
                        null == e ? t() : e.afterMeasure = t
                    }
                }),
                ts = (0, p.a)(e => {
                    if (null == e) return;
                    eK.current.set(e, {
                        element: e,
                        kind: "latest-turn-follow-content"
                    }), eL.current.set(e, 0);
                    let t = ta();
                    return t.observe(e), () => {
                        t.unobserve(e), eK.current.delete(e), eL.current.delete(e)
                    }
                });
            (0, i.useLayoutEffect)(() => {
                let e = eD.current;
                if (0 === e.size) {
                    eq.current = 0;
                    return
                }
                if (null != eA.current) return;
                if (eq.current >= 8) {
                    eA.current = requestAnimationFrame(e => {
                        eA.current = null, eq.current = 0, eU(e)
                    });
                    return
                }
                eq.current += 1, eD.current = new Map;
                let t = new Map;
                if ((0, c.a)("virtualizedTurnList.readMountedHeights", () => {
                        for (let [n, r] of e) {
                            if (eT.current.get(n) !== r) continue;
                            let e = (0, s.b)(r.getBoundingClientRect().height, em);
                            e > 0 && t.set(n, {
                                element: r,
                                heightPx: e
                            })
                        }
                    }, e.size), t.size > 0) {
                    let n = eC.current;
                    if (tl(t, !1, "controller"))
                        for (let [t, r] of e)(null == n[t] || eq.current > 1) && eT.current.get(t) === r && eD.current.set(t, r);
                    else eq.current = 0
                }
            });
            let tc = (0, p.a)(() => {
                let e = en ?? ed.at(-1)?.turnKey;
                null != e && tu(e)
            });
            (0, i.useLayoutEffect)(() => {
                null != J && tc()
            }, [J, tc]), (0, i.useLayoutEffect)(() => {
                let e = ek.current;
                null != e && e.turnHeightsByKey === ep && (ek.current = null, e6(e))
            }, [e6, ep]);
            let th = (0, p.a)(e => {
                if (!W || ea?.viewportHeightPx === e) return;
                if (null != ea) return void(0, u.flushSync)(() => {
                    ei({
                        ...ea,
                        viewportHeightPx: e
                    })
                });
                let t = ey?.closest("[data-thread-user-message-navigation-content]"),
                    n = t?.lastElementChild,
                    r = ed.at(-1)?.turnKey;
                if (null == t || null == n || null == r || ed.some(e => null == ep[e.turnKey])) return;
                let l = (0, s.b)(t.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, em) - parseFloat(getComputedStyle(t).paddingBottom);
                l <= 24 || (0, u.flushSync)(() => {
                    ei({
                        turnKey: r,
                        heightOutsideTurnPx: e - (ev.heightsPx.at(-1) ?? 0) - l,
                        viewportHeightPx: e
                    })
                })
            });
            (0, i.useEffect)(() => {
                if (null != M) return M({
                    getEntriesInViewport: tt,
                    getRowElement: e4,
                    getEntryGeometry: tn,
                    measureTurnBeforePaint: tu,
                    scrollToKey: te
                }), () => {
                    M(null)
                }
            }, [tt, e4, tn, tu, M, te]), (0, i.useLayoutEffect)(() => () => {
                ej.current = !1, e0()
            }, [e0]), (0, i.useEffect)(() => (e1(), e0), [e0, ed.length, F, e1, ey]), (0, i.useEffect)(() => {
                let e = eK.current,
                    t = eT.current,
                    n = eL.current;
                return () => {
                    null != eA.current && (cancelAnimationFrame(eA.current), eA.current = null), eO.current?.disconnect(), eO.current = null, e.clear(), t.clear(), eD.current.clear(), n.clear(), ek.current = null, eS.replace(null)
                }
            }, [eS]), (0, i.useLayoutEffect)(() => {
                if (null != X) return () => {
                    X(function(e, t) {
                        let {
                            turnKeys: n,
                            renderedRange: r,
                            viewportHeightPx: l
                        } = t, o = A();
                        for (let t of n) {
                            let n = e[t];
                            null != n && (o[t] = n)
                        }
                        let a = n[r.startIndex];
                        return null == a ? null : {
                            renderedWindow: {
                                anchorKey: a,
                                count: r.endIndex - r.startIndex,
                                viewportHeightPx: l
                            },
                            turnHeightsByKey: {
                                ...o
                            }
                        }
                    }(eC.current, eH.current))
                }
            }, [X]);
            let td = es < 0 ? void 0 : P?.(n[es]) ?? ec;
            (0, i.useLayoutEffect)(() => {
                if (null == ey || null == td) return;
                let e = e => {
                    let t = eg.getScrollElement(),
                        n = e.target;
                    null != t && !(t.scrollTop <= 0) && n instanceof Element && !(n.getBoundingClientRect().bottom <= t.getBoundingClientRect().top) && eI(Math.max(0, (0, s.b)(ey.getBoundingClientRect().height, em) - (0, m.b)(t)))
                };
                return ey.addEventListener(d.a, e), () => {
                    ey.removeEventListener(d.a, e), eI(0)
                }
            }, [td, eg, eI, ey, em]);
            let {
                addScrollListener: tg,
                addUserScrollListener: tm,
                getScrollElement: tf
            } = eg;
            return (0, i.useLayoutEffect)(() => {
                let e = tf();
                if (null == e) return;
                let t = () => (null == eR.current && (eR.current = e.clientHeight), eR.current || eH.current.viewportHeightPx || 800),
                    n = tg(e => {
                        e7(q(e, O(j)), t()), e3(e)
                    }),
                    r = tm((e, n) => {
                        let r = eM.current;
                        if (r > 0) {
                            let t = r - e;
                            eI(t > e_.current.totalHeightPx && e > 0 ? t : 0)
                        }
                        e8(q(e, O(j)), t(), null != n && e > n)
                    }),
                    l = new ResizeObserver(n => {
                        let r = n.find(t => t.target === e);
                        if (null != r) {
                            let {
                                height: e
                            } = (0, h.a)(r);
                            eR.current = e, e7(eH.current.distanceFromBottomPx, e), eJ()
                        }
                        th(t()), e5()
                    });
                return l.observe(e), W && null != ey && l.observe(ey), () => {
                    n(), r(), l.disconnect()
                }
            }, [tg, tm, j, tf, th, e5, W, e8, e3, eJ, eI, ey, e7]), (0, i.useLayoutEffect)(() => {
                if (null == eE || eS.getSnapshot() !== eE || null != eA.current) return;
                let e = eg.getScrollElement();
                if (null == e) return;
                let t = new Map;
                for (let [e, n] of eT.current) {
                    let r = (0, s.b)(n.getBoundingClientRect().height, em);
                    r > 0 && t.set(e, {
                        element: n,
                        heightPx: r
                    })
                }
                if (tl(t, !1) || null != ek.current) return;
                let n = eT.current.get(eE.turnKey),
                    r = null == n ? null : eE.getTargetElement?.(n) ?? n,
                    l = null == n || null == r ? function(e) {
                        let {
                            align: t,
                            layout: n,
                            turnKey: r,
                            viewportHeightPx: l
                        } = e;
                        if ("center" === t) return B({
                            layout: n,
                            turnKey: r,
                            viewportHeightPx: l
                        });
                        let o = n.turnIndexByKey.get(r);
                        return null == o ? null : Math.max(0, (n.bottomOffsetsPx[o] ?? 0) + (n.heightsPx[o] ?? 0) - l + 10)
                    }({
                        align: eE.align,
                        layout: ev,
                        turnKey: eE.turnKey,
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
                        } = e, u = n.turnIndexByKey.get(o);
                        if (null == u) return null;
                        let c = l.getBoundingClientRect(),
                            h = r.getBoundingClientRect(),
                            d = (0, s.b)(h.top - c.top, a),
                            g = (0, s.b)(h.height, a),
                            m = (n.bottomOffsetsPx[u] ?? 0) + (n.heightsPx[u] ?? 0) - d;
                        return "top" === t ? Math.max(0, m - i + 10) : Math.max(0, m - g / 2 - i / 2)
                    }({
                        align: eE.align,
                        layout: ev,
                        targetElement: r,
                        turnElement: n,
                        turnKey: eE.turnKey,
                        viewportHeightPx: e.clientHeight,
                        windowZoom: em
                    });
                if (null == l) return void queueMicrotask(() => e9(eE));
                let o = "top" === eE.align && null != r ? Math.max(0, eg.getLastScrollDistanceFromBottomPx() - (0, s.b)(r.getBoundingClientRect().top - e.getBoundingClientRect().top, em) + 10) : l + O(j);
                eg.scrollToDistanceFromBottomPx(o, "instant", "user"), e7(Math.max(0, o - O(j)), e.clientHeight), queueMicrotask(() => e9(eE))
            }, [tl, ev, ez, eE, eg, eS, e9, j, e7, em]), (0, i.useLayoutEffect)(() => {
                var e;
                if (null != ek.current) return;
                let t = eW.current,
                    r = eX(),
                    l = eQ.current ?? r;
                eQ.current = null, eW.current = r;
                let o = e$.current !== n;
                if (e$.current = n, null != eE || !V && t.turnKeys.at(-1) !== l.turnKeys.at(-1) || t === l && !o) return;
                let a = O(j),
                    i = eg.getLastScrollDistanceFromBottomPx({
                        includePendingUserScroll: !0
                    });
                if (null != ($?.() ?? null)) return;
                if (eg.shouldFollowContentGrowth() && (e = i, 0 === a && e <= 24)) return void eg.compensateScrollToDistanceFromBottomPx(0);
                if (t === l) return;
                let u = K({
                    distanceFromBottomPx: eY(i),
                    preferLatestVisibleRow: i < a,
                    layout: t,
                    measuredHeightsByKey: eC.current,
                    nextLayout: l,
                    viewportHeightPx: eH.current.viewportHeightPx
                });
                if (null == u) return;
                let s = eg.getUnroundedScrollDistanceFromBottomPx(i),
                    c = function(e) {
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
                        anchorKey: u,
                        distanceFromBottomPx: s,
                        nextLayout: l,
                        previousLayout: t
                    });
                null != c && (c !== s || t.totalHeightPx !== l.totalHeightPx) && (e7(q(c, a), eH.current.viewportHeightPx), eg.compensateScrollToDistanceFromBottomPx(c))
            }, [j, eX, eY, $, ev, eE, V, n, eg, e7]), (0, i.useLayoutEffect)(() => {
                null == eE && null == ek.current && (e7(eH.current.distanceFromBottomPx, eH.current.viewportHeightPx), eJ(), e8(eH.current.distanceFromBottomPx, eH.current.viewportHeightPx, !1))
            }, [ev, eE, e8, eJ, e7]), (0, i.useLayoutEffect)(() => {
                e5()
            }), (0, r.jsx)("div", {
                ref: eG,
                className: (0, o.b)("relative shrink-0", D),
                style: {
                    height: ev.totalHeightPx
                },
                children: (0, r.jsx)("div", {
                    className: "flex flex-col",
                    style: {
                        marginTop: `${ev.topOffsetsPx[eZ.startIndex]??0}px`
                    },
                    children: e2.map(e => {
                        let {
                            entry: t,
                            turnIndex: n
                        } = e, l = ed[n].turnKey;
                        return (0, r.jsx)(I, {
                            entry: t,
                            turnKey: l,
                            minHeightPx: x(t).minHeightPx,
                            gapBeforePx: n === eZ.startIndex ? 0 : ev.gapsBeforePx[n] ?? 0,
                            retainedTopPx: n < eZ.startIndex || n >= eZ.endIndex ? ev.topOffsetsPx[n] : void 0,
                            latestTurnFollowContentRef: n === ed.length - 1 && null != _ ? ts : void 0,
                            RowComponent: C,
                            measuredHeightPx: null == ep[l] ? void 0 : ev.heightsPx[n],
                            constrainedHeightPx: n !== ed.length - 1 && eE?.turnKey !== l && null == ep[l] ? ev.heightsPx[n] : void 0,
                            observeTurnElement: ti
                        }, l)
                    })
                })
            })
        }
        let I = (0, i.memo)(function(e) {
            let t, n, a, i, u, s, c = (0, l.c)(24),
                {
                    entry: h,
                    turnKey: d,
                    minHeightPx: g,
                    gapBeforePx: m,
                    latestTurnFollowContentRef: f,
                    RowComponent: x,
                    constrainedHeightPx: y,
                    measuredHeightPx: P,
                    retainedTopPx: v,
                    observeTurnElement: w
                } = e;
            c[0] !== w || c[1] !== d ? (t = e => w(d, e), c[0] = w, c[1] = d, c[2] = t) : t = c[2];
            let b = (0, p.a)(t),
                S = null != v && "absolute inset-x-0",
                E = null != y && "overflow-hidden";
            c[3] !== S || c[4] !== E ? (n = (0, o.b)(S, E), c[3] = S, c[4] = E, c[5] = n) : n = c[5];
            let B = null != P ? "size" : void 0,
                C = P ?? y,
                M = null == v ? m : 0,
                I = null == P ? g : void 0;
            return c[6] !== v || c[7] !== B || c[8] !== C || c[9] !== M || c[10] !== I ? (a = {
                contain: B,
                height: C,
                marginTop: M,
                minHeight: I,
                top: v
            }, c[6] = v, c[7] = B, c[8] = C, c[9] = M, c[10] = I, c[11] = a) : a = c[11], c[12] !== x || c[13] !== h || c[14] !== f ? (i = (0, r.jsx)(x, {
                entry: h,
                latestTurnFollowContentRef: f
            }), c[12] = x, c[13] = h, c[14] = f, c[15] = i) : i = c[15], c[16] !== b || c[17] !== i || c[18] !== d ? (u = (0, r.jsx)("div", {
                ref: b,
                className: "[&_[data-virtualized-turn-content]]:[content-visibility:visible]",
                "data-turn-key": d,
                children: i
            }), c[16] = b, c[17] = i, c[18] = d, c[19] = u) : u = c[19], c[20] !== u || c[21] !== n || c[22] !== a ? (s = (0, r.jsx)("div", {
                className: n,
                style: a,
                children: u
            }), c[20] = u, c[21] = n, c[22] = a, c[23] = s) : s = c[23], s
        });

        function H(e) {
            let {
                current: t,
                distanceFromBottomPx: n,
                layout: r,
                viewportHeightPx: l
            } = e, o = Math.min(n, r.totalHeightPx), a = R(r, o, l, t.renderedRange);
            return t.distanceFromBottomPx === o && t.viewportHeightPx === l && t.renderedRange.startIndex === a.startIndex && t.renderedRange.endIndex === a.endIndex && k(t.turnKeys, r.turnKeys) ? t : {
                distanceFromBottomPx: o,
                renderedRange: a,
                turnKeys: r.turnKeys,
                viewportHeightPx: l
            }
        }

        function R(e, t, n, r) {
            var l, o;
            let a = {
                    layout: e,
                    distanceFromBottomPx: t,
                    viewportHeightPx: n
                },
                i = S({
                    ...a,
                    overscanCount: 0,
                    overscanPx: n
                }),
                u = S({
                    ...a,
                    overscanCount: 2
                }),
                s = {
                    startIndex: Math.max(u.startIndex, i.startIndex),
                    endIndex: Math.min(u.endIndex, i.endIndex)
                };
            return null != r && (l = r, o = s, l.startIndex <= o.startIndex && l.endIndex >= o.endIndex) ? {
                startIndex: Math.max(r.startIndex, i.startIndex),
                endIndex: Math.min(r.endIndex, i.endIndex)
            } : s
        }

        function K(e) {
            let {
                distanceFromBottomPx: t,
                preferLatestVisibleRow: n,
                layout: r,
                measuredHeightsByKey: l,
                nextLayout: o,
                viewportHeightPx: a
            } = e, i = S({
                distanceFromBottomPx: t,
                layout: r,
                overscanCount: 0,
                viewportHeightPx: Math.max(0, a + Math.min(0, t))
            }), u = null;
            for (let e = i.startIndex; e < i.endIndex; e += 1) {
                let i = r.turnKeys[e];
                if (null != i && !r.gapKeys.has(i) && (!r.collapseEmptyRows || (r.heightsPx[e] ?? 0) > 0) && null != l[i] && o.turnIndexByKey.has(i) && (r.bottomOffsetsPx[e] ?? 0) < t + a && (r.bottomOffsetsPx[e] ?? 0) + (r.heightsPx[e] ?? 0) > t) {
                    if (n) u = i;
                    else if (null == u && (u = i), (r.bottomOffsetsPx[e] ?? 0) + (r.heightsPx[e] ?? 0) <= t + a) return i
                }
            }
            return u
        }

        function T() {
            let e = [];
            return (t, n, r, l, o) => {
                let a = (e, n) => null != o && n === t.length - 1 ? Math.max(e ?? 0, o) : e;
                return (t.length !== e.length || t.some((t, o) => {
                    let i = e[o],
                        u = r(t);
                    return n(t) !== i.turnKey || u.gapBeforePx !== i.gapBeforePx || u.estimatedHeightPx !== i.estimatedHeightPx || a(u.minHeightPx, o) !== i.minHeightPx || (l?.(t) ?? !0) !== i.anchorEligible
                })) && (e = t.map((e, t) => {
                    let o = r(e);
                    return {
                        turnKey: n(e),
                        gapBeforePx: o.gapBeforePx,
                        estimatedHeightPx: o.estimatedHeightPx,
                        minHeightPx: a(o.minHeightPx, t),
                        anchorEligible: l?.(e) ?? !0
                    }
                })), e
            }
        }

        function F(e) {
            return e.turnKey
        }

        function D(e) {
            return e
        }

        function L(e) {
            return e.turnSearchKey ?? e.turnKey
        }

        function k(e, t) {
            return e === t || e.length === t.length && e.every((e, n) => e === t[n])
        }

        function O(e) {
            return Math.max(0, e?.() ?? 0)
        }

        function q(e, t) {
            return Math.max(0, e - t)
        }

        function A(e) {
            let t = {};
            return Object.setPrototypeOf(t, null), Object.assign(t, e)
        }

        function z(e) {
            let {
                scrollElement: t,
                turnElement: n,
                windowZoom: r
            } = e;
            return null == t || null == n ? 0 : (0, s.b)(n.getBoundingClientRect().bottom - t.getBoundingClientRect().bottom, r)
        }
        class U {
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
            a = n("TSib"),
            i = n("ipIJ"),
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
                } = t, P = void 0 !== y && y, v = (0, l.y)(s.a), w = (0, l.y)(u.a), b = (0, l.z)(h.i), S = (0, l.z)(a.v);
                return f[2] !== S || f[3] !== x || f[4] !== w || f[5] !== b || f[6] !== v || f[7] !== P || f[8] !== p ? (n = () => {
                    for (let [e, t] of("chatgpt-thread" === v.value.routeKind && (0, i.b)(w, S.filter(e => P || null != x && (e.widgetSource ?? "descriptor") === x)), b))(P || null != x && (t.content.mcpAppScope.widgetSource ?? "descriptor") === x || t.hostedInThreadScrollLayout && p?.has(e) === !1) && (0, h.z)(v, e)
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
            a = n("jqIZ"),
            i = n("Cslg"),
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
                    f = (0, l.z)(i.f),
                    p = (0, a.Y)(),
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
            a = n("Sm6l"),
            i = n("RNul");
        n.d(t, {}, {
            a: function(e) {
                let t, n, u = (0, l.c)(5),
                    {
                        ref: s,
                        onRetry: c
                    } = e;
                return u[0] !== c ? (t = null != c ? (0, r.jsx)(a.a, {
                    color: "secondary",
                    onClick: c,
                    children: (0, r.jsx)(o.a, {
                        id: "chatgpt.pagination.retry",
                        defaultMessage: "Try again"
                    })
                }) : (0, r.jsxs)("div", {
                    role: "status",
                    children: [(0, r.jsx)(i.a, {}), (0, r.jsx)("span", {
                        className: "sr-only",
                        children: (0, r.jsx)(o.a, {
                            id: "chatgpt.pagination.loading",
                            defaultMessage: "Loading older messages…"
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
            a = n("V8uZ"),
            i = n("uYx2");
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
                        l = null == r ? 0 : (0, i.b)(r);
                    return this.writeHeight(n), null != r && this.scrollController.compensateScrollToDistanceFromBottomPx(Math.max(0, l - (t - n))), 0 === n && this.onReleased?.(), !0
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
                    if (!this.canPrepareThreadEndContent || null != this.stopPlacementAnimation || null == t || t.clientHeight <= 0 || null == n) return;
                    let r = t.getBoundingClientRect(),
                        l = r.bottom - s(t) * (r.height / t.clientHeight);
                    !(n.getBoundingClientRect().top > l) && e() && (this.canPrepareThreadEndContent = !1, this.cancelPendingUserScrollDecay(), this.consumeGrowth((0, i.b)(t)), this.scrollController.compensateScrollToDistanceFromBottomPx(0))
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
                    if (e < t && (0, i.d)(e)) return void this.clear();
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
                        let a = this.trimTo(c(e, null != this.placementTarget));
                        l && (a || this.scrollController.compensateScrollToDistanceFromBottomPx((0, i.b)(e)), this.animatePlacement(), this.canPrepareThreadEndContent = o)
                    }
                };
                place = e => {
                    let t = this.scrollController.getScrollElement();
                    if (null == t) return;
                    this.canPrepareThreadEndContent = !1, this.cancelPendingUserScrollDecay(), this.interruptPlacement(), this.placementTarget = e, this.viewportHeightPx = t.clientHeight, this.scrollPaddingBottomPx = s(t);
                    let n = this.height.get(),
                        r = (0, i.b)(t),
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
            b: s
        })
    }),
    Ho4C: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            o = n("zd8w"),
            a = n("T1PX"),
            i = n("ZYy5"),
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
                        controller: B,
                        onReleased: C
                    } = e,
                    M = (0, c.b)(),
                    I = (0, o.useContext)(i.a),
                    H = (0, a.a)(),
                    {
                        getScrollElement: R
                    } = M;
                E[0] !== B ? (t = e => {
                    B.setElement(e)
                }, E[0] = B, E[1] = t) : t = E[1];
                let K = (0, s.a)(t);
                return E[2] !== B || E[3] !== C || E[4] !== H || E[5] !== M ? (n = () => {
                    B.updateContext(M, H, C)
                }, d = [B, M, H, C], E[2] = B, E[3] = C, E[4] = H, E[5] = M, E[6] = n, E[7] = d) : (n = E[6], d = E[7]), (0, o.useInsertionEffect)(n, d), E[8] !== B || E[9] !== R ? (g = () => {
                    let e = R();
                    if (null == e) return;
                    let t = new AbortController;
                    for (let n of ["wheel", "touchstart", "pointerdown", "keydown"]) e.addEventListener(n, B.interruptPlacement, {
                        capture: !0,
                        passive: !0,
                        signal: t.signal
                    });
                    return () => {
                        t.abort(), B.interruptPlacement()
                    }
                }, m = [B, R], E[8] = B, E[9] = R, E[10] = g, E[11] = m) : (g = E[10], m = E[11]), (0, o.useEffect)(g, m), E[12] !== B.cancelPendingUserScrollDecay ? (f = () => B.cancelPendingUserScrollDecay, E[12] = B.cancelPendingUserScrollDecay, E[13] = f) : f = E[13], E[14] !== B ? (p = [B], E[14] = B, E[15] = p) : p = E[15], (0, o.useEffect)(f, p), E[16] !== B || E[17] !== R ? (x = () => {
                    let e = R();
                    if (null == e || "u" < typeof IntersectionObserver) return;
                    let t = new IntersectionObserver(B.collapseIfHidden, {
                            root: e,
                            threshold: h
                        }),
                        n = B.getElement();
                    return null != n && t.observe(n), () => t.disconnect()
                }, y = [B, R], E[16] = B, E[17] = R, E[18] = x, E[19] = y) : (x = E[18], y = E[19]), (0, o.useEffect)(x, y), E[20] !== B || E[21] !== M ? (P = () => {
                    let e = M.addScrollListener(B.handleScroll),
                        t = M.addUserScrollListener(B.handleUserScroll);
                    return B.reconcileViewport(), () => {
                        e(), t()
                    }
                }, v = [B, M], E[20] = B, E[21] = M, E[22] = P, E[23] = v) : (P = E[22], v = E[23]), (0, o.useLayoutEffect)(P, v), E[24] !== B || E[25] !== R || E[26] !== I ? (w = () => {
                    let e = R();
                    if (null == e) return;
                    let t = null,
                        n = () => {
                            null == t && (t = window.requestAnimationFrame(() => {
                                t = null, B.reconcileViewport()
                            }))
                        },
                        r = I ?? (0, u.b)(),
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
                        null == I && r?.disconnect(), window.removeEventListener("resize", n), null != t && window.cancelAnimationFrame(t)
                    }
                }, b = [B, R, I], E[24] = B, E[25] = R, E[26] = I, E[27] = w, E[28] = b) : (w = E[27], b = E[28]), (0, o.useEffect)(w, b), E[29] !== K ? (S = (0, r.jsx)("div", {
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
            a = n("OWtl");
        let i = (0, o.u)(a.a, () => new Map),
            u = (0, o.c)(a.a, e => {
                let {
                    get: t
                } = e;
                return [...t(i).keys()]
            }, {
                isEqual: l()
            });
        n.d(t, {}, {
            a: function(e, t) {
                return e.set(i, e => new Map(e).set(t, (e.get(t) ?? 0) + 1)), () => {
                    e.set(i, e => {
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
            a = n("B7sF"),
            i = n("jCHb"),
            u = n("RgeH"),
            s = n("BolX"),
            c = n("zd8w"),
            h = n("I7bK"),
            d = n("QcW8"),
            g = n("gbrq"),
            m = n("kl6F"),
            f = n("eGPX"),
            p = n("w2yL"),
            x = n("KWzM"),
            y = n("GaCK");

        function P(e) {
            return e.isPopoverOpen ? {
                ...e,
                isPopoverOpen: !1
            } : e
        }

        function v(e, t, n, r, l, o, a) {
            return w({
                centeredPanelGap: a,
                isSummaryPanelPinned: t && (o ?? (0, g.y)(!0 === n ? e.get(g.M) : e.get(g.B, n), n)),
                floatingPanelWidth: l,
                mainContentTargetWidth: r
            })
        }

        function w(e) {
            let {
                centeredPanelGap: t,
                isSummaryPanelPinned: n,
                floatingPanelWidth: r,
                mainContentTargetWidth: l
            } = e, o = (0, p.c)(l, r, t);
            return null != r && "overlay" === o ? (0, p.b)({
                displayMode: (0, p.c)(l),
                isPinned: n
            }) : (0, p.b)({
                displayMode: o,
                isPinned: null != r || n,
                panelWidth: r
            })
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, a, P, b, S, E, B, C, M, I, H, R, K, T, F, D = (0, r.c)(76);
                D[0] !== e ? (t = void 0 === e ? {} : e, D[0] = e, D[1] = t) : t = D[1];
                let {
                    centeredPanelGap: L,
                    contentShiftResetKey: k,
                    controlledIsOpen: O,
                    floatingPanelWidth: q,
                    getCurrentPinStateKey: A,
                    isEnabled: z,
                    pinStateKey: U
                } = t, j = void 0 === z || z, N = void 0 === U || U, _ = (0, s.y)(m.a), V = (0, s.z)(null == O && !0 === N ? g.M : null), W = (0, s.x)(null == O && !0 !== N ? g.B : null, !0 !== N && N);
                D[2] !== O || D[3] !== W || D[4] !== V || D[5] !== N ? (n = O ?? (0, g.y)(!0 === N ? V : W, N), D[2] = O, D[3] = W, D[4] = V, D[5] = N, D[6] = n) : n = D[6];
                let $ = n,
                    Q = (0, s.z)(g.h),
                    G = (0, s.z)(d.J),
                    X = (0, s.z)(y.b),
                    Y = j && $,
                    Z = q ?? 300,
                    J = j && null == q && (O ?? (X.isPopoverOpen || "boolean" != typeof N && $)),
                    ee = (0, s.z)(f.c),
                    et = (0, c.useContext)(h.c),
                    en = (0, l.a)(0),
                    er = et?.mainContentTargetWidth ?? en;
                D[7] !== L || D[8] !== q || D[9] !== Y || D[10] !== er ? (o = w({
                    centeredPanelGap: L,
                    isSummaryPanelPinned: Y,
                    floatingPanelWidth: q,
                    mainContentTargetWidth: er.get()
                }), D[7] = L, D[8] = q, D[9] = Y, D[10] = er, D[11] = o) : o = D[11];
                let el = (0, l.a)(o);
                D[12] !== er ? (a = e => er.on("change", e), D[12] = er, D[13] = a) : a = D[13], D[14] !== L || D[15] !== er || D[16] !== Z ? (P = () => (0, p.c)(er.get(), Z, L), D[14] = L, D[15] = er, D[16] = Z, D[17] = P) : P = D[17], D[18] !== a || D[19] !== P ? (b = {
                    subscribe: a,
                    getSnapshot: P
                }, D[18] = a, D[19] = P, D[20] = b) : b = D[20];
                let eo = b,
                    ea = (0, c.useSyncExternalStore)(eo.subscribe, eo.getSnapshot, eo.getSnapshot),
                    ei = (0, c.useRef)(null);
                D[21] !== el ? (S = el.get(), D[21] = el, D[22] = S) : S = D[22], D[23] !== er ? (E = er.get(), D[23] = er, D[24] = E) : E = D[24], D[25] !== E || D[26] !== S ? (B = {
                    offset: S,
                    width: E
                }, D[25] = E, D[26] = S, D[27] = B) : B = D[27];
                let eu = (0, c.useRef)(B),
                    es = (0, c.useRef)(!1),
                    ec = (0, c.useRef)(k),
                    eh = (0, c.useRef)(Q),
                    ed = (0, c.useRef)(G),
                    eg = Y && null == q;
                D[28] !== ea || D[29] !== J || D[30] !== eg ? (C = (0, p.a)({
                    displayMode: ea,
                    isPinned: eg,
                    isPopoverOpen: J
                }), D[28] = ea, D[29] = J, D[30] = eg, D[31] = C) : C = D[31];
                let em = C;
                D[32] !== L || D[33] !== el || D[34] !== k || D[35] !== O || D[36] !== q || D[37] !== A || D[38] !== G || D[39] !== j || D[40] !== Q || D[41] !== er || D[42] !== N || D[43] !== _ ? (M = () => {
                    let e = eh.current !== Q,
                        t = ed.current !== G;
                    if (!es.current && ec.current === k && !e && !t) return;
                    es.current = !1, ec.current = k, eh.current = Q, ed.current = G;
                    let n = v(_, j, A?.() ?? N, er.get(), q, O, L);
                    eu.current = {
                        offset: n,
                        width: er.get()
                    }, ei.current?.(), el.jump(n)
                }, I = [L, el, k, O, q, A, G, j, er, N, Q, _], D[32] = L, D[33] = el, D[34] = k, D[35] = O, D[36] = q, D[37] = A, D[38] = G, D[39] = j, D[40] = Q, D[41] = er, D[42] = N, D[43] = _, D[44] = M, D[45] = I) : (M = D[44], I = D[45]), (0, c.useLayoutEffect)(M, I);
                let ef = et?.chatPaneWidth ?? er;
                return D[46] !== L || D[47] !== ef || D[48] !== el || D[49] !== O || D[50] !== q || D[51] !== A || D[52] !== j || D[53] !== er || D[54] !== N || D[55] !== _ || D[56] !== ee ? (H = () => {
                    let e = (e, t) => {
                        let n = v(_, j, A?.() ?? N, e, q, O, L),
                            r = eu.current,
                            l = el.get();
                        if (r.offset === n && (l === n || r.width === e && !t)) return;
                        if (eu.current = {
                                offset: n,
                                width: e
                            }, ei.current?.(), t || 0 === e || l === n) return void el.jump(n);
                        let o = ef.get();
                        if (o === e) {
                            let e = (0, i.a)(el, n, x.a),
                                t = document.activeViewTransition;
                            if (null != t) {
                                e.pause();
                                let n = () => e.play();
                                t.ready.then(n, n)
                            }
                            ei.current = () => e.stop();
                            return
                        }
                        let a = (0, u.a)([o, e], [l, n]),
                            s = ef.on("change", e => {
                                let t = a(e);
                                el.set(t), t === n && queueMicrotask(s)
                            });
                        ei.current = s
                    };
                    return e(er.get(), ee), er.on("change", t => {
                        e(t, ee || 0 === er.getPrevious() || _.get(g.h) !== eh.current)
                    })
                }, D[46] = L, D[47] = ef, D[48] = el, D[49] = O, D[50] = q, D[51] = A, D[52] = j, D[53] = er, D[54] = N, D[55] = _, D[56] = ee, D[57] = H) : H = D[57], D[58] !== L || D[59] !== ef || D[60] !== el || D[61] !== O || D[62] !== q || D[63] !== A || D[64] !== j || D[65] !== Y || D[66] !== er || D[67] !== N || D[68] !== _ || D[69] !== ee ? (R = [L, ef, el, O, q, A, j, Y, er, N, _, ee], D[58] = L, D[59] = ef, D[60] = el, D[61] = O, D[62] = q, D[63] = A, D[64] = j, D[65] = Y, D[66] = er, D[67] = N, D[68] = _, D[69] = ee, D[70] = R) : R = D[70], (0, c.useLayoutEffect)(H, R), D[71] === Symbol.for("react.memo_cache_sentinel") ? (K = () => () => {
                    es.current = !0, ei.current?.()
                }, T = [], D[71] = K, D[72] = T) : (K = D[71], T = D[72]), (0, c.useLayoutEffect)(K, T), D[73] !== el || D[74] !== em ? (F = {
                    contentShift: el,
                    ...em
                }, D[73] = el, D[74] = em, D[75] = F) : F = D[75], F
            },
            b: function(e, t) {
                let n, i, u, d, m, f, x = (0, r.c)(15),
                    v = void 0 !== t && t,
                    w = (0, s.z)(g.h),
                    b = (0, s.z)(g.q),
                    S = (0, c.useContext)(h.c),
                    E = (0, l.a)(0),
                    B = S?.mainContentTargetWidth ?? E;
                x[0] !== v || x[1] !== B || x[2] !== e ? (n = () => {
                    var t, n;
                    t = e, n = v ? "overlay" : (0, p.c)(B.get()), t.set(y.b, e => {
                        let t = "overlay" === n && e.isPopoverOpen;
                        return e.displayMode === n && e.isPopoverOpen === t ? e : {
                            displayMode: n,
                            isPopoverOpen: t
                        }
                    })
                }, x[0] = v, x[1] = B, x[2] = e, x[3] = n) : n = x[3];
                let C = n;
                x[4] !== C ? (i = () => {
                    o.b.update(C)
                }, x[4] = C, x[5] = i) : i = x[5], (0, a.a)(B, "change", i), x[6] !== C ? (u = () => (C(), () => (0, o.a)(C)), x[6] = C, x[7] = u) : u = x[7], x[8] !== w || x[9] !== b || x[10] !== C ? (d = [w, b, C], x[8] = w, x[9] = b, x[10] = C, x[11] = d) : d = x[11], (0, c.useLayoutEffect)(u, d), x[12] !== e ? (m = () => () => {
                    e.set(y.b, P)
                }, f = [e], x[12] = e, x[13] = m, x[14] = f) : (m = x[13], f = x[14]), (0, c.useLayoutEffect)(m, f)
            }
        })
    })
};