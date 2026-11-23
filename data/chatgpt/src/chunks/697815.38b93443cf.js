export const __rspack_esm_ids = [697815];
export const __webpack_modules__ = {
    TS05: (function(a, b, c) {
        var d = c("Q840"),
            e = c("tSEg");
        let f = (0, d.v)(e.a, a => !1, void 0, {
            autoDispose: 6e4
        });
        c.d(b, {}, {
            a: f
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
                        l = i && null != j && null == (0, g.j)({
                            container: j,
                            matchId: k,
                            includeShadowRoots: !1
                        });
                    if (null == j || e || l) {
                        if (c?.signal?.aborted || (await m.scrollToTurn(f, c, h), c?.signal?.aborted)) return;
                        j = m.getTurnContainer(f)
                    }
                    null != j && await (0, p.b)({
                        container: j,
                        matchId: k,
                        includeShadowRoots: !1,
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
                        } = await Promise.all([c.e(990054), c.e(559373)]).then(c.bind(c, "RlG8")), h = i(d), j = new Map(h.map(a => {
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
            D[11] !== J?.runId || D[12] !== P || D[13] !== R || D[14] !== N || D[15] !== E || D[16] !== O || D[17] !== M ? (s = () => {
                let a, b = E.current;
                if (null == b || J?.runId == null) return;
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
                    e.disconnect(), c?.abort(), N(), (0, g.b)(b, {
                        includeShadowRoots: !1
                    })
                }
            }, D[11] = J?.runId, D[12] = P, D[13] = R, D[14] = N, D[15] = E, D[16] = O, D[17] = M, D[18] = s) : s = D[18];
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
    hkBU: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("zd8w"),
            g = c("Wf1j"),
            h = c("oyxz");
        c.d(b, {}, {
            a: function(a) {
                let b, c, i, j, k, l, m = (0, e.c)(9),
                    {
                        onNavigate: n
                    } = a,
                    o = (0, f.useRef)(null),
                    p = (0, f.useRef)(null),
                    q = (0, g.a)();
                return m[0] === Symbol.for("react.memo_cache_sentinel") ? (b = () => {
                    let a = o.current;
                    if (null == a) return;
                    let b = a.ownerDocument,
                        c = a.closest("[data-thread-scroll-footer]") ?? a.parentElement,
                        d = () => {
                            let c = b.activeElement;
                            null != c && a.compareDocumentPosition(c) === Node.DOCUMENT_POSITION_FOLLOWING && (a.tabIndex = 0)
                        },
                        e = b => {
                            "Tab" !== b.key || b.shiftKey || b.defaultPrevented || (a.tabIndex = -1)
                        };
                    return b.addEventListener("keydown", e), c?.addEventListener("focusin", d), () => {
                        b.removeEventListener("keydown", e), c?.removeEventListener("focusin", d), p.current?.abort()
                    }
                }, c = [], m[0] = b, m[1] = c) : (b = m[0], c = m[1]), (0, f.useEffect)(b, c), m[2] === Symbol.for("react.memo_cache_sentinel") ? (i = () => p.current?.abort(), m[2] = i) : i = m[2], m[3] !== q || m[4] !== n ? (j = a => {
                    p.current?.abort();
                    let b = a.currentTarget;
                    b.tabIndex = -1;
                    let c = new AbortController;
                    p.current = c, n(c.signal).then(a => {
                        !c.signal.aborted && b.isConnected && b.ownerDocument.activeElement === b && (a?.isConnected ? a.focus({
                            preventScroll: !0
                        }) : b.ariaNotify(q.formatMessage({
                            id: "codex.conversation.latestResponseUnavailable",
                            defaultMessage: "No response available"
                        })))
                    })
                }, m[3] = q, m[4] = n, m[5] = j) : j = m[5], m[6] === Symbol.for("react.memo_cache_sentinel") ? (k = (0, d.jsx)(h.a, {
                    id: "codex.conversation.latestResponse",
                    defaultMessage: "Latest response"
                }), m[6] = k) : k = m[6], m[7] !== j ? (l = (0, d.jsx)("h4", {
                    ref: o,
                    className: "sr-only m-0 select-none",
                    tabIndex: 0,
                    onBlur: i,
                    onFocus: j,
                    children: k
                }), m[7] = j, m[8] = l) : l = m[8], l
            }
        })
    }),
    cP1f: (function(a, b, c) {
        c.d(b, {}, {
            a: async function(a, b, c) {
                if (null == a || null == b || c.aborted) return null;
                let d = null;
                return await a(b, a => {
                    let b = a.querySelectorAll('[data-conversation-role="assistant"]');
                    return d = b.item(b.length - 1)
                }, {
                    align: "top",
                    signal: c
                }), c.aborted ? null : d
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
    gOnr: (function(a, b, c) {
        var d = c("QosV"),
            e = c("Q840"),
            f = c("zd8w"),
            g = c("TSib"),
            h = c("ipIJ"),
            i = c("Sd8U"),
            j = c("tSEg"),
            k = c("DRR4"),
            l = c("qZWE");
        c.d(b, {}, {
            a: function(a) {
                let b, c, m, n, o, p = (0, d.c)(14);
                p[0] !== a ? (b = void 0 === a ? {} : a, p[0] = a, p[1] = b) : b = p[1];
                let {
                    transcriptMcpAppIds: q,
                    blockedWidgetSource: r,
                    shouldBlockExternalEgress: s
                } = b, t = void 0 !== s && s, u = (0, e.y)(j.a), v = (0, e.y)(i.a), w = (0, e.z)(l.i), x = (0, e.z)(g.v);
                return p[2] !== x || p[3] !== r || p[4] !== v || p[5] !== w || p[6] !== u || p[7] !== t || p[8] !== q ? (c = () => {
                    for (let [a, b] of("chatgpt-thread" === u.value.routeKind && (0, h.b)(v, x.filter(a => t || null != r && (a.widgetSource ?? "descriptor") === r)), w))(t || null != r && (b.content.mcpAppScope.widgetSource ?? "descriptor") === r || b.hostedInThreadScrollLayout && q?.has(a) === !1) && (0, l.A)(u, a)
                }, m = [x, r, q, v, w, u, t], p[2] = x, p[3] = r, p[4] = v, p[5] = w, p[6] = u, p[7] = t, p[8] = q, p[9] = c, p[10] = m) : (c = p[9], m = p[10]), (0, f.useLayoutEffect)(c, m), p[11] !== u ? (n = () => {
                    (0, k.g)(u)
                }, o = [u], p[11] = u, p[12] = n, p[13] = o) : (n = p[12], o = p[13]), (0, f.useLayoutEffect)(n, o), null
            }
        })
    }),
    Mbqw: (function(a, b, c) {
        c("V8uZ"), c.d(b, {}, {
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
    yzQ9: (function(a, b, c) {
        var d = c("QosV"),
            e = c("Q840"),
            f = c("zd8w"),
            g = c("rEML"),
            h = c("Cslg"),
            i = c("TS05"),
            j = c("tSEg");
        c.d(b, {}, {
            a: function(a) {
                let b, c, k, l = (0, d.c)(18),
                    {
                        ready: m,
                        onNavigate: n
                    } = a,
                    o = (0, e.y)(j.a),
                    p = (0, e.z)(h.f),
                    q = (0, g.Z)(),
                    r = q.state,
                    s = r?.sidebarArea === "scheduled";
                l[0] !== p || l[1] !== q.key ? (b = {
                    locationKey: q.key,
                    accountId: p
                }, l[0] = p, l[1] = q.key, l[2] = b) : b = l[2];
                let t = (0, e.x)(i.a, b),
                    u = (0, f.useEffectEvent)(n);
                return l[3] !== p || l[4] !== t || l[5] !== q.key || l[6] !== u || l[7] !== m || l[8] !== s || l[9] !== o ? (c = () => {
                    if (!s || !m || t) return;
                    let a = new AbortController;
                    return u(a.signal).then(() => {
                        a.signal.aborted || o.set(i.a, {
                            locationKey: q.key,
                            accountId: p
                        }, !0)
                    }), () => a.abort()
                }, l[3] = p, l[4] = t, l[5] = q.key, l[6] = u, l[7] = m, l[8] = s, l[9] = o, l[10] = c) : c = l[10], l[11] !== p || l[12] !== t || l[13] !== q.key || l[14] !== m || l[15] !== s || l[16] !== o ? (k = [p, t, q.key, m, s, o], l[11] = p, l[12] = t, l[13] = q.key, l[14] = m, l[15] = s, l[16] = o, l[17] = k) : k = l[17], (0, f.useEffect)(c, k), null
            }
        })
    }),
    yLzP: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("oyxz"),
            h = c("Sm6l"),
            i = c("HOLv"),
            j = c("RNul"),
            k = c("G2Me");
        c.d(b, {}, {
            a: function(a) {
                let b, c, l, m, n, o, p = (0, e.c)(16),
                    {
                        ref: q,
                        onRetry: r
                    } = a,
                    s = null == r ? "py-4" : "gap-1.5 px-2 py-1.5 select-none";
                p[0] !== s ? (b = (0, f.b)("flex items-center justify-center", s), p[0] = s, p[1] = b) : b = p[1];
                let t = null == r ? "text-secondary" : "min-w-0 gap-1.5 text-default";
                return p[2] !== t ? (c = (0, f.b)("flex items-center text-sm", t), p[2] = t, p[3] = c) : c = p[3], p[4] !== r ? (l = null != r ? (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(i.a, {
                        asset: k.a,
                        className: "shrink-0 text-danger"
                    }), (0, d.jsx)("span", {
                        className: "min-w-0 wrap-break-word",
                        children: (0, d.jsx)(g.a, {
                            id: "chatgpt.pagination.error",
                            defaultMessage: "Couldn\u2019t load earlier messages"
                        })
                    })]
                }) : (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(j.a, {}), (0, d.jsx)("span", {
                        className: "sr-only",
                        children: (0, d.jsx)(g.a, {
                            id: "chatgpt.pagination.loading",
                            defaultMessage: "Loading older messages\u2026"
                        })
                    })]
                }), p[4] = r, p[5] = l) : l = p[5], p[6] !== c || p[7] !== l ? (m = (0, d.jsx)("div", {
                    role: "status",
                    className: c,
                    children: l
                }), p[6] = c, p[7] = l, p[8] = m) : m = p[8], p[9] !== r ? (n = null != r && (0, d.jsx)(h.a, {
                    color: "outlineGhost",
                    size: "menuRow",
                    onClick: r,
                    children: (0, d.jsx)(g.a, {
                        id: "chatgpt.pagination.retry",
                        defaultMessage: "Retry"
                    })
                }), p[9] = r, p[10] = n) : n = p[10], p[11] !== q || p[12] !== b || p[13] !== m || p[14] !== n ? (o = (0, d.jsxs)("div", {
                    ref: q,
                    className: b,
                    children: [m, n]
                }), p[11] = q, p[12] = b, p[13] = m, p[14] = n, p[15] = o) : o = p[15], o
            }
        })
    }),
    KFm7: (function(a, b, c) {
        var d = c("iOtI"),
            e = c("jCHb"),
            f = c("xs0G"),
            g = c("V8uZ"),
            h = c("uYx2");
        let i = 2 / 3;

        function j(a, b, c) {
            let d = a.getBoundingClientRect(),
                e = c ?? (d.height / (a.offsetHeight || 1) || 1);
            return (b - (d.bottom - Math.max((0, h.e)(a, e), k(a) * e))) / e
        }

        function k(a) {
            let b = Number.parseFloat(a.style.getPropertyValue("--thread-scroll-padding-bottom") || a.style.getPropertyValue("--thread-scroll-seeded-padding-bottom"));
            return Number.isFinite(b) ? b : 0
        }

        function l(a) {
            let b = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                c = Math.max(0, a.clientHeight - k(a));
            return b ? c : Math.max(0, Math.min(c * i, c - 240))
        }
        c.d(b, {}, {
            a: class {
                scrollController;
                height = (0, d.c)(0);
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
                constructor(a) {
                    this.scrollController = a
                }
                updateContext = (a, b, c) => {
                    this.scrollController = a, this.prefersReducedMotion = b, this.onReleased = c
                };
                setElement = a => {
                    this.element = a, null != a && (a.style.height = `${this.height.get()}px`)
                };
                getHeightPx = () => this.height.get();
                isPlacementAnimating = () => null != this.stopPlacementAnimation;
                getElement = () => this.element;
                ensureScrollRoomForAnchor = a => {
                    let b = this.scrollController.getScrollElement();
                    if (!this.element || !b) return;
                    let c = a - (0, h.b)(b);
                    if (c <= 0) return;
                    let d = this.height.get() + c;
                    if (b.scrollHeight <= b.clientHeight) {
                        let c = d + b.clientHeight;
                        this.writeHeight(c), d = c - ((0, h.b)(b) - a)
                    }
                    this.writeHeight(d)
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
                writeHeight = a => {
                    this.height.set(a), null != this.element && (this.element.style.height = `${a}px`)
                };
                consumeGrowth = a => {
                    this.writeHeight(Math.max(0, this.height.get() - Math.max(0, a)))
                };
                trimTo = a => {
                    let b = this.height.get(),
                        c = Math.max(0, Math.min(b, a));
                    if (b <= c) return !1;
                    let d = this.scrollController.getScrollElement(),
                        e = null == d ? 0 : (0, h.b)(d);
                    return this.writeHeight(c), null != d && this.scrollController.compensateScrollToDistanceFromBottomPx(Math.max(0, e - (b - c))), 0 === c && this.onReleased?.(), !0
                };
                cancelPendingUserScrollDecay = () => {
                    null != this.userScrollDecayAnimationFrame && (window.cancelAnimationFrame(this.userScrollDecayAnimationFrame), this.userScrollDecayAnimationFrame = null), this.pendingUserScrollDecayPx = 0, this.pendingUserScrollElement = null
                };
                clear = () => {
                    this.holdViewport(), this.cancelPendingUserScrollDecay(), this.writeHeight(0), this.placementTarget = void 0
                };
                prepareThreadEndContent = a => {
                    let b = this.scrollController.getScrollElement(),
                        c = this.element;
                    !this.canPrepareThreadEndContent || null != this.stopPlacementAnimation || null == b || b.clientHeight <= 0 || null == c || !(j(b, c.getBoundingClientRect().top) > 0) && a() && (this.canPrepareThreadEndContent = !1, this.cancelPendingUserScrollDecay(), this.consumeGrowth((0, h.b)(b)), this.scrollController.compensateScrollToDistanceFromBottomPx(0))
                };
                collapseIfHidden = () => {
                    let a = this.scrollController.getScrollElement();
                    0 >= this.height.get() || null != this.stopPlacementAnimation || null == a || null == this.element || -1 > j(a, this.element.getBoundingClientRect().top) || this.trimTo(0)
                };
                flushUserScrollDecay = () => {
                    this.userScrollDecayAnimationFrame = null;
                    let a = this.pendingUserScrollDecayPx,
                        b = this.pendingUserScrollElement;
                    this.pendingUserScrollDecayPx = 0, this.pendingUserScrollElement = null, b === this.scrollController.getScrollElement() && this.trimTo(this.height.get() - a) && this.collapseIfHidden()
                };
                handleScroll = a => {
                    let b = this.scrollController.getScrollElement();
                    this.height.get() > 0 && null != b && b.scrollHeight <= b.clientHeight && 0 === this.scrollController.getUnroundedScrollDistanceFromBottomPx(a) && this.clear()
                };
                handleUserScroll = (a, b) => {
                    if (this.interruptPlacement(), null == b) return;
                    if (a < b && (0, h.f)(a)) return void this.clear();
                    let c = a - b;
                    if (c <= 0) return;
                    this.canPrepareThreadEndContent = !1;
                    let d = this.scrollController.getScrollElement();
                    this.pendingUserScrollElement !== d && this.cancelPendingUserScrollDecay(), this.pendingUserScrollDecayPx += c, null == this.userScrollDecayAnimationFrame && (this.pendingUserScrollElement = d, this.userScrollDecayAnimationFrame = window.requestAnimationFrame(this.flushUserScrollDecay))
                };
                reconcileViewport = () => {
                    let a = this.scrollController.getScrollElement();
                    if (null != a && a.clientHeight > 0) {
                        let b = a.clientHeight,
                            c = k(a),
                            d = b !== this.viewportHeightPx || c !== this.scrollPaddingBottomPx;
                        this.viewportHeightPx = b, this.scrollPaddingBottomPx = c;
                        let e = d && null != this.stopPlacementAnimation,
                            f = this.canPrepareThreadEndContent;
                        e && (this.canPrepareThreadEndContent = !1, this.stop());
                        let g = this.trimTo(l(a, null != this.placementTarget));
                        e && (g || this.scrollController.compensateScrollToDistanceFromBottomPx((0, h.b)(a)), this.animatePlacement(), this.canPrepareThreadEndContent = f)
                    }
                };
                revealSubmittedTurn = a => {
                    let b = this.scrollController.getScrollElement();
                    if (null == b || !b.contains(a)) return;
                    this.scrollController.holdViewport();
                    let c = a.getBoundingClientRect(),
                        d = Math.min(j(b, c.bottom), (c.top - b.getBoundingClientRect().top) / (b.currentCSSZoom || 1));
                    d > 0 && this.scrollController.compensateScrollToDistanceFromBottomPx(Math.max(0, (0, h.b)(b) - d))
                };
                place = a => {
                    let b = this.scrollController.getScrollElement();
                    if (null == b) return;
                    this.canPrepareThreadEndContent = !1, this.cancelPendingUserScrollDecay(), this.interruptPlacement(), this.placementTarget = a, this.viewportHeightPx = b.clientHeight, this.scrollPaddingBottomPx = k(b);
                    let c = this.height.get(),
                        d = (0, h.b)(b),
                        e = this.getPlacementDistancePx(b);
                    this.scrollController.holdViewport(), this.writeHeight(null == a ? l(b) : Math.max(0, c - e + 1)), this.prefersReducedMotion || this.scrollController.compensateScrollToDistanceFromBottomPx(d + this.height.get() - c), this.animatePlacement(), this.canPrepareThreadEndContent = !0
                };
                animatePlacement = () => {
                    let a = this.scrollController.getScrollElement();
                    if (null == a) return;
                    let b = Math.max(1, this.getPlacementDistancePx(a));
                    if (!this.prefersReducedMotion) {
                        let a = this.scrollController.getLastScrollDistanceFromBottomPx() - b;
                        if (a > 0) {
                            let b = 0,
                                c = !1,
                                d = (0, e.a)(0, a, {
                                    ...g.h,
                                    driver: a => {
                                        let b = 0,
                                            c = c => {
                                                let {
                                                    delta: d
                                                } = c;
                                                a(b += d)
                                            };
                                        return {
                                            start: () => {
                                                f.b.update(c, !0)
                                            },
                                            stop: () => {
                                                (0, f.a)(c)
                                            },
                                            now: () => b
                                        }
                                    },
                                    onUpdate: a => {
                                        if (c) return;
                                        let d = this.scrollController.getUnroundedScrollDistanceFromBottomPx(this.scrollController.getLastScrollDistanceFromBottomPx());
                                        this.scrollController.compensateScrollToDistanceFromBottomPx(Math.max(1, d - (a - b))), b = a
                                    },
                                    onComplete: () => {
                                        this.stopPlacementAnimation = null, this.scrollController.compensateScrollToDistanceFromBottomPx(this.scrollController.getUnroundedScrollDistanceFromBottomPx(this.scrollController.getLastScrollDistanceFromBottomPx()))
                                    }
                                });
                            this.stopPlacementAnimation = () => {
                                c = !0, d.stop()
                            };
                            return
                        }
                    }
                    this.scrollController.scrollToDistanceFromBottomPx(b, "instant")
                };
                getPlacementDistancePx = a => {
                    if (null == this.placementTarget) return 1;
                    let b = a.getBoundingClientRect(),
                        c = b.height / (a.offsetHeight || a.clientHeight),
                        d = Number.parseFloat(getComputedStyle(a).paddingTop) || 0;
                    return (0, h.b)(a) - (this.placementTarget.getBoundingClientRect().top - b.top) / c + a.clientTop + d
                }
            },
            b: j,
            c: k
        })
    }),
    Ho4C: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("zd8w"),
            g = c("T1PX"),
            h = c("ZYy5"),
            i = c("m8On"),
            j = c("bIvi"),
            k = c("lsfk");
        let l = Array.from({
            length: 101
        }, (a, b) => b / 100);
        c.d(b, {}, {
            a: function(a) {
                let b, c, m, n, o, p, q, r, s, t, u, v, w, x, y = (0, e.c)(31),
                    {
                        controller: z,
                        onReleased: A
                    } = a,
                    B = (0, k.b)(),
                    C = (0, f.useContext)(h.a),
                    D = (0, g.a)(),
                    {
                        getScrollElement: E
                    } = B;
                y[0] !== z ? (b = a => {
                    z.setElement(a)
                }, y[0] = z, y[1] = b) : b = y[1];
                let F = (0, j.a)(b);
                return y[2] !== z || y[3] !== A || y[4] !== D || y[5] !== B ? (c = () => {
                    z.updateContext(B, D, A)
                }, m = [z, B, D, A], y[2] = z, y[3] = A, y[4] = D, y[5] = B, y[6] = c, y[7] = m) : (c = y[6], m = y[7]), (0, f.useInsertionEffect)(c, m), y[8] !== z || y[9] !== E ? (n = () => {
                    let a = E();
                    if (null == a) return;
                    let b = new AbortController;
                    for (let c of ["wheel", "touchstart", "pointerdown", "keydown"]) a.addEventListener(c, z.interruptPlacement, {
                        capture: !0,
                        passive: !0,
                        signal: b.signal
                    });
                    return () => {
                        b.abort(), z.interruptPlacement()
                    }
                }, o = [z, E], y[8] = z, y[9] = E, y[10] = n, y[11] = o) : (n = y[10], o = y[11]), (0, f.useEffect)(n, o), y[12] !== z.cancelPendingUserScrollDecay ? (p = () => z.cancelPendingUserScrollDecay, y[12] = z.cancelPendingUserScrollDecay, y[13] = p) : p = y[13], y[14] !== z ? (q = [z], y[14] = z, y[15] = q) : q = y[15], (0, f.useEffect)(p, q), y[16] !== z || y[17] !== E ? (r = () => {
                    let a = E();
                    if (null == a || "u" < typeof IntersectionObserver) return;
                    let b = new IntersectionObserver(z.collapseIfHidden, {
                            root: a,
                            threshold: l
                        }),
                        c = z.getElement();
                    return null != c && b.observe(c), () => b.disconnect()
                }, s = [z, E], y[16] = z, y[17] = E, y[18] = r, y[19] = s) : (r = y[18], s = y[19]), (0, f.useEffect)(r, s), y[20] !== z || y[21] !== B ? (t = () => {
                    let a = B.addScrollListener(z.handleScroll),
                        b = B.addUserScrollListener(z.handleUserScroll);
                    return z.reconcileViewport(), () => {
                        a(), b()
                    }
                }, u = [z, B], y[20] = z, y[21] = B, y[22] = t, y[23] = u) : (t = y[22], u = y[23]), (0, f.useLayoutEffect)(t, u), y[24] !== z || y[25] !== E || y[26] !== C ? (v = () => {
                    let a = E();
                    if (null == a) return;
                    let b = null,
                        c = () => {
                            null == b && (b = window.requestAnimationFrame(() => {
                                b = null, z.reconcileViewport()
                            }))
                        },
                        d = C ?? (0, i.b)(),
                        e = a.parentElement?.querySelector("[data-thread-scroll-footer]"),
                        f = null == e ? [a] : [a, e];
                    for (let a of f)(0, i.a)({
                        element: a,
                        callback: c,
                        observer: d
                    });
                    return window.addEventListener("resize", c, {
                        passive: !0
                    }), () => {
                        for (let a of f)(0, i.c)({
                            element: a,
                            callback: c,
                            observer: d
                        });
                        null == C && d?.disconnect(), window.removeEventListener("resize", c), null != b && window.cancelAnimationFrame(b)
                    }
                }, w = [z, E, C], y[24] = z, y[25] = E, y[26] = C, y[27] = v, y[28] = w) : (v = y[27], w = y[28]), (0, f.useEffect)(v, w), y[29] !== F ? (x = (0, d.jsx)("div", {
                    ref: F,
                    className: "shrink-0",
                    "aria-hidden": !0
                }), y[29] = F, y[30] = x) : x = y[30], x
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
    })
};