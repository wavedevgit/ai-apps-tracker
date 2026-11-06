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
                scrollAdapter: h
            } = e;
            return {
                domain: "conversation",
                contextId: t,
                async search(e, t) {
                    var r, i;
                    let h, g, p = await async function(e, t, n, r) {
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
                        let h = null == i ? null : await (0, m.a)({
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
                        let g = new Map;
                        for (let [t, n] of s.entries()) {
                            let r = (0, o.c)(n.turnKey, n.unitId),
                                i = g.get(r) ?? 0,
                                {
                                    offsets: s,
                                    totalMatches: m
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
                    return null == x ? p : (r = p, i = x, h = new Map(r.matches.map(e => [e.id, e])), g = l()([...i.matches.map(e => h.get(e.id) ?? e), ...r.matches], "id").map((e, t) => ({
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
                        a = h.getTurnContainer(e.turnKey),
                        u = (0, o.b)(e),
                        s = i && null != a && null == (0, o.g)({
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
                    containerRef: B,
                    contextId: C,
                    onContentChange: I
                } = e,
                M = (0, l.z)(s.d),
                H = (0, l.z)(s.g),
                K = M?.contextId === C ? M : null,
                R = null == K ? null : H?.id ?? null,
                {
                    schedule: F,
                    cancel: T
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
            E[2] !== K || E[3] !== R || E[4] !== B ? (c = async (e, t) => {
                let r = B.current;
                if (null == r || ((0, a.a)(r, {
                        includeShadowRoots: !1
                    }), t.takeRecords(), null == K)) return;
                let l = (0, i.a)(K.matches),
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
                            }), (0, a.k)(t, e === R)
                        })
                    },
                    c = o.map(g),
                    f = e => {
                        e.forEach((e, t) => e.forEach((e, n) => s(c[t].matches[n].id, e)))
                    };
                if (!K.searchMath) {
                    f(c.map(e => {
                        let {
                            element: t,
                            matches: n
                        } = e;
                        return (0, a.i)({
                            target: t,
                            query: K.query,
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
                        })), h = document.createElement("span"), d = t.map(() => {
                            let e, t = c.size + 1;
                            do e = `#${t.toString(16).padStart(6,"0")}`, h.style.color = e, t += 1; while (c.has(h.style.color)) return c.add(h.style.color), {
                                hex: e,
                                css: h.style.color
                            }
                        });
                        h.style.color = "";
                        let m = new Map(d.map((e, t) => {
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
                let [x, y] = await Promise.all([(0, a.j)(c.map(d), K.query, K.regex, e), Promise.all(p)]);
                e.aborted || (f(x()), y.forEach(h), t.takeRecords())
            }, E[2] = K, E[3] = R, E[4] = B, E[5] = c) : c = E[5];
            let L = (0, o.useEffectEvent)(c);
            E[6] !== K?.runId || E[7] !== L || E[8] !== T || E[9] !== B || E[10] !== D || E[11] !== F ? (f = () => {
                let e = B.current;
                if (null == e) return;
                let t = null,
                    n = () => {
                        t?.abort(), L((t = new AbortController).signal, r)
                    },
                    r = new MutationObserver(e => {
                        (0, a.m)(e) && (t?.abort(), F(() => {
                            D(), n()
                        }))
                    });
                return K?.runId == null ? void n() : (r.observe(e, {
                    childList: !0,
                    subtree: !0,
                    characterData: !0,
                    attributeFilter: ["hidden"]
                }), n(), () => {
                    r.disconnect(), t?.abort(), T(), (0, a.a)(e, {
                        includeShadowRoots: !1
                    })
                })
            }, E[6] = K?.runId, E[7] = L, E[8] = T, E[9] = B, E[10] = D, E[11] = F, E[12] = f) : f = E[12];
            let k = K?.runId;
            E[13] !== R || E[14] !== T || E[15] !== B || E[16] !== C || E[17] !== F || E[18] !== k ? (p = [k, R, T, B, C, F], E[13] = R, E[14] = T, E[15] = B, E[16] = C, E[17] = F, E[18] = k, E[19] = p) : p = E[19], (0, o.useEffect)(f, p)
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
                let t, n, i, u, s, c, h, d, m, g = (0, l.c)(15),
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
                }), g[6] = u, g[7] = c) : c = g[7], g[8] !== y ? (h = y ? (0, r.jsx)(a.a, {
                    id: "codex.conversation.latestResponseUnavailable",
                    defaultMessage: "No response available",
                    description: "Screen-reader announcement when navigation to the latest assistant response finds no response in the conversation"
                }) : null, g[8] = y, g[9] = h) : h = g[9], g[10] !== h ? (d = (0, r.jsx)("span", {
                    className: "sr-only m-0",
                    role: "status",
                    children: h
                }), g[10] = h, g[11] = d) : d = g[11], g[12] !== c || g[13] !== d ? (m = (0, r.jsxs)(r.Fragment, {
                    children: [c, d]
                }), g[12] = c, g[13] = d, g[14] = m) : m = g[14], m
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
            h = n("f4Vb"),
            d = n("lsfk"),
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
            } = e, a = new Set, i = [], u = [], s = [], c = new Map, h = [], d = 0;
            for (let [e, m] of n.entries()) {
                let n = m.turnKey,
                    g = Math.max(m.minHeightPx ?? 0, l[n] ?? m.estimatedHeightPx ?? 280);
                null != o && (g = Math.round(g * o) / o);
                let f = (t ? d > 0 && g > 0 : e > 0) ? m.gapBeforePx ?? r : 0;
                null != o && (f = Math.round(f * o) / o), d += f, i.push(f), "gap" === m.type && a.add(n), c.set(n, e), h.push(n), s.push(d), u.push(g), d += g
            }
            return {
                bottomOffsetsPx: s.map((e, t) => d - e - (u[t] ?? 0)),
                collapseEmptyRows: t,
                gapKeys: a,
                gapsBeforePx: i,
                heightsPx: u,
                topOffsetsPx: s,
                totalHeightPx: d,
                turnIndexByKey: c,
                turnKeys: h
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
            let t, n, f, x, E, D, L, k, q, O, A, z, U, _, N, j, V, W, $, Q, G, X, Y, Z, J, ee, et, en, er, el, eo, ea, ei, eu, es, ec, eh, ed, em, eg, ef, ep, ex, ey, eP, ev, ew, eb, eS, eE, eB, eC, eI, eM, eH, eK, eR, eF, eT, eD, eL, ek, eq, eO, eA, ez, eU, e_, eN = (0, l.c)(254),
                {
                    collapseEmptyRows: ej,
                    entries: eV,
                    RowComponent: eW,
                    onApiChange: e$,
                    onVisibleContentReady: eQ,
                    className: eG,
                    gapPx: eX,
                    getBottomScrollPaddingPx: eY,
                    isSubmitPlacementAnimating: eZ,
                    onLatestTurnHeightChange: eJ,
                    preserveMeasuredTurnViewport: e0,
                    preserveUnderfilledViewport: e1,
                    getPendingRestoreScrollDistanceFromBottomPx: e2,
                    restoreScrollDistanceFromBottomPx: e4,
                    initialRestoreState: e3,
                    latestTurnFooter: e5,
                    latestTurnFooterKey: e6,
                    onRestoreStateChange: e8,
                    onViewportChange: e7,
                    onHistoryRetentionBoundaryChange: e9,
                    latestTurnSynchronousMeasurementKey: te,
                    layoutReadyTurnKey: tt,
                    onTurnLayoutReady: tn,
                    synchronousMeasurementTurnKey: tr,
                    retainedTurnKeys: tl,
                    skipEmptyResizeMeasurements: to
                } = e,
                ta = void 0 !== ej && ej,
                ti = void 0 === eX ? 12 : eX,
                tu = void 0 !== e0 && e0,
                ts = void 0 !== e1 && e1,
                tc = void 0 !== to && to,
                th = (0, a.z)(m.b);
            eN[0] !== tl ? (t = tl ?? [], eN[0] = tl, eN[1] = t) : t = eN[1];
            let td = [...t, ...th],
                [tm, tg] = (0, i.useState)(null);
            eN[2] !== tm || eN[3] !== ts || eN[4] !== eV ? (n = eV.map(e => ({
                turnKey: e.turnKey,
                gapBeforePx: e.gapBeforePx,
                estimatedHeightPx: e.estimatedHeightPx,
                minHeightPx: ts && tm?.turnKey === e.turnKey && e.turnKey === eV.at(-1)?.turnKey ? Math.max(e.minHeightPx ?? 0, tm.viewportHeightPx - tm.heightOutsideTurnPx) : e.minHeightPx,
                type: e.type
            })), eN[2] = tm, eN[3] = ts, eN[4] = eV, eN[5] = n) : n = eN[5];
            let tf = n,
                tp = (0, d.b)(),
                tx = (0, s.c)(),
                ty = tx * (globalThis.devicePixelRatio ?? 1),
                tP = e3?.turnHeightsByKey ?? S,
                [tv, tw] = (0, i.useState)(tP),
                [tb, tS] = (0, i.useState)(null);
            eN[6] !== ta || eN[7] !== tf || eN[8] !== ti || eN[9] !== ty || eN[10] !== tv ? (f = P({
                collapseEmptyRows: ta,
                entries: tf,
                gapPx: ti,
                measuredHeightsByKey: tv,
                pixelScale: ty
            }), eN[6] = ta, eN[7] = tf, eN[8] = ti, eN[9] = ty, eN[10] = tv, eN[11] = f) : f = eN[11];
            let tE = f;
            eN[12] !== eY || eN[13] !== e3 || eN[14] !== tE || eN[15] !== tp ? (x = () => {
                var e, t, n;
                let r, l, o = R(eY);
                return e = tE, t = F(tp.getLastScrollDistanceFromBottomPx(), o), n = e3, l = v({
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
            }, eN[12] = eY, eN[13] = e3, eN[14] = tE, eN[15] = tp, eN[16] = x) : x = eN[16];
            let [tB, tC] = (0, i.useState)(x), [tI] = (0, i.useState)(C), tM = (0, i.useSyncExternalStore)(tI.subscribe, tI.getSnapshot, tI.getSnapshot), tH = (0, i.useRef)(null), tK = (0, i.useRef)(tv), tR = (0, i.useRef)(tB), tF = (0, i.useRef)(null);
            eN[17] === Symbol.for("react.memo_cache_sentinel") ? (E = new Map, eN[17] = E) : E = eN[17];
            let tT = (0, i.useRef)(E);
            eN[18] === Symbol.for("react.memo_cache_sentinel") ? (D = new Map, eN[18] = D) : D = eN[18];
            let tD = (0, i.useRef)(D);
            eN[19] === Symbol.for("react.memo_cache_sentinel") ? (L = new WeakSet, eN[19] = L) : L = eN[19];
            let tL = (0, i.useRef)(L);
            eN[20] === Symbol.for("react.memo_cache_sentinel") ? (k = new Map, eN[20] = k) : k = eN[20];
            let tk = (0, i.useRef)(k);
            eN[21] === Symbol.for("react.memo_cache_sentinel") ? (q = new Map, eN[21] = q) : q = eN[21];
            let tq = (0, i.useRef)(q),
                tO = (0, i.useRef)(null),
                tA = (0, i.useRef)(null),
                tz = (0, i.useRef)(0),
                tU = (0, i.useRef)(null),
                [t_, tN] = (0, i.useState)(null),
                tj = (0, i.useRef)(!1),
                tV = (0, i.useRef)(null),
                tW = (0, i.useRef)(tE),
                t$ = (0, i.useRef)(tE),
                tQ = (0, i.useRef)(tE),
                tG = (0, i.useRef)(null);
            eN[22] !== tv ? (O = () => {
                tv !== tK.current && tw(tK.current)
            }, eN[22] = tv, eN[23] = O) : O = eN[23], eN[24] !== ta || eN[25] !== tf || eN[26] !== ti || eN[27] !== ty || eN[28] !== tv ? (A = [ta, tf, ti, ty, tv], eN[24] = ta, eN[25] = tf, eN[26] = ti, eN[27] = ty, eN[28] = tv, eN[29] = A) : A = eN[29], (0, i.useLayoutEffect)(O, A), eN[30] === Symbol.for("react.memo_cache_sentinel") ? (z = e => {
                tH.current = e, tS(e)
            }, eN[30] = z) : z = eN[30];
            let tX = (0, g.a)(z);
            eN[31] !== ta || eN[32] !== tf || eN[33] !== ti || eN[34] !== tE || eN[35] !== ty || eN[36] !== tv ? (U = () => {
                if (t$.current !== tE) {
                    t$.current = tE, tW.current = tv === tK.current ? tE : P({
                        collapseEmptyRows: ta,
                        entries: tf,
                        gapPx: ti,
                        measuredHeightsByKey: tK.current,
                        pixelScale: ty
                    });
                    let e = tH.current;
                    null != e && (e.style.height = `${tW.current.totalHeightPx}px`)
                }
                return tW.current
            }, eN[31] = ta, eN[32] = tf, eN[33] = ti, eN[34] = tE, eN[35] = ty, eN[36] = tv, eN[37] = U) : U = eN[37];
            let tY = (0, g.a)(U);
            eN[38] !== eY || eN[39] !== tp || eN[40] !== tx ? (_ = e => {
                let t = tp.getScrollElement(),
                    n = tH.current,
                    r = t?.firstElementChild;
                return null == n || null == r ? e - R(eY) : e - (0, s.b)(r.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, tx)
            }, eN[38] = eY, eN[39] = tp, eN[40] = tx, eN[41] = _) : _ = eN[41];
            let tZ = (0, g.a)(_),
                tJ = tB.renderedRange;
            if (null != tM) {
                let e = b({
                    layout: tE,
                    turnKey: tM.turnKey,
                    viewportHeightPx: tB.viewportHeightPx
                });
                null != e && (tJ = v({
                    distanceFromBottomPx: e,
                    layout: tE,
                    overscanCount: 2,
                    viewportHeightPx: tB.viewportHeightPx
                }))
            } else if (!K(tB.turnKeys, tE.turnKeys)) {
                let e = tB.turnKeys[tB.renderedRange.startIndex];
                null != e && (tJ = w({
                    anchorKey: e,
                    layout: tE,
                    previousRange: tJ
                }) ?? v({
                    distanceFromBottomPx: tB.distanceFromBottomPx,
                    layout: tE,
                    overscanCount: 2,
                    viewportHeightPx: tB.viewportHeightPx
                }))
            }
            eN[42] !== e4 ? (N = () => {
                null == tO.current && e4?.()
            }, eN[42] = e4, eN[43] = N) : N = eN[43];
            let t0 = (0, g.a)(N);
            eN[44] === Symbol.for("react.memo_cache_sentinel") ? (j = () => {
                null != tV.current && (window.cancelAnimationFrame(tV.current), tV.current = null)
            }, eN[44] = j) : j = eN[44];
            let t1 = (0, g.a)(j);
            eN[45] !== tf || eN[46] !== eQ || eN[47] !== t0 ? (V = () => {
                null == eQ || tj.current || null != tV.current || null == tH.current || tf.length > 0 && 0 === tD.current.size || (tV.current = window.requestAnimationFrame(() => {
                    tV.current = window.requestAnimationFrame(() => {
                        tV.current = null, tj.current || null == tH.current || tf.length > 0 && 0 === tD.current.size || (tj.current = !0, t0(), eQ())
                    })
                }))
            }, eN[45] = tf, eN[46] = eQ, eN[47] = t0, eN[48] = V) : V = eN[48];
            let t2 = (0, g.a)(V),
                t4 = eV.slice(tJ.startIndex, tJ.endIndex).map((e, t) => ({
                    entry: e,
                    turnIndex: tJ.startIndex + t
                }));
            for (let e of new Set(td)) {
                let t = tE.turnIndexByKey.get(e);
                if (null == t || t >= tJ.startIndex && t < tJ.endIndex) continue;
                let n = eV[t];
                null != n && t4.push({
                    entry: n,
                    turnIndex: t
                })
            }
            t4.sort(B);
            let t3 = null == e9 ? null : function(e, t, n, r) {
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
                }(eV, td, tE, tB.viewportHeightPx + 24),
                t5 = (0, g.a)(e => {
                    e9?.(e > 24 || null != tI.getSnapshot() ? null : t3)
                });
            eN[49] !== t5 || eN[50] !== tp ? (W = () => {
                t5(tp.getLastScrollDistanceFromBottomPx())
            }, eN[49] = t5, eN[50] = tp, eN[51] = W) : W = eN[51];
            let t6 = t3?.oldestProtectedTurnId,
                t8 = t3?.firstProtectedItemId;
            eN[52] !== e9 || eN[53] !== tM || eN[54] !== t5 || eN[55] !== tp || eN[56] !== t6 || eN[57] !== t8 ? ($ = [t6, t8, e9, tM, t5, tp], eN[52] = e9, eN[53] = tM, eN[54] = t5, eN[55] = tp, eN[56] = t6, eN[57] = t8, eN[58] = $) : $ = eN[58], (0, i.useLayoutEffect)(W, $), eN[59] !== tt || eN[60] !== tn || eN[61] !== tp ? (Q = () => {
                if (null == tt || null == tn || null != tO.current || tk.current.size > 0) return;
                let e = tp.getScrollElement(),
                    t = tD.current.get(tt);
                null != e && !(e.clientHeight <= 0) && null != t && tL.current.has(t) && !((tK.current[tt] ?? 0) <= 0) && tn(tt, t)
            }, eN[59] = tt, eN[60] = tn, eN[61] = tp, eN[62] = Q) : Q = eN[62];
            let t7 = (0, g.a)(Q);
            eN[63] !== eY || eN[64] !== e2 || eN[65] !== eZ || eN[66] !== eJ || eN[67] !== t0 || eN[68] !== tp || eN[69] !== tI ? (G = e => {
                let t = R(eY);
                if (null != e.latestTurnHeightChange && eJ?.(e.latestTurnHeightChange), e.restoreScrollDistanceFromBottom) t0();
                else if (null != e.scrollDistanceFromBottomPx) {
                    var n, r;
                    let l, o = e.scrollDistanceFromBottomPx,
                        a = tQ.current,
                        i = tW.current,
                        u = tG.current;
                    eZ?.() && null != e.latestTurnHeightChange && null != u && u.totalHeightPx !== a.totalHeightPx && null == tI.getSnapshot() && e2?.() == null && (n = a, (l = (r = i).turnKeys.length - 1) > 0 && n.turnKeys.length === r.turnKeys.length && n.turnKeys[l] !== r.turnKeys[l] && n.turnKeys.every((e, t) => t === l || e === r.turnKeys[t] && n.topOffsetsPx[t] === r.topOffsetsPx[t] && n.heightsPx[t] === r.heightsPx[t])) && (o = tp.getUnroundedScrollDistanceFromBottomPx(tp.getLastScrollDistanceFromBottomPx()) + i.totalHeightPx - a.totalHeightPx, tG.current = a), tp.compensateScrollToDistanceFromBottomPx(o + R(eY) - t)
                }
                e.afterMeasure?.()
            }, eN[63] = eY, eN[64] = e2, eN[65] = eZ, eN[66] = eJ, eN[67] = t0, eN[68] = tp, eN[69] = tI, eN[70] = G) : G = eN[70];
            let t9 = (0, g.a)(G);
            eN[71] !== tY ? (X = (e, t) => {
                if (null != tO.current || t <= 0) return;
                let n = tR.current,
                    r = M({
                        current: n,
                        distanceFromBottomPx: e,
                        layout: tY(),
                        viewportHeightPx: t
                    });
                r === n || (tR.current = r, r.renderedRange.startIndex === n.renderedRange.startIndex && r.renderedRange.endIndex === n.renderedRange.endIndex && K(r.turnKeys, n.turnKeys) || tC(r))
            }, eN[71] = tY, eN[72] = X) : X = eN[72];
            let ne = (0, g.a)(X);
            eN[73] !== e9 ? (Y = () => () => e9?.(void 0), Z = [e9], eN[73] = e9, eN[74] = Y, eN[75] = Z) : (Y = eN[74], Z = eN[75]), (0, i.useLayoutEffect)(Y, Z), eN[76] !== tY || eN[77] !== e7 ? (J = (e, t, n) => {
                if (null == e7) return;
                let r = tY(),
                    l = Math.max(0, Math.min(r.totalHeightPx, r.totalHeightPx - e)),
                    o = Math.max(0, l - t);
                e7({
                    viewportEndPx: l,
                    viewportStartPx: o
                }, n)
            }, eN[76] = tY, eN[77] = e7, eN[78] = J) : J = eN[78];
            let nt = (0, g.a)(J);
            eN[79] !== tI ? (ee = e => {
                tI.getSnapshot() === e && tI.replace(null)
            }, eN[79] = tI, eN[80] = ee) : ee = eN[80];
            let nn = (0, g.a)(ee);
            eN[81] !== e9 || eN[82] !== tI ? (et = (e, t, n) => n?.signal?.aborted ? Promise.resolve() : (e9?.(null), new Promise(r => {
                let l = () => {
                        tI.getSnapshot() === o && tI.replace(null)
                    },
                    o = {
                        align: n?.align ?? "center",
                        complete: () => {
                            n?.signal?.removeEventListener("abort", l), r()
                        },
                        getTargetElement: t,
                        turnKey: e
                    };
                tC(tR.current), tI.replace(o), n?.signal?.addEventListener("abort", l, {
                    once: !0
                })
            })), eN[81] = e9, eN[82] = tI, eN[83] = et) : et = eN[83];
            let nr = (0, g.a)(et);
            eN[84] !== tY || eN[85] !== eV ? (en = e => {
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
                }(eV, tY(), t, n)
            }, eN[84] = tY, eN[85] = eV, eN[86] = en) : en = eN[86];
            let nl = (0, g.a)(en);
            eN[87] !== tY ? (er = e => {
                let t = tY(),
                    n = t.turnIndexByKey.get(e);
                if (null == n) return null;
                let r = t.topOffsetsPx[n],
                    l = t.heightsPx[n];
                return null == r || null == l ? null : {
                    endPx: r + l,
                    startPx: r
                }
            }, eN[87] = tY, eN[88] = er) : er = eN[88];
            let no = (0, g.a)(er);
            eN[89] !== eJ || eN[90] !== tp || eN[91] !== tx ? (el = () => {
                let e = 0,
                    t = null;
                for (let [n, r] of tq.current) e += r, (null == t || t.compareDocumentPosition(n) === Node.DOCUMENT_POSITION_FOLLOWING) && (t = n);
                null != t && eJ?.({
                    heightDeltaPx: null,
                    heightPx: null,
                    bottomViewportOverflowPx: tp.isNativeEndSnapFollowing?.() ? 0 : T({
                        scrollElement: tp.getScrollElement(),
                        turnElement: t,
                        windowZoom: tx
                    }),
                    turnElement: t,
                    followContentHeightPx: e
                })
            }, eN[89] = eJ, eN[90] = tp, eN[91] = tx, eN[92] = el) : el = eN[92];
            let na = (0, g.a)(el);
            eN[93] !== ta || eN[94] !== t9 || eN[95] !== tf || eN[96] !== ti || eN[97] !== eY || eN[98] !== tY || eN[99] !== tZ || eN[100] !== e2 || eN[101] !== ty || eN[102] !== tu || eN[103] !== tp || eN[104] !== tI || eN[105] !== tx ? (eo = (e, t, n) => {
                var r;
                let l = tY(),
                    o = tp.getScrollElement();
                if (o?.getClientRects().length === 0) return !1;
                let a = tO.current,
                    i = tK.current,
                    c = i,
                    h = 0,
                    d = !1,
                    m = null,
                    g = 0,
                    f = !1,
                    p = !1,
                    x = "controller" === (void 0 === n ? "measured" : n) ? tp.getLastScrollDistanceFromBottomPx({
                        includePendingUserScroll: !0
                    }) : function(e, t) {
                        let n = e.getScrollElement(),
                            r = n?.firstElementChild;
                        if (null == n || null == r || 0 === n.clientHeight) return e.getLastScrollDistanceFromBottomPx();
                        let l = r.getBoundingClientRect();
                        if (0 === l.height) return e.getLastScrollDistanceFromBottomPx();
                        let o = n.scrollTop;
                        return Math.max(0, Math.round(o + (0, s.b)(l.bottom - n.getBoundingClientRect().top, t)) - n.clientHeight) - o
                    }(tp, tx),
                    y = R(eY),
                    v = F(x, y),
                    w = tu ? null : e2?.() ?? null,
                    b = null == a ? v : tR.current.distanceFromBottomPx,
                    S = b;
                if (tu && null == tI.getSnapshot() && e2?.() == null) {
                    let e = K(tQ.current.turnKeys, l.turnKeys) ? l : tQ.current,
                        t = e === l ? a?.scrollDistanceFromBottomPx ?? x : x,
                        n = H({
                            distanceFromBottomPx: tZ(t),
                            preferLatestVisibleRow: t < y,
                            layout: e,
                            measuredHeightsByKey: i,
                            nextLayout: l,
                            viewportHeightPx: tR.current.viewportHeightPx
                        }),
                        r = o?.ownerDocument.activeElement,
                        u = r?.closest("[data-turn-key]"),
                        s = u?.dataset.turnKey;
                    if (o && r && u && s && tD.current.get(s) === u) {
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
                    } = n, o = tD.current.get(t);
                    if (o !== e) continue;
                    r > 0 ? tL.current.add(o) : tL.current.delete(o);
                    let a = Math.max(+!ta, r),
                        u = i[t];
                    if (u === a) continue;
                    c === i && (c = {
                        ...i
                    }), c[t] = a;
                    let s = l.turnIndexByKey.get(t);
                    if (null == s) continue;
                    let x = s === l.turnKeys.length - 1,
                        y = Math.round(Math.max(tf[s]?.minHeightPx ?? 0, a) * ty) / ty,
                        P = y - (l.heightsPx[s] ?? y);
                    p = p || null == u || 0 !== P, x && (d = !0, h += null == u ? 0 : P, m = o), f = f || ta && (0 === y || 0 === l.heightsPx[s]), (l.bottomOffsetsPx[s] ?? 0) <= S && (tu || null != e2 && !x) && (g += P)
                }
                if (c === i) return !1;
                if (!p) return tK.current = c, !1;
                let E = P({
                    collapseEmptyRows: ta,
                    entries: tf,
                    gapPx: ti,
                    measuredHeightsByKey: c,
                    pixelScale: ty
                });
                if (f)
                    for (let [e, t] of E.gapsBeforePx.entries()) {
                        let n = t - (l.gapsBeforePx[e] ?? 0);
                        (l.bottomOffsetsPx[e] ?? 0) + (l.heightsPx[e] ?? 0) <= S && (tu || null != e2 && e !== l.turnKeys.length - 1) && (g += n)
                    }
                let B = tp.isNativeEndSnapFollowing?.(),
                    C = tu && tp.shouldFollowContentGrowth() && (B || (r = x, 0 === y && r <= 24)) && m?.querySelector("[data-preserve-turn-viewport]") == null,
                    I = a?.restoreScrollDistanceFromBottom || null != w,
                    D = null;
                I || (D = C ? 0 : 0 !== g ? (a?.scrollDistanceFromBottomPx ?? tp.getUnroundedScrollDistanceFromBottomPx(x)) + g : a?.scrollDistanceFromBottomPx ?? (tu || !d ? x : null));
                let L = tR.current.distanceFromBottomPx;
                I ? L = w ?? L : null != D && (L = F(D, y));
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
                        latestTurnHeightChange: d || null != q ? {
                            heightDeltaPx: (q?.heightDeltaPx ?? 0) + h,
                            heightPx: E.heightsPx.at(-1) ?? null,
                            bottomViewportOverflowPx: B ? 0 : T({
                                scrollElement: tp.getScrollElement(),
                                turnElement: O,
                                windowZoom: tx
                            }),
                            turnElement: O,
                            followContentHeightPx: null
                        } : null,
                        restoreScrollDistanceFromBottom: I,
                        scrollDistanceFromBottomPx: D,
                        turnHeightsByKey: c
                    },
                    z = tH.current;
                for (let [t, n] of e) {
                    let {
                        element: e
                    } = n, r = E.turnIndexByKey.get(t);
                    tD.current.get(t) === e && null != r && null != e.parentElement && (e.parentElement.style.height = `${E.heightsPx[r]}px`, e.parentElement.style.minHeight = "")
                }
                if (d && 1 === e.size && null == a && k === tR.current && E.gapsBeforePx.at(-1) === l.gapsBeforePx.at(-1) && null != z) return tK.current = c, tW.current = E, tQ.current = E, z.style.height = `${E.totalHeightPx}px`, t9(A), !0;
                null == tG.current && (tG.current = l);
                let U = () => {
                    tK.current = c, tW.current = E, tw(c), k !== tR.current && (tR.current = k, tC(k))
                };
                return tO.current = A, void 0 === t || t ? (0, u.flushSync)(U) : U(), !0
            }, eN[93] = ta, eN[94] = t9, eN[95] = tf, eN[96] = ti, eN[97] = eY, eN[98] = tY, eN[99] = tZ, eN[100] = e2, eN[101] = ty, eN[102] = tu, eN[103] = tp, eN[104] = tI, eN[105] = tx, eN[106] = eo) : eo = eN[106];
            let ni = (0, g.a)(eo);
            eN[107] !== ni || eN[108] !== na || eN[109] !== t7 || eN[110] !== tc ? (ea = e => {
                let t = new Map,
                    n = !1,
                    r = !1;
                for (let l of e) {
                    let e = tT.current.get(l.target);
                    if (null == e) continue;
                    let {
                        height: o
                    } = (0, h.a)(l);
                    switch (e.kind) {
                        case "turn": {
                            n = !0;
                            let r = e.turnKey,
                                a = tD.current.get(r);
                            if (o > 0 && a === l.target && tL.current.has(a) && tK.current[r] === o) break;
                            t.set(r, {
                                element: l.target,
                                heightPx: o
                            });
                            break
                        }
                        case "latest-turn-follow-content":
                            tq.current.set(e.element, o), r = !0
                    }
                }!(t.size > 0) && (n || tc) || ni(t), r && na(), t7()
            }, eN[107] = ni, eN[108] = na, eN[109] = t7, eN[110] = tc, eN[111] = ea) : ea = eN[111];
            let nu = (0, g.a)(ea);
            eN[112] !== nu ? (ei = () => {
                if (null != tA.current) return tA.current;
                let e = new ResizeObserver(nu);
                return tA.current = e, e
            }, eN[112] = nu, eN[113] = ei) : ei = eN[113];
            let ns = (0, g.a)(ei);
            eN[114] !== ns || eN[115] !== t2 ? (eu = (e, t) => {
                if (null == t) return;
                tT.current.set(t, {
                    kind: "turn",
                    turnKey: e
                }), tD.current.set(e, t), tL.current.delete(t), tk.current.set(e, t);
                let n = ns();
                return n.observe(t), t2(), () => {
                    n.unobserve(t), tT.current.delete(t), tk.current.get(e) === t && tk.current.delete(e), tD.current.get(e) === t && tD.current.delete(e)
                }
            }, eN[114] = ns, eN[115] = t2, eN[116] = eu) : eu = eN[116];
            let nc = (0, g.a)(eu);
            eN[117] !== ni || eN[118] !== tx ? (es = (e, t) => {
                let n = tD.current.get(e);
                if (null == n) return;
                let r = (0, s.b)(n.getBoundingClientRect().height, tx);
                if (!(r <= 0) && (ni(new Map([
                        [e, {
                            element: n,
                            heightPx: r
                        }]
                    ]), !1), null != t)) {
                    let e = tO.current;
                    null == e ? t() : e.afterMeasure = t
                }
            }, eN[117] = ni, eN[118] = tx, eN[119] = es) : es = eN[119];
            let nh = (0, g.a)(es);
            eN[120] !== ns ? (ec = e => {
                if (null == e) return;
                tT.current.set(e, {
                    element: e,
                    kind: "latest-turn-follow-content"
                }), tq.current.set(e, 0);
                let t = ns();
                return t.observe(e), () => {
                    t.unobserve(e), tT.current.delete(e), tq.current.delete(e)
                }
            }, eN[120] = ns, eN[121] = ec) : ec = eN[121];
            let nd = (0, g.a)(ec);
            eN[122] !== ni || eN[123] !== tx ? (eh = () => {
                let e = tk.current;
                if (0 === e.size) {
                    tz.current = 0;
                    return
                }
                if (null != tU.current) return;
                if (tz.current >= 8) {
                    tU.current = requestAnimationFrame(e => {
                        tU.current = null, tz.current = 0, tN(e)
                    });
                    return
                }
                tz.current = tz.current + 1, tk.current = new Map;
                let t = new Map;
                if ((0, c.a)("virtualizedTurnList.readMountedHeights", () => {
                        for (let [n, r] of e) {
                            if (tD.current.get(n) !== r) continue;
                            let e = (0, s.b)(r.getBoundingClientRect().height, tx);
                            e > 0 && t.set(n, {
                                element: r,
                                heightPx: e
                            })
                        }
                    }, e.size), t.size > 0) {
                    let n = tK.current;
                    if (ni(t, !1, "controller"))
                        for (let [t, r] of e)(null == n[t] || tz.current > 1) && tD.current.get(t) === r && tk.current.set(t, r);
                    else tz.current = 0
                }
            }, eN[122] = ni, eN[123] = tx, eN[124] = eh) : eh = eN[124], (0, i.useLayoutEffect)(eh), eN[125] !== tf || eN[126] !== nh || eN[127] !== tr ? (ed = () => {
                let e = tr ?? tf.at(-1)?.turnKey;
                null != e && nh(e)
            }, eN[125] = tf, eN[126] = nh, eN[127] = tr, eN[128] = ed) : ed = eN[128];
            let nm = (0, g.a)(ed);
            eN[129] !== te || eN[130] !== nm ? (em = () => {
                null != te && nm()
            }, eg = [te, nm], eN[129] = te, eN[130] = nm, eN[131] = em, eN[132] = eg) : (em = eN[131], eg = eN[132]), (0, i.useLayoutEffect)(em, eg), eN[133] !== t9 || eN[134] !== tv ? (ef = () => {
                let e = tO.current;
                null != e && e.turnHeightsByKey === tv && (tO.current = null, t9(e))
            }, ep = [t9, tv], eN[133] = t9, eN[134] = tv, eN[135] = ef, eN[136] = ep) : (ef = eN[135], ep = eN[136]), (0, i.useLayoutEffect)(ef, ep), eN[137] !== tf || eN[138] !== tm || eN[139] !== tE.heightsPx || eN[140] !== ts || eN[141] !== tv || eN[142] !== tb || eN[143] !== tx ? (ex = e => {
                if (!ts || tm?.viewportHeightPx === e) return;
                if (null != tm) return void(0, u.flushSync)(() => {
                    tg({
                        ...tm,
                        viewportHeightPx: e
                    })
                });
                let t = tb?.closest("[data-thread-user-message-navigation-content]"),
                    n = t?.lastElementChild,
                    r = tf.at(-1)?.turnKey;
                if (null == t || null == n || null == r || tf.some(e => null == tv[e.turnKey])) return;
                let l = (0, s.b)(t.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, tx) - parseFloat(getComputedStyle(t).paddingBottom);
                l <= 24 || (0, u.flushSync)(() => {
                    tg({
                        turnKey: r,
                        heightOutsideTurnPx: e - (tE.heightsPx.at(-1) ?? 0) - l,
                        viewportHeightPx: e
                    })
                })
            }, eN[137] = tf, eN[138] = tm, eN[139] = tE.heightsPx, eN[140] = ts, eN[141] = tv, eN[142] = tb, eN[143] = tx, eN[144] = ex) : ex = eN[144];
            let ng = (0, g.a)(ex);
            eN[145] !== nl || eN[146] !== no || eN[147] !== nh || eN[148] !== e$ || eN[149] !== nr ? (ey = () => {
                if (null != e$) return e$({
                    getEntriesInViewport: nl,
                    getEntryGeometry: no,
                    measureTurnBeforePaint: nh,
                    scrollToKey: nr
                }), () => {
                    e$(null)
                }
            }, eP = [nl, no, nh, e$, nr], eN[145] = nl, eN[146] = no, eN[147] = nh, eN[148] = e$, eN[149] = nr, eN[150] = ey, eN[151] = eP) : (ey = eN[150], eP = eN[151]), (0, i.useEffect)(ey, eP), eN[152] !== t1 ? (ev = () => () => {
                tj.current = !1, t1()
            }, ew = [t1], eN[152] = t1, eN[153] = ev, eN[154] = ew) : (ev = eN[153], ew = eN[154]), (0, i.useLayoutEffect)(ev, ew), eN[155] !== t1 || eN[156] !== t2 ? (eb = () => (t2(), t1), eN[155] = t1, eN[156] = t2, eN[157] = eb) : eb = eN[157], eN[158] !== t1 || eN[159] !== tf.length || eN[160] !== eQ || eN[161] !== t2 || eN[162] !== tb ? (eS = [t1, tf.length, eQ, t2, tb], eN[158] = t1, eN[159] = tf.length, eN[160] = eQ, eN[161] = t2, eN[162] = tb, eN[163] = eS) : eS = eN[163], (0, i.useEffect)(eb, eS), eN[164] !== tI ? (eE = () => {
                let e = tT.current,
                    t = tD.current,
                    n = tq.current;
                return () => {
                    null != tU.current && (cancelAnimationFrame(tU.current), tU.current = null), tA.current?.disconnect(), tA.current = null, e.clear(), t.clear(), tk.current.clear(), n.clear(), tO.current = null, tI.replace(null)
                }
            }, eB = [tI], eN[164] = tI, eN[165] = eE, eN[166] = eB) : (eE = eN[165], eB = eN[166]), (0, i.useEffect)(eE, eB), eN[167] !== e8 ? (eC = () => {
                if (null != e8) return () => {
                    e8(function(e, t, n) {
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
                    }(tK.current, tR.current.turnKeys, tR.current.renderedRange))
                }
            }, eI = [e8], eN[167] = e8, eN[168] = eC, eN[169] = eI) : (eC = eN[168], eI = eN[169]), (0, i.useLayoutEffect)(eC, eI);
            let {
                addScrollListener: nf,
                addUserScrollListener: np,
                getScrollElement: nx
            } = tp;
            eN[170] !== nf || eN[171] !== np || eN[172] !== eY || eN[173] !== nx || eN[174] !== ng || eN[175] !== ts || eN[176] !== t5 || eN[177] !== t7 || eN[178] !== nt || eN[179] !== t0 || eN[180] !== tb || eN[181] !== ne ? (eM = () => {
                let e = nx();
                if (null == e) return;
                let t = () => (null == tF.current && (tF.current = e.clientHeight), tF.current || tR.current.viewportHeightPx || 800),
                    n = nf(e => {
                        ne(F(e, R(eY)), t()), t5(e)
                    }),
                    r = np((e, n) => {
                        nt(F(e, R(eY)), t(), null != n && e > n)
                    }),
                    l = new ResizeObserver(n => {
                        let r = n.find(t => t.target === e);
                        if (null != r) {
                            let {
                                height: e
                            } = (0, h.a)(r);
                            tF.current = e, ne(tR.current.distanceFromBottomPx, e), t0()
                        }
                        ng(t()), t7()
                    });
                return l.observe(e), ts && null != tb && l.observe(tb), () => {
                    n(), r(), l.disconnect()
                }
            }, eH = [nf, np, eY, nx, ng, t7, ts, nt, t5, t0, tb, ne], eN[170] = nf, eN[171] = np, eN[172] = eY, eN[173] = nx, eN[174] = ng, eN[175] = ts, eN[176] = t5, eN[177] = t7, eN[178] = nt, eN[179] = t0, eN[180] = tb, eN[181] = ne, eN[182] = eM, eN[183] = eH) : (eM = eN[182], eH = eN[183]), (0, i.useLayoutEffect)(eM, eH), eN[184] !== ni || eN[185] !== eY || eN[186] !== tE || eN[187] !== tM || eN[188] !== tp || eN[189] !== tI || eN[190] !== nn || eN[191] !== ne || eN[192] !== tx ? (eK = () => {
                if (null == tM || tI.getSnapshot() !== tM || null != tU.current) return;
                let e = tp.getScrollElement();
                if (null == e) return;
                let t = new Map;
                for (let [e, n] of tD.current) {
                    let r = (0, s.b)(n.getBoundingClientRect().height, tx);
                    r > 0 && t.set(e, {
                        element: n,
                        heightPx: r
                    })
                }
                if (ni(t, !1) || null != tO.current) return;
                let n = tD.current.get(tM.turnKey),
                    r = null == n ? null : tM.getTargetElement?.(n) ?? n,
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
                        align: tM.align,
                        layout: tE,
                        turnKey: tM.turnKey,
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
                            m = (0, s.b)(h.height, a),
                            g = (n.bottomOffsetsPx[u] ?? 0) + (n.heightsPx[u] ?? 0) - d;
                        return "top" === t ? Math.max(0, g - i + 10) : Math.max(0, g - m / 2 - i / 2)
                    }({
                        align: tM.align,
                        layout: tE,
                        targetElement: r,
                        turnElement: n,
                        turnKey: tM.turnKey,
                        viewportHeightPx: e.clientHeight,
                        windowZoom: tx
                    });
                if (null == l) return void queueMicrotask(() => nn(tM));
                let o = "top" === tM.align && null != r ? Math.max(0, tp.getLastScrollDistanceFromBottomPx() - (0, s.b)(r.getBoundingClientRect().top - e.getBoundingClientRect().top, tx) + 10) : l + R(eY);
                tp.scrollToDistanceFromBottomPx(o, "instant", "user"), ne(Math.max(0, o - R(eY)), e.clientHeight), queueMicrotask(() => nn(tM))
            }, eN[184] = ni, eN[185] = eY, eN[186] = tE, eN[187] = tM, eN[188] = tp, eN[189] = tI, eN[190] = nn, eN[191] = ne, eN[192] = tx, eN[193] = eK) : eK = eN[193], eN[194] !== ni || eN[195] !== eY || eN[196] !== tE || eN[197] !== t_ || eN[198] !== tM || eN[199] !== tp || eN[200] !== tI || eN[201] !== nn || eN[202] !== ne || eN[203] !== tx ? (eR = [ni, tE, t_, tM, tp, tI, nn, eY, ne, tx], eN[194] = ni, eN[195] = eY, eN[196] = tE, eN[197] = t_, eN[198] = tM, eN[199] = tp, eN[200] = tI, eN[201] = nn, eN[202] = ne, eN[203] = tx, eN[204] = eR) : eR = eN[204], (0, i.useLayoutEffect)(eK, eR), eN[205] !== eY || eN[206] !== tY || eN[207] !== tZ || eN[208] !== e2 || eN[209] !== tM || eN[210] !== tu || eN[211] !== tp || eN[212] !== ne ? (eF = () => {
                var e;
                if (null != tO.current) return;
                let t = tQ.current,
                    n = tY(),
                    r = tG.current ?? n;
                if (tG.current = null, tQ.current = n, null != tM || !tu && t.turnKeys.at(-1) !== r.turnKeys.at(-1) || t === r) return;
                let l = R(eY),
                    o = tp.getLastScrollDistanceFromBottomPx({
                        includePendingUserScroll: !0
                    });
                if (null != (e2?.() ?? null)) return;
                if (tp.shouldFollowContentGrowth() && (e = o, 0 === l && e <= 24)) return void tp.compensateScrollToDistanceFromBottomPx(0);
                let a = H({
                    distanceFromBottomPx: tZ(o),
                    preferLatestVisibleRow: o < l,
                    layout: t,
                    measuredHeightsByKey: tK.current,
                    nextLayout: r,
                    viewportHeightPx: tR.current.viewportHeightPx
                });
                if (null == a) return;
                let i = tp.getUnroundedScrollDistanceFromBottomPx(o),
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
                null != u && (u !== i || t.totalHeightPx !== r.totalHeightPx) && (ne(F(u, l), tR.current.viewportHeightPx), tp.compensateScrollToDistanceFromBottomPx(u))
            }, eN[205] = eY, eN[206] = tY, eN[207] = tZ, eN[208] = e2, eN[209] = tM, eN[210] = tu, eN[211] = tp, eN[212] = ne, eN[213] = eF) : eF = eN[213], eN[214] !== eY || eN[215] !== tY || eN[216] !== tZ || eN[217] !== e2 || eN[218] !== tE || eN[219] !== tM || eN[220] !== tu || eN[221] !== tp || eN[222] !== ne ? (eT = [eY, tY, tZ, e2, tE, tM, tu, tp, ne], eN[214] = eY, eN[215] = tY, eN[216] = tZ, eN[217] = e2, eN[218] = tE, eN[219] = tM, eN[220] = tu, eN[221] = tp, eN[222] = ne, eN[223] = eT) : eT = eN[223], (0, i.useLayoutEffect)(eF, eT), eN[224] !== tM || eN[225] !== nt || eN[226] !== t0 || eN[227] !== ne ? (eD = () => {
                null == tM && null == tO.current && (ne(tR.current.distanceFromBottomPx, tR.current.viewportHeightPx), t0(), nt(tR.current.distanceFromBottomPx, tR.current.viewportHeightPx, !1))
            }, eN[224] = tM, eN[225] = nt, eN[226] = t0, eN[227] = ne, eN[228] = eD) : eD = eN[228], eN[229] !== tE || eN[230] !== tM || eN[231] !== nt || eN[232] !== t0 || eN[233] !== ne ? (eL = [tE, tM, nt, t0, ne], eN[229] = tE, eN[230] = tM, eN[231] = nt, eN[232] = t0, eN[233] = ne, eN[234] = eL) : eL = eN[234], (0, i.useLayoutEffect)(eD, eL), eN[235] !== t7 ? (ek = () => {
                t7()
            }, eN[235] = t7, eN[236] = ek) : ek = eN[236], (0, i.useLayoutEffect)(ek), eN[237] !== tf || eN[238] !== e6 ? (eq = e6 ?? tf.at(-1)?.turnKey, eN[237] = tf, eN[238] = e6, eN[239] = eq) : eq = eN[239];
            let ny = eq;
            eN[240] !== eG ? (eO = (0, o.b)("relative shrink-0", eG), eN[240] = eG, eN[241] = eO) : eO = eN[241], eN[242] !== tE.totalHeightPx ? (eA = {
                height: tE.totalHeightPx
            }, eN[242] = tE.totalHeightPx, eN[243] = eA) : eA = eN[243];
            let nP = `${tE.topOffsetsPx[tJ.startIndex]??0}px`;
            eN[244] !== nP ? (ez = {
                marginTop: nP
            }, eN[244] = nP, eN[245] = ez) : ez = eN[245];
            let nv = t4.map(e => {
                let {
                    entry: t,
                    turnIndex: n
                } = e;
                return (0, r.jsx)(I, {
                    entry: t,
                    gapBeforePx: n === tJ.startIndex ? 0 : tE.gapsBeforePx[n] ?? 0,
                    retainedTopPx: n < tJ.startIndex || n >= tJ.endIndex ? tE.topOffsetsPx[n] : void 0,
                    latestTurnFollowContentRef: n === tf.length - 1 && null != eJ ? nd : void 0,
                    latestTurnFooter: t.turnKey === ny ? e5 : void 0,
                    RowComponent: eW,
                    measuredHeightPx: null == tv[t.turnKey] ? void 0 : tE.heightsPx[n],
                    constrainedHeightPx: n !== tf.length - 1 && tM?.turnKey !== t.turnKey && null == tv[t.turnKey] ? tE.heightsPx[n] : void 0,
                    observeTurnElement: nc
                }, t.turnKey)
            });
            return eN[246] !== ez || eN[247] !== nv ? (eU = (0, r.jsx)("div", {
                className: "flex flex-col",
                style: ez,
                children: nv
            }), eN[246] = ez, eN[247] = nv, eN[248] = eU) : eU = eN[248], eN[249] !== tX || eN[250] !== eO || eN[251] !== eA || eN[252] !== eU ? (e_ = (0, r.jsx)("div", {
                ref: tX,
                className: eO,
                style: eA,
                children: eU
            }), eN[249] = tX, eN[250] = eO, eN[251] = eA, eN[252] = eU, eN[253] = e_) : e_ = eN[253], e_
        }

        function B(e, t) {
            return e.turnIndex - t.turnIndex
        }

        function C() {
            return new D
        }
        let I = (0, i.memo)(function(e) {
            let t, n, a, i, u, s, c = (0, l.c)(24),
                {
                    entry: h,
                    gapBeforePx: d,
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
                } = h;
            c[0] !== v || c[1] !== w ? (t = e => v(w, e), c[0] = v, c[1] = w, c[2] = t) : t = c[2];
            let b = (0, g.a)(t),
                S = null != P && "absolute inset-x-0",
                E = null != x && "overflow-hidden";
            c[3] !== S || c[4] !== E ? (n = (0, o.b)(S, E), c[3] = S, c[4] = E, c[5] = n) : n = c[5];
            let B = y ?? x,
                C = null == P ? d : 0,
                I = null == y ? h.minHeightPx : void 0;
            return c[6] !== P || c[7] !== B || c[8] !== C || c[9] !== I ? (a = {
                height: B,
                marginTop: C,
                minHeight: I,
                top: P
            }, c[6] = P, c[7] = B, c[8] = C, c[9] = I, c[10] = a) : a = c[10], c[11] !== p || c[12] !== h || c[13] !== m || c[14] !== f ? (i = (0, r.jsx)(p, {
                entry: h,
                latestTurnFooter: f,
                latestTurnFollowContentRef: m
            }), c[11] = p, c[12] = h, c[13] = m, c[14] = f, c[15] = i) : i = c[15], c[16] !== b || c[17] !== i || c[18] !== w ? (u = (0, r.jsx)("div", {
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
            return r.distanceFromBottomPx === i && r.viewportHeightPx === a && r.renderedRange.startIndex === s.startIndex && r.renderedRange.endIndex === s.endIndex && K(r.turnKeys, o.turnKeys) ? r : {
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

        function K(e, t) {
            return e === t || e.length === t.length && e.every((e, n) => e === t[n])
        }

        function R(e) {
            return Math.max(0, e?.() ?? 0)
        }

        function F(e, t) {
            return Math.max(0, e - t)
        }

        function T(e) {
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
            h = n("qZWE");
        n.d(t, {}, {
            a: function(e) {
                let t, n, d, m, g, f = (0, r.c)(14);
                f[0] !== e ? (t = void 0 === e ? {} : e, f[0] = e, f[1] = t) : t = f[1];
                let {
                    transcriptMcpAppIds: p,
                    blockedWidgetSource: x,
                    shouldBlockExternalEgress: y
                } = t, P = void 0 !== y && y, v = (0, l.y)(s.a), w = (0, l.y)(u.a), b = (0, l.z)(h.i), S = (0, l.z)(a.w);
                return f[2] !== S || f[3] !== x || f[4] !== w || f[5] !== b || f[6] !== v || f[7] !== P || f[8] !== p ? (n = () => {
                    for (let [e, t] of("chatgpt-thread" === v.value.routeKind && (0, i.b)(w, S.filter(e => P || null != x && (e.widgetSource ?? "descriptor") === x)), b))(P || null != x && (t.content.mcpAppScope.widgetSource ?? "descriptor") === x || t.hostedInThreadScrollLayout && p?.has(e) === !1) && (0, h.z)(v, e)
                }, d = [S, x, p, w, b, v, P], f[2] = S, f[3] = x, f[4] = w, f[5] = b, f[6] = v, f[7] = P, f[8] = p, f[9] = n, f[10] = d) : (n = f[9], d = f[10]), (0, o.useLayoutEffect)(n, d), f[11] !== v ? (m = () => {
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
                let t, n, c, h = (0, r.c)(18),
                    {
                        ready: d,
                        onNavigate: m
                    } = e,
                    g = (0, l.y)(s.a),
                    f = (0, l.z)(i.f),
                    p = (0, a.Y)(),
                    x = p.state,
                    y = x?.sidebarArea === "scheduled";
                h[0] !== f || h[1] !== p.key ? (t = {
                    locationKey: p.key,
                    accountId: f
                }, h[0] = f, h[1] = p.key, h[2] = t) : t = h[2];
                let P = (0, l.x)(u.a, t),
                    v = (0, o.useEffectEvent)(m);
                return h[3] !== f || h[4] !== P || h[5] !== p.key || h[6] !== v || h[7] !== d || h[8] !== y || h[9] !== g ? (n = () => {
                    if (!y || !d || P) return;
                    let e = new AbortController;
                    return v(e.signal).then(() => {
                        e.signal.aborted || g.set(u.a, {
                            locationKey: p.key,
                            accountId: f
                        }, !0)
                    }), () => e.abort()
                }, h[3] = f, h[4] = P, h[5] = p.key, h[6] = v, h[7] = d, h[8] = y, h[9] = g, h[10] = n) : n = h[10], h[11] !== f || h[12] !== P || h[13] !== p.key || h[14] !== d || h[15] !== y || h[16] !== g ? (c = [f, P, p.key, d, y, g], h[11] = f, h[12] = P, h[13] = p.key, h[14] = d, h[15] = y, h[16] = g, h[17] = c) : c = h[17], (0, o.useEffect)(n, c), null
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
                isPlacementAnimating = () => null != this.stopPlacementAnimation;
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
        let h = Array.from({
            length: 101
        }, (e, t) => t / 100);
        n.d(t, {}, {
            a: function(e) {
                let t, n, d, m, g, f, p, x, y, P, v, w, b, S, E = (0, l.c)(31),
                    {
                        controller: B,
                        onReleased: C
                    } = e,
                    I = (0, c.b)(),
                    M = (0, o.useContext)(i.a),
                    H = (0, a.a)(),
                    {
                        getScrollElement: K
                    } = I;
                E[0] !== B ? (t = e => {
                    B.setElement(e)
                }, E[0] = B, E[1] = t) : t = E[1];
                let R = (0, s.a)(t);
                return E[2] !== B || E[3] !== C || E[4] !== H || E[5] !== I ? (n = () => {
                    B.updateContext(I, H, C)
                }, d = [B, I, H, C], E[2] = B, E[3] = C, E[4] = H, E[5] = I, E[6] = n, E[7] = d) : (n = E[6], d = E[7]), (0, o.useInsertionEffect)(n, d), E[8] !== B || E[9] !== K ? (m = () => {
                    let e = K();
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
                }, g = [B, K], E[8] = B, E[9] = K, E[10] = m, E[11] = g) : (m = E[10], g = E[11]), (0, o.useEffect)(m, g), E[12] !== B.cancelPendingUserScrollDecay ? (f = () => B.cancelPendingUserScrollDecay, E[12] = B.cancelPendingUserScrollDecay, E[13] = f) : f = E[13], E[14] !== B ? (p = [B], E[14] = B, E[15] = p) : p = E[15], (0, o.useEffect)(f, p), E[16] !== B || E[17] !== K ? (x = () => {
                    let e = K();
                    if (null == e || "u" < typeof IntersectionObserver) return;
                    let t = new IntersectionObserver(B.collapseIfHidden, {
                            root: e,
                            threshold: h
                        }),
                        n = B.getElement();
                    return null != n && t.observe(n), () => t.disconnect()
                }, y = [B, K], E[16] = B, E[17] = K, E[18] = x, E[19] = y) : (x = E[18], y = E[19]), (0, o.useEffect)(x, y), E[20] !== B || E[21] !== I ? (P = () => {
                    let e = I.addScrollListener(B.handleScroll),
                        t = I.addUserScrollListener(B.handleUserScroll);
                    return B.reconcileViewport(), () => {
                        e(), t()
                    }
                }, v = [B, I], E[20] = B, E[21] = I, E[22] = P, E[23] = v) : (P = E[22], v = E[23]), (0, o.useLayoutEffect)(P, v), E[24] !== B || E[25] !== K || E[26] !== M ? (w = () => {
                    let e = K();
                    if (null == e) return;
                    let t = null,
                        n = () => {
                            null == t && (t = window.requestAnimationFrame(() => {
                                t = null, B.reconcileViewport()
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
                }, b = [B, K, M], E[24] = B, E[25] = K, E[26] = M, E[27] = w, E[28] = b) : (w = E[27], b = E[28]), (0, o.useEffect)(w, b), E[29] !== R ? (S = (0, r.jsx)("div", {
                    ref: R,
                    className: "shrink-0",
                    "aria-hidden": !0
                }), E[29] = R, E[30] = S) : S = E[30], S
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
                let t, n, o, a, v, S, E, B, C, I, M, H, K, R, F, T, D, L = (0, r.c)(73);
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
                    G = (0, s.z)(d.G),
                    X = (0, s.z)(p.g),
                    Y = (0, s.z)(P.b),
                    Z = _ && $,
                    J = O ?? 300,
                    ee = _ && null == O && (q ?? (Y.isPopoverOpen || "boolean" != typeof N && $)),
                    et = (0, s.z)(f.c),
                    en = (0, c.useContext)(h.c),
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
                L[19] !== eo ? (E = eo.get(), L[19] = eo, L[20] = E) : E = L[20], L[21] !== el ? (B = el.get(), L[21] = el, L[22] = B) : B = L[22], L[23] !== B || L[24] !== E ? (C = {
                    offset: E,
                    width: B
                }, L[23] = B, L[24] = E, L[25] = C) : C = L[25];
                let es = (0, c.useRef)(C),
                    ec = (0, c.useRef)(!1),
                    eh = (0, c.useRef)(k),
                    ed = (0, c.useRef)(Q),
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
                    let e = ed.current !== Q,
                        t = em.current !== G;
                    if (!ec.current && eh.current === k && !e && !t) return;
                    ec.current = !1, eh.current = k, ed.current = Q, em.current = G;
                    let n = w(j, _, A?.() ?? N, el.get(), O, q);
                    es.current = {
                        offset: n,
                        width: el.get()
                    }, eu.current?.(), eo.jump(n)
                }, H = [eo, k, q, O, A, G, _, el, N, Q, j], L[30] = eo, L[31] = k, L[32] = q, L[33] = O, L[34] = A, L[35] = G, L[36] = _, L[37] = el, L[38] = N, L[39] = Q, L[40] = j, L[41] = M, L[42] = H) : (M = L[41], H = L[42]), (0, c.useLayoutEffect)(M, H);
                let ex = en?.chatPaneWidth ?? el;
                L[43] !== ex || L[44] !== eo || L[45] !== q || L[46] !== O || L[47] !== A || L[48] !== _ || L[49] !== el || L[50] !== N || L[51] !== j || L[52] !== et ? (K = () => {
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
                        e(t, et || 0 === el.getPrevious() || j.get(m.h) !== ed.current)
                    })
                }, L[43] = ex, L[44] = eo, L[45] = q, L[46] = O, L[47] = A, L[48] = _, L[49] = el, L[50] = N, L[51] = j, L[52] = et, L[53] = K) : K = L[53], L[54] !== ex || L[55] !== eo || L[56] !== q || L[57] !== O || L[58] !== A || L[59] !== _ || L[60] !== Z || L[61] !== el || L[62] !== N || L[63] !== j || L[64] !== et ? (R = [ex, eo, q, O, A, _, Z, el, N, j, et], L[54] = ex, L[55] = eo, L[56] = q, L[57] = O, L[58] = A, L[59] = _, L[60] = Z, L[61] = el, L[62] = N, L[63] = j, L[64] = et, L[65] = R) : R = L[65], (0, c.useLayoutEffect)(K, R), L[66] === Symbol.for("react.memo_cache_sentinel") ? (F = () => () => {
                    ec.current = !0, eu.current?.()
                }, T = [], L[66] = F, L[67] = T) : (F = L[66], T = L[67]), (0, c.useLayoutEffect)(F, T);
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
                let n, i, u, d, g, f, p = (0, r.c)(15),
                    y = void 0 !== t && t,
                    w = (0, s.z)(m.i),
                    b = (0, s.z)(m.r),
                    S = (0, c.useContext)(h.c),
                    E = (0, l.a)(0),
                    B = S?.mainContentTargetWidth ?? E;
                p[0] !== y || p[1] !== B || p[2] !== e ? (n = () => {
                    var t, n;
                    t = e, n = y ? "overlay" : (0, x.c)(B.get()), t.set(P.b, e => {
                        let t = "overlay" === n && e.isPopoverOpen;
                        return e.displayMode === n && e.isPopoverOpen === t ? e : {
                            displayMode: n,
                            isPopoverOpen: t
                        }
                    })
                }, p[0] = y, p[1] = B, p[2] = e, p[3] = n) : n = p[3];
                let C = n;
                p[4] !== C ? (i = () => {
                    o.b.update(C)
                }, p[4] = C, p[5] = i) : i = p[5], (0, a.a)(B, "change", i), p[6] !== C ? (u = () => (C(), () => (0, o.a)(C)), p[6] = C, p[7] = u) : u = p[7], p[8] !== w || p[9] !== b || p[10] !== C ? (d = [w, b, C], p[8] = w, p[9] = b, p[10] = C, p[11] = d) : d = p[11], (0, c.useLayoutEffect)(u, d), p[12] !== e ? (g = () => () => {
                    e.set(P.b, v)
                }, f = [e], p[12] = e, p[13] = g, p[14] = f) : (g = p[13], f = p[14]), (0, c.useLayoutEffect)(g, f)
            }
        })
    })
};