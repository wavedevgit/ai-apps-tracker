export const __rspack_esm_ids = [109131];
export const __webpack_modules__ = {
    kScZ: (function(e, t) {
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
            c = n("kScZ");

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
                    [B, H] = (0, i.useState)(!1),
                    K = null != y && B,
                    M = w && K;
                p[0] === Symbol.for("react.memo_cache_sentinel") ? (t = e => {
                    if (null == e) return;
                    let t = () => {
                            H(null != e.querySelector('img[data-loaded="true"]'))
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
                }), p[1] = P, p[2] = n) : n = p[2], p[3] !== K || p[4] !== w ? (g = K ? {
                    expanded: w,
                    onToggle: () => b(x)
                } : void 0, p[3] = K, p[4] = w, p[5] = g) : g = p[5], p[6] !== K || p[7] !== y || p[8] !== M ? (m = null != y && (0, r.jsx)("div", {
                    className: c.a.disclosure,
                    "data-ready": K || void 0,
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
                }), p[6] = K, p[7] = y, p[8] = M, p[9] = m) : m = p[9], p[10] !== v || p[11] !== n || p[12] !== g || p[13] !== m ? (f = (0, r.jsx)(u.a, {
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
            h = n("IRkz"),
            x = n("V8uZ"),
            g = n("Sgcz"),
            m = n("wbOy"),
            f = n("nrZG");

        function p(e) {
            let t, n, s, d, f, p, v, P, w, b, B, H, K, M, I = (0, l.c)(43),
                {
                    className: R,
                    isExpandable: S,
                    review: E
                } = e,
                F = (0, u.a)(),
                [j, C] = (0, o.useState)(!1);
            I[0] !== F || I[1] !== E ? (t = (0, g.c)(F, E), I[0] = F, I[1] = E, I[2] = t) : t = I[2];
            let k = t;
            if (!(void 0 === S || S)) {
                let e, t;
                return I[3] !== R ? (e = (0, a.b)("min-w-0 truncate pt-1 text-codex-description/80", R), I[3] = R, I[4] = e) : e = I[4], I[5] !== e || I[6] !== k ? (t = (0, r.jsx)("div", {
                    className: e,
                    children: k
                }), I[5] = e, I[6] = k, I[7] = t) : t = I[7], t
            }
            let L = "denied" === E.status && "high" === E.riskLevel;
            I[8] !== F || I[9] !== E ? (n = (0, g.b)(F, E), I[8] = F, I[9] = E, I[10] = n) : n = I[10];
            let O = n;
            I[11] !== R ? (s = (0, a.b)("flex flex-col pt-1", R), I[11] = R, I[12] = s) : s = I[12], I[13] === Symbol.for("react.memo_cache_sentinel") ? (d = () => C(y), I[13] = d) : d = I[13];
            let z = "inProgress" === E.status,
                N = L ? "text-warning" : "text-codex-description/80 group-hover/automatic-approval-review:text-default";
            I[14] !== N ? (f = (0, a.b)("min-w-0 truncate", N), I[14] = N, I[15] = f) : f = I[15], I[16] !== z || I[17] !== f || I[18] !== k ? (p = (0, r.jsx)(m.a, {
                active: z,
                className: f,
                children: k
            }), I[16] = z, I[17] = f, I[18] = k, I[19] = p) : p = I[19];
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
            let D = j ? "auto" : 0,
                T = +!!j;
            I[28] !== D || I[29] !== T ? (b = {
                height: D,
                opacity: T
            }, I[28] = D, I[29] = T, I[30] = b) : b = I[30];
            let A = j ? "auto" : "none";
            return I[31] !== A ? (B = {
                overflow: "hidden",
                pointerEvents: A
            }, I[31] = A, I[32] = B) : B = I[32], I[33] !== O ? (H = (0, r.jsx)("p", {
                className: "max-w-[80ch] pt-1 text-size-chat leading-relaxed whitespace-pre-wrap text-text/60",
                children: O
            }), I[33] = O, I[34] = H) : H = I[34], I[35] !== b || I[36] !== B || I[37] !== H ? (K = (0, r.jsx)(i.a.div, {
                initial: !1,
                animate: b,
                transition: x.a,
                style: B,
                children: H
            }), I[35] = b, I[36] = B, I[37] = H, I[38] = K) : K = I[38], I[39] !== w || I[40] !== K || I[41] !== s ? (M = (0, r.jsxs)("div", {
                className: s,
                children: [w, K]
            }), I[39] = w, I[40] = K, I[41] = s, I[42] = M) : M = I[42], M
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
            s = n("IRkz"),
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
                        headerAction: H,
                        deniedActionCount: K,
                        workedDurationMs: M,
                        workedForItem: I,
                        isCollapsed: R,
                        onFocus: S,
                        onBlur: E,
                        onPointerEnter: F,
                        onPointerLeave: j,
                        onToggle: C
                    } = e,
                    k = void 0 === K ? 0 : K,
                    L = null != H && "flex min-w-0 items-start gap-3";
                w[0] !== L ? (t = (0, i.b)("text-size-chat text-secondary", L), w[0] = L, w[1] = t) : t = w[1];
                let O = null == H && "flex-wrap",
                    z = k > 0 && "w-full";
                w[2] !== O || w[3] !== z ? (n = (0, i.b)("inline-flex max-w-full text-size-chat", O, z), w[2] = O, w[3] = z, w[4] = n) : n = w[4];
                let N = null != H,
                    _ = !R,
                    D = null == H ? void 0 : "min-w-0 text-start whitespace-normal";
                w[5] !== b || w[6] !== M || w[7] !== I ? (d = b ?? (0, r.jsx)(x, {
                    className: "text-inherit",
                    workedDurationMs: M,
                    workedForItem: I
                }), w[5] = b, w[6] = M, w[7] = I, w[8] = d) : d = w[8], w[9] !== d || w[10] !== D ? (h = (0, r.jsx)("span", {
                    className: D,
                    children: d
                }), w[9] = d, w[10] = D, w[11] = h) : h = w[11];
                let T = R ? "rotate-0" : "rotate-90";
                return w[12] !== T ? (g = (0, i.b)("icon-2xs transition-transform duration-basic", T), w[12] = T, w[13] = g) : g = w[13], w[14] !== g ? (m = (0, r.jsx)(s.a, {
                    className: g
                }), w[14] = g, w[15] = m) : m = w[15], w[16] !== k ? (f = k > 0 ? (0, r.jsx)(a.a, {
                    content: (0, r.jsx)(o.a, {
                        id: "localConversation.deniedActionsTooltip",
                        defaultMessage: "{count, plural, one {Auto-review denied # action. View the action and why it was denied.} other {Auto-review denied # actions. View the actions and why they were denied.}}",
                        values: {
                            count: k
                        }
                    }),
                    children: (0, r.jsxs)("span", {
                        className: "ms-auto inline-flex items-center gap-1 text-secondary",
                        "data-denied-action-count": !0,
                        children: [(0, r.jsx)(c.a, {}), (0, r.jsx)(o.a, {
                            id: "localConversation.deniedActionsCount",
                            defaultMessage: "{count, plural, one {# denied action} other {# denied actions}}",
                            values: {
                                count: k
                            }
                        })]
                    })
                }) : null, w[16] = k, w[17] = f) : f = w[17], w[18] !== E || w[19] !== S || w[20] !== F || w[21] !== j || w[22] !== C || w[23] !== h || w[24] !== m || w[25] !== f || w[26] !== n || w[27] !== N || w[28] !== _ ? (p = (0, r.jsxs)(u.a, {
                    className: n,
                    allowShrink: N,
                    color: "ghostTertiary",
                    radius: "small",
                    size: "inline",
                    "data-turn-disclosure-button": "",
                    "aria-expanded": _,
                    onFocus: S,
                    onBlur: E,
                    onPointerEnter: F,
                    onPointerLeave: j,
                    onClick: C,
                    children: [h, m, f]
                }), w[18] = E, w[19] = S, w[20] = F, w[21] = j, w[22] = C, w[23] = h, w[24] = m, w[25] = f, w[26] = n, w[27] = N, w[28] = _, w[29] = p) : p = w[29], w[30] !== H || w[31] !== p || w[32] !== t ? (y = (0, r.jsxs)("div", {
                    className: t,
                    children: [p, H]
                }), w[30] = H, w[31] = p, w[32] = t, w[33] = y) : y = w[33], w[34] !== B ? (v = null != B ? (0, r.jsx)("div", {
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
    S1aY: (function(e, t, n) {
        n.d(t, {
            a: () => j
        });
        var r = n("ABep"),
            l = n("QosV"),
            a = n("zd8w"),
            i = n("v8gE"),
            o = n("on57"),
            u = n("Q840"),
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
            let t, n, v, F, j, C, k, L, O, z, N, _, D, T, A, V, q, Q, U, W, G, $, Z, X, Y, J, ee, et, en, er, el, ea, ei, eo, eu, es, ec, ed, eh, ex, eg, em, ef, ep, ey, ev, eP, ew, eb, eB, eH, eK, eM, eI, eR, eS, eE, eF, ej, eC, ek, eL, eO, ez, eN, e_, eD, eT, eA, eV, eq, eQ, eU, eW, eG, e$ = (0, l.c)(293),
                {
                    collapseEmptyRows: eZ,
                    rows: eX,
                    getRowKey: eY,
                    getRowGeometry: eJ,
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
                tx = void 0 !== eZ && eZ,
                tg = void 0 === e8 ? 12 : e8,
                tm = void 0 !== te && te,
                tf = void 0 !== tt && tt,
                tp = (0, u.z)(f.b);
            e$[0] !== th ? (t = th ?? [], e$[0] = th, e$[1] = t) : t = e$[1];
            let ty = [...t, ...tp],
                [tv, tP] = (0, a.useState)(null),
                [tw] = (0, a.useState)(M),
                tb = eX.length - 1;
            e$[2] !== eY || e$[3] !== tb || e$[4] !== eX ? (n = tb < 0 ? void 0 : eY(eX[tb]), e$[2] = eY, e$[3] = tb, e$[4] = eX, e$[5] = n) : n = e$[5];
            let tB = n,
                tH = tf && null != tv && tv.turnKey === tB ? tv.viewportHeightPx - tv.heightOutsideTurnPx : void 0;
            e$[6] !== tH || e$[7] !== tw || e$[8] !== eJ || e$[9] !== eY || e$[10] !== e1 || e$[11] !== eX ? (v = tw(eX, eY, eJ, e1, tH), e$[6] = tH, e$[7] = tw, e$[8] = eJ, e$[9] = eY, e$[10] = e1, e$[11] = eX, e$[12] = v) : v = e$[12];
            let tK = v,
                tM = (0, g.b)(),
                {
                    notifyLayoutResize: tI
                } = tM,
                tR = (0, c.c)(),
                tS = tR * (globalThis.devicePixelRatio ?? 1);
            e$[13] !== tl?.turnHeightsByKey ? (F = () => E(tl?.turnHeightsByKey), e$[13] = tl?.turnHeightsByKey, e$[14] = F) : F = e$[14];
            let [tE, tF] = (0, a.useState)(F), [tj, tC] = (0, a.useState)(null);
            e$[15] !== tx || e$[16] !== tK || e$[17] !== tg || e$[18] !== tS || e$[19] !== tE ? (j = (0, y.a)({
                collapseEmptyRows: tx,
                entries: tK,
                gapPx: tg,
                measuredHeightsByKey: tE,
                pixelScale: tS
            }), e$[15] = tx, e$[16] = tK, e$[17] = tg, e$[18] = tS, e$[19] = tE, e$[20] = j) : j = e$[20];
            let tk = j;
            e$[21] !== e6 || e$[22] !== tl || e$[23] !== tk || e$[24] !== tM ? (C = () => {
                var e, t, n;
                let r, l, a, i, o = R(e6);
                return e = tk, t = S(tM.getLastScrollDistanceFromBottomPx(), o), n = tl, r = n?.renderedWindow, l = r?.viewportHeightPx ?? 800, a = Math.min(t, e.totalHeightPx), i = H(e, a, l), {
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
            }, e$[21] = e6, e$[22] = tl, e$[23] = tk, e$[24] = tM, e$[25] = C) : C = e$[25];
            let [tL, tO] = (0, a.useState)(C), [tz] = (0, a.useState)(w), tN = (0, a.useSyncExternalStore)(tz.subscribe, tz.getSnapshot, tz.getSnapshot), t_ = (0, a.useRef)(null), tD = (0, a.useRef)(tE), tT = (0, a.useRef)(0);
            e$[26] === Symbol.for("react.memo_cache_sentinel") ? (k = e => {
                tT.current = e;
                let t = t_.current;
                null != t && (t.style.minHeight = e > 0 ? `${e}px` : "")
            }, e$[26] = k) : k = e$[26];
            let tA = (0, p.a)(k),
                tV = (0, a.useRef)(tL),
                tq = (0, a.useRef)(null);
            e$[27] === Symbol.for("react.memo_cache_sentinel") ? (L = new Map, e$[27] = L) : L = e$[27];
            let tQ = (0, a.useRef)(L);
            e$[28] === Symbol.for("react.memo_cache_sentinel") ? (O = new Map, e$[28] = O) : O = e$[28];
            let tU = (0, a.useRef)(O);
            e$[29] === Symbol.for("react.memo_cache_sentinel") ? (z = new WeakSet, e$[29] = z) : z = e$[29];
            let tW = (0, a.useRef)(z);
            e$[30] === Symbol.for("react.memo_cache_sentinel") ? (N = new Map, e$[30] = N) : N = e$[30];
            let tG = (0, a.useRef)(N);
            e$[31] === Symbol.for("react.memo_cache_sentinel") ? (_ = new Map, e$[31] = _) : _ = e$[31];
            let t$ = (0, a.useRef)(_),
                tZ = (0, a.useRef)(null),
                tX = (0, a.useRef)(null),
                tY = (0, a.useRef)(0),
                tJ = (0, a.useRef)(null),
                [t0, t1] = (0, a.useState)(null),
                t2 = (0, a.useRef)(!1),
                t3 = (0, a.useRef)(null),
                t4 = (0, a.useRef)(tk),
                t5 = (0, a.useRef)(tk),
                t8 = (0, a.useRef)(tk),
                t6 = (0, a.useRef)(eX),
                t7 = (0, a.useRef)(null);
            e$[32] !== tE ? (D = () => {
                tE !== tD.current && tF(tD.current)
            }, e$[32] = tE, e$[33] = D) : D = e$[33], e$[34] !== tx || e$[35] !== tK || e$[36] !== tg || e$[37] !== tS || e$[38] !== tE ? (T = [tx, tK, tg, tS, tE], e$[34] = tx, e$[35] = tK, e$[36] = tg, e$[37] = tS, e$[38] = tE, e$[39] = T) : T = e$[39], (0, a.useLayoutEffect)(D, T), e$[40] === Symbol.for("react.memo_cache_sentinel") ? (A = e => {
                t_.current = e, tC(e)
            }, e$[40] = A) : A = e$[40];
            let t9 = (0, p.a)(A);
            e$[41] !== tx || e$[42] !== tK || e$[43] !== tg || e$[44] !== tk || e$[45] !== tS || e$[46] !== tE ? (V = () => {
                if (t5.current !== tk) {
                    t5.current = tk, t4.current = tE === tD.current ? tk : (0, y.a)({
                        collapseEmptyRows: tx,
                        entries: tK,
                        gapPx: tg,
                        measuredHeightsByKey: tD.current,
                        pixelScale: tS
                    });
                    let e = t_.current;
                    null != e && (e.style.height = `${t4.current.totalHeightPx}px`)
                }
                return t4.current
            }, e$[41] = tx, e$[42] = tK, e$[43] = tg, e$[44] = tk, e$[45] = tS, e$[46] = tE, e$[47] = V) : V = e$[47];
            let ne = (0, p.a)(V);
            e$[48] !== e6 || e$[49] !== tM || e$[50] !== tR ? (q = e => {
                let t = tM.getScrollElement(),
                    n = t_.current,
                    r = t?.firstElementChild;
                return null == n || null == r ? e - R(e6) : e - (0, c.b)(r.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, tR)
            }, e$[48] = e6, e$[49] = tM, e$[50] = tR, e$[51] = q) : q = e$[51];
            let nt = (0, p.a)(q),
                nn = tL.renderedRange;
            if (null != tN) {
                let e = (0, y.c)({
                    layout: tk,
                    turnKey: tN.turnKey,
                    viewportHeightPx: tL.viewportHeightPx
                });
                null != e && (nn = H(tk, e, tL.viewportHeightPx))
            } else if (!I(tL.turnKeys, tk.turnKeys)) {
                let e = tL.turnKeys[tL.renderedRange.startIndex];
                null != e && (nn = (0, y.e)({
                    anchorKey: e,
                    layout: tk,
                    previousRange: nn
                }) ?? H(tk, tL.distanceFromBottomPx, tL.viewportHeightPx))
            }
            e$[52] !== tr ? (Q = () => {
                null == tZ.current && tr?.()
            }, e$[52] = tr, e$[53] = Q) : Q = e$[53];
            let nr = (0, p.a)(Q);
            e$[54] === Symbol.for("react.memo_cache_sentinel") ? (U = () => {
                null != t3.current && (window.cancelAnimationFrame(t3.current), t3.current = null)
            }, e$[54] = U) : U = e$[54];
            let nl = (0, p.a)(U);
            e$[55] !== tK.length || e$[56] !== e4 || e$[57] !== nr ? (W = () => {
                null == e4 || t2.current || null != t3.current || null == t_.current || tK.length > 0 && 0 === tU.current.size || (t3.current = window.requestAnimationFrame(() => {
                    t3.current = window.requestAnimationFrame(() => {
                        t3.current = null, t2.current || null == t_.current || tK.length > 0 && 0 === tU.current.size || (t2.current = !0, nr(), e4())
                    })
                }))
            }, e$[55] = tK.length, e$[56] = e4, e$[57] = nr, e$[58] = W) : W = e$[58];
            let na = (0, p.a)(W),
                ni = eX.slice(nn.startIndex, nn.endIndex).map((e, t) => ({
                    entry: e,
                    turnIndex: nn.startIndex + t
                })),
                no = tK.length > 0 && 0 === ni.length;
            for (let e of new Set(ty)) {
                let t = tk.turnIndexByKey.get(e);
                null == t || t >= nn.startIndex && t < nn.endIndex || ni.push({
                    entry: eX[t],
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
                    }(ty, tk, t ? 0 : S(e, R(e6)), tV.current.viewportHeightPx + 24 * !!t) : null, nu, t)
                });
            e$[60] !== ns || e$[61] !== tM ? ($ = () => {
                ns(tM.getLastScrollDistanceFromBottomPx())
            }, e$[60] = ns, e$[61] = tM, e$[62] = $) : $ = e$[62], e$[63] !== tk || e$[64] !== to || e$[65] !== tN || e$[66] !== tL.renderedRange || e$[67] !== tL.viewportHeightPx || e$[68] !== ns || e$[69] !== tp || e$[70] !== th || e$[71] !== eX || e$[72] !== tM ? (Z = [tk, to, tN, tL.renderedRange, tL.viewportHeightPx, ns, tp, th, eX, tM], e$[63] = tk, e$[64] = to, e$[65] = tN, e$[66] = tL.renderedRange, e$[67] = tL.viewportHeightPx, e$[68] = ns, e$[69] = tp, e$[70] = th, e$[71] = eX, e$[72] = tM, e$[73] = Z) : Z = e$[73], (0, a.useLayoutEffect)($, Z), e$[74] !== ts || e$[75] !== tc || e$[76] !== tM ? (X = () => {
                if (null == ts || null == tc || null != tZ.current || tG.current.size > 0) return;
                let e = tM.getScrollElement(),
                    t = tU.current.get(ts);
                null != t && tW.current.has(t) && !((tD.current[ts] ?? 0) <= 0) && null != e && !(e.clientHeight <= 0) && tc(ts, t)
            }, e$[74] = ts, e$[75] = tc, e$[76] = tM, e$[77] = X) : X = e$[77];
            let nc = (0, p.a)(X);
            e$[78] !== e6 || e$[79] !== tn || e$[80] !== e7 || e$[81] !== e9 || e$[82] !== tm || e$[83] !== nr || e$[84] !== tM || e$[85] !== tz || e$[86] !== tA ? (Y = (e, t) => {
                let n = R(e6);
                if (null != e.latestTurnHeightChange && (e9?.(e.latestTurnHeightChange), tT.current > 0)) {
                    let e = n - R(e6);
                    e > 0 && tA(tT.current + e)
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
            }, e$[78] = e6, e$[79] = tn, e$[80] = e7, e$[81] = e9, e$[82] = tm, e$[83] = nr, e$[84] = tM, e$[85] = tz, e$[86] = tA, e$[87] = Y) : Y = e$[87];
            let nd = (0, p.a)(Y);
            e$[88] !== ne ? (J = (e, t) => {
                if (null != tZ.current || t <= 0) return;
                let n = tV.current,
                    r = B({
                        current: n,
                        distanceFromBottomPx: e,
                        layout: ne(),
                        viewportHeightPx: t
                    });
                r === n || (tV.current = r, r.renderedRange.startIndex === n.renderedRange.startIndex && r.renderedRange.endIndex === n.renderedRange.endIndex && I(r.turnKeys, n.turnKeys) || tO(r))
            }, e$[88] = ne, e$[89] = J) : J = e$[89];
            let nh = (0, p.a)(J);
            e$[90] !== nu || e$[91] !== to ? (ee = () => () => to?.(void 0, nu), et = [nu, to], e$[90] = nu, e$[91] = to, e$[92] = ee, e$[93] = et) : (ee = e$[92], et = e$[93]), (0, a.useLayoutEffect)(ee, et), e$[94] !== ne || e$[95] !== ti ? (en = (e, t, n) => {
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
            e$[103] !== ne || e$[104] !== eX ? (ea = e => {
                let {
                    viewportStartPx: t,
                    viewportEndPx: n
                } = e;
                return (0, y.f)(eX, ne(), t, n)
            }, e$[103] = ne, e$[104] = eX, e$[105] = ea) : ea = e$[105];
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
            e$[110] !== tx || e$[111] !== nd || e$[112] !== tK || e$[113] !== tg || e$[114] !== e6 || e$[115] !== ne || e$[116] !== nt || e$[117] !== tn || e$[118] !== eJ || e$[119] !== tS || e$[120] !== tm || e$[121] !== eX || e$[122] !== tM || e$[123] !== tz || e$[124] !== tA || e$[125] !== tR ? (eu = (e, t, n) => {
                var r;
                let l = void 0 === n ? "measured" : n,
                    a = ne(),
                    i = tM.getScrollElement();
                if (i?.getClientRects().length === 0) return !1;
                let o = tZ.current,
                    u = tD.current,
                    d = (e, t) => {
                        let n = a.turnIndexByKey.get(e);
                        return Math.max(+!tx, t, (null == n ? void 0 : eJ(eX[n]).minHeightPx) ?? 0)
                    };
                if ("controller" === l && null == o) {
                    let t = !1;
                    for (let [n, r] of e) {
                        let {
                            element: e,
                            heightPx: l
                        } = r;
                        if (l <= 0 || u[n] !== d(n, l)) {
                            t = !0;
                            break
                        }
                        let a = tU.current.get(n);
                        a === e && tW.current.add(a)
                    }
                    if (!t) return !1
                }
                let h = u,
                    x = 0,
                    g = !1,
                    f = null,
                    p = 0,
                    v = !1,
                    P = !1,
                    w = !1,
                    b = "controller" === l ? tM.getLastScrollDistanceFromBottomPx({
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
                    H = R(e6),
                    M = S(b, H),
                    F = tm ? null : tn?.() ?? null,
                    j = null == o ? M : tV.current.distanceFromBottomPx,
                    C = j;
                if (tm && null == tz.getSnapshot() && tn?.() == null) {
                    let e = I(t8.current.turnKeys, a.turnKeys) ? a : t8.current,
                        t = e === a ? o?.scrollDistanceFromBottomPx ?? b : b,
                        n = K({
                            distanceFromBottomPx: nt(t),
                            preferLatestVisibleRow: t < H,
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
                    null != c && (C = a.bottomOffsetsPx[c] ?? j)
                }
                for (let [t, n] of e) {
                    let {
                        element: e,
                        heightPx: r
                    } = n, l = tU.current.get(t);
                    if (l !== e) continue;
                    r > 0 ? tW.current.add(l) : tW.current.delete(l);
                    let i = d(t, r),
                        o = u[t];
                    if (o === i) continue;
                    h === u && (h = E(u)), h[t] = i, w = w || i > Math.max(+!tx, r);
                    let s = a.turnIndexByKey.get(t);
                    if (null == s) continue;
                    let c = s === a.turnKeys.length - 1,
                        m = Math.round(Math.max(tK[s]?.minHeightPx ?? 0, i) * tS) / tS,
                        y = m - (a.heightsPx[s] ?? m);
                    P = P || null == o || 0 !== y, c && (g = !0, x += null == o ? 0 : y, f = l), v = v || tx && (0 === m || 0 === a.heightsPx[s]), (a.bottomOffsetsPx[s] ?? 0) <= C && (tm || null != tn && !c) && (p += y)
                }
                if (h === u) return !1;
                if (!P) return tD.current = h, w && tF(h), !1;
                let k = (0, y.a)({
                    collapseEmptyRows: tx,
                    entries: tK,
                    gapPx: tg,
                    measuredHeightsByKey: h,
                    pixelScale: tS
                });
                if (v)
                    for (let [e, t] of k.gapsBeforePx.entries()) {
                        let n = t - (a.gapsBeforePx[e] ?? 0);
                        (a.bottomOffsetsPx[e] ?? 0) + (a.heightsPx[e] ?? 0) <= C && (tm || null != tn && e !== a.turnKeys.length - 1) && (p += n)
                    }
                let L = tT.current;
                if (L > 0) {
                    let e = Math.max(0, L - a.totalHeightPx),
                        t = Math.max(0, L - k.totalHeightPx);
                    p += t - e, x > 0 && e > t && (x = Math.max(0, x - (e - t))), e > 0 && 0 === t && tA(0)
                }
                let O = tm && tM.shouldFollowContentGrowth() && (r = b, 0 === H && r <= 24) && f?.querySelector("[data-preserve-turn-viewport]") == null,
                    z = o?.restoreScrollDistanceFromBottom || null != F,
                    N = null;
                z || (N = O ? 0 : 0 !== p ? (o?.scrollDistanceFromBottomPx ?? tM.getUnroundedScrollDistanceFromBottomPx(b)) + p : o?.scrollDistanceFromBottomPx ?? (tm || !g ? b : null));
                let _ = tV.current.distanceFromBottomPx;
                z ? _ = F ?? _ : null != N && (_ = S(N, H));
                let D = B({
                        current: tV.current,
                        distanceFromBottomPx: _,
                        layout: k,
                        viewportHeightPx: tV.current.viewportHeightPx
                    }),
                    T = o?.latestTurnHeightChange,
                    A = f ?? T?.turnElement ?? null,
                    V = {
                        afterMeasure: o?.afterMeasure,
                        latestTurnHeightChange: g || null != T ? {
                            heightDeltaPx: (T?.heightDeltaPx ?? 0) + x,
                            heightPx: k.heightsPx.at(-1) ?? null,
                            turnElement: A,
                            followContentHeightPx: null
                        } : null,
                        restoreScrollDistanceFromBottom: z,
                        scrollDistanceFromBottomPx: N,
                        turnHeightsByKey: h
                    },
                    q = t_.current;
                for (let [t, n] of e) {
                    let {
                        element: e
                    } = n, r = k.turnIndexByKey.get(t);
                    tU.current.get(t) === e && null != r && null != e.parentElement && (e.parentElement.style.height = `${k.heightsPx[r]}px`, e.parentElement.style.minHeight = "")
                }
                if (g && 1 === e.size && null == o && D === tV.current && k.gapsBeforePx.at(-1) === a.gapsBeforePx.at(-1) && null != q) {
                    tD.current = h, t4.current = k;
                    let e = t8.current;
                    return t8.current = k, q.style.height = `${k.totalHeightPx}px`, nd(V, {
                        previous: e,
                        estimated: a
                    }), !0
                }
                null == t7.current && (t7.current = a);
                let Q = () => {
                    tD.current = h, t4.current = k, tF(h), D !== tV.current && (tV.current = D, tO(D))
                };
                return tZ.current = V, void 0 === t || t ? (0, s.flushSync)(Q) : Q(), !0
            }, e$[110] = tx, e$[111] = nd, e$[112] = tK, e$[113] = tg, e$[114] = e6, e$[115] = ne, e$[116] = nt, e$[117] = tn, e$[118] = eJ, e$[119] = tS, e$[120] = tm, e$[121] = eX, e$[122] = tM, e$[123] = tz, e$[124] = tA, e$[125] = tR, e$[126] = eu) : eu = e$[126];
            let nv = (0, p.a)(eu);
            e$[127] !== nv || e$[128] !== tI || e$[129] !== ny || e$[130] !== nc ? (es = e => {
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
                            if (o !== a.target || tW.current.has(o) || (n = !0), i > 0 && o === a.target && tD.current[l] === i) {
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
            }, e$[127] = nv, e$[128] = tI, e$[129] = ny, e$[130] = nc, e$[131] = es) : es = e$[131];
            let nP = (0, p.a)(es);
            e$[132] !== nP ? (ec = () => {
                if (null != tX.current) return tX.current;
                let e = new ResizeObserver(nP);
                return tX.current = e, e
            }, e$[132] = nP, e$[133] = ec) : ec = e$[133];
            let nw = (0, p.a)(ec);
            e$[134] !== nw || e$[135] !== na ? (ed = (e, t) => {
                if (null == t) return;
                tQ.current.set(t, {
                    kind: "turn",
                    turnKey: e
                }), tU.current.set(e, t), tW.current.delete(t), tG.current.set(e, t);
                let n = nw();
                return n.observe(t), na(), () => {
                    n.unobserve(t), tQ.current.delete(t), tG.current.get(e) === t && tG.current.delete(e), tU.current.get(e) === t && tU.current.delete(e)
                }
            }, e$[134] = nw, e$[135] = na, e$[136] = ed) : ed = e$[136];
            let nb = (0, p.a)(ed);
            e$[137] !== nv || e$[138] !== tR ? (eh = (e, t) => {
                let n = tU.current.get(e);
                if (null == n) return;
                let r = (0, c.b)(n.getBoundingClientRect().height, tR);
                if (!(r <= 0) && (nv(new Map([
                        [e, {
                            element: n,
                            heightPx: r
                        }]
                    ]), !1), null != t)) {
                    let e = tZ.current;
                    null == e ? t() : e.afterMeasure = t
                }
            }, e$[137] = nv, e$[138] = tR, e$[139] = eh) : eh = e$[139];
            let nB = (0, p.a)(eh);
            e$[140] !== nw ? (ex = e => {
                if (null == e) return;
                tQ.current.set(e, {
                    element: e,
                    kind: "latest-turn-follow-content"
                }), t$.current.set(e, 0);
                let t = nw();
                return t.observe(e), () => {
                    t.unobserve(e), tQ.current.delete(e), t$.current.delete(e)
                }
            }, e$[140] = nw, e$[141] = ex) : ex = e$[141];
            let nH = (0, p.a)(ex),
                nK = (0, a.useRef)(tB);
            e$[142] !== nv || e$[143] !== tB || e$[144] !== tR ? (eg = () => {
                let e = tG.current,
                    t = nK.current;
                if (nK.current = tB, null != t && t !== tB) {
                    let n = tU.current.get(t);
                    null != n && e.set(t, n)
                }
                if (0 === e.size) {
                    tY.current = 0;
                    return
                }
                if (null != tJ.current) return;
                if (tY.current >= 8) {
                    tJ.current = requestAnimationFrame(e => {
                        tJ.current = null, tY.current = 0, t1(e)
                    });
                    return
                }
                tY.current = tY.current + 1, tG.current = new Map;
                let n = new Map;
                if ((0, d.a)("virtualizedTurnList.readMountedHeights", () => {
                        for (let [t, r] of e) {
                            if (tU.current.get(t) !== r) continue;
                            let e = (0, c.b)(r.getBoundingClientRect().height, tR);
                            (e > 0 || r.getClientRects().length > 0) && n.set(t, {
                                element: r,
                                heightPx: e
                            })
                        }
                    }, e.size), n.size > 0) {
                    let t = tD.current;
                    if (nv(n, !1, "controller"))
                        for (let [n, r] of e)(null == t[n] || tY.current > 1) && tU.current.get(n) === r && tG.current.set(n, r);
                    else tY.current = 0
                }
            }, e$[142] = nv, e$[143] = tB, e$[144] = tR, e$[145] = eg) : eg = e$[145], (0, a.useLayoutEffect)(eg), e$[146] !== tK || e$[147] !== nB || e$[148] !== td ? (em = () => {
                let e = td ?? tK.at(-1)?.turnKey;
                null != e && nB(e)
            }, e$[146] = tK, e$[147] = nB, e$[148] = td, e$[149] = em) : em = e$[149];
            let nM = (0, p.a)(em);
            e$[150] !== tu || e$[151] !== nM ? (ef = () => {
                null != tu && nM()
            }, ep = [tu, nM], e$[150] = tu, e$[151] = nM, e$[152] = ef, e$[153] = ep) : (ef = e$[152], ep = e$[153]), (0, a.useLayoutEffect)(ef, ep), e$[154] !== nd || e$[155] !== tE ? (ey = () => {
                let e = tZ.current;
                null != e && e.turnHeightsByKey === tE && (tZ.current = null, nd(e))
            }, ev = [nd, tE], e$[154] = nd, e$[155] = tE, e$[156] = ey, e$[157] = ev) : (ey = e$[156], ev = e$[157]), (0, a.useLayoutEffect)(ey, ev), e$[158] !== tK || e$[159] !== tv || e$[160] !== tk.heightsPx || e$[161] !== tf || e$[162] !== tE || e$[163] !== tj || e$[164] !== tR ? (eP = e => {
                if (!tf || tv?.viewportHeightPx === e) return;
                if (null != tv) return void(0, s.flushSync)(() => {
                    tP({
                        ...tv,
                        viewportHeightPx: e
                    })
                });
                let t = tj?.closest("[data-thread-user-message-navigation-content]"),
                    n = t?.lastElementChild,
                    r = tK.at(-1)?.turnKey;
                if (null == t || null == n || null == r || tK.some(e => null == tE[e.turnKey])) return;
                let l = (0, c.b)(t.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, tR) - parseFloat(getComputedStyle(t).paddingBottom);
                l <= 24 || (0, s.flushSync)(() => {
                    tP({
                        turnKey: r,
                        heightOutsideTurnPx: e - (tk.heightsPx.at(-1) ?? 0) - l,
                        viewportHeightPx: e
                    })
                })
            }, e$[158] = tK, e$[159] = tv, e$[160] = tk.heightsPx, e$[161] = tf, e$[162] = tE, e$[163] = tj, e$[164] = tR, e$[165] = eP) : eP = e$[165];
            let nI = (0, p.a)(eP);
            e$[166] !== nf || e$[167] !== np || e$[168] !== nu || e$[169] !== nB || e$[170] !== e3 || e$[171] !== nm ? (ew = () => {
                if (null != e3) return e3({
                    getEntriesInViewport: nf,
                    getRowElement: nu,
                    getEntryGeometry: np,
                    measureTurnBeforePaint: nB,
                    scrollToKey: nm
                }), () => {
                    e3(null)
                }
            }, eb = [nf, nu, np, nB, e3, nm], e$[166] = nf, e$[167] = np, e$[168] = nu, e$[169] = nB, e$[170] = e3, e$[171] = nm, e$[172] = ew, e$[173] = eb) : (ew = e$[172], eb = e$[173]), (0, a.useEffect)(ew, eb), e$[174] !== nl ? (eB = () => () => {
                t2.current = !1, nl()
            }, eH = [nl], e$[174] = nl, e$[175] = eB, e$[176] = eH) : (eB = e$[175], eH = e$[176]), (0, a.useLayoutEffect)(eB, eH), e$[177] !== nl || e$[178] !== na ? (eK = () => (na(), nl), e$[177] = nl, e$[178] = na, e$[179] = eK) : eK = e$[179], e$[180] !== nl || e$[181] !== tK.length || e$[182] !== e4 || e$[183] !== na || e$[184] !== tj ? (eM = [nl, tK.length, e4, na, tj], e$[180] = nl, e$[181] = tK.length, e$[182] = e4, e$[183] = na, e$[184] = tj, e$[185] = eM) : eM = e$[185], (0, a.useEffect)(eK, eM), e$[186] !== tz ? (eI = () => {
                let e = tQ.current,
                    t = tU.current,
                    n = t$.current;
                return () => {
                    null != tJ.current && (cancelAnimationFrame(tJ.current), tJ.current = null), tX.current?.disconnect(), tX.current = null, e.clear(), t.clear(), tG.current.clear(), n.clear(), tZ.current = null, tz.replace(null)
                }
            }, eR = [tz], e$[186] = tz, e$[187] = eI, e$[188] = eR) : (eI = e$[187], eR = e$[188]), (0, a.useEffect)(eI, eR), e$[189] !== ta ? (eS = () => {
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
                    }(tD.current, tV.current))
                }
            }, eE = [ta], e$[189] = ta, e$[190] = eS, e$[191] = eE) : (eS = e$[190], eE = e$[191]), (0, a.useLayoutEffect)(eS, eE), e$[192] !== e0 || e$[193] !== tb || e$[194] !== tB || e$[195] !== eX ? (eF = tb < 0 ? void 0 : e0?.(eX[tb]) ?? tB, e$[192] = e0, e$[193] = tb, e$[194] = tB, e$[195] = eX, e$[196] = eF) : eF = e$[196];
            let nR = eF;
            e$[197] !== nR || e$[198] !== tM || e$[199] !== tA || e$[200] !== tj || e$[201] !== tR ? (ej = () => {
                if (null == tj || null == nR) return;
                let e = e => {
                    let t = tM.getScrollElement(),
                        n = e.target;
                    if (null == t || t.scrollTop <= 0 || !(n instanceof Element)) return;
                    let r = n.getBoundingClientRect(),
                        l = t.getBoundingClientRect().top;
                    r.bottom <= l || (n.hasAttribute("data-turn-transcript") && (tM.shouldFollowContentGrowth() || r.top < l) ? tA(0) : tA(Math.max(0, (0, c.b)(tj.getBoundingClientRect().height, tR) - (0, m.b)(t))))
                };
                return tj.addEventListener(x.a, e), () => {
                    tj.removeEventListener(x.a, e), tA(0)
                }
            }, eC = [nR, tM, tA, tj, tR], e$[197] = nR, e$[198] = tM, e$[199] = tA, e$[200] = tj, e$[201] = tR, e$[202] = ej, e$[203] = eC) : (ej = e$[202], eC = e$[203]), (0, a.useLayoutEffect)(ej, eC);
            let {
                addScrollListener: nS,
                addUserScrollListener: nE,
                getScrollElement: nF
            } = tM;
            e$[204] !== nS || e$[205] !== nE || e$[206] !== e6 || e$[207] !== nF || e$[208] !== tI || e$[209] !== nI || e$[210] !== tf || e$[211] !== nc || e$[212] !== nx || e$[213] !== ns || e$[214] !== nr || e$[215] !== tM || e$[216] !== tA || e$[217] !== tj || e$[218] !== nh ? (ek = () => {
                let e = nF();
                if (null == e) return;
                let t = () => (null == tq.current && (tq.current = e.clientHeight), tq.current || tV.current.viewportHeightPx || 800),
                    n = nS(e => {
                        nh(S(e, R(e6)), t()), ns(e)
                    }),
                    r = nE((e, n) => {
                        let r = tT.current;
                        if (r > 0) {
                            let t = r - e;
                            tA(t > t4.current.totalHeightPx && e > 0 ? t : 0)
                        }
                        nx(S(e, R(e6)), t(), null != n && e > n)
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
            }, eL = [nS, nE, e6, nF, tI, nI, nc, tf, nx, ns, nr, tM, tA, tj, nh], e$[204] = nS, e$[205] = nE, e$[206] = e6, e$[207] = nF, e$[208] = tI, e$[209] = nI, e$[210] = tf, e$[211] = nc, e$[212] = nx, e$[213] = ns, e$[214] = nr, e$[215] = tM, e$[216] = tA, e$[217] = tj, e$[218] = nh, e$[219] = ek, e$[220] = eL) : (ek = e$[219], eL = e$[220]), (0, a.useLayoutEffect)(ek, eL), e$[221] !== nv || e$[222] !== e6 || e$[223] !== tk || e$[224] !== tN || e$[225] !== tM || e$[226] !== tz || e$[227] !== ng || e$[228] !== nh || e$[229] !== tR ? (eO = () => {
                if (null == tN || tz.getSnapshot() !== tN || null != tJ.current) return;
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
                if (nv(t, !1) || null != tZ.current) return;
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
                        layout: tk,
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
                        layout: tk,
                        targetElement: r,
                        turnElement: n,
                        turnKey: tN.turnKey,
                        viewportHeightPx: e.clientHeight,
                        windowZoom: tR
                    });
                if (null == l) return void queueMicrotask(() => ng(tN));
                let a = "top" === tN.align && null != r ? Math.max(0, tM.getLastScrollDistanceFromBottomPx() - (0, c.b)(r.getBoundingClientRect().top - (0, m.d)(e, tR), tR) + 10) : l + R(e6);
                tM.scrollToDistanceFromBottomPx(a, "instant", "user"), nh(Math.max(0, a - R(e6)), e.clientHeight), queueMicrotask(() => ng(tN))
            }, e$[221] = nv, e$[222] = e6, e$[223] = tk, e$[224] = tN, e$[225] = tM, e$[226] = tz, e$[227] = ng, e$[228] = nh, e$[229] = tR, e$[230] = eO) : eO = e$[230], e$[231] !== nv || e$[232] !== e6 || e$[233] !== tk || e$[234] !== t0 || e$[235] !== tN || e$[236] !== tM || e$[237] !== tz || e$[238] !== ng || e$[239] !== nh || e$[240] !== tR ? (ez = [nv, tk, t0, tN, tM, tz, ng, e6, nh, tR], e$[231] = nv, e$[232] = e6, e$[233] = tk, e$[234] = t0, e$[235] = tN, e$[236] = tM, e$[237] = tz, e$[238] = ng, e$[239] = nh, e$[240] = tR, e$[241] = ez) : ez = e$[241], (0, a.useLayoutEffect)(eO, ez), e$[242] !== e6 || e$[243] !== ne || e$[244] !== nt || e$[245] !== tn || e$[246] !== tN || e$[247] !== tm || e$[248] !== eX || e$[249] !== tM || e$[250] !== nh ? (eN = () => {
                var e;
                if (null != tZ.current) return;
                let t = t8.current,
                    n = ne(),
                    r = t7.current ?? n;
                t7.current = null, t8.current = n;
                let l = t6.current !== eX;
                if (t6.current = eX, null != tN || !tm && t.turnKeys.at(-1) !== r.turnKeys.at(-1) || t === r && !l) return;
                let a = R(e6),
                    i = tM.getLastScrollDistanceFromBottomPx({
                        includePendingUserScroll: !0
                    });
                if (null != (tn?.() ?? null)) return;
                if (tM.shouldFollowContentGrowth() && (e = i, 0 === a && e <= 24)) return void tM.compensateScrollToDistanceFromBottomPx(0);
                if (t === r) return;
                let o = K({
                    distanceFromBottomPx: nt(i),
                    preferLatestVisibleRow: i < a,
                    layout: t,
                    measuredHeightsByKey: tD.current,
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
                null != c && (c !== s || t.totalHeightPx !== r.totalHeightPx) && (nh(S(c, a), tV.current.viewportHeightPx), tM.compensateScrollToDistanceFromBottomPx(c))
            }, e$[242] = e6, e$[243] = ne, e$[244] = nt, e$[245] = tn, e$[246] = tN, e$[247] = tm, e$[248] = eX, e$[249] = tM, e$[250] = nh, e$[251] = eN) : eN = e$[251], e$[252] !== e6 || e$[253] !== ne || e$[254] !== nt || e$[255] !== tn || e$[256] !== tk || e$[257] !== tN || e$[258] !== tm || e$[259] !== eX || e$[260] !== tM || e$[261] !== nh ? (e_ = [e6, ne, nt, tn, tk, tN, tm, eX, tM, nh], e$[252] = e6, e$[253] = ne, e$[254] = nt, e$[255] = tn, e$[256] = tk, e$[257] = tN, e$[258] = tm, e$[259] = eX, e$[260] = tM, e$[261] = nh, e$[262] = e_) : e_ = e$[262], (0, a.useLayoutEffect)(eN, e_), e$[263] !== tN || e$[264] !== nx || e$[265] !== nr || e$[266] !== nh ? (eD = () => {
                null == tN && null == tZ.current && (nh(tV.current.distanceFromBottomPx, tV.current.viewportHeightPx), nr(), nx(tV.current.distanceFromBottomPx, tV.current.viewportHeightPx, !1))
            }, e$[263] = tN, e$[264] = nx, e$[265] = nr, e$[266] = nh, e$[267] = eD) : eD = e$[267], e$[268] !== tk || e$[269] !== tN || e$[270] !== nx || e$[271] !== nr || e$[272] !== nh ? (eT = [tk, tN, nx, nr, nh], e$[268] = tk, e$[269] = tN, e$[270] = nx, e$[271] = nr, e$[272] = nh, e$[273] = eT) : eT = e$[273], (0, a.useLayoutEffect)(eD, eT), e$[274] !== nc ? (eA = () => {
                nc()
            }, e$[274] = nc, e$[275] = eA) : eA = e$[275], (0, a.useLayoutEffect)(eA), e$[276] !== e5 ? (eV = (0, o.b)("relative shrink-0", e5), e$[276] = e5, e$[277] = eV) : eV = e$[277], e$[278] !== tk.totalHeightPx ? (eq = {
                height: tk.totalHeightPx
            }, e$[278] = tk.totalHeightPx, e$[279] = eq) : eq = e$[279], e$[280] !== no ? (eQ = (0, r.jsx)(i.b, {
                name: "conversation rows",
                active: no
            }), e$[280] = no, e$[281] = eQ) : eQ = e$[281];
            let nj = `${tk.topOffsetsPx[nn.startIndex]??0}px`;
            e$[282] !== nj ? (eU = {
                marginTop: nj
            }, e$[282] = nj, e$[283] = eU) : eU = e$[283];
            let nC = ni.map(e => {
                let {
                    entry: t,
                    turnIndex: n
                } = e, l = tK[n].turnKey;
                return (0, r.jsx)(b, {
                    entry: t,
                    turnKey: l,
                    minHeightPx: tK[n].minHeightPx,
                    reservedHeightPx: eJ(t).minHeightPx,
                    gapBeforePx: n === nn.startIndex ? 0 : tk.gapsBeforePx[n] ?? 0,
                    retainedTopPx: n < nn.startIndex || n >= nn.endIndex ? tk.topOffsetsPx[n] : void 0,
                    latestTurnFollowContentRef: n === tK.length - 1 && null != e9 ? nH : void 0,
                    RowComponent: e2,
                    measuredHeightPx: null == tE[l] ? void 0 : tk.heightsPx[n],
                    constrainedHeightPx: n !== tK.length - 1 && tN?.turnKey !== l && null == tE[l] ? tk.heightsPx[n] : void 0,
                    observeTurnElement: nb
                }, l)
            });
            return e$[284] !== eU || e$[285] !== nC ? (eW = (0, r.jsx)("div", {
                className: "flex flex-col",
                style: eU,
                children: nC
            }), e$[284] = eU, e$[285] = nC, e$[286] = eW) : eW = e$[286], e$[287] !== t9 || e$[288] !== eV || e$[289] !== eq || e$[290] !== eQ || e$[291] !== eW ? (eG = (0, r.jsxs)("div", {
                ref: t9,
                className: eV,
                style: eq,
                children: [eQ, eW]
            }), e$[287] = t9, e$[288] = eV, e$[289] = eq, e$[290] = eQ, e$[291] = eW, e$[292] = eG) : eG = e$[292], eG
        }

        function P(e, t) {
            return e.turnIndex - t.turnIndex
        }

        function w() {
            return new F
        }
        let b = (0, a.memo)(function(e) {
            let t, n, i, u, s, c, d, h = (0, l.c)(28),
                {
                    entry: x,
                    turnKey: g,
                    minHeightPx: m,
                    gapBeforePx: f,
                    latestTurnFollowContentRef: p,
                    RowComponent: y,
                    constrainedHeightPx: v,
                    measuredHeightPx: P,
                    reservedHeightPx: w,
                    retainedTopPx: b,
                    observeTurnElement: B
                } = e,
                H = (0, a.useRef)(null);
            h[0] !== B || h[1] !== g ? (t = () => B(g, H.current), h[0] = B, h[1] = g, h[2] = t) : t = h[2], h[3] !== B || h[4] !== w || h[5] !== g ? (n = [B, w, g], h[3] = B, h[4] = w, h[5] = g, h[6] = n) : n = h[6], (0, a.useLayoutEffect)(t, n);
            let K = null != P && null == m && null == p ? "" : void 0,
                M = null != b && "absolute inset-x-0",
                I = null != v && "overflow-hidden";
            h[7] !== M || h[8] !== I ? (i = (0, o.b)(M, I), h[7] = M, h[8] = I, h[9] = i) : i = h[9];
            let R = null != P ? "size" : void 0,
                S = P ?? v,
                E = null == b ? f : 0,
                F = null == P ? m : void 0;
            return h[10] !== b || h[11] !== F || h[12] !== R || h[13] !== S || h[14] !== E ? (u = {
                contain: R,
                height: S,
                marginTop: E,
                minHeight: F,
                top: b
            }, h[10] = b, h[11] = F, h[12] = R, h[13] = S, h[14] = E, h[15] = u) : u = h[15], h[16] !== y || h[17] !== x || h[18] !== p ? (s = (0, r.jsx)(y, {
                entry: x,
                latestTurnFollowContentRef: p
            }), h[16] = y, h[17] = x, h[18] = p, h[19] = s) : s = h[19], h[20] !== s || h[21] !== g ? (c = (0, r.jsx)("div", {
                ref: H,
                className: "[&_[data-virtualized-turn-content]]:[content-visibility:visible]",
                "data-turn-key": g,
                children: s
            }), h[20] = s, h[21] = g, h[22] = c) : c = h[22], h[23] !== u || h[24] !== c || h[25] !== K || h[26] !== i ? (d = (0, r.jsx)("div", {
                "data-measured-turn": K,
                className: i,
                style: u,
                children: c
            }), h[23] = u, h[24] = c, h[25] = K, h[26] = i, h[27] = d) : d = h[27], d
        });

        function B(e) {
            let {
                current: t,
                distanceFromBottomPx: n,
                layout: r,
                viewportHeightPx: l
            } = e, a = Math.min(n, r.totalHeightPx), i = H(r, a, l, t.renderedRange);
            return t.distanceFromBottomPx === a && t.viewportHeightPx === l && t.renderedRange.startIndex === i.startIndex && t.renderedRange.endIndex === i.endIndex && I(t.turnKeys, r.turnKeys) ? t : {
                distanceFromBottomPx: a,
                renderedRange: i,
                turnKeys: r.turnKeys,
                viewportHeightPx: l
            }
        }

        function H(e, t, n, r) {
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

        function K(e) {
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

        function R(e) {
            return Math.max(0, e?.() ?? 0)
        }

        function S(e, t) {
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

        function j(e) {
            let t, n, i = (0, l.c)(13);
            if ("virtualized" === e.mode) {
                let t, n;
                if (i[0] !== e) {
                    let {
                        mode: n,
                        ...r
                    } = e;
                    t = r, i[0] = e, i[1] = t
                } else t = i[1];
                return i[2] !== t ? (n = (0, r.jsx)(v, {
                    ...t
                }), i[2] = t, i[3] = n) : n = i[3], n
            }
            let {
                rows: o,
                getRowKey: u,
                renderRow: s
            } = e;
            if (i[4] !== u || i[5] !== s || i[6] !== o) {
                let e;
                i[8] !== u || i[9] !== s ? (e = (e, t) => (0, r.jsx)(a.Fragment, {
                    children: s(e, t)
                }, u(e)), i[8] = u, i[9] = s, i[10] = e) : e = i[10], t = o.map(e), i[4] = u, i[5] = s, i[6] = o, i[7] = t
            } else t = i[7];
            return i[11] !== t ? (n = (0, r.jsx)(r.Fragment, {
                children: t
            }), i[11] = t, i[12] = n) : n = i[12], n
        }
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