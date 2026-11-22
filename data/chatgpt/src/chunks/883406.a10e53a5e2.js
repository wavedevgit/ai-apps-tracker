export const __rspack_esm_ids = [883406];
export const __webpack_modules__ = {
    vVGb: (function(a, b, c) {
        var d = c("uAAd");

        function e(a) {
            let b = h(a);
            if (!b) return null;
            let c = b.split(":"),
                e = c[0];
            if (!e) return null;
            let g = c[1] ?? e,
                i = (0, d.j)(e),
                j = (0, d.c)(e),
                k = (0, d.j)(g),
                l = (0, d.c)(g),
                m = {
                    startRow: Math.min(i, k),
                    startCol: Math.min(j, l),
                    endRow: Math.max(i, k),
                    endCol: Math.max(j, l)
                };
            return {
                ref: f(m),
                bounds: m
            }
        }

        function f(a) {
            let b = g(a.startRow, a.startCol),
                c = g(a.endRow, a.endCol);
            return b === c ? b : `${b}:${c}`
        }

        function g(a, b) {
            return `${(0,d.d)(b)}${a+1}`
        }

        function h(a) {
            let b = a.trim();
            return b ? (b.includes("!") ? b.slice(b.indexOf("!") + 1) : b).replace(/\$/g, "").toUpperCase() : null
        }
        c.d(b, {}, {
            a: function(a) {
                return {
                    rows: a.endRow - a.startRow + 1,
                    cols: a.endCol - a.startCol + 1
                }
            },
            b: f,
            c: g,
            d: h,
            e: e,
            f: function(a, b) {
                return a.startRow <= b.endRow && a.endRow >= b.startRow && a.startCol <= b.endCol && a.endCol >= b.startCol
            },
            g: function(a) {
                var b;
                let c = a.startsWith("=") ? a.slice(1) : a,
                    d = c.indexOf("!");
                if (-1 === d) {
                    let a = e(c);
                    return {
                        ref: a?.ref ?? c
                    }
                }
                let f = c.slice(0, d),
                    g = c.slice(d + 1),
                    h = e(g);
                return {
                    sheetName: (b = f).startsWith("'") && b.endsWith("'") && b.length >= 2 ? b.slice(1, -1).replace(/''/g, "'") : b,
                    ref: h?.ref ?? g
                }
            }
        })
    }),
    P0hF: (function(a, b, c) {
        let d = Object.freeze(Object.fromEntries(["#000000", "#FFFFFF", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#000000", "#FFFFFF", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#800000", "#008000", "#000080", "#808000", "#800080", "#008080", "#C0C0C0", "#808080", "#9999FF", "#993366", "#FFFFCC", "#CCFFFF", "#660066", "#FF8080", "#0066CC", "#CCCCFF", "#000080", "#FF00FF", "#FFFF00", "#00FFFF", "#800080", "#800000", "#008080", "#0000FF", "#00CCFF", "#CCFFFF", "#CCFFCC", "#FFFF99", "#99CCFF", "#FF99CC", "#CC99FF", "#FFCC99", "#3366FF", "#33CCCC", "#99CC00", "#FFCC00", "#FF9900", "#FF6600", "#666699", "#969696", "#003366", "#339966", "#003300", "#333300", "#993300", "#993366", "#333399", "#333333", "#000000", "#FFFFFF"].map((a, b) => [`indexed:${b}`, a])));
        c.d(b, {}, {
            a: d,
            b: function(a) {
                if (!a?.length) return d;
                let b = {
                    ...d
                };
                for (let [c, d] of a.entries()) {
                    if (64 === c || 65 === c) continue;
                    let a = d.value.replace(/^#/, "");
                    b[`indexed:${c}`] = `#${8===a.length?a.slice(2):a}`
                }
                return Object.freeze(b)
            }
        })
    }),
    RqRN: (function(a, b, c) {
        c.r(b);
        var d = c("vVGb");
        let e = "CSV import",
            f = /\\|\/|\?|\*|\[|\]|:/g;

        function g(a) {
            return ((a ?? e).trim().replace(f, "").trim() || e).slice(0, 31)
        }
        c.d(b, {}, {
            planCsvImport: function(a, b) {
                let c = function(a) {
                        let b = a ?? ",";
                        if (1 !== b.length) throw Error(`CSV import separator must be a single character; received "${b}".`);
                        return b
                    }(b?.separator),
                    e = (0, d.g)(b?.anchor ?? "A1"),
                    f = e.sheetName?.trim(),
                    h = b?.sheetName?.trim();
                if (f && h && f !== h) throw Error(`CSV import specifies conflicting sheet names: "${h}" (options.sheetName) vs "${f}" (anchor).`);
                let i = g(f ?? h),
                    j = (0, d.e)(e.ref);
                if (!j) throw Error(`CSV import anchor must be an A1 cell reference; received "${b?.anchor??"A1"}".`);
                let {
                    bounds: k
                } = j;
                if (k.startRow !== k.endRow || k.startCol !== k.endCol) throw Error(`CSV import anchor must be a single cell reference; received "${b?.anchor??"A1"}".`);
                let l = function(a, b) {
                        if (!a.trim()) return [];
                        let c = function(a, b) {
                            let c = [],
                                d = [],
                                e = "",
                                f = !1,
                                g = () => {
                                    d.push(e), e = ""
                                },
                                h = () => {
                                    c.push(d), d = []
                                };
                            for (let c = 0; c < a.length; c += 1) {
                                let d = a[c] ?? "";
                                if (f) {
                                    if ('"' === d) {
                                        if ('"' === a[c + 1]) {
                                            e += '"', c += 1;
                                            continue
                                        }
                                        f = !1;
                                        continue
                                    }
                                    e += d;
                                    continue
                                }
                                if ('"' === d) {
                                    f = !0;
                                    continue
                                }
                                if (d === b) {
                                    g();
                                    continue
                                }
                                if ("\n" === d) {
                                    g(), h();
                                    continue
                                }
                                if ("\r" === d) {
                                    "\n" === a[c + 1] && (c += 1), g(), h();
                                    continue
                                }
                                e += d
                            }
                            for (g(), h(); c.length > 0;) {
                                let a = c[c.length - 1] ?? [];
                                if (!(a.length > 0 && a.every(a => "" === a))) break;
                                c.pop()
                            }
                            return c
                        }(a, b);
                        if (0 === c.length) return [];
                        let d = c.reduce((a, b) => Math.max(a, b.length), 0);
                        return 0 === d ? [] : c.map(a => {
                            if (a.length === d) return a;
                            let b = a.slice();
                            for (; b.length < d;) b.push("");
                            return b
                        })
                    }(a, c),
                    m = l.length,
                    n = m > 0 ? l[0]?.length ?? 0 : 0;
                if (0 === m || 0 === n) return {
                    sheetName: i,
                    values: []
                };
                let o = {
                    startRow: k.startRow,
                    startCol: k.startCol,
                    endRow: k.startRow + m - 1,
                    endCol: k.startCol + n - 1
                };
                return {
                    sheetName: i,
                    values: l,
                    rangeRef: (0, d.b)(o),
                    rect: {
                        r1: o.startRow,
                        c1: o.startCol,
                        r2: o.endRow,
                        c2: o.endCol
                    }
                }
            },
            sanitizeSheetName: g
        })
    }),
    uAAd: (function(a, b, c) {
        var d = c("P0hF");
        let e = 4 / 3;

        function f(a) {
            return Math.ceil(a && a > 0 ? a : 7)
        }
        c.d(b, {}, {
            a: function(a) {
                let b = a.replace(/^0x/i, "");
                if (8 === b.length) {
                    let a = parseInt(b.slice(2, 4), 16),
                        c = parseInt(b.slice(4, 6), 16),
                        d = parseInt(b.slice(6, 8), 16);
                    return `rgba(${a}, ${c}, ${d}, 1.000)`
                }
                return 6 === b.length ? `#${b}` : "#ffffff"
            },
            b: function(a, b) {
                return null == a || a <= 0 ? 64 : a * f(b)
            },
            c: function(a) {
                let b = a.match(/[A-Z]+/);
                if (!b) return 0;
                let c = 0;
                for (let a of b[0]) c = 26 * c + (a.charCodeAt(0) - 64);
                return c - 1
            },
            d: function(a) {
                let b = "";
                for (a += 1; a;) {
                    let c = (a - 1) % 26;
                    b = String.fromCharCode(65 + c) + b, a = Math.floor((a - c) / 26)
                }
                return b
            },
            e: function(a) {
                if (null != a) return d.a[`indexed:${a}`]
            },
            f: function(a) {
                return 96 * (null == a || 0 === a ? 15 : a) / 72
            },
            g: function(a, b) {
                return !Number.isFinite(a) || a <= 0 ? 0 : Math.round(100 * (a / f(b))) / 100
            },
            h: function(a) {
                return Number.isFinite(a ?? 0) ? (a ?? 0) * 72 / 96 : 15
            },
            i: function(a) {
                let b = a > 0 ? a : 11;
                return {
                    padLr: Math.max(2, Math.floor(.1 * b)),
                    padTb: Math.max(e, Math.floor(0 * b))
                }
            },
            j: function(a) {
                let b = a.match(/\d+/);
                return b ? parseInt(b[0], 10) - 1 : 0
            }
        })
    }),
    nDjx: (function(a, b, c) {
        a.exports = c.p + "assets/appshot-logo.f0152cb4dd.png"
    }),
    OCvz: (function(a, b, c) {
        a.exports = c.p + "assets/dictation-start.f6efcb404f.wav"
    }),
    DJ2e: (function(a, b, c) {
        a.exports = c.p + "assets/dictation-stop.e3bc7ebc5e.wav"
    }),
    ylLY: (function(a, b, c) {
        let d = (0, c("zd8w").createContext)(null);
        c.d(b, {}, {
            a: d
        })
    }),
    jG1o: (function(a, b, c) {
        c.d(b, {
            a: () => h
        });
        var d = c("ABep"),
            e = c("on57"),
            f = c("NvZw"),
            g = c("HJba");
        let h = a => {
            let {
                children: b,
                className: c,
                variant: h = "soft",
                color: i = "secondary",
                size: j = "sm",
                pill: k = f.a.pill
            } = a;
            return (0, d.jsx)("div", {
                className: (0, e.b)("Badge-RVjjlQ", c),
                "data-color": i,
                "data-size": j,
                "data-pill": k ? "" : void 0,
                "data-variant": h,
                children: (0, g.a)(b)
            })
        }
    }),
    Ccjy: (function(a, b, c) {
        var d = c("ABep");
        c.d(b, {}, {
            a: a => (0, d.jsx)("svg", {
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                ...a,
                children: (0, d.jsx)("path", {
                    d: "M21.6295 16.8937C21.5458 16.6147 21.1413 16.4194 21.1413 16.4194C21.105 16.3971 21.0687 16.3803 21.0408 16.3663C20.3684 16.0427 19.7741 15.6521 19.2747 15.2085C18.873 14.8514 18.527 14.4608 18.2508 14.0423C17.9132 13.5345 17.7542 13.1076 17.6872 12.8788C17.6482 12.7282 17.6565 12.6696 17.6872 12.5915C17.7151 12.5273 17.7905 12.4631 17.8295 12.4353C18.0555 12.2762 18.421 12.039 18.6442 11.894C18.8367 11.7684 19.0041 11.6596 19.1018 11.5927C19.417 11.3722 19.6319 11.149 19.7602 10.9063C19.9248 10.5938 19.9443 10.2478 19.816 9.91028C19.643 9.45272 19.2161 9.1793 18.6749 9.1793C18.5549 9.1793 18.4294 9.19324 18.3066 9.21835C17.9969 9.28531 17.7012 9.39693 17.4557 9.49176C17.4389 9.50013 17.4194 9.4862 17.4194 9.46665C17.4445 8.85567 17.4752 8.03538 17.4082 7.25418C17.3468 6.54831 17.2017 5.95404 16.9646 5.43509C16.7247 4.91336 16.4178 4.52834 16.1722 4.25213C15.9407 3.98708 15.5362 3.59648 14.9223 3.24493C14.0602 2.7511 13.0781 2.5 12.004 2.5C10.9326 2.5 9.9533 2.7511 9.0884 3.24215C8.44113 3.61322 8.02542 4.03172 7.83571 4.24934C7.59296 4.52834 7.28327 4.91336 7.04332 5.43231C6.80617 5.95124 6.66109 6.54552 6.59971 7.25139C6.53275 8.03262 6.56065 8.78871 6.58855 9.46389C6.58855 9.48339 6.56902 9.49738 6.55228 9.48901C6.30676 9.39412 6.01102 9.2825 5.70133 9.21554C5.57856 9.18767 5.45581 9.1765 5.33304 9.1765C4.79178 9.1765 4.36491 9.44991 4.19193 9.90747C4.06359 10.2478 4.08312 10.591 4.24773 10.9035C4.37607 11.1462 4.5909 11.3695 4.90617 11.5899C5.00382 11.6568 5.17123 11.7656 5.36374 11.8912C5.58415 12.0335 5.93848 12.2622 6.16447 12.4241C6.19237 12.4436 6.28723 12.5162 6.31792 12.5915C6.3514 12.6724 6.35698 12.731 6.31513 12.89C6.24538 13.1216 6.08635 13.5429 5.75434 14.0423C5.47812 14.4608 5.13217 14.8514 4.7304 15.2085C4.2282 15.6521 3.63392 16.0427 2.96432 16.3663C2.93364 16.3803 2.89458 16.3998 2.85272 16.4249C2.81087 16.45 2.45096 16.6286 2.37563 16.8937C2.26403 17.2843 2.55977 17.6498 2.86667 17.8478C3.3633 18.1687 3.96873 18.3417 4.32027 18.4338C4.41792 18.4589 4.5072 18.484 4.58811 18.5091C4.63833 18.5258 4.76388 18.5732 4.81968 18.643C4.88664 18.7295 4.89502 18.8383 4.92012 18.9611C4.95919 19.1675 5.04568 19.4214 5.29957 19.5972C5.57856 19.7897 5.93569 19.8037 6.38488 19.8204C6.8564 19.8372 7.4423 19.8623 8.11188 20.0827C8.42158 20.1859 8.70337 20.3589 9.02981 20.5598C9.71056 20.9782 10.5587 21.5 12.0067 21.5C13.4548 21.5 14.3085 20.9755 14.9949 20.557C15.3185 20.3589 15.5975 20.1859 15.9016 20.0855C16.5712 19.865 17.1571 19.8427 17.6286 19.8232C18.0778 19.8064 18.4349 19.7925 18.714 19.6C18.9874 19.413 19.0655 19.1313 19.1018 18.9192C19.1213 18.816 19.1352 18.7212 19.1938 18.643C19.244 18.5761 19.3612 18.5314 19.417 18.5119C19.5007 18.4868 19.59 18.4617 19.6932 18.4338C20.0448 18.3389 20.4828 18.2301 21.0185 17.926C21.6518 17.5633 21.6965 17.1141 21.6295 16.8937Z",
                    fill: "currentColor"
                })
            })
        })
    }),
    Y8CA: (function(a, b, c) {
        var d = c("BDAQ"),
            e = c("lAQI"),
            f = c("RmZI");
        let g = e.K({
                arguments: e.J(e.L(), e.x()).optional(),
                name: f.a,
                type: e.z("mcp_app_tool")
            }),
            h = e.m("type", [g, d.e]);
        c.d(b, {}, {
            a: h
        })
    }),
    MRPP: (function(a, b, c) {
        var d = c("yZpl"),
            e = c("lAQI"),
            f = c("Cslg"),
            g = c("kpIY"),
            h = c("Nwp9"),
            i = c("Kwur"),
            j = c("g2p6"),
            k = c("AHqG"),
            l = c("zGlb"),
            m = c("VaAS");
        let n = "chatgpt-business-agent-drafts-v1",
            o = (0, h.b)(n, void 0),
            p = e.J(e.L(), e.R()),
            q = e.F({
                userId: e.L().min(1),
                accountId: e.L().min(1),
                expiresAt: e.E(),
                context: e.F({
                    businessAgentId: e.L().min(1),
                    nativeRuntimeVersion: e.z(1).optional(),
                    gizmoId: e.L().min(1),
                    interactionId: e.T(),
                    businessName: e.L().optional(),
                    logoUrl: e.L().optional(),
                    notice: e.L().optional(),
                    headerColor: e.L().optional(),
                    conversationStarters: e.g(e.L()).max(4).optional(),
                    disablePrefill: e.j().optional(),
                    showDisclosureModal: e.j().optional(),
                    showConversationStarters: e.j()
                })
            });

        function r(a, b, c) {
            let d = JSON.stringify([c.userId, c.accountId, b]);
            try {
                return (0, g.t)(n, {
                    entries: {
                        [d]: {
                            value: q.parse({
                                ...c,
                                expiresAt: Date.now() + 864e5
                            })
                        }
                    },
                    maxEntries: 100
                }), a.set(o, (0, g.k)(n)), !0
            } catch {
                return !1
            }
        }
        c.d(b, {}, {
            a: r,
            recoverBusinessAgentDraft: async function(a, b, c) {
                await Promise.all([(0, g.B)(), a.when(a => "loading" !== a.get(f.m).status)]);
                let e = a.get(f.m),
                    h = a.get(j.n),
                    s = a.get(f.k);
                if ("allowed" !== e.status || !("accountId" in e) || null == h || e.accountId !== h || a.get(f.f) !== h || null == s) throw new DOMException("Business Agent account unavailable", "AbortError");
                let t = p.parse(a.get(o) ?? (0, g.k)(n)),
                    u = q.parse(t[JSON.stringify([s, h, b])]);
                if (u.userId !== s || u.accountId !== h || u.context.gizmoId !== c || u.expiresAt <= Date.now()) throw new DOMException("Business Agent draft unavailable", "AbortError");
                let v = a => a(f.k) === s && a(j.n) === h && a(f.f) === h,
                    w = !1,
                    x = a.watch(a => {
                        let {
                            get: b
                        } = a;
                        w = w || !v(b)
                    }),
                    y = () => {
                        if (w || !v(a.get)) throw new DOMException("Business Agent identity changed", "AbortError");
                        (0, l.c)(a)
                    };
                try {
                    null != u.context.nativeRuntimeVersion && y();
                    let e = await i.Request.safePost("/gizmos/business-agents/{business_agent_id}/interactions", {
                            requestBody: null == u.context.nativeRuntimeVersion ? void 0 : {
                                native_runtime_version: u.context.nativeRuntimeVersion,
                                include_gizmo_resource: !0
                            },
                            parameters: {
                                path: {
                                    business_agent_id: u.context.businessAgentId
                                }
                            },
                            additionalHeaders: {
                                "ChatGPT-Account-ID": h,
                                [d.dc]: h,
                                "x-openai-business-agent-interaction-id": u.context.interactionId
                            }
                        }),
                        f = m.a.parse(e);
                    if (null != u.context.nativeRuntimeVersion && f.business_agent_native_runtime_version !== u.context.nativeRuntimeVersion || w || !v(a.get) || f.business_agent_id !== u.context.businessAgentId || f.underlying_gizmo_id !== c || f.interaction_id !== u.context.interactionId) throw new DOMException("Business Agent identity changed", "AbortError");
                    let g = f.business_agent_native_runtime_version,
                        j = {
                            ...u.context,
                            nativeRuntimeVersion: g,
                            conversationStarters: null == g ? u.context.conversationStarters : void 0,
                            privacyPolicyUrl: f.privacy_policy_url,
                            animateDisclosure: !1
                        },
                        l = {
                            accountId: h,
                            userId: s,
                            status: "ready",
                            context: j
                        };
                    if (null != g) {
                        y();
                        let c = await (0, k.a)(a, l, e.gizmo_resource);
                        if (w) throw new DOMException("Business Agent identity changed", "AbortError");
                        if (j.businessName = c.gizmo.display.name.trim() || void 0, j.logoUrl = f.favicon_url?.trim() || c.gizmo.display.profile_picture_url?.trim() || void 0, j.headerColor = f.header_color?.trim() || c.gizmo.display.theme?.trim() || void 0, j.conversationStarters = c.gizmo.display.prompt_starters?.slice(0, 4) ?? void 0, null == u.context.nativeRuntimeVersion && !r(a, b, {
                                accountId: h,
                                userId: s,
                                context: j
                            })) throw new DOMException("Business Agent draft unavailable", "AbortError")
                    }
                    return l
                } finally {
                    x()
                }
            },
            removeBusinessAgentDraftsForInteraction: function(a, b) {
                let c = p.safeParse((0, g.k)(n));
                if (!c.success) return;
                let d = {};
                for (let [e, g] of Object.entries(c.data)) {
                    let c = q.safeParse(g);
                    c.success && c.data.userId === a.get(f.k) && c.data.accountId === a.get(j.n) && c.data.context.interactionId === b && (d[e] = null)
                }
                Object.keys(d).length > 0 && ((0, g.t)(n, {
                    entries: d
                }), a.set(o, (0, g.k)(n)))
            }
        })
    }),
    DIeV: (function(a, b, c) {
        c.d(b, {
            a: () => d
        });
        let d = (0, c("Bbed").a)(async function() {
            return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(73336), c.e(340158), c.e(749239), c.e(888)]).then(c.bind(c, "qm1k"))).BusinessProfileShareConversationPanel
        }, {
            errorFallback: null
        })
    }),
    AHqG: (function(a, b, c) {
        var d = c("Kwur"),
            e = c("zGlb"),
            f = c("VaAS");
        c.d(b, {}, {
            a: async function(a, b, c) {
                (0, e.c)(a);
                let g = c ?? await d.Request.safeGet("/gizmos/{gizmo_id_or_short_url}", {
                    parameters: {
                        path: {
                            gizmo_id_or_short_url: b.context.gizmoId
                        }
                    },
                    additionalHeaders: (0, f.d)(b),
                    expectedIdentity: {
                        accountId: b.accountId,
                        userId: b.userId
                    }
                });
                return (0, e.c)(a), (0, e.d)(g, b.context.gizmoId), g
            }
        })
    }),
    grx7: (function(a, b, c) {
        var d = c("kphc"),
            e = c("gBBC"),
            f = c("Ve8c"),
            g = c("dQRk"),
            h = c("lSqO"),
            i = c("ggor"),
            j = c("lXWy"),
            k = c("GgLN");
        async function l(a, b, c, d, e) {
            let f, g = a.get(k.b, b);
            if (null != g && "failed" !== g.status) return void e?.(null);
            let i = {
                status: "pending",
                accountId: c.accountId,
                userId: c.userId,
                gizmoId: c.gizmoId,
                ...d,
                showConversationStarters: !1
            };
            if ((0, k.f)(a, b, i), a.get(k.b, b) !== i) return void e?.(null);
            let l = null;
            try {
                f = new h.a(a, c.businessAgentId, {
                    entry_point: "business_profile",
                    source_profile_lookup_id: c.sourceProfileLookupId,
                    source_surface: c.sourceSurface,
                    source_product_hostname: c.sourceProductHostname
                }, "product_detail_panel" === c.sourceSurface ? j.j : void 0), await f.prepare({
                    conversationId: b,
                    gizmoId: c.gizmoId
                }), l = f.open().context.interactionId
            } catch {
                a.get(k.b, b) === i && a.set(k.b, b, {
                    ...i,
                    status: "failed"
                })
            } finally {
                f?.cancel()
            }
            e?.(l)
        }

        function m(a, b, c, g, h, i) {
            (0, e.d)(a, null), (0, d.n)(a, "chat"), b("/", {
                state: {
                    ...(0, f.c)(h, g, !0),
                    homeDraftClientThreadId: void 0,
                    initialChatGptConversationId: c,
                    initialChatGptBusinessAgentGizmoId: g.id,
                    prefillPrompt: i ?? "",
                    ...null == i ? {} : {
                        prefillPromptFormat: "plain",
                        prefillPromptOnlyIfEmpty: !0
                    }
                }
            })
        }
        c.d(b, {}, {
            a: l,
            b: function(a, b, c, d, e, f, h) {
                let j = (0, g.ub)(a),
                    k = null != h && null != c.sourceSurface ? new i.a(a, j, c, e, h) : null,
                    n = l(a, j, c, d, a => {
                        f?.(a), k?.generate(a)
                    });
                return (0, g.ac)({
                    scope: a,
                    conversationId: j,
                    projectId: c.gizmoId
                }), m(a, b, j, {
                    id: c.gizmoId,
                    name: d.businessName || c.businessAgentId,
                    iconUrl: d.logoUrl ?? null
                }, {
                    businessProfileChat: c
                }, e), n
            },
            c: function(a, b, c, d, e) {
                let {
                    conversationId: f,
                    context: g
                } = c.open();
                m(a, b, f, {
                    id: g.gizmoId,
                    name: g.businessName ?? g.businessAgentId,
                    iconUrl: g.logoUrl ?? null
                }, d, e)
            },
            d: function(a, b, c, d, e) {
                let f = (0, g.ub)(a),
                    h = {
                        ...c,
                        status: "pending",
                        gizmoId: e.id,
                        businessName: e.name,
                        logoUrl: e.iconUrl ?? void 0,
                        profileShareSessionId: d,
                        showConversationStarters: !1
                    };
                if ((0, k.f)(a, f, h), a.get(k.b, f) !== h) throw Error("Business Agent draft unavailable");
                (0, g.ac)({
                    scope: a,
                    conversationId: f,
                    projectId: e.id
                }), m(a, b, f, e, void 0)
            }
        })
    }),
    lSqO: (function(a, b, c) {
        var d = c("Q840"),
            e = c("yZpl"),
            f = c("lAQI"),
            g = c("Cslg"),
            h = c("nUDt"),
            i = c("MRPP"),
            j = c("AHqG"),
            k = c("zGlb"),
            l = c("VaAS"),
            m = c("wwvo"),
            n = c("Kwur"),
            o = c("dQRk"),
            p = c("g2p6"),
            q = c("nlNF"),
            r = c("OWtl"),
            s = c("OMIV");
        let t = l.a.extend({
                requires_click_attribution_bridge: f.z(!1).optional(),
                entry_context: f.F({
                    entry_channel: f.z("organic"),
                    entry_point: f.p(["debug_settings", "business_profile", "shared_link"]),
                    client_platform: f.z("web"),
                    traffic_class: f.p(["production", "internal_test"])
                })
            }),
            u = (0, d.c)(r.a, a => {
                let {
                    get: b
                } = a;
                return b(s.e, "699583893") && b(s.e, "199045523")
            }),
            v = (0, d.c)(r.a, a => {
                let {
                    get: b
                } = a, c = b(g.n), d = b(g.m);
                return !c.authLoading && !c.accountLoading && "chatgpt" === c.authMethod && !0 === c.hasChatGptToken && null != c.userId && c.authenticatedUserId === c.userId && "allowed" === d.status && "accountId" in d && d.accountId === c.authenticatedAccountId && b(u)
            });
        c.d(b, {}, {
            a: class {
                scope;
                entry;
                enabled$;
                controller = new AbortController;
                accountId;
                userId;
                navigationVisit;
                businessAgentId;
                unwatch;
                profileDraft;
                preparation;
                ready;
                resource;
                disclosure;
                constructor(a, b, c, d = v) {
                    this.scope = a, this.entry = c, this.enabled$ = d;
                    let e = a.get(p.n),
                        f = a.get(g.k);
                    if (this.businessAgentId = b.trim(), null == e || null == f || !this.businessAgentId) throw Error("Business Agent launch unavailable");
                    this.accountId = e, this.userId = f, this.navigationVisit = a.get(q.e)
                }
                get signal() {
                    return this.controller.signal
                }
                prepare(a) {
                    return null == this.preparation && (this.profileDraft = a, this.preparation = this.createInteraction().catch(a => {
                        throw this.stopWatching(), a
                    })), this.preparation
                }
                open() {
                    this.assertCurrent();
                    let a = this.ready;
                    if (null == a) throw Error("Business Agent launch unavailable");
                    null != a.context.nativeRuntimeVersion && (0, k.c)(this.scope);
                    let b = (0, o.ub)(this.scope, this.profileDraft?.conversationId);
                    if (!(0, i.a)(this.scope, b, {
                            accountId: this.accountId,
                            userId: this.userId,
                            context: a.context
                        })) throw Error("Business Agent draft unavailable");
                    return (0, o.ac)({
                        scope: this.scope,
                        conversationId: b,
                        projectId: a.context.gizmoId
                    }), null != this.resource && this.scope.queryClient.setQueryData((0, m.d)(a, b), this.resource), (0, o.Yb)(this.scope, b, a), this.disclosure?.version === 1 && null != this.disclosure.global_impression_count && ((0, h.d)(this.scope, {
                        conversationId: b,
                        accountId: this.accountId,
                        userId: this.userId
                    }), (0, h.e)(this.scope, b, this.disclosure, this.scope.get(s.g)?.getDynamicConfig("3310023174").get("global_impression_limit", 0) ?? 0)), this.cancel(), {
                        conversationId: b,
                        context: a.context
                    }
                }
                cancel = () => {
                    this.controller.abort(), this.stopWatching()
                };
                stopWatching() {
                    this.unwatch?.(), this.unwatch = void 0, window.removeEventListener("pagehide", this.cancel)
                }
                isCurrentVisit(a) {
                    if (a(q.e) === this.navigationVisit) return !0;
                    let b = a(q.c);
                    return null != this.profileDraft && b?.pathname === "/" && b.state?.initialChatGptConversationId === this.profileDraft.conversationId && b.state.initialChatGptBusinessAgentGizmoId === this.profileDraft.gizmoId
                }
                assertCurrent = () => {
                    this.signal.throwIfAborted(), this.scope.get(this.enabled$) && this.scope.get(p.n) === this.accountId && this.scope.get(g.f) === this.accountId && this.scope.get(g.k) === this.userId && this.isCurrentVisit(this.scope.get) || (this.cancel(), this.signal.throwIfAborted())
                };
                async createInteraction() {
                    this.assertCurrent();
                    let a = "shared_link" === this.entry.entry_point ? this.entry.gizmoId : void 0;
                    null != a && (0, k.c)(this.scope), this.unwatch = this.scope.watch(a => {
                        let {
                            get: b
                        } = a;
                        b(this.enabled$) && b(p.n) === this.accountId && b(g.f) === this.accountId && b(g.k) === this.userId && this.isCurrentVisit(b) || this.cancel()
                    }), window.addEventListener("pagehide", this.cancel);
                    let b = await n.Request.safePost("/gizmos/business-agents/{business_agent_id}/interactions", {
                        parameters: {
                            path: {
                                business_agent_id: this.businessAgentId
                            }
                        },
                        additionalHeaders: {
                            "ChatGPT-Account-ID": this.accountId,
                            [e.dc]: this.accountId
                        },
                        expectedIdentity: {
                            accountId: this.accountId,
                            userId: this.userId
                        },
                        signal: this.signal,
                        assertRequestCurrent: this.assertCurrent,
                        retry: "never",
                        requestBody: {
                            ...null == a ? {} : {
                                native_runtime_version: 1
                            },
                            include_gizmo_resource: !0,
                            include_disclosure_state: (this.scope.get(s.g)?.getDynamicConfig("3310023174").get("global_impression_limit", 0) ?? 0) > 0,
                            entry_context: {
                                entry_channel: "organic",
                                entry_point: this.entry.entry_point,
                                ..."source_profile_lookup_id" in this.entry ? {
                                    source_profile_lookup_id: this.entry.source_profile_lookup_id,
                                    ...null == this.entry.source_surface ? {} : {
                                        source_surface: this.entry.source_surface,
                                        source_product_hostname: this.entry.source_product_hostname
                                    }
                                } : {},
                                ..."source_profile_share" in this.entry ? {
                                    source_profile_share: this.entry.source_profile_share
                                } : {},
                                client_platform: "web"
                            }
                        }
                    });
                    this.assertCurrent();
                    let c = t.parse(b);
                    if (c.entry_context.entry_point !== this.entry.entry_point || "debug_settings" === this.entry.entry_point && "internal_test" !== c.entry_context.traffic_class || c.business_agent_id !== this.businessAgentId || null != this.profileDraft && c.underlying_gizmo_id !== this.profileDraft.gizmoId || null != a && a !== c.underlying_gizmo_id || null != a && 1 !== c.business_agent_native_runtime_version || b.gizmo_resource?.business_agent_native_runtime_version != null && b.gizmo_resource.business_agent_native_runtime_version !== c.business_agent_native_runtime_version || null != b.gizmo_resource && b.gizmo_resource.gizmo.id !== c.underlying_gizmo_id) throw Error("Business Agent identity mismatch");
                    let d = c.business_agent_native_runtime_version;
                    "shared_link" === this.entry.entry_point && null != d && (0, k.c)(this.scope);
                    let f = {
                            businessAgentId: c.business_agent_id,
                            nativeRuntimeVersion: d,
                            gizmoId: c.underlying_gizmo_id,
                            interactionId: c.interaction_id,
                            businessName: c.business_name?.trim() || void 0,
                            logoUrl: c.favicon_url?.trim() || c.logo_url?.trim() || void 0,
                            headerColor: c.header_color?.trim() || void 0,
                            privacyPolicyUrl: c.privacy_policy_url,
                            showDisclosureModal: !1,
                            showConversationStarters: !1
                        },
                        h = {
                            accountId: this.accountId,
                            userId: this.userId,
                            status: "ready",
                            context: f
                        },
                        i = null == d ? b.gizmo_resource : await (0, j.a)(this.scope, h, b.gizmo_resource);
                    return this.assertCurrent(), f.businessName = f.businessName ?? (i?.gizmo.display.name.trim() || void 0), null != d && (f.logoUrl = f.logoUrl ?? (i?.gizmo.display.profile_picture_url?.trim() || void 0), f.headerColor = f.headerColor ?? (i?.gizmo.display.theme?.trim() || void 0)), this.resource = i, this.disclosure = c.disclosure ?? c.global_disclosure, this.ready = h, f
                }
            },
            b: v,
            c: u
        })
    }),
    qUXQ: (function(a, b, c) {
        var d = c("lAQI");
        let e = d.x(),
            f = d.F({
                description: e,
                id: e,
                merchants: e,
                num_reviews: e,
                offers: d.g(e).nullable(),
                original_price: e,
                price: e,
                rating: e,
                specs: e,
                title: d.L().min(1),
                url: e,
                variant_snapshots: e,
                variants: e,
                open_behavior: d.R().optional()
            }),
            g = new Set(["available", "brand", "details", "is_digital", "marketplace_seller", "merchant_name", "merchant_subtitle", "original_price", "price", "price_details", "product_name", "provider", "seller_name", "shop_id", "tag", "url"]),
            h = new Set(["analytics_meta", "product_event_uuid", "conversation_id", "message_id", "public_conversation_id", "public_message_id", "request_id", "client_thread_id", "user_id", "visitor_id", "trace_id", "session_id", "shopping_session_id"]);

        function i(a) {
            let b = URL.parse(a);
            if (b?.protocol === "https:" && !b.username && !b.password) return b.searchParams.delete("utm_source", "chatgpt.com"), b.href
        }

        function j(a) {
            return null != a && "object" == typeof a && !Array.isArray(a)
        }

        function k(a) {
            return Array.isArray(a) ? a.map(k) : j(a) ? Object.fromEntries(Object.entries(a).filter(a => {
                let [b] = a;
                return !h.has(b)
            }).map(a => {
                let [b, c] = a;
                return [b, k(c)]
            })) : a
        }

        function l(a) {
            return k(Object.fromEntries(Object.entries(a).filter(a => {
                let [b] = a;
                return g.has(b)
            })))
        }
        c.d(b, {}, {
            a: function(a, b) {
                let c, d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "block",
                    e = f.safeParse(a);
                if (!e.success) return;
                let {
                    open_behavior: g,
                    ...h
                } = e.data, m = (h.offers ?? []).filter(j);
                if ("bound-offer" === d) {
                    let a = i(b);
                    if (null == a) return;
                    let d = m.filter(b => "string" == typeof b.url && i(b.url) === a);
                    if (d.length > 1 || 0 === d.length && ("string" != typeof h.url || i(h.url) !== a)) return;
                    c = d[0]
                } else "external_url" !== g && (c = m.find(a => !0 === a.available && "string" == typeof a.url && a.url.trim()) ?? m.find(a => "string" == typeof a.url && a.url.trim()));
                let n = c?.merchant_name || c?.merchant,
                    o = {
                        selected_merchant_hostname: new URL(b).hostname.toLowerCase().replace(/\.$/u, "").replace(/^www\./u, ""),
                        selected_merchant_url: b,
                        ...null != c ? {
                            selected_offer: l(c)
                        } : {},
                        ..."string" == typeof n && n.trim() ? {
                            display_name: n
                        } : {}
                    };
                return {
                    product: Object.fromEntries(Object.entries(h).map(a => {
                        let [b, c] = a;
                        return [b, "offers" === b ? m.map(l) : k(c)]
                    })),
                    observed_retailer: o
                }
            },
            b: i
        })
    }),
    ggor: (function(a, b, c) {
        var d = c("yZpl"),
            e = c("Cslg"),
            f = c("jEN2"),
            g = c("zWHk"),
            h = c("nlNF"),
            i = c("Kwur"),
            j = c("Y0jW"),
            k = c("lXWy");

        function l(a, b) {
            if ("string" != typeof a) return;
            let c = a.replace(/\b(?:https?:\/\/|www\.)\S+/giu, "").trim();
            if (c.length <= b) return c || void 0;
            let d = Array.from(c).slice(0, b).join("");
            if (d.length === c.length || void 0 === Intl.Segmenter) return d;
            let e = new Intl.Segmenter(void 0, {
                    granularity: "grapheme"
                }).segment(c),
                f = e.containing(d.length)?.index ?? d.length;
            return c.slice(0, f) || void 0
        }

        function m(a) {
            let b = l(a.title, 256) ?? "",
                c = l(a.description, 1200),
                d = a.variants?.flatMap(a => {
                    let b = a.options?.find(b => b.id === a.selected_option_id),
                        c = l(b?.label, 256);
                    if (!c) return [];
                    let d = l(a.label, 256);
                    return [d ? `${d}: ${c}` : c]
                }),
                e = l(d?.join(", "), 256) ?? l(a.selected_variant, 256);
            return {
                title: b,
                ...c ? {
                    description: c
                } : {},
                ...e ? {
                    selected_variant: e
                } : {}
            }
        }
        c.d(b, {}, {
            a: class {
                scope;
                conversationId;
                profile;
                fallback;
                product;
                available$;
                lifetime = new AbortController;
                originVisit;
                destinationVisit;
                stopWatching;
                stopDocument;
                editor;
                question;
                editOrSendRevision = 0;
                boundRevision;
                binding = 0;
                constructor(a, b, c, d, f) {
                    this.scope = a, this.conversationId = b, this.profile = c, this.fallback = d, this.product = f, this.available$ = "product_detail_panel" === c.sourceSurface ? k.j : k.d, a.get(j.a)?.cancel(), this.originVisit = a.get(h.e), a.set(j.a, this);
                    let g = a.watch(a => {
                        let {
                            get: d
                        } = a;
                        if (!d(this.available$) || d(e.f) !== c.accountId || d(e.k) !== c.userId) return void this.cancel();
                        let f = d(h.e),
                            g = d(h.c),
                            i = g?.pathname === "/" && g.state?.initialChatGptConversationId === b && g.state.initialChatGptBusinessAgentGizmoId === c.gizmoId;
                        if (i || f !== this.originVisit || null != this.destinationVisit) {
                            if (!i) return void this.cancel();
                            this.destinationVisit = f, this.applyIfUntouched()
                        }
                    });
                    this.lifetime.signal.aborted ? g() : (this.stopWatching = g, window.addEventListener("pagehide", this.cancel, {
                        once: !0
                    }))
                }
                async generate(a) {
                    if (null == a || !this.product.title || this.lifetime.signal.aborted) return void this.cancel();
                    try {
                        let b = await i.Request.safePost("/gizmos/business-agents/{business_agent_id}/product-card-conversation-starter", {
                            parameters: {
                                path: {
                                    business_agent_id: this.profile.businessAgentId
                                }
                            },
                            additionalHeaders: {
                                [d.dc]: this.profile.accountId
                            },
                            expectedIdentity: {
                                accountId: this.profile.accountId,
                                userId: this.profile.userId
                            },
                            requestBody: {
                                ..."product_detail_panel" === this.profile.sourceSurface ? {
                                    source_surface: this.profile.sourceSurface
                                } : {},
                                interaction_id: a,
                                source_profile_lookup_id: this.profile.sourceProfileLookupId,
                                source_product_hostname: this.profile.sourceProductHostname,
                                product: this.product
                            },
                            signal: AbortSignal.any([this.lifetime.signal, AbortSignal.timeout(12e3)]),
                            retry: "never"
                        });
                        if (this.lifetime.signal.throwIfAborted(), this.question = b.question?.trim() || void 0, null == this.question) return void this.cancel();
                        this.applyIfUntouched()
                    } catch {
                        this.cancel()
                    }
                }
                bind(a) {
                    if (this.lifetime.signal.aborted) return () => {};
                    if (!a.view.isDestroyed && !a.isInputActive) {
                        let b, c = ++this.binding,
                            d = (0, f.B)(() => {
                                a.isInputActive && (d(), b = this.bind(a))
                            });
                        return this.lifetime.signal.addEventListener("abort", d, {
                            once: !0
                        }), () => {
                            this.lifetime.signal.removeEventListener("abort", d), d(), null != b ? b() : this.cancelIfUnbound(c)
                        }
                    }
                    if (a.view.isDestroyed || a.getText() !== this.fallback || null != this.editor && this.editor !== a) return this.cancel(), () => {};
                    let b = ++this.binding;
                    return this.editor = a, this.boundRevision = this.editOrSendRevision, null == this.stopDocument && (this.stopDocument = (0, g.b)(a.view, a => {
                        a && this.editedOrSent()
                    })), this.applyIfUntouched(), () => {
                        this.boundRevision = void 0, this.cancelIfUnbound(b)
                    }
                }
                cancelIfUnbound(a) {
                    queueMicrotask(() => {
                        this.binding === a && this.cancel()
                    })
                }
                promptDidChange(a) {
                    a !== this.fallback && this.editedOrSent()
                }
                editedOrSent() {
                    this.editOrSendRevision++, this.cancel()
                }
                cancel = () => {
                    this.lifetime.signal.aborted || (this.lifetime.abort(), this.stopDocument?.(), this.stopWatching?.(), window.removeEventListener("pagehide", this.cancel), this.scope.get(j.a) === this && this.scope.set(j.a, null))
                };
                applyIfUntouched() {
                    let a = this.editor,
                        b = this.question;
                    if (null == a || null == b || null == this.destinationVisit || null == this.boundRevision || this.lifetime.signal.aborted) return;
                    let c = this.scope.get(h.c),
                        d = this.scope.get(j.a) === this && this.scope.get(this.available$) && this.scope.get(e.f) === this.profile.accountId && this.scope.get(e.k) === this.profile.userId && c?.pathname === "/" && c.state?.initialChatGptConversationId === this.conversationId && c.state.initialChatGptBusinessAgentGizmoId === this.profile.gizmoId && this.scope.get(h.e) === this.destinationVisit && this.boundRevision === this.editOrSendRevision && !a.view.isDestroyed && a.isInputActive && a.getText() === this.fallback;
                    this.cancel(), d && a.setText(b, "external-draft")
                }
            },
            b: function(a, b) {
                return a.formatMessage({
                    id: "chatgpt.product.block.businessQuestion.starter",
                    defaultMessage: "What should I know about the {product}?"
                }, {
                    product: b
                })
            },
            c: function(a) {
                let {
                    title: b,
                    description: c,
                    selected_variant: d
                } = m(a), e = l(a.price, 128), f = [];
                for (let [b, c] of Object.entries(a.specs ?? {})) {
                    let a = l(b, 80),
                        d = l(c, 256);
                    if (a && d && f.push([a, d]), 20 === f.length) break
                }
                return {
                    title: b,
                    ...c ? {
                        description: c
                    } : {},
                    ...d ? {
                        variant: d
                    } : {},
                    ...e ? {
                        price: e
                    } : {},
                    ...f.length > 0 ? {
                        specs: Object.fromEntries(f)
                    } : {}
                }
            },
            d: m
        })
    }),
    lXWy: (function(a, b, c) {
        var d = c("QosV"),
            e = c("LrxN"),
            f = c("D7Ms"),
            g = c("Q840"),
            h = c("yZpl"),
            i = c("AuIy"),
            j = c("lAQI"),
            k = c("Cslg"),
            l = c("svjy"),
            m = c("yGJW"),
            n = c("OWtl"),
            o = c("cX6x"),
            p = c("JYRT"),
            q = c("OMIV"),
            r = c("wVL6"),
            s = c("uRGy"),
            t = c("Kwur"),
            u = c("dQRk"),
            v = c("lSqO"),
            w = c("qUXQ");
        let x = "2156661915",
            y = "1563544563";

        function z(a) {
            let b = b => b?.getFeatureGate(a, {
                disableExposureLog: !0
            }).value ?? (0, o.c)(a)?.value ?? !1;
            return (0, g.h)(n.a, a => {
                let {
                    get: c
                } = a;
                return b(c(q.g))
            }, a => {
                let {
                    get: c,
                    set: d
                } = a, e = c(q.g);
                if (null == e) return;
                let f = () => d(b(e));
                return e.on("values_updated", f), () => e.off("values_updated", f)
            })
        }
        let A = z(x),
            B = z(y),
            C = (0, g.c)(n.a, a => {
                let {
                    get: b
                } = a;
                return "u" > typeof window && "desktop_web" === (0, r.a)() && !("MacIntel" === window.navigator.platform && window.navigator.maxTouchPoints > 1) && b(B) && b(v.b)
            }),
            D = (0, g.c)(n.a, a => {
                let {
                    get: b
                } = a;
                return b(A) && b(v.b)
            });

        function E(a) {
            let b = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                c = null == a ? null : URL.parse(a);
            if (null == c || "https:" !== c.protocol && (b || "http:" !== c.protocol) || c.username || c.password) return null;
            let d = c.hostname.toLowerCase().replace(/\.$/, "");
            return d.includes(".") && !/^\d+(?:\.\d+){3}$/.test(d) ? d : null
        }

        function F(a, b, c, d, e, f) {
            if (null == a || !1 === a.isPresented || a.isReadOnly || !1 === a.trackShownImpressions || a.shouldBlockExternalEgress) return null;
            let g = E(e),
                h = a.turnId ?? b;
            if (null == g || null == h) return null;
            let i = b?.startsWith("WEB:") ? void 0 : b;
            return {
                hostname: g,
                responseId: h,
                sourceMessageKey: b,
                messageId: i,
                conversationId: a.conversationId,
                cardIndex: c,
                contentReferenceId: null != i && null != d ? `${i}-${d}` : void 0,
                productId: f ?? void 0
            }
        }

        function G(a, b, c) {
            a.get(D) && (0, m.a)(a, e.f, {
                messageId: b.messageId,
                contentReferenceId: b.contentReferenceId,
                productId: b.productId,
                ...c
            })
        }

        function H() {
            return {
                domainObservedAt: performance.now(),
                shown: new Set
            }
        }
        let I = (0, g.j)(n.a, a => {
                let b = H(),
                    c = new Map;
                return a => {
                    if (null == a) return b;
                    let d = c.get(a);
                    if (null != d) return d;
                    let e = 0 === c.size ? b : H();
                    return c.set(a, e), e
                }
            }, {
                autoDispose: 3e5
            }),
            J = j.J(j.L().min(1).max(100), j.E().min(0).max(1).nullable()).default({}),
            K = (0, g.c)(n.a, a => {
                let {
                    get: b
                } = a, c = b(q.e, "498080874"), d = c ? b(p.a, "1850909878") : null, e = d?.get("provider", "generic"), f = d?.get("mlp_model_version", "") ?? "", g = J.safeParse(d?.value.mlp_model_thresholds), h = null;
                g.success && (Object.hasOwn(g.data, f) ? h = g.data[f] : "original-unweighted-30k-epoch9-numpy-v1" === f && (h = d?.get("mlp_min_confidence", -1)));
                let i = null != h && Number.isFinite(h) && h >= 0 && h <= 1 && f.length > 0 && f.length <= 100 && d?.get("mlp_embedding_contract", "") === "organic-cta-context-card-json-v1:ev3-3072",
                    j = "generic";
                return c ? "llm" === e ? j = "llm" : "mlp" === e && i && (j = "mlp") : b(q.e, "2194711480") && (j = "llm"), {
                    provider: j,
                    cacheKey: JSON.stringify([c, j, d?.value, "organic-cta-context-card-json-v1"])
                }
            }),
            L = (0, g.q)(n.a, (a, b) => {
                let {
                    get: c,
                    scope: d
                } = b, e = c(k.f), g = c(k.k), i = c(D) && null != e && null != g, j = i ? c(l.a).locale : null, m = i ? c(K) : null, n = m?.provider === "llm" || m?.provider === "mlp" && null != a.mlpFeatureCard ? c(u.j, a.conversationId) : null, o = null != n && null != a.messageId && a.replyCtaProduct?.title ? {
                    source_conversation_id: n,
                    source_assistant_message_id: a.messageId,
                    product: a.replyCtaProduct,
                    ...m?.provider === "mlp" && null != a.mlpFeatureCard ? {
                        mlp_feature_card: a.mlpFeatureCard
                    } : {}
                } : void 0, p = i && c(C), q = null != o && M(a, c), r = i && !q;
                return {
                    queryKey: [...p ? [...P(e, g, a.conversationId, a.hostname, j), a.responseId] : ["product-card-business-agent", e, g, a.conversationId, a.responseId, a.hostname, j], ...null != o ? ["reply-cta", m?.cacheKey, o, q] : []],
                    enabled: r,
                    staleTime: null == o ? 1 / 0 : 6e4,
                    gcTime: 3e5,
                    refetchOnWindowFocus: !1,
                    retry: !1,
                    retryOnMount: !0,
                    queryFn: r && null != j ? async b => {
                        let {
                            signal: c
                        } = b, f = AbortSignal.timeout(4e3), i = null, q = "error";
                        try {
                            let b = {
                                    hostname: a.hostname,
                                    ...p ? {
                                        source_surface: "product_card"
                                    } : {},
                                    ...null != o ? {
                                        reply_cta_context: o
                                    } : {}
                                },
                                d = await t.Request.safePost("/business-profiles/product-card-chat-target", {
                                    additionalHeaders: {
                                        [h.dc]: e,
                                        "OAI-Language": j
                                    },
                                    expectedIdentity: {
                                        accountId: e,
                                        userId: g
                                    },
                                    requestBody: b,
                                    signal: AbortSignal.any([c, f]),
                                    retry: "never"
                                });
                            f.throwIfAborted(), i = d.target?.cta_label?.trim() ? d.target : null, q = null == i ? "no_match" : "matched"
                        } catch {
                            q = f.aborted ? "timeout" : "error"
                        }
                        if (!(!c.aborted && d.get(D) && d.get(k.f) === e && d.get(k.k) === g && d.get(l.a).locale === j && (null == o || d.get(K).cacheKey === m?.cacheKey && d.get(u.j, a.conversationId) === n && !M(a, d.get)))) throw new DOMException("Product card lookup is no longer current", "AbortError");
                        if (G(d, a, {
                                action: "lookup_finished",
                                lookupOutcome: q,
                                businessAgentId: i?.business_agent_id
                            }), "timeout" === q || "error" === q) throw Error("Product merchant lookup is temporarily unavailable");
                        return i
                    } : f.u
                }
            }, {
                key: N
            });

        function M(a, b) {
            if (!b(u.J, a.conversationId)) return !1;
            let c = b(u.N, a.conversationId);
            if (null == c || null == a.messageId || null == c[a.messageId]) return !0;
            let d = (0, i.b)({
                current_node: b(u.C, a.conversationId),
                mapping: c
            });
            return 0 === d.length || d.some(b => b.id === a.messageId)
        }

        function N(a) {
            return null == a ? "" : JSON.stringify([a.conversationId, a.responseId, a.cardIndex, a.sourceMessageKey, a.productId, a.hostname, ...null != a.replyCtaProduct ? [a.replyCtaProduct] : [], ...null != a.mlpFeatureCard ? [a.mlpFeatureCard] : []])
        }
        let O = (0, g.d)(n.a, (a, b) => {
            let {
                get: c
            } = b;
            if (null == a || !c(D)) return null;
            let d = c(L, a);
            return d.isEnabled ? d.data ?? null : null
        }, {
            key: N,
            autoDispose: !0
        });

        function P(a, b, c, d, e) {
            return ["product-card-business-agent-with-pdp-label", a, b, c, d, e]
        }

        function Q(a, b) {
            return a && b?.trim() ? {
                business_agent_id: a.business_agent_id,
                source_profile_lookup_id: a.source_profile_lookup_id,
                display_name: a.display_name,
                gizmo_id: a.gizmo_id,
                cta_label: b
            } : null
        }

        function R(a) {
            return null == a ? "" : JSON.stringify([a.conversationId, a.hostname])
        }
        let S = (0, g.q)(n.a, (a, b) => {
                let {
                    get: c,
                    scope: d
                } = b, e = c(k.f), g = c(k.k), i = null != e && null != g && c(C), j = i ? c(l.a).locale : null;
                return {
                    queryKey: ["product-detail-panel-business-agent", e, g, a.conversationId, a.hostname, j],
                    enabled: i,
                    staleTime: 6e4,
                    gcTime: 3e5,
                    retry: !1,
                    refetchOnWindowFocus: !1,
                    queryFn: i && null != j ? async b => {
                        let {
                            signal: c
                        } = b, f = P(e, g, a.conversationId, a.hostname, j), i = d.queryClient.getQueriesData({
                            queryKey: f
                        }).find(a => {
                            let [, b] = a;
                            return b?.pdp_cta_label?.trim()
                        })?.[1];
                        if (null != i) return Q(i, i.pdp_cta_label);
                        let m = d.queryClient.getQueryCache().find({
                            queryKey: f,
                            exact: !1,
                            predicate: a => "fetching" === a.state.fetchStatus && a.queryKey.length === f.length + 1
                        })?.promise;
                        if (null != m) {
                            let a = await m.catch(() => null),
                                b = Q(a, a?.pdp_cta_label);
                            if (null != b) return b
                        }
                        if (c.throwIfAborted(), !d.get(C) || d.get(k.f) !== e || d.get(k.k) !== g || d.get(l.a).locale !== j) throw new DOMException("Product panel lookup is no longer current", "AbortError");
                        let n = await t.Request.safePost("/business-profiles/product-card-chat-target", {
                            additionalHeaders: {
                                [h.dc]: e,
                                "OAI-Language": j
                            },
                            expectedIdentity: {
                                accountId: e,
                                userId: g
                            },
                            requestBody: {
                                hostname: a.hostname,
                                source_surface: "product_detail_panel"
                            },
                            signal: AbortSignal.any([c, AbortSignal.timeout(4e3)]),
                            retry: "never"
                        });
                        return Q(n.target, n.target?.cta_label)
                    } : f.u
                }
            }, {
                key: R
            }),
            T = (0, g.d)(n.a, (a, b) => {
                let {
                    get: c
                } = b;
                if (null == a || !c(C)) return null;
                let d = c(S, a);
                return d.isEnabled ? d.data ?? null : null
            }, {
                key: R,
                autoDispose: !0
            });
        c.d(b, {}, {
            a: function(a, b, c, d) {
                let e = "number" == typeof b?.start_idx ? b.start_idx : void 0,
                    f = (0, s.a)(d, b),
                    g = F(a, a?.contentReferenceMessageIds?.[c] ?? a?.messageId, e ?? c, e, f, d.id);
                return null == g || null == f ? null : {
                    ...g,
                    mlpFeatureCard: (0, w.a)(d, f)
                }
            },
            b: function(a, b, c, d) {
                return F(a, b ?? a?.messageId, c, c, d.url, d.id)
            },
            c: function(a) {
                return E(a, !0)
            },
            d: D,
            e: A,
            f: O,
            g: x,
            h: K,
            i: L,
            j: C,
            k: y,
            l: T,
            m: G,
            n: function(a, b, c) {
                let e, f, h = (0, d.c)(11);
                h[0] !== b || h[1] !== a.cardIndex || h[2] !== a.conversationId || h[3] !== a.hostname || h[4] !== a.responseId || h[5] !== a.sourceMessageKey || h[6] !== c ? (e = JSON.stringify([b, c, a.conversationId, a.responseId, a.sourceMessageKey, a.cardIndex, a.hostname]), h[0] = b, h[1] = a.cardIndex, h[2] = a.conversationId, h[3] = a.hostname, h[4] = a.responseId, h[5] = a.sourceMessageKey, h[6] = c, h[7] = e) : e = h[7];
                let i = (0, g.w)(I, e);
                return h[8] !== i || h[9] !== a.productId ? (f = i(a.productId), h[8] = i, h[9] = a.productId, h[10] = f) : f = h[10], f
            }
        })
    }),
    C6kc: (function(a, b, c) {
        var d = c("mBJV"),
            e = c("MVHH"),
            f = c("D99L"),
            g = c("fVOX"),
            h = c("yGJW"),
            i = c("g2p6");

        function j(a, b, c) {
            "memory_footnote_shown" === b && (0, h.a)(a, f.CodexChatgptInteractionMemoryFootnoteShown, {
                memoryCitationExperiment: c
            }), a.get(g.a).count("default", b, {
                entrypoint: "turn_sources_button",
                memory_citation_experiment: c,
                target: "search_sources_sidebar"
            })
        }
        c.d(b, {
            a: () => e.Y
        }, {
            b: function(a, b) {
                let {
                    actionType: c,
                    conversationId: d,
                    experiment: f,
                    messageId: g,
                    source: i,
                    feedback: k,
                    selectedFeedback: l,
                    surface: m = "sources"
                } = b, n = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_UNSPECIFIED";
                "positive" === k ? n = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_POSITIVE" : "negative" === k ? n = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_NEGATIVE" : Object.is(k, null) && (n = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_CLEARED");
                let o = null == i ? "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_TURN_SOURCES_BUTTON" : "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_SOURCES_SIDEBAR_ACTION_MENU";
                "explainer" === m && (o = "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_ENTITY_SIDEBAR_FEEDBACK_BUTTON"), (0, h.a)(a, e.X, {
                    actionType: c,
                    conversationId: d ?? void 0,
                    messageId: g,
                    citationUuid: i?.citationUuid ?? void 0,
                    sourceType: function(a) {
                        switch (a?.conversationContextType) {
                            case "user_memory":
                                return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_SAVED_MEMORY";
                            case "general_memory":
                                return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_GENERAL_MEMORY";
                            case "past_conversation":
                                return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_PAST_CONVERSATION";
                            case "user_instructions":
                                return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_CUSTOM_INSTRUCTIONS";
                            case null:
                            case void 0:
                                return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_UNSPECIFIED"
                        }
                    }(i),
                    feedback: n,
                    selectedFeedback: null == l ? void 0 : ({
                        positive: "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_POSITIVE",
                        negative: "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_NEGATIVE"
                    })[l],
                    entrypoint: o,
                    target: "explainer" === m || "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_SIDEBAR_CITATION_CLICKED" === c ? "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_TARGET_ENTITY_SIDEBAR" : "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_TARGET_SEARCH_SOURCES_SIDEBAR",
                    memoryCitationExperiment: f
                }), "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_SIDEBAR_OPENED" === c && j(a, "chatgpt_memory_citations_sidebar_open_clicked", f)
            },
            c: function(a, b) {
                "dismissed" === b && (0, h.a)(a, f.CodexChatgptInteractionMemoryIntroductionDismissed, {
                    announcementKey: i.c
                }), "shown" === b && (0, h.a)(a, d.xd, {
                    eventId: `${i.c}_tooltip_shown`,
                    type: "UPSELL_OR_MODAL_TYPE_NUX_TOOLTIP"
                })
            },
            d: j
        })
    }),
    uRGy: (function(a, b, c) {
        var d = c("lAQI"),
            e = c("zSQm");
        let f = d.s();
        c.d(b, {}, {
            a: function(a, b) {
                if ("external_url" === a.open_behavior) {
                    let c = f.safeParse(a.url);
                    return c.success && (b?.type !== "product_entity" || Array.isArray(b.safe_urls) && b.safe_urls.includes(a.url)) ? c.data : null
                }
                let c = a.offers?.find(a => !0 === a.available && a.url?.trim()) ?? a.offers?.find(a => a.url?.trim()),
                    d = c?.url?.trim() || a.url?.trim();
                return d ? (0, e.a)(d) ?? null : null
            }
        })
    }),
    iYCA: (function(a, b, c) {
        c("QLGt"), a.exports = c("TQhG")
    }),
    UlFl: (function(a, b, c) {
        c("o1bS"), a.exports = c("ogbS")("Array", "findLast")
    }),
    wAJj: (function(a, b, c) {
        var d = c("OwA9"),
            e = c("EzAB"),
            f = c("fuV1"),
            g = c("f6Go"),
            h = function(a) {
                var b = 1 === a;
                return function(c, h, i) {
                    for (var j, k = f(c), l = e(k), m = g(l), n = d(h, i); m-- > 0;)
                        if (n(j = l[m], m, k)) switch (a) {
                            case 0:
                                return j;
                            case 1:
                                return m
                        }
                    return b ? -1 : void 0
                }
            };
        a.exports = {
            findLast: h(0),
            findLastIndex: h(1)
        }
    }),
    o1bS: (function(a, b, c) {
        var d = c("Ywrr"),
            e = c("wAJj").findLast,
            f = c("XnQF");
        d({
            target: "Array",
            proto: !0
        }, {
            findLast: function(a) {
                return e(this, a, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), f("findLast")
    }),
    QLGt: (function(a, b, c) {
        c("o1bS")
    }),
    TQhG: (function(a, b, c) {
        a.exports = c("UlFl")
    }),
    JWvJ: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "arrow-down-line-horizontal-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-arrow-down-line-horizontal-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 244e-6,
                    y: 1e-6,
                    overflows: !1
                },
                composite: {
                    x: 244e-6,
                    y: 1e-6,
                    overflows: !1
                }
            }
        }
    }),
    OUTj: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "arrow-down-open-base-regular-32",
            canvas: {
                width: 32,
                height: 32,
                viewBox: "0 0 32 32"
            },
            href: "#codex-icon-arrow-down-open-base-regular-32",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: -.166992,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: -.166992,
                    overflows: !1
                }
            }
        }
    }),
    K327: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "arrow-up-open-base-regular-32",
            canvas: {
                width: 32,
                height: 32,
                viewBox: "0 0 32 32"
            },
            href: "#codex-icon-arrow-up-open-base-regular-32",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: -.270508,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: -.270508,
                    overflows: !1
                }
            }
        }
    }),
    Erwa: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "book-badge-heart-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-book-badge-heart-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.807617,
                    y: -.309082,
                    overflows: !1
                },
                composite: {
                    x: -.807617,
                    y: -.309082,
                    overflows: !1
                }
            }
        }
    }),
    G2Me: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "circle-exclamationmark-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-circle-exclamationmark-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    sAcu: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "circle-info-light-28",
            canvas: {
                width: 28,
                height: 28,
                viewBox: "0 0 28 28"
            },
            href: "#codex-icon-circle-info-light-28",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    fTq7: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "clock-arrow-rotate-counterclockwise-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-clock-arrow-rotate-counterclockwise-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: 488e-6,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: 488e-6,
                    overflows: !1
                }
            }
        }
    }),
    BrJ6: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "code-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-code-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.003173,
                    y: -.046875,
                    overflows: !1
                },
                composite: {
                    x: -.003173,
                    y: -.046875,
                    overflows: !1
                }
            }
        }
    }),
    fXZ5: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "document-light-28",
            canvas: {
                width: 28,
                height: 28,
                viewBox: "0 0 28 28"
            },
            href: "#codex-icon-document-light-28",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: 244e-6,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: 244e-6,
                    overflows: !1
                }
            }
        }
    }),
    Tuak: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "document-pdf-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-document-pdf-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.249512,
                    y: -.331543,
                    overflows: !1
                },
                composite: {
                    x: -.249512,
                    y: -.331543,
                    overflows: !1
                }
            }
        }
    }),
    BTe7: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "document-pdf-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-document-pdf-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.312989,
                    y: -.414063,
                    overflows: !1
                },
                composite: {
                    x: -.312989,
                    y: -.414063,
                    overflows: !1
                }
            }
        }
    }),
    IvFl: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "emoji-face-badge-plus-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-emoji-face-badge-plus-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.416504,
                    y: .416991,
                    overflows: !1
                },
                composite: {
                    x: -.416504,
                    y: .416991,
                    overflows: !1
                }
            }
        }
    }),
    c9RU: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "folder-person-2-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-folder-person-2-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: 488e-6,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: 488e-6,
                    overflows: !1
                }
            }
        }
    }),
    sHdJ: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "frame-cursor-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-frame-cursor-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.953186,
                    y: -.972412,
                    overflows: !1
                },
                composite: {
                    x: -.953186,
                    y: -.972412,
                    overflows: !1
                }
            }
        }
    }),
    M6Yu: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "gift-regular-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-gift-regular-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    eKGK: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "heart-badge-shield-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-heart-badge-shield-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.1781,
                    y: -.04541,
                    overflows: !1
                },
                composite: {
                    x: -.1781,
                    y: -.04541,
                    overflows: !1
                }
            }
        }
    }),
    tXbk: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "lightbulb-rays-regular-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-lightbulb-rays-regular-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: .375,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: .375,
                    overflows: !1
                }
            }
        }
    }),
    h6Dd: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "link-regular-32",
            canvas: {
                width: 32,
                height: 32,
                viewBox: "0 0 32 32"
            },
            href: "#codex-icon-link-regular-32",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 3e-5,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: 3e-5,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    aINj: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "lock-regular-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-lock-regular-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    SECa: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "minus-sm-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-minus-sm-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    idzN: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "person-badge-heart-light-28",
            canvas: {
                width: 28,
                height: 28,
                viewBox: "0 0 28 28"
            },
            href: "#codex-icon-person-badge-heart-light-28",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.82483,
                    y: -.622437,
                    overflows: !1
                },
                composite: {
                    x: -.82483,
                    y: -.622437,
                    overflows: !1
                }
            }
        }
    }),
    zpIf: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "person-frame-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-person-frame-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -1e-6,
                    y: -1e-6,
                    overflows: !1
                },
                composite: {
                    x: -1e-6,
                    y: -1e-6,
                    overflows: !1
                }
            }
        }
    }),
    sBoT: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "plus-md-light-28",
            canvas: {
                width: 28,
                height: 28,
                viewBox: "0 0 28 28"
            },
            href: "#codex-icon-plus-md-light-28",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    aakY: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "resize-window-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-resize-window-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.019043,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: -.019043,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    Y6Kb: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "sparkle-fill-regular-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-sparkle-fill-regular-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: .065674,
                    y: .06543,
                    overflows: !1
                },
                composite: {
                    x: .065674,
                    y: .06543,
                    overflows: !1
                }
            }
        }
    }),
    MjK8: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "arrow-left-arrow-right-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                frame: {
                    x: 0,
                    y: 0,
                    width: 24,
                    height: 24
                },
                inkBounds: {
                    x: 4.151855,
                    y: 2.312988,
                    width: 15.696777,
                    height: 19.499512
                },
                visualBounds: {
                    x: 4.151855,
                    y: 2.312988,
                    width: 15.696777,
                    height: 19.499512
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 4.151855,
                    y: 2.312988,
                    width: 15.696777,
                    height: 19.499512
                },
                center: {
                    x: 12.000244,
                    y: 12.062744
                },
                insets: {
                    top: 2.312988,
                    right: 4.151368,
                    bottom: 2.1875,
                    left: 4.151855
                },
                anchors: {
                    frame: {
                        x: 12,
                        y: 12
                    },
                    ink: {
                        x: 12.000244,
                        y: 12.062744
                    },
                    foreground: {
                        x: 12.000244,
                        y: 12.062744
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M14.6921 12.5384C14.9818 12.2425 15.4567 12.2371 15.7527 12.5266L19.4734 16.1692L19.5613 16.2649C19.9444 16.7262 19.9446 17.3994 19.5613 17.8606L19.4734 17.9554L15.7527 21.5989C15.4567 21.8884 14.9818 21.8829 14.6921 21.5872C14.4026 21.2912 14.408 20.8163 14.7038 20.5266L17.4763 17.8128H5.56321C5.149 17.8128 4.81321 17.477 4.81321 17.0628C4.81329 16.6486 5.14905 16.3128 5.56321 16.3128H17.4763L14.7038 13.5989C14.408 13.3092 14.4026 12.8343 14.6921 12.5384Z" fill="currentColor"/> <path d="M8.24778 2.52664C8.54372 2.23716 9.01861 2.2426 9.30833 2.53836C9.59782 2.83434 9.59246 3.30921 9.29661 3.59891L6.52415 6.31278H18.5632C18.9773 6.31284 19.3131 6.64868 19.3132 7.06278C19.3132 7.47695 18.9774 7.81271 18.5632 7.81278H6.52415L9.29661 10.5266C9.59246 10.8163 9.59783 11.2912 9.30833 11.5872C9.0186 11.8828 8.54366 11.8883 8.24778 11.5989L4.52708 7.95535L4.43919 7.86063C4.056 7.39944 4.05616 6.7262 4.43919 6.26493L4.52708 6.16922L8.24778 2.52664Z" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    o1AX: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "bell-light-32",
            canvas: {
                width: 32,
                height: 32,
                viewBox: "0 0 32 32",
                frame: {
                    x: 0,
                    y: 0,
                    width: 32,
                    height: 32
                },
                inkBounds: {
                    x: 4.060059,
                    y: 2.766357,
                    width: 23.880791,
                    height: 26.466797
                },
                visualBounds: {
                    x: 4.060059,
                    y: 2.766357,
                    width: 23.880791,
                    height: 26.466797
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 4.060059,
                    y: 2.766357,
                    width: 23.880791,
                    height: 26.466797
                },
                center: {
                    x: 16.000455,
                    y: 15.999756
                },
                insets: {
                    top: 2.766357,
                    right: 4.05915,
                    bottom: 2.766846,
                    left: 4.060059
                },
                anchors: {
                    frame: {
                        x: 16,
                        y: 16
                    },
                    ink: {
                        x: 16.000455,
                        y: 15.999756
                    },
                    foreground: {
                        x: 16.000455,
                        y: 15.999756
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M16.001 2.76636C18.86 2.76655 21.205 3.74896 22.8652 5.41187C24.5186 7.0681 25.4365 9.34215 25.5615 11.8337L25.8076 16.7126C25.8203 16.9639 25.8867 17.2099 26.002 17.4333L27.6514 20.6316C27.9752 21.2594 28.0656 22.0551 27.7236 22.7458C27.3541 23.4915 26.5905 23.9 25.6592 23.9001H22.167C21.7307 26.916 19.1366 29.2329 16 29.2332C12.8633 29.233 10.2684 26.916 9.83203 23.9001H6.3418C5.41038 23.9001 4.64692 23.4915 4.27734 22.7458C3.93524 22.0551 4.02576 21.2595 4.34961 20.6316L5.99902 17.4333C6.11422 17.2099 6.18067 16.9639 6.19336 16.7126L6.43945 11.8337C6.56446 9.34211 7.48231 7.0681 9.13574 5.41187C10.7961 3.74894 13.1417 2.76636 16.001 2.76636ZM11.6592 23.9001C12.0751 25.9169 13.8601 27.4332 16 27.4333C18.1398 27.4331 19.9248 25.9169 20.3408 23.9001H11.6592ZM16.001 4.56714C13.5725 4.56714 11.7009 5.39072 10.4102 6.68335C9.11262 7.98297 8.34312 9.81527 8.2373 11.9236L7.99121 16.8035C7.96559 17.3106 7.83127 17.8063 7.59863 18.2576L5.9502 21.4568C5.82866 21.6925 5.85539 21.8759 5.89062 21.947C5.90498 21.9758 5.92696 22.0031 5.97363 22.0291C6.025 22.0575 6.13612 22.1003 6.3418 22.1003H25.6592C25.8653 22.1003 25.9772 22.0575 26.0283 22.0291C26.0747 22.0031 26.097 21.9758 26.1113 21.947C26.1465 21.8757 26.1731 21.6922 26.0518 21.4568L24.4023 18.2576C24.1697 17.8063 24.0354 17.3106 24.0098 16.8035L23.7637 11.9246C23.6579 9.81638 22.8882 7.98296 21.5908 6.68335C20.3002 5.39081 18.4291 4.56733 16.001 4.56714Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    vjan: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "code-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                frame: {
                    x: 0,
                    y: 0,
                    width: 24,
                    height: 24
                },
                inkBounds: {
                    x: 2.299316,
                    y: 7.25,
                    width: 19.407715,
                    height: 9.59375
                },
                visualBounds: {
                    x: 2.299316,
                    y: 7.25,
                    width: 19.407715,
                    height: 9.59375
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 2.299316,
                    y: 7.25,
                    width: 19.407715,
                    height: 9.59375
                },
                center: {
                    x: 12.003173,
                    y: 12.046875
                },
                insets: {
                    top: 7.25,
                    right: 2.292969,
                    bottom: 7.15625,
                    left: 2.299316
                },
                anchors: {
                    frame: {
                        x: 12,
                        y: 12
                    },
                    ink: {
                        x: 12.003173,
                        y: 12.046875
                    },
                    foreground: {
                        x: 12.003173,
                        y: 12.046875
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M5.40256 7.55561C5.64829 7.2222 6.11795 7.15074 6.45139 7.39644C6.78438 7.64226 6.85517 8.11198 6.60959 8.44526L3.93479 12.0771L6.60666 15.6445C6.85433 15.976 6.78663 16.4462 6.4553 16.6943C6.12387 16.9422 5.65376 16.8741 5.40549 16.5429L2.4885 12.6484C2.23749 12.3131 2.23634 11.8528 2.48459 11.5156L5.40256 7.55561Z" fill="currentColor"/> <path d="M17.5549 7.39644C17.8884 7.15074 18.358 7.2222 18.6037 7.55561L21.5217 11.5156C21.7698 11.8528 21.7688 12.3132 21.5178 12.6484L18.6008 16.5429C18.3527 16.8742 17.8825 16.942 17.551 16.6943C17.2196 16.4461 17.1518 15.976 17.3996 15.6445L20.0715 12.0771L17.3967 8.44526C17.1511 8.11188 17.2216 7.64219 17.5549 7.39644Z" fill="currentColor"/> <path d="M13.3137 7.6689C13.4965 7.29734 13.946 7.14447 14.3176 7.3271C14.6891 7.50989 14.843 7.95939 14.6604 8.33101L10.6867 16.4111C10.5039 16.7826 10.0544 16.9355 9.68284 16.7529C9.31123 16.5701 9.15829 16.1206 9.34104 15.749L13.3137 7.6689Z" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    Y5Lu: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "document-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                frame: {
                    x: 0,
                    y: 0,
                    width: 24,
                    height: 24
                },
                inkBounds: {
                    x: 3.75,
                    y: 2.75,
                    width: 16.5,
                    height: 18.5
                },
                visualBounds: {
                    x: 3.75,
                    y: 2.75,
                    width: 16.5,
                    height: 18.5
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 3.75,
                    y: 2.75,
                    width: 16.5,
                    height: 18.5
                },
                center: {
                    x: 12,
                    y: 12
                },
                insets: {
                    top: 2.75,
                    right: 3.75,
                    bottom: 2.75,
                    left: 3.75
                },
                anchors: {
                    frame: {
                        x: 12,
                        y: 12
                    },
                    ink: {
                        x: 12,
                        y: 12
                    },
                    foreground: {
                        x: 12,
                        y: 12
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M14.2578 2.75C15.2522 2.75012 16.206 3.14548 16.9092 3.84863L19.1514 6.09082C19.8545 6.79397 20.2499 7.74779 20.25 8.74219V17.5C20.25 19.5711 18.5711 21.25 16.5 21.25H7.5C5.42893 21.25 3.75 19.5711 3.75 17.5V6.5C3.75 4.42893 5.42893 2.75 7.5 2.75H14.2578ZM7.5 4.25C6.25736 4.25 5.25 5.25736 5.25 6.5V17.5C5.25 18.7426 6.25736 19.75 7.5 19.75H16.5C17.7426 19.75 18.75 18.7426 18.75 17.5V10.25H16C14.4812 10.25 13.25 9.01878 13.25 7.5V4.25H7.5ZM14.75 7.5C14.75 8.19036 15.3096 8.75 16 8.75H18.75V8.74219C18.7499 8.14561 18.5127 7.57322 18.0908 7.15137L15.8486 4.90918C15.5449 4.60544 15.1627 4.39936 14.75 4.30664V7.5Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    uiVC: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "folder-badge-arrow-down-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16",
                frame: {
                    x: 0,
                    y: 0,
                    width: 16,
                    height: 16
                },
                inkBounds: {
                    x: 1.646484,
                    y: 2.14502,
                    width: 12.714844,
                    height: 12.453857
                },
                visualBounds: {
                    x: 1.646484,
                    y: 2.14502,
                    width: 12.714844,
                    height: 12.453857
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.646484,
                    y: 2.14502,
                    width: 12.714844,
                    height: 12.453857
                },
                center: {
                    x: 8.003906,
                    y: 8.371949
                },
                insets: {
                    top: 2.14502,
                    right: 1.638672,
                    bottom: 1.401123,
                    left: 1.646484
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8.003906,
                        y: 8.371949
                    },
                    foreground: {
                        x: 8.003906,
                        y: 8.371949
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M11.7139 9.28372C12.0038 9.28372 12.2393 9.51916 12.2393 9.80911V12.9478L13.3936 11.8003C13.5991 11.596 13.9313 11.5968 14.1357 11.8023C14.3398 12.0079 14.3391 12.3401 14.1338 12.5445L12.3184 14.3492C11.9835 14.682 11.4422 14.682 11.1074 14.3492L9.29492 12.5445C9.08953 12.34 9.08869 12.0078 9.29297 11.8023C9.49753 11.5968 9.83065 11.5958 10.0361 11.8003L11.1885 12.9468V9.80911C11.1885 9.5192 11.424 9.28379 11.7139 9.28372Z" fill="currentColor"/> <path d="M5.5459 2.14505C6.05385 2.14245 6.54952 2.30124 6.96094 2.59915L7.81738 3.22025C8.04621 3.38596 8.32196 3.47507 8.60449 3.47513H11.9697C13.2906 3.47513 14.3613 4.54586 14.3613 5.86673V6.56693C14.3611 7.04015 13.9782 7.42441 13.5049 7.42532L2.69727 7.44388V11.4781C2.69727 12.2215 3.30146 12.8234 4.04492 12.8199L6.49707 12.8081C6.78698 12.8067 7.02296 13.0407 7.02441 13.3306C7.02581 13.6205 6.7919 13.8565 6.50195 13.8579L4.0498 13.8697C2.72456 13.8759 1.64648 12.8034 1.64648 11.4781V4.54447C1.6465 3.22849 2.7104 2.15976 4.02637 2.15286L5.5459 2.14505ZM4.03125 3.20267C3.29315 3.20668 2.69728 3.80633 2.69727 4.54447V6.39407L13.3115 6.37454V5.86673C13.3115 5.12576 12.7107 4.52493 11.9697 4.52493H8.60449C8.10078 4.52488 7.61012 4.3653 7.20215 4.06986L6.34473 3.44974C6.11393 3.28268 5.8357 3.19336 5.55078 3.19486L4.03125 3.20267Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    NkJQ: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "folder-badge-arrow-down-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20",
                frame: {
                    x: 0,
                    y: 0,
                    width: 20,
                    height: 20
                },
                inkBounds: {
                    x: 2.045898,
                    y: 2.67041,
                    width: 15.912109,
                    height: 15.678467
                },
                visualBounds: {
                    x: 2.045898,
                    y: 2.67041,
                    width: 15.912109,
                    height: 15.678467
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 2.045898,
                    y: 2.67041,
                    width: 15.912109,
                    height: 15.678467
                },
                center: {
                    x: 10.001953,
                    y: 10.509644
                },
                insets: {
                    top: 2.67041,
                    right: 2.041993,
                    bottom: 1.651123,
                    left: 2.045898
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 10.001953,
                        y: 10.509644
                    },
                    foreground: {
                        x: 10.001953,
                        y: 10.509644
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M14.6084 11.5161C14.9757 11.5161 15.2734 11.8149 15.2734 12.1821V16.2544L16.7021 14.8345C16.9625 14.5757 17.3836 14.5773 17.6426 14.8374C17.9014 15.0979 17.9001 15.5189 17.6396 15.7778L15.3691 18.0347C14.947 18.4539 14.2655 18.4535 13.8438 18.0337L11.5771 15.7778C11.3173 15.5189 11.3157 15.0976 11.5742 14.8374C11.8331 14.5773 12.2543 14.576 12.5146 14.8345L13.9434 16.2554V12.1812C13.9436 11.8142 14.2415 11.5163 14.6084 11.5161Z" fill="currentColor"/> <path d="M6.94238 2.67042C7.57717 2.66909 8.19622 2.86887 8.70996 3.24171L9.77734 4.0171C10.0623 4.22397 10.4057 4.33546 10.7578 4.33546H14.96C16.6159 4.33547 17.958 5.67758 17.958 7.3335V8.1587C17.9579 8.75569 17.474 9.23931 16.877 9.23975L3.37598 9.24952V14.3394C3.37598 15.262 4.12523 16.01 5.04785 16.0083L8.24902 16.0015C8.61611 16.001 8.91432 16.2984 8.91504 16.6655C8.91573 17.0328 8.61825 17.3309 8.25098 17.3315L5.0498 17.3374C3.39172 17.3405 2.0459 15.9975 2.0459 14.3394V5.67237C2.04592 4.0189 3.38462 2.67778 5.03809 2.67432L6.94238 2.67042ZM5.04102 4.0044C4.121 4.00633 3.376 4.75236 3.37598 5.67237V7.91944L16.6279 7.91065V7.3335C16.6279 6.41212 15.8813 5.66555 14.96 5.66553H10.7578C10.125 5.66553 9.50818 5.46504 8.99609 5.09327L7.92871 4.31885C7.6428 4.11127 7.29863 3.99976 6.94531 4.00049L5.04102 4.0044Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    XA7n: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "folder-badge-checkmark-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16",
                frame: {
                    x: 0,
                    y: 0,
                    width: 16,
                    height: 16
                },
                inkBounds: {
                    x: 1.646484,
                    y: 2.14502,
                    width: 13.227051,
                    height: 12.302002
                },
                visualBounds: {
                    x: 1.646484,
                    y: 2.14502,
                    width: 13.227051,
                    height: 12.302002
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.646484,
                    y: 2.14502,
                    width: 13.227051,
                    height: 12.302002
                },
                center: {
                    x: 8.260009,
                    y: 8.296021
                },
                insets: {
                    top: 2.14502,
                    right: 1.126465,
                    bottom: 1.552978,
                    left: 1.646484
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8.260009,
                        y: 8.296021
                    },
                    foreground: {
                        x: 8.260009,
                        y: 8.296021
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M13.9053 9.78763C14.0605 9.54296 14.3851 9.47044 14.6299 9.62552C14.8742 9.78086 14.947 10.1054 14.792 10.3501C14.0412 11.5355 13.2872 12.9329 12.4131 14.1314C12.1236 14.5279 11.5534 14.5497 11.2275 14.2027L9.93066 12.8189C9.73252 12.6074 9.7429 12.275 9.9541 12.0767C10.1657 11.8784 10.498 11.8895 10.6963 12.1011L11.7598 13.2359C12.5222 12.1434 13.1562 10.9702 13.9053 9.78763Z" fill="currentColor"/> <path d="M5.5459 2.14505C6.05385 2.14245 6.54952 2.30124 6.96094 2.59915L7.81738 3.22025C8.04621 3.38596 8.32196 3.47507 8.60449 3.47513H11.9697C13.2906 3.47513 14.3613 4.54586 14.3613 5.86673V6.56693C14.3611 7.04015 13.9782 7.42441 13.5049 7.42532L2.69727 7.44388V11.4781C2.69727 12.2215 3.30146 12.8234 4.04492 12.8199L6.49707 12.8081C6.78698 12.8067 7.02296 13.0407 7.02441 13.3306C7.02581 13.6205 6.7919 13.8565 6.50195 13.8579L4.0498 13.8697C2.72456 13.8759 1.64648 12.8034 1.64648 11.4781V4.54447C1.6465 3.22849 2.7104 2.15976 4.02637 2.15286L5.5459 2.14505ZM4.03125 3.20267C3.29315 3.20668 2.69728 3.80633 2.69727 4.54447V6.39407L13.3115 6.37454V5.86673C13.3115 5.12576 12.7107 4.52493 11.9697 4.52493H8.60449C8.10078 4.52488 7.61012 4.3653 7.20215 4.06986L6.34473 3.44974C6.11393 3.28268 5.8357 3.19336 5.55078 3.19486L4.03125 3.20267Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    XqHq: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "folder-badge-checkmark-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20",
                frame: {
                    x: 0,
                    y: 0,
                    width: 20,
                    height: 20
                },
                inkBounds: {
                    x: 2.046143,
                    y: 2.67041,
                    width: 16.516846,
                    height: 15.224609
                },
                visualBounds: {
                    x: 2.046143,
                    y: 2.67041,
                    width: 16.516846,
                    height: 15.224609
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 2.046143,
                    y: 2.67041,
                    width: 16.516846,
                    height: 15.224609
                },
                center: {
                    x: 10.304566,
                    y: 10.282715
                },
                insets: {
                    top: 2.67041,
                    right: 1.437011,
                    bottom: 2.104981,
                    left: 2.046143
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 10.304566,
                        y: 10.282715
                    },
                    foreground: {
                        x: 10.304566,
                        y: 10.282715
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M17.3362 12.0308C17.5328 11.7209 17.944 11.6284 18.2542 11.8247C18.564 12.0211 18.656 12.4316 18.4602 12.7417C17.5107 14.2407 16.5578 16.0112 15.4456 17.5239C15.1029 17.9899 14.4301 18.0167 14.0452 17.606L12.3762 15.8247C12.1256 15.5568 12.1389 15.1363 12.4065 14.8853C12.6744 14.6345 13.0958 14.6479 13.3469 14.9155L14.6663 16.3237C15.6131 14.9654 16.4032 13.5037 17.3362 12.0308Z" fill="currentColor"/> <path d="M6.94263 2.67042C7.57741 2.66909 8.19646 2.86887 8.71021 3.24171L9.77759 4.0171C10.0625 4.22397 10.4059 4.33546 10.7581 4.33546H14.9602C16.6161 4.33547 17.9582 5.67758 17.9583 7.3335V8.1587C17.9582 8.75569 17.4742 9.23931 16.8772 9.23975L3.37622 9.24952V14.3394C3.37622 15.262 4.12547 16.01 5.0481 16.0083L8.24927 16.0015C8.61636 16.001 8.91456 16.2984 8.91528 16.6655C8.91598 17.0328 8.61849 17.3309 8.25122 17.3315L5.05005 17.3374C3.39196 17.3405 2.04614 15.9975 2.04614 14.3394V5.67237C2.04616 4.0189 3.38486 2.67778 5.03833 2.67432L6.94263 2.67042ZM5.04126 4.0044C4.12124 4.00633 3.37624 4.75236 3.37622 5.67237V7.91944L16.6282 7.91065V7.3335C16.6282 6.41212 15.8816 5.66555 14.9602 5.66553H10.7581C10.1252 5.66553 9.50843 5.46504 8.99634 5.09327L7.92896 4.31885C7.64304 4.11127 7.29887 3.99976 6.94556 4.00049L5.04126 4.0044Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    cBPD: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "pdf-document-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                frame: {
                    x: 0,
                    y: 0,
                    width: 24,
                    height: 24
                },
                inkBounds: {
                    x: 3.75,
                    y: 2.75,
                    width: 16.5,
                    height: 17.845947
                },
                visualBounds: {
                    x: 3.75,
                    y: 2.75,
                    width: 16.5,
                    height: 17.845947
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 3.75,
                    y: 2.75,
                    width: 16.5,
                    height: 17.845947
                },
                center: {
                    x: 12,
                    y: 11.672974
                },
                insets: {
                    top: 2.75,
                    right: 3.75,
                    bottom: 3.404053,
                    left: 3.75
                },
                anchors: {
                    frame: {
                        x: 12,
                        y: 12
                    },
                    ink: {
                        x: 12,
                        y: 11.672974
                    },
                    foreground: {
                        x: 12,
                        y: 11.672974
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.24023 15.6704C8.71534 15.6704 9.12299 15.8119 9.41284 16.0879C9.70349 16.3647 9.86328 16.7656 9.86328 17.2605C9.86328 17.7553 9.70388 18.1576 9.41357 18.436C9.12384 18.7138 8.71581 18.8572 8.24023 18.8572H7.1438V20.5959H6.01221V15.6704H8.24023ZM7.1438 17.8259H8.13916C8.35212 17.8259 8.49682 17.764 8.58813 17.6714C8.67978 17.5784 8.73242 17.4403 8.73242 17.2605C8.73242 17.0807 8.68004 16.9445 8.58887 16.8533C8.49781 16.7622 8.35289 16.7017 8.13916 16.7017H7.1438V17.8259Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1602 15.6704C12.8859 15.6705 13.5127 15.8786 13.9583 16.2974C14.4048 16.7173 14.657 17.3371 14.657 18.1335C14.657 18.9289 14.4139 19.5487 13.9758 19.969C13.5385 20.3885 12.9197 20.5959 12.1938 20.5959H10.436V15.6704H12.1602ZM11.5676 19.5654H12.0935C12.5342 19.5653 12.8882 19.4747 13.1313 19.2615C13.3715 19.0507 13.5254 18.7009 13.5254 18.1335C13.5254 17.5659 13.3716 17.2157 13.1313 17.0049C12.8882 16.7917 12.5341 16.7017 12.0935 16.7017H11.5676V19.5654Z" fill="currentColor"/> <path d="M18.9871 16.7017H16.469V17.6853H18.6516V18.7158H16.469V20.5959H15.3374V15.6704H18.9871V16.7017Z" fill="currentColor"/> <path d="M3.75 11V6.5C3.75 4.42893 5.42893 2.75 7.5 2.75H14.2578C15.2522 2.75012 16.206 3.14548 16.9092 3.84863L19.1514 6.09082C19.8545 6.79397 20.2499 7.74779 20.25 8.74219V11C20.25 11.4142 19.9142 11.75 19.5 11.75C19.0858 11.75 18.75 11.4142 18.75 11V8.74219C18.7499 8.14561 18.5127 7.57322 18.0908 7.15137L15.8486 4.90918C15.4268 4.48733 14.8544 4.25012 14.2578 4.25H7.5C6.25736 4.25 5.25 5.25736 5.25 6.5V11C5.25 11.4142 4.91421 11.75 4.5 11.75C4.08579 11.75 3.75 11.4142 3.75 11Z" fill="currentColor"/> <path d="M13.25 7.5V3.5H14.75V7.5C14.75 8.19036 15.3096 8.75 16 8.75H19.5V10.25H16C14.4812 10.25 13.25 9.01878 13.25 7.5Z" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    jaMf: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "plugin-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16",
                frame: {
                    x: 0,
                    y: 0,
                    width: 16,
                    height: 16
                },
                inkBounds: {
                    x: 1.69043,
                    y: 1.510742,
                    width: 12.949036,
                    height: 12.976563
                },
                visualBounds: {
                    x: 1.69043,
                    y: 1.510742,
                    width: 12.949036,
                    height: 12.976563
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.69043,
                    y: 1.510742,
                    width: 12.949036,
                    height: 12.976563
                },
                center: {
                    x: 8.164948,
                    y: 7.999024
                },
                insets: {
                    top: 1.510742,
                    right: 1.360534,
                    bottom: 1.512695,
                    left: 1.69043
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8.164948,
                        y: 7.999024
                    },
                    foreground: {
                        x: 8.164948,
                        y: 7.999024
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.41679 1.51074C12.5733 1.51096 14.6394 4.57801 14.6394 7.34961C14.6394 8.52839 14.1476 9.72713 13.2771 10.4199C12.813 10.7892 12.26 10.9971 11.6646 10.9971C11.1354 10.9971 10.5873 10.8339 10.0389 10.501C9.50074 10.9313 8.85071 11.2265 8.15242 11.2265C7.49323 11.2265 6.8561 10.9625 6.33183 10.418L6.32694 10.4131C6.32694 10.4131 6.32425 10.4086 6.32206 10.4062C6.31748 10.4014 6.31004 10.3947 6.30155 10.3857C6.28393 10.3671 6.25835 10.3394 6.22636 10.3057C6.1621 10.2379 6.07186 10.143 5.96854 10.0342C5.76137 9.81597 5.50175 9.54145 5.28886 9.31934C5.16019 9.18497 5.09614 9.01227 5.09614 8.8399C5.09614 8.51928 5.266 8.3828 5.48222 8.17383L4.63749 7.30371C4.53878 7.2019 4.48971 7.07008 4.48971 6.93835C4.48971 6.64772 4.72399 6.41267 5.01463 6.41267C5.15202 6.41267 5.28931 6.46608 5.39237 6.57227L6.23905 7.44531L7.68241 6.05566L6.83769 5.18555C6.73906 5.08366 6.68999 4.95175 6.68999 4.81997C6.68999 4.52929 6.92426 4.2946 7.21486 4.2946C7.35225 4.2946 7.48953 4.34797 7.59257 4.4541L8.43925 5.32715L8.62284 5.15137C8.75695 5.02229 8.92987 4.95821 9.10257 4.95821C9.28554 4.95821 9.46825 5.03013 9.60429 5.17285L10.6463 6.26855C11.1544 6.79165 11.3993 7.39924 11.3993 8.02241C11.3993 8.64501 11.1569 9.22184 10.7918 9.71875C11.1186 9.88248 11.4108 9.94729 11.6646 9.94729C12.022 9.94729 12.3448 9.81972 12.6228 9.59863C13.1973 9.1416 13.5887 8.2722 13.5887 7.34961C13.5886 5.0875 11.9254 2.56173 8.41679 2.56152C5.48587 2.56152 2.95281 4.8005 2.75565 7.62012C2.74564 7.76355 2.74069 7.90597 2.74069 8.04717C2.74069 11.0115 4.92146 13.4374 8.16483 13.4375C9.45511 13.4375 10.7311 13.1154 11.617 12.4297C11.7126 12.3557 11.8257 12.3198 11.9379 12.3198C12.2286 12.3198 12.463 12.5552 12.463 12.8443C12.463 13.0012 12.3931 13.1563 12.2596 13.2598C11.1304 14.1338 9.59973 14.4873 8.16483 14.4873C4.30366 14.4872 1.6904 11.5548 1.6904 8.04545C1.6904 7.88077 1.69615 7.71483 1.7078 7.54785C1.94623 4.13367 4.97962 1.51074 8.41679 1.51074ZM6.29276 8.85254L7.06425 9.66309C7.36743 9.97672 7.707 10.176 8.15304 10.176C9.14872 10.176 10.3494 9.02447 10.3494 8.02209C10.3494 7.68178 10.2189 7.33315 9.8914 6.99707L9.88651 6.99316L9.09159 6.1582L6.29276 8.85254Z" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    EZu4: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "slides-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                frame: {
                    x: 0,
                    y: 0,
                    width: 24,
                    height: 24
                },
                inkBounds: {
                    x: 2.25,
                    y: 3.25,
                    width: 19.5,
                    height: 16.5
                },
                visualBounds: {
                    x: 2.25,
                    y: 3.25,
                    width: 19.5,
                    height: 16.5
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 2.25,
                    y: 3.25,
                    width: 19.5,
                    height: 16.5
                },
                center: {
                    x: 12,
                    y: 11.5
                },
                insets: {
                    top: 3.25,
                    right: 2.25,
                    bottom: 4.25,
                    left: 2.25
                },
                anchors: {
                    frame: {
                        x: 12,
                        y: 12
                    },
                    ink: {
                        x: 12,
                        y: 11.5
                    },
                    foreground: {
                        x: 12,
                        y: 11.5
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M16.5195 6.25C17.2912 6.25 17.9154 6.24981 18.4199 6.29102C18.9331 6.33295 19.3888 6.42135 19.8115 6.63672C20.4795 6.97707 21.0229 7.5205 21.3633 8.18848C21.5786 8.61125 21.6671 9.06687 21.709 9.58008C21.7502 10.0846 21.75 10.7088 21.75 11.4805V14.5195C21.75 15.2912 21.7502 15.9154 21.709 16.4199C21.6671 16.9331 21.5786 17.3888 21.3633 17.8115C21.0229 18.4795 20.4795 19.0229 19.8115 19.3633C19.3888 19.5786 18.9331 19.6671 18.4199 19.709C17.9154 19.7502 17.2912 19.75 16.5195 19.75H7.48047C6.70885 19.75 6.08458 19.7502 5.58008 19.709C5.06687 19.6671 4.61125 19.5786 4.18848 19.3633C3.5205 19.0229 2.97707 18.4795 2.63672 17.8115C2.42135 17.3888 2.33295 16.9331 2.29102 16.4199C2.24981 15.9154 2.25 15.2912 2.25 14.5195V11.4805C2.25 10.7088 2.24981 10.0846 2.29102 9.58008C2.33295 9.06687 2.42135 8.61125 2.63672 8.18848C2.97707 7.5205 3.5205 6.97707 4.18848 6.63672C4.61125 6.42135 5.06687 6.33295 5.58008 6.29102C6.08458 6.24981 6.70885 6.25 7.48047 6.25H16.5195ZM7.48047 7.75C6.68406 7.75 6.13142 7.75106 5.70215 7.78613C5.28162 7.82049 5.04527 7.88389 4.86914 7.97363C4.48358 8.17014 4.17014 8.48358 3.97363 8.86914C3.88389 9.04527 3.82049 9.28162 3.78613 9.70215C3.75106 10.1314 3.75 10.6841 3.75 11.4805V14.5195C3.75 15.3159 3.75106 15.8686 3.78613 16.2979C3.82049 16.7184 3.88389 16.9547 3.97363 17.1309C4.17014 17.5164 4.48358 17.8299 4.86914 18.0264C5.04527 18.1161 5.28162 18.1795 5.70215 18.2139C6.13142 18.2489 6.68406 18.25 7.48047 18.25H16.5195C17.3159 18.25 17.8686 18.2489 18.2979 18.2139C18.7184 18.1795 18.9547 18.1161 19.1309 18.0264C19.5164 17.8299 19.8299 17.5164 20.0264 17.1309C20.1161 16.9547 20.1795 16.7184 20.2139 16.2979C20.2489 15.8686 20.25 15.3159 20.25 14.5195V11.4805C20.25 10.6841 20.2489 10.1314 20.2139 9.70215C20.1795 9.28162 20.1161 9.04527 20.0264 8.86914C19.8299 8.48358 19.5164 8.17014 19.1309 7.97363C18.9547 7.88389 18.7184 7.82049 18.2979 7.78613C17.8686 7.75106 17.3159 7.75 16.5195 7.75H7.48047Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M18 3.25C18.4142 3.25 18.75 3.58579 18.75 4C18.75 4.41421 18.4142 4.75 18 4.75H6C5.58579 4.75 5.25 4.41421 5.25 4C5.25 3.58579 5.58579 3.25 6 3.25H18Z" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    nmbL: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "table-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                frame: {
                    x: 0,
                    y: 0,
                    width: 24,
                    height: 24
                },
                inkBounds: {
                    x: 2.25,
                    y: 3.75,
                    width: 19.5,
                    height: 16.5
                },
                visualBounds: {
                    x: 2.25,
                    y: 3.75,
                    width: 19.5,
                    height: 16.5
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 2.25,
                    y: 3.75,
                    width: 19.5,
                    height: 16.5
                },
                center: {
                    x: 12,
                    y: 12
                },
                insets: {
                    top: 3.75,
                    right: 2.25,
                    bottom: 3.75,
                    left: 2.25
                },
                anchors: {
                    frame: {
                        x: 12,
                        y: 12
                    },
                    ink: {
                        x: 12,
                        y: 12
                    },
                    foreground: {
                        x: 12,
                        y: 12
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M18.2002 3.75C20.1607 3.75011 21.7499 5.33935 21.75 7.2998V16.7002C21.7499 18.6607 20.1607 20.2499 18.2002 20.25H5.7998C3.83935 20.2499 2.25011 18.6607 2.25 16.7002V7.2998C2.25011 5.33935 3.83935 3.75011 5.7998 3.75H18.2002ZM12.75 18.75H18.2002C19.3322 18.7499 20.2499 17.8322 20.25 16.7002V10.75H12.75V18.75ZM3.75 16.7002C3.75011 17.8322 4.66778 18.7499 5.7998 18.75H11.25V10.75H3.75V16.7002ZM5.7998 5.25C4.66778 5.25011 3.75011 6.16778 3.75 7.2998V9.25H20.25V7.2998C20.2499 6.16778 19.3322 5.25011 18.2002 5.25H5.7998Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    hwhx: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "thumb-down-fill-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16",
                frame: {
                    x: 0,
                    y: 0,
                    width: 16,
                    height: 16
                },
                inkBounds: {
                    x: 2.141602,
                    y: 1.474609,
                    width: 11.921143,
                    height: 13.015625
                },
                visualBounds: {
                    x: 2.141602,
                    y: 1.474609,
                    width: 11.921143,
                    height: 13.015625
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 2.141602,
                    y: 1.474609,
                    width: 11.921143,
                    height: 13.015625
                },
                center: {
                    x: 8.102173,
                    y: 7.982422
                },
                insets: {
                    top: 1.474609,
                    right: 1.937255,
                    bottom: 1.509766,
                    left: 2.141602
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8.102173,
                        y: 7.982422
                    },
                    foreground: {
                        x: 8.102173,
                        y: 7.982422
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M12.0627 3.00488C12.0627 2.41732 11.8766 1.89506 11.5725 1.47558H12.0393C12.6129 1.47564 13.1334 1.65034 13.511 2.02832C13.8885 2.40635 14.0627 2.9271 14.0627 3.50098V7.83496C14.0627 8.40884 13.8885 8.92958 13.511 9.30762C13.1386 9.68044 12.627 9.85559 12.0627 9.86035V3.00488Z" fill="currentColor"/> <path d="M6.86646 14.4814C6.76531 14.4655 6.67903 14.4305 6.62134 14.4033C6.53156 14.361 6.44162 14.3046 6.35669 14.2412C6.18648 14.1141 6.00653 13.9349 5.85278 13.7119C5.54068 13.2592 5.3217 12.5965 5.56079 11.8184L5.56177 11.8174L6.16626 9.86035H4.66528C3.0015 9.85992 1.79469 8.2761 2.23169 6.6709L3.13989 3.33691C3.43902 2.23874 4.43562 1.47584 5.57349 1.47558H9.63892C10.3556 1.52887 11.012 2.14056 11.012 3.00488V9.86035H10.6047C10.3818 9.86044 10.1746 9.98048 10.0637 10.1748L7.88208 13.998C7.80808 14.1277 7.69512 14.2761 7.50513 14.376C7.32666 14.4698 7.13765 14.4904 6.97192 14.4902L6.86646 14.4814Z" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    mcXc: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "thumb-down-fill-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20",
                frame: {
                    x: 0,
                    y: 0,
                    width: 20,
                    height: 20
                },
                inkBounds: {
                    x: 2.667969,
                    y: 1.835938,
                    width: 14.927612,
                    height: 16.285156
                },
                visualBounds: {
                    x: 2.667969,
                    y: 1.835938,
                    width: 14.927612,
                    height: 16.285156
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 2.667969,
                    y: 1.835938,
                    width: 14.927612,
                    height: 16.285156
                },
                center: {
                    x: 10.131775,
                    y: 9.978516
                },
                insets: {
                    top: 1.835938,
                    right: 2.404419,
                    bottom: 1.878906,
                    left: 2.667969
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 10.131775,
                        y: 9.978516
                    },
                    foreground: {
                        x: 10.131775,
                        y: 9.978516
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M15.0946 3.69726C15.0946 2.98324 14.8709 2.34903 14.5038 1.83691H15.0565C15.7755 1.83699 16.429 2.05581 16.9032 2.53027C17.3772 3.00467 17.5955 3.65796 17.5956 4.37695V9.79394C17.5956 10.5131 17.3774 11.1671 16.9032 11.6416C16.4374 12.1077 15.7986 12.3254 15.0946 12.333V3.69726Z" fill="currentColor"/> <path d="M8.58484 18.1104C8.45719 18.0902 8.34871 18.0458 8.27625 18.0117C8.16334 17.9586 8.05083 17.8881 7.94421 17.8086C7.73054 17.6492 7.50435 17.4251 7.3114 17.1455C6.9197 16.5779 6.64601 15.7465 6.94617 14.7705L7.70007 12.334H5.83386C3.74737 12.334 2.23263 10.3498 2.78113 8.33691L3.91687 4.16992C4.29221 2.79307 5.54264 1.83691 6.9696 1.83691H12.0087C12.9281 1.87825 13.7645 2.63752 13.7645 3.69726V12.335H13.2616C12.9855 12.335 12.7298 12.4826 12.5927 12.7227L9.86316 17.502C9.77011 17.6649 9.6281 17.8526 9.38855 17.9785C9.16393 18.0964 8.92626 18.1213 8.71863 18.1211L8.58484 18.1104Z" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    FD9S: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "thumb-down-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16",
                frame: {
                    x: 0,
                    y: 0,
                    width: 16,
                    height: 16
                },
                inkBounds: {
                    x: 2.141113,
                    y: 1.474609,
                    width: 11.766235,
                    height: 13.015625
                },
                visualBounds: {
                    x: 2.141113,
                    y: 1.474609,
                    width: 11.766235,
                    height: 13.015625
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 2.141113,
                    y: 1.474609,
                    width: 11.766235,
                    height: 13.015625
                },
                center: {
                    x: 8.024231,
                    y: 7.982422
                },
                insets: {
                    top: 1.474609,
                    right: 2.092652,
                    bottom: 1.509766,
                    left: 2.141113
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8.024231,
                        y: 7.982422
                    },
                    foreground: {
                        x: 8.024231,
                        y: 7.982422
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M8.76865 1.47559H11.3819C12.7762 1.4758 13.9073 2.60566 13.9073 4V7.33301C13.9073 8.7274 12.7763 9.85818 11.3819 9.8584H10.7149C10.4913 9.85851 10.2849 9.97875 10.1739 10.1729L7.98935 13.9961L7.90634 14.1182C7.72579 14.3464 7.45214 14.4828 7.16123 14.4902L7.01474 14.4834L6.87021 14.4609C5.39577 14.1915 4.46712 12.6886 4.91416 11.2354L5.33798 9.8584H4.66709C3.00217 9.85839 1.79347 8.27519 2.23154 6.66895L3.13974 3.33594C3.43937 2.23746 4.43765 1.47559 5.57627 1.47559H8.73837C8.74158 1.47553 8.74492 1.47461 8.74814 1.47461C8.75498 1.47461 8.76181 1.47553 8.76865 1.47559ZM5.57627 2.52539C4.91115 2.52539 4.32846 2.97064 4.15341 3.6123L3.24423 6.94531C2.98833 7.88361 3.69452 8.80859 4.66709 8.80859H5.82334C6.28807 8.80911 6.62076 9.25879 6.48447 9.70312L5.91806 11.5439C5.65272 12.4063 6.21661 13.297 7.10166 13.4336L9.26181 9.65137C9.47574 9.2772 9.82232 9.00801 10.2227 8.88477V4C10.2227 3.15098 9.52995 2.53635 8.76865 2.52539H5.57627ZM10.7989 2.52539C11.0932 2.93032 11.2735 3.43274 11.2735 4V8.80859H11.3819C12.1964 8.80838 12.8565 8.1475 12.8565 7.33301V4C12.8565 3.18556 12.1963 2.5256 11.3819 2.52539H10.7989Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    ebbM: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "thumb-down-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20",
                frame: {
                    x: 0,
                    y: 0,
                    width: 20,
                    height: 20
                },
                inkBounds: {
                    x: 2.667725,
                    y: 1.835938,
                    width: 14.725586,
                    height: 16.287109
                },
                visualBounds: {
                    x: 2.667725,
                    y: 1.835938,
                    width: 14.725586,
                    height: 16.287109
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 2.667725,
                    y: 1.835938,
                    width: 14.725586,
                    height: 16.287109
                },
                center: {
                    x: 10.030518,
                    y: 9.979493
                },
                insets: {
                    top: 1.835938,
                    right: 2.606689,
                    bottom: 1.876953,
                    left: 2.667725
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 10.030518,
                        y: 9.979493
                    },
                    foreground: {
                        x: 10.030518,
                        y: 9.979493
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M14.2282 1.83594C15.9762 1.83596 17.3933 3.25301 17.3933 5.00098V9.16797C17.393 10.9157 15.976 12.333 14.2282 12.333H13.3952C13.1186 12.333 12.8625 12.4806 12.7253 12.7207L9.99483 17.5L9.89131 17.6533C9.66397 17.9411 9.31944 18.1137 8.95284 18.123L8.76729 18.1133L8.58663 18.0859C6.73856 17.7481 5.57497 15.8636 6.13546 14.042L6.66182 12.333H5.83467C3.74785 12.333 2.23204 10.3483 2.78096 8.33496L3.91768 4.16797C4.29327 2.79109 5.54419 1.83594 6.97139 1.83594H14.2282ZM6.97139 3.16602C6.14407 3.16602 5.41878 3.71951 5.20089 4.51758L4.06417 8.68457C3.74581 9.85188 4.62473 11.0029 5.83467 11.0029H7.27901C7.86657 11.003 8.28676 11.5712 8.11397 12.1328L7.40596 14.4336C7.07683 15.5042 7.77557 16.61 8.87276 16.7832L11.571 12.0615C11.8385 11.5934 12.2708 11.2533 12.7712 11.0977V5.00098C12.771 3.93548 11.8934 3.16602 10.9362 3.16602H6.97139ZM13.5173 3.16602C13.8803 3.67114 14.1012 4.29635 14.1013 5.00098V11.0029H14.2282C15.2415 11.0029 16.063 10.1812 16.0632 9.16797V5.00098C16.0632 3.98755 15.2417 3.16604 14.2282 3.16602H13.5173Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    h24K: (function(a, b, c) {
        var d = c("gPp5");
        class e {
            constructor() {
                this.componentControls = new Set
            }
            subscribe(a) {
                return this.componentControls.add(a), () => this.componentControls.delete(a)
            }
            start(a, b) {
                this.componentControls.forEach(c => {
                    c.start(a.nativeEvent || a, b)
                })
            }
            cancel() {
                this.componentControls.forEach(a => {
                    a.cancel()
                })
            }
            stop() {
                this.componentControls.forEach(a => {
                    a.stop()
                })
            }
        }
        let f = () => new e;
        c.d(b, {}, {
            a: function() {
                return (0, d.a)(f)
            }
        })
    })
};