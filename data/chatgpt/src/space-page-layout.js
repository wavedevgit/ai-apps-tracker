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
            c = a("KAv9"),
            u = a("e1xH"),
            f = a("M2H2"),
            m = a("C8z7"),
            p = a("aFW8"),
            b = a("vnV1"),
            h = a("IeFV"),
            x = a("OWtl"),
            g = a("OMIV"),
            v = a("hC2y"),
            C = a("AXDI"),
            j = (0, r.ib)(function() {
                let e, t, a, j, _, w, y, I, k = (0, i.c)(40),
                    S = (0, s.y)(x.a),
                    F = (0, r.Y)(),
                    {
                        pathname: O
                    } = F,
                    {
                        pageId: B
                    } = (0, r.db)(),
                    N = (0, r.X)(),
                    U = "inAppOpen" in N && N.inAppOpen,
                    D = (0, s.z)(f.a),
                    M = (0, s.z)(l.f),
                    z = (0, s.z)(l.j),
                    A = (0, s.z)(l.k),
                    G = (0, s.z)(l.h);
                k[0] !== M || k[1] !== G || k[2] !== A || k[3] !== z ? (e = JSON.stringify([M, z, A, G]), k[0] = M, k[1] = G, k[2] = A, k[3] = z, k[4] = e) : e = k[4];
                let P = e;
                k[5] !== U || k[6] !== D || k[7] !== F || k[8] !== S ? (t = () => {
                    let e = (0, h.a)(F),
                        t = U && D && null != e ? (0, m.a)(S, document, e) : void 0;
                    return {
                        preparation: t,
                        snapshot: t?.takeSnapshot() ?? null
                    }
                }, k[5] = U, k[6] = D, k[7] = F, k[8] = S, k[9] = t) : t = k[9];
                let L = t;
                k[10] !== L || k[11] !== P || k[12] !== B ? (a = () => ({
                    pageId: B,
                    actor: P,
                    ...L()
                }), k[10] = L, k[11] = P, k[12] = B, k[13] = a) : a = k[13];
                let [T, E] = (0, n.useState)(a), Z = T;
                if (T.pageId !== B || T.actor !== P) {
                    let e, t;
                    k[14] !== L || k[15] !== T.pageId || k[16] !== B ? (e = T.pageId !== B ? L() : {
                        preparation: void 0,
                        snapshot: null
                    }, k[14] = L, k[15] = T.pageId, k[16] = B, k[17] = e) : e = k[17], k[18] !== P || k[19] !== B || k[20] !== e ? (t = {
                        pageId: B,
                        actor: P,
                        ...e
                    }, k[18] = P, k[19] = B, k[20] = e, k[21] = t) : t = k[21], E(Z = t)
                }
                let q = U ? Z.snapshot : N.spacePageSnapshot,
                    V = U || N.nonblockingSsr,
                    $ = (0, s.x)(u.F, O),
                    Q = (0, s.z)(u.z),
                    W = (0, s.x)(g.e, "4063423961");
                k[22] === Symbol.for("react.memo_cache_sentinel") ? (j = {
                    enabled: !1
                }, k[22] = j) : j = k[22];
                let R = (0, s.z)(b.d, j);
                k[23] === Symbol.for("react.memo_cache_sentinel") ? (_ = (0, o.jsx)(d.a, {
                    fillParent: !0,
                    delay: !1
                }), k[23] = _) : _ = k[23], k[24] !== $ ? (w = (0, o.jsx)(C.a, {
                    fallback: _,
                    children: $ ? (0, o.jsx)(p.b, {
                        children: (0, o.jsx)(r.m, {})
                    }) : (0, o.jsx)(v.e, {
                        allowLocal: !0
                    })
                }), k[24] = $, k[25] = w) : w = k[25];
                let H = w,
                    J = U ? Z.preparation : void 0,
                    K = U ? B : void 0;
                return k[26] !== W || k[27] !== U || k[28] !== D || k[29] !== F || k[30] !== Q || k[31] !== R ? (y = (!U || D && null != (0, h.a)(F)) && "disabled" !== Q && (!W || null == R.error && R.data?.status !== "age_restricted"), k[26] = W, k[27] = U, k[28] = D, k[29] = F, k[30] = Q, k[31] = R, k[32] = y) : y = k[32], k[33] !== H || k[34] !== V || k[35] !== q || k[36] !== J || k[37] !== K || k[38] !== y ? (I = (0, o.jsx)(c.a, {
                    snapshot: q,
                    preparation: J,
                    nonblocking: V,
                    openIdentity: K,
                    enabled: y,
                    children: H
                }), k[33] = H, k[34] = V, k[35] = q, k[36] = J, k[37] = K, k[38] = y, k[39] = I) : I = k[39], I
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
        a.d(t, {}, {
            a: {
                "--oai-wb-spacing": "var(--spacing,0.25rem)",
                "--oai-wb-text-primary": "var(--wb-text-primary,var(--color-token-text-primary,var(--text-primary,#0d0d0d)))",
                "--oai-wb-text-secondary": "var(--wb-text-secondary,var(--color-token-text-secondary,var(--text-secondary,#5d5d5d)))",
                "--oai-wb-text-tertiary": "var(--wb-text-tertiary,var(--color-token-text-tertiary,var(--text-tertiary,#8f8f8f)))",
                "--oai-wb-surface-primary": "var(--wb-surface-primary,var(--color-token-main-surface-primary,var(--main-surface-primary,#fff)))",
                "--oai-wb-surface-secondary": "var(--wb-surface-secondary,var(--color-token-bg-tertiary,var(--main-surface-secondary,#f5f5f5)))",
                "--oai-wb-interactive-secondary-hover": "var(--wb-interactive-secondary-hover,var(--color-token-interactive-bg-secondary-hover,var(--oai-wb-surface-secondary)))",
                "--oai-wb-border": "var(--wb-border,var(--color-token-border,var(--border-light,rgb(0 0 0/8%))))",
                "--oai-wb-border-hover": "var(--wb-border-hover,var(--color-token-border-default,var(--border-medium,rgb(0 0 0/12%))))",
                "--oai-wb-divider": "var(--wb-divider,var(--color-token-border-light,var(--border-light,rgb(0 0 0/5%))))",
                "--oai-wb-focus": "var(--wb-focus,var(--color-token-focus-border,var(--border-strong,#5b9dd9)))",
                "--oai-wb-control-border": "var(--wb-control-border,var(--interactive-border-focus,var(--oai-wb-focus)))",
                "--oai-wb-entity-accent": "var(--wb-entity-accent,var(--theme-entity-accent,var(--oai-wb-accent)))",
                "--oai-wb-accent": "var(--wb-accent,var(--interactive-label-accent-default,#0285ff))",
                "--oai-wb-on-accent": "var(--wb-on-accent,var(--bg-primary,#fff))",
                "--oai-wb-interactive-background": "var(--wb-interactive-background,var(--interactive-bg-accent-default,color-mix(in srgb,#0285ff 12%,transparent)))",
                "--oai-wb-selection": "var(--wb-selection,var(--theme-user-selection-bg,var(--selection,#93c5fd)))",
                "--oai-wb-radius": "var(--wb-radius,1.5rem)",
                "--oai-wb-radius-sm": "var(--wb-radius-sm,0.5rem)",
                "--oai-wb-shadow": "var(--wb-shadow,0 4px 80px rgb(0 0 0/2%))",
                "--oai-wb-shadow-lg": "var(--wb-shadow-lg,0 10px 30px rgb(0 0 0/12%))",
                "--oai-wb-font-sans": "var(--wb-font-sans,var(--font-sans,sans-serif))",
                "--oai-wb-font-mono": "var(--wb-font-mono,var(--font-mono,monospace))",
                "--oai-wb-font-size": "var(--wb-font-size,0.875rem)",
                "--oai-wb-shimmer-dark-contrast": "var(--wb-shimmer-dark-contrast,var(--oai-wb-text-tertiary))",
                "--oai-wb-shimmer-dark-secondary": "var(--wb-shimmer-dark-secondary,var(--oai-wb-text-tertiary))"
            }
        })
    }),
    rfXw: (function(e, t, a) {
        var r = a("ABep"),
            o = a("QosV");
        t.default = e => {
            let t, a, i, s, n, l, d, c, u, f, m, p, b, h, x, g, v, C, j, _, w = (0, o.c)(21);
            return w[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, r.jsx)("path", {
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
            }), w[0] = t, w[1] = a, w[2] = i) : (t = w[0], a = w[1], i = w[2]), w[3] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, r.jsxs)("g", {
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
            }), w[3] = s, w[4] = n) : (s = w[3], n = w[4]), w[5] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, r.jsx)("g", {
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
            }), w[5] = l, w[6] = d) : (l = w[5], d = w[6]), w[7] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, r.jsx)("g", {
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
            }), w[7] = c, w[8] = u) : (c = w[7], u = w[8]), w[9] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, r.jsxs)("filter", {
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
            }), w[9] = f) : f = w[9], w[10] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, r.jsxs)("filter", {
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
            }), w[10] = m) : m = w[10], w[11] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, r.jsxs)("filter", {
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
            }), w[11] = p) : p = w[11], w[12] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, r.jsxs)("radialGradient", {
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
            }), w[12] = b) : b = w[12], w[13] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, r.jsxs)("linearGradient", {
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
            }), w[13] = h) : h = w[13], w[14] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, r.jsxs)("radialGradient", {
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
            }), w[14] = x) : x = w[14], w[15] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, r.jsxs)("linearGradient", {
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
            }), w[15] = g) : g = w[15], w[16] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, r.jsxs)("linearGradient", {
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
            }), w[16] = v) : v = w[16], w[17] === Symbol.for("react.memo_cache_sentinel") ? (C = (0, r.jsxs)("radialGradient", {
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
            }), w[17] = C) : C = w[17], w[18] === Symbol.for("react.memo_cache_sentinel") ? (j = (0, r.jsxs)("defs", {
                children: [f, m, p, b, h, x, g, v, C, (0, r.jsxs)("linearGradient", {
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
            }), w[18] = j) : j = w[18], w[19] !== e ? (_ = (0, r.jsxs)("svg", {
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                ...e,
                children: [t, a, i, s, n, l, d, c, u, j]
            }), w[19] = e, w[20] = _) : _ = w[20], _
        }
    }),
    bDc1: (function(e, t, a) {
        var r = a("YNuJ"),
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
            f = a("sCki"),
            m = a("gWf7"),
            p = a("OH6Z"),
            b = a("FIwD"),
            h = a("TQDJ"),
            x = a("OGxO"),
            g = a("yoJG"),
            v = a("krfl"),
            C = a("SXlx");
        a.d(t, {}, {
            a: function(e, t, a) {
                if (["row", "col", "box", "grid-item"].includes(e)) {
                    let i = "grid-item" === e && 1 === a.childCount && Object.keys(t).every(e => ["key", "span", "rowSpan"].includes(e)),
                        s = "grid-item" === e ? {
                            className: x.a.Item,
                            variant: i ? "transparent" : void 0,
                            gap: i ? 0 : t.gap,
                            style: (0, r.g)({
                                "grid-item-column": (0, p.a)(t.span) ?? "auto",
                                "grid-item-row": (0, p.a)(t.rowSpan) ?? "auto"
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
                        o = "title" === e ? (0, c.b)(t) : "caption" === e ? (0, u.b)(t) : "label" === e ? (0, f.b)(t) : (0, d.b)(r, a.inline);
                    return {
                        tag: o.as,
                        attributes: (0, m.b)(o, a.theme)
                    }
                }
                if ("code" === e) return {
                    tag: "code",
                    attributes: {
                        className: v.a.Code,
                        "data-d-component": "code"
                    }
                };
                if ("link" === e) return {
                    tag: "a",
                    attributes: {
                        className: C.a.Link,
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
    KAv9: (function(e, t, a) {
        var r = a("ABep"),
            o = a("QosV"),
            i = a("sSh9"),
            s = a("LpCf"),
            n = a("on57"),
            l = a("LPKZ"),
            d = a.n(l),
            c = a("Q840"),
            u = a("G4E3"),
            f = a("zd8w"),
            m = a("oyxz"),
            p = a("rEML"),
            b = a("Cslg"),
            h = a("tmUE"),
            x = a("GhgU"),
            g = a("e1xH"),
            v = a("cVcC"),
            C = a("tv8P"),
            j = a("NnV7"),
            _ = a("dJBt"),
            w = a("OWtl"),
            y = a("OMIV"),
            I = a("TnSu"),
            k = a("bIvi"),
            S = a("eShZ"),
            F = a("WrMt"),
            O = a("YCKz"),
            B = a("FwTO");
        let N = () => d(),
            U = () => !1;

        function D(e) {
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

        function M(e) {
            let t, a, i, s = (0, o.c)(15),
                {
                    mountId: l,
                    initialNavigation: d,
                    visible: u,
                    setClientCovered: f,
                    onRemove: m,
                    children: p
                } = e,
                b = void 0 !== d && d;
            s[0] !== b || s[1] !== l || s[2] !== m || s[3] !== f || s[4] !== u ? (t = e => {
                if (null != e) return f(l, u), () => {
                    u && b && (0, F.e)(), f(l, !1), u && m?.(e)
                }
            }, s[0] = b, s[1] = l, s[2] = m, s[3] = f, s[4] = u, s[5] = t) : t = s[5];
            let h = t,
                x = (0, c.x)(y.e, "2163293173"),
                g = u ? "covered" : "uncovered",
                v = x ? "[scrollbar-gutter:stable_both-edges]" : "scrollbar-stable";
            s[6] !== v ? (a = (0, n.b)("pointer-events-auto absolute inset-0 overflow-x-hidden overflow-y-auto bg-surface scrollbar-on-hover", v), s[6] = v, s[7] = a) : a = s[7];
            let C = !u,
                j = u || void 0,
                _ = u ? p : null;
            return s[8] !== h || s[9] !== g || s[10] !== a || s[11] !== C || s[12] !== j || s[13] !== _ ? (i = (0, r.jsx)("div", {
                ref: h,
                className: a,
                hidden: C,
                "data-page-ssr-snapshot": j,
                children: _
            }, g), s[8] = h, s[9] = g, s[10] = a, s[11] = C, s[12] = j, s[13] = _, s[14] = i) : i = s[14], i
        }

        function z(e) {
            let t, a, n, l, d, p, h, g, v, C, _ = (0, o.c)(40),
                {
                    mountId: y,
                    getBrowserFirstContent: S,
                    pageId: F,
                    blockId: N,
                    firstContent: U,
                    initialNavigation: D,
                    snapshot: z,
                    setClientCovered: G
                } = e,
                P = (0, c.y)(w.a),
                L = (0, f.useRef)(null),
                T = (0, c.z)(b.f),
                E = (0, c.z)(b.j);
            _[0] !== y || _[1] !== z.accountId || _[2] !== z.pageId || _[3] !== z.userId ? (t = {
                mountId: y,
                pageId: z.pageId,
                accountId: z.accountId,
                userId: z.userId
            }, _[0] = y, _[1] = z.accountId, _[2] = z.pageId, _[3] = z.userId, _[4] = t) : t = _[4];
            let Z = (0, c.x)(O.f, t),
                q = F !== z.pageId || T !== z.accountId || E !== z.userId || Z?.failed === !0,
                [V, $] = (0, f.useState)(!1),
                Q = null != Z && !Z.failed && Z.sequence >= z.throughSequence;
            !V && Q && $(!0);
            let W = !q && !V && !Q;
            _[5] !== N || _[6] !== y || _[7] !== P || _[8] !== z.accountId || _[9] !== z.pageId || _[10] !== z.throughSequence || _[11] !== z.userId ? (a = e => {
                let t = (0, u.d)(`page://${z.pageId}${e.ownerDocument.defaultView?.location.hash??""}`);
                if (null != N || void 0 === N && t?.kind === "page" && null != t.blockId) return;
                let a = P.get(O.f, {
                    mountId: y,
                    pageId: z.pageId,
                    accountId: z.accountId,
                    userId: z.userId
                });
                !a?.failed && null != a && a.sequence >= z.throughSequence && P.get(b.f) === z.accountId && P.get(b.j) === z.userId && a.restoreScroll?.(e.scrollTop)
            }, _[5] = N, _[6] = y, _[7] = P, _[8] = z.accountId, _[9] = z.pageId, _[10] = z.throughSequence, _[11] = z.userId, _[12] = a) : a = _[12];
            let R = (0, k.a)(a);
            return _[13] !== U || _[14] !== S || _[15] !== D || _[16] !== W ? (n = W && (0, r.jsx)(A, {
                getBrowserFirstContent: S,
                content: L,
                firstContent: U,
                initialNavigation: D
            }), _[13] = U, _[14] = S, _[15] = D, _[16] = W, _[17] = n) : n = _[17], _[18] !== z.emoji ? (l = null != z.emoji && (0, r.jsx)("span", {
                className: "flex size-16 items-center border border-transparent",
                children: (0, r.jsx)(I.a, {
                    emoji: z.emoji,
                    size: "large"
                })
            }), _[18] = z.emoji, _[19] = l) : l = _[19], _[20] !== z.title ? (d = z.title || (0, r.jsx)(m.a, {
                ...j.c.untitled
            }), _[20] = z.title, _[21] = d) : d = _[21], _[22] !== d ? (p = (0, r.jsx)("h1", {
                className: `${B.a.PageTitle} font-semibold break-words text-default`,
                children: d
            }), _[22] = d, _[23] = p) : p = _[23], _[24] !== l || _[25] !== p ? (h = (0, r.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2",
                children: [l, p]
            }), _[24] = l, _[25] = p, _[26] = h) : h = _[26], _[27] !== z.html ? (g = (0, r.jsx)("div", {
                "data-page-document-selection": !0,
                className: "isolate col-[wide] min-w-0",
                children: (0, r.jsx)("div", {
                    className: `${i.a.root} ${B.a.PageDocumentTheme} px-0`,
                    style: s.a,
                    children: (0, r.jsx)("div", {
                        ref: L,
                        className: `ProseMirror ${i.a.content} ${B.a.PageDocument} ${B.a.PagePreview}`,
                        contentEditable: !1,
                        "data-page-static-preview": !0,
                        dangerouslySetInnerHTML: {
                            __html: z.html
                        }
                    })
                })
            }), _[27] = z.html, _[28] = g) : g = _[28], _[29] !== h || _[30] !== g ? (v = (0, r.jsx)(x.a, {
                heading: h,
                children: g
            }), _[29] = h, _[30] = g, _[31] = v) : v = _[31], _[32] !== D || _[33] !== y || _[34] !== R || _[35] !== G || _[36] !== n || _[37] !== v || _[38] !== W ? (C = (0, r.jsxs)(M, {
                mountId: y,
                initialNavigation: D,
                visible: W,
                setClientCovered: G,
                onRemove: R,
                children: [n, v]
            }), _[32] = D, _[33] = y, _[34] = R, _[35] = G, _[36] = n, _[37] = v, _[38] = W, _[39] = C) : C = _[39], C
        }

        function A(e) {
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
                c && (0, F.d)();
                let e = void 0 === d ? n() : d;
                e?.observeDocumentType("page"), e?.contentVisible()
            }, s[3] = l.current, s[4] = d, s[5] = n, s[6] = c, s[7] = a) : a = s[7], s[8] !== t || s[9] !== a ? (i = (0, r.jsx)(_.a, {
                requireVisibleAtPaint: !0,
                onCommit: t,
                onPaint: a
            }), s[8] = t, s[9] = a, s[10] = i) : i = s[10], i
        }

        function G(e) {
            let t = v.b.getDebugLoad(e ?? null)?.browserFirstContent;
            return {
                get: () => t,
                capture: a => {
                    a === e && null == t && (t = v.b.getDebugLoad(e ?? null)?.browserFirstContent)
                }
            }
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, i, s, l, d, u, m, x, v, j, _, y, I, F, A, P = (0, o.c)(92),
                    {
                        snapshot: L,
                        preparation: T,
                        enabled: E,
                        nonblocking: Z,
                        openIdentity: q,
                        pageId: V,
                        blockId: $,
                        firstContent: Q,
                        children: W
                    } = e,
                    R = void 0 !== Z && Z,
                    H = (0, c.y)(w.a),
                    J = (0, f.useId)(),
                    [K, X] = (0, f.useState)(null),
                    {
                        pageId: Y
                    } = (0, p.db)(),
                    ee = V ?? Y,
                    et = (0, c.z)(b.f),
                    ea = (0, c.z)(b.j),
                    er = (0, c.z)(b.k),
                    eo = (0, c.z)(b.h);
                P[0] !== et || P[1] !== eo || P[2] !== er || P[3] !== q || P[4] !== ee || P[5] !== ea ? (t = () => ({
                    openIdentity: q ?? ee,
                    generation: 0,
                    invalidated: !1,
                    pageId: ee,
                    accountId: et,
                    userId: ea,
                    localUserId: er,
                    accountUserId: eo,
                    browserFirstContent: G(ee)
                }), P[0] = et, P[1] = eo, P[2] = er, P[3] = q, P[4] = ee, P[5] = ea, P[6] = t) : t = P[6];
                let [ei, es] = (0, f.useState)(t), en = 0 === ei.generation ? J : `${J}-${ei.generation}`, el = null == q && 0 === ei.generation, ed = ei.pageId ?? "", ec = ei.accountId ?? "", eu = ei.userId ?? "";
                P[7] !== en || P[8] !== ed || P[9] !== ec || P[10] !== eu ? (a = {
                    mountId: en,
                    pageId: ed,
                    accountId: ec,
                    userId: eu
                }, P[7] = en, P[8] = ed, P[9] = ec, P[10] = eu, P[11] = a) : a = P[11];
                let ef = a,
                    em = (0, c.x)(null != L && O.d, ef),
                    ep = null == L || ei.invalidated || em ? void 0 : T,
                    eb = (0, f.useSyncExternalStore)(null == ep ? N : ep.subscribeInvalidation, null == ep ? U : ep.isInvalidated, U),
                    eh = (0, c.x)(null == L ? null : O.f, ef),
                    ex = (0, c.x)(null != L ? C.loadedSpacePageMetadata$ : void 0, ee ?? null),
                    eg = (0, c.x)(null != L && g.y, ef.pageId),
                    {
                        data: ev,
                        error: eC
                    } = (0, c.x)(null == L ? void 0 : C.spacePageQuery$, ef.pageId, {
                        enabled: !1
                    }) ?? {};
                P[12] !== et || P[13] !== eo || P[14] !== ei.accountId || P[15] !== ei.accountUserId || P[16] !== ei.localUserId || P[17] !== ei.pageId || P[18] !== ei.userId || P[19] !== eh?.failed || P[20] !== E || P[21] !== eC || P[22] !== eb || P[23] !== er || P[24] !== ex || P[25] !== ev || P[26] !== ee || P[27] !== L || P[28] !== ea || P[29] !== eg ? (i = null == L || eb || !E || ei.pageId !== ee || ei.accountId !== et || ei.userId !== ea || ei.localUserId !== er || ei.accountUserId !== eo || eg || ex?.view_only === !0 || ev?.metadata.view_only === !0 || ex?.deleted_at != null || ev?.metadata.deleted_at != null || ex?.access.can_read === !1 || ev?.metadata.access.can_read === !1 || eC instanceof S.FetchError && [401, 403, 404, 410].includes(eC.status) || eh?.failed === !0, P[12] = et, P[13] = eo, P[14] = ei.accountId, P[15] = ei.accountUserId, P[16] = ei.localUserId, P[17] = ei.pageId, P[18] = ei.userId, P[19] = eh?.failed, P[20] = E, P[21] = eC, P[22] = eb, P[23] = er, P[24] = ex, P[25] = ev, P[26] = ee, P[27] = L, P[28] = ea, P[29] = eg, P[30] = i) : i = P[30];
                let ej = i;
                null != q && (ei.openIdentity !== q || ei.pageId !== ee) ? es({
                    openIdentity: q,
                    generation: ei.generation + 1,
                    invalidated: !1,
                    pageId: ee,
                    accountId: et,
                    userId: ea,
                    localUserId: er,
                    accountUserId: eo,
                    browserFirstContent: G(ee)
                }) : ej && !ei.invalidated && es({
                    ...ei,
                    invalidated: !0
                }), P[31] !== H ? (s = (e, t) => {
                    H.set(O.e, e, !t)
                }, P[31] = H, P[32] = s) : s = P[32];
                let e_ = (0, k.a)(s);
                P[33] !== en || P[34] !== e_ ? (l = e => {
                    null != e && e_(en, null != e.querySelector("[data-page-ssr-snapshot]"))
                }, P[33] = en, P[34] = e_, P[35] = l) : l = P[35];
                let ew = (0, k.a)(l);
                P[36] !== en || P[37] !== e_ ? (d = (0, r.jsx)(M, {
                    mountId: en,
                    setClientCovered: e_,
                    visible: !1
                }), P[36] = en, P[37] = e_, P[38] = d) : d = P[38];
                let ey = d,
                    eI = !ei.invalidated && !ej && !em && null != L,
                    ek = ey;
                if (eI) {
                    if (R) {
                        let e, t, a;
                        P[39] !== ei.browserFirstContent.get || P[40] !== $ || P[41] !== V || P[42] !== Q || P[43] !== el || P[44] !== en || P[45] !== ee || P[46] !== e_ || P[47] !== ey ? (e = e => null == e || "status" in e ? ey : (0, r.jsx)(z, {
                            mountId: en,
                            getBrowserFirstContent: ei.browserFirstContent.get,
                            pageId: ee,
                            blockId: null == V ? void 0 : $ ?? null,
                            firstContent: Q,
                            initialNavigation: el,
                            snapshot: e,
                            setClientCovered: e_
                        }), P[39] = ei.browserFirstContent.get, P[40] = $, P[41] = V, P[42] = Q, P[43] = el, P[44] = en, P[45] = ee, P[46] = e_, P[47] = ey, P[48] = e) : e = P[48], P[49] !== L || P[50] !== e || P[51] !== ey ? (t = (0, r.jsx)(p.b, {
                            resolve: L,
                            errorElement: ey,
                            children: e
                        }), P[49] = L, P[50] = e, P[51] = ey, P[52] = t) : t = P[52], P[53] !== en || P[54] !== t || P[55] !== ey ? (a = (0, r.jsx)(f.Suspense, {
                            fallback: ey,
                            children: t
                        }, en), P[53] = en, P[54] = t, P[55] = ey, P[56] = a) : a = P[56], ek = a
                    } else if ("html" in L) {
                        let e, t = null == V ? void 0 : $ ?? null;
                        P[57] !== ei.browserFirstContent.get || P[58] !== Q || P[59] !== el || P[60] !== en || P[61] !== ee || P[62] !== e_ || P[63] !== L || P[64] !== t ? (e = (0, r.jsx)(z, {
                            mountId: en,
                            getBrowserFirstContent: ei.browserFirstContent.get,
                            pageId: ee,
                            blockId: t,
                            firstContent: Q,
                            initialNavigation: el,
                            snapshot: L,
                            setClientCovered: e_
                        }, en), P[57] = ei.browserFirstContent.get, P[58] = Q, P[59] = el, P[60] = en, P[61] = ee, P[62] = e_, P[63] = L, P[64] = t, P[65] = e) : e = P[65], ek = e
                    }
                }
                let eS = R && null != L ? ew : void 0,
                    eF = ei.invalidated || ej || em ? null : K;
                P[66] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, r.jsx)(h.a, {
                    fillParent: !0,
                    delay: !1,
                    debugName: "PageEditor"
                }), P[66] = u) : u = P[66], P[67] !== ei.browserFirstContent.capture || P[68] !== W ? (m = (0, r.jsx)(f.Suspense, {
                    fallback: u,
                    children: (0, r.jsx)(O.a, {
                        value: ei.browserFirstContent.capture,
                        children: W
                    })
                }), P[67] = ei.browserFirstContent.capture, P[68] = W, P[69] = m) : m = P[69], P[70] !== eF || P[71] !== m ? (x = (0, r.jsx)(O.c, {
                    value: eF,
                    children: m
                }), P[70] = eF, P[71] = m, P[72] = x) : x = P[72], P[73] !== en || P[74] !== x ? (v = (0, r.jsx)(O.b, {
                    value: en,
                    children: x
                }), P[73] = en, P[74] = x, P[75] = v) : v = P[75], P[76] !== eI || P[77] !== en || P[78] !== v ? (j = (0, r.jsx)(D, {
                    mountId: en,
                    coverEligible: eI,
                    children: v
                }), P[76] = eI, P[77] = en, P[78] = v, P[79] = j) : j = P[79];
                let eO = R ? B.a.PageSnapshotCover : "inset-0";
                return P[80] !== eO ? (_ = (0, n.b)("pointer-events-none absolute flex min-h-0 flex-col", eO), P[80] = eO, P[81] = _) : _ = P[81], P[82] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, r.jsx)("div", {
                    ref: X,
                    className: "pointer-events-auto shrink-0"
                }), P[82] = y) : y = P[82], P[83] !== ek ? (I = (0, r.jsx)("div", {
                    className: "relative min-h-0 flex-1",
                    children: ek
                }), P[83] = ek, P[84] = I) : I = P[84], P[85] !== _ || P[86] !== I ? (F = (0, r.jsxs)("div", {
                    className: _,
                    children: [y, I]
                }), P[85] = _, P[86] = I, P[87] = F) : F = P[87], P[88] !== eS || P[89] !== j || P[90] !== F ? (A = (0, r.jsxs)("div", {
                    ref: eS,
                    className: "relative flex h-full min-h-0 flex-1 flex-col",
                    children: [j, F]
                }), P[88] = eS, P[89] = j, P[90] = F, P[91] = A) : A = P[91], A
            }
        })
    }),
    EBQV: (function(t) {
        t.exports = e.ir("/cdn/assets/dotnet.js").then(function(e) {
            return e
        })
    })
};
import {
    __webpack_require__ as e
} from "./633146.be60f96fcf.js";
import * as t from "./418851.d43ef6e51c.js";
e.C(t);
import * as a from "./109308.2094c16514.js";
e.C(a);
import * as r from "./399565.78e1c0aa0d.js";
e.C(r);
import * as o from "./257798.7e03f1e3e2.js";
e.C(o);
import * as i from "./447351.b188109392.js";
e.C(i);
import * as s from "./617936.fb76eb2727.js";
e.C(s);
import * as n from "./807489.9c1a8ccf71.js";
e.C(n);
import * as l from "./337882.5c43a2c90b.js";
e.C(l);
import * as d from "./955979.9ae2962bd4.js";
e.C(d);
import * as c from "./646436.b525bfd8f0.js";
e.C(c);
import * as u from "./7078.a82238bfec.js";
e.C(u);
import * as f from "./200429.3bcaa139a4.js";
e.C(f);
import * as m from "./698524.3de98ac6af.js";
e.C(m);
import * as p from "./956483.227ec74d56.js";
e.C(p);
import * as b from "./87162.36edabe123.js";
e.C(b);
import * as h from "./396705.12275a5eb6.js";
e.C(h);
import * as x from "./155568.b3f888f917.js";
e.C(x);
import * as g from "./731863.367082aec0.js";
e.C(g);
import * as v from "./767086.1a336b6bc5.js";
e.C(v);
import * as C from "./76629.93a69b821a.js";
e.C(C);
import * as j from "./514085.fe0c9f50e5.js";
e.C(j);
import * as _ from "./204542.f3712a1345.js";
e.C(_);
import * as w from "./226913.dd4de34d8f.js";
e.C(w);
import * as y from "./753405.4bffba797b.js";
e.C(y);
import * as I from "./321957.745ede45f0.js";
e.C(I);
import * as k from "./585419.38ade943bd.js";
e.C(k);
import * as S from "./843292.b508aacb4d.js";
e.C(S);
import * as F from "./353230.c6d909aef3.js";
e.C(F);
import * as O from "./882456.524fc3f2c6.js";
e.C(O);
import * as B from "./736970.9fcd6ddfcb.js";
e.C(B);
import * as N from "./909395.7dc04db4e2.js";
e.C(N);
import * as U from "./212487.9cfe25039b.js";
e.C(U);
import * as D from "./17983.7d25e2c880.js";
e.C(D);
import * as M from "./704809.306dac010b.js";
e.C(M);
import * as z from "./413109.b4bfe81a07.js";
e.C(z);
import * as A from "./920484.c007caf815.js";
e.C(A);
import * as G from "./311330.b64a285485.js";
e.C(G);
import * as P from "./787702.d1ea24419c.js";
e.C(P);
var L = e(e.s = "cnwD"),
    T = L.a,
    E = L.b;
export {
    T as
    default, E as shouldRevalidate
};