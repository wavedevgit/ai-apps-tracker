export const __rspack_esm_ids = [109131];
export const __webpack_modules__ = {
    PTqL: (function(e, t) {
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
                f = "default" === x && "pt-3",
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
            c = n("PTqL");

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
    QTNa: (function(e, t, n) {
        n.d(t, {}, {
            a: function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return "disclosure" === e && "item" === t || "bubble" === e && "bubble" === t ? "compact" : "bubble" === e || "bubble" === t ? "item" : n ? "activity" : "item"
            },
            b: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (e && t) return e.map(e => {
                    if (null != e && "adjacent-user-prompts" === e) return 4
                })
            }
        })
    }),
    eQiz: (function(e, t, n) {
        var r = n("zd8w");
        let l = (0, r.createContext)({}),
            a = (0, r.createContext)("legacy");
        n.d(t, {}, {
            a: l,
            b: a
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
            h = n("pnPL"),
            x = n("V8uZ"),
            g = n("Sgcz"),
            m = n("wbOy"),
            f = n("nrZG");

        function p(e) {
            let t, n, s, d, f, p, v, P, w, b, B, K, H, M, I = (0, l.c)(43),
                {
                    className: R,
                    isExpandable: S,
                    review: E
                } = e,
                F = (0, u.a)(),
                [j, C] = (0, o.useState)(!1);
            I[0] !== F || I[1] !== E ? (t = (0, g.c)(F, E), I[0] = F, I[1] = E, I[2] = t) : t = I[2];
            let L = t;
            if (!(void 0 === S || S)) {
                let e, t;
                return I[3] !== R ? (e = (0, a.b)("min-w-0 truncate pt-1 text-codex-description/80", R), I[3] = R, I[4] = e) : e = I[4], I[5] !== e || I[6] !== L ? (t = (0, r.jsx)("div", {
                    className: e,
                    children: L
                }), I[5] = e, I[6] = L, I[7] = t) : t = I[7], t
            }
            let k = "denied" === E.status && "high" === E.riskLevel;
            I[8] !== F || I[9] !== E ? (n = (0, g.b)(F, E), I[8] = F, I[9] = E, I[10] = n) : n = I[10];
            let z = n;
            I[11] !== R ? (s = (0, a.b)("flex flex-col pt-1", R), I[11] = R, I[12] = s) : s = I[12], I[13] === Symbol.for("react.memo_cache_sentinel") ? (d = () => C(y), I[13] = d) : d = I[13];
            let O = "inProgress" === E.status,
                _ = k ? "text-warning" : "text-codex-description/80 group-hover/automatic-approval-review:text-default";
            I[14] !== _ ? (f = (0, a.b)("min-w-0 truncate", _), I[14] = _, I[15] = f) : f = I[15], I[16] !== O || I[17] !== f || I[18] !== L ? (p = (0, r.jsx)(m.a, {
                active: O,
                className: f,
                children: L
            }), I[16] = O, I[17] = f, I[18] = L, I[19] = p) : p = I[19];
            let N = j && "rotate-90 opacity-100";
            I[20] !== N ? (v = (0, a.b)("icon-2xs shrink-0 text-tertiary transition-[opacity,transform] duration-basic opacity-0 group-hover/automatic-approval-review:opacity-100", N), I[20] = N, I[21] = v) : v = I[21], I[22] !== v ? (P = (0, r.jsx)(h.a, {
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
            let T = j ? "auto" : 0,
                A = +!!j;
            I[28] !== T || I[29] !== A ? (b = {
                height: T,
                opacity: A
            }, I[28] = T, I[29] = A, I[30] = b) : b = I[30];
            let D = j ? "auto" : "none";
            return I[31] !== D ? (B = {
                overflow: "hidden",
                pointerEvents: D
            }, I[31] = D, I[32] = B) : B = I[32], I[33] !== z ? (K = (0, r.jsx)("p", {
                className: "max-w-[80ch] pt-1 text-size-chat leading-relaxed whitespace-pre-wrap text-text/60",
                children: z
            }), I[33] = z, I[34] = K) : K = I[34], I[35] !== b || I[36] !== B || I[37] !== K ? (H = (0, r.jsx)(i.a.div, {
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
            s = n("pnPL"),
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
                        isCollapsed: R,
                        onFocus: S,
                        onBlur: E,
                        onPointerEnter: F,
                        onPointerLeave: j,
                        onToggle: C
                    } = e,
                    L = void 0 === H ? 0 : H,
                    k = null != K && "flex min-w-0 items-start gap-3";
                w[0] !== k ? (t = (0, i.b)("text-size-chat text-secondary", k), w[0] = k, w[1] = t) : t = w[1];
                let z = null == K && "flex-wrap",
                    O = L > 0 && "w-full";
                w[2] !== z || w[3] !== O ? (n = (0, i.b)("inline-flex max-w-full text-size-chat", z, O), w[2] = z, w[3] = O, w[4] = n) : n = w[4];
                let _ = null != K,
                    N = !R,
                    T = null == K ? void 0 : "min-w-0 text-start whitespace-normal";
                w[5] !== b || w[6] !== M || w[7] !== I ? (d = b ?? (0, r.jsx)(x, {
                    className: "text-inherit",
                    workedDurationMs: M,
                    workedForItem: I
                }), w[5] = b, w[6] = M, w[7] = I, w[8] = d) : d = w[8], w[9] !== d || w[10] !== T ? (h = (0, r.jsx)("span", {
                    className: T,
                    children: d
                }), w[9] = d, w[10] = T, w[11] = h) : h = w[11];
                let A = R ? "rotate-0" : "rotate-90";
                return w[12] !== A ? (g = (0, i.b)("icon-2xs transition-transform duration-basic", A), w[12] = A, w[13] = g) : g = w[13], w[14] !== g ? (m = (0, r.jsx)(s.a, {
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
                }) : null, w[16] = L, w[17] = f) : f = w[17], w[18] !== E || w[19] !== S || w[20] !== F || w[21] !== j || w[22] !== C || w[23] !== h || w[24] !== m || w[25] !== f || w[26] !== n || w[27] !== _ || w[28] !== N ? (p = (0, r.jsxs)(u.a, {
                    className: n,
                    allowShrink: _,
                    color: "ghostTertiary",
                    radius: "small",
                    size: "inline",
                    "data-turn-disclosure-button": "",
                    "aria-expanded": N,
                    onFocus: S,
                    onBlur: E,
                    onPointerEnter: F,
                    onPointerLeave: j,
                    onClick: C,
                    children: [h, m, f]
                }), w[18] = E, w[19] = S, w[20] = F, w[21] = j, w[22] = C, w[23] = h, w[24] = m, w[25] = f, w[26] = n, w[27] = _, w[28] = N, w[29] = p) : p = w[29], w[30] !== K || w[31] !== p || w[32] !== t ? (y = (0, r.jsxs)("div", {
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
            activity: "h-3",
            item: "h-4",
            compact: "h-2"
        };
        n.d(t, {}, {
            a: function(e) {
                let t, n, o = (0, l.c)(5),
                    {
                        variant: u,
                        className: s
                    } = e,
                    c = i[void 0 === u ? "item" : u];
                return o[0] !== s || o[1] !== c ? (t = (0, a.b)("w-full shrink-0", c, s), o[0] = s, o[1] = c, o[2] = t) : t = o[2], o[3] !== t ? (n = (0, r.jsx)("div", {
                    "aria-hidden": !0,
                    className: t
                }), o[3] = t, o[4] = n) : n = o[4], n
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
            let t, n, i, o, u, s, c = (0, l.c)(14);
            c[0] !== e ? ({
                as: i,
                className: t,
                spacing: o,
                ...n
            } = e, c[0] = e, c[1] = t, c[2] = n, c[3] = i, c[4] = o) : (t = c[1], n = c[2], i = c[3], o = c[4]);
            let d = void 0 === i ? "div" : i,
                h = void 0 === o ? "item" : o,
                x = "custom" === h ? void 0 : h,
                g = "item" === h && "gap-4",
                m = "activity" === h && "gap-3";
            return c[5] !== t || c[6] !== g || c[7] !== m ? (u = (0, a.b)("flex flex-col", "stack-eQ550z", g, m, t), c[5] = t, c[6] = g, c[7] = m, c[8] = u) : u = c[8], c[9] !== d || c[10] !== n || c[11] !== x || c[12] !== u ? (s = (0, r.jsx)(d, {
                ...n,
                "data-spacing": x,
                className: u
            }), c[9] = d, c[10] = n, c[11] = x, c[12] = u, c[13] = s) : s = c[13], s
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
            a: () => L
        });
        var r = n("ABep"),
            l = n("QosV"),
            a = n("QTNa"),
            i = n("eQiz"),
            o = n("v8gE"),
            u = n("on57"),
            s = n("Q840"),
            c = n("zd8w"),
            d = n("v7qY"),
            h = n("wD9O"),
            x = n("zm5q"),
            g = n("f4Vb"),
            m = n("QEDJ"),
            f = n("lsfk"),
            p = n("uYx2"),
            y = n("g3o5"),
            v = n("bIvi"),
            P = n("RKko");

        function w(e) {
            let t, n, a, i, w, C, L, k, z, O, _, N, T, A, D, V, q, Q, U, W, G, $, X, Y, Z, J, ee, et, en, er, el, ea, ei, eo, eu, es, ec, ed, eh, ex, eg, em, ef, ep, ey, ev, eP, ew, eb, eB, eK, eH, eM, eI, eR, eS, eE, eF, ej, eC, eL, ek, ez, eO, e_, eN, eT, eA, eD, eV, eq, eQ, eU, eW, eG, e$ = (0, l.c)(294),
                {
                    collapseEmptyRows: eX,
                    rows: eY,
                    getRowKey: eZ,
                    getRowGeometry: eJ,
                    gapsBeforePx: e0,
                    boundaries: e1,
                    getRowCollapseScopeKey: e2,
                    isRowAnchorEligible: e3,
                    renderRow: e4,
                    onApiChange: e5,
                    onVisibleContentReady: e8,
                    className: e7,
                    gapPx: e6,
                    getBottomScrollPaddingPx: e9,
                    isSubmitPlacementAnimating: te,
                    onLatestTurnHeightChange: tt,
                    preserveMeasuredTurnViewport: tn,
                    preserveUnderfilledViewport: tr,
                    getPendingRestoreScrollDistanceFromBottomPx: tl,
                    restoreScrollDistanceFromBottomPx: ta,
                    initialRestoreState: ti,
                    onRestoreStateChange: to,
                    onViewportChange: tu,
                    onViewportRowsChange: ts,
                    latestTurnSynchronousMeasurementKey: tc,
                    layoutReadyTurnKey: td,
                    onTurnLayoutReady: th,
                    synchronousMeasurementTurnKey: tx,
                    retainedTurnKeys: tg
                } = e,
                tm = void 0 !== eX && eX,
                tf = void 0 === e6 ? 12 : e6,
                tp = void 0 !== tn && tn,
                ty = void 0 !== tr && tr,
                tv = (0, s.z)(y.b);
            e$[0] !== tg ? (t = tg ?? [], e$[0] = tg, e$[1] = t) : t = e$[1];
            let tP = [...t, ...tv],
                [tw, tb] = (0, c.useState)(null),
                [tB] = (0, c.useState)(R),
                tK = eY.length - 1;
            e$[2] !== eZ || e$[3] !== tK || e$[4] !== eY ? (n = tK < 0 ? void 0 : eZ(eY[tK]), e$[2] = eZ, e$[3] = tK, e$[4] = eY, e$[5] = n) : n = e$[5];
            let tH = n,
                tM = ty && null != tw && tw.turnKey === tH ? tw.viewportHeightPx - tw.heightOutsideTurnPx : void 0;
            e$[6] !== tM || e$[7] !== e0 || e$[8] !== tB || e$[9] !== eJ || e$[10] !== eZ || e$[11] !== e3 || e$[12] !== eY ? (a = tB(eY, eZ, eJ, e0, e3, tM), e$[6] = tM, e$[7] = e0, e$[8] = tB, e$[9] = eJ, e$[10] = eZ, e$[11] = e3, e$[12] = eY, e$[13] = a) : a = e$[13];
            let tI = a,
                tR = (0, f.b)(),
                {
                    notifyLayoutResize: tS
                } = tR,
                tE = (0, h.c)(),
                tF = tE * (globalThis.devicePixelRatio ?? 1);
            e$[14] !== ti?.turnHeightsByKey ? (i = () => j(ti?.turnHeightsByKey), e$[14] = ti?.turnHeightsByKey, e$[15] = i) : i = e$[15];
            let [tj, tC] = (0, c.useState)(i), [tL, tk] = (0, c.useState)(null);
            e$[16] !== tm || e$[17] !== tI || e$[18] !== tf || e$[19] !== tF || e$[20] !== tj ? (w = (0, P.a)({
                collapseEmptyRows: tm,
                entries: tI,
                gapPx: tf,
                measuredHeightsByKey: tj,
                pixelScale: tF
            }), e$[16] = tm, e$[17] = tI, e$[18] = tf, e$[19] = tF, e$[20] = tj, e$[21] = w) : w = e$[21];
            let tz = w;
            e$[22] !== e9 || e$[23] !== ti || e$[24] !== tz || e$[25] !== tR ? (C = () => {
                var e, t, n;
                let r, l, a, i, o = E(e9);
                return e = tz, t = F(tR.getLastScrollDistanceFromBottomPx(), o), n = ti, r = n?.renderedWindow, l = r?.viewportHeightPx ?? 800, a = Math.min(t, e.totalHeightPx), i = M(e, a, l), {
                    distanceFromBottomPx: a,
                    renderedRange: (null == r ? null : (0, P.e)({
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
            }, e$[22] = e9, e$[23] = ti, e$[24] = tz, e$[25] = tR, e$[26] = C) : C = e$[26];
            let [tO, t_] = (0, c.useState)(C), [tN] = (0, c.useState)(B), tT = (0, c.useSyncExternalStore)(tN.subscribe, tN.getSnapshot, tN.getSnapshot), tA = (0, c.useRef)(null), tD = (0, c.useRef)(tj), tV = (0, c.useRef)(0);
            e$[27] === Symbol.for("react.memo_cache_sentinel") ? (L = e => {
                tV.current = e;
                let t = tA.current;
                null != t && (t.style.minHeight = e > 0 ? `${e}px` : "")
            }, e$[27] = L) : L = e$[27];
            let tq = (0, v.a)(L),
                tQ = (0, c.useRef)(tO),
                tU = (0, c.useRef)(null);
            e$[28] === Symbol.for("react.memo_cache_sentinel") ? (k = new Map, e$[28] = k) : k = e$[28];
            let tW = (0, c.useRef)(k);
            e$[29] === Symbol.for("react.memo_cache_sentinel") ? (z = new Map, e$[29] = z) : z = e$[29];
            let tG = (0, c.useRef)(z);
            e$[30] === Symbol.for("react.memo_cache_sentinel") ? (O = new WeakSet, e$[30] = O) : O = e$[30];
            let t$ = (0, c.useRef)(O);
            e$[31] === Symbol.for("react.memo_cache_sentinel") ? (_ = new Map, e$[31] = _) : _ = e$[31];
            let tX = (0, c.useRef)(_);
            e$[32] === Symbol.for("react.memo_cache_sentinel") ? (N = new Map, e$[32] = N) : N = e$[32];
            let tY = (0, c.useRef)(N),
                tZ = (0, c.useRef)(null),
                tJ = (0, c.useRef)(null),
                t0 = (0, c.useRef)(0),
                t1 = (0, c.useRef)(null),
                [t2, t3] = (0, c.useState)(null),
                t4 = (0, c.useRef)(!1),
                t5 = (0, c.useRef)(null),
                t8 = (0, c.useRef)(tz),
                t7 = (0, c.useRef)(tz),
                t6 = (0, c.useRef)(tz),
                t9 = (0, c.useRef)(eY),
                ne = (0, c.useRef)(null);
            e$[33] !== tj ? (T = () => {
                tj !== tD.current && tC(tD.current)
            }, e$[33] = tj, e$[34] = T) : T = e$[34], e$[35] !== tm || e$[36] !== tI || e$[37] !== tf || e$[38] !== tF || e$[39] !== tj ? (A = [tm, tI, tf, tF, tj], e$[35] = tm, e$[36] = tI, e$[37] = tf, e$[38] = tF, e$[39] = tj, e$[40] = A) : A = e$[40], (0, c.useLayoutEffect)(T, A), e$[41] === Symbol.for("react.memo_cache_sentinel") ? (D = e => {
                tA.current = e, tk(e)
            }, e$[41] = D) : D = e$[41];
            let nt = (0, v.a)(D);
            e$[42] !== tm || e$[43] !== tI || e$[44] !== tf || e$[45] !== tz || e$[46] !== tF || e$[47] !== tj ? (V = () => {
                if (t7.current !== tz) {
                    t7.current = tz, t8.current = tj === tD.current ? tz : (0, P.a)({
                        collapseEmptyRows: tm,
                        entries: tI,
                        gapPx: tf,
                        measuredHeightsByKey: tD.current,
                        pixelScale: tF
                    });
                    let e = tA.current;
                    null != e && (e.style.height = `${t8.current.totalHeightPx}px`)
                }
                return t8.current
            }, e$[42] = tm, e$[43] = tI, e$[44] = tf, e$[45] = tz, e$[46] = tF, e$[47] = tj, e$[48] = V) : V = e$[48];
            let nn = (0, v.a)(V);
            e$[49] !== e9 || e$[50] !== tR || e$[51] !== tE ? (q = e => {
                let t = tR.getScrollElement(),
                    n = tA.current,
                    r = t?.firstElementChild;
                return null == n || null == r ? e - E(e9) : e - (0, h.b)(r.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, tE)
            }, e$[49] = e9, e$[50] = tR, e$[51] = tE, e$[52] = q) : q = e$[52];
            let nr = (0, v.a)(q),
                nl = tO.renderedRange;
            if (null != tT) {
                let e = (0, P.c)({
                    layout: tz,
                    turnKey: tT.turnKey,
                    viewportHeightPx: tO.viewportHeightPx
                });
                null != e && (nl = M(tz, e, tO.viewportHeightPx))
            } else if (!S(tO.turnKeys, tz.turnKeys)) {
                let e = tO.turnKeys[tO.renderedRange.startIndex];
                null != e && (nl = (0, P.e)({
                    anchorKey: e,
                    layout: tz,
                    previousRange: nl
                }) ?? M(tz, tO.distanceFromBottomPx, tO.viewportHeightPx))
            }
            e$[53] !== ta ? (Q = () => {
                null == tZ.current && ta?.()
            }, e$[53] = ta, e$[54] = Q) : Q = e$[54];
            let na = (0, v.a)(Q);
            e$[55] === Symbol.for("react.memo_cache_sentinel") ? (U = () => {
                null != t5.current && (window.cancelAnimationFrame(t5.current), t5.current = null)
            }, e$[55] = U) : U = e$[55];
            let ni = (0, v.a)(U);
            e$[56] !== tI.length || e$[57] !== e8 || e$[58] !== na ? (W = () => {
                null == e8 || t4.current || null != t5.current || null == tA.current || tI.length > 0 && 0 === tG.current.size || (t5.current = window.requestAnimationFrame(() => {
                    t5.current = window.requestAnimationFrame(() => {
                        t5.current = null, t4.current || null == tA.current || tI.length > 0 && 0 === tG.current.size || (t4.current = !0, na(), e8())
                    })
                }))
            }, e$[56] = tI.length, e$[57] = e8, e$[58] = na, e$[59] = W) : W = e$[59];
            let no = (0, v.a)(W),
                nu = eY.slice(nl.startIndex, nl.endIndex).map((e, t) => ({
                    entry: e,
                    turnIndex: nl.startIndex + t
                })),
                ns = tI.length > 0 && 0 === nu.length;
            for (let e of new Set(tP)) {
                let t = tz.turnIndexByKey.get(e);
                null == t || t >= nl.startIndex && t < nl.endIndex || nu.push({
                    entry: eY[t],
                    turnIndex: t
                })
            }
            nu.sort(b), e$[60] === Symbol.for("react.memo_cache_sentinel") ? (G = e => tG.current.get(e), e$[60] = G) : G = e$[60];
            let nc = (0, v.a)(G),
                nd = (0, v.a)(e => {
                    let t = e <= 24;
                    ts?.(null == tN.getSnapshot() ? function(e, t, n, r) {
                        let {
                            startIndex: l,
                            endIndex: a
                        } = (0, P.d)({
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
                    }(tP, tz, t ? 0 : F(e, E(e9)), tQ.current.viewportHeightPx + 24 * !!t) : null, nc, t)
                });
            e$[61] !== nd || e$[62] !== tR ? ($ = () => {
                nd(tR.getLastScrollDistanceFromBottomPx())
            }, e$[61] = nd, e$[62] = tR, e$[63] = $) : $ = e$[63], e$[64] !== tz || e$[65] !== ts || e$[66] !== tT || e$[67] !== tO.renderedRange || e$[68] !== tO.viewportHeightPx || e$[69] !== nd || e$[70] !== tv || e$[71] !== tg || e$[72] !== eY || e$[73] !== tR ? (X = [tz, ts, tT, tO.renderedRange, tO.viewportHeightPx, nd, tv, tg, eY, tR], e$[64] = tz, e$[65] = ts, e$[66] = tT, e$[67] = tO.renderedRange, e$[68] = tO.viewportHeightPx, e$[69] = nd, e$[70] = tv, e$[71] = tg, e$[72] = eY, e$[73] = tR, e$[74] = X) : X = e$[74], (0, c.useLayoutEffect)($, X), e$[75] !== td || e$[76] !== th || e$[77] !== tR ? (Y = () => {
                if (null == td || null == th || null != tZ.current || tX.current.size > 0) return;
                let e = tR.getScrollElement(),
                    t = tG.current.get(td);
                null != t && t$.current.has(t) && !((tD.current[td] ?? 0) <= 0) && null != e && !(e.clientHeight <= 0) && th(td, t)
            }, e$[75] = td, e$[76] = th, e$[77] = tR, e$[78] = Y) : Y = e$[78];
            let nh = (0, v.a)(Y);
            e$[79] !== e9 || e$[80] !== tl || e$[81] !== te || e$[82] !== tt || e$[83] !== tp || e$[84] !== na || e$[85] !== tR || e$[86] !== tN || e$[87] !== tq ? (Z = (e, t) => {
                let n = E(e9);
                if (null != e.latestTurnHeightChange && (tt?.(e.latestTurnHeightChange), tV.current > 0)) {
                    let e = n - E(e9);
                    e > 0 && tq(tV.current + e)
                }
                if (e.restoreScrollDistanceFromBottom) na();
                else if (null != e.scrollDistanceFromBottomPx) {
                    var r, l;
                    let a, i = e.scrollDistanceFromBottomPx,
                        o = t?.previous ?? t6.current,
                        u = t?.estimated ?? ne.current,
                        s = t8.current;
                    tp && n > 0 && null != e.latestTurnHeightChange && null != u && u.totalHeightPx !== o.totalHeightPx && null == tN.getSnapshot() && tl?.() == null && (r = o, (a = (l = s).turnKeys.length - 1) > 0 && r.turnKeys.length === l.turnKeys.length && r.turnKeys[a] !== l.turnKeys[a] && r.turnKeys.every((e, t) => t === a || e === l.turnKeys[t] && r.topOffsetsPx[t] === l.topOffsetsPx[t] && r.heightsPx[t] === l.heightsPx[t])) && (i = tR.getUnroundedScrollDistanceFromBottomPx(tR.getLastScrollDistanceFromBottomPx()) + s.totalHeightPx - o.totalHeightPx, null != ne.current && (ne.current = o)), tR.compensateScrollToDistanceFromBottomPx(i + E(e9) - n, null != e.afterMeasure || null != tN.getSnapshot() || tl?.() != null || te?.() ? void 0 : "turn-resize")
                }
                e.afterMeasure?.()
            }, e$[79] = e9, e$[80] = tl, e$[81] = te, e$[82] = tt, e$[83] = tp, e$[84] = na, e$[85] = tR, e$[86] = tN, e$[87] = tq, e$[88] = Z) : Z = e$[88];
            let nx = (0, v.a)(Z);
            e$[89] !== nn ? (J = (e, t) => {
                if (null != tZ.current || t <= 0) return;
                let n = tQ.current,
                    r = H({
                        current: n,
                        distanceFromBottomPx: e,
                        layout: nn(),
                        viewportHeightPx: t
                    });
                r === n || (tQ.current = r, r.renderedRange.startIndex === n.renderedRange.startIndex && r.renderedRange.endIndex === n.renderedRange.endIndex && S(r.turnKeys, n.turnKeys) || t_(r))
            }, e$[89] = nn, e$[90] = J) : J = e$[90];
            let ng = (0, v.a)(J);
            e$[91] !== nc || e$[92] !== ts ? (ee = () => () => ts?.(void 0, nc), et = [nc, ts], e$[91] = nc, e$[92] = ts, e$[93] = ee, e$[94] = et) : (ee = e$[93], et = e$[94]), (0, c.useLayoutEffect)(ee, et), e$[95] !== nn || e$[96] !== tu ? (en = (e, t, n) => {
                if (null == tu) return;
                let r = nn(),
                    l = Math.max(0, Math.min(r.totalHeightPx, r.totalHeightPx - e)),
                    a = Math.max(0, l - t);
                tu({
                    viewportEndPx: l,
                    viewportStartPx: a
                }, n)
            }, e$[95] = nn, e$[96] = tu, e$[97] = en) : en = e$[97];
            let nm = (0, v.a)(en);
            e$[98] !== tN ? (er = e => {
                tN.getSnapshot() === e && tN.replace(null)
            }, e$[98] = tN, e$[99] = er) : er = e$[99];
            let nf = (0, v.a)(er);
            e$[100] !== nc || e$[101] !== ts || e$[102] !== tN ? (el = (e, t, n) => n?.signal?.aborted ? Promise.resolve() : (ts?.(null, nc), new Promise(r => {
                let l = () => {
                        tN.getSnapshot() === a && tN.replace(null)
                    },
                    a = {
                        align: n?.align ?? "center",
                        complete: () => {
                            n?.signal?.removeEventListener("abort", l), r()
                        },
                        getTargetElement: t,
                        turnKey: e
                    };
                t_(tQ.current), tN.replace(a), n?.signal?.addEventListener("abort", l, {
                    once: !0
                })
            })), e$[100] = nc, e$[101] = ts, e$[102] = tN, e$[103] = el) : el = e$[103];
            let np = (0, v.a)(el);
            e$[104] !== nn || e$[105] !== eY ? (ea = e => {
                let {
                    viewportStartPx: t,
                    viewportEndPx: n
                } = e;
                return (0, P.f)(eY, nn(), t, n)
            }, e$[104] = nn, e$[105] = eY, e$[106] = ea) : ea = e$[106];
            let ny = (0, v.a)(ea);
            e$[107] !== nn ? (ei = e => {
                let t = nn(),
                    n = t.turnIndexByKey.get(e);
                if (null == n) return null;
                let r = t.topOffsetsPx[n],
                    l = t.heightsPx[n];
                return null == r || null == l ? null : {
                    endPx: r + l,
                    startPx: r
                }
            }, e$[107] = nn, e$[108] = ei) : ei = e$[108];
            let nv = (0, v.a)(ei);
            e$[109] !== tt ? (eo = () => {
                let e = 0,
                    t = null;
                for (let [n, r] of tY.current) e += r, (null == t || t.compareDocumentPosition(n) === Node.DOCUMENT_POSITION_FOLLOWING) && (t = n);
                null != t && tt?.({
                    heightDeltaPx: null,
                    heightPx: null,
                    turnElement: t,
                    followContentHeightPx: e
                })
            }, e$[109] = tt, e$[110] = eo) : eo = e$[110];
            let nP = (0, v.a)(eo);
            e$[111] !== tm || e$[112] !== nx || e$[113] !== tI || e$[114] !== tf || e$[115] !== e9 || e$[116] !== nn || e$[117] !== nr || e$[118] !== tl || e$[119] !== eJ || e$[120] !== tF || e$[121] !== tp || e$[122] !== eY || e$[123] !== tR || e$[124] !== tN || e$[125] !== tq || e$[126] !== tE ? (eu = (e, t, n) => {
                var r;
                let l = void 0 === n ? "measured" : n,
                    a = nn(),
                    i = tR.getScrollElement();
                if (i?.getClientRects().length === 0) return !1;
                let o = tZ.current,
                    u = tD.current,
                    s = (e, t) => {
                        let n = a.turnIndexByKey.get(e);
                        return Math.max(+!tm, t, (null == n ? void 0 : eJ(eY[n]).minHeightPx) ?? 0)
                    };
                if ("controller" === l && null == o) {
                    let t = !1;
                    for (let [n, r] of e) {
                        let {
                            element: e,
                            heightPx: l
                        } = r;
                        if (l <= 0 || u[n] !== s(n, l)) {
                            t = !0;
                            break
                        }
                        let a = tG.current.get(n);
                        a === e && t$.current.add(a)
                    }
                    if (!t) return !1
                }
                let c = u,
                    x = 0,
                    g = !1,
                    m = null,
                    f = 0,
                    y = !1,
                    v = !1,
                    w = !1,
                    b = "controller" === l ? tR.getLastScrollDistanceFromBottomPx({
                        includePendingUserScroll: !0
                    }) : function(e, t) {
                        let n = e.getScrollElement(),
                            r = n?.firstElementChild;
                        if (null == n || null == r || 0 === n.clientHeight) return e.getLastScrollDistanceFromBottomPx();
                        let l = r.getBoundingClientRect();
                        if (0 === l.height) return e.getLastScrollDistanceFromBottomPx();
                        let a = n.scrollTop;
                        return Math.max(0, Math.round(a + (0, h.b)(l.bottom - (0, p.d)(n, t), t)) - n.clientHeight) - a
                    }(tR, tE),
                    B = E(e9),
                    K = F(b, B),
                    M = tp ? null : tl?.() ?? null,
                    R = null == o ? K : tQ.current.distanceFromBottomPx,
                    C = R;
                if (tp && null == tN.getSnapshot() && tl?.() == null) {
                    let e = S(t6.current.turnKeys, a.turnKeys) ? a : t6.current,
                        t = e === a ? o?.scrollDistanceFromBottomPx ?? b : b,
                        n = I({
                            distanceFromBottomPx: nr(t),
                            preferLatestVisibleRow: t < B,
                            layout: e,
                            measuredHeightsByKey: u,
                            nextLayout: a,
                            viewportHeightPx: tQ.current.viewportHeightPx
                        }),
                        r = i?.ownerDocument.activeElement,
                        l = r?.closest("[data-turn-key]"),
                        s = l?.dataset.turnKey;
                    if (i && r && l && s && tG.current.get(s) === l) {
                        let e = r.getBoundingClientRect(),
                            t = i.getBoundingClientRect();
                        e.bottom > t.top && e.top < t.bottom && (n = s)
                    }
                    let c = null == n ? null : a.turnIndexByKey.get(n);
                    null != c && (C = a.bottomOffsetsPx[c] ?? R)
                }
                for (let [t, n] of e) {
                    let {
                        element: e,
                        heightPx: r
                    } = n, l = tG.current.get(t);
                    if (l !== e) continue;
                    r > 0 ? t$.current.add(l) : t$.current.delete(l);
                    let i = s(t, r),
                        o = u[t];
                    if (o === i) continue;
                    c === u && (c = j(u)), c[t] = i, w = w || i > Math.max(+!tm, r);
                    let d = a.turnIndexByKey.get(t);
                    if (null == d) continue;
                    let h = d === a.turnKeys.length - 1,
                        p = Math.round(Math.max(tI[d]?.minHeightPx ?? 0, i) * tF) / tF,
                        P = p - (a.heightsPx[d] ?? p);
                    v = v || null == o || 0 !== P, h && (g = !0, x += null == o ? 0 : P, m = l), y = y || tm && (0 === p || 0 === a.heightsPx[d]), (a.bottomOffsetsPx[d] ?? 0) <= C && (tp || null != tl && !h) && (f += P)
                }
                if (c === u) return !1;
                if (!v) return tD.current = c, w && tC(c), !1;
                let L = (0, P.a)({
                    collapseEmptyRows: tm,
                    entries: tI,
                    gapPx: tf,
                    measuredHeightsByKey: c,
                    pixelScale: tF
                });
                if (y)
                    for (let [e, t] of L.gapsBeforePx.entries()) {
                        let n = t - (a.gapsBeforePx[e] ?? 0);
                        (a.bottomOffsetsPx[e] ?? 0) + (a.heightsPx[e] ?? 0) <= C && (tp || null != tl && e !== a.turnKeys.length - 1) && (f += n)
                    }
                let k = tV.current;
                if (k > 0) {
                    let e = Math.max(0, k - a.totalHeightPx),
                        t = Math.max(0, k - L.totalHeightPx);
                    f += t - e, x > 0 && e > t && (x = Math.max(0, x - (e - t))), e > 0 && 0 === t && tq(0)
                }
                let z = tp && tR.shouldFollowContentGrowth() && (r = b, 0 === B && r <= 24) && m?.querySelector("[data-preserve-turn-viewport]") == null,
                    O = o?.restoreScrollDistanceFromBottom || null != M,
                    _ = null;
                O || (_ = z ? 0 : 0 !== f ? (o?.scrollDistanceFromBottomPx ?? tR.getUnroundedScrollDistanceFromBottomPx(b)) + f : o?.scrollDistanceFromBottomPx ?? (tp || !g ? b : null));
                let N = tQ.current.distanceFromBottomPx;
                O ? N = M ?? N : null != _ && (N = F(_, B));
                let T = H({
                        current: tQ.current,
                        distanceFromBottomPx: N,
                        layout: L,
                        viewportHeightPx: tQ.current.viewportHeightPx
                    }),
                    A = o?.latestTurnHeightChange,
                    D = m ?? A?.turnElement ?? null,
                    V = {
                        afterMeasure: o?.afterMeasure,
                        latestTurnHeightChange: g || null != A ? {
                            heightDeltaPx: (A?.heightDeltaPx ?? 0) + x,
                            heightPx: L.heightsPx.at(-1) ?? null,
                            turnElement: D,
                            followContentHeightPx: null
                        } : null,
                        restoreScrollDistanceFromBottom: O,
                        scrollDistanceFromBottomPx: _,
                        turnHeightsByKey: c
                    },
                    q = tA.current;
                for (let [t, n] of e) {
                    let {
                        element: e
                    } = n, r = L.turnIndexByKey.get(t);
                    tG.current.get(t) === e && null != r && null != e.parentElement && (e.parentElement.style.height = `${L.heightsPx[r]}px`, e.parentElement.style.minHeight = "")
                }
                if (g && 1 === e.size && null == o && T === tQ.current && L.gapsBeforePx.at(-1) === a.gapsBeforePx.at(-1) && null != q) {
                    tD.current = c, t8.current = L;
                    let e = t6.current;
                    return t6.current = L, q.style.height = `${L.totalHeightPx}px`, nx(V, {
                        previous: e,
                        estimated: a
                    }), !0
                }
                null == ne.current && (ne.current = a);
                let Q = () => {
                    tD.current = c, t8.current = L, tC(c), T !== tQ.current && (tQ.current = T, t_(T))
                };
                return tZ.current = V, void 0 === t || t ? (0, d.flushSync)(Q) : Q(), !0
            }, e$[111] = tm, e$[112] = nx, e$[113] = tI, e$[114] = tf, e$[115] = e9, e$[116] = nn, e$[117] = nr, e$[118] = tl, e$[119] = eJ, e$[120] = tF, e$[121] = tp, e$[122] = eY, e$[123] = tR, e$[124] = tN, e$[125] = tq, e$[126] = tE, e$[127] = eu) : eu = e$[127];
            let nw = (0, v.a)(eu);
            e$[128] !== nw || e$[129] !== tS || e$[130] !== nP || e$[131] !== nh ? (es = e => {
                let t = new Map,
                    n = !1,
                    r = !1,
                    l = !1;
                for (let a of e) {
                    let e = tW.current.get(a.target);
                    if (null == e) continue;
                    let {
                        height: i
                    } = (0, g.a)(a);
                    switch (e.kind) {
                        case "turn": {
                            r = !0;
                            let l = e.turnKey,
                                o = tG.current.get(l);
                            if (o !== a.target || t$.current.has(o) || (n = !0), i > 0 && o === a.target && tD.current[l] === i) {
                                t$.current.add(o);
                                break
                            }
                            t.set(l, {
                                element: a.target,
                                heightPx: i
                            });
                            break
                        }
                        case "latest-turn-follow-content":
                            tY.current.set(e.element, i), l = !0
                    }
                }
                t.size > 0 && nw(t, !0, n ? "controller" : "measured"), l && nP(), nh(), (r || l) && tS?.()
            }, e$[128] = nw, e$[129] = tS, e$[130] = nP, e$[131] = nh, e$[132] = es) : es = e$[132];
            let nb = (0, v.a)(es);
            e$[133] !== nb ? (ec = () => {
                if (null != tJ.current) return tJ.current;
                let e = new ResizeObserver(nb);
                return tJ.current = e, e
            }, e$[133] = nb, e$[134] = ec) : ec = e$[134];
            let nB = (0, v.a)(ec);
            e$[135] !== nB || e$[136] !== no ? (ed = (e, t) => {
                if (null == t) return;
                tW.current.set(t, {
                    kind: "turn",
                    turnKey: e
                }), tG.current.set(e, t), t$.current.delete(t), tX.current.set(e, t);
                let n = nB();
                return n.observe(t), no(), () => {
                    n.unobserve(t), tW.current.delete(t), tX.current.get(e) === t && tX.current.delete(e), tG.current.get(e) === t && tG.current.delete(e)
                }
            }, e$[135] = nB, e$[136] = no, e$[137] = ed) : ed = e$[137];
            let nK = (0, v.a)(ed);
            e$[138] !== nw || e$[139] !== tE ? (eh = (e, t) => {
                let n = tG.current.get(e);
                if (null == n) return;
                let r = (0, h.b)(n.getBoundingClientRect().height, tE);
                if (!(r <= 0) && (nw(new Map([
                        [e, {
                            element: n,
                            heightPx: r
                        }]
                    ]), !1), null != t)) {
                    let e = tZ.current;
                    null == e ? t() : e.afterMeasure = t
                }
            }, e$[138] = nw, e$[139] = tE, e$[140] = eh) : eh = e$[140];
            let nH = (0, v.a)(eh);
            e$[141] !== nB ? (ex = e => {
                if (null == e) return;
                tW.current.set(e, {
                    element: e,
                    kind: "latest-turn-follow-content"
                }), tY.current.set(e, 0);
                let t = nB();
                return t.observe(e), () => {
                    t.unobserve(e), tW.current.delete(e), tY.current.delete(e)
                }
            }, e$[141] = nB, e$[142] = ex) : ex = e$[142];
            let nM = (0, v.a)(ex),
                nI = (0, c.useRef)(tH);
            e$[143] !== nw || e$[144] !== tH || e$[145] !== tE ? (eg = () => {
                let e = tX.current,
                    t = nI.current;
                if (nI.current = tH, null != t && t !== tH) {
                    let n = tG.current.get(t);
                    null != n && e.set(t, n)
                }
                if (0 === e.size) {
                    t0.current = 0;
                    return
                }
                if (null != t1.current) return;
                if (t0.current >= 8) {
                    t1.current = requestAnimationFrame(e => {
                        t1.current = null, t0.current = 0, t3(e)
                    });
                    return
                }
                t0.current = t0.current + 1, tX.current = new Map;
                let n = new Map;
                if ((0, x.a)("virtualizedTurnList.readMountedHeights", () => {
                        for (let [t, r] of e) {
                            if (tG.current.get(t) !== r) continue;
                            let e = (0, h.b)(r.getBoundingClientRect().height, tE);
                            (e > 0 || r.getClientRects().length > 0) && n.set(t, {
                                element: r,
                                heightPx: e
                            })
                        }
                    }, e.size), n.size > 0) {
                    let t = tD.current;
                    if (nw(n, !1, "controller"))
                        for (let [n, r] of e)(null == t[n] || t0.current > 1) && tG.current.get(n) === r && tX.current.set(n, r);
                    else t0.current = 0
                }
            }, e$[143] = nw, e$[144] = tH, e$[145] = tE, e$[146] = eg) : eg = e$[146], (0, c.useLayoutEffect)(eg), e$[147] !== tI || e$[148] !== nH || e$[149] !== tx ? (em = () => {
                let e = tx ?? tI.at(-1)?.turnKey;
                null != e && nH(e)
            }, e$[147] = tI, e$[148] = nH, e$[149] = tx, e$[150] = em) : em = e$[150];
            let nR = (0, v.a)(em);
            e$[151] !== tc || e$[152] !== nR ? (ef = () => {
                null != tc && nR()
            }, ep = [tc, nR], e$[151] = tc, e$[152] = nR, e$[153] = ef, e$[154] = ep) : (ef = e$[153], ep = e$[154]), (0, c.useLayoutEffect)(ef, ep), e$[155] !== nx || e$[156] !== tj ? (ey = () => {
                let e = tZ.current;
                null != e && e.turnHeightsByKey === tj && (tZ.current = null, nx(e))
            }, ev = [nx, tj], e$[155] = nx, e$[156] = tj, e$[157] = ey, e$[158] = ev) : (ey = e$[157], ev = e$[158]), (0, c.useLayoutEffect)(ey, ev), e$[159] !== tI || e$[160] !== tw || e$[161] !== tz.heightsPx || e$[162] !== ty || e$[163] !== tj || e$[164] !== tL || e$[165] !== tE ? (eP = e => {
                if (!ty || tw?.viewportHeightPx === e) return;
                if (null != tw) return void(0, d.flushSync)(() => {
                    tb({
                        ...tw,
                        viewportHeightPx: e
                    })
                });
                let t = tL?.closest("[data-thread-user-message-navigation-content]"),
                    n = t?.lastElementChild,
                    r = tI.at(-1)?.turnKey;
                if (null == t || null == n || null == r || tI.some(e => null == tj[e.turnKey])) return;
                let l = (0, h.b)(t.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, tE) - parseFloat(getComputedStyle(t).paddingBottom);
                l <= 24 || (0, d.flushSync)(() => {
                    tb({
                        turnKey: r,
                        heightOutsideTurnPx: e - (tz.heightsPx.at(-1) ?? 0) - l,
                        viewportHeightPx: e
                    })
                })
            }, e$[159] = tI, e$[160] = tw, e$[161] = tz.heightsPx, e$[162] = ty, e$[163] = tj, e$[164] = tL, e$[165] = tE, e$[166] = eP) : eP = e$[166];
            let nS = (0, v.a)(eP);
            e$[167] !== ny || e$[168] !== nv || e$[169] !== nc || e$[170] !== nH || e$[171] !== e5 || e$[172] !== np ? (ew = () => {
                if (null != e5) return e5({
                    getEntriesInViewport: ny,
                    getRowElement: nc,
                    getEntryGeometry: nv,
                    measureTurnBeforePaint: nH,
                    scrollToKey: np
                }), () => {
                    e5(null)
                }
            }, eb = [ny, nc, nv, nH, e5, np], e$[167] = ny, e$[168] = nv, e$[169] = nc, e$[170] = nH, e$[171] = e5, e$[172] = np, e$[173] = ew, e$[174] = eb) : (ew = e$[173], eb = e$[174]), (0, c.useEffect)(ew, eb), e$[175] !== ni ? (eB = () => () => {
                t4.current = !1, ni()
            }, eK = [ni], e$[175] = ni, e$[176] = eB, e$[177] = eK) : (eB = e$[176], eK = e$[177]), (0, c.useLayoutEffect)(eB, eK), e$[178] !== ni || e$[179] !== no ? (eH = () => (no(), ni), e$[178] = ni, e$[179] = no, e$[180] = eH) : eH = e$[180], e$[181] !== ni || e$[182] !== tI.length || e$[183] !== e8 || e$[184] !== no || e$[185] !== tL ? (eM = [ni, tI.length, e8, no, tL], e$[181] = ni, e$[182] = tI.length, e$[183] = e8, e$[184] = no, e$[185] = tL, e$[186] = eM) : eM = e$[186], (0, c.useEffect)(eH, eM), e$[187] !== tN ? (eI = () => {
                let e = tW.current,
                    t = tG.current,
                    n = tY.current;
                return () => {
                    null != t1.current && (cancelAnimationFrame(t1.current), t1.current = null), tJ.current?.disconnect(), tJ.current = null, e.clear(), t.clear(), tX.current.clear(), n.clear(), tZ.current = null, tN.replace(null)
                }
            }, eR = [tN], e$[187] = tN, e$[188] = eI, e$[189] = eR) : (eI = e$[188], eR = e$[189]), (0, c.useEffect)(eI, eR), e$[190] !== to ? (eS = () => {
                if (null != to) return () => {
                    to(function(e, t) {
                        let {
                            turnKeys: n,
                            renderedRange: r,
                            viewportHeightPx: l
                        } = t, a = j();
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
                    }(tD.current, tQ.current))
                }
            }, eE = [to], e$[190] = to, e$[191] = eS, e$[192] = eE) : (eS = e$[191], eE = e$[192]), (0, c.useLayoutEffect)(eS, eE), e$[193] !== e2 || e$[194] !== tK || e$[195] !== tH || e$[196] !== eY ? (eF = tK < 0 ? void 0 : e2?.(eY[tK]) ?? tH, e$[193] = e2, e$[194] = tK, e$[195] = tH, e$[196] = eY, e$[197] = eF) : eF = e$[197];
            let nE = eF;
            e$[198] !== nE || e$[199] !== tR || e$[200] !== tq || e$[201] !== tL || e$[202] !== tE ? (ej = () => {
                if (null == tL || null == nE) return;
                let e = e => {
                    let t = tR.getScrollElement(),
                        n = e.target;
                    if (null == t || t.scrollTop <= 0 || !(n instanceof Element)) return;
                    let r = n.getBoundingClientRect(),
                        l = t.getBoundingClientRect().top;
                    r.bottom <= l || (n.hasAttribute("data-turn-transcript") && (tR.shouldFollowContentGrowth() || r.top < l) ? tq(0) : tq(Math.max(0, (0, h.b)(tL.getBoundingClientRect().height, tE) - (0, p.b)(t))))
                };
                return tL.addEventListener(m.a, e), () => {
                    tL.removeEventListener(m.a, e), tq(0)
                }
            }, eC = [nE, tR, tq, tL, tE], e$[198] = nE, e$[199] = tR, e$[200] = tq, e$[201] = tL, e$[202] = tE, e$[203] = ej, e$[204] = eC) : (ej = e$[203], eC = e$[204]), (0, c.useLayoutEffect)(ej, eC);
            let {
                addScrollListener: nF,
                addUserScrollListener: nj,
                getScrollElement: nC
            } = tR;
            e$[205] !== nF || e$[206] !== nj || e$[207] !== e9 || e$[208] !== nC || e$[209] !== tS || e$[210] !== nS || e$[211] !== ty || e$[212] !== nh || e$[213] !== nm || e$[214] !== nd || e$[215] !== na || e$[216] !== tR || e$[217] !== tq || e$[218] !== tL || e$[219] !== ng ? (eL = () => {
                let e = nC();
                if (null == e) return;
                let t = () => (null == tU.current && (tU.current = e.clientHeight), tU.current || tQ.current.viewportHeightPx || 800),
                    n = nF(e => {
                        ng(F(e, E(e9)), t()), nd(e)
                    }),
                    r = nj((e, n) => {
                        let r = tV.current;
                        if (r > 0) {
                            let t = r - e;
                            tq(t > t8.current.totalHeightPx && e > 0 ? t : 0)
                        }
                        nm(F(e, E(e9)), t(), null != n && e > n)
                    }),
                    l = new ResizeObserver(n => {
                        let r = n.find(t => t.target === e);
                        if (null != r) {
                            let {
                                height: e
                            } = (0, g.a)(r);
                            tU.current = e, ng(tQ.current.distanceFromBottomPx, e), na(), nd(tR.getLastScrollDistanceFromBottomPx())
                        }
                        nS(t()), nh(), null != r && tS?.()
                    });
                return l.observe(e), ty && null != tL && l.observe(tL), () => {
                    n(), r(), l.disconnect()
                }
            }, ek = [nF, nj, e9, nC, tS, nS, nh, ty, nm, nd, na, tR, tq, tL, ng], e$[205] = nF, e$[206] = nj, e$[207] = e9, e$[208] = nC, e$[209] = tS, e$[210] = nS, e$[211] = ty, e$[212] = nh, e$[213] = nm, e$[214] = nd, e$[215] = na, e$[216] = tR, e$[217] = tq, e$[218] = tL, e$[219] = ng, e$[220] = eL, e$[221] = ek) : (eL = e$[220], ek = e$[221]), (0, c.useLayoutEffect)(eL, ek), e$[222] !== nw || e$[223] !== e9 || e$[224] !== tz || e$[225] !== tT || e$[226] !== tR || e$[227] !== tN || e$[228] !== nf || e$[229] !== ng || e$[230] !== tE ? (ez = () => {
                if (null == tT || tN.getSnapshot() !== tT || null != t1.current) return;
                let e = tR.getScrollElement();
                if (null == e) return;
                let t = new Map;
                for (let [e, n] of tG.current) {
                    let r = (0, h.b)(n.getBoundingClientRect().height, tE);
                    r > 0 && t.set(e, {
                        element: n,
                        heightPx: r
                    })
                }
                if (nw(t, !1) || null != tZ.current) return;
                let n = tG.current.get(tT.turnKey),
                    r = null == n ? null : tT.getTargetElement?.(n) ?? n,
                    l = null == n || null == r ? function(e) {
                        let {
                            align: t,
                            layout: n,
                            turnKey: r,
                            viewportHeightPx: l
                        } = e;
                        if ("center" === t) return (0, P.c)({
                            layout: n,
                            turnKey: r,
                            viewportHeightPx: l
                        });
                        let a = n.turnIndexByKey.get(r);
                        return null == a ? null : Math.max(0, (n.bottomOffsetsPx[a] ?? 0) + (n.heightsPx[a] ?? 0) - l + 10)
                    }({
                        align: tT.align,
                        layout: tz,
                        turnKey: tT.turnKey,
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
                            c = r.getBoundingClientRect(),
                            d = (0, h.b)(c.top - s.top, i),
                            x = (0, h.b)(c.height, i),
                            g = (n.bottomOffsetsPx[u] ?? 0) + (n.heightsPx[u] ?? 0) - d;
                        return "top" === t ? Math.max(0, g - o + 10) : Math.max(0, g - x / 2 - o / 2)
                    }({
                        align: tT.align,
                        layout: tz,
                        targetElement: r,
                        turnElement: n,
                        turnKey: tT.turnKey,
                        viewportHeightPx: e.clientHeight,
                        windowZoom: tE
                    });
                if (null == l) return void queueMicrotask(() => nf(tT));
                let a = "top" === tT.align && null != r ? Math.max(0, tR.getLastScrollDistanceFromBottomPx() - (0, h.b)(r.getBoundingClientRect().top - (0, p.d)(e, tE), tE) + 10) : l + E(e9);
                tR.scrollToDistanceFromBottomPx(a, "instant", "user"), ng(Math.max(0, a - E(e9)), e.clientHeight), queueMicrotask(() => nf(tT))
            }, e$[222] = nw, e$[223] = e9, e$[224] = tz, e$[225] = tT, e$[226] = tR, e$[227] = tN, e$[228] = nf, e$[229] = ng, e$[230] = tE, e$[231] = ez) : ez = e$[231], e$[232] !== nw || e$[233] !== e9 || e$[234] !== tz || e$[235] !== t2 || e$[236] !== tT || e$[237] !== tR || e$[238] !== tN || e$[239] !== nf || e$[240] !== ng || e$[241] !== tE ? (eO = [nw, tz, t2, tT, tR, tN, nf, e9, ng, tE], e$[232] = nw, e$[233] = e9, e$[234] = tz, e$[235] = t2, e$[236] = tT, e$[237] = tR, e$[238] = tN, e$[239] = nf, e$[240] = ng, e$[241] = tE, e$[242] = eO) : eO = e$[242], (0, c.useLayoutEffect)(ez, eO), e$[243] !== e9 || e$[244] !== nn || e$[245] !== nr || e$[246] !== tl || e$[247] !== tT || e$[248] !== tp || e$[249] !== eY || e$[250] !== tR || e$[251] !== ng ? (e_ = () => {
                var e;
                if (null != tZ.current) return;
                let t = t6.current,
                    n = nn(),
                    r = ne.current ?? n;
                ne.current = null, t6.current = n;
                let l = t9.current !== eY;
                if (t9.current = eY, null != tT || !tp && t.turnKeys.at(-1) !== r.turnKeys.at(-1) || t === r && !l) return;
                let a = E(e9),
                    i = tR.getLastScrollDistanceFromBottomPx({
                        includePendingUserScroll: !0
                    });
                if (null != (tl?.() ?? null)) return;
                if (tR.shouldFollowContentGrowth() && (e = i, 0 === a && e <= 24)) return void tR.compensateScrollToDistanceFromBottomPx(0);
                if (t === r) return;
                let o = I({
                    distanceFromBottomPx: nr(i),
                    preferLatestVisibleRow: i < a,
                    layout: t,
                    measuredHeightsByKey: tD.current,
                    nextLayout: r,
                    viewportHeightPx: tQ.current.viewportHeightPx
                });
                if (null == o) return;
                let u = t.turnIndexByKey.get(o);
                if (tp && r !== n && n.turnKeys.length > t.turnKeys.length && null != u && t.topOffsetsPx[u] === n.topOffsetsPx[u] && t.turnKeys.every((e, t) => e === n.turnKeys[t])) return;
                let s = tR.getUnroundedScrollDistanceFromBottomPx(i),
                    c = (0, P.b)({
                        anchorKey: o,
                        distanceFromBottomPx: s,
                        nextLayout: r,
                        previousLayout: t
                    });
                null != c && (c !== s || t.totalHeightPx !== r.totalHeightPx) && (ng(F(c, a), tQ.current.viewportHeightPx), tR.compensateScrollToDistanceFromBottomPx(c))
            }, e$[243] = e9, e$[244] = nn, e$[245] = nr, e$[246] = tl, e$[247] = tT, e$[248] = tp, e$[249] = eY, e$[250] = tR, e$[251] = ng, e$[252] = e_) : e_ = e$[252], e$[253] !== e9 || e$[254] !== nn || e$[255] !== nr || e$[256] !== tl || e$[257] !== tz || e$[258] !== tT || e$[259] !== tp || e$[260] !== eY || e$[261] !== tR || e$[262] !== ng ? (eN = [e9, nn, nr, tl, tz, tT, tp, eY, tR, ng], e$[253] = e9, e$[254] = nn, e$[255] = nr, e$[256] = tl, e$[257] = tz, e$[258] = tT, e$[259] = tp, e$[260] = eY, e$[261] = tR, e$[262] = ng, e$[263] = eN) : eN = e$[263], (0, c.useLayoutEffect)(e_, eN), e$[264] !== tT || e$[265] !== nm || e$[266] !== na || e$[267] !== ng ? (eT = () => {
                null == tT && null == tZ.current && (ng(tQ.current.distanceFromBottomPx, tQ.current.viewportHeightPx), na(), nm(tQ.current.distanceFromBottomPx, tQ.current.viewportHeightPx, !1))
            }, e$[264] = tT, e$[265] = nm, e$[266] = na, e$[267] = ng, e$[268] = eT) : eT = e$[268], e$[269] !== tz || e$[270] !== tT || e$[271] !== nm || e$[272] !== na || e$[273] !== ng ? (eA = [tz, tT, nm, na, ng], e$[269] = tz, e$[270] = tT, e$[271] = nm, e$[272] = na, e$[273] = ng, e$[274] = eA) : eA = e$[274], (0, c.useLayoutEffect)(eT, eA), e$[275] !== nh ? (eD = () => {
                nh()
            }, e$[275] = nh, e$[276] = eD) : eD = e$[276], (0, c.useLayoutEffect)(eD), e$[277] !== e7 ? (eV = (0, u.b)("relative shrink-0", e7), e$[277] = e7, e$[278] = eV) : eV = e$[278], e$[279] !== tz.totalHeightPx ? (eq = {
                height: tz.totalHeightPx
            }, e$[279] = tz.totalHeightPx, e$[280] = eq) : eq = e$[280], e$[281] !== ns ? (eQ = (0, r.jsx)(o.b, {
                name: "conversation rows",
                active: ns
            }), e$[281] = ns, e$[282] = eQ) : eQ = e$[282];
            let nL = `${tz.topOffsetsPx[nl.startIndex]??0}px`;
            e$[283] !== nL ? (eU = {
                marginTop: nL
            }, e$[283] = nL, e$[284] = eU) : eU = e$[284];
            let nk = nu.map(e => {
                let {
                    entry: t,
                    turnIndex: n
                } = e, l = tI[n].turnKey;
                return (0, r.jsx)(K, {
                    entry: t,
                    turnKey: l,
                    minHeightPx: tI[n].minHeightPx,
                    reservedHeightPx: eJ(t).minHeightPx,
                    gapBeforePx: n === nl.startIndex ? 0 : tz.gapsBeforePx[n] ?? 0,
                    retainedTopPx: n < nl.startIndex || n >= nl.endIndex ? tz.topOffsetsPx[n] : void 0,
                    latestTurnFollowContentRef: n === tI.length - 1 && null != tt ? nM : void 0,
                    boundaryBefore: e1?.[n],
                    boundaryAfter: e1?.[n + 1],
                    RowComponent: e4,
                    measuredHeightPx: null == tj[l] ? void 0 : tz.heightsPx[n],
                    constrainedHeightPx: n !== tI.length - 1 && tT?.turnKey !== l && null == tj[l] ? tz.heightsPx[n] : void 0,
                    observeTurnElement: nK
                }, l)
            });
            return e$[285] !== eU || e$[286] !== nk ? (eW = (0, r.jsx)("div", {
                className: "flex flex-col",
                style: eU,
                children: nk
            }), e$[285] = eU, e$[286] = nk, e$[287] = eW) : eW = e$[287], e$[288] !== nt || e$[289] !== eV || e$[290] !== eq || e$[291] !== eQ || e$[292] !== eW ? (eG = (0, r.jsxs)("div", {
                ref: nt,
                className: eV,
                style: eq,
                children: [eQ, eW]
            }), e$[288] = nt, e$[289] = eV, e$[290] = eq, e$[291] = eQ, e$[292] = eW, e$[293] = eG) : eG = e$[293], eG
        }

        function b(e, t) {
            return e.turnIndex - t.turnIndex
        }

        function B() {
            return new C
        }
        let K = (0, c.memo)(function(e) {
            let t, n, a, o, s, d, h, x, g, m = (0, l.c)(34),
                {
                    entry: f,
                    turnKey: p,
                    minHeightPx: y,
                    gapBeforePx: v,
                    latestTurnFollowContentRef: P,
                    RowComponent: w,
                    boundaryBefore: b,
                    boundaryAfter: B,
                    constrainedHeightPx: K,
                    measuredHeightPx: H,
                    reservedHeightPx: M,
                    retainedTopPx: I,
                    observeTurnElement: R
                } = e,
                S = (0, c.useRef)(null);
            m[0] !== R || m[1] !== p ? (t = () => R(p, S.current), m[0] = R, m[1] = p, m[2] = t) : t = m[2], m[3] !== R || m[4] !== M || m[5] !== p ? (n = [R, M, p], m[3] = R, m[4] = M, m[5] = p, m[6] = n) : n = m[6], (0, c.useLayoutEffect)(t, n);
            let E = null != H && null == y && null == P ? "" : void 0,
                F = null != I && "absolute inset-x-0",
                j = null != K && "overflow-hidden";
            m[7] !== F || m[8] !== j ? (a = (0, u.b)(F, j), m[7] = F, m[8] = j, m[9] = a) : a = m[9];
            let C = null != H ? "size" : void 0,
                L = H ?? K,
                k = null == I ? v : 0,
                z = null == H ? y : void 0;
            return m[10] !== I || m[11] !== z || m[12] !== C || m[13] !== L || m[14] !== k ? (o = {
                contain: C,
                height: L,
                marginTop: k,
                minHeight: z,
                top: I
            }, m[10] = I, m[11] = z, m[12] = C, m[13] = L, m[14] = k, m[15] = o) : o = m[15], m[16] !== B || m[17] !== b ? (s = {
                before: b,
                after: B
            }, m[16] = B, m[17] = b, m[18] = s) : s = m[18], m[19] !== w || m[20] !== f || m[21] !== P ? (d = (0, r.jsx)(w, {
                entry: f,
                latestTurnFollowContentRef: P
            }), m[19] = w, m[20] = f, m[21] = P, m[22] = d) : d = m[22], m[23] !== s || m[24] !== d ? (h = (0, r.jsx)(i.a, {
                value: s,
                children: d
            }), m[23] = s, m[24] = d, m[25] = h) : h = m[25], m[26] !== h || m[27] !== p ? (x = (0, r.jsx)("div", {
                ref: S,
                className: "[&_[data-virtualized-turn-content]]:[content-visibility:visible]",
                "data-turn-key": p,
                children: h
            }), m[26] = h, m[27] = p, m[28] = x) : x = m[28], m[29] !== o || m[30] !== x || m[31] !== E || m[32] !== a ? (g = (0, r.jsx)("div", {
                "data-measured-turn": E,
                className: a,
                style: o,
                children: x
            }), m[29] = o, m[30] = x, m[31] = E, m[32] = a, m[33] = g) : g = m[33], g
        });

        function H(e) {
            let {
                current: t,
                distanceFromBottomPx: n,
                layout: r,
                viewportHeightPx: l
            } = e, a = Math.min(n, r.totalHeightPx), i = M(r, a, l, t.renderedRange);
            return t.distanceFromBottomPx === a && t.viewportHeightPx === l && t.renderedRange.startIndex === i.startIndex && t.renderedRange.endIndex === i.endIndex && S(t.turnKeys, r.turnKeys) ? t : {
                distanceFromBottomPx: a,
                renderedRange: i,
                turnKeys: r.turnKeys,
                viewportHeightPx: l
            }
        }

        function M(e, t, n, r) {
            var l, a;
            let i = {
                    layout: e,
                    distanceFromBottomPx: t,
                    viewportHeightPx: n
                },
                o = (0, P.d)({
                    ...i,
                    overscanCount: 0,
                    overscanPx: n
                }),
                u = (0, P.d)({
                    ...i,
                    overscanCount: 1
                }),
                s = {
                    startIndex: Math.max(u.startIndex, o.startIndex),
                    endIndex: Math.min(u.endIndex, o.endIndex)
                };
            if (null != r && t <= 24 && r.endIndex === e.turnKeys.length && s.startIndex > r.startIndex) {
                let t = (0, P.d)({
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

        function I(e) {
            let {
                distanceFromBottomPx: t,
                preferLatestVisibleRow: n,
                layout: r,
                measuredHeightsByKey: l,
                nextLayout: a,
                viewportHeightPx: i
            } = e, o = (0, P.d)({
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

        function R() {
            let e = [];
            return (t, n, r, l, a, i) => {
                let o = (e, n) => null != i && n === t.length - 1 ? Math.max(e ?? 0, i) : e;
                return (t.length !== e.length || t.some((t, i) => {
                    let u = e[i],
                        s = r(t);
                    return n(t) !== u.turnKey || (l?.[i] ?? s.gapBeforePx) !== u.gapBeforePx || s.estimatedHeightPx !== u.estimatedHeightPx || o(s.minHeightPx, i) !== u.minHeightPx || (a?.(t) ?? !0) !== u.anchorEligible
                })) && (e = t.map((e, t) => {
                    let i = r(e);
                    return {
                        turnKey: n(e),
                        gapBeforePx: l?.[t] ?? i.gapBeforePx,
                        estimatedHeightPx: i.estimatedHeightPx,
                        minHeightPx: o(i.minHeightPx, t),
                        anchorEligible: a?.(e) ?? !0
                    }
                })), e
            }
        }

        function S(e, t) {
            return e === t || e.length === t.length && e.every((e, n) => e === t[n])
        }

        function E(e) {
            return Math.max(0, e?.() ?? 0)
        }

        function F(e, t) {
            return Math.max(0, e - t)
        }

        function j(e) {
            let t = {};
            return Object.setPrototypeOf(t, null), Object.assign(t, e)
        }
        class C {
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

        function L(e) {
            let t, n, o, u, s = (0, l.c)(11),
                {
                    rows: c,
                    getRowBoundary: d,
                    compactUserPrompts: h
                } = e;
            s[0] !== d || s[1] !== c ? (t = d && c.map((e, t) => t > 0 ? d(c[t - 1], e) : void 0), s[0] = d, s[1] = c, s[2] = t) : t = s[2];
            let x = t;
            if (s[3] !== x || s[4] !== h || s[5] !== e || s[6] !== c) {
                o = Symbol.for("react.early_return_sentinel");
                e: {
                    let t = (0, a.b)(x, h);
                    if ("virtualized" === e.mode) {
                        o = (0, r.jsx)(w, {
                            ...e,
                            boundaries: x,
                            gapsBeforePx: t
                        });
                        break e
                    }
                    n = c.map((n, l) => (0, r.jsx)(i.a, {
                        value: {
                            before: x?.[l],
                            after: x?.[l + 1]
                        },
                        children: e.renderRow(n, l, t?.[l])
                    }, e.getRowKey(n)))
                }
                s[3] = x, s[4] = h, s[5] = e, s[6] = c, s[7] = n, s[8] = o
            } else n = s[7], o = s[8];
            return o !== Symbol.for("react.early_return_sentinel") ? o : (s[9] !== n ? (u = (0, r.jsx)(r.Fragment, {
                children: n
            }), s[9] = n, s[10] = u) : u = s[10], u)
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