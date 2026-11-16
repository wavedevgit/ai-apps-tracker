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
            let g = void 0 === s ? "default" : s,
                x = "flush" !== g && "detail-kV0yGe",
                m = "steps" === g && "steps-SF26rj",
                f = "default" === g && "pt-(--conversation-activity-gap)",
                p = void 0 !== u && u && "ps-6";
            return h[6] !== t || h[7] !== x || h[8] !== m || h[9] !== f || h[10] !== p ? (c = (0, a.b)(x, m, f, p, t), h[6] = t, h[7] = x, h[8] = m, h[9] = f, h[10] = p, h[11] = c) : c = h[11], h[12] !== n || h[13] !== o || h[14] !== c ? (d = (0, r.jsx)(i.a, {
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

        function g(e) {
            return !e
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, x, m, f, p = (0, l.c)(15),
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
                let S = t;
                return p[1] !== P ? (n = (0, r.jsx)("span", {
                    className: "block truncate text-text/40",
                    children: (0, r.jsx)(o.a, {
                        id: "localConversation.imageView.summary",
                        defaultMessage: "{imageCount, plural, one {Viewed an image} other {Viewed # images}}",
                        values: {
                            imageCount: P
                        }
                    })
                }), p[1] = P, p[2] = n) : n = p[2], p[3] !== H || p[4] !== w ? (x = H ? {
                    expanded: w,
                    onToggle: () => b(g)
                } : void 0, p[3] = H, p[4] = w, p[5] = x) : x = p[5], p[6] !== H || p[7] !== y || p[8] !== M ? (m = null != y && (0, r.jsx)("div", {
                    className: c.a.disclosure,
                    "data-ready": H || void 0,
                    "aria-hidden": !M,
                    inert: !M,
                    children: (0, r.jsx)("div", {
                        className: "min-h-0 overflow-clip",
                        children: (0, r.jsx)(s.a, {
                            variant: "steps",
                            children: (0, r.jsx)("div", {
                                ref: S,
                                "data-horizontal-scroll": !0,
                                className: (0, a.b)(c.a.gallery, "horizontal-scroll-fade-mask hide-scrollbar grid min-w-0 auto-cols-max grid-flow-col items-start justify-start gap-2 overflow-x-auto overflow-y-hidden pb-1"),
                                onLoadCapture: h,
                                onErrorCapture: d,
                                children: y
                            })
                        })
                    })
                }), p[6] = H, p[7] = y, p[8] = M, p[9] = m) : m = p[9], p[10] !== v || p[11] !== n || p[12] !== x || p[13] !== m ? (f = (0, r.jsx)(u.a, {
                    className: "relative overflow-clip",
                    icon: v,
                    summary: n,
                    externalDisclosure: x,
                    body: m
                }), p[10] = v, p[11] = n, p[12] = x, p[13] = m, p[14] = f) : f = p[14], f
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
            g = n("V8uZ"),
            x = n("Sgcz"),
            m = n("wbOy"),
            f = n("xoMY");

        function p(e) {
            let t, n, s, d, f, p, v, P, w, b, B, K, H, M, S = (0, l.c)(43),
                {
                    className: R,
                    isExpandable: I,
                    review: E
                } = e,
                F = (0, u.a)(),
                [j, C] = (0, o.useState)(!1);
            S[0] !== F || S[1] !== E ? (t = (0, x.c)(F, E), S[0] = F, S[1] = E, S[2] = t) : t = S[2];
            let L = t;
            if (!(void 0 === I || I)) {
                let e, t;
                return S[3] !== R ? (e = (0, a.b)("min-w-0 truncate pt-1 text-codex-description/80", R), S[3] = R, S[4] = e) : e = S[4], S[5] !== e || S[6] !== L ? (t = (0, r.jsx)("div", {
                    className: e,
                    children: L
                }), S[5] = e, S[6] = L, S[7] = t) : t = S[7], t
            }
            let k = "denied" === E.status && "high" === E.riskLevel;
            S[8] !== F || S[9] !== E ? (n = (0, x.b)(F, E), S[8] = F, S[9] = E, S[10] = n) : n = S[10];
            let O = n;
            S[11] !== R ? (s = (0, a.b)("flex flex-col pt-1", R), S[11] = R, S[12] = s) : s = S[12], S[13] === Symbol.for("react.memo_cache_sentinel") ? (d = () => C(y), S[13] = d) : d = S[13];
            let z = "inProgress" === E.status,
                N = k ? "text-warning" : "text-codex-description/80 group-hover/automatic-approval-review:text-default";
            S[14] !== N ? (f = (0, a.b)("min-w-0 truncate", N), S[14] = N, S[15] = f) : f = S[15], S[16] !== z || S[17] !== f || S[18] !== L ? (p = (0, r.jsx)(m.a, {
                active: z,
                className: f,
                children: L
            }), S[16] = z, S[17] = f, S[18] = L, S[19] = p) : p = S[19];
            let _ = j && "rotate-90 opacity-100";
            S[20] !== _ ? (v = (0, a.b)("icon-2xs shrink-0 text-tertiary transition-[opacity,transform] duration-basic opacity-0 group-hover/automatic-approval-review:opacity-100", _), S[20] = _, S[21] = v) : v = S[21], S[22] !== v ? (P = (0, r.jsx)(h.a, {
                className: v
            }), S[22] = v, S[23] = P) : P = S[23], S[24] !== j || S[25] !== P || S[26] !== p ? (w = (0, r.jsxs)(c.a, {
                className: "group/automatic-approval-review inline-flex w-fit max-w-full gap-1.5 text-start",
                color: "ghostMuted",
                focusRing: "inset",
                size: "inline",
                onClick: d,
                "aria-expanded": j,
                children: [p, P]
            }), S[24] = j, S[25] = P, S[26] = p, S[27] = w) : w = S[27];
            let A = j ? "auto" : 0,
                D = +!!j;
            S[28] !== A || S[29] !== D ? (b = {
                height: A,
                opacity: D
            }, S[28] = A, S[29] = D, S[30] = b) : b = S[30];
            let T = j ? "auto" : "none";
            return S[31] !== T ? (B = {
                overflow: "hidden",
                pointerEvents: T
            }, S[31] = T, S[32] = B) : B = S[32], S[33] !== O ? (K = (0, r.jsx)("p", {
                className: "max-w-[80ch] pt-1 text-size-chat leading-relaxed whitespace-pre-wrap text-text/60",
                children: O
            }), S[33] = O, S[34] = K) : K = S[34], S[35] !== b || S[36] !== B || S[37] !== K ? (H = (0, r.jsx)(i.a.div, {
                initial: !1,
                animate: b,
                transition: g.a,
                style: B,
                children: K
            }), S[35] = b, S[36] = B, S[37] = K, S[38] = H) : H = S[38], S[39] !== w || S[40] !== H || S[41] !== s ? (M = (0, r.jsxs)("div", {
                className: s,
                children: [w, H]
            }), S[39] = w, S[40] = H, S[41] = s, S[42] = M) : M = S[42], M
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

        function g(e) {
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
                let t, n, d, h, x, m, f, p, y, v, P, w = (0, l.c)(39),
                    {
                        label: b,
                        description: B,
                        headerAction: K,
                        deniedActionCount: H,
                        workedDurationMs: M,
                        workedForItem: S,
                        isCollapsed: R,
                        onFocus: I,
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
                    _ = !R,
                    A = null == K ? void 0 : "min-w-0 text-start whitespace-normal";
                w[5] !== b || w[6] !== M || w[7] !== S ? (d = b ?? (0, r.jsx)(g, {
                    className: "text-inherit",
                    workedDurationMs: M,
                    workedForItem: S
                }), w[5] = b, w[6] = M, w[7] = S, w[8] = d) : d = w[8], w[9] !== d || w[10] !== A ? (h = (0, r.jsx)("span", {
                    className: A,
                    children: d
                }), w[9] = d, w[10] = A, w[11] = h) : h = w[11];
                let D = R ? "rotate-0" : "rotate-90";
                return w[12] !== D ? (x = (0, i.b)("icon-2xs transition-transform duration-basic", D), w[12] = D, w[13] = x) : x = w[13], w[14] !== x ? (m = (0, r.jsx)(s.a, {
                    className: x
                }), w[14] = x, w[15] = m) : m = w[15], w[16] !== L ? (f = L > 0 ? (0, r.jsx)(a.a, {
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
                }) : null, w[16] = L, w[17] = f) : f = w[17], w[18] !== E || w[19] !== I || w[20] !== F || w[21] !== j || w[22] !== C || w[23] !== h || w[24] !== m || w[25] !== f || w[26] !== n || w[27] !== N || w[28] !== _ ? (p = (0, r.jsxs)(u.a, {
                    className: n,
                    allowShrink: N,
                    color: "ghostTertiary",
                    radius: "small",
                    size: "inline",
                    "aria-expanded": _,
                    onFocus: I,
                    onBlur: E,
                    onPointerEnter: F,
                    onPointerLeave: j,
                    onClick: C,
                    children: [h, m, f]
                }), w[18] = E, w[19] = I, w[20] = F, w[21] = j, w[22] = C, w[23] = h, w[24] = m, w[25] = f, w[26] = n, w[27] = N, w[28] = _, w[29] = p) : p = w[29], w[30] !== K || w[31] !== p || w[32] !== t ? (y = (0, r.jsxs)("div", {
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
                g = "activity" === c && "gap-(--conversation-activity-gap)";
            return s[4] !== t || s[5] !== h || s[6] !== g ? (o = (0, a.b)("flex flex-col", "stack-eQ550z", h, g, t), s[4] = t, s[5] = h, s[6] = g, s[7] = o) : o = s[7], s[8] !== n || s[9] !== d || s[10] !== o ? (u = (0, r.jsx)("div", {
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
                } = e, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e => !1 !== e.anchorEligible, o = new Set, u = [], s = [], c = [], d = new Map, h = [], g = 0;
                for (let [e, x] of n.entries()) {
                    let n = x.turnKey,
                        m = Object.hasOwn(l, n) ? l[n] : void 0,
                        f = Math.max(x.minHeightPx ?? 0, m ?? x.estimatedHeightPx ?? 280);
                    null != a && (f = Math.round(f * a) / a);
                    let p = (t ? g > 0 && f > 0 : e > 0) ? x.gapBeforePx ?? r : 0;
                    null != a && (p = Math.round(p * a) / a), g += p, u.push(p), i(x) || o.add(n), d.set(n, e), h.push(n), c.push(g), s.push(f), g += f
                }
                return {
                    bottomOffsetsPx: c.map((e, t) => g - e - (s[t] ?? 0)),
                    collapseEmptyRows: t,
                    gapKeys: o,
                    gapsBeforePx: u,
                    heightsPx: s,
                    topOffsetsPx: c,
                    totalHeightPx: g,
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
            o = n("BolX"),
            u = n("zd8w"),
            s = n("v7qY"),
            c = n("wD9O"),
            d = n("zm5q"),
            h = n("f4Vb"),
            g = n("QEDJ"),
            x = n("lsfk"),
            m = n("uYx2"),
            f = n("g3o5"),
            p = n("bIvi"),
            y = n("RKko");

        function v(e) {
            let t, n, v, F, j, C, L, k, O, z, N, _, A, D, T, V, q, Q, U, W, G, X, $, Y, J, Z, ee, et, en, er, el, ea, ei, eo, eu, es, ec, ed, eh, eg, ex, em, ef, ep, ey, ev, eP, ew, eb, eB, eK, eH, eM, eS, eR, eI, eE, eF, ej, eC, eL, ek, eO, ez, eN, e_, eA, eD, eT, eV, eq, eQ, eU, eW, eG, eX = (0, l.c)(291),
                {
                    collapseEmptyRows: e$,
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
                tg = void 0 !== e$ && e$,
                tx = void 0 === e8 ? 12 : e8,
                tm = void 0 !== te && te,
                tf = void 0 !== tt && tt,
                tp = (0, o.z)(f.b);
            eX[0] !== th ? (t = th ?? [], eX[0] = th, eX[1] = t) : t = eX[1];
            let ty = [...t, ...tp],
                [tv, tP] = (0, u.useState)(null),
                [tw] = (0, u.useState)(M),
                tb = eY.length - 1;
            eX[2] !== eJ || eX[3] !== tb || eX[4] !== eY ? (n = tb < 0 ? void 0 : eJ(eY[tb]), eX[2] = eJ, eX[3] = tb, eX[4] = eY, eX[5] = n) : n = eX[5];
            let tB = n,
                tK = tf && null != tv && tv.turnKey === tB ? tv.viewportHeightPx - tv.heightOutsideTurnPx : void 0;
            eX[6] !== tK || eX[7] !== tw || eX[8] !== eZ || eX[9] !== eJ || eX[10] !== e1 || eX[11] !== eY ? (v = tw(eY, eJ, eZ, e1, tK), eX[6] = tK, eX[7] = tw, eX[8] = eZ, eX[9] = eJ, eX[10] = e1, eX[11] = eY, eX[12] = v) : v = eX[12];
            let tH = v,
                tM = (0, x.b)(),
                {
                    notifyLayoutResize: tS
                } = tM,
                tR = (0, c.c)(),
                tI = tR * (globalThis.devicePixelRatio ?? 1);
            eX[13] !== tl?.turnHeightsByKey ? (F = () => E(tl?.turnHeightsByKey), eX[13] = tl?.turnHeightsByKey, eX[14] = F) : F = eX[14];
            let [tE, tF] = (0, u.useState)(F), [tj, tC] = (0, u.useState)(null);
            eX[15] !== tg || eX[16] !== tH || eX[17] !== tx || eX[18] !== tI || eX[19] !== tE ? (j = (0, y.a)({
                collapseEmptyRows: tg,
                entries: tH,
                gapPx: tx,
                measuredHeightsByKey: tE,
                pixelScale: tI
            }), eX[15] = tg, eX[16] = tH, eX[17] = tx, eX[18] = tI, eX[19] = tE, eX[20] = j) : j = eX[20];
            let tL = j;
            eX[21] !== e6 || eX[22] !== tl || eX[23] !== tL || eX[24] !== tM ? (C = () => {
                var e, t, n;
                let r, l, a, i, o = R(e6);
                return e = tL, t = I(tM.getLastScrollDistanceFromBottomPx(), o), n = tl, r = n?.renderedWindow, l = r?.viewportHeightPx ?? 800, a = Math.min(t, e.totalHeightPx), i = K(e, a, l), {
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
            }, eX[21] = e6, eX[22] = tl, eX[23] = tL, eX[24] = tM, eX[25] = C) : C = eX[25];
            let [tk, tO] = (0, u.useState)(C), [tz] = (0, u.useState)(w), tN = (0, u.useSyncExternalStore)(tz.subscribe, tz.getSnapshot, tz.getSnapshot), t_ = (0, u.useRef)(null), tA = (0, u.useRef)(tE), tD = (0, u.useRef)(0);
            eX[26] === Symbol.for("react.memo_cache_sentinel") ? (L = e => {
                tD.current = e;
                let t = t_.current;
                null != t && (t.style.minHeight = e > 0 ? `${e}px` : "")
            }, eX[26] = L) : L = eX[26];
            let tT = (0, p.a)(L),
                tV = (0, u.useRef)(tk),
                tq = (0, u.useRef)(null);
            eX[27] === Symbol.for("react.memo_cache_sentinel") ? (k = new Map, eX[27] = k) : k = eX[27];
            let tQ = (0, u.useRef)(k);
            eX[28] === Symbol.for("react.memo_cache_sentinel") ? (O = new Map, eX[28] = O) : O = eX[28];
            let tU = (0, u.useRef)(O);
            eX[29] === Symbol.for("react.memo_cache_sentinel") ? (z = new WeakSet, eX[29] = z) : z = eX[29];
            let tW = (0, u.useRef)(z);
            eX[30] === Symbol.for("react.memo_cache_sentinel") ? (N = new Map, eX[30] = N) : N = eX[30];
            let tG = (0, u.useRef)(N);
            eX[31] === Symbol.for("react.memo_cache_sentinel") ? (_ = new Map, eX[31] = _) : _ = eX[31];
            let tX = (0, u.useRef)(_),
                t$ = (0, u.useRef)(null),
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
            eX[32] !== tE ? (A = () => {
                tE !== tA.current && tF(tA.current)
            }, eX[32] = tE, eX[33] = A) : A = eX[33], eX[34] !== tg || eX[35] !== tH || eX[36] !== tx || eX[37] !== tI || eX[38] !== tE ? (D = [tg, tH, tx, tI, tE], eX[34] = tg, eX[35] = tH, eX[36] = tx, eX[37] = tI, eX[38] = tE, eX[39] = D) : D = eX[39], (0, u.useLayoutEffect)(A, D), eX[40] === Symbol.for("react.memo_cache_sentinel") ? (T = e => {
                t_.current = e, tC(e)
            }, eX[40] = T) : T = eX[40];
            let t9 = (0, p.a)(T);
            eX[41] !== tg || eX[42] !== tH || eX[43] !== tx || eX[44] !== tL || eX[45] !== tI || eX[46] !== tE ? (V = () => {
                if (t5.current !== tL) {
                    t5.current = tL, t4.current = tE === tA.current ? tL : (0, y.a)({
                        collapseEmptyRows: tg,
                        entries: tH,
                        gapPx: tx,
                        measuredHeightsByKey: tA.current,
                        pixelScale: tI
                    });
                    let e = t_.current;
                    null != e && (e.style.height = `${t4.current.totalHeightPx}px`)
                }
                return t4.current
            }, eX[41] = tg, eX[42] = tH, eX[43] = tx, eX[44] = tL, eX[45] = tI, eX[46] = tE, eX[47] = V) : V = eX[47];
            let ne = (0, p.a)(V);
            eX[48] !== e6 || eX[49] !== tM || eX[50] !== tR ? (q = e => {
                let t = tM.getScrollElement(),
                    n = t_.current,
                    r = t?.firstElementChild;
                return null == n || null == r ? e - R(e6) : e - (0, c.b)(r.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, tR)
            }, eX[48] = e6, eX[49] = tM, eX[50] = tR, eX[51] = q) : q = eX[51];
            let nt = (0, p.a)(q),
                nn = tk.renderedRange;
            if (null != tN) {
                let e = (0, y.c)({
                    layout: tL,
                    turnKey: tN.turnKey,
                    viewportHeightPx: tk.viewportHeightPx
                });
                null != e && (nn = K(tL, e, tk.viewportHeightPx))
            } else if (!S(tk.turnKeys, tL.turnKeys)) {
                let e = tk.turnKeys[tk.renderedRange.startIndex];
                null != e && (nn = (0, y.e)({
                    anchorKey: e,
                    layout: tL,
                    previousRange: nn
                }) ?? K(tL, tk.distanceFromBottomPx, tk.viewportHeightPx))
            }
            eX[52] !== tr ? (Q = () => {
                null == t$.current && tr?.()
            }, eX[52] = tr, eX[53] = Q) : Q = eX[53];
            let nr = (0, p.a)(Q);
            eX[54] === Symbol.for("react.memo_cache_sentinel") ? (U = () => {
                null != t3.current && (window.cancelAnimationFrame(t3.current), t3.current = null)
            }, eX[54] = U) : U = eX[54];
            let nl = (0, p.a)(U);
            eX[55] !== tH.length || eX[56] !== e4 || eX[57] !== nr ? (W = () => {
                null == e4 || t2.current || null != t3.current || null == t_.current || tH.length > 0 && 0 === tU.current.size || (t3.current = window.requestAnimationFrame(() => {
                    t3.current = window.requestAnimationFrame(() => {
                        t3.current = null, t2.current || null == t_.current || tH.length > 0 && 0 === tU.current.size || (t2.current = !0, nr(), e4())
                    })
                }))
            }, eX[55] = tH.length, eX[56] = e4, eX[57] = nr, eX[58] = W) : W = eX[58];
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
            ni.sort(P), eX[59] === Symbol.for("react.memo_cache_sentinel") ? (G = e => tU.current.get(e), eX[59] = G) : G = eX[59];
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
                    }(ty, tL, t ? 0 : I(e, R(e6)), tV.current.viewportHeightPx + 24 * !!t) : null, nu, t)
                });
            eX[60] !== ns || eX[61] !== tM ? (X = () => {
                ns(tM.getLastScrollDistanceFromBottomPx())
            }, eX[60] = ns, eX[61] = tM, eX[62] = X) : X = eX[62], eX[63] !== tL || eX[64] !== to || eX[65] !== tN || eX[66] !== tk.renderedRange || eX[67] !== tk.viewportHeightPx || eX[68] !== ns || eX[69] !== tp || eX[70] !== th || eX[71] !== eY || eX[72] !== tM ? ($ = [tL, to, tN, tk.renderedRange, tk.viewportHeightPx, ns, tp, th, eY, tM], eX[63] = tL, eX[64] = to, eX[65] = tN, eX[66] = tk.renderedRange, eX[67] = tk.viewportHeightPx, eX[68] = ns, eX[69] = tp, eX[70] = th, eX[71] = eY, eX[72] = tM, eX[73] = $) : $ = eX[73], (0, u.useLayoutEffect)(X, $), eX[74] !== ts || eX[75] !== tc || eX[76] !== tM ? (Y = () => {
                if (null == ts || null == tc || null != t$.current || tG.current.size > 0) return;
                let e = tM.getScrollElement(),
                    t = tU.current.get(ts);
                null != t && tW.current.has(t) && !((tA.current[ts] ?? 0) <= 0) && null != e && !(e.clientHeight <= 0) && tc(ts, t)
            }, eX[74] = ts, eX[75] = tc, eX[76] = tM, eX[77] = Y) : Y = eX[77];
            let nc = (0, p.a)(Y);
            eX[78] !== e6 || eX[79] !== tn || eX[80] !== e7 || eX[81] !== e9 || eX[82] !== tm || eX[83] !== nr || eX[84] !== tM || eX[85] !== tz || eX[86] !== tT ? (J = (e, t) => {
                let n = R(e6);
                if (null != e.latestTurnHeightChange && (e9?.(e.latestTurnHeightChange), tD.current > 0)) {
                    let e = n - R(e6);
                    e > 0 && tT(tD.current + e)
                }
                if (e.restoreScrollDistanceFromBottom) nr();
                else if (null != e.scrollDistanceFromBottomPx) {
                    var r, l;
                    let a, i = e.scrollDistanceFromBottomPx,
                        o = t?.previous ?? t8.current,
                        u = t?.estimated ?? t7.current,
                        s = t4.current;
                    tm && n > 0 && null != e.latestTurnHeightChange && null != u && u.totalHeightPx !== o.totalHeightPx && null == tz.getSnapshot() && tn?.() == null && (r = o, (a = (l = s).turnKeys.length - 1) > 0 && r.turnKeys.length === l.turnKeys.length && r.turnKeys[a] !== l.turnKeys[a] && r.turnKeys.every((e, t) => t === a || e === l.turnKeys[t] && r.topOffsetsPx[t] === l.topOffsetsPx[t] && r.heightsPx[t] === l.heightsPx[t])) && (i = tM.getUnroundedScrollDistanceFromBottomPx(tM.getLastScrollDistanceFromBottomPx()) + s.totalHeightPx - o.totalHeightPx, null != t7.current && (t7.current = o)), tM.compensateScrollToDistanceFromBottomPx(i + R(e6) - n, null != e.afterMeasure || null != tz.getSnapshot() || tn?.() != null || e7?.() ? void 0 : "turn-resize")
                }
                e.afterMeasure?.()
            }, eX[78] = e6, eX[79] = tn, eX[80] = e7, eX[81] = e9, eX[82] = tm, eX[83] = nr, eX[84] = tM, eX[85] = tz, eX[86] = tT, eX[87] = J) : J = eX[87];
            let nd = (0, p.a)(J);
            eX[88] !== ne ? (Z = (e, t) => {
                if (null != t$.current || t <= 0) return;
                let n = tV.current,
                    r = B({
                        current: n,
                        distanceFromBottomPx: e,
                        layout: ne(),
                        viewportHeightPx: t
                    });
                r === n || (tV.current = r, r.renderedRange.startIndex === n.renderedRange.startIndex && r.renderedRange.endIndex === n.renderedRange.endIndex && S(r.turnKeys, n.turnKeys) || tO(r))
            }, eX[88] = ne, eX[89] = Z) : Z = eX[89];
            let nh = (0, p.a)(Z);
            eX[90] !== nu || eX[91] !== to ? (ee = () => () => to?.(void 0, nu), et = [nu, to], eX[90] = nu, eX[91] = to, eX[92] = ee, eX[93] = et) : (ee = eX[92], et = eX[93]), (0, u.useLayoutEffect)(ee, et), eX[94] !== ne || eX[95] !== ti ? (en = (e, t, n) => {
                if (null == ti) return;
                let r = ne(),
                    l = Math.max(0, Math.min(r.totalHeightPx, r.totalHeightPx - e)),
                    a = Math.max(0, l - t);
                ti({
                    viewportEndPx: l,
                    viewportStartPx: a
                }, n)
            }, eX[94] = ne, eX[95] = ti, eX[96] = en) : en = eX[96];
            let ng = (0, p.a)(en);
            eX[97] !== tz ? (er = e => {
                tz.getSnapshot() === e && tz.replace(null)
            }, eX[97] = tz, eX[98] = er) : er = eX[98];
            let nx = (0, p.a)(er);
            eX[99] !== nu || eX[100] !== to || eX[101] !== tz ? (el = (e, t, n) => n?.signal?.aborted ? Promise.resolve() : (to?.(null, nu), new Promise(r => {
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
            })), eX[99] = nu, eX[100] = to, eX[101] = tz, eX[102] = el) : el = eX[102];
            let nm = (0, p.a)(el);
            eX[103] !== ne || eX[104] !== eY ? (ea = e => {
                let {
                    viewportStartPx: t,
                    viewportEndPx: n
                } = e;
                return (0, y.f)(eY, ne(), t, n)
            }, eX[103] = ne, eX[104] = eY, eX[105] = ea) : ea = eX[105];
            let nf = (0, p.a)(ea);
            eX[106] !== ne ? (ei = e => {
                let t = ne(),
                    n = t.turnIndexByKey.get(e);
                if (null == n) return null;
                let r = t.topOffsetsPx[n],
                    l = t.heightsPx[n];
                return null == r || null == l ? null : {
                    endPx: r + l,
                    startPx: r
                }
            }, eX[106] = ne, eX[107] = ei) : ei = eX[107];
            let np = (0, p.a)(ei);
            eX[108] !== e9 ? (eo = () => {
                let e = 0,
                    t = null;
                for (let [n, r] of tX.current) e += r, (null == t || t.compareDocumentPosition(n) === Node.DOCUMENT_POSITION_FOLLOWING) && (t = n);
                null != t && e9?.({
                    heightDeltaPx: null,
                    heightPx: null,
                    turnElement: t,
                    followContentHeightPx: e
                })
            }, eX[108] = e9, eX[109] = eo) : eo = eX[109];
            let ny = (0, p.a)(eo);
            eX[110] !== tg || eX[111] !== nd || eX[112] !== tH || eX[113] !== tx || eX[114] !== e6 || eX[115] !== ne || eX[116] !== nt || eX[117] !== tn || eX[118] !== tI || eX[119] !== tm || eX[120] !== tM || eX[121] !== tz || eX[122] !== tT || eX[123] !== tR ? (eu = (e, t, n) => {
                var r;
                let l = void 0 === n ? "measured" : n,
                    a = ne(),
                    i = tM.getScrollElement();
                if (i?.getClientRects().length === 0) return !1;
                let o = t$.current,
                    u = tA.current;
                if ("controller" === l && null == o) {
                    let t = !1;
                    for (let [n, r] of e) {
                        let {
                            element: e,
                            heightPx: l
                        } = r;
                        if (l <= 0 || u[n] !== Math.max(+!tg, l)) {
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
                    g = !1,
                    x = null,
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
                    }(tM, tR),
                    w = R(e6),
                    b = I(P, w),
                    K = tm ? null : tn?.() ?? null,
                    M = null == o ? b : tV.current.distanceFromBottomPx,
                    F = M;
                if (tm && null == tz.getSnapshot() && tn?.() == null) {
                    let e = S(t8.current.turnKeys, a.turnKeys) ? a : t8.current,
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
                    let i = Math.max(+!tg, r),
                        o = u[t];
                    if (o === i) continue;
                    d === u && (d = E(u)), d[t] = i;
                    let s = a.turnIndexByKey.get(t);
                    if (null == s) continue;
                    let c = s === a.turnKeys.length - 1,
                        m = Math.round(Math.max(tH[s]?.minHeightPx ?? 0, i) * tI) / tI,
                        y = m - (a.heightsPx[s] ?? m);
                    v = v || null == o || 0 !== y, c && (g = !0, h += null == o ? 0 : y, x = l), p = p || tg && (0 === m || 0 === a.heightsPx[s]), (a.bottomOffsetsPx[s] ?? 0) <= F && (tm || null != tn && !c) && (f += y)
                }
                if (d === u) return !1;
                if (!v) return tA.current = d, !1;
                let j = (0, y.a)({
                    collapseEmptyRows: tg,
                    entries: tH,
                    gapPx: tx,
                    measuredHeightsByKey: d,
                    pixelScale: tI
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
                let L = tm && tM.shouldFollowContentGrowth() && (r = P, 0 === w && r <= 24) && x?.querySelector("[data-preserve-turn-viewport]") == null,
                    k = o?.restoreScrollDistanceFromBottom || null != K,
                    O = null;
                k || (O = L ? 0 : 0 !== f ? (o?.scrollDistanceFromBottomPx ?? tM.getUnroundedScrollDistanceFromBottomPx(P)) + f : o?.scrollDistanceFromBottomPx ?? (tm || !g ? P : null));
                let z = tV.current.distanceFromBottomPx;
                k ? z = K ?? z : null != O && (z = I(O, w));
                let N = B({
                        current: tV.current,
                        distanceFromBottomPx: z,
                        layout: j,
                        viewportHeightPx: tV.current.viewportHeightPx
                    }),
                    _ = o?.latestTurnHeightChange,
                    A = x ?? _?.turnElement ?? null,
                    D = {
                        afterMeasure: o?.afterMeasure,
                        latestTurnHeightChange: g || null != _ ? {
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
                if (g && 1 === e.size && null == o && N === tV.current && j.gapsBeforePx.at(-1) === a.gapsBeforePx.at(-1) && null != T) {
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
                return t$.current = D, void 0 === t || t ? (0, s.flushSync)(V) : V(), !0
            }, eX[110] = tg, eX[111] = nd, eX[112] = tH, eX[113] = tx, eX[114] = e6, eX[115] = ne, eX[116] = nt, eX[117] = tn, eX[118] = tI, eX[119] = tm, eX[120] = tM, eX[121] = tz, eX[122] = tT, eX[123] = tR, eX[124] = eu) : eu = eX[124];
            let nv = (0, p.a)(eu);
            eX[125] !== nv || eX[126] !== tS || eX[127] !== ny || eX[128] !== nc ? (es = e => {
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
                            tX.current.set(e.element, i), l = !0
                    }
                }
                t.size > 0 && nv(t, !0, n ? "controller" : "measured"), l && ny(), nc(), (r || l) && tS?.()
            }, eX[125] = nv, eX[126] = tS, eX[127] = ny, eX[128] = nc, eX[129] = es) : es = eX[129];
            let nP = (0, p.a)(es);
            eX[130] !== nP ? (ec = () => {
                if (null != tY.current) return tY.current;
                let e = new ResizeObserver(nP);
                return tY.current = e, e
            }, eX[130] = nP, eX[131] = ec) : ec = eX[131];
            let nw = (0, p.a)(ec);
            eX[132] !== nw || eX[133] !== na ? (ed = (e, t) => {
                if (null == t) return;
                tQ.current.set(t, {
                    kind: "turn",
                    turnKey: e
                }), tU.current.set(e, t), tW.current.delete(t), tG.current.set(e, t);
                let n = nw();
                return n.observe(t), na(), () => {
                    n.unobserve(t), tQ.current.delete(t), tG.current.get(e) === t && tG.current.delete(e), tU.current.get(e) === t && tU.current.delete(e)
                }
            }, eX[132] = nw, eX[133] = na, eX[134] = ed) : ed = eX[134];
            let nb = (0, p.a)(ed);
            eX[135] !== nv || eX[136] !== tR ? (eh = (e, t) => {
                let n = tU.current.get(e);
                if (null == n) return;
                let r = (0, c.b)(n.getBoundingClientRect().height, tR);
                if (!(r <= 0) && (nv(new Map([
                        [e, {
                            element: n,
                            heightPx: r
                        }]
                    ]), !1), null != t)) {
                    let e = t$.current;
                    null == e ? t() : e.afterMeasure = t
                }
            }, eX[135] = nv, eX[136] = tR, eX[137] = eh) : eh = eX[137];
            let nB = (0, p.a)(eh);
            eX[138] !== nw ? (eg = e => {
                if (null == e) return;
                tQ.current.set(e, {
                    element: e,
                    kind: "latest-turn-follow-content"
                }), tX.current.set(e, 0);
                let t = nw();
                return t.observe(e), () => {
                    t.unobserve(e), tQ.current.delete(e), tX.current.delete(e)
                }
            }, eX[138] = nw, eX[139] = eg) : eg = eX[139];
            let nK = (0, p.a)(eg),
                nH = (0, u.useRef)(tB);
            eX[140] !== nv || eX[141] !== tB || eX[142] !== tR ? (ex = () => {
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
                            let e = (0, c.b)(r.getBoundingClientRect().height, tR);
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
            }, eX[140] = nv, eX[141] = tB, eX[142] = tR, eX[143] = ex) : ex = eX[143], (0, u.useLayoutEffect)(ex), eX[144] !== tH || eX[145] !== nB || eX[146] !== td ? (em = () => {
                let e = td ?? tH.at(-1)?.turnKey;
                null != e && nB(e)
            }, eX[144] = tH, eX[145] = nB, eX[146] = td, eX[147] = em) : em = eX[147];
            let nM = (0, p.a)(em);
            eX[148] !== tu || eX[149] !== nM ? (ef = () => {
                null != tu && nM()
            }, ep = [tu, nM], eX[148] = tu, eX[149] = nM, eX[150] = ef, eX[151] = ep) : (ef = eX[150], ep = eX[151]), (0, u.useLayoutEffect)(ef, ep), eX[152] !== nd || eX[153] !== tE ? (ey = () => {
                let e = t$.current;
                null != e && e.turnHeightsByKey === tE && (t$.current = null, nd(e))
            }, ev = [nd, tE], eX[152] = nd, eX[153] = tE, eX[154] = ey, eX[155] = ev) : (ey = eX[154], ev = eX[155]), (0, u.useLayoutEffect)(ey, ev), eX[156] !== tH || eX[157] !== tv || eX[158] !== tL.heightsPx || eX[159] !== tf || eX[160] !== tE || eX[161] !== tj || eX[162] !== tR ? (eP = e => {
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
                let l = (0, c.b)(t.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, tR) - parseFloat(getComputedStyle(t).paddingBottom);
                l <= 24 || (0, s.flushSync)(() => {
                    tP({
                        turnKey: r,
                        heightOutsideTurnPx: e - (tL.heightsPx.at(-1) ?? 0) - l,
                        viewportHeightPx: e
                    })
                })
            }, eX[156] = tH, eX[157] = tv, eX[158] = tL.heightsPx, eX[159] = tf, eX[160] = tE, eX[161] = tj, eX[162] = tR, eX[163] = eP) : eP = eX[163];
            let nS = (0, p.a)(eP);
            eX[164] !== nf || eX[165] !== np || eX[166] !== nu || eX[167] !== nB || eX[168] !== e3 || eX[169] !== nm ? (ew = () => {
                if (null != e3) return e3({
                    getEntriesInViewport: nf,
                    getRowElement: nu,
                    getEntryGeometry: np,
                    measureTurnBeforePaint: nB,
                    scrollToKey: nm
                }), () => {
                    e3(null)
                }
            }, eb = [nf, nu, np, nB, e3, nm], eX[164] = nf, eX[165] = np, eX[166] = nu, eX[167] = nB, eX[168] = e3, eX[169] = nm, eX[170] = ew, eX[171] = eb) : (ew = eX[170], eb = eX[171]), (0, u.useEffect)(ew, eb), eX[172] !== nl ? (eB = () => () => {
                t2.current = !1, nl()
            }, eK = [nl], eX[172] = nl, eX[173] = eB, eX[174] = eK) : (eB = eX[173], eK = eX[174]), (0, u.useLayoutEffect)(eB, eK), eX[175] !== nl || eX[176] !== na ? (eH = () => (na(), nl), eX[175] = nl, eX[176] = na, eX[177] = eH) : eH = eX[177], eX[178] !== nl || eX[179] !== tH.length || eX[180] !== e4 || eX[181] !== na || eX[182] !== tj ? (eM = [nl, tH.length, e4, na, tj], eX[178] = nl, eX[179] = tH.length, eX[180] = e4, eX[181] = na, eX[182] = tj, eX[183] = eM) : eM = eX[183], (0, u.useEffect)(eH, eM), eX[184] !== tz ? (eS = () => {
                let e = tQ.current,
                    t = tU.current,
                    n = tX.current;
                return () => {
                    null != tZ.current && (cancelAnimationFrame(tZ.current), tZ.current = null), tY.current?.disconnect(), tY.current = null, e.clear(), t.clear(), tG.current.clear(), n.clear(), t$.current = null, tz.replace(null)
                }
            }, eR = [tz], eX[184] = tz, eX[185] = eS, eX[186] = eR) : (eS = eX[185], eR = eX[186]), (0, u.useEffect)(eS, eR), eX[187] !== ta ? (eI = () => {
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
            }, eE = [ta], eX[187] = ta, eX[188] = eI, eX[189] = eE) : (eI = eX[188], eE = eX[189]), (0, u.useLayoutEffect)(eI, eE), eX[190] !== e0 || eX[191] !== tb || eX[192] !== tB || eX[193] !== eY ? (eF = tb < 0 ? void 0 : e0?.(eY[tb]) ?? tB, eX[190] = e0, eX[191] = tb, eX[192] = tB, eX[193] = eY, eX[194] = eF) : eF = eX[194];
            let nR = eF;
            eX[195] !== nR || eX[196] !== tM || eX[197] !== tT || eX[198] !== tj || eX[199] !== tR ? (ej = () => {
                if (null == tj || null == nR) return;
                let e = e => {
                    let t = tM.getScrollElement(),
                        n = e.target;
                    if (null == t || t.scrollTop <= 0 || !(n instanceof Element)) return;
                    let r = n.getBoundingClientRect(),
                        l = t.getBoundingClientRect().top;
                    r.bottom <= l || (n.hasAttribute("data-turn-transcript") && (tM.shouldFollowContentGrowth() || r.top < l) ? tT(0) : tT(Math.max(0, (0, c.b)(tj.getBoundingClientRect().height, tR) - (0, m.b)(t))))
                };
                return tj.addEventListener(g.a, e), () => {
                    tj.removeEventListener(g.a, e), tT(0)
                }
            }, eC = [nR, tM, tT, tj, tR], eX[195] = nR, eX[196] = tM, eX[197] = tT, eX[198] = tj, eX[199] = tR, eX[200] = ej, eX[201] = eC) : (ej = eX[200], eC = eX[201]), (0, u.useLayoutEffect)(ej, eC);
            let {
                addScrollListener: nI,
                addUserScrollListener: nE,
                getScrollElement: nF
            } = tM;
            eX[202] !== nI || eX[203] !== nE || eX[204] !== e6 || eX[205] !== nF || eX[206] !== tS || eX[207] !== nS || eX[208] !== tf || eX[209] !== nc || eX[210] !== ng || eX[211] !== ns || eX[212] !== nr || eX[213] !== tM || eX[214] !== tT || eX[215] !== tj || eX[216] !== nh ? (eL = () => {
                let e = nF();
                if (null == e) return;
                let t = () => (null == tq.current && (tq.current = e.clientHeight), tq.current || tV.current.viewportHeightPx || 800),
                    n = nI(e => {
                        nh(I(e, R(e6)), t()), ns(e)
                    }),
                    r = nE((e, n) => {
                        let r = tD.current;
                        if (r > 0) {
                            let t = r - e;
                            tT(t > t4.current.totalHeightPx && e > 0 ? t : 0)
                        }
                        ng(I(e, R(e6)), t(), null != n && e > n)
                    }),
                    l = new ResizeObserver(n => {
                        let r = n.find(t => t.target === e);
                        if (null != r) {
                            let {
                                height: e
                            } = (0, h.a)(r);
                            tq.current = e, nh(tV.current.distanceFromBottomPx, e), nr(), ns(tM.getLastScrollDistanceFromBottomPx())
                        }
                        nS(t()), nc(), null != r && tS?.()
                    });
                return l.observe(e), tf && null != tj && l.observe(tj), () => {
                    n(), r(), l.disconnect()
                }
            }, ek = [nI, nE, e6, nF, tS, nS, nc, tf, ng, ns, nr, tM, tT, tj, nh], eX[202] = nI, eX[203] = nE, eX[204] = e6, eX[205] = nF, eX[206] = tS, eX[207] = nS, eX[208] = tf, eX[209] = nc, eX[210] = ng, eX[211] = ns, eX[212] = nr, eX[213] = tM, eX[214] = tT, eX[215] = tj, eX[216] = nh, eX[217] = eL, eX[218] = ek) : (eL = eX[217], ek = eX[218]), (0, u.useLayoutEffect)(eL, ek), eX[219] !== nv || eX[220] !== e6 || eX[221] !== tL || eX[222] !== tN || eX[223] !== tM || eX[224] !== tz || eX[225] !== nx || eX[226] !== nh || eX[227] !== tR ? (eO = () => {
                if (null == tN || tz.getSnapshot() !== tN || null != tZ.current) return;
                let e = tM.getScrollElement();
                if (null == e) return;
                let t = new Map;
                for (let [e, n] of tU.current) {
                    let r = (0, c.b)(n.getBoundingClientRect().height, tR);
                    r > 0 && t.set(e, {
                        element: n,
                        heightPx: r
                    })
                }
                if (nv(t, !1) || null != t$.current) return;
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
                            g = (0, c.b)(d.height, i),
                            x = (n.bottomOffsetsPx[u] ?? 0) + (n.heightsPx[u] ?? 0) - h;
                        return "top" === t ? Math.max(0, x - o + 10) : Math.max(0, x - g / 2 - o / 2)
                    }({
                        align: tN.align,
                        layout: tL,
                        targetElement: r,
                        turnElement: n,
                        turnKey: tN.turnKey,
                        viewportHeightPx: e.clientHeight,
                        windowZoom: tR
                    });
                if (null == l) return void queueMicrotask(() => nx(tN));
                let a = "top" === tN.align && null != r ? Math.max(0, tM.getLastScrollDistanceFromBottomPx() - (0, c.b)(r.getBoundingClientRect().top - (0, m.d)(e, tR), tR) + 10) : l + R(e6);
                tM.scrollToDistanceFromBottomPx(a, "instant", "user"), nh(Math.max(0, a - R(e6)), e.clientHeight), queueMicrotask(() => nx(tN))
            }, eX[219] = nv, eX[220] = e6, eX[221] = tL, eX[222] = tN, eX[223] = tM, eX[224] = tz, eX[225] = nx, eX[226] = nh, eX[227] = tR, eX[228] = eO) : eO = eX[228], eX[229] !== nv || eX[230] !== e6 || eX[231] !== tL || eX[232] !== t0 || eX[233] !== tN || eX[234] !== tM || eX[235] !== tz || eX[236] !== nx || eX[237] !== nh || eX[238] !== tR ? (ez = [nv, tL, t0, tN, tM, tz, nx, e6, nh, tR], eX[229] = nv, eX[230] = e6, eX[231] = tL, eX[232] = t0, eX[233] = tN, eX[234] = tM, eX[235] = tz, eX[236] = nx, eX[237] = nh, eX[238] = tR, eX[239] = ez) : ez = eX[239], (0, u.useLayoutEffect)(eO, ez), eX[240] !== e6 || eX[241] !== ne || eX[242] !== nt || eX[243] !== tn || eX[244] !== tN || eX[245] !== tm || eX[246] !== eY || eX[247] !== tM || eX[248] !== nh ? (eN = () => {
                var e;
                if (null != t$.current) return;
                let t = t8.current,
                    n = ne(),
                    r = t7.current ?? n;
                t7.current = null, t8.current = n;
                let l = t6.current !== eY;
                if (t6.current = eY, null != tN || !tm && t.turnKeys.at(-1) !== r.turnKeys.at(-1) || t === r && !l) return;
                let a = R(e6),
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
                null != c && (c !== s || t.totalHeightPx !== r.totalHeightPx) && (nh(I(c, a), tV.current.viewportHeightPx), tM.compensateScrollToDistanceFromBottomPx(c))
            }, eX[240] = e6, eX[241] = ne, eX[242] = nt, eX[243] = tn, eX[244] = tN, eX[245] = tm, eX[246] = eY, eX[247] = tM, eX[248] = nh, eX[249] = eN) : eN = eX[249], eX[250] !== e6 || eX[251] !== ne || eX[252] !== nt || eX[253] !== tn || eX[254] !== tL || eX[255] !== tN || eX[256] !== tm || eX[257] !== eY || eX[258] !== tM || eX[259] !== nh ? (e_ = [e6, ne, nt, tn, tL, tN, tm, eY, tM, nh], eX[250] = e6, eX[251] = ne, eX[252] = nt, eX[253] = tn, eX[254] = tL, eX[255] = tN, eX[256] = tm, eX[257] = eY, eX[258] = tM, eX[259] = nh, eX[260] = e_) : e_ = eX[260], (0, u.useLayoutEffect)(eN, e_), eX[261] !== tN || eX[262] !== ng || eX[263] !== nr || eX[264] !== nh ? (eA = () => {
                null == tN && null == t$.current && (nh(tV.current.distanceFromBottomPx, tV.current.viewportHeightPx), nr(), ng(tV.current.distanceFromBottomPx, tV.current.viewportHeightPx, !1))
            }, eX[261] = tN, eX[262] = ng, eX[263] = nr, eX[264] = nh, eX[265] = eA) : eA = eX[265], eX[266] !== tL || eX[267] !== tN || eX[268] !== ng || eX[269] !== nr || eX[270] !== nh ? (eD = [tL, tN, ng, nr, nh], eX[266] = tL, eX[267] = tN, eX[268] = ng, eX[269] = nr, eX[270] = nh, eX[271] = eD) : eD = eX[271], (0, u.useLayoutEffect)(eA, eD), eX[272] !== nc ? (eT = () => {
                nc()
            }, eX[272] = nc, eX[273] = eT) : eT = eX[273], (0, u.useLayoutEffect)(eT), eX[274] !== e5 ? (eV = (0, i.b)("relative shrink-0", e5), eX[274] = e5, eX[275] = eV) : eV = eX[275], eX[276] !== tL.totalHeightPx ? (eq = {
                height: tL.totalHeightPx
            }, eX[276] = tL.totalHeightPx, eX[277] = eq) : eq = eX[277], eX[278] !== no ? (eQ = (0, r.jsx)(a.b, {
                name: "conversation rows",
                active: no
            }), eX[278] = no, eX[279] = eQ) : eQ = eX[279];
            let nj = `${tL.topOffsetsPx[nn.startIndex]??0}px`;
            eX[280] !== nj ? (eU = {
                marginTop: nj
            }, eX[280] = nj, eX[281] = eU) : eU = eX[281];
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
            return eX[282] !== eU || eX[283] !== nC ? (eW = (0, r.jsx)("div", {
                className: "flex flex-col",
                style: eU,
                children: nC
            }), eX[282] = eU, eX[283] = nC, eX[284] = eW) : eW = eX[284], eX[285] !== t9 || eX[286] !== eV || eX[287] !== eq || eX[288] !== eQ || eX[289] !== eW ? (eG = (0, r.jsxs)("div", {
                ref: t9,
                className: eV,
                style: eq,
                children: [eQ, eW]
            }), eX[285] = t9, eX[286] = eV, eX[287] = eq, eX[288] = eQ, eX[289] = eW, eX[290] = eG) : eG = eX[290], eG
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
                    minHeightPx: g,
                    gapBeforePx: x,
                    latestTurnFollowContentRef: m,
                    RowComponent: f,
                    constrainedHeightPx: y,
                    measuredHeightPx: v,
                    retainedTopPx: P,
                    observeTurnElement: w
                } = e;
            c[0] !== w || c[1] !== h ? (t = e => w(h, e), c[0] = w, c[1] = h, c[2] = t) : t = c[2];
            let b = (0, p.a)(t),
                B = null != v && null == g && null == m ? "" : void 0,
                K = null != P && "absolute inset-x-0",
                H = null != y && "overflow-hidden";
            c[3] !== K || c[4] !== H ? (n = (0, i.b)(K, H), c[3] = K, c[4] = H, c[5] = n) : n = c[5];
            let M = null != v ? "size" : void 0,
                S = v ?? y,
                R = null == P ? x : 0,
                I = null == v ? g : void 0;
            return c[6] !== P || c[7] !== M || c[8] !== S || c[9] !== R || c[10] !== I ? (a = {
                contain: M,
                height: S,
                marginTop: R,
                minHeight: I,
                top: P
            }, c[6] = P, c[7] = M, c[8] = S, c[9] = R, c[10] = I, c[11] = a) : a = c[11], c[12] !== f || c[13] !== d || c[14] !== m ? (o = (0, r.jsx)(f, {
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
            return t.distanceFromBottomPx === a && t.viewportHeightPx === l && t.renderedRange.startIndex === i.startIndex && t.renderedRange.endIndex === i.endIndex && S(t.turnKeys, r.turnKeys) ? t : {
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

        function S(e, t) {
            return e === t || e.length === t.length && e.every((e, n) => e === t[n])
        }

        function R(e) {
            return Math.max(0, e?.() ?? 0)
        }

        function I(e, t) {
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
            a = n("BolX"),
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