import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    K5 as n,
    Xh as r,
    q5 as i,
    qh as a
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as o,
    Vn as s,
    wn as c
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    D8 as l,
    E8 as u,
    O8 as d,
    k8 as f
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Rv as p,
    zv as m
} from "./30901919-s8bko9nrkqwv6i4f.js";
var h, g, _, v, y, b, x, S, C = e((() => {
        h = `webp`, g = 1279, _ = `srgb`, v = `uchar`, y = `4:2:0`, b = {
            width: 1279,
            height: 853
        }, x = `/cdn/assets/og-template-blue-keavxsig.webp`, S = {
            format: h,
            width: g,
            height: 853,
            space: _,
            channels: 3,
            depth: v,
            density: 72,
            chromaSubsampling: y,
            isProgressive: !1,
            isPalette: !1,
            hasProfile: !1,
            hasAlpha: !1,
            autoOrient: b,
            src: x
        }
    })),
    w, T, E, D, O, k, A, j, M = e((() => {
        w = `webp`, T = 1280, E = `srgb`, D = `uchar`, O = `4:2:0`, k = {
            width: 1280,
            height: 853
        }, A = `/cdn/assets/og-template-multicolor-oe9eg1t0.webp`, j = {
            format: w,
            width: T,
            height: 853,
            space: E,
            channels: 3,
            depth: D,
            density: 72,
            chromaSubsampling: O,
            isProgressive: !1,
            isPalette: !1,
            hasProfile: !1,
            hasAlpha: !1,
            autoOrient: k,
            src: A
        }
    }));

function N(e, t, n) {
    let r = t.firstChild;
    if (r == null) return ``;
    let i = document.createRange();
    if (i.selectNodeContents(r), i.getBoundingClientRect().width <= n) return e;
    let a = Array.from(new Intl.Segmenter(void 0, {
        granularity: `word`
    }).segment(e));
    for (let {
            index: t,
            segment: o
        }
        of a.reverse()) {
        let a = e.slice(0, t + o.length).trimEnd();
        if (i.setEnd(r, a.length), i.getBoundingClientRect().width <= n) return a
    }
    return ``
}

function P(e) {
    "use forget";
    let t = (0, I.c)(30),
        {
            text: r,
            title: i,
            titleLayout: o,
            templateName: s,
            className: c
        } = e,
        l;
    t[0] !== r || t[1] !== o ? (l = r?.trim() || (o ? `` : `ChatGPT`), t[0] = r, t[1] = o, t[2] = l) : l = t[2];
    let f = l,
        m;
    t[3] === i ? m = t[4] : (m = i?.trim() || `ChatGPT`, t[3] = i, t[4] = m);
    let h = m,
        g = o === `full` || o === `full_cta`,
        _ = s === `plain` ? null : z[s],
        [v, y] = (0, L.useState)(_ == null),
        [b, x] = (0, L.useState)(null),
        S = b?.title === h && b?.layout === o,
        C = (0, L.useRef)(null),
        w = (0, L.useRef)(null),
        T = (0, L.useRef)(null),
        [E, D] = (0, L.useState)(null),
        O = E?.source === h && E.layout === o ? E.text : h,
        k, A;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (k = () => {
        C.current?.complete && C.current.naturalWidth > 0 && y(!0)
    }, A = [], t[5] = k, t[6] = A) : (k = t[5], A = t[6]), (0, L.useEffect)(k, A);
    let j, M;
    t[7] !== h || t[8] !== v || t[9] !== o ? (j = () => {
        if (!v) return;
        let e = !1,
            t = null;
        return (async () => {
            let n = C.current;
            if (n != null && typeof n.decode == `function` && await n.decode().catch(F), await document.fonts?.ready, e) return;
            let r = w.current,
                i = T.current;
            r != null && i != null && D({
                source: h,
                layout: o,
                text: N(h, i, r.clientWidth)
            }), t = requestAnimationFrame(() => {
                t = requestAnimationFrame(() => {
                    e || x({
                        title: h,
                        layout: o
                    })
                })
            })
        })(), () => {
            e = !0, t != null && cancelAnimationFrame(t)
        }
    }, M = [v, h, o], t[7] = h, t[8] = v, t[9] = o, t[10] = j, t[11] = M) : (j = t[10], M = t[11]), (0, L.useEffect)(j, M);
    let P = g ? `bg-white` : _ == null ? `bg-token-bg-tertiary` : `bg-[#f7f7f4]`,
        V;
    t[12] !== c || t[13] !== P ? (V = n(`font-oai relative m-0 box-border h-[400px] w-[600px] overflow-hidden`, P, c), t[12] = c, t[13] = P, t[14] = V) : V = t[14];
    let H;
    t[15] === S ? H = t[16] : (H = S ? {
        [u]: `true`
    } : {}, t[15] = S, t[16] = H);
    let U;
    t[17] === _ ? U = t[18] : (U = _ != null && (0, R.jsx)(`img`, {
        ref: C,
        src: _,
        alt: ``,
        className: `absolute inset-0 block h-full w-full object-cover`,
        onLoad: () => y(!0)
    }), t[17] = _, t[18] = U);
    let W;
    t[19] !== f || t[20] !== h || t[21] !== g || t[22] !== o || t[23] !== O ? (W = o ? (0, R.jsxs)(`div`, {
        className: n(`absolute flex flex-col overflow-hidden bg-white text-black`, g ? `inset-0 px-9 pt-16 pb-4` : `start-[9%] end-[9%] top-[10%] bottom-[10%] rounded-[40px] px-7 pt-7 pb-5 shadow-[0_7px_27px_rgba(0,0,0,0.05)]`),
        children: [(0, R.jsxs)(`div`, {
            className: `relative min-h-0 flex-1 overflow-hidden`,
            children: [(0, R.jsxs)(`h1`, {
                ref: w,
                dir: `auto`,
                "aria-label": h,
                className: n(`relative min-h-[1.4em] overflow-hidden text-start leading-[1.4] font-bold tracking-[-0.72px] whitespace-nowrap`, g ? `text-[30px]` : `text-[28px]`),
                children: [(0, R.jsx)(`span`, {
                    children: O
                }), (0, R.jsx)(`span`, {
                    ref: T,
                    "aria-hidden": `true`,
                    className: `invisible absolute whitespace-nowrap`,
                    children: h
                })]
            }), (0, R.jsx)(`div`, {
                dir: `auto`,
                className: n(`text-start leading-[1.4] font-normal tracking-[-0.72px] whitespace-pre-line [overflow-wrap:anywhere]`, g ? `mt-4 text-[32px]` : `mt-2 text-[28px]`),
                children: f
            }), (0, R.jsx)(`div`, {
                "aria-hidden": `true`,
                className: `pointer-events-none absolute inset-x-0 bottom-0 h-[90px] bg-gradient-to-b from-transparent to-white`
            })]
        }), (0, R.jsxs)(`div`, {
            className: n(`mt-3 flex shrink-0 items-center justify-between`, g && `h-14`),
            children: [g ? (0, R.jsxs)(`div`, {
                className: `flex items-center gap-3`,
                children: [(0, R.jsx)(a, {
                    className: `size-[42px]`
                }), (0, R.jsx)(d, {
                    className: `h-[28px] w-[128px]`
                })]
            }) : (0, R.jsxs)(R.Fragment, {
                children: [(0, R.jsx)(d, {
                    className: `h-[18px] w-[83px]`
                }), (0, R.jsx)(a, {
                    className: `size-[26px]`
                })]
            }), o === `full_cta` && (0, R.jsx)(`div`, {
                "aria-hidden": `true`,
                className: `flex size-14 items-center justify-center rounded-full bg-black text-white`,
                children: (0, R.jsx)(p, {
                    className: `size-8`
                })
            })]
        })]
    }) : (0, R.jsxs)(`div`, {
        className: `absolute start-[14.72%] end-[14.72%] top-[16.67%] bottom-[16.67%] flex flex-col rounded-[40px] bg-white px-7 pt-7 pb-5 text-[#0f0f0f] shadow-[0_7px_27px_rgba(0,0,0,0.05)]`,
        "data-testid": `conversation-share-og-image-card`,
        children: [(0, R.jsx)(`div`, {
            className: `flex flex-1 items-start`,
            "data-testid": `conversation-share-og-image-text-container`,
            children: (0, R.jsxs)(`div`, {
                className: `relative w-full overflow-hidden`,
                "data-testid": `conversation-share-og-image-text-viewport`,
                style: {
                    height: B
                },
                children: [(0, R.jsx)(`div`, {
                    className: `max-w-[90%] text-start text-[28px] leading-[1.25] font-medium tracking-[-0.72px] break-words whitespace-pre-line`,
                    "data-testid": `conversation-share-og-image-text`,
                    children: f
                }), (0, R.jsx)(`div`, {
                    "aria-hidden": `true`,
                    className: `pointer-events-none absolute inset-x-0 bottom-0 h-[90px] bg-gradient-to-b from-transparent to-white`,
                    "data-testid": `conversation-share-og-image-text-fade`
                })]
            })
        }), (0, R.jsxs)(`div`, {
            className: `mt-3 flex shrink-0 items-end justify-between text-[#0f0f0f]`,
            children: [(0, R.jsx)(`div`, {
                className: `h-[18px] w-[83px]`,
                "data-testid": `conversation-share-og-image-wordmark`,
                children: (0, R.jsx)(d, {
                    className: `h-full w-full`
                })
            }), (0, R.jsx)(`div`, {
                className: `size-[26px]`,
                "data-testid": `conversation-share-og-image-openai-logo`,
                children: (0, R.jsx)(a, {
                    className: `size-full`
                })
            })]
        })]
    }), t[19] = f, t[20] = h, t[21] = g, t[22] = o, t[23] = O, t[24] = W) : W = t[24];
    let G;
    return t[25] !== U || t[26] !== W || t[27] !== V || t[28] !== H ? (G = (0, R.jsxs)(`div`, {
        className: V,
        ...H,
        "data-testid": `sharing-post-unfurl-view`,
        children: [U, W]
    }), t[25] = U, t[26] = W, t[27] = V, t[28] = H, t[29] = G) : G = t[29], G
}

function F() {}
var I, L, R, z, B, V = e((() => {
    I = c(), r(), f(), m(), l(), i(), L = t(s()), C(), M(), R = o(), z = {
        multicolor: j.src,
        blue: S.src
    }, B = 140 * 1.25
}));
export {
    V as n, P as t
};
//# sourceMappingURL=818c82ea-h2wkioe96y8r3nxh.js.map