export const __rspack_esm_ids = [176742];
export const __webpack_modules__ = {
    rvBG: (function(a, b) {
        b.a = {
            disclosure: "disclosure-fA_nMK",
            gallery: "gallery-VxcMcy",
            frame: "frame-V8WHie",
            revealImage: "revealImage-LgyscF"
        }
    }),
    Jc8F: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("zd8w"),
            h = c("oyxz"),
            i = c("MFk9"),
            j = c("K5Kt"),
            k = c("rvBG");

        function l(a) {
            let b = a.target;
            b instanceof HTMLImageElement && a.currentTarget.contains(b) && delete b.dataset.loaded
        }

        function m(a) {
            let b = a.target;
            b instanceof HTMLImageElement && a.currentTarget.contains(b) && b.closest(`.${k.a.frame}`) && (b.dataset.loaded = "true")
        }

        function n(a) {
            return !a
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, o, p, q, r = (0, e.c)(15),
                    {
                        children: s,
                        icon: t,
                        imageCount: u
                    } = a,
                    [v, w] = (0, g.useState)(!0),
                    [x, y] = (0, g.useState)(!1),
                    z = null != s && x,
                    A = v && z;
                r[0] === Symbol.for("react.memo_cache_sentinel") ? (b = a => {
                    if (null == a) return;
                    let b = () => {
                            y(null != a.querySelector('img[data-loaded="true"]'))
                        },
                        c = new MutationObserver(b);
                    return c.observe(a, {
                        subtree: !0,
                        childList: !0,
                        attributeFilter: ["data-loaded"]
                    }), b(), () => c.disconnect()
                }, r[0] = b) : b = r[0];
                let B = b;
                return r[1] !== u ? (c = (0, d.jsx)("span", {
                    className: "block truncate text-text/40",
                    children: (0, d.jsx)(h.a, {
                        id: "localConversation.imageView.summary",
                        defaultMessage: "{imageCount, plural, one {Viewed an image} other {Viewed # images}}",
                        values: {
                            imageCount: u
                        }
                    })
                }), r[1] = u, r[2] = c) : c = r[2], r[3] !== z || r[4] !== v ? (o = z ? {
                    expanded: v,
                    onToggle: () => w(n)
                } : void 0, r[3] = z, r[4] = v, r[5] = o) : o = r[5], r[6] !== z || r[7] !== s || r[8] !== A ? (p = null != s && (0, d.jsx)("div", {
                    className: k.a.disclosure,
                    "data-ready": z || void 0,
                    "aria-hidden": !A,
                    inert: !A,
                    children: (0, d.jsx)("div", {
                        className: "min-h-0 overflow-clip",
                        children: (0, d.jsx)(j.a, {
                            variant: "steps",
                            children: (0, d.jsx)("div", {
                                ref: B,
                                "data-horizontal-scroll": !0,
                                className: (0, f.b)(k.a.gallery, "horizontal-scroll-fade-mask hide-scrollbar grid min-w-0 auto-cols-max grid-flow-col items-start justify-start gap-2 overflow-x-auto overflow-y-hidden pb-1"),
                                onLoadCapture: m,
                                onErrorCapture: l,
                                children: s
                            })
                        })
                    })
                }), r[6] = z, r[7] = s, r[8] = A, r[9] = p) : p = r[9], r[10] !== t || r[11] !== c || r[12] !== o || r[13] !== p ? (q = (0, d.jsx)(i.a, {
                    className: "relative overflow-clip",
                    icon: t,
                    summary: c,
                    externalDisclosure: o,
                    body: p
                }), r[10] = t, r[11] = c, r[12] = o, r[13] = p, r[14] = q) : q = r[14], q
            }
        })
    }),
    QTNa: (function(a, b, c) {
        c.d(b, {}, {
            a: function(a, b) {
                let c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return "disclosure" === a && "item" === b || "bubble" === a && "bubble" === b ? "compact" : "bubble" === a || "bubble" === b ? "item" : c ? "activity" : "item"
            },
            b: function(a) {
                let b = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (a && b) return a.map(a => {
                    if (null != a && "adjacent-user-prompts" === a) return 4
                })
            }
        })
    }),
    qzjc: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("zKw6"),
            g = c.n(f),
            h = c("zd8w"),
            i = c("oyxz"),
            j = c("UxN3"),
            k = c("x8co"),
            l = c("exPx"),
            m = c("bnxy"),
            n = c("D7NR");
        c.d(b, {}, {
            a: function(a) {
                let b, c, f, h, i, j, l, n, o, p, q, r, s = (0, e.c)(26);
                s[0] !== a ? ({
                    displayPath: c,
                    linesAdded: f,
                    linesRemoved: h,
                    children: b,
                    ...i
                } = a, s[0] = a, s[1] = b, s[2] = c, s[3] = f, s[4] = h, s[5] = i) : (b = s[1], c = s[2], f = s[3], h = s[4], i = s[5]), s[6] !== c ? (j = g().posix.parse((0, m.r)(c)), s[6] = c, s[7] = j) : j = s[7];
                let {
                    base: t,
                    dir: u,
                    root: v
                } = j, w = u === v ? u : u + g().posix.sep;
                return s[8] !== c ? (l = (0, d.jsx)("span", {
                    className: "sr-only",
                    children: c
                }), s[8] = c, s[9] = l) : l = s[9], s[10] !== w ? (n = w.length > 0 ? (0, d.jsx)("span", {
                    className: "min-w-0 truncate text-codex-description",
                    children: w
                }) : null, s[10] = w, s[11] = n) : n = s[11], s[12] !== t ? (o = (0, d.jsx)("span", {
                    className: "max-w-full shrink-0 truncate text-default",
                    children: t
                }), s[12] = t, s[13] = o) : o = s[13], s[14] !== n || s[15] !== o ? (p = (0, d.jsxs)("span", {
                    "aria-hidden": !0,
                    className: "flex min-w-0 flex-1 items-center",
                    children: [n, o]
                }), s[14] = n, s[15] = o, s[16] = p) : p = s[16], s[17] !== f || s[18] !== h ? (q = (0, d.jsx)(k.b, {
                    linesAdded: f,
                    linesRemoved: h
                }), s[17] = f, s[18] = h, s[19] = q) : q = s[19], s[20] !== b || s[21] !== i || s[22] !== l || s[23] !== p || s[24] !== q ? (r = (0, d.jsxs)("button", {
                    ...i,
                    className: "flex h-9 w-full cursor-interaction items-center gap-2 bg-surface/70 px-[var(--resource-card-row-padding-x)] py-1 text-start text-size-chat group-last/turn-diff-file-row:rounded-b-lg hover:bg-background-secondary-ghost-hover/60 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset extension:bg-background-primary-soft/70 extension:hover:bg-background-secondary-ghost-hover/60",
                    type: "button",
                    children: [l, p, q, b]
                }), s[20] = b, s[21] = i, s[22] = l, s[23] = p, s[24] = q, s[25] = r) : r = s[25], r
            },
            b: function(a) {
                let b, c, f, g, k = (0, e.c)(13),
                    {
                        files: m,
                        children: o,
                        onBeforeToggle: p
                    } = a,
                    [q, r] = (0, h.useState)(!1);
                if (m.length <= 1) return null;
                k[0] !== m || k[1] !== q ? (b = q ? m : m.slice(0, 3), k[0] = m, k[1] = q, k[2] = b) : b = k[2];
                let s = b;
                return k[3] !== o || k[4] !== s ? (c = s.map(o), k[3] = o, k[4] = s, k[5] = c) : c = k[5], k[6] !== m.length || k[7] !== q || k[8] !== p ? (f = m.length > 3 ? (0, d.jsx)("button", {
                    type: "button",
                    "aria-expanded": q,
                    className: "flex h-9 w-full cursor-interaction items-center rounded-b-lg px-[var(--resource-card-row-padding-x)] py-1 text-start text-size-chat text-default hover:bg-background-secondary-ghost-hover/30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
                    onClick: () => {
                        p?.(), r(!q)
                    },
                    children: (0, d.jsxs)("span", {
                        className: "inline-flex min-w-0 items-center gap-2",
                        children: [(0, d.jsx)("span", {
                            className: "truncate",
                            children: q ? (0, d.jsx)(i.a, {
                                id: "codex.unifiedDiff.collapseFiles",
                                defaultMessage: "Collapse files"
                            }) : (0, d.jsx)(i.a, {
                                id: "codex.unifiedDiff.showMoreFiles",
                                defaultMessage: "{count, plural, one {Show # more file} other {Show # more files}}",
                                values: {
                                    count: m.length - 3
                                }
                            })
                        }), (0, d.jsx)(j.a, {
                            "aria-hidden": !0,
                            legacyIcon: l.a,
                            asset16: n.a,
                            className: q ? "rotate-180" : void 0
                        })]
                    })
                }) : null, k[6] = m.length, k[7] = q, k[8] = p, k[9] = f) : f = k[9], k[10] !== c || k[11] !== f ? (g = (0, d.jsxs)("div", {
                    className: "flex flex-col border-t border-default",
                    children: [c, f]
                }), k[10] = c, k[11] = f, k[12] = g) : g = k[12], g
            }
        })
    }),
    eQiz: (function(a, b, c) {
        var d = c("zd8w");
        let e = (0, d.createContext)({}),
            f = (0, d.createContext)("legacy");
        c.d(b, {}, {
            a: e,
            b: f
        })
    }),
    kRUe: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("IPUh"),
            h = c("zd8w"),
            i = c("Wf1j"),
            j = c("oyxz"),
            k = c("Sm6l"),
            l = c("HOLv"),
            m = c("pSXw"),
            n = c("V8uZ"),
            o = c("Sgcz"),
            p = c("wbOy"),
            q = c("Q8Uo");

        function r(a) {
            let b, c, j, l, q, r, t, u, v, w, x, y, z, A, B = (0, e.c)(43),
                {
                    className: C,
                    isExpandable: D,
                    review: E
                } = a,
                F = (0, i.a)(),
                [G, H] = (0, h.useState)(!1);
            B[0] !== F || B[1] !== E ? (b = (0, o.c)(F, E), B[0] = F, B[1] = E, B[2] = b) : b = B[2];
            let I = b;
            if (!(void 0 === D || D)) {
                let a, b;
                return B[3] !== C ? (a = (0, f.b)("min-w-0 truncate pt-1 text-codex-description/80", C), B[3] = C, B[4] = a) : a = B[4], B[5] !== a || B[6] !== I ? (b = (0, d.jsx)("div", {
                    className: a,
                    children: I
                }), B[5] = a, B[6] = I, B[7] = b) : b = B[7], b
            }
            let J = "denied" === E.status && "high" === E.riskLevel;
            B[8] !== F || B[9] !== E ? (c = (0, o.b)(F, E), B[8] = F, B[9] = E, B[10] = c) : c = B[10];
            let K = c;
            B[11] !== C ? (j = (0, f.b)("flex flex-col pt-1", C), B[11] = C, B[12] = j) : j = B[12], B[13] === Symbol.for("react.memo_cache_sentinel") ? (l = () => H(s), B[13] = l) : l = B[13];
            let L = "inProgress" === E.status,
                M = J ? "text-warning" : "text-codex-description/80 group-hover/automatic-approval-review:text-default";
            B[14] !== M ? (q = (0, f.b)("min-w-0 truncate", M), B[14] = M, B[15] = q) : q = B[15], B[16] !== L || B[17] !== q || B[18] !== I ? (r = (0, d.jsx)(p.a, {
                active: L,
                className: q,
                children: I
            }), B[16] = L, B[17] = q, B[18] = I, B[19] = r) : r = B[19];
            let N = G && "rotate-90 opacity-100";
            B[20] !== N ? (t = (0, f.b)("icon-2xs shrink-0 text-tertiary transition-[opacity,transform] duration-basic opacity-0 group-hover/automatic-approval-review:opacity-100", N), B[20] = N, B[21] = t) : t = B[21], B[22] !== t ? (u = (0, d.jsx)(m.a, {
                className: t
            }), B[22] = t, B[23] = u) : u = B[23], B[24] !== G || B[25] !== u || B[26] !== r ? (v = (0, d.jsxs)(k.a, {
                className: "group/automatic-approval-review inline-flex w-fit max-w-full gap-1.5 text-start",
                color: "ghostMuted",
                focusRing: "inset",
                size: "inline",
                onClick: l,
                "aria-expanded": G,
                children: [r, u]
            }), B[24] = G, B[25] = u, B[26] = r, B[27] = v) : v = B[27];
            let O = G ? "auto" : 0,
                P = +!!G;
            B[28] !== O || B[29] !== P ? (w = {
                height: O,
                opacity: P
            }, B[28] = O, B[29] = P, B[30] = w) : w = B[30];
            let Q = G ? "auto" : "none";
            return B[31] !== Q ? (x = {
                overflow: "hidden",
                pointerEvents: Q
            }, B[31] = Q, B[32] = x) : x = B[32], B[33] !== K ? (y = (0, d.jsx)("p", {
                className: "max-w-[80ch] pt-1 text-size-chat leading-relaxed whitespace-pre-wrap text-text/60",
                children: K
            }), B[33] = K, B[34] = y) : y = B[34], B[35] !== w || B[36] !== x || B[37] !== y ? (z = (0, d.jsx)(g.a.div, {
                initial: !1,
                animate: w,
                transition: n.a,
                style: x,
                children: y
            }), B[35] = w, B[36] = x, B[37] = y, B[38] = z) : z = B[38], B[39] !== v || B[40] !== z || B[41] !== j ? (A = (0, d.jsxs)("div", {
                className: j,
                children: [v, z]
            }), B[39] = v, B[40] = z, B[41] = j, B[42] = A) : A = B[42], A
        }

        function s(a) {
            return !a
        }

        function t(a) {
            let b, c, f = (0, e.c)(9),
                {
                    className: g,
                    isExpandable: h,
                    reviews: i
                } = a;
            if (f[0] !== g || f[1] !== h || f[2] !== i) {
                let a;
                f[4] !== g || f[5] !== h ? (a = a => (0, d.jsx)(r, {
                    className: g,
                    isExpandable: h,
                    review: a
                }, a.id), f[4] = g, f[5] = h, f[6] = a) : a = f[6], b = i.map(a), f[0] = g, f[1] = h, f[2] = i, f[3] = b
            } else b = f[3];
            return f[7] !== b ? (c = (0, d.jsx)(d.Fragment, {
                children: b
            }), f[7] = b, f[8] = c) : c = f[8], c
        }

        function u(a) {
            let b, c, f = (0, e.c)(4),
                {
                    reviews: g
                } = a;
            f[0] !== g ? (b = g.some(v), f[0] = g, f[1] = b) : b = f[1];
            let h = b;
            return f[2] !== h ? (c = (0, d.jsx)("p", {
                className: "max-w-[80ch] pt-1 text-size-chat leading-relaxed text-text/60",
                children: h ? (0, d.jsx)(j.a, {
                    id: "localConversation.automaticApprovalReview.explicitAuthorizationHighRisk",
                    defaultMessage: "Requires explicit authorization because this action is considered high risk"
                }) : (0, d.jsx)(j.a, {
                    id: "localConversation.automaticApprovalReview.explicitAuthorization",
                    defaultMessage: "Requires explicit authorization"
                })
            }), f[2] = h, f[3] = c) : c = f[3], c
        }

        function v(a) {
            return "denied" === a.status && "high" === a.riskLevel
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, g = (0, e.c)(5),
                    {
                        className: h,
                        tone: i
                    } = a,
                    j = "warning" === (void 0 === i ? "default" : i) ? "text-warning" : "text-tertiary";
                return g[0] !== h || g[1] !== j ? (b = (0, f.b)("shrink-0", j, h), g[0] = h, g[1] = j, g[2] = b) : b = g[2], g[3] !== b ? (c = (0, d.jsx)(l.a, {
                    className: b,
                    asset: q.a,
                    "aria-hidden": !0
                }), g[3] = b, g[4] = c) : c = g[4], c
            },
            b: u,
            c: r,
            d: t,
            e: function(a) {
                let b, c = (0, e.c)(4),
                    {
                        isDeclined: f,
                        reviews: g
                    } = a;
                if (!f) {
                    let a;
                    return c[0] !== g ? (a = (0, d.jsx)(t, {
                        reviews: g
                    }), c[0] = g, c[1] = a) : a = c[1], a
                }
                return c[2] !== g ? (b = (0, d.jsx)(u, {
                    reviews: g
                }), c[2] = g, c[3] = b) : b = c[3], b
            }
        })
    }),
    getw: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("ZDhX"),
            g = c("on57"),
            h = c("oyxz"),
            i = c("Sm6l"),
            j = c("pSXw"),
            k = c("kRUe"),
            l = c("waM8"),
            m = c("XSEO");

        function n(a) {
            let b, c, f = (0, e.c)(15),
                {
                    workedDurationMs: g,
                    workedForItem: i,
                    className: j
                } = a;
            if (null != i) {
                let a;
                return f[0] !== j || f[1] !== i.completedAtMs || f[2] !== i.startedAtMs || f[3] !== i.status ? (a = (0, d.jsx)(m.b, {
                    className: j,
                    status: i.status,
                    startedAtMs: i.startedAtMs,
                    completedAtMs: i.completedAtMs
                }), f[0] = j, f[1] = i.completedAtMs, f[2] = i.startedAtMs, f[3] = i.status, f[4] = a) : a = f[4], a
            }
            if (null != g) {
                let a, b, c, e = j ?? "text-tertiary";
                return f[5] !== g ? (a = (0, l.a)(g), f[5] = g, f[6] = a) : a = f[6], f[7] !== a ? (b = (0, d.jsx)(h.a, {
                    id: "localConversation.workedFor",
                    defaultMessage: "Worked for {time}",
                    values: {
                        time: a
                    }
                }), f[7] = a, f[8] = b) : b = f[8], f[9] !== e || f[10] !== b ? (c = (0, d.jsx)("span", {
                    className: e,
                    children: b
                }), f[9] = e, f[10] = b, f[11] = c) : c = f[11], c
            }
            let k = j ?? "text-tertiary";
            return f[12] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, d.jsx)(h.a, {
                ...l.b.worked
            }), f[12] = b) : b = f[12], f[13] !== k ? (c = (0, d.jsx)("span", {
                className: k,
                children: b
            }), f[13] = k, f[14] = c) : c = f[14], c
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, l, m, o, p, q, r, s, t, u, v = (0, e.c)(39),
                    {
                        label: w,
                        description: x,
                        headerAction: y,
                        deniedActionCount: z,
                        workedDurationMs: A,
                        workedForItem: B,
                        isCollapsed: C,
                        onFocus: D,
                        onBlur: E,
                        onPointerEnter: F,
                        onPointerLeave: G,
                        onToggle: H
                    } = a,
                    I = void 0 === z ? 0 : z,
                    J = null != y && "flex min-w-0 items-start gap-3";
                v[0] !== J ? (b = (0, g.b)("text-size-chat text-secondary", J), v[0] = J, v[1] = b) : b = v[1];
                let K = null == y && "flex-wrap",
                    L = I > 0 && "w-full";
                v[2] !== K || v[3] !== L ? (c = (0, g.b)("inline-flex max-w-full text-size-chat", K, L), v[2] = K, v[3] = L, v[4] = c) : c = v[4];
                let M = null != y,
                    N = !C,
                    O = null == y ? void 0 : "min-w-0 text-start whitespace-normal";
                v[5] !== w || v[6] !== A || v[7] !== B ? (l = w ?? (0, d.jsx)(n, {
                    className: "text-inherit",
                    workedDurationMs: A,
                    workedForItem: B
                }), v[5] = w, v[6] = A, v[7] = B, v[8] = l) : l = v[8], v[9] !== l || v[10] !== O ? (m = (0, d.jsx)("span", {
                    className: O,
                    children: l
                }), v[9] = l, v[10] = O, v[11] = m) : m = v[11];
                let P = C ? "rotate-0" : "rotate-90";
                return v[12] !== P ? (o = (0, g.b)("icon-2xs transition-transform duration-basic", P), v[12] = P, v[13] = o) : o = v[13], v[14] !== o ? (p = (0, d.jsx)(j.a, {
                    className: o
                }), v[14] = o, v[15] = p) : p = v[15], v[16] !== I ? (q = I > 0 ? (0, d.jsx)(f.a, {
                    content: (0, d.jsx)(h.a, {
                        id: "localConversation.deniedActionsTooltip",
                        defaultMessage: "{count, plural, one {Auto-review denied # action. View the action and why it was denied.} other {Auto-review denied # actions. View the actions and why they were denied.}}",
                        values: {
                            count: I
                        }
                    }),
                    children: (0, d.jsxs)("span", {
                        className: "ms-auto inline-flex items-center gap-1 text-secondary",
                        "data-denied-action-count": !0,
                        children: [(0, d.jsx)(k.a, {}), (0, d.jsx)(h.a, {
                            id: "localConversation.deniedActionsCount",
                            defaultMessage: "{count, plural, one {# denied action} other {# denied actions}}",
                            values: {
                                count: I
                            }
                        })]
                    })
                }) : null, v[16] = I, v[17] = q) : q = v[17], v[18] !== E || v[19] !== D || v[20] !== F || v[21] !== G || v[22] !== H || v[23] !== m || v[24] !== p || v[25] !== q || v[26] !== c || v[27] !== M || v[28] !== N ? (r = (0, d.jsxs)(i.a, {
                    className: c,
                    allowShrink: M,
                    color: "ghostTertiary",
                    radius: "small",
                    size: "inline",
                    "data-turn-disclosure-button": "",
                    "aria-expanded": N,
                    onFocus: D,
                    onBlur: E,
                    onPointerEnter: F,
                    onPointerLeave: G,
                    onClick: H,
                    children: [m, p, q]
                }), v[18] = E, v[19] = D, v[20] = F, v[21] = G, v[22] = H, v[23] = m, v[24] = p, v[25] = q, v[26] = c, v[27] = M, v[28] = N, v[29] = r) : r = v[29], v[30] !== y || v[31] !== r || v[32] !== b ? (s = (0, d.jsxs)("div", {
                    className: b,
                    children: [r, y]
                }), v[30] = y, v[31] = r, v[32] = b, v[33] = s) : s = v[33], v[34] !== x ? (t = null != x ? (0, d.jsx)("div", {
                    className: "mt-2 text-size-chat text-secondary",
                    children: x
                }) : null, v[34] = x, v[35] = t) : t = v[35], v[36] !== s || v[37] !== t ? (u = (0, d.jsxs)(d.Fragment, {
                    children: [s, t]
                }), v[36] = s, v[37] = t, v[38] = u) : u = v[38], u
            }
        })
    }),
    mRLe: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57");
        let g = {
            activity: "h-3",
            item: "h-4",
            compact: "h-2"
        };
        c.d(b, {}, {
            a: function(a) {
                let b, c, h = (0, e.c)(5),
                    {
                        variant: i,
                        className: j
                    } = a,
                    k = g[void 0 === i ? "item" : i];
                return h[0] !== j || h[1] !== k ? (b = (0, f.b)("w-full shrink-0", k, j), h[0] = j, h[1] = k, h[2] = b) : b = h[2], h[3] !== b ? (c = (0, d.jsx)("div", {
                    "aria-hidden": !0,
                    className: b
                }), h[3] = b, h[4] = c) : c = h[4], c
            }
        })
    }),
    RKko: (function(a, b, c) {
        var d = c("hTLy"),
            e = c.n(d),
            f = c("R9dK"),
            g = c.n(f);

        function h(a, b) {
            return a.totalHeightPx - (a.topOffsetsPx[b] ?? 0) - (a.heightsPx[b] ?? 0)
        }

        function i(a, b) {
            return h(a, b) + (a.heightsPx[b] ?? 0)
        }

        function j(a, b) {
            let c = 0,
                d = a;
            for (; c < d;) {
                let a = Math.floor((c + d) / 2);
                b(a) ? d = a : c = a + 1
            }
            return c
        }
        c.d(b, {}, {
            a: function(a) {
                let {
                    collapseEmptyRows: b = !1,
                    entries: c,
                    gapPx: d,
                    measuredHeightsByKey: e,
                    pixelScale: f
                } = a, g = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a => !1 !== a.anchorEligible, h = new Set, i = [], j = [], k = [], l = new Map, m = [], n = 0;
                for (let [a, o] of c.entries()) {
                    let c = o.turnKey,
                        p = Object.hasOwn(e, c) ? e[c] : void 0,
                        q = Math.max(o.minHeightPx ?? 0, p ?? o.estimatedHeightPx ?? 280);
                    null != f && (q = Math.round(q * f) / f);
                    let r = (b ? n > 0 && q > 0 : a > 0) ? o.gapBeforePx ?? d : 0;
                    null != f && (r = Math.round(r * f) / f), n += r, i.push(r), g(o) || h.add(c), l.set(c, a), m.push(c), k.push(n), j.push(q), n += q
                }
                return {
                    collapseEmptyRows: b,
                    gapKeys: h,
                    gapsBeforePx: i,
                    heightsPx: j,
                    topOffsetsPx: k,
                    totalHeightPx: n,
                    turnIndexByKey: l,
                    turnKeys: m
                }
            },
            b: h,
            c: i,
            d: function(a) {
                let {
                    anchorKey: b,
                    distanceFromBottomPx: c,
                    nextLayout: d,
                    previousLayout: e
                } = a, f = e.turnIndexByKey.get(b), g = d.turnIndexByKey.get(b);
                if (null == f || null == g) return null;
                let h = i(e, f);
                return Math.max(0, c + i(d, g) - h)
            },
            e: function(a) {
                let {
                    layout: b,
                    turnKey: c,
                    viewportHeightPx: d
                } = a, e = b.turnIndexByKey.get(c);
                return null == e ? null : Math.max(0, h(b, e) - d / 2 + (b.heightsPx[e] ?? 0) / 2)
            },
            f: function(a) {
                let {
                    distanceFromBottomPx: b,
                    layout: c,
                    overscanCount: d,
                    overscanPx: e = 0,
                    viewportHeightPx: f
                } = a;
                if (0 === c.turnKeys.length) return {
                    startIndex: 0,
                    endIndex: 0
                };
                let g = Math.min(Math.max(0, b), c.totalHeightPx),
                    k = Math.max(0, g - e),
                    l = Math.min(g + Math.max(0, f) + e, c.totalHeightPx),
                    m = c.collapseEmptyRows && l === c.totalHeightPx ? 0 : j(c.turnKeys.length, a => h(c, a) < l),
                    n = c.collapseEmptyRows && 0 === k ? c.turnKeys.length : j(c.turnKeys.length, a => i(c, a) <= k);
                return {
                    startIndex: Math.max(0, m - d),
                    endIndex: Math.min(c.turnKeys.length, Math.max(n, m + 1) + d)
                }
            },
            g: function(a) {
                let {
                    anchorKey: b,
                    layout: c,
                    previousRange: d
                } = a, e = c.turnIndexByKey.get(b);
                return null == e ? null : {
                    startIndex: e,
                    endIndex: Math.min(c.turnKeys.length, e + d.endIndex - d.startIndex)
                }
            },
            h: function(a, b, c, d) {
                let {
                    topOffsetsPx: f,
                    heightsPx: h
                } = b, i = Math.max(0, g()(f, c) - 1);
                return (f[i] ?? 0) + (h[i] ?? 0) <= c && i++, a.slice(i, e()(f, d))
            },
            i: {
                getRowKey: a => a.turnKey,
                getRowGeometry: a => a,
                getRowCollapseScopeKey: a => a.turnSearchKey ?? a.turnKey,
                isRowAnchorEligible: function(a) {
                    return "gap" !== a.type
                }
            }
        })
    }),
    S1aY: (function(a, b, c) {
        c.d(b, {
            a: () => I
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("QTNa"),
            g = c("eQiz"),
            h = c("v8gE"),
            i = c("on57"),
            j = c("Q840"),
            k = c("zd8w"),
            l = c("v7qY"),
            m = c("wD9O"),
            n = c("zm5q"),
            o = c("f4Vb"),
            p = c("QEDJ"),
            q = c("lsfk"),
            r = c("uYx2"),
            s = c("g3o5"),
            t = c("bIvi"),
            u = c("RKko");

        function v(a) {
            let b, c, f, g, v, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX = (0, e.c)(292),
                {
                    collapseEmptyRows: aY,
                    rows: aZ,
                    getRowKey: a$,
                    getRowGeometry: a_,
                    gapsBeforePx: a0,
                    boundaries: a1,
                    getRowCollapseScopeKey: a2,
                    isRowAnchorEligible: a3,
                    renderRow: a4,
                    onApiChange: a5,
                    onVisibleContentReady: a6,
                    className: a7,
                    gapPx: a8,
                    getBottomScrollPaddingPx: a9,
                    isSubmitPlacementAnimating: ba,
                    onLatestTurnHeightChange: bb,
                    preserveMeasuredTurnViewport: bc,
                    preserveUnderfilledViewport: bd,
                    getPendingRestoreScrollDistanceFromBottomPx: be,
                    restoreScrollDistanceFromBottomPx: bf,
                    initialRestoreState: bg,
                    onRestoreStateChange: bh,
                    onViewportChange: bi,
                    onViewportRowsChange: bj,
                    latestTurnSynchronousMeasurementKey: bk,
                    layoutReadyTurnKey: bl,
                    onTurnLayoutReady: bm,
                    synchronousMeasurementTurnKey: bn,
                    retainedTurnKeys: bo
                } = a,
                bp = void 0 !== aY && aY,
                bq = void 0 === a8 ? 12 : a8,
                br = void 0 !== bc && bc,
                bs = void 0 !== bd && bd,
                bt = (0, j.z)(s.b);
            aX[0] !== bo ? (b = bo ?? [], aX[0] = bo, aX[1] = b) : b = aX[1];
            let bu = [...b, ...bt],
                [bv, bw] = (0, k.useState)(null),
                [bx] = (0, k.useState)(C),
                by = aZ.length - 1;
            aX[2] !== a$ || aX[3] !== by || aX[4] !== aZ ? (c = by < 0 ? void 0 : a$(aZ[by]), aX[2] = a$, aX[3] = by, aX[4] = aZ, aX[5] = c) : c = aX[5];
            let bz = c,
                bA = bs && null != bv && bv.turnKey === bz ? bv.viewportHeightPx - bv.heightOutsideTurnPx : void 0;
            aX[6] !== bA || aX[7] !== a0 || aX[8] !== bx || aX[9] !== a_ || aX[10] !== a$ || aX[11] !== a3 || aX[12] !== aZ ? (f = bx(aZ, a$, a_, a0, a3, bA), aX[6] = bA, aX[7] = a0, aX[8] = bx, aX[9] = a_, aX[10] = a$, aX[11] = a3, aX[12] = aZ, aX[13] = f) : f = aX[13];
            let bB = f,
                bC = (0, q.b)(),
                {
                    notifyLayoutResize: bD
                } = bC,
                bE = (0, m.c)(),
                bF = bE * (globalThis.devicePixelRatio ?? 1);
            aX[14] !== bg?.turnHeightsByKey ? (g = () => G(bg?.turnHeightsByKey), aX[14] = bg?.turnHeightsByKey, aX[15] = g) : g = aX[15];
            let [bG, bH] = (0, k.useState)(g), [bI, bJ] = (0, k.useState)(null);
            aX[16] !== bp || aX[17] !== bB || aX[18] !== bq || aX[19] !== bF || aX[20] !== bG ? (v = (0, u.a)({
                collapseEmptyRows: bp,
                entries: bB,
                gapPx: bq,
                measuredHeightsByKey: bG,
                pixelScale: bF
            }), aX[16] = bp, aX[17] = bB, aX[18] = bq, aX[19] = bF, aX[20] = bG, aX[21] = v) : v = aX[21];
            let bK = v;
            aX[22] !== a9 || aX[23] !== bg || aX[24] !== bK || aX[25] !== bC ? (H = () => {
                var a, b, c;
                let d, e, f, g, h = E(a9);
                return a = bK, b = F(bC.getLastScrollDistanceFromBottomPx(), h), c = bg, d = c?.renderedWindow, e = d?.viewportHeightPx ?? 800, f = Math.min(b, a.totalHeightPx), g = A(a, f, e), {
                    distanceFromBottomPx: f,
                    renderedRange: (null == d ? null : (0, u.g)({
                        anchorKey: d.anchorKey,
                        layout: a,
                        previousRange: {
                            startIndex: 0,
                            endIndex: null == d.viewportHeightPx ? Math.min(d.count, g.endIndex - g.startIndex) : d.count
                        }
                    })) ?? g,
                    turnKeys: a.turnKeys,
                    viewportHeightPx: e
                }
            }, aX[22] = a9, aX[23] = bg, aX[24] = bK, aX[25] = bC, aX[26] = H) : H = aX[26];
            let [bL, bM] = (0, k.useState)(H), [bN] = (0, k.useState)(x), bO = (0, k.useSyncExternalStore)(bN.subscribe, bN.getSnapshot, bN.getSnapshot), bP = (0, k.useRef)(null), bQ = (0, k.useRef)(bG), bR = (0, k.useRef)(0);
            aX[27] === Symbol.for("react.memo_cache_sentinel") ? (I = a => {
                bR.current = a;
                let b = bP.current;
                null != b && (b.style.minHeight = a > 0 ? `${a}px` : "")
            }, aX[27] = I) : I = aX[27];
            let bS = (0, t.a)(I),
                bT = (0, k.useRef)(bL),
                bU = (0, k.useRef)(null);
            aX[28] === Symbol.for("react.memo_cache_sentinel") ? (J = new Map, aX[28] = J) : J = aX[28];
            let bV = (0, k.useRef)(J);
            aX[29] === Symbol.for("react.memo_cache_sentinel") ? (K = new Map, aX[29] = K) : K = aX[29];
            let bW = (0, k.useRef)(K);
            aX[30] === Symbol.for("react.memo_cache_sentinel") ? (L = new WeakSet, aX[30] = L) : L = aX[30];
            let bX = (0, k.useRef)(L);
            aX[31] === Symbol.for("react.memo_cache_sentinel") ? (M = new Map, aX[31] = M) : M = aX[31];
            let bY = (0, k.useRef)(M);
            aX[32] === Symbol.for("react.memo_cache_sentinel") ? (N = new Map, aX[32] = N) : N = aX[32];
            let bZ = (0, k.useRef)(N),
                b$ = (0, k.useRef)(null),
                b_ = (0, k.useRef)(null),
                b0 = (0, k.useRef)(0),
                b1 = (0, k.useRef)(null),
                [b2, b3] = (0, k.useState)(null),
                b4 = (0, k.useRef)(!1),
                b5 = (0, k.useRef)(bK),
                b6 = (0, k.useRef)(bK),
                b7 = (0, k.useRef)(bK),
                b8 = (0, k.useRef)(aZ),
                b9 = (0, k.useRef)(null);
            aX[33] !== bG ? (O = () => {
                bG !== bQ.current && bH(bQ.current)
            }, aX[33] = bG, aX[34] = O) : O = aX[34], aX[35] !== bp || aX[36] !== bB || aX[37] !== bq || aX[38] !== bF || aX[39] !== bG ? (P = [bp, bB, bq, bF, bG], aX[35] = bp, aX[36] = bB, aX[37] = bq, aX[38] = bF, aX[39] = bG, aX[40] = P) : P = aX[40], (0, k.useLayoutEffect)(O, P), aX[41] === Symbol.for("react.memo_cache_sentinel") ? (Q = a => {
                bP.current = a, bJ(a)
            }, aX[41] = Q) : Q = aX[41];
            let ca = (0, t.a)(Q);
            aX[42] !== bp || aX[43] !== bB || aX[44] !== bq || aX[45] !== bK || aX[46] !== bF || aX[47] !== bG ? (R = () => {
                if (b6.current !== bK) {
                    b6.current = bK, b5.current = bG === bQ.current ? bK : (0, u.a)({
                        collapseEmptyRows: bp,
                        entries: bB,
                        gapPx: bq,
                        measuredHeightsByKey: bQ.current,
                        pixelScale: bF
                    });
                    let a = bP.current;
                    null != a && (a.style.height = `${b5.current.totalHeightPx}px`)
                }
                return b5.current
            }, aX[42] = bp, aX[43] = bB, aX[44] = bq, aX[45] = bK, aX[46] = bF, aX[47] = bG, aX[48] = R) : R = aX[48];
            let cb = (0, t.a)(R);
            aX[49] !== a9 || aX[50] !== bC || aX[51] !== bE ? (S = a => {
                let b = bC.getScrollElement(),
                    c = bP.current,
                    d = b?.firstElementChild;
                return null == c || null == d ? a - E(a9) : a - (0, m.b)(d.getBoundingClientRect().bottom - c.getBoundingClientRect().bottom, bE)
            }, aX[49] = a9, aX[50] = bC, aX[51] = bE, aX[52] = S) : S = aX[52];
            let cc = (0, t.a)(S),
                cd = bL.renderedRange;
            if (null != bO) {
                let a = (0, u.e)({
                    layout: bK,
                    turnKey: bO.turnKey,
                    viewportHeightPx: bL.viewportHeightPx
                });
                null != a && (cd = A(bK, a, bL.viewportHeightPx))
            } else if (!D(bL.turnKeys, bK.turnKeys)) {
                let a = bL.turnKeys[bL.renderedRange.startIndex];
                null != a && (cd = (0, u.g)({
                    anchorKey: a,
                    layout: bK,
                    previousRange: cd
                }) ?? A(bK, bL.distanceFromBottomPx, bL.viewportHeightPx))
            }
            aX[53] !== bf ? (T = () => {
                null == b$.current && bf?.()
            }, aX[53] = bf, aX[54] = T) : T = aX[54];
            let ce = (0, t.a)(T);
            aX[55] !== bB.length || aX[56] !== a6 || aX[57] !== bC || aX[58] !== bN ? (U = () => {
                null == a6 || b4.current || null != b$.current || null != b1.current || bY.current.size > 0 || null != bN.getSnapshot() || null == bC.getScrollElement() || null == bP.current || bB.length > 0 && 0 === bW.current.size || (b4.current = !0, a6())
            }, aX[55] = bB.length, aX[56] = a6, aX[57] = bC, aX[58] = bN, aX[59] = U) : U = aX[59];
            let cf = (0, t.a)(U),
                cg = aZ.slice(cd.startIndex, cd.endIndex).map((a, b) => ({
                    entry: a,
                    turnIndex: cd.startIndex + b
                })),
                ch = bB.length > 0 && 0 === cg.length;
            for (let a of new Set(bu)) {
                let b = bK.turnIndexByKey.get(a);
                null == b || b >= cd.startIndex && b < cd.endIndex || cg.push({
                    entry: aZ[b],
                    turnIndex: b
                })
            }
            cg.sort(w), aX[60] === Symbol.for("react.memo_cache_sentinel") ? (V = a => bW.current.get(a), aX[60] = V) : V = aX[60];
            let ci = (0, t.a)(V),
                cj = (0, t.a)(a => {
                    let b = a <= 24;
                    bj?.(null == bN.getSnapshot() ? function(a, b, c, d) {
                        let {
                            startIndex: e,
                            endIndex: f
                        } = (0, u.f)({
                            distanceFromBottomPx: c,
                            layout: b,
                            overscanCount: 0,
                            viewportHeightPx: d
                        }), g = new Set(a), h = new Set;
                        for (let a = e; a < f; a++) h.add(a);
                        for (let a of g) {
                            let c = b.turnIndexByKey.get(a);
                            null != c && h.add(c)
                        }
                        return [...h].sort((a, b) => a - b).map(a => ({
                            key: b.turnKeys[a],
                            retained: g.has(b.turnKeys[a])
                        }))
                    }(bu, bK, b ? 0 : F(a, E(a9)), bT.current.viewportHeightPx + 24 * !!b) : null, ci, b)
                });
            aX[61] !== cj || aX[62] !== bC ? (W = () => {
                cj(bC.getLastScrollDistanceFromBottomPx())
            }, aX[61] = cj, aX[62] = bC, aX[63] = W) : W = aX[63], aX[64] !== bK || aX[65] !== bj || aX[66] !== bO || aX[67] !== bL.renderedRange || aX[68] !== bL.viewportHeightPx || aX[69] !== cj || aX[70] !== bt || aX[71] !== bo || aX[72] !== aZ || aX[73] !== bC ? (X = [bK, bj, bO, bL.renderedRange, bL.viewportHeightPx, cj, bt, bo, aZ, bC], aX[64] = bK, aX[65] = bj, aX[66] = bO, aX[67] = bL.renderedRange, aX[68] = bL.viewportHeightPx, aX[69] = cj, aX[70] = bt, aX[71] = bo, aX[72] = aZ, aX[73] = bC, aX[74] = X) : X = aX[74], (0, k.useLayoutEffect)(W, X), aX[75] === Symbol.for("react.memo_cache_sentinel") ? (Y = new Set, aX[75] = Y) : Y = aX[75];
            let ck = (0, k.useRef)(Y),
                cl = (0, k.useRef)(null);
            aX[76] === Symbol.for("react.memo_cache_sentinel") ? (Z = a => {
                let b = a?.ownerDocument.activeElement,
                    c = b?.closest("[data-turn-key]"),
                    d = c?.dataset.turnKey;
                if (a && b && c && d && bW.current.get(d) === c) {
                    let c = b.getBoundingClientRect(),
                        e = a.getBoundingClientRect();
                    if (c.bottom > e.top && c.top < e.bottom) return d
                }
                return null
            }, aX[76] = Z) : Z = aX[76];
            let cm = (0, t.a)(Z);
            aX[77] === Symbol.for("react.memo_cache_sentinel") ? ($ = () => {
                if (null != b$.current) return;
                let a = ck.current;
                for (let [b, c] of(a.clear(), bW.current)) bX.current.has(c) && a.add(b)
            }, aX[77] = $) : $ = aX[77];
            let cn = (0, t.a)($);
            aX[78] !== bl || aX[79] !== bm || aX[80] !== bC ? (_ = () => {
                if (null == bl || null == bm || null != b$.current || bY.current.size > 0) return;
                let a = bC.getScrollElement(),
                    b = bW.current.get(bl);
                null != b && bX.current.has(b) && !((bQ.current[bl] ?? 0) <= 0) && null != a && !(a.clientHeight <= 0) && bm(bl, b)
            }, aX[78] = bl, aX[79] = bm, aX[80] = bC, aX[81] = _) : _ = aX[81];
            let co = (0, t.a)(_);
            aX[82] !== a9 || aX[83] !== be || aX[84] !== ba || aX[85] !== bb || aX[86] !== br || aX[87] !== ce || aX[88] !== bC || aX[89] !== bN || aX[90] !== bS ? (aa = (a, b) => {
                let c = E(a9);
                if (null != a.latestTurnHeightChange && (bb?.(a.latestTurnHeightChange), bR.current > 0)) {
                    let a = c - E(a9);
                    a > 0 && bS(bR.current + a)
                }
                if (a.restoreScrollDistanceFromBottom) ce();
                else if (null != a.scrollDistanceFromBottomPx) {
                    var d, e;
                    let f, g = a.scrollDistanceFromBottomPx,
                        h = b?.previous ?? b7.current,
                        i = b?.estimated ?? b9.current,
                        j = b5.current;
                    br && c > 0 && null != a.latestTurnHeightChange && null != i && i.totalHeightPx !== h.totalHeightPx && null == bN.getSnapshot() && be?.() == null && (d = h, (f = (e = j).turnKeys.length - 1) > 0 && d.turnKeys.length === e.turnKeys.length && d.turnKeys[f] !== e.turnKeys[f] && d.turnKeys.every((a, b) => b === f || a === e.turnKeys[b] && d.topOffsetsPx[b] === e.topOffsetsPx[b] && d.heightsPx[b] === e.heightsPx[b])) && (g = bC.getUnroundedScrollDistanceFromBottomPx(bC.getLastScrollDistanceFromBottomPx()) + j.totalHeightPx - h.totalHeightPx, null != b9.current && (b9.current = h)), bC.compensateScrollToDistanceFromBottomPx(g + E(a9) - c, null != a.afterMeasure || null != bN.getSnapshot() || be?.() != null || ba?.() ? void 0 : "turn-resize", cl.current)
                }
                a.afterMeasure?.()
            }, aX[82] = a9, aX[83] = be, aX[84] = ba, aX[85] = bb, aX[86] = br, aX[87] = ce, aX[88] = bC, aX[89] = bN, aX[90] = bS, aX[91] = aa) : aa = aX[91];
            let cp = (0, t.a)(aa);
            aX[92] !== cb ? (ab = (a, b) => {
                if (null != b$.current || b <= 0) return;
                let c = bT.current,
                    d = z({
                        current: c,
                        distanceFromBottomPx: a,
                        layout: cb(),
                        viewportHeightPx: b
                    });
                d === c || (bT.current = d, d.renderedRange.startIndex === c.renderedRange.startIndex && d.renderedRange.endIndex === c.renderedRange.endIndex && D(d.turnKeys, c.turnKeys) || bM(d))
            }, aX[92] = cb, aX[93] = ab) : ab = aX[93];
            let cq = (0, t.a)(ab);
            aX[94] !== ci || aX[95] !== bj ? (ac = () => () => bj?.(void 0, ci), ad = [ci, bj], aX[94] = ci, aX[95] = bj, aX[96] = ac, aX[97] = ad) : (ac = aX[96], ad = aX[97]), (0, k.useLayoutEffect)(ac, ad), aX[98] !== cb || aX[99] !== bi ? (ae = (a, b, c) => {
                if (null == bi) return;
                let d = cb(),
                    e = Math.max(0, Math.min(d.totalHeightPx, d.totalHeightPx - a)),
                    f = Math.max(0, e - b);
                bi({
                    viewportEndPx: e,
                    viewportStartPx: f
                }, c)
            }, aX[98] = cb, aX[99] = bi, aX[100] = ae) : ae = aX[100];
            let cr = (0, t.a)(ae);
            aX[101] !== bN ? (af = a => {
                bN.getSnapshot() === a && bN.replace(null)
            }, aX[101] = bN, aX[102] = af) : af = aX[102];
            let cs = (0, t.a)(af);
            aX[103] !== ci || aX[104] !== bj || aX[105] !== bN ? (ag = (a, b, c) => c?.signal?.aborted ? Promise.resolve() : (cl.current = null, bj?.(null, ci), new Promise(d => {
                let e = () => {
                        bN.getSnapshot() === f && bN.replace(null)
                    },
                    f = {
                        align: c?.align ?? "center",
                        complete: () => {
                            c?.signal?.removeEventListener("abort", e), d()
                        },
                        getTargetElement: b,
                        turnKey: a
                    };
                bM(bT.current), bN.replace(f), c?.signal?.addEventListener("abort", e, {
                    once: !0
                })
            })), aX[103] = ci, aX[104] = bj, aX[105] = bN, aX[106] = ag) : ag = aX[106];
            let ct = (0, t.a)(ag);
            aX[107] !== cb || aX[108] !== aZ ? (ah = a => {
                let {
                    viewportStartPx: b,
                    viewportEndPx: c
                } = a;
                return (0, u.h)(aZ, cb(), b, c)
            }, aX[107] = cb, aX[108] = aZ, aX[109] = ah) : ah = aX[109];
            let cu = (0, t.a)(ah);
            aX[110] !== cb ? (ai = a => {
                let b = cb(),
                    c = b.turnIndexByKey.get(a);
                if (null == c) return null;
                let d = b.topOffsetsPx[c],
                    e = b.heightsPx[c];
                return null == d || null == e ? null : {
                    endPx: d + e,
                    startPx: d
                }
            }, aX[110] = cb, aX[111] = ai) : ai = aX[111];
            let cv = (0, t.a)(ai);
            aX[112] !== bb ? (aj = () => {
                let a = 0,
                    b = null;
                for (let [c, d] of bZ.current) a += d, (null == b || b.compareDocumentPosition(c) === Node.DOCUMENT_POSITION_FOLLOWING) && (b = c);
                null != b && bb?.({
                    heightDeltaPx: null,
                    heightPx: null,
                    turnElement: b,
                    followContentHeightPx: a
                })
            }, aX[112] = bb, aX[113] = aj) : aj = aX[113];
            let cw = (0, t.a)(aj);
            aX[114] !== bp || aX[115] !== cp || aX[116] !== bB || aX[117] !== bq || aX[118] !== a9 || aX[119] !== cb || aX[120] !== cm || aX[121] !== cc || aX[122] !== be || aX[123] !== a_ || aX[124] !== bF || aX[125] !== br || aX[126] !== aZ || aX[127] !== bC || aX[128] !== bN || aX[129] !== bS || aX[130] !== bE ? (ak = (a, b, c) => {
                var d;
                let e = void 0 === c ? "measured" : c,
                    f = cb(),
                    g = bC.getScrollElement();
                if (g?.getClientRects().length === 0) return !1;
                let h = b$.current,
                    i = bQ.current,
                    j = (a, b) => {
                        let c = f.turnIndexByKey.get(a);
                        return Math.max(+!bp, b, (null == c ? void 0 : a_(aZ[c]).minHeightPx) ?? 0)
                    };
                if ("controller" === e && null == h) {
                    let b = !1;
                    for (let [c, d] of a) {
                        let {
                            element: a,
                            heightPx: e
                        } = d;
                        if (e <= 0 || i[c] !== j(c, e)) {
                            b = !0;
                            break
                        }
                        let f = bW.current.get(c);
                        f === a && bX.current.add(f)
                    }
                    if (!b) return !1
                }
                let k = i,
                    n = 0,
                    o = !1,
                    p = null,
                    q = 0,
                    s = !1,
                    t = !1,
                    v = !1,
                    w = "controller" === e ? bC.getLastScrollDistanceFromBottomPx({
                        includePendingUserScroll: !0
                    }) : function(a, b) {
                        let c = a.getScrollElement(),
                            d = c?.firstElementChild;
                        if (null == c || null == d || 0 === c.clientHeight) return a.getLastScrollDistanceFromBottomPx();
                        let e = d.getBoundingClientRect();
                        if (0 === e.height) return a.getLastScrollDistanceFromBottomPx();
                        let f = c.scrollTop;
                        return Math.max(0, Math.round(f + (0, m.b)(e.bottom - (0, r.d)(c, b), b)) - c.clientHeight) - f
                    }(bC, bE),
                    x = E(a9),
                    y = F(w, x),
                    A = br ? null : be?.() ?? null,
                    C = null == h ? y : bT.current.distanceFromBottomPx;
                if (br && null == bN.getSnapshot() && be?.() == null) {
                    let a = D(b7.current.turnKeys, f.turnKeys) ? f : b7.current,
                        b = a === f ? h?.scrollDistanceFromBottomPx ?? w : w,
                        c = B({
                            focusedKey: cm(g),
                            historyAnchorRef: cl,
                            distanceFromBottomPx: cc(b),
                            preferLatestVisibleRow: b < x,
                            layout: a,
                            measuredContentKeys: ck.current,
                            nextLayout: f,
                            viewportHeightPx: bT.current.viewportHeightPx
                        }),
                        d = null == c ? null : f.turnIndexByKey.get(c);
                    null != d && (C = (0, u.b)(f, d))
                }
                for (let [b, c] of a) {
                    let {
                        element: a,
                        heightPx: d
                    } = c, e = bW.current.get(b);
                    if (e !== a) continue;
                    d > 0 ? bX.current.add(e) : bX.current.delete(e);
                    let g = j(b, d),
                        h = i[b];
                    if (h === g) continue;
                    k === i && (k = G(i)), k[b] = g, v = v || g > Math.max(+!bp, d);
                    let l = f.turnIndexByKey.get(b);
                    if (null == l) continue;
                    let m = l === f.turnKeys.length - 1,
                        r = Math.round(Math.max(bB[l]?.minHeightPx ?? 0, g) * bF) / bF,
                        w = r - (f.heightsPx[l] ?? r);
                    t = t || null == h || 0 !== w, m && (o = !0, n += null == h ? 0 : w, p = e), s = s || bp && (0 === r || 0 === f.heightsPx[l]), (0, u.b)(f, l) <= C && (br || null != be && !m) && (q += w)
                }
                if (k === i) return !1;
                if (!t) return bQ.current = k, v && bH(k), !1;
                let H = (0, u.a)({
                    collapseEmptyRows: bp,
                    entries: bB,
                    gapPx: bq,
                    measuredHeightsByKey: k,
                    pixelScale: bF
                });
                if (s)
                    for (let [a, b] of H.gapsBeforePx.entries()) {
                        let c = b - (f.gapsBeforePx[a] ?? 0);
                        (0, u.c)(f, a) <= C && (br || null != be && a !== f.turnKeys.length - 1) && (q += c)
                    }
                let I = bR.current;
                if (I > 0) {
                    let a = Math.max(0, I - f.totalHeightPx),
                        b = Math.max(0, I - H.totalHeightPx);
                    q += b - a, n > 0 && a > b && (n = Math.max(0, n - (a - b))), a > 0 && 0 === b && bS(0)
                }
                let J = br && bC.shouldFollowContentGrowth() && (d = w, 0 === x && d <= 24) && p?.querySelector("[data-preserve-turn-viewport]") == null,
                    K = h?.restoreScrollDistanceFromBottom || null != A,
                    L = null;
                K || (L = J ? 0 : 0 !== q ? (h?.scrollDistanceFromBottomPx ?? bC.getUnroundedScrollDistanceFromBottomPx(w)) + q : h?.scrollDistanceFromBottomPx ?? (br || !o ? w : null));
                let M = bT.current.distanceFromBottomPx;
                K ? M = A ?? M : null != L && (M = F(L, x));
                let N = z({
                        current: bT.current,
                        distanceFromBottomPx: M,
                        layout: H,
                        viewportHeightPx: bT.current.viewportHeightPx
                    }),
                    O = h?.latestTurnHeightChange,
                    P = p ?? O?.turnElement ?? null,
                    Q = {
                        afterMeasure: h?.afterMeasure,
                        latestTurnHeightChange: o || null != O ? {
                            heightDeltaPx: (O?.heightDeltaPx ?? 0) + n,
                            heightPx: H.heightsPx.at(-1) ?? null,
                            turnElement: P,
                            followContentHeightPx: null
                        } : null,
                        restoreScrollDistanceFromBottom: K,
                        scrollDistanceFromBottomPx: L,
                        turnHeightsByKey: k
                    },
                    R = bP.current;
                for (let [b, c] of a) {
                    let {
                        element: a
                    } = c, d = H.turnIndexByKey.get(b);
                    bW.current.get(b) === a && null != d && null != a.parentElement && (a.parentElement.style.height = `${H.heightsPx[d]}px`, a.parentElement.style.minHeight = "")
                }
                if (o && 1 === a.size && null == h && N === bT.current && H.gapsBeforePx.at(-1) === f.gapsBeforePx.at(-1) && null != R) {
                    bQ.current = k, b5.current = H;
                    let a = b7.current;
                    return b7.current = H, R.style.height = `${H.totalHeightPx}px`, cp(Q, {
                        previous: a,
                        estimated: f
                    }), !0
                }
                null == b9.current && (b9.current = f);
                let S = () => {
                    bQ.current = k, b5.current = H, bH(k), N !== bT.current && (bT.current = N, bM(N))
                };
                return b$.current = Q, void 0 === b || b ? (0, l.flushSync)(S) : S(), !0
            }, aX[114] = bp, aX[115] = cp, aX[116] = bB, aX[117] = bq, aX[118] = a9, aX[119] = cb, aX[120] = cm, aX[121] = cc, aX[122] = be, aX[123] = a_, aX[124] = bF, aX[125] = br, aX[126] = aZ, aX[127] = bC, aX[128] = bN, aX[129] = bS, aX[130] = bE, aX[131] = ak) : ak = aX[131];
            let cx = (0, t.a)(ak);
            aX[132] !== cx || aX[133] !== cn || aX[134] !== bD || aX[135] !== cw || aX[136] !== co ? (al = a => {
                let b = new Map,
                    c = !1,
                    d = !1,
                    e = !1;
                for (let f of a) {
                    let a = bV.current.get(f.target);
                    if (null == a) continue;
                    let {
                        height: g
                    } = (0, o.a)(f);
                    switch (a.kind) {
                        case "turn": {
                            d = !0;
                            let e = a.turnKey,
                                h = bW.current.get(e);
                            if (h !== f.target || bX.current.has(h) || (c = !0), g > 0 && h === f.target && bQ.current[e] === g) {
                                bX.current.add(h);
                                break
                            }
                            b.set(e, {
                                element: f.target,
                                heightPx: g
                            });
                            break
                        }
                        case "latest-turn-follow-content":
                            bZ.current.set(a.element, g), e = !0
                    }
                }
                b.size > 0 && cx(b, !0, c ? "controller" : "measured"), d && cn(), e && cw(), co(), (d || e) && bD?.()
            }, aX[132] = cx, aX[133] = cn, aX[134] = bD, aX[135] = cw, aX[136] = co, aX[137] = al) : al = aX[137];
            let cy = (0, t.a)(al);
            aX[138] !== cy ? (am = () => {
                if (null != b_.current) return b_.current;
                let a = new ResizeObserver(cy);
                return b_.current = a, a
            }, aX[138] = cy, aX[139] = am) : am = aX[139];
            let cz = (0, t.a)(am);
            aX[140] !== cz ? (an = (a, b) => {
                if (null == b) return;
                bV.current.set(b, {
                    kind: "turn",
                    turnKey: a
                }), bW.current.set(a, b), bX.current.delete(b), bY.current.set(a, b);
                let c = cz();
                return c.observe(b), () => {
                    c.unobserve(b), bV.current.delete(b), bY.current.get(a) === b && bY.current.delete(a), bW.current.get(a) === b && bW.current.delete(a)
                }
            }, aX[140] = cz, aX[141] = an) : an = aX[141];
            let cA = (0, t.a)(an);
            aX[142] !== cx || aX[143] !== bE ? (ao = (a, b) => {
                let c = bW.current.get(a);
                if (null == c) return;
                let d = (0, m.b)(c.getBoundingClientRect().height, bE);
                if (!(d <= 0) && (cx(new Map([
                        [a, {
                            element: c,
                            heightPx: d
                        }]
                    ]), !1), null != b)) {
                    let a = b$.current;
                    null == a ? b() : a.afterMeasure = b
                }
            }, aX[142] = cx, aX[143] = bE, aX[144] = ao) : ao = aX[144];
            let cB = (0, t.a)(ao);
            aX[145] !== cz ? (ap = a => {
                if (null == a) return;
                bV.current.set(a, {
                    element: a,
                    kind: "latest-turn-follow-content"
                }), bZ.current.set(a, 0);
                let b = cz();
                return b.observe(a), () => {
                    b.unobserve(a), bV.current.delete(a), bZ.current.delete(a)
                }
            }, aX[145] = cz, aX[146] = ap) : ap = aX[146];
            let cC = (0, t.a)(ap),
                cD = (0, k.useRef)(bz);
            aX[147] !== cx || aX[148] !== bz || aX[149] !== bE ? (aq = () => {
                let a = bY.current,
                    b = cD.current;
                if (cD.current = bz, null != b && b !== bz) {
                    let c = bW.current.get(b);
                    null != c && a.set(b, c)
                }
                if (0 === a.size) {
                    b0.current = 0;
                    return
                }
                if (null != b1.current) return;
                if (b0.current >= 8) {
                    b1.current = requestAnimationFrame(a => {
                        b1.current = null, b0.current = 0, b3(a)
                    });
                    return
                }
                b0.current = b0.current + 1, bY.current = new Map;
                let c = new Map;
                if ((0, n.a)("virtualizedTurnList.readMountedHeights", () => {
                        for (let [b, d] of a) {
                            if (bW.current.get(b) !== d) continue;
                            let a = (0, m.b)(d.getBoundingClientRect().height, bE);
                            (a > 0 || d.getClientRects().length > 0) && c.set(b, {
                                element: d,
                                heightPx: a
                            })
                        }
                    }, a.size), c.size > 0) {
                    let b = bQ.current;
                    if (cx(c, !1, "controller"))
                        for (let [c, d] of a)(null == b[c] || b0.current > 1) && bW.current.get(c) === d && bY.current.set(c, d);
                    else b0.current = 0
                }
            }, aX[147] = cx, aX[148] = bz, aX[149] = bE, aX[150] = aq) : aq = aX[150], (0, k.useLayoutEffect)(aq), aX[151] !== bB || aX[152] !== cB || aX[153] !== bn ? (ar = () => {
                let a = bn ?? bB.at(-1)?.turnKey;
                null != a && cB(a)
            }, aX[151] = bB, aX[152] = cB, aX[153] = bn, aX[154] = ar) : ar = aX[154];
            let cE = (0, t.a)(ar);
            aX[155] !== bk || aX[156] !== cE ? (as = () => {
                null != bk && cE()
            }, at = [bk, cE], aX[155] = bk, aX[156] = cE, aX[157] = as, aX[158] = at) : (as = aX[157], at = aX[158]), (0, k.useLayoutEffect)(as, at), aX[159] !== cp || aX[160] !== bG ? (au = () => {
                let a = b$.current;
                null != a && a.turnHeightsByKey === bG && (b$.current = null, cp(a))
            }, av = [cp, bG], aX[159] = cp, aX[160] = bG, aX[161] = au, aX[162] = av) : (au = aX[161], av = aX[162]), (0, k.useLayoutEffect)(au, av), aX[163] !== bB || aX[164] !== bv || aX[165] !== bK.heightsPx || aX[166] !== bs || aX[167] !== bG || aX[168] !== bI || aX[169] !== bE ? (aw = a => {
                if (!bs || bv?.viewportHeightPx === a) return;
                if (null != bv) return void(0, l.flushSync)(() => {
                    bw({
                        ...bv,
                        viewportHeightPx: a
                    })
                });
                let b = bI?.closest("[data-thread-user-message-navigation-content]"),
                    c = b?.lastElementChild,
                    d = bB.at(-1)?.turnKey;
                if (null == b || null == c || null == d || bB.some(a => null == bG[a.turnKey])) return;
                let e = (0, m.b)(b.getBoundingClientRect().bottom - c.getBoundingClientRect().bottom, bE) - parseFloat(getComputedStyle(b).paddingBottom);
                e <= 24 || (0, l.flushSync)(() => {
                    bw({
                        turnKey: d,
                        heightOutsideTurnPx: a - (bK.heightsPx.at(-1) ?? 0) - e,
                        viewportHeightPx: a
                    })
                })
            }, aX[163] = bB, aX[164] = bv, aX[165] = bK.heightsPx, aX[166] = bs, aX[167] = bG, aX[168] = bI, aX[169] = bE, aX[170] = aw) : aw = aX[170];
            let cF = (0, t.a)(aw);
            aX[171] !== cu || aX[172] !== cv || aX[173] !== ci || aX[174] !== cB || aX[175] !== a5 || aX[176] !== ct ? (ax = () => {
                if (null != a5) return a5({
                    getEntriesInViewport: cu,
                    getRowElement: ci,
                    getEntryGeometry: cv,
                    measureTurnBeforePaint: cB,
                    scrollToKey: ct
                }), () => {
                    a5(null)
                }
            }, ay = [cu, ci, cv, cB, a5, ct], aX[171] = cu, aX[172] = cv, aX[173] = ci, aX[174] = cB, aX[175] = a5, aX[176] = ct, aX[177] = ax, aX[178] = ay) : (ax = aX[177], ay = aX[178]), (0, k.useEffect)(ax, ay), aX[179] === Symbol.for("react.memo_cache_sentinel") ? (az = () => () => {
                b4.current = !1
            }, aA = [], aX[179] = az, aX[180] = aA) : (az = aX[179], aA = aX[180]), (0, k.useLayoutEffect)(az, aA), aX[181] !== bN ? (aB = () => {
                let a = bV.current,
                    b = bW.current,
                    c = bZ.current;
                return () => {
                    null != b1.current && (cancelAnimationFrame(b1.current), b1.current = null), b_.current?.disconnect(), b_.current = null, a.clear(), b.clear(), bY.current.clear(), c.clear(), b$.current = null, bN.replace(null)
                }
            }, aC = [bN], aX[181] = bN, aX[182] = aB, aX[183] = aC) : (aB = aX[182], aC = aX[183]), (0, k.useEffect)(aB, aC), aX[184] !== bh ? (aD = () => {
                if (null != bh) return () => {
                    bh(function(a, b) {
                        let {
                            turnKeys: c,
                            renderedRange: d,
                            viewportHeightPx: e
                        } = b, f = G();
                        for (let b of c) {
                            let c = a[b];
                            null != c && (f[b] = c)
                        }
                        let g = c[d.startIndex];
                        return null == g ? null : {
                            renderedWindow: {
                                anchorKey: g,
                                count: d.endIndex - d.startIndex,
                                viewportHeightPx: e
                            },
                            turnHeightsByKey: {
                                ...f
                            }
                        }
                    }(bQ.current, bT.current))
                }
            }, aE = [bh], aX[184] = bh, aX[185] = aD, aX[186] = aE) : (aD = aX[185], aE = aX[186]), (0, k.useLayoutEffect)(aD, aE), aX[187] !== a2 || aX[188] !== by || aX[189] !== bz || aX[190] !== aZ ? (aF = by < 0 ? void 0 : a2?.(aZ[by]) ?? bz, aX[187] = a2, aX[188] = by, aX[189] = bz, aX[190] = aZ, aX[191] = aF) : aF = aX[191];
            let cG = aF;
            aX[192] !== cG || aX[193] !== bC || aX[194] !== bS || aX[195] !== bI || aX[196] !== bE ? (aG = () => {
                if (null == bI || null == cG) return;
                let a = a => {
                    let b = bC.getScrollElement(),
                        c = a.target;
                    if (null == b || b.scrollTop <= 0 || !(c instanceof Element)) return;
                    let d = c.getBoundingClientRect(),
                        e = b.getBoundingClientRect().top;
                    d.bottom <= e || (c.hasAttribute("data-turn-transcript") && (bC.shouldFollowContentGrowth() || d.top < e) ? bS(0) : bS(Math.max(0, (0, m.b)(bI.getBoundingClientRect().height, bE) - (0, r.b)(b))))
                };
                return bI.addEventListener(p.a, a), () => {
                    bI.removeEventListener(p.a, a), bS(0)
                }
            }, aH = [cG, bC, bS, bI, bE], aX[192] = cG, aX[193] = bC, aX[194] = bS, aX[195] = bI, aX[196] = bE, aX[197] = aG, aX[198] = aH) : (aG = aX[197], aH = aX[198]), (0, k.useLayoutEffect)(aG, aH);
            let {
                addScrollListener: cH,
                addUserScrollListener: cI,
                getScrollElement: cJ
            } = bC;
            aX[199] !== cH || aX[200] !== cI || aX[201] !== a9 || aX[202] !== cJ || aX[203] !== bD || aX[204] !== cF || aX[205] !== bs || aX[206] !== co || aX[207] !== cr || aX[208] !== cj || aX[209] !== ce || aX[210] !== bC || aX[211] !== bS || aX[212] !== bI || aX[213] !== cq ? (aI = () => {
                let a = cJ();
                if (null == a) return;
                let b = () => (null == bU.current && (bU.current = a.clientHeight), bU.current || bT.current.viewportHeightPx || 800),
                    c = cH(a => {
                        cq(F(a, E(a9)), b()), cj(a)
                    }),
                    d = cI((a, c) => {
                        cl.current = null;
                        let d = bR.current;
                        if (d > 0) {
                            let b = d - a;
                            bS(b > b5.current.totalHeightPx && a > 0 ? b : 0)
                        }
                        cr(F(a, E(a9)), b(), null != c && a > c)
                    }),
                    e = new ResizeObserver(c => {
                        let d = c.find(b => b.target === a);
                        if (null != d) {
                            let {
                                height: a
                            } = (0, o.a)(d);
                            bU.current = a, cq(bT.current.distanceFromBottomPx, a), ce(), cj(bC.getLastScrollDistanceFromBottomPx())
                        }
                        cF(b()), co(), null != d && bD?.()
                    });
                return e.observe(a), bs && null != bI && e.observe(bI), () => {
                    c(), d(), e.disconnect()
                }
            }, aJ = [cH, cI, a9, cJ, bD, cF, co, bs, cr, cj, ce, bC, bS, bI, cq], aX[199] = cH, aX[200] = cI, aX[201] = a9, aX[202] = cJ, aX[203] = bD, aX[204] = cF, aX[205] = bs, aX[206] = co, aX[207] = cr, aX[208] = cj, aX[209] = ce, aX[210] = bC, aX[211] = bS, aX[212] = bI, aX[213] = cq, aX[214] = aI, aX[215] = aJ) : (aI = aX[214], aJ = aX[215]), (0, k.useLayoutEffect)(aI, aJ), aX[216] !== cx || aX[217] !== a9 || aX[218] !== bK || aX[219] !== bO || aX[220] !== bC || aX[221] !== bN || aX[222] !== cs || aX[223] !== cq || aX[224] !== bE ? (aK = () => {
                if (null == bO || bN.getSnapshot() !== bO || null != b1.current) return;
                let a = bC.getScrollElement();
                if (null == a) return;
                let b = new Map;
                for (let [a, c] of bW.current) {
                    let d = (0, m.b)(c.getBoundingClientRect().height, bE);
                    d > 0 && b.set(a, {
                        element: c,
                        heightPx: d
                    })
                }
                if (cx(b, !1) || null != b$.current) return;
                let c = bW.current.get(bO.turnKey),
                    d = null == c ? null : bO.getTargetElement?.(c) ?? c,
                    e = null == c || null == d ? function(a) {
                        let {
                            align: b,
                            layout: c,
                            turnKey: d,
                            viewportHeightPx: e
                        } = a;
                        if ("center" === b) return (0, u.e)({
                            layout: c,
                            turnKey: d,
                            viewportHeightPx: e
                        });
                        let f = c.turnIndexByKey.get(d);
                        return null == f ? null : Math.max(0, (0, u.c)(c, f) - e + 10)
                    }({
                        align: bO.align,
                        layout: bK,
                        turnKey: bO.turnKey,
                        viewportHeightPx: a.clientHeight
                    }) : function(a) {
                        let {
                            align: b,
                            layout: c,
                            targetElement: d,
                            turnElement: e,
                            turnKey: f,
                            windowZoom: g,
                            viewportHeightPx: h
                        } = a, i = c.turnIndexByKey.get(f);
                        if (null == i) return null;
                        let j = e.getBoundingClientRect(),
                            k = d.getBoundingClientRect(),
                            l = (0, m.b)(k.top - j.top, g),
                            n = (0, m.b)(k.height, g),
                            o = (0, u.c)(c, i) - l;
                        return "top" === b ? Math.max(0, o - h + 10) : Math.max(0, o - n / 2 - h / 2)
                    }({
                        align: bO.align,
                        layout: bK,
                        targetElement: d,
                        turnElement: c,
                        turnKey: bO.turnKey,
                        viewportHeightPx: a.clientHeight,
                        windowZoom: bE
                    });
                if (null == e) return void queueMicrotask(() => cs(bO));
                let f = "top" === bO.align && null != d ? Math.max(0, bC.getLastScrollDistanceFromBottomPx() - (0, m.b)(d.getBoundingClientRect().top - (0, r.d)(a, bE), bE) + 10) : e + E(a9);
                bC.scrollToDistanceFromBottomPx(f, "instant", "user"), cq(Math.max(0, f - E(a9)), a.clientHeight), queueMicrotask(() => cs(bO))
            }, aX[216] = cx, aX[217] = a9, aX[218] = bK, aX[219] = bO, aX[220] = bC, aX[221] = bN, aX[222] = cs, aX[223] = cq, aX[224] = bE, aX[225] = aK) : aK = aX[225], aX[226] !== cx || aX[227] !== a9 || aX[228] !== bK || aX[229] !== b2 || aX[230] !== bO || aX[231] !== bC || aX[232] !== bN || aX[233] !== cs || aX[234] !== cq || aX[235] !== bE ? (aL = [cx, bK, b2, bO, bC, bN, cs, a9, cq, bE], aX[226] = cx, aX[227] = a9, aX[228] = bK, aX[229] = b2, aX[230] = bO, aX[231] = bC, aX[232] = bN, aX[233] = cs, aX[234] = cq, aX[235] = bE, aX[236] = aL) : aL = aX[236], (0, k.useLayoutEffect)(aK, aL), aX[237] !== a9 || aX[238] !== cb || aX[239] !== cm || aX[240] !== cc || aX[241] !== be || aX[242] !== bO || aX[243] !== br || aX[244] !== aZ || aX[245] !== bC || aX[246] !== cq ? (aM = () => {
                var a;
                if (null != b$.current) return;
                let b = b7.current,
                    c = cb(),
                    d = b9.current ?? c;
                b9.current = null, b7.current = c;
                let e = b8.current !== aZ;
                if (b8.current = aZ, null != bO || !br && b.turnKeys.at(-1) !== d.turnKeys.at(-1) || b === d && !e) return;
                let f = E(a9),
                    g = bC.getLastScrollDistanceFromBottomPx({
                        includePendingUserScroll: !0
                    });
                if (null != (be?.() ?? null)) return;
                if (bC.shouldFollowContentGrowth() && (a = g, 0 === f && a <= 24)) return void bC.compensateScrollToDistanceFromBottomPx(0);
                if (b === d) return;
                let h = B({
                    focusedKey: br && null != cl.current ? cm(bC.getScrollElement()) : null,
                    historyAnchorRef: br ? cl : null,
                    distanceFromBottomPx: cc(g),
                    preferLatestVisibleRow: g < f,
                    layout: b,
                    measuredContentKeys: ck.current,
                    nextLayout: d,
                    viewportHeightPx: bT.current.viewportHeightPx
                });
                if (null == h) return;
                let i = b.turnIndexByKey.get(h);
                if (br && d !== c && c.turnKeys.length > b.turnKeys.length && null != i && b.topOffsetsPx[i] === c.topOffsetsPx[i] && b.turnKeys.every((a, b) => a === c.turnKeys[b])) return;
                let j = bC.getUnroundedScrollDistanceFromBottomPx(g),
                    k = (0, u.d)({
                        anchorKey: h,
                        distanceFromBottomPx: j,
                        nextLayout: d,
                        previousLayout: b
                    });
                null != k && (k !== j || b.totalHeightPx !== d.totalHeightPx) && (cq(F(k, f), bT.current.viewportHeightPx), bC.compensateScrollToDistanceFromBottomPx(k, null == cl.current ? void 0 : "turn-resize", cl.current))
            }, aX[237] = a9, aX[238] = cb, aX[239] = cm, aX[240] = cc, aX[241] = be, aX[242] = bO, aX[243] = br, aX[244] = aZ, aX[245] = bC, aX[246] = cq, aX[247] = aM) : aM = aX[247], aX[248] !== a9 || aX[249] !== cb || aX[250] !== cm || aX[251] !== cc || aX[252] !== be || aX[253] !== bK || aX[254] !== bO || aX[255] !== br || aX[256] !== aZ || aX[257] !== bC || aX[258] !== cq ? (aN = [a9, cb, cm, cc, be, bK, bO, br, aZ, bC, cq], aX[248] = a9, aX[249] = cb, aX[250] = cm, aX[251] = cc, aX[252] = be, aX[253] = bK, aX[254] = bO, aX[255] = br, aX[256] = aZ, aX[257] = bC, aX[258] = cq, aX[259] = aN) : aN = aX[259], (0, k.useLayoutEffect)(aM, aN), aX[260] !== bO || aX[261] !== cr || aX[262] !== ce || aX[263] !== cq ? (aO = () => {
                null == bO && null == b$.current && (cq(bT.current.distanceFromBottomPx, bT.current.viewportHeightPx), ce(), cr(bT.current.distanceFromBottomPx, bT.current.viewportHeightPx, !1))
            }, aX[260] = bO, aX[261] = cr, aX[262] = ce, aX[263] = cq, aX[264] = aO) : aO = aX[264], aX[265] !== bK || aX[266] !== bO || aX[267] !== cr || aX[268] !== ce || aX[269] !== cq ? (aP = [bK, bO, cr, ce, cq], aX[265] = bK, aX[266] = bO, aX[267] = cr, aX[268] = ce, aX[269] = cq, aX[270] = aP) : aP = aX[270], (0, k.useLayoutEffect)(aO, aP), aX[271] !== cn || aX[272] !== co || aX[273] !== cf ? (aQ = () => {
                cn(), co(), cf()
            }, aX[271] = cn, aX[272] = co, aX[273] = cf, aX[274] = aQ) : aQ = aX[274], (0, k.useLayoutEffect)(aQ), aX[275] !== a7 ? (aR = (0, i.b)("relative shrink-0", a7), aX[275] = a7, aX[276] = aR) : aR = aX[276], aX[277] !== bK.totalHeightPx ? (aS = {
                height: bK.totalHeightPx
            }, aX[277] = bK.totalHeightPx, aX[278] = aS) : aS = aX[278], aX[279] !== ch ? (aT = (0, d.jsx)(h.b, {
                name: "conversation rows",
                active: ch
            }), aX[279] = ch, aX[280] = aT) : aT = aX[280];
            let cK = `${bK.topOffsetsPx[cd.startIndex]??0}px`;
            aX[281] !== cK ? (aU = {
                marginTop: cK
            }, aX[281] = cK, aX[282] = aU) : aU = aX[282];
            let cL = cg.map(a => {
                let {
                    entry: b,
                    turnIndex: c
                } = a, e = bB[c].turnKey;
                return (0, d.jsx)(y, {
                    entry: b,
                    turnKey: e,
                    minHeightPx: bB[c].minHeightPx,
                    reservedHeightPx: a_(b).minHeightPx,
                    gapBeforePx: c === cd.startIndex ? 0 : bK.gapsBeforePx[c] ?? 0,
                    retainedTopPx: c < cd.startIndex || c >= cd.endIndex ? bK.topOffsetsPx[c] : void 0,
                    latestTurnFollowContentRef: c === bB.length - 1 && null != bb ? cC : void 0,
                    boundaryBefore: a1?.[c],
                    boundaryAfter: a1?.[c + 1],
                    RowComponent: a4,
                    measuredHeightPx: null == bG[e] ? void 0 : bK.heightsPx[c],
                    constrainedHeightPx: c !== bB.length - 1 && bO?.turnKey !== e && null == bG[e] ? bK.heightsPx[c] : void 0,
                    observeTurnElement: cA
                }, e)
            });
            return aX[283] !== aU || aX[284] !== cL ? (aV = (0, d.jsx)("div", {
                className: "flex flex-col",
                style: aU,
                children: cL
            }), aX[283] = aU, aX[284] = cL, aX[285] = aV) : aV = aX[285], aX[286] !== ca || aX[287] !== aR || aX[288] !== aS || aX[289] !== aT || aX[290] !== aV ? (aW = (0, d.jsxs)("div", {
                ref: ca,
                className: aR,
                style: aS,
                children: [aT, aV]
            }), aX[286] = ca, aX[287] = aR, aX[288] = aS, aX[289] = aT, aX[290] = aV, aX[291] = aW) : aW = aX[291], aW
        }

        function w(a, b) {
            return a.turnIndex - b.turnIndex
        }

        function x() {
            return new H
        }
        let y = (0, k.memo)(function(a) {
            let b, c, f, h, j, l, m, n, o, p = (0, e.c)(34),
                {
                    entry: q,
                    turnKey: r,
                    minHeightPx: s,
                    gapBeforePx: t,
                    latestTurnFollowContentRef: u,
                    RowComponent: v,
                    boundaryBefore: w,
                    boundaryAfter: x,
                    constrainedHeightPx: y,
                    measuredHeightPx: z,
                    reservedHeightPx: A,
                    retainedTopPx: B,
                    observeTurnElement: C
                } = a,
                D = (0, k.useRef)(null);
            p[0] !== C || p[1] !== r ? (b = () => C(r, D.current), p[0] = C, p[1] = r, p[2] = b) : b = p[2], p[3] !== C || p[4] !== A || p[5] !== r ? (c = [C, A, r], p[3] = C, p[4] = A, p[5] = r, p[6] = c) : c = p[6], (0, k.useLayoutEffect)(b, c);
            let E = null != B && "absolute inset-x-0",
                F = null != y && "overflow-hidden";
            p[7] !== E || p[8] !== F ? (f = (0, i.b)(E, F), p[7] = E, p[8] = F, p[9] = f) : f = p[9];
            let G = null != z ? "size" : void 0,
                H = null != z ? "clip" : void 0,
                I = z ?? y,
                J = null == B ? t : 0,
                K = null == z ? s : void 0;
            return p[10] !== B || p[11] !== K || p[12] !== G || p[13] !== H || p[14] !== I || p[15] !== J ? (h = {
                contain: G,
                overflowY: H,
                height: I,
                marginTop: J,
                minHeight: K,
                top: B
            }, p[10] = B, p[11] = K, p[12] = G, p[13] = H, p[14] = I, p[15] = J, p[16] = h) : h = p[16], p[17] !== x || p[18] !== w ? (j = {
                before: w,
                after: x
            }, p[17] = x, p[18] = w, p[19] = j) : j = p[19], p[20] !== v || p[21] !== q || p[22] !== u ? (l = (0, d.jsx)(v, {
                entry: q,
                latestTurnFollowContentRef: u
            }), p[20] = v, p[21] = q, p[22] = u, p[23] = l) : l = p[23], p[24] !== j || p[25] !== l ? (m = (0, d.jsx)(g.a, {
                value: j,
                children: l
            }), p[24] = j, p[25] = l, p[26] = m) : m = p[26], p[27] !== m || p[28] !== r ? (n = (0, d.jsx)("div", {
                ref: D,
                className: "[&_[data-virtualized-turn-content]]:[content-visibility:visible]",
                "data-turn-key": r,
                children: m
            }), p[27] = m, p[28] = r, p[29] = n) : n = p[29], p[30] !== h || p[31] !== n || p[32] !== f ? (o = (0, d.jsx)("div", {
                "data-virtualized-turn": "",
                className: f,
                style: h,
                children: n
            }), p[30] = h, p[31] = n, p[32] = f, p[33] = o) : o = p[33], o
        });

        function z(a) {
            let {
                current: b,
                distanceFromBottomPx: c,
                layout: d,
                viewportHeightPx: e
            } = a, f = Math.min(c, d.totalHeightPx), g = A(d, f, e, b.renderedRange);
            return b.distanceFromBottomPx === f && b.viewportHeightPx === e && b.renderedRange.startIndex === g.startIndex && b.renderedRange.endIndex === g.endIndex && D(b.turnKeys, d.turnKeys) ? b : {
                distanceFromBottomPx: f,
                renderedRange: g,
                turnKeys: d.turnKeys,
                viewportHeightPx: e
            }
        }

        function A(a, b, c, d) {
            var e, f;
            let g = {
                    layout: a,
                    distanceFromBottomPx: b,
                    viewportHeightPx: c
                },
                h = (0, u.f)({
                    ...g,
                    overscanCount: 0,
                    overscanPx: c
                }),
                i = (0, u.f)({
                    ...g,
                    overscanCount: 1
                }),
                j = {
                    startIndex: Math.max(i.startIndex, h.startIndex),
                    endIndex: Math.min(i.endIndex, h.endIndex)
                };
            if (null != d && j.endIndex === d.endIndex && d.endIndex === a.turnKeys.length && j.startIndex > d.startIndex) {
                let b = (0, u.f)({
                    ...g,
                    distanceFromBottomPx: a.heightsPx.at(-1) ?? 0,
                    overscanCount: 1
                });
                return {
                    startIndex: Math.max(d.startIndex, Math.min(j.startIndex, b.startIndex)),
                    endIndex: j.endIndex
                }
            }
            return null != d && (e = d, f = j, e.startIndex <= f.startIndex && e.endIndex >= f.endIndex) ? {
                startIndex: Math.max(d.startIndex, h.startIndex),
                endIndex: Math.min(d.endIndex, h.endIndex)
            } : j
        }

        function B(a) {
            let {
                focusedKey: b,
                historyAnchorRef: c,
                distanceFromBottomPx: d,
                preferLatestVisibleRow: e,
                layout: f,
                measuredContentKeys: g,
                nextLayout: h,
                viewportHeightPx: i
            } = a, j = c?.current;
            if (null != c && (c.current = null), null != b && f.turnIndexByKey.has(b) && h.turnIndexByKey.has(b)) return b;
            let k = (0, u.f)({
                    distanceFromBottomPx: d,
                    layout: f,
                    overscanCount: 0,
                    viewportHeightPx: Math.max(0, i + Math.min(0, d))
                }),
                l = null,
                m = !1;
            for (let a = k.startIndex; a < k.endIndex; a += 1) {
                let b = f.turnKeys[a];
                if (null != b && !f.gapKeys.has(b) && (!f.collapseEmptyRows || (f.heightsPx[a] ?? 0) > 0) && h.turnIndexByKey.has(b) && (0, u.b)(f, a) < d + i && (0, u.c)(f, a) > d) {
                    if (!g.has(b)) {
                        m = !0;
                        continue
                    }
                    if (e) l = b;
                    else if ((null == l || b === j) && (l = b, null != c && m && (c.current = b), null == j || b === j)) return b
                }
            }
            return l
        }

        function C() {
            let a = [];
            return (b, c, d, e, f, g) => {
                let h = (a, c) => null != g && c === b.length - 1 ? Math.max(a ?? 0, g) : a;
                return (b.length !== a.length || b.some((b, g) => {
                    let i = a[g],
                        j = d(b);
                    return c(b) !== i.turnKey || (e?.[g] ?? j.gapBeforePx) !== i.gapBeforePx || j.estimatedHeightPx !== i.estimatedHeightPx || h(j.minHeightPx, g) !== i.minHeightPx || (f?.(b) ?? !0) !== i.anchorEligible
                })) && (a = b.map((a, b) => {
                    let g = d(a);
                    return {
                        turnKey: c(a),
                        gapBeforePx: e?.[b] ?? g.gapBeforePx,
                        estimatedHeightPx: g.estimatedHeightPx,
                        minHeightPx: h(g.minHeightPx, b),
                        anchorEligible: f?.(a) ?? !0
                    }
                })), a
            }
        }

        function D(a, b) {
            return a === b || a.length === b.length && a.every((a, c) => a === b[c])
        }

        function E(a) {
            return Math.max(0, a?.() ?? 0)
        }

        function F(a, b) {
            return Math.max(0, a - b)
        }

        function G(a) {
            let b = {};
            return Object.setPrototypeOf(b, null), Object.assign(b, a)
        }
        class H {
            request = null;
            listeners = new Set;
            getSnapshot = () => this.request;
            subscribe = a => (this.listeners.add(a), () => {
                this.listeners.delete(a)
            });
            replace(a) {
                if (this.request === a) return;
                let b = this.request;
                for (let c of (this.request = a, b?.complete(), this.listeners)) c()
            }
        }

        function I(a) {
            let b, c, h, i, j = (0, e.c)(11),
                {
                    rows: k,
                    getRowBoundary: l,
                    compactUserPrompts: m
                } = a;
            j[0] !== l || j[1] !== k ? (b = l && k.map((a, b) => b > 0 ? l(k[b - 1], a) : void 0), j[0] = l, j[1] = k, j[2] = b) : b = j[2];
            let n = b;
            if (j[3] !== n || j[4] !== m || j[5] !== a || j[6] !== k) {
                h = Symbol.for("react.early_return_sentinel");
                a: {
                    let b = (0, f.b)(n, m);
                    if ("virtualized" === a.mode) {
                        h = (0, d.jsx)(v, {
                            ...a,
                            boundaries: n,
                            gapsBeforePx: b
                        });
                        break a
                    }
                    c = k.map((c, e) => (0, d.jsx)(g.a, {
                        value: {
                            before: n?.[e],
                            after: n?.[e + 1]
                        },
                        children: a.renderRow(c, e, b?.[e])
                    }, a.getRowKey(c)))
                }
                j[3] = n, j[4] = m, j[5] = a, j[6] = k, j[7] = c, j[8] = h
            } else c = j[7], h = j[8];
            return h !== Symbol.for("react.early_return_sentinel") ? h : (j[9] !== c ? (i = (0, d.jsx)(d.Fragment, {
                children: c
            }), j[9] = c, j[10] = i) : i = j[10], i)
        }
    }),
    g3o5: (function(a, b, c) {
        var d = c("SZCv"),
            e = c.n(d),
            f = c("Q840"),
            g = c("OWtl");
        let h = (0, f.u)(g.a, () => new Map),
            i = (0, f.c)(g.a, a => {
                let {
                    get: b
                } = a;
                return [...b(h).keys()]
            }, {
                isEqual: e()
            });
        c.d(b, {}, {
            a: function(a, b) {
                return a.set(h, a => new Map(a).set(b, (a.get(b) ?? 0) + 1)), () => {
                    a.set(h, a => {
                        let c = new Map(a),
                            d = (c.get(b) ?? 1) - 1;
                        return 0 === d ? c.delete(b) : c.set(b, d), c
                    })
                }
            },
            b: i
        })
    })
};