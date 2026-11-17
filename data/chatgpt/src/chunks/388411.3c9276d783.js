export const __rspack_esm_ids = [388411];
export const __webpack_modules__ = {
    UvGr: (function(e, t) {
        t.a = {
            disclosure: "disclosure-fA_nMK",
            gallery: "gallery-VxcMcy",
            frame: "frame-V8WHie",
            revealImage: "revealImage-LgyscF"
        }
    }),
    K5Kt: (function(e, t, n) {
        n.d(t, {
            a: () => o
        });
        var r = n("ABep"),
            l = n("QosV"),
            a = n("on57"),
            i = n("QmNX");

        function o(e) {
            let t, n, o, u, s, c, d, h = (0, l.c)(16);
            h[0] !== e ? ({
                ref: o,
                className: t,
                indent: u,
                variant: s,
                ...n
            } = e, h[0] = e, h[1] = t, h[2] = n, h[3] = o, h[4] = u, h[5] = s) : (t = h[1], n = h[2], o = h[3], u = h[4], s = h[5]);
            let x = void 0 === s ? "default" : s,
                g = "flush" !== x && "detail-kV0yGe",
                m = "steps" === x && "steps-SF26rj",
                f = "default" === x && "pt-(--conversation-activity-gap)",
                p = void 0 !== u && u && "ps-6";
            return h[6] !== t || h[7] !== g || h[8] !== m || h[9] !== f || h[10] !== p ? (c = (0, a.b)(g, m, f, p, t), h[6] = t, h[7] = g, h[8] = m, h[9] = f, h[10] = p, h[11] = c) : c = h[11], h[12] !== n || h[13] !== o || h[14] !== c ? (d = (0, r.jsx)(i.a, {
                spacing: "activity",
                ref: o,
                className: c,
                ...n
            }), h[12] = n, h[13] = o, h[14] = c, h[15] = d) : d = h[15], d
        }
    }),
    Jc8F: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            a = n("on57"),
            i = n("zd8w"),
            o = n("oyxz"),
            u = n("MFk9"),
            s = n("K5Kt"),
            c = n("UvGr");

        function d(e) {
            let t = e.target;
            t instanceof HTMLImageElement && e.currentTarget.contains(t) && delete t.dataset.loaded
        }

        function h(e) {
            let t = e.target;
            t instanceof HTMLImageElement && e.currentTarget.contains(t) && t.closest(`.${c.a.frame}`) && (t.dataset.loaded = "true")
        }

        function x(e) {
            return !e
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, g, m, f, p = (0, l.c)(15),
                    {
                        children: y,
                        icon: v,
                        imageCount: P
                    } = e,
                    [w, b] = (0, i.useState)(!0),
                    [B, K] = (0, i.useState)(!1),
                    H = null != y && B,
                    M = w && H;
                p[0] === Symbol.for("react.memo_cache_sentinel") ? (t = e => {
                    if (null == e) return;
                    let t = () => {
                            K(null != e.querySelector('img[data-loaded="true"]'))
                        },
                        n = new MutationObserver(t);
                    return n.observe(e, {
                        subtree: !0,
                        childList: !0,
                        attributeFilter: ["data-loaded"]
                    }), t(), () => n.disconnect()
                }, p[0] = t) : t = p[0];
                let I = t;
                return p[1] !== P ? (n = (0, r.jsx)("span", {
                    className: "block truncate text-text/40",
                    children: (0, r.jsx)(o.a, {
                        id: "localConversation.imageView.summary",
                        defaultMessage: "{imageCount, plural, one {Viewed an image} other {Viewed # images}}",
                        values: {
                            imageCount: P
                        }
                    })
                }), p[1] = P, p[2] = n) : n = p[2], p[3] !== H || p[4] !== w ? (g = H ? {
                    expanded: w,
                    onToggle: () => b(x)
                } : void 0, p[3] = H, p[4] = w, p[5] = g) : g = p[5], p[6] !== H || p[7] !== y || p[8] !== M ? (m = null != y && (0, r.jsx)("div", {
                    className: c.a.disclosure,
                    "data-ready": H || void 0,
                    "aria-hidden": !M,
                    inert: !M,
                    children: (0, r.jsx)("div", {
                        className: "min-h-0 overflow-clip",
                        children: (0, r.jsx)(s.a, {
                            variant: "steps",
                            children: (0, r.jsx)("div", {
                                ref: I,
                                "data-horizontal-scroll": !0,
                                className: (0, a.b)(c.a.gallery, "horizontal-scroll-fade-mask hide-scrollbar grid min-w-0 auto-cols-max grid-flow-col items-start justify-start gap-2 overflow-x-auto overflow-y-hidden pb-1"),
                                onLoadCapture: h,
                                onErrorCapture: d,
                                children: y
                            })
                        })
                    })
                }), p[6] = H, p[7] = y, p[8] = M, p[9] = m) : m = p[9], p[10] !== v || p[11] !== n || p[12] !== g || p[13] !== m ? (f = (0, r.jsx)(u.a, {
                    className: "relative overflow-clip",
                    icon: v,
                    summary: n,
                    externalDisclosure: g,
                    body: m
                }), p[10] = v, p[11] = n, p[12] = g, p[13] = m, p[14] = f) : f = p[14], f
            }
        })
    }),
    kRUe: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            a = n("on57"),
            i = n("IPUh"),
            o = n("zd8w"),
            u = n("Wf1j"),
            s = n("oyxz"),
            c = n("Sm6l"),
            d = n("HOLv"),
            h = n("bX52"),
            x = n("V8uZ"),
            g = n("Sgcz"),
            m = n("wbOy"),
            f = n("xoMY");

        function p(e) {
            let t, n, s, d, f, p, v, P, w, b, B, K, H, M, I = (0, l.c)(43),
                {
                    className: S,
                    isExpandable: R,
                    review: E
                } = e,
                F = (0, u.a)(),
                [j, C] = (0, o.useState)(!1);
            I[0] !== F || I[1] !== E ? (t = (0, g.c)(F, E), I[0] = F, I[1] = E, I[2] = t) : t = I[2];
            let L = t;
            if (!(void 0 === R || R)) {
                let e, t;
                return I[3] !== S ? (e = (0, a.b)("min-w-0 truncate pt-1 text-codex-description/80", S), I[3] = S, I[4] = e) : e = I[4], I[5] !== e || I[6] !== L ? (t = (0, r.jsx)("div", {
                    className: e,
                    children: L
                }), I[5] = e, I[6] = L, I[7] = t) : t = I[7], t
            }
            let k = "denied" === E.status && "high" === E.riskLevel;
            I[8] !== F || I[9] !== E ? (n = (0, g.b)(F, E), I[8] = F, I[9] = E, I[10] = n) : n = I[10];
            let O = n;
            I[11] !== S ? (s = (0, a.b)("flex flex-col pt-1", S), I[11] = S, I[12] = s) : s = I[12], I[13] === Symbol.for("react.memo_cache_sentinel") ? (d = () => C(y), I[13] = d) : d = I[13];
            let z = "inProgress" === E.status,
                N = k ? "text-warning" : "text-codex-description/80 group-hover/automatic-approval-review:text-default";
            I[14] !== N ? (f = (0, a.b)("min-w-0 truncate", N), I[14] = N, I[15] = f) : f = I[15], I[16] !== z || I[17] !== f || I[18] !== L ? (p = (0, r.jsx)(m.a, {
                active: z,
                className: f,
                children: L
            }), I[16] = z, I[17] = f, I[18] = L, I[19] = p) : p = I[19];
            let _ = j && "rotate-90 opacity-100";
            I[20] !== _ ? (v = (0, a.b)("icon-2xs shrink-0 text-tertiary transition-[opacity,transform] duration-basic opacity-0 group-hover/automatic-approval-review:opacity-100", _), I[20] = _, I[21] = v) : v = I[21], I[22] !== v ? (P = (0, r.jsx)(h.a, {
                className: v
            }), I[22] = v, I[23] = P) : P = I[23], I[24] !== j || I[25] !== P || I[26] !== p ? (w = (0, r.jsxs)(c.a, {
                className: "group/automatic-approval-review inline-flex w-fit max-w-full gap-1.5 text-start",
                color: "ghostMuted",
                focusRing: "inset",
                size: "inline",
                onClick: d,
                "aria-expanded": j,
                children: [p, P]
            }), I[24] = j, I[25] = P, I[26] = p, I[27] = w) : w = I[27];
            let A = j ? "auto" : 0,
                D = +!!j;
            I[28] !== A || I[29] !== D ? (b = {
                height: A,
                opacity: D
            }, I[28] = A, I[29] = D, I[30] = b) : b = I[30];
            let T = j ? "auto" : "none";
            return I[31] !== T ? (B = {
                overflow: "hidden",
                pointerEvents: T
            }, I[31] = T, I[32] = B) : B = I[32], I[33] !== O ? (K = (0, r.jsx)("p", {
                className: "max-w-[80ch] pt-1 text-size-chat leading-relaxed whitespace-pre-wrap text-text/60",
                children: O
            }), I[33] = O, I[34] = K) : K = I[34], I[35] !== b || I[36] !== B || I[37] !== K ? (H = (0, r.jsx)(i.a.div, {
                initial: !1,
                animate: b,
                transition: x.a,
                style: B,
                children: K
            }), I[35] = b, I[36] = B, I[37] = K, I[38] = H) : H = I[38], I[39] !== w || I[40] !== H || I[41] !== s ? (M = (0, r.jsxs)("div", {
                className: s,
                children: [w, H]
            }), I[39] = w, I[40] = H, I[41] = s, I[42] = M) : M = I[42], M
        }

        function y(e) {
            return !e
        }

        function v(e) {
            let t, n, a = (0, l.c)(9),
                {
                    className: i,
                    isExpandable: o,
                    reviews: u
                } = e;
            if (a[0] !== i || a[1] !== o || a[2] !== u) {
                let e;
                a[4] !== i || a[5] !== o ? (e = e => (0, r.jsx)(p, {
                    className: i,
                    isExpandable: o,
                    review: e
                }, e.id), a[4] = i, a[5] = o, a[6] = e) : e = a[6], t = u.map(e), a[0] = i, a[1] = o, a[2] = u, a[3] = t
            } else t = a[3];
            return a[7] !== t ? (n = (0, r.jsx)(r.Fragment, {
                children: t
            }), a[7] = t, a[8] = n) : n = a[8], n
        }

        function P(e) {
            let t, n, a = (0, l.c)(4),
                {
                    reviews: i
                } = e;
            a[0] !== i ? (t = i.some(w), a[0] = i, a[1] = t) : t = a[1];
            let o = t;
            return a[2] !== o ? (n = (0, r.jsx)("p", {
                className: "max-w-[80ch] pt-1 text-size-chat leading-relaxed text-text/60",
                children: o ? (0, r.jsx)(s.a, {
                    id: "localConversation.automaticApprovalReview.explicitAuthorizationHighRisk",
                    defaultMessage: "Requires explicit authorization because this action is considered high risk"
                }) : (0, r.jsx)(s.a, {
                    id: "localConversation.automaticApprovalReview.explicitAuthorization",
                    defaultMessage: "Requires explicit authorization"
                })
            }), a[2] = o, a[3] = n) : n = a[3], n
        }

        function w(e) {
            return "denied" === e.status && "high" === e.riskLevel
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, i = (0, l.c)(5),
                    {
                        className: o,
                        tone: u
                    } = e,
                    s = "warning" === (void 0 === u ? "default" : u) ? "text-warning" : "text-tertiary";
                return i[0] !== o || i[1] !== s ? (t = (0, a.b)("shrink-0", s, o), i[0] = o, i[1] = s, i[2] = t) : t = i[2], i[3] !== t ? (n = (0, r.jsx)(d.a, {
                    className: t,
                    asset: f.a,
                    "aria-hidden": !0
                }), i[3] = t, i[4] = n) : n = i[4], n
            },
            b: P,
            c: p,
            d: v,
            e: function(e) {
                let t, n = (0, l.c)(4),
                    {
                        isDeclined: a,
                        reviews: i
                    } = e;
                if (!a) {
                    let e;
                    return n[0] !== i ? (e = (0, r.jsx)(v, {
                        reviews: i
                    }), n[0] = i, n[1] = e) : e = n[1], e
                }
                return n[2] !== i ? (t = (0, r.jsx)(P, {
                    reviews: i
                }), n[2] = i, n[3] = t) : t = n[3], t
            }
        })
    }),
    getw: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            a = n("slpy"),
            i = n("on57"),
            o = n("oyxz"),
            u = n("Sm6l"),
            s = n("bX52"),
            c = n("kRUe"),
            d = n("waM8"),
            h = n("XSEO");

        function x(e) {
            let t, n, a = (0, l.c)(15),
                {
                    workedDurationMs: i,
                    workedForItem: u,
                    className: s
                } = e;
            if (null != u) {
                let e;
                return a[0] !== s || a[1] !== u.completedAtMs || a[2] !== u.startedAtMs || a[3] !== u.status ? (e = (0, r.jsx)(h.b, {
                    className: s,
                    status: u.status,
                    startedAtMs: u.startedAtMs,
                    completedAtMs: u.completedAtMs
                }), a[0] = s, a[1] = u.completedAtMs, a[2] = u.startedAtMs, a[3] = u.status, a[4] = e) : e = a[4], e
            }
            if (null != i) {
                let e, t, n, l = s ?? "text-tertiary";
                return a[5] !== i ? (e = (0, d.a)(i), a[5] = i, a[6] = e) : e = a[6], a[7] !== e ? (t = (0, r.jsx)(o.a, {
                    id: "localConversation.workedFor",
                    defaultMessage: "Worked for {time}",
                    values: {
                        time: e
                    }
                }), a[7] = e, a[8] = t) : t = a[8], a[9] !== l || a[10] !== t ? (n = (0, r.jsx)("span", {
                    className: l,
                    children: t
                }), a[9] = l, a[10] = t, a[11] = n) : n = a[11], n
            }
            let c = s ?? "text-tertiary";
            return a[12] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, r.jsx)(o.a, {
                ...d.b.worked
            }), a[12] = t) : t = a[12], a[13] !== c ? (n = (0, r.jsx)("span", {
                className: c,
                children: t
            }), a[13] = c, a[14] = n) : n = a[14], n
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, d, h, g, m, f, p, y, v, P, w = (0, l.c)(39),
                    {
                        label: b,
                        description: B,
                        headerAction: K,
                        deniedActionCount: H,
                        workedDurationMs: M,
                        workedForItem: I,
                        isCollapsed: S,
                        onFocus: R,
                        onBlur: E,
                        onPointerEnter: F,
                        onPointerLeave: j,
                        onToggle: C
                    } = e,
                    L = void 0 === H ? 0 : H,
                    k = null != K && "flex min-w-0 items-start gap-3";
                w[0] !== k ? (t = (0, i.b)("text-size-chat text-secondary", k), w[0] = k, w[1] = t) : t = w[1];
                let O = null == K && "flex-wrap",
                    z = L > 0 && "w-full";
                w[2] !== O || w[3] !== z ? (n = (0, i.b)("inline-flex max-w-full text-size-chat", O, z), w[2] = O, w[3] = z, w[4] = n) : n = w[4];
                let N = null != K,
                    _ = !S,
                    A = null == K ? void 0 : "min-w-0 text-start whitespace-normal";
                w[5] !== b || w[6] !== M || w[7] !== I ? (d = b ?? (0, r.jsx)(x, {
                    className: "text-inherit",
                    workedDurationMs: M,
                    workedForItem: I
                }), w[5] = b, w[6] = M, w[7] = I, w[8] = d) : d = w[8], w[9] !== d || w[10] !== A ? (h = (0, r.jsx)("span", {
                    className: A,
                    children: d
                }), w[9] = d, w[10] = A, w[11] = h) : h = w[11];
                let D = S ? "rotate-0" : "rotate-90";
                return w[12] !== D ? (g = (0, i.b)("icon-2xs transition-transform duration-basic", D), w[12] = D, w[13] = g) : g = w[13], w[14] !== g ? (m = (0, r.jsx)(s.a, {
                    className: g
                }), w[14] = g, w[15] = m) : m = w[15], w[16] !== L ? (f = L > 0 ? (0, r.jsx)(a.a, {
                    content: (0, r.jsx)(o.a, {
                        id: "localConversation.deniedActionsTooltip",
                        defaultMessage: "{count, plural, one {Auto-review denied # action. View the action and why it was denied.} other {Auto-review denied # actions. View the actions and why they were denied.}}",
                        values: {
                            count: L
                        }
                    }),
                    children: (0, r.jsxs)("span", {
                        className: "ms-auto inline-flex items-center gap-1 text-secondary",
                        "data-denied-action-count": !0,
                        children: [(0, r.jsx)(c.a, {}), (0, r.jsx)(o.a, {
                            id: "localConversation.deniedActionsCount",
                            defaultMessage: "{count, plural, one {# denied action} other {# denied actions}}",
                            values: {
                                count: L
                            }
                        })]
                    })
                }) : null, w[16] = L, w[17] = f) : f = w[17], w[18] !== E || w[19] !== R || w[20] !== F || w[21] !== j || w[22] !== C || w[23] !== h || w[24] !== m || w[25] !== f || w[26] !== n || w[27] !== N || w[28] !== _ ? (p = (0, r.jsxs)(u.a, {
                    className: n,
                    allowShrink: N,
                    color: "ghostTertiary",
                    radius: "small",
                    size: "inline",
                    "data-turn-disclosure-button": "",
                    "aria-expanded": _,
                    onFocus: R,
                    onBlur: E,
                    onPointerEnter: F,
                    onPointerLeave: j,
                    onClick: C,
                    children: [h, m, f]
                }), w[18] = E, w[19] = R, w[20] = F, w[21] = j, w[22] = C, w[23] = h, w[24] = m, w[25] = f, w[26] = n, w[27] = N, w[28] = _, w[29] = p) : p = w[29], w[30] !== K || w[31] !== p || w[32] !== t ? (y = (0, r.jsxs)("div", {
                    className: t,
                    children: [p, K]
                }), w[30] = K, w[31] = p, w[32] = t, w[33] = y) : y = w[33], w[34] !== B ? (v = null != B ? (0, r.jsx)("div", {
                    className: "mt-2 text-size-chat text-secondary",
                    children: B
                }) : null, w[34] = B, w[35] = v) : v = w[35], w[36] !== y || w[37] !== v ? (P = (0, r.jsxs)(r.Fragment, {
                    children: [y, v]
                }), w[36] = y, w[37] = v, w[38] = P) : P = w[38], P
            }
        })
    }),
    mRLe: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            a = n("on57");
        let i = {
            activity: "var(--conversation-activity-gap)",
            item: "var(--conversation-item-gap, 16px)",
            compact: "var(--conversation-compact-gap)"
        };
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, u = (0, l.c)(7),
                    {
                        variant: s,
                        className: c
                    } = e;
                u[0] !== c ? (t = (0, a.b)("w-full shrink-0", c), u[0] = c, u[1] = t) : t = u[1];
                let d = i[void 0 === s ? "item" : s];
                return u[2] !== d ? (n = {
                    height: d
                }, u[2] = d, u[3] = n) : n = u[3], u[4] !== t || u[5] !== n ? (o = (0, r.jsx)("div", {
                    "aria-hidden": !0,
                    className: t,
                    style: n
                }), u[4] = t, u[5] = n, u[6] = o) : o = u[6], o
            }
        })
    }),
    QmNX: (function(e, t, n) {
        n.d(t, {
            a: () => i
        });
        var r = n("ABep"),
            l = n("QosV"),
            a = n("on57");

        function i(e) {
            let t, n, i, o, u, s = (0, l.c)(12);
            s[0] !== e ? ({
                className: t,
                spacing: i,
                ...n
            } = e, s[0] = e, s[1] = t, s[2] = n, s[3] = i) : (t = s[1], n = s[2], i = s[3]);
            let c = void 0 === i ? "item" : i,
                d = "custom" === c ? void 0 : c,
                h = "item" === c && "gap-[var(--conversation-item-gap,16px)]",
                x = "activity" === c && "gap-(--conversation-activity-gap)";
            return s[4] !== t || s[5] !== h || s[6] !== x ? (o = (0, a.b)("flex flex-col", "stack-eQ550z", h, x, t), s[4] = t, s[5] = h, s[6] = x, s[7] = o) : o = s[7], s[8] !== n || s[9] !== d || s[10] !== o ? (u = (0, r.jsx)("div", {
                ...n,
                "data-spacing": d,
                className: o
            }), s[8] = n, s[9] = d, s[10] = o, s[11] = u) : u = s[11], u
        }
    }),
    RKko: (function(e, t, n) {
        var r = n("hTLy"),
            l = n.n(r),
            a = n("R9dK"),
            i = n.n(a);
        n.d(t, {}, {
            a: function(e) {
                let {
                    collapseEmptyRows: t = !1,
                    entries: n,
                    gapPx: r,
                    measuredHeightsByKey: l,
                    pixelScale: a
                } = e, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e => !1 !== e.anchorEligible, o = new Set, u = [], s = [], c = [], d = new Map, h = [], x = 0;
                for (let [e, g] of n.entries()) {
                    let n = g.turnKey,
                        m = Object.hasOwn(l, n) ? l[n] : void 0,
                        f = Math.max(g.minHeightPx ?? 0, m ?? g.estimatedHeightPx ?? 280);
                    null != a && (f = Math.round(f * a) / a);
                    let p = (t ? x > 0 && f > 0 : e > 0) ? g.gapBeforePx ?? r : 0;
                    null != a && (p = Math.round(p * a) / a), x += p, u.push(p), i(g) || o.add(n), d.set(n, e), h.push(n), c.push(x), s.push(f), x += f
                }
                return {
                    bottomOffsetsPx: c.map((e, t) => x - e - (s[t] ?? 0)),
                    collapseEmptyRows: t,
                    gapKeys: o,
                    gapsBeforePx: u,
                    heightsPx: s,
                    topOffsetsPx: c,
                    totalHeightPx: x,
                    turnIndexByKey: d,
                    turnKeys: h
                }
            },
            b: function(e) {
                let {
                    anchorKey: t,
                    distanceFromBottomPx: n,
                    nextLayout: r,
                    previousLayout: l
                } = e, a = l.turnIndexByKey.get(t), i = r.turnIndexByKey.get(t);
                if (null == a || null == i) return null;
                let o = (l.bottomOffsetsPx[a] ?? 0) + (l.heightsPx[a] ?? 0);
                return Math.max(0, n + ((r.bottomOffsetsPx[i] ?? 0) + (r.heightsPx[i] ?? 0)) - o)
            },
            c: function(e) {
                let {
                    layout: t,
                    turnKey: n,
                    viewportHeightPx: r
                } = e, l = t.turnIndexByKey.get(n);
                return null == l ? null : Math.max(0, (t.bottomOffsetsPx[l] ?? 0) - r / 2 + (t.heightsPx[l] ?? 0) / 2)
            },
            d: function(e) {
                let {
                    distanceFromBottomPx: t,
                    layout: n,
                    overscanCount: r,
                    overscanPx: l = 0,
                    viewportHeightPx: a
                } = e;
                if (0 === n.turnKeys.length) return {
                    startIndex: 0,
                    endIndex: 0
                };
                let i = Math.min(Math.max(0, t), n.totalHeightPx),
                    o = Math.max(0, i - l),
                    u = Math.min(i + Math.max(0, a) + l, n.totalHeightPx),
                    s = n.collapseEmptyRows && u === n.totalHeightPx ? 0 : function(e, t) {
                        let n = 0,
                            r = e.length;
                        for (; n < r;) {
                            let l = Math.floor((n + r) / 2);
                            (e[l] ?? 0) < t ? r = l : n = l + 1
                        }
                        return n
                    }(n.bottomOffsetsPx, u),
                    c = n.collapseEmptyRows && 0 === o ? n.turnKeys.length : function(e, t, n) {
                        let r = 0,
                            l = e.length;
                        for (; r < l;) {
                            let a = Math.floor((r + l) / 2);
                            (e[a] ?? 0) + (t[a] ?? 0) <= n ? l = a : r = a + 1
                        }
                        return r
                    }(n.bottomOffsetsPx, n.heightsPx, o);
                return {
                    startIndex: Math.max(0, s - r),
                    endIndex: Math.min(n.turnKeys.length, Math.max(c, s + 1) + r)
                }
            },
            e: function(e) {
                let {
                    anchorKey: t,
                    layout: n,
                    previousRange: r
                } = e, l = n.turnIndexByKey.get(t);
                return null == l ? null : {
                    startIndex: l,
                    endIndex: Math.min(n.turnKeys.length, l + r.endIndex - r.startIndex)
                }
            },
            f: function(e, t, n, r) {
                let {
                    topOffsetsPx: a,
                    heightsPx: o
                } = t, u = Math.max(0, i()(a, n) - 1);
                return (a[u] ?? 0) + (o[u] ?? 0) <= n && u++, e.slice(u, l()(a, r))
            },
            g: {
                getRowKey: e => e.turnKey,
                getRowGeometry: e => e,
                getRowCollapseScopeKey: e => e.turnSearchKey ?? e.turnKey,
                isRowAnchorEligible: function(e) {
                    return "gap" !== e.type
                }
            }
        })
    }),
    fNSv: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            a = n("v8gE"),
            i = n("on57"),
            o = n("Q840"),
            u = n("zd8w"),
            s = n("v7qY"),
            c = n("wD9O"),
            d = n("zm5q"),
            h = n("f4Vb"),
            x = n("QEDJ"),
            g = n("lsfk"),
            m = n("uYx2"),
            f = n("g3o5"),
            p = n("bIvi"),
            y = n("RKko");

        function v(e) {
            let t, n, v, F, j, C, L, k, O, z, N, _, A, D, T, V, q, Q, U, W, G, $, X, Y, J, Z, ee, et, en, er, el, ea, ei, eo, eu, es, ec, ed, eh, ex, eg, em, ef, ep, ey, ev, eP, ew, eb, eB, eK, eH, eM, eI, eS, eR, eE, eF, ej, eC, eL, ek, eO, ez, eN, e_, eA, eD, eT, eV, eq, eQ, eU, eW, eG, e$ = (0, l.c)(291),
                {
                    collapseEmptyRows: eX,
                    rows: eY,
                    getRowKey: eJ,
                    getRowGeometry: eZ,
                    getRowCollapseScopeKey: e0,
                    isRowAnchorEligible: e1,
                    renderRow: e2,
                    onApiChange: e3,
                    onVisibleContentReady: e4,
                    className: e5,
                    gapPx: e8,
                    getBottomScrollPaddingPx: e6,
                    isSubmitPlacementAnimating: e7,
                    onLatestTurnHeightChange: e9,
                    preserveMeasuredTurnViewport: te,
                    preserveUnderfilledViewport: tt,
                    getPendingRestoreScrollDistanceFromBottomPx: tn,
                    restoreScrollDistanceFromBottomPx: tr,
                    initialRestoreState: tl,
                    onRestoreStateChange: ta,
                    onViewportChange: ti,
                    onViewportRowsChange: to,
                    latestTurnSynchronousMeasurementKey: tu,
                    layoutReadyTurnKey: ts,
                    onTurnLayoutReady: tc,
                    synchronousMeasurementTurnKey: td,
                    retainedTurnKeys: th
                } = e,
                tx = void 0 !== eX && eX,
                tg = void 0 === e8 ? 12 : e8,
                tm = void 0 !== te && te,
                tf = void 0 !== tt && tt,
                tp = (0, o.z)(f.b);
            e$[0] !== th ? (t = th ?? [], e$[0] = th, e$[1] = t) : t = e$[1];
            let ty = [...t, ...tp],
                [tv, tP] = (0, u.useState)(null),
                [tw] = (0, u.useState)(M),
                tb = eY.length - 1;
            e$[2] !== eJ || e$[3] !== tb || e$[4] !== eY ? (n = tb < 0 ? void 0 : eJ(eY[tb]), e$[2] = eJ, e$[3] = tb, e$[4] = eY, e$[5] = n) : n = e$[5];
            let tB = n,
                tK = tf && null != tv && tv.turnKey === tB ? tv.viewportHeightPx - tv.heightOutsideTurnPx : void 0;
            e$[6] !== tK || e$[7] !== tw || e$[8] !== eZ || e$[9] !== eJ || e$[10] !== e1 || e$[11] !== eY ? (v = tw(eY, eJ, eZ, e1, tK), e$[6] = tK, e$[7] = tw, e$[8] = eZ, e$[9] = eJ, e$[10] = e1, e$[11] = eY, e$[12] = v) : v = e$[12];
            let tH = v,
                tM = (0, g.b)(),
                {
                    notifyLayoutResize: tI
                } = tM,
                tS = (0, c.c)(),
                tR = tS * (globalThis.devicePixelRatio ?? 1);
            e$[13] !== tl?.turnHeightsByKey ? (F = () => E(tl?.turnHeightsByKey), e$[13] = tl?.turnHeightsByKey, e$[14] = F) : F = e$[14];
            let [tE, tF] = (0, u.useState)(F), [tj, tC] = (0, u.useState)(null);
            e$[15] !== tx || e$[16] !== tH || e$[17] !== tg || e$[18] !== tR || e$[19] !== tE ? (j = (0, y.a)({
                collapseEmptyRows: tx,
                entries: tH,
                gapPx: tg,
                measuredHeightsByKey: tE,
                pixelScale: tR
            }), e$[15] = tx, e$[16] = tH, e$[17] = tg, e$[18] = tR, e$[19] = tE, e$[20] = j) : j = e$[20];
            let tL = j;
            e$[21] !== e6 || e$[22] !== tl || e$[23] !== tL || e$[24] !== tM ? (C = () => {
                var e, t, n;
                let r, l, a, i, o = S(e6);
                return e = tL, t = R(tM.getLastScrollDistanceFromBottomPx(), o), n = tl, r = n?.renderedWindow, l = r?.viewportHeightPx ?? 800, a = Math.min(t, e.totalHeightPx), i = K(e, a, l), {
                    distanceFromBottomPx: a,
                    renderedRange: (null == r ? null : (0, y.e)({
                        anchorKey: r.anchorKey,
                        layout: e,
                        previousRange: {
                            startIndex: 0,
                            endIndex: null == r.viewportHeightPx ? Math.min(r.count, i.endIndex - i.startIndex) : r.count
                        }
                    })) ?? i,
                    turnKeys: e.turnKeys,
                    viewportHeightPx: l
                }
            }, e$[21] = e6, e$[22] = tl, e$[23] = tL, e$[24] = tM, e$[25] = C) : C = e$[25];
            let [tk, tO] = (0, u.useState)(C), [tz] = (0, u.useState)(w), tN = (0, u.useSyncExternalStore)(tz.subscribe, tz.getSnapshot, tz.getSnapshot), t_ = (0, u.useRef)(null), tA = (0, u.useRef)(tE), tD = (0, u.useRef)(0);
            e$[26] === Symbol.for("react.memo_cache_sentinel") ? (L = e => {
                tD.current = e;
                let t = t_.current;
                null != t && (t.style.minHeight = e > 0 ? `${e}px` : "")
            }, e$[26] = L) : L = e$[26];
            let tT = (0, p.a)(L),
                tV = (0, u.useRef)(tk),
                tq = (0, u.useRef)(null);
            e$[27] === Symbol.for("react.memo_cache_sentinel") ? (k = new Map, e$[27] = k) : k = e$[27];
            let tQ = (0, u.useRef)(k);
            e$[28] === Symbol.for("react.memo_cache_sentinel") ? (O = new Map, e$[28] = O) : O = e$[28];
            let tU = (0, u.useRef)(O);
            e$[29] === Symbol.for("react.memo_cache_sentinel") ? (z = new WeakSet, e$[29] = z) : z = e$[29];
            let tW = (0, u.useRef)(z);
            e$[30] === Symbol.for("react.memo_cache_sentinel") ? (N = new Map, e$[30] = N) : N = e$[30];
            let tG = (0, u.useRef)(N);
            e$[31] === Symbol.for("react.memo_cache_sentinel") ? (_ = new Map, e$[31] = _) : _ = e$[31];
            let t$ = (0, u.useRef)(_),
                tX = (0, u.useRef)(null),
                tY = (0, u.useRef)(null),
                tJ = (0, u.useRef)(0),
                tZ = (0, u.useRef)(null),
                [t0, t1] = (0, u.useState)(null),
                t2 = (0, u.useRef)(!1),
                t3 = (0, u.useRef)(null),
                t4 = (0, u.useRef)(tL),
                t5 = (0, u.useRef)(tL),
                t8 = (0, u.useRef)(tL),
                t6 = (0, u.useRef)(eY),
                t7 = (0, u.useRef)(null);
            e$[32] !== tE ? (A = () => {
                tE !== tA.current && tF(tA.current)
            }, e$[32] = tE, e$[33] = A) : A = e$[33], e$[34] !== tx || e$[35] !== tH || e$[36] !== tg || e$[37] !== tR || e$[38] !== tE ? (D = [tx, tH, tg, tR, tE], e$[34] = tx, e$[35] = tH, e$[36] = tg, e$[37] = tR, e$[38] = tE, e$[39] = D) : D = e$[39], (0, u.useLayoutEffect)(A, D), e$[40] === Symbol.for("react.memo_cache_sentinel") ? (T = e => {
                t_.current = e, tC(e)
            }, e$[40] = T) : T = e$[40];
            let t9 = (0, p.a)(T);
            e$[41] !== tx || e$[42] !== tH || e$[43] !== tg || e$[44] !== tL || e$[45] !== tR || e$[46] !== tE ? (V = () => {
                if (t5.current !== tL) {
                    t5.current = tL, t4.current = tE === tA.current ? tL : (0, y.a)({
                        collapseEmptyRows: tx,
                        entries: tH,
                        gapPx: tg,
                        measuredHeightsByKey: tA.current,
                        pixelScale: tR
                    });
                    let e = t_.current;
                    null != e && (e.style.height = `${t4.current.totalHeightPx}px`)
                }
                return t4.current
            }, e$[41] = tx, e$[42] = tH, e$[43] = tg, e$[44] = tL, e$[45] = tR, e$[46] = tE, e$[47] = V) : V = e$[47];
            let ne = (0, p.a)(V);
            e$[48] !== e6 || e$[49] !== tM || e$[50] !== tS ? (q = e => {
                let t = tM.getScrollElement(),
                    n = t_.current,
                    r = t?.firstElementChild;
                return null == n || null == r ? e - S(e6) : e - (0, c.b)(r.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, tS)
            }, e$[48] = e6, e$[49] = tM, e$[50] = tS, e$[51] = q) : q = e$[51];
            let nt = (0, p.a)(q),
                nn = tk.renderedRange;
            if (null != tN) {
                let e = (0, y.c)({
                    layout: tL,
                    turnKey: tN.turnKey,
                    viewportHeightPx: tk.viewportHeightPx
                });
                null != e && (nn = K(tL, e, tk.viewportHeightPx))
            } else if (!I(tk.turnKeys, tL.turnKeys)) {
                let e = tk.turnKeys[tk.renderedRange.startIndex];
                null != e && (nn = (0, y.e)({
                    anchorKey: e,
                    layout: tL,
                    previousRange: nn
                }) ?? K(tL, tk.distanceFromBottomPx, tk.viewportHeightPx))
            }
            e$[52] !== tr ? (Q = () => {
                null == tX.current && tr?.()
            }, e$[52] = tr, e$[53] = Q) : Q = e$[53];
            let nr = (0, p.a)(Q);
            e$[54] === Symbol.for("react.memo_cache_sentinel") ? (U = () => {
                null != t3.current && (window.cancelAnimationFrame(t3.current), t3.current = null)
            }, e$[54] = U) : U = e$[54];
            let nl = (0, p.a)(U);
            e$[55] !== tH.length || e$[56] !== e4 || e$[57] !== nr ? (W = () => {
                null == e4 || t2.current || null != t3.current || null == t_.current || tH.length > 0 && 0 === tU.current.size || (t3.current = window.requestAnimationFrame(() => {
                    t3.current = window.requestAnimationFrame(() => {
                        t3.current = null, t2.current || null == t_.current || tH.length > 0 && 0 === tU.current.size || (t2.current = !0, nr(), e4())
                    })
                }))
            }, e$[55] = tH.length, e$[56] = e4, e$[57] = nr, e$[58] = W) : W = e$[58];
            let na = (0, p.a)(W),
                ni = eY.slice(nn.startIndex, nn.endIndex).map((e, t) => ({
                    entry: e,
                    turnIndex: nn.startIndex + t
                })),
                no = tH.length > 0 && 0 === ni.length;
            for (let e of new Set(ty)) {
                let t = tL.turnIndexByKey.get(e);
                null == t || t >= nn.startIndex && t < nn.endIndex || ni.push({
                    entry: eY[t],
                    turnIndex: t
                })
            }
            ni.sort(P), e$[59] === Symbol.for("react.memo_cache_sentinel") ? (G = e => tU.current.get(e), e$[59] = G) : G = e$[59];
            let nu = (0, p.a)(G),
                ns = (0, p.a)(e => {
                    let t = e <= 24;
                    to?.(null == tz.getSnapshot() ? function(e, t, n, r) {
                        let {
                            startIndex: l,
                            endIndex: a
                        } = (0, y.d)({
                            distanceFromBottomPx: n,
                            layout: t,
                            overscanCount: 0,
                            viewportHeightPx: r
                        }), i = new Set(e), o = new Set;
                        for (let e = l; e < a; e++) o.add(e);
                        for (let e of i) {
                            let n = t.turnIndexByKey.get(e);
                            null != n && o.add(n)
                        }
                        return [...o].sort((e, t) => e - t).map(e => ({
                            key: t.turnKeys[e],
                            retained: i.has(t.turnKeys[e])
                        }))
                    }(ty, tL, t ? 0 : R(e, S(e6)), tV.current.viewportHeightPx + 24 * !!t) : null, nu, t)
                });
            e$[60] !== ns || e$[61] !== tM ? ($ = () => {
                ns(tM.getLastScrollDistanceFromBottomPx())
            }, e$[60] = ns, e$[61] = tM, e$[62] = $) : $ = e$[62], e$[63] !== tL || e$[64] !== to || e$[65] !== tN || e$[66] !== tk.renderedRange || e$[67] !== tk.viewportHeightPx || e$[68] !== ns || e$[69] !== tp || e$[70] !== th || e$[71] !== eY || e$[72] !== tM ? (X = [tL, to, tN, tk.renderedRange, tk.viewportHeightPx, ns, tp, th, eY, tM], e$[63] = tL, e$[64] = to, e$[65] = tN, e$[66] = tk.renderedRange, e$[67] = tk.viewportHeightPx, e$[68] = ns, e$[69] = tp, e$[70] = th, e$[71] = eY, e$[72] = tM, e$[73] = X) : X = e$[73], (0, u.useLayoutEffect)($, X), e$[74] !== ts || e$[75] !== tc || e$[76] !== tM ? (Y = () => {
                if (null == ts || null == tc || null != tX.current || tG.current.size > 0) return;
                let e = tM.getScrollElement(),
                    t = tU.current.get(ts);
                null != t && tW.current.has(t) && !((tA.current[ts] ?? 0) <= 0) && null != e && !(e.clientHeight <= 0) && tc(ts, t)
            }, e$[74] = ts, e$[75] = tc, e$[76] = tM, e$[77] = Y) : Y = e$[77];
            let nc = (0, p.a)(Y);
            e$[78] !== e6 || e$[79] !== tn || e$[80] !== e7 || e$[81] !== e9 || e$[82] !== tm || e$[83] !== nr || e$[84] !== tM || e$[85] !== tz || e$[86] !== tT ? (J = (e, t) => {
                let n = S(e6);
                if (null != e.latestTurnHeightChange && (e9?.(e.latestTurnHeightChange), tD.current > 0)) {
                    let e = n - S(e6);
                    e > 0 && tT(tD.current + e)
                }
                if (e.restoreScrollDistanceFromBottom) nr();
                else if (null != e.scrollDistanceFromBottomPx) {
                    var r, l;
                    let a, i = e.scrollDistanceFromBottomPx,
                        o = t?.previous ?? t8.current,
                        u = t?.estimated ?? t7.current,
                        s = t4.current;
                    tm && n > 0 && null != e.latestTurnHeightChange && null != u && u.totalHeightPx !== o.totalHeightPx && null == tz.getSnapshot() && tn?.() == null && (r = o, (a = (l = s).turnKeys.length - 1) > 0 && r.turnKeys.length === l.turnKeys.length && r.turnKeys[a] !== l.turnKeys[a] && r.turnKeys.every((e, t) => t === a || e === l.turnKeys[t] && r.topOffsetsPx[t] === l.topOffsetsPx[t] && r.heightsPx[t] === l.heightsPx[t])) && (i = tM.getUnroundedScrollDistanceFromBottomPx(tM.getLastScrollDistanceFromBottomPx()) + s.totalHeightPx - o.totalHeightPx, null != t7.current && (t7.current = o)), tM.compensateScrollToDistanceFromBottomPx(i + S(e6) - n, null != e.afterMeasure || null != tz.getSnapshot() || tn?.() != null || e7?.() ? void 0 : "turn-resize")
                }
                e.afterMeasure?.()
            }, e$[78] = e6, e$[79] = tn, e$[80] = e7, e$[81] = e9, e$[82] = tm, e$[83] = nr, e$[84] = tM, e$[85] = tz, e$[86] = tT, e$[87] = J) : J = e$[87];
            let nd = (0, p.a)(J);
            e$[88] !== ne ? (Z = (e, t) => {
                if (null != tX.current || t <= 0) return;
                let n = tV.current,
                    r = B({
                        current: n,
                        distanceFromBottomPx: e,
                        layout: ne(),
                        viewportHeightPx: t
                    });
                r === n || (tV.current = r, r.renderedRange.startIndex === n.renderedRange.startIndex && r.renderedRange.endIndex === n.renderedRange.endIndex && I(r.turnKeys, n.turnKeys) || tO(r))
            }, e$[88] = ne, e$[89] = Z) : Z = e$[89];
            let nh = (0, p.a)(Z);
            e$[90] !== nu || e$[91] !== to ? (ee = () => () => to?.(void 0, nu), et = [nu, to], e$[90] = nu, e$[91] = to, e$[92] = ee, e$[93] = et) : (ee = e$[92], et = e$[93]), (0, u.useLayoutEffect)(ee, et), e$[94] !== ne || e$[95] !== ti ? (en = (e, t, n) => {
                if (null == ti) return;
                let r = ne(),
                    l = Math.max(0, Math.min(r.totalHeightPx, r.totalHeightPx - e)),
                    a = Math.max(0, l - t);
                ti({
                    viewportEndPx: l,
                    viewportStartPx: a
                }, n)
            }, e$[94] = ne, e$[95] = ti, e$[96] = en) : en = e$[96];
            let nx = (0, p.a)(en);
            e$[97] !== tz ? (er = e => {
                tz.getSnapshot() === e && tz.replace(null)
            }, e$[97] = tz, e$[98] = er) : er = e$[98];
            let ng = (0, p.a)(er);
            e$[99] !== nu || e$[100] !== to || e$[101] !== tz ? (el = (e, t, n) => n?.signal?.aborted ? Promise.resolve() : (to?.(null, nu), new Promise(r => {
                let l = () => {
                        tz.getSnapshot() === a && tz.replace(null)
                    },
                    a = {
                        align: n?.align ?? "center",
                        complete: () => {
                            n?.signal?.removeEventListener("abort", l), r()
                        },
                        getTargetElement: t,
                        turnKey: e
                    };
                tO(tV.current), tz.replace(a), n?.signal?.addEventListener("abort", l, {
                    once: !0
                })
            })), e$[99] = nu, e$[100] = to, e$[101] = tz, e$[102] = el) : el = e$[102];
            let nm = (0, p.a)(el);
            e$[103] !== ne || e$[104] !== eY ? (ea = e => {
                let {
                    viewportStartPx: t,
                    viewportEndPx: n
                } = e;
                return (0, y.f)(eY, ne(), t, n)
            }, e$[103] = ne, e$[104] = eY, e$[105] = ea) : ea = e$[105];
            let nf = (0, p.a)(ea);
            e$[106] !== ne ? (ei = e => {
                let t = ne(),
                    n = t.turnIndexByKey.get(e);
                if (null == n) return null;
                let r = t.topOffsetsPx[n],
                    l = t.heightsPx[n];
                return null == r || null == l ? null : {
                    endPx: r + l,
                    startPx: r
                }
            }, e$[106] = ne, e$[107] = ei) : ei = e$[107];
            let np = (0, p.a)(ei);
            e$[108] !== e9 ? (eo = () => {
                let e = 0,
                    t = null;
                for (let [n, r] of t$.current) e += r, (null == t || t.compareDocumentPosition(n) === Node.DOCUMENT_POSITION_FOLLOWING) && (t = n);
                null != t && e9?.({
                    heightDeltaPx: null,
                    heightPx: null,
                    turnElement: t,
                    followContentHeightPx: e
                })
            }, e$[108] = e9, e$[109] = eo) : eo = e$[109];
            let ny = (0, p.a)(eo);
            e$[110] !== tx || e$[111] !== nd || e$[112] !== tH || e$[113] !== tg || e$[114] !== e6 || e$[115] !== ne || e$[116] !== nt || e$[117] !== tn || e$[118] !== tR || e$[119] !== tm || e$[120] !== tM || e$[121] !== tz || e$[122] !== tT || e$[123] !== tS ? (eu = (e, t, n) => {
                var r;
                let l = void 0 === n ? "measured" : n,
                    a = ne(),
                    i = tM.getScrollElement();
                if (i?.getClientRects().length === 0) return !1;
                let o = tX.current,
                    u = tA.current;
                if ("controller" === l && null == o) {
                    let t = !1;
                    for (let [n, r] of e) {
                        let {
                            element: e,
                            heightPx: l
                        } = r;
                        if (l <= 0 || u[n] !== Math.max(+!tx, l)) {
                            t = !0;
                            break
                        }
                        let a = tU.current.get(n);
                        a === e && tW.current.add(a)
                    }
                    if (!t) return !1
                }
                let d = u,
                    h = 0,
                    x = !1,
                    g = null,
                    f = 0,
                    p = !1,
                    v = !1,
                    P = "controller" === l ? tM.getLastScrollDistanceFromBottomPx({
                        includePendingUserScroll: !0
                    }) : function(e, t) {
                        let n = e.getScrollElement(),
                            r = n?.firstElementChild;
                        if (null == n || null == r || 0 === n.clientHeight) return e.getLastScrollDistanceFromBottomPx();
                        let l = r.getBoundingClientRect();
                        if (0 === l.height) return e.getLastScrollDistanceFromBottomPx();
                        let a = n.scrollTop;
                        return Math.max(0, Math.round(a + (0, c.b)(l.bottom - (0, m.d)(n, t), t)) - n.clientHeight) - a
                    }(tM, tS),
                    w = S(e6),
                    b = R(P, w),
                    K = tm ? null : tn?.() ?? null,
                    M = null == o ? b : tV.current.distanceFromBottomPx,
                    F = M;
                if (tm && null == tz.getSnapshot() && tn?.() == null) {
                    let e = I(t8.current.turnKeys, a.turnKeys) ? a : t8.current,
                        t = e === a ? o?.scrollDistanceFromBottomPx ?? P : P,
                        n = H({
                            distanceFromBottomPx: nt(t),
                            preferLatestVisibleRow: t < w,
                            layout: e,
                            measuredHeightsByKey: u,
                            nextLayout: a,
                            viewportHeightPx: tV.current.viewportHeightPx
                        }),
                        r = i?.ownerDocument.activeElement,
                        l = r?.closest("[data-turn-key]"),
                        s = l?.dataset.turnKey;
                    if (i && r && l && s && tU.current.get(s) === l) {
                        let e = r.getBoundingClientRect(),
                            t = i.getBoundingClientRect();
                        e.bottom > t.top && e.top < t.bottom && (n = s)
                    }
                    let c = null == n ? null : a.turnIndexByKey.get(n);
                    null != c && (F = a.bottomOffsetsPx[c] ?? M)
                }
                for (let [t, n] of e) {
                    let {
                        element: e,
                        heightPx: r
                    } = n, l = tU.current.get(t);
                    if (l !== e) continue;
                    r > 0 ? tW.current.add(l) : tW.current.delete(l);
                    let i = Math.max(+!tx, r),
                        o = u[t];
                    if (o === i) continue;
                    d === u && (d = E(u)), d[t] = i;
                    let s = a.turnIndexByKey.get(t);
                    if (null == s) continue;
                    let c = s === a.turnKeys.length - 1,
                        m = Math.round(Math.max(tH[s]?.minHeightPx ?? 0, i) * tR) / tR,
                        y = m - (a.heightsPx[s] ?? m);
                    v = v || null == o || 0 !== y, c && (x = !0, h += null == o ? 0 : y, g = l), p = p || tx && (0 === m || 0 === a.heightsPx[s]), (a.bottomOffsetsPx[s] ?? 0) <= F && (tm || null != tn && !c) && (f += y)
                }
                if (d === u) return !1;
                if (!v) return tA.current = d, !1;
                let j = (0, y.a)({
                    collapseEmptyRows: tx,
                    entries: tH,
                    gapPx: tg,
                    measuredHeightsByKey: d,
                    pixelScale: tR
                });
                if (p)
                    for (let [e, t] of j.gapsBeforePx.entries()) {
                        let n = t - (a.gapsBeforePx[e] ?? 0);
                        (a.bottomOffsetsPx[e] ?? 0) + (a.heightsPx[e] ?? 0) <= F && (tm || null != tn && e !== a.turnKeys.length - 1) && (f += n)
                    }
                let C = tD.current;
                if (C > 0) {
                    let e = Math.max(0, C - a.totalHeightPx),
                        t = Math.max(0, C - j.totalHeightPx);
                    f += t - e, h > 0 && e > t && (h = Math.max(0, h - (e - t))), e > 0 && 0 === t && tT(0)
                }
                let L = tm && tM.shouldFollowContentGrowth() && (r = P, 0 === w && r <= 24) && g?.querySelector("[data-preserve-turn-viewport]") == null,
                    k = o?.restoreScrollDistanceFromBottom || null != K,
                    O = null;
                k || (O = L ? 0 : 0 !== f ? (o?.scrollDistanceFromBottomPx ?? tM.getUnroundedScrollDistanceFromBottomPx(P)) + f : o?.scrollDistanceFromBottomPx ?? (tm || !x ? P : null));
                let z = tV.current.distanceFromBottomPx;
                k ? z = K ?? z : null != O && (z = R(O, w));
                let N = B({
                        current: tV.current,
                        distanceFromBottomPx: z,
                        layout: j,
                        viewportHeightPx: tV.current.viewportHeightPx
                    }),
                    _ = o?.latestTurnHeightChange,
                    A = g ?? _?.turnElement ?? null,
                    D = {
                        afterMeasure: o?.afterMeasure,
                        latestTurnHeightChange: x || null != _ ? {
                            heightDeltaPx: (_?.heightDeltaPx ?? 0) + h,
                            heightPx: j.heightsPx.at(-1) ?? null,
                            turnElement: A,
                            followContentHeightPx: null
                        } : null,
                        restoreScrollDistanceFromBottom: k,
                        scrollDistanceFromBottomPx: O,
                        turnHeightsByKey: d
                    },
                    T = t_.current;
                for (let [t, n] of e) {
                    let {
                        element: e
                    } = n, r = j.turnIndexByKey.get(t);
                    tU.current.get(t) === e && null != r && null != e.parentElement && (e.parentElement.style.height = `${j.heightsPx[r]}px`, e.parentElement.style.minHeight = "")
                }
                if (x && 1 === e.size && null == o && N === tV.current && j.gapsBeforePx.at(-1) === a.gapsBeforePx.at(-1) && null != T) {
                    tA.current = d, t4.current = j;
                    let e = t8.current;
                    return t8.current = j, T.style.height = `${j.totalHeightPx}px`, nd(D, {
                        previous: e,
                        estimated: a
                    }), !0
                }
                null == t7.current && (t7.current = a);
                let V = () => {
                    tA.current = d, t4.current = j, tF(d), N !== tV.current && (tV.current = N, tO(N))
                };
                return tX.current = D, void 0 === t || t ? (0, s.flushSync)(V) : V(), !0
            }, e$[110] = tx, e$[111] = nd, e$[112] = tH, e$[113] = tg, e$[114] = e6, e$[115] = ne, e$[116] = nt, e$[117] = tn, e$[118] = tR, e$[119] = tm, e$[120] = tM, e$[121] = tz, e$[122] = tT, e$[123] = tS, e$[124] = eu) : eu = e$[124];
            let nv = (0, p.a)(eu);
            e$[125] !== nv || e$[126] !== tI || e$[127] !== ny || e$[128] !== nc ? (es = e => {
                let t = new Map,
                    n = !1,
                    r = !1,
                    l = !1;
                for (let a of e) {
                    let e = tQ.current.get(a.target);
                    if (null == e) continue;
                    let {
                        height: i
                    } = (0, h.a)(a);
                    switch (e.kind) {
                        case "turn": {
                            r = !0;
                            let l = e.turnKey,
                                o = tU.current.get(l);
                            if (o !== a.target || tW.current.has(o) || (n = !0), i > 0 && o === a.target && tA.current[l] === i) {
                                tW.current.add(o);
                                break
                            }
                            t.set(l, {
                                element: a.target,
                                heightPx: i
                            });
                            break
                        }
                        case "latest-turn-follow-content":
                            t$.current.set(e.element, i), l = !0
                    }
                }
                t.size > 0 && nv(t, !0, n ? "controller" : "measured"), l && ny(), nc(), (r || l) && tI?.()
            }, e$[125] = nv, e$[126] = tI, e$[127] = ny, e$[128] = nc, e$[129] = es) : es = e$[129];
            let nP = (0, p.a)(es);
            e$[130] !== nP ? (ec = () => {
                if (null != tY.current) return tY.current;
                let e = new ResizeObserver(nP);
                return tY.current = e, e
            }, e$[130] = nP, e$[131] = ec) : ec = e$[131];
            let nw = (0, p.a)(ec);
            e$[132] !== nw || e$[133] !== na ? (ed = (e, t) => {
                if (null == t) return;
                tQ.current.set(t, {
                    kind: "turn",
                    turnKey: e
                }), tU.current.set(e, t), tW.current.delete(t), tG.current.set(e, t);
                let n = nw();
                return n.observe(t), na(), () => {
                    n.unobserve(t), tQ.current.delete(t), tG.current.get(e) === t && tG.current.delete(e), tU.current.get(e) === t && tU.current.delete(e)
                }
            }, e$[132] = nw, e$[133] = na, e$[134] = ed) : ed = e$[134];
            let nb = (0, p.a)(ed);
            e$[135] !== nv || e$[136] !== tS ? (eh = (e, t) => {
                let n = tU.current.get(e);
                if (null == n) return;
                let r = (0, c.b)(n.getBoundingClientRect().height, tS);
                if (!(r <= 0) && (nv(new Map([
                        [e, {
                            element: n,
                            heightPx: r
                        }]
                    ]), !1), null != t)) {
                    let e = tX.current;
                    null == e ? t() : e.afterMeasure = t
                }
            }, e$[135] = nv, e$[136] = tS, e$[137] = eh) : eh = e$[137];
            let nB = (0, p.a)(eh);
            e$[138] !== nw ? (ex = e => {
                if (null == e) return;
                tQ.current.set(e, {
                    element: e,
                    kind: "latest-turn-follow-content"
                }), t$.current.set(e, 0);
                let t = nw();
                return t.observe(e), () => {
                    t.unobserve(e), tQ.current.delete(e), t$.current.delete(e)
                }
            }, e$[138] = nw, e$[139] = ex) : ex = e$[139];
            let nK = (0, p.a)(ex),
                nH = (0, u.useRef)(tB);
            e$[140] !== nv || e$[141] !== tB || e$[142] !== tS ? (eg = () => {
                let e = tG.current,
                    t = nH.current;
                if (nH.current = tB, null != t && t !== tB) {
                    let n = tU.current.get(t);
                    null != n && e.set(t, n)
                }
                if (0 === e.size) {
                    tJ.current = 0;
                    return
                }
                if (null != tZ.current) return;
                if (tJ.current >= 8) {
                    tZ.current = requestAnimationFrame(e => {
                        tZ.current = null, tJ.current = 0, t1(e)
                    });
                    return
                }
                tJ.current = tJ.current + 1, tG.current = new Map;
                let n = new Map;
                if ((0, d.a)("virtualizedTurnList.readMountedHeights", () => {
                        for (let [t, r] of e) {
                            if (tU.current.get(t) !== r) continue;
                            let e = (0, c.b)(r.getBoundingClientRect().height, tS);
                            e > 0 && n.set(t, {
                                element: r,
                                heightPx: e
                            })
                        }
                    }, e.size), n.size > 0) {
                    let t = tA.current;
                    if (nv(n, !1, "controller"))
                        for (let [n, r] of e)(null == t[n] || tJ.current > 1) && tU.current.get(n) === r && tG.current.set(n, r);
                    else tJ.current = 0
                }
            }, e$[140] = nv, e$[141] = tB, e$[142] = tS, e$[143] = eg) : eg = e$[143], (0, u.useLayoutEffect)(eg), e$[144] !== tH || e$[145] !== nB || e$[146] !== td ? (em = () => {
                let e = td ?? tH.at(-1)?.turnKey;
                null != e && nB(e)
            }, e$[144] = tH, e$[145] = nB, e$[146] = td, e$[147] = em) : em = e$[147];
            let nM = (0, p.a)(em);
            e$[148] !== tu || e$[149] !== nM ? (ef = () => {
                null != tu && nM()
            }, ep = [tu, nM], e$[148] = tu, e$[149] = nM, e$[150] = ef, e$[151] = ep) : (ef = e$[150], ep = e$[151]), (0, u.useLayoutEffect)(ef, ep), e$[152] !== nd || e$[153] !== tE ? (ey = () => {
                let e = tX.current;
                null != e && e.turnHeightsByKey === tE && (tX.current = null, nd(e))
            }, ev = [nd, tE], e$[152] = nd, e$[153] = tE, e$[154] = ey, e$[155] = ev) : (ey = e$[154], ev = e$[155]), (0, u.useLayoutEffect)(ey, ev), e$[156] !== tH || e$[157] !== tv || e$[158] !== tL.heightsPx || e$[159] !== tf || e$[160] !== tE || e$[161] !== tj || e$[162] !== tS ? (eP = e => {
                if (!tf || tv?.viewportHeightPx === e) return;
                if (null != tv) return void(0, s.flushSync)(() => {
                    tP({
                        ...tv,
                        viewportHeightPx: e
                    })
                });
                let t = tj?.closest("[data-thread-user-message-navigation-content]"),
                    n = t?.lastElementChild,
                    r = tH.at(-1)?.turnKey;
                if (null == t || null == n || null == r || tH.some(e => null == tE[e.turnKey])) return;
                let l = (0, c.b)(t.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, tS) - parseFloat(getComputedStyle(t).paddingBottom);
                l <= 24 || (0, s.flushSync)(() => {
                    tP({
                        turnKey: r,
                        heightOutsideTurnPx: e - (tL.heightsPx.at(-1) ?? 0) - l,
                        viewportHeightPx: e
                    })
                })
            }, e$[156] = tH, e$[157] = tv, e$[158] = tL.heightsPx, e$[159] = tf, e$[160] = tE, e$[161] = tj, e$[162] = tS, e$[163] = eP) : eP = e$[163];
            let nI = (0, p.a)(eP);
            e$[164] !== nf || e$[165] !== np || e$[166] !== nu || e$[167] !== nB || e$[168] !== e3 || e$[169] !== nm ? (ew = () => {
                if (null != e3) return e3({
                    getEntriesInViewport: nf,
                    getRowElement: nu,
                    getEntryGeometry: np,
                    measureTurnBeforePaint: nB,
                    scrollToKey: nm
                }), () => {
                    e3(null)
                }
            }, eb = [nf, nu, np, nB, e3, nm], e$[164] = nf, e$[165] = np, e$[166] = nu, e$[167] = nB, e$[168] = e3, e$[169] = nm, e$[170] = ew, e$[171] = eb) : (ew = e$[170], eb = e$[171]), (0, u.useEffect)(ew, eb), e$[172] !== nl ? (eB = () => () => {
                t2.current = !1, nl()
            }, eK = [nl], e$[172] = nl, e$[173] = eB, e$[174] = eK) : (eB = e$[173], eK = e$[174]), (0, u.useLayoutEffect)(eB, eK), e$[175] !== nl || e$[176] !== na ? (eH = () => (na(), nl), e$[175] = nl, e$[176] = na, e$[177] = eH) : eH = e$[177], e$[178] !== nl || e$[179] !== tH.length || e$[180] !== e4 || e$[181] !== na || e$[182] !== tj ? (eM = [nl, tH.length, e4, na, tj], e$[178] = nl, e$[179] = tH.length, e$[180] = e4, e$[181] = na, e$[182] = tj, e$[183] = eM) : eM = e$[183], (0, u.useEffect)(eH, eM), e$[184] !== tz ? (eI = () => {
                let e = tQ.current,
                    t = tU.current,
                    n = t$.current;
                return () => {
                    null != tZ.current && (cancelAnimationFrame(tZ.current), tZ.current = null), tY.current?.disconnect(), tY.current = null, e.clear(), t.clear(), tG.current.clear(), n.clear(), tX.current = null, tz.replace(null)
                }
            }, eS = [tz], e$[184] = tz, e$[185] = eI, e$[186] = eS) : (eI = e$[185], eS = e$[186]), (0, u.useEffect)(eI, eS), e$[187] !== ta ? (eR = () => {
                if (null != ta) return () => {
                    ta(function(e, t) {
                        let {
                            turnKeys: n,
                            renderedRange: r,
                            viewportHeightPx: l
                        } = t, a = E();
                        for (let t of n) {
                            let n = e[t];
                            null != n && (a[t] = n)
                        }
                        let i = n[r.startIndex];
                        return null == i ? null : {
                            renderedWindow: {
                                anchorKey: i,
                                count: r.endIndex - r.startIndex,
                                viewportHeightPx: l
                            },
                            turnHeightsByKey: {
                                ...a
                            }
                        }
                    }(tA.current, tV.current))
                }
            }, eE = [ta], e$[187] = ta, e$[188] = eR, e$[189] = eE) : (eR = e$[188], eE = e$[189]), (0, u.useLayoutEffect)(eR, eE), e$[190] !== e0 || e$[191] !== tb || e$[192] !== tB || e$[193] !== eY ? (eF = tb < 0 ? void 0 : e0?.(eY[tb]) ?? tB, e$[190] = e0, e$[191] = tb, e$[192] = tB, e$[193] = eY, e$[194] = eF) : eF = e$[194];
            let nS = eF;
            e$[195] !== nS || e$[196] !== tM || e$[197] !== tT || e$[198] !== tj || e$[199] !== tS ? (ej = () => {
                if (null == tj || null == nS) return;
                let e = e => {
                    let t = tM.getScrollElement(),
                        n = e.target;
                    if (null == t || t.scrollTop <= 0 || !(n instanceof Element)) return;
                    let r = n.getBoundingClientRect(),
                        l = t.getBoundingClientRect().top;
                    r.bottom <= l || (n.hasAttribute("data-turn-transcript") && (tM.shouldFollowContentGrowth() || r.top < l) ? tT(0) : tT(Math.max(0, (0, c.b)(tj.getBoundingClientRect().height, tS) - (0, m.b)(t))))
                };
                return tj.addEventListener(x.a, e), () => {
                    tj.removeEventListener(x.a, e), tT(0)
                }
            }, eC = [nS, tM, tT, tj, tS], e$[195] = nS, e$[196] = tM, e$[197] = tT, e$[198] = tj, e$[199] = tS, e$[200] = ej, e$[201] = eC) : (ej = e$[200], eC = e$[201]), (0, u.useLayoutEffect)(ej, eC);
            let {
                addScrollListener: nR,
                addUserScrollListener: nE,
                getScrollElement: nF
            } = tM;
            e$[202] !== nR || e$[203] !== nE || e$[204] !== e6 || e$[205] !== nF || e$[206] !== tI || e$[207] !== nI || e$[208] !== tf || e$[209] !== nc || e$[210] !== nx || e$[211] !== ns || e$[212] !== nr || e$[213] !== tM || e$[214] !== tT || e$[215] !== tj || e$[216] !== nh ? (eL = () => {
                let e = nF();
                if (null == e) return;
                let t = () => (null == tq.current && (tq.current = e.clientHeight), tq.current || tV.current.viewportHeightPx || 800),
                    n = nR(e => {
                        nh(R(e, S(e6)), t()), ns(e)
                    }),
                    r = nE((e, n) => {
                        let r = tD.current;
                        if (r > 0) {
                            let t = r - e;
                            tT(t > t4.current.totalHeightPx && e > 0 ? t : 0)
                        }
                        nx(R(e, S(e6)), t(), null != n && e > n)
                    }),
                    l = new ResizeObserver(n => {
                        let r = n.find(t => t.target === e);
                        if (null != r) {
                            let {
                                height: e
                            } = (0, h.a)(r);
                            tq.current = e, nh(tV.current.distanceFromBottomPx, e), nr(), ns(tM.getLastScrollDistanceFromBottomPx())
                        }
                        nI(t()), nc(), null != r && tI?.()
                    });
                return l.observe(e), tf && null != tj && l.observe(tj), () => {
                    n(), r(), l.disconnect()
                }
            }, ek = [nR, nE, e6, nF, tI, nI, nc, tf, nx, ns, nr, tM, tT, tj, nh], e$[202] = nR, e$[203] = nE, e$[204] = e6, e$[205] = nF, e$[206] = tI, e$[207] = nI, e$[208] = tf, e$[209] = nc, e$[210] = nx, e$[211] = ns, e$[212] = nr, e$[213] = tM, e$[214] = tT, e$[215] = tj, e$[216] = nh, e$[217] = eL, e$[218] = ek) : (eL = e$[217], ek = e$[218]), (0, u.useLayoutEffect)(eL, ek), e$[219] !== nv || e$[220] !== e6 || e$[221] !== tL || e$[222] !== tN || e$[223] !== tM || e$[224] !== tz || e$[225] !== ng || e$[226] !== nh || e$[227] !== tS ? (eO = () => {
                if (null == tN || tz.getSnapshot() !== tN || null != tZ.current) return;
                let e = tM.getScrollElement();
                if (null == e) return;
                let t = new Map;
                for (let [e, n] of tU.current) {
                    let r = (0, c.b)(n.getBoundingClientRect().height, tS);
                    r > 0 && t.set(e, {
                        element: n,
                        heightPx: r
                    })
                }
                if (nv(t, !1) || null != tX.current) return;
                let n = tU.current.get(tN.turnKey),
                    r = null == n ? null : tN.getTargetElement?.(n) ?? n,
                    l = null == n || null == r ? function(e) {
                        let {
                            align: t,
                            layout: n,
                            turnKey: r,
                            viewportHeightPx: l
                        } = e;
                        if ("center" === t) return (0, y.c)({
                            layout: n,
                            turnKey: r,
                            viewportHeightPx: l
                        });
                        let a = n.turnIndexByKey.get(r);
                        return null == a ? null : Math.max(0, (n.bottomOffsetsPx[a] ?? 0) + (n.heightsPx[a] ?? 0) - l + 10)
                    }({
                        align: tN.align,
                        layout: tL,
                        turnKey: tN.turnKey,
                        viewportHeightPx: e.clientHeight
                    }) : function(e) {
                        let {
                            align: t,
                            layout: n,
                            targetElement: r,
                            turnElement: l,
                            turnKey: a,
                            windowZoom: i,
                            viewportHeightPx: o
                        } = e, u = n.turnIndexByKey.get(a);
                        if (null == u) return null;
                        let s = l.getBoundingClientRect(),
                            d = r.getBoundingClientRect(),
                            h = (0, c.b)(d.top - s.top, i),
                            x = (0, c.b)(d.height, i),
                            g = (n.bottomOffsetsPx[u] ?? 0) + (n.heightsPx[u] ?? 0) - h;
                        return "top" === t ? Math.max(0, g - o + 10) : Math.max(0, g - x / 2 - o / 2)
                    }({
                        align: tN.align,
                        layout: tL,
                        targetElement: r,
                        turnElement: n,
                        turnKey: tN.turnKey,
                        viewportHeightPx: e.clientHeight,
                        windowZoom: tS
                    });
                if (null == l) return void queueMicrotask(() => ng(tN));
                let a = "top" === tN.align && null != r ? Math.max(0, tM.getLastScrollDistanceFromBottomPx() - (0, c.b)(r.getBoundingClientRect().top - (0, m.d)(e, tS), tS) + 10) : l + S(e6);
                tM.scrollToDistanceFromBottomPx(a, "instant", "user"), nh(Math.max(0, a - S(e6)), e.clientHeight), queueMicrotask(() => ng(tN))
            }, e$[219] = nv, e$[220] = e6, e$[221] = tL, e$[222] = tN, e$[223] = tM, e$[224] = tz, e$[225] = ng, e$[226] = nh, e$[227] = tS, e$[228] = eO) : eO = e$[228], e$[229] !== nv || e$[230] !== e6 || e$[231] !== tL || e$[232] !== t0 || e$[233] !== tN || e$[234] !== tM || e$[235] !== tz || e$[236] !== ng || e$[237] !== nh || e$[238] !== tS ? (ez = [nv, tL, t0, tN, tM, tz, ng, e6, nh, tS], e$[229] = nv, e$[230] = e6, e$[231] = tL, e$[232] = t0, e$[233] = tN, e$[234] = tM, e$[235] = tz, e$[236] = ng, e$[237] = nh, e$[238] = tS, e$[239] = ez) : ez = e$[239], (0, u.useLayoutEffect)(eO, ez), e$[240] !== e6 || e$[241] !== ne || e$[242] !== nt || e$[243] !== tn || e$[244] !== tN || e$[245] !== tm || e$[246] !== eY || e$[247] !== tM || e$[248] !== nh ? (eN = () => {
                var e;
                if (null != tX.current) return;
                let t = t8.current,
                    n = ne(),
                    r = t7.current ?? n;
                t7.current = null, t8.current = n;
                let l = t6.current !== eY;
                if (t6.current = eY, null != tN || !tm && t.turnKeys.at(-1) !== r.turnKeys.at(-1) || t === r && !l) return;
                let a = S(e6),
                    i = tM.getLastScrollDistanceFromBottomPx({
                        includePendingUserScroll: !0
                    });
                if (null != (tn?.() ?? null)) return;
                if (tM.shouldFollowContentGrowth() && (e = i, 0 === a && e <= 24)) return void tM.compensateScrollToDistanceFromBottomPx(0);
                if (t === r) return;
                let o = H({
                    distanceFromBottomPx: nt(i),
                    preferLatestVisibleRow: i < a,
                    layout: t,
                    measuredHeightsByKey: tA.current,
                    nextLayout: r,
                    viewportHeightPx: tV.current.viewportHeightPx
                });
                if (null == o) return;
                let u = t.turnIndexByKey.get(o);
                if (tm && r !== n && n.turnKeys.length > t.turnKeys.length && null != u && t.topOffsetsPx[u] === n.topOffsetsPx[u] && t.turnKeys.every((e, t) => e === n.turnKeys[t])) return;
                let s = tM.getUnroundedScrollDistanceFromBottomPx(i),
                    c = (0, y.b)({
                        anchorKey: o,
                        distanceFromBottomPx: s,
                        nextLayout: r,
                        previousLayout: t
                    });
                null != c && (c !== s || t.totalHeightPx !== r.totalHeightPx) && (nh(R(c, a), tV.current.viewportHeightPx), tM.compensateScrollToDistanceFromBottomPx(c))
            }, e$[240] = e6, e$[241] = ne, e$[242] = nt, e$[243] = tn, e$[244] = tN, e$[245] = tm, e$[246] = eY, e$[247] = tM, e$[248] = nh, e$[249] = eN) : eN = e$[249], e$[250] !== e6 || e$[251] !== ne || e$[252] !== nt || e$[253] !== tn || e$[254] !== tL || e$[255] !== tN || e$[256] !== tm || e$[257] !== eY || e$[258] !== tM || e$[259] !== nh ? (e_ = [e6, ne, nt, tn, tL, tN, tm, eY, tM, nh], e$[250] = e6, e$[251] = ne, e$[252] = nt, e$[253] = tn, e$[254] = tL, e$[255] = tN, e$[256] = tm, e$[257] = eY, e$[258] = tM, e$[259] = nh, e$[260] = e_) : e_ = e$[260], (0, u.useLayoutEffect)(eN, e_), e$[261] !== tN || e$[262] !== nx || e$[263] !== nr || e$[264] !== nh ? (eA = () => {
                null == tN && null == tX.current && (nh(tV.current.distanceFromBottomPx, tV.current.viewportHeightPx), nr(), nx(tV.current.distanceFromBottomPx, tV.current.viewportHeightPx, !1))
            }, e$[261] = tN, e$[262] = nx, e$[263] = nr, e$[264] = nh, e$[265] = eA) : eA = e$[265], e$[266] !== tL || e$[267] !== tN || e$[268] !== nx || e$[269] !== nr || e$[270] !== nh ? (eD = [tL, tN, nx, nr, nh], e$[266] = tL, e$[267] = tN, e$[268] = nx, e$[269] = nr, e$[270] = nh, e$[271] = eD) : eD = e$[271], (0, u.useLayoutEffect)(eA, eD), e$[272] !== nc ? (eT = () => {
                nc()
            }, e$[272] = nc, e$[273] = eT) : eT = e$[273], (0, u.useLayoutEffect)(eT), e$[274] !== e5 ? (eV = (0, i.b)("relative shrink-0", e5), e$[274] = e5, e$[275] = eV) : eV = e$[275], e$[276] !== tL.totalHeightPx ? (eq = {
                height: tL.totalHeightPx
            }, e$[276] = tL.totalHeightPx, e$[277] = eq) : eq = e$[277], e$[278] !== no ? (eQ = (0, r.jsx)(a.b, {
                name: "conversation rows",
                active: no
            }), e$[278] = no, e$[279] = eQ) : eQ = e$[279];
            let nj = `${tL.topOffsetsPx[nn.startIndex]??0}px`;
            e$[280] !== nj ? (eU = {
                marginTop: nj
            }, e$[280] = nj, e$[281] = eU) : eU = e$[281];
            let nC = ni.map(e => {
                let {
                    entry: t,
                    turnIndex: n
                } = e, l = tH[n].turnKey;
                return (0, r.jsx)(b, {
                    entry: t,
                    turnKey: l,
                    minHeightPx: tH[n].minHeightPx,
                    gapBeforePx: n === nn.startIndex ? 0 : tL.gapsBeforePx[n] ?? 0,
                    retainedTopPx: n < nn.startIndex || n >= nn.endIndex ? tL.topOffsetsPx[n] : void 0,
                    latestTurnFollowContentRef: n === tH.length - 1 && null != e9 ? nK : void 0,
                    RowComponent: e2,
                    measuredHeightPx: null == tE[l] ? void 0 : tL.heightsPx[n],
                    constrainedHeightPx: n !== tH.length - 1 && tN?.turnKey !== l && null == tE[l] ? tL.heightsPx[n] : void 0,
                    observeTurnElement: nb
                }, l)
            });
            return e$[282] !== eU || e$[283] !== nC ? (eW = (0, r.jsx)("div", {
                className: "flex flex-col",
                style: eU,
                children: nC
            }), e$[282] = eU, e$[283] = nC, e$[284] = eW) : eW = e$[284], e$[285] !== t9 || e$[286] !== eV || e$[287] !== eq || e$[288] !== eQ || e$[289] !== eW ? (eG = (0, r.jsxs)("div", {
                ref: t9,
                className: eV,
                style: eq,
                children: [eQ, eW]
            }), e$[285] = t9, e$[286] = eV, e$[287] = eq, e$[288] = eQ, e$[289] = eW, e$[290] = eG) : eG = e$[290], eG
        }

        function P(e, t) {
            return e.turnIndex - t.turnIndex
        }

        function w() {
            return new F
        }
        let b = (0, u.memo)(function(e) {
            let t, n, a, o, u, s, c = (0, l.c)(25),
                {
                    entry: d,
                    turnKey: h,
                    minHeightPx: x,
                    gapBeforePx: g,
                    latestTurnFollowContentRef: m,
                    RowComponent: f,
                    constrainedHeightPx: y,
                    measuredHeightPx: v,
                    retainedTopPx: P,
                    observeTurnElement: w
                } = e;
            c[0] !== w || c[1] !== h ? (t = e => w(h, e), c[0] = w, c[1] = h, c[2] = t) : t = c[2];
            let b = (0, p.a)(t),
                B = null != v && null == x && null == m ? "" : void 0,
                K = null != P && "absolute inset-x-0",
                H = null != y && "overflow-hidden";
            c[3] !== K || c[4] !== H ? (n = (0, i.b)(K, H), c[3] = K, c[4] = H, c[5] = n) : n = c[5];
            let M = null != v ? "size" : void 0,
                I = v ?? y,
                S = null == P ? g : 0,
                R = null == v ? x : void 0;
            return c[6] !== P || c[7] !== M || c[8] !== I || c[9] !== S || c[10] !== R ? (a = {
                contain: M,
                height: I,
                marginTop: S,
                minHeight: R,
                top: P
            }, c[6] = P, c[7] = M, c[8] = I, c[9] = S, c[10] = R, c[11] = a) : a = c[11], c[12] !== f || c[13] !== d || c[14] !== m ? (o = (0, r.jsx)(f, {
                entry: d,
                latestTurnFollowContentRef: m
            }), c[12] = f, c[13] = d, c[14] = m, c[15] = o) : o = c[15], c[16] !== b || c[17] !== o || c[18] !== h ? (u = (0, r.jsx)("div", {
                ref: b,
                className: "[&_[data-virtualized-turn-content]]:[content-visibility:visible]",
                "data-turn-key": h,
                children: o
            }), c[16] = b, c[17] = o, c[18] = h, c[19] = u) : u = c[19], c[20] !== a || c[21] !== u || c[22] !== B || c[23] !== n ? (s = (0, r.jsx)("div", {
                "data-measured-turn": B,
                className: n,
                style: a,
                children: u
            }), c[20] = a, c[21] = u, c[22] = B, c[23] = n, c[24] = s) : s = c[24], s
        });

        function B(e) {
            let {
                current: t,
                distanceFromBottomPx: n,
                layout: r,
                viewportHeightPx: l
            } = e, a = Math.min(n, r.totalHeightPx), i = K(r, a, l, t.renderedRange);
            return t.distanceFromBottomPx === a && t.viewportHeightPx === l && t.renderedRange.startIndex === i.startIndex && t.renderedRange.endIndex === i.endIndex && I(t.turnKeys, r.turnKeys) ? t : {
                distanceFromBottomPx: a,
                renderedRange: i,
                turnKeys: r.turnKeys,
                viewportHeightPx: l
            }
        }

        function K(e, t, n, r) {
            var l, a;
            let i = {
                    layout: e,
                    distanceFromBottomPx: t,
                    viewportHeightPx: n
                },
                o = (0, y.d)({
                    ...i,
                    overscanCount: 0,
                    overscanPx: n
                }),
                u = (0, y.d)({
                    ...i,
                    overscanCount: 1
                }),
                s = {
                    startIndex: Math.max(u.startIndex, o.startIndex),
                    endIndex: Math.min(u.endIndex, o.endIndex)
                };
            if (null != r && t <= 24 && r.endIndex === e.turnKeys.length && s.startIndex > r.startIndex) {
                let t = (0, y.d)({
                    ...i,
                    distanceFromBottomPx: e.heightsPx.at(-1) ?? 0,
                    overscanCount: 1
                });
                return {
                    startIndex: Math.max(r.startIndex, Math.min(s.startIndex, t.startIndex)),
                    endIndex: s.endIndex
                }
            }
            return null != r && (l = r, a = s, l.startIndex <= a.startIndex && l.endIndex >= a.endIndex) ? {
                startIndex: Math.max(r.startIndex, o.startIndex),
                endIndex: Math.min(r.endIndex, o.endIndex)
            } : s
        }

        function H(e) {
            let {
                distanceFromBottomPx: t,
                preferLatestVisibleRow: n,
                layout: r,
                measuredHeightsByKey: l,
                nextLayout: a,
                viewportHeightPx: i
            } = e, o = (0, y.d)({
                distanceFromBottomPx: t,
                layout: r,
                overscanCount: 0,
                viewportHeightPx: Math.max(0, i + Math.min(0, t))
            }), u = null;
            for (let e = o.startIndex; e < o.endIndex; e += 1) {
                let o = r.turnKeys[e];
                if (null != o && !r.gapKeys.has(o) && (!r.collapseEmptyRows || (r.heightsPx[e] ?? 0) > 0) && null != l[o] && a.turnIndexByKey.has(o) && (r.bottomOffsetsPx[e] ?? 0) < t + i && (r.bottomOffsetsPx[e] ?? 0) + (r.heightsPx[e] ?? 0) > t) {
                    if (n) u = o;
                    else if (null == u && (u = o), (r.bottomOffsetsPx[e] ?? 0) + (r.heightsPx[e] ?? 0) <= t + i) return o
                }
            }
            return u
        }

        function M() {
            let e = [];
            return (t, n, r, l, a) => {
                let i = (e, n) => null != a && n === t.length - 1 ? Math.max(e ?? 0, a) : e;
                return (t.length !== e.length || t.some((t, a) => {
                    let o = e[a],
                        u = r(t);
                    return n(t) !== o.turnKey || u.gapBeforePx !== o.gapBeforePx || u.estimatedHeightPx !== o.estimatedHeightPx || i(u.minHeightPx, a) !== o.minHeightPx || (l?.(t) ?? !0) !== o.anchorEligible
                })) && (e = t.map((e, t) => {
                    let a = r(e);
                    return {
                        turnKey: n(e),
                        gapBeforePx: a.gapBeforePx,
                        estimatedHeightPx: a.estimatedHeightPx,
                        minHeightPx: i(a.minHeightPx, t),
                        anchorEligible: l?.(e) ?? !0
                    }
                })), e
            }
        }

        function I(e, t) {
            return e === t || e.length === t.length && e.every((e, n) => e === t[n])
        }

        function S(e) {
            return Math.max(0, e?.() ?? 0)
        }

        function R(e, t) {
            return Math.max(0, e - t)
        }

        function E(e) {
            let t = {};
            return Object.setPrototypeOf(t, null), Object.assign(t, e)
        }
        class F {
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
        n.d(t, {}, {
            a: v,
            b: function(e) {
                let t, n, a, i, o = (0, l.c)(8);
                return o[0] !== e ? ({
                    entries: n,
                    RowComponent: t,
                    ...a
                } = e, o[0] = e, o[1] = t, o[2] = n, o[3] = a) : (t = o[1], n = o[2], a = o[3]), o[4] !== t || o[5] !== n || o[6] !== a ? (i = (0, r.jsx)(v, {
                    ...a,
                    rows: n,
                    ...y.g,
                    renderRow: t
                }), o[4] = t, o[5] = n, o[6] = a, o[7] = i) : i = o[7], i
            }
        })
    }),
    t9ay: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            a = n("zd8w"),
            i = n("fNSv");
        n.d(t, {}, {
            a: function(e) {
                let t, n, o = (0, l.c)(13);
                if ("virtualized" === e.mode) {
                    let t, n;
                    if (o[0] !== e) {
                        let {
                            mode: n,
                            ...r
                        } = e;
                        t = r, o[0] = e, o[1] = t
                    } else t = o[1];
                    return o[2] !== t ? (n = (0, r.jsx)(i.a, {
                        ...t
                    }), o[2] = t, o[3] = n) : n = o[3], n
                }
                let {
                    rows: u,
                    getRowKey: s,
                    renderRow: c
                } = e;
                if (o[4] !== s || o[5] !== c || o[6] !== u) {
                    let e;
                    o[8] !== s || o[9] !== c ? (e = (e, t) => (0, r.jsx)(a.Fragment, {
                        children: c(e, t)
                    }, s(e)), o[8] = s, o[9] = c, o[10] = e) : e = o[10], t = u.map(e), o[4] = s, o[5] = c, o[6] = u, o[7] = t
                } else t = o[7];
                return o[11] !== t ? (n = (0, r.jsx)(r.Fragment, {
                    children: t
                }), o[11] = t, o[12] = n) : n = o[12], n
            }
        })
    }),
    g3o5: (function(e, t, n) {
        var r = n("SZCv"),
            l = n.n(r),
            a = n("Q840"),
            i = n("OWtl");
        let o = (0, a.u)(i.a, () => new Map),
            u = (0, a.c)(i.a, e => {
                let {
                    get: t
                } = e;
                return [...t(o).keys()]
            }, {
                isEqual: l()
            });
        n.d(t, {}, {
            a: function(e, t) {
                return e.set(o, e => new Map(e).set(t, (e.get(t) ?? 0) + 1)), () => {
                    e.set(o, e => {
                        let n = new Map(e),
                            r = (n.get(t) ?? 1) - 1;
                        return 0 === r ? n.delete(t) : n.set(t, r), n
                    })
                }
            },
            b: u
        })
    })
};