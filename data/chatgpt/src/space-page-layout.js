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
            m = a("M2H2"),
            p = a("C8z7"),
            f = a("aFW8"),
            b = a("vnV1"),
            h = a("IeFV"),
            x = a("OWtl"),
            g = a("OMIV"),
            v = a("hC2y"),
            C = a("AXDI"),
            j = (0, r.hb)(function() {
                let e, t, a, j, _, w, y, I, k = (0, i.c)(40),
                    S = (0, s.y)(x.a),
                    F = (0, r.X)(),
                    {
                        pathname: B
                    } = F,
                    {
                        pageId: O
                    } = (0, r.cb)(),
                    N = (0, r.W)(),
                    U = "inAppOpen" in N && N.inAppOpen,
                    z = (0, s.z)(m.a),
                    D = (0, s.z)(l.f),
                    M = (0, s.z)(l.j),
                    A = (0, s.z)(l.k),
                    G = (0, s.z)(l.h);
                k[0] !== D || k[1] !== G || k[2] !== A || k[3] !== M ? (e = JSON.stringify([D, M, A, G]), k[0] = D, k[1] = G, k[2] = A, k[3] = M, k[4] = e) : e = k[4];
                let L = e;
                k[5] !== U || k[6] !== z || k[7] !== F || k[8] !== S ? (t = () => {
                    let e = (0, h.a)(F),
                        t = U && z && null != e ? (0, p.a)(S, document, e) : void 0;
                    return {
                        preparation: t,
                        snapshot: t?.takeSnapshot() ?? null
                    }
                }, k[5] = U, k[6] = z, k[7] = F, k[8] = S, k[9] = t) : t = k[9];
                let P = t;
                k[10] !== P || k[11] !== L || k[12] !== O ? (a = () => ({
                    pageId: O,
                    actor: L,
                    ...P()
                }), k[10] = P, k[11] = L, k[12] = O, k[13] = a) : a = k[13];
                let [q, E] = (0, n.useState)(a), T = q;
                if (q.pageId !== O || q.actor !== L) {
                    let e, t;
                    k[14] !== P || k[15] !== q.pageId || k[16] !== O ? (e = q.pageId !== O ? P() : {
                        preparation: void 0,
                        snapshot: null
                    }, k[14] = P, k[15] = q.pageId, k[16] = O, k[17] = e) : e = k[17], k[18] !== L || k[19] !== O || k[20] !== e ? (t = {
                        pageId: O,
                        actor: L,
                        ...e
                    }, k[18] = L, k[19] = O, k[20] = e, k[21] = t) : t = k[21], E(T = t)
                }
                let Z = U ? T.snapshot : N.spacePageSnapshot,
                    V = U || N.nonblockingSsr,
                    W = (0, s.x)(u.G, B),
                    $ = (0, s.z)(u.A),
                    R = (0, s.x)(g.e, "4063423961");
                k[22] === Symbol.for("react.memo_cache_sentinel") ? (j = {
                    enabled: !1
                }, k[22] = j) : j = k[22];
                let Q = (0, s.z)(b.d, j);
                k[23] === Symbol.for("react.memo_cache_sentinel") ? (_ = (0, o.jsx)(d.a, {
                    routeFallback: !0,
                    fillParent: !0
                }), k[23] = _) : _ = k[23], k[24] !== W ? (w = (0, o.jsx)(C.a, {
                    fallback: _,
                    children: W ? (0, o.jsx)(f.b, {
                        pageRoute: !0,
                        children: (0, o.jsx)(r.m, {})
                    }) : (0, o.jsx)(v.e, {
                        allowLocal: !0
                    })
                }), k[24] = W, k[25] = w) : w = k[25];
                let H = w,
                    X = U ? T.preparation : void 0,
                    J = U ? O : void 0;
                return k[26] !== R || k[27] !== U || k[28] !== z || k[29] !== F || k[30] !== $ || k[31] !== Q ? (y = (!U || z && null != (0, h.a)(F)) && "disabled" !== $ && (!R || null == Q.error && Q.data?.status !== "age_restricted"), k[26] = R, k[27] = U, k[28] = z, k[29] = F, k[30] = $, k[31] = Q, k[32] = y) : y = k[32], k[33] !== H || k[34] !== V || k[35] !== Z || k[36] !== X || k[37] !== J || k[38] !== y ? (I = (0, o.jsx)(c.a, {
                    snapshot: Z,
                    preparation: X,
                    nonblocking: V,
                    openIdentity: J,
                    enabled: y,
                    children: H
                }), k[33] = H, k[34] = V, k[35] = Z, k[36] = X, k[37] = J, k[38] = y, k[39] = I) : I = k[39], I
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
            let t, a, i, s, n, l, d, c, u, m, p, f, b, h, x, g, v, C, j, _, w = (0, o.c)(21);
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
            }), w[7] = c, w[8] = u) : (c = w[7], u = w[8]), w[9] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, r.jsxs)("filter", {
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
            }), w[9] = m) : m = w[9], w[10] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, r.jsxs)("filter", {
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
            }), w[10] = p) : p = w[10], w[11] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, r.jsxs)("filter", {
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
            }), w[11] = f) : f = w[11], w[12] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, r.jsxs)("radialGradient", {
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
                children: [m, p, f, b, h, x, g, v, C, (0, r.jsxs)("linearGradient", {
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
        var r = a("uWy0"),
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
            m = a("sCki"),
            p = a("gWf7"),
            f = a("OH6Z"),
            b = a("FIwD"),
            h = a("W3js"),
            x = a("jVpT"),
            g = a("dOJ8"),
            v = a("xzYM"),
            C = a("DctQ");
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
                        o = "title" === e ? (0, c.b)(t) : "caption" === e ? (0, u.b)(t) : "label" === e ? (0, m.b)(t) : (0, d.b)(r, a.inline);
                    return {
                        tag: o.as,
                        attributes: (0, p.b)(o, a.theme)
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
    IhXv: (function(e, t, a) {
        a.d(t, {
            a: () => D
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
            m = a("zd8w"),
            p = a("oyxz"),
            f = a("rEML"),
            b = a("Cslg"),
            h = a("HLic"),
            x = a("tmUE"),
            g = a("GhgU"),
            v = a("e1xH"),
            C = a("cVcC"),
            j = a("tv8P"),
            _ = a("NnV7"),
            w = a("dJBt"),
            y = a("OWtl"),
            I = a("OMIV"),
            k = a("TnSu"),
            S = a("bIvi"),
            F = a("eShZ"),
            B = a("WrMt"),
            O = a("YCKz"),
            N = a("kGAC");
        let U = () => d(),
            z = () => !1;

        function D(e) {
            let t, a, i, s, l, d, u, p, g, C, _, w, I, k, B, D, L, q, E = (0, o.c)(94),
                {
                    snapshot: T,
                    preparation: Z,
                    enabled: V,
                    nonblocking: W,
                    openIdentity: $,
                    pageId: R,
                    blockId: Q,
                    firstContent: H,
                    children: X
                } = e,
                J = void 0 !== W && W,
                K = (0, c.y)(y.a),
                Y = (0, m.useId)(),
                [ee, et] = (0, m.useState)(null),
                {
                    pageId: ea
                } = (0, f.cb)(),
                er = R ?? ea,
                eo = (0, c.z)(b.f),
                ei = (0, c.z)(b.j),
                es = (0, c.z)(b.k),
                en = (0, c.z)(b.h);
            E[0] !== eo || E[1] !== en || E[2] !== es || E[3] !== $ || E[4] !== er || E[5] !== ei ? (t = () => ({
                openIdentity: $ ?? er,
                generation: 0,
                invalidated: !1,
                pageId: er,
                accountId: eo,
                userId: ei,
                localUserId: es,
                accountUserId: en,
                browserFirstContent: P(er)
            }), E[0] = eo, E[1] = en, E[2] = es, E[3] = $, E[4] = er, E[5] = ei, E[6] = t) : t = E[6];
            let [el, ed] = (0, m.useState)(t), ec = 0 === el.generation ? Y : `${Y}-${el.generation}`, eu = null == $ && 0 === el.generation, em = el.pageId ?? "", ep = el.accountId ?? "", ef = el.userId ?? "";
            E[7] !== ec || E[8] !== em || E[9] !== ep || E[10] !== ef ? (a = {
                mountId: ec,
                pageId: em,
                accountId: ep,
                userId: ef
            }, E[7] = ec, E[8] = em, E[9] = ep, E[10] = ef, E[11] = a) : a = E[11];
            let eb = a,
                eh = (0, c.x)(null != T && O.d, eb),
                ex = null == T || el.invalidated || eh ? void 0 : Z,
                eg = (0, m.useSyncExternalStore)(null == ex ? U : ex.subscribeInvalidation, null == ex ? z : ex.isInvalidated, z),
                ev = (0, c.x)(null == T ? null : O.f, eb),
                eC = (0, c.x)(null != T ? j.loadedSpacePageMetadata$ : void 0, er ?? null),
                ej = (0, c.x)(null != T && v.z, eb.pageId),
                {
                    data: e_,
                    error: ew
                } = (0, c.x)(null == T ? void 0 : j.spacePageQuery$, eb.pageId, {
                    enabled: !1
                }) ?? {};
            E[12] !== eo || E[13] !== en || E[14] !== el.accountId || E[15] !== el.accountUserId || E[16] !== el.localUserId || E[17] !== el.pageId || E[18] !== el.userId || E[19] !== ev?.failed || E[20] !== V || E[21] !== ew || E[22] !== eg || E[23] !== es || E[24] !== eC || E[25] !== e_ || E[26] !== er || E[27] !== T || E[28] !== ei || E[29] !== ej ? (i = null == T || eg || !V || el.pageId !== er || el.accountId !== eo || el.userId !== ei || el.localUserId !== es || el.accountUserId !== en || ej || eC?.view_only === !0 || e_?.metadata.view_only === !0 || eC?.deleted_at != null || e_?.metadata.deleted_at != null || eC?.access.can_read === !1 || e_?.metadata.access.can_read === !1 || ew instanceof F.FetchError && [401, 403, 404, 410].includes(ew.status) || ev?.failed === !0, E[12] = eo, E[13] = en, E[14] = el.accountId, E[15] = el.accountUserId, E[16] = el.localUserId, E[17] = el.pageId, E[18] = el.userId, E[19] = ev?.failed, E[20] = V, E[21] = ew, E[22] = eg, E[23] = es, E[24] = eC, E[25] = e_, E[26] = er, E[27] = T, E[28] = ei, E[29] = ej, E[30] = i) : i = E[30];
            let ey = i;
            null != $ && (el.openIdentity !== $ || el.pageId !== er) ? ed({
                openIdentity: $,
                generation: el.generation + 1,
                invalidated: !1,
                pageId: er,
                accountId: eo,
                userId: ei,
                localUserId: es,
                accountUserId: en,
                browserFirstContent: P(er)
            }) : ey && !el.invalidated && ed({
                ...el,
                invalidated: !0
            }), E[31] !== K ? (s = (e, t) => {
                K.set(O.e, e, !t)
            }, E[31] = K, E[32] = s) : s = E[32];
            let eI = (0, S.a)(s);
            E[33] !== ec || E[34] !== eI ? (l = e => {
                null != e && eI(ec, null != e.querySelector("[data-page-ssr-snapshot]"))
            }, E[33] = ec, E[34] = eI, E[35] = l) : l = E[35];
            let ek = (0, S.a)(l);
            E[36] !== ec || E[37] !== eI ? (d = (0, r.jsx)(A, {
                mountId: ec,
                setClientCovered: eI,
                visible: !1
            }), E[36] = ec, E[37] = eI, E[38] = d) : d = E[38];
            let eS = d,
                eF = !el.invalidated && !ey && !eh && null != T,
                eB = eS;
            if (eF) {
                if (J) {
                    let e, t, a;
                    E[39] !== el.browserFirstContent.get || E[40] !== Q || E[41] !== R || E[42] !== H || E[43] !== eu || E[44] !== ec || E[45] !== er || E[46] !== eI || E[47] !== eS ? (e = e => null == e || "status" in e ? eS : (0, r.jsx)(G, {
                        mountId: ec,
                        getBrowserFirstContent: el.browserFirstContent.get,
                        pageId: er,
                        blockId: null == R ? void 0 : Q ?? null,
                        firstContent: H,
                        initialNavigation: eu,
                        snapshot: e,
                        setClientCovered: eI
                    }), E[39] = el.browserFirstContent.get, E[40] = Q, E[41] = R, E[42] = H, E[43] = eu, E[44] = ec, E[45] = er, E[46] = eI, E[47] = eS, E[48] = e) : e = E[48], E[49] !== T || E[50] !== e || E[51] !== eS ? (t = (0, r.jsx)(f.b, {
                        resolve: T,
                        errorElement: eS,
                        children: e
                    }), E[49] = T, E[50] = e, E[51] = eS, E[52] = t) : t = E[52], E[53] !== ec || E[54] !== t || E[55] !== eS ? (a = (0, r.jsx)(m.Suspense, {
                        fallback: eS,
                        children: t
                    }, ec), E[53] = ec, E[54] = t, E[55] = eS, E[56] = a) : a = E[56], eB = a
                } else if ("html" in T) {
                    let e, t = null == R ? void 0 : Q ?? null;
                    E[57] !== el.browserFirstContent.get || E[58] !== H || E[59] !== eu || E[60] !== ec || E[61] !== er || E[62] !== eI || E[63] !== T || E[64] !== t ? (e = (0, r.jsx)(G, {
                        mountId: ec,
                        getBrowserFirstContent: el.browserFirstContent.get,
                        pageId: er,
                        blockId: t,
                        firstContent: H,
                        initialNavigation: eu,
                        snapshot: T,
                        setClientCovered: eI
                    }, ec), E[57] = el.browserFirstContent.get, E[58] = H, E[59] = eu, E[60] = ec, E[61] = er, E[62] = eI, E[63] = T, E[64] = t, E[65] = e) : e = E[65], eB = e
                }
            }
            let eO = J && null != T ? ek : void 0;
            E[66] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, n.b)("surface-e8iyms", "relative flex h-full min-h-0 flex-1 flex-col"), E[66] = u) : u = E[66], E[67] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, r.jsx)(h.a, {
                "aria-hidden": "true",
                "data-page-loading-spinner": "",
                className: (0, n.b)("indicator-Wq6R_i", "pointer-events-none absolute inset-x-0 z-1 top-[var(--page-loading-top,0px)] bottom-0 m-auto icon-lg animate-spin text-secondary [animation-timing-function:linear] motion-reduce:[animation-play-state:paused]")
            }), E[67] = p) : p = E[67];
            let eN = el.invalidated || ey || eh ? null : ee;
            E[68] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, r.jsx)(x.a, {
                routeFallback: !0,
                fillParent: !0,
                debugName: "PageEditor"
            }), E[68] = g) : g = E[68], E[69] !== el.browserFirstContent.capture || E[70] !== X ? (C = (0, r.jsx)(m.Suspense, {
                fallback: g,
                children: (0, r.jsx)(O.a, {
                    value: el.browserFirstContent.capture,
                    children: X
                })
            }), E[69] = el.browserFirstContent.capture, E[70] = X, E[71] = C) : C = E[71], E[72] !== eN || E[73] !== C ? (_ = (0, r.jsx)(O.c, {
                value: eN,
                children: C
            }), E[72] = eN, E[73] = C, E[74] = _) : _ = E[74], E[75] !== ec || E[76] !== _ ? (w = (0, r.jsx)(O.b, {
                value: ec,
                children: _
            }), E[75] = ec, E[76] = _, E[77] = w) : w = E[77], E[78] !== eF || E[79] !== ec || E[80] !== w ? (I = (0, r.jsx)(M, {
                mountId: ec,
                coverEligible: eF,
                children: w
            }), E[78] = eF, E[79] = ec, E[80] = w, E[81] = I) : I = E[81];
            let eU = J ? N.a.PageSnapshotCover : "inset-0";
            return E[82] !== eU ? (k = (0, n.b)("pointer-events-none absolute flex min-h-0 flex-col", eU), E[82] = eU, E[83] = k) : k = E[83], E[84] === Symbol.for("react.memo_cache_sentinel") ? (B = (0, r.jsx)("div", {
                ref: et,
                className: "pointer-events-auto shrink-0"
            }), E[84] = B) : B = E[84], E[85] !== eB ? (D = (0, r.jsx)("div", {
                className: "relative min-h-0 flex-1",
                children: eB
            }), E[85] = eB, E[86] = D) : D = E[86], E[87] !== k || E[88] !== D ? (L = (0, r.jsxs)("div", {
                className: k,
                children: [B, D]
            }), E[87] = k, E[88] = D, E[89] = L) : L = E[89], E[90] !== eO || E[91] !== I || E[92] !== L ? (q = (0, r.jsxs)("div", {
                ref: eO,
                className: u,
                children: [p, I, L]
            }), E[90] = eO, E[91] = I, E[92] = L, E[93] = q) : q = E[93], q
        }

        function M(e) {
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
                    setClientCovered: m,
                    onRemove: p,
                    children: f
                } = e,
                b = void 0 !== d && d;
            s[0] !== b || s[1] !== l || s[2] !== p || s[3] !== m || s[4] !== u ? (t = e => {
                if (null != e) return m(l, u), () => {
                    u && b && (0, B.e)(), m(l, !1), u && p?.(e)
                }
            }, s[0] = b, s[1] = l, s[2] = p, s[3] = m, s[4] = u, s[5] = t) : t = s[5];
            let h = t,
                x = (0, c.x)(I.e, "2163293173"),
                g = u ? "covered" : "uncovered",
                v = x ? "[scrollbar-gutter:stable_both-edges]" : "scrollbar-stable";
            s[6] !== v ? (a = (0, n.b)("pointer-events-auto absolute inset-0 overflow-x-hidden overflow-y-auto bg-surface scrollbar-on-hover", v), s[6] = v, s[7] = a) : a = s[7];
            let C = !u,
                j = u || void 0,
                _ = u ? f : null;
            return s[8] !== h || s[9] !== g || s[10] !== a || s[11] !== C || s[12] !== j || s[13] !== _ ? (i = (0, r.jsx)("div", {
                ref: h,
                className: a,
                hidden: C,
                "data-page-ssr-snapshot": j,
                children: _
            }, g), s[8] = h, s[9] = g, s[10] = a, s[11] = C, s[12] = j, s[13] = _, s[14] = i) : i = s[14], i
        }

        function G(e) {
            let t, a, n, l, d, f, h, x, v, C, j = (0, o.c)(40),
                {
                    mountId: w,
                    getBrowserFirstContent: I,
                    pageId: F,
                    blockId: B,
                    firstContent: U,
                    initialNavigation: z,
                    snapshot: D,
                    setClientCovered: M
                } = e,
                G = (0, c.y)(y.a),
                P = (0, m.useRef)(null),
                q = (0, c.z)(b.f),
                E = (0, c.z)(b.j);
            j[0] !== w || j[1] !== D.accountId || j[2] !== D.pageId || j[3] !== D.userId ? (t = {
                mountId: w,
                pageId: D.pageId,
                accountId: D.accountId,
                userId: D.userId
            }, j[0] = w, j[1] = D.accountId, j[2] = D.pageId, j[3] = D.userId, j[4] = t) : t = j[4];
            let T = (0, c.x)(O.f, t),
                Z = F !== D.pageId || q !== D.accountId || E !== D.userId || T?.failed === !0,
                [V, W] = (0, m.useState)(!1),
                $ = null != T && !T.failed && T.sequence >= D.throughSequence;
            !V && $ && W(!0);
            let R = !Z && !V && !$;
            j[5] !== B || j[6] !== w || j[7] !== G || j[8] !== D.accountId || j[9] !== D.pageId || j[10] !== D.throughSequence || j[11] !== D.userId ? (a = e => {
                let t = (0, u.d)(`page://${D.pageId}${e.ownerDocument.defaultView?.location.hash??""}`);
                if (null != B || void 0 === B && t?.kind === "page" && null != t.blockId) return;
                let a = G.get(O.f, {
                    mountId: w,
                    pageId: D.pageId,
                    accountId: D.accountId,
                    userId: D.userId
                });
                !a?.failed && null != a && a.sequence >= D.throughSequence && G.get(b.f) === D.accountId && G.get(b.j) === D.userId && a.restoreScroll?.(e.scrollTop)
            }, j[5] = B, j[6] = w, j[7] = G, j[8] = D.accountId, j[9] = D.pageId, j[10] = D.throughSequence, j[11] = D.userId, j[12] = a) : a = j[12];
            let Q = (0, S.a)(a);
            return j[13] !== U || j[14] !== I || j[15] !== z || j[16] !== R ? (n = R && (0, r.jsx)(L, {
                getBrowserFirstContent: I,
                content: P,
                firstContent: U,
                initialNavigation: z
            }), j[13] = U, j[14] = I, j[15] = z, j[16] = R, j[17] = n) : n = j[17], j[18] !== D.emoji ? (l = null != D.emoji && (0, r.jsx)("span", {
                className: "flex size-16 items-center border border-transparent",
                children: (0, r.jsx)(k.a, {
                    emoji: D.emoji,
                    size: "large"
                })
            }), j[18] = D.emoji, j[19] = l) : l = j[19], j[20] !== D.title ? (d = D.title || (0, r.jsx)(p.a, {
                ..._.c.untitled
            }), j[20] = D.title, j[21] = d) : d = j[21], j[22] !== d ? (f = (0, r.jsx)("h1", {
                className: `${N.a.PageTitle} font-semibold break-words text-default`,
                children: d
            }), j[22] = d, j[23] = f) : f = j[23], j[24] !== l || j[25] !== f ? (h = (0, r.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2",
                children: [l, f]
            }), j[24] = l, j[25] = f, j[26] = h) : h = j[26], j[27] !== D.html ? (x = (0, r.jsx)("div", {
                "data-page-document-selection": !0,
                className: "isolate col-[wide] min-w-0",
                children: (0, r.jsx)("div", {
                    className: `${i.a.root} ${N.a.PageDocumentTheme} px-0`,
                    style: s.a,
                    children: (0, r.jsx)("div", {
                        ref: P,
                        className: `ProseMirror ${i.a.content} ${N.a.PageDocument} ${N.a.PagePreview}`,
                        contentEditable: !1,
                        "data-page-static-preview": !0,
                        dangerouslySetInnerHTML: {
                            __html: D.html
                        }
                    })
                })
            }), j[27] = D.html, j[28] = x) : x = j[28], j[29] !== h || j[30] !== x ? (v = (0, r.jsx)(g.a, {
                heading: h,
                children: x
            }), j[29] = h, j[30] = x, j[31] = v) : v = j[31], j[32] !== z || j[33] !== w || j[34] !== Q || j[35] !== M || j[36] !== n || j[37] !== v || j[38] !== R ? (C = (0, r.jsxs)(A, {
                mountId: w,
                initialNavigation: z,
                visible: R,
                setClientCovered: M,
                onRemove: Q,
                children: [n, v]
            }), j[32] = z, j[33] = w, j[34] = Q, j[35] = M, j[36] = n, j[37] = v, j[38] = R, j[39] = C) : C = j[39], C
        }

        function L(e) {
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
            }, s[3] = l.current, s[4] = d, s[5] = n, s[6] = c, s[7] = a) : a = s[7], s[8] !== t || s[9] !== a ? (i = (0, r.jsx)(w.a, {
                requireVisibleAtPaint: !0,
                onCommit: t,
                onPaint: a
            }), s[8] = t, s[9] = a, s[10] = i) : i = s[10], i
        }

        function P(e) {
            let t = C.b.getDebugLoad(e ?? null)?.browserFirstContent;
            return {
                get: () => t,
                capture: a => {
                    a === e && null == t && (t = C.b.getDebugLoad(e ?? null)?.browserFirstContent)
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
} from "./633146.332c5da428.js";
import * as t from "./418851.3878fbfa64.js";
e.C(t);
import * as a from "./109308.4b30101b7c.js";
e.C(a);
import * as r from "./399565.de450ac543.js";
e.C(r);
import * as o from "./257798.b061e3b37a.js";
e.C(o);
import * as i from "./447351.690fba1ae5.js";
e.C(i);
import * as s from "./617936.c6f9e1ebfb.js";
e.C(s);
import * as n from "./807489.2ba5c6d996.js";
e.C(n);
import * as l from "./337882.799b00b0f3.js";
e.C(l);
import * as d from "./955979.eaf8541a67.js";
e.C(d);
import * as c from "./646436.611d2d0d1b.js";
e.C(c);
import * as u from "./7078.691a92af09.js";
e.C(u);
import * as m from "./200429.336411f62e.js";
e.C(m);
import * as p from "./698524.e12b58b33f.js";
e.C(p);
import * as f from "./956483.2514992fd3.js";
e.C(f);
import * as b from "./87162.1f25d59c9c.js";
e.C(b);
import * as h from "./396705.3e09ec2928.js";
e.C(h);
import * as x from "./155568.b02a981797.js";
e.C(x);
import * as g from "./731863.9e2b15b813.js";
e.C(g);
import * as v from "./767086.6cceb40294.js";
e.C(v);
import * as C from "./76629.0f65023578.js";
e.C(C);
import * as j from "./226913.c039047be5.js";
e.C(j);
import * as _ from "./753405.4bffba797b.js";
e.C(_);
import * as w from "./321957.745ede45f0.js";
e.C(w);
import * as y from "./585419.38ade943bd.js";
e.C(y);
import * as I from "./843292.b508aacb4d.js";
e.C(I);
import * as k from "./353230.bd7d884f9e.js";
e.C(k);
import * as S from "./882456.b048d73b2c.js";
e.C(S);
import * as F from "./266281.18571673eb.js";
e.C(F);
import * as B from "./909395.7dc04db4e2.js";
e.C(B);
import * as O from "./212487.9cfe25039b.js";
e.C(O);
import * as N from "./17983.965f306442.js";
e.C(N);
import * as U from "./704809.1a3949c6ab.js";
e.C(U);
import * as z from "./413109.b4bfe81a07.js";
e.C(z);
import * as D from "./920484.0f476298da.js";
e.C(D);
import * as M from "./311330.e70f02982b.js";
e.C(M);
import * as A from "./787702.09c86a0d38.js";
e.C(A);
var G = e(e.s = "cnwD"),
    L = G.a,
    P = G.b;
export {
    L as
    default, P as shouldRevalidate
};