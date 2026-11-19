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
                    className: S,
                    isExpandable: R,
                    review: E
                } = e,
                j = (0, u.a)(),
                [C, F] = (0, o.useState)(!1);
            I[0] !== j || I[1] !== E ? (t = (0, g.c)(j, E), I[0] = j, I[1] = E, I[2] = t) : t = I[2];
            let L = t;
            if (!(void 0 === R || R)) {
                let e, t;
                return I[3] !== S ? (e = (0, a.b)("min-w-0 truncate pt-1 text-codex-description/80", S), I[3] = S, I[4] = e) : e = I[4], I[5] !== e || I[6] !== L ? (t = (0, r.jsx)("div", {
                    className: e,
                    children: L
                }), I[5] = e, I[6] = L, I[7] = t) : t = I[7], t
            }
            let k = "denied" === E.status && "high" === E.riskLevel;
            I[8] !== j || I[9] !== E ? (n = (0, g.b)(j, E), I[8] = j, I[9] = E, I[10] = n) : n = I[10];
            let z = n;
            I[11] !== S ? (s = (0, a.b)("flex flex-col pt-1", S), I[11] = S, I[12] = s) : s = I[12], I[13] === Symbol.for("react.memo_cache_sentinel") ? (d = () => F(y), I[13] = d) : d = I[13];
            let _ = "inProgress" === E.status,
                O = k ? "text-warning" : "text-codex-description/80 group-hover/automatic-approval-review:text-default";
            I[14] !== O ? (f = (0, a.b)("min-w-0 truncate", O), I[14] = O, I[15] = f) : f = I[15], I[16] !== _ || I[17] !== f || I[18] !== L ? (p = (0, r.jsx)(m.a, {
                active: _,
                className: f,
                children: L
            }), I[16] = _, I[17] = f, I[18] = L, I[19] = p) : p = I[19];
            let N = C && "rotate-90 opacity-100";
            I[20] !== N ? (v = (0, a.b)("icon-2xs shrink-0 text-tertiary transition-[opacity,transform] duration-basic opacity-0 group-hover/automatic-approval-review:opacity-100", N), I[20] = N, I[21] = v) : v = I[21], I[22] !== v ? (P = (0, r.jsx)(h.a, {
                className: v
            }), I[22] = v, I[23] = P) : P = I[23], I[24] !== C || I[25] !== P || I[26] !== p ? (w = (0, r.jsxs)(c.a, {
                className: "group/automatic-approval-review inline-flex w-fit max-w-full gap-1.5 text-start",
                color: "ghostMuted",
                focusRing: "inset",
                size: "inline",
                onClick: d,
                "aria-expanded": C,
                children: [p, P]
            }), I[24] = C, I[25] = P, I[26] = p, I[27] = w) : w = I[27];
            let T = C ? "auto" : 0,
                D = +!!C;
            I[28] !== T || I[29] !== D ? (b = {
                height: T,
                opacity: D
            }, I[28] = T, I[29] = D, I[30] = b) : b = I[30];
            let A = C ? "auto" : "none";
            return I[31] !== A ? (B = {
                overflow: "hidden",
                pointerEvents: A
            }, I[31] = A, I[32] = B) : B = I[32], I[33] !== z ? (K = (0, r.jsx)("p", {
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
                        isCollapsed: S,
                        onFocus: R,
                        onBlur: E,
                        onPointerEnter: j,
                        onPointerLeave: C,
                        onToggle: F
                    } = e,
                    L = void 0 === H ? 0 : H,
                    k = null != K && "flex min-w-0 items-start gap-3";
                w[0] !== k ? (t = (0, i.b)("text-size-chat text-secondary", k), w[0] = k, w[1] = t) : t = w[1];
                let z = null == K && "flex-wrap",
                    _ = L > 0 && "w-full";
                w[2] !== z || w[3] !== _ ? (n = (0, i.b)("inline-flex max-w-full text-size-chat", z, _), w[2] = z, w[3] = _, w[4] = n) : n = w[4];
                let O = null != K,
                    N = !S,
                    T = null == K ? void 0 : "min-w-0 text-start whitespace-normal";
                w[5] !== b || w[6] !== M || w[7] !== I ? (d = b ?? (0, r.jsx)(x, {
                    className: "text-inherit",
                    workedDurationMs: M,
                    workedForItem: I
                }), w[5] = b, w[6] = M, w[7] = I, w[8] = d) : d = w[8], w[9] !== d || w[10] !== T ? (h = (0, r.jsx)("span", {
                    className: T,
                    children: d
                }), w[9] = d, w[10] = T, w[11] = h) : h = w[11];
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
                }) : null, w[16] = L, w[17] = f) : f = w[17], w[18] !== E || w[19] !== R || w[20] !== j || w[21] !== C || w[22] !== F || w[23] !== h || w[24] !== m || w[25] !== f || w[26] !== n || w[27] !== O || w[28] !== N ? (p = (0, r.jsxs)(u.a, {
                    className: n,
                    allowShrink: O,
                    color: "ghostTertiary",
                    radius: "small",
                    size: "inline",
                    "data-turn-disclosure-button": "",
                    "aria-expanded": N,
                    onFocus: R,
                    onBlur: E,
                    onPointerEnter: j,
                    onPointerLeave: C,
                    onClick: F,
                    children: [h, m, f]
                }), w[18] = E, w[19] = R, w[20] = j, w[21] = C, w[22] = F, w[23] = h, w[24] = m, w[25] = f, w[26] = n, w[27] = O, w[28] = N, w[29] = p) : p = w[29], w[30] !== K || w[31] !== p || w[32] !== t ? (y = (0, r.jsxs)("div", {
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
            let t, n, a, i, w, F, L, k, z, _, O, N, T, D, A, V, q, Q, U, W, G, $, Y, X, Z, J, ee, et, en, er, el, ea, ei, eo, eu, es, ec, ed, eh, ex, eg, em, ef, ep, ey, ev, eP, ew, eb, eB, eK, eH, eM, eI, eS, eR, eE, ej, eC, eF, eL, ek, ez, e_, eO, eN, eT, eD, eA, eV, eq, eQ, eU = (0, l.c)(284),
                {
                    collapseEmptyRows: eW,
                    rows: eG,
                    getRowKey: e$,
                    getRowGeometry: eY,
                    gapsBeforePx: eX,
                    boundaries: eZ,
                    getRowCollapseScopeKey: eJ,
                    isRowAnchorEligible: e0,
                    renderRow: e1,
                    onApiChange: e2,
                    onVisibleContentReady: e3,
                    className: e4,
                    gapPx: e5,
                    getBottomScrollPaddingPx: e7,
                    isSubmitPlacementAnimating: e8,
                    onLatestTurnHeightChange: e6,
                    preserveMeasuredTurnViewport: e9,
                    preserveUnderfilledViewport: te,
                    getPendingRestoreScrollDistanceFromBottomPx: tt,
                    restoreScrollDistanceFromBottomPx: tn,
                    initialRestoreState: tr,
                    onRestoreStateChange: tl,
                    onViewportChange: ta,
                    onViewportRowsChange: ti,
                    latestTurnSynchronousMeasurementKey: to,
                    layoutReadyTurnKey: tu,
                    onTurnLayoutReady: ts,
                    synchronousMeasurementTurnKey: tc,
                    retainedTurnKeys: td
                } = e,
                th = void 0 !== eW && eW,
                tx = void 0 === e5 ? 12 : e5,
                tg = void 0 !== e9 && e9,
                tm = void 0 !== te && te,
                tf = (0, s.z)(y.b);
            eU[0] !== td ? (t = td ?? [], eU[0] = td, eU[1] = t) : t = eU[1];
            let tp = [...t, ...tf],
                [ty, tv] = (0, c.useState)(null),
                [tP] = (0, c.useState)(S),
                tw = eG.length - 1;
            eU[2] !== e$ || eU[3] !== tw || eU[4] !== eG ? (n = tw < 0 ? void 0 : e$(eG[tw]), eU[2] = e$, eU[3] = tw, eU[4] = eG, eU[5] = n) : n = eU[5];
            let tb = n,
                tB = tm && null != ty && ty.turnKey === tb ? ty.viewportHeightPx - ty.heightOutsideTurnPx : void 0;
            eU[6] !== tB || eU[7] !== eX || eU[8] !== tP || eU[9] !== eY || eU[10] !== e$ || eU[11] !== e0 || eU[12] !== eG ? (a = tP(eG, e$, eY, eX, e0, tB), eU[6] = tB, eU[7] = eX, eU[8] = tP, eU[9] = eY, eU[10] = e$, eU[11] = e0, eU[12] = eG, eU[13] = a) : a = eU[13];
            let tK = a,
                tH = (0, f.b)(),
                {
                    notifyLayoutResize: tM
                } = tH,
                tI = (0, h.c)(),
                tS = tI * (globalThis.devicePixelRatio ?? 1);
            eU[14] !== tr?.turnHeightsByKey ? (i = () => C(tr?.turnHeightsByKey), eU[14] = tr?.turnHeightsByKey, eU[15] = i) : i = eU[15];
            let [tR, tE] = (0, c.useState)(i), [tj, tC] = (0, c.useState)(null);
            eU[16] !== th || eU[17] !== tK || eU[18] !== tx || eU[19] !== tS || eU[20] !== tR ? (w = (0, P.a)({
                collapseEmptyRows: th,
                entries: tK,
                gapPx: tx,
                measuredHeightsByKey: tR,
                pixelScale: tS
            }), eU[16] = th, eU[17] = tK, eU[18] = tx, eU[19] = tS, eU[20] = tR, eU[21] = w) : w = eU[21];
            let tF = w;
            eU[22] !== e7 || eU[23] !== tr || eU[24] !== tF || eU[25] !== tH ? (F = () => {
                var e, t, n;
                let r, l, a, i, o = E(e7);
                return e = tF, t = j(tH.getLastScrollDistanceFromBottomPx(), o), n = tr, r = n?.renderedWindow, l = r?.viewportHeightPx ?? 800, a = Math.min(t, e.totalHeightPx), i = M(e, a, l), {
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
            }, eU[22] = e7, eU[23] = tr, eU[24] = tF, eU[25] = tH, eU[26] = F) : F = eU[26];
            let [tL, tk] = (0, c.useState)(F), [tz] = (0, c.useState)(B), t_ = (0, c.useSyncExternalStore)(tz.subscribe, tz.getSnapshot, tz.getSnapshot), tO = (0, c.useRef)(null), tN = (0, c.useRef)(tR), tT = (0, c.useRef)(0);
            eU[27] === Symbol.for("react.memo_cache_sentinel") ? (L = e => {
                tT.current = e;
                let t = tO.current;
                null != t && (t.style.minHeight = e > 0 ? `${e}px` : "")
            }, eU[27] = L) : L = eU[27];
            let tD = (0, v.a)(L),
                tA = (0, c.useRef)(tL),
                tV = (0, c.useRef)(null);
            eU[28] === Symbol.for("react.memo_cache_sentinel") ? (k = new Map, eU[28] = k) : k = eU[28];
            let tq = (0, c.useRef)(k);
            eU[29] === Symbol.for("react.memo_cache_sentinel") ? (z = new Map, eU[29] = z) : z = eU[29];
            let tQ = (0, c.useRef)(z);
            eU[30] === Symbol.for("react.memo_cache_sentinel") ? (_ = new WeakSet, eU[30] = _) : _ = eU[30];
            let tU = (0, c.useRef)(_);
            eU[31] === Symbol.for("react.memo_cache_sentinel") ? (O = new Map, eU[31] = O) : O = eU[31];
            let tW = (0, c.useRef)(O);
            eU[32] === Symbol.for("react.memo_cache_sentinel") ? (N = new Map, eU[32] = N) : N = eU[32];
            let tG = (0, c.useRef)(N),
                t$ = (0, c.useRef)(null),
                tY = (0, c.useRef)(null),
                tX = (0, c.useRef)(0),
                tZ = (0, c.useRef)(null),
                [tJ, t0] = (0, c.useState)(null),
                t1 = (0, c.useRef)(!1),
                t2 = (0, c.useRef)(tF),
                t3 = (0, c.useRef)(tF),
                t4 = (0, c.useRef)(tF),
                t5 = (0, c.useRef)(eG),
                t7 = (0, c.useRef)(null);
            eU[33] !== tR ? (T = () => {
                tR !== tN.current && tE(tN.current)
            }, eU[33] = tR, eU[34] = T) : T = eU[34], eU[35] !== th || eU[36] !== tK || eU[37] !== tx || eU[38] !== tS || eU[39] !== tR ? (D = [th, tK, tx, tS, tR], eU[35] = th, eU[36] = tK, eU[37] = tx, eU[38] = tS, eU[39] = tR, eU[40] = D) : D = eU[40], (0, c.useLayoutEffect)(T, D), eU[41] === Symbol.for("react.memo_cache_sentinel") ? (A = e => {
                tO.current = e, tC(e)
            }, eU[41] = A) : A = eU[41];
            let t8 = (0, v.a)(A);
            eU[42] !== th || eU[43] !== tK || eU[44] !== tx || eU[45] !== tF || eU[46] !== tS || eU[47] !== tR ? (V = () => {
                if (t3.current !== tF) {
                    t3.current = tF, t2.current = tR === tN.current ? tF : (0, P.a)({
                        collapseEmptyRows: th,
                        entries: tK,
                        gapPx: tx,
                        measuredHeightsByKey: tN.current,
                        pixelScale: tS
                    });
                    let e = tO.current;
                    null != e && (e.style.height = `${t2.current.totalHeightPx}px`)
                }
                return t2.current
            }, eU[42] = th, eU[43] = tK, eU[44] = tx, eU[45] = tF, eU[46] = tS, eU[47] = tR, eU[48] = V) : V = eU[48];
            let t6 = (0, v.a)(V);
            eU[49] !== e7 || eU[50] !== tH || eU[51] !== tI ? (q = e => {
                let t = tH.getScrollElement(),
                    n = tO.current,
                    r = t?.firstElementChild;
                return null == n || null == r ? e - E(e7) : e - (0, h.b)(r.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, tI)
            }, eU[49] = e7, eU[50] = tH, eU[51] = tI, eU[52] = q) : q = eU[52];
            let t9 = (0, v.a)(q),
                ne = tL.renderedRange;
            if (null != t_) {
                let e = (0, P.c)({
                    layout: tF,
                    turnKey: t_.turnKey,
                    viewportHeightPx: tL.viewportHeightPx
                });
                null != e && (ne = M(tF, e, tL.viewportHeightPx))
            } else if (!R(tL.turnKeys, tF.turnKeys)) {
                let e = tL.turnKeys[tL.renderedRange.startIndex];
                null != e && (ne = (0, P.e)({
                    anchorKey: e,
                    layout: tF,
                    previousRange: ne
                }) ?? M(tF, tL.distanceFromBottomPx, tL.viewportHeightPx))
            }
            eU[53] !== tn ? (Q = () => {
                null == t$.current && tn?.()
            }, eU[53] = tn, eU[54] = Q) : Q = eU[54];
            let nt = (0, v.a)(Q);
            eU[55] !== tK.length || eU[56] !== e3 || eU[57] !== tH || eU[58] !== tz ? (U = () => {
                null == e3 || t1.current || null != t$.current || null != tZ.current || tW.current.size > 0 || null != tz.getSnapshot() || null == tH.getScrollElement() || null == tO.current || tK.length > 0 && 0 === tQ.current.size || (t1.current = !0, e3())
            }, eU[55] = tK.length, eU[56] = e3, eU[57] = tH, eU[58] = tz, eU[59] = U) : U = eU[59];
            let nn = (0, v.a)(U),
                nr = eG.slice(ne.startIndex, ne.endIndex).map((e, t) => ({
                    entry: e,
                    turnIndex: ne.startIndex + t
                })),
                nl = tK.length > 0 && 0 === nr.length;
            for (let e of new Set(tp)) {
                let t = tF.turnIndexByKey.get(e);
                null == t || t >= ne.startIndex && t < ne.endIndex || nr.push({
                    entry: eG[t],
                    turnIndex: t
                })
            }
            nr.sort(b), eU[60] === Symbol.for("react.memo_cache_sentinel") ? (W = e => tQ.current.get(e), eU[60] = W) : W = eU[60];
            let na = (0, v.a)(W),
                ni = (0, v.a)(e => {
                    let t = e <= 24;
                    ti?.(null == tz.getSnapshot() ? function(e, t, n, r) {
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
                    }(tp, tF, t ? 0 : j(e, E(e7)), tA.current.viewportHeightPx + 24 * !!t) : null, na, t)
                });
            eU[61] !== ni || eU[62] !== tH ? (G = () => {
                ni(tH.getLastScrollDistanceFromBottomPx())
            }, eU[61] = ni, eU[62] = tH, eU[63] = G) : G = eU[63], eU[64] !== tF || eU[65] !== ti || eU[66] !== t_ || eU[67] !== tL.renderedRange || eU[68] !== tL.viewportHeightPx || eU[69] !== ni || eU[70] !== tf || eU[71] !== td || eU[72] !== eG || eU[73] !== tH ? ($ = [tF, ti, t_, tL.renderedRange, tL.viewportHeightPx, ni, tf, td, eG, tH], eU[64] = tF, eU[65] = ti, eU[66] = t_, eU[67] = tL.renderedRange, eU[68] = tL.viewportHeightPx, eU[69] = ni, eU[70] = tf, eU[71] = td, eU[72] = eG, eU[73] = tH, eU[74] = $) : $ = eU[74], (0, c.useLayoutEffect)(G, $), eU[75] !== tu || eU[76] !== ts || eU[77] !== tH ? (Y = () => {
                if (null == tu || null == ts || null != t$.current || tW.current.size > 0) return;
                let e = tH.getScrollElement(),
                    t = tQ.current.get(tu);
                null != t && tU.current.has(t) && !((tN.current[tu] ?? 0) <= 0) && null != e && !(e.clientHeight <= 0) && ts(tu, t)
            }, eU[75] = tu, eU[76] = ts, eU[77] = tH, eU[78] = Y) : Y = eU[78];
            let no = (0, v.a)(Y);
            eU[79] !== e7 || eU[80] !== tt || eU[81] !== e8 || eU[82] !== e6 || eU[83] !== tg || eU[84] !== nt || eU[85] !== tH || eU[86] !== tz || eU[87] !== tD ? (X = (e, t) => {
                let n = E(e7);
                if (null != e.latestTurnHeightChange && (e6?.(e.latestTurnHeightChange), tT.current > 0)) {
                    let e = n - E(e7);
                    e > 0 && tD(tT.current + e)
                }
                if (e.restoreScrollDistanceFromBottom) nt();
                else if (null != e.scrollDistanceFromBottomPx) {
                    var r, l;
                    let a, i = e.scrollDistanceFromBottomPx,
                        o = t?.previous ?? t4.current,
                        u = t?.estimated ?? t7.current,
                        s = t2.current;
                    tg && n > 0 && null != e.latestTurnHeightChange && null != u && u.totalHeightPx !== o.totalHeightPx && null == tz.getSnapshot() && tt?.() == null && (r = o, (a = (l = s).turnKeys.length - 1) > 0 && r.turnKeys.length === l.turnKeys.length && r.turnKeys[a] !== l.turnKeys[a] && r.turnKeys.every((e, t) => t === a || e === l.turnKeys[t] && r.topOffsetsPx[t] === l.topOffsetsPx[t] && r.heightsPx[t] === l.heightsPx[t])) && (i = tH.getUnroundedScrollDistanceFromBottomPx(tH.getLastScrollDistanceFromBottomPx()) + s.totalHeightPx - o.totalHeightPx, null != t7.current && (t7.current = o)), tH.compensateScrollToDistanceFromBottomPx(i + E(e7) - n, null != e.afterMeasure || null != tz.getSnapshot() || tt?.() != null || e8?.() ? void 0 : "turn-resize")
                }
                e.afterMeasure?.()
            }, eU[79] = e7, eU[80] = tt, eU[81] = e8, eU[82] = e6, eU[83] = tg, eU[84] = nt, eU[85] = tH, eU[86] = tz, eU[87] = tD, eU[88] = X) : X = eU[88];
            let nu = (0, v.a)(X);
            eU[89] !== t6 ? (Z = (e, t) => {
                if (null != t$.current || t <= 0) return;
                let n = tA.current,
                    r = H({
                        current: n,
                        distanceFromBottomPx: e,
                        layout: t6(),
                        viewportHeightPx: t
                    });
                r === n || (tA.current = r, r.renderedRange.startIndex === n.renderedRange.startIndex && r.renderedRange.endIndex === n.renderedRange.endIndex && R(r.turnKeys, n.turnKeys) || tk(r))
            }, eU[89] = t6, eU[90] = Z) : Z = eU[90];
            let ns = (0, v.a)(Z);
            eU[91] !== na || eU[92] !== ti ? (J = () => () => ti?.(void 0, na), ee = [na, ti], eU[91] = na, eU[92] = ti, eU[93] = J, eU[94] = ee) : (J = eU[93], ee = eU[94]), (0, c.useLayoutEffect)(J, ee), eU[95] !== t6 || eU[96] !== ta ? (et = (e, t, n) => {
                if (null == ta) return;
                let r = t6(),
                    l = Math.max(0, Math.min(r.totalHeightPx, r.totalHeightPx - e)),
                    a = Math.max(0, l - t);
                ta({
                    viewportEndPx: l,
                    viewportStartPx: a
                }, n)
            }, eU[95] = t6, eU[96] = ta, eU[97] = et) : et = eU[97];
            let nc = (0, v.a)(et);
            eU[98] !== tz ? (en = e => {
                tz.getSnapshot() === e && tz.replace(null)
            }, eU[98] = tz, eU[99] = en) : en = eU[99];
            let nd = (0, v.a)(en);
            eU[100] !== na || eU[101] !== ti || eU[102] !== tz ? (er = (e, t, n) => n?.signal?.aborted ? Promise.resolve() : (ti?.(null, na), new Promise(r => {
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
                tk(tA.current), tz.replace(a), n?.signal?.addEventListener("abort", l, {
                    once: !0
                })
            })), eU[100] = na, eU[101] = ti, eU[102] = tz, eU[103] = er) : er = eU[103];
            let nh = (0, v.a)(er);
            eU[104] !== t6 || eU[105] !== eG ? (el = e => {
                let {
                    viewportStartPx: t,
                    viewportEndPx: n
                } = e;
                return (0, P.f)(eG, t6(), t, n)
            }, eU[104] = t6, eU[105] = eG, eU[106] = el) : el = eU[106];
            let nx = (0, v.a)(el);
            eU[107] !== t6 ? (ea = e => {
                let t = t6(),
                    n = t.turnIndexByKey.get(e);
                if (null == n) return null;
                let r = t.topOffsetsPx[n],
                    l = t.heightsPx[n];
                return null == r || null == l ? null : {
                    endPx: r + l,
                    startPx: r
                }
            }, eU[107] = t6, eU[108] = ea) : ea = eU[108];
            let ng = (0, v.a)(ea);
            eU[109] !== e6 ? (ei = () => {
                let e = 0,
                    t = null;
                for (let [n, r] of tG.current) e += r, (null == t || t.compareDocumentPosition(n) === Node.DOCUMENT_POSITION_FOLLOWING) && (t = n);
                null != t && e6?.({
                    heightDeltaPx: null,
                    heightPx: null,
                    turnElement: t,
                    followContentHeightPx: e
                })
            }, eU[109] = e6, eU[110] = ei) : ei = eU[110];
            let nm = (0, v.a)(ei);
            eU[111] !== th || eU[112] !== nu || eU[113] !== tK || eU[114] !== tx || eU[115] !== e7 || eU[116] !== t6 || eU[117] !== t9 || eU[118] !== tt || eU[119] !== eY || eU[120] !== tS || eU[121] !== tg || eU[122] !== eG || eU[123] !== tH || eU[124] !== tz || eU[125] !== tD || eU[126] !== tI ? (eo = (e, t, n) => {
                var r;
                let l = void 0 === n ? "measured" : n,
                    a = t6(),
                    i = tH.getScrollElement();
                if (i?.getClientRects().length === 0) return !1;
                let o = t$.current,
                    u = tN.current,
                    s = (e, t) => {
                        let n = a.turnIndexByKey.get(e);
                        return Math.max(+!th, t, (null == n ? void 0 : eY(eG[n]).minHeightPx) ?? 0)
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
                        let a = tQ.current.get(n);
                        a === e && tU.current.add(a)
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
                    b = "controller" === l ? tH.getLastScrollDistanceFromBottomPx({
                        includePendingUserScroll: !0
                    }) : function(e, t) {
                        let n = e.getScrollElement(),
                            r = n?.firstElementChild;
                        if (null == n || null == r || 0 === n.clientHeight) return e.getLastScrollDistanceFromBottomPx();
                        let l = r.getBoundingClientRect();
                        if (0 === l.height) return e.getLastScrollDistanceFromBottomPx();
                        let a = n.scrollTop;
                        return Math.max(0, Math.round(a + (0, h.b)(l.bottom - (0, p.d)(n, t), t)) - n.clientHeight) - a
                    }(tH, tI),
                    B = E(e7),
                    K = j(b, B),
                    M = tg ? null : tt?.() ?? null,
                    S = null == o ? K : tA.current.distanceFromBottomPx,
                    F = S;
                if (tg && null == tz.getSnapshot() && tt?.() == null) {
                    let e = R(t4.current.turnKeys, a.turnKeys) ? a : t4.current,
                        t = e === a ? o?.scrollDistanceFromBottomPx ?? b : b,
                        n = I({
                            distanceFromBottomPx: t9(t),
                            preferLatestVisibleRow: t < B,
                            layout: e,
                            measuredHeightsByKey: u,
                            nextLayout: a,
                            viewportHeightPx: tA.current.viewportHeightPx
                        }),
                        r = i?.ownerDocument.activeElement,
                        l = r?.closest("[data-turn-key]"),
                        s = l?.dataset.turnKey;
                    if (i && r && l && s && tQ.current.get(s) === l) {
                        let e = r.getBoundingClientRect(),
                            t = i.getBoundingClientRect();
                        e.bottom > t.top && e.top < t.bottom && (n = s)
                    }
                    let c = null == n ? null : a.turnIndexByKey.get(n);
                    null != c && (F = a.bottomOffsetsPx[c] ?? S)
                }
                for (let [t, n] of e) {
                    let {
                        element: e,
                        heightPx: r
                    } = n, l = tQ.current.get(t);
                    if (l !== e) continue;
                    r > 0 ? tU.current.add(l) : tU.current.delete(l);
                    let i = s(t, r),
                        o = u[t];
                    if (o === i) continue;
                    c === u && (c = C(u)), c[t] = i, w = w || i > Math.max(+!th, r);
                    let d = a.turnIndexByKey.get(t);
                    if (null == d) continue;
                    let h = d === a.turnKeys.length - 1,
                        p = Math.round(Math.max(tK[d]?.minHeightPx ?? 0, i) * tS) / tS,
                        P = p - (a.heightsPx[d] ?? p);
                    v = v || null == o || 0 !== P, h && (g = !0, x += null == o ? 0 : P, m = l), y = y || th && (0 === p || 0 === a.heightsPx[d]), (a.bottomOffsetsPx[d] ?? 0) <= F && (tg || null != tt && !h) && (f += P)
                }
                if (c === u) return !1;
                if (!v) return tN.current = c, w && tE(c), !1;
                let L = (0, P.a)({
                    collapseEmptyRows: th,
                    entries: tK,
                    gapPx: tx,
                    measuredHeightsByKey: c,
                    pixelScale: tS
                });
                if (y)
                    for (let [e, t] of L.gapsBeforePx.entries()) {
                        let n = t - (a.gapsBeforePx[e] ?? 0);
                        (a.bottomOffsetsPx[e] ?? 0) + (a.heightsPx[e] ?? 0) <= F && (tg || null != tt && e !== a.turnKeys.length - 1) && (f += n)
                    }
                let k = tT.current;
                if (k > 0) {
                    let e = Math.max(0, k - a.totalHeightPx),
                        t = Math.max(0, k - L.totalHeightPx);
                    f += t - e, x > 0 && e > t && (x = Math.max(0, x - (e - t))), e > 0 && 0 === t && tD(0)
                }
                let z = tg && tH.shouldFollowContentGrowth() && (r = b, 0 === B && r <= 24) && m?.querySelector("[data-preserve-turn-viewport]") == null,
                    _ = o?.restoreScrollDistanceFromBottom || null != M,
                    O = null;
                _ || (O = z ? 0 : 0 !== f ? (o?.scrollDistanceFromBottomPx ?? tH.getUnroundedScrollDistanceFromBottomPx(b)) + f : o?.scrollDistanceFromBottomPx ?? (tg || !g ? b : null));
                let N = tA.current.distanceFromBottomPx;
                _ ? N = M ?? N : null != O && (N = j(O, B));
                let T = H({
                        current: tA.current,
                        distanceFromBottomPx: N,
                        layout: L,
                        viewportHeightPx: tA.current.viewportHeightPx
                    }),
                    D = o?.latestTurnHeightChange,
                    A = m ?? D?.turnElement ?? null,
                    V = {
                        afterMeasure: o?.afterMeasure,
                        latestTurnHeightChange: g || null != D ? {
                            heightDeltaPx: (D?.heightDeltaPx ?? 0) + x,
                            heightPx: L.heightsPx.at(-1) ?? null,
                            turnElement: A,
                            followContentHeightPx: null
                        } : null,
                        restoreScrollDistanceFromBottom: _,
                        scrollDistanceFromBottomPx: O,
                        turnHeightsByKey: c
                    },
                    q = tO.current;
                for (let [t, n] of e) {
                    let {
                        element: e
                    } = n, r = L.turnIndexByKey.get(t);
                    tQ.current.get(t) === e && null != r && null != e.parentElement && (e.parentElement.style.height = `${L.heightsPx[r]}px`, e.parentElement.style.minHeight = "")
                }
                if (g && 1 === e.size && null == o && T === tA.current && L.gapsBeforePx.at(-1) === a.gapsBeforePx.at(-1) && null != q) {
                    tN.current = c, t2.current = L;
                    let e = t4.current;
                    return t4.current = L, q.style.height = `${L.totalHeightPx}px`, nu(V, {
                        previous: e,
                        estimated: a
                    }), !0
                }
                null == t7.current && (t7.current = a);
                let Q = () => {
                    tN.current = c, t2.current = L, tE(c), T !== tA.current && (tA.current = T, tk(T))
                };
                return t$.current = V, void 0 === t || t ? (0, d.flushSync)(Q) : Q(), !0
            }, eU[111] = th, eU[112] = nu, eU[113] = tK, eU[114] = tx, eU[115] = e7, eU[116] = t6, eU[117] = t9, eU[118] = tt, eU[119] = eY, eU[120] = tS, eU[121] = tg, eU[122] = eG, eU[123] = tH, eU[124] = tz, eU[125] = tD, eU[126] = tI, eU[127] = eo) : eo = eU[127];
            let nf = (0, v.a)(eo);
            eU[128] !== nf || eU[129] !== tM || eU[130] !== nm || eU[131] !== no ? (eu = e => {
                let t = new Map,
                    n = !1,
                    r = !1,
                    l = !1;
                for (let a of e) {
                    let e = tq.current.get(a.target);
                    if (null == e) continue;
                    let {
                        height: i
                    } = (0, g.a)(a);
                    switch (e.kind) {
                        case "turn": {
                            r = !0;
                            let l = e.turnKey,
                                o = tQ.current.get(l);
                            if (o !== a.target || tU.current.has(o) || (n = !0), i > 0 && o === a.target && tN.current[l] === i) {
                                tU.current.add(o);
                                break
                            }
                            t.set(l, {
                                element: a.target,
                                heightPx: i
                            });
                            break
                        }
                        case "latest-turn-follow-content":
                            tG.current.set(e.element, i), l = !0
                    }
                }
                t.size > 0 && nf(t, !0, n ? "controller" : "measured"), l && nm(), no(), (r || l) && tM?.()
            }, eU[128] = nf, eU[129] = tM, eU[130] = nm, eU[131] = no, eU[132] = eu) : eu = eU[132];
            let np = (0, v.a)(eu);
            eU[133] !== np ? (es = () => {
                if (null != tY.current) return tY.current;
                let e = new ResizeObserver(np);
                return tY.current = e, e
            }, eU[133] = np, eU[134] = es) : es = eU[134];
            let ny = (0, v.a)(es);
            eU[135] !== ny ? (ec = (e, t) => {
                if (null == t) return;
                tq.current.set(t, {
                    kind: "turn",
                    turnKey: e
                }), tQ.current.set(e, t), tU.current.delete(t), tW.current.set(e, t);
                let n = ny();
                return n.observe(t), () => {
                    n.unobserve(t), tq.current.delete(t), tW.current.get(e) === t && tW.current.delete(e), tQ.current.get(e) === t && tQ.current.delete(e)
                }
            }, eU[135] = ny, eU[136] = ec) : ec = eU[136];
            let nv = (0, v.a)(ec);
            eU[137] !== nf || eU[138] !== tI ? (ed = (e, t) => {
                let n = tQ.current.get(e);
                if (null == n) return;
                let r = (0, h.b)(n.getBoundingClientRect().height, tI);
                if (!(r <= 0) && (nf(new Map([
                        [e, {
                            element: n,
                            heightPx: r
                        }]
                    ]), !1), null != t)) {
                    let e = t$.current;
                    null == e ? t() : e.afterMeasure = t
                }
            }, eU[137] = nf, eU[138] = tI, eU[139] = ed) : ed = eU[139];
            let nP = (0, v.a)(ed);
            eU[140] !== ny ? (eh = e => {
                if (null == e) return;
                tq.current.set(e, {
                    element: e,
                    kind: "latest-turn-follow-content"
                }), tG.current.set(e, 0);
                let t = ny();
                return t.observe(e), () => {
                    t.unobserve(e), tq.current.delete(e), tG.current.delete(e)
                }
            }, eU[140] = ny, eU[141] = eh) : eh = eU[141];
            let nw = (0, v.a)(eh),
                nb = (0, c.useRef)(tb);
            eU[142] !== nf || eU[143] !== tb || eU[144] !== tI ? (ex = () => {
                let e = tW.current,
                    t = nb.current;
                if (nb.current = tb, null != t && t !== tb) {
                    let n = tQ.current.get(t);
                    null != n && e.set(t, n)
                }
                if (0 === e.size) {
                    tX.current = 0;
                    return
                }
                if (null != tZ.current) return;
                if (tX.current >= 8) {
                    tZ.current = requestAnimationFrame(e => {
                        tZ.current = null, tX.current = 0, t0(e)
                    });
                    return
                }
                tX.current = tX.current + 1, tW.current = new Map;
                let n = new Map;
                if ((0, x.a)("virtualizedTurnList.readMountedHeights", () => {
                        for (let [t, r] of e) {
                            if (tQ.current.get(t) !== r) continue;
                            let e = (0, h.b)(r.getBoundingClientRect().height, tI);
                            (e > 0 || r.getClientRects().length > 0) && n.set(t, {
                                element: r,
                                heightPx: e
                            })
                        }
                    }, e.size), n.size > 0) {
                    let t = tN.current;
                    if (nf(n, !1, "controller"))
                        for (let [n, r] of e)(null == t[n] || tX.current > 1) && tQ.current.get(n) === r && tW.current.set(n, r);
                    else tX.current = 0
                }
            }, eU[142] = nf, eU[143] = tb, eU[144] = tI, eU[145] = ex) : ex = eU[145], (0, c.useLayoutEffect)(ex), eU[146] !== tK || eU[147] !== nP || eU[148] !== tc ? (eg = () => {
                let e = tc ?? tK.at(-1)?.turnKey;
                null != e && nP(e)
            }, eU[146] = tK, eU[147] = nP, eU[148] = tc, eU[149] = eg) : eg = eU[149];
            let nB = (0, v.a)(eg);
            eU[150] !== to || eU[151] !== nB ? (em = () => {
                null != to && nB()
            }, ef = [to, nB], eU[150] = to, eU[151] = nB, eU[152] = em, eU[153] = ef) : (em = eU[152], ef = eU[153]), (0, c.useLayoutEffect)(em, ef), eU[154] !== nu || eU[155] !== tR ? (ep = () => {
                let e = t$.current;
                null != e && e.turnHeightsByKey === tR && (t$.current = null, nu(e))
            }, ey = [nu, tR], eU[154] = nu, eU[155] = tR, eU[156] = ep, eU[157] = ey) : (ep = eU[156], ey = eU[157]), (0, c.useLayoutEffect)(ep, ey), eU[158] !== tK || eU[159] !== ty || eU[160] !== tF.heightsPx || eU[161] !== tm || eU[162] !== tR || eU[163] !== tj || eU[164] !== tI ? (ev = e => {
                if (!tm || ty?.viewportHeightPx === e) return;
                if (null != ty) return void(0, d.flushSync)(() => {
                    tv({
                        ...ty,
                        viewportHeightPx: e
                    })
                });
                let t = tj?.closest("[data-thread-user-message-navigation-content]"),
                    n = t?.lastElementChild,
                    r = tK.at(-1)?.turnKey;
                if (null == t || null == n || null == r || tK.some(e => null == tR[e.turnKey])) return;
                let l = (0, h.b)(t.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, tI) - parseFloat(getComputedStyle(t).paddingBottom);
                l <= 24 || (0, d.flushSync)(() => {
                    tv({
                        turnKey: r,
                        heightOutsideTurnPx: e - (tF.heightsPx.at(-1) ?? 0) - l,
                        viewportHeightPx: e
                    })
                })
            }, eU[158] = tK, eU[159] = ty, eU[160] = tF.heightsPx, eU[161] = tm, eU[162] = tR, eU[163] = tj, eU[164] = tI, eU[165] = ev) : ev = eU[165];
            let nK = (0, v.a)(ev);
            eU[166] !== nx || eU[167] !== ng || eU[168] !== na || eU[169] !== nP || eU[170] !== e2 || eU[171] !== nh ? (eP = () => {
                if (null != e2) return e2({
                    getEntriesInViewport: nx,
                    getRowElement: na,
                    getEntryGeometry: ng,
                    measureTurnBeforePaint: nP,
                    scrollToKey: nh
                }), () => {
                    e2(null)
                }
            }, ew = [nx, na, ng, nP, e2, nh], eU[166] = nx, eU[167] = ng, eU[168] = na, eU[169] = nP, eU[170] = e2, eU[171] = nh, eU[172] = eP, eU[173] = ew) : (eP = eU[172], ew = eU[173]), (0, c.useEffect)(eP, ew), eU[174] === Symbol.for("react.memo_cache_sentinel") ? (eb = () => () => {
                t1.current = !1
            }, eB = [], eU[174] = eb, eU[175] = eB) : (eb = eU[174], eB = eU[175]), (0, c.useLayoutEffect)(eb, eB), eU[176] !== tz ? (eK = () => {
                let e = tq.current,
                    t = tQ.current,
                    n = tG.current;
                return () => {
                    null != tZ.current && (cancelAnimationFrame(tZ.current), tZ.current = null), tY.current?.disconnect(), tY.current = null, e.clear(), t.clear(), tW.current.clear(), n.clear(), t$.current = null, tz.replace(null)
                }
            }, eH = [tz], eU[176] = tz, eU[177] = eK, eU[178] = eH) : (eK = eU[177], eH = eU[178]), (0, c.useEffect)(eK, eH), eU[179] !== tl ? (eM = () => {
                if (null != tl) return () => {
                    tl(function(e, t) {
                        let {
                            turnKeys: n,
                            renderedRange: r,
                            viewportHeightPx: l
                        } = t, a = C();
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
                    }(tN.current, tA.current))
                }
            }, eI = [tl], eU[179] = tl, eU[180] = eM, eU[181] = eI) : (eM = eU[180], eI = eU[181]), (0, c.useLayoutEffect)(eM, eI), eU[182] !== eJ || eU[183] !== tw || eU[184] !== tb || eU[185] !== eG ? (eS = tw < 0 ? void 0 : eJ?.(eG[tw]) ?? tb, eU[182] = eJ, eU[183] = tw, eU[184] = tb, eU[185] = eG, eU[186] = eS) : eS = eU[186];
            let nH = eS;
            eU[187] !== nH || eU[188] !== tH || eU[189] !== tD || eU[190] !== tj || eU[191] !== tI ? (eR = () => {
                if (null == tj || null == nH) return;
                let e = e => {
                    let t = tH.getScrollElement(),
                        n = e.target;
                    if (null == t || t.scrollTop <= 0 || !(n instanceof Element)) return;
                    let r = n.getBoundingClientRect(),
                        l = t.getBoundingClientRect().top;
                    r.bottom <= l || (n.hasAttribute("data-turn-transcript") && (tH.shouldFollowContentGrowth() || r.top < l) ? tD(0) : tD(Math.max(0, (0, h.b)(tj.getBoundingClientRect().height, tI) - (0, p.b)(t))))
                };
                return tj.addEventListener(m.a, e), () => {
                    tj.removeEventListener(m.a, e), tD(0)
                }
            }, eE = [nH, tH, tD, tj, tI], eU[187] = nH, eU[188] = tH, eU[189] = tD, eU[190] = tj, eU[191] = tI, eU[192] = eR, eU[193] = eE) : (eR = eU[192], eE = eU[193]), (0, c.useLayoutEffect)(eR, eE);
            let {
                addScrollListener: nM,
                addUserScrollListener: nI,
                getScrollElement: nS
            } = tH;
            eU[194] !== nM || eU[195] !== nI || eU[196] !== e7 || eU[197] !== nS || eU[198] !== tM || eU[199] !== nK || eU[200] !== tm || eU[201] !== no || eU[202] !== nc || eU[203] !== ni || eU[204] !== nt || eU[205] !== tH || eU[206] !== tD || eU[207] !== tj || eU[208] !== ns ? (ej = () => {
                let e = nS();
                if (null == e) return;
                let t = () => (null == tV.current && (tV.current = e.clientHeight), tV.current || tA.current.viewportHeightPx || 800),
                    n = nM(e => {
                        ns(j(e, E(e7)), t()), ni(e)
                    }),
                    r = nI((e, n) => {
                        let r = tT.current;
                        if (r > 0) {
                            let t = r - e;
                            tD(t > t2.current.totalHeightPx && e > 0 ? t : 0)
                        }
                        nc(j(e, E(e7)), t(), null != n && e > n)
                    }),
                    l = new ResizeObserver(n => {
                        let r = n.find(t => t.target === e);
                        if (null != r) {
                            let {
                                height: e
                            } = (0, g.a)(r);
                            tV.current = e, ns(tA.current.distanceFromBottomPx, e), nt(), ni(tH.getLastScrollDistanceFromBottomPx())
                        }
                        nK(t()), no(), null != r && tM?.()
                    });
                return l.observe(e), tm && null != tj && l.observe(tj), () => {
                    n(), r(), l.disconnect()
                }
            }, eC = [nM, nI, e7, nS, tM, nK, no, tm, nc, ni, nt, tH, tD, tj, ns], eU[194] = nM, eU[195] = nI, eU[196] = e7, eU[197] = nS, eU[198] = tM, eU[199] = nK, eU[200] = tm, eU[201] = no, eU[202] = nc, eU[203] = ni, eU[204] = nt, eU[205] = tH, eU[206] = tD, eU[207] = tj, eU[208] = ns, eU[209] = ej, eU[210] = eC) : (ej = eU[209], eC = eU[210]), (0, c.useLayoutEffect)(ej, eC), eU[211] !== nf || eU[212] !== e7 || eU[213] !== tF || eU[214] !== t_ || eU[215] !== tH || eU[216] !== tz || eU[217] !== nd || eU[218] !== ns || eU[219] !== tI ? (eF = () => {
                if (null == t_ || tz.getSnapshot() !== t_ || null != tZ.current) return;
                let e = tH.getScrollElement();
                if (null == e) return;
                let t = new Map;
                for (let [e, n] of tQ.current) {
                    let r = (0, h.b)(n.getBoundingClientRect().height, tI);
                    r > 0 && t.set(e, {
                        element: n,
                        heightPx: r
                    })
                }
                if (nf(t, !1) || null != t$.current) return;
                let n = tQ.current.get(t_.turnKey),
                    r = null == n ? null : t_.getTargetElement?.(n) ?? n,
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
                        align: t_.align,
                        layout: tF,
                        turnKey: t_.turnKey,
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
                        align: t_.align,
                        layout: tF,
                        targetElement: r,
                        turnElement: n,
                        turnKey: t_.turnKey,
                        viewportHeightPx: e.clientHeight,
                        windowZoom: tI
                    });
                if (null == l) return void queueMicrotask(() => nd(t_));
                let a = "top" === t_.align && null != r ? Math.max(0, tH.getLastScrollDistanceFromBottomPx() - (0, h.b)(r.getBoundingClientRect().top - (0, p.d)(e, tI), tI) + 10) : l + E(e7);
                tH.scrollToDistanceFromBottomPx(a, "instant", "user"), ns(Math.max(0, a - E(e7)), e.clientHeight), queueMicrotask(() => nd(t_))
            }, eU[211] = nf, eU[212] = e7, eU[213] = tF, eU[214] = t_, eU[215] = tH, eU[216] = tz, eU[217] = nd, eU[218] = ns, eU[219] = tI, eU[220] = eF) : eF = eU[220], eU[221] !== nf || eU[222] !== e7 || eU[223] !== tF || eU[224] !== tJ || eU[225] !== t_ || eU[226] !== tH || eU[227] !== tz || eU[228] !== nd || eU[229] !== ns || eU[230] !== tI ? (eL = [nf, tF, tJ, t_, tH, tz, nd, e7, ns, tI], eU[221] = nf, eU[222] = e7, eU[223] = tF, eU[224] = tJ, eU[225] = t_, eU[226] = tH, eU[227] = tz, eU[228] = nd, eU[229] = ns, eU[230] = tI, eU[231] = eL) : eL = eU[231], (0, c.useLayoutEffect)(eF, eL), eU[232] !== e7 || eU[233] !== t6 || eU[234] !== t9 || eU[235] !== tt || eU[236] !== t_ || eU[237] !== tg || eU[238] !== eG || eU[239] !== tH || eU[240] !== ns ? (ek = () => {
                var e;
                if (null != t$.current) return;
                let t = t4.current,
                    n = t6(),
                    r = t7.current ?? n;
                t7.current = null, t4.current = n;
                let l = t5.current !== eG;
                if (t5.current = eG, null != t_ || !tg && t.turnKeys.at(-1) !== r.turnKeys.at(-1) || t === r && !l) return;
                let a = E(e7),
                    i = tH.getLastScrollDistanceFromBottomPx({
                        includePendingUserScroll: !0
                    });
                if (null != (tt?.() ?? null)) return;
                if (tH.shouldFollowContentGrowth() && (e = i, 0 === a && e <= 24)) return void tH.compensateScrollToDistanceFromBottomPx(0);
                if (t === r) return;
                let o = I({
                    distanceFromBottomPx: t9(i),
                    preferLatestVisibleRow: i < a,
                    layout: t,
                    measuredHeightsByKey: tN.current,
                    nextLayout: r,
                    viewportHeightPx: tA.current.viewportHeightPx
                });
                if (null == o) return;
                let u = t.turnIndexByKey.get(o);
                if (tg && r !== n && n.turnKeys.length > t.turnKeys.length && null != u && t.topOffsetsPx[u] === n.topOffsetsPx[u] && t.turnKeys.every((e, t) => e === n.turnKeys[t])) return;
                let s = tH.getUnroundedScrollDistanceFromBottomPx(i),
                    c = (0, P.b)({
                        anchorKey: o,
                        distanceFromBottomPx: s,
                        nextLayout: r,
                        previousLayout: t
                    });
                null != c && (c !== s || t.totalHeightPx !== r.totalHeightPx) && (ns(j(c, a), tA.current.viewportHeightPx), tH.compensateScrollToDistanceFromBottomPx(c))
            }, eU[232] = e7, eU[233] = t6, eU[234] = t9, eU[235] = tt, eU[236] = t_, eU[237] = tg, eU[238] = eG, eU[239] = tH, eU[240] = ns, eU[241] = ek) : ek = eU[241], eU[242] !== e7 || eU[243] !== t6 || eU[244] !== t9 || eU[245] !== tt || eU[246] !== tF || eU[247] !== t_ || eU[248] !== tg || eU[249] !== eG || eU[250] !== tH || eU[251] !== ns ? (ez = [e7, t6, t9, tt, tF, t_, tg, eG, tH, ns], eU[242] = e7, eU[243] = t6, eU[244] = t9, eU[245] = tt, eU[246] = tF, eU[247] = t_, eU[248] = tg, eU[249] = eG, eU[250] = tH, eU[251] = ns, eU[252] = ez) : ez = eU[252], (0, c.useLayoutEffect)(ek, ez), eU[253] !== t_ || eU[254] !== nc || eU[255] !== nt || eU[256] !== ns ? (e_ = () => {
                null == t_ && null == t$.current && (ns(tA.current.distanceFromBottomPx, tA.current.viewportHeightPx), nt(), nc(tA.current.distanceFromBottomPx, tA.current.viewportHeightPx, !1))
            }, eU[253] = t_, eU[254] = nc, eU[255] = nt, eU[256] = ns, eU[257] = e_) : e_ = eU[257], eU[258] !== tF || eU[259] !== t_ || eU[260] !== nc || eU[261] !== nt || eU[262] !== ns ? (eO = [tF, t_, nc, nt, ns], eU[258] = tF, eU[259] = t_, eU[260] = nc, eU[261] = nt, eU[262] = ns, eU[263] = eO) : eO = eU[263], (0, c.useLayoutEffect)(e_, eO), eU[264] !== no || eU[265] !== nn ? (eN = () => {
                no(), nn()
            }, eU[264] = no, eU[265] = nn, eU[266] = eN) : eN = eU[266], (0, c.useLayoutEffect)(eN), eU[267] !== e4 ? (eT = (0, u.b)("relative shrink-0", e4), eU[267] = e4, eU[268] = eT) : eT = eU[268], eU[269] !== tF.totalHeightPx ? (eD = {
                height: tF.totalHeightPx
            }, eU[269] = tF.totalHeightPx, eU[270] = eD) : eD = eU[270], eU[271] !== nl ? (eA = (0, r.jsx)(o.b, {
                name: "conversation rows",
                active: nl
            }), eU[271] = nl, eU[272] = eA) : eA = eU[272];
            let nR = `${tF.topOffsetsPx[ne.startIndex]??0}px`;
            eU[273] !== nR ? (eV = {
                marginTop: nR
            }, eU[273] = nR, eU[274] = eV) : eV = eU[274];
            let nE = nr.map(e => {
                let {
                    entry: t,
                    turnIndex: n
                } = e, l = tK[n].turnKey;
                return (0, r.jsx)(K, {
                    entry: t,
                    turnKey: l,
                    minHeightPx: tK[n].minHeightPx,
                    reservedHeightPx: eY(t).minHeightPx,
                    gapBeforePx: n === ne.startIndex ? 0 : tF.gapsBeforePx[n] ?? 0,
                    retainedTopPx: n < ne.startIndex || n >= ne.endIndex ? tF.topOffsetsPx[n] : void 0,
                    latestTurnFollowContentRef: n === tK.length - 1 && null != e6 ? nw : void 0,
                    boundaryBefore: eZ?.[n],
                    boundaryAfter: eZ?.[n + 1],
                    RowComponent: e1,
                    measuredHeightPx: null == tR[l] ? void 0 : tF.heightsPx[n],
                    constrainedHeightPx: n !== tK.length - 1 && t_?.turnKey !== l && null == tR[l] ? tF.heightsPx[n] : void 0,
                    observeTurnElement: nv
                }, l)
            });
            return eU[275] !== eV || eU[276] !== nE ? (eq = (0, r.jsx)("div", {
                className: "flex flex-col",
                style: eV,
                children: nE
            }), eU[275] = eV, eU[276] = nE, eU[277] = eq) : eq = eU[277], eU[278] !== t8 || eU[279] !== eT || eU[280] !== eD || eU[281] !== eA || eU[282] !== eq ? (eQ = (0, r.jsxs)("div", {
                ref: t8,
                className: eT,
                style: eD,
                children: [eA, eq]
            }), eU[278] = t8, eU[279] = eT, eU[280] = eD, eU[281] = eA, eU[282] = eq, eU[283] = eQ) : eQ = eU[283], eQ
        }

        function b(e, t) {
            return e.turnIndex - t.turnIndex
        }

        function B() {
            return new F
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
                    observeTurnElement: S
                } = e,
                R = (0, c.useRef)(null);
            m[0] !== S || m[1] !== p ? (t = () => S(p, R.current), m[0] = S, m[1] = p, m[2] = t) : t = m[2], m[3] !== S || m[4] !== M || m[5] !== p ? (n = [S, M, p], m[3] = S, m[4] = M, m[5] = p, m[6] = n) : n = m[6], (0, c.useLayoutEffect)(t, n);
            let E = null != I && "absolute inset-x-0",
                j = null != K && "overflow-hidden";
            m[7] !== E || m[8] !== j ? (a = (0, u.b)(E, j), m[7] = E, m[8] = j, m[9] = a) : a = m[9];
            let C = null != H ? "size" : void 0,
                F = null != H ? "clip" : void 0,
                L = H ?? K,
                k = null == I ? v : 0,
                z = null == H ? y : void 0;
            return m[10] !== I || m[11] !== z || m[12] !== C || m[13] !== F || m[14] !== L || m[15] !== k ? (o = {
                contain: C,
                overflowY: F,
                height: L,
                marginTop: k,
                minHeight: z,
                top: I
            }, m[10] = I, m[11] = z, m[12] = C, m[13] = F, m[14] = L, m[15] = k, m[16] = o) : o = m[16], m[17] !== B || m[18] !== b ? (s = {
                before: b,
                after: B
            }, m[17] = B, m[18] = b, m[19] = s) : s = m[19], m[20] !== w || m[21] !== f || m[22] !== P ? (d = (0, r.jsx)(w, {
                entry: f,
                latestTurnFollowContentRef: P
            }), m[20] = w, m[21] = f, m[22] = P, m[23] = d) : d = m[23], m[24] !== s || m[25] !== d ? (h = (0, r.jsx)(i.a, {
                value: s,
                children: d
            }), m[24] = s, m[25] = d, m[26] = h) : h = m[26], m[27] !== h || m[28] !== p ? (x = (0, r.jsx)("div", {
                ref: R,
                className: "[&_[data-virtualized-turn-content]]:[content-visibility:visible]",
                "data-turn-key": p,
                children: h
            }), m[27] = h, m[28] = p, m[29] = x) : x = m[29], m[30] !== o || m[31] !== x || m[32] !== a ? (g = (0, r.jsx)("div", {
                "data-virtualized-turn": "",
                className: a,
                style: o,
                children: x
            }), m[30] = o, m[31] = x, m[32] = a, m[33] = g) : g = m[33], g
        });

        function H(e) {
            let {
                current: t,
                distanceFromBottomPx: n,
                layout: r,
                viewportHeightPx: l
            } = e, a = Math.min(n, r.totalHeightPx), i = M(r, a, l, t.renderedRange);
            return t.distanceFromBottomPx === a && t.viewportHeightPx === l && t.renderedRange.startIndex === i.startIndex && t.renderedRange.endIndex === i.endIndex && R(t.turnKeys, r.turnKeys) ? t : {
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
                    if (!n) return o;
                    u = o
                }
            }
            return u
        }

        function S() {
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

        function R(e, t) {
            return e === t || e.length === t.length && e.every((e, n) => e === t[n])
        }

        function E(e) {
            return Math.max(0, e?.() ?? 0)
        }

        function j(e, t) {
            return Math.max(0, e - t)
        }

        function C(e) {
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