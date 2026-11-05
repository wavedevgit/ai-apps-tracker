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
                if (d.test(e.value)) {
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
        var m = n("agQa"),
            g = n("QxH2"),
            f = n("h8aU");

        function p(e) {
            let {
                contextId: t,
                getTurns: n,
                hydratePersistedMatch: r,
                revealUnrenderedMatches: i = !1,
                searchPersisted: s,
                searchMath: c = !1,
                scrollAdapter: d
            } = e;
            return {
                domain: "conversation",
                contextId: t,
                async search(e, t) {
                    var r, i;
                    let d, g, p = await async function(e, t, n, r) {
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
                        let d = null == i ? null : await (0, m.a)({
                            query: i,
                            texts: s.map(e => e.text),
                            mathTexts: s.map(e => null != e.equationIndex),
                            maxMatches: 250
                        }, r);
                        if (d?.error) return {
                            ...c,
                            error: d.error
                        };
                        c.totalMatches = d?.totalMatches ?? 0;
                        let g = new Map;
                        for (let [t, n] of s.entries()) {
                            let r = (0, o.c)(n.turnKey, n.unitId),
                                i = g.get(r) ?? 0,
                                {
                                    offsets: s,
                                    totalMatches: m
                                } = null != d ? {
                                    offsets: d.offsets[t] ?? [],
                                    totalMatches: 0
                                } : (null == n.equationIndex ? f.a : function(e, t, n) {
                                    let r = t.trim(),
                                        l = [];
                                    if (!r) return {
                                        offsets: l,
                                        totalMatches: 0
                                    };
                                    let o = h(e),
                                        i = h(u.get(r) ?? r);
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
                            for (let [t, r] of(c.totalMatches += m, s.entries())) {
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
                                    id: (0, o.b)(l),
                                    ordinal: c.matches.length + 1,
                                    location: l
                                })
                            }
                            null == n.equationIndex && g.set(r, i + s.length)
                        }
                        return c.isCapped = c.totalMatches > c.matches.length, c
                    }(e, n(), c, t?.signal);
                    if (c || null == s) return p;
                    let x = await s(e, t);
                    return null == x ? p : (r = p, i = x, d = new Map(r.matches.map(e => [e.id, e])), g = l()([...i.matches.map(e => d.get(e.id) ?? e), ...r.matches], "id").map((e, t) => ({
                        ...e,
                        ordinal: t + 1
                    })), {
                        ...r,
                        matches: g,
                        totalMatches: Math.max(g.length, r.totalMatches, i.totalMatches),
                        isCapped: r.isCapped || i.isCapped
                    })
                },
                async ensureVisible(e, n) {
                    if ("conversation" !== e.domain || e.contextId !== t || null != e.turnCursor && null != r && (!await r(e, n) || n?.signal?.aborted)) return;
                    let l = null != e.turnCursor,
                        a = d.getTurnContainer(e.turnKey),
                        u = (0, o.b)(e),
                        s = i && null != a && null == (0, o.g)({
                            container: a,
                            matchId: u,
                            includeShadowRoots: !1
                        });
                    if (null == a || l || s) {
                        if (n?.signal?.aborted || (n?.signal == null ? await d.scrollToTurn(e.turnKey) : await d.scrollToTurn(e.turnKey, {
                                signal: n.signal
                            }), n?.signal?.aborted)) return;
                        a = d.getTurnContainer(e.turnKey)
                    }
                    null != a && await (0, g.b)({
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
            let t, c, f, p, x, y, P, v, w, b, S, E = (0, r.c)(20),
                {
                    containerRef: C,
                    contextId: B,
                    onContentChange: I
                } = e,
                M = (0, l.z)(s.d),
                H = (0, l.z)(s.g),
                R = M?.contextId === B ? M : null,
                K = null == R ? null : H?.id ?? null,
                {
                    schedule: T,
                    cancel: F
                } = (v = (0, r.c)(5), w = (0, o.useRef)(null), 80 !== v[0] ? (x = e => {
                    null == w.current && (w.current = window.setTimeout(() => {
                        w.current = null, e()
                    }, 80))
                }, v[0] = 80, v[1] = x) : x = v[1], b = x, v[2] === Symbol.for("react.memo_cache_sentinel") ? (y = () => {
                    null != w.current && (window.clearTimeout(w.current), w.current = null)
                }, v[2] = y) : y = v[2], S = y, v[3] !== b ? (P = {
                    schedule: b,
                    cancel: S
                }, v[3] = b, v[4] = P) : P = v[4], P);
            E[0] !== I ? (t = () => I?.(), E[0] = I, E[1] = t) : t = E[1];
            let D = (0, o.useEffectEvent)(t);
            E[2] !== R || E[3] !== K || E[4] !== C ? (c = async (e, t) => {
                let r = C.current;
                if (null == r || ((0, a.a)(r, {
                        includeShadowRoots: !1
                    }), t.takeRecords(), null == R)) return;
                let l = (0, i.a)(R.matches),
                    o = Array.from(r.querySelectorAll("[data-content-search-unit-key]")).flatMap(e => {
                        let t = l.get(e.dataset.contentSearchUnitKey ?? "");
                        return null == t ? [] : [{
                            element: e,
                            matches: t
                        }]
                    }),
                    s = (e, t) => {
                        t.forEach(t => {
                            (0, a.l)({
                                element: t,
                                matchId: e
                            }), (0, a.k)(t, e === K)
                        })
                    },
                    c = o.map(g),
                    f = e => {
                        e.forEach((e, t) => e.forEach((e, n) => s(c[t].matches[n].id, e)))
                    };
                if (!R.searchMath) {
                    f(c.map(e => {
                        let {
                            element: t,
                            matches: n
                        } = e;
                        return (0, a.i)({
                            target: t,
                            query: R.query,
                            maxMatches: n.length,
                            includeShadowRoots: !1
                        }).matches
                    })), t.takeRecords();
                    return
                }
                let p = [];
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
                    0 !== l.length && p.push((async function(e, t) {
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
                            g = new Map,
                            f = n => {
                                let r = l;
                                for (let e of [...n].reverse()) {
                                    let {
                                        start: n,
                                        end: l
                                    } = t[e];
                                    r = `${r.slice(0,n)}{\\textcolor{${h[e].hex}}{${r.slice(n,l)}}}${r.slice(l)}`
                                }
                                try {
                                    d.innerHTML = o.renderToString(r, {
                                        displayMode: null != e.querySelector(".katex-display"),
                                        strict: "ignore",
                                        output: "html"
                                    })
                                } catch {
                                    return !1
                                }
                                let a = u(d),
                                    s = a.length === i.length && a.every((e, t) => {
                                        let {
                                            text: n
                                        } = e;
                                        return n === i[t].text
                                    });
                                return a.forEach((e, t) => {
                                    let n = m.get(e.color);
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
                                    g.set(r, n)
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
                                let t = g.get(e);
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
                                let i = (0, a.e)();
                                return l.surroundContents(i), [i]
                            }(t));
                            return o
                        }
                    })(e, l.map(m)).then(e => () => e().forEach((e, t) => s(l[t].id, e))))
                });
                let [x, y] = await Promise.all([(0, a.j)(c.map(h), R.query, R.regex, e), Promise.all(p)]);
                e.aborted || (f(x()), y.forEach(d), t.takeRecords())
            }, E[2] = R, E[3] = K, E[4] = C, E[5] = c) : c = E[5];
            let L = (0, o.useEffectEvent)(c);
            E[6] !== R?.runId || E[7] !== L || E[8] !== F || E[9] !== C || E[10] !== D || E[11] !== T ? (f = () => {
                let e = C.current;
                if (null == e) return;
                let t = null,
                    n = () => {
                        t?.abort(), L((t = new AbortController).signal, r)
                    },
                    r = new MutationObserver(e => {
                        (0, a.m)(e) && (t?.abort(), T(() => {
                            D(), n()
                        }))
                    });
                return R?.runId == null ? void n() : (r.observe(e, {
                    childList: !0,
                    subtree: !0,
                    characterData: !0,
                    attributeFilter: ["hidden"]
                }), n(), () => {
                    r.disconnect(), t?.abort(), F(), (0, a.a)(e, {
                        includeShadowRoots: !1
                    })
                })
            }, E[6] = R?.runId, E[7] = L, E[8] = F, E[9] = C, E[10] = D, E[11] = T, E[12] = f) : f = E[12];
            let k = R?.runId;
            E[13] !== K || E[14] !== F || E[15] !== C || E[16] !== B || E[17] !== T || E[18] !== k ? (p = [k, K, F, C, B, T], E[13] = K, E[14] = F, E[15] = C, E[16] = B, E[17] = T, E[18] = k, E[19] = p) : p = E[19], (0, o.useEffect)(f, p)
        }

        function d(e) {
            return e()
        }

        function h(e) {
            let {
                element: t,
                matches: n
            } = e;
            return {
                element: t,
                maxMatches: n.length
            }
        }

        function m(e) {
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
                let t, n, i, u, s, c, d, h, m, g = (0, l.c)(15),
                    {
                        onNavigate: f
                    } = e,
                    p = (0, o.useRef)(null),
                    x = (0, o.useRef)(null),
                    [y, P] = (0, o.useState)(!1);
                return g[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => {
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
                }, n = [], g[0] = t, g[1] = n) : (t = g[0], n = g[1]), (0, o.useEffect)(t, n), g[2] === Symbol.for("react.memo_cache_sentinel") ? (i = () => x.current?.abort(), g[2] = i) : i = g[2], g[3] !== f ? (u = e => {
                    x.current?.abort();
                    let t = e.currentTarget;
                    t.tabIndex = -1;
                    let n = new AbortController;
                    x.current = n, P(!1), f(n.signal).then(e => {
                        !n.signal.aborted && t.isConnected && t.ownerDocument.activeElement === t && (e?.isConnected ? e.focus({
                            preventScroll: !0
                        }) : P(!0))
                    })
                }, g[3] = f, g[4] = u) : u = g[4], g[5] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, r.jsx)(a.a, {
                    id: "codex.conversation.latestResponse",
                    defaultMessage: "Latest response",
                    description: "Invisible heading before the composer; focusing it moves to the newest assistant response"
                }), g[5] = s) : s = g[5], g[6] !== u ? (c = (0, r.jsx)("h4", {
                    ref: p,
                    className: "sr-only m-0 select-none",
                    tabIndex: 0,
                    onBlur: i,
                    onFocus: u,
                    children: s
                }), g[6] = u, g[7] = c) : c = g[7], g[8] !== y ? (d = y ? (0, r.jsx)(a.a, {
                    id: "codex.conversation.latestResponseUnavailable",
                    defaultMessage: "No response available",
                    description: "Screen-reader announcement when navigation to the latest assistant response finds no response in the conversation"
                }) : null, g[8] = y, g[9] = d) : d = g[9], g[10] !== d ? (h = (0, r.jsx)("span", {
                    className: "sr-only m-0",
                    role: "status",
                    children: d
                }), g[10] = d, g[11] = h) : h = g[11], g[12] !== c || g[13] !== h ? (m = (0, r.jsxs)(r.Fragment, {
                    children: [c, h]
                }), g[12] = c, g[13] = h, g[14] = m) : m = g[14], m
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
            a: () => E
        });
        var r = n("ABep"),
            l = n("QosV"),
            o = n("on57"),
            a = n("BolX"),
            i = n("zd8w"),
            u = n("v7qY"),
            s = n("wD9O"),
            c = n("zm5q"),
            d = n("f4Vb"),
            h = n("lsfk"),
            m = n("g3o5"),
            g = n("bIvi"),
            f = n("hTLy"),
            p = n.n(f),
            x = n("R9dK"),
            y = n.n(x);

        function P(e) {
            let {
                collapseEmptyRows: t = !1,
                entries: n,
                gapPx: r,
                measuredHeightsByKey: l,
                pixelScale: o
            } = e, a = new Set, i = [], u = [], s = [], c = new Map, d = [], h = 0;
            for (let [e, m] of n.entries()) {
                let n = m.turnKey,
                    g = Math.max(m.minHeightPx ?? 0, l[n] ?? m.estimatedHeightPx ?? 280);
                null != o && (g = Math.round(g * o) / o);
                let f = (t ? h > 0 && g > 0 : e > 0) ? m.gapBeforePx ?? r : 0;
                null != o && (f = Math.round(f * o) / o), h += f, i.push(f), "gap" === m.type && a.add(n), c.set(n, e), d.push(n), s.push(h), u.push(g), h += g
            }
            return {
                bottomOffsetsPx: s.map((e, t) => h - e - (u[t] ?? 0)),
                collapseEmptyRows: t,
                gapKeys: a,
                gapsBeforePx: i,
                heightsPx: u,
                topOffsetsPx: s,
                totalHeightPx: h,
                turnIndexByKey: c,
                turnKeys: d
            }
        }

        function v(e) {
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
                a = Math.min(o + Math.max(0, l), n.totalHeightPx),
                i = n.collapseEmptyRows && a === n.totalHeightPx ? 0 : function(e, t) {
                    let n = 0,
                        r = e.length;
                    for (; n < r;) {
                        let l = Math.floor((n + r) / 2);
                        (e[l] ?? 0) < t ? r = l : n = l + 1
                    }
                    return n
                }(n.bottomOffsetsPx, a),
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
                startIndex: Math.max(0, i - r),
                endIndex: Math.min(n.turnKeys.length, Math.max(u, i + 1) + r)
            }
        }

        function w(e) {
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

        function b(e) {
            let {
                layout: t,
                turnKey: n,
                viewportHeightPx: r
            } = e, l = t.turnIndexByKey.get(n);
            return null == l ? null : Math.max(0, (t.bottomOffsetsPx[l] ?? 0) - r / 2 + (t.heightsPx[l] ?? 0) / 2)
        }
        let S = {};

        function E(e) {
            let t, n, f, x, E, D, L, k, q, O, A, z, U, _, N, j, V, W, $, Q, G, X, Y, Z, J, ee, et, en, er, el, eo, ea, ei, eu, es, ec, ed, eh, em, eg, ef, ep, ex, ey, eP, ev, ew, eb, eS, eE, eC, eB, eI, eM, eH, eR, eK, eT, eF, eD, eL, ek, eq, eO, eA, ez, eU, e_, eN = (0, l.c)(251),
                {
                    collapseEmptyRows: ej,
                    entries: eV,
                    RowComponent: eW,
                    onApiChange: e$,
                    onVisibleContentReady: eQ,
                    className: eG,
                    gapPx: eX,
                    getBottomScrollPaddingPx: eY,
                    onLatestTurnHeightChange: eZ,
                    preserveMeasuredTurnViewport: eJ,
                    preserveUnderfilledViewport: e0,
                    getPendingRestoreScrollDistanceFromBottomPx: e1,
                    restoreScrollDistanceFromBottomPx: e2,
                    initialRestoreState: e4,
                    latestTurnFooter: e3,
                    latestTurnFooterKey: e5,
                    onRestoreStateChange: e6,
                    onViewportChange: e8,
                    onHistoryRetentionBoundaryChange: e7,
                    latestTurnSynchronousMeasurementKey: e9,
                    layoutReadyTurnKey: te,
                    onTurnLayoutReady: tt,
                    synchronousMeasurementTurnKey: tn,
                    retainedTurnKeys: tr,
                    skipEmptyResizeMeasurements: tl
                } = e,
                to = void 0 !== ej && ej,
                ta = void 0 === eX ? 12 : eX,
                ti = void 0 !== eJ && eJ,
                tu = void 0 !== e0 && e0,
                ts = void 0 !== tl && tl,
                tc = (0, a.z)(m.b);
            eN[0] !== tr ? (t = tr ?? [], eN[0] = tr, eN[1] = t) : t = eN[1];
            let td = [...t, ...tc],
                [th, tm] = (0, i.useState)(null);
            eN[2] !== th || eN[3] !== tu || eN[4] !== eV ? (n = eV.map(e => ({
                turnKey: e.turnKey,
                gapBeforePx: e.gapBeforePx,
                estimatedHeightPx: e.estimatedHeightPx,
                minHeightPx: tu && th?.turnKey === e.turnKey && e.turnKey === eV.at(-1)?.turnKey ? Math.max(e.minHeightPx ?? 0, th.viewportHeightPx - th.heightOutsideTurnPx) : e.minHeightPx,
                type: e.type
            })), eN[2] = th, eN[3] = tu, eN[4] = eV, eN[5] = n) : n = eN[5];
            let tg = n,
                tf = (0, h.b)(),
                tp = (0, s.c)(),
                tx = tp * (globalThis.devicePixelRatio ?? 1),
                ty = e4?.turnHeightsByKey ?? S,
                [tP, tv] = (0, i.useState)(ty),
                [tw, tb] = (0, i.useState)(null);
            eN[6] !== to || eN[7] !== tg || eN[8] !== ta || eN[9] !== tx || eN[10] !== tP ? (f = P({
                collapseEmptyRows: to,
                entries: tg,
                gapPx: ta,
                measuredHeightsByKey: tP,
                pixelScale: tx
            }), eN[6] = to, eN[7] = tg, eN[8] = ta, eN[9] = tx, eN[10] = tP, eN[11] = f) : f = eN[11];
            let tS = f;
            eN[12] !== eY || eN[13] !== e4 || eN[14] !== tS || eN[15] !== tf ? (x = () => {
                var e, t, n;
                let r, l, o = K(eY);
                return e = tS, t = T(tf.getLastScrollDistanceFromBottomPx(), o), n = e4, l = v({
                    distanceFromBottomPx: r = Math.min(t, e.totalHeightPx),
                    layout: e,
                    overscanCount: 2,
                    viewportHeightPx: 800
                }), {
                    distanceFromBottomPx: r,
                    renderedRange: (n?.renderedWindow == null ? null : w({
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
            }, eN[12] = eY, eN[13] = e4, eN[14] = tS, eN[15] = tf, eN[16] = x) : x = eN[16];
            let [tE, tC] = (0, i.useState)(x), [tB] = (0, i.useState)(B), tI = (0, i.useSyncExternalStore)(tB.subscribe, tB.getSnapshot, tB.getSnapshot), tM = (0, i.useRef)(null), tH = (0, i.useRef)(tP), tR = (0, i.useRef)(tE), tK = (0, i.useRef)(null);
            eN[17] === Symbol.for("react.memo_cache_sentinel") ? (E = new Map, eN[17] = E) : E = eN[17];
            let tT = (0, i.useRef)(E);
            eN[18] === Symbol.for("react.memo_cache_sentinel") ? (D = new Map, eN[18] = D) : D = eN[18];
            let tF = (0, i.useRef)(D);
            eN[19] === Symbol.for("react.memo_cache_sentinel") ? (L = new WeakSet, eN[19] = L) : L = eN[19];
            let tD = (0, i.useRef)(L);
            eN[20] === Symbol.for("react.memo_cache_sentinel") ? (k = new Map, eN[20] = k) : k = eN[20];
            let tL = (0, i.useRef)(k);
            eN[21] === Symbol.for("react.memo_cache_sentinel") ? (q = new Map, eN[21] = q) : q = eN[21];
            let tk = (0, i.useRef)(q),
                tq = (0, i.useRef)(null),
                tO = (0, i.useRef)(null),
                tA = (0, i.useRef)(0),
                tz = (0, i.useRef)(null),
                [tU, t_] = (0, i.useState)(null),
                tN = (0, i.useRef)(!1),
                tj = (0, i.useRef)(null),
                tV = (0, i.useRef)(tS),
                tW = (0, i.useRef)(tS),
                t$ = (0, i.useRef)(tS),
                tQ = (0, i.useRef)(null);
            eN[22] !== tP ? (O = () => {
                tP !== tH.current && tv(tH.current)
            }, eN[22] = tP, eN[23] = O) : O = eN[23], eN[24] !== to || eN[25] !== tg || eN[26] !== ta || eN[27] !== tx || eN[28] !== tP ? (A = [to, tg, ta, tx, tP], eN[24] = to, eN[25] = tg, eN[26] = ta, eN[27] = tx, eN[28] = tP, eN[29] = A) : A = eN[29], (0, i.useLayoutEffect)(O, A), eN[30] === Symbol.for("react.memo_cache_sentinel") ? (z = e => {
                tM.current = e, tb(e)
            }, eN[30] = z) : z = eN[30];
            let tG = (0, g.a)(z);
            eN[31] !== to || eN[32] !== tg || eN[33] !== ta || eN[34] !== tS || eN[35] !== tx || eN[36] !== tP ? (U = () => {
                if (tW.current !== tS) {
                    tW.current = tS, tV.current = tP === tH.current ? tS : P({
                        collapseEmptyRows: to,
                        entries: tg,
                        gapPx: ta,
                        measuredHeightsByKey: tH.current,
                        pixelScale: tx
                    });
                    let e = tM.current;
                    null != e && (e.style.height = `${tV.current.totalHeightPx}px`)
                }
                return tV.current
            }, eN[31] = to, eN[32] = tg, eN[33] = ta, eN[34] = tS, eN[35] = tx, eN[36] = tP, eN[37] = U) : U = eN[37];
            let tX = (0, g.a)(U);
            eN[38] !== eY || eN[39] !== tf || eN[40] !== tp ? (_ = e => {
                let t = tf.getScrollElement(),
                    n = tM.current,
                    r = t?.firstElementChild;
                return null == n || null == r ? e - K(eY) : e - (0, s.b)(r.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, tp)
            }, eN[38] = eY, eN[39] = tf, eN[40] = tp, eN[41] = _) : _ = eN[41];
            let tY = (0, g.a)(_),
                tZ = tE.renderedRange;
            if (null != tI) {
                let e = b({
                    layout: tS,
                    turnKey: tI.turnKey,
                    viewportHeightPx: tE.viewportHeightPx
                });
                null != e && (tZ = v({
                    distanceFromBottomPx: e,
                    layout: tS,
                    overscanCount: 2,
                    viewportHeightPx: tE.viewportHeightPx
                }))
            } else if (!R(tE.turnKeys, tS.turnKeys)) {
                let e = tE.turnKeys[tE.renderedRange.startIndex];
                null != e && (tZ = w({
                    anchorKey: e,
                    layout: tS,
                    previousRange: tZ
                }) ?? v({
                    distanceFromBottomPx: tE.distanceFromBottomPx,
                    layout: tS,
                    overscanCount: 2,
                    viewportHeightPx: tE.viewportHeightPx
                }))
            }
            eN[42] !== e2 ? (N = () => {
                null == tq.current && e2?.()
            }, eN[42] = e2, eN[43] = N) : N = eN[43];
            let tJ = (0, g.a)(N);
            eN[44] === Symbol.for("react.memo_cache_sentinel") ? (j = () => {
                null != tj.current && (window.cancelAnimationFrame(tj.current), tj.current = null)
            }, eN[44] = j) : j = eN[44];
            let t0 = (0, g.a)(j);
            eN[45] !== tg || eN[46] !== eQ || eN[47] !== tJ ? (V = () => {
                null == eQ || tN.current || null != tj.current || null == tM.current || tg.length > 0 && 0 === tF.current.size || (tj.current = window.requestAnimationFrame(() => {
                    tj.current = window.requestAnimationFrame(() => {
                        tj.current = null, tN.current || null == tM.current || tg.length > 0 && 0 === tF.current.size || (tN.current = !0, tJ(), eQ())
                    })
                }))
            }, eN[45] = tg, eN[46] = eQ, eN[47] = tJ, eN[48] = V) : V = eN[48];
            let t1 = (0, g.a)(V),
                t2 = eV.slice(tZ.startIndex, tZ.endIndex).map((e, t) => ({
                    entry: e,
                    turnIndex: tZ.startIndex + t
                }));
            for (let e of new Set(td)) {
                let t = tS.turnIndexByKey.get(e);
                if (null == t || t >= tZ.startIndex && t < tZ.endIndex) continue;
                let n = eV[t];
                null != n && t2.push({
                    entry: n,
                    turnIndex: t
                })
            }
            t2.sort(C);
            let t4 = null == e7 ? null : function(e, t, n, r) {
                    let {
                        startIndex: l,
                        endIndex: o
                    } = v({
                        distanceFromBottomPx: 0,
                        layout: n,
                        overscanCount: 0,
                        viewportHeightPx: r
                    }), a = 1 / 0, i = null, u = t => {
                        let n = e[t];
                        if ("gap" === n.type) return !1;
                        let r = null;
                        return "sourceTurnId" in n && "string" == typeof n.sourceTurnId ? r = n.sourceTurnId : "turnId" in n && "string" == typeof n.turnId && (r = n.turnId), null != r && (t < a && (a = t, i = {
                            oldestProtectedTurnId: r,
                            firstProtectedItemId: "turnStatus" in n && "inProgress" === n.turnStatus && "turnItemIds" in n && Array.isArray(n.turnItemIds) ? n.turnItemIds.at(-500) ?? null : null
                        }), !0)
                    };
                    for (let e = l; e < o; e++)
                        if (!u(e)) return null;
                    for (let e of t ?? []) {
                        let t = n.turnIndexByKey.get(e);
                        if (null != t && !u(t)) return null
                    }
                    return i
                }(eV, td, tS, tE.viewportHeightPx + 24),
                t3 = (0, g.a)(e => {
                    e7?.(e > 24 || null != tB.getSnapshot() ? null : t4)
                });
            eN[49] !== t3 || eN[50] !== tf ? (W = () => {
                t3(tf.getLastScrollDistanceFromBottomPx())
            }, eN[49] = t3, eN[50] = tf, eN[51] = W) : W = eN[51];
            let t5 = t4?.oldestProtectedTurnId,
                t6 = t4?.firstProtectedItemId;
            eN[52] !== e7 || eN[53] !== tI || eN[54] !== t3 || eN[55] !== tf || eN[56] !== t5 || eN[57] !== t6 ? ($ = [t5, t6, e7, tI, t3, tf], eN[52] = e7, eN[53] = tI, eN[54] = t3, eN[55] = tf, eN[56] = t5, eN[57] = t6, eN[58] = $) : $ = eN[58], (0, i.useLayoutEffect)(W, $), eN[59] !== te || eN[60] !== tt || eN[61] !== tf ? (Q = () => {
                if (null == te || null == tt || null != tq.current || tL.current.size > 0) return;
                let e = tf.getScrollElement(),
                    t = tF.current.get(te);
                null != e && !(e.clientHeight <= 0) && null != t && tD.current.has(t) && !((tH.current[te] ?? 0) <= 0) && tt(te, t)
            }, eN[59] = te, eN[60] = tt, eN[61] = tf, eN[62] = Q) : Q = eN[62];
            let t8 = (0, g.a)(Q);
            eN[63] !== eY || eN[64] !== eZ || eN[65] !== tJ || eN[66] !== tf ? (G = e => {
                let t = K(eY);
                null != e.latestTurnHeightChange && eZ?.(e.latestTurnHeightChange), e.restoreScrollDistanceFromBottom ? tJ() : null != e.scrollDistanceFromBottomPx && tf.compensateScrollToDistanceFromBottomPx(e.scrollDistanceFromBottomPx + K(eY) - t), e.afterMeasure?.()
            }, eN[63] = eY, eN[64] = eZ, eN[65] = tJ, eN[66] = tf, eN[67] = G) : G = eN[67];
            let t7 = (0, g.a)(G);
            eN[68] !== tX ? (X = (e, t) => {
                if (null != tq.current || t <= 0) return;
                let n = tR.current,
                    r = M({
                        current: n,
                        distanceFromBottomPx: e,
                        layout: tX(),
                        viewportHeightPx: t
                    });
                r === n || (tR.current = r, r.renderedRange.startIndex === n.renderedRange.startIndex && r.renderedRange.endIndex === n.renderedRange.endIndex && R(r.turnKeys, n.turnKeys) || tC(r))
            }, eN[68] = tX, eN[69] = X) : X = eN[69];
            let t9 = (0, g.a)(X);
            eN[70] !== e7 ? (Y = () => () => e7?.(void 0), Z = [e7], eN[70] = e7, eN[71] = Y, eN[72] = Z) : (Y = eN[71], Z = eN[72]), (0, i.useLayoutEffect)(Y, Z), eN[73] !== tX || eN[74] !== e8 ? (J = (e, t, n) => {
                if (null == e8) return;
                let r = tX(),
                    l = Math.max(0, Math.min(r.totalHeightPx, r.totalHeightPx - e)),
                    o = Math.max(0, l - t);
                e8({
                    viewportEndPx: l,
                    viewportStartPx: o
                }, n)
            }, eN[73] = tX, eN[74] = e8, eN[75] = J) : J = eN[75];
            let ne = (0, g.a)(J);
            eN[76] !== tB ? (ee = e => {
                tB.getSnapshot() === e && tB.replace(null)
            }, eN[76] = tB, eN[77] = ee) : ee = eN[77];
            let nt = (0, g.a)(ee);
            eN[78] !== e7 || eN[79] !== tB ? (et = (e, t, n) => n?.signal?.aborted ? Promise.resolve() : (e7?.(null), new Promise(r => {
                let l = () => {
                        tB.getSnapshot() === o && tB.replace(null)
                    },
                    o = {
                        align: n?.align ?? "center",
                        complete: () => {
                            n?.signal?.removeEventListener("abort", l), r()
                        },
                        getTargetElement: t,
                        turnKey: e
                    };
                tC(tR.current), tB.replace(o), n?.signal?.addEventListener("abort", l, {
                    once: !0
                })
            })), eN[78] = e7, eN[79] = tB, eN[80] = et) : et = eN[80];
            let nn = (0, g.a)(et);
            eN[81] !== tX || eN[82] !== eV ? (en = e => {
                let {
                    viewportStartPx: t,
                    viewportEndPx: n
                } = e;
                return function(e, t, n, r) {
                    let {
                        topOffsetsPx: l,
                        heightsPx: o
                    } = t, a = Math.max(0, y()(l, n) - 1);
                    return (l[a] ?? 0) + (o[a] ?? 0) <= n && a++, e.slice(a, p()(l, r))
                }(eV, tX(), t, n)
            }, eN[81] = tX, eN[82] = eV, eN[83] = en) : en = eN[83];
            let nr = (0, g.a)(en);
            eN[84] !== tX ? (er = e => {
                let t = tX(),
                    n = t.turnIndexByKey.get(e);
                if (null == n) return null;
                let r = t.topOffsetsPx[n],
                    l = t.heightsPx[n];
                return null == r || null == l ? null : {
                    endPx: r + l,
                    startPx: r
                }
            }, eN[84] = tX, eN[85] = er) : er = eN[85];
            let nl = (0, g.a)(er);
            eN[86] !== eZ || eN[87] !== tf || eN[88] !== tp ? (el = () => {
                let e = 0,
                    t = null;
                for (let [n, r] of tk.current) e += r, (null == t || t.compareDocumentPosition(n) === Node.DOCUMENT_POSITION_FOLLOWING) && (t = n);
                null != t && eZ?.({
                    heightDeltaPx: null,
                    heightPx: null,
                    bottomViewportOverflowPx: tf.isNativeEndSnapFollowing?.() ? 0 : F({
                        scrollElement: tf.getScrollElement(),
                        turnElement: t,
                        windowZoom: tp
                    }),
                    turnElement: t,
                    followContentHeightPx: e
                })
            }, eN[86] = eZ, eN[87] = tf, eN[88] = tp, eN[89] = el) : el = eN[89];
            let no = (0, g.a)(el);
            eN[90] !== to || eN[91] !== t7 || eN[92] !== tg || eN[93] !== ta || eN[94] !== eY || eN[95] !== tX || eN[96] !== tY || eN[97] !== e1 || eN[98] !== tx || eN[99] !== ti || eN[100] !== tf || eN[101] !== tB || eN[102] !== tp ? (eo = (e, t, n) => {
                var r;
                let l = tX(),
                    o = tf.getScrollElement();
                if (o?.getClientRects().length === 0) return !1;
                let a = tq.current,
                    i = tH.current,
                    c = i,
                    d = 0,
                    h = !1,
                    m = null,
                    g = 0,
                    f = !1,
                    p = !1,
                    x = "controller" === (void 0 === n ? "measured" : n) ? tf.getLastScrollDistanceFromBottomPx({
                        includePendingUserScroll: !0
                    }) : function(e, t) {
                        let n = e.getScrollElement(),
                            r = n?.firstElementChild;
                        if (null == n || null == r || 0 === n.clientHeight) return e.getLastScrollDistanceFromBottomPx();
                        let l = r.getBoundingClientRect();
                        if (0 === l.height) return e.getLastScrollDistanceFromBottomPx();
                        let o = n.scrollTop;
                        return Math.max(0, Math.round(o + (0, s.b)(l.bottom - n.getBoundingClientRect().top, t)) - n.clientHeight) - o
                    }(tf, tp),
                    y = K(eY),
                    v = T(x, y),
                    w = ti ? null : e1?.() ?? null,
                    b = null == a ? v : tR.current.distanceFromBottomPx,
                    S = b;
                if (ti && null == tB.getSnapshot() && e1?.() == null) {
                    let e = R(t$.current.turnKeys, l.turnKeys) ? l : t$.current,
                        t = e === l ? a?.scrollDistanceFromBottomPx ?? x : x,
                        n = H({
                            distanceFromBottomPx: tY(t),
                            preferLatestVisibleRow: t < y,
                            layout: e,
                            measuredHeightsByKey: i,
                            nextLayout: l,
                            viewportHeightPx: tR.current.viewportHeightPx
                        }),
                        r = o?.ownerDocument.activeElement,
                        u = r?.closest("[data-turn-key]"),
                        s = u?.dataset.turnKey;
                    if (o && r && u && s && tF.current.get(s) === u) {
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
                    } = n, o = tF.current.get(t);
                    if (o !== e) continue;
                    r > 0 ? tD.current.add(o) : tD.current.delete(o);
                    let a = Math.max(+!to, r),
                        u = i[t];
                    if (u === a) continue;
                    c === i && (c = {
                        ...i
                    }), c[t] = a;
                    let s = l.turnIndexByKey.get(t);
                    if (null == s) continue;
                    let x = s === l.turnKeys.length - 1,
                        y = Math.round(Math.max(tg[s]?.minHeightPx ?? 0, a) * tx) / tx,
                        P = y - (l.heightsPx[s] ?? y);
                    p = p || null == u || 0 !== P, x && (h = !0, d += null == u ? 0 : P, m = o), f = f || to && (0 === y || 0 === l.heightsPx[s]), (l.bottomOffsetsPx[s] ?? 0) <= S && (ti || null != e1 && !x) && (g += P)
                }
                if (c === i) return !1;
                if (!p) return tH.current = c, !1;
                let E = P({
                    collapseEmptyRows: to,
                    entries: tg,
                    gapPx: ta,
                    measuredHeightsByKey: c,
                    pixelScale: tx
                });
                if (f)
                    for (let [e, t] of E.gapsBeforePx.entries()) {
                        let n = t - (l.gapsBeforePx[e] ?? 0);
                        (l.bottomOffsetsPx[e] ?? 0) + (l.heightsPx[e] ?? 0) <= S && (ti || null != e1 && e !== l.turnKeys.length - 1) && (g += n)
                    }
                let C = tf.isNativeEndSnapFollowing?.(),
                    B = ti && tf.shouldFollowContentGrowth() && (C || (r = x, 0 === y && r <= 24)) && m?.querySelector("[data-preserve-turn-viewport]") == null,
                    I = a?.restoreScrollDistanceFromBottom || null != w,
                    D = null;
                I || (D = B ? 0 : 0 !== g ? (a?.scrollDistanceFromBottomPx ?? tf.getUnroundedScrollDistanceFromBottomPx(x)) + g : a?.scrollDistanceFromBottomPx ?? (ti || !h ? x : null));
                let L = tR.current.distanceFromBottomPx;
                I ? L = w ?? L : null != D && (L = T(D, y));
                let k = M({
                        current: tR.current,
                        distanceFromBottomPx: L,
                        layout: E,
                        viewportHeightPx: tR.current.viewportHeightPx
                    }),
                    q = a?.latestTurnHeightChange,
                    O = m ?? q?.turnElement ?? null,
                    A = {
                        afterMeasure: a?.afterMeasure,
                        latestTurnHeightChange: h || null != q ? {
                            heightDeltaPx: (q?.heightDeltaPx ?? 0) + d,
                            heightPx: E.heightsPx.at(-1) ?? null,
                            bottomViewportOverflowPx: C ? 0 : F({
                                scrollElement: tf.getScrollElement(),
                                turnElement: O,
                                windowZoom: tp
                            }),
                            turnElement: O,
                            followContentHeightPx: null
                        } : null,
                        restoreScrollDistanceFromBottom: I,
                        scrollDistanceFromBottomPx: D,
                        turnHeightsByKey: c
                    },
                    z = tM.current;
                for (let [t, n] of e) {
                    let {
                        element: e
                    } = n, r = E.turnIndexByKey.get(t);
                    tF.current.get(t) === e && null != r && null != e.parentElement && (e.parentElement.style.height = `${E.heightsPx[r]}px`, e.parentElement.style.minHeight = "")
                }
                if (h && 1 === e.size && null == a && k === tR.current && E.gapsBeforePx.at(-1) === l.gapsBeforePx.at(-1) && null != z) return tH.current = c, tV.current = E, t$.current = E, z.style.height = `${E.totalHeightPx}px`, t7(A), !0;
                null == tQ.current && (tQ.current = l);
                let U = () => {
                    tH.current = c, tV.current = E, tv(c), k !== tR.current && (tR.current = k, tC(k))
                };
                return tq.current = A, void 0 === t || t ? (0, u.flushSync)(U) : U(), !0
            }, eN[90] = to, eN[91] = t7, eN[92] = tg, eN[93] = ta, eN[94] = eY, eN[95] = tX, eN[96] = tY, eN[97] = e1, eN[98] = tx, eN[99] = ti, eN[100] = tf, eN[101] = tB, eN[102] = tp, eN[103] = eo) : eo = eN[103];
            let na = (0, g.a)(eo);
            eN[104] !== na || eN[105] !== no || eN[106] !== t8 || eN[107] !== ts ? (ea = e => {
                let t = new Map,
                    n = !1,
                    r = !1;
                for (let l of e) {
                    let e = tT.current.get(l.target);
                    if (null == e) continue;
                    let {
                        height: o
                    } = (0, d.a)(l);
                    switch (e.kind) {
                        case "turn": {
                            n = !0;
                            let r = e.turnKey,
                                a = tF.current.get(r);
                            if (o > 0 && a === l.target && tD.current.has(a) && tH.current[r] === o) break;
                            t.set(r, {
                                element: l.target,
                                heightPx: o
                            });
                            break
                        }
                        case "latest-turn-follow-content":
                            tk.current.set(e.element, o), r = !0
                    }
                }!(t.size > 0) && (n || ts) || na(t), r && no(), t8()
            }, eN[104] = na, eN[105] = no, eN[106] = t8, eN[107] = ts, eN[108] = ea) : ea = eN[108];
            let ni = (0, g.a)(ea);
            eN[109] !== ni ? (ei = () => {
                if (null != tO.current) return tO.current;
                let e = new ResizeObserver(ni);
                return tO.current = e, e
            }, eN[109] = ni, eN[110] = ei) : ei = eN[110];
            let nu = (0, g.a)(ei);
            eN[111] !== nu || eN[112] !== t1 ? (eu = (e, t) => {
                if (null == t) return;
                tT.current.set(t, {
                    kind: "turn",
                    turnKey: e
                }), tF.current.set(e, t), tD.current.delete(t), tL.current.set(e, t);
                let n = nu();
                return n.observe(t), t1(), () => {
                    n.unobserve(t), tT.current.delete(t), tL.current.get(e) === t && tL.current.delete(e), tF.current.get(e) === t && tF.current.delete(e)
                }
            }, eN[111] = nu, eN[112] = t1, eN[113] = eu) : eu = eN[113];
            let ns = (0, g.a)(eu);
            eN[114] !== na || eN[115] !== tp ? (es = (e, t) => {
                let n = tF.current.get(e);
                if (null == n) return;
                let r = (0, s.b)(n.getBoundingClientRect().height, tp);
                if (!(r <= 0) && (na(new Map([
                        [e, {
                            element: n,
                            heightPx: r
                        }]
                    ]), !1), null != t)) {
                    let e = tq.current;
                    null == e ? t() : e.afterMeasure = t
                }
            }, eN[114] = na, eN[115] = tp, eN[116] = es) : es = eN[116];
            let nc = (0, g.a)(es);
            eN[117] !== nu ? (ec = e => {
                if (null == e) return;
                tT.current.set(e, {
                    element: e,
                    kind: "latest-turn-follow-content"
                }), tk.current.set(e, 0);
                let t = nu();
                return t.observe(e), () => {
                    t.unobserve(e), tT.current.delete(e), tk.current.delete(e)
                }
            }, eN[117] = nu, eN[118] = ec) : ec = eN[118];
            let nd = (0, g.a)(ec);
            eN[119] !== na || eN[120] !== tp ? (ed = () => {
                let e = tL.current;
                if (0 === e.size) {
                    tA.current = 0;
                    return
                }
                if (null != tz.current) return;
                if (tA.current >= 8) {
                    tz.current = requestAnimationFrame(e => {
                        tz.current = null, tA.current = 0, t_(e)
                    });
                    return
                }
                tA.current = tA.current + 1, tL.current = new Map;
                let t = new Map;
                if ((0, c.a)("virtualizedTurnList.readMountedHeights", () => {
                        for (let [n, r] of e) {
                            if (tF.current.get(n) !== r) continue;
                            let e = (0, s.b)(r.getBoundingClientRect().height, tp);
                            e > 0 && t.set(n, {
                                element: r,
                                heightPx: e
                            })
                        }
                    }, e.size), t.size > 0) {
                    let n = tH.current;
                    if (na(t, !1, "controller"))
                        for (let [t, r] of e)(null == n[t] || tA.current > 1) && tF.current.get(t) === r && tL.current.set(t, r);
                    else tA.current = 0
                }
            }, eN[119] = na, eN[120] = tp, eN[121] = ed) : ed = eN[121], (0, i.useLayoutEffect)(ed), eN[122] !== tg || eN[123] !== nc || eN[124] !== tn ? (eh = () => {
                let e = tn ?? tg.at(-1)?.turnKey;
                null != e && nc(e)
            }, eN[122] = tg, eN[123] = nc, eN[124] = tn, eN[125] = eh) : eh = eN[125];
            let nh = (0, g.a)(eh);
            eN[126] !== e9 || eN[127] !== nh ? (em = () => {
                null != e9 && nh()
            }, eg = [e9, nh], eN[126] = e9, eN[127] = nh, eN[128] = em, eN[129] = eg) : (em = eN[128], eg = eN[129]), (0, i.useLayoutEffect)(em, eg), eN[130] !== t7 || eN[131] !== tP ? (ef = () => {
                let e = tq.current;
                null != e && e.turnHeightsByKey === tP && (tq.current = null, t7(e))
            }, ep = [t7, tP], eN[130] = t7, eN[131] = tP, eN[132] = ef, eN[133] = ep) : (ef = eN[132], ep = eN[133]), (0, i.useLayoutEffect)(ef, ep), eN[134] !== tg || eN[135] !== th || eN[136] !== tS.heightsPx || eN[137] !== tu || eN[138] !== tP || eN[139] !== tw || eN[140] !== tp ? (ex = e => {
                if (!tu || th?.viewportHeightPx === e) return;
                if (null != th) return void(0, u.flushSync)(() => {
                    tm({
                        ...th,
                        viewportHeightPx: e
                    })
                });
                let t = tw?.closest("[data-thread-user-message-navigation-content]"),
                    n = t?.lastElementChild,
                    r = tg.at(-1)?.turnKey;
                if (null == t || null == n || null == r || tg.some(e => null == tP[e.turnKey])) return;
                let l = (0, s.b)(t.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, tp) - parseFloat(getComputedStyle(t).paddingBottom);
                l <= 24 || (0, u.flushSync)(() => {
                    tm({
                        turnKey: r,
                        heightOutsideTurnPx: e - (tS.heightsPx.at(-1) ?? 0) - l,
                        viewportHeightPx: e
                    })
                })
            }, eN[134] = tg, eN[135] = th, eN[136] = tS.heightsPx, eN[137] = tu, eN[138] = tP, eN[139] = tw, eN[140] = tp, eN[141] = ex) : ex = eN[141];
            let nm = (0, g.a)(ex);
            eN[142] !== nr || eN[143] !== nl || eN[144] !== nc || eN[145] !== e$ || eN[146] !== nn ? (ey = () => {
                if (null != e$) return e$({
                    getEntriesInViewport: nr,
                    getEntryGeometry: nl,
                    measureTurnBeforePaint: nc,
                    scrollToKey: nn
                }), () => {
                    e$(null)
                }
            }, eP = [nr, nl, nc, e$, nn], eN[142] = nr, eN[143] = nl, eN[144] = nc, eN[145] = e$, eN[146] = nn, eN[147] = ey, eN[148] = eP) : (ey = eN[147], eP = eN[148]), (0, i.useEffect)(ey, eP), eN[149] !== t0 ? (ev = () => () => {
                tN.current = !1, t0()
            }, ew = [t0], eN[149] = t0, eN[150] = ev, eN[151] = ew) : (ev = eN[150], ew = eN[151]), (0, i.useLayoutEffect)(ev, ew), eN[152] !== t0 || eN[153] !== t1 ? (eb = () => (t1(), t0), eN[152] = t0, eN[153] = t1, eN[154] = eb) : eb = eN[154], eN[155] !== t0 || eN[156] !== tg.length || eN[157] !== eQ || eN[158] !== t1 || eN[159] !== tw ? (eS = [t0, tg.length, eQ, t1, tw], eN[155] = t0, eN[156] = tg.length, eN[157] = eQ, eN[158] = t1, eN[159] = tw, eN[160] = eS) : eS = eN[160], (0, i.useEffect)(eb, eS), eN[161] !== tB ? (eE = () => {
                let e = tT.current,
                    t = tF.current,
                    n = tk.current;
                return () => {
                    null != tz.current && (cancelAnimationFrame(tz.current), tz.current = null), tO.current?.disconnect(), tO.current = null, e.clear(), t.clear(), tL.current.clear(), n.clear(), tq.current = null, tB.replace(null)
                }
            }, eC = [tB], eN[161] = tB, eN[162] = eE, eN[163] = eC) : (eE = eN[162], eC = eN[163]), (0, i.useEffect)(eE, eC), eN[164] !== e6 ? (eB = () => {
                if (null != e6) return () => {
                    e6(function(e, t, n) {
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
                    }(tH.current, tR.current.turnKeys, tR.current.renderedRange))
                }
            }, eI = [e6], eN[164] = e6, eN[165] = eB, eN[166] = eI) : (eB = eN[165], eI = eN[166]), (0, i.useLayoutEffect)(eB, eI);
            let {
                addScrollListener: ng,
                addUserScrollListener: nf,
                getScrollElement: np
            } = tf;
            eN[167] !== ng || eN[168] !== nf || eN[169] !== eY || eN[170] !== np || eN[171] !== nm || eN[172] !== tu || eN[173] !== t3 || eN[174] !== t8 || eN[175] !== ne || eN[176] !== tJ || eN[177] !== tw || eN[178] !== t9 ? (eM = () => {
                let e = np();
                if (null == e) return;
                let t = () => (null == tK.current && (tK.current = e.clientHeight), tK.current || tR.current.viewportHeightPx || 800),
                    n = ng(e => {
                        t9(T(e, K(eY)), t()), t3(e)
                    }),
                    r = nf((e, n) => {
                        ne(T(e, K(eY)), t(), null != n && e > n)
                    }),
                    l = new ResizeObserver(n => {
                        let r = n.find(t => t.target === e);
                        if (null != r) {
                            let {
                                height: e
                            } = (0, d.a)(r);
                            tK.current = e, t9(tR.current.distanceFromBottomPx, e), tJ()
                        }
                        nm(t()), t8()
                    });
                return l.observe(e), tu && null != tw && l.observe(tw), () => {
                    n(), r(), l.disconnect()
                }
            }, eH = [ng, nf, eY, np, nm, t8, tu, ne, t3, tJ, tw, t9], eN[167] = ng, eN[168] = nf, eN[169] = eY, eN[170] = np, eN[171] = nm, eN[172] = tu, eN[173] = t3, eN[174] = t8, eN[175] = ne, eN[176] = tJ, eN[177] = tw, eN[178] = t9, eN[179] = eM, eN[180] = eH) : (eM = eN[179], eH = eN[180]), (0, i.useLayoutEffect)(eM, eH), eN[181] !== na || eN[182] !== eY || eN[183] !== tS || eN[184] !== tI || eN[185] !== tf || eN[186] !== tB || eN[187] !== nt || eN[188] !== t9 || eN[189] !== tp ? (eR = () => {
                if (null == tI || tB.getSnapshot() !== tI || null != tz.current) return;
                let e = tf.getScrollElement();
                if (null == e) return;
                let t = new Map;
                for (let [e, n] of tF.current) {
                    let r = (0, s.b)(n.getBoundingClientRect().height, tp);
                    r > 0 && t.set(e, {
                        element: n,
                        heightPx: r
                    })
                }
                if (na(t, !1) || null != tq.current) return;
                let n = tF.current.get(tI.turnKey),
                    r = null == n ? null : tI.getTargetElement?.(n) ?? n,
                    l = null == n || null == r ? function(e) {
                        let {
                            align: t,
                            layout: n,
                            turnKey: r,
                            viewportHeightPx: l
                        } = e;
                        if ("center" === t) return b({
                            layout: n,
                            turnKey: r,
                            viewportHeightPx: l
                        });
                        let o = n.turnIndexByKey.get(r);
                        return null == o ? null : Math.max(0, (n.bottomOffsetsPx[o] ?? 0) + (n.heightsPx[o] ?? 0) - l + 10)
                    }({
                        align: tI.align,
                        layout: tS,
                        turnKey: tI.turnKey,
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
                            d = r.getBoundingClientRect(),
                            h = (0, s.b)(d.top - c.top, a),
                            m = (0, s.b)(d.height, a),
                            g = (n.bottomOffsetsPx[u] ?? 0) + (n.heightsPx[u] ?? 0) - h;
                        return "top" === t ? Math.max(0, g - i + 10) : Math.max(0, g - m / 2 - i / 2)
                    }({
                        align: tI.align,
                        layout: tS,
                        targetElement: r,
                        turnElement: n,
                        turnKey: tI.turnKey,
                        viewportHeightPx: e.clientHeight,
                        windowZoom: tp
                    });
                if (null == l) return void queueMicrotask(() => nt(tI));
                let o = "top" === tI.align && null != r ? Math.max(0, tf.getLastScrollDistanceFromBottomPx() - (0, s.b)(r.getBoundingClientRect().top - e.getBoundingClientRect().top, tp) + 10) : l + K(eY);
                tf.scrollToDistanceFromBottomPx(o, "instant", "user"), t9(Math.max(0, o - K(eY)), e.clientHeight), queueMicrotask(() => nt(tI))
            }, eN[181] = na, eN[182] = eY, eN[183] = tS, eN[184] = tI, eN[185] = tf, eN[186] = tB, eN[187] = nt, eN[188] = t9, eN[189] = tp, eN[190] = eR) : eR = eN[190], eN[191] !== na || eN[192] !== eY || eN[193] !== tS || eN[194] !== tU || eN[195] !== tI || eN[196] !== tf || eN[197] !== tB || eN[198] !== nt || eN[199] !== t9 || eN[200] !== tp ? (eK = [na, tS, tU, tI, tf, tB, nt, eY, t9, tp], eN[191] = na, eN[192] = eY, eN[193] = tS, eN[194] = tU, eN[195] = tI, eN[196] = tf, eN[197] = tB, eN[198] = nt, eN[199] = t9, eN[200] = tp, eN[201] = eK) : eK = eN[201], (0, i.useLayoutEffect)(eR, eK), eN[202] !== eY || eN[203] !== tX || eN[204] !== tY || eN[205] !== e1 || eN[206] !== tI || eN[207] !== ti || eN[208] !== tf || eN[209] !== t9 ? (eT = () => {
                var e;
                if (null != tq.current) return;
                let t = t$.current,
                    n = tX(),
                    r = tQ.current ?? n;
                if (tQ.current = null, t$.current = n, null != tI || !ti && t.turnKeys.at(-1) !== r.turnKeys.at(-1) || t === r) return;
                let l = K(eY),
                    o = tf.getLastScrollDistanceFromBottomPx({
                        includePendingUserScroll: !0
                    });
                if (null != (e1?.() ?? null)) return;
                if (tf.shouldFollowContentGrowth() && (e = o, 0 === l && e <= 24)) return void tf.compensateScrollToDistanceFromBottomPx(0);
                let a = H({
                    distanceFromBottomPx: tY(o),
                    preferLatestVisibleRow: o < l,
                    layout: t,
                    measuredHeightsByKey: tH.current,
                    nextLayout: r,
                    viewportHeightPx: tR.current.viewportHeightPx
                });
                if (null == a) return;
                let i = tf.getUnroundedScrollDistanceFromBottomPx(o),
                    u = function(e) {
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
                        anchorKey: a,
                        distanceFromBottomPx: i,
                        nextLayout: r,
                        previousLayout: t
                    });
                null != u && (u !== i || t.totalHeightPx !== r.totalHeightPx) && (t9(T(u, l), tR.current.viewportHeightPx), tf.compensateScrollToDistanceFromBottomPx(u))
            }, eN[202] = eY, eN[203] = tX, eN[204] = tY, eN[205] = e1, eN[206] = tI, eN[207] = ti, eN[208] = tf, eN[209] = t9, eN[210] = eT) : eT = eN[210], eN[211] !== eY || eN[212] !== tX || eN[213] !== tY || eN[214] !== e1 || eN[215] !== tS || eN[216] !== tI || eN[217] !== ti || eN[218] !== tf || eN[219] !== t9 ? (eF = [eY, tX, tY, e1, tS, tI, ti, tf, t9], eN[211] = eY, eN[212] = tX, eN[213] = tY, eN[214] = e1, eN[215] = tS, eN[216] = tI, eN[217] = ti, eN[218] = tf, eN[219] = t9, eN[220] = eF) : eF = eN[220], (0, i.useLayoutEffect)(eT, eF), eN[221] !== tI || eN[222] !== ne || eN[223] !== tJ || eN[224] !== t9 ? (eD = () => {
                null == tI && null == tq.current && (t9(tR.current.distanceFromBottomPx, tR.current.viewportHeightPx), tJ(), ne(tR.current.distanceFromBottomPx, tR.current.viewportHeightPx, !1))
            }, eN[221] = tI, eN[222] = ne, eN[223] = tJ, eN[224] = t9, eN[225] = eD) : eD = eN[225], eN[226] !== tS || eN[227] !== tI || eN[228] !== ne || eN[229] !== tJ || eN[230] !== t9 ? (eL = [tS, tI, ne, tJ, t9], eN[226] = tS, eN[227] = tI, eN[228] = ne, eN[229] = tJ, eN[230] = t9, eN[231] = eL) : eL = eN[231], (0, i.useLayoutEffect)(eD, eL), eN[232] !== t8 ? (ek = () => {
                t8()
            }, eN[232] = t8, eN[233] = ek) : ek = eN[233], (0, i.useLayoutEffect)(ek), eN[234] !== tg || eN[235] !== e5 ? (eq = e5 ?? tg.at(-1)?.turnKey, eN[234] = tg, eN[235] = e5, eN[236] = eq) : eq = eN[236];
            let nx = eq;
            eN[237] !== eG ? (eO = (0, o.b)("relative shrink-0", eG), eN[237] = eG, eN[238] = eO) : eO = eN[238], eN[239] !== tS.totalHeightPx ? (eA = {
                height: tS.totalHeightPx
            }, eN[239] = tS.totalHeightPx, eN[240] = eA) : eA = eN[240];
            let ny = `${tS.topOffsetsPx[tZ.startIndex]??0}px`;
            eN[241] !== ny ? (ez = {
                marginTop: ny
            }, eN[241] = ny, eN[242] = ez) : ez = eN[242];
            let nP = t2.map(e => {
                let {
                    entry: t,
                    turnIndex: n
                } = e;
                return (0, r.jsx)(I, {
                    entry: t,
                    gapBeforePx: n === tZ.startIndex ? 0 : tS.gapsBeforePx[n] ?? 0,
                    retainedTopPx: n < tZ.startIndex || n >= tZ.endIndex ? tS.topOffsetsPx[n] : void 0,
                    latestTurnFollowContentRef: n === tg.length - 1 && null != eZ ? nd : void 0,
                    latestTurnFooter: t.turnKey === nx ? e3 : void 0,
                    RowComponent: eW,
                    measuredHeightPx: null == tP[t.turnKey] ? void 0 : tS.heightsPx[n],
                    constrainedHeightPx: n !== tg.length - 1 && tI?.turnKey !== t.turnKey && null == tP[t.turnKey] ? tS.heightsPx[n] : void 0,
                    observeTurnElement: ns
                }, t.turnKey)
            });
            return eN[243] !== ez || eN[244] !== nP ? (eU = (0, r.jsx)("div", {
                className: "flex flex-col",
                style: ez,
                children: nP
            }), eN[243] = ez, eN[244] = nP, eN[245] = eU) : eU = eN[245], eN[246] !== tG || eN[247] !== eO || eN[248] !== eA || eN[249] !== eU ? (e_ = (0, r.jsx)("div", {
                ref: tG,
                className: eO,
                style: eA,
                children: eU
            }), eN[246] = tG, eN[247] = eO, eN[248] = eA, eN[249] = eU, eN[250] = e_) : e_ = eN[250], e_
        }

        function C(e, t) {
            return e.turnIndex - t.turnIndex
        }

        function B() {
            return new D
        }
        let I = (0, i.memo)(function(e) {
            let t, n, a, i, u, s, c = (0, l.c)(24),
                {
                    entry: d,
                    gapBeforePx: h,
                    latestTurnFollowContentRef: m,
                    latestTurnFooter: f,
                    RowComponent: p,
                    constrainedHeightPx: x,
                    measuredHeightPx: y,
                    retainedTopPx: P,
                    observeTurnElement: v
                } = e,
                {
                    turnKey: w
                } = d;
            c[0] !== v || c[1] !== w ? (t = e => v(w, e), c[0] = v, c[1] = w, c[2] = t) : t = c[2];
            let b = (0, g.a)(t),
                S = null != P && "absolute inset-x-0",
                E = null != x && "overflow-hidden";
            c[3] !== S || c[4] !== E ? (n = (0, o.b)(S, E), c[3] = S, c[4] = E, c[5] = n) : n = c[5];
            let C = y ?? x,
                B = null == P ? h : 0,
                I = null == y ? d.minHeightPx : void 0;
            return c[6] !== P || c[7] !== C || c[8] !== B || c[9] !== I ? (a = {
                height: C,
                marginTop: B,
                minHeight: I,
                top: P
            }, c[6] = P, c[7] = C, c[8] = B, c[9] = I, c[10] = a) : a = c[10], c[11] !== p || c[12] !== d || c[13] !== m || c[14] !== f ? (i = (0, r.jsx)(p, {
                entry: d,
                latestTurnFooter: f,
                latestTurnFollowContentRef: m
            }), c[11] = p, c[12] = d, c[13] = m, c[14] = f, c[15] = i) : i = c[15], c[16] !== b || c[17] !== i || c[18] !== w ? (u = (0, r.jsx)("div", {
                ref: b,
                className: "[&_[data-virtualized-turn-content]]:[content-visibility:visible]",
                "data-turn-key": w,
                children: i
            }), c[16] = b, c[17] = i, c[18] = w, c[19] = u) : u = c[19], c[20] !== u || c[21] !== n || c[22] !== a ? (s = (0, r.jsx)("div", {
                className: n,
                style: a,
                children: u
            }), c[20] = u, c[21] = n, c[22] = a, c[23] = s) : s = c[23], s
        });

        function M(e) {
            var t, n;
            let {
                current: r,
                distanceFromBottomPx: l,
                layout: o,
                viewportHeightPx: a
            } = e, i = Math.min(l, o.totalHeightPx), u = v({
                distanceFromBottomPx: i,
                layout: o,
                overscanCount: 2,
                viewportHeightPx: a
            }), s = (t = r.renderedRange, n = u, t.startIndex <= n.startIndex && t.endIndex >= n.endIndex) ? r.renderedRange : u;
            return r.distanceFromBottomPx === i && r.viewportHeightPx === a && r.renderedRange.startIndex === s.startIndex && r.renderedRange.endIndex === s.endIndex && R(r.turnKeys, o.turnKeys) ? r : {
                distanceFromBottomPx: i,
                renderedRange: s,
                turnKeys: o.turnKeys,
                viewportHeightPx: a
            }
        }

        function H(e) {
            let {
                distanceFromBottomPx: t,
                preferLatestVisibleRow: n,
                layout: r,
                measuredHeightsByKey: l,
                nextLayout: o,
                viewportHeightPx: a
            } = e, i = v({
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

        function R(e, t) {
            return e === t || e.length === t.length && e.every((e, n) => e === t[n])
        }

        function K(e) {
            return Math.max(0, e?.() ?? 0)
        }

        function T(e, t) {
            return Math.max(0, e - t)
        }

        function F(e) {
            let {
                scrollElement: t,
                turnElement: n,
                windowZoom: r
            } = e;
            return null == t || null == n ? 0 : (0, s.b)(n.getBoundingClientRect().bottom - t.getBoundingClientRect().bottom, r)
        }
        class D {
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
            d = n("qZWE");
        n.d(t, {}, {
            a: function(e) {
                let t, n, h, m, g, f = (0, r.c)(14);
                f[0] !== e ? (t = void 0 === e ? {} : e, f[0] = e, f[1] = t) : t = f[1];
                let {
                    transcriptMcpAppIds: p,
                    blockedWidgetSource: x,
                    shouldBlockExternalEgress: y
                } = t, P = void 0 !== y && y, v = (0, l.y)(s.a), w = (0, l.y)(u.a), b = (0, l.z)(d.i), S = (0, l.z)(a.w);
                return f[2] !== S || f[3] !== x || f[4] !== w || f[5] !== b || f[6] !== v || f[7] !== P || f[8] !== p ? (n = () => {
                    for (let [e, t] of("chatgpt-thread" === v.value.routeKind && (0, i.b)(w, S.filter(e => P || null != x && (e.widgetSource ?? "descriptor") === x)), b))(P || null != x && (t.content.mcpAppScope.widgetSource ?? "descriptor") === x || t.hostedInThreadScrollLayout && p?.has(e) === !1) && (0, d.y)(v, e)
                }, h = [S, x, p, w, b, v, P], f[2] = S, f[3] = x, f[4] = w, f[5] = b, f[6] = v, f[7] = P, f[8] = p, f[9] = n, f[10] = h) : (n = f[9], h = f[10]), (0, o.useLayoutEffect)(n, h), f[11] !== v ? (m = () => {
                    (0, c.g)(v)
                }, g = [v], f[11] = v, f[12] = m, f[13] = g) : (m = f[12], g = f[13]), (0, o.useLayoutEffect)(m, g), null
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
                let t, n, c, d = (0, r.c)(18),
                    {
                        ready: h,
                        onNavigate: m
                    } = e,
                    g = (0, l.y)(s.a),
                    f = (0, l.z)(i.f),
                    p = (0, a.Y)(),
                    x = p.state,
                    y = x?.sidebarArea === "scheduled";
                d[0] !== f || d[1] !== p.key ? (t = {
                    locationKey: p.key,
                    accountId: f
                }, d[0] = f, d[1] = p.key, d[2] = t) : t = d[2];
                let P = (0, l.x)(u.a, t),
                    v = (0, o.useEffectEvent)(m);
                return d[3] !== f || d[4] !== P || d[5] !== p.key || d[6] !== v || d[7] !== h || d[8] !== y || d[9] !== g ? (n = () => {
                    if (!y || !h || P) return;
                    let e = new AbortController;
                    return v(e.signal).then(() => {
                        e.signal.aborted || g.set(u.a, {
                            locationKey: p.key,
                            accountId: f
                        }, !0)
                    }), () => e.abort()
                }, d[3] = f, d[4] = P, d[5] = p.key, d[6] = v, d[7] = h, d[8] = y, d[9] = g, d[10] = n) : n = d[10], d[11] !== f || d[12] !== P || d[13] !== p.key || d[14] !== h || d[15] !== y || d[16] !== g ? (c = [f, P, p.key, h, y, g], d[11] = f, d[12] = P, d[13] = p.key, d[14] = h, d[15] = y, d[16] = g, d[17] = c) : c = d[17], (0, o.useEffect)(n, c), null
            }
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
                        defaultMessage: "Try again",
                        description: "Button to retry loading older conversation messages after a failure"
                    })
                }) : (0, r.jsxs)("div", {
                    role: "status",
                    children: [(0, r.jsx)(i.a, {}), (0, r.jsx)("span", {
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
                getElement = () => this.element;
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
                prepareThreadEndContent = () => {
                    let e = this.scrollController.getScrollElement(),
                        t = this.element;
                    if (!this.canPrepareThreadEndContent || null != this.stopPlacementAnimation || null == e || e.clientHeight <= 0 || null == t) return;
                    let n = e.getBoundingClientRect(),
                        r = n.bottom - s(e) * (n.height / e.clientHeight);
                    t.getBoundingClientRect().top > r || (this.canPrepareThreadEndContent = !1, this.cancelPendingUserScrollDecay(), this.consumeGrowth((0, i.b)(e)), this.scrollController.compensateScrollToDistanceFromBottomPx(0))
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
        let d = Array.from({
            length: 101
        }, (e, t) => t / 100);
        n.d(t, {}, {
            a: function(e) {
                let t, n, h, m, g, f, p, x, y, P, v, w, b, S, E = (0, l.c)(31),
                    {
                        controller: C,
                        onReleased: B
                    } = e,
                    I = (0, c.b)(),
                    M = (0, o.useContext)(i.a),
                    H = (0, a.a)(),
                    {
                        getScrollElement: R
                    } = I;
                E[0] !== C ? (t = e => {
                    C.setElement(e)
                }, E[0] = C, E[1] = t) : t = E[1];
                let K = (0, s.a)(t);
                return E[2] !== C || E[3] !== B || E[4] !== H || E[5] !== I ? (n = () => {
                    C.updateContext(I, H, B)
                }, h = [C, I, H, B], E[2] = C, E[3] = B, E[4] = H, E[5] = I, E[6] = n, E[7] = h) : (n = E[6], h = E[7]), (0, o.useInsertionEffect)(n, h), E[8] !== C || E[9] !== R ? (m = () => {
                    let e = R();
                    if (null == e) return;
                    let t = new AbortController;
                    for (let n of ["wheel", "touchstart", "pointerdown", "keydown"]) e.addEventListener(n, C.interruptPlacement, {
                        capture: !0,
                        passive: !0,
                        signal: t.signal
                    });
                    return () => {
                        t.abort(), C.interruptPlacement()
                    }
                }, g = [C, R], E[8] = C, E[9] = R, E[10] = m, E[11] = g) : (m = E[10], g = E[11]), (0, o.useEffect)(m, g), E[12] !== C.cancelPendingUserScrollDecay ? (f = () => C.cancelPendingUserScrollDecay, E[12] = C.cancelPendingUserScrollDecay, E[13] = f) : f = E[13], E[14] !== C ? (p = [C], E[14] = C, E[15] = p) : p = E[15], (0, o.useEffect)(f, p), E[16] !== C || E[17] !== R ? (x = () => {
                    let e = R();
                    if (null == e || "u" < typeof IntersectionObserver) return;
                    let t = new IntersectionObserver(C.collapseIfHidden, {
                            root: e,
                            threshold: d
                        }),
                        n = C.getElement();
                    return null != n && t.observe(n), () => t.disconnect()
                }, y = [C, R], E[16] = C, E[17] = R, E[18] = x, E[19] = y) : (x = E[18], y = E[19]), (0, o.useEffect)(x, y), E[20] !== C || E[21] !== I ? (P = () => {
                    let e = I.addScrollListener(C.handleScroll),
                        t = I.addUserScrollListener(C.handleUserScroll);
                    return C.reconcileViewport(), () => {
                        e(), t()
                    }
                }, v = [C, I], E[20] = C, E[21] = I, E[22] = P, E[23] = v) : (P = E[22], v = E[23]), (0, o.useLayoutEffect)(P, v), E[24] !== C || E[25] !== R || E[26] !== M ? (w = () => {
                    let e = R();
                    if (null == e) return;
                    let t = null,
                        n = () => {
                            null == t && (t = window.requestAnimationFrame(() => {
                                t = null, C.reconcileViewport()
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
                }, b = [C, R, M], E[24] = C, E[25] = R, E[26] = M, E[27] = w, E[28] = b) : (w = E[27], b = E[28]), (0, o.useEffect)(w, b), E[29] !== K ? (S = (0, r.jsx)("div", {
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
            d = n("I7bK"),
            h = n("QcW8"),
            m = n("gbrq"),
            g = n("kl6F"),
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
                isSummaryPanelPinned: t && (o ?? (0, m.z)(!0 === n ? e.get(m.N) : e.get(m.C, n), n)),
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
                let t, n, o, a, v, S, E, C, B, I, M, H, R, K, T, F, D, L = (0, r.c)(73);
                L[0] !== e ? (t = void 0 === e ? {} : e, L[0] = e, L[1] = t) : t = L[1];
                let {
                    contentShiftResetKey: k,
                    controlledIsOpen: q,
                    floatingPanelWidth: O,
                    getCurrentPinStateKey: A,
                    isEnabled: z,
                    pinStateKey: U
                } = t, _ = void 0 === z || z, N = void 0 === U || U, j = (0, s.y)(g.a), V = (0, s.z)(null == q && !0 === N ? m.N : null), W = (0, s.x)(null == q && !0 !== N ? m.C : null, !0 !== N && N);
                L[2] !== q || L[3] !== W || L[4] !== V || L[5] !== N ? (n = q ?? (0, m.z)(!0 === N ? V : W, N), L[2] = q, L[3] = W, L[4] = V, L[5] = N, L[6] = n) : n = L[6];
                let $ = n,
                    Q = (0, s.z)(m.h),
                    G = (0, s.z)(h.G),
                    X = (0, s.z)(p.g),
                    Y = (0, s.z)(P.b),
                    Z = _ && $,
                    J = O ?? 300,
                    ee = _ && null == O && (q ?? (Y.isPopoverOpen || "boolean" != typeof N && $)),
                    et = (0, s.z)(f.c),
                    en = (0, c.useContext)(d.c),
                    er = (0, l.a)(0),
                    el = en?.mainContentTargetWidth ?? er;
                L[7] !== O || L[8] !== Z || L[9] !== el ? (o = b({
                    isSummaryPanelPinned: Z,
                    floatingPanelWidth: O,
                    mainContentTargetWidth: el.get()
                }), L[7] = O, L[8] = Z, L[9] = el, L[10] = o) : o = L[10];
                let eo = (0, l.a)(o);
                L[11] !== el ? (a = e => el.on("change", e), L[11] = el, L[12] = a) : a = L[12], L[13] !== el || L[14] !== J ? (v = () => (0, x.c)(el.get(), J), L[13] = el, L[14] = J, L[15] = v) : v = L[15], L[16] !== a || L[17] !== v ? (S = {
                    subscribe: a,
                    getSnapshot: v
                }, L[16] = a, L[17] = v, L[18] = S) : S = L[18];
                let ea = S,
                    ei = (0, c.useSyncExternalStore)(ea.subscribe, ea.getSnapshot, ea.getSnapshot),
                    eu = (0, c.useRef)(null);
                L[19] !== eo ? (E = eo.get(), L[19] = eo, L[20] = E) : E = L[20], L[21] !== el ? (C = el.get(), L[21] = el, L[22] = C) : C = L[22], L[23] !== C || L[24] !== E ? (B = {
                    offset: E,
                    width: C
                }, L[23] = C, L[24] = E, L[25] = B) : B = L[25];
                let es = (0, c.useRef)(B),
                    ec = (0, c.useRef)(!1),
                    ed = (0, c.useRef)(k),
                    eh = (0, c.useRef)(Q),
                    em = (0, c.useRef)(G),
                    eg = Z && null == O;
                L[26] !== ei || L[27] !== ee || L[28] !== eg ? (I = (0, x.a)({
                    displayMode: ei,
                    isPinned: eg,
                    isPopoverOpen: ee
                }), L[26] = ei, L[27] = ee, L[28] = eg, L[29] = I) : I = L[29];
                let ef = I,
                    ep = ef.shouldShow && !X;
                L[30] !== eo || L[31] !== k || L[32] !== q || L[33] !== O || L[34] !== A || L[35] !== G || L[36] !== _ || L[37] !== el || L[38] !== N || L[39] !== Q || L[40] !== j ? (M = () => {
                    let e = eh.current !== Q,
                        t = em.current !== G;
                    if (!ec.current && ed.current === k && !e && !t) return;
                    ec.current = !1, ed.current = k, eh.current = Q, em.current = G;
                    let n = w(j, _, A?.() ?? N, el.get(), O, q);
                    es.current = {
                        offset: n,
                        width: el.get()
                    }, eu.current?.(), eo.jump(n)
                }, H = [eo, k, q, O, A, G, _, el, N, Q, j], L[30] = eo, L[31] = k, L[32] = q, L[33] = O, L[34] = A, L[35] = G, L[36] = _, L[37] = el, L[38] = N, L[39] = Q, L[40] = j, L[41] = M, L[42] = H) : (M = L[41], H = L[42]), (0, c.useLayoutEffect)(M, H);
                let ex = en?.chatPaneWidth ?? el;
                L[43] !== ex || L[44] !== eo || L[45] !== q || L[46] !== O || L[47] !== A || L[48] !== _ || L[49] !== el || L[50] !== N || L[51] !== j || L[52] !== et ? (R = () => {
                    let e = (e, t) => {
                        let n = w(j, _, A?.() ?? N, e, O, q),
                            r = es.current,
                            l = eo.get();
                        if (r.offset === n && (l === n || r.width === e && !t)) return;
                        if (es.current = {
                                offset: n,
                                width: e
                            }, eu.current?.(), t || 0 === e || l === n) return void eo.jump(n);
                        let o = ex.get();
                        if (o === e) {
                            let e = (0, i.a)(eo, n, y.a),
                                t = document.activeViewTransition;
                            if (null != t) {
                                e.pause();
                                let n = () => e.play();
                                t.ready.then(n, n)
                            }
                            eu.current = () => e.stop();
                            return
                        }
                        let a = (0, u.a)([o, e], [l, n]),
                            s = ex.on("change", e => {
                                let t = a(e);
                                eo.set(t), t === n && queueMicrotask(s)
                            });
                        eu.current = s
                    };
                    return e(el.get(), et), el.on("change", t => {
                        e(t, et || 0 === el.getPrevious() || j.get(m.h) !== eh.current)
                    })
                }, L[43] = ex, L[44] = eo, L[45] = q, L[46] = O, L[47] = A, L[48] = _, L[49] = el, L[50] = N, L[51] = j, L[52] = et, L[53] = R) : R = L[53], L[54] !== ex || L[55] !== eo || L[56] !== q || L[57] !== O || L[58] !== A || L[59] !== _ || L[60] !== Z || L[61] !== el || L[62] !== N || L[63] !== j || L[64] !== et ? (K = [ex, eo, q, O, A, _, Z, el, N, j, et], L[54] = ex, L[55] = eo, L[56] = q, L[57] = O, L[58] = A, L[59] = _, L[60] = Z, L[61] = el, L[62] = N, L[63] = j, L[64] = et, L[65] = K) : K = L[65], (0, c.useLayoutEffect)(R, K), L[66] === Symbol.for("react.memo_cache_sentinel") ? (T = () => () => {
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
                let n, i, u, h, g, f, p = (0, r.c)(15),
                    y = void 0 !== t && t,
                    w = (0, s.z)(m.i),
                    b = (0, s.z)(m.r),
                    S = (0, c.useContext)(d.c),
                    E = (0, l.a)(0),
                    C = S?.mainContentTargetWidth ?? E;
                p[0] !== y || p[1] !== C || p[2] !== e ? (n = () => {
                    var t, n;
                    t = e, n = y ? "overlay" : (0, x.c)(C.get()), t.set(P.b, e => {
                        let t = "overlay" === n && e.isPopoverOpen;
                        return e.displayMode === n && e.isPopoverOpen === t ? e : {
                            displayMode: n,
                            isPopoverOpen: t
                        }
                    })
                }, p[0] = y, p[1] = C, p[2] = e, p[3] = n) : n = p[3];
                let B = n;
                p[4] !== B ? (i = () => {
                    o.b.update(B)
                }, p[4] = B, p[5] = i) : i = p[5], (0, a.a)(C, "change", i), p[6] !== B ? (u = () => (B(), () => (0, o.a)(B)), p[6] = B, p[7] = u) : u = p[7], p[8] !== w || p[9] !== b || p[10] !== B ? (h = [w, b, B], p[8] = w, p[9] = b, p[10] = B, p[11] = h) : h = p[11], (0, c.useLayoutEffect)(u, h), p[12] !== e ? (g = () => () => {
                    e.set(P.b, v)
                }, f = [e], p[12] = e, p[13] = g, p[14] = f) : (g = p[13], f = p[14]), (0, c.useLayoutEffect)(g, f)
            }
        })
    })
};