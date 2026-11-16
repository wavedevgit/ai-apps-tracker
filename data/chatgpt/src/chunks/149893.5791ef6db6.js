export const __rspack_esm_ids = [149893];
export const __webpack_modules__ = {
    UvGr: (function(e, t) {
        t.a = {
            disclosure: "disclosure-fA_nMK",
            gallery: "gallery-VxcMcy",
            frame: "frame-V8WHie",
            revealImage: "revealImage-LgyscF"
        }
    }),
    Jc8F: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            o = n("on57"),
            i = n("zd8w"),
            a = n("oyxz"),
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
                let R = t;
                return p[1] !== P ? (n = (0, r.jsx)("span", {
                    className: "block truncate text-text/40",
                    children: (0, r.jsx)(a.a, {
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
                                ref: R,
                                "data-horizontal-scroll": !0,
                                className: (0, o.b)(c.a.gallery, "horizontal-scroll-fade-mask hide-scrollbar grid min-w-0 auto-cols-max grid-flow-col items-start justify-start gap-2 overflow-x-auto overflow-y-hidden pb-1"),
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
            o = n("on57"),
            i = n("IPUh"),
            a = n("zd8w"),
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
            let t, n, s, d, f, p, v, P, w, b, B, H, K, M, R = (0, l.c)(43),
                {
                    className: S,
                    isExpandable: I,
                    review: E
                } = e,
                F = (0, u.a)(),
                [C, j] = (0, a.useState)(!1);
            R[0] !== F || R[1] !== E ? (t = (0, g.c)(F, E), R[0] = F, R[1] = E, R[2] = t) : t = R[2];
            let L = t;
            if (!(void 0 === I || I)) {
                let e, t;
                return R[3] !== S ? (e = (0, o.b)("min-w-0 truncate pt-1 text-codex-description/80", S), R[3] = S, R[4] = e) : e = R[4], R[5] !== e || R[6] !== L ? (t = (0, r.jsx)("div", {
                    className: e,
                    children: L
                }), R[5] = e, R[6] = L, R[7] = t) : t = R[7], t
            }
            let k = "denied" === E.status && "high" === E.riskLevel;
            R[8] !== F || R[9] !== E ? (n = (0, g.b)(F, E), R[8] = F, R[9] = E, R[10] = n) : n = R[10];
            let O = n;
            R[11] !== S ? (s = (0, o.b)("flex flex-col pt-1", S), R[11] = S, R[12] = s) : s = R[12], R[13] === Symbol.for("react.memo_cache_sentinel") ? (d = () => j(y), R[13] = d) : d = R[13];
            let _ = "inProgress" === E.status,
                z = k ? "text-warning" : "text-codex-description/80 group-hover/automatic-approval-review:text-default";
            R[14] !== z ? (f = (0, o.b)("min-w-0 truncate", z), R[14] = z, R[15] = f) : f = R[15], R[16] !== _ || R[17] !== f || R[18] !== L ? (p = (0, r.jsx)(m.a, {
                active: _,
                className: f,
                children: L
            }), R[16] = _, R[17] = f, R[18] = L, R[19] = p) : p = R[19];
            let D = C && "rotate-90 opacity-100";
            R[20] !== D ? (v = (0, o.b)("icon-2xs shrink-0 text-tertiary transition-[opacity,transform] duration-basic opacity-0 group-hover/automatic-approval-review:opacity-100", D), R[20] = D, R[21] = v) : v = R[21], R[22] !== v ? (P = (0, r.jsx)(h.a, {
                className: v
            }), R[22] = v, R[23] = P) : P = R[23], R[24] !== C || R[25] !== P || R[26] !== p ? (w = (0, r.jsxs)(c.a, {
                className: "group/automatic-approval-review inline-flex w-fit max-w-full gap-1.5 text-start",
                color: "ghostMuted",
                focusRing: "inset",
                size: "inline",
                onClick: d,
                "aria-expanded": C,
                children: [p, P]
            }), R[24] = C, R[25] = P, R[26] = p, R[27] = w) : w = R[27];
            let T = C ? "auto" : 0,
                N = +!!C;
            R[28] !== T || R[29] !== N ? (b = {
                height: T,
                opacity: N
            }, R[28] = T, R[29] = N, R[30] = b) : b = R[30];
            let A = C ? "auto" : "none";
            return R[31] !== A ? (B = {
                overflow: "hidden",
                pointerEvents: A
            }, R[31] = A, R[32] = B) : B = R[32], R[33] !== O ? (H = (0, r.jsx)("p", {
                className: "max-w-[80ch] pt-1 text-size-chat leading-relaxed whitespace-pre-wrap text-text/60",
                children: O
            }), R[33] = O, R[34] = H) : H = R[34], R[35] !== b || R[36] !== B || R[37] !== H ? (K = (0, r.jsx)(i.a.div, {
                initial: !1,
                animate: b,
                transition: x.a,
                style: B,
                children: H
            }), R[35] = b, R[36] = B, R[37] = H, R[38] = K) : K = R[38], R[39] !== w || R[40] !== K || R[41] !== s ? (M = (0, r.jsxs)("div", {
                className: s,
                children: [w, K]
            }), R[39] = w, R[40] = K, R[41] = s, R[42] = M) : M = R[42], M
        }

        function y(e) {
            return !e
        }

        function v(e) {
            let t, n, o = (0, l.c)(9),
                {
                    className: i,
                    isExpandable: a,
                    reviews: u
                } = e;
            if (o[0] !== i || o[1] !== a || o[2] !== u) {
                let e;
                o[4] !== i || o[5] !== a ? (e = e => (0, r.jsx)(p, {
                    className: i,
                    isExpandable: a,
                    review: e
                }, e.id), o[4] = i, o[5] = a, o[6] = e) : e = o[6], t = u.map(e), o[0] = i, o[1] = a, o[2] = u, o[3] = t
            } else t = o[3];
            return o[7] !== t ? (n = (0, r.jsx)(r.Fragment, {
                children: t
            }), o[7] = t, o[8] = n) : n = o[8], n
        }

        function P(e) {
            let t, n, o = (0, l.c)(4),
                {
                    reviews: i
                } = e;
            o[0] !== i ? (t = i.some(w), o[0] = i, o[1] = t) : t = o[1];
            let a = t;
            return o[2] !== a ? (n = (0, r.jsx)("p", {
                className: "max-w-[80ch] pt-1 text-size-chat leading-relaxed text-text/60",
                children: a ? (0, r.jsx)(s.a, {
                    id: "localConversation.automaticApprovalReview.explicitAuthorizationHighRisk",
                    defaultMessage: "Requires explicit authorization because this action is considered high risk"
                }) : (0, r.jsx)(s.a, {
                    id: "localConversation.automaticApprovalReview.explicitAuthorization",
                    defaultMessage: "Requires explicit authorization"
                })
            }), o[2] = a, o[3] = n) : n = o[3], n
        }

        function w(e) {
            return "denied" === e.status && "high" === e.riskLevel
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, i = (0, l.c)(5),
                    {
                        className: a,
                        tone: u
                    } = e,
                    s = "warning" === (void 0 === u ? "default" : u) ? "text-warning" : "text-tertiary";
                return i[0] !== a || i[1] !== s ? (t = (0, o.b)("shrink-0", s, a), i[0] = a, i[1] = s, i[2] = t) : t = i[2], i[3] !== t ? (n = (0, r.jsx)(d.a, {
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
                        isDeclined: o,
                        reviews: i
                    } = e;
                if (!o) {
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
            o = n("slpy"),
            i = n("on57"),
            a = n("oyxz"),
            u = n("Sm6l"),
            s = n("bX52"),
            c = n("kRUe"),
            d = n("waM8"),
            h = n("XSEO");

        function x(e) {
            let t, n, o = (0, l.c)(15),
                {
                    workedDurationMs: i,
                    workedForItem: u,
                    className: s
                } = e;
            if (null != u) {
                let e;
                return o[0] !== s || o[1] !== u.completedAtMs || o[2] !== u.startedAtMs || o[3] !== u.status ? (e = (0, r.jsx)(h.b, {
                    className: s,
                    status: u.status,
                    startedAtMs: u.startedAtMs,
                    completedAtMs: u.completedAtMs
                }), o[0] = s, o[1] = u.completedAtMs, o[2] = u.startedAtMs, o[3] = u.status, o[4] = e) : e = o[4], e
            }
            if (null != i) {
                let e, t, n, l = s ?? "text-tertiary";
                return o[5] !== i ? (e = (0, d.a)(i), o[5] = i, o[6] = e) : e = o[6], o[7] !== e ? (t = (0, r.jsx)(a.a, {
                    id: "localConversation.workedFor",
                    defaultMessage: "Worked for {time}",
                    values: {
                        time: e
                    }
                }), o[7] = e, o[8] = t) : t = o[8], o[9] !== l || o[10] !== t ? (n = (0, r.jsx)("span", {
                    className: l,
                    children: t
                }), o[9] = l, o[10] = t, o[11] = n) : n = o[11], n
            }
            let c = s ?? "text-tertiary";
            return o[12] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, r.jsx)(a.a, {
                ...d.b.worked
            }), o[12] = t) : t = o[12], o[13] !== c ? (n = (0, r.jsx)("span", {
                className: c,
                children: t
            }), o[13] = c, o[14] = n) : n = o[14], n
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
                        workedForItem: R,
                        isCollapsed: S,
                        onFocus: I,
                        onBlur: E,
                        onPointerEnter: F,
                        onPointerLeave: C,
                        onToggle: j
                    } = e,
                    L = void 0 === K ? 0 : K,
                    k = null != H && "flex min-w-0 items-start gap-3";
                w[0] !== k ? (t = (0, i.b)("text-size-chat text-secondary", k), w[0] = k, w[1] = t) : t = w[1];
                let O = null == H && "flex-wrap",
                    _ = L > 0 && "w-full";
                w[2] !== O || w[3] !== _ ? (n = (0, i.b)("inline-flex max-w-full text-size-chat", O, _), w[2] = O, w[3] = _, w[4] = n) : n = w[4];
                let z = null != H,
                    D = !S,
                    T = null == H ? void 0 : "min-w-0 text-start whitespace-normal";
                w[5] !== b || w[6] !== M || w[7] !== R ? (d = b ?? (0, r.jsx)(x, {
                    className: "text-inherit",
                    workedDurationMs: M,
                    workedForItem: R
                }), w[5] = b, w[6] = M, w[7] = R, w[8] = d) : d = w[8], w[9] !== d || w[10] !== T ? (h = (0, r.jsx)("span", {
                    className: T,
                    children: d
                }), w[9] = d, w[10] = T, w[11] = h) : h = w[11];
                let N = S ? "rotate-0" : "rotate-90";
                return w[12] !== N ? (g = (0, i.b)("icon-2xs transition-transform duration-basic", N), w[12] = N, w[13] = g) : g = w[13], w[14] !== g ? (m = (0, r.jsx)(s.a, {
                    className: g
                }), w[14] = g, w[15] = m) : m = w[15], w[16] !== L ? (f = L > 0 ? (0, r.jsx)(o.a, {
                    content: (0, r.jsx)(a.a, {
                        id: "localConversation.deniedActionsTooltip",
                        defaultMessage: "{count, plural, one {Auto-review denied # action. View the action and why it was denied.} other {Auto-review denied # actions. View the actions and why they were denied.}}",
                        values: {
                            count: L
                        }
                    }),
                    children: (0, r.jsxs)("span", {
                        className: "ms-auto inline-flex items-center gap-1 text-secondary",
                        "data-denied-action-count": !0,
                        children: [(0, r.jsx)(c.a, {}), (0, r.jsx)(a.a, {
                            id: "localConversation.deniedActionsCount",
                            defaultMessage: "{count, plural, one {# denied action} other {# denied actions}}",
                            values: {
                                count: L
                            }
                        })]
                    })
                }) : null, w[16] = L, w[17] = f) : f = w[17], w[18] !== E || w[19] !== I || w[20] !== F || w[21] !== C || w[22] !== j || w[23] !== h || w[24] !== m || w[25] !== f || w[26] !== n || w[27] !== z || w[28] !== D ? (p = (0, r.jsxs)(u.a, {
                    className: n,
                    allowShrink: z,
                    color: "ghostTertiary",
                    radius: "small",
                    size: "inline",
                    "aria-expanded": D,
                    onFocus: I,
                    onBlur: E,
                    onPointerEnter: F,
                    onPointerLeave: C,
                    onClick: j,
                    children: [h, m, f]
                }), w[18] = E, w[19] = I, w[20] = F, w[21] = C, w[22] = j, w[23] = h, w[24] = m, w[25] = f, w[26] = n, w[27] = z, w[28] = D, w[29] = p) : p = w[29], w[30] !== H || w[31] !== p || w[32] !== t ? (y = (0, r.jsxs)("div", {
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
            o = n("on57");
        let i = {
            activity: "var(--conversation-activity-gap)",
            item: "var(--conversation-item-gap, 16px)",
            compact: "var(--conversation-compact-gap)"
        };
        n.d(t, {}, {
            a: function(e) {
                let t, n, a, u = (0, l.c)(7),
                    {
                        variant: s,
                        className: c
                    } = e;
                u[0] !== c ? (t = (0, o.b)("w-full shrink-0", c), u[0] = c, u[1] = t) : t = u[1];
                let d = i[void 0 === s ? "item" : s];
                return u[2] !== d ? (n = {
                    height: d
                }, u[2] = d, u[3] = n) : n = u[3], u[4] !== t || u[5] !== n ? (a = (0, r.jsx)("div", {
                    "aria-hidden": !0,
                    className: t,
                    style: n
                }), u[4] = t, u[5] = n, u[6] = a) : a = u[6], a
            }
        })
    }),
    if6d: (function(e, t, n) {
        n.d(t, {
            a: () => S,
            b: () => R
        });
        var r = n("ABep"),
            l = n("QosV"),
            o = n("v8gE"),
            i = n("on57"),
            a = n("BolX"),
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
            y = n("hTLy"),
            v = n.n(y),
            P = n("R9dK"),
            w = n.n(P);

        function b(e) {
            return "gap" !== e.type
        }

        function B(e) {
            let {
                collapseEmptyRows: t = !1,
                entries: n,
                gapPx: r,
                measuredHeightsByKey: l,
                pixelScale: o
            } = e, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e => !1 !== e.anchorEligible, a = new Set, u = [], s = [], c = [], d = new Map, h = [], x = 0;
            for (let [e, g] of n.entries()) {
                let n = g.turnKey,
                    m = Object.hasOwn(l, n) ? l[n] : void 0,
                    f = Math.max(g.minHeightPx ?? 0, m ?? g.estimatedHeightPx ?? 280);
                null != o && (f = Math.round(f * o) / o);
                let p = (t ? x > 0 && f > 0 : e > 0) ? g.gapBeforePx ?? r : 0;
                null != o && (p = Math.round(p * o) / o), x += p, u.push(p), i(g) || a.add(n), d.set(n, e), h.push(n), c.push(x), s.push(f), x += f
            }
            return {
                bottomOffsetsPx: c.map((e, t) => x - e - (s[t] ?? 0)),
                collapseEmptyRows: t,
                gapKeys: a,
                gapsBeforePx: u,
                heightsPx: s,
                topOffsetsPx: c,
                totalHeightPx: x,
                turnIndexByKey: d,
                turnKeys: h
            }
        }

        function H(e) {
            let {
                distanceFromBottomPx: t,
                layout: n,
                overscanCount: r,
                overscanPx: l = 0,
                viewportHeightPx: o
            } = e;
            if (0 === n.turnKeys.length) return {
                startIndex: 0,
                endIndex: 0
            };
            let i = Math.min(Math.max(0, t), n.totalHeightPx),
                a = Math.max(0, i - l),
                u = Math.min(i + Math.max(0, o) + l, n.totalHeightPx),
                s = n.collapseEmptyRows && u === n.totalHeightPx ? 0 : function(e, t) {
                    let n = 0,
                        r = e.length;
                    for (; n < r;) {
                        let l = Math.floor((n + r) / 2);
                        (e[l] ?? 0) < t ? r = l : n = l + 1
                    }
                    return n
                }(n.bottomOffsetsPx, u),
                c = n.collapseEmptyRows && 0 === a ? n.turnKeys.length : function(e, t, n) {
                    let r = 0,
                        l = e.length;
                    for (; r < l;) {
                        let o = Math.floor((r + l) / 2);
                        (e[o] ?? 0) + (t[o] ?? 0) <= n ? l = o : r = o + 1
                    }
                    return r
                }(n.bottomOffsetsPx, n.heightsPx, a);
            return {
                startIndex: Math.max(0, s - r),
                endIndex: Math.min(n.turnKeys.length, Math.max(c, s + 1) + r)
            }
        }

        function K(e) {
            let {
                anchorKey: t,
                layout: n,
                previousRange: r
            } = e, l = n.turnIndexByKey.get(t);
            return null == l ? null : {
                startIndex: l,
                endIndex: Math.min(n.turnKeys.length, l + r.endIndex - r.startIndex)
            }
        }

        function M(e) {
            let {
                layout: t,
                turnKey: n,
                viewportHeightPx: r
            } = e, l = t.turnIndexByKey.get(n);
            return null == l ? null : Math.max(0, (t.bottomOffsetsPx[l] ?? 0) - r / 2 + (t.heightsPx[l] ?? 0) / 2)
        }

        function R(e) {
            let t, n, o, i, a = (0, l.c)(8);
            return a[0] !== e ? ({
                entries: n,
                RowComponent: t,
                ...o
            } = e, a[0] = e, a[1] = t, a[2] = n, a[3] = o) : (t = a[1], n = a[2], o = a[3]), a[4] !== t || a[5] !== n || a[6] !== o ? (i = (0, r.jsx)(S, {
                ...o,
                rows: n,
                getRowKey: O,
                getRowGeometry: _,
                getRowCollapseScopeKey: z,
                isRowAnchorEligible: b,
                renderRow: t
            }), a[4] = t, a[5] = n, a[6] = o, a[7] = i) : i = a[7], i
        }

        function S(e) {
            let t, n, y, P, b, R, S, O, _, z, V, q, U, W, G, Q, $, X, Y, J, Z, ee, et, en, er, el, eo, ei, ea, eu, es, ec, ed, eh, ex, eg, em, ef, ep, ey, ev, eP, ew, eb, eB, eH, eK, eM, eR, eS, eI, eE, eF, eC, ej, eL, ek, eO, e_, ez, eD, eT, eN, eA, eV, eq, eU, eW, eG, eQ, e$, eX, eY, eJ, eZ, e0 = (0, l.c)(291),
                {
                    collapseEmptyRows: e1,
                    rows: e2,
                    getRowKey: e3,
                    getRowGeometry: e4,
                    getRowCollapseScopeKey: e5,
                    isRowAnchorEligible: e8,
                    renderRow: e6,
                    onApiChange: e7,
                    onVisibleContentReady: e9,
                    className: te,
                    gapPx: tt,
                    getBottomScrollPaddingPx: tn,
                    isSubmitPlacementAnimating: tr,
                    onLatestTurnHeightChange: tl,
                    preserveMeasuredTurnViewport: to,
                    preserveUnderfilledViewport: ti,
                    getPendingRestoreScrollDistanceFromBottomPx: ta,
                    restoreScrollDistanceFromBottomPx: tu,
                    initialRestoreState: ts,
                    onRestoreStateChange: tc,
                    onViewportChange: td,
                    onViewportRowsChange: th,
                    latestTurnSynchronousMeasurementKey: tx,
                    layoutReadyTurnKey: tg,
                    onTurnLayoutReady: tm,
                    synchronousMeasurementTurnKey: tf,
                    retainedTurnKeys: tp
                } = e,
                ty = void 0 !== e1 && e1,
                tv = void 0 === tt ? 12 : tt,
                tP = void 0 !== to && to,
                tw = void 0 !== ti && ti,
                tb = (0, a.z)(f.b);
            e0[0] !== tp ? (t = tp ?? [], e0[0] = tp, e0[1] = t) : t = e0[1];
            let tB = [...t, ...tb],
                [tH, tK] = (0, u.useState)(null),
                [tM] = (0, u.useState)(k),
                tR = e2.length - 1;
            e0[2] !== e3 || e0[3] !== tR || e0[4] !== e2 ? (n = tR < 0 ? void 0 : e3(e2[tR]), e0[2] = e3, e0[3] = tR, e0[4] = e2, e0[5] = n) : n = e0[5];
            let tS = n,
                tI = tw && null != tH && tH.turnKey === tS ? tH.viewportHeightPx - tH.heightOutsideTurnPx : void 0;
            e0[6] !== tI || e0[7] !== tM || e0[8] !== e4 || e0[9] !== e3 || e0[10] !== e8 || e0[11] !== e2 ? (y = tM(e2, e3, e4, e8, tI), e0[6] = tI, e0[7] = tM, e0[8] = e4, e0[9] = e3, e0[10] = e8, e0[11] = e2, e0[12] = y) : y = e0[12];
            let tE = y,
                tF = (0, g.b)(),
                {
                    notifyLayoutResize: tC
                } = tF,
                tj = (0, c.c)(),
                tL = tj * (globalThis.devicePixelRatio ?? 1);
            e0[13] !== ts?.turnHeightsByKey ? (P = () => A(ts?.turnHeightsByKey), e0[13] = ts?.turnHeightsByKey, e0[14] = P) : P = e0[14];
            let [tk, tO] = (0, u.useState)(P), [t_, tz] = (0, u.useState)(null);
            e0[15] !== ty || e0[16] !== tE || e0[17] !== tv || e0[18] !== tL || e0[19] !== tk ? (b = B({
                collapseEmptyRows: ty,
                entries: tE,
                gapPx: tv,
                measuredHeightsByKey: tk,
                pixelScale: tL
            }), e0[15] = ty, e0[16] = tE, e0[17] = tv, e0[18] = tL, e0[19] = tk, e0[20] = b) : b = e0[20];
            let tD = b;
            e0[21] !== tn || e0[22] !== ts || e0[23] !== tD || e0[24] !== tF ? (R = () => {
                var e, t, n;
                let r, l, o, i, a = T(tn);
                return e = tD, t = N(tF.getLastScrollDistanceFromBottomPx(), a), n = ts, r = n?.renderedWindow, l = r?.viewportHeightPx ?? 800, o = Math.min(t, e.totalHeightPx), i = j(e, o, l), {
                    distanceFromBottomPx: o,
                    renderedRange: (null == r ? null : K({
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
            }, e0[21] = tn, e0[22] = ts, e0[23] = tD, e0[24] = tF, e0[25] = R) : R = e0[25];
            let [tT, tN] = (0, u.useState)(R), [tA] = (0, u.useState)(E), tV = (0, u.useSyncExternalStore)(tA.subscribe, tA.getSnapshot, tA.getSnapshot), tq = (0, u.useRef)(null), tU = (0, u.useRef)(tk), tW = (0, u.useRef)(0);
            e0[26] === Symbol.for("react.memo_cache_sentinel") ? (S = e => {
                tW.current = e;
                let t = tq.current;
                null != t && (t.style.minHeight = e > 0 ? `${e}px` : "")
            }, e0[26] = S) : S = e0[26];
            let tG = (0, p.a)(S),
                tQ = (0, u.useRef)(tT),
                t$ = (0, u.useRef)(null);
            e0[27] === Symbol.for("react.memo_cache_sentinel") ? (O = new Map, e0[27] = O) : O = e0[27];
            let tX = (0, u.useRef)(O);
            e0[28] === Symbol.for("react.memo_cache_sentinel") ? (_ = new Map, e0[28] = _) : _ = e0[28];
            let tY = (0, u.useRef)(_);
            e0[29] === Symbol.for("react.memo_cache_sentinel") ? (z = new WeakSet, e0[29] = z) : z = e0[29];
            let tJ = (0, u.useRef)(z);
            e0[30] === Symbol.for("react.memo_cache_sentinel") ? (V = new Map, e0[30] = V) : V = e0[30];
            let tZ = (0, u.useRef)(V);
            e0[31] === Symbol.for("react.memo_cache_sentinel") ? (q = new Map, e0[31] = q) : q = e0[31];
            let t0 = (0, u.useRef)(q),
                t1 = (0, u.useRef)(null),
                t2 = (0, u.useRef)(null),
                t3 = (0, u.useRef)(0),
                t4 = (0, u.useRef)(null),
                [t5, t8] = (0, u.useState)(null),
                t6 = (0, u.useRef)(!1),
                t7 = (0, u.useRef)(null),
                t9 = (0, u.useRef)(tD),
                ne = (0, u.useRef)(tD),
                nt = (0, u.useRef)(tD),
                nn = (0, u.useRef)(e2),
                nr = (0, u.useRef)(null);
            e0[32] !== tk ? (U = () => {
                tk !== tU.current && tO(tU.current)
            }, e0[32] = tk, e0[33] = U) : U = e0[33], e0[34] !== ty || e0[35] !== tE || e0[36] !== tv || e0[37] !== tL || e0[38] !== tk ? (W = [ty, tE, tv, tL, tk], e0[34] = ty, e0[35] = tE, e0[36] = tv, e0[37] = tL, e0[38] = tk, e0[39] = W) : W = e0[39], (0, u.useLayoutEffect)(U, W), e0[40] === Symbol.for("react.memo_cache_sentinel") ? (G = e => {
                tq.current = e, tz(e)
            }, e0[40] = G) : G = e0[40];
            let nl = (0, p.a)(G);
            e0[41] !== ty || e0[42] !== tE || e0[43] !== tv || e0[44] !== tD || e0[45] !== tL || e0[46] !== tk ? (Q = () => {
                if (ne.current !== tD) {
                    ne.current = tD, t9.current = tk === tU.current ? tD : B({
                        collapseEmptyRows: ty,
                        entries: tE,
                        gapPx: tv,
                        measuredHeightsByKey: tU.current,
                        pixelScale: tL
                    });
                    let e = tq.current;
                    null != e && (e.style.height = `${t9.current.totalHeightPx}px`)
                }
                return t9.current
            }, e0[41] = ty, e0[42] = tE, e0[43] = tv, e0[44] = tD, e0[45] = tL, e0[46] = tk, e0[47] = Q) : Q = e0[47];
            let no = (0, p.a)(Q);
            e0[48] !== tn || e0[49] !== tF || e0[50] !== tj ? ($ = e => {
                let t = tF.getScrollElement(),
                    n = tq.current,
                    r = t?.firstElementChild;
                return null == n || null == r ? e - T(tn) : e - (0, c.b)(r.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, tj)
            }, e0[48] = tn, e0[49] = tF, e0[50] = tj, e0[51] = $) : $ = e0[51];
            let ni = (0, p.a)($),
                na = tT.renderedRange;
            if (null != tV) {
                let e = M({
                    layout: tD,
                    turnKey: tV.turnKey,
                    viewportHeightPx: tT.viewportHeightPx
                });
                null != e && (na = j(tD, e, tT.viewportHeightPx))
            } else if (!D(tT.turnKeys, tD.turnKeys)) {
                let e = tT.turnKeys[tT.renderedRange.startIndex];
                null != e && (na = K({
                    anchorKey: e,
                    layout: tD,
                    previousRange: na
                }) ?? j(tD, tT.distanceFromBottomPx, tT.viewportHeightPx))
            }
            e0[52] !== tu ? (X = () => {
                null == t1.current && tu?.()
            }, e0[52] = tu, e0[53] = X) : X = e0[53];
            let nu = (0, p.a)(X);
            e0[54] === Symbol.for("react.memo_cache_sentinel") ? (Y = () => {
                null != t7.current && (window.cancelAnimationFrame(t7.current), t7.current = null)
            }, e0[54] = Y) : Y = e0[54];
            let ns = (0, p.a)(Y);
            e0[55] !== tE.length || e0[56] !== e9 || e0[57] !== nu ? (J = () => {
                null == e9 || t6.current || null != t7.current || null == tq.current || tE.length > 0 && 0 === tY.current.size || (t7.current = window.requestAnimationFrame(() => {
                    t7.current = window.requestAnimationFrame(() => {
                        t7.current = null, t6.current || null == tq.current || tE.length > 0 && 0 === tY.current.size || (t6.current = !0, nu(), e9())
                    })
                }))
            }, e0[55] = tE.length, e0[56] = e9, e0[57] = nu, e0[58] = J) : J = e0[58];
            let nc = (0, p.a)(J),
                nd = e2.slice(na.startIndex, na.endIndex).map((e, t) => ({
                    entry: e,
                    turnIndex: na.startIndex + t
                })),
                nh = tE.length > 0 && 0 === nd.length;
            for (let e of new Set(tB)) {
                let t = tD.turnIndexByKey.get(e);
                null == t || t >= na.startIndex && t < na.endIndex || nd.push({
                    entry: e2[t],
                    turnIndex: t
                })
            }
            nd.sort(I), e0[59] === Symbol.for("react.memo_cache_sentinel") ? (Z = e => tY.current.get(e), e0[59] = Z) : Z = e0[59];
            let nx = (0, p.a)(Z),
                ng = (0, p.a)(e => {
                    let t = e <= 24;
                    th?.(null == tA.getSnapshot() ? function(e, t, n, r) {
                        let {
                            startIndex: l,
                            endIndex: o
                        } = H({
                            distanceFromBottomPx: n,
                            layout: t,
                            overscanCount: 0,
                            viewportHeightPx: r
                        }), i = new Set(e), a = new Set;
                        for (let e = l; e < o; e++) a.add(e);
                        for (let e of i) {
                            let n = t.turnIndexByKey.get(e);
                            null != n && a.add(n)
                        }
                        return [...a].sort((e, t) => e - t).map(e => ({
                            key: t.turnKeys[e],
                            retained: i.has(t.turnKeys[e])
                        }))
                    }(tB, tD, t ? 0 : N(e, T(tn)), tQ.current.viewportHeightPx + 24 * !!t) : null, nx, t)
                });
            e0[60] !== ng || e0[61] !== tF ? (ee = () => {
                ng(tF.getLastScrollDistanceFromBottomPx())
            }, e0[60] = ng, e0[61] = tF, e0[62] = ee) : ee = e0[62], e0[63] !== tD || e0[64] !== th || e0[65] !== tV || e0[66] !== tT.renderedRange || e0[67] !== tT.viewportHeightPx || e0[68] !== ng || e0[69] !== tb || e0[70] !== tp || e0[71] !== e2 || e0[72] !== tF ? (et = [tD, th, tV, tT.renderedRange, tT.viewportHeightPx, ng, tb, tp, e2, tF], e0[63] = tD, e0[64] = th, e0[65] = tV, e0[66] = tT.renderedRange, e0[67] = tT.viewportHeightPx, e0[68] = ng, e0[69] = tb, e0[70] = tp, e0[71] = e2, e0[72] = tF, e0[73] = et) : et = e0[73], (0, u.useLayoutEffect)(ee, et), e0[74] !== tg || e0[75] !== tm || e0[76] !== tF ? (en = () => {
                if (null == tg || null == tm || null != t1.current || tZ.current.size > 0) return;
                let e = tF.getScrollElement(),
                    t = tY.current.get(tg);
                null != t && tJ.current.has(t) && !((tU.current[tg] ?? 0) <= 0) && null != e && !(e.clientHeight <= 0) && tm(tg, t)
            }, e0[74] = tg, e0[75] = tm, e0[76] = tF, e0[77] = en) : en = e0[77];
            let nm = (0, p.a)(en);
            e0[78] !== tn || e0[79] !== ta || e0[80] !== tr || e0[81] !== tl || e0[82] !== tP || e0[83] !== nu || e0[84] !== tF || e0[85] !== tA || e0[86] !== tG ? (er = (e, t) => {
                let n = T(tn);
                if (null != e.latestTurnHeightChange && (tl?.(e.latestTurnHeightChange), tW.current > 0)) {
                    let e = n - T(tn);
                    e > 0 && tG(tW.current + e)
                }
                if (e.restoreScrollDistanceFromBottom) nu();
                else if (null != e.scrollDistanceFromBottomPx) {
                    var r, l;
                    let o, i = e.scrollDistanceFromBottomPx,
                        a = t?.previous ?? nt.current,
                        u = t?.estimated ?? nr.current,
                        s = t9.current;
                    tP && n > 0 && null != e.latestTurnHeightChange && null != u && u.totalHeightPx !== a.totalHeightPx && null == tA.getSnapshot() && ta?.() == null && (r = a, (o = (l = s).turnKeys.length - 1) > 0 && r.turnKeys.length === l.turnKeys.length && r.turnKeys[o] !== l.turnKeys[o] && r.turnKeys.every((e, t) => t === o || e === l.turnKeys[t] && r.topOffsetsPx[t] === l.topOffsetsPx[t] && r.heightsPx[t] === l.heightsPx[t])) && (i = tF.getUnroundedScrollDistanceFromBottomPx(tF.getLastScrollDistanceFromBottomPx()) + s.totalHeightPx - a.totalHeightPx, null != nr.current && (nr.current = a)), tF.compensateScrollToDistanceFromBottomPx(i + T(tn) - n, null != e.afterMeasure || null != tA.getSnapshot() || ta?.() != null || tr?.() ? void 0 : "turn-resize")
                }
                e.afterMeasure?.()
            }, e0[78] = tn, e0[79] = ta, e0[80] = tr, e0[81] = tl, e0[82] = tP, e0[83] = nu, e0[84] = tF, e0[85] = tA, e0[86] = tG, e0[87] = er) : er = e0[87];
            let nf = (0, p.a)(er);
            e0[88] !== no ? (el = (e, t) => {
                if (null != t1.current || t <= 0) return;
                let n = tQ.current,
                    r = C({
                        current: n,
                        distanceFromBottomPx: e,
                        layout: no(),
                        viewportHeightPx: t
                    });
                r === n || (tQ.current = r, r.renderedRange.startIndex === n.renderedRange.startIndex && r.renderedRange.endIndex === n.renderedRange.endIndex && D(r.turnKeys, n.turnKeys) || tN(r))
            }, e0[88] = no, e0[89] = el) : el = e0[89];
            let np = (0, p.a)(el);
            e0[90] !== nx || e0[91] !== th ? (eo = () => () => th?.(void 0, nx), ei = [nx, th], e0[90] = nx, e0[91] = th, e0[92] = eo, e0[93] = ei) : (eo = e0[92], ei = e0[93]), (0, u.useLayoutEffect)(eo, ei), e0[94] !== no || e0[95] !== td ? (ea = (e, t, n) => {
                if (null == td) return;
                let r = no(),
                    l = Math.max(0, Math.min(r.totalHeightPx, r.totalHeightPx - e)),
                    o = Math.max(0, l - t);
                td({
                    viewportEndPx: l,
                    viewportStartPx: o
                }, n)
            }, e0[94] = no, e0[95] = td, e0[96] = ea) : ea = e0[96];
            let ny = (0, p.a)(ea);
            e0[97] !== tA ? (eu = e => {
                tA.getSnapshot() === e && tA.replace(null)
            }, e0[97] = tA, e0[98] = eu) : eu = e0[98];
            let nv = (0, p.a)(eu);
            e0[99] !== nx || e0[100] !== th || e0[101] !== tA ? (es = (e, t, n) => n?.signal?.aborted ? Promise.resolve() : (th?.(null, nx), new Promise(r => {
                let l = () => {
                        tA.getSnapshot() === o && tA.replace(null)
                    },
                    o = {
                        align: n?.align ?? "center",
                        complete: () => {
                            n?.signal?.removeEventListener("abort", l), r()
                        },
                        getTargetElement: t,
                        turnKey: e
                    };
                tN(tQ.current), tA.replace(o), n?.signal?.addEventListener("abort", l, {
                    once: !0
                })
            })), e0[99] = nx, e0[100] = th, e0[101] = tA, e0[102] = es) : es = e0[102];
            let nP = (0, p.a)(es);
            e0[103] !== no || e0[104] !== e2 ? (ec = e => {
                let {
                    viewportStartPx: t,
                    viewportEndPx: n
                } = e;
                return function(e, t, n, r) {
                    let {
                        topOffsetsPx: l,
                        heightsPx: o
                    } = t, i = Math.max(0, w()(l, n) - 1);
                    return (l[i] ?? 0) + (o[i] ?? 0) <= n && i++, e.slice(i, v()(l, r))
                }(e2, no(), t, n)
            }, e0[103] = no, e0[104] = e2, e0[105] = ec) : ec = e0[105];
            let nw = (0, p.a)(ec);
            e0[106] !== no ? (ed = e => {
                let t = no(),
                    n = t.turnIndexByKey.get(e);
                if (null == n) return null;
                let r = t.topOffsetsPx[n],
                    l = t.heightsPx[n];
                return null == r || null == l ? null : {
                    endPx: r + l,
                    startPx: r
                }
            }, e0[106] = no, e0[107] = ed) : ed = e0[107];
            let nb = (0, p.a)(ed);
            e0[108] !== tl ? (eh = () => {
                let e = 0,
                    t = null;
                for (let [n, r] of t0.current) e += r, (null == t || t.compareDocumentPosition(n) === Node.DOCUMENT_POSITION_FOLLOWING) && (t = n);
                null != t && tl?.({
                    heightDeltaPx: null,
                    heightPx: null,
                    turnElement: t,
                    followContentHeightPx: e
                })
            }, e0[108] = tl, e0[109] = eh) : eh = e0[109];
            let nB = (0, p.a)(eh);
            e0[110] !== ty || e0[111] !== nf || e0[112] !== tE || e0[113] !== tv || e0[114] !== tn || e0[115] !== no || e0[116] !== ni || e0[117] !== ta || e0[118] !== tL || e0[119] !== tP || e0[120] !== tF || e0[121] !== tA || e0[122] !== tG || e0[123] !== tj ? (ex = (e, t, n) => {
                var r;
                let l = void 0 === n ? "measured" : n,
                    o = no(),
                    i = tF.getScrollElement();
                if (i?.getClientRects().length === 0) return !1;
                let a = t1.current,
                    u = tU.current;
                if ("controller" === l && null == a) {
                    let t = !1;
                    for (let [n, r] of e) {
                        let {
                            element: e,
                            heightPx: l
                        } = r;
                        if (l <= 0 || u[n] !== Math.max(+!ty, l)) {
                            t = !0;
                            break
                        }
                        let o = tY.current.get(n);
                        o === e && tJ.current.add(o)
                    }
                    if (!t) return !1
                }
                let d = u,
                    h = 0,
                    x = !1,
                    g = null,
                    f = 0,
                    p = !1,
                    y = !1,
                    v = "controller" === l ? tF.getLastScrollDistanceFromBottomPx({
                        includePendingUserScroll: !0
                    }) : function(e, t) {
                        let n = e.getScrollElement(),
                            r = n?.firstElementChild;
                        if (null == n || null == r || 0 === n.clientHeight) return e.getLastScrollDistanceFromBottomPx();
                        let l = r.getBoundingClientRect();
                        if (0 === l.height) return e.getLastScrollDistanceFromBottomPx();
                        let o = n.scrollTop;
                        return Math.max(0, Math.round(o + (0, c.b)(l.bottom - (0, m.d)(n, t), t)) - n.clientHeight) - o
                    }(tF, tj),
                    P = T(tn),
                    w = N(v, P),
                    b = tP ? null : ta?.() ?? null,
                    H = null == a ? w : tQ.current.distanceFromBottomPx,
                    K = H;
                if (tP && null == tA.getSnapshot() && ta?.() == null) {
                    let e = D(nt.current.turnKeys, o.turnKeys) ? o : nt.current,
                        t = e === o ? a?.scrollDistanceFromBottomPx ?? v : v,
                        n = L({
                            distanceFromBottomPx: ni(t),
                            preferLatestVisibleRow: t < P,
                            layout: e,
                            measuredHeightsByKey: u,
                            nextLayout: o,
                            viewportHeightPx: tQ.current.viewportHeightPx
                        }),
                        r = i?.ownerDocument.activeElement,
                        l = r?.closest("[data-turn-key]"),
                        s = l?.dataset.turnKey;
                    if (i && r && l && s && tY.current.get(s) === l) {
                        let e = r.getBoundingClientRect(),
                            t = i.getBoundingClientRect();
                        e.bottom > t.top && e.top < t.bottom && (n = s)
                    }
                    let c = null == n ? null : o.turnIndexByKey.get(n);
                    null != c && (K = o.bottomOffsetsPx[c] ?? H)
                }
                for (let [t, n] of e) {
                    let {
                        element: e,
                        heightPx: r
                    } = n, l = tY.current.get(t);
                    if (l !== e) continue;
                    r > 0 ? tJ.current.add(l) : tJ.current.delete(l);
                    let i = Math.max(+!ty, r),
                        a = u[t];
                    if (a === i) continue;
                    d === u && (d = A(u)), d[t] = i;
                    let s = o.turnIndexByKey.get(t);
                    if (null == s) continue;
                    let c = s === o.turnKeys.length - 1,
                        m = Math.round(Math.max(tE[s]?.minHeightPx ?? 0, i) * tL) / tL,
                        v = m - (o.heightsPx[s] ?? m);
                    y = y || null == a || 0 !== v, c && (x = !0, h += null == a ? 0 : v, g = l), p = p || ty && (0 === m || 0 === o.heightsPx[s]), (o.bottomOffsetsPx[s] ?? 0) <= K && (tP || null != ta && !c) && (f += v)
                }
                if (d === u) return !1;
                if (!y) return tU.current = d, !1;
                let M = B({
                    collapseEmptyRows: ty,
                    entries: tE,
                    gapPx: tv,
                    measuredHeightsByKey: d,
                    pixelScale: tL
                });
                if (p)
                    for (let [e, t] of M.gapsBeforePx.entries()) {
                        let n = t - (o.gapsBeforePx[e] ?? 0);
                        (o.bottomOffsetsPx[e] ?? 0) + (o.heightsPx[e] ?? 0) <= K && (tP || null != ta && e !== o.turnKeys.length - 1) && (f += n)
                    }
                let R = tW.current;
                if (R > 0) {
                    let e = Math.max(0, R - o.totalHeightPx),
                        t = Math.max(0, R - M.totalHeightPx);
                    f += t - e, h > 0 && e > t && (h = Math.max(0, h - (e - t))), e > 0 && 0 === t && tG(0)
                }
                let S = tP && tF.shouldFollowContentGrowth() && (r = v, 0 === P && r <= 24) && g?.querySelector("[data-preserve-turn-viewport]") == null,
                    I = a?.restoreScrollDistanceFromBottom || null != b,
                    E = null;
                I || (E = S ? 0 : 0 !== f ? (a?.scrollDistanceFromBottomPx ?? tF.getUnroundedScrollDistanceFromBottomPx(v)) + f : a?.scrollDistanceFromBottomPx ?? (tP || !x ? v : null));
                let F = tQ.current.distanceFromBottomPx;
                I ? F = b ?? F : null != E && (F = N(E, P));
                let j = C({
                        current: tQ.current,
                        distanceFromBottomPx: F,
                        layout: M,
                        viewportHeightPx: tQ.current.viewportHeightPx
                    }),
                    k = a?.latestTurnHeightChange,
                    O = g ?? k?.turnElement ?? null,
                    _ = {
                        afterMeasure: a?.afterMeasure,
                        latestTurnHeightChange: x || null != k ? {
                            heightDeltaPx: (k?.heightDeltaPx ?? 0) + h,
                            heightPx: M.heightsPx.at(-1) ?? null,
                            turnElement: O,
                            followContentHeightPx: null
                        } : null,
                        restoreScrollDistanceFromBottom: I,
                        scrollDistanceFromBottomPx: E,
                        turnHeightsByKey: d
                    },
                    z = tq.current;
                for (let [t, n] of e) {
                    let {
                        element: e
                    } = n, r = M.turnIndexByKey.get(t);
                    tY.current.get(t) === e && null != r && null != e.parentElement && (e.parentElement.style.height = `${M.heightsPx[r]}px`, e.parentElement.style.minHeight = "")
                }
                if (x && 1 === e.size && null == a && j === tQ.current && M.gapsBeforePx.at(-1) === o.gapsBeforePx.at(-1) && null != z) {
                    tU.current = d, t9.current = M;
                    let e = nt.current;
                    return nt.current = M, z.style.height = `${M.totalHeightPx}px`, nf(_, {
                        previous: e,
                        estimated: o
                    }), !0
                }
                null == nr.current && (nr.current = o);
                let V = () => {
                    tU.current = d, t9.current = M, tO(d), j !== tQ.current && (tQ.current = j, tN(j))
                };
                return t1.current = _, void 0 === t || t ? (0, s.flushSync)(V) : V(), !0
            }, e0[110] = ty, e0[111] = nf, e0[112] = tE, e0[113] = tv, e0[114] = tn, e0[115] = no, e0[116] = ni, e0[117] = ta, e0[118] = tL, e0[119] = tP, e0[120] = tF, e0[121] = tA, e0[122] = tG, e0[123] = tj, e0[124] = ex) : ex = e0[124];
            let nH = (0, p.a)(ex);
            e0[125] !== nH || e0[126] !== tC || e0[127] !== nB || e0[128] !== nm ? (eg = e => {
                let t = new Map,
                    n = !1,
                    r = !1,
                    l = !1;
                for (let o of e) {
                    let e = tX.current.get(o.target);
                    if (null == e) continue;
                    let {
                        height: i
                    } = (0, h.a)(o);
                    switch (e.kind) {
                        case "turn": {
                            r = !0;
                            let l = e.turnKey,
                                a = tY.current.get(l);
                            if (a !== o.target || tJ.current.has(a) || (n = !0), i > 0 && a === o.target && tU.current[l] === i) {
                                tJ.current.add(a);
                                break
                            }
                            t.set(l, {
                                element: o.target,
                                heightPx: i
                            });
                            break
                        }
                        case "latest-turn-follow-content":
                            t0.current.set(e.element, i), l = !0
                    }
                }
                t.size > 0 && nH(t, !0, n ? "controller" : "measured"), l && nB(), nm(), (r || l) && tC?.()
            }, e0[125] = nH, e0[126] = tC, e0[127] = nB, e0[128] = nm, e0[129] = eg) : eg = e0[129];
            let nK = (0, p.a)(eg);
            e0[130] !== nK ? (em = () => {
                if (null != t2.current) return t2.current;
                let e = new ResizeObserver(nK);
                return t2.current = e, e
            }, e0[130] = nK, e0[131] = em) : em = e0[131];
            let nM = (0, p.a)(em);
            e0[132] !== nM || e0[133] !== nc ? (ef = (e, t) => {
                if (null == t) return;
                tX.current.set(t, {
                    kind: "turn",
                    turnKey: e
                }), tY.current.set(e, t), tJ.current.delete(t), tZ.current.set(e, t);
                let n = nM();
                return n.observe(t), nc(), () => {
                    n.unobserve(t), tX.current.delete(t), tZ.current.get(e) === t && tZ.current.delete(e), tY.current.get(e) === t && tY.current.delete(e)
                }
            }, e0[132] = nM, e0[133] = nc, e0[134] = ef) : ef = e0[134];
            let nR = (0, p.a)(ef);
            e0[135] !== nH || e0[136] !== tj ? (ep = (e, t) => {
                let n = tY.current.get(e);
                if (null == n) return;
                let r = (0, c.b)(n.getBoundingClientRect().height, tj);
                if (!(r <= 0) && (nH(new Map([
                        [e, {
                            element: n,
                            heightPx: r
                        }]
                    ]), !1), null != t)) {
                    let e = t1.current;
                    null == e ? t() : e.afterMeasure = t
                }
            }, e0[135] = nH, e0[136] = tj, e0[137] = ep) : ep = e0[137];
            let nS = (0, p.a)(ep);
            e0[138] !== nM ? (ey = e => {
                if (null == e) return;
                tX.current.set(e, {
                    element: e,
                    kind: "latest-turn-follow-content"
                }), t0.current.set(e, 0);
                let t = nM();
                return t.observe(e), () => {
                    t.unobserve(e), tX.current.delete(e), t0.current.delete(e)
                }
            }, e0[138] = nM, e0[139] = ey) : ey = e0[139];
            let nI = (0, p.a)(ey),
                nE = (0, u.useRef)(tS);
            e0[140] !== nH || e0[141] !== tS || e0[142] !== tj ? (ev = () => {
                let e = tZ.current,
                    t = nE.current;
                if (nE.current = tS, null != t && t !== tS) {
                    let n = tY.current.get(t);
                    null != n && e.set(t, n)
                }
                if (0 === e.size) {
                    t3.current = 0;
                    return
                }
                if (null != t4.current) return;
                if (t3.current >= 8) {
                    t4.current = requestAnimationFrame(e => {
                        t4.current = null, t3.current = 0, t8(e)
                    });
                    return
                }
                t3.current = t3.current + 1, tZ.current = new Map;
                let n = new Map;
                if ((0, d.a)("virtualizedTurnList.readMountedHeights", () => {
                        for (let [t, r] of e) {
                            if (tY.current.get(t) !== r) continue;
                            let e = (0, c.b)(r.getBoundingClientRect().height, tj);
                            e > 0 && n.set(t, {
                                element: r,
                                heightPx: e
                            })
                        }
                    }, e.size), n.size > 0) {
                    let t = tU.current;
                    if (nH(n, !1, "controller"))
                        for (let [n, r] of e)(null == t[n] || t3.current > 1) && tY.current.get(n) === r && tZ.current.set(n, r);
                    else t3.current = 0
                }
            }, e0[140] = nH, e0[141] = tS, e0[142] = tj, e0[143] = ev) : ev = e0[143], (0, u.useLayoutEffect)(ev), e0[144] !== tE || e0[145] !== nS || e0[146] !== tf ? (eP = () => {
                let e = tf ?? tE.at(-1)?.turnKey;
                null != e && nS(e)
            }, e0[144] = tE, e0[145] = nS, e0[146] = tf, e0[147] = eP) : eP = e0[147];
            let nF = (0, p.a)(eP);
            e0[148] !== tx || e0[149] !== nF ? (ew = () => {
                null != tx && nF()
            }, eb = [tx, nF], e0[148] = tx, e0[149] = nF, e0[150] = ew, e0[151] = eb) : (ew = e0[150], eb = e0[151]), (0, u.useLayoutEffect)(ew, eb), e0[152] !== nf || e0[153] !== tk ? (eB = () => {
                let e = t1.current;
                null != e && e.turnHeightsByKey === tk && (t1.current = null, nf(e))
            }, eH = [nf, tk], e0[152] = nf, e0[153] = tk, e0[154] = eB, e0[155] = eH) : (eB = e0[154], eH = e0[155]), (0, u.useLayoutEffect)(eB, eH), e0[156] !== tE || e0[157] !== tH || e0[158] !== tD.heightsPx || e0[159] !== tw || e0[160] !== tk || e0[161] !== t_ || e0[162] !== tj ? (eK = e => {
                if (!tw || tH?.viewportHeightPx === e) return;
                if (null != tH) return void(0, s.flushSync)(() => {
                    tK({
                        ...tH,
                        viewportHeightPx: e
                    })
                });
                let t = t_?.closest("[data-thread-user-message-navigation-content]"),
                    n = t?.lastElementChild,
                    r = tE.at(-1)?.turnKey;
                if (null == t || null == n || null == r || tE.some(e => null == tk[e.turnKey])) return;
                let l = (0, c.b)(t.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, tj) - parseFloat(getComputedStyle(t).paddingBottom);
                l <= 24 || (0, s.flushSync)(() => {
                    tK({
                        turnKey: r,
                        heightOutsideTurnPx: e - (tD.heightsPx.at(-1) ?? 0) - l,
                        viewportHeightPx: e
                    })
                })
            }, e0[156] = tE, e0[157] = tH, e0[158] = tD.heightsPx, e0[159] = tw, e0[160] = tk, e0[161] = t_, e0[162] = tj, e0[163] = eK) : eK = e0[163];
            let nC = (0, p.a)(eK);
            e0[164] !== nw || e0[165] !== nb || e0[166] !== nx || e0[167] !== nS || e0[168] !== e7 || e0[169] !== nP ? (eM = () => {
                if (null != e7) return e7({
                    getEntriesInViewport: nw,
                    getRowElement: nx,
                    getEntryGeometry: nb,
                    measureTurnBeforePaint: nS,
                    scrollToKey: nP
                }), () => {
                    e7(null)
                }
            }, eR = [nw, nx, nb, nS, e7, nP], e0[164] = nw, e0[165] = nb, e0[166] = nx, e0[167] = nS, e0[168] = e7, e0[169] = nP, e0[170] = eM, e0[171] = eR) : (eM = e0[170], eR = e0[171]), (0, u.useEffect)(eM, eR), e0[172] !== ns ? (eS = () => () => {
                t6.current = !1, ns()
            }, eI = [ns], e0[172] = ns, e0[173] = eS, e0[174] = eI) : (eS = e0[173], eI = e0[174]), (0, u.useLayoutEffect)(eS, eI), e0[175] !== ns || e0[176] !== nc ? (eE = () => (nc(), ns), e0[175] = ns, e0[176] = nc, e0[177] = eE) : eE = e0[177], e0[178] !== ns || e0[179] !== tE.length || e0[180] !== e9 || e0[181] !== nc || e0[182] !== t_ ? (eF = [ns, tE.length, e9, nc, t_], e0[178] = ns, e0[179] = tE.length, e0[180] = e9, e0[181] = nc, e0[182] = t_, e0[183] = eF) : eF = e0[183], (0, u.useEffect)(eE, eF), e0[184] !== tA ? (eC = () => {
                let e = tX.current,
                    t = tY.current,
                    n = t0.current;
                return () => {
                    null != t4.current && (cancelAnimationFrame(t4.current), t4.current = null), t2.current?.disconnect(), t2.current = null, e.clear(), t.clear(), tZ.current.clear(), n.clear(), t1.current = null, tA.replace(null)
                }
            }, ej = [tA], e0[184] = tA, e0[185] = eC, e0[186] = ej) : (eC = e0[185], ej = e0[186]), (0, u.useEffect)(eC, ej), e0[187] !== tc ? (eL = () => {
                if (null != tc) return () => {
                    tc(function(e, t) {
                        let {
                            turnKeys: n,
                            renderedRange: r,
                            viewportHeightPx: l
                        } = t, o = A();
                        for (let t of n) {
                            let n = e[t];
                            null != n && (o[t] = n)
                        }
                        let i = n[r.startIndex];
                        return null == i ? null : {
                            renderedWindow: {
                                anchorKey: i,
                                count: r.endIndex - r.startIndex,
                                viewportHeightPx: l
                            },
                            turnHeightsByKey: {
                                ...o
                            }
                        }
                    }(tU.current, tQ.current))
                }
            }, ek = [tc], e0[187] = tc, e0[188] = eL, e0[189] = ek) : (eL = e0[188], ek = e0[189]), (0, u.useLayoutEffect)(eL, ek), e0[190] !== e5 || e0[191] !== tR || e0[192] !== tS || e0[193] !== e2 ? (eO = tR < 0 ? void 0 : e5?.(e2[tR]) ?? tS, e0[190] = e5, e0[191] = tR, e0[192] = tS, e0[193] = e2, e0[194] = eO) : eO = e0[194];
            let nj = eO;
            e0[195] !== nj || e0[196] !== tF || e0[197] !== tG || e0[198] !== t_ || e0[199] !== tj ? (e_ = () => {
                if (null == t_ || null == nj) return;
                let e = e => {
                    let t = tF.getScrollElement(),
                        n = e.target;
                    if (null == t || t.scrollTop <= 0 || !(n instanceof Element)) return;
                    let r = n.getBoundingClientRect(),
                        l = t.getBoundingClientRect().top;
                    r.bottom <= l || (n.hasAttribute("data-turn-transcript") && (tF.shouldFollowContentGrowth() || r.top < l) ? tG(0) : tG(Math.max(0, (0, c.b)(t_.getBoundingClientRect().height, tj) - (0, m.b)(t))))
                };
                return t_.addEventListener(x.a, e), () => {
                    t_.removeEventListener(x.a, e), tG(0)
                }
            }, ez = [nj, tF, tG, t_, tj], e0[195] = nj, e0[196] = tF, e0[197] = tG, e0[198] = t_, e0[199] = tj, e0[200] = e_, e0[201] = ez) : (e_ = e0[200], ez = e0[201]), (0, u.useLayoutEffect)(e_, ez);
            let {
                addScrollListener: nL,
                addUserScrollListener: nk,
                getScrollElement: nO
            } = tF;
            e0[202] !== nL || e0[203] !== nk || e0[204] !== tn || e0[205] !== nO || e0[206] !== tC || e0[207] !== nC || e0[208] !== tw || e0[209] !== nm || e0[210] !== ny || e0[211] !== ng || e0[212] !== nu || e0[213] !== tF || e0[214] !== tG || e0[215] !== t_ || e0[216] !== np ? (eD = () => {
                let e = nO();
                if (null == e) return;
                let t = () => (null == t$.current && (t$.current = e.clientHeight), t$.current || tQ.current.viewportHeightPx || 800),
                    n = nL(e => {
                        np(N(e, T(tn)), t()), ng(e)
                    }),
                    r = nk((e, n) => {
                        let r = tW.current;
                        if (r > 0) {
                            let t = r - e;
                            tG(t > t9.current.totalHeightPx && e > 0 ? t : 0)
                        }
                        ny(N(e, T(tn)), t(), null != n && e > n)
                    }),
                    l = new ResizeObserver(n => {
                        let r = n.find(t => t.target === e);
                        if (null != r) {
                            let {
                                height: e
                            } = (0, h.a)(r);
                            t$.current = e, np(tQ.current.distanceFromBottomPx, e), nu(), ng(tF.getLastScrollDistanceFromBottomPx())
                        }
                        nC(t()), nm(), null != r && tC?.()
                    });
                return l.observe(e), tw && null != t_ && l.observe(t_), () => {
                    n(), r(), l.disconnect()
                }
            }, eT = [nL, nk, tn, nO, tC, nC, nm, tw, ny, ng, nu, tF, tG, t_, np], e0[202] = nL, e0[203] = nk, e0[204] = tn, e0[205] = nO, e0[206] = tC, e0[207] = nC, e0[208] = tw, e0[209] = nm, e0[210] = ny, e0[211] = ng, e0[212] = nu, e0[213] = tF, e0[214] = tG, e0[215] = t_, e0[216] = np, e0[217] = eD, e0[218] = eT) : (eD = e0[217], eT = e0[218]), (0, u.useLayoutEffect)(eD, eT), e0[219] !== nH || e0[220] !== tn || e0[221] !== tD || e0[222] !== tV || e0[223] !== tF || e0[224] !== tA || e0[225] !== nv || e0[226] !== np || e0[227] !== tj ? (eN = () => {
                if (null == tV || tA.getSnapshot() !== tV || null != t4.current) return;
                let e = tF.getScrollElement();
                if (null == e) return;
                let t = new Map;
                for (let [e, n] of tY.current) {
                    let r = (0, c.b)(n.getBoundingClientRect().height, tj);
                    r > 0 && t.set(e, {
                        element: n,
                        heightPx: r
                    })
                }
                if (nH(t, !1) || null != t1.current) return;
                let n = tY.current.get(tV.turnKey),
                    r = null == n ? null : tV.getTargetElement?.(n) ?? n,
                    l = null == n || null == r ? function(e) {
                        let {
                            align: t,
                            layout: n,
                            turnKey: r,
                            viewportHeightPx: l
                        } = e;
                        if ("center" === t) return M({
                            layout: n,
                            turnKey: r,
                            viewportHeightPx: l
                        });
                        let o = n.turnIndexByKey.get(r);
                        return null == o ? null : Math.max(0, (n.bottomOffsetsPx[o] ?? 0) + (n.heightsPx[o] ?? 0) - l + 10)
                    }({
                        align: tV.align,
                        layout: tD,
                        turnKey: tV.turnKey,
                        viewportHeightPx: e.clientHeight
                    }) : function(e) {
                        let {
                            align: t,
                            layout: n,
                            targetElement: r,
                            turnElement: l,
                            turnKey: o,
                            windowZoom: i,
                            viewportHeightPx: a
                        } = e, u = n.turnIndexByKey.get(o);
                        if (null == u) return null;
                        let s = l.getBoundingClientRect(),
                            d = r.getBoundingClientRect(),
                            h = (0, c.b)(d.top - s.top, i),
                            x = (0, c.b)(d.height, i),
                            g = (n.bottomOffsetsPx[u] ?? 0) + (n.heightsPx[u] ?? 0) - h;
                        return "top" === t ? Math.max(0, g - a + 10) : Math.max(0, g - x / 2 - a / 2)
                    }({
                        align: tV.align,
                        layout: tD,
                        targetElement: r,
                        turnElement: n,
                        turnKey: tV.turnKey,
                        viewportHeightPx: e.clientHeight,
                        windowZoom: tj
                    });
                if (null == l) return void queueMicrotask(() => nv(tV));
                let o = "top" === tV.align && null != r ? Math.max(0, tF.getLastScrollDistanceFromBottomPx() - (0, c.b)(r.getBoundingClientRect().top - (0, m.d)(e, tj), tj) + 10) : l + T(tn);
                tF.scrollToDistanceFromBottomPx(o, "instant", "user"), np(Math.max(0, o - T(tn)), e.clientHeight), queueMicrotask(() => nv(tV))
            }, e0[219] = nH, e0[220] = tn, e0[221] = tD, e0[222] = tV, e0[223] = tF, e0[224] = tA, e0[225] = nv, e0[226] = np, e0[227] = tj, e0[228] = eN) : eN = e0[228], e0[229] !== nH || e0[230] !== tn || e0[231] !== tD || e0[232] !== t5 || e0[233] !== tV || e0[234] !== tF || e0[235] !== tA || e0[236] !== nv || e0[237] !== np || e0[238] !== tj ? (eA = [nH, tD, t5, tV, tF, tA, nv, tn, np, tj], e0[229] = nH, e0[230] = tn, e0[231] = tD, e0[232] = t5, e0[233] = tV, e0[234] = tF, e0[235] = tA, e0[236] = nv, e0[237] = np, e0[238] = tj, e0[239] = eA) : eA = e0[239], (0, u.useLayoutEffect)(eN, eA), e0[240] !== tn || e0[241] !== no || e0[242] !== ni || e0[243] !== ta || e0[244] !== tV || e0[245] !== tP || e0[246] !== e2 || e0[247] !== tF || e0[248] !== np ? (eV = () => {
                var e;
                if (null != t1.current) return;
                let t = nt.current,
                    n = no(),
                    r = nr.current ?? n;
                nr.current = null, nt.current = n;
                let l = nn.current !== e2;
                if (nn.current = e2, null != tV || !tP && t.turnKeys.at(-1) !== r.turnKeys.at(-1) || t === r && !l) return;
                let o = T(tn),
                    i = tF.getLastScrollDistanceFromBottomPx({
                        includePendingUserScroll: !0
                    });
                if (null != (ta?.() ?? null)) return;
                if (tF.shouldFollowContentGrowth() && (e = i, 0 === o && e <= 24)) return void tF.compensateScrollToDistanceFromBottomPx(0);
                if (t === r) return;
                let a = L({
                    distanceFromBottomPx: ni(i),
                    preferLatestVisibleRow: i < o,
                    layout: t,
                    measuredHeightsByKey: tU.current,
                    nextLayout: r,
                    viewportHeightPx: tQ.current.viewportHeightPx
                });
                if (null == a) return;
                let u = t.turnIndexByKey.get(a);
                if (tP && r !== n && n.turnKeys.length > t.turnKeys.length && null != u && t.topOffsetsPx[u] === n.topOffsetsPx[u] && t.turnKeys.every((e, t) => e === n.turnKeys[t])) return;
                let s = tF.getUnroundedScrollDistanceFromBottomPx(i),
                    c = function(e) {
                        let {
                            anchorKey: t,
                            distanceFromBottomPx: n,
                            nextLayout: r,
                            previousLayout: l
                        } = e, o = l.turnIndexByKey.get(t), i = r.turnIndexByKey.get(t);
                        if (null == o || null == i) return null;
                        let a = (l.bottomOffsetsPx[o] ?? 0) + (l.heightsPx[o] ?? 0);
                        return Math.max(0, n + ((r.bottomOffsetsPx[i] ?? 0) + (r.heightsPx[i] ?? 0)) - a)
                    }({
                        anchorKey: a,
                        distanceFromBottomPx: s,
                        nextLayout: r,
                        previousLayout: t
                    });
                null != c && (c !== s || t.totalHeightPx !== r.totalHeightPx) && (np(N(c, o), tQ.current.viewportHeightPx), tF.compensateScrollToDistanceFromBottomPx(c))
            }, e0[240] = tn, e0[241] = no, e0[242] = ni, e0[243] = ta, e0[244] = tV, e0[245] = tP, e0[246] = e2, e0[247] = tF, e0[248] = np, e0[249] = eV) : eV = e0[249], e0[250] !== tn || e0[251] !== no || e0[252] !== ni || e0[253] !== ta || e0[254] !== tD || e0[255] !== tV || e0[256] !== tP || e0[257] !== e2 || e0[258] !== tF || e0[259] !== np ? (eq = [tn, no, ni, ta, tD, tV, tP, e2, tF, np], e0[250] = tn, e0[251] = no, e0[252] = ni, e0[253] = ta, e0[254] = tD, e0[255] = tV, e0[256] = tP, e0[257] = e2, e0[258] = tF, e0[259] = np, e0[260] = eq) : eq = e0[260], (0, u.useLayoutEffect)(eV, eq), e0[261] !== tV || e0[262] !== ny || e0[263] !== nu || e0[264] !== np ? (eU = () => {
                null == tV && null == t1.current && (np(tQ.current.distanceFromBottomPx, tQ.current.viewportHeightPx), nu(), ny(tQ.current.distanceFromBottomPx, tQ.current.viewportHeightPx, !1))
            }, e0[261] = tV, e0[262] = ny, e0[263] = nu, e0[264] = np, e0[265] = eU) : eU = e0[265], e0[266] !== tD || e0[267] !== tV || e0[268] !== ny || e0[269] !== nu || e0[270] !== np ? (eW = [tD, tV, ny, nu, np], e0[266] = tD, e0[267] = tV, e0[268] = ny, e0[269] = nu, e0[270] = np, e0[271] = eW) : eW = e0[271], (0, u.useLayoutEffect)(eU, eW), e0[272] !== nm ? (eG = () => {
                nm()
            }, e0[272] = nm, e0[273] = eG) : eG = e0[273], (0, u.useLayoutEffect)(eG), e0[274] !== te ? (eQ = (0, i.b)("relative shrink-0", te), e0[274] = te, e0[275] = eQ) : eQ = e0[275], e0[276] !== tD.totalHeightPx ? (e$ = {
                height: tD.totalHeightPx
            }, e0[276] = tD.totalHeightPx, e0[277] = e$) : e$ = e0[277], e0[278] !== nh ? (eX = (0, r.jsx)(o.b, {
                name: "conversation rows",
                active: nh
            }), e0[278] = nh, e0[279] = eX) : eX = e0[279];
            let n_ = `${tD.topOffsetsPx[na.startIndex]??0}px`;
            e0[280] !== n_ ? (eY = {
                marginTop: n_
            }, e0[280] = n_, e0[281] = eY) : eY = e0[281];
            let nz = nd.map(e => {
                let {
                    entry: t,
                    turnIndex: n
                } = e, l = tE[n].turnKey;
                return (0, r.jsx)(F, {
                    entry: t,
                    turnKey: l,
                    minHeightPx: tE[n].minHeightPx,
                    gapBeforePx: n === na.startIndex ? 0 : tD.gapsBeforePx[n] ?? 0,
                    retainedTopPx: n < na.startIndex || n >= na.endIndex ? tD.topOffsetsPx[n] : void 0,
                    latestTurnFollowContentRef: n === tE.length - 1 && null != tl ? nI : void 0,
                    RowComponent: e6,
                    measuredHeightPx: null == tk[l] ? void 0 : tD.heightsPx[n],
                    constrainedHeightPx: n !== tE.length - 1 && tV?.turnKey !== l && null == tk[l] ? tD.heightsPx[n] : void 0,
                    observeTurnElement: nR
                }, l)
            });
            return e0[282] !== eY || e0[283] !== nz ? (eJ = (0, r.jsx)("div", {
                className: "flex flex-col",
                style: eY,
                children: nz
            }), e0[282] = eY, e0[283] = nz, e0[284] = eJ) : eJ = e0[284], e0[285] !== nl || e0[286] !== eQ || e0[287] !== e$ || e0[288] !== eX || e0[289] !== eJ ? (eZ = (0, r.jsxs)("div", {
                ref: nl,
                className: eQ,
                style: e$,
                children: [eX, eJ]
            }), e0[285] = nl, e0[286] = eQ, e0[287] = e$, e0[288] = eX, e0[289] = eJ, e0[290] = eZ) : eZ = e0[290], eZ
        }

        function I(e, t) {
            return e.turnIndex - t.turnIndex
        }

        function E() {
            return new V
        }
        let F = (0, u.memo)(function(e) {
            let t, n, o, a, u, s, c = (0, l.c)(25),
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
                H = null != P && "absolute inset-x-0",
                K = null != y && "overflow-hidden";
            c[3] !== H || c[4] !== K ? (n = (0, i.b)(H, K), c[3] = H, c[4] = K, c[5] = n) : n = c[5];
            let M = null != v ? "size" : void 0,
                R = v ?? y,
                S = null == P ? g : 0,
                I = null == v ? x : void 0;
            return c[6] !== P || c[7] !== M || c[8] !== R || c[9] !== S || c[10] !== I ? (o = {
                contain: M,
                height: R,
                marginTop: S,
                minHeight: I,
                top: P
            }, c[6] = P, c[7] = M, c[8] = R, c[9] = S, c[10] = I, c[11] = o) : o = c[11], c[12] !== f || c[13] !== d || c[14] !== m ? (a = (0, r.jsx)(f, {
                entry: d,
                latestTurnFollowContentRef: m
            }), c[12] = f, c[13] = d, c[14] = m, c[15] = a) : a = c[15], c[16] !== b || c[17] !== a || c[18] !== h ? (u = (0, r.jsx)("div", {
                ref: b,
                className: "[&_[data-virtualized-turn-content]]:[content-visibility:visible]",
                "data-turn-key": h,
                children: a
            }), c[16] = b, c[17] = a, c[18] = h, c[19] = u) : u = c[19], c[20] !== o || c[21] !== u || c[22] !== B || c[23] !== n ? (s = (0, r.jsx)("div", {
                "data-measured-turn": B,
                className: n,
                style: o,
                children: u
            }), c[20] = o, c[21] = u, c[22] = B, c[23] = n, c[24] = s) : s = c[24], s
        });

        function C(e) {
            let {
                current: t,
                distanceFromBottomPx: n,
                layout: r,
                viewportHeightPx: l
            } = e, o = Math.min(n, r.totalHeightPx), i = j(r, o, l, t.renderedRange);
            return t.distanceFromBottomPx === o && t.viewportHeightPx === l && t.renderedRange.startIndex === i.startIndex && t.renderedRange.endIndex === i.endIndex && D(t.turnKeys, r.turnKeys) ? t : {
                distanceFromBottomPx: o,
                renderedRange: i,
                turnKeys: r.turnKeys,
                viewportHeightPx: l
            }
        }

        function j(e, t, n, r) {
            var l, o;
            let i = {
                    layout: e,
                    distanceFromBottomPx: t,
                    viewportHeightPx: n
                },
                a = H({
                    ...i,
                    overscanCount: 0,
                    overscanPx: n
                }),
                u = H({
                    ...i,
                    overscanCount: 1
                }),
                s = {
                    startIndex: Math.max(u.startIndex, a.startIndex),
                    endIndex: Math.min(u.endIndex, a.endIndex)
                };
            return null != r && (l = r, o = s, l.startIndex <= o.startIndex && l.endIndex >= o.endIndex) ? {
                startIndex: Math.max(r.startIndex, a.startIndex),
                endIndex: Math.min(r.endIndex, a.endIndex)
            } : s
        }

        function L(e) {
            let {
                distanceFromBottomPx: t,
                preferLatestVisibleRow: n,
                layout: r,
                measuredHeightsByKey: l,
                nextLayout: o,
                viewportHeightPx: i
            } = e, a = H({
                distanceFromBottomPx: t,
                layout: r,
                overscanCount: 0,
                viewportHeightPx: Math.max(0, i + Math.min(0, t))
            }), u = null;
            for (let e = a.startIndex; e < a.endIndex; e += 1) {
                let a = r.turnKeys[e];
                if (null != a && !r.gapKeys.has(a) && (!r.collapseEmptyRows || (r.heightsPx[e] ?? 0) > 0) && null != l[a] && o.turnIndexByKey.has(a) && (r.bottomOffsetsPx[e] ?? 0) < t + i && (r.bottomOffsetsPx[e] ?? 0) + (r.heightsPx[e] ?? 0) > t) {
                    if (n) u = a;
                    else if (null == u && (u = a), (r.bottomOffsetsPx[e] ?? 0) + (r.heightsPx[e] ?? 0) <= t + i) return a
                }
            }
            return u
        }

        function k() {
            let e = [];
            return (t, n, r, l, o) => {
                let i = (e, n) => null != o && n === t.length - 1 ? Math.max(e ?? 0, o) : e;
                return (t.length !== e.length || t.some((t, o) => {
                    let a = e[o],
                        u = r(t);
                    return n(t) !== a.turnKey || u.gapBeforePx !== a.gapBeforePx || u.estimatedHeightPx !== a.estimatedHeightPx || i(u.minHeightPx, o) !== a.minHeightPx || (l?.(t) ?? !0) !== a.anchorEligible
                })) && (e = t.map((e, t) => {
                    let o = r(e);
                    return {
                        turnKey: n(e),
                        gapBeforePx: o.gapBeforePx,
                        estimatedHeightPx: o.estimatedHeightPx,
                        minHeightPx: i(o.minHeightPx, t),
                        anchorEligible: l?.(e) ?? !0
                    }
                })), e
            }
        }

        function O(e) {
            return e.turnKey
        }

        function _(e) {
            return e
        }

        function z(e) {
            return e.turnSearchKey ?? e.turnKey
        }

        function D(e, t) {
            return e === t || e.length === t.length && e.every((e, n) => e === t[n])
        }

        function T(e) {
            return Math.max(0, e?.() ?? 0)
        }

        function N(e, t) {
            return Math.max(0, e - t)
        }

        function A(e) {
            let t = {};
            return Object.setPrototypeOf(t, null), Object.assign(t, e)
        }
        class V {
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
    }),
    g3o5: (function(e, t, n) {
        var r = n("SZCv"),
            l = n.n(r),
            o = n("BolX"),
            i = n("OWtl");
        let a = (0, o.u)(i.a, () => new Map),
            u = (0, o.c)(i.a, e => {
                let {
                    get: t
                } = e;
                return [...t(a).keys()]
            }, {
                isEqual: l()
            });
        n.d(t, {}, {
            a: function(e, t) {
                return e.set(a, e => new Map(e).set(t, (e.get(t) ?? 0) + 1)), () => {
                    e.set(a, e => {
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