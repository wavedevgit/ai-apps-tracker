export const __rspack_esm_ids = [176742];
export const __webpack_modules__ = {
    PTqL: (function(a, b) {
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
            k = c("PTqL");

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
            l = c("BhsD"),
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
            m = c("pnPL"),
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
            j = c("pnPL"),
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
            let b, c, f, g, v, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW = (0, e.c)(288),
                {
                    collapseEmptyRows: aX,
                    rows: aY,
                    getRowKey: aZ,
                    getRowGeometry: a$,
                    gapsBeforePx: a_,
                    boundaries: a0,
                    getRowCollapseScopeKey: a1,
                    isRowAnchorEligible: a2,
                    renderRow: a3,
                    onApiChange: a4,
                    onVisibleContentReady: a5,
                    className: a6,
                    gapPx: a7,
                    getBottomScrollPaddingPx: a8,
                    isSubmitPlacementAnimating: a9,
                    onLatestTurnHeightChange: ba,
                    preserveMeasuredTurnViewport: bb,
                    preserveUnderfilledViewport: bc,
                    getPendingRestoreScrollDistanceFromBottomPx: bd,
                    restoreScrollDistanceFromBottomPx: be,
                    initialRestoreState: bf,
                    onRestoreStateChange: bg,
                    onViewportChange: bh,
                    onViewportRowsChange: bi,
                    latestTurnSynchronousMeasurementKey: bj,
                    layoutReadyTurnKey: bk,
                    onTurnLayoutReady: bl,
                    synchronousMeasurementTurnKey: bm,
                    retainedTurnKeys: bn
                } = a,
                bo = void 0 !== aX && aX,
                bp = void 0 === a7 ? 12 : a7,
                bq = void 0 !== bb && bb,
                br = void 0 !== bc && bc,
                bs = (0, j.z)(s.b);
            aW[0] !== bn ? (b = bn ?? [], aW[0] = bn, aW[1] = b) : b = aW[1];
            let bt = [...b, ...bs],
                [bu, bv] = (0, k.useState)(null),
                [bw] = (0, k.useState)(C),
                bx = aY.length - 1;
            aW[2] !== aZ || aW[3] !== bx || aW[4] !== aY ? (c = bx < 0 ? void 0 : aZ(aY[bx]), aW[2] = aZ, aW[3] = bx, aW[4] = aY, aW[5] = c) : c = aW[5];
            let by = c,
                bz = br && null != bu && bu.turnKey === by ? bu.viewportHeightPx - bu.heightOutsideTurnPx : void 0;
            aW[6] !== bz || aW[7] !== a_ || aW[8] !== bw || aW[9] !== a$ || aW[10] !== aZ || aW[11] !== a2 || aW[12] !== aY ? (f = bw(aY, aZ, a$, a_, a2, bz), aW[6] = bz, aW[7] = a_, aW[8] = bw, aW[9] = a$, aW[10] = aZ, aW[11] = a2, aW[12] = aY, aW[13] = f) : f = aW[13];
            let bA = f,
                bB = (0, q.b)(),
                {
                    notifyLayoutResize: bC
                } = bB,
                bD = (0, m.c)(),
                bE = bD * (globalThis.devicePixelRatio ?? 1);
            aW[14] !== bf?.turnHeightsByKey ? (g = () => G(bf?.turnHeightsByKey), aW[14] = bf?.turnHeightsByKey, aW[15] = g) : g = aW[15];
            let [bF, bG] = (0, k.useState)(g), [bH, bI] = (0, k.useState)(null);
            aW[16] !== bo || aW[17] !== bA || aW[18] !== bp || aW[19] !== bE || aW[20] !== bF ? (v = (0, u.a)({
                collapseEmptyRows: bo,
                entries: bA,
                gapPx: bp,
                measuredHeightsByKey: bF,
                pixelScale: bE
            }), aW[16] = bo, aW[17] = bA, aW[18] = bp, aW[19] = bE, aW[20] = bF, aW[21] = v) : v = aW[21];
            let bJ = v;
            aW[22] !== a8 || aW[23] !== bf || aW[24] !== bJ || aW[25] !== bB ? (H = () => {
                var a, b, c;
                let d, e, f, g, h = E(a8);
                return a = bJ, b = F(bB.getLastScrollDistanceFromBottomPx(), h), c = bf, d = c?.renderedWindow, e = d?.viewportHeightPx ?? 800, f = Math.min(b, a.totalHeightPx), g = A(a, f, e), {
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
            }, aW[22] = a8, aW[23] = bf, aW[24] = bJ, aW[25] = bB, aW[26] = H) : H = aW[26];
            let [bK, bL] = (0, k.useState)(H), [bM] = (0, k.useState)(x), bN = (0, k.useSyncExternalStore)(bM.subscribe, bM.getSnapshot, bM.getSnapshot), bO = (0, k.useRef)(null), bP = (0, k.useRef)(bF), bQ = (0, k.useRef)(0);
            aW[27] === Symbol.for("react.memo_cache_sentinel") ? (I = a => {
                bQ.current = a;
                let b = bO.current;
                null != b && (b.style.minHeight = a > 0 ? `${a}px` : "")
            }, aW[27] = I) : I = aW[27];
            let bR = (0, t.a)(I),
                bS = (0, k.useRef)(bK),
                bT = (0, k.useRef)(null);
            aW[28] === Symbol.for("react.memo_cache_sentinel") ? (J = new Map, aW[28] = J) : J = aW[28];
            let bU = (0, k.useRef)(J);
            aW[29] === Symbol.for("react.memo_cache_sentinel") ? (K = new Map, aW[29] = K) : K = aW[29];
            let bV = (0, k.useRef)(K);
            aW[30] === Symbol.for("react.memo_cache_sentinel") ? (L = new WeakSet, aW[30] = L) : L = aW[30];
            let bW = (0, k.useRef)(L);
            aW[31] === Symbol.for("react.memo_cache_sentinel") ? (M = new Map, aW[31] = M) : M = aW[31];
            let bX = (0, k.useRef)(M);
            aW[32] === Symbol.for("react.memo_cache_sentinel") ? (N = new Map, aW[32] = N) : N = aW[32];
            let bY = (0, k.useRef)(N),
                bZ = (0, k.useRef)(null),
                b$ = (0, k.useRef)(null),
                b_ = (0, k.useRef)(0),
                b0 = (0, k.useRef)(null),
                [b1, b2] = (0, k.useState)(null),
                b3 = (0, k.useRef)(!1),
                b4 = (0, k.useRef)(bJ),
                b5 = (0, k.useRef)(bJ),
                b6 = (0, k.useRef)(bJ),
                b7 = (0, k.useRef)(aY),
                b8 = (0, k.useRef)(null);
            aW[33] !== bF ? (O = () => {
                bF !== bP.current && bG(bP.current)
            }, aW[33] = bF, aW[34] = O) : O = aW[34], aW[35] !== bo || aW[36] !== bA || aW[37] !== bp || aW[38] !== bE || aW[39] !== bF ? (P = [bo, bA, bp, bE, bF], aW[35] = bo, aW[36] = bA, aW[37] = bp, aW[38] = bE, aW[39] = bF, aW[40] = P) : P = aW[40], (0, k.useLayoutEffect)(O, P), aW[41] === Symbol.for("react.memo_cache_sentinel") ? (Q = a => {
                bO.current = a, bI(a)
            }, aW[41] = Q) : Q = aW[41];
            let b9 = (0, t.a)(Q);
            aW[42] !== bo || aW[43] !== bA || aW[44] !== bp || aW[45] !== bJ || aW[46] !== bE || aW[47] !== bF ? (R = () => {
                if (b5.current !== bJ) {
                    b5.current = bJ, b4.current = bF === bP.current ? bJ : (0, u.a)({
                        collapseEmptyRows: bo,
                        entries: bA,
                        gapPx: bp,
                        measuredHeightsByKey: bP.current,
                        pixelScale: bE
                    });
                    let a = bO.current;
                    null != a && (a.style.height = `${b4.current.totalHeightPx}px`)
                }
                return b4.current
            }, aW[42] = bo, aW[43] = bA, aW[44] = bp, aW[45] = bJ, aW[46] = bE, aW[47] = bF, aW[48] = R) : R = aW[48];
            let ca = (0, t.a)(R);
            aW[49] !== a8 || aW[50] !== bB || aW[51] !== bD ? (S = a => {
                let b = bB.getScrollElement(),
                    c = bO.current,
                    d = b?.firstElementChild;
                return null == c || null == d ? a - E(a8) : a - (0, m.b)(d.getBoundingClientRect().bottom - c.getBoundingClientRect().bottom, bD)
            }, aW[49] = a8, aW[50] = bB, aW[51] = bD, aW[52] = S) : S = aW[52];
            let cb = (0, t.a)(S),
                cc = bK.renderedRange;
            if (null != bN) {
                let a = (0, u.e)({
                    layout: bJ,
                    turnKey: bN.turnKey,
                    viewportHeightPx: bK.viewportHeightPx
                });
                null != a && (cc = A(bJ, a, bK.viewportHeightPx))
            } else if (!D(bK.turnKeys, bJ.turnKeys)) {
                let a = bK.turnKeys[bK.renderedRange.startIndex];
                null != a && (cc = (0, u.g)({
                    anchorKey: a,
                    layout: bJ,
                    previousRange: cc
                }) ?? A(bJ, bK.distanceFromBottomPx, bK.viewportHeightPx))
            }
            aW[53] !== be ? (T = () => {
                null == bZ.current && be?.()
            }, aW[53] = be, aW[54] = T) : T = aW[54];
            let cd = (0, t.a)(T);
            aW[55] !== bA.length || aW[56] !== a5 || aW[57] !== bB || aW[58] !== bM ? (U = () => {
                null == a5 || b3.current || null != bZ.current || null != b0.current || bX.current.size > 0 || null != bM.getSnapshot() || null == bB.getScrollElement() || null == bO.current || bA.length > 0 && 0 === bV.current.size || (b3.current = !0, a5())
            }, aW[55] = bA.length, aW[56] = a5, aW[57] = bB, aW[58] = bM, aW[59] = U) : U = aW[59];
            let ce = (0, t.a)(U),
                cf = aY.slice(cc.startIndex, cc.endIndex).map((a, b) => ({
                    entry: a,
                    turnIndex: cc.startIndex + b
                })),
                cg = bA.length > 0 && 0 === cf.length;
            for (let a of new Set(bt)) {
                let b = bJ.turnIndexByKey.get(a);
                null == b || b >= cc.startIndex && b < cc.endIndex || cf.push({
                    entry: aY[b],
                    turnIndex: b
                })
            }
            cf.sort(w), aW[60] === Symbol.for("react.memo_cache_sentinel") ? (V = a => bV.current.get(a), aW[60] = V) : V = aW[60];
            let ch = (0, t.a)(V),
                ci = (0, t.a)(a => {
                    let b = a <= 24;
                    bi?.(null == bM.getSnapshot() ? function(a, b, c, d) {
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
                    }(bt, bJ, b ? 0 : F(a, E(a8)), bS.current.viewportHeightPx + 24 * !!b) : null, ch, b)
                });
            aW[61] !== ci || aW[62] !== bB ? (W = () => {
                ci(bB.getLastScrollDistanceFromBottomPx())
            }, aW[61] = ci, aW[62] = bB, aW[63] = W) : W = aW[63], aW[64] !== bJ || aW[65] !== bi || aW[66] !== bN || aW[67] !== bK.renderedRange || aW[68] !== bK.viewportHeightPx || aW[69] !== ci || aW[70] !== bs || aW[71] !== bn || aW[72] !== aY || aW[73] !== bB ? (X = [bJ, bi, bN, bK.renderedRange, bK.viewportHeightPx, ci, bs, bn, aY, bB], aW[64] = bJ, aW[65] = bi, aW[66] = bN, aW[67] = bK.renderedRange, aW[68] = bK.viewportHeightPx, aW[69] = ci, aW[70] = bs, aW[71] = bn, aW[72] = aY, aW[73] = bB, aW[74] = X) : X = aW[74], (0, k.useLayoutEffect)(W, X), aW[75] === Symbol.for("react.memo_cache_sentinel") ? (Y = new Set, aW[75] = Y) : Y = aW[75];
            let cj = (0, k.useRef)(Y);
            aW[76] === Symbol.for("react.memo_cache_sentinel") ? (Z = () => {
                if (null != bZ.current) return;
                let a = cj.current;
                for (let [b, c] of(a.clear(), bV.current)) bW.current.has(c) && a.add(b)
            }, aW[76] = Z) : Z = aW[76];
            let ck = (0, t.a)(Z);
            aW[77] !== bk || aW[78] !== bl || aW[79] !== bB ? ($ = () => {
                if (null == bk || null == bl || null != bZ.current || bX.current.size > 0) return;
                let a = bB.getScrollElement(),
                    b = bV.current.get(bk);
                null != b && bW.current.has(b) && !((bP.current[bk] ?? 0) <= 0) && null != a && !(a.clientHeight <= 0) && bl(bk, b)
            }, aW[77] = bk, aW[78] = bl, aW[79] = bB, aW[80] = $) : $ = aW[80];
            let cl = (0, t.a)($);
            aW[81] !== a8 || aW[82] !== bd || aW[83] !== a9 || aW[84] !== ba || aW[85] !== bq || aW[86] !== cd || aW[87] !== bB || aW[88] !== bM || aW[89] !== bR ? (_ = (a, b) => {
                let c = E(a8);
                if (null != a.latestTurnHeightChange && (ba?.(a.latestTurnHeightChange), bQ.current > 0)) {
                    let a = c - E(a8);
                    a > 0 && bR(bQ.current + a)
                }
                if (a.restoreScrollDistanceFromBottom) cd();
                else if (null != a.scrollDistanceFromBottomPx) {
                    var d, e;
                    let f, g = a.scrollDistanceFromBottomPx,
                        h = b?.previous ?? b6.current,
                        i = b?.estimated ?? b8.current,
                        j = b4.current;
                    bq && c > 0 && null != a.latestTurnHeightChange && null != i && i.totalHeightPx !== h.totalHeightPx && null == bM.getSnapshot() && bd?.() == null && (d = h, (f = (e = j).turnKeys.length - 1) > 0 && d.turnKeys.length === e.turnKeys.length && d.turnKeys[f] !== e.turnKeys[f] && d.turnKeys.every((a, b) => b === f || a === e.turnKeys[b] && d.topOffsetsPx[b] === e.topOffsetsPx[b] && d.heightsPx[b] === e.heightsPx[b])) && (g = bB.getUnroundedScrollDistanceFromBottomPx(bB.getLastScrollDistanceFromBottomPx()) + j.totalHeightPx - h.totalHeightPx, null != b8.current && (b8.current = h)), bB.compensateScrollToDistanceFromBottomPx(g + E(a8) - c, null != a.afterMeasure || null != bM.getSnapshot() || bd?.() != null || a9?.() ? void 0 : "turn-resize")
                }
                a.afterMeasure?.()
            }, aW[81] = a8, aW[82] = bd, aW[83] = a9, aW[84] = ba, aW[85] = bq, aW[86] = cd, aW[87] = bB, aW[88] = bM, aW[89] = bR, aW[90] = _) : _ = aW[90];
            let cm = (0, t.a)(_);
            aW[91] !== ca ? (aa = (a, b) => {
                if (null != bZ.current || b <= 0) return;
                let c = bS.current,
                    d = z({
                        current: c,
                        distanceFromBottomPx: a,
                        layout: ca(),
                        viewportHeightPx: b
                    });
                d === c || (bS.current = d, d.renderedRange.startIndex === c.renderedRange.startIndex && d.renderedRange.endIndex === c.renderedRange.endIndex && D(d.turnKeys, c.turnKeys) || bL(d))
            }, aW[91] = ca, aW[92] = aa) : aa = aW[92];
            let cn = (0, t.a)(aa);
            aW[93] !== ch || aW[94] !== bi ? (ab = () => () => bi?.(void 0, ch), ac = [ch, bi], aW[93] = ch, aW[94] = bi, aW[95] = ab, aW[96] = ac) : (ab = aW[95], ac = aW[96]), (0, k.useLayoutEffect)(ab, ac), aW[97] !== ca || aW[98] !== bh ? (ad = (a, b, c) => {
                if (null == bh) return;
                let d = ca(),
                    e = Math.max(0, Math.min(d.totalHeightPx, d.totalHeightPx - a)),
                    f = Math.max(0, e - b);
                bh({
                    viewportEndPx: e,
                    viewportStartPx: f
                }, c)
            }, aW[97] = ca, aW[98] = bh, aW[99] = ad) : ad = aW[99];
            let co = (0, t.a)(ad);
            aW[100] !== bM ? (ae = a => {
                bM.getSnapshot() === a && bM.replace(null)
            }, aW[100] = bM, aW[101] = ae) : ae = aW[101];
            let cp = (0, t.a)(ae);
            aW[102] !== ch || aW[103] !== bi || aW[104] !== bM ? (af = (a, b, c) => c?.signal?.aborted ? Promise.resolve() : (bi?.(null, ch), new Promise(d => {
                let e = () => {
                        bM.getSnapshot() === f && bM.replace(null)
                    },
                    f = {
                        align: c?.align ?? "center",
                        complete: () => {
                            c?.signal?.removeEventListener("abort", e), d()
                        },
                        getTargetElement: b,
                        turnKey: a
                    };
                bL(bS.current), bM.replace(f), c?.signal?.addEventListener("abort", e, {
                    once: !0
                })
            })), aW[102] = ch, aW[103] = bi, aW[104] = bM, aW[105] = af) : af = aW[105];
            let cq = (0, t.a)(af);
            aW[106] !== ca || aW[107] !== aY ? (ag = a => {
                let {
                    viewportStartPx: b,
                    viewportEndPx: c
                } = a;
                return (0, u.h)(aY, ca(), b, c)
            }, aW[106] = ca, aW[107] = aY, aW[108] = ag) : ag = aW[108];
            let cr = (0, t.a)(ag);
            aW[109] !== ca ? (ah = a => {
                let b = ca(),
                    c = b.turnIndexByKey.get(a);
                if (null == c) return null;
                let d = b.topOffsetsPx[c],
                    e = b.heightsPx[c];
                return null == d || null == e ? null : {
                    endPx: d + e,
                    startPx: d
                }
            }, aW[109] = ca, aW[110] = ah) : ah = aW[110];
            let cs = (0, t.a)(ah);
            aW[111] !== ba ? (ai = () => {
                let a = 0,
                    b = null;
                for (let [c, d] of bY.current) a += d, (null == b || b.compareDocumentPosition(c) === Node.DOCUMENT_POSITION_FOLLOWING) && (b = c);
                null != b && ba?.({
                    heightDeltaPx: null,
                    heightPx: null,
                    turnElement: b,
                    followContentHeightPx: a
                })
            }, aW[111] = ba, aW[112] = ai) : ai = aW[112];
            let ct = (0, t.a)(ai);
            aW[113] !== bo || aW[114] !== cm || aW[115] !== bA || aW[116] !== bp || aW[117] !== a8 || aW[118] !== ca || aW[119] !== cb || aW[120] !== bd || aW[121] !== a$ || aW[122] !== bE || aW[123] !== bq || aW[124] !== aY || aW[125] !== bB || aW[126] !== bM || aW[127] !== bR || aW[128] !== bD ? (aj = (a, b, c) => {
                var d;
                let e = void 0 === c ? "measured" : c,
                    f = ca(),
                    g = bB.getScrollElement();
                if (g?.getClientRects().length === 0) return !1;
                let h = bZ.current,
                    i = bP.current,
                    j = (a, b) => {
                        let c = f.turnIndexByKey.get(a);
                        return Math.max(+!bo, b, (null == c ? void 0 : a$(aY[c]).minHeightPx) ?? 0)
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
                        let f = bV.current.get(c);
                        f === a && bW.current.add(f)
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
                    w = "controller" === e ? bB.getLastScrollDistanceFromBottomPx({
                        includePendingUserScroll: !0
                    }) : function(a, b) {
                        let c = a.getScrollElement(),
                            d = c?.firstElementChild;
                        if (null == c || null == d || 0 === c.clientHeight) return a.getLastScrollDistanceFromBottomPx();
                        let e = d.getBoundingClientRect();
                        if (0 === e.height) return a.getLastScrollDistanceFromBottomPx();
                        let f = c.scrollTop;
                        return Math.max(0, Math.round(f + (0, m.b)(e.bottom - (0, r.d)(c, b), b)) - c.clientHeight) - f
                    }(bB, bD),
                    x = E(a8),
                    y = F(w, x),
                    A = bq ? null : bd?.() ?? null,
                    C = null == h ? y : bS.current.distanceFromBottomPx;
                if (bq && null == bM.getSnapshot() && bd?.() == null) {
                    let a = D(b6.current.turnKeys, f.turnKeys) ? f : b6.current,
                        b = a === f ? h?.scrollDistanceFromBottomPx ?? w : w,
                        c = B({
                            distanceFromBottomPx: cb(b),
                            preferLatestVisibleRow: b < x,
                            layout: a,
                            measuredContentKeys: cj.current,
                            nextLayout: f,
                            viewportHeightPx: bS.current.viewportHeightPx
                        }),
                        d = g?.ownerDocument.activeElement,
                        e = d?.closest("[data-turn-key]"),
                        i = e?.dataset.turnKey;
                    if (g && d && e && i && bV.current.get(i) === e) {
                        let a = d.getBoundingClientRect(),
                            b = g.getBoundingClientRect();
                        a.bottom > b.top && a.top < b.bottom && (c = i)
                    }
                    let j = null == c ? null : f.turnIndexByKey.get(c);
                    null != j && (C = (0, u.b)(f, j))
                }
                for (let [b, c] of a) {
                    let {
                        element: a,
                        heightPx: d
                    } = c, e = bV.current.get(b);
                    if (e !== a) continue;
                    d > 0 ? bW.current.add(e) : bW.current.delete(e);
                    let g = j(b, d),
                        h = i[b];
                    if (h === g) continue;
                    k === i && (k = G(i)), k[b] = g, v = v || g > Math.max(+!bo, d);
                    let l = f.turnIndexByKey.get(b);
                    if (null == l) continue;
                    let m = l === f.turnKeys.length - 1,
                        r = Math.round(Math.max(bA[l]?.minHeightPx ?? 0, g) * bE) / bE,
                        w = r - (f.heightsPx[l] ?? r);
                    t = t || null == h || 0 !== w, m && (o = !0, n += null == h ? 0 : w, p = e), s = s || bo && (0 === r || 0 === f.heightsPx[l]), (0, u.b)(f, l) <= C && (bq || null != bd && !m) && (q += w)
                }
                if (k === i) return !1;
                if (!t) return bP.current = k, v && bG(k), !1;
                let H = (0, u.a)({
                    collapseEmptyRows: bo,
                    entries: bA,
                    gapPx: bp,
                    measuredHeightsByKey: k,
                    pixelScale: bE
                });
                if (s)
                    for (let [a, b] of H.gapsBeforePx.entries()) {
                        let c = b - (f.gapsBeforePx[a] ?? 0);
                        (0, u.c)(f, a) <= C && (bq || null != bd && a !== f.turnKeys.length - 1) && (q += c)
                    }
                let I = bQ.current;
                if (I > 0) {
                    let a = Math.max(0, I - f.totalHeightPx),
                        b = Math.max(0, I - H.totalHeightPx);
                    q += b - a, n > 0 && a > b && (n = Math.max(0, n - (a - b))), a > 0 && 0 === b && bR(0)
                }
                let J = bq && bB.shouldFollowContentGrowth() && (d = w, 0 === x && d <= 24) && p?.querySelector("[data-preserve-turn-viewport]") == null,
                    K = h?.restoreScrollDistanceFromBottom || null != A,
                    L = null;
                K || (L = J ? 0 : 0 !== q ? (h?.scrollDistanceFromBottomPx ?? bB.getUnroundedScrollDistanceFromBottomPx(w)) + q : h?.scrollDistanceFromBottomPx ?? (bq || !o ? w : null));
                let M = bS.current.distanceFromBottomPx;
                K ? M = A ?? M : null != L && (M = F(L, x));
                let N = z({
                        current: bS.current,
                        distanceFromBottomPx: M,
                        layout: H,
                        viewportHeightPx: bS.current.viewportHeightPx
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
                    R = bO.current;
                for (let [b, c] of a) {
                    let {
                        element: a
                    } = c, d = H.turnIndexByKey.get(b);
                    bV.current.get(b) === a && null != d && null != a.parentElement && (a.parentElement.style.height = `${H.heightsPx[d]}px`, a.parentElement.style.minHeight = "")
                }
                if (o && 1 === a.size && null == h && N === bS.current && H.gapsBeforePx.at(-1) === f.gapsBeforePx.at(-1) && null != R) {
                    bP.current = k, b4.current = H;
                    let a = b6.current;
                    return b6.current = H, R.style.height = `${H.totalHeightPx}px`, cm(Q, {
                        previous: a,
                        estimated: f
                    }), !0
                }
                null == b8.current && (b8.current = f);
                let S = () => {
                    bP.current = k, b4.current = H, bG(k), N !== bS.current && (bS.current = N, bL(N))
                };
                return bZ.current = Q, void 0 === b || b ? (0, l.flushSync)(S) : S(), !0
            }, aW[113] = bo, aW[114] = cm, aW[115] = bA, aW[116] = bp, aW[117] = a8, aW[118] = ca, aW[119] = cb, aW[120] = bd, aW[121] = a$, aW[122] = bE, aW[123] = bq, aW[124] = aY, aW[125] = bB, aW[126] = bM, aW[127] = bR, aW[128] = bD, aW[129] = aj) : aj = aW[129];
            let cu = (0, t.a)(aj);
            aW[130] !== cu || aW[131] !== ck || aW[132] !== bC || aW[133] !== ct || aW[134] !== cl ? (ak = a => {
                let b = new Map,
                    c = !1,
                    d = !1,
                    e = !1;
                for (let f of a) {
                    let a = bU.current.get(f.target);
                    if (null == a) continue;
                    let {
                        height: g
                    } = (0, o.a)(f);
                    switch (a.kind) {
                        case "turn": {
                            d = !0;
                            let e = a.turnKey,
                                h = bV.current.get(e);
                            if (h !== f.target || bW.current.has(h) || (c = !0), g > 0 && h === f.target && bP.current[e] === g) {
                                bW.current.add(h);
                                break
                            }
                            b.set(e, {
                                element: f.target,
                                heightPx: g
                            });
                            break
                        }
                        case "latest-turn-follow-content":
                            bY.current.set(a.element, g), e = !0
                    }
                }
                b.size > 0 && cu(b, !0, c ? "controller" : "measured"), d && ck(), e && ct(), cl(), (d || e) && bC?.()
            }, aW[130] = cu, aW[131] = ck, aW[132] = bC, aW[133] = ct, aW[134] = cl, aW[135] = ak) : ak = aW[135];
            let cv = (0, t.a)(ak);
            aW[136] !== cv ? (al = () => {
                if (null != b$.current) return b$.current;
                let a = new ResizeObserver(cv);
                return b$.current = a, a
            }, aW[136] = cv, aW[137] = al) : al = aW[137];
            let cw = (0, t.a)(al);
            aW[138] !== cw ? (am = (a, b) => {
                if (null == b) return;
                bU.current.set(b, {
                    kind: "turn",
                    turnKey: a
                }), bV.current.set(a, b), bW.current.delete(b), bX.current.set(a, b);
                let c = cw();
                return c.observe(b), () => {
                    c.unobserve(b), bU.current.delete(b), bX.current.get(a) === b && bX.current.delete(a), bV.current.get(a) === b && bV.current.delete(a)
                }
            }, aW[138] = cw, aW[139] = am) : am = aW[139];
            let cx = (0, t.a)(am);
            aW[140] !== cu || aW[141] !== bD ? (an = (a, b) => {
                let c = bV.current.get(a);
                if (null == c) return;
                let d = (0, m.b)(c.getBoundingClientRect().height, bD);
                if (!(d <= 0) && (cu(new Map([
                        [a, {
                            element: c,
                            heightPx: d
                        }]
                    ]), !1), null != b)) {
                    let a = bZ.current;
                    null == a ? b() : a.afterMeasure = b
                }
            }, aW[140] = cu, aW[141] = bD, aW[142] = an) : an = aW[142];
            let cy = (0, t.a)(an);
            aW[143] !== cw ? (ao = a => {
                if (null == a) return;
                bU.current.set(a, {
                    element: a,
                    kind: "latest-turn-follow-content"
                }), bY.current.set(a, 0);
                let b = cw();
                return b.observe(a), () => {
                    b.unobserve(a), bU.current.delete(a), bY.current.delete(a)
                }
            }, aW[143] = cw, aW[144] = ao) : ao = aW[144];
            let cz = (0, t.a)(ao),
                cA = (0, k.useRef)(by);
            aW[145] !== cu || aW[146] !== by || aW[147] !== bD ? (ap = () => {
                let a = bX.current,
                    b = cA.current;
                if (cA.current = by, null != b && b !== by) {
                    let c = bV.current.get(b);
                    null != c && a.set(b, c)
                }
                if (0 === a.size) {
                    b_.current = 0;
                    return
                }
                if (null != b0.current) return;
                if (b_.current >= 8) {
                    b0.current = requestAnimationFrame(a => {
                        b0.current = null, b_.current = 0, b2(a)
                    });
                    return
                }
                b_.current = b_.current + 1, bX.current = new Map;
                let c = new Map;
                if ((0, n.a)("virtualizedTurnList.readMountedHeights", () => {
                        for (let [b, d] of a) {
                            if (bV.current.get(b) !== d) continue;
                            let a = (0, m.b)(d.getBoundingClientRect().height, bD);
                            (a > 0 || d.getClientRects().length > 0) && c.set(b, {
                                element: d,
                                heightPx: a
                            })
                        }
                    }, a.size), c.size > 0) {
                    let b = bP.current;
                    if (cu(c, !1, "controller"))
                        for (let [c, d] of a)(null == b[c] || b_.current > 1) && bV.current.get(c) === d && bX.current.set(c, d);
                    else b_.current = 0
                }
            }, aW[145] = cu, aW[146] = by, aW[147] = bD, aW[148] = ap) : ap = aW[148], (0, k.useLayoutEffect)(ap), aW[149] !== bA || aW[150] !== cy || aW[151] !== bm ? (aq = () => {
                let a = bm ?? bA.at(-1)?.turnKey;
                null != a && cy(a)
            }, aW[149] = bA, aW[150] = cy, aW[151] = bm, aW[152] = aq) : aq = aW[152];
            let cB = (0, t.a)(aq);
            aW[153] !== bj || aW[154] !== cB ? (ar = () => {
                null != bj && cB()
            }, as = [bj, cB], aW[153] = bj, aW[154] = cB, aW[155] = ar, aW[156] = as) : (ar = aW[155], as = aW[156]), (0, k.useLayoutEffect)(ar, as), aW[157] !== cm || aW[158] !== bF ? (at = () => {
                let a = bZ.current;
                null != a && a.turnHeightsByKey === bF && (bZ.current = null, cm(a))
            }, au = [cm, bF], aW[157] = cm, aW[158] = bF, aW[159] = at, aW[160] = au) : (at = aW[159], au = aW[160]), (0, k.useLayoutEffect)(at, au), aW[161] !== bA || aW[162] !== bu || aW[163] !== bJ.heightsPx || aW[164] !== br || aW[165] !== bF || aW[166] !== bH || aW[167] !== bD ? (av = a => {
                if (!br || bu?.viewportHeightPx === a) return;
                if (null != bu) return void(0, l.flushSync)(() => {
                    bv({
                        ...bu,
                        viewportHeightPx: a
                    })
                });
                let b = bH?.closest("[data-thread-user-message-navigation-content]"),
                    c = b?.lastElementChild,
                    d = bA.at(-1)?.turnKey;
                if (null == b || null == c || null == d || bA.some(a => null == bF[a.turnKey])) return;
                let e = (0, m.b)(b.getBoundingClientRect().bottom - c.getBoundingClientRect().bottom, bD) - parseFloat(getComputedStyle(b).paddingBottom);
                e <= 24 || (0, l.flushSync)(() => {
                    bv({
                        turnKey: d,
                        heightOutsideTurnPx: a - (bJ.heightsPx.at(-1) ?? 0) - e,
                        viewportHeightPx: a
                    })
                })
            }, aW[161] = bA, aW[162] = bu, aW[163] = bJ.heightsPx, aW[164] = br, aW[165] = bF, aW[166] = bH, aW[167] = bD, aW[168] = av) : av = aW[168];
            let cC = (0, t.a)(av);
            aW[169] !== cr || aW[170] !== cs || aW[171] !== ch || aW[172] !== cy || aW[173] !== a4 || aW[174] !== cq ? (aw = () => {
                if (null != a4) return a4({
                    getEntriesInViewport: cr,
                    getRowElement: ch,
                    getEntryGeometry: cs,
                    measureTurnBeforePaint: cy,
                    scrollToKey: cq
                }), () => {
                    a4(null)
                }
            }, ax = [cr, ch, cs, cy, a4, cq], aW[169] = cr, aW[170] = cs, aW[171] = ch, aW[172] = cy, aW[173] = a4, aW[174] = cq, aW[175] = aw, aW[176] = ax) : (aw = aW[175], ax = aW[176]), (0, k.useEffect)(aw, ax), aW[177] === Symbol.for("react.memo_cache_sentinel") ? (ay = () => () => {
                b3.current = !1
            }, az = [], aW[177] = ay, aW[178] = az) : (ay = aW[177], az = aW[178]), (0, k.useLayoutEffect)(ay, az), aW[179] !== bM ? (aA = () => {
                let a = bU.current,
                    b = bV.current,
                    c = bY.current;
                return () => {
                    null != b0.current && (cancelAnimationFrame(b0.current), b0.current = null), b$.current?.disconnect(), b$.current = null, a.clear(), b.clear(), bX.current.clear(), c.clear(), bZ.current = null, bM.replace(null)
                }
            }, aB = [bM], aW[179] = bM, aW[180] = aA, aW[181] = aB) : (aA = aW[180], aB = aW[181]), (0, k.useEffect)(aA, aB), aW[182] !== bg ? (aC = () => {
                if (null != bg) return () => {
                    bg(function(a, b) {
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
                    }(bP.current, bS.current))
                }
            }, aD = [bg], aW[182] = bg, aW[183] = aC, aW[184] = aD) : (aC = aW[183], aD = aW[184]), (0, k.useLayoutEffect)(aC, aD), aW[185] !== a1 || aW[186] !== bx || aW[187] !== by || aW[188] !== aY ? (aE = bx < 0 ? void 0 : a1?.(aY[bx]) ?? by, aW[185] = a1, aW[186] = bx, aW[187] = by, aW[188] = aY, aW[189] = aE) : aE = aW[189];
            let cD = aE;
            aW[190] !== cD || aW[191] !== bB || aW[192] !== bR || aW[193] !== bH || aW[194] !== bD ? (aF = () => {
                if (null == bH || null == cD) return;
                let a = a => {
                    let b = bB.getScrollElement(),
                        c = a.target;
                    if (null == b || b.scrollTop <= 0 || !(c instanceof Element)) return;
                    let d = c.getBoundingClientRect(),
                        e = b.getBoundingClientRect().top;
                    d.bottom <= e || (c.hasAttribute("data-turn-transcript") && (bB.shouldFollowContentGrowth() || d.top < e) ? bR(0) : bR(Math.max(0, (0, m.b)(bH.getBoundingClientRect().height, bD) - (0, r.b)(b))))
                };
                return bH.addEventListener(p.a, a), () => {
                    bH.removeEventListener(p.a, a), bR(0)
                }
            }, aG = [cD, bB, bR, bH, bD], aW[190] = cD, aW[191] = bB, aW[192] = bR, aW[193] = bH, aW[194] = bD, aW[195] = aF, aW[196] = aG) : (aF = aW[195], aG = aW[196]), (0, k.useLayoutEffect)(aF, aG);
            let {
                addScrollListener: cE,
                addUserScrollListener: cF,
                getScrollElement: cG
            } = bB;
            aW[197] !== cE || aW[198] !== cF || aW[199] !== a8 || aW[200] !== cG || aW[201] !== bC || aW[202] !== cC || aW[203] !== br || aW[204] !== cl || aW[205] !== co || aW[206] !== ci || aW[207] !== cd || aW[208] !== bB || aW[209] !== bR || aW[210] !== bH || aW[211] !== cn ? (aH = () => {
                let a = cG();
                if (null == a) return;
                let b = () => (null == bT.current && (bT.current = a.clientHeight), bT.current || bS.current.viewportHeightPx || 800),
                    c = cE(a => {
                        cn(F(a, E(a8)), b()), ci(a)
                    }),
                    d = cF((a, c) => {
                        let d = bQ.current;
                        if (d > 0) {
                            let b = d - a;
                            bR(b > b4.current.totalHeightPx && a > 0 ? b : 0)
                        }
                        co(F(a, E(a8)), b(), null != c && a > c)
                    }),
                    e = new ResizeObserver(c => {
                        let d = c.find(b => b.target === a);
                        if (null != d) {
                            let {
                                height: a
                            } = (0, o.a)(d);
                            bT.current = a, cn(bS.current.distanceFromBottomPx, a), cd(), ci(bB.getLastScrollDistanceFromBottomPx())
                        }
                        cC(b()), cl(), null != d && bC?.()
                    });
                return e.observe(a), br && null != bH && e.observe(bH), () => {
                    c(), d(), e.disconnect()
                }
            }, aI = [cE, cF, a8, cG, bC, cC, cl, br, co, ci, cd, bB, bR, bH, cn], aW[197] = cE, aW[198] = cF, aW[199] = a8, aW[200] = cG, aW[201] = bC, aW[202] = cC, aW[203] = br, aW[204] = cl, aW[205] = co, aW[206] = ci, aW[207] = cd, aW[208] = bB, aW[209] = bR, aW[210] = bH, aW[211] = cn, aW[212] = aH, aW[213] = aI) : (aH = aW[212], aI = aW[213]), (0, k.useLayoutEffect)(aH, aI), aW[214] !== cu || aW[215] !== a8 || aW[216] !== bJ || aW[217] !== bN || aW[218] !== bB || aW[219] !== bM || aW[220] !== cp || aW[221] !== cn || aW[222] !== bD ? (aJ = () => {
                if (null == bN || bM.getSnapshot() !== bN || null != b0.current) return;
                let a = bB.getScrollElement();
                if (null == a) return;
                let b = new Map;
                for (let [a, c] of bV.current) {
                    let d = (0, m.b)(c.getBoundingClientRect().height, bD);
                    d > 0 && b.set(a, {
                        element: c,
                        heightPx: d
                    })
                }
                if (cu(b, !1) || null != bZ.current) return;
                let c = bV.current.get(bN.turnKey),
                    d = null == c ? null : bN.getTargetElement?.(c) ?? c,
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
                        align: bN.align,
                        layout: bJ,
                        turnKey: bN.turnKey,
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
                        align: bN.align,
                        layout: bJ,
                        targetElement: d,
                        turnElement: c,
                        turnKey: bN.turnKey,
                        viewportHeightPx: a.clientHeight,
                        windowZoom: bD
                    });
                if (null == e) return void queueMicrotask(() => cp(bN));
                let f = "top" === bN.align && null != d ? Math.max(0, bB.getLastScrollDistanceFromBottomPx() - (0, m.b)(d.getBoundingClientRect().top - (0, r.d)(a, bD), bD) + 10) : e + E(a8);
                bB.scrollToDistanceFromBottomPx(f, "instant", "user"), cn(Math.max(0, f - E(a8)), a.clientHeight), queueMicrotask(() => cp(bN))
            }, aW[214] = cu, aW[215] = a8, aW[216] = bJ, aW[217] = bN, aW[218] = bB, aW[219] = bM, aW[220] = cp, aW[221] = cn, aW[222] = bD, aW[223] = aJ) : aJ = aW[223], aW[224] !== cu || aW[225] !== a8 || aW[226] !== bJ || aW[227] !== b1 || aW[228] !== bN || aW[229] !== bB || aW[230] !== bM || aW[231] !== cp || aW[232] !== cn || aW[233] !== bD ? (aK = [cu, bJ, b1, bN, bB, bM, cp, a8, cn, bD], aW[224] = cu, aW[225] = a8, aW[226] = bJ, aW[227] = b1, aW[228] = bN, aW[229] = bB, aW[230] = bM, aW[231] = cp, aW[232] = cn, aW[233] = bD, aW[234] = aK) : aK = aW[234], (0, k.useLayoutEffect)(aJ, aK), aW[235] !== a8 || aW[236] !== ca || aW[237] !== cb || aW[238] !== bd || aW[239] !== bN || aW[240] !== bq || aW[241] !== aY || aW[242] !== bB || aW[243] !== cn ? (aL = () => {
                var a;
                if (null != bZ.current) return;
                let b = b6.current,
                    c = ca(),
                    d = b8.current ?? c;
                b8.current = null, b6.current = c;
                let e = b7.current !== aY;
                if (b7.current = aY, null != bN || !bq && b.turnKeys.at(-1) !== d.turnKeys.at(-1) || b === d && !e) return;
                let f = E(a8),
                    g = bB.getLastScrollDistanceFromBottomPx({
                        includePendingUserScroll: !0
                    });
                if (null != (bd?.() ?? null)) return;
                if (bB.shouldFollowContentGrowth() && (a = g, 0 === f && a <= 24)) return void bB.compensateScrollToDistanceFromBottomPx(0);
                if (b === d) return;
                let h = B({
                    distanceFromBottomPx: cb(g),
                    preferLatestVisibleRow: g < f,
                    layout: b,
                    measuredContentKeys: cj.current,
                    nextLayout: d,
                    viewportHeightPx: bS.current.viewportHeightPx
                });
                if (null == h) return;
                let i = b.turnIndexByKey.get(h);
                if (bq && d !== c && c.turnKeys.length > b.turnKeys.length && null != i && b.topOffsetsPx[i] === c.topOffsetsPx[i] && b.turnKeys.every((a, b) => a === c.turnKeys[b])) return;
                let j = bB.getUnroundedScrollDistanceFromBottomPx(g),
                    k = (0, u.d)({
                        anchorKey: h,
                        distanceFromBottomPx: j,
                        nextLayout: d,
                        previousLayout: b
                    });
                null != k && (k !== j || b.totalHeightPx !== d.totalHeightPx) && (cn(F(k, f), bS.current.viewportHeightPx), bB.compensateScrollToDistanceFromBottomPx(k))
            }, aW[235] = a8, aW[236] = ca, aW[237] = cb, aW[238] = bd, aW[239] = bN, aW[240] = bq, aW[241] = aY, aW[242] = bB, aW[243] = cn, aW[244] = aL) : aL = aW[244], aW[245] !== a8 || aW[246] !== ca || aW[247] !== cb || aW[248] !== bd || aW[249] !== bJ || aW[250] !== bN || aW[251] !== bq || aW[252] !== aY || aW[253] !== bB || aW[254] !== cn ? (aM = [a8, ca, cb, bd, bJ, bN, bq, aY, bB, cn], aW[245] = a8, aW[246] = ca, aW[247] = cb, aW[248] = bd, aW[249] = bJ, aW[250] = bN, aW[251] = bq, aW[252] = aY, aW[253] = bB, aW[254] = cn, aW[255] = aM) : aM = aW[255], (0, k.useLayoutEffect)(aL, aM), aW[256] !== bN || aW[257] !== co || aW[258] !== cd || aW[259] !== cn ? (aN = () => {
                null == bN && null == bZ.current && (cn(bS.current.distanceFromBottomPx, bS.current.viewportHeightPx), cd(), co(bS.current.distanceFromBottomPx, bS.current.viewportHeightPx, !1))
            }, aW[256] = bN, aW[257] = co, aW[258] = cd, aW[259] = cn, aW[260] = aN) : aN = aW[260], aW[261] !== bJ || aW[262] !== bN || aW[263] !== co || aW[264] !== cd || aW[265] !== cn ? (aO = [bJ, bN, co, cd, cn], aW[261] = bJ, aW[262] = bN, aW[263] = co, aW[264] = cd, aW[265] = cn, aW[266] = aO) : aO = aW[266], (0, k.useLayoutEffect)(aN, aO), aW[267] !== ck || aW[268] !== cl || aW[269] !== ce ? (aP = () => {
                ck(), cl(), ce()
            }, aW[267] = ck, aW[268] = cl, aW[269] = ce, aW[270] = aP) : aP = aW[270], (0, k.useLayoutEffect)(aP), aW[271] !== a6 ? (aQ = (0, i.b)("relative shrink-0", a6), aW[271] = a6, aW[272] = aQ) : aQ = aW[272], aW[273] !== bJ.totalHeightPx ? (aR = {
                height: bJ.totalHeightPx
            }, aW[273] = bJ.totalHeightPx, aW[274] = aR) : aR = aW[274], aW[275] !== cg ? (aS = (0, d.jsx)(h.b, {
                name: "conversation rows",
                active: cg
            }), aW[275] = cg, aW[276] = aS) : aS = aW[276];
            let cH = `${bJ.topOffsetsPx[cc.startIndex]??0}px`;
            aW[277] !== cH ? (aT = {
                marginTop: cH
            }, aW[277] = cH, aW[278] = aT) : aT = aW[278];
            let cI = cf.map(a => {
                let {
                    entry: b,
                    turnIndex: c
                } = a, e = bA[c].turnKey;
                return (0, d.jsx)(y, {
                    entry: b,
                    turnKey: e,
                    minHeightPx: bA[c].minHeightPx,
                    reservedHeightPx: a$(b).minHeightPx,
                    gapBeforePx: c === cc.startIndex ? 0 : bJ.gapsBeforePx[c] ?? 0,
                    retainedTopPx: c < cc.startIndex || c >= cc.endIndex ? bJ.topOffsetsPx[c] : void 0,
                    latestTurnFollowContentRef: c === bA.length - 1 && null != ba ? cz : void 0,
                    boundaryBefore: a0?.[c],
                    boundaryAfter: a0?.[c + 1],
                    RowComponent: a3,
                    measuredHeightPx: null == bF[e] ? void 0 : bJ.heightsPx[c],
                    constrainedHeightPx: c !== bA.length - 1 && bN?.turnKey !== e && null == bF[e] ? bJ.heightsPx[c] : void 0,
                    observeTurnElement: cx
                }, e)
            });
            return aW[279] !== aT || aW[280] !== cI ? (aU = (0, d.jsx)("div", {
                className: "flex flex-col",
                style: aT,
                children: cI
            }), aW[279] = aT, aW[280] = cI, aW[281] = aU) : aU = aW[281], aW[282] !== b9 || aW[283] !== aQ || aW[284] !== aR || aW[285] !== aS || aW[286] !== aU ? (aV = (0, d.jsxs)("div", {
                ref: b9,
                className: aQ,
                style: aR,
                children: [aS, aU]
            }), aW[282] = b9, aW[283] = aQ, aW[284] = aR, aW[285] = aS, aW[286] = aU, aW[287] = aV) : aV = aW[287], aV
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
            if (null != d && b <= 24 && d.endIndex === a.turnKeys.length && j.startIndex > d.startIndex) {
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
                distanceFromBottomPx: b,
                preferLatestVisibleRow: c,
                layout: d,
                measuredContentKeys: e,
                nextLayout: f,
                viewportHeightPx: g
            } = a, h = (0, u.f)({
                distanceFromBottomPx: b,
                layout: d,
                overscanCount: 0,
                viewportHeightPx: Math.max(0, g + Math.min(0, b))
            }), i = null;
            for (let a = h.startIndex; a < h.endIndex; a += 1) {
                let h = d.turnKeys[a];
                if (null != h && !d.gapKeys.has(h) && (!d.collapseEmptyRows || (d.heightsPx[a] ?? 0) > 0) && e.has(h) && f.turnIndexByKey.has(h) && (0, u.b)(d, a) < b + g && (0, u.c)(d, a) > b) {
                    if (!c) return h;
                    i = h
                }
            }
            return i
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