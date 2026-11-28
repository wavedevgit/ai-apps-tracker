export const __rspack_esm_ids = [598315];
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
            a: () => r
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
            p = c("QxH2"),
            q = c("NkEl");

        function r(a) {
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
                    let d = b?.signal,
                        i = null;
                    if (!l && k) try {
                        i = await k(a, b)
                    } catch (a) {
                        if (a instanceof Error && "AbortError" === a.name) throw a;
                        i = {
                            failure: a
                        }
                    }
                    d?.throwIfAborted();
                    let m = await c(d),
                        p = await async function(a, b, c, d) {
                            let e, i, k = a.query.trim(),
                                l = c ? /^\/(.*)\/$/s.exec(k)?.[1] : void 0,
                                m = {
                                    domain: a.domain,
                                    contextId: a.contextId,
                                    query: k,
                                    regex: l,
                                    searchMath: c || void 0,
                                    matches: [],
                                    totalMatches: 0,
                                    isCapped: !1
                                };
                            if (!k) return m;
                            let p = (0, f.a)(k),
                                q = function*(a, b) {
                                    for (let {
                                            turnKey: c,
                                            units: d
                                        }
                                        of a)
                                        for (let a of d) {
                                            let {
                                                unitId: d
                                            } = a;
                                            for (let [e, f] of(a.textChunks ?? [a.text]).entries()) {
                                                let g = b ? f.replace(/\s+/g, " ").trim() : f;
                                                yield {
                                                    turnKey: c,
                                                    unitId: d,
                                                    text: g,
                                                    equationIndex: void 0
                                                };
                                                let h = b ? a.equations?.[e] : void 0;
                                                null != h && (yield {
                                                    turnKey: c,
                                                    unitId: d,
                                                    text: h,
                                                    equationIndex: e
                                                })
                                            }
                                        }
                                }(b, c);
                            if (null != l) {
                                let a = (e = Array.from(q)).map(a => a.text),
                                    b = e.map(a => null != a.equationIndex),
                                    c = await (0, o.a)({
                                        query: l,
                                        texts: a,
                                        mathTexts: b,
                                        maxMatches: 250
                                    }, d);
                                if (c.error) return {
                                    ...m,
                                    error: c.error
                                };
                                m.totalMatches = c.totalMatches, i = c.offsets.values()
                            }
                            let r = new Map;
                            for (let {
                                    turnKey: b,
                                    unitId: c,
                                    equationIndex: d,
                                    text: f
                                }
                                of e ?? q) {
                                let e, l = null == d;
                                if (i) e = i.next().value;
                                else {
                                    let a = 250 - m.matches.length,
                                        b = l ? p(f, a) : function(a, b, c) {
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
                                        }(f, k, a);
                                    m.totalMatches += b.totalMatches, e = b.offsets
                                }
                                e?.forEach((e, f) => {
                                    let h, i = f;
                                    if (l) {
                                        let a = (0, g.e)(b, c);
                                        i = r.get(a) ?? 0, r.set(a, i + 1)
                                    } else h = e;
                                    let j = {
                                        domain: "conversation",
                                        contextId: a.contextId,
                                        turnKey: b,
                                        unitId: c,
                                        matchIndex: i,
                                        equationIndex: d,
                                        equationRange: h
                                    };
                                    m.matches.push({
                                        id: (0, g.d)(j),
                                        ordinal: m.matches.length + 1,
                                        location: j
                                    })
                                })
                            }
                            return m.isCapped = m.totalMatches > m.matches.length, m
                        }(a, m, l, d);
                    if (d?.throwIfAborted(), !i) return p;
                    if ("failure" in i) {
                        if (!p.matches.length) throw i.failure;
                        return {
                            ...p,
                            isCapped: !0
                        }
                    }
                    let q = Math.max(i.totalMatches, p.totalMatches),
                        r = new Map(p.matches.map(a => [a.id, a])),
                        s = i.matches.map(a => r.get(a.id) ?? a),
                        t = e()([...s, ...p.matches], "id").map((a, b) => ({
                            ...a,
                            ordinal: b + 1
                        }));
                    return {
                        ...p,
                        matches: t,
                        totalMatches: Math.max(t.length, q),
                        isCapped: p.isCapped || i.isCapped
                    }
                },
                async ensureVisible(a, c) {
                    if ("conversation" !== a.domain || a.contextId !== b) return;
                    let e = null != a.turnCursor;
                    if (e && d && !await d(a, c)) return;
                    let {
                        signal: f,
                        runId: h
                    } = c ?? {};
                    if (f?.aborted) return;
                    m.onNavigate?.();
                    let {
                        turnKey: j,
                        unitId: k
                    } = a, l = m.getTurnContainer(j), n = {
                        matchId: (0, g.d)(a),
                        includeShadowRoots: !1
                    }, o = l && i ? (0, g.j)({
                        ...n,
                        container: l
                    }) : null, r = i && (!o || o.closest("[inert]"));
                    if (!l || e || r) {
                        if (f?.aborted || (await m.scrollToTurn(j, c, k), f?.aborted)) return;
                        l = m.getTurnContainer(j)
                    }
                    if (l) {
                        let a = (0, g.e)(j, k),
                            b = l.querySelector(`[data-content-search-unit-key="${CSS.escape(a)}"]`);
                        await (0, p.b)({
                            ...n,
                            container: l,
                            runId: h,
                            signal: f,
                            revealMissingMatch: b ? (0, q.b)(b).find(a => {
                                let {
                                    target: b
                                } = a;
                                return b.isTruncated
                            })?.target.reveal : void 0
                        })
                    }
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
    nMiI: (function(a, b, c) {
        c.d(b, {
            a: () => o,
            b: () => k
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("zd8w"),
            g = c("Wf1j"),
            h = c("oyxz");
        let i = (0, (c("Qgfj")).f)({
            recent: {
                id: "conversation.timestampSeparator.recent",
                defaultMessage: "<day>{date}</day> {time}"
            },
            older: {
                id: "conversation.timestampSeparator.older",
                defaultMessage: "<day>{date}</day> at {time}"
            }
        });
        var j = c("dMTK");

        function k(a) {
            let b, c, k, p, q, r, s, t, u = (0, e.c)(20),
                {
                    sentAtMs: v,
                    nowMs: w
                } = a,
                x = (0, g.a)(),
                [y] = (0, f.useState)(n);
            if (!Number.isFinite(v)) return null;
            if (u[0] !== x || u[1] !== y || u[2] !== w || u[3] !== v) {
                let {
                    date: a,
                    time: d,
                    includeAt: e
                } = (0, j.c)(x, new Date(v), new Date(w ?? y));
                c = a, q = d, k = e ? i.older : i.recent, b = o, p = x.formatMessage(k, {
                    date: c,
                    time: q,
                    day: m
                }), u[0] = x, u[1] = y, u[2] = w, u[3] = v, u[4] = b, u[5] = c, u[6] = k, u[7] = p, u[8] = q
            } else b = u[4], c = u[5], k = u[6], p = u[7], q = u[8];
            return u[9] !== c || u[10] !== q ? (r = {
                date: c,
                time: q,
                day: l
            }, u[9] = c, u[10] = q, u[11] = r) : r = u[11], u[12] !== k || u[13] !== r ? (s = (0, d.jsx)(h.a, {
                ...k,
                values: r
            }), u[12] = k, u[13] = r, u[14] = s) : s = u[14], u[15] !== b || u[16] !== v || u[17] !== p || u[18] !== s ? (t = (0, d.jsx)(b, {
                label: p,
                sentAtMs: v,
                children: s
            }), u[15] = b, u[16] = v, u[17] = p, u[18] = s, u[19] = t) : t = u[19], t
        }

        function l(a) {
            return (0, d.jsx)("span", {
                className: "font-medium",
                children: a
            })
        }

        function m(a) {
            return a.join("")
        }

        function n() {
            return Date.now()
        }

        function o(a) {
            let b, c, f, g = (0, e.c)(11),
                {
                    children: h,
                    compact: i,
                    label: j,
                    sentAtMs: k
                } = a,
                l = void 0 !== i && i,
                m = l ? "flex justify-center py-2" : "flex justify-center py-4",
                n = null == j ? void 0 : "separator",
                o = l ? "text-xs text-tertiary select-none" : "text-sm leading-5 font-normal text-tertiary select-none";
            return g[0] !== k ? (b = new Date(k).toISOString(), g[0] = k, g[1] = b) : b = g[1], g[2] !== h || g[3] !== o || g[4] !== b ? (c = (0, d.jsx)("time", {
                className: o,
                dateTime: b,
                children: h
            }), g[2] = h, g[3] = o, g[4] = b, g[5] = c) : c = g[5], g[6] !== j || g[7] !== m || g[8] !== n || g[9] !== c ? (f = (0, d.jsx)("div", {
                "aria-label": j,
                className: m,
                role: n,
                "data-markdown-copy": "exclude",
                children: c
            }), g[6] = j, g[7] = m, g[8] = n, g[9] = c, g[10] = f) : f = g[10], f
        }
    }),
    jmBh: (function(a, b, c) {
        var d = c("hZax");
        c.d(b, {}, {
            a: function(a) {
                return (0, d.f)(!1)
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
    HbDW: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("zd8w"),
            g = c("fYWC"),
            h = c("sGpZ");
        c.d(b, {}, {
            a: function(a) {
                let b, c, i = (0, e.c)(7),
                    {
                        children: j,
                        conversationId: k,
                        enabled: l
                    } = a,
                    [m, n] = (0, f.useState)(null);
                return i[0] !== k || i[1] !== l ? (b = l ? (0, d.jsx)(h.b, {
                    conversationId: k,
                    setContext: n
                }) : null, i[0] = k, i[1] = l, i[2] = b) : b = i[2], i[3] !== j || i[4] !== m || i[5] !== b ? (c = (0, d.jsxs)(g.a, {
                    value: m,
                    children: [j, b]
                }), i[3] = j, i[4] = m, i[5] = b, i[6] = c) : c = i[6], c
            },
            b: function() {
                let a, b = (0, e.c)(2),
                    c = (0, f.use)(g.a)?.slot;
                return b[0] !== c ? (a = c ? (0, d.jsx)("div", {
                    className: "@container/reading-tools mb-2 flex w-full justify-center",
                    children: (0, d.jsx)(h.a, {
                        children: (0, d.jsx)("div", {
                            ref: c,
                            className: "flex"
                        })
                    })
                }) : null, b[0] = c, b[1] = a) : a = b[1], a
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
            k = c("J8HL");
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
                ownsSubmittedViewport = !1;
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
                    this.ownsSubmittedViewport = !1, this.pendingPlacement?.abort(), this.pendingPlacement = null, this.stop()
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
                followSubmittedResponse = () => {
                    this.ownsSubmittedViewport && (this.clear(), this.scrollController.scrollToBottom())
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
                    d > 0 && this.scrollController.compensateScrollToDistanceFromBottomPx(Math.max(0, (0, h.b)(b) - d)), this.ownsSubmittedViewport = !0
                };
                place = a => {
                    let b = this.scrollController.getScrollElement();
                    if (null == b) return;
                    this.canPrepareThreadEndContent = !1, this.cancelPendingUserScrollDecay(), this.interruptPlacement(), this.placementTarget = a, this.viewportHeightPx = b.clientHeight, this.scrollPaddingBottomPx = k(b);
                    let c = this.height.get(),
                        d = (0, h.b)(b),
                        e = this.getPlacementDistancePx(b);
                    this.scrollController.holdViewport(), this.writeHeight(null == a ? l(b) : Math.max(0, c - e + 1)), this.prefersReducedMotion || this.scrollController.compensateScrollToDistanceFromBottomPx(d + this.height.get() - c), this.animatePlacement(), this.canPrepareThreadEndContent = !0, this.ownsSubmittedViewport = !0
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
            f = c("xs0G"),
            g = c("zd8w"),
            h = c("T1PX"),
            i = c("ZYy5"),
            j = c("m8On"),
            k = c("bIvi"),
            l = c("lsfk");
        let m = Array.from({
            length: 101
        }, (a, b) => b / 100);
        c.d(b, {}, {
            a: function(a) {
                let b, c, n, o, p, q, r, s, t, u, v, w, x, y, z = (0, e.c)(31),
                    {
                        controller: A,
                        onReleased: B
                    } = a,
                    C = (0, l.b)(),
                    D = (0, g.useContext)(i.a),
                    E = (0, h.a)(),
                    {
                        getScrollElement: F
                    } = C;
                z[0] !== A ? (b = a => {
                    A.setElement(a)
                }, z[0] = A, z[1] = b) : b = z[1];
                let G = (0, k.a)(b);
                return z[2] !== A || z[3] !== B || z[4] !== E || z[5] !== C ? (c = () => {
                    A.updateContext(C, E, B)
                }, n = [A, C, E, B], z[2] = A, z[3] = B, z[4] = E, z[5] = C, z[6] = c, z[7] = n) : (c = z[6], n = z[7]), (0, g.useInsertionEffect)(c, n), z[8] !== A || z[9] !== F ? (o = () => {
                    let a = F();
                    if (null == a) return;
                    let b = new AbortController;
                    for (let c of ["wheel", "touchstart", "pointerdown", "keydown"]) a.addEventListener(c, A.interruptPlacement, {
                        capture: !0,
                        passive: !0,
                        signal: b.signal
                    });
                    return () => {
                        b.abort(), A.interruptPlacement()
                    }
                }, p = [A, F], z[8] = A, z[9] = F, z[10] = o, z[11] = p) : (o = z[10], p = z[11]), (0, g.useEffect)(o, p), z[12] !== A.cancelPendingUserScrollDecay ? (q = () => A.cancelPendingUserScrollDecay, z[12] = A.cancelPendingUserScrollDecay, z[13] = q) : q = z[13], z[14] !== A ? (r = [A], z[14] = A, z[15] = r) : r = z[15], (0, g.useEffect)(q, r), z[16] !== A || z[17] !== F ? (s = () => {
                    let a = F();
                    if (null == a || "u" < typeof IntersectionObserver) return;
                    let b = new IntersectionObserver(A.collapseIfHidden, {
                            root: a,
                            threshold: m
                        }),
                        c = A.getElement();
                    return null != c && b.observe(c), () => b.disconnect()
                }, t = [A, F], z[16] = A, z[17] = F, z[18] = s, z[19] = t) : (s = z[18], t = z[19]), (0, g.useEffect)(s, t), z[20] !== A || z[21] !== C ? (u = () => {
                    let a = C.addScrollListener(A.handleScroll),
                        b = C.addUserScrollListener(A.handleUserScroll);
                    return A.reconcileViewport(), () => {
                        a(), b()
                    }
                }, v = [A, C], z[20] = A, z[21] = C, z[22] = u, z[23] = v) : (u = z[22], v = z[23]), (0, g.useLayoutEffect)(u, v), z[24] !== A || z[25] !== F || z[26] !== D ? (w = () => {
                    let a = F();
                    if (null == a) return;
                    let b = () => {
                            (A.getHeightPx() > 0 || A.isPlacementAnimating()) && f.b.read(A.reconcileViewport)
                        },
                        c = D ?? (0, j.b)(),
                        d = a.parentElement?.querySelector("[data-thread-scroll-footer]"),
                        e = null == d ? [a] : [a, d];
                    for (let a of e)(0, j.a)({
                        element: a,
                        callback: b,
                        observer: c
                    });
                    return () => {
                        for (let a of e)(0, j.c)({
                            element: a,
                            callback: b,
                            observer: c
                        });
                        null == D && c?.disconnect(), (0, f.a)(A.reconcileViewport)
                    }
                }, x = [A, F, D], z[24] = A, z[25] = F, z[26] = D, z[27] = w, z[28] = x) : (w = z[27], x = z[28]), (0, g.useEffect)(w, x), z[29] !== G ? (y = (0, d.jsx)("div", {
                    ref: G,
                    className: "shrink-0",
                    "aria-hidden": !0
                }), z[29] = G, z[30] = y) : y = z[30], y
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
            n = c("giDA"),
            o = c("nzx4"),
            p = c("eGPX"),
            q = c("csXo"),
            r = c("iS3k"),
            s = c("KWzM");

        function t(a) {
            a.target instanceof Element && null != a.target.closest('[data-app-shell-tab-strip-controller="right"]') && a.preventDefault()
        }

        function u(a) {
            let b, c, f, k, l, n, q, r, t, u, v = (0, e.c)(23);
            v[0] !== a ? ({
                animate: b,
                getPaneElement: f,
                children: c,
                ...k
            } = a, v[0] = a, v[1] = b, v[2] = c, v[3] = f, v[4] = k) : (b = v[1], c = v[2], f = v[3], k = v[4]);
            let w = (0, g.a)(),
                x = (0, i.z)(p.c),
                y = b && !x,
                z = (0, m.c)(),
                A = (0, j.useRef)(null),
                B = (0, j.useRef)(y);
            v[5] !== f || v[6] !== z ? (l = () => {
                let a = A.current,
                    b = f();
                if (null == a || null == b || !B.current) return;
                let c = b.getBoundingClientRect(),
                    d = a.getBoundingClientRect();
                a.style.clipPath = `inset(${(c.top-d.top)/z}px ${(d.right-c.right)/z}px ${(d.bottom-c.bottom)/z}px ${(c.left-d.left)/z}px)`
            }, v[5] = f, v[6] = z, v[7] = l) : l = v[7];
            let C = l,
                D = !w,
                E = !w;
            v[8] !== C ? (n = () => {
                B.current = !0, requestAnimationFrame(C)
            }, v[8] = C, v[9] = n) : n = v[9], v[10] === Symbol.for("react.memo_cache_sentinel") ? (q = () => {
                B.current = !1, A.current?.style.removeProperty("clip-path")
            }, v[10] = q) : q = v[10];
            let F = !!y && s.b.hidden;
            return v[11] !== y ? (r = y ? s.a : {
                duration: 0
            }, v[11] = y, v[12] = r) : r = v[12], v[13] !== c || v[14] !== n || v[15] !== F || v[16] !== r ? (t = (0, d.jsx)(h.a.div, {
                onAnimationStart: n,
                onAnimationComplete: q,
                initial: F,
                animate: s.b.visible,
                exit: s.b.hidden,
                transition: r,
                children: c
            }), v[13] = c, v[14] = n, v[15] = F, v[16] = r, v[17] = t) : t = v[17], v[18] !== k || v[19] !== D || v[20] !== E || v[21] !== t ? (u = (0, d.jsx)(o.c, {
                ...k,
                ref: A,
                forceMount: !0,
                "aria-hidden": D,
                inert: E,
                children: t
            }), v[18] = k, v[19] = D, v[20] = E, v[21] = t, v[22] = u) : u = v[22], u
        }

        function v(a) {
            return a instanceof Element && null != a.closest('[data-app-shell-workspace-layout-toggle="right-panel"]')
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, g, h, i, p, s, w, x, y = (0, e.c)(46),
                    {
                        animate: z,
                        animateOnExit: A,
                        children: B,
                        externalControls: C,
                        floatingCardAnchor: D,
                        id: E,
                        isOpen: F,
                        isSideChatSplit: G,
                        label: H,
                        pane: I,
                        onEscapeKeyDown: J,
                        onOpenChange: K,
                        returnFocusId: L,
                        shouldPreventAutoFocus: M,
                        preserveInitialComposerFocus: N,
                        trigger: O
                    } = a,
                    P = void 0 === z || z,
                    Q = void 0 !== G && G,
                    R = void 0 !== M && M,
                    S = void 0 !== N && N,
                    T = (0, j.useContext)(k.a),
                    {
                        element: U
                    } = (0, q.a)(void 0 === I ? "chat" : I),
                    [V, W] = (0, j.useState)(null),
                    X = (0, j.useContext)(n.a),
                    Y = (0, j.useId)();
                y[0] !== X || y[1] !== Y ? (b = {
                    ...X,
                    id: Y
                }, y[0] = X, y[1] = Y, y[2] = b) : b = y[2];
                let Z = b,
                    $ = (0, j.useRef)(!1),
                    _ = (0, j.useRef)(F && Q),
                    aa = 8 * (0, m.c)(),
                    ab = C?.anchor ?? V;
                y[3] !== ab ? (c = () => ab?.closest("[data-thread-floating-chat-actions]") ?? null, y[3] = ab, y[4] = c) : c = y[4];
                let ac = c;
                y[5] !== U || y[6] !== ac || y[7] !== T ? (g = function(a) {
                    let b = void 0 === a ? ac() : a;
                    return b?.offsetParent ?? (void 0 === U ? T?.querySelector("[data-app-shell-main-content-layout]") : U) ?? T
                }, y[5] = U, y[6] = ac, y[7] = T, y[8] = g) : g = y[8];
                let ad = g,
                    ae = D ?? ab ?? void 0;
                y[9] !== ab || y[10] !== D || y[11] !== ac || y[12] !== ad || y[13] !== ae ? (h = {
                    contextElement: ae,
                    getBoundingClientRect() {
                        if (D?.isConnected) return D.getBoundingClientRect();
                        let a = ac(),
                            b = a ?? ab?.closest("[data-app-shell-main-titlebar]") ?? ab?.closest("[data-app-shell-header-toolbar], [data-app-shell-titlebar]"),
                            c = (b ?? ab)?.getBoundingClientRect() ?? new DOMRect,
                            d = ad(a);
                        if (null == d) return c;
                        let e = d.getBoundingClientRect();
                        return new DOMRect(e.left, c.top, e.width, c.height)
                    }
                }, y[9] = ab, y[10] = D, y[11] = ac, y[12] = ad, y[13] = ae, y[14] = h) : h = y[14];
                let af = h,
                    ag = void 0 === A || A ? f.a : j.Fragment;
                return y[15] !== af ? (i = (0, d.jsx)(o.b, {
                    virtualRef: {
                        current: af
                    }
                }), y[15] = af, y[16] = i) : i = y[16], y[17] !== C || y[18] !== F || y[19] !== O ? (p = null == C && (0, d.jsx)(o.e, {
                    ref: W,
                    asChild: !0,
                    children: O ?? (0, d.jsx)(r.a.HeaderButton, {
                        pressed: F
                    })
                }), y[17] = C, y[18] = F, y[19] = O, y[20] = p) : p = y[20], y[21] !== P || y[22] !== B || y[23] !== C || y[24] !== D || y[25] !== ad || y[26] !== E || y[27] !== F || y[28] !== Q || y[29] !== H || y[30] !== J || y[31] !== Z || y[32] !== aa || y[33] !== S || y[34] !== L || y[35] !== R ? (s = F && (0, d.jsx)(u, {
                    id: E,
                    "aria-label": H,
                    getPaneElement: ad,
                    className: "z-50 flex flex-col text-default outline-hidden",
                    animate: P,
                    align: "end",
                    alignOffset: null == D ? Math.ceil(aa) : 0,
                    collisionPadding: aa,
                    side: "bottom",
                    sideOffset: null == D ? aa : 0,
                    unstyled: !0,
                    onEscapeKeyDown: J,
                    onOpenAutoFocus: a => {
                        $.current = !1, (R || _.current) && a.preventDefault(), _.current = !1
                    },
                    onCloseAutoFocus: a => {
                        if ((null != C || R) && a.preventDefault(), !R && !$.current) {
                            let b = C ? C.getReturnFocus() : document.getElementById(L ?? "");
                            b?.focus({
                                preventScroll: !0
                            }), null != b && document.activeElement === b && a.preventDefault()
                        }
                    },
                    onInteractOutside: a => {
                        let {
                            target: b
                        } = a;
                        null != C && null != E && b instanceof Element && (C.anchor?.contains(b) || b.closest(`[aria-controls="${CSS.escape(E)}"]`)) || b instanceof Element && b.closest("[data-overlay-owner]")?.dataset.overlayOwner === Z.id || b instanceof Node && D?.contains(b) || Q && v(b) ? a.preventDefault() : a.defaultPrevented || ($.current = !0)
                    },
                    onFocusOutside: a => {
                        let b = a.detail.originalEvent.relatedTarget;
                        (Q || S) && (null == b || v(b)) && "composer" === (0, l.m)(a.target) && a.preventDefault(), a.target instanceof Element && a.target.matches('[role="tabpanel"][data-app-shell-tab-panel-controller="right"]') && a.preventDefault()
                    },
                    onPointerDownOutside: t,
                    style: {
                        maxHeight: "none",
                        maxWidth: "none"
                    },
                    children: (0, d.jsx)(n.a, {
                        value: Z,
                        children: B
                    })
                }), y[21] = P, y[22] = B, y[23] = C, y[24] = D, y[25] = ad, y[26] = E, y[27] = F, y[28] = Q, y[29] = H, y[30] = J, y[31] = Z, y[32] = aa, y[33] = S, y[34] = L, y[35] = R, y[36] = s) : s = y[36], y[37] !== ag || y[38] !== s ? (w = (0, d.jsx)(ag, {
                    children: s
                }), y[37] = ag, y[38] = s, y[39] = w) : w = y[39], y[40] !== F || y[41] !== K || y[42] !== i || y[43] !== p || y[44] !== w ? (x = (0, d.jsxs)(o.a, {
                    open: F,
                    onOpenChange: K,
                    children: [i, p, w]
                }), y[40] = F, y[41] = K, y[42] = i, y[43] = p, y[44] = w, y[45] = x) : x = y[45], x
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