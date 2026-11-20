export const __rspack_esm_ids = [787702];
export const __webpack_modules__ = {
    cnwD: (function(e, t, a) {
        a.d(t, {
            a: () => j,
            b: () => _
        });
        var r = a("rEML"),
            o = a("ABep"),
            i = a("QosV"),
            s = a("Q840"),
            n = a("zd8w"),
            l = a("Cslg"),
            d = a("tmUE"),
            c = a("IhXv"),
            u = a("e1xH"),
            p = a("M2H2"),
            m = a("C8z7"),
            f = a("aFW8"),
            b = a("vnV1"),
            h = a("IeFV"),
            x = a("OWtl"),
            g = a("OMIV"),
            C = a("hC2y"),
            v = a("AXDI"),
            j = (0, r.kb)(function() {
                let e, t, a, j, _, y, I, k, w = (0, i.c)(40),
                    S = (0, s.y)(x.a),
                    F = (0, r.Z)(),
                    {
                        pathname: B
                    } = F,
                    {
                        pageId: O
                    } = (0, r.eb)(),
                    N = (0, r.Y)(),
                    U = "inAppOpen" in N && N.inAppOpen,
                    D = (0, s.z)(p.a),
                    M = (0, s.z)(l.f),
                    z = (0, s.z)(l.j),
                    A = (0, s.z)(l.k),
                    G = (0, s.z)(l.h);
                w[0] !== M || w[1] !== G || w[2] !== A || w[3] !== z ? (e = JSON.stringify([M, z, A, G]), w[0] = M, w[1] = G, w[2] = A, w[3] = z, w[4] = e) : e = w[4];
                let E = e;
                w[5] !== U || w[6] !== D || w[7] !== F || w[8] !== S ? (t = () => {
                    let e = (0, h.a)(F),
                        t = U && D && null != e ? (0, m.a)(S, document, e) : void 0;
                    return {
                        preparation: t,
                        snapshot: t?.takeSnapshot() ?? null
                    }
                }, w[5] = U, w[6] = D, w[7] = F, w[8] = S, w[9] = t) : t = w[9];
                let L = t;
                w[10] !== L || w[11] !== E || w[12] !== O ? (a = () => ({
                    pageId: O,
                    actor: E,
                    ...L()
                }), w[10] = L, w[11] = E, w[12] = O, w[13] = a) : a = w[13];
                let [Z, q] = (0, n.useState)(a), P = Z;
                if (Z.pageId !== O || Z.actor !== E) {
                    let e, t;
                    w[14] !== L || w[15] !== Z.pageId || w[16] !== O ? (e = Z.pageId !== O ? L() : {
                        preparation: void 0,
                        snapshot: null
                    }, w[14] = L, w[15] = Z.pageId, w[16] = O, w[17] = e) : e = w[17], w[18] !== E || w[19] !== O || w[20] !== e ? (t = {
                        pageId: O,
                        actor: E,
                        ...e
                    }, w[18] = E, w[19] = O, w[20] = e, w[21] = t) : t = w[21], q(P = t)
                }
                let T = U ? P.snapshot : N.spacePageSnapshot,
                    $ = U || N.nonblockingSsr,
                    V = (0, s.x)(u.H, B),
                    W = (0, s.z)(u.A),
                    R = (0, s.x)(g.e, "4063423961");
                w[22] === Symbol.for("react.memo_cache_sentinel") ? (j = {
                    enabled: !1
                }, w[22] = j) : j = w[22];
                let H = (0, s.z)(b.d, j);
                w[23] === Symbol.for("react.memo_cache_sentinel") ? (_ = (0, o.jsx)(d.a, {
                    routeFallback: !0,
                    fillParent: !0
                }), w[23] = _) : _ = w[23], w[24] !== V ? (y = (0, o.jsx)(v.a, {
                    fallback: _,
                    children: V ? (0, o.jsx)(f.b, {
                        pageRoute: !0,
                        children: (0, o.jsx)(r.n, {})
                    }) : (0, o.jsx)(C.e, {
                        allowLocal: !0
                    })
                }), w[24] = V, w[25] = y) : y = w[25];
                let Q = y,
                    X = U ? P.preparation : void 0,
                    J = U ? O : void 0;
                return w[26] !== R || w[27] !== U || w[28] !== D || w[29] !== F || w[30] !== W || w[31] !== H ? (I = (!U || D && null != (0, h.a)(F)) && "disabled" !== W && (!R || null == H.error && H.data?.status !== "age_restricted"), w[26] = R, w[27] = U, w[28] = D, w[29] = F, w[30] = W, w[31] = H, w[32] = I) : I = w[32], w[33] !== Q || w[34] !== $ || w[35] !== T || w[36] !== X || w[37] !== J || w[38] !== I ? (k = (0, o.jsx)(c.a, {
                    snapshot: T,
                    preparation: X,
                    nonblocking: $,
                    openIdentity: J,
                    enabled: I,
                    children: Q
                }), w[33] = Q, w[34] = $, w[35] = T, w[36] = X, w[37] = J, w[38] = I, w[39] = k) : k = w[39], k
            });
        let _ = e => {
            let {
                currentParams: t,
                nextParams: a,
                defaultShouldRevalidate: r
            } = e;
            return t.pageId !== a.pageId || r
        }
    }),
    nDjx: (function(e, t, a) {
        e.exports = a.p + "assets/appshot-logo.f0152cb4dd.png"
    }),
    hIAo: (function(e, t, a) {
        e.exports = a.p + "assets/codex-app-ga-logo.dfddfb85d7.png"
    }),
    OCvz: (function(e, t, a) {
        e.exports = a.p + "assets/dictation-start.f6efcb404f.wav"
    }),
    DJ2e: (function(e, t, a) {
        e.exports = a.p + "assets/dictation-stop.e3bc7ebc5e.wav"
    }),
    LpCf: (function(e, t, a) {
        let r = {
            "--oai-wb-spacing": "var(--spacing,0.25rem)",
            ...Object.fromEntries(Object.entries({
                "text-primary": "var(--color-token-text-primary,var(--text-primary,#0d0d0d))",
                "text-secondary": "var(--color-token-text-secondary,var(--text-secondary,#5d5d5d))",
                "text-tertiary": "var(--color-token-text-tertiary,var(--text-tertiary,#8f8f8f))",
                "surface-primary": "var(--color-token-main-surface-primary,var(--main-surface-primary,#fff))",
                "surface-secondary": "var(--color-token-bg-tertiary,var(--main-surface-secondary,#f5f5f5))",
                "interactive-secondary-hover": "var(--color-token-interactive-bg-secondary-hover,var(--oai-wb-surface-secondary))",
                border: "var(--color-token-border,var(--border-light,rgb(0 0 0/8%)))",
                "border-hover": "var(--color-token-border-default,var(--border-medium,rgb(0 0 0/12%)))",
                divider: "var(--color-token-border-light,var(--border-light,rgb(0 0 0/5%)))",
                focus: "var(--color-token-focus-border,var(--border-strong,#5b9dd9))",
                "control-border": "var(--interactive-border-focus,var(--oai-wb-focus))",
                "entity-accent": "var(--theme-entity-accent,var(--oai-wb-accent))",
                accent: "var(--interactive-label-accent-default,#0285ff)",
                "on-accent": "var(--bg-primary,#fff)",
                "interactive-background": "var(--interactive-bg-accent-default,color-mix(in srgb,#0285ff 12%,transparent))",
                selection: "var(--theme-user-selection-bg,var(--selection,#93c5fd))",
                radius: "1.5rem",
                "radius-sm": "0.5rem",
                shadow: "0 4px 80px rgb(0 0 0/2%)",
                "shadow-lg": "0 10px 30px rgb(0 0 0/12%)",
                "font-sans": "var(--font-sans,sans-serif)",
                "font-mono": "var(--font-mono,monospace)",
                "font-size": "0.875rem",
                "shimmer-dark-contrast": "var(--oai-wb-text-tertiary)",
                "shimmer-dark-secondary": "var(--oai-wb-text-tertiary)"
            }).map(e => {
                let [t, a] = e;
                return [`--oai-wb-${t}`, `var(--wb-${t},${a})`]
            }))
        };
        a.d(t, {}, {
            a: r
        })
    }),
    rfXw: (function(e, t, a) {
        var r = a("ABep"),
            o = a("QosV");
        t.default = e => {
            let t, a, i, s, n, l, d, c, u, p, m, f, b, h, x, g, C, v, j, _, y = (0, o.c)(21);
            return y[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, r.jsx)("path", {
                d: "M12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8C6 11.3137 8.68629 14 12 14Z",
                fill: "url(#paint0_radial_8150_7076)"
            }), a = (0, r.jsx)("path", {
                d: "M12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8C6 11.3137 8.68629 14 12 14Z",
                fill: "url(#paint1_linear_8150_7076)"
            }), i = (0, r.jsx)("path", {
                d: "M12 2.125C15.2447 2.125 17.875 4.75533 17.875 8C17.875 11.2447 15.2447 13.875 12 13.875C8.75533 13.875 6.125 11.2447 6.125 8C6.125 4.75533 8.75533 2.125 12 2.125Z",
                stroke: "black",
                strokeOpacity: .1,
                strokeWidth: .25
            }), y[0] = t, y[1] = a, y[2] = i) : (t = y[0], a = y[1], i = y[2]), y[3] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, r.jsxs)("g", {
                filter: "url(#filter0_i_8150_7076)",
                children: [(0, r.jsx)("path", {
                    d: "M17.25 17C20.0114 17 22.25 14.7614 22.25 12C22.25 9.23858 20.0114 7 17.25 7C14.4886 7 12.25 9.23858 12.25 12C12.25 14.7614 14.4886 17 17.25 17Z",
                    fill: "url(#paint2_radial_8150_7076)"
                }), (0, r.jsx)("path", {
                    d: "M17.25 17C20.0114 17 22.25 14.7614 22.25 12C22.25 9.23858 20.0114 7 17.25 7C14.4886 7 12.25 9.23858 12.25 12C12.25 14.7614 14.4886 17 17.25 17Z",
                    fill: "url(#paint3_linear_8150_7076)"
                }), (0, r.jsx)("path", {
                    d: "M17.25 17C20.0114 17 22.25 14.7614 22.25 12C22.25 9.23858 20.0114 7 17.25 7C14.4886 7 12.25 9.23858 12.25 12C12.25 14.7614 14.4886 17 17.25 17Z",
                    fill: "url(#paint4_linear_8150_7076)"
                })]
            }), n = (0, r.jsx)("path", {
                d: "M17.25 7.125C19.9424 7.125 22.125 9.30761 22.125 12C22.125 14.6924 19.9424 16.875 17.25 16.875C14.5576 16.875 12.375 14.6924 12.375 12C12.375 9.30761 14.5576 7.125 17.25 7.125Z",
                stroke: "black",
                strokeOpacity: .1,
                strokeWidth: .25
            }), y[3] = s, y[4] = n) : (s = y[3], n = y[4]), y[5] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, r.jsx)("g", {
                filter: "url(#filter1_i_8150_7076)",
                children: (0, r.jsx)("path", {
                    d: "M12.5 22C14.9853 22 17 19.9853 17 17.5C17 15.0147 14.9853 13 12.5 13C10.0147 13 8 15.0147 8 17.5C8 19.9853 10.0147 22 12.5 22Z",
                    fill: "url(#paint5_radial_8150_7076)"
                })
            }), d = (0, r.jsx)("path", {
                d: "M12.5 13.125C14.9162 13.125 16.875 15.0838 16.875 17.5C16.875 19.9162 14.9162 21.875 12.5 21.875C10.0838 21.875 8.125 19.9162 8.125 17.5C8.125 15.0838 10.0838 13.125 12.5 13.125Z",
                stroke: "black",
                strokeOpacity: .1,
                strokeWidth: .25
            }), y[5] = l, y[6] = d) : (l = y[5], d = y[6]), y[7] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, r.jsx)("g", {
                filter: "url(#filter2_d_8150_7076)",
                children: (0, r.jsx)("rect", {
                    x: 2,
                    y: 9,
                    width: 9,
                    height: 9,
                    rx: 1.75,
                    fill: "url(#paint6_linear_8150_7076)"
                })
            }), u = (0, r.jsx)("path", {
                d: "M4.5 14.3421L5.46644 14.2498C5.52461 14.5684 5.64206 14.8025 5.81879 14.9519C5.99776 15.1013 6.23826 15.176 6.54027 15.176C6.86018 15.176 7.10067 15.1101 7.26174 14.9782C7.42506 14.8442 7.50671 14.6882 7.50671 14.5102C7.50671 14.396 7.47204 14.2993 7.40268 14.2202C7.33557 14.1389 7.217 14.0686 7.04698 14.0092C6.93065 13.9697 6.66555 13.8994 6.25168 13.7983C5.71924 13.6686 5.34564 13.5093 5.13087 13.3204C4.82886 13.0545 4.67785 12.7304 4.67785 12.3481C4.67785 12.102 4.74832 11.8723 4.88926 11.6592C5.03244 11.4439 5.23714 11.2802 5.50336 11.1681C5.77181 11.056 6.09508 11 6.47315 11C7.0906 11 7.55481 11.1329 7.86577 11.3988C8.17897 11.6647 8.3434 12.0196 8.35906 12.4634L7.36577 12.5063C7.32327 12.258 7.23154 12.08 7.0906 11.9723C6.9519 11.8624 6.74273 11.8075 6.46309 11.8075C6.1745 11.8075 5.94855 11.8657 5.78523 11.9822C5.68009 12.0569 5.62752 12.1569 5.62752 12.2821C5.62752 12.3964 5.67673 12.4942 5.77517 12.5755C5.90045 12.6788 6.2047 12.7864 6.68792 12.8985C7.17114 13.0105 7.52796 13.127 7.75839 13.2479C7.99105 13.3665 8.17226 13.5302 8.30201 13.739C8.434 13.9455 8.5 14.2015 8.5 14.5069C8.5 14.7838 8.4217 15.0431 8.2651 15.2848C8.1085 15.5265 7.88702 15.7067 7.60067 15.8253C7.31432 15.9418 6.95749 16 6.5302 16C5.90828 16 5.43065 15.8594 5.09732 15.5781C4.76398 15.2947 4.56488 14.8827 4.5 14.3421Z",
                fill: "white"
            }), y[7] = c, y[8] = u) : (c = y[7], u = y[8]), y[9] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, r.jsxs)("filter", {
                id: "filter0_i_8150_7076",
                x: 12.25,
                y: 7,
                width: 10,
                height: 10,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB",
                children: [(0, r.jsx)("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), (0, r.jsx)("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape"
                }), (0, r.jsx)("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), (0, r.jsx)("feOffset", {}), (0, r.jsx)("feGaussianBlur", {
                    stdDeviation: 1
                }), (0, r.jsx)("feComposite", {
                    in2: "hardAlpha",
                    operator: "arithmetic",
                    k2: -1,
                    k3: 1
                }), (0, r.jsx)("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0.401818 0 0 0 0 0.294666 0 0 0 1 0"
                }), (0, r.jsx)("feBlend", {
                    mode: "normal",
                    in2: "shape",
                    result: "effect1_innerShadow_8150_7076"
                })]
            }), y[9] = p) : p = y[9], y[10] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, r.jsxs)("filter", {
                id: "filter1_i_8150_7076",
                x: 8,
                y: 13,
                width: 9,
                height: 9,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB",
                children: [(0, r.jsx)("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), (0, r.jsx)("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape"
                }), (0, r.jsx)("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), (0, r.jsx)("feOffset", {}), (0, r.jsx)("feGaussianBlur", {
                    stdDeviation: 1
                }), (0, r.jsx)("feComposite", {
                    in2: "hardAlpha",
                    operator: "arithmetic",
                    k2: -1,
                    k3: 1
                }), (0, r.jsx)("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 0.254902 0 0 0 0 0.509804 0 0 0 0 0.584314 0 0 0 1 0"
                }), (0, r.jsx)("feBlend", {
                    mode: "normal",
                    in2: "shape",
                    result: "effect1_innerShadow_8150_7076"
                })]
            }), y[10] = m) : m = y[10], y[11] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, r.jsxs)("filter", {
                id: "filter2_d_8150_7076",
                x: 1.5,
                y: 8.75,
                width: 10,
                height: 10,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB",
                children: [(0, r.jsx)("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), (0, r.jsx)("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), (0, r.jsx)("feOffset", {
                    dy: .25
                }), (0, r.jsx)("feGaussianBlur", {
                    stdDeviation: .25
                }), (0, r.jsx)("feComposite", {
                    in2: "hardAlpha",
                    operator: "out"
                }), (0, r.jsx)("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                }), (0, r.jsx)("feBlend", {
                    mode: "normal",
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_8150_7076"
                }), (0, r.jsx)("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow_8150_7076",
                    result: "shape"
                })]
            }), y[11] = f) : f = y[11], y[12] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, r.jsxs)("radialGradient", {
                id: "paint0_radial_8150_7076",
                cx: 0,
                cy: 0,
                r: 1,
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(15 7.5) rotate(-174.289) scale(10.0499)",
                children: [(0, r.jsx)("stop", {
                    stopColor: "#26C0C7"
                }), (0, r.jsx)("stop", {
                    offset: 1,
                    stopColor: "#04786A"
                })]
            }), y[12] = b) : b = y[12], y[13] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, r.jsxs)("linearGradient", {
                id: "paint1_linear_8150_7076",
                x1: 10,
                y1: 8,
                x2: 12,
                y2: 14,
                gradientUnits: "userSpaceOnUse",
                children: [(0, r.jsx)("stop", {
                    stopColor: "#0A5752",
                    stopOpacity: 0
                }), (0, r.jsx)("stop", {
                    offset: 1,
                    stopColor: "#0A5752"
                })]
            }), y[13] = h) : h = y[13], y[14] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, r.jsxs)("radialGradient", {
                id: "paint2_radial_8150_7076",
                cx: 0,
                cy: 0,
                r: 1,
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(15.8864 12.4545) rotate(-20.556) scale(7.76728)",
                children: [(0, r.jsx)("stop", {
                    stopColor: "#159C6F"
                }), (0, r.jsx)("stop", {
                    offset: 1,
                    stopColor: "#29C7B8"
                })]
            }), y[14] = x) : x = y[14], y[15] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, r.jsxs)("linearGradient", {
                id: "paint3_linear_8150_7076",
                x1: 12.7045,
                y1: 12,
                x2: 18.1591,
                y2: 12.4545,
                gradientUnits: "userSpaceOnUse",
                children: [(0, r.jsx)("stop", {
                    offset: .0497812,
                    stopColor: "#6FBBD4"
                }), (0, r.jsx)("stop", {
                    offset: 1,
                    stopColor: "#6FBBD4",
                    stopOpacity: 0
                })]
            }), y[15] = g) : g = y[15], y[16] === Symbol.for("react.memo_cache_sentinel") ? (C = (0, r.jsxs)("linearGradient", {
                id: "paint4_linear_8150_7076",
                x1: 17.25,
                y1: 11.0909,
                x2: 13.1591,
                y2: 16.0909,
                gradientUnits: "userSpaceOnUse",
                children: [(0, r.jsx)("stop", {
                    stopColor: "#0C6553",
                    stopOpacity: 0
                }), (0, r.jsx)("stop", {
                    offset: 1,
                    stopColor: "#0C6553"
                })]
            }), y[16] = C) : C = y[16], y[17] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, r.jsxs)("radialGradient", {
                id: "paint5_radial_8150_7076",
                cx: 0,
                cy: 0,
                r: 1,
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(11.5 16.5) rotate(53.9726) scale(6.80074)",
                children: [(0, r.jsx)("stop", {
                    stopColor: "#2EDED7"
                }), (0, r.jsx)("stop", {
                    offset: 1,
                    stopColor: "#218097"
                })]
            }), y[17] = v) : v = y[17], y[18] === Symbol.for("react.memo_cache_sentinel") ? (j = (0, r.jsxs)("defs", {
                children: [p, m, f, b, h, x, g, C, v, (0, r.jsxs)("linearGradient", {
                    id: "paint6_linear_8150_7076",
                    x1: 6.5,
                    y1: 9,
                    x2: 6.5,
                    y2: 18,
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, r.jsx)("stop", {
                        stopColor: "#33A1B5"
                    }), (0, r.jsx)("stop", {
                        offset: 1,
                        stopColor: "#064A66"
                    })]
                })]
            }), y[18] = j) : j = y[18], y[19] !== e ? (_ = (0, r.jsxs)("svg", {
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                ...e,
                children: [t, a, i, s, n, l, d, c, u, j]
            }), y[19] = e, y[20] = _) : _ = y[20], _
        }
    }),
    bDc1: (function(e, t, a) {
        var r = a("WTLH"),
            o = a("FIwD");
        a.d(t, {
            a: () => o.d,
            b: () => o.g,
            c: () => r.a
        })
    }),
    TGHr: (function(e, t, a) {
        var r = a("TE73"),
            o = a("eZy0"),
            i = a("LpLF"),
            s = a("TiFH"),
            n = a("GQ93"),
            l = a("xUWq"),
            d = a("gcGr"),
            c = a("vZCo"),
            u = a("kpww"),
            p = a("sCki"),
            m = a("gWf7"),
            f = a("OH6Z"),
            b = a("FIwD"),
            h = a("MBDE"),
            x = a("Qbhq"),
            g = a("urXC"),
            C = a("Vc7o"),
            v = a("f9K9");
        a.d(t, {}, {
            a: function(e, t, a) {
                if (["row", "col", "box", "grid-item"].includes(e)) {
                    let i = "grid-item" === e && 1 === a.childCount && Object.keys(t).every(e => ["key", "span", "rowSpan"].includes(e)),
                        s = "grid-item" === e ? {
                            className: x.a.Item,
                            variant: i ? "transparent" : void 0,
                            gap: i ? 0 : t.gap,
                            style: (0, r.g)({
                                "grid-item-column": (0, f.a)(t.span) ?? "auto",
                                "grid-item-row": (0, f.a)(t.rowSpan) ?? "auto"
                            })
                        } : {};
                    return {
                        tag: "div",
                        attributes: (0, o.b)({
                            as: "div",
                            component: e,
                            layout: t,
                            ..."row" === e || "col" === e ? {
                                direction: e
                            } : {},
                            ...s
                        }, {
                            theme: a.theme,
                            autoSpacingDisabled: !1
                        })
                    }
                }
                if ("card" === e) return {
                    tag: "div",
                    attributes: (0, o.b)((0, i.b)(t), {
                        theme: a.theme,
                        autoSpacingDisabled: !1
                    })
                };
                if ("grid" === e) return {
                    tag: "div",
                    attributes: (0, n.c)(t, a.breakpoints)
                };
                if ("flow" === e) return {
                    tag: "div",
                    attributes: (0, l.d)(t)
                };
                if ("flow-item" === e) return {
                    tag: "div",
                    attributes: (0, o.b)((0, l.c)(t), {
                        theme: a.theme,
                        autoSpacingDisabled: !1
                    })
                };
                if ("divider" === e) return {
                    tag: "div",
                    attributes: (0, s.b)(t, a.theme)
                };
                if ("blockquote" === e) return {
                    tag: "blockquote",
                    attributes: {
                        className: h.a.Blockquote,
                        "data-d-component": "blockquote"
                    }
                };
                if (["text", "title", "caption", "label", "bold", "italic", "underline", "strikethrough"].includes(e)) {
                    let r = "bold" === e ? {
                            inline: !0,
                            strong: !0,
                            weight: t.weight
                        } : "italic" === e ? {
                            inline: !0,
                            italic: !0
                        } : "underline" === e ? {
                            inline: !0,
                            underline: !0
                        } : "strikethrough" === e ? {
                            inline: !0,
                            lineThrough: !0
                        } : t,
                        o = "title" === e ? (0, c.b)(t) : "caption" === e ? (0, u.b)(t) : "label" === e ? (0, p.b)(t) : (0, d.b)(r, a.inline);
                    return {
                        tag: o.as,
                        attributes: (0, m.b)(o, a.theme)
                    }
                }
                if ("code" === e) return {
                    tag: "code",
                    attributes: {
                        className: C.a.Code,
                        "data-d-component": "code"
                    }
                };
                if ("link" === e) return {
                    tag: "a",
                    attributes: {
                        className: v.a.Link,
                        "data-d-component": "link",
                        title: t.title
                    }
                };
                if ("list" === e) {
                    let e = t.marker ?? "bullet",
                        a = (0, b.h)(t.gap ?? 0),
                        r = "number" === e && "number" == typeof t.start && Number.isFinite(t.start) ? t.start : void 0;
                    return {
                        tag: "number" === e ? "ol" : "ul",
                        attributes: {
                            className: g.a.List,
                            "data-d-component": "list",
                            "data-d-marker": e,
                            "data-d-marker-layout": "native",
                            start: r,
                            style: {
                                "--d-list-row-gap": a.includes("(") ? a : a.split(/\s+/)[0],
                                gap: a,
                                counterReset: null == r ? void 0 : `d-list-item ${r-1}`
                            }
                        }
                    }
                }
                return "list-item" === e ? {
                    tag: "li",
                    attributes: {
                        className: g.a.Item,
                        "data-d-component": "list-item",
                        "data-d-marker-layout": "native"
                    },
                    content: {
                        tag: "div",
                        attributes: {
                            className: g.a.Content
                        },
                        content: {
                            tag: "div",
                            attributes: {
                                className: g.a.Label,
                                "data-d-list-item-content": ""
                            }
                        }
                    }
                } : null
            }
        })
    }),
    IhXv: (function(e, t, a) {
        a.d(t, {
            a: () => M
        });
        var r = a("ABep"),
            o = a("QosV"),
            i = a("sSh9"),
            s = a("LpCf"),
            n = a("on57"),
            l = a("LPKZ"),
            d = a.n(l),
            c = a("Q840"),
            u = a("G4E3"),
            p = a("zd8w"),
            m = a("oyxz"),
            f = a("rEML"),
            b = a("Cslg"),
            h = a("MdAf"),
            x = a("tmUE"),
            g = a("GhgU"),
            C = a("e1xH"),
            v = a("cVcC"),
            j = a("hlkZ"),
            _ = a("NnV7"),
            y = a("dJBt"),
            I = a("OWtl"),
            k = a("OMIV"),
            w = a("TnSu"),
            S = a("bIvi"),
            F = a("eShZ"),
            B = a("WrMt"),
            O = a("YCKz"),
            N = a("puTD");
        let U = () => d(),
            D = () => !1;

        function M(e) {
            let t, a, i, s, l, d, u, m, g, v, _, y, k, w, B, M, E, Z, q = (0, o.c)(94),
                {
                    snapshot: P,
                    preparation: T,
                    enabled: $,
                    nonblocking: V,
                    openIdentity: W,
                    pageId: R,
                    blockId: H,
                    firstContent: Q,
                    children: X
                } = e,
                J = void 0 !== V && V,
                K = (0, c.y)(I.a),
                Y = (0, p.useId)(),
                [ee, et] = (0, p.useState)(null),
                {
                    pageId: ea
                } = (0, f.eb)(),
                er = R ?? ea,
                eo = (0, c.z)(b.f),
                ei = (0, c.z)(b.j),
                es = (0, c.z)(b.k),
                en = (0, c.z)(b.h);
            q[0] !== eo || q[1] !== en || q[2] !== es || q[3] !== W || q[4] !== er || q[5] !== ei ? (t = () => ({
                openIdentity: W ?? er,
                generation: 0,
                invalidated: !1,
                pageId: er,
                accountId: eo,
                userId: ei,
                localUserId: es,
                accountUserId: en,
                browserFirstContent: L(er)
            }), q[0] = eo, q[1] = en, q[2] = es, q[3] = W, q[4] = er, q[5] = ei, q[6] = t) : t = q[6];
            let [el, ed] = (0, p.useState)(t), ec = 0 === el.generation ? Y : `${Y}-${el.generation}`, eu = null == W && 0 === el.generation, ep = el.pageId ?? "", em = el.accountId ?? "", ef = el.userId ?? "";
            q[7] !== ec || q[8] !== ep || q[9] !== em || q[10] !== ef ? (a = {
                mountId: ec,
                pageId: ep,
                accountId: em,
                userId: ef
            }, q[7] = ec, q[8] = ep, q[9] = em, q[10] = ef, q[11] = a) : a = q[11];
            let eb = a,
                eh = (0, c.x)(null != P && O.d, eb),
                ex = null == P || el.invalidated || eh ? void 0 : T,
                eg = (0, p.useSyncExternalStore)(null == ex ? U : ex.subscribeInvalidation, null == ex ? D : ex.isInvalidated, D),
                eC = (0, c.x)(null == P ? null : O.f, eb),
                ev = (0, c.x)(null != P ? j.loadedSpacePageMetadata$ : void 0, er ?? null),
                ej = (0, c.x)(null != P && C.z, eb.pageId),
                {
                    data: e_,
                    error: ey
                } = (0, c.x)(null == P ? void 0 : j.spacePageQuery$, eb.pageId, {
                    enabled: !1
                }) ?? {};
            q[12] !== eo || q[13] !== en || q[14] !== el.accountId || q[15] !== el.accountUserId || q[16] !== el.localUserId || q[17] !== el.pageId || q[18] !== el.userId || q[19] !== eC?.failed || q[20] !== $ || q[21] !== ey || q[22] !== eg || q[23] !== es || q[24] !== ev || q[25] !== e_ || q[26] !== er || q[27] !== P || q[28] !== ei || q[29] !== ej ? (i = null == P || eg || !$ || el.pageId !== er || el.accountId !== eo || el.userId !== ei || el.localUserId !== es || el.accountUserId !== en || ej || ev?.view_only === !0 || e_?.metadata.view_only === !0 || ev?.deleted_at != null || e_?.metadata.deleted_at != null || ev?.access.can_read === !1 || e_?.metadata.access.can_read === !1 || ey instanceof F.FetchError && [401, 403, 404, 410].includes(ey.status) || eC?.failed === !0, q[12] = eo, q[13] = en, q[14] = el.accountId, q[15] = el.accountUserId, q[16] = el.localUserId, q[17] = el.pageId, q[18] = el.userId, q[19] = eC?.failed, q[20] = $, q[21] = ey, q[22] = eg, q[23] = es, q[24] = ev, q[25] = e_, q[26] = er, q[27] = P, q[28] = ei, q[29] = ej, q[30] = i) : i = q[30];
            let eI = i;
            null != W && (el.openIdentity !== W || el.pageId !== er) ? ed({
                openIdentity: W,
                generation: el.generation + 1,
                invalidated: !1,
                pageId: er,
                accountId: eo,
                userId: ei,
                localUserId: es,
                accountUserId: en,
                browserFirstContent: L(er)
            }) : eI && !el.invalidated && ed({
                ...el,
                invalidated: !0
            }), q[31] !== K ? (s = (e, t) => {
                K.set(O.e, e, !t)
            }, q[31] = K, q[32] = s) : s = q[32];
            let ek = (0, S.a)(s);
            q[33] !== ec || q[34] !== ek ? (l = e => {
                null != e && ek(ec, null != e.querySelector("[data-page-ssr-snapshot]"))
            }, q[33] = ec, q[34] = ek, q[35] = l) : l = q[35];
            let ew = (0, S.a)(l);
            q[36] !== ec || q[37] !== ek ? (d = (0, r.jsx)(A, {
                mountId: ec,
                setClientCovered: ek,
                visible: !1
            }), q[36] = ec, q[37] = ek, q[38] = d) : d = q[38];
            let eS = d,
                eF = !el.invalidated && !eI && !eh && null != P,
                eB = eS;
            if (eF) {
                if (J) {
                    let e, t, a;
                    q[39] !== el.browserFirstContent.get || q[40] !== H || q[41] !== R || q[42] !== Q || q[43] !== eu || q[44] !== ec || q[45] !== er || q[46] !== ek || q[47] !== eS ? (e = e => null == e || "status" in e ? eS : (0, r.jsx)(G, {
                        mountId: ec,
                        getBrowserFirstContent: el.browserFirstContent.get,
                        pageId: er,
                        blockId: null == R ? void 0 : H ?? null,
                        firstContent: Q,
                        initialNavigation: eu,
                        snapshot: e,
                        setClientCovered: ek
                    }), q[39] = el.browserFirstContent.get, q[40] = H, q[41] = R, q[42] = Q, q[43] = eu, q[44] = ec, q[45] = er, q[46] = ek, q[47] = eS, q[48] = e) : e = q[48], q[49] !== P || q[50] !== e || q[51] !== eS ? (t = (0, r.jsx)(f.b, {
                        resolve: P,
                        errorElement: eS,
                        children: e
                    }), q[49] = P, q[50] = e, q[51] = eS, q[52] = t) : t = q[52], q[53] !== ec || q[54] !== t || q[55] !== eS ? (a = (0, r.jsx)(p.Suspense, {
                        fallback: eS,
                        children: t
                    }, ec), q[53] = ec, q[54] = t, q[55] = eS, q[56] = a) : a = q[56], eB = a
                } else if ("html" in P) {
                    let e, t = null == R ? void 0 : H ?? null;
                    q[57] !== el.browserFirstContent.get || q[58] !== Q || q[59] !== eu || q[60] !== ec || q[61] !== er || q[62] !== ek || q[63] !== P || q[64] !== t ? (e = (0, r.jsx)(G, {
                        mountId: ec,
                        getBrowserFirstContent: el.browserFirstContent.get,
                        pageId: er,
                        blockId: t,
                        firstContent: Q,
                        initialNavigation: eu,
                        snapshot: P,
                        setClientCovered: ek
                    }, ec), q[57] = el.browserFirstContent.get, q[58] = Q, q[59] = eu, q[60] = ec, q[61] = er, q[62] = ek, q[63] = P, q[64] = t, q[65] = e) : e = q[65], eB = e
                }
            }
            let eO = J && null != P ? ew : void 0;
            q[66] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, n.b)("surface-e8iyms", "relative flex h-full min-h-0 flex-1 flex-col"), q[66] = u) : u = q[66], q[67] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, r.jsx)(h.a, {
                "aria-hidden": "true",
                "data-page-loading-spinner": "",
                className: (0, n.b)("indicator-Wq6R_i", "pointer-events-none absolute inset-x-0 z-1 top-[var(--page-loading-top,0px)] bottom-0 m-auto icon-lg animate-spin text-secondary [animation-timing-function:linear] motion-reduce:[animation-play-state:paused]")
            }), q[67] = m) : m = q[67];
            let eN = el.invalidated || eI || eh ? null : ee;
            q[68] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, r.jsx)(x.a, {
                routeFallback: !0,
                fillParent: !0,
                debugName: "PageEditor"
            }), q[68] = g) : g = q[68], q[69] !== el.browserFirstContent.capture || q[70] !== X ? (v = (0, r.jsx)(p.Suspense, {
                fallback: g,
                children: (0, r.jsx)(O.a, {
                    value: el.browserFirstContent.capture,
                    children: X
                })
            }), q[69] = el.browserFirstContent.capture, q[70] = X, q[71] = v) : v = q[71], q[72] !== eN || q[73] !== v ? (_ = (0, r.jsx)(O.c, {
                value: eN,
                children: v
            }), q[72] = eN, q[73] = v, q[74] = _) : _ = q[74], q[75] !== ec || q[76] !== _ ? (y = (0, r.jsx)(O.b, {
                value: ec,
                children: _
            }), q[75] = ec, q[76] = _, q[77] = y) : y = q[77], q[78] !== eF || q[79] !== ec || q[80] !== y ? (k = (0, r.jsx)(z, {
                mountId: ec,
                coverEligible: eF,
                children: y
            }), q[78] = eF, q[79] = ec, q[80] = y, q[81] = k) : k = q[81];
            let eU = J ? N.a.PageSnapshotCover : "inset-0";
            return q[82] !== eU ? (w = (0, n.b)("pointer-events-none absolute flex min-h-0 flex-col", eU), q[82] = eU, q[83] = w) : w = q[83], q[84] === Symbol.for("react.memo_cache_sentinel") ? (B = (0, r.jsx)("div", {
                ref: et,
                className: "pointer-events-auto shrink-0"
            }), q[84] = B) : B = q[84], q[85] !== eB ? (M = (0, r.jsx)("div", {
                className: "relative min-h-0 flex-1",
                children: eB
            }), q[85] = eB, q[86] = M) : M = q[86], q[87] !== w || q[88] !== M ? (E = (0, r.jsxs)("div", {
                className: w,
                children: [B, M]
            }), q[87] = w, q[88] = M, q[89] = E) : E = q[89], q[90] !== eO || q[91] !== k || q[92] !== E ? (Z = (0, r.jsxs)("div", {
                ref: eO,
                className: u,
                children: [m, k, E]
            }), q[90] = eO, q[91] = k, q[92] = E, q[93] = Z) : Z = q[93], Z
        }

        function z(e) {
            let t, a = (0, o.c)(4),
                {
                    mountId: i,
                    coverEligible: s,
                    children: n
                } = e,
                l = (0, c.x)(O.e, i),
                d = s && !l,
                u = d ? "true" : void 0;
            return a[0] !== n || a[1] !== d || a[2] !== u ? (t = (0, r.jsx)("div", {
                className: "flex min-h-0 flex-1 flex-col",
                inert: d,
                "aria-hidden": u,
                children: n
            }), a[0] = n, a[1] = d, a[2] = u, a[3] = t) : t = a[3], t
        }

        function A(e) {
            let t, a, i, s = (0, o.c)(15),
                {
                    mountId: l,
                    initialNavigation: d,
                    visible: u,
                    setClientCovered: p,
                    onRemove: m,
                    children: f
                } = e,
                b = void 0 !== d && d;
            s[0] !== b || s[1] !== l || s[2] !== m || s[3] !== p || s[4] !== u ? (t = e => {
                if (null != e) return p(l, u), () => {
                    u && b && (0, B.e)(), p(l, !1), u && m?.(e)
                }
            }, s[0] = b, s[1] = l, s[2] = m, s[3] = p, s[4] = u, s[5] = t) : t = s[5];
            let h = t,
                x = (0, c.x)(k.e, "2163293173"),
                g = u ? "covered" : "uncovered",
                C = x ? "[scrollbar-gutter:stable_both-edges]" : "scrollbar-stable";
            s[6] !== C ? (a = (0, n.b)("pointer-events-auto absolute inset-0 overflow-x-hidden overflow-y-auto bg-surface scrollbar-on-hover", C), s[6] = C, s[7] = a) : a = s[7];
            let v = !u,
                j = u || void 0,
                _ = u ? f : null;
            return s[8] !== h || s[9] !== g || s[10] !== a || s[11] !== v || s[12] !== j || s[13] !== _ ? (i = (0, r.jsx)("div", {
                ref: h,
                className: a,
                hidden: v,
                "data-page-ssr-snapshot": j,
                children: _
            }, g), s[8] = h, s[9] = g, s[10] = a, s[11] = v, s[12] = j, s[13] = _, s[14] = i) : i = s[14], i
        }

        function G(e) {
            let t, a, n, l, d, f, h, x, C, v, j = (0, o.c)(40),
                {
                    mountId: y,
                    getBrowserFirstContent: k,
                    pageId: F,
                    blockId: B,
                    firstContent: U,
                    initialNavigation: D,
                    snapshot: M,
                    setClientCovered: z
                } = e,
                G = (0, c.y)(I.a),
                L = (0, p.useRef)(null),
                Z = (0, c.z)(b.f),
                q = (0, c.z)(b.j);
            j[0] !== y || j[1] !== M.accountId || j[2] !== M.pageId || j[3] !== M.userId ? (t = {
                mountId: y,
                pageId: M.pageId,
                accountId: M.accountId,
                userId: M.userId
            }, j[0] = y, j[1] = M.accountId, j[2] = M.pageId, j[3] = M.userId, j[4] = t) : t = j[4];
            let P = (0, c.x)(O.f, t),
                T = F !== M.pageId || Z !== M.accountId || q !== M.userId || P?.failed === !0,
                [$, V] = (0, p.useState)(!1),
                W = null != P && !P.failed && P.sequence >= M.throughSequence;
            !$ && W && V(!0);
            let R = !T && !$ && !W;
            j[5] !== B || j[6] !== y || j[7] !== G || j[8] !== M.accountId || j[9] !== M.pageId || j[10] !== M.throughSequence || j[11] !== M.userId ? (a = e => {
                let t = (0, u.d)(`page://${M.pageId}${e.ownerDocument.defaultView?.location.hash??""}`);
                if (null != B || void 0 === B && t?.kind === "page" && null != t.blockId) return;
                let a = G.get(O.f, {
                    mountId: y,
                    pageId: M.pageId,
                    accountId: M.accountId,
                    userId: M.userId
                });
                !a?.failed && null != a && a.sequence >= M.throughSequence && G.get(b.f) === M.accountId && G.get(b.j) === M.userId && a.restoreScroll?.(e.scrollTop)
            }, j[5] = B, j[6] = y, j[7] = G, j[8] = M.accountId, j[9] = M.pageId, j[10] = M.throughSequence, j[11] = M.userId, j[12] = a) : a = j[12];
            let H = (0, S.a)(a);
            return j[13] !== U || j[14] !== k || j[15] !== D || j[16] !== R ? (n = R && (0, r.jsx)(E, {
                getBrowserFirstContent: k,
                content: L,
                firstContent: U,
                initialNavigation: D
            }), j[13] = U, j[14] = k, j[15] = D, j[16] = R, j[17] = n) : n = j[17], j[18] !== M.emoji ? (l = null != M.emoji && (0, r.jsx)("span", {
                className: "flex size-16 items-center border border-transparent",
                children: (0, r.jsx)(w.a, {
                    emoji: M.emoji,
                    size: "large"
                })
            }), j[18] = M.emoji, j[19] = l) : l = j[19], j[20] !== M.title ? (d = M.title || (0, r.jsx)(m.a, {
                ..._.c.untitled
            }), j[20] = M.title, j[21] = d) : d = j[21], j[22] !== d ? (f = (0, r.jsx)("h1", {
                className: `${N.a.PageTitle} font-semibold break-words text-default`,
                children: d
            }), j[22] = d, j[23] = f) : f = j[23], j[24] !== l || j[25] !== f ? (h = (0, r.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2",
                children: [l, f]
            }), j[24] = l, j[25] = f, j[26] = h) : h = j[26], j[27] !== M.html ? (x = (0, r.jsx)("div", {
                "data-page-document-selection": !0,
                className: "isolate col-[wide] min-w-0",
                children: (0, r.jsx)("div", {
                    className: `${i.a.root} ${N.a.PageDocumentTheme} px-0`,
                    style: s.a,
                    children: (0, r.jsx)("div", {
                        ref: L,
                        className: `ProseMirror ${i.a.content} ${N.a.PageDocument} ${N.a.PagePreview}`,
                        contentEditable: !1,
                        "data-page-static-preview": !0,
                        dangerouslySetInnerHTML: {
                            __html: M.html
                        }
                    })
                })
            }), j[27] = M.html, j[28] = x) : x = j[28], j[29] !== h || j[30] !== x ? (C = (0, r.jsx)(g.a, {
                heading: h,
                children: x
            }), j[29] = h, j[30] = x, j[31] = C) : C = j[31], j[32] !== D || j[33] !== y || j[34] !== H || j[35] !== z || j[36] !== n || j[37] !== C || j[38] !== R ? (v = (0, r.jsxs)(A, {
                mountId: y,
                initialNavigation: D,
                visible: R,
                setClientCovered: z,
                onRemove: H,
                children: [n, C]
            }), j[32] = D, j[33] = y, j[34] = H, j[35] = z, j[36] = n, j[37] = C, j[38] = R, j[39] = v) : v = j[39], v
        }

        function E(e) {
            let t, a, i, s = (0, o.c)(11),
                {
                    getBrowserFirstContent: n,
                    content: l,
                    firstContent: d,
                    initialNavigation: c
                } = e;
            return s[0] !== d || s[1] !== n ? (t = () => {
                let e = void 0 === d ? n() : d;
                e?.observeDocumentType("page")
            }, s[0] = d, s[1] = n, s[2] = t) : t = s[2], s[3] !== l.current || s[4] !== d || s[5] !== n || s[6] !== c ? (a = () => {
                if (l.current?.querySelector('[elementtiming="codex-page-ssr-content"]') == null) return;
                c && (0, B.d)();
                let e = void 0 === d ? n() : d;
                e?.observeDocumentType("page"), e?.contentVisible()
            }, s[3] = l.current, s[4] = d, s[5] = n, s[6] = c, s[7] = a) : a = s[7], s[8] !== t || s[9] !== a ? (i = (0, r.jsx)(y.a, {
                requireVisibleAtPaint: !0,
                onCommit: t,
                onPaint: a
            }), s[8] = t, s[9] = a, s[10] = i) : i = s[10], i
        }

        function L(e) {
            let t = v.b.getDebugLoad(e ?? null)?.browserFirstContent;
            return {
                get: () => t,
                capture: a => {
                    a === e && null == t && (t = v.b.getDebugLoad(e ?? null)?.browserFirstContent)
                }
            }
        }
    }),
    EBQV: (function(t) {
        t.exports = e.ir("/cdn/assets/dotnet.js").then(function(e) {
            return e
        })
    })
};
import {
    __webpack_require__ as e
} from "./633146.48b57020d2.js";
import * as t from "./418851.5b0ade19b1.js";
e.C(t);
import * as a from "./109308.8b09661749.js";
e.C(a);
import * as r from "./399565.edefe43a76.js";
e.C(r);
import * as o from "./257798.428a6bce48.js";
e.C(o);
import * as i from "./447351.34d04099ca.js";
e.C(i);
import * as s from "./617936.dd75fa2a89.js";
e.C(s);
import * as n from "./807489.1d24fa9988.js";
e.C(n);
import * as l from "./337882.145f5ca770.js";
e.C(l);
import * as d from "./955979.fad3aa290b.js";
e.C(d);
import * as c from "./646436.b50a318f52.js";
e.C(c);
import * as u from "./7078.9bac2fcc06.js";
e.C(u);
import * as p from "./200429.f07d17d37b.js";
e.C(p);
import * as m from "./698524.130da41cbb.js";
e.C(m);
import * as f from "./956483.20ccea0970.js";
e.C(f);
import * as b from "./87162.4896e26514.js";
e.C(b);
import * as h from "./396705.e5ddd72a06.js";
e.C(h);
import * as x from "./155568.49e7ad46aa.js";
e.C(x);
import * as g from "./731863.3cdbbfa8f8.js";
e.C(g);
import * as C from "./767086.3711424c4d.js";
e.C(C);
import * as v from "./76629.15f5868e7b.js";
e.C(v);
import * as j from "./226913.cf105b979e.js";
e.C(j);
import * as _ from "./753405.4bffba797b.js";
e.C(_);
import * as y from "./321957.745ede45f0.js";
e.C(y);
import * as I from "./585419.38ade943bd.js";
e.C(I);
import * as k from "./843292.f8476ea5db.js";
e.C(k);
import * as w from "./353230.bd7d884f9e.js";
e.C(w);
import * as S from "./882456.2687d7c2f4.js";
e.C(S);
import * as F from "./212773.49b51fc47b.js";
e.C(F);
import * as B from "./909395.7dc04db4e2.js";
e.C(B);
import * as O from "./543588.85314e3d42.js";
e.C(O);
import * as N from "./17983.fe02c7cac0.js";
e.C(N);
import * as U from "./704809.43f4c1af72.js";
e.C(U);
import * as D from "./227786.748857de8d.js";
e.C(D);
import * as M from "./920484.11e91ee9f5.js";
e.C(M);
import * as z from "./311330.0c89fc9811.js";
e.C(z);
import * as A from "./787702.f564cd3689.js";
e.C(A);
var G = e(e.s = "cnwD"),
    E = G.a,
    L = G.b;
export {
    E as
    default, L as shouldRevalidate
};