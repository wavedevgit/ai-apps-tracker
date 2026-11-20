export const __rspack_esm_ids = [537163];
export const __webpack_modules__ = {
    TS05: (function(e, t, n) {
        var l = n("Q840"),
            r = n("tSEg");
        let a = (0, l.v)(r.a, e => !1, void 0, {
            autoDispose: 6e4
        });
        n.d(t, {}, {
            a: a
        })
    }),
    iaTG: (function(e, t, n) {
        n.d(t, {
            a: () => p
        });
        var l = n("i5ac"),
            r = n.n(l),
            a = n("SKhr"),
            o = n("L6Md");
        let i = Array.from("αβγδεζηθικλμνξοπρστυφχψω"),
            s = new Map([..."alpha beta gamma delta epsilon zeta eta theta iota kappa lambda mu nu xi omicron pi rho sigma tau upsilon phi chi psi omega".split(" ").map((e, t) => [e, i[t]]), ..."nabla:∇ partial:∂ cdot:⋅ times:× div:÷ pm:± mp:∓ le:≤ leq:≤ ge:≥ geq:≥ ne:≠ neq:≠ infty:∞ sum:∑ prod:∏ int:∫ in:∈ notin:∉ to:→ rightarrow:→ leftarrow:←".split(" ").map(e => {
                let [t, n] = e.split(":");
                return [t, n]
            })]),
            c = /^\\(?:mathbf|boldsymbol|bm|mathrm|mathit|mathsf|mathtt|mathnormal|mathbb|mathcal|mathscr|mathfrak|textbf|textit|textrm)$/,
            u = /^\\(?:quad|qquad|enspace|thinspace|medspace|thickspace|negthinspace|displaystyle|textstyle|scriptstyle|scriptscriptstyle|limits|nolimits|[,;:! ])$/,
            d = /^\\(?:left|right|middle|big|Big|bigg|Bigg|bigl|bigr|Bigl|Bigr|biggl|biggr|Biggl|Biggr)$/;

        function h(e) {
            let t = Array.from(e.matchAll(/\\[a-zA-Z]+|\\[^\r\n]|[^\s]/gu), e => ({
                    value: e[0],
                    start: e.index,
                    end: e.index + e[0].length
                })),
                n = [],
                l = [],
                r = 0;

            function a() {
                let e = t[r]?.start;
                if (null == e) throw Error("Missing argument");
                let n = o(),
                    l = t[r - 1].end;
                return [{
                    value: "argument:start",
                    start: e,
                    end: e
                }, ...n, {
                    value: "argument:end",
                    start: l,
                    end: l
                }]
            }

            function o() {
                let e = t[r++];
                if (null == e || "}" === e.value) throw Error("Incomplete math");
                if ("{" === e.value) {
                    let l = [];
                    for (; t[r]?.value !== "}";) l.push(...o());
                    return n.push({
                        start: e.start,
                        end: t[r++].end
                    }), l
                }
                if (c.test(e.value)) {
                    let l = o();
                    return n.push({
                        start: e.start,
                        end: t[r - 1].end
                    }), l
                }
                if (u.test(e.value)) return [];
                if (d.test(e.value)) {
                    let n, a = t[r++];
                    if (null == a) throw Error("Missing delimiter");
                    if ("\\left" === e.value) n = {
                        start: e.start,
                        end: a.end
                    }, l.push(n);
                    else if ("\\right" === e.value) {
                        if (null == (n = l.pop())) throw Error("Unpaired delimiter");
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
                if (/^(?:[_^]|\\(?:sqrt|vec|hat|bar|overline|underline))$/.test(e.value) || e.value.startsWith("\\") && !s.has(e.value.slice(1).replace(/^var/, "").toLowerCase()) && t[r]?.value === "{") {
                    if (t[r]?.value === "[") throw Error("Indexed argument");
                    return [e, ...a()]
                }
                let i = e.value.replace(/^\\/, "");
                return i = (i = (i = s.get(i.replace(/^var/, "").toLowerCase()) ?? e.value).replace(/[\u{1D400}-\u{1D7FF}]/gu, e => e.normalize("NFKC")).toLowerCase()).replace(/[ϵϑϕϖϱς−·]/g, e => "εθφπρσ-⋅" ["ϵϑϕϖϱς−·".indexOf(e)]), [{
                    ...e,
                    value: i
                }]
            }
            try {
                let e = [];
                for (; r < t.length;) e.push(...o());
                return 0 === l.length ? {
                    tokens: e,
                    groups: n
                } : null
            } catch {
                return null
            }
        }
        var m = n("agQa"),
            f = n("QxH2"),
            g = n("h8aU");

        function p(e) {
            let {
                contextId: t,
                getTurns: n,
                hydratePersistedMatch: l,
                revealUnrenderedMatches: i = !1,
                searchPersisted: c,
                searchMath: u = !1,
                scrollAdapter: d
            } = e;
            return {
                domain: "conversation",
                contextId: t,
                async search(e, t) {
                    var l, i;
                    let d, f, p = await async function(e, t, n, l) {
                        let r = e.query.trim(),
                            i = n && r.length > 1 && r.startsWith("/") && r.endsWith("/") ? r.slice(1, -1) : void 0,
                            c = t.flatMap(e => e.units.flatMap(t => (t.textChunks ?? [t.text]).flatMap((l, r) => {
                                let a = {
                                        turnKey: e.turnKey,
                                        unitId: t.unitId,
                                        text: n ? l.replace(/\s+/g, " ").trim() : l,
                                        equationIndex: void 0
                                    },
                                    o = n ? t.equations?.[r] : void 0;
                                return null == o ? [a] : [a, {
                                    ...a,
                                    text: o,
                                    equationIndex: r
                                }]
                            }))),
                            u = {
                                domain: e.domain,
                                contextId: e.contextId,
                                query: r,
                                regex: i,
                                searchMath: n || void 0,
                                matches: [],
                                totalMatches: 0,
                                isCapped: !1
                            };
                        if (!r) return u;
                        let d = null == i ? null : await (0, m.a)({
                            query: i,
                            texts: c.map(e => e.text),
                            mathTexts: c.map(e => null != e.equationIndex),
                            maxMatches: 250
                        }, l);
                        if (d?.error) return {
                            ...u,
                            error: d.error
                        };
                        u.totalMatches = d?.totalMatches ?? 0;
                        let f = new Map;
                        for (let [t, n] of c.entries()) {
                            let l = (0, a.e)(n.turnKey, n.unitId),
                                i = f.get(l) ?? 0,
                                {
                                    offsets: c,
                                    totalMatches: m
                                } = null != d ? {
                                    offsets: d.offsets[t] ?? [],
                                    totalMatches: 0
                                } : (null == n.equationIndex ? g.a : function(e, t, n) {
                                    let l = t.trim(),
                                        r = [];
                                    if (!l) return {
                                        offsets: r,
                                        totalMatches: 0
                                    };
                                    let a = h(e),
                                        i = h(s.get(l) ?? l);
                                    if (null == a || null == i) {
                                        let t = e.toLowerCase(),
                                            a = l.toLowerCase(),
                                            i = [...e.matchAll(/\\[a-zA-Z]+/g)];
                                        for (let n = t.indexOf(a); n >= 0; n = t.indexOf(a, n + a.length)) i.some(e => n > e.index && n < e.index + e[0].length) || r.push((0, o.a)(e, {
                                            start: n,
                                            end: n + l.length
                                        }));
                                        return {
                                            offsets: r.slice(0, n),
                                            totalMatches: r.length
                                        }
                                    }
                                    let c = 0;
                                    for (let e = 0; i.tokens.length > 0 && e <= a.tokens.length - i.tokens.length; e += 1) {
                                        if (!i.tokens.every((t, n) => t.value === a.tokens[e + n].value)) continue;
                                        let t = a.tokens.slice(e, e + i.tokens.length),
                                            l = t[0].start,
                                            o = t[t.length - 1].end;
                                        for (let e of t) l = Math.min(l, e.delimiter?.start ?? l), o = Math.max(o, e.delimiter?.end ?? o);
                                        for (let e of a.groups) l < e.start && o > e.start && o < e.end && (o = e.end), l > e.start && l < e.end && o > e.end && (l = e.start);
                                        c += 1, r.length < n && r.push({
                                            start: l,
                                            end: o
                                        }), e += i.tokens.length - 1
                                    }
                                    return {
                                        offsets: r,
                                        totalMatches: c
                                    }
                                })(n.text, r, 250 - u.matches.length);
                            for (let [t, l] of(u.totalMatches += m, c.entries())) {
                                let r = {
                                    domain: "conversation",
                                    contextId: e.contextId,
                                    turnKey: n.turnKey,
                                    unitId: n.unitId,
                                    matchIndex: null == n.equationIndex ? i + t : t,
                                    equationIndex: n.equationIndex,
                                    equationRange: null == n.equationIndex ? void 0 : l
                                };
                                u.matches.push({
                                    id: (0, a.d)(r),
                                    ordinal: u.matches.length + 1,
                                    location: r
                                })
                            }
                            null == n.equationIndex && f.set(l, i + c.length)
                        }
                        return u.isCapped = u.totalMatches > u.matches.length, u
                    }(e, n(), u, t?.signal);
                    if (u || null == c) return p;
                    let v = await c(e, t);
                    return null == v ? p : (l = p, i = v, d = new Map(l.matches.map(e => [e.id, e])), f = r()([...i.matches.map(e => d.get(e.id) ?? e), ...l.matches], "id").map((e, t) => ({
                        ...e,
                        ordinal: t + 1
                    })), {
                        ...l,
                        matches: f,
                        totalMatches: Math.max(f.length, l.totalMatches, i.totalMatches),
                        isCapped: l.isCapped || i.isCapped
                    })
                },
                async ensureVisible(e, n) {
                    if ("conversation" !== e.domain || e.contextId !== t || null != e.turnCursor && null != l && !await l(e, n) || n?.signal?.aborted) return;
                    d.onNavigate?.();
                    let r = null != e.turnCursor,
                        {
                            turnKey: o,
                            unitId: s
                        } = e,
                        c = d.getTurnContainer(o),
                        u = (0, a.d)(e),
                        h = i && null != c && null == (0, a.j)({
                            container: c,
                            matchId: u,
                            includeShadowRoots: !1
                        });
                    if (null == c || r || h) {
                        if (n?.signal?.aborted || (await d.scrollToTurn(o, n, s), n?.signal?.aborted)) return;
                        c = d.getTurnContainer(o)
                    }
                    null != c && await (0, f.b)({
                        container: c,
                        matchId: u,
                        includeShadowRoots: !1,
                        signal: n?.signal
                    })
                }
            }
        }
    }),
    gSdW: (function(e, t, n) {
        var l = n("SKhr");
        n.d(t, {}, {
            a: function(e) {
                let t = new Map;
                for (let n of e) {
                    if ("conversation" !== n.location.domain) continue;
                    let e = (0, l.e)(n.location.turnKey, n.location.unitId),
                        r = t.get(e) ?? [];
                    r.push(n), t.set(e, r)
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
        var l = n("QosV"),
            r = n("Q840"),
            a = n("zd8w"),
            o = n("SKhr"),
            i = n("gSdW");

        function s(e) {
            let t = [],
                n = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
            for (let l = n.nextNode(); null != l; l = n.nextNode()) {
                if (!(l instanceof Text) || l.parentElement?.closest(".vlist-s")) continue;
                let n = l.parentElement;
                for (; null != n && n !== e && "" === n.style.color;) n = n.parentElement;
                let r = 0;
                for (let e of l.data) t.push({
                    node: l,
                    text: e,
                    color: n?.style.color ?? "",
                    offset: r
                }), r += e.length
            }
            return t
        }
        var c = n("TwSq");
        let u = "[data-content-search-unit-key]";

        function d(e) {
            let t, d, p, v, x, y, b, S, w, P, C, E, M, D, T, R = (0, l.c)(30),
                {
                    containerRef: A,
                    contextId: I,
                    onContentChange: k
                } = e,
                F = (0, r.z)(c.d),
                B = (0, r.z)(c.g),
                L = F?.contextId === I ? F : null,
                q = null != L,
                z = q ? B?.id ?? null : null,
                {
                    schedule: H,
                    cancel: U
                } = (E = (0, l.c)(5), M = (0, a.useRef)(null), 80 !== E[0] ? (w = e => {
                    null == M.current && (M.current = window.setTimeout(() => {
                        M.current = null, e()
                    }, 80))
                }, E[0] = 80, E[1] = w) : w = E[1], D = w, E[2] === Symbol.for("react.memo_cache_sentinel") ? (P = () => {
                    null != M.current && (window.clearTimeout(M.current), M.current = null)
                }, E[2] = P) : P = E[2], T = P, E[3] !== D ? (C = {
                    schedule: D,
                    cancel: T
                }, E[3] = D, E[4] = C) : C = E[4], C);
            R[0] !== k ? (t = () => k?.(), R[0] = k, R[1] = t) : t = R[1];
            let O = (0, a.useEffectEvent)(t);
            R[2] !== B?.location || R[3] !== I ? (d = e => {
                let t = B?.location;
                return t?.domain === "conversation" && t.contextId === I && (0, o.a)(e, t)
            }, R[2] = B?.location, R[3] = I, R[4] = d) : d = R[4];
            let j = (0, a.useEffectEvent)(d);
            R[5] !== z ? (p = (e, t) => {
                t.forEach(t => {
                    (0, o.o)({
                        element: t,
                        matchId: e
                    }), (0, o.n)(t, e === z)
                })
            }, R[5] = z, R[6] = p) : p = R[6];
            let N = (0, a.useEffectEvent)(p);
            R[7] !== L || R[8] !== A || R[9] !== N ? (v = async (e, t, l) => {
                let r = A.current;
                if (null == r || null == L) return;
                let a = null != l && !L.searchMath && r.contains(l) ? l : r;
                (0, o.b)(a, {
                    includeShadowRoots: !1
                }), t.takeRecords();
                let c = (0, i.a)(L.matches),
                    d = Array.from(a.querySelectorAll(u));
                a !== r && d.unshift(a);
                let p = d.flatMap(e => {
                        let t = c.get(e.dataset.contentSearchUnitKey ?? "");
                        return null == t ? [] : [{
                            element: e,
                            matches: t
                        }]
                    }),
                    v = p.map(g),
                    x = e => {
                        e.forEach((e, t) => e.forEach((e, n) => N(v[t].matches[n].id, e)))
                    };
                if (!L.searchMath) {
                    x(v.map(e => {
                        let {
                            element: t,
                            matches: n
                        } = e;
                        return (0, o.l)({
                            target: t,
                            query: L.query,
                            maxMatches: n.length,
                            includeShadowRoots: !1
                        }).matches
                    })), t.takeRecords();
                    return
                }
                let y = [];
                for (let {
                        element: e,
                        matches: t
                    }
                    of p) e.querySelectorAll("[data-math-source]").forEach((e, l) => {
                    let r = t.flatMap(e => {
                        let {
                            id: t,
                            location: n
                        } = e;
                        return "conversation" === n.domain && n.equationIndex === l && null != n.equationRange ? [{
                            id: t,
                            range: n.equationRange
                        }] : []
                    });
                    0 !== r.length && y.push((async function(e, t) {
                        let l = e.querySelector(".katex-html"),
                            r = e.dataset.mathSource;
                        if (null == l || null == r || 0 === t.length) return () => t.map(() => []);
                        let {
                            katex: a
                        } = await Promise.all([n.e(990054), n.e(559373)]).then(n.bind(n, "RlG8")), i = s(l), c = new Map(i.map(e => {
                            let {
                                node: t
                            } = e;
                            return [t, t.data]
                        })), u = new Set(i.map(e => {
                            let {
                                color: t
                            } = e;
                            return t
                        })), d = document.createElement("span"), h = t.map(() => {
                            let e, t = u.size + 1;
                            do e = `#${t.toString(16).padStart(6,"0")}`, d.style.color = e, t += 1; while (u.has(d.style.color)) return u.add(d.style.color), {
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
                                let l = r;
                                for (let e of [...n].reverse()) {
                                    let {
                                        start: n,
                                        end: r
                                    } = t[e];
                                    l = `${l.slice(0,n)}{\\textcolor{${h[e].hex}}{${l.slice(n,r)}}}${l.slice(r)}`
                                }
                                try {
                                    d.innerHTML = a.renderToString(l, {
                                        displayMode: null != e.querySelector(".katex-display"),
                                        strict: "ignore",
                                        output: "html"
                                    })
                                } catch {
                                    return !1
                                }
                                let o = s(d),
                                    c = o.length === i.length && o.every((e, t) => {
                                        let {
                                            text: n
                                        } = e;
                                        return n === i[t].text
                                    });
                                return o.forEach((e, t) => {
                                    let n = m.get(e.color);
                                    if (null == n) return;
                                    let l = i[t];
                                    if (!c) {
                                        let t = i.filter(t => {
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
                                        l = t[0]
                                    }
                                    f.set(l, n)
                                }), !0
                            };
                        return g(t.map((e, t) => t)) || t.forEach((e, t) => g([t])), () => {
                            let n, a = t.map(() => []);
                            if (e.dataset.mathSource !== r || !e.contains(l) || [...c].some(e => {
                                    let [t, n] = e;
                                    return !l.contains(t) || t.data !== n
                                })) return a;
                            let s = [];
                            for (let e of i) {
                                let t = f.get(e);
                                if (null == t) {
                                    n = void 0;
                                    continue
                                }
                                let l = e.node.parentElement?.closest(".vlist > span, .base") ?? null;
                                n?.index === t && n.row === l ? n.glyphs.push(e) : (n = {
                                    index: t,
                                    row: l,
                                    glyphs: [e]
                                }, s.push(n))
                            }
                            for (let {
                                    index: e,
                                    glyphs: t
                                }
                                of s.reverse()) a[e].unshift(... function e(t) {
                                let n = t[0],
                                    l = t[t.length - 1],
                                    r = document.createRange();
                                r.setStart(n.node, n.offset), r.setEnd(l.node, l.offset + l.text.length);
                                let a = r.commonAncestorContainer;
                                for (; r.startContainer !== a && 0 === r.startOffset;) r.setStartBefore(r.startContainer);
                                for (; r.endContainer !== a && r.endOffset === (r.endContainer instanceof Text ? r.endContainer.length : r.endContainer.childNodes.length);) r.setEndAfter(r.endContainer);
                                if (r.startContainer !== r.endContainer) return [...t].reverse().flatMap(t => e([t])).reverse();
                                let i = (0, o.g)();
                                return r.surroundContents(i), [i]
                            }(t));
                            return a
                        }
                    })(e, r.map(f)).then(e => () => e().forEach((e, t) => N(r[t].id, e))))
                });
                let [b, S] = await Promise.all([(0, o.m)(v.map(m), L.query, L.regex, e), Promise.all(y)]);
                e.aborted || (x(b()), S.forEach(h), t.takeRecords())
            }, R[7] = L, R[8] = A, R[9] = N, R[10] = v) : v = R[10];
            let W = (0, a.useEffectEvent)(v);
            R[11] !== L?.runId || R[12] !== j || R[13] !== W || R[14] !== U || R[15] !== A || R[16] !== O || R[17] !== H ? (x = () => {
                let e, t = A.current;
                if (null == t || L?.runId == null) return;
                let n = null,
                    l = e => {
                        n?.abort(), W((n = new AbortController).signal, r, e)
                    },
                    r = new MutationObserver(t => {
                        if (!(0, o.p)(t)) return;
                        for (let {
                                target: l
                            }
                            of(n?.abort(), t)) {
                            if (!1 === e) break;
                            let t = l instanceof Element ? l : l.parentElement,
                                n = t?.closest(u) ?? null;
                            e = (void 0 === e || e === n) && null != n && n.parentElement?.closest(u) == null && n
                        }
                        let r = () => {
                            let t = e;
                            e = void 0, O(), l(t || void 0)
                        };
                        j(t) ? (U(), r()) : H(r)
                    });
                return r.observe(t, {
                    childList: !0,
                    subtree: !0,
                    characterData: !0,
                    attributeFilter: ["hidden", "inert", "contenteditable", "data-thread-find-skip", "data-content-search-unit-key"]
                }), l(), () => {
                    r.disconnect(), n?.abort(), U(), (0, o.b)(t, {
                        includeShadowRoots: !1
                    })
                }
            }, R[11] = L?.runId, R[12] = j, R[13] = W, R[14] = U, R[15] = A, R[16] = O, R[17] = H, R[18] = x) : x = R[18];
            let K = L?.runId;
            R[19] !== U || R[20] !== A || R[21] !== I || R[22] !== H || R[23] !== K ? (y = [K, U, A, I, H], R[19] = U, R[20] = A, R[21] = I, R[22] = H, R[23] = K, R[24] = y) : y = R[24], (0, a.useEffect)(x, y), R[25] !== z || R[26] !== A || R[27] !== q ? (b = () => {
                q && A.current?.querySelectorAll("mark[data-search-match]").forEach(e => {
                    (0, o.n)(e, e.dataset.contentSearchMatchId === z)
                })
            }, S = [z, A, q], R[25] = z, R[26] = A, R[27] = q, R[28] = b, R[29] = S) : (b = R[28], S = R[29]), (0, a.useEffect)(b, S)
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
    hkBU: (function(e, t, n) {
        var l = n("ABep"),
            r = n("QosV"),
            a = n("zd8w"),
            o = n("oyxz");
        n.d(t, {}, {
            a: function(e) {
                let t, n, i, s, c, u, d, h, m, f = (0, r.c)(15),
                    {
                        onNavigate: g
                    } = e,
                    p = (0, a.useRef)(null),
                    v = (0, a.useRef)(null),
                    [x, y] = (0, a.useState)(!1);
                return f[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => {
                    let e = p.current;
                    if (null == e) return;
                    let t = e.ownerDocument,
                        n = e.closest("[data-thread-scroll-footer]") ?? e.parentElement,
                        l = () => {
                            let n = t.activeElement;
                            null != n && e.compareDocumentPosition(n) === Node.DOCUMENT_POSITION_FOLLOWING && (e.tabIndex = 0)
                        },
                        r = t => {
                            "Tab" !== t.key || t.shiftKey || t.defaultPrevented || (e.tabIndex = -1)
                        };
                    return t.addEventListener("keydown", r), n?.addEventListener("focusin", l), () => {
                        t.removeEventListener("keydown", r), n?.removeEventListener("focusin", l), v.current?.abort()
                    }
                }, n = [], f[0] = t, f[1] = n) : (t = f[0], n = f[1]), (0, a.useEffect)(t, n), f[2] === Symbol.for("react.memo_cache_sentinel") ? (i = () => v.current?.abort(), f[2] = i) : i = f[2], f[3] !== g ? (s = e => {
                    v.current?.abort();
                    let t = e.currentTarget;
                    t.tabIndex = -1;
                    let n = new AbortController;
                    v.current = n, y(!1), g(n.signal).then(e => {
                        !n.signal.aborted && t.isConnected && t.ownerDocument.activeElement === t && (e?.isConnected ? e.focus({
                            preventScroll: !0
                        }) : y(!0))
                    })
                }, f[3] = g, f[4] = s) : s = f[4], f[5] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, l.jsx)(o.a, {
                    id: "codex.conversation.latestResponse",
                    defaultMessage: "Latest response"
                }), f[5] = c) : c = f[5], f[6] !== s ? (u = (0, l.jsx)("h4", {
                    ref: p,
                    className: "sr-only m-0 select-none",
                    tabIndex: 0,
                    onBlur: i,
                    onFocus: s,
                    children: c
                }), f[6] = s, f[7] = u) : u = f[7], f[8] !== x ? (d = x ? (0, l.jsx)(o.a, {
                    id: "codex.conversation.latestResponseUnavailable",
                    defaultMessage: "No response available"
                }) : null, f[8] = x, f[9] = d) : d = f[9], f[10] !== d ? (h = (0, l.jsx)("span", {
                    className: "sr-only m-0",
                    role: "status",
                    children: d
                }), f[10] = d, f[11] = h) : h = f[11], f[12] !== u || f[13] !== h ? (m = (0, l.jsxs)(l.Fragment, {
                    children: [u, h]
                }), f[12] = u, f[13] = h, f[14] = m) : m = f[14], m
            }
        })
    }),
    cP1f: (function(e, t, n) {
        n.d(t, {}, {
            a: async function(e, t, n) {
                if (null == e || null == t || n.aborted) return null;
                let l = null;
                return await e(t, e => {
                    let t = e.querySelectorAll('[data-conversation-role="assistant"]');
                    return l = t.item(t.length - 1)
                }, {
                    align: "top",
                    signal: n
                }), n.aborted ? null : l
            }
        })
    }),
    IxWh: (function(e, t, n) {
        var l = n("Vzyk"),
            r = n.n(l);

        function a(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ltr",
                n = Math.max(0, e.scrollWidth - e.clientWidth);
            if ("rtl" === t) return {
                maximum: 0,
                minimum: -n
            };
            let l = e.firstElementChild,
                r = Math.min(n, l instanceof HTMLElement ? Math.max(0, o(e, l, t)) : 0);
            return {
                maximum: n,
                minimum: r
            }
        }

        function o(e, t, n) {
            return "rtl" === n ? t.offsetLeft - e.offsetLeft + t.offsetWidth - e.clientWidth + i(e, n) : t.offsetLeft - e.offsetLeft - i(e, n)
        }

        function i(e, t) {
            let n = Number.parseFloat("rtl" === t ? getComputedStyle(e).scrollPaddingRight : getComputedStyle(e).scrollPaddingLeft);
            return Number.isNaN(n) ? 0 : n
        }
        n.d(t, {}, {
            a: a,
            b: function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ltr",
                    {
                        maximum: l,
                        minimum: s
                    } = a(e, n),
                    c = "rtl" === n ? -t : t,
                    u = r()(e.scrollLeft + c * (e.clientWidth - i(e, n)), s, l),
                    d = e.children;
                for (let a = 1 === t ? 0 : d.length - 1; a >= 0 && a < d.length; a += t) {
                    let t = d.item(a);
                    if (!(t instanceof HTMLElement)) continue;
                    let i = r()(o(e, t, n), s, l);
                    if (1 === c && i >= u - 1 || -1 === c && i <= u + 1) return i
                }
                return 1 === c ? l : s
            }
        })
    }),
    QCUA: (function(e, t, n) {
        let l = (0, n("zd8w").createContext)("chat");
        n.d(t, {}, {
            a: l
        })
    }),
    gOnr: (function(e, t, n) {
        var l = n("QosV"),
            r = n("Q840"),
            a = n("zd8w"),
            o = n("TSib"),
            i = n("ipIJ"),
            s = n("Sd8U"),
            c = n("tSEg"),
            u = n("DRR4"),
            d = n("qZWE");
        n.d(t, {}, {
            a: function(e) {
                let t, n, h, m, f, g = (0, l.c)(14);
                g[0] !== e ? (t = void 0 === e ? {} : e, g[0] = e, g[1] = t) : t = g[1];
                let {
                    transcriptMcpAppIds: p,
                    blockedWidgetSource: v,
                    shouldBlockExternalEgress: x
                } = t, y = void 0 !== x && x, b = (0, r.y)(c.a), S = (0, r.y)(s.a), w = (0, r.z)(d.i), P = (0, r.z)(o.v);
                return g[2] !== P || g[3] !== v || g[4] !== S || g[5] !== w || g[6] !== b || g[7] !== y || g[8] !== p ? (n = () => {
                    for (let [e, t] of("chatgpt-thread" === b.value.routeKind && (0, i.b)(S, P.filter(e => y || null != v && (e.widgetSource ?? "descriptor") === v)), w))(y || null != v && (t.content.mcpAppScope.widgetSource ?? "descriptor") === v || t.hostedInThreadScrollLayout && p?.has(e) === !1) && (0, d.A)(b, e)
                }, h = [P, v, p, S, w, b, y], g[2] = P, g[3] = v, g[4] = S, g[5] = w, g[6] = b, g[7] = y, g[8] = p, g[9] = n, g[10] = h) : (n = g[9], h = g[10]), (0, a.useLayoutEffect)(n, h), g[11] !== b ? (m = () => {
                    (0, u.g)(b)
                }, f = [b], g[11] = b, g[12] = m, g[13] = f) : (m = g[12], f = g[13]), (0, a.useLayoutEffect)(m, f), null
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
        var l = n("QosV"),
            r = n("Q840"),
            a = n("zd8w"),
            o = n("rEML"),
            i = n("Cslg"),
            s = n("TS05"),
            c = n("tSEg");
        n.d(t, {}, {
            a: function(e) {
                let t, n, u, d = (0, l.c)(18),
                    {
                        ready: h,
                        onNavigate: m
                    } = e,
                    f = (0, r.y)(c.a),
                    g = (0, r.z)(i.f),
                    p = (0, o.Z)(),
                    v = p.state,
                    x = v?.sidebarArea === "scheduled";
                d[0] !== g || d[1] !== p.key ? (t = {
                    locationKey: p.key,
                    accountId: g
                }, d[0] = g, d[1] = p.key, d[2] = t) : t = d[2];
                let y = (0, r.x)(s.a, t),
                    b = (0, a.useEffectEvent)(m);
                return d[3] !== g || d[4] !== y || d[5] !== p.key || d[6] !== b || d[7] !== h || d[8] !== x || d[9] !== f ? (n = () => {
                    if (!x || !h || y) return;
                    let e = new AbortController;
                    return b(e.signal).then(() => {
                        e.signal.aborted || f.set(s.a, {
                            locationKey: p.key,
                            accountId: g
                        }, !0)
                    }), () => e.abort()
                }, d[3] = g, d[4] = y, d[5] = p.key, d[6] = b, d[7] = h, d[8] = x, d[9] = f, d[10] = n) : n = d[10], d[11] !== g || d[12] !== y || d[13] !== p.key || d[14] !== h || d[15] !== x || d[16] !== f ? (u = [g, y, p.key, h, x, f], d[11] = g, d[12] = y, d[13] = p.key, d[14] = h, d[15] = x, d[16] = f, d[17] = u) : u = d[17], (0, a.useEffect)(n, u), null
            }
        })
    }),
    yLzP: (function(e, t, n) {
        var l = n("ABep"),
            r = n("QosV"),
            a = n("on57"),
            o = n("oyxz"),
            i = n("Sm6l"),
            s = n("HOLv"),
            c = n("RNul"),
            u = n("qt75");
        n.d(t, {}, {
            a: function(e) {
                let t, n, d, h, m, f, g = (0, r.c)(16),
                    {
                        ref: p,
                        onRetry: v
                    } = e,
                    x = null == v ? "py-4" : "gap-1.5 px-2 py-1.5 select-none";
                g[0] !== x ? (t = (0, a.b)("flex items-center justify-center", x), g[0] = x, g[1] = t) : t = g[1];
                let y = null == v ? "text-secondary" : "min-w-0 gap-1.5 text-default";
                return g[2] !== y ? (n = (0, a.b)("flex items-center text-sm", y), g[2] = y, g[3] = n) : n = g[3], g[4] !== v ? (d = null != v ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(s.a, {
                        asset: u.a,
                        className: "shrink-0 text-danger"
                    }), (0, l.jsx)("span", {
                        className: "min-w-0 wrap-break-word",
                        children: (0, l.jsx)(o.a, {
                            id: "chatgpt.pagination.error",
                            defaultMessage: "Couldn’t load earlier messages"
                        })
                    })]
                }) : (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(c.a, {}), (0, l.jsx)("span", {
                        className: "sr-only",
                        children: (0, l.jsx)(o.a, {
                            id: "chatgpt.pagination.loading",
                            defaultMessage: "Loading older messages…"
                        })
                    })]
                }), g[4] = v, g[5] = d) : d = g[5], g[6] !== n || g[7] !== d ? (h = (0, l.jsx)("div", {
                    role: "status",
                    className: n,
                    children: d
                }), g[6] = n, g[7] = d, g[8] = h) : h = g[8], g[9] !== v ? (m = null != v && (0, l.jsx)(i.a, {
                    color: "outlineGhost",
                    size: "menuRow",
                    onClick: v,
                    children: (0, l.jsx)(o.a, {
                        id: "chatgpt.pagination.retry",
                        defaultMessage: "Retry"
                    })
                }), g[9] = v, g[10] = m) : m = g[10], g[11] !== p || g[12] !== t || g[13] !== h || g[14] !== m ? (f = (0, l.jsxs)("div", {
                    ref: p,
                    className: t,
                    children: [h, m]
                }), g[11] = p, g[12] = t, g[13] = h, g[14] = m, g[15] = f) : f = g[15], f
            }
        })
    }),
    KFm7: (function(e, t, n) {
        var l = n("iOtI"),
            r = n("jCHb"),
            a = n("xs0G"),
            o = n("V8uZ"),
            i = n("uYx2");
        let s = 2 / 3;

        function c(e, t, n) {
            let l = e.getBoundingClientRect(),
                r = n ?? (l.height / (e.offsetHeight || 1) || 1);
            return (t - (l.bottom - Math.max((0, i.e)(e, r), u(e) * r))) / r
        }

        function u(e) {
            let t = Number.parseFloat(e.style.getPropertyValue("--thread-scroll-padding-bottom") || e.style.getPropertyValue("--thread-scroll-seeded-padding-bottom"));
            return Number.isFinite(t) ? t : 0
        }

        function d(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = Math.max(0, e.clientHeight - u(e));
            return t ? n : Math.max(0, Math.min(n * s, n - 240))
        }
        n.d(t, {}, {
            a: class {
                scrollController;
                height = (0, l.c)(0);
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
                    let l = this.height.get() + n;
                    if (t.scrollHeight <= t.clientHeight) {
                        let n = l + t.clientHeight;
                        this.writeHeight(n), l = n - ((0, i.b)(t) - e)
                    }
                    this.writeHeight(l)
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
                    let l = this.scrollController.getScrollElement(),
                        r = null == l ? 0 : (0, i.b)(l);
                    return this.writeHeight(n), null != l && this.scrollController.compensateScrollToDistanceFromBottomPx(Math.max(0, r - (t - n))), 0 === n && this.onReleased?.(), !0
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
                    let l = this.scrollController.getScrollElement();
                    this.pendingUserScrollElement !== l && this.cancelPendingUserScrollDecay(), this.pendingUserScrollDecayPx += n, null == this.userScrollDecayAnimationFrame && (this.pendingUserScrollElement = l, this.userScrollDecayAnimationFrame = window.requestAnimationFrame(this.flushUserScrollDecay))
                };
                reconcileViewport = () => {
                    let e = this.scrollController.getScrollElement();
                    if (null != e && e.clientHeight > 0) {
                        let t = e.clientHeight,
                            n = u(e),
                            l = t !== this.viewportHeightPx || n !== this.scrollPaddingBottomPx;
                        this.viewportHeightPx = t, this.scrollPaddingBottomPx = n;
                        let r = l && null != this.stopPlacementAnimation,
                            a = this.canPrepareThreadEndContent;
                        r && (this.canPrepareThreadEndContent = !1, this.stop());
                        let o = this.trimTo(d(e, null != this.placementTarget));
                        r && (o || this.scrollController.compensateScrollToDistanceFromBottomPx((0, i.b)(e)), this.animatePlacement(), this.canPrepareThreadEndContent = a)
                    }
                };
                revealSubmittedTurn = e => {
                    let t = this.scrollController.getScrollElement();
                    if (null == t || !t.contains(e)) return;
                    this.scrollController.holdViewport();
                    let n = e.getBoundingClientRect(),
                        l = Math.min(c(t, n.bottom), (n.top - t.getBoundingClientRect().top) / (t.currentCSSZoom || 1));
                    l > 0 && this.scrollController.compensateScrollToDistanceFromBottomPx(Math.max(0, (0, i.b)(t) - l))
                };
                place = e => {
                    let t = this.scrollController.getScrollElement();
                    if (null == t) return;
                    this.canPrepareThreadEndContent = !1, this.cancelPendingUserScrollDecay(), this.interruptPlacement(), this.placementTarget = e, this.viewportHeightPx = t.clientHeight, this.scrollPaddingBottomPx = u(t);
                    let n = this.height.get(),
                        l = (0, i.b)(t),
                        r = this.getPlacementDistancePx(t);
                    this.scrollController.holdViewport(), this.writeHeight(null == e ? d(t) : Math.max(0, n - r + 1)), this.prefersReducedMotion || this.scrollController.compensateScrollToDistanceFromBottomPx(l + this.height.get() - n), this.animatePlacement(), this.canPrepareThreadEndContent = !0
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
                                l = (0, r.a)(0, e, {
                                    ...o.g,
                                    driver: e => {
                                        let t = 0,
                                            n = n => {
                                                let {
                                                    delta: l
                                                } = n;
                                                e(t += l)
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
                                        let l = this.scrollController.getUnroundedScrollDistanceFromBottomPx(this.scrollController.getLastScrollDistanceFromBottomPx());
                                        this.scrollController.compensateScrollToDistanceFromBottomPx(Math.max(1, l - (e - t))), t = e
                                    },
                                    onComplete: () => {
                                        this.stopPlacementAnimation = null, this.scrollController.compensateScrollToDistanceFromBottomPx(this.scrollController.getUnroundedScrollDistanceFromBottomPx(this.scrollController.getLastScrollDistanceFromBottomPx()))
                                    }
                                });
                            this.stopPlacementAnimation = () => {
                                n = !0, l.stop()
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
                        l = Number.parseFloat(getComputedStyle(e).paddingTop) || 0;
                    return (0, i.b)(e) - (this.placementTarget.getBoundingClientRect().top - t.top) / n + e.clientTop + l
                }
            },
            b: c,
            c: u
        })
    }),
    Ho4C: (function(e, t, n) {
        var l = n("ABep"),
            r = n("QosV"),
            a = n("zd8w"),
            o = n("T1PX"),
            i = n("ZYy5"),
            s = n("m8On"),
            c = n("bIvi"),
            u = n("lsfk");
        let d = Array.from({
            length: 101
        }, (e, t) => t / 100);
        n.d(t, {}, {
            a: function(e) {
                let t, n, h, m, f, g, p, v, x, y, b, S, w, P, C = (0, r.c)(31),
                    {
                        controller: E,
                        onReleased: M
                    } = e,
                    D = (0, u.b)(),
                    T = (0, a.useContext)(i.a),
                    R = (0, o.a)(),
                    {
                        getScrollElement: A
                    } = D;
                C[0] !== E ? (t = e => {
                    E.setElement(e)
                }, C[0] = E, C[1] = t) : t = C[1];
                let I = (0, c.a)(t);
                return C[2] !== E || C[3] !== M || C[4] !== R || C[5] !== D ? (n = () => {
                    E.updateContext(D, R, M)
                }, h = [E, D, R, M], C[2] = E, C[3] = M, C[4] = R, C[5] = D, C[6] = n, C[7] = h) : (n = C[6], h = C[7]), (0, a.useInsertionEffect)(n, h), C[8] !== E || C[9] !== A ? (m = () => {
                    let e = A();
                    if (null == e) return;
                    let t = new AbortController;
                    for (let n of ["wheel", "touchstart", "pointerdown", "keydown"]) e.addEventListener(n, E.interruptPlacement, {
                        capture: !0,
                        passive: !0,
                        signal: t.signal
                    });
                    return () => {
                        t.abort(), E.interruptPlacement()
                    }
                }, f = [E, A], C[8] = E, C[9] = A, C[10] = m, C[11] = f) : (m = C[10], f = C[11]), (0, a.useEffect)(m, f), C[12] !== E.cancelPendingUserScrollDecay ? (g = () => E.cancelPendingUserScrollDecay, C[12] = E.cancelPendingUserScrollDecay, C[13] = g) : g = C[13], C[14] !== E ? (p = [E], C[14] = E, C[15] = p) : p = C[15], (0, a.useEffect)(g, p), C[16] !== E || C[17] !== A ? (v = () => {
                    let e = A();
                    if (null == e || "u" < typeof IntersectionObserver) return;
                    let t = new IntersectionObserver(E.collapseIfHidden, {
                            root: e,
                            threshold: d
                        }),
                        n = E.getElement();
                    return null != n && t.observe(n), () => t.disconnect()
                }, x = [E, A], C[16] = E, C[17] = A, C[18] = v, C[19] = x) : (v = C[18], x = C[19]), (0, a.useEffect)(v, x), C[20] !== E || C[21] !== D ? (y = () => {
                    let e = D.addScrollListener(E.handleScroll),
                        t = D.addUserScrollListener(E.handleUserScroll);
                    return E.reconcileViewport(), () => {
                        e(), t()
                    }
                }, b = [E, D], C[20] = E, C[21] = D, C[22] = y, C[23] = b) : (y = C[22], b = C[23]), (0, a.useLayoutEffect)(y, b), C[24] !== E || C[25] !== A || C[26] !== T ? (S = () => {
                    let e = A();
                    if (null == e) return;
                    let t = null,
                        n = () => {
                            null == t && (t = window.requestAnimationFrame(() => {
                                t = null, E.reconcileViewport()
                            }))
                        },
                        l = T ?? (0, s.b)(),
                        r = e.parentElement?.querySelector("[data-thread-scroll-footer]"),
                        a = null == r ? [e] : [e, r];
                    for (let e of a)(0, s.a)({
                        element: e,
                        callback: n,
                        observer: l
                    });
                    return window.addEventListener("resize", n, {
                        passive: !0
                    }), () => {
                        for (let e of a)(0, s.c)({
                            element: e,
                            callback: n,
                            observer: l
                        });
                        null == T && l?.disconnect(), window.removeEventListener("resize", n), null != t && window.cancelAnimationFrame(t)
                    }
                }, w = [E, A, T], C[24] = E, C[25] = A, C[26] = T, C[27] = S, C[28] = w) : (S = C[27], w = C[28]), (0, a.useEffect)(S, w), C[29] !== I ? (P = (0, l.jsx)("div", {
                    ref: I,
                    className: "shrink-0",
                    "aria-hidden": !0
                }), C[29] = I, C[30] = P) : P = C[30], P
            }
        })
    }),
    pDUk: (function(e, t, n) {
        var l = n("ABep"),
            r = n("QosV"),
            a = n("suct"),
            o = n("iodE"),
            i = n("IPUh"),
            s = n("Q840"),
            c = n("zd8w"),
            u = n("Q2Qp"),
            d = n("QcW8"),
            h = n("wD9O"),
            m = n("nzx4"),
            f = n("eGPX"),
            g = n("csXo"),
            p = n("iS3k"),
            v = n("KWzM");

        function x(e) {
            e.target instanceof Element && null != e.target.closest('[data-app-shell-tab-strip-controller="right"]') && e.preventDefault()
        }

        function y(e) {
            let t, n, a, u, d, g, p, x, y, b, S, w = (0, r.c)(25);
            w[0] !== e ? ({
                animate: t,
                getPaneElement: u,
                children: n,
                className: a,
                ...d
            } = e, w[0] = e, w[1] = t, w[2] = n, w[3] = a, w[4] = u, w[5] = d) : (t = w[1], n = w[2], a = w[3], u = w[4], d = w[5]);
            let P = (0, o.a)(),
                C = (0, s.z)(f.c),
                E = t && !C,
                M = (0, h.c)(),
                D = (0, c.useRef)(null),
                T = (0, c.useRef)(E);
            w[6] !== u || w[7] !== M ? (g = () => {
                let e = D.current,
                    t = u();
                if (null == e || null == t || !T.current) return;
                let n = t.getBoundingClientRect(),
                    l = e.getBoundingClientRect();
                e.style.clipPath = `inset(${(n.top-l.top)/M}px ${(l.right-n.right)/M}px ${(l.bottom-n.bottom)/M}px ${(n.left-l.left)/M}px)`
            }, w[6] = u, w[7] = M, w[8] = g) : g = w[8];
            let R = g,
                A = !P,
                I = !P;
            w[9] !== R ? (p = () => {
                T.current = !0, requestAnimationFrame(R)
            }, w[9] = R, w[10] = p) : p = w[10], w[11] === Symbol.for("react.memo_cache_sentinel") ? (x = () => {
                T.current = !1, D.current?.style.removeProperty("clip-path")
            }, w[11] = x) : x = w[11];
            let k = !!E && v.b.hidden;
            return w[12] !== E ? (y = E ? v.a : {
                duration: 0
            }, w[12] = E, w[13] = y) : y = w[13], w[14] !== n || w[15] !== p || w[16] !== k || w[17] !== y ? (b = (0, l.jsx)(i.a.div, {
                onAnimationStart: p,
                onAnimationComplete: x,
                initial: k,
                animate: v.b.visible,
                exit: v.b.hidden,
                transition: y,
                children: n
            }), w[14] = n, w[15] = p, w[16] = k, w[17] = y, w[18] = b) : b = w[18], w[19] !== a || w[20] !== d || w[21] !== A || w[22] !== I || w[23] !== b ? (S = (0, l.jsx)(m.c, {
                ...d,
                ref: D,
                className: a,
                forceMount: !0,
                "aria-hidden": A,
                inert: I,
                children: b
            }), w[19] = a, w[20] = d, w[21] = A, w[22] = I, w[23] = b, w[24] = S) : S = w[24], S
        }

        function b(e) {
            return e instanceof Element && null != e.closest('[data-app-shell-workspace-layout-toggle="right-panel"]')
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, i, s, f, v, S, w = (0, r.c)(41),
                    {
                        animate: P,
                        animateOnExit: C,
                        children: E,
                        externalControls: M,
                        floatingCardAnchor: D,
                        id: T,
                        isOpen: R,
                        isSideChatSplit: A,
                        label: I,
                        pane: k,
                        onEscapeKeyDown: F,
                        onOpenChange: B,
                        returnFocusId: L,
                        shouldPreventAutoFocus: q,
                        trigger: z
                    } = e,
                    H = void 0 === P || P,
                    U = void 0 !== A && A,
                    O = void 0 !== q && q,
                    j = (0, c.useContext)(u.a),
                    {
                        element: N
                    } = (0, g.a)(void 0 === k ? "chat" : k),
                    [W, K] = (0, c.useState)(null),
                    _ = (0, c.useRef)(!1),
                    Q = (0, c.useRef)(R && U),
                    V = 8 * (0, h.c)(),
                    $ = M?.anchor ?? W;
                w[0] !== $ ? (t = () => $?.closest("[data-thread-floating-chat-actions]") ?? null, w[0] = $, w[1] = t) : t = w[1];
                let G = t;
                w[2] !== N || w[3] !== G || w[4] !== j ? (n = function(e) {
                    let t = void 0 === e ? G() : e;
                    return t?.offsetParent ?? (void 0 === N ? j?.querySelector("[data-app-shell-main-content-layout]") : N) ?? j
                }, w[2] = N, w[3] = G, w[4] = j, w[5] = n) : n = w[5];
                let Z = n,
                    X = D ?? $ ?? void 0;
                w[6] !== $ || w[7] !== D || w[8] !== G || w[9] !== Z || w[10] !== X ? (o = {
                    contextElement: X,
                    getBoundingClientRect() {
                        if (D?.isConnected) return D.getBoundingClientRect();
                        let e = G(),
                            t = e ?? $?.closest("[data-app-shell-main-titlebar]") ?? $?.closest("[data-app-shell-header-toolbar], [data-app-shell-titlebar]"),
                            n = (t ?? $)?.getBoundingClientRect() ?? new DOMRect,
                            l = Z(e);
                        if (null == l) return n;
                        let r = l.getBoundingClientRect();
                        return new DOMRect(r.left, n.top, r.width, n.height)
                    }
                }, w[6] = $, w[7] = D, w[8] = G, w[9] = Z, w[10] = X, w[11] = o) : o = w[11];
                let Y = o,
                    J = void 0 === C || C ? a.a : c.Fragment;
                return w[12] !== Y ? (i = (0, l.jsx)(m.b, {
                    virtualRef: {
                        current: Y
                    }
                }), w[12] = Y, w[13] = i) : i = w[13], w[14] !== M || w[15] !== R || w[16] !== z ? (s = null == M && (0, l.jsx)(m.e, {
                    ref: K,
                    asChild: !0,
                    children: z ?? (0, l.jsx)(p.a.HeaderButton, {
                        pressed: R
                    })
                }), w[14] = M, w[15] = R, w[16] = z, w[17] = s) : s = w[17], w[18] !== H || w[19] !== E || w[20] !== M || w[21] !== D || w[22] !== Z || w[23] !== T || w[24] !== R || w[25] !== U || w[26] !== I || w[27] !== F || w[28] !== V || w[29] !== L || w[30] !== O ? (f = R && (0, l.jsx)(y, {
                    id: T,
                    "aria-label": I,
                    getPaneElement: Z,
                    className: "z-50 flex flex-col text-default outline-hidden",
                    animate: H,
                    align: "end",
                    alignOffset: null == D ? V : 0,
                    collisionPadding: V,
                    side: "bottom",
                    sideOffset: null == D ? V : 0,
                    unstyled: !0,
                    onEscapeKeyDown: F,
                    onOpenAutoFocus: e => {
                        _.current = !1, (O || Q.current) && e.preventDefault(), Q.current = !1
                    },
                    onCloseAutoFocus: e => {
                        if (null != M) e.preventDefault(), O || _.current || M.getReturnFocus()?.focus({
                            preventScroll: !0
                        });
                        else if (O) e.preventDefault();
                        else if (!_.current && null != L) {
                            let t = document.getElementById(L);
                            t?.focus({
                                preventScroll: !0
                            }), null != t && document.activeElement === t && e.preventDefault()
                        }
                    },
                    onInteractOutside: e => {
                        null != M && null != T && e.target instanceof Element && (M.anchor?.contains(e.target) || e.target.closest(`[aria-controls="${CSS.escape(T)}"]`)) && e.preventDefault(), e.target instanceof Node && D?.contains(e.target) && e.preventDefault(), U && b(e.target) && e.preventDefault(), e.defaultPrevented || (_.current = !0)
                    },
                    onFocusOutside: e => {
                        let t = e.detail.originalEvent.relatedTarget;
                        U && (null == t || b(t)) && "composer" === (0, d.m)(e.target) && e.preventDefault(), e.target instanceof Element && e.target.matches('[role="tabpanel"][data-app-shell-tab-panel-controller="right"]') && e.preventDefault()
                    },
                    onPointerDownOutside: x,
                    style: {
                        maxHeight: "none",
                        maxWidth: "none"
                    },
                    children: E
                }), w[18] = H, w[19] = E, w[20] = M, w[21] = D, w[22] = Z, w[23] = T, w[24] = R, w[25] = U, w[26] = I, w[27] = F, w[28] = V, w[29] = L, w[30] = O, w[31] = f) : f = w[31], w[32] !== J || w[33] !== f ? (v = (0, l.jsx)(J, {
                    children: f
                }), w[32] = J, w[33] = f, w[34] = v) : v = w[34], w[35] !== R || w[36] !== B || w[37] !== i || w[38] !== s || w[39] !== v ? (S = (0, l.jsxs)(m.a, {
                    open: R,
                    onOpenChange: B,
                    children: [i, s, v]
                }), w[35] = R, w[36] = B, w[37] = i, w[38] = s, w[39] = v, w[40] = S) : S = w[40], S
            }
        })
    }),
    BdYu: (function(e, t, n) {
        var l = n("QosV"),
            r = n("xs0G"),
            a = n("B7sF"),
            o = n("K45w"),
            i = n("jCHb"),
            s = n("kx7i"),
            c = n("Q840"),
            u = n("zd8w"),
            d = n("QcW8"),
            h = n("gbrq"),
            m = n("kl6F"),
            f = n("eGPX"),
            g = n("csXo"),
            p = n("w2yL"),
            v = n("KWzM"),
            x = n("GaCK");

        function y(e) {
            return e.isPopoverOpen ? {
                ...e,
                isPopoverOpen: !1
            } : e
        }

        function b(e, t, n, l, r, a, o) {
            return S({
                centeredPanelGap: o,
                isSummaryPanelPinned: t && (a ?? (0, h.u)(!0 === n ? e.get(h.F) : e.get(h.w, n), n)),
                floatingPanelWidth: r,
                mainContentTargetWidth: l
            })
        }

        function S(e) {
            let {
                centeredPanelGap: t,
                isSummaryPanelPinned: n,
                floatingPanelWidth: l,
                mainContentTargetWidth: r
            } = e, a = (0, p.c)(r, l, t);
            return null != l && "overlay" === a ? (0, p.b)({
                displayMode: (0, p.c)(r),
                isPinned: n
            }) : (0, p.b)({
                displayMode: a,
                isPinned: null != l || n,
                panelWidth: l
            })
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, r, a, y, w, P, C, E, M, D, T, R, A, I, k, F, B = (0, l.c)(77);
                B[0] !== e ? (t = void 0 === e ? {} : e, B[0] = e, B[1] = t) : t = B[1];
                let {
                    centeredPanelGap: L,
                    contentShiftResetKey: q,
                    controlledIsOpen: z,
                    floatingPanelWidth: H,
                    getCurrentPinStateKey: U,
                    isEnabled: O,
                    pane: j,
                    pinStateKey: N
                } = t, W = void 0 === O || O, K = void 0 === N || N, _ = (0, c.y)(m.a), Q = (0, c.z)(null == z && !0 === K ? h.F : null), V = (0, c.x)(null == z && !0 !== K ? h.w : null, !0 !== K && K);
                B[2] !== z || B[3] !== V || B[4] !== Q || B[5] !== K ? (n = z ?? (0, h.u)(!0 === K ? Q : V, K), B[2] = z, B[3] = V, B[4] = Q, B[5] = K, B[6] = n) : n = B[6];
                let $ = n,
                    G = (0, c.z)(h.c),
                    Z = (0, c.z)(d.A),
                    X = (0, c.z)(x.b),
                    Y = W && $,
                    J = H ?? 300,
                    ee = W && null == H && (z ?? (X.isPopoverOpen || "boolean" != typeof K && $)),
                    et = (0, c.z)(f.c),
                    {
                        targetWidth: en,
                        width: el
                    } = (0, g.a)(void 0 === j ? "chat" : j);
                B[7] !== L || B[8] !== H || B[9] !== Y || B[10] !== en ? (r = S({
                    centeredPanelGap: L,
                    isSummaryPanelPinned: Y,
                    floatingPanelWidth: H,
                    mainContentTargetWidth: en.get()
                }), B[7] = L, B[8] = H, B[9] = Y, B[10] = en, B[11] = r) : r = B[11];
                let er = (0, o.a)(r);
                B[12] !== en ? (a = e => en.on("change", e), B[12] = en, B[13] = a) : a = B[13], B[14] !== L || B[15] !== en || B[16] !== J ? (y = () => (0, p.c)(en.get(), J, L), B[14] = L, B[15] = en, B[16] = J, B[17] = y) : y = B[17], B[18] !== a || B[19] !== y ? (w = {
                    subscribe: a,
                    getSnapshot: y
                }, B[18] = a, B[19] = y, B[20] = w) : w = B[20];
                let ea = w,
                    eo = (0, u.useSyncExternalStore)(ea.subscribe, ea.getSnapshot, ea.getSnapshot),
                    ei = (0, u.useRef)(null);
                B[21] !== er ? (P = er.get(), B[21] = er, B[22] = P) : P = B[22], B[23] !== en ? (C = en.get(), B[23] = en, B[24] = C) : C = B[24], B[25] !== P || B[26] !== C ? (E = {
                    offset: P,
                    width: C
                }, B[25] = P, B[26] = C, B[27] = E) : E = B[27];
                let es = (0, u.useRef)(E),
                    ec = (0, u.useRef)(!1),
                    eu = (0, u.useRef)(q),
                    ed = (0, u.useRef)(G),
                    eh = (0, u.useRef)(Z),
                    em = Y && null == H;
                B[28] !== eo || B[29] !== ee || B[30] !== em ? (M = (0, p.a)({
                    displayMode: eo,
                    isPinned: em,
                    isPopoverOpen: ee
                }), B[28] = eo, B[29] = ee, B[30] = em, B[31] = M) : M = B[31];
                let ef = M;
                return B[32] !== L || B[33] !== er || B[34] !== q || B[35] !== z || B[36] !== H || B[37] !== U || B[38] !== Z || B[39] !== W || B[40] !== G || B[41] !== en || B[42] !== K || B[43] !== _ ? (D = () => {
                    let e = ed.current !== G,
                        t = eh.current !== Z;
                    if (!ec.current && eu.current === q && !e && !t) return;
                    ec.current = !1, eu.current = q, ed.current = G, eh.current = Z;
                    let n = b(_, W, U?.() ?? K, en.get(), H, z, L);
                    es.current = {
                        offset: n,
                        width: en.get()
                    }, ei.current?.(), er.jump(n)
                }, T = [L, er, q, z, H, U, Z, W, en, K, G, _], B[32] = L, B[33] = er, B[34] = q, B[35] = z, B[36] = H, B[37] = U, B[38] = Z, B[39] = W, B[40] = G, B[41] = en, B[42] = K, B[43] = _, B[44] = D, B[45] = T) : (D = B[44], T = B[45]), (0, u.useLayoutEffect)(D, T), B[46] !== L || B[47] !== el || B[48] !== er || B[49] !== z || B[50] !== H || B[51] !== U || B[52] !== W || B[53] !== en || B[54] !== K || B[55] !== _ || B[56] !== et ? (R = () => {
                    let e = (e, t) => {
                        let n = b(_, W, U?.() ?? K, e, H, z, L),
                            l = es.current,
                            r = er.get();
                        if (l.offset === n && (r === n || l.width === e && !t)) return;
                        if (es.current = {
                                offset: n,
                                width: e
                            }, ei.current?.(), t || 0 === e || r === n) return void er.jump(n);
                        let a = el.get();
                        if (a === e) {
                            let e = (0, i.a)(er, n, v.a),
                                t = document.activeViewTransition;
                            if (null != t) {
                                e.pause();
                                let n = () => e.play();
                                t.ready.then(n, n)
                            }
                            ei.current = () => e.stop();
                            return
                        }
                        let o = (0, s.a)([a, e], [r, n]),
                            c = el.on("change", e => {
                                let t = o(e);
                                er.set(t), t === n && queueMicrotask(c)
                            });
                        ei.current = c
                    };
                    return e(en.get(), et), en.on("change", t => {
                        e(t, et || 0 === en.getPrevious() || _.get(h.c) !== ed.current)
                    })
                }, B[46] = L, B[47] = el, B[48] = er, B[49] = z, B[50] = H, B[51] = U, B[52] = W, B[53] = en, B[54] = K, B[55] = _, B[56] = et, B[57] = R) : R = B[57], B[58] !== L || B[59] !== el || B[60] !== er || B[61] !== z || B[62] !== H || B[63] !== U || B[64] !== W || B[65] !== Y || B[66] !== en || B[67] !== K || B[68] !== _ || B[69] !== et ? (A = [L, el, er, z, H, U, W, Y, en, K, _, et], B[58] = L, B[59] = el, B[60] = er, B[61] = z, B[62] = H, B[63] = U, B[64] = W, B[65] = Y, B[66] = en, B[67] = K, B[68] = _, B[69] = et, B[70] = A) : A = B[70], (0, u.useLayoutEffect)(R, A), B[71] === Symbol.for("react.memo_cache_sentinel") ? (I = () => () => {
                    ec.current = !0, ei.current?.()
                }, k = [], B[71] = I, B[72] = k) : (I = B[71], k = B[72]), (0, u.useLayoutEffect)(I, k), B[73] !== er || B[74] !== eo || B[75] !== ef ? (F = {
                    contentShift: er,
                    displayMode: eo,
                    ...ef
                }, B[73] = er, B[74] = eo, B[75] = ef, B[76] = F) : F = B[76], F
            },
            b: function(e, t) {
                let n, o, i, s, d, m, f = (0, l.c)(15),
                    v = void 0 !== t && t,
                    b = (0, c.z)(h.c),
                    S = (0, c.z)(h.l),
                    {
                        targetWidth: w
                    } = (0, g.a)();
                f[0] !== v || f[1] !== w || f[2] !== e ? (n = () => {
                    var t, n;
                    t = e, n = v ? "overlay" : (0, p.c)(w.get()), t.set(x.b, e => {
                        let t = "overlay" === n && e.isPopoverOpen;
                        return e.displayMode === n && e.isPopoverOpen === t ? e : {
                            displayMode: n,
                            isPopoverOpen: t
                        }
                    })
                }, f[0] = v, f[1] = w, f[2] = e, f[3] = n) : n = f[3];
                let P = n;
                f[4] !== P ? (o = () => {
                    r.b.update(P)
                }, f[4] = P, f[5] = o) : o = f[5], (0, a.a)(w, "change", o), f[6] !== P ? (i = () => (P(), () => (0, r.a)(P)), f[6] = P, f[7] = i) : i = f[7], f[8] !== b || f[9] !== S || f[10] !== P ? (s = [b, S, P], f[8] = b, f[9] = S, f[10] = P, f[11] = s) : s = f[11], (0, u.useLayoutEffect)(i, s), f[12] !== e ? (d = () => () => {
                    e.set(x.b, y)
                }, m = [e], f[12] = e, f[13] = d, f[14] = m) : (d = f[13], m = f[14]), (0, u.useLayoutEffect)(d, m)
            }
        })
    }),
    csXo: (function(e, t, n) {
        var l = n("QosV"),
            r = n("K45w"),
            a = n("Q840"),
            o = n("zd8w"),
            i = n("I7bK"),
            s = n("pZMh");
        n.d(t, {}, {
            a: function(e) {
                let t, n = (0, l.c)(8),
                    c = void 0 === e ? "chat" : e,
                    u = (0, o.useContext)(i.c),
                    d = (0, r.a)(0),
                    h = "chat" === c && u?.hasPrimaryPane === !0,
                    m = (0, a.z)(!!h && s.m);
                if ("content" === c || h) {
                    let e, t = u?.secondaryPaneLayout,
                        l = "content" === c || m,
                        r = l ? t?.element : null,
                        a = l ? t?.targetWidth ?? d : d,
                        o = t?.width ?? d;
                    return n[0] !== r || n[1] !== a || n[2] !== o ? (e = {
                        element: r,
                        targetWidth: a,
                        width: o
                    }, n[0] = r, n[1] = a, n[2] = o, n[3] = e) : e = n[3], e
                }
                let f = u?.mainContentTargetWidth ?? d,
                    g = u?.isContentFullWidth ? null : void 0,
                    p = u?.mainPaneWidth ?? f;
                return n[4] !== g || n[5] !== p || n[6] !== f ? (t = {
                    element: g,
                    targetWidth: f,
                    width: p
                }, n[4] = g, n[5] = p, n[6] = f, n[7] = t) : t = n[7], t
            }
        })
    })
};